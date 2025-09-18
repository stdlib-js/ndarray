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

/* eslint-disable no-restricted-syntax, no-invalid-this */

'use strict';

// MODULES //

var isStructConstructorLike = require( '@stdlib/assert/is-struct-constructor-like' );
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isDataTypeString = require( './../../base/assert/is-data-type-string' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var hasProp = require( '@stdlib/assert/has-property' );
var setReadOnlyAccessor = require( '@stdlib/utils/define-nonenumerable-read-only-accessor' );
var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var resolveEnum = require( './../../base/dtype-resolve-enum' );
var dtype2desc = require( './../../base/dtype-desc' );
var dtype2char = require( './../../base/dtype-char' );
var dtype2alignment = require( './../../base/dtype-alignment' );
var bytesPerElement = require( './../../base/bytes-per-element' );
var dtypes = require( './../../dtypes' );
var format = require( '@stdlib/string/format' );


// FUNCTIONS //

/**
* Returns a boolean indicating if a value is a `DataType`.
*
* @private
* @param {*} value - value to test
* @returns {boolean} boolean indicating if a value is a `DataType`
*/
function isDataType( value ) {
	return (
		typeof value === 'object' &&
		value !== null &&
		value.constructor.name === 'DataType' &&
		isString( value.char ) &&
		isString( value.description ) &&
		isString( value.byteOrder ) &&
		hasProp( value, 'value' )
	);
}


// MAIN //

/**
* Data type constructor.
*
* @constructor
* @param {*} value - data type value
* @param {Options} [options] - constructor options
* @param {string} [options.description] - data type description
* @throws {TypeError} first argument must be a supported data type value
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {DataType} data type instance
*
* @example
* var dt = new DataType( 'float64' );
* // returns <DataType>
*
* var str = dt.toString();
* // returns 'float64'
*/
function DataType( value, options ) {
	var nargs;
	var type;
	var opts;

	nargs = arguments.length;
	if ( !( this instanceof DataType ) ) {
		if ( nargs < 2 ) {
			return new DataType( value );
		}
		return new DataType( value, options );
	}
	if ( isDataTypeString( value ) ) {
		type = 'builtin';
	} else if ( isStructConstructorLike( value ) ) {
		type = 'struct';
	} else if ( isDataType( value ) ) {
		// Clone the input data type:
		return new DataType( value.value, {
			'description': value.description
		});
	} else {
		throw new TypeError( format( 'invalid argument. First argument must be either a supported data type string, a struct constructor, or another data type instance. Value: `%s`.', value ) );
	}
	if ( nargs > 1 ) {
		opts = options;
		if ( !isPlainObject( opts ) ) {
			throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', opts ) );
		}
		if ( hasOwnProp( opts, 'description' ) && !isString( opts.description ) ) {
			throw new TypeError( format( 'invalid option. `%s` option must be a string. Option: `%s`.', 'description', opts.description ) );
		}
	} else {
		opts = {};
	}
	this._value = value;
	this._description = opts.description || ( dtype2desc( value ) || '' );
	this._char = dtype2char( value ) || '';
	this._enum = resolveEnum( value ) || dtypes.userdefined_type;
	this._alignment = dtype2alignment( value ) || -1;
	this._byteLength = bytesPerElement( value ) || -1;
	this._byteOrder = 'host'; // TODO: consider supporting little-endian and big-endian byte orders
	this._type = type;
	return this;
}

/**
* Constructor name.
*
* @name name
* @memberof DataType
* @type {string}
* @default 'DataType'
*
* @example
* var v = DataType.name;
* // returns 'DataType'
*/
setReadOnly( DataType, 'name', 'DataType' );

/**
* Alignment (in bytes) for the data type.
*
* ## Notes
*
* -   If a data type does not have a known alignment, the returned value is `-1`.
*
* @name alignment
* @memberof DataType.prototype
* @readonly
* @type {integer}
*
* @example
* var dt = new DataType( 'float64' );
* // returns <DataType>
*
* var v = dt.alignment;
* // returns 8
*/
setReadOnlyAccessor( DataType.prototype, 'alignment', function get() {
	return this._alignment;
});

/**
* Size (in bytes) of the data type.
*
* ## Notes
*
* -   If a data type does not have a known size, the returned value is `-1`.
*
* @name byteLength
* @memberof DataType.prototype
* @readonly
* @type {integer}
*
* @example
* var dt = new DataType( 'float64' );
* // returns <DataType>
*
* var v = dt.byteLength;
* // returns 8
*/
setReadOnlyAccessor( DataType.prototype, 'byteLength', function get() {
	return this._byteLength;
});

/**
* Data type byte order.
*
* ## Notes
*
* -   Potential values:
*
*     -   **host**: host platform byte order.
*     -   **little-endian**: little-endian byte order.
*     -   **big-endian**: big-endian byte order.
*
* @name byteOrder
* @memberof DataType.prototype
* @readonly
* @type {string}
*
* @example
* var dt = new DataType( 'float64' );
* // returns <DataType>
*
* var v = dt.byteOrder;
* // returns 'host'
*/
setReadOnlyAccessor( DataType.prototype, 'byteOrder', function get() {
	return this._byteOrder;
});

/**
* Single letter character abbreviation for the data type.
*
* ## Notes
*
* -   If a data type does not have a corresponding single letter character abbreviation, the returned value is an empty string.
*
* @name char
* @memberof DataType.prototype
* @readonly
* @type {string}
*
* @example
* var dt = new DataType( 'float64' );
* // returns <DataType>
*
* var v = dt.char;
* // returns 'd'
*/
setReadOnlyAccessor( DataType.prototype, 'char', function get() {
	return this._char;
});

/**
* Data type description.
*
* ## Notes
*
* -   If a data type does not have an associated description, the returned value is an empty string.
*
* @name description
* @memberof DataType.prototype
* @readonly
* @type {string}
*
* @example
* var dt = new DataType( 'float64' );
* // returns <DataType>
*
* var v = dt.description;
* // returns <string>
*/
setReadOnlyAccessor( DataType.prototype, 'description', function get() {
	return this._description;
});

/**
* Enumeration constant for the data type.
*
* ## Notes
*
* -   If a data type does not have a corresponding known enumeration constant, the returned value is the enumeration constant for a user-defined data type.
*
* @name enum
* @memberof DataType.prototype
* @readonly
* @type {NonNegativeInteger}
*
* @example
* var dt = new DataType( 'float64' );
* // returns <DataType>
*
* var v = dt.enum;
* // returns <number>
*/
setReadOnlyAccessor( DataType.prototype, 'enum', function get() {
	return this._enum;
});

/**
* Raw (original) data type value.
*
* @name value
* @memberof DataType.prototype
* @readonly
* @type {*}
*
* @example
* var dt = new DataType( 'float64' );
* // returns <DataType>
*
* var v = dt.value;
* // returns 'float64'
*/
setReadOnlyAccessor( DataType.prototype, 'value', function get() {
	return this._value;
});

/**
* Serializes a data type instance as a JSON object.
*
* ## Notes
*
* -   `JSON.stringify()` implicitly calls this method when stringifying a `DataType` instance.
*
* @name toJSON
* @memberof DataType.prototype
* @type {Function}
* @returns {Object} serialized instance
*
* @example
* var dt = new DataType( 'float64' );
* // returns <DataType>
*
* var o = dt.toJSON();
* // returns {...}
*/
setReadOnly( DataType.prototype, 'toJSON', function toJSON() {
	return {
		'type': 'DataType',
		'value': this.toString(),
		'byteOrder': this._byteOrder,
		'description': this._description
	};
});

/**
* Serializes a data type instance to a string.
*
* @name toString
* @memberof DataType.prototype
* @type {Function}
* @returns {string} serialized string
*
* @example
* var dt = new DataType( 'float64' );
* // returns <DataType>
*
* var v = dt.toString();
* // returns 'float64'
*/
setReadOnly( DataType.prototype, 'toString', function toString() {
	return ( this._type === 'struct' ) ? this._value.layout : String( this._value );
});


// EXPORTS //

module.exports = DataType;
