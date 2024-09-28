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
var isDataType = require( './../../../base/assert/is-data-type' );
var dtypes = require( './../../../dtypes' );
var pkg = require( './../package.json' ).name;
var resolve = require( './../lib' );


// VARIABLES //

var DTYPES = dtypes( 'numeric' );


// MAIN //

bench( pkg+':policy=default', function benchmark( b ) {
	var out;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = resolve( DTYPES[ i%DTYPES.length ], 'default' );
		if ( typeof out !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isDataType( out ) ) {
		b.fail( 'should return a data type' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':policy=same', function benchmark( b ) {
	var out;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = resolve( DTYPES[ i%DTYPES.length ], 'same' );
		if ( typeof out !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isDataType( out ) ) {
		b.fail( 'should return a data type' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':policy=promoted', function benchmark( b ) {
	var out;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = resolve( DTYPES[ i%DTYPES.length ], 'promoted' );
		if ( typeof out !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isDataType( out ) ) {
		b.fail( 'should return a data type' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':policy=real', function benchmark( b ) {
	var out;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = resolve( DTYPES[ i%DTYPES.length ], 'real' );
		if ( typeof out !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isDataType( out ) ) {
		b.fail( 'should return a data type' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':policy=floating_point', function benchmark( b ) {
	var out;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = resolve( DTYPES[ i%DTYPES.length ], 'floating_point' );
		if ( typeof out !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isDataType( out ) ) {
		b.fail( 'should return a data type' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':policy=real_floating_point', function benchmark( b ) {
	var out;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = resolve( DTYPES[ i%DTYPES.length ], 'real_floating_point' );
		if ( typeof out !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isDataType( out ) ) {
		b.fail( 'should return a data type' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':policy=complex_floating_point', function benchmark( b ) {
	var out;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = resolve( DTYPES[ i%DTYPES.length ], 'complex_floating_point' );
		if ( typeof out !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isDataType( out ) ) {
		b.fail( 'should return a data type' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':policy=integer', function benchmark( b ) {
	var out;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = resolve( DTYPES[ i%DTYPES.length ], 'integer' );
		if ( typeof out !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isDataType( out ) ) {
		b.fail( 'should return a data type' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':policy=signed_integer', function benchmark( b ) {
	var out;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = resolve( DTYPES[ i%DTYPES.length ], 'signed_integer' );
		if ( typeof out !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isDataType( out ) ) {
		b.fail( 'should return a data type' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':policy=unsigned_integer', function benchmark( b ) {
	var out;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = resolve( DTYPES[ i%DTYPES.length ], 'unsigned_integer' );
		if ( typeof out !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isDataType( out ) ) {
		b.fail( 'should return a data type' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':policy=numeric', function benchmark( b ) {
	var out;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = resolve( DTYPES[ i%DTYPES.length ], 'numeric' );
		if ( typeof out !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isDataType( out ) ) {
		b.fail( 'should return a data type' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':policy=<dtype>', function benchmark( b ) {
	var out;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = resolve( DTYPES[ i%DTYPES.length ], 'int32' );
		if ( typeof out !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isDataType( out ) ) {
		b.fail( 'should return a data type' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
