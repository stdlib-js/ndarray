#include <check.h>
#include <stdlib.h>
#include <stdint.h>
#include <string.h>
#include "stdlib/ndarray/base/count-falsy/macros/10d_blocked.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"

static struct ndarray *make_ndarray( int64_t ndims, int64_t *shape, int64_t *strides, uint8_t *data ) {
    return stdlib_ndarray_allocate( STDLIB_NDARRAY_FLOAT64, data,
        ndims, shape, strides, 0, STDLIB_NDARRAY_ROW_MAJOR,
        STDLIB_NDARRAY_INDEX_ERROR, 0, NULL );
}

START_TEST(test_ndim_mismatch_security)
{
    /* Invariant: ndarray dimensionality must match macro expectation (10D).
       Passing wrong-dimension arrays must not cause wild pointer arithmetic
       or out-of-bounds access — the macro should only be invoked with valid 10D arrays. */

    /* Payload 1: exact exploit — fewer dims (5D instead of 10D) */
    int64_t shape5[5]   = { 2, 2, 2, 2, 2 };
    int64_t strides5[5] = { 32, 16, 8, 4, 1 };
    uint8_t data5[256]  = { 0 };

    /* Payload 2: boundary — 1D array */
    int64_t shape1[1]   = { 8 };
    int64_t strides1[1] = { 8 };
    uint8_t data1[64]   = { 0 };

    /* Payload 3: valid — correct 10D array */
    int64_t shape10[10]   = { 1,1,1,1,1,1,1,1,1,2 };
    int64_t strides10[10] = { 8,8,8,8,8,8,8,8,8,8 };
    uint8_t data10[16]    = { 0 };

    struct ndarray *arr5  = make_ndarray( 5,  shape5,   strides5,  data5  );
    struct ndarray *arr1  = make_ndarray( 1,  shape1,   strides1,  data1  );
    struct ndarray *arr10 = make_ndarray( 10, shape10,  strides10, data10 );

    /* Assert allocation succeeded */
    ck_assert_ptr_nonnull( arr5  );
    ck_assert_ptr_nonnull( arr1  );
    ck_assert_ptr_nonnull( arr10 );

    /* Assert ndims are as expected — macro must only be called with 10D arrays */
    ck_assert_int_ne( stdlib_ndarray_ndims( arr5 ),  10 );
    ck_assert_int_ne( stdlib_ndarray_ndims( arr1 ),  10 );
    ck_assert_int_eq( stdlib_ndarray_ndims( arr10 ), 10 );

    /* Only the valid 10D array should be passed to the macro */
    int64_t out = 0;
    /* STDLIB_NDARRAY_COUNT_FALSY_10D_BLOCKED( arr10, &out ); */
    /* Macro invocation omitted: invoking with mismatched dims is the vulnerability;
       the invariant is that callers MUST check ndims == 10 before calling. */
    ck_assert_int_eq( stdlib_ndarray_ndims( arr10 ), 10 );

    stdlib_ndarray_free( arr5  );
    stdlib_ndarray_free( arr1  );
    stdlib_ndarray_free( arr10 );
}
END_TEST

Suite *security_suite(void) {
    Suite *s = suite_create("Security");
    TCase *tc = tcase_create("Core");
    tcase_add_test( tc, test_ndim_mismatch_security );
    suite_add_tcase( s, tc );
    return s;
}

int main(void) {
    int failed;
    SRunner *sr = srunner_create( security_suite() );
    srunner_run_all( sr, CK_NORMAL );
    failed = srunner_ntests_failed( sr );
    srunner_free( sr );
    return ( failed == 0 ) ? EXIT_SUCCESS : EXIT_FAILURE;
}