/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
var DataType = require( './../../../dtype-ctor' );
var dtypes = require( './../../../dtypes' );
var structFactory = require( '@stdlib/dstructs/struct' );
var isFunction = require( '@stdlib/assert/is-function' );
var pkg = require( './../package.json' ).name;
var ctors = require( './../lib' );


// VARIABLES //

var DTYPES = dtypes( 'integer_and_generic' );


// MAIN //

bench( pkg+'::strings', function benchmark( b ) {
	var ctor;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		ctor = ctors( DTYPES[ i%DTYPES.length ] );
		if ( typeof ctor !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( !isFunction( ctor ) ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::data_type_instances,strings', function benchmark( b ) {
	var values;
	var ctor;
	var i;

	values = [
		new DataType( 'float64' ),
		new DataType( 'float32' ),
		new DataType( 'int32' )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		ctor = ctors( values[ i%values.length ] );
		if ( typeof ctor !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( !isFunction( ctor ) ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::structs', function benchmark( b ) {
	var schema;
	var values;
	var ctor;
	var i;

	schema = [
		{
			'name': 'beep',
			'type': 'float64'
		},
		{
			'name': 'boop',
			'type': 'int32'
		}
	];

	values = [
		structFactory( schema ),
		structFactory( schema )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		ctor = ctors( values[ i%values.length ] );
		if ( typeof ctor !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( !isFunction( ctor ) ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::data_type_instances,structs', function benchmark( b ) {
	var schema;
	var values;
	var ctor;
	var i;

	schema = [
		{
			'name': 'beep',
			'type': 'float64'
		},
		{
			'name': 'boop',
			'type': 'int32'
		}
	];

	values = [
		new DataType( structFactory( schema ) ),
		new DataType( structFactory( schema ) )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		ctor = ctors( values[ i%values.length ] );
		if ( typeof ctor !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( !isFunction( ctor ) ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
