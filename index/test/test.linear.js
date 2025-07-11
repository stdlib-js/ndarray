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

var tape = require( 'tape' );
var instanceOf = require( '@stdlib/assert/instance-of' );
var Uint8Array = require( '@stdlib/array/uint8' );
var Int32Array = require( '@stdlib/array/int32' );
var Float64Array = require( '@stdlib/array/float64' );
var BooleanArray = require( '@stdlib/array/bool' );
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var array = require( './../../array' );
var ndindex = require( './../lib/main.js' );
var linearIndex = require( './../lib/linear.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof linearIndex, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not an ndarray', function test( t ) {
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
		{},
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var v = linearIndex( value ); // eslint-disable-line no-unused-vars
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray (options)', function test( t ) {
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
		{},
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var v = linearIndex( value, {} ); // eslint-disable-line no-unused-vars
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not a valid index ndarray', function test( t ) {
	var values;
	var opts;
	var i;

	opts = {
		'dtype': 'generic'
	};
	values = [
		array( [ 'a', 'b', 'c' ], opts ),
		array( new Float64Array( [ 1.0, 2.0, 3.0 ] ) ),
		array( [ 1.5, 2.5, 3.5 ], opts ),
		array( [ null ], opts ),
		array( new BooleanArray( 5 ) ),
		array( [ true, false, true, false ], opts ),
		array( new Uint8Array( 5 ) )

	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var v = linearIndex( value ); // eslint-disable-line no-unused-vars
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not a valid index ndarray (options)', function test( t ) {
	var values;
	var opts;
	var i;

	opts = {
		'dtype': 'generic'
	};
	values = [
		array( [ 'a', 'b', 'c' ], opts ),
		array( new Float64Array( [ 1.0, 2.0, 3.0 ] ) ),
		array( [ 1.5, 2.5, 3.5 ], opts ),
		array( [ null ], opts ),
		array( new BooleanArray( 5 ) ),
		array( [ true, false, true, false ], opts ),
		array( new Uint8Array( 5 ) )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var v = linearIndex( value, {} ); // eslint-disable-line no-unused-vars
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object', function test( t ) {
	var values;
	var opts;
	var i;

	opts = {
		'dtype': 'generic'
	};
	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var v = linearIndex( array( [ 1, 2, 3 ], opts ), value ); // eslint-disable-line no-unused-vars
		};
	}
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	var values;
	var opts;
	var i;

	opts = {
		'dtype': 'generic'
	};
	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var v = linearIndex( array( [ 1, 2, 3 ], opts ), { // eslint-disable-line no-unused-vars
				'persist': value
			});
		};
	}
});

tape( 'the function returns an ndindex instance', function test( t ) {
	var opts;
	var idx;
	var x;

	opts = {
		'dtype': 'generic'
	};
	x = array( [ 1, 2, 3 ], opts );
	idx = linearIndex( x );
	t.strictEqual( instanceOf( idx, ndindex ), true, 'returns expected value' );

	x = array( toAccessorArray( [ 1, 2, 3 ] ), opts );
	idx = linearIndex( x );
	t.strictEqual( instanceOf( idx, ndindex ), true, 'returns expected value' );

	x = array( new Int32Array( [ 1, 2, 3 ] ) );
	idx = linearIndex( x );
	t.strictEqual( instanceOf( idx, ndindex ), true, 'returns expected value' );

	t.end();
});

