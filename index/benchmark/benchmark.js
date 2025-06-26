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

var bench = require( '@stdlib/bench' );
var zeros = require( './../../zeros' );
var empty = require( './../../empty' );
var instanceOf = require( '@stdlib/assert/instance-of' );
var pkg = require( './../package.json' ).name;
var ndindex = require( './../lib' );


// MAIN //

bench( pkg+'::instantiation,new', function benchmark( b ) {
	var values;
	var v1;
	var v2;
	var v3;
	var v;
	var i;

	v1 = zeros( [ 2 ], {
		'dtype': 'int32'
	});
	v2 = zeros( [ 2, 2 ], {
		'dtype': 'int32'
	});
	v3 = empty( [ 10 ], {
		'dtype': 'bool'
	});
	values = [
		v1,
		v2,
		v3
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = new ndindex( values[ i%values.length ] );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !instanceOf( v, ndindex ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,no_new', function benchmark( b ) {
	var values;
	var v1;
	var v2;
	var v3;
	var v;
	var i;

	v1 = zeros( [ 2 ], {
		'dtype': 'int32'
	});
	v2 = zeros( [ 2, 2 ], {
		'dtype': 'int32'
	});
	v3 = empty( [ 10 ], {
		'dtype': 'bool'
	});
	values = [
		v1,
		v2,
		v3
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = ndindex( values[ i%values.length ] );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !instanceOf( v, ndindex ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
