/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

#ifndef STDLIB_NDARRAY_BASE_UNARY_MACROS_1D_H
#define STDLIB_NDARRAY_BASE_UNARY_MACROS_1D_H

#include "stdlib/ndarray/ctor.h"
#include <stdint.h>

/**
* Macro containing the preamble for a loop which operates on elements of a one-dimensional ndarray.
*
* ## Notes
*
* -   Variable naming conventions:
*
*     -   `sx#`, `px#`, and `d@x#` where `#` corresponds to the ndarray argument number, starting at `1`.
*     -   `S@`, `i@`, and `d@x#` where `@` corresponds to the loop number, with `0` being the innermost loop.
*
* @example
* STDLIB_NDARRAY_UNARY_1D_LOOP_PREMABLE {
*     // Innermost loop body...
* }
* STDLIB_NDARRAY_UNARY_1D_LOOP_EPILOGUE
*/
#define STDLIB_NDARRAY_UNARY_1D_LOOP_PREAMBLE                                  \
	const struct ndarray *x1 = arrays[ 0 ];                                    \
	const struct ndarray *x2 = arrays[ 1 ];                                    \
	const int64_t *shape = stdlib_ndarray_shape( x1 );                         \
	const int64_t *sx1 = stdlib_ndarray_strides( x1 );                         \
	const int64_t *sx2 = stdlib_ndarray_strides( x2 );                         \
	uint8_t *px1 = stdlib_ndarray_data( x1 );                                  \
	uint8_t *px2 = stdlib_ndarray_data( x2 );                                  \
	int64_t d0x1;                                                              \
	int64_t d0x2;                                                              \
	int64_t S0;                                                                \
	int64_t i0;                                                                \
	/* Extract loop variables: dimensions and loop offset (pointer) increments... */ \
	S0 = shape[ 0 ];                                                           \
	d0x1 = sx1[ 0 ];                                                           \
	d0x2 = sx2[ 0 ];                                                           \
	/* Set the pointers to the first indexed elements... */                    \
	px1 += stdlib_ndarray_offset( x1 );                                        \
	px2 += stdlib_ndarray_offset( x2 );                                        \
	/* Iterate over the ndarray dimensions... */                               \
	for ( i0 = 0; i0 < S0; i0++, px1 += d0x1, px2 += d0x2 )

/**
* Macro containing the preamble for a loop which operates on elements of a one-dimensional input ndarray and updates two output ndarrays.
*
* ## Notes
*
* -   Variable naming conventions:
*
*     -   `sx#`, `px#`, and `d@x#` where `#` corresponds to the ndarray argument number, starting at `1`.
*     -   `S@`, `i@`, and `d@x#` where `@` corresponds to the loop number, with `0` being the innermost loop.
*
* @example
* STDLIB_NDARRAY_UNARY_1D_LOOP_TWO_OUT_PREMABLE {
*     // Innermost loop body...
* }
* STDLIB_NDARRAY_UNARY_1D_LOOP_EPILOGUE
*/
#define STDLIB_NDARRAY_UNARY_1D_LOOP_TWO_OUT_PREAMBLE                          \
	const struct ndarray *x1 = arrays[ 0 ];                                    \
	const struct ndarray *x2 = arrays[ 1 ];                                    \
	const struct ndarray *x3 = arrays[ 2 ];                                    \
	const int64_t *shape = stdlib_ndarray_shape( x1 );                         \
	const int64_t *sx1 = stdlib_ndarray_strides( x1 );                         \
	const int64_t *sx2 = stdlib_ndarray_strides( x2 );                         \
	const int64_t *sx3 = stdlib_ndarray_strides( x3 );                         \
	uint8_t *px1 = stdlib_ndarray_data( x1 );                                  \
	uint8_t *px2 = stdlib_ndarray_data( x2 );                                  \
	uint8_t *px3 = stdlib_ndarray_data( x3 );                                  \
	int64_t d0x1;                                                              \
	int64_t d0x2;                                                              \
	int64_t d0x3;                                                              \
	int64_t S0;                                                                \
	int64_t i0;                                                                \
	/* Extract loop variable: dimensions and loop offset (pointer) increments... */ \
	S0 = shape[ 0 ];                                                           \
	d0x1 = sx1[ 0 ];                                                           \
	d0x2 = sx2[ 0 ];                                                           \
	d0x3 = sx3[ 0 ];                                                           \
	/* Set the pointers to the first indexed elements... */                    \
	px1 += stdlib_ndarray_offset( x1 );                                        \
	px2 += stdlib_ndarray_offset( x2 );                                        \
	px3 += stdlib_ndarray_offset( x3 );                                        \
	/* Iterate over the ndarray dimensions... */                               \
	for ( i0 = 0; i0 < S0; i0++, px1 += d0x1, px2 += d0x2, px3 += d0x3 )

