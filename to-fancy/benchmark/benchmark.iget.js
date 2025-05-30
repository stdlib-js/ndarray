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

bench( pkg+'::1d:iget', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var x;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 6 ];
	strides = [ 1 ];
	offset = 0;
	order = 'row-major';

	x = ndarray( 'generic', buffer, shape, strides, offset, order );
	out = ndarray2fancy( x );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = i;
		v = out.iget( i%6 );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::1d:iget:mode=wrap', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var opts;
	var out;
	var x;
	var v;
	var i;

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
		buffer[ 1 ] = i;
		v = out.iget( i%6 );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::1d:iget:mode=clamp', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var opts;
	var out;
	var x;
	var v;
	var i;

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
		buffer[ 1 ] = i;
		v = out.iget( i%6 );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d,all_positive_strides:iget:order=row-major', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var x;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	order = 'row-major';

	x = ndarray( 'generic', buffer, shape, strides, offset, order );
	out = ndarray2fancy( x );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = i;
		v = out.iget( i%6 );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d,all_positive_strides:iget:order=column-major', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var x;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	order = 'column-major';

	x = ndarray( 'generic', buffer, shape, strides, offset, order );
	out = ndarray2fancy( x );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = i;
		v = out.iget( i%6 );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d,all_negative_strides:iget:order=row-major', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var x;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ -2, -1 ];
	offset = 5;
	order = 'row-major';

	x = ndarray( 'generic', buffer, shape, strides, offset, order );
	out = ndarray2fancy( x );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = i;
		v = out.iget( i%6 );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d,all_negative_strides:iget:order=column-major', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var x;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ -2, -1 ];
	offset = 5;
	order = 'column-major';

	x = ndarray( 'generic', buffer, shape, strides, offset, order );
	out = ndarray2fancy( x );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = i;
		v = out.iget( i%6 );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d,mixed_sign_strides:iget:order=row-major', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var x;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ -2, 1 ];
	offset = 4;
	order = 'row-major';

	x = ndarray( 'generic', buffer, shape, strides, offset, order );
	out = ndarray2fancy( x );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = i;
		v = out.iget( i%6 );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d,mixed_sign_strides:iget:order=column-major', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var x;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ -2, 1 ];
	offset = 4;
	order = 'column-major';

	x = ndarray( 'generic', buffer, shape, strides, offset, order );
	out = ndarray2fancy( x );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = i;
		v = out.iget( i%6 );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
