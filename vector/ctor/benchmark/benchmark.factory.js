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
var isFunction = require( '@stdlib/assert/is-function' );
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var dtypes = require( './../../../dtypes' );
var pkg = require( './../package.json' ).name;
var factory = require( './../lib' ).factory;


// MAIN //

bench( pkg+':factory', function benchmark( b ) {
	var values;
	var v;
	var i;

	values = dtypes();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = factory( values[ i%values.length ] );
		if ( typeof v !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( !isFunction( v ) ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':factory:dtype=float64', function benchmark( b ) {
	var vector;
	var arr;
	var i;

	vector = factory( 'float64' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = vector( 0 );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isndarrayLike( arr ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':factory:dtype=float32', function benchmark( b ) {
	var vector;
	var arr;
	var i;

	vector = factory( 'float32' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = vector( 0 );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isndarrayLike( arr ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':factory:dtype=complex128', function benchmark( b ) {
	var vector;
	var arr;
	var i;

	vector = factory( 'complex128' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = vector( 0 );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isndarrayLike( arr ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':factory:dtype=complex64', function benchmark( b ) {
	var vector;
	var arr;
	var i;

	vector = factory( 'complex64' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = vector( 0 );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isndarrayLike( arr ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':factory:dtype=int32', function benchmark( b ) {
	var vector;
	var arr;
	var i;

	vector = factory( 'int32' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = vector( 0 );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isndarrayLike( arr ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':factory:dtype=uint32', function benchmark( b ) {
	var vector;
	var arr;
	var i;

	vector = factory( 'uint32' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = vector( 0 );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isndarrayLike( arr ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':factory:dtype=int16', function benchmark( b ) {
	var vector;
	var arr;
	var i;

	vector = factory( 'int16' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = vector( 0 );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isndarrayLike( arr ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':factory:dtype=uint16', function benchmark( b ) {
	var vector;
	var arr;
	var i;

	vector = factory( 'uint16' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = vector( 0 );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isndarrayLike( arr ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':factory:dtype=int8', function benchmark( b ) {
	var vector;
	var arr;
	var i;

	vector = factory( 'int8' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = vector( 0 );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isndarrayLike( arr ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':factory:dtype=uint8', function benchmark( b ) {
	var vector;
	var arr;
	var i;

	vector = factory( 'uint8' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = vector( 0 );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isndarrayLike( arr ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':factory:dtype=uint8c', function benchmark( b ) {
	var vector;
	var arr;
	var i;

	vector = factory( 'uint8c' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = vector( 0 );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isndarrayLike( arr ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':factory:dtype=generic', function benchmark( b ) {
	var vector;
	var arr;
	var i;

	vector = factory( 'generic' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = vector( 0 );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isndarrayLike( arr ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
