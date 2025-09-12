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
var isDataView = require( '@stdlib/assert/is-dataview' );
var isFloat64Array = require( '@stdlib/assert/is-float64array' );
var isFloat32Array = require( '@stdlib/assert/is-float32array' );
var isUint8Array = require( '@stdlib/assert/is-uint8array' );
var noop = require( '@stdlib/utils/noop' );
var empty = require( './../../../empty' );
var dispatch = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dispatch, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not a function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dispatch( value, noop );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dispatch( noop, value );
		};
	}
});

tape( 'the function returns a function', function test( t ) {
	var f = dispatch( noop, noop );
	t.strictEqual( typeof f, 'function', 'returns expected value' );
	t.end();
});

tape( 'the function returns a function which dispatches to an addon function when provided ndarrays whose underlying data buffers are typed arrays', function test( t ) {
	var opts;
	var f;
	var x;
	var y;

	f = dispatch( addon, fallback );

	opts = {
		'dtype': 'float64'
	};
	x = empty( [ 2 ], opts );
	y = empty( [ 2 ], opts );

	f( x, y );

	t.end();

	function addon( xbuf, metaX, ybuf, metaY ) {
		t.ok( true, 'called addon' );
		t.strictEqual( isFloat64Array( xbuf ), true, 'returns expected value' );
		t.strictEqual( isDataView( metaX ), true, 'returns expected value' );
		t.strictEqual( isFloat64Array( ybuf ), true, 'returns expected value' );
		t.strictEqual( isDataView( metaY ), true, 'returns expected value' );
	}

	function fallback() {
		t.ok( false, 'called fallback' );
	}
});

tape( 'the function supports boolean array data buffers', function test( t ) {
	var opts;
	var f;
	var x;
	var y;

	f = dispatch( addon, fallback );

	opts = {
		'dtype': 'bool'
	};
	x = empty( [ 2 ], opts );
	y = empty( [ 2 ], opts );

	f( x, y );

	t.end();

	function addon( xbuf, metaX, ybuf, metaY ) {
		t.ok( true, 'called addon' );
		t.strictEqual( isUint8Array( xbuf ), true, 'returns expected value' );
		t.strictEqual( isDataView( metaX ), true, 'returns expected value' );
		t.strictEqual( isUint8Array( ybuf ), true, 'returns expected value' );
		t.strictEqual( isDataView( metaY ), true, 'returns expected value' );
	}

	function fallback() {
		t.ok( false, 'called fallback' );
	}
});

tape( 'the function supports complex number typed array data buffers (complex64)', function test( t ) {
	var opts;
	var f;
	var x;
	var y;

	f = dispatch( addon, fallback );

	opts = {
		'dtype': 'complex64'
	};
	x = empty( [ 2 ], opts );
	y = empty( [ 2 ], opts );

	f( x, y );

	t.end();

	function addon( xbuf, metaX, ybuf, metaY ) {
		t.ok( true, 'called addon' );
		t.strictEqual( isFloat32Array( xbuf ), true, 'returns expected value' );
		t.strictEqual( isDataView( metaX ), true, 'returns expected value' );
		t.strictEqual( isFloat32Array( ybuf ), true, 'returns expected value' );
		t.strictEqual( isDataView( metaY ), true, 'returns expected value' );
	}

	function fallback() {
		t.ok( false, 'called fallback' );
	}
});

tape( 'the function supports complex number typed array data buffers (complex128)', function test( t ) {
	var opts;
	var f;
	var x;
	var y;

	f = dispatch( addon, fallback );

	opts = {
		'dtype': 'complex128'
	};
	x = empty( [ 2 ], opts );
	y = empty( [ 2 ], opts );

	f( x, y );

	t.end();

	function addon( xbuf, metaX, ybuf, metaY ) {
		t.ok( true, 'called addon' );
		t.strictEqual( isFloat64Array( xbuf ), true, 'returns expected value' );
		t.strictEqual( isDataView( metaX ), true, 'returns expected value' );
		t.strictEqual( isFloat64Array( ybuf ), true, 'returns expected value' );
		t.strictEqual( isDataView( metaY ), true, 'returns expected value' );
	}

	function fallback() {
		t.ok( false, 'called fallback' );
	}
});

tape( 'the function returns a function which dispatches to a fallback function when not provided typed array data buffers (both)', function test( t ) {
	var opts;
	var f;
	var x;
	var y;

	f = dispatch( addon, fallback );

	opts = {
		'dtype': 'generic'
	};
	x = empty( [ 2 ], opts );
	y = empty( [ 2 ], opts );

	f( x, y );

	t.end();

	function addon() {
		t.ok( false, 'called addon' );
	}

	function fallback( xv, yv ) {
		t.ok( true, 'called fallback' );
		t.strictEqual( xv, x, 'returns expected value' );
		t.strictEqual( yv, y, 'returns expected value' );
	}
});

tape( 'the function returns a function which dispatches to a fallback function when not provided typed array data buffers (first array)', function test( t ) {
	var f;
	var x;
	var y;

	f = dispatch( addon, fallback );

	x = empty( [ 2 ], {
		'dtype': 'generic'
	});
	y = empty( [ 2 ], {
		'dtype': 'float64'
	});

	f( x, y );

	t.end();

	function addon() {
		t.ok( false, 'called addon' );
	}

	function fallback( xv, yv ) {
		t.ok( true, 'called fallback' );
		t.strictEqual( xv, x, 'returns expected value' );
		t.strictEqual( yv, y, 'returns expected value' );
	}
});

tape( 'the function returns a function which dispatches to a fallback function when not provided typed array data buffers (output array)', function test( t ) {
	var f;
	var x;
	var y;

	f = dispatch( addon, fallback );

	x = empty( [ 2 ], {
		'dtype': 'float64'
	});
	y = empty( [ 2 ], {
		'dtype': 'generic'
	});

	f( x, y );

	t.end();

	function addon() {
		t.ok( false, 'called addon' );
	}

	function fallback( xv, yv ) {
		t.ok( true, 'called fallback' );
		t.strictEqual( xv, x, 'returns expected value' );
		t.strictEqual( yv, y, 'returns expected value' );
	}
});

tape( 'the function returns a function which returns the output ndarray (addon)', function test( t ) {
	var opts;
	var f;
	var x;
	var y;
	var z;

	f = dispatch( addon, fallback );

	opts = {
		'dtype': 'float64'
	};
	x = empty( [ 2 ], opts );
	y = empty( [ 2 ], opts );

	z = f( x, y );
	t.strictEqual( z, y, 'returns expected value' );

	t.end();

	function addon() {
		t.ok( true, 'called addon' );
	}

	function fallback() {
		t.ok( false, 'called fallback' );
	}
});

tape( 'the function returns a function which returns the output ndarray (fallback)', function test( t ) {
	var opts;
	var f;
	var x;
	var y;
	var z;

	f = dispatch( addon, fallback );

	opts = {
		'dtype': 'generic'
	};
	x = empty( [ 2 ], opts );
	y = empty( [ 2 ], opts );

	z = f( x, y );
	t.strictEqual( z, y, 'returns expected value' );

	t.end();

	function addon() {
		t.ok( false, 'called addon' );
	}

	function fallback() {
		t.ok( true, 'called fallback' );
	}
});