tape( 'attached to the function is a `free` method to free an actively cached index ndarray (non-persisted)', function test( t ) {
	var actual;
	var opts;
	var idx;
	var x;

	opts = {
		'dtype': 'generic'
	};
	x = array( [ 1, 2, 3 ], opts );
	idx = linearIndex( x );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	actual = linearIndex.free( idx.id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	x = array( [ 1, 2, 3 ], opts );
	idx = linearIndex( x, {
		'persist': false
	});

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	actual = linearIndex.free( idx.id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	x = array( toAccessorArray( [ 1, 2, 3 ] ), opts );
	idx = linearIndex( x );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	actual = linearIndex.free( idx.id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	x = array( new Int32Array( [ 1, 2, 3 ] ) );
	idx = linearIndex( x );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	actual = linearIndex.free( idx.id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	t.end();
});

tape( 'attached to the function is a `free` method to free an actively cached index ndarray (persisted)', function test( t ) {
	var actual;
	var ndopts;
	var opts;
	var idx;
	var x;

	ndopts = {
		'dtype': 'generic'
	};
	opts = {
		'persist': true
	};

	x = array( [ 1, 2, 3 ], ndopts );
	idx = linearIndex( x, opts );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	actual = linearIndex.free( idx.id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	x = array( toAccessorArray( [ 1, 2, 3 ] ), ndopts );
	idx = linearIndex( x, opts );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	actual = linearIndex.free( idx.id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	x = array( new Int32Array( [ 1, 2, 3 ] ) );
	idx = linearIndex( x, opts );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	actual = linearIndex.free( idx.id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	t.end();
});

tape( 'attached to the function is a `free` method which returns `false` if an index ndarray has already been freed', function test( t ) {
	var actual;
	var opts;
	var idx;
	var id;
	var x;

	opts = {
		'dtype': 'generic'
	};

	// Generic:
	x = array( [ 1, 2, 3 ], opts );
	idx = linearIndex( x );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	id = idx.id;
	actual = linearIndex.free( id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	actual = linearIndex.free( id );
	t.strictEqual( actual, false, 'returns expected value' );

	// Generic (persisted):
	x = array( [ 1, 2, 3 ], opts );
	idx = linearIndex( x, {
		'persist': true
	});

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	id = idx.id;
	actual = linearIndex.free( id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	actual = linearIndex.free( id );
	t.strictEqual( actual, false, 'returns expected value' );

	// Accessor:
	x = array( toAccessorArray( [ 1, 2, 3 ] ), opts );
	idx = linearIndex( x );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	id = idx.id;
	actual = linearIndex.free( id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	actual = linearIndex.free( id );
	t.strictEqual( actual, false, 'returns expected value' );

	// Integer:
	x = array( new Int32Array( [ 1, 2, 3 ] ) );
	idx = linearIndex( x );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	id = idx.id;
	actual = linearIndex.free( id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	actual = linearIndex.free( id );
	t.strictEqual( actual, false, 'returns expected value' );

	t.end();
});

tape( 'attached to the function is a `get` method to return index ndarray data', function test( t ) {
	var expected;
	var actual;
	var opts;
	var idx;
	var x;

	opts = {
		'dtype': 'generic'
	};
	x = array( [ 1, 2, 3 ], opts );
	idx = linearIndex( x );

	expected = {
		'data': x,
		'type': 'int',
		'kind': 'linear',
		'dtype': 'generic'
	};
	actual = linearIndex.get( idx.id );
	t.strictEqual( actual.type, expected.type, 'returns expected value' );
	t.strictEqual( actual.kind, expected.kind, 'returns expected value' );
	t.strictEqual( actual.dtype, expected.dtype, 'returns expected value' );
	t.strictEqual( actual.data.data, expected.data.data, 'returns expected value' );

	x = array( [ 1, 2, 3 ], opts );
	idx = linearIndex( x, {
		'persist': true
	});

	expected = {
		'data': x,
		'type': 'int',
		'kind': 'linear',
		'dtype': 'generic'
	};
	actual = linearIndex.get( idx.id );
	t.strictEqual( actual.type, expected.type, 'returns expected value' );
	t.strictEqual( actual.kind, expected.kind, 'returns expected value' );
	t.strictEqual( actual.dtype, expected.dtype, 'returns expected value' );
	t.strictEqual( actual.data.data, expected.data.data, 'returns expected value' );

	x = array( toAccessorArray( [ 1, 2, 3 ] ), opts );
	idx = linearIndex( x );

	expected = {
		'data': x,
		'type': 'int',
		'kind': 'linear',
		'dtype': 'generic'
	};
	actual = linearIndex.get( idx.id );
	t.strictEqual( actual.type, expected.type, 'returns expected value' );
	t.strictEqual( actual.kind, expected.kind, 'returns expected value' );
	t.strictEqual( actual.dtype, expected.dtype, 'returns expected value' );
	t.strictEqual( actual.data.data, expected.data.data, 'returns expected value' );

	x = array( new Int32Array( [ 1, 2, 3 ] ) );
	idx = linearIndex( x );

	expected = {
		'data': x,
		'type': 'int',
		'kind': 'linear',
		'dtype': 'int32'
	};
	actual = linearIndex.get( idx.id );
	t.strictEqual( actual.type, expected.type, 'returns expected value' );
	t.strictEqual( actual.kind, expected.kind, 'returns expected value' );
	t.strictEqual( actual.dtype, expected.dtype, 'returns expected value' );
	t.strictEqual( actual.data.data, expected.data.data, 'returns expected value' );

	t.end();
});

tape( 'attached to the function is a `get` method which frees non-persisted index ndarrays', function test( t ) {
	var opts;
	var idx;
	var x;

	opts = {
		'dtype': 'generic'
	};
	x = array( [ 1, 2, 3 ], opts );
	idx = linearIndex( x );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	linearIndex.get( idx.id );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	x = array( [ 1, 2, 3 ], opts );
	idx = linearIndex( x, {
		'persist': false
	});

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	linearIndex.get( idx.id );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	t.end();
});

tape( 'attached to the function is a `get` method which does not free persisted index ndarrays', function test( t ) {
	var opts;
	var idx;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};

	x = array( [ 1, 2, 3 ], opts );
	idx = linearIndex( x, {
		'persist': true
	});

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	for ( i = 0; i < 100; i++ ) {
		linearIndex.get( idx.id );
		t.strictEqual( idx.isCached, true, 'returns expected value' );
	}
	linearIndex.free( idx.id );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	t.end();
});

tape( 'attached to the function is a `get` method which returns `null` if unable to resolve an index ndarray', function test( t ) {
	var actual;
	var opts;
	var idx;
	var id;
	var x;

	opts = {
		'dtype': 'generic'
	};
	x = array( [ 1, 2, 3 ], opts );
	idx = linearIndex( x );

	id = idx.id;
	linearIndex.free( id );
	actual = linearIndex.get( id );
	t.strictEqual( actual, null, 'returns expected value' );

	x = array( [ 1, 2, 3 ], opts );
	idx = linearIndex( x, {
		'persist': true
	});

	id = idx.id;
	linearIndex.free( id );
	actual = linearIndex.get( id );
	t.strictEqual( actual, null, 'returns expected value' );

	x = array( toAccessorArray( [ 1, 2, 3 ] ), opts );
	idx = linearIndex( x );

	id = idx.id;
	linearIndex.free( id );
	actual = linearIndex.get( id );
	t.strictEqual( actual, null, 'returns expected value' );

	x = array( new Int32Array( [ 1, 2, 3 ] ) );
	idx = linearIndex( x );

	id = idx.id;
	linearIndex.free( id );
	actual = linearIndex.get( id );
	t.strictEqual( actual, null, 'returns expected value' );

	actual = linearIndex.get( '??beep_boop_foo_bar!!' );
	t.strictEqual( actual, null, 'returns expected value' );

	t.end();
});
