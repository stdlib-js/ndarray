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

/* eslint-disable max-depth, max-len */

'use strict';

// MODULES //

var loopOrder = require( './../../../base/unary-loop-interchange-order' );
var blockSize = require( './../../../base/unary-tiling-block-size' );
var takeIndexed = require( '@stdlib/array/base/take-indexed' );
var copyIndexed = require( '@stdlib/array/base/copy-indexed' );
var zeros = require( '@stdlib/array/base/zeros' );
var incrementOffsets = require( './increment_offsets.js' );
var setViewOffsets = require( './set_view_offsets.js' );
var offsets = require( './offsets.js' );


// MAIN //

/**
* Performs a reduction over an input ndarray and assigns results to a provided output ndarray via loop blocking.
*
* @private
* @param {Function} fcn - wrapper for a one-dimensional strided array reduction function
* @param {Array<Object>} arrays - ndarrays
* @param {Array<Object>} views - initialized ndarray-like objects representing sub-array views
* @param {IntegerArray} strides - loop dimension strides for the input ndarray
* @param {Function} strategy - input ndarray reshape strategy
* @param {Options} opts - function options
* @returns {void}
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
* var Float64Results = require( '@stdlib/stats/base/ztest/one-sample/results/float64' );
* var structFactory = require( '@stdlib/array/struct-factory' );
* var ztest = require( '@stdlib/stats/base/ndarray/ztest' );
*
* var ResultsArray = structFactory( Float64Results );
*
* // Create data buffers:
* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var ybuf = new ResultsArray( 3 );
*
* // Define the array shapes:
* var xsh = [ 1, 1, 1, 1, 1, 1, 1, 1, 3, 2, 2 ];
* var ysh = [ 1, 1, 1, 1, 1, 1, 1, 1, 3 ];
*
* // Define the array strides:
* var sx = [ 12, 12, 12, 12, 12, 12, 12, 12, 4, 2, 1 ];
* var sy = [ 3, 3, 3, 3, 3, 3, 3, 3, 1 ];
*
* // Define the index offsets:
* var ox = 0;
* var oy = 0;
*
* // Create an input ndarray-like object:
* var x = {
*     'dtype': 'float64',
*     'data': xbuf,
*     'shape': xsh,
*     'strides': sx,
*     'offset': ox,
*     'order': 'row-major'
* };
*
* // Create an output ndarray-like object:
* var y = {
*     'dtype': Float64Results,
*     'data': ybuf,
*     'shape': ysh,
*     'strides': sy,
*     'offset': oy,
*     'order': 'row-major'
* };
*
* // Create additional parameter ndarray-like objects:
* var alternative = {
*     'dtype': 'generic',
*     'data': [ 'two-sided' ],
*     'shape': ysh,
*     'strides': [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
*     'offset': 0,
*     'order': 'row-major'
};
* var alpha = {
*     'dtype': 'float64',
*     'data': [ 0.05 ],
*     'shape': ysh,
*     'strides': [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
*     'offset': 0,
*     'order': 'row-major'
* };
* var mu = {
*     'dtype': 'float64',
*     'data': [ 0.0 ],
*     'shape': ysh,
*     'strides': [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
*     'offset': 0,
*     'order': 'row-major'
* };
* var sigma = {
*     'dtype': 'float64',
*     'data': [ 1.0 ],
*     'shape': ysh,
*     'strides': [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
*     'offset': 0,
*     'order': 'row-major'
* };
*
* // Initialize ndarray-like objects representing sub-array views:
* var views = [
*     {
*         'dtype': x.dtype,
*         'data': x.data,
*         'shape': [ 2, 2 ],
*         'strides': [ 2, 1 ],
*         'offset': x.offset,
*         'order': x.order
*     },
*     {
*         'dtype': y.dtype,
*         'data': y.data,
*         'shape': [],
*         'strides': [ 0 ],
*         'offset': y.offset,
*         'order': y.order
*     },
*     {
*         'dtype': alternative.dtype,
*         'data': alternative.data,
*         'shape': [],
*         'strides': [ 0 ],
*         'offset': alternative.offset,
*         'order': alternative.order
*     },
*     {
*         'dtype': alpha.dtype,
*         'data': alpha.data,
*         'shape': [],
*         'strides': [ 0 ],
*         'offset': alpha.offset,
*         'order': alpha.order
*     },
*     {
*         'dtype': mu.dtype,
*         'data': mu.data,
*         'shape': [],
*         'strides': [ 0 ],
*         'offset': mu.offset,
*         'order': mu.order
*     },
*     {
*         'dtype': sigma.dtype,
*         'data': sigma.data,
*         'shape': [],
*         'strides': [ 0 ],
*         'offset': sigma.offset,
*         'order': sigma.order
*     }
* ];
*
* // Define a reshape strategy:
* function strategy( x ) {
*     return {
*         'dtype': x.dtype,
*         'data': x.data,
*         'shape': [ 4 ],
*         'strides': [ 1 ],
*         'offset': x.offset,
*         'order': x.order
*     };
* }
*
* // Perform a reduction:
* blockedunary9d( ztest, [ x, y, alternative, alpha, mu, sigma ], views, [ 12, 12, 12, 12, 12, 12, 12, 12, 4 ], strategy, {} );
*
* var arr = ndarray2array( y.data, y.shape, y.strides, y.offset, y.order );
* // returns [ [ [ [ [ [ [ [ [ <Float64Results>, <Float64Results>, <Float64Results> ] ] ] ] ] ] ] ] ]
*/
function blockedunary9d( fcn, arrays, views, strides, strategy, opts ) { // eslint-disable-line max-statements, max-lines-per-function
	var bsize;
	var dv0;
	var dv1;
	var dv2;
	var dv3;
	var dv4;
	var dv5;
	var dv6;
	var dv7;
	var dv8;
	var ov1;
	var ov2;
	var ov3;
	var ov4;
	var ov5;
	var ov6;
	var ov7;
	var ov8;
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
	var sv;
	var ov;
	var iv;
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
	var N;
	var x;
	var y;
	var v;
	var o;
	var k;

	// Note on variable naming convention: S#, dv#, i#, j# where # corresponds to the loop number, with `0` being the innermost loop...

	N = arrays.length;
	x = arrays[ 0 ];
	y = arrays[ 1 ];

	// Resolve the loop interchange order:
	o = loopOrder( y.shape, strides, y.strides );
	sh = o.sh;
	sv = [ o.sx, o.sy ];
	for ( k = 2; k < N; k++ ) {
		sv.push( takeIndexed( arrays[k].strides, o.idx ) );
	}
	// Determine the block size:
	bsize = blockSize( x.dtype, y.dtype );

	// Resolve a list of pointers to the first indexed elements in the respective ndarrays:
	ov = offsets( arrays );

	// Cache offset increments for the innermost loop...
	dv0 = [];
	for ( k = 0; k < N; k++ ) {
		dv0.push( sv[k][0] );
	}
	// Initialize loop variables...
	ov1 = zeros( N );
	ov2 = zeros( N );
	ov3 = zeros( N );
	ov4 = zeros( N );
	ov5 = zeros( N );
	ov6 = zeros( N );
	ov7 = zeros( N );
	ov8 = zeros( N );
	dv1 = zeros( N );
	dv2 = zeros( N );
	dv3 = zeros( N );
	dv4 = zeros( N );
	dv5 = zeros( N );
	dv6 = zeros( N );
	dv7 = zeros( N );
	dv8 = zeros( N );
	iv = zeros( N );

	// Shallow copy the list of views to an internal array so that we can update with reshaped views without impacting the original list of views:
	v = copyIndexed( views );

	// Iterate over blocks...
	for ( j8 = sh[8]; j8 > 0; ) {
		if ( j8 < bsize ) {
			s8 = j8;
			j8 = 0;
		} else {
			s8 = bsize;
			j8 -= bsize;
		}
		for ( k = 0; k < N; k++ ) {
			ov8[ k ] = ov[k] + ( j8*sv[k][8] );
		}
		for ( j7 = sh[7]; j7 > 0; ) {
			if ( j7 < bsize ) {
				s7 = j7;
				j7 = 0;
			} else {
				s7 = bsize;
				j7 -= bsize;
			}
			for ( k = 0; k < N; k++ ) {
				dv8 = sv[k][8] - ( s7*sv[k][7] );
				ov7[ k ] = ov8[k] + ( j7*sv[k][7] );
			}
			for ( j6 = sh[6]; j6 > 0; ) {
				if ( j6 < bsize ) {
					s6 = j6;
					j6 = 0;
				} else {
					s6 = bsize;
					j6 -= bsize;
				}
				for ( k = 0; k < N; k++ ) {
					dv7 = sv[k][7] - ( s6*sv[k][6] );
					ov6[ k ] = ov7[k] + ( j6*sv[k][6] );
				}
				for ( j5 = sh[5]; j5 > 0; ) {
					if ( j5 < bsize ) {
						s5 = j5;
						j5 = 0;
					} else {
						s5 = bsize;
						j5 -= bsize;
					}
					for ( k = 0; k < N; k++ ) {
						dv6 = sv[k][6] - ( s5*sv[k][5] );
						ov5[ k ] = ov6[k] + ( j5*sv[k][5] );
					}
					for ( j4 = sh[4]; j4 > 0; ) {
						if ( j4 < bsize ) {
							s4 = j4;
							j4 = 0;
						} else {
							s4 = bsize;
							j4 -= bsize;
						}
						for ( k = 0; k < N; k++ ) {
							dv5 = sv[k][5] - ( s4*sv[k][4] );
							ov4[ k ] = ov5[k] + ( j4*sv[k][4] );
						}
						for ( j3 = sh[3]; j3 > 0; ) {
							if ( j3 < bsize ) {
								s3 = j3;
								j3 = 0;
							} else {
								s3 = bsize;
								j3 -= bsize;
							}
							for ( k = 0; k < N; k++ ) {
								dv4[ k ] = sv[k][4] - ( s3*sv[k][3] );
								ov3[ k ] = ov4[k] + ( j3*sv[k][3] );
							}
							for ( j2 = sh[2]; j2 > 0; ) {
								if ( j2 < bsize ) {
									s2 = j2;
									j2 = 0;
								} else {
									s2 = bsize;
									j2 -= bsize;
								}
								for ( k = 0; k < N; k++ ) {
									dv3[ k ] = sv[k][3] - ( s2*sv[k][2] );
									ov2[ k ] = ov3[k] + ( j2*sv[k][2] );
								}
								for ( j1 = sh[1]; j1 > 0; ) {
									if ( j1 < bsize ) {
										s1 = j1;
										j1 = 0;
									} else {
										s1 = bsize;
										j1 -= bsize;
									}
									for ( k = 0; k < N; k++ ) {
										dv2[ k ] = sv[k][2] - ( s1*sv[k][1] );
										ov1[ k ] = ov2[k] + ( j1*sv[k][1] );
									}
									for ( j0 = sh[0]; j0 > 0; ) {
										if ( j0 < bsize ) {
											s0 = j0;
											j0 = 0;
										} else {
											s0 = bsize;
											j0 -= bsize;
										}
										// Compute index offsets and loop offset increments for the first ndarray elements in the current block...
										for ( k = 0; k < N; k++ ) {
											iv[ k ] = ov1[k] + ( j0*sv[k][0] );
											dv1[ k ] = sv[k][1] - ( s0*sv[k][0] );
										}
										// Iterate over the non-reduced ndarray dimensions...
										for ( i8 = 0; i8 < s8; i8++ ) {
											for ( i7 = 0; i7 < s7; i7++ ) {
												for ( i6 = 0; i6 < s6; i6++ ) {
													for ( i5 = 0; i5 < s5; i5++ ) {
														for ( i4 = 0; i4 < s4; i4++ ) {
															for ( i3 = 0; i3 < s3; i3++ ) {
																for ( i2 = 0; i2 < s2; i2++ ) {
																	for ( i1 = 0; i1 < s1; i1++ ) {
																		for ( i0 = 0; i0 < s0; i0++ ) {
																			setViewOffsets( views, iv );
																			v[ 0 ] = strategy( views[ 0 ] );
																			fcn( v, opts );
																			incrementOffsets( iv, dv0 );
																		}
																		incrementOffsets( iv, dv1 );
																	}
																	incrementOffsets( iv, dv2 );
																}
																incrementOffsets( iv, dv3 );
															}
															incrementOffsets( iv, dv4 );
														}
														incrementOffsets( iv, dv5 );
													}
													incrementOffsets( iv, dv6 );
												}
												incrementOffsets( iv, dv7 );
											}
											incrementOffsets( iv, dv8 );
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

module.exports = blockedunary9d;
