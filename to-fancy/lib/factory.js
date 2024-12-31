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

'use strict';

// MODULES //

var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var Proxy = require( '@stdlib/proxy/ctor' );
var ndarray = require( './../../ctor' );
var ndarraylike2object = require( './../../base/ndarraylike2object' );
var assign = require( '@stdlib/object/assign' );
var format = require( '@stdlib/string/format' );
var hasProxySupport = require( './has_proxy_support.js' );
var setElementWrapper = require( './set_element_wrapper.js' );
var getArrayWrapper = require( './get_ndarray_wrapper.js' );
var defaults = require( './defaults.js' );
var validate = require( './validate.js' );
var validator = require( './validator.js' );
var prop2slice = require( './prop2slice.js' );
var ctor = require( './ctor.js' );
var getter = require( './getter.js' );
var setter = require( './setter.js' );
var get = require( './get.js' );
var set = require( './set.js' );


// MAIN //

/**
* Returns a function for converting an ndarray to an object supporting fancy indexing.
*
* @param {Options} options - function options
* @param {boolean} [options.strict=false] - boolean indicating whether to enforce strict bounds checking by default
* @param {Function} [options.cache] - default cache for resolving ndarray index objects
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {Function} function for converting an ndarray to an object supporting fancy indexing
*
* @example
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* var buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = new ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var ndarray2fancy = factory();
*
* var y = ndarray2fancy( x );
* // returns <ndarray>
*
* var v = y[ '1:,:' ];
* // returns <ndarray>
*/
function factory() {
	var OPTIONS;
	var err;

	OPTIONS = defaults();
	if ( arguments.length ) {
		err = validate( OPTIONS, arguments[ 0 ] );
		if ( err ) {
			throw err;
		}
	}
	return ndarray2fancy;

	/**
	* Converts an ndarray to an object supporting fancy indexing.
	*
	* @private
	* @param {ndarrayLike} x - input ndarray
	* @param {Options} [options] - function options
	* @param {boolean} [options.strict] - boolean indicating whether to enforce strict bounds checking
	* @param {Function} [options.cache] - cache for resolving array index objects
	* @throws {TypeError} first argument must be ndarray-like
	* @throws {TypeError} options argument must be an object
	* @throws {TypeError} must provide valid options
	* @returns {ndarrayLike} fancy ndarray
	*/
	function ndarray2fancy( x ) {
		var opts;
		var err;
		var arr;
		var dt;
		var o;

		if ( !isndarrayLike( x ) ) {
			throw new TypeError( format( 'invalid argument. First argument must be an ndarray. Value: `%s`.', x ) );
		}
		if ( hasProxySupport ) {
			opts = assign( {}, OPTIONS );
			if ( arguments.length > 1 ) {
				err = validate( opts, arguments[ 1 ] );
				if ( err ) {
					throw err;
				}
			}
			arr = ndarraylike2object( x );
			dt = arr.dtype || '';
			o = {
				'ref': x,
				'dtype': dt,
				'getter': getter( x ),
				'setter': setter( x ),
				'preSetElement': setElementWrapper( dt ),
				'postGetArray': getArrayWrapper( ndarray2fancy, opts ),
				'cache': opts.cache,
				'strict': opts.strict,
				'validator': validator( dt ),
				'ndarray2fancy': ndarray2fancy,
				'ctor': new Proxy( x.constructor || ndarray, {
					'construct': ctor( ndarray2fancy, opts )
				}),
				'prop2slice': prop2slice( arr.shape.length ) // WARNING: we assume a fixed number of dimensions!
			};
			return new Proxy( x, {
				'get': get( o ),
				'set': set( o )
			});
		}
		// TODO: replace with `@stdlib/console/warn` (or equivalent once available)
		console.warn( 'WARNING: Proxy objects are not supported in the current environment. Some fancy functionality may not be available.' ); // eslint-disable-line no-console
		return x;
	}
}


// EXPORTS //

module.exports = factory;
