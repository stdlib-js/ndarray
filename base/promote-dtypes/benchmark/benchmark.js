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
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var nCartesianProduct = require( '@stdlib/array/base/n-cartesian-product' );
var dtypes = require( './../../../dtypes' );
var pkg = require( './../package.json' ).name;
var promoteDataTypes = require( './../lib' );


// VARIABLES //

var DTYPES = dtypes();


// MAIN //

bench( pkg+'::one_dtype', function benchmark( b ) {
	var v;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = promoteDataTypes( [ DTYPES[ i%DTYPES.length ] ] );
		if ( typeof v !== 'string' && v !== null ) {
			b.fail( 'unexpected result' );
		}
	}
	b.toc();
	if ( !isString( v ) && v !== null ) {
		b.fail( 'unexpected result' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::two_dtypes', function benchmark( b ) {
	var values;
	var v;
	var i;

	values = nCartesianProduct( DTYPES, DTYPES );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = promoteDataTypes( values[ i%values.length ] );
		if ( typeof v !== 'string' && v !== null ) {
			b.fail( 'unexpected result' );
		}
	}
	b.toc();
	if ( !isString( v ) && v !== null ) {
		b.fail( 'unexpected result' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::three_dtypes', function benchmark( b ) {
	var values;
	var v;
	var i;

	values = nCartesianProduct( DTYPES, DTYPES, DTYPES );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = promoteDataTypes( values[ i%values.length ] );
		if ( typeof v !== 'string' && v !== null ) {
			b.fail( 'unexpected result' );
		}
	}
	b.toc();
	if ( !isString( v ) && v !== null ) {
		b.fail( 'unexpected result' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::four_dtypes', function benchmark( b ) {
	var values;
	var v;
	var i;

	values = nCartesianProduct( DTYPES, DTYPES, DTYPES, DTYPES );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = promoteDataTypes( values[ i%values.length ] );
		if ( typeof v !== 'string' && v !== null ) {
			b.fail( 'unexpected result' );
		}
	}
	b.toc();
	if ( !isString( v ) && v !== null ) {
		b.fail( 'unexpected result' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
