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

bench( pkg+'::1d:set', function benchmark( b ) {
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
		out.set( j, i );
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

bench( pkg+'::1d:set:mode=wrap', function benchmark( b ) {
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
		j = (i%20) - 10;
		tmp = out.set( j, i );
		if ( typeof tmp !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( out.get( j ) !== (i-1) ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::1d:set:mode=clamp', function benchmark( b ) {
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
		j = (i%20) - 10;
		tmp = out.set( j, i );
		if ( typeof tmp !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( out.get( j ) !== (i-1) ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d:set', function benchmark( b ) {
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
		j = i % 3;
		out.set( j, 1, i );
		if ( buffer[ (2*j) + (1*1) ] !== i ) {
			b.fail( 'should set value' );
		}
	}
	b.toc();
	if ( buffer[ (2*j) + 1 ] !== (i-1) ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d:set:mode=wrap', function benchmark( b ) {
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
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	order = 'row-major';

	x = ndarray( 'generic', buffer, shape, strides, offset, order, opts );
	out = ndarray2fancy( x );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = (i%30) - 15;
		tmp = out.set( j, 1, i );
		if ( typeof tmp !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( out.get( j, 1 ) !== (i-1) ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d:set:mode=clamp', function benchmark( b ) {
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
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	order = 'row-major';

	x = ndarray( 'generic', buffer, shape, strides, offset, order, opts );
	out = ndarray2fancy( x );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = (i%30) - 15;
		tmp = out.set( j, 1, i );
		if ( typeof tmp !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( out.get( j, 1 ) !== (i-1) ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::3d:set', function benchmark( b ) {
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
	shape = [ 1, 3, 2 ];
	strides = [ 6, 2, 1 ];
	offset = 0;
	order = 'row-major';

	x = ndarray( 'generic', buffer, shape, strides, offset, order );
	out = ndarray2fancy( x );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = i % 3;
		out.set( 0, j, 1, i );
		if ( buffer[ (2*j) + (1*1) ] !== i ) {
			b.fail( 'should set value' );
		}
	}
	b.toc();
	if ( buffer[ (2*j) + 1 ] !== (i-1) ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::3d:set:mode=wrap', function benchmark( b ) {
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
	shape = [ 1, 3, 2 ];
	strides = [ 6, 2, 1 ];
	offset = 0;
	order = 'row-major';

	x = ndarray( 'generic', buffer, shape, strides, offset, order, opts );
	out = ndarray2fancy( x );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = (i%30) - 15;
		tmp = out.set( 0, j, 1, i );
		if ( typeof tmp !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( out.get( 0, j, 1 ) !== (i-1) ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::3d:set:mode=clamp', function benchmark( b ) {
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
	shape = [ 1, 3, 2 ];
	strides = [ 6, 2, 1 ];
	offset = 0;
	order = 'row-major';

	x = ndarray( 'generic', buffer, shape, strides, offset, order, opts );
	out = ndarray2fancy( x );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = (i%30) - 15;
		tmp = out.set( 0, j, 1, i );
		if ( typeof tmp !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( out.get( 0, j, 1 ) !== (i-1) ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::4d:set', function benchmark( b ) {
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
	shape = [ 1, 1, 3, 2 ];
	strides = [ 6, 6, 2, 1 ];
	offset = 0;
	order = 'row-major';

	x = ndarray( 'generic', buffer, shape, strides, offset, order );
	out = ndarray2fancy( x );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = i % 3;
		out.set( 0, 0, j, 1, i );
		if ( buffer[ (2*j) + (1*1) ] !== i ) {
			b.fail( 'should set value' );
		}
	}
	b.toc();
	if ( buffer[ (2*j) + 1 ] !== (i-1) ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::4d:set:mode=wrap', function benchmark( b ) {
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
	shape = [ 1, 1, 3, 2 ];
	strides = [ 6, 6, 2, 1 ];
	offset = 0;
	order = 'row-major';

	x = ndarray( 'generic', buffer, shape, strides, offset, order, opts );
	out = ndarray2fancy( x );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = (i%30) - 15;
		tmp = out.set( 0, 0, j, 1, i );
		if ( typeof tmp !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( out.get( 0, 0, j, 1 ) !== (i-1) ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::4d:set:mode=clamp', function benchmark( b ) {
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
	shape = [ 1, 1, 3, 2 ];
	strides = [ 6, 6, 2, 1 ];
	offset = 0;
	order = 'row-major';

	x = ndarray( 'generic', buffer, shape, strides, offset, order, opts );
	out = ndarray2fancy( x );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = (i%30) - 15;
		tmp = out.set( 0, 0, j, 1, i );
		if ( typeof tmp !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( out.get( 0, 0, j, 1 ) !== (i-1) ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::5d:set', function benchmark( b ) {
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
	shape = [ 1, 1, 1, 3, 2 ];
	strides = [ 6, 6, 6, 2, 1 ];
	offset = 0;
	order = 'row-major';

	x = ndarray( 'generic', buffer, shape, strides, offset, order );
	out = ndarray2fancy( x );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = i % 3;
		out.set( 0, 0, 0, j, 1, i );
		if ( buffer[ (2*j) + (1*1) ] !== i ) {
			b.fail( 'should set value' );
		}
	}
	b.toc();
	if ( buffer[ (2*j) + 1 ] !== (i-1) ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::5d:set:mode=wrap', function benchmark( b ) {
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
	shape = [ 1, 1, 1, 3, 2 ];
	strides = [ 6, 6, 6, 2, 1 ];
	offset = 0;
	order = 'row-major';

	x = ndarray( 'generic', buffer, shape, strides, offset, order, opts );
	out = ndarray2fancy( x );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = (i%30) - 15;
		tmp = out.set( 0, 0, 0, j, 1, i );
		if ( typeof tmp !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( out.get( 0, 0, 0, j, 1 ) !== (i-1) ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::5d:set:mode=clamp', function benchmark( b ) {
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
	shape = [ 1, 1, 1, 3, 2 ];
	strides = [ 6, 6, 6, 2, 1 ];
	offset = 0;
	order = 'row-major';

	x = ndarray( 'generic', buffer, shape, strides, offset, order, opts );
	out = ndarray2fancy( x );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = (i%30) - 15;
		tmp = out.set( 0, 0, 0, j, 1, i );
		if ( typeof tmp !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( out.get( 0, 0, 0, j, 1 ) !== (i-1) ) {
		b.fail( 'should set value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
