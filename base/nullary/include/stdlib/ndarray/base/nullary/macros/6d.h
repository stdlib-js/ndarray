/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

#ifndef STDLIB_NDARRAY_BASE_NULLARY_MACROS_6D_H
#define STDLIB_NDARRAY_BASE_NULLARY_MACROS_6D_H

#include "stdlib/ndarray/ctor.h"
#include "stdlib/ndarray/orders.h"
#include <stdint.h>

/**
* Macro containing the preamble for nested loops which operate on elements of a six-dimensional ndarray.
*
* ## Notes
*
* -   Variable naming conventions:
*
*     -   `sx#`, `px#`, and `d@x#` where `#` corresponds to the ndarray argument number, starting at `1`.
*     -   `S@`, `i@`, and `d@x#` where `@` corresponds to the loop number, with `0` being the innermost loop.
*
* @example
* STDLIB_NDARRAY_NULLARY_6D_LOOP_PREMABLE {
*     // Innermost loop body...
* }
* STDLIB_NDARRAY_NULLARY_6D_LOOP_EPILOGUE
*/
#define STDLIB_NDARRAY_NULLARY_6D_LOOP_PREAMBLE                                \
	const struct ndarray *x1 = arrays[ 0 ];                                    \
	const int64_t *shape = stdlib_ndarray_shape( x1 );                         \
	const int64_t *sx1 = stdlib_ndarray_strides( x1 );                         \
	uint8_t *px1 = stdlib_ndarray_data( x1 );                                  \
	int64_t d0x1;                                                              \
	int64_t d1x1;                                                              \
	int64_t d2x1;                                                              \
	int64_t d3x1;                                                              \
	int64_t d4x1;                                                              \
	int64_t d5x1;                                                              \
	int64_t S0;                                                                \
	int64_t S1;                                                                \
	int64_t S2;                                                                \
	int64_t S3;                                                                \
	int64_t S4;                                                                \
	int64_t S5;                                                                \
	int64_t i0;                                                                \
	int64_t i1;                                                                \
	int64_t i2;                                                                \
	int64_t i3;                                                                \
	int64_t i4;                                                                \
	int64_t i5;                                                                \
	/* Extract loop variables for purposes of loop interchange: dimensions and loop offset (pointer) increments... */ \
	if ( stdlib_ndarray_order( x1 ) == STDLIB_NDARRAY_ROW_MAJOR ) {            \
		/* For row-major ndarrays, the last dimensions have the fastest changing indices... */ \
		S0 = shape[ 5 ];                                                       \
		S1 = shape[ 4 ];                                                       \
		S2 = shape[ 3 ];                                                       \
		S3 = shape[ 2 ];                                                       \
		S4 = shape[ 1 ];                                                       \
		S5 = shape[ 0 ];                                                       \
		d0x1 = sx1[ 5 ];                                                       \
		d1x1 = sx1[ 4 ] - ( S0*sx1[5] );                                       \
		d2x1 = sx1[ 3 ] - ( S1*sx1[4] );                                       \
		d3x1 = sx1[ 2 ] - ( S2*sx1[3] );                                       \
		d4x1 = sx1[ 1 ] - ( S3*sx1[2] );                                       \
		d5x1 = sx1[ 0 ] - ( S4*sx1[1] );                                       \
	} else {                                                                   \
		/* For column-major ndarrays, the first dimensions have the fastest changing indices... */ \
		S0 = shape[ 0 ];                                                       \
		S1 = shape[ 1 ];                                                       \
		S2 = shape[ 2 ];                                                       \
		S3 = shape[ 3 ];                                                       \
		S4 = shape[ 4 ];                                                       \
		S5 = shape[ 5 ];                                                       \
		d0x1 = sx1[ 0 ];                                                       \
		d1x1 = sx1[ 1 ] - ( S0*sx1[0] );                                       \
		d2x1 = sx1[ 2 ] - ( S1*sx1[1] );                                       \
		d3x1 = sx1[ 3 ] - ( S2*sx1[2] );                                       \
		d4x1 = sx1[ 4 ] - ( S3*sx1[3] );                                       \
		d5x1 = sx1[ 5 ] - ( S4*sx1[4] );                                       \
	}                                                                          \
	/* Set a pointer to the first indexed element... */                        \
	px1 += stdlib_ndarray_offset( x1 );                                        \
	/* Iterate over the ndarray dimensions... */                               \
	for ( i5 = 0; i5 < S5; i5++, px1 += d5x1 ) {                               \
		for ( i4 = 0; i4 < S4; i4++, px1 += d4x1 ) {                           \
			for ( i3 = 0; i3 < S3; i3++, px1 += d3x1 ) {                       \
				for ( i2 = 0; i2 < S2; i2++, px1 += d2x1 ) {                   \
					for ( i1 = 0; i1 < S1; i1++, px1 += d1x1 ) {               \
						for ( i0 = 0; i0 < S0; i0++, px1 += d0x1 )

/**
* Macro containing the preamble for nested loops which update two output ndarrays.
*
* ## Notes
*
* -   Variable naming conventions:
*
*     -   `sx#`, `px#`, and `d@x#` where `#` corresponds to the ndarray argument number, starting at `1`.
*     -   `S@`, `i@`, and `d@x#` where `@` corresponds to the loop number, with `0` being the innermost loop.
*
* @example
* STDLIB_NDARRAY_NULLARY_6D_LOOP_TWO_OUT_PREMABLE {
*     // Innermost loop body...
* }
* STDLIB_NDARRAY_NULLARY_6D_LOOP_EPILOGUE
*/
#define STDLIB_NDARRAY_NULLARY_6D_LOOP_TWO_OUT_PREAMBLE                        \
	const struct ndarray *x1 = arrays[ 0 ];                                    \
	const struct ndarray *x2 = arrays[ 1 ];                                    \
	const int64_t *shape = stdlib_ndarray_shape( x1 );                         \
	const int64_t *sx1 = stdlib_ndarray_strides( x1 );                         \
	const int64_t *sx2 = stdlib_ndarray_strides( x2 );                         \
	uint8_t *px1 = stdlib_ndarray_data( x1 );                                  \
	uint8_t *px2 = stdlib_ndarray_data( x2 );                                  \
	int64_t d0x1;                                                              \
	int64_t d1x1;                                                              \
	int64_t d2x1;                                                              \
	int64_t d3x1;                                                              \
	int64_t d4x1;                                                              \
	int64_t d5x1;                                                              \
	int64_t d0x2;                                                              \
	int64_t d1x2;                                                              \
	int64_t d2x2;                                                              \
	int64_t d3x2;                                                              \
	int64_t d4x2;                                                              \
	int64_t d5x2;                                                              \
	int64_t S0;                                                                \
	int64_t S1;                                                                \
	int64_t S2;                                                                \
	int64_t S3;                                                                \
	int64_t S4;                                                                \
	int64_t S5;                                                                \
	int64_t i0;                                                                \
	int64_t i1;                                                                \
	int64_t i2;                                                                \
	int64_t i3;                                                                \
	int64_t i4;                                                                \
	int64_t i5;                                                                \
	/* Extract loop variables for purposes of loop interchange: dimensions and loop offset (pointer) increments... */ \
	if ( stdlib_ndarray_order( x1 ) == STDLIB_NDARRAY_ROW_MAJOR ) {            \
		/* For row-major ndarrays, the last dimensions have the fastest changing indices... */ \
		S0 = shape[ 5 ];                                                       \
		S1 = shape[ 4 ];                                                       \
		S2 = shape[ 3 ];                                                       \
		S3 = shape[ 2 ];                                                       \
		S4 = shape[ 1 ];                                                       \
		S5 = shape[ 0 ];                                                       \
		d0x1 = sx1[ 5 ];                                                       \
		d1x1 = sx1[ 4 ] - ( S0*sx1[5] );                                       \
		d2x1 = sx1[ 3 ] - ( S1*sx1[4] );                                       \
		d3x1 = sx1[ 2 ] - ( S2*sx1[3] );                                       \
		d4x1 = sx1[ 1 ] - ( S3*sx1[2] );                                       \
		d5x1 = sx1[ 0 ] - ( S4*sx1[1] );                                       \
		d0x2 = sx2[ 5 ];                                                       \
		d1x2 = sx2[ 4 ] - ( S0*sx2[5] );                                       \
		d2x2 = sx2[ 3 ] - ( S1*sx2[4] );                                       \
		d3x2 = sx2[ 2 ] - ( S2*sx2[3] );                                       \
		d4x2 = sx2[ 1 ] - ( S3*sx2[2] );                                       \
		d5x2 = sx2[ 0 ] - ( S4*sx2[1] );                                       \
	} else {                                                                   \
		/* For column-major ndarrays, the first dimensions have the fastest changing indices... */ \
		S0 = shape[ 0 ];                                                       \
		S1 = shape[ 1 ];                                                       \
		S2 = shape[ 2 ];                                                       \
		S3 = shape[ 3 ];                                                       \
		S4 = shape[ 4 ];                                                       \
		S5 = shape[ 5 ];                                                       \
		d0x1 = sx1[ 0 ];                                                       \
		d1x1 = sx1[ 1 ] - ( S0*sx1[0] );                                       \
		d2x1 = sx1[ 2 ] - ( S1*sx1[1] );                                       \
		d3x1 = sx1[ 3 ] - ( S2*sx1[2] );                                       \
		d4x1 = sx1[ 4 ] - ( S3*sx1[3] );                                       \
		d5x1 = sx1[ 5 ] - ( S4*sx1[4] );                                       \
		d0x2 = sx2[ 0 ];                                                       \
		d1x2 = sx2[ 1 ] - ( S0*sx2[0] );                                       \
		d2x2 = sx2[ 2 ] - ( S1*sx2[1] );                                       \
		d3x2 = sx2[ 3 ] - ( S2*sx2[2] );                                       \
		d4x2 = sx2[ 4 ] - ( S3*sx2[3] );                                       \
		d5x2 = sx2[ 5 ] - ( S4*sx2[4] );                                       \
	}                                                                          \
	/* Set the pointers to the first indexed elements... */                    \
	px1 += stdlib_ndarray_offset( x1 );                                        \
	px2 += stdlib_ndarray_offset( x2 );                                        \
	/* Iterate over the ndarray dimensions... */                               \
	for ( i5 = 0; i5 < S5; i5++, px1 += d5x1, px2 += d5x2 ) {                  \
		for ( i4 = 0; i4 < S4; i4++, px1 += d4x1, px2 += d4x2 ) {              \
			for ( i3 = 0; i3 < S3; i3++, px1 += d3x1, px2 += d3x2 ) {          \
				for ( i2 = 0; i2 < S2; i2++, px1 += d2x1, px2 += d2x2 ) {      \
					for ( i1 = 0; i1 < S1; i1++, px1 += d1x1, px2 += d1x2 ) {  \
						for ( i0 = 0; i0 < S0; i0++, px1 += d0x1, px2 += d0x2 )

/**
* Macro containing the epilogue for nested loops which operate on elements of a six-dimensional ndarray.
*
* @example
* STDLIB_NDARRAY_NULLARY_6D_LOOP_PREMABLE {
*     // Innermost loop body...
* }
* STDLIB_NDARRAY_NULLARY_6D_LOOP_EPILOGUE
*/
#define STDLIB_NDARRAY_NULLARY_6D_LOOP_EPILOGUE                                \
					}                                                          \
				}                                                              \
			}                                                                  \
		}                                                                      \
	}

/**
* Macro for a nullary six-dimensional ndarray loop which inlines an expression.
*
* ## Notes
*
* -   Creates a pointer `tout *out` to the output ndarray element.
* -   Expects a provided expression to store the result in `tout *out`.
*
* @param tout  output type
* @param expr  expression to inline
*
* @example
* STDLIB_NDARRAY_NULLARY_6D_LOOP_INLINE( double, *out = 10.0 )
*/
#define STDLIB_NDARRAY_NULLARY_6D_LOOP_INLINE( tout, expr )                    \
	STDLIB_NDARRAY_NULLARY_6D_LOOP_PREAMBLE {                                  \
		tout *out = (tout *)px1;                                               \
		expr;                                                                  \
	}                                                                          \
	STDLIB_NDARRAY_NULLARY_6D_LOOP_EPILOGUE

/**
* Macro for a nullary six-dimensional ndarray loop which invokes a callback.
*
* ## Notes
*
* -   Explicitly casts each function `f` invocation result to `tout`.
* -   Stores the result in an output ndarray via the pointer `px1`.
*
* @param tout  output type
*
* @example
* // e.g., d
* STDLIB_NDARRAY_NULLARY_6D_LOOP_CLBK( double )
*/
#define STDLIB_NDARRAY_NULLARY_6D_LOOP_CLBK( tout )                            \
	STDLIB_NDARRAY_NULLARY_6D_LOOP_PREAMBLE {                                  \
		*(tout *)px1 = (tout)f();                                              \
	}                                                                          \
	STDLIB_NDARRAY_NULLARY_6D_LOOP_EPILOGUE

/**
* Macro for a nullary six-dimensional loop which invokes a callback and does not cast the return callback's return value (e.g., a `struct`).
*
* ## Notes
*
* -   Stores the result in an output ndarray of type `tout` via the pointer `px1`.
*
* @param tout  output type
*
* @example
* #include "stdlib/complex/float64/ctor.h"
*
* // e.g., z
* STDLIB_NDARRAY_NULLARY_6D_LOOP_CLBK_RET_NOCAST( stdlib_complex128_t )
*/
#define STDLIB_NDARRAY_NULLARY_6D_LOOP_CLBK_RET_NOCAST( tout )                 \
	STDLIB_NDARRAY_NULLARY_6D_LOOP_PREAMBLE {                                  \
		*(tout *)px1 = f();                                                    \
	}                                                                          \
	STDLIB_NDARRAY_NULLARY_6D_LOOP_EPILOGUE

/**
* Macro for a nullary six-dimensional ndarray loop which invokes a callback whose return value must be cast to a different type via a casting function.
*
* ## Notes
*
* -   Explicitly casts each function `f` invocation result via `cout`.
* -   Stores the result in an output ndarray of type `tout` via the pointer `px1`.
*
* @param tout  output type
* @param cout  output casting function
*
* @example
* #include "stdlib/complex/float64/ctor.h"
*
* // e.g., z_as_d
* STDLIB_NDARRAY_NULLARY_6D_LOOP_CLBK_RET_CAST_FCN( stdlib_complex128_t, stdlib_complex128_from_float64 )
*/
#define STDLIB_NDARRAY_NULLARY_6D_LOOP_CLBK_RET_CAST_FCN( tout, cout )         \
	STDLIB_NDARRAY_NULLARY_6D_LOOP_PREAMBLE {                                  \
		*(tout *)px1 = cout( f() );                                            \
	}                                                                          \
	STDLIB_NDARRAY_NULLARY_6D_LOOP_EPILOGUE

#endif // !STDLIB_NDARRAY_BASE_NULLARY_MACROS_6D_H
