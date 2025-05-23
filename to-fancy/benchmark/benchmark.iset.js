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
var ndarray = require( './../../ctor' );
var pkg = require( './../package.json' ).name;
var ndarray2fancy = require( './../lib' );


// MAIN //

bench( pkg+'::1d:iset', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var x;
	var i;
	var j;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 6 ];
	strides = [ 1 ];
	offset = 0;
	order = 'row-major';

	x = ndarray( 'generic', buffer, shape, strides, offset, order );
	out = ndarray2fancy( x );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = i % 6;
		out.iset( j, i );
		if ( buffer[ j ] !== i ) {
			b.fail( 'should set value' );
		}
	}
	b.toc();
	if ( buffer[ j ] !== (i-1) ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::1d:iset:mode=wrap', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var opts;
	var out;
	var tmp;
	var x;
	var i;
	var j;

	opts = {
		'mode': 'wrap'
	};

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 6 ];
	strides = [ 1 ];
	offset = 0;
	order = 'row-major';

	x = ndarray( 'generic', buffer, shape, strides, offset, order, opts );
	out = ndarray2fancy( x );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = (i%30) - 15;
		tmp = out.iset( j, i );
		if ( typeof tmp !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( out.iget( j ) !== (i-1) ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::1d:iset:mode=clamp', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var opts;
	var out;
	var tmp;
	var x;
	var i;
	var j;

	opts = {
		'mode': 'clamp'
	};

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 6 ];
	strides = [ 1 ];
	offset = 0;
	order = 'row-major';

	x = ndarray( 'generic', buffer, shape, strides, offset, order, opts );
	out = ndarray2fancy( x );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = (i%30) - 15;
		tmp = out.iset( j, i );
		if ( typeof tmp !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( out.iget( j ) !== (i-1) ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d,all_positive_strides:iset:order=row-major', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var x;
	var i;
	var j;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	order = 'row-major';

	x = ndarray( 'generic', buffer, shape, strides, offset, order );
	out = ndarray2fancy( x );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = i % 6;
		out.iset( j, i );
		if ( buffer[ j ] !== i ) {
			b.fail( 'should set value' );
		}
	}
	b.toc();
	if ( buffer[ j ] !== (i-1) ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d,all_positive_strides:iset:order=column-major', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var x;
	var i;
	var j;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	order = 'column-major';

	x = ndarray( 'generic', buffer, shape, strides, offset, order );
	out = ndarray2fancy( x );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = i % 6;
		out.iset( j, i );
		if ( buffer[ j ] !== i ) {
			b.fail( 'should set value' );
		}
	}
	b.toc();
	if ( buffer[ j ] !== (i-1) ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d,all_negative_strides:iset:order=row-major', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var x;
	var i;
	var j;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ -2, -1 ];
	offset = 5;
	order = 'row-major';

	x = ndarray( 'generic', buffer, shape, strides, offset, order );
	out = ndarray2fancy( x );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = i % 6;
		out.iset( j, i );
		if ( buffer[ 5-j ] !== i ) {
			b.fail( 'should set value' );
		}
	}
	b.toc();
	if ( buffer[ 5-j ] !== (i-1) ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d,all_negative_strides:iset:order=column-major', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var x;
	var i;
	var j;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ -2, -1 ];
	offset = 5;
	order = 'column-major';

	x = ndarray( 'generic', buffer, shape, strides, offset, order );
	out = ndarray2fancy( x );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = i % 6;
		out.iset( j, i );
		if ( buffer[ 5-j ] !== i ) {
			b.fail( 'should set value' );
		}
	}
	b.toc();
	if ( buffer[ 5-j ] !== (i-1) ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d,mixed_sign_strides:iset:order=row-major', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var x;
	var i;
	var j;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ -2, 1 ];
	offset = 4;
	order = 'row-major';

	x = ndarray( 'generic', buffer, shape, strides, offset, order );
	out = ndarray2fancy( x );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = i % 6;
		out.iset( j, i );
		if ( buffer[ 0 ] !== buffer[ 0 ] ) {
			b.fail( 'should not be NaN' );
		}
	}
	b.toc();
	if ( out.iget( j ) !== (i-1) ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d,mixed_sign_strides:iset:order=column-major', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var x;
	var i;
	var j;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ -2, 1 ];
	offset = 4;
	order = 'column-major';

	x = ndarray( 'generic', buffer, shape, strides, offset, order );
	out = ndarray2fancy( x );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = i % 6;
		out.iset( j, i );
		if ( buffer[ 0 ] !== buffer[ 0 ] ) {
			b.fail( 'should not be NaN' );
		}
	}
	b.toc();
	if ( out.iget( j ) !== (i-1) ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
