/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

var IS_LITTLE_ENDIAN = require( '@stdlib/assert/is-little-endian' );
var ArrayBuffer = require( '@stdlib/array/buffer' );
var DataView = require( '@stdlib/array/dataview' );
var Uint8Array = require( '@stdlib/array/uint8' );
var dtypes = require( './../../../dtypes' ).enum;
var orders = require( './../../../orders' ).enum;
var modes = require( './../../../index-modes' ).enum;
var float64ToInt64Bytes = require( '@stdlib/number/float64/base/to-int64-bytes' ).assign;


// VARIABLES //

var DTYPES = dtypes();
var ORDERS = orders();
var MODES = modes();


// FUNCTIONS //

/**
* Serializes ndarray meta data to a `DataView`.
*
* ## Notes
*
* -   This function takes into account ndarray-like objects which may support index modes.
*
* -   This function defaults to returning cached serialized meta data. To force serialization, set the private `__meta_dataview__` property to `null`.
*
* -   Serialization is performed according to host byte order (endianness).
*
* -   Meta data format:
*
*     ```text
*     | endianness (1 byte) | <dtype> (2 bytes) | <ndims> (8 bytes) | <shape> (ndims*8 bytes) | <strides> (ndims*8 bytes) | <offset> (8 bytes) | <order> (1 byte) | <mode> (1 byte) | <nsubmodes> (8 bytes) | <submodes> (nsubmodes*1 bytes) | <flags> (4 bytes) |
*     ```
*
*     which translates to the following `ArrayBuffer` layout:
*
*     ```text
*     ArrayBuffer[
*         <endianness>[int8],
*         <dtype>[int16],
*         <ndims>[int64],
*         <shape>[ndims*int64],
*         <strides>[ndims*int64],
*         <offset>[int64],
*         <order>[int8],
*         <mode>[int8],
*         <nsubmodes>[int64],
*         <submodes>[nsubmodes*int8],
*         <flags>[int32]
*     ]
*     ```
*
*     where `strides` and `offset` are in units of bytes.
*
* -   If the endianness is `1`, the byte order is little endian. If the endianness is `0`, the byte order is big endian.
*
* -   Buffer length:
*
*     ```text
*     1 + 2 + 8 + (ndims*8) + (ndims*8) + 8 + 1 + 1 + 8 + (nsubmodes*1) + 4 = 33 + (ndims*16) + nsubmodes
*     ```
*
*     For example, consider a three-dimensional ndarray with one subscript index mode (submode):
*
*     ```text
*     33 + (3*16) + 1 = 82 bytes
*     ```
*
* -   Views:
*
*     -   endianness: `Int8Array( buf, 0, 1 )`
*     -   dtype: `Int16Array( buf, 1, 1 )`
*     -   ndims: `Int64Array( buf, 3, 1 )`
*     -   shape: `Int64Array( buf, 11, ndims )`
*     -   strides: `Int64Array( buf, 11+(ndims*8), ndims )`
*     -   offset: `Int64Array( buf, 11+(ndims*16), 1 )`
*     -   order: `Int8Array( buf, 19+(ndims*16), 1 )`
*     -   mode: `Int8Array( buf, 20+(ndims*16), 1 )`
*     -   nsubmodes: `Int64Array( buf, 21+(ndims*16), 1 )`
*     -   submodes: `Int8Array( buf, 29+(ndims*16), nsubmodes )`
*     -   flags: `Int32Array( buf, 29+(ndims*16)+nsubmodes, 1 )`
*
* @private
* @returns {DataView} serialized meta data
*/
function meta2dataview() {
	/* eslint-disable no-invalid-this */
	var nbytes;
	var bytes;
	var flgs;
	var len;
	var dt;
	var sh;
	var st;
	var sm;
	var v;
	var m;
	var o;
	var s;
	var N;
	var M;
	var i;

	m = this._mode || 'throw';
	sm = this._submode || [ m ];
	N = this._ndims;
	M = sm.length;

	// Compute the amount of memory we need to allocate for storing meta data:
	len = 33 + (N*16) + M;

	// Check if we've already serialized ndarray meta data and can reuse an already allocated array buffer...
	v = this.__meta_dataview__;
	if ( v && v.byteLength === len ) { // Note: the byte length check is only a bare minimum sanity check, as cached contents may still be "stale" (e.g., shape and/or strides may have changed)
		return v;
	}
	// Allocate raw memory and create views for interfacing with the allocated memory:
	v = new DataView( new ArrayBuffer( len ) );
	bytes = new Uint8Array( v.buffer );

	// Retrieve ndarray meta data:
	sh = this._shape;
	st = this._strides;
	dt = this._dtype;
	nbytes = this._bytesPerElement;

	// Endianness: (byteoffset: 0; bytelength: 1)
	o = 0;
	v.setInt8( o, ( IS_LITTLE_ENDIAN ) ? 1 : 0 );

	// Data type: (byteoffset: 1; bytelength: 2)
	o += 1;
	v.setInt16( o, DTYPES[ dt ], IS_LITTLE_ENDIAN );

	// Number of dimensions: (byteoffset: 3; bytelength: 8)
	o += 2;
	float64ToInt64Bytes( N, bytes, 1, o );

	// Shape and strides: (byteoffset: 11 and 11+(ndims*8), respectively; bytelength: ndims*8 for both shape and strides, and, thus, ndims*16 total)
	s = N * 8; // stride length between a dimension (shape[i]) and its associated stride
	o += 8;
	for ( i = 0; i < N; i++ ) {
		float64ToInt64Bytes( sh[i], bytes, 1, o );
		float64ToInt64Bytes( st[i]*nbytes, bytes, 1, o+s );
		o += 8;
	}
	// Offset: (byteoffset: 11+(ndims*16); bytelength: 8)
	o += s;
	float64ToInt64Bytes( this._offset*nbytes, bytes, 1, o );

	// Order: (byteoffset: 19+(ndims*16); bytelength: 1)
	o += 8;
	v.setInt8( o, ORDERS[ this._order ] );

	// Mode: (byteoffset: 20+(ndims*16); bytelength: 1)
	o += 1;
	v.setInt8( o, MODES[ m ] );

	// Number of submodes: (byteoffset: 21+(ndims*16); bytelength: 8)
	o += 1;
	float64ToInt64Bytes( M, bytes, 1, o );

	// Submodes: (byteoffset: 29+(ndims*16); bytelength: nsubmodes*1)
	o += 8;
	for ( i = 0; i < M; i++ ) {
		v.setInt8( o, MODES[ sm[i] ] );
		o += 1;
	}
	// Flags: (byteoffset: 29+(ndims*16)+nsubmodes; bytelength: 4)
	flgs = 0|0;
	flgs |= ( this._flags.READONLY ) ? 4 : 0; // 00000000 00000000 00000000 00000100
	v.setInt32( o, flgs, IS_LITTLE_ENDIAN );

	// Cache the serialized meta data:
	this.__meta_dataview__ = v;

	return v;

	/* eslint-enable no-invalid-this */
}


// EXPORTS //

module.exports = meta2dataview;
