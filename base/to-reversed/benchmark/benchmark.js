/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var baseEmpty = require( './../../../base/empty' );
var empty = require( './../../../empty' );
var pkg = require( './../package.json' ).name;
var toReversed = require( './../lib' );


// MAIN //

bench( pkg+'::0d,base', function benchmark( b ) {
	var values;
	var v;
	var i;

	values = [
		baseEmpty( 'float64', [], 'row-major' ),
		baseEmpty( 'float32', [], 'row-major' ),
		baseEmpty( 'int32', [], 'row-major' ),
		baseEmpty( 'complex128', [], 'row-major' ),
		baseEmpty( 'generic', [], 'row-major' )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = toReversed( values[ i%values.length ] );
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

bench( pkg+'::0d,non-base', function benchmark( b ) {
	var values;
	var v;
	var i;

	/* eslint-disable object-curly-newline */

	values = [
		empty( [], { 'dtype': 'float64' } ),
		empty( [], { 'dtype': 'float32' } ),
		empty( [], { 'dtype': 'int32' } ),
		empty( [], { 'dtype': 'complex128' } ),
		empty( [], { 'dtype': 'generic' } )
	];

	/* eslint-enable object-curly-newline */

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = toReversed( values[ i%values.length ] );
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

bench( pkg+'::1d,base', function benchmark( b ) {
	var values;
	var v;
	var i;

	values = [
		baseEmpty( 'float64', [ 2 ], 'row-major' ),
		baseEmpty( 'float32', [ 2 ], 'row-major' ),
		baseEmpty( 'int32', [ 2 ], 'row-major' ),
		baseEmpty( 'complex128', [ 2 ], 'row-major' ),
		baseEmpty( 'generic', [ 2 ], 'row-major' )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = toReversed( values[ i%values.length ] );
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

bench( pkg+'::1d,non-base', function benchmark( b ) {
	var values;
	var v;
	var i;

	/* eslint-disable object-curly-newline */

	values = [
		empty( [ 2 ], { 'dtype': 'float64' } ),
		empty( [ 2 ], { 'dtype': 'float32' } ),
		empty( [ 2 ], { 'dtype': 'int32' } ),
		empty( [ 2 ], { 'dtype': 'complex128' } ),
		empty( [ 2 ], { 'dtype': 'generic' } )
	];

	/* eslint-enable object-curly-newline */

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = toReversed( values[ i%values.length ] );
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

bench( pkg+'::2d,base', function benchmark( b ) {
	var values;
	var v;
	var i;

	values = [
		baseEmpty( 'float64', [ 2, 2 ], 'row-major' ),
		baseEmpty( 'float32', [ 2, 2 ], 'row-major' ),
		baseEmpty( 'int32', [ 2, 2 ], 'row-major' ),
		baseEmpty( 'complex128', [ 2, 2 ], 'row-major' ),
		baseEmpty( 'generic', [ 2, 2 ], 'row-major' )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = toReversed( values[ i%values.length ] );
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

bench( pkg+'::2d,non-base', function benchmark( b ) {
	var values;
	var v;
	var i;

	/* eslint-disable object-curly-newline */

	values = [
		empty( [ 2, 2 ], { 'dtype': 'float64' } ),
		empty( [ 2, 2 ], { 'dtype': 'float32' } ),
		empty( [ 2, 2 ], { 'dtype': 'int32' } ),
		empty( [ 2, 2 ], { 'dtype': 'complex128' } ),
		empty( [ 2, 2 ], { 'dtype': 'generic' } )
	];

	/* eslint-enable object-curly-newline */

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = toReversed( values[ i%values.length ] );
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

bench( pkg+'::3d,base', function benchmark( b ) {
	var values;
	var v;
	var i;

	values = [
		baseEmpty( 'float64', [ 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'float32', [ 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'int32', [ 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'complex128', [ 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'generic', [ 2, 2, 2 ], 'row-major' )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = toReversed( values[ i%values.length ] );
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

bench( pkg+'::3d,non-base', function benchmark( b ) {
	var values;
	var v;
	var i;

	/* eslint-disable object-curly-newline */

	values = [
		empty( [ 2, 2, 2 ], { 'dtype': 'float64' } ),
		empty( [ 2, 2, 2 ], { 'dtype': 'float32' } ),
		empty( [ 2, 2, 2 ], { 'dtype': 'int32' } ),
		empty( [ 2, 2, 2 ], { 'dtype': 'complex128' } ),
		empty( [ 2, 2, 2 ], { 'dtype': 'generic' } )
	];

	/* eslint-enable object-curly-newline */

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = toReversed( values[ i%values.length ] );
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

bench( pkg+'::4d,base', function benchmark( b ) {
	var values;
	var v;
	var i;

	values = [
		baseEmpty( 'float64', [ 2, 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'float32', [ 2, 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'int32', [ 2, 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'complex128', [ 2, 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'generic', [ 2, 2, 2, 2 ], 'row-major' )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = toReversed( values[ i%values.length ] );
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

bench( pkg+'::4d,non-base', function benchmark( b ) {
	var values;
	var v;
	var i;

	/* eslint-disable object-curly-newline */

	values = [
		empty( [ 2, 2, 2, 2 ], { 'dtype': 'float64' } ),
		empty( [ 2, 2, 2, 2 ], { 'dtype': 'float32' } ),
		empty( [ 2, 2, 2, 2 ], { 'dtype': 'int32' } ),
		empty( [ 2, 2, 2, 2 ], { 'dtype': 'complex128' } ),
		empty( [ 2, 2, 2, 2 ], { 'dtype': 'generic' } )
	];

	/* eslint-enable object-curly-newline */

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = toReversed( values[ i%values.length ] );
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

bench( pkg+'::5d,base', function benchmark( b ) {
	var values;
	var v;
	var i;

	values = [
		baseEmpty( 'float64', [ 2, 2, 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'float32', [ 2, 2, 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'int32', [ 2, 2, 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'complex128', [ 2, 2, 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'generic', [ 2, 2, 2, 2, 2 ], 'row-major' )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = toReversed( values[ i%values.length ] );
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

bench( pkg+'::5d,non-base', function benchmark( b ) {
	var values;
	var v;
	var i;

	/* eslint-disable object-curly-newline */

	values = [
		empty( [ 2, 2, 2, 2, 2 ], { 'dtype': 'float64' } ),
		empty( [ 2, 2, 2, 2, 2 ], { 'dtype': 'float32' } ),
		empty( [ 2, 2, 2, 2, 2 ], { 'dtype': 'int32' } ),
		empty( [ 2, 2, 2, 2, 2 ], { 'dtype': 'complex128' } ),
		empty( [ 2, 2, 2, 2, 2 ], { 'dtype': 'generic' } )
	];

	/* eslint-enable object-curly-newline */

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = toReversed( values[ i%values.length ] );
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
