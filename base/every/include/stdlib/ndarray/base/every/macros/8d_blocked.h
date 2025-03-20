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

#ifndef STDLIB_NDARRAY_BASE_EVERY_MACROS_8D_BLOCKED_H
#define STDLIB_NDARRAY_BASE_EVERY_MACROS_8D_BLOCKED_H

#include "stdlib/ndarray/base/nullary/macros/constants.h"
#include "stdlib/ndarray/base/nullary/internal/permute.h"
#include "stdlib/ndarray/base/nullary/internal/range.h"
#include "stdlib/ndarray/base/nullary/internal/sort2ins.h"
#include "stdlib/ndarray/base/bytes_per_element.h"
#include "stdlib/ndarray/ctor.h"
#include <stdbool.h>
#include <stdint.h>
#include <string.h>

/**
* Macro containing the preamble for blocked nested loops which operate on elements of an eight-dimensional ndarray.
*
* ## Notes
*
* -   Variable naming conventions:
*
*     -   `sx#`, `pbx#`, `px#`, `ox#`, `nbx#`, and `d@x#` where `#` corresponds to the ndarray argument number, starting at `1`.
*     -   `S@`, `i@`, `j@`, `o@x#`, and `d@x#` where `@` corresponds to the loop number, with `0` being the innermost loop.
*
* @example
* STDLIB_NDARRAY_EVERY_8D_BLOCKED_LOOP_PREMABLE {
*     // Innermost loop body...
* }
* STDLIB_NDARRAY_EVERY_8D_BLOCKED_LOOP_EPILOGUE
*/
#define STDLIB_NDARRAY_EVERY_8D_BLOCKED_LOOP_PREAMBLE                          \
	const struct ndarray *x1 = arrays[ 0 ];                                    \
	const struct ndarray *x2 = arrays[ 1 ];                                    \
	bool *px2 = stdlib_ndarray_data( x2 );                                     \
	int64_t shape[8];                                                          \
	int64_t sx1[8];                                                            \
	int64_t idx[8];                                                            \
	int64_t tmp[8];                                                            \
	int64_t bsize;                                                             \
	uint8_t *pbx1;                                                             \
	uint8_t *px1;                                                              \
	int64_t d0x1;                                                              \
	int64_t d1x1;                                                              \
	int64_t d2x1;                                                              \
	int64_t d3x1;                                                              \
	int64_t d4x1;                                                              \
	int64_t d5x1;                                                              \
	int64_t d6x1;                                                              \
	int64_t d7x1;                                                              \
	int64_t o1x1;                                                              \
	int64_t o2x1;                                                              \
	int64_t o3x1;                                                              \
	int64_t o4x1;                                                              \
	int64_t o5x1;                                                              \
	int64_t o6x1;                                                              \
	int64_t o7x1;                                                              \
	int64_t nbx1;                                                              \
	int64_t ox1;                                                               \
	int64_t s0;                                                                \
	int64_t s1;                                                                \
	int64_t s2;                                                                \
	int64_t s3;                                                                \
	int64_t s4;                                                                \
	int64_t s5;                                                                \
	int64_t s6;                                                                \
	int64_t s7;                                                                \
	int64_t i0;                                                                \
	int64_t i1;                                                                \
	int64_t i2;                                                                \
	int64_t i3;                                                                \
	int64_t i4;                                                                \
	int64_t i5;                                                                \
	int64_t i6;                                                                \
	int64_t i7;                                                                \
	int64_t j0;                                                                \
	int64_t j1;                                                                \
	int64_t j2;                                                                \
	int64_t j3;                                                                \
	int64_t j4;                                                                \
	int64_t j5;                                                                \
	int64_t j6;                                                                \
	int64_t j7;                                                                \
	/* Copy strides to prevent mutation to the original ndarray: */            \
	memcpy( sx1, stdlib_ndarray_strides( x1 ), sizeof sx1 );                   \
	/* Create a loop interchange index array for loop order permutation: */    \
	stdlib_ndarray_base_nullary_internal_range( 8, idx );                      \
	/* Sort the input array strides in increasing order (of magnitude): */     \
	stdlib_ndarray_base_nullary_internal_sort2ins( 8, sx1, idx );              \
	/* Permute the shape (avoiding mutation) according to loop order: */       \
	stdlib_ndarray_base_nullary_internal_permute( 8, stdlib_ndarray_shape( x1 ), idx, tmp ); \
	memcpy( shape, tmp, sizeof shape );                                        \
	/* Determine the block size... */                                          \
	nbx1 = stdlib_ndarray_bytes_per_element( stdlib_ndarray_dtype( x1 ) );     \
	if ( nbx1 == 0 ) {                                                         \
		bsize = STDLIB_NDARRAY_EVERY_BLOCK_SIZE_IN_ELEMENTS;                   \
	} else {                                                                   \
		bsize = STDLIB_NDARRAY_EVERY_BLOCK_SIZE_IN_BYTES / nbx1;               \
	}                                                                          \
	/* Cache a pointer to the ndarray buffer... */                             \
	pbx1 = stdlib_ndarray_data( x1 );                                          \
	/* Cache a byte offset to the first indexed element... */                  \
	ox1 = stdlib_ndarray_offset( x1 );                                         \
	/* Set a pointer to the first indexed element of the output ndarray... */  \
	px2 += stdlib_ndarray_offset( x2 );                                        \
	/* Cache the offset increment for the innermost loop... */                 \
	d0x1 = sx1[0];                                                             \
	/* Iterate over blocks... */                                               \
	for ( j7 = shape[7]; j7 > 0; ) {                                           \
		if ( j7 < bsize ) {                                                    \
			s7 = j7;                                                           \
			j7 = 0;                                                            \
		} else {                                                               \
			s7 = bsize;                                                        \
			j7 -= bsize;                                                       \
		}                                                                      \
		o7x1 = ox1 + ( j7*sx1[7] );                                            \
		for ( j6 = shape[6]; j6 > 0; ) {                                       \
			if ( j6 < bsize ) {                                                \
				s6 = j6;                                                       \
				j6 = 0;                                                        \
			} else {                                                           \
				s6 = bsize;                                                    \
				j6 -= bsize;                                                   \
			}                                                                  \
			d7x1 = sx1[7] - ( s6*sx1[6] );                                     \
			o6x1 = o7x1 + ( j6*sx1[6] );                                       \
			for ( j5 = shape[5]; j5 > 0; ) {                                   \
				if ( j5 < bsize ) {                                            \
					s5 = j5;                                                   \
					j5 = 0;                                                    \
				} else {                                                       \
					s5 = bsize;                                                \
					j5 -= bsize;                                               \
				}                                                              \
				d6x1 = sx1[6] - ( s5*sx1[5] );                                 \
				o5x1 = o6x1 + ( j5*sx1[5] );                                   \
				for ( j4 = shape[4]; j4 > 0; ) {                               \
					if ( j4 < bsize ) {                                        \
						s4 = j4;                                               \
						j4 = 0;                                                \
					} else {                                                   \
						s4 = bsize;                                            \
						j4 -= bsize;                                           \
					}                                                          \
					d5x1 = sx1[5] - ( s4*sx1[4] );                             \
					o4x1 = o5x1 + ( j4*sx1[4] );                               \
					for ( j3 = shape[3]; j3 > 0; ) {                           \
						if ( j3 < bsize ) {                                    \
							s3 = j3;                                           \
							j3 = 0;                                            \
						} else {                                               \
							s3 = bsize;                                        \
							j3 -= bsize;                                       \
						}                                                      \
						d4x1 = sx1[4] - ( s3*sx1[3] );                         \
						o3x1 = o4x1 + ( j3*sx1[3] );                           \
						for ( j2 = shape[2]; j2 > 0; ) {                       \
							if ( j2 < bsize ) {                                \
								s2 = j2;                                       \
								j2 = 0;                                        \
							} else {                                           \
								s2 = bsize;                                    \
								j2 -= bsize;                                   \
							}                                                  \
							d3x1 = sx1[3] - ( s2*sx1[2] );                     \
							o2x1 = o3x1 + ( j2*sx1[2] );                       \
							for ( j1 = shape[1]; j1 > 0; ) {                   \
								if ( j1 < bsize ) {                            \
									s1 = j1;                                   \
									j1 = 0;                                    \
								} else {                                       \
									s1 = bsize;                                \
									j1 -= bsize;                               \
								}                                              \
								d2x1 = sx1[2] - ( s1*sx1[1] );                 \
								o1x1 = o2x1 + ( j1*sx1[1] );                   \
								for ( j0 = shape[0]; j0 > 0; ) {               \
									if ( j0 < bsize ) {                        \
										s0 = j0;                               \
										j0 = 0;                                \
									} else {                                   \
										s0 = bsize;                            \
										j0 -= bsize;                           \
									}                                          \
									/* Compute a pointer to the first ndarray element in the current block... */ \
									px1 = pbx1 + o1x1 + ( j0*sx1[0] );         \
									/* Compute the loop offset increment... */ \
									d1x1 = sx1[1] - ( s0*sx1[0] );             \
									/* Iterate over the ndarray dimensions... */ \
									for ( i7 = 0; i7 < s7; i7++, px1 += d7x1 ) { \
										for ( i6 = 0; i6 < s6; i6++, px1 += d6x1 ) { \
											for ( i5 = 0; i5 < s5; i5++, px1 += d5x1 ) { \
												for ( i4 = 0; i4 < s4; i4++, px1 += d4x1 ) { \
													for ( i3 = 0; i3 < s3; i3++, px1 += d3x1 ) { \
														for ( i2 = 0; i2 < s2; i2++, px1 += d2x1 ) { \
															for ( i1 = 0; i1 < s1; i1++, px1 += d1x1 ) { \
																for ( i0 = 0; i0 < s0; i0++, px1 += d0x1 )

/**
* Macro containing the epilogue for blocked nested loops which operate on elements of an eight-dimensional ndarray.
*
* @example
* STDLIB_NDARRAY_EVERY_8D_BLOCKED_LOOP_PREMABLE {
*     // Innermost loop body...
* }
* STDLIB_NDARRAY_EVERY_8D_BLOCKED_LOOP_EPILOGUE
*/
#define STDLIB_NDARRAY_EVERY_8D_BLOCKED_LOOP_EPILOGUE                          \
															}                  \
														}                      \
													}                          \
												}                              \
											}                                  \
										}                                      \
									}                                          \
								}                                              \
							}                                                  \
						}                                                      \
					}                                                          \
				}                                                              \
			}                                                                  \
		}                                                                      \
	}                                                                          \
	*px2 = true;

