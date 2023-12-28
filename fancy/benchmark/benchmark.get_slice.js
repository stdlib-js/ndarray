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

/* eslint-disable new-cap, max-len */

'use strict';

// MODULES //

var bench = require( '@stdlib/bench' );
var hasProxySupport = require( '@stdlib/assert/has-proxy-support' );
var S = require( '@stdlib/slice/ctor' );
var MultiSlice = require( '@stdlib/slice/multi' );
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var pkg = require( './../package.json' ).name;
var ndarray = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': !hasProxySupport()
};
var _ = null;


// MAIN //

bench( pkg+'::1d,get_slice,slice_object', opts, function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var slices;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 6 ];
	strides = [ 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	slices = [
		S(),
		S( _, _, 2 ),
		S( 2, -1 ),
		S( _, -3, -1 )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = i;
		v = out[ slices[ i%slices.length ] ];
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

bench( pkg+'::1d,get_slice,array_slice_object', opts, function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var slices;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 6 ];
	strides = [ 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	slices = [
		S(),
		S( _, _, 2 ),
		S( 2, -1 ),
		S( _, -3, -1 )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = i;
		v = out[ [ slices[ i%slices.length ] ] ];
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

bench( pkg+'::1d,get_slice,multi_slice_object', opts, function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var slices;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 6 ];
	strides = [ 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	slices = [
		new MultiSlice( S() ),
		new MultiSlice( S( _, _, 2 ) ),
		new MultiSlice( S( 2, -1 ) ),
		new MultiSlice( S( _, -3, -1 ) )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = i;
		v = out[ slices[ i%slices.length ] ];
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

bench( pkg+'::1d,get_slice,integer', opts, function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var slices;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 6 ];
	strides = [ 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	slices = [
		0,
		1,
		2,
		3,
		4,
		5
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = i;
		v = out[ slices[ i%slices.length ] ];
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

bench( pkg+'::1d,get_slice,subsequence', opts, function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var slices;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 6 ];
	strides = [ 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	slices = [
		':',
		'::2',
		'2:-1',
		':-3:-1'
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = i;
		v = out[ slices[ i%slices.length ] ];
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

bench( pkg+'::2d,get_slice,array_slice_object', opts, function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var slices;
	var shape;
	var order;
	var out;
	var s;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	slices = [
		S(),
		S( _, _, 2 ),
		S( _, -1 ),
		S( _, -3, -1 )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = i;
		s = slices[ i%slices.length ];
		v = out[ [ s, s ] ];
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

bench( pkg+'::2d,get_slice,multi_slice_object', opts, function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var slices;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	slices = [
		new MultiSlice( S(), S() ),
		new MultiSlice( S( _, _, 2 ), S( _, _, 2 ) ),
		new MultiSlice( S( _, -1 ), S( _, -1 ) ),
		new MultiSlice( S( _, -3, -1 ), S( _, -3, -1 ) )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = i;
		v = out[ slices[ i%slices.length ] ];
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

bench( pkg+'::2d,get_slice,integer', opts, function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = i;
		v = out[ [ i%shape[0], i%shape[1] ] ];
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

bench( pkg+'::2d,get_slice,subsequence', opts, function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var slices;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	slices = [
		':, :',
		'::2, ::2',
		':-1, :-1',
		':-3:-1, :-3:-1'
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = i;
		v = out[ slices[ i%slices.length ] ];
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

bench( pkg+'::3d,get_slice,array_slice_object', opts, function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var slices;
	var shape;
	var order;
	var out;
	var s;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ];
	shape = [ 2, 2, 2 ];
	strides = [ 4, 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	slices = [
		S(),
		S( _, _, 2 ),
		S( _, -1 ),
		S( _, -2, -1 )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = i;
		s = slices[ i%slices.length ];
		v = out[ [ s, s, s ] ];
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

bench( pkg+'::3d,get_slice,multi_slice_object', opts, function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var slices;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ];
	shape = [ 2, 2, 2 ];
	strides = [ 4, 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	slices = [
		new MultiSlice( S(), S(), S() ),
		new MultiSlice( S( _, _, 2 ), S( _, _, 2 ), S( _, _, 2 ) ),
		new MultiSlice( S( _, -1 ), S( _, -1 ), S( _, -1 ) ),
		new MultiSlice( S( _, -2, -1 ), S( _, -2, -1 ), S( _, -2, -1 ) )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = i;
		v = out[ slices[ i%slices.length ] ];
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

bench( pkg+'::3d,get_slice,integer', opts, function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ];
	shape = [ 2, 2, 2 ];
	strides = [ 4, 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = i;
		v = out[ [ i%shape[0], i%shape[1], i%shape[2] ] ];
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

bench( pkg+'::3d,get_slice,subsequence', opts, function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var slices;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ];
	shape = [ 2, 2, 2 ];
	strides = [ 4, 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	slices = [
		':, :, :',
		'::2, ::2, ::2',
		':-1, :-1, :-1',
		':-2:-1, :-2:-1, :-2:-1'
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = i;
		v = out[ slices[ i%slices.length ] ];
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

bench( pkg+'::4d,get_slice,array_slice_object', opts, function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var slices;
	var shape;
	var order;
	var out;
	var s;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ];
	shape = [ 2, 1, 2, 2 ];
	strides = [ 4, 4, 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	slices = [
		S(),
		S( _, _, 2 ),
		S( _, -1 ),
		S( _, _, -1 )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = i;
		s = slices[ i%slices.length ];
		v = out[ [ s, s, s, s ] ];
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

bench( pkg+'::4d,get_slice,multi_slice_object', opts, function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var slices;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ];
	shape = [ 2, 1, 2, 2 ];
	strides = [ 4, 4, 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	slices = [
		new MultiSlice( S(), S(), S(), S() ),
		new MultiSlice( S( _, _, 2 ), S( _, _, 2 ), S( _, _, 2 ), S( _, _, 2 ) ),
		new MultiSlice( S( _, -1 ), S( _, -1 ), S( _, -1 ), S( _, -1 ) ),
		new MultiSlice( S( _, _, -1 ), S( _, _, -1 ), S( _, _, -1 ), S( _, _, -1 ) )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = i;
		v = out[ slices[ i%slices.length ] ];
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

bench( pkg+'::4d,get_slice,integer', opts, function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ];
	shape = [ 2, 1, 2, 2 ];
	strides = [ 4, 4, 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = i;
		v = out[ [ i%shape[0], i%shape[1], i%shape[2], i%shape[3] ] ];
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

bench( pkg+'::4d,get_slice,subsequence', opts, function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var slices;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ];
	shape = [ 2, 1, 2, 2 ];
	strides = [ 4, 4, 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	slices = [
		':, :, :, :',
		'::2, ::2, ::2, ::2',
		':-1, :-1, :-1, :-1',
		'::-1, ::-1, ::-1, ::-1'
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = i;
		v = out[ slices[ i%slices.length ] ];
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

bench( pkg+'::5d,get_slice,array_slice_object', opts, function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var slices;
	var shape;
	var order;
	var out;
	var s;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ];
	shape = [ 2, 1, 1, 2, 2 ];
	strides = [ 4, 4, 4, 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	slices = [
		S(),
		S( _, _, 2 ),
		S( _, -1 ),
		S( _, _, -1 )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = i;
		s = slices[ i%slices.length ];
		v = out[ [ s, s, s, s, s ] ];
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

bench( pkg+'::5d,get_slice,multi_slice_object', opts, function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var slices;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ];
	shape = [ 2, 1, 1, 2, 2 ];
	strides = [ 4, 4, 4, 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	slices = [
		new MultiSlice( S(), S(), S(), S(), S() ),
		new MultiSlice( S( _, _, 2 ), S( _, _, 2 ), S( _, _, 2 ), S( _, _, 2 ), S( _, _, 2 ) ),
		new MultiSlice( S( _, -1 ), S( _, -1 ), S( _, -1 ), S( _, -1 ), S( _, -1 ) ),
		new MultiSlice( S( _, _, -1 ), S( _, _, -1 ), S( _, _, -1 ), S( _, _, -1 ), S( _, _, -1 ) )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = i;
		v = out[ slices[ i%slices.length ] ];
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

bench( pkg+'::5d,get_slice,integer', opts, function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ];
	shape = [ 2, 1, 1, 2, 2 ];
	strides = [ 4, 4, 4, 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = i;
		v = out[ [ i%shape[0], i%shape[1], i%shape[2], i%shape[3], i%shape[4] ] ];
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

bench( pkg+'::5d,get_slice,subsequence', opts, function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var slices;
	var shape;
	var order;
	var out;
	var v;
	var i;

	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ];
	shape = [ 2, 1, 1, 2, 2 ];
	strides = [ 4, 4, 4, 2, 1 ];
	offset = 0;
	order = 'row-major';

	out = ndarray( 'generic', buffer, shape, strides, offset, order );

	slices = [
		':, :, :, :, :',
		'::2, ::2, ::2, ::2, ::2',
		':-1, :-1, :-1, :-1, :-1',
		'::-1, ::-1, ::-1, ::-1, ::-1'
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buffer[ 1 ] = i;
		v = out[ slices[ i%slices.length ] ];
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
