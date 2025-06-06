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

'use strict';

// MODULES //

var iterationOrder = require( './../../../base/iteration-order' );
var minmaxViewBufferIndex = require( './../../../base/minmax-view-buffer-index' ).assign;
var ndarraylike2object = require( './../../../base/ndarraylike2object' );
var assign = require( './../../../base/assign' );
var ndarraylike2ndarray = require( './../../../base/ndarraylike2ndarray' );
var emptyLike = require( './../../../base/empty-like' );


// FUNCTIONS //

/**
* Returns an input ndarray.
*
* @private
* @param {ndarrayLike} x - input ndarray
* @returns {ndarrayLike} input ndarray
*/
function identity( x ) {
	return x;
}

/**
* Broadcasts a zero-dimensional ndarray to a one-dimensional ndarray view containing a single element.
*
* @private
* @param {ndarrayLike} x - input ndarray
* @returns {ndarrayLike} broadcasted ndarray view
*/
function broadcast( x ) {
	// NOTE: the following properties must be set in the exact same order as in `x` in order to ensure that the returned object has the same hidden shape as the input ndarray-like object...
	return {
		'dtype': x.dtype,
		'data': x.data,
		'shape': [ 1 ],
		'strides': [ 0 ],
		'offset': x.offset,
		'order': x.order
	};
}

/**
* Returns a function which returns an ndarray view in which the singleton dimensions are removed from an input ndarray having only a single non-singleton dimension.
*
* @private
* @param {ndarrayLike} arr - original ndarray
* @param {NonNegativeInteger} index - index of the non-singleton dimension
* @returns {Function} function for returning an ndarray view
*/
function squeeze( arr, index ) {
	var sh = [ arr.shape[ index ] ];
	var sx = [ arr.strides[ index ] ];
	return reshape;

	/**
	* Returns an ndarray view in which the singleton dimensions are removed from an input ndarray having only a single non-singleton dimension.
	*
	* @private
	* @param {ndarrayLike} x - input ndarray
	* @returns {ndarrayLike} a squeezed ndarray view
	*/
	function reshape( x ) {
		// NOTE: the following properties must be set in the exact same order as in `arr` in order to ensure that the returned object has the same hidden shape as the input ndarray-like object...
		return {
			'dtype': x.dtype,
			'data': x.data,
			'shape': sh,
			'strides': sx,
			'offset': x.offset,
			'order': x.order
		};
	}
}

/**
* Returns a function which returns a one-dimensional ndarray view of a contiguous input ndarray having more than one dimension.
*
* @private
* @param {NonNegativeInteger} len - number of elements in an ndarray
* @param {integer} iox - iteration order
* @returns {Function} function for returning a one-dimensional ndarray view
*/
function contiguous( len, iox ) {
	var xmmv;
	var ind;
	var sh;
	var sx;

	// Resolve the index of the min/max view buffer element which is the first indexed element...
	if ( iox === 1 ) {
		ind = 0;
	} else {
		ind = 1;
	}
	// Initialize an array for storing the min/max view buffer elements:
	xmmv = [ 0, 0 ]; // [ min, max ]

	// Initialize the output one-dimensional view's shape and strides:
	sh = [ len ];
	sx = [ iox ];

	return reshape;

	/**
	* Returns a one-dimensional ndarray view of a contiguous input ndarray having more than one dimension.
	*
	* @private
	* @param {ndarrayLike} x - input ndarray
	* @returns {ndarrayLike} a one-dimensional ndarray view
	*/
	function reshape( x ) {
		// Resolve the minimum and maximum linear indices in the underlying data buffer which are accessible to the input ndarray view:
		minmaxViewBufferIndex( x.shape, x.strides, x.offset, xmmv );

		// NOTE: the following properties must be set in the exact same order as in `x` in order to ensure that the returned object has the same hidden shape as the input ndarray-like object...
		return {
			'dtype': x.dtype,
			'data': x.data,
			'shape': sh,
			'strides': sx,
			'offset': xmmv[ ind ], // the index of the first indexed element
			'order': x.order
		};
	}
}