/**
* Macro for a blocked eight-dimensional ndarray loop which inlines an expression.
*
* ## Notes
*
* -   Retrieves each input ndarray element according to type `tin` via the pointer `px1` as `in1`.
* -   Expects a provided expression to operate on `tin in1`.
* -   Stores the final result in an output ndarray via the pointer `px2`.
*
* @param tin   input type
* @param expr  expression to inline
*
* @example
* STDLIB_NDARRAY_EVERY_8D_BLOCKED_LOOP_INLINE( double, in1 )
*/
#define STDLIB_NDARRAY_EVERY_8D_BLOCKED_LOOP_INLINE( tin, expr )               \
	STDLIB_NDARRAY_EVERY_8D_BLOCKED_LOOP_PREAMBLE {                            \
		const tin in1 = *(tin *)px1;                                           \
		if ( !( expr ) ) {                                                     \
			*px2 = false;                                                      \
			return;                                                            \
		}                                                                      \
	}                                                                          \
	STDLIB_NDARRAY_EVERY_8D_BLOCKED_LOOP_EPILOGUE

/**
* Macro for a blocked eight-dimensional ndarray loop which invokes a callback.
*
* ## Notes
*
* -   Retrieves each ndarray element according to type `tin` via the pointer `px1`.
* -   Stores the final result in an output ndarray via the pointer `px2`.
*
* @param tin   input type
*
* @example
* // e.g., d_x
* STDLIB_NDARRAY_EVERY_8D_BLOCKED_LOOP_CLBK( double )
*/
#define STDLIB_NDARRAY_EVERY_8D_BLOCKED_LOOP_CLBK( tin )                       \
	STDLIB_NDARRAY_EVERY_8D_BLOCKED_LOOP_PREAMBLE {                            \
		const tin x = *(tin *)px1;                                             \
		if ( !( f( x ) ) ) {                                                   \
			*px2 = false;                                                      \
			return;                                                            \
		}                                                                      \
	}                                                                          \
	STDLIB_NDARRAY_EVERY_8D_BLOCKED_LOOP_EPILOGUE

