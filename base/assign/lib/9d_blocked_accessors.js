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

/* eslint-disable max-depth, max-len */

'use strict';

// MODULES //

var loopOrder = require( './../../../base/unary-loop-interchange-order' );
var blockSize = require( './../../../base/unary-tiling-block-size' );


// MAIN //

/**
* Assigns elements in a nine-dimensional input ndarray to elements in an equivalently shaped output ndarray via loop blocking.
*
* @private
* @param {Object} x - object containing input ndarray meta data
* @param {string} x.dtype - data type
* @param {Collection} x.data - data buffer
* @param {NonNegativeIntegerArray} x.shape - dimensions
* @param {IntegerArray} x.strides - stride lengths
* @param {NonNegativeInteger} x.offset - index offset
* @param {string} x.order - specifies whether `x` is row-major (C-style) or column-major (Fortran-style)
* @param {Array<Function>} x.accessors - data buffer accessors
* @param {Object} y - object containing output ndarray meta data
* @param {string} y.dtype - data type
* @param {Collection} y.data - data buffer
* @param {NonNegativeIntegerArray} y.shape - dimensions
* @param {IntegerArray} y.strides - stride lengths
* @param {NonNegativeInteger} y.offset - index offset
* @param {string} y.order - specifies whether `y` is row-major (C-style) or column-major (Fortran-style)
* @param {Array<Function>} y.accessors - data buffer accessors
* @returns {void}
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
*
* // Create data buffers:
* var xbuf = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var ybuf = new Complex64Array( 4 );
*
* // Define the shape of the input and output arrays:
* var shape = [ 1, 1, 1, 1, 1, 1, 1, 2, 2 ];
*
* // Define the array strides:
* var sx = [ 4, 4, 4, 4, 4, 4, 4, 2, 1 ];
* var sy = [ 4, 4, 4, 4, 4, 4, 4, 2, 1 ];
*
* // Define the index offsets:
* var ox = 0;
* var oy = 0;
*
* // Define getters and setters:
* function getter( buf, idx ) {
*     return buf.get( idx );
* }
*
* function setter( buf, idx, value ) {
*     buf.set( value, idx );
* }
*
* // Create the input and output ndarray-like objects:
* var x = {
*     'dtype': 'complex64',
*     'data': xbuf,
*     'shape': shape,
*     'strides': sx,
*     'offset': ox,
*     'order': 'row-major',
*     'accessors': [ getter, setter ]
* };
* var y = {
*     'dtype': 'complex64',
*     'data': ybuf,
*     'shape': shape,
*     'strides': sy,
*     'offset': oy,
*     'order': 'row-major',
*     'accessors': [ getter, setter ]
* };
*
* // Copy elements:
* blockedassign9d( x, y );
*
* var v = y.data.get( 0 );
*
* var re = realf( v );
* // returns 1.0
*
* var im = imagf( v );
* // returns 2.0
*/
function blockedassign9d( x, y ) { // eslint-disable-line max-statements, max-lines-per-function
	var bsize;
	var xbuf;
	var ybuf;
	var get;
	var set;
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
	var sh;
	var s0;
	var s1;
	var s2;
	var s3;
	var s4;
	var s5;
	var s6;
	var s7;
	var s8;
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

	// Cache accessors:
	get = x.accessors[0];
	set = y.accessors[1];

	// Iterate over blocks...
	for ( j8 = sh[8]; j8 > 0; ) {
		if ( j8 < bsize ) {
			s8 = j8;
			j8 = 0;
		} else {
			s8 = bsize;
			j8 -= bsize;
		}
		ox8 = ox + ( j8*sx[8] );
		oy8 = oy + ( j8*sy[8] );
		for ( j7 = sh[7]; j7 > 0; ) {
			if ( j7 < bsize ) {
				s7 = j7;
				j7 = 0;
			} else {
				s7 = bsize;
				j7 -= bsize;
			}
			dx8 = sx[8] - ( s7*sx[7] );
			dy8 = sy[8] - ( s7*sy[7] );
			ox7 = ox8 + ( j7*sx[7] );
			oy7 = oy8 + ( j7*sy[7] );
			for ( j6 = sh[6]; j6 > 0; ) {
				if ( j6 < bsize ) {
					s6 = j6;
					j6 = 0;
				} else {
					s6 = bsize;
					j6 -= bsize;
				}
				dx7 = sx[7] - ( s6*sx[6] );
				dy7 = sy[7] - ( s6*sy[6] );
				ox6 = ox7 + ( j6*sx[6] );
				oy6 = oy7 + ( j6*sy[6] );
				for ( j5 = sh[5]; j5 > 0; ) {
					if ( j5 < bsize ) {
						s5 = j5;
						j5 = 0;
					} else {
						s5 = bsize;
						j5 -= bsize;
					}
					dx6 = sx[6] - ( s5*sx[5] );
					dy6 = sy[6] - ( s5*sy[5] );
					ox5 = ox6 + ( j5*sx[5] );
					oy5 = oy6 + ( j5*sy[5] );
					for ( j4 = sh[4]; j4 > 0; ) {
						if ( j4 < bsize ) {
							s4 = j4;
							j4 = 0;
						} else {
							s4 = bsize;
							j4 -= bsize;
						}
						dx5 = sx[5] - ( s4*sx[4] );
						dy5 = sy[5] - ( s4*sy[4] );
						ox4 = ox5 + ( j4*sx[4] );
						oy4 = oy5 + ( j4*sy[4] );
						for ( j3 = sh[3]; j3 > 0; ) {
							if ( j3 < bsize ) {
								s3 = j3;
								j3 = 0;
							} else {
								s3 = bsize;
								j3 -= bsize;
							}
							dx4 = sx[4] - ( s3*sx[3] );
							dy4 = sy[4] - ( s3*sy[3] );
							ox3 = ox4 + ( j3*sx[3] );
							oy3 = oy4 + ( j3*sy[3] );
							for ( j2 = sh[2]; j2 > 0; ) {
								if ( j2 < bsize ) {
									s2 = j2;
									j2 = 0;
								} else {
									s2 = bsize;
									j2 -= bsize;
								}
								dx3 = sx[3] - ( s2*sx[2] );
								dy3 = sy[3] - ( s2*sy[2] );
								ox2 = ox3 + ( j2*sx[2] );
								oy2 = oy3 + ( j2*sy[2] );
								for ( j1 = sh[1]; j1 > 0; ) {
									if ( j1 < bsize ) {
										s1 = j1;
										j1 = 0;
									} else {
										s1 = bsize;
										j1 -= bsize;
									}
									dx2 = sx[2] - ( s1*sx[1] );
									dy2 = sy[2] - ( s1*sy[1] );
									ox1 = ox2 + ( j1*sx[1] );
									oy1 = oy2 + ( j1*sy[1] );
									for ( j0 = sh[0]; j0 > 0; ) {
										if ( j0 < bsize ) {
											s0 = j0;
											j0 = 0;
										} else {
											s0 = bsize;
											j0 -= bsize;
										}
										// Compute index offsets for the first input and output ndarray elements in the current block...
										ix = ox1 + ( j0*sx[0] );
										iy = oy1 + ( j0*sy[0] );

										// Compute loop offset increments...
										dx1 = sx[1] - ( s0*sx[0] );
										dy1 = sy[1] - ( s0*sy[0] );

										// Iterate over the ndarray dimensions...
										for ( i8 = 0; i8 < s8; i8++ ) {
											for ( i7 = 0; i7 < s7; i7++ ) {
												for ( i6 = 0; i6 < s6; i6++ ) {
													for ( i5 = 0; i5 < s5; i5++ ) {
														for ( i4 = 0; i4 < s4; i4++ ) {
															for ( i3 = 0; i3 < s3; i3++ ) {
																for ( i2 = 0; i2 < s2; i2++ ) {
																	for ( i1 = 0; i1 < s1; i1++ ) {
																		for ( i0 = 0; i0 < s0; i0++ ) {
																			set( ybuf, iy, get( xbuf, ix ) );
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

module.exports = blockedassign9d;
