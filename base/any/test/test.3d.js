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

var tape = require( 'tape' );
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var zeros = require( '@stdlib/array/zeros' );
var ones = require( '@stdlib/array/ones' );
var numel = require( './../../../base/numel' );
var shape2strides = require( './../../../base/shape2strides' );
var strides2offset = require( './../../../base/strides2offset' );
var ndarray = require( './../../../ctor' );
var blockSize = require( './../../../base/nullary-tiling-block-size' );
var any = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof any, 'function', 'main export is a function');
	t.end();
});

tape( 'the function tests whether at least one element in a 3-dimensional ndarray is truthy (row-major, singleton dimensions)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 4, 1, 1 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( numel( sh ), dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least one element in a 3-dimensional ndarray is truthy (row-major, singleton dimensions, accessors)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 4, 1, 1 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, toAccessorArray( zeros( numel( sh ), dt ) ), sh, st, o, ord ); // eslint-disable-line max-len

	actual = any( [ x ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, toAccessorArray( ones( numel( sh ), dt ) ), sh, st, o, ord ); // eslint-disable-line max-len

	actual = any( [ x ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least one element in a 3-dimensional ndarray is truthy (row-major, contiguous)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( numel( sh ), dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least one element in a 3-dimensional ndarray is truthy (row-major, contiguous, negative strides)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 2, 1, 2 ];
	st = [ -2, -2, -1 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( numel( sh ), dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least one element in a 3-dimensional ndarray is truthy (row-major, non-contiguous, same sign strides)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 2, 1, 2 ];
	st = [ 4, 4, 2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh )*2, dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( numel( sh )*2, dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least one element in a 3-dimensional ndarray is truthy (row-major, non-contiguous, mixed sign strides)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 2, 1, 2 ];
	st = [ -4, -4, 2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh )*2, dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( numel( sh )*2, dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least one element in a 3-dimensional ndarray is truthy (row-major, non-contiguous, large arrays)', function test( t ) {
	var actual;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'float64';
	ord = 'row-major';

	bsize = blockSize( dt );
	sh = [ bsize*2, 1, 2 ];
	st = [ -4, -4, 2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh )*2, dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( numel( sh )*2, dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least one element in a 3-dimensional ndarray is truthy (row-major, non-contiguous, large arrays)', function test( t ) {
	var actual;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'float64';
	ord = 'row-major';

	bsize = blockSize( dt );
	sh = [ 1, bsize*2, 2 ];
	st = [ -8, -4, 2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh )*2, dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( numel( sh )*2, dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least one element in a 3-dimensional ndarray is truthy (row-major, non-contiguous, large arrays)', function test( t ) {
	var actual;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'float64';
	ord = 'row-major';

	bsize = blockSize( dt );
	sh = [ 1, 2, bsize*2 ];
	st = [ bsize*8, bsize*4, -2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh )*2, dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( numel( sh )*2, dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least one element in a 3-dimensional ndarray is truthy (row-major, contiguous, complex)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'complex128';
	ord = 'row-major';
	sh = [ 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( numel( sh ), dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least one element in a 3-dimensional ndarray is truthy (row-major, contiguous, negative strides, complex)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'complex128';
	ord = 'row-major';
	sh = [ 2, 2, 2 ];
	st = [ -4, -2, -1 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( numel( sh ), dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least one element in a 3-dimensional ndarray is truthy (row-major, non-contiguous, same sign strides, complex)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'complex128';
	ord = 'row-major';
	sh = [ 2, 1, 2 ];
	st = [ 4, 4, 2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh )*2, dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( numel( sh )*2, dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least one element in a 3-dimensional ndarray is truthy (row-major, non-contiguous, mixed sign strides, complex)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'complex128';
	ord = 'row-major';
	sh = [ 2, 1, 2 ];
	st = [ -4, -4, -2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh )*2, dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( numel( sh )*2, dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least one element in a 3-dimensional ndarray is truthy (row-major, non-contiguous, large arrays, complex)', function test( t ) {
	var actual;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'complex128';
	ord = 'row-major';

	bsize = blockSize( dt );
	sh = [ bsize*2, 1, 2 ];
	st = [ -4, -4, 2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh )*2, dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( numel( sh )*2, dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least one element in a 3-dimensional ndarray is truthy (row-major, non-contiguous, large arrays, complex)', function test( t ) {
	var actual;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'complex128';
	ord = 'row-major';

	bsize = blockSize( dt );
	sh = [ 1, bsize*2, 2 ];
	st = [ -8, -4, 2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh )*2, dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( numel( sh )*2, dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least one element in a 3-dimensional ndarray is truthy (row-major, non-contiguous, large arrays, complex)', function test( t ) {
	var actual;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'complex128';
	ord = 'row-major';

	bsize = blockSize( dt );
	sh = [ 1, 2, bsize*2 ];
	st = [ -bsize*8, -bsize*4, 2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh )*2, dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( numel( sh )*2, dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least one element in a 3-dimensional ndarray is truthy (row-major, contiguous, accessors)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, toAccessorArray( zeros( numel( sh ), dt ) ), sh, st, o, ord ); // eslint-disable-line max-len

	actual = any( [ x ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, toAccessorArray( ones( numel( sh ), dt ) ), sh, st, o, ord ); // eslint-disable-line max-len

	actual = any( [ x ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least one element in a 3-dimensional ndarray is truthy (row-major, contiguous, negative strides, accessors)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 2, 2, 2 ];
	st = [ -2, -2, -1 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, toAccessorArray( zeros( numel( sh ), dt ) ), sh, st, o, ord ); // eslint-disable-line max-len

	actual = any( [ x ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, toAccessorArray( ones( numel( sh ), dt ) ), sh, st, o, ord ); // eslint-disable-line max-len

	actual = any( [ x ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least one element in a 3-dimensional ndarray is truthy (row-major, non-contiguous, same sign strides, accessors)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 2, 1, 2 ];
	st = [ 4, 4, 2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, toAccessorArray( zeros( numel( sh )*2, dt ) ), sh, st, o, ord ); // eslint-disable-line max-len

	actual = any( [ x ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, toAccessorArray( ones( numel( sh )*2, dt ) ), sh, st, o, ord ); // eslint-disable-line max-len

	actual = any( [ x ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least one element in a 3-dimensional ndarray is truthy (row-major, non-contiguous, mixed sign strides, accessors)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 2, 1, 2 ];
	st = [ -3, -2, 1 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, toAccessorArray( zeros( numel( sh )*2, dt ) ), sh, st, o, ord ); // eslint-disable-line max-len

	actual = any( [ x ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, toAccessorArray( ones( numel( sh )*2, dt ) ), sh, st, o, ord ); // eslint-disable-line max-len

	actual = any( [ x ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least one element in a 3-dimensional ndarray is truthy (row-major, non-contiguous, large arrays, accessors)', function test( t ) {
	var actual;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'float64';
	ord = 'row-major';

	bsize = blockSize( dt );
	sh = [ bsize*2, 1, 2 ];
	st = [ -4, -4, 2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, toAccessorArray( zeros( numel( sh )*2, dt ) ), sh, st, o, ord ); // eslint-disable-line max-len

	actual = any( [ x ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, toAccessorArray( ones( numel( sh )*2, dt ) ), sh, st, o, ord ); // eslint-disable-line max-len

	actual = any( [ x ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least one element in a 3-dimensional ndarray is truthy (row-major, non-contiguous, large arrays, accessors)', function test( t ) {
	var actual;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'float64';
	ord = 'row-major';

	bsize = blockSize( dt );
	sh = [ 1, bsize*2, 2 ];
	st = [ -8, -4, 2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, toAccessorArray( zeros( numel( sh )*2, dt ) ), sh, st, o, ord ); // eslint-disable-line max-len

	actual = any( [ x ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, toAccessorArray( ones( numel( sh )*2, dt ) ), sh, st, o, ord ); // eslint-disable-line max-len

	actual = any( [ x ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least one element in a 3-dimensional ndarray is truthy (row-major, non-contiguous, large arrays, accessors)', function test( t ) {
	var actual;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'float64';
	ord = 'row-major';

	bsize = blockSize( dt );
	sh = [ 1, 2, bsize*2 ];
	st = [ bsize*8, bsize*4, -2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, toAccessorArray( zeros( numel( sh )*2, dt ) ), sh, st, o, ord ); // eslint-disable-line max-len

	actual = any( [ x ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, toAccessorArray( ones( numel( sh )*2, dt ) ), sh, st, o, ord ); // eslint-disable-line max-len

	actual = any( [ x ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least one element in a 3-dimensional ndarray is truthy (column-major, singleton dimensions)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 4, 1, 1 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( numel( sh ), dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least one element in a 3-dimensional ndarray is truthy (column-major, singleton dimensions, accessors)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 4, 1, 1 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, toAccessorArray( zeros( numel( sh ), dt ) ), sh, st, o, ord ); // eslint-disable-line max-len

	actual = any( [ x ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, toAccessorArray( ones( numel( sh ), dt ) ), sh, st, o, ord ); // eslint-disable-line max-len

	actual = any( [ x ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least one element in a 3-dimensional ndarray is truthy (column-major, contiguous)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( numel( sh ), dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least one element in a 3-dimensional ndarray is truthy (column-major, contiguous, negative strides)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 2, 1, 2 ];
	st = [ -1, -2, -2 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( numel( sh ), dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least one element in a 3-dimensional ndarray is truthy (column-major, non-contiguous, same sign strides)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 2, 1, 2 ];
	st = [ 2, 4, 4 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh )*2, dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( numel( sh )*2, dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least one element in a 3-dimensional ndarray is truthy (column-major, non-contiguous, mixed sign strides)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 2, 1, 2 ];
	st = [ 2, -4, -4 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh )*2, dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( numel( sh )*2, dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least one element in a 3-dimensional ndarray is truthy (column-major, non-contiguous, large arrays)', function test( t ) {
	var actual;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'float64';
	ord = 'column-major';

	bsize = blockSize( dt );
	sh = [ bsize*2, 1, 2 ];
	st = [ 2, -bsize*4, -bsize*4 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh )*2, dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( numel( sh )*2, dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least one element in a 3-dimensional ndarray is truthy (column-major, non-contiguous, large arrays)', function test( t ) {
	var actual;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'float64';
	ord = 'column-major';

	bsize = blockSize( dt );
	sh = [ 1, bsize*2, 2 ];
	st = [ 2, -2, -bsize*4 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh )*2, dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( numel( sh )*2, dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least one element in a 3-dimensional ndarray is truthy (column-major, non-contiguous, large arrays)', function test( t ) {
	var actual;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'float64';
	ord = 'column-major';

	bsize = blockSize( dt );
	sh = [ 2, 1, bsize*2 ];
	st = [ 2, -4, -4 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh )*2, dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( numel( sh )*2, dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least one element in a 3-dimensional ndarray is truthy (column-major, contiguous, complex)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'complex128';
	ord = 'column-major';
	sh = [ 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( numel( sh ), dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least one element in a 3-dimensional ndarray is truthy (column-major, contiguous, negative strides, complex)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'complex128';
	ord = 'column-major';
	sh = [ 2, 2, 2 ];
	st = [ -1, -2, -4 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( numel( sh ), dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least one element in a 3-dimensional ndarray is truthy (column-major, non-contiguous, same sign strides, complex)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'complex128';
	ord = 'column-major';
	sh = [ 2, 1, 2 ];
	st = [ 2, 4, 4 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh )*2, dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( numel( sh )*2, dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least one element in a 3-dimensional ndarray is truthy (column-major, non-contiguous, mixed sign strides, complex)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'complex128';
	ord = 'column-major';
	sh = [ 2, 1, 2 ];
	st = [ -2, -4, -4 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh )*2, dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( numel( sh )*2, dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least one element in a 3-dimensional ndarray is truthy (column-major, non-contiguous, large arrays, complex)', function test( t ) {
	var actual;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'complex128';
	ord = 'column-major';

	bsize = blockSize( dt );
	sh = [ bsize*2, 2, 1 ];
	st = [ 2, -bsize*4, -bsize*8 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh )*2, dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( numel( sh )*2, dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least one element in a 3-dimensional ndarray is truthy (column-major, non-contiguous, large arrays, complex)', function test( t ) {
	var actual;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'complex128';
	ord = 'column-major';

	bsize = blockSize( dt );
	sh = [ 1, bsize*2, 2 ];
	st = [ 2, -2, bsize*4 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh )*2, dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( numel( sh )*2, dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least one element in a 3-dimensional ndarray is truthy (column-major, non-contiguous, large arrays, complex)', function test( t ) {
	var actual;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'complex128';
	ord = 'column-major';

	bsize = blockSize( dt );
	sh = [ 2, 1, bsize*2 ];
	st = [ 2, -4, -4 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, zeros( numel( sh )*2, dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, ones( numel( sh )*2, dt ), sh, st, o, ord );

	actual = any( [ x ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least one element in a 3-dimensional ndarray is truthy (column-major, contiguous, accessors)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, toAccessorArray( zeros( numel( sh ), dt ) ), sh, st, o, ord ); // eslint-disable-line max-len

	actual = any( [ x ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, toAccessorArray( ones( numel( sh ), dt ) ), sh, st, o, ord ); // eslint-disable-line max-len

	actual = any( [ x ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least one element in a 3-dimensional ndarray is truthy (column-major, contiguous, negative strides, accessors)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 2, 2, 2 ];
	st = [ -1, -2, -4 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, toAccessorArray( zeros( numel( sh ), dt ) ), sh, st, o, ord ); // eslint-disable-line max-len

	actual = any( [ x ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, toAccessorArray( ones( numel( sh ), dt ) ), sh, st, o, ord ); // eslint-disable-line max-len

	actual = any( [ x ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least one element in a 3-dimensional ndarray is truthy (column-major, non-contiguous, same sign strides, accessors)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 2, 1, 2 ];
	st = [ 2, 4, 4 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, toAccessorArray( zeros( numel( sh )*2, dt ) ), sh, st, o, ord ); // eslint-disable-line max-len

	actual = any( [ x ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, toAccessorArray( ones( numel( sh )*2, dt ) ), sh, st, o, ord ); // eslint-disable-line max-len

	actual = any( [ x ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least one element in a 3-dimensional ndarray is truthy (column-major, non-contiguous, mixed sign strides, accessors)', function test( t ) {
	var actual;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 2, 1, 2 ];
	st = [ 1, -2, -3 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, toAccessorArray( zeros( numel( sh )*2, dt ) ), sh, st, o, ord ); // eslint-disable-line max-len

	actual = any( [ x ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, toAccessorArray( ones( numel( sh )*2, dt ) ), sh, st, o, ord ); // eslint-disable-line max-len

	actual = any( [ x ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least one element in a 3-dimensional ndarray is truthy (column-major, non-contiguous, large arrays, accessors)', function test( t ) {
	var actual;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'float64';
	ord = 'column-major';

	bsize = blockSize( dt );
	sh = [ bsize*2, 2, 1 ];
	st = [ 2, -bsize*4, -bsize*8 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, toAccessorArray( zeros( numel( sh )*2, dt ) ), sh, st, o, ord ); // eslint-disable-line max-len

	actual = any( [ x ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, toAccessorArray( ones( numel( sh )*2, dt ) ), sh, st, o, ord ); // eslint-disable-line max-len

	actual = any( [ x ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least one element in a 3-dimensional ndarray is truthy (column-major, non-contiguous, large arrays, accessors)', function test( t ) {
	var actual;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'float64';
	ord = 'column-major';

	bsize = blockSize( dt );
	sh = [ 1, bsize*2, 2 ];
	st = [ -2, -2, -bsize*4 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, toAccessorArray( zeros( numel( sh )*2, dt ) ), sh, st, o, ord ); // eslint-disable-line max-len

	actual = any( [ x ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, toAccessorArray( ones( numel( sh )*2, dt ) ), sh, st, o, ord ); // eslint-disable-line max-len

	actual = any( [ x ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least one element in a 3-dimensional ndarray is truthy (column-major, non-contiguous, large arrays, accessors)', function test( t ) {
	var actual;
	var bsize;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;

	dt = 'float64';
	ord = 'column-major';

	bsize = blockSize( dt );
	sh = [ 2, 1, bsize*2 ];
	st = [ 2, -4, -4 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, toAccessorArray( zeros( numel( sh )*2, dt ) ), sh, st, o, ord ); // eslint-disable-line max-len

	actual = any( [ x ] );
	t.strictEqual( actual, false, 'returns expected value' );

	x = ndarray( dt, toAccessorArray( ones( numel( sh )*2, dt ) ), sh, st, o, ord ); // eslint-disable-line max-len

	actual = any( [ x ] );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});
