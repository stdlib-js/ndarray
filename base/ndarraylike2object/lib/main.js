/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

var isAccessorArray = require( '@stdlib/array/base/assert/is-accessor-array' );
var accessorGetter = require( '@stdlib/array/base/accessor-getter' );
var accessorSetter = require( '@stdlib/array/base/accessor-setter' );
var getter = require( '@stdlib/array/base/getter' );
var setter = require( '@stdlib/array/base/setter' );
var numel = require( './../../../base/numel' );
var getDType = require( './../../../base/dtype' );
var getShape = require( './../../../base/shape' );
var getStrides = require( './../../../base/strides' );
var getOffset = require( './../../../base/offset' );
var getOrder = require( './../../../base/order' );
var getData = require( './../../../base/data-buffer' );


// MAIN //

/**
* Converts an ndarray-like object to an object likely to have the same "shape".
*
* ## Notes
*
* -   This function is intended as a potential performance optimization. In V8, for example, even if two objects share common properties, if those properties were added in different orders or if one object has additional properties not shared by the other object, then those objects will have different "hidden" classes. If a function is provided many objects having different "shapes", some JavaScript VMs (e.g., V8) will consider the function "megamorphic" and fail to perform various runtime optimizations. Accordingly, the intent of this function is to standardize the "shape" of the object holding ndarray meta data to ensure that internal functions operating on ndarrays are provided consistent argument "shapes".
*
* -   The returned object has the following properties:
*
*     -   **ref**: reference to the original ndarray-like object.
*     -   **dtype**: underlying data type.
*     -   **data**: data buffer.
*     -   **length**: number of elements.
*     -   **shape**: array dimensions.
*     -   **strides**: array strides.
*     -   **offset**: index offset.
*     -   **order**: order.
*     -   **accessorProtocol**: `boolean` indicating whether the data buffer supports the get/set protocol (i.e., uses accessors for getting and setting elements).
*     -   **accessors**: a two-element array whose first element is an accessor for retrieving an ndarray element and whose second element is an accessor for setting an ndarray element.
*
* @param {ndarrayLike} x - ndarray-like object
* @param {*} x.dtype - data type
* @param {Collection} x.data - data buffer
* @param {NonNegativeIntegerArray} x.shape - dimensions
* @param {IntegerArray} x.strides - stride lengths
* @param {NonNegativeInteger} x.offset - index offset
* @param {string} x.order - specifies whether `x` is row-major (C-style) or column-major (Fortran-style)
* @returns {Object} object containing ndarray meta data
*
* @example
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ] );
*
* var obj = ndarraylike2object( x );
* // returns {...}
*/
function ndarraylike2object( x ) {
	var xbuf;
	var bool;
	var sh;
	var dt;

	xbuf = getData( x );
	sh = getShape( x, true );
	dt = getDType( x );

	bool = isAccessorArray( xbuf );

	return {
		'ref': x,
		'dtype': dt,
		'data': xbuf,
		'length': numel( sh ),
		'shape': sh,
		'strides': getStrides( x, true ),
		'offset': getOffset( x ),
		'order': getOrder( x ),
		'accessorProtocol': bool,
		'accessors': ( bool ) ?
			[ accessorGetter( dt ), accessorSetter( dt ) ] :
			[ getter( dt ), setter( dt ) ]
	};
}


// EXPORTS //

module.exports = ndarraylike2object;
