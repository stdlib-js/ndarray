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
var structFactory = require( '@stdlib/dstructs/struct' );
var pkg = require( './../package.json' ).name;
var bytesPerElement = require( './../lib' );


// MAIN //

bench( pkg+'::string', function benchmark( b ) {
	var dtypes;
	var dtype;
	var out;
	var i;

	dtypes = [
		'float64',
		'float32',
		'int8',
		'uint8',
		'uint8c',
		'int16',
		'uint16',
		'int32',
		'uint32',
		'binary',
		'generic',
		'foobar'
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dtype = dtypes[ i%dtypes.length ];
		out = bytesPerElement( dtype );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( out !== out ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::struct', function benchmark( b ) {
	var schemas;
	var dtypes;
	var dtype;
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

	dtypes = [
		structFactory( schemas[ 0 ] ),
		structFactory( schemas[ 1 ] )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dtype = dtypes[ i%dtypes.length ];
		out = bytesPerElement( dtype );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( out !== out ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::data_type_instance,string', function benchmark( b ) {
	var dtypes;
	var dtype;
	var out;
	var i;

	dtypes = [
		new DataType( 'float64' ),
		new DataType( 'float32' ),
		new DataType( 'int8' ),
		new DataType( 'uint8' ),
		new DataType( 'uint8c' ),
		new DataType( 'int16' ),
		new DataType( 'uint16' ),
		new DataType( 'int32' ),
		new DataType( 'uint32' ),
		new DataType( 'binary' ),
		new DataType( 'generic' )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dtype = dtypes[ i%dtypes.length ];
		out = bytesPerElement( dtype );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( out !== out ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::data_type_instance,struct', function benchmark( b ) {
	var schemas;
	var dtypes;
	var dtype;
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

	dtypes = [
		new DataType( structFactory( schemas[ 0 ] ) ),
		new DataType( structFactory( schemas[ 1 ] ) )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dtype = dtypes[ i%dtypes.length ];
		out = bytesPerElement( dtype );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( out !== out ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
