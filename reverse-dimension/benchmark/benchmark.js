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
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var empty = require( './../../empty' );
var pkg = require( './../package.json' ).name;
var reverseDimension = require( './../lib' );


// MAIN //

bench( pkg+'::1d', function benchmark( b ) {
	var values;
	var v;
	var i;

	/* eslint-disable object-curly-newline, stdlib/line-closing-bracket-spacing */

	values = [
		empty( [ 2 ], { 'dtype': 'float64' } ),
		empty( [ 2 ], { 'dtype': 'float32' } ),
		empty( [ 2 ], { 'dtype': 'int32' } ),
		empty( [ 2 ], { 'dtype': 'complex128' } ),
		empty( [ 2 ], { 'dtype': 'generic' } )
	];

	/* eslint-enable object-curly-newline, stdlib/line-closing-bracket-spacing */

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = reverseDimension( values[ i%values.length ], 0 );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an ndarray' );
		}
	}
	b.toc();
	if ( !isndarrayLike( v ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d,dim=0', function benchmark( b ) {
	var values;
	var v;
	var i;

	/* eslint-disable object-curly-newline, stdlib/line-closing-bracket-spacing */

	values = [
		empty( [ 2, 2 ], { 'dtype': 'float64' } ),
		empty( [ 2, 2 ], { 'dtype': 'float32' } ),
		empty( [ 2, 2 ], { 'dtype': 'int32' } ),
		empty( [ 2, 2 ], { 'dtype': 'complex128' } ),
		empty( [ 2, 2 ], { 'dtype': 'generic' } )
	];

	/* eslint-enable object-curly-newline, stdlib/line-closing-bracket-spacing */

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = reverseDimension( values[ i%values.length ], 0 );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an ndarray' );
		}
	}
	b.toc();
	if ( !isndarrayLike( v ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d,dim=1', function benchmark( b ) {
	var values;
	var v;
	var i;

	/* eslint-disable object-curly-newline, stdlib/line-closing-bracket-spacing */

	values = [
		empty( [ 2, 2 ], { 'dtype': 'float64' } ),
		empty( [ 2, 2 ], { 'dtype': 'float32' } ),
		empty( [ 2, 2 ], { 'dtype': 'int32' } ),
		empty( [ 2, 2 ], { 'dtype': 'complex128' } ),
		empty( [ 2, 2 ], { 'dtype': 'generic' } )
	];

	/* eslint-enable object-curly-newline, stdlib/line-closing-bracket-spacing */

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = reverseDimension( values[ i%values.length ], 1 );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an ndarray' );
		}
	}
	b.toc();
	if ( !isndarrayLike( v ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::3d,dim=0', function benchmark( b ) {
	var values;
	var v;
	var i;

	/* eslint-disable object-curly-newline, stdlib/line-closing-bracket-spacing */

	values = [
		empty( [ 2, 2, 2 ], { 'dtype': 'float64' } ),
		empty( [ 2, 2, 2 ], { 'dtype': 'float32' } ),
		empty( [ 2, 2, 2 ], { 'dtype': 'int32' } ),
		empty( [ 2, 2, 2 ], { 'dtype': 'complex128' } ),
		empty( [ 2, 2, 2 ], { 'dtype': 'generic' } )
	];

	/* eslint-enable object-curly-newline, stdlib/line-closing-bracket-spacing */

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = reverseDimension( values[ i%values.length ], 0 );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an ndarray' );
		}
	}
	b.toc();
	if ( !isndarrayLike( v ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::3d,dim=1', function benchmark( b ) {
	var values;
	var v;
	var i;

	/* eslint-disable object-curly-newline, stdlib/line-closing-bracket-spacing */

	values = [
		empty( [ 2, 2, 2 ], { 'dtype': 'float64' } ),
		empty( [ 2, 2, 2 ], { 'dtype': 'float32' } ),
		empty( [ 2, 2, 2 ], { 'dtype': 'int32' } ),
		empty( [ 2, 2, 2 ], { 'dtype': 'complex128' } ),
		empty( [ 2, 2, 2 ], { 'dtype': 'generic' } )
	];

	/* eslint-enable object-curly-newline, stdlib/line-closing-bracket-spacing */

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = reverseDimension( values[ i%values.length ], 1 );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an ndarray' );
		}
	}
	b.toc();
	if ( !isndarrayLike( v ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::3d,dim=2', function benchmark( b ) {
	var values;
	var v;
	var i;

	/* eslint-disable object-curly-newline, stdlib/line-closing-bracket-spacing */

	values = [
		empty( [ 2, 2, 2 ], { 'dtype': 'float64' } ),
		empty( [ 2, 2, 2 ], { 'dtype': 'float32' } ),
		empty( [ 2, 2, 2 ], { 'dtype': 'int32' } ),
		empty( [ 2, 2, 2 ], { 'dtype': 'complex128' } ),
		empty( [ 2, 2, 2 ], { 'dtype': 'generic' } )
	];

	/* eslint-enable object-curly-newline, stdlib/line-closing-bracket-spacing */

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = reverseDimension( values[ i%values.length ], 2 );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an ndarray' );
		}
	}
	b.toc();
	if ( !isndarrayLike( v ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
