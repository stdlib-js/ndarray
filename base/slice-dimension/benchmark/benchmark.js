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
var Slice = require( '@stdlib/slice/ctor' );
var baseEmpty = require( './../../../base/empty' );
var empty = require( './../../../empty' );
var pkg = require( './../package.json' ).name;
var sliceDimension = require( './../lib' );


// MAIN //

bench( pkg+'::1d,base', function benchmark( b ) {
	var values;
	var v;
	var s;
	var i;

	values = [
		baseEmpty( 'float64', [ 2 ], 'row-major' ),
		baseEmpty( 'float32', [ 2 ], 'row-major' ),
		baseEmpty( 'int32', [ 2 ], 'row-major' ),
		baseEmpty( 'complex128', [ 2 ], 'row-major' ),
		baseEmpty( 'generic', [ 2 ], 'row-major' )
	];
	s = new Slice( null );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = sliceDimension( values[ i%values.length ], 0, s, false, false );
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
	var s;
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

	s = new Slice( null );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = sliceDimension( values[ i%values.length ], 0, s, false, false );
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

bench( pkg+'::1d,base,reduced', function benchmark( b ) {
	var values;
	var v;
	var s;
	var i;

	values = [
		baseEmpty( 'float64', [ 2 ], 'row-major' ),
		baseEmpty( 'float32', [ 2 ], 'row-major' ),
		baseEmpty( 'int32', [ 2 ], 'row-major' ),
		baseEmpty( 'complex128', [ 2 ], 'row-major' ),
		baseEmpty( 'generic', [ 2 ], 'row-major' )
	];
	s = 1;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = sliceDimension( values[ i%values.length ], 0, s, false, false );
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

bench( pkg+'::1d,non-base,reduced', function benchmark( b ) {
	var values;
	var v;
	var s;
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

	s = 1;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = sliceDimension( values[ i%values.length ], 0, s, false, false );
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

bench( pkg+'::1d,base,out-of-bounds', function benchmark( b ) {
	var values;
	var v;
	var s;
	var i;

	values = [
		baseEmpty( 'float64', [ 2 ], 'row-major' ),
		baseEmpty( 'float32', [ 2 ], 'row-major' ),
		baseEmpty( 'int32', [ 2 ], 'row-major' ),
		baseEmpty( 'complex128', [ 2 ], 'row-major' ),
		baseEmpty( 'generic', [ 2 ], 'row-major' )
	];
	s = new Slice( 10, 20, 1 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = sliceDimension( values[ i%values.length ], 0, s, false, false );
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

bench( pkg+'::1d,non-base,out-of-bounds', function benchmark( b ) {
	var values;
	var v;
	var s;
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

	s = new Slice( 10, 20, 1 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = sliceDimension( values[ i%values.length ], 0, s, false, false );
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
	var s;
	var i;

	values = [
		baseEmpty( 'float64', [ 2, 2 ], 'row-major' ),
		baseEmpty( 'float32', [ 2, 2 ], 'row-major' ),
		baseEmpty( 'int32', [ 2, 2 ], 'row-major' ),
		baseEmpty( 'complex128', [ 2, 2 ], 'row-major' ),
		baseEmpty( 'generic', [ 2, 2 ], 'row-major' )
	];
	s = new Slice( null );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = sliceDimension( values[ i%values.length ], 1, s, false, false );
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
	var s;
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

	s = new Slice( null );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = sliceDimension( values[ i%values.length ], 1, s, false, false );
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

bench( pkg+'::2d,base,reduced', function benchmark( b ) {
	var values;
	var v;
	var s;
	var i;

	values = [
		baseEmpty( 'float64', [ 2, 2 ], 'row-major' ),
		baseEmpty( 'float32', [ 2, 2 ], 'row-major' ),
		baseEmpty( 'int32', [ 2, 2 ], 'row-major' ),
		baseEmpty( 'complex128', [ 2, 2 ], 'row-major' ),
		baseEmpty( 'generic', [ 2, 2 ], 'row-major' )
	];
	s = 1;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = sliceDimension( values[ i%values.length ], 1, s, false, false );
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

bench( pkg+'::2d,non-base,reduced', function benchmark( b ) {
	var values;
	var v;
	var s;
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

	s = 1;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = sliceDimension( values[ i%values.length ], 1, s, false, false );
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

bench( pkg+'::2d,base,out-of-bounds', function benchmark( b ) {
	var values;
	var v;
	var s;
	var i;

	values = [
		baseEmpty( 'float64', [ 2, 2 ], 'row-major' ),
		baseEmpty( 'float32', [ 2, 2 ], 'row-major' ),
		baseEmpty( 'int32', [ 2, 2 ], 'row-major' ),
		baseEmpty( 'complex128', [ 2, 2 ], 'row-major' ),
		baseEmpty( 'generic', [ 2, 2 ], 'row-major' )
	];
	s = new Slice( 10, 20, 1 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = sliceDimension( values[ i%values.length ], 1, s, false, false );
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

bench( pkg+'::2d,non-base,out-of-bounds', function benchmark( b ) {
	var values;
	var v;
	var s;
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

	s = new Slice( 10, 20, 1 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = sliceDimension( values[ i%values.length ], 1, s, false, false );
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
	var s;
	var i;

	values = [
		baseEmpty( 'float64', [ 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'float32', [ 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'int32', [ 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'complex128', [ 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'generic', [ 2, 2, 2 ], 'row-major' )
	];
	s = new Slice( null );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = sliceDimension( values[ i%values.length ], 1, s, false, false );
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
	var s;
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

	s = new Slice( null );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = sliceDimension( values[ i%values.length ], 1, s, false, false );
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

bench( pkg+'::3d,base,reduced', function benchmark( b ) {
	var values;
	var v;
	var s;
	var i;

	values = [
		baseEmpty( 'float64', [ 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'float32', [ 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'int32', [ 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'complex128', [ 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'generic', [ 2, 2, 2 ], 'row-major' )
	];
	s = 1;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = sliceDimension( values[ i%values.length ], 1, s, false, false );
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

bench( pkg+'::3d,non-base,reduced', function benchmark( b ) {
	var values;
	var v;
	var s;
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

	s = 1;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = sliceDimension( values[ i%values.length ], 1, s, false, false );
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

bench( pkg+'::3d,base,out-of-bounds', function benchmark( b ) {
	var values;
	var v;
	var s;
	var i;

	values = [
		baseEmpty( 'float64', [ 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'float32', [ 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'int32', [ 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'complex128', [ 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'generic', [ 2, 2, 2 ], 'row-major' )
	];
	s = new Slice( 10, 20, 1 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = sliceDimension( values[ i%values.length ], 1, s, false, false );
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

bench( pkg+'::3d,non-base,out-of-bounds', function benchmark( b ) {
	var values;
	var v;
	var s;
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

	s = new Slice( 10, 20, 1 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = sliceDimension( values[ i%values.length ], 1, s, false, false );
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
	var s;
	var i;

	values = [
		baseEmpty( 'float64', [ 2, 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'float32', [ 2, 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'int32', [ 2, 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'complex128', [ 2, 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'generic', [ 2, 2, 2, 2 ], 'row-major' )
	];
	s = new Slice( null );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = sliceDimension( values[ i%values.length ], 1, s, false, false );
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
	var s;
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

	s = new Slice( null );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = sliceDimension( values[ i%values.length ], 1, s, false, false );
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

bench( pkg+'::4d,base,reduced', function benchmark( b ) {
	var values;
	var v;
	var s;
	var i;

	values = [
		baseEmpty( 'float64', [ 2, 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'float32', [ 2, 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'int32', [ 2, 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'complex128', [ 2, 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'generic', [ 2, 2, 2, 2 ], 'row-major' )
	];
	s = 1;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = sliceDimension( values[ i%values.length ], 1, s, false, false );
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

bench( pkg+'::4d,non-base,reduced', function benchmark( b ) {
	var values;
	var v;
	var s;
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

	s = 1;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = sliceDimension( values[ i%values.length ], 1, s, false, false );
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

bench( pkg+'::4d,base,out-of-bounds', function benchmark( b ) {
	var values;
	var v;
	var s;
	var i;

	values = [
		baseEmpty( 'float64', [ 2, 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'float32', [ 2, 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'int32', [ 2, 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'complex128', [ 2, 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'generic', [ 2, 2, 2, 2 ], 'row-major' )
	];
	s = new Slice( 10, 20, 1 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = sliceDimension( values[ i%values.length ], 1, s, false, false );
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

bench( pkg+'::4d,non-base,out-of-bounds', function benchmark( b ) {
	var values;
	var v;
	var s;
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

	s = new Slice( 10, 20, 1 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = sliceDimension( values[ i%values.length ], 1, s, false, false );
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
	var s;
	var i;

	values = [
		baseEmpty( 'float64', [ 2, 2, 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'float32', [ 2, 2, 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'int32', [ 2, 2, 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'complex128', [ 2, 2, 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'generic', [ 2, 2, 2, 2, 2 ], 'row-major' )
	];
	s = new Slice( null );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = sliceDimension( values[ i%values.length ], 1, s, false, false );
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
	var s;
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

	s = new Slice( null );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = sliceDimension( values[ i%values.length ], 1, s, false, false );
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

bench( pkg+'::5d,base,reduced', function benchmark( b ) {
	var values;
	var v;
	var s;
	var i;

	values = [
		baseEmpty( 'float64', [ 2, 2, 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'float32', [ 2, 2, 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'int32', [ 2, 2, 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'complex128', [ 2, 2, 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'generic', [ 2, 2, 2, 2, 2 ], 'row-major' )
	];
	s = 1;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = sliceDimension( values[ i%values.length ], 1, s, false, false );
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

bench( pkg+'::5d,non-base,reduced', function benchmark( b ) {
	var values;
	var v;
	var s;
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

	s = 1;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = sliceDimension( values[ i%values.length ], 1, s, false, false );
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

bench( pkg+'::5d,base,out-of-bounds', function benchmark( b ) {
	var values;
	var v;
	var s;
	var i;

	values = [
		baseEmpty( 'float64', [ 2, 2, 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'float32', [ 2, 2, 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'int32', [ 2, 2, 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'complex128', [ 2, 2, 2, 2, 2 ], 'row-major' ),
		baseEmpty( 'generic', [ 2, 2, 2, 2, 2 ], 'row-major' )
	];
	s = new Slice( 10, 20, 1 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = sliceDimension( values[ i%values.length ], 1, s, false, false );
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

bench( pkg+'::5d,non-base,out-of-bounds', function benchmark( b ) {
	var values;
	var v;
	var s;
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

	s = new Slice( 10, 20, 1 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = sliceDimension( values[ i%values.length ], 1, s, false, false );
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
