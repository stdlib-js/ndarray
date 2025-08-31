/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

#ifndef STDLIB_NDARRAY_BASE_COUNT_TRUTHY_MACROS_5D_H
#define STDLIB_NDARRAY_BASE_COUNT_TRUTHY_MACROS_5D_H

#include "stdlib/ndarray/ctor.h"
#include "stdlib/ndarray/orders.h"
#include <stdint.h>

/**
* Macro containing the preamble for nested loops which operate on elements of a five-dimensional ndarray.
*
* ## Notes
*
* -   Variable naming conventions:
*
*     -   `sx#`, `px#`, and `d@x#` where `#` corresponds to the ndarray argument number, starting at `1`.
*     -   `S@`, `i@`, and `d@x#` where `@` corresponds to the loop number, with `0` being the innermost loop.
*
* @example
* #include <stdint.h>
*
* STDLIB_NDARRAY_COUNT_TRUTHY_5D_LOOP_PREMABLE {
*     // Innermost loop body...
* }
* STDLIB_NDARRAY_COUNT_TRUTHY_5D_LOOP_EPILOGUE( int32_t )
*/
#define STDLIB_NDARRAY_COUNT_TRUTHY_5D_LOOP_PREAMBLE                           \
	const struct ndarray *x1 = arrays[ 0 ];                                    \
	const struct ndarray *x2 = arrays[ 1 ];                                    \
	const int64_t *shape = stdlib_ndarray_shape( x1 );                         \
	const int64_t *sx1 = stdlib_ndarray_strides( x1 );                         \
	uint8_t *px1 = stdlib_ndarray_data( x1 );                                  \
	uint8_t *px2 = stdlib_ndarray_data( x2 );                                  \
	int64_t count;                                                             \
	int64_t d0x1;                                                              \
	int64_t d1x1;                                                              \
	int64_t d2x1;                                                              \
	int64_t d3x1;                                                              \
	int64_t d4x1;                                                              \
	int64_t S0;                                                                \
	int64_t S1;                                                                \
	int64_t S2;                                                                \
	int64_t S3;                                                                \
	int64_t S4;                                                                \
	int64_t i0;                                                                \
	int64_t i1;                                                                \
	int64_t i2;                                                                \
	int64_t i3;                                                                \
	int64_t i4;                                                                \
	/* Extract loop variables for purposes of loop interchange: dimensions and loop offset (pointer) increments... */ \
	if ( stdlib_ndarray_order( x1 ) == STDLIB_NDARRAY_ROW_MAJOR ) {            \
		/* For row-major ndarrays, the last dimensions have the fastest changing indices... */ \
		S0 = shape[ 4 ];                                                       \
		S1 = shape[ 3 ];                                                       \
		S2 = shape[ 2 ];                                                       \
		S3 = shape[ 1 ];                                                       \
		S4 = shape[ 0 ];                                                       \
		d0x1 = sx1[ 4 ];                                                       \
		d1x1 = sx1[ 3 ] - ( S0*sx1[4] );                                       \
		d2x1 = sx1[ 2 ] - ( S1*sx1[3] );                                       \
		d3x1 = sx1[ 1 ] - ( S2*sx1[2] );                                       \
		d4x1 = sx1[ 0 ] - ( S3*sx1[1] );                                       \
	} else {                                                                   \
		/* For column-major ndarrays, the first dimensions have the fastest changing indices... */ \
		S0 = shape[ 0 ];                                                       \
		S1 = shape[ 1 ];                                                       \
		S2 = shape[ 2 ];                                                       \
		S3 = shape[ 3 ];                                                       \
		S4 = shape[ 4 ];                                                       \
		d0x1 = sx1[ 0 ];                                                       \
		d1x1 = sx1[ 1 ] - ( S0*sx1[0] );                                       \
		d2x1 = sx1[ 2 ] - ( S1*sx1[1] );                                       \
		d3x1 = sx1[ 3 ] - ( S2*sx1[2] );                                       \
		d4x1 = sx1[ 4 ] - ( S3*sx1[3] );                                       \
	}                                                                          \
	/* Set a pointer to the first indexed elements... */                       \
	px1 += stdlib_ndarray_offset( x1 );                                        \
	px2 += stdlib_ndarray_offset( x2 );                                        \
	/* Initialize a counter... */                                              \
	count = 0;                                                                 \
	/* Iterate over the ndarray dimensions... */                               \
	for ( i4 = 0; i4 < S4; i4++, px1 += d4x1 ) {                               \
		for ( i3 = 0; i3 < S3; i3++, px1 += d3x1 ) {                           \
			for ( i2 = 0; i2 < S2; i2++, px1 += d2x1 ) {                       \
				for ( i1 = 0; i1 < S1; i1++, px1 += d1x1 ) {                   \
					for ( i0 = 0; i0 < S0; i0++, px1 += d0x1 )

/**
* Macro containing the epilogue for nested loops which operate on elements of a five-dimensional ndarray.
*
* @param tout   output type
*
* @example
* #include <stdint.h>
*
* STDLIB_NDARRAY_COUNT_TRUTHY_5D_LOOP_PREMABLE {
*     // Innermost loop body...
* }
* STDLIB_NDARRAY_COUNT_TRUTHY_5D_LOOP_EPILOGUE( int32_t )
*/
#define STDLIB_NDARRAY_COUNT_TRUTHY_5D_LOOP_EPILOGUE( tout )                   \
				}                                                              \
			}                                                                  \
		}                                                                      \
	}                                                                          \
	*px2 = (tout)count;

/**
* Macro for a five-dimensional ndarray loop which inlines an expression.
*
* ## Notes
*
* -   Retrieves each input ndarray element according to type `tin` via the pointer `px1` as `in1`.
* -   Expects a provided expression to operate on `tin in1`.
* -   Stores the final result in an output ndarray of type `tout` via the pointer `px2`.
*
* @param tin   input type
* @param tout  output type
* @param expr  expression to inline
*
* @example
* #include <stdint.h>
*
* STDLIB_NDARRAY_COUNT_TRUTHY_5D_LOOP_INLINE( double, int32_t, in1 )
*/
#define STDLIB_NDARRAY_COUNT_TRUTHY_5D_LOOP_INLINE( tin, tout, expr )          \
	STDLIB_NDARRAY_COUNT_TRUTHY_5D_LOOP_PREAMBLE {                             \
		const tin in1 = *(tin *)px1;                                           \
		if ( expr ) {                                                          \
			count += 1;                                                        \
		}                                                                      \
	}                                                                          \
	STDLIB_NDARRAY_COUNT_TRUTHY_5D_LOOP_EPILOGUE( tout )

#endif // !STDLIB_NDARRAY_BASE_COUNT_TRUTHY_MACROS_5D_H
