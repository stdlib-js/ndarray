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

'use strict';

// MODULES //

var broadcastShapes = require( './../../../base/broadcast-shapes' );
var broadcastArray = require( './../../../base/broadcast-array' );
var getShape = require( './../../../base/shape' );


// MAIN //

/**
* Broadcasts ndarrays to a common shape.
*
* ## Notes
*
* -   The returned arrays are views on their respective underlying data buffers. The views are typically **not** contiguous. As more than one element of a returned view may refer to the same memory location, writing to a view may affect multiple elements. If you need to write to one of the returned arrays, copy the array before performing operations which may mutate elements.
*
* @param {ArrayLikeObject<ndarray>} arrays - list of input arrays
* @throws {Error} input arrays must be broadcast compatible
* @returns {Array<ndarray>} broadcasted arrays
*
* @example
* var array = require( '@stdlib/ndarray/array' );
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x1 = array( [ [ 1, 2 ], [ 3, 4 ] ] );
* // returns <ndarray>
*
* var shx = x1.shape;
* // returns [ 2, 2 ]
*
* var y1 = zeros( [ 3, 2, 2 ] );
* // returns <ndarray>
*
* var shy = y1.shape;
* // returns [ 3, 2, 2 ]
*
* var out = broadcastArrays( [ x1, y1 ] );
* // returns <ndarray>
*
* var x2 = out[ 0 ];
* // returns <ndarray>
*
* var y2 = out[ 1 ];
* // returns <ndarray>
*
* shx = x2.shape;
* // returns [ 3, 2, 2 ]
*
* shy = y2.shape;
* // returns [ 3, 2, 2 ]
*
* var v = x2.get( 0, 0, 0 );
* // returns 1
*
* v = x2.get( 0, 0, 1 );
* // returns 2
*
* v = x2.get( 1, 0, 0 );
* // returns 1
*
* v = x2.get( 1, 1, 0 );
* // returns 3
*
* v = x2.get( 2, 0, 0 );
* // returns 1
*
* v = x2.get( 2, 1, 1 );
* // returns 4
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 2, 2 ] );
* // returns <ndarray>
*
* var y = zeros( [ 4, 2 ] );
* // returns <ndarray>
*
* var out = broadcastArrays( [ x, y ] );
* // throws <Error>
*/
function broadcastArrays( arrays ) {
	var shapes;
	var out;
	var sh;
	var N;
	var i;

	N = arrays.length;

	// Resolve the list of shapes...
	shapes = [];
	for ( i = 0; i < N; i++ ) {
		shapes.push( getShape( arrays[ i ], false ) );
	}
	// Broadcast the shapes to a common shape:
	sh = broadcastShapes( shapes );
	if ( sh === null ) {
		throw new Error( 'invalid arguments. Input arrays must be broadcast compatible.' );
	}
	// Broadcast each array to the common shape...
	out = [];
	for ( i = 0; i < N; i++ ) {
		out.push( broadcastArray( arrays[ i ], sh ) );
	}
	return out;
}


// EXPORTS //

module.exports = broadcastArrays;
