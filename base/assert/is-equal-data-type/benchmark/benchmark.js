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

var bench = require( '@stdlib/bench' );
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var DataType = require( './../../../../dtype-ctor' );
var pkg = require( './../package.json' ).name;
var isEqualDataType = require( './../lib' );


// MAIN //

bench( pkg+'::strings', function benchmark( b ) {
	var values;
	var out;
	var v;
	var i;

	values = [
		'binary',
		'float32',
		'float64',
		'generic',
		'int16',
		'int32',
		'int8',
		'uint16',
		'uint32',
		'uint8',
		'uint8c',
		'foo',
		'bar',
		'',
		'beep',
		'boop'
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = values[ i%values.length ];
		out = isEqualDataType( v, v );
		if ( typeof out !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( out ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::data_type_objects', function benchmark( b ) {
	var values;
	var out;
	var v;
	var i;

	values = [
		new DataType( 'binary' ),
		new DataType( 'float32' ),
		new DataType( 'float64' ),
		new DataType( 'generic' ),
		new DataType( 'int16' ),
		new DataType( 'int32' ),
		new DataType( 'int8' ),
		new DataType( 'uint16' ),
		new DataType( 'uint32' ),
		new DataType( 'uint8' ),
		new DataType( 'uint8c' )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = values[ i%values.length ];
		out = isEqualDataType( v, v );
		if ( typeof out !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( out ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