/**
* Macro for a blocked eight-dimensional ndarray loop which invokes a callback requiring arguments be explicitly cast to a different type.
*
* ## Notes
*
* -   Retrieves each ndarray element according to type `tin` via the pointer `px1`.
* -   Explicitly casts each function argument to `fin`.
* -   Stores the final result in an output ndarray via the pointer `px2`.
*
* @param tin   input type
* @param fin   callback argument type
*
* @example
* // e.g., f_x_as_d_x
* STDLIB_NDARRAY_EVERY_8D_BLOCKED_LOOP_CLBK_ARG_CAST( float, double )
*/
#define STDLIB_NDARRAY_EVERY_8D_BLOCKED_LOOP_CLBK_ARG_CAST( tin, fin )         \
	STDLIB_NDARRAY_EVERY_8D_BLOCKED_LOOP_PREAMBLE {                            \
		const tin x = *(tin *)px1;                                             \
		if ( !( f( (fin)x ) ) ) {                                              \
			*px2 = false;                                                      \
			return;                                                            \
		}                                                                      \
	}                                                                          \
	STDLIB_NDARRAY_EVERY_8D_BLOCKED_LOOP_EPILOGUE

/**
* Macro for a blocked eight-dimensional ndarray loop which invokes a callback requiring arguments be cast to a different type via casting functions.
*
* ## Notes
*
* -   Retrieves each ndarray element according to type `tin` via a pointer `px1`.
* -   Explicitly casts each function argument via `cin`.
* -   Stores the final result in an output ndarray via the pointer `px2`.
*
* @param tin   input type
* @param cin   input casting function
*
* @example
* #include "stdlib/complex/float64/ctor.h"
*
* // e.g., f_x_as_z_x
* STDLIB_NDARRAY_EVERY_8D_BLOCKED_LOOP_CLBK_ARG_CAST_FCN( float, stdlib_complex128_from_float32 )
*/
#define STDLIB_NDARRAY_EVERY_8D_BLOCKED_LOOP_CLBK_ARG_CAST_FCN( tin, cin )     \
	STDLIB_NDARRAY_EVERY_8D_BLOCKED_LOOP_PREAMBLE {                            \
		const tin x = *(tin *)px1;                                             \
		if ( !( f( cin( x ) ) ) ) {                                            \
			*px2 = false;                                                      \
			return;                                                            \
		}                                                                      \
	}                                                                          \
	STDLIB_NDARRAY_EVERY_8D_BLOCKED_LOOP_EPILOGUE

#endif // !STDLIB_NDARRAY_BASE_EVERY_MACROS_8D_BLOCKED_H