/**
* Macro containing the epilogue for loops which operate on elements of a one-dimensional ndarray.
*
* @example
* STDLIB_NDARRAY_UNARY_1D_LOOP_PREMABLE {
*     // Innermost loop body...
* }
* STDLIB_NDARRAY_UNARY_1D_LOOP_EPILOGUE
*/
#define STDLIB_NDARRAY_UNARY_1D_LOOP_EPILOGUE

/**
* Macro for a unary one-dimensional ndarray loop which inlines an expression.
*
* ## Notes
*
* -   Retrieves each ndarray element according to type `tin` via the pointer `px1` as `in1`.
* -   Creates a pointer `tout *out` to the output ndarray element.
* -   Expects a provided expression to operate on `tin in1` and to store the result in `tout *out`.
*
* @param tin   input type
* @param tout  output type
* @param expr  expression to inline
*
* @example
* STDLIB_NDARRAY_UNARY_1D_LOOP_INLINE( double, double, *out = in1 * in1 )
*/
#define STDLIB_NDARRAY_UNARY_1D_LOOP_INLINE( tin, tout, expr )                 \
	STDLIB_NDARRAY_UNARY_1D_LOOP_PREAMBLE {                                    \
		const tin in1 = *(tin *)px1;                                           \
		tout *out = (tout *)px2;                                               \
		expr;                                                                  \
	}                                                                          \
	STDLIB_NDARRAY_UNARY_1D_LOOP_EPILOGUE

/**
* Macro for a unary one-dimensional ndarray loop which invokes a callback.
*
* ## Notes
*
* -   Retrieves each ndarray element according to type `tin` via the pointer `px1`.
* -   Explicitly casts each function `f` invocation result to `tout`.
* -   Stores the result in an output ndarray via the pointer `px2`.
*
* @param tin   input type
* @param tout  output type
*
* @example
* // e.g., d_d
* STDLIB_NDARRAY_UNARY_1D_LOOP_CLBK( double, double )
*/
#define STDLIB_NDARRAY_UNARY_1D_LOOP_CLBK( tin, tout )                         \
	STDLIB_NDARRAY_UNARY_1D_LOOP_PREAMBLE {                                    \
		const tin x = *(tin *)px1;                                             \
		*(tout *)px2 = (tout)f( x );                                           \
	}                                                                          \
	STDLIB_NDARRAY_UNARY_1D_LOOP_EPILOGUE

/**
* Macro for a unary one-dimensional loop which invokes a callback and does not cast the return callback's return value (e.g., a `struct`).
*
* ## Notes
*
* -   Retrieves each ndarray element according to type `tin` via a pointer `px1`.
* -   Stores the result in an output ndarray of type `tout` via the pointer `px2`.
*
* @param tin   input type
* @param tout  output type
*
* @example
* #include "stdlib/complex/float64/ctor.h"
*
* // e.g., z_z
* STDLIB_NDARRAY_UNARY_1D_LOOP_CLBK_RET_NOCAST( stdlib_complex128_t, stdlib_complex128_t )
*/
#define STDLIB_NDARRAY_UNARY_1D_LOOP_CLBK_RET_NOCAST( tin, tout )              \
	STDLIB_NDARRAY_UNARY_1D_LOOP_PREAMBLE {                                    \
		const tin x = *(tin *)px1;                                             \
		*(tout *)px2 = f( x );                                                 \
	}                                                                          \
	STDLIB_NDARRAY_UNARY_1D_LOOP_EPILOGUE

/**
* Macro for a unary one-dimensional ndarray loop which invokes a callback requiring arguments be explicitly cast to a different type.
*
* ## Notes
*
* -   Retrieves each ndarray element according to type `tin` via the pointer `px1`.
* -   Explicitly casts each function argument to `fin`.
* -   Explicitly casts each function `f` invocation result to `tout`.
* -   Stores the result in an output ndarray via the pointer `px2`.
*
* @param tin   input type
* @param tout  output type
* @param fin   callback argument type
*
* @example
* // e.g., f_f_as_d_d
* STDLIB_NDARRAY_UNARY_1D_LOOP_CLBK_ARG_CAST( float, float, double )
*/
#define STDLIB_NDARRAY_UNARY_1D_LOOP_CLBK_ARG_CAST( tin, tout, fin )           \
	STDLIB_NDARRAY_UNARY_1D_LOOP_PREAMBLE {                                    \
		const tin x = *(tin *)px1;                                             \
		*(tout *)px2 = (tout)f( (fin)x );                                      \
	}                                                                          \
	STDLIB_NDARRAY_UNARY_1D_LOOP_EPILOGUE

