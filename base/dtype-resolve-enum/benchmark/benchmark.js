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

var bench = require( '@stdlib/bench' );
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var str2enum = require( './../../../base/dtype-str2enum' );
var DataType = require( './../../../dtype-ctor' );
var structFactory = require( '@stdlib/dstructs/struct' );
var pkg = require( './../package.json' ).name;
var resolve = require( './../lib' );


// MAIN //

bench( pkg+'::string', function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		'float64',
		'float32',
		'int32',
		'int8'
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = resolve( values[ i%values.length ] );
		if ( typeof out !== 'number' ) {
			b.fail( 'should return a number' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::integer', function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		str2enum( 'float64' ),
		str2enum( 'float32' ),
		str2enum( 'int32' ),
		str2enum( 'int8' )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = resolve( values[ i%values.length ] );
		if ( typeof out !== 'number' ) {
			b.fail( 'should return a number' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::data_type_instance,string', function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		new DataType( 'float64' ),
		new DataType( 'float32' ),
		new DataType( 'int32' ),
		new DataType( 'int8' )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = resolve( values[ i%values.length ] );
		if ( typeof out !== 'number' ) {
			b.fail( 'should return a number' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::struct', function benchmark( b ) {
	var schemas;
	var values;
	var out;
	var i;

	schemas = [
		[
			{
				'name': 'foo',
				'type': 'float64'
			}
		],
		[
			{
				'name': 'foo',
				'type': 'float32'
			}
		]
	];

	values = [
		structFactory( schemas[ 0 ] ),
		structFactory( schemas[ 1 ] )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = resolve( values[ i%values.length ] );
		if ( typeof out !== 'number' ) {
			b.fail( 'should return a number' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::data_type_instance,struct', function benchmark( b ) {
	var schemas;
	var values;
	var out;
	var i;

	schemas = [
		[
			{
				'name': 'foo',
				'type': 'float64'
			}
		],
		[
			{
				'name': 'foo',
				'type': 'float32'
			}
		]
	];

	values = [
		new DataType( structFactory( schemas[ 0 ] ) ),
		new DataType( structFactory( schemas[ 1 ] ) )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = resolve( values[ i%values.length ] );
		if ( typeof out !== 'number' ) {
			b.fail( 'should return a number' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
