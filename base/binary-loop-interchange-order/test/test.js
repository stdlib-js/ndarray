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

var tape = require( 'tape' );
var isArray = require( '@stdlib/assert/is-array' );
var binaryLoopOrder = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof binaryLoopOrder, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns loop interchange data (row-major)', function test( t ) {
	var sh;
	var sx;
	var sy;
	var sz;
	var o;

	sh = [ 4, 2, 2 ];
	sx = [ 4, -2, 1 ];
	sy = [ -4, 2, 1 ];
	sz = [ -8, 4, -2 ];

	o = binaryLoopOrder( sh, sx, sy, sz );

	t.notEqual( o.sh, sh, 'returns new array' );
	t.strictEqual( isArray( o.sh ), true, 'returns expected value' );
	t.deepEqual( o.sh, [ 2, 2, 4 ], 'returns expected value' );

	t.notEqual( o.sx, sx, 'returns new array' );
	t.strictEqual( isArray( o.sx ), true, 'returns expected value' );
	t.deepEqual( o.sx, [ 1, -2, 4 ], 'returns expected value' );

	t.notEqual( o.sy, sy, 'returns new array' );
	t.strictEqual( isArray( o.sy ), true, 'returns expected value' );
	t.deepEqual( o.sy, [ 1, 2, -4 ], 'returns expected value' );

	t.notEqual( o.sz, sz, 'returns new array' );
	t.strictEqual( isArray( o.sz ), true, 'returns expected value' );
	t.deepEqual( o.sz, [ -2, 4, -8 ], 'returns expected value' );

	t.end();
});

tape( 'the function returns loop interchange data (column-major)', function test( t ) {
	var sh;
	var sx;
	var sy;
	var sz;
	var o;

	sh = [ 4, 2, 2 ];
	sx = [ 1, -4, 8 ];
	sy = [ -1, 4, 8 ];
	sz = [ -2, 4, -8 ];

	o = binaryLoopOrder( sh, sx, sy, sz );

	t.notEqual( o.sh, sh, 'returns new array' );
	t.strictEqual( isArray( o.sh ), true, 'returns expected value' );
	t.deepEqual( o.sh, [ 4, 2, 2 ], 'returns expected value' );

	t.notEqual( o.sx, sx, 'returns new array' );
	t.strictEqual( isArray( o.sx ), true, 'returns expected value' );
	t.deepEqual( o.sx, [ 1, -4, 8 ], 'returns expected value' );

	t.notEqual( o.sy, sy, 'returns new array' );
	t.strictEqual( isArray( o.sy ), true, 'returns expected value' );
	t.deepEqual( o.sy, [ -1, 4, 8 ], 'returns expected value' );

	t.notEqual( o.sz, sz, 'returns new array' );
	t.strictEqual( isArray( o.sz ), true, 'returns expected value' );
	t.deepEqual( o.sz, [ -2, 4, -8 ], 'returns expected value' );

	t.end();
});

tape( 'the function returns loop interchange data (mixed order)', function test( t ) {
	var sh;
	var sx;
	var sy;
	var sz;
	var o;

	sh = [ 4, 2, 2 ];
	sx = [ 4, -2, 1 ];
	sy = [ 1, -4, -8 ];
	sz = [ -8, 4, -2 ];

	o = binaryLoopOrder( sh, sx, sy, sz );

	t.notEqual( o.sh, sh, 'returns new array' );
	t.strictEqual( isArray( o.sh ), true, 'returns expected value' );
	t.deepEqual( o.sh, [ 2, 2, 4 ], 'returns expected value' );

	t.notEqual( o.sx, sx, 'returns new array' );
	t.strictEqual( isArray( o.sx ), true, 'returns expected value' );
	t.deepEqual( o.sx, [ 1, -2, 4 ], 'returns expected value' );

	t.notEqual( o.sy, sy, 'returns new array' );
	t.strictEqual( isArray( o.sy ), true, 'returns expected value' );
	t.deepEqual( o.sy, [ -8, -4, 1 ], 'returns expected value' );

	t.notEqual( o.sz, sz, 'returns new array' );
	t.strictEqual( isArray( o.sz ), true, 'returns expected value' );
	t.deepEqual( o.sz, [ -2, 4, -8 ], 'returns expected value' );

	t.end();
});

tape( 'the function returns loop interchange data (mostly disorganized)', function test( t ) {
	var sh;
	var sx;
	var sy;
	var sz;
	var o;

	sh = [ 4, 2, 2 ];
	sx = [ -2, 4, 1 ]; // disorganized
	sy = [ -4, 2, 1 ]; // row-major
	sz = [ -8, -2, 4 ]; // disorganized

	o = binaryLoopOrder( sh, sx, sy, sz );

	t.notEqual( o.sh, sh, 'returns new array' );
	t.strictEqual( isArray( o.sh ), true, 'returns expected value' );
	t.deepEqual( o.sh, [ 2, 2, 4 ], 'returns expected value' );

	t.notEqual( o.sx, sx, 'returns new array' );
	t.strictEqual( isArray( o.sx ), true, 'returns expected value' );
	t.deepEqual( o.sx, [ 1, 4, -2 ], 'returns expected value' );

	t.notEqual( o.sy, sy, 'returns new array' );
	t.strictEqual( isArray( o.sy ), true, 'returns expected value' );
	t.deepEqual( o.sy, [ 1, 2, -4 ], 'returns expected value' );

	t.notEqual( o.sz, sz, 'returns new array' );
	t.strictEqual( isArray( o.sz ), true, 'returns expected value' );
	t.deepEqual( o.sz, [ 4, -2, -8 ], 'returns expected value' );

	t.end();
});

tape( 'the function returns loop interchange data (all disorganized)', function test( t ) {
	var sh;
	var sx;
	var sy;
	var sz;
	var o;

	sh = [ 4, 2, 2 ];
	sx = [ -2, 4, 1 ]; // disorganized
	sy = [ 1, -4, 2 ]; // disorganized
	sz = [ -8, -2, 4 ]; // disorganized

	o = binaryLoopOrder( sh, sx, sy, sz );

	t.notEqual( o.sh, sh, 'returns new array' );
	t.strictEqual( isArray( o.sh ), true, 'returns expected value' );
	t.deepEqual( o.sh, [ 2, 4, 2 ], 'returns expected value' );

	t.notEqual( o.sx, sx, 'returns new array' );
	t.strictEqual( isArray( o.sx ), true, 'returns expected value' );
	t.deepEqual( o.sx, [ 1, -2, 4 ], 'returns expected value' );

	t.notEqual( o.sy, sy, 'returns new array' );
	t.strictEqual( isArray( o.sy ), true, 'returns expected value' );
	t.deepEqual( o.sy, [ 2, 1, -4 ], 'returns expected value' );

	t.notEqual( o.sz, sz, 'returns new array' );
	t.strictEqual( isArray( o.sz ), true, 'returns expected value' );
	t.deepEqual( o.sz, [ 4, -8, -2 ], 'returns expected value' );

	t.end();
});

tape( 'if provided empty arrays, the function returns empty arrays', function test( t ) {
	var o = binaryLoopOrder( [], [], [], [] );
	t.deepEqual( o.sh, [], 'returns expected value' );
	t.deepEqual( o.sx, [], 'returns expected value' );
	t.deepEqual( o.sy, [], 'returns expected value' );
	t.deepEqual( o.sz, [], 'returns expected value' );
	t.end();
});