/**
* Macro for a unary one-dimensional ndarray loop which invokes a callback requiring arguments be cast to a different type via casting functions.
*
* ## Notes
*
* -   Retrieves each ndarray element according to type `tin` via a pointer `px1`.
* -   Explicitly casts each function argument via `cin`.
* -   Explicitly casts each function `f` invocation result via `cout`.
* -   Stores the result in an output ndarray of type `tout` via the pointer `px2`.
*
* @param tin   input type
* @param tout  output type
* @param cin   input casting function
* @param cout  output casting function
*
* @example
* #include "stdlib/complex/float32/ctor.h"
* #include "stdlib/complex/float64/ctor.h"
*
* // e.g., f_c_as_z_z
* STDLIB_NDARRAY_UNARY_1D_LOOP_CLBK_ARG_CAST_FCN( float, stdlib_complex64_t, stdlib_complex128_from_float32, stdlib_complex128_to_complex64 )
*/
#define STDLIB_NDARRAY_UNARY_1D_LOOP_CLBK_ARG_CAST_FCN( tin, tout, cin, cout ) \
	STDLIB_NDARRAY_UNARY_1D_LOOP_PREAMBLE {                                    \
		const tin x = *(tin *)px1;                                             \
		*(tout *)px2 = cout( f( cin( x ) ) );                                  \
	}                                                                          \
	STDLIB_NDARRAY_UNARY_1D_LOOP_EPILOGUE

/**
* Macro for a unary one-dimensional ndarray loop which invokes a callback whose return value must be cast to a different type via a casting function.
*
* ## Notes
*
* -   Retrieves each ndarray element according to type `tin` via a pointer `px1`.
* -   Explicitly casts each function `f` invocation result via `cout`.
* -   Stores the result in an output ndarray of type `tout` via the pointer `px2`.
*
* @param tin   input type
* @param tout  output type
* @param cout  output casting function
*
* @example
* #include "stdlib/complex/float64/ctor.h"
*
* // e.g., d_z
* STDLIB_NDARRAY_UNARY_1D_LOOP_CLBK_RET_CAST_FCN( double, stdlib_complex128_t, stdlib_complex128_from_float64 )
*/
#define STDLIB_NDARRAY_UNARY_1D_LOOP_CLBK_RET_CAST_FCN( tin, tout, cout )      \
	STDLIB_NDARRAY_UNARY_1D_LOOP_PREAMBLE {                                    \
		const tin x = *(tin *)px1;                                             \
		*(tout *)px2 = cout( f( x ) );                                         \
	}                                                                          \
	STDLIB_NDARRAY_UNARY_1D_LOOP_EPILOGUE

/**
* Macro for operating on elements of a one-dimensional ndarray using a unary strided array function.
*
* @param strided_array_fcn   strided array function

* @example
* #include "stdlib/strided/base/unary.h"
*
* STDLIB_NDARRAY_UNARY_1D_VIA_STRIDED( stdlib_strided_b_b )
*/
#define STDLIB_NDARRAY_UNARY_1D_VIA_STRIDED( strided_array_fcn )               \
	struct ndarray *x1 = arrays[ 0 ];                                          \
	struct ndarray *x2 = arrays[ 1 ];                                          \
	int64_t shape[] = {                                                        \
		stdlib_ndarray_dimension( x1, 0 )                                      \
	};                                                                         \
	int64_t strides[] = {                                                      \
		stdlib_ndarray_stride( x1, 0 ),                                        \
		stdlib_ndarray_stride( x2, 0 )                                         \
	};                                                                         \
	/* Set pointers to the first indexed element in the ndarray view: */       \
	uint8_t *strided_arrays[] = {                                              \
		stdlib_ndarray_data( x1 ) + stdlib_ndarray_offset( x1 ),               \
		stdlib_ndarray_data( x2 ) + stdlib_ndarray_offset( x2 )                \
	};                                                                         \
	/* For negative strides, we need to adjust the pointers to the last indexed element, as strided implementations expect data pointers to point to where the data buffer begins in memory... */ \
	if ( strides[ 0 ] < 0 ) {                                                  \
		strided_arrays[ 0 ] += strides[ 0 ] * shape[ 0 ];                      \
	}                                                                          \
	if ( strides[ 1 ] < 0 ) {                                                  \
		strided_arrays[ 1 ] += strides[ 1 ] * shape[ 0 ];                      \
	}                                                                          \
	strided_array_fcn( strided_arrays, shape, strides, fcn );

#endif // !STDLIB_NDARRAY_BASE_UNARY_MACROS_1D_H
