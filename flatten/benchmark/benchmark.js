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
var zeros = require( './../../base/zeros' );
var pkg = require( './../package.json' ).name;
var flatten = require( './../lib' );


// MAIN //

bench( pkg+'::2d:row-major', function benchmark( b ) {
	var values;
	var opts;
	var y;
	var i;
	var j;

	values = [
		zeros( 'float64', [ 10, 10 ], 'row-major' ),
		zeros( 'float32', [ 10, 10 ], 'row-major' ),
		zeros( 'int32', [ 10, 10 ], 'row-major' ),
		zeros( 'complex128', [ 10, 10 ], 'row-major' ),
		zeros( 'generic', [ 10, 10 ], 'row-major' )
	];
	opts = {
		'depth': 1,
		'order': 'row-major'
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = i % values.length;
		y = flatten( values[ j ], opts );
		if ( typeof y !== 'object' ) {
			b.fail( 'should return an ndarray' );
		}
	}
	b.toc();
	if ( !isndarrayLike( y ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d:column-major', function benchmark( b ) {
	var values;
	var opts;
	var y;
	var i;
	var j;

	values = [
		zeros( 'float64', [ 10, 10 ], 'row-major' ),
		zeros( 'float32', [ 10, 10 ], 'row-major' ),
		zeros( 'int32', [ 10, 10 ], 'row-major' ),
		zeros( 'complex128', [ 10, 10 ], 'row-major' ),
		zeros( 'generic', [ 10, 10 ], 'row-major' )
	];
	opts = {
		'depth': 1,
		'order': 'column-major'
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = i % values.length;
		y = flatten( values[ j ], opts );
		if ( typeof y !== 'object' ) {
			b.fail( 'should return an ndarray' );
		}
	}
	b.toc();
	if ( !isndarrayLike( y ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::3d:row-major', function benchmark( b ) {
	var values;
	var opts;
	var y;
	var i;
	var j;

	values = [
		zeros( 'float64', [ 2, 5, 10 ], 'row-major' ),
		zeros( 'float32', [ 2, 5, 10 ], 'row-major' ),
		zeros( 'int32', [ 2, 5, 10 ], 'row-major' ),
		zeros( 'complex128', [ 2, 5, 10 ], 'row-major' ),
		zeros( 'generic', [ 2, 5, 10 ], 'row-major' )
	];
	opts = {
		'depth': 2,
		'order': 'row-major'
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = i % values.length;
		y = flatten( values[ j ], opts );
		if ( typeof y !== 'object' ) {
			b.fail( 'should return an ndarray' );
		}
	}
	b.toc();
	if ( !isndarrayLike( y ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::3d:column-major', function benchmark( b ) {
	var values;
	var opts;
	var y;
	var i;
	var j;

	values = [
		zeros( 'float64', [ 2, 5, 10 ], 'row-major' ),
		zeros( 'float32', [ 2, 5, 10 ], 'row-major' ),
		zeros( 'int32', [ 2, 5, 10 ], 'row-major' ),
		zeros( 'complex128', [ 2, 5, 10 ], 'row-major' ),
		zeros( 'generic', [ 2, 5, 10 ], 'row-major' )
	];
	opts = {
		'depth': 2,
		'order': 'column-major'
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = i % values.length;
		y = flatten( values[ j ], opts );
		if ( typeof y !== 'object' ) {
			b.fail( 'should return an ndarray' );
		}
	}
	b.toc();
	if ( !isndarrayLike( y ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::4d:row-major', function benchmark( b ) {
	var values;
	var opts;
	var y;
	var i;
	var j;

	values = [
		zeros( 'float64', [ 2, 5, 2, 5 ], 'row-major' ),
		zeros( 'float32', [ 2, 5, 2, 5 ], 'row-major' ),
		zeros( 'int32', [ 2, 5, 2, 5 ], 'row-major' ),
		zeros( 'complex128', [ 2, 5, 2, 5 ], 'row-major' ),
		zeros( 'generic', [ 2, 5, 2, 5 ], 'row-major' )
	];
	opts = {
		'depth': 3,
		'order': 'row-major'
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = i % values.length;
		y = flatten( values[ j ], opts );
		if ( typeof y !== 'object' ) {
			b.fail( 'should return an ndarray' );
		}
	}
	b.toc();
	if ( !isndarrayLike( y ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::4d:column-major', function benchmark( b ) {
	var values;
	var opts;
	var y;
	var i;
	var j;

	values = [
		zeros( 'float64', [ 2, 5, 2, 5 ], 'row-major' ),
		zeros( 'float32', [ 2, 5, 2, 5 ], 'row-major' ),
		zeros( 'int32', [ 2, 5, 2, 5 ], 'row-major' ),
		zeros( 'complex128', [ 2, 5, 2, 5 ], 'row-major' ),
		zeros( 'generic', [ 2, 5, 2, 5 ], 'row-major' )
	];
	opts = {
		'depth': 3,
		'order': 'column-major'
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = i % values.length;
		y = flatten( values[ j ], opts );
		if ( typeof y !== 'object' ) {
			b.fail( 'should return an ndarray' );
		}
	}
	b.toc();
	if ( !isndarrayLike( y ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::5d:row-major', function benchmark( b ) {
	var values;
	var opts;
	var y;
	var i;
	var j;

	values = [
		zeros( 'float64', [ 2, 5, 2, 5, 1 ], 'row-major' ),
		zeros( 'float32', [ 2, 5, 2, 5, 1 ], 'row-major' ),
		zeros( 'int32', [ 2, 5, 2, 5, 1 ], 'row-major' ),
		zeros( 'complex128', [ 2, 5, 2, 5, 1 ], 'row-major' ),
		zeros( 'generic', [ 2, 5, 2, 5, 1 ], 'row-major' )
	];
	opts = {
		'depth': 4,
		'order': 'row-major'
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = i % values.length;
		y = flatten( values[ j ], opts );
		if ( typeof y !== 'object' ) {
			b.fail( 'should return an ndarray' );
		}
	}
	b.toc();
	if ( !isndarrayLike( y ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::5d:column-major', function benchmark( b ) {
	var values;
	var opts;
	var y;
	var i;
	var j;

	values = [
		zeros( 'float64', [ 2, 5, 2, 5, 1 ], 'row-major' ),
		zeros( 'float32', [ 2, 5, 2, 5, 1 ], 'row-major' ),
		zeros( 'int32', [ 2, 5, 2, 5, 1 ], 'row-major' ),
		zeros( 'complex128', [ 2, 5, 2, 5, 1 ], 'row-major' ),
		zeros( 'generic', [ 2, 5, 2, 5, 1 ], 'row-major' )
	];
	opts = {
		'depth': 4,
		'order': 'column-major'
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = i % values.length;
		y = flatten( values[ j ], opts );
		if ( typeof y !== 'object' ) {
			b.fail( 'should return an ndarray' );
		}
	}
	b.toc();
	if ( !isndarrayLike( y ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