/**
* Returns a function which copies an input ndarray to a contiguous ndarray workspace.
*
* @private
* @param {NonNegativeInteger} len - number of elements in an ndarray
* @param {ndarrayLike} workspace - ndarray workspace
* @returns {Function} function which copies an input ndarray to a contiguous ndarray workspace
*/
function copyToWorkspace( len, workspace ) {
	// NOTE: the following properties must be set in the exact same order as in the input ndarray-like object in order to ensure that the returned object has the same hidden shape...
	var view = {
		'dtype': workspace.dtype,
		'data': workspace.data,
		'shape': [ len ],
		'strides': [ 1 ],
		'offset': workspace.offset,
		'order': workspace.order
	};
	return reshape;

	/**
	* Copies an input ndarray to a contiguous ndarray workspace and returns a one-dimensional workspace view.
	*
	* @private
	* @param {ndarrayLike} x - input ndarray
	* @returns {ndarrayLike} one-dimensional workspace view
	*/
	function reshape( x ) {
		assign( [ x, workspace ] );
		return view;
	}
}

/**
* Returns a function which copies from a contiguous ndarray workspace to an input ndarray.
*
* @private
* @param {ndarrayLike} workspace - ndarray workspace
* @returns {Function} function which copies from a contiguous ndarray workspace to an input ndarray
*/
function copyFromWorkspace( workspace ) {
	return copy;

	/**
	* Copies from a contiguous ndarray workspace to an input ndarray.
	*
	* @private
	* @param {ndarrayLike} x - input ndarray
	* @returns {ndarrayLike} input ndarray
	*/
	function copy( x ) {
		assign( [ workspace, x ] );
		return x;
	}
}


// MAIN //

/**
* Returns an object for reshaping input ndarrays which have the same data type, shape, and strides as a provided ndarray.
*
* @private
* @param {ndarrayLike} x - input ndarray
* @param {string} x.dtype - input ndarray data type
* @param {Collection} x.data - input ndarray data buffer
* @param {NonNegativeIntegerArray} x.shape - input ndarray shape
* @param {IntegerArray} x.strides - input ndarray strides
* @param {NonNegativeInteger} x.offset - input ndarray index offset
* @param {string} x.order - input ndarray memory layout
* @returns {Object} object containing methods implementing a reshape strategy
*/
function strategy( x ) {
	var workspace;
	var ndims;
	var xmmv;
	var len;
	var iox;
	var sh;
	var ns;
	var i;

	// Resolve the number of array dimensions:
	sh = x.shape;
	ndims = sh.length;

	// Check whether the ndarray is zero-dimensional...
	if ( ndims === 0 ) {
		return {
			'input': broadcast,
			'output': identity
		};
	}
	// Check whether the ndarray is already one-dimensional...
	if ( ndims === 1 ) {
		return {
			'input': identity,
			'output': identity
		};
	}
	// Determine the number of singleton dimensions...
	len = 1; // number of elements
	ns = 0;  // number of singleton dimensions
	for ( i = 0; i < ndims; i++ ) {
		// Check whether the current dimension is a singleton dimension...
		if ( sh[ i ] === 1 ) {
			ns += 1;
		}
		len *= sh[ i ];
	}
	// Determine whether the ndarray has only **one** non-singleton dimension (e.g., ndims=4, shape=[10,1,1,1]) so that we can simply create an ndarray view without the singleton dimensions...
	if ( ns === ndims-1 ) {
		// Get the index of the non-singleton dimension...
		for ( i = 0; i < ndims; i++ ) {
			if ( sh[ i ] !== 1 ) {
				break;
			}
		}
		return {
			'input': squeeze( x, i ),
			'output': identity
		};
	}
	iox = iterationOrder( x.strides ); // +/-1

	// Determine whether we can avoid copying data...
	if ( iox !== 0 ) {
		// Determine the minimum and maximum linear indices which are accessible by the ndarray view:
		xmmv = minmaxViewBufferIndex( sh, x.strides, x.offset, [ 0, 0 ] );

		// Determine whether we can ignore shape (and strides) and create a new one-dimensional ndarray view...
		if ( len === ( xmmv[1]-xmmv[0]+1 ) ) {
			return {
				'input': contiguous( len, iox ),
				'output': identity
			};
		}
		// The ndarray is non-contiguous, so we cannot directly interpret as a one-dimensional ndarray...

		// Fall-through to copying to a workspace ndarray...
	}
	// At this point, we're dealing with a non-contiguous multi-dimensional ndarray, so we need to copy to a contiguous workspace:
	workspace = ndarraylike2object( emptyLike( ndarraylike2ndarray( x ) ) );
	return {
		'input': copyToWorkspace( len, workspace ),
		'output': copyFromWorkspace( workspace )
	};
}


// EXPORTS //

module.exports = strategy;
