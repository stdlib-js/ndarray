/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

/* eslint-disable max-depth, max-len */

'use strict';

// MODULES //

var loopOrder = require( './../../../base/unary-loop-interchange-order' );
var blockSize = require( './../../../base/unary-tiling-block-size' );
var take = require( '@stdlib/array/base/take-indexed' );
var reverse = require( '@stdlib/array/base/reverse' );


// MAIN //

/**
* Applies a callback function to elements in a nine-dimensional input ndarray and assigns results to elements in an equivalently shaped output ndarray via loop blocking.
*
* @private
* @param {Object} x - object containing ndarray meta data
* @param {ndarrayLike} x.ref - reference to the original ndarray-like object
* @param {string} x.dtype - data type
* @param {Collection} x.data - data buffer
* @param {NonNegativeIntegerArray} x.shape - dimensions
* @param {IntegerArray} x.strides - stride lengths
* @param {NonNegativeInteger} x.offset - index offset
* @param {string} x.order - specifies whether `x` is row-major (C-style) or column-major (Fortran-style)
* @param {Object} y - object containing output ndarray meta data
* @param {string} y.dtype - data type
* @param {Collection} y.data - data buffer
* @param {NonNegativeIntegerArray} y.shape - dimensions
* @param {IntegerArray} y.strides - stride lengths
* @param {NonNegativeInteger} y.offset - index offset
* @param {string} y.order - specifies whether `y` is row-major (C-style) or column-major (Fortran-style)
* @param {Callback} fcn - callback function
* @param {*} thisArg - callback execution context
* @returns {void}
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* function scale( z ) {
*     return z * 10.0;
* }
*
* // Create data buffers:
* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var ybuf = new Float64Array( 6 );
*
* // Define the shape of the input and output arrays:
* var shape = [ 1, 1, 1, 1, 1, 1, 3, 1, 2 ];
*
* // Define the array strides:
* var sx = [ 12, 12, 12, 12, 12, 12, 4, 4, 1 ];
* var sy = [ 6, 6, 6, 6, 6, 6, 2, 2, 1 ];
*
* // Define the index offsets:
* var ox = 1;
* var oy = 0;
*
* // Create the input and output ndarray-like objects:
* var x = {
*     'ref': null,
*     'dtype': 'float64',
*     'data': xbuf,
*     'shape': shape,
*     'strides': sx,
*     'offset': ox,
*     'order': 'row-major'
* };
* var y = {
*     'dtype': 'float64',
*     'data': ybuf,
*     'shape': shape,
*     'strides': sy,
*     'offset': oy,
*     'order': 'row-major'
* };
*
* // Apply function:
* blockedmap9d( x, y, scale, {} );
*
* console.log( y.data );
* // => <Float64Array>[ 20.0, 30.0, 60.0, 70.0, 100.0, 110.0 ]
*/
function blockedmap9d( x, y, fcn, thisArg ) { // eslint-disable-line max-statements, max-lines-per-function
	var bsize;
	var xbuf;
	var ybuf;
	var dx0;
	var dx1;
	var dx2;
	var dx3;
	var dx4;
	var dx5;
	var dx6;
	var dx7;
	var dx8;
	var dy0;
	var dy1;
	var dy2;
	var dy3;
	var dy4;
	var dy5;
	var dy6;
	var dy7;
	var dy8;
	var ox1;
	var ox2;
	var ox3;
	var ox4;
	var ox5;
	var ox6;
	var ox7;
	var ox8;
	var oy1;
	var oy2;
	var oy3;
	var oy4;
	var oy5;
	var oy6;
	var oy7;
	var oy8;
	var idx;
	var sh;
	var S0;
	var S1;
	var S2;
	var S3;
	var S4;
	var S5;
	var S6;
	var S7;
	var S8;
	var sx;
	var sy;
	var ox;
	var oy;
	var ix;
	var iy;
	var i0;
	var i1;
	var i2;
	var i3;
	var i4;
	var i5;
	var i6;
	var i7;
	var i8;
	var j0;
	var j1;
	var j2;
	var j3;
	var j4;
	var j5;
	var j6;
	var j7;
	var j8;
	var o;

	// Note on variable naming convention: s#, dx#, dy#, i#, j# where # corresponds to the loop number, with `0` being the innermost loop...

	// Resolve the loop interchange order:
	o = loopOrder( x.shape, x.strides, y.strides );
	sh = o.sh;
	sx = o.sx;
	sy = o.sy;
	idx = reverse( o.idx );

	// Determine the block size:
	bsize = blockSize( x.dtype, y.dtype );

	// Cache the indices of the first indexed elements in the respective ndarrays...
	ox = x.offset;
	oy = y.offset;

	// Cache references to the input and output ndarray buffers...
	xbuf = x.data;
	ybuf = y.data;

	// Cache offset increments for the innermost loop...
	dx0 = sx[0];
	dy0 = sy[0];

	// Iterate over blocks...
	for ( j8 = sh[8]; j8 > 0; ) {
		if ( j8 < bsize ) {
			S8 = j8;
			j8 = 0;
		} else {
			S8 = bsize;
			j8 -= bsize;
		}
		ox8 = ox + ( j8*sx[8] );
		oy8 = oy + ( j8*sy[8] );
		for ( j7 = sh[7]; j7 > 0; ) {
			if ( j7 < bsize ) {
				S7 = j7;
				j7 = 0;
			} else {
				S7 = bsize;
				j7 -= bsize;
			}
			dx8 = sx[8] - ( S7*sx[7] );
			dy8 = sy[8] - ( S7*sy[7] );
			ox7 = ox8 + ( j7*sx[7] );
			oy7 = oy8 + ( j7*sy[7] );
			for ( j6 = sh[6]; j6 > 0; ) {
				if ( j6 < bsize ) {
					S6 = j6;
					j6 = 0;
				} else {
					S6 = bsize;
					j6 -= bsize;
				}
				dx7 = sx[7] - ( S6*sx[6] );
				dy7 = sy[7] - ( S6*sy[6] );
				ox6 = ox7 + ( j6*sx[6] );
				oy6 = oy7 + ( j6*sy[6] );
				for ( j5 = sh[5]; j5 > 0; ) {
					if ( j5 < bsize ) {
						S5 = j5;
						j5 = 0;
					} else {
						S5 = bsize;
						j5 -= bsize;
					}
					dx6 = sx[6] - ( S5*sx[5] );
					dy6 = sy[6] - ( S5*sy[5] );
					ox5 = ox6 + ( j5*sx[5] );
					oy5 = oy6 + ( j5*sy[5] );
					for ( j4 = sh[4]; j4 > 0; ) {
						if ( j4 < bsize ) {
							S4 = j4;
							j4 = 0;
						} else {
							S4 = bsize;
							j4 -= bsize;
						}
						dx5 = sx[5] - ( S4*sx[4] );
						dy5 = sy[5] - ( S4*sy[4] );
						ox4 = ox5 + ( j4*sx[4] );
						oy4 = oy5 + ( j4*sy[4] );
						for ( j3 = sh[3]; j3 > 0; ) {
							if ( j3 < bsize ) {
								S3 = j3;
								j3 = 0;
							} else {
								S3 = bsize;
								j3 -= bsize;
							}
							dx4 = sx[4] - ( S3*sx[3] );
							dy4 = sy[4] - ( S3*sy[3] );
							ox3 = ox4 + ( j3*sx[3] );
							oy3 = oy4 + ( j3*sy[3] );
							for ( j2 = sh[2]; j2 > 0; ) {
								if ( j2 < bsize ) {
									S2 = j2;
									j2 = 0;
								} else {
									S2 = bsize;
									j2 -= bsize;
								}
								dx3 = sx[3] - ( S2*sx[2] );
								dy3 = sy[3] - ( S2*sy[2] );
								ox2 = ox3 + ( j2*sx[2] );
								oy2 = oy3 + ( j2*sy[2] );
								for ( j1 = sh[1]; j1 > 0; ) {
									if ( j1 < bsize ) {
										S1 = j1;
										j1 = 0;
									} else {
										S1 = bsize;
										j1 -= bsize;
									}
									dx2 = sx[2] - ( S1*sx[1] );
									dy2 = sy[2] - ( S1*sy[1] );
									ox1 = ox2 + ( j1*sx[1] );
									oy1 = oy2 + ( j1*sy[1] );
									for ( j0 = sh[0]; j0 > 0; ) {
										if ( j0 < bsize ) {
											S0 = j0;
											j0 = 0;
										} else {
											S0 = bsize;
											j0 -= bsize;
										}
										// Compute index offsets for the first input and output ndarray elements in the current block...
										ix = ox1 + ( j0*sx[0] );
										iy = oy1 + ( j0*sy[0] );

										// Compute loop offset increments...
										dx1 = sx[1] - ( S0*sx[0] );
										dy1 = sy[1] - ( S0*sy[0] );

										// Iterate over the ndarray dimensions...
										for ( i8 = 0; i8 < S8; i8++ ) {
											for ( i7 = 0; i7 < S7; i7++ ) {
												for ( i6 = 0; i6 < S6; i6++ ) {
													for ( i5 = 0; i5 < S5; i5++ ) {
														for ( i4 = 0; i4 < S4; i4++ ) {
															for ( i3 = 0; i3 < S3; i3++ ) {
																for ( i2 = 0; i2 < S2; i2++ ) {
																	for ( i1 = 0; i1 < S1; i1++ ) {
																		for ( i0 = 0; i0 < S0; i0++ ) {
																			ybuf[ iy ] = fcn.call( thisArg, xbuf[ ix ], take( [ j8+i8, j7+i7, j6+i6, j5+i5, j4+i4, j3+i3, j2+i2, j1+i1, j0+i0 ], idx ), x.ref );
																			ix += dx0;
																			iy += dy0;
																		}
																		ix += dx1;
																		iy += dy1;
																	}
																	ix += dx2;
																	iy += dy2;
																}
																ix += dx3;
																iy += dy3;
															}
															ix += dx4;
															iy += dy4;
														}
														ix += dx5;
														iy += dy5;
													}
													ix += dx6;
													iy += dy6;
												}
												ix += dx7;
												iy += dy7;
											}
											ix += dx8;
											iy += dy8;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}


// EXPORTS //

module.exports = blockedmap9d;
