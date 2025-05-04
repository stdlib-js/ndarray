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
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var Uint8Array = require( '@stdlib/array/uint8' );
var Int32Array = require( '@stdlib/array/int32' );
var Float64Array = require( '@stdlib/array/float64' );
var BooleanArray = require( '@stdlib/array/bool' );
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var array = require( './../../array' );
var ndarray2json = require( './../../to-json' );
var ndindex = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ndindex, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function is a constructor', function test( t ) {
	var opts;
	var x;

	opts = {
		'dtype': 'generic'
	};
	x = new ndindex( array( [ 1, 2, 3 ], opts ) );
	t.strictEqual( instanceOf( x, ndindex ), true, 'returns expected value' );

	x = new ndindex( array( [ true, false, true ], opts ) );
	t.strictEqual( instanceOf( x, ndindex ), true, 'returns expected value' );

	x = new ndindex( array( toAccessorArray( [ 1, 2, 3 ] ), opts ) );
	t.strictEqual( instanceOf( x, ndindex ), true, 'returns expected value' );

	x = new ndindex( array( new Uint8Array( [ 1, 0, 1 ] ) ) );
	t.strictEqual( instanceOf( x, ndindex ), true, 'returns expected value' );

	x = new ndindex( array( new BooleanArray( [ 1, 0, 1 ] ) ) );
	t.strictEqual( instanceOf( x, ndindex ), true, 'returns expected value' );

	x = new ndindex( array( new Int32Array( [ 1, 0, 1 ] ) ) );
	t.strictEqual( instanceOf( x, ndindex ), true, 'returns expected value' );

	t.end();
});

tape( 'the function is a constructor (options)', function test( t ) {
	var opts;
	var x;

	opts = {
		'dtype': 'generic'
	};
	x = new ndindex( array( [ 1, 2, 3 ], opts ), {} );
	t.strictEqual( instanceOf( x, ndindex ), true, 'returns expected value' );

	x = new ndindex( array( [ true, false, true ], opts ), {} );
	t.strictEqual( instanceOf( x, ndindex ), true, 'returns expected value' );

	x = new ndindex( array( toAccessorArray( [ 1, 2, 3 ] ), opts ), {} );
	t.strictEqual( instanceOf( x, ndindex ), true, 'returns expected value' );

	x = new ndindex( array( new Uint8Array( [ 1, 0, 1 ] ) ), {} );
	t.strictEqual( instanceOf( x, ndindex ), true, 'returns expected value' );

	x = new ndindex( array( new BooleanArray( [ 1, 0, 1 ] ) ), {} );
	t.strictEqual( instanceOf( x, ndindex ), true, 'returns expected value' );

	x = new ndindex( array( new Int32Array( [ 1, 0, 1 ] ) ), {} );
	t.strictEqual( instanceOf( x, ndindex ), true, 'returns expected value' );

	t.end();
});

tape( 'the function does not require the `new` keyword', function test( t ) {
	var opts;
	var idx;
	var x;

	idx = ndindex;

	opts = {
		'dtype': 'generic'
	};
	x = idx( array( [ 1, 2, 3 ], opts ) );
	t.strictEqual( instanceOf( x, ndindex ), true, 'returns expected value' );

	x = idx( array( [ true, false, true ], opts ) );
	t.strictEqual( instanceOf( x, ndindex ), true, 'returns expected value' );

	x = idx( array( toAccessorArray( [ 1, 2, 3 ] ), opts ) );
	t.strictEqual( instanceOf( x, ndindex ), true, 'returns expected value' );

	x = idx( array( new Uint8Array( [ 1, 0, 1 ] ) ) );
	t.strictEqual( instanceOf( x, ndindex ), true, 'returns expected value' );

	x = idx( array( new BooleanArray( [ 1, 0, 1 ] ) ) );
	t.strictEqual( instanceOf( x, ndindex ), true, 'returns expected value' );

	x = idx( array( new Int32Array( [ 1, 0, 1 ] ) ) );
	t.strictEqual( instanceOf( x, ndindex ), true, 'returns expected value' );

	t.end();
});

tape( 'the function does not require the `new` keyword (options)', function test( t ) {
	var opts;
	var idx;
	var x;

	idx = ndindex;

	opts = {
		'dtype': 'generic'
	};
	x = idx( array( [ 1, 2, 3 ], opts ), {} );
	t.strictEqual( instanceOf( x, ndindex ), true, 'returns expected value' );

	x = idx( array( [ true, false, true ], opts ), {} );
	t.strictEqual( instanceOf( x, ndindex ), true, 'returns expected value' );

	x = idx( array( toAccessorArray( [ 1, 2, 3 ] ), opts ), {} );
	t.strictEqual( instanceOf( x, ndindex ), true, 'returns expected value' );

	x = idx( array( new Uint8Array( [ 1, 0, 1 ] ) ), {} );
	t.strictEqual( instanceOf( x, ndindex ), true, 'returns expected value' );

	x = idx( array( new BooleanArray( [ 1, 0, 1 ] ) ), {} );
	t.strictEqual( instanceOf( x, ndindex ), true, 'returns expected value' );

	x = idx( array( new Int32Array( [ 1, 0, 1 ] ) ), {} );
	t.strictEqual( instanceOf( x, ndindex ), true, 'returns expected value' );

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
			var v = new ndindex( value ); // eslint-disable-line no-unused-vars
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
			var v = new ndindex( value, {} ); // eslint-disable-line no-unused-vars
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
		array( [ null ], opts )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var v = new ndindex( value ); // eslint-disable-line no-unused-vars
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
		array( [ null ], opts )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var v = new ndindex( value, {} ); // eslint-disable-line no-unused-vars
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not a valid index ndarray (kind=cartesian)', function test( t ) {
	var values;
	var opts;
	var i;

	opts = {
		'dtype': 'generic'
	};
	values = [
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
			var v = new ndindex( value, { // eslint-disable-line no-unused-vars
				'kind': 'cartesian'
			});
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not a valid index ndarray (kind=linear)', function test( t ) {
	var values;
	var opts;
	var i;

	opts = {
		'dtype': 'generic'
	};
	values = [
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
			var v = new ndindex( value, { // eslint-disable-line no-unused-vars
				'kind': 'linear'
			});
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
			var v = new ndindex( array( [ 1, 2, 3 ], opts ), value ); // eslint-disable-line no-unused-vars
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
			var v = new ndindex( array( [ 1, 2, 3 ], opts ), { // eslint-disable-line no-unused-vars
				'persist': value
			});
		};
	}
});

tape( 'the function returns an instance having a `data` property which returns an ndarray view of underlying index ndarray', function test( t ) {
	var opts;
	var idx;
	var x;

	opts = {
		'dtype': 'generic'
	};
	x = array( [ 1, 2, 3 ], opts );
	idx = new ndindex( x );

	t.strictEqual( isndarrayLike( idx.data ), true, 'returns expected value' );
	t.strictEqual( idx.data.data, x.data, 'returns expected value' );

	x = array( [], opts );
	idx = new ndindex( x );

	t.strictEqual( isndarrayLike( idx.data ), true, 'returns expected value' );
	t.strictEqual( idx.data.data, x.data, 'returns expected value' );

	x = array( toAccessorArray( [ 1, 2, 3 ] ), opts );
	idx = new ndindex( x );

	t.strictEqual( isndarrayLike( idx.data ), true, 'returns expected value' );
	t.strictEqual( idx.data.data, x.data, 'returns expected value' );

	x = array( new Uint8Array( [ 0, 1, 0, 1 ] ) );
	idx = new ndindex( x );

	t.strictEqual( isndarrayLike( idx.data ), true, 'returns expected value' );
	t.strictEqual( idx.data.data, x.data, 'returns expected value' );

	x = array( new BooleanArray( [ 0, 1, 0, 1 ] ) );
	idx = new ndindex( x );

	t.strictEqual( isndarrayLike( idx.data ), true, 'returns expected value' );
	t.strictEqual( idx.data.data, x.data, 'returns expected value' );

	x = array( [ true, false, true, false ], opts );
	idx = new ndindex( x );

	t.strictEqual( isndarrayLike( idx.data ), true, 'returns expected value' );
	t.strictEqual( idx.data.data, x.data, 'returns expected value' );

	x = array( new Int32Array( [ 1, 2, 3 ] ) );
	idx = new ndindex( x );

	t.strictEqual( isndarrayLike( idx.data ), true, 'returns expected value' );
	t.strictEqual( idx.data.data, x.data, 'returns expected value' );

	t.end();
});

tape( 'the function returns an instance having a `data` property which throws an error if an instance has been invalidated', function test( t ) {
	var opts;
	var idx;
	var x;

	opts = {
		'dtype': 'generic'
	};
	x = array( [ 1, 2, 3 ], opts );
	idx = new ndindex( x );

	ndindex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = array( [], opts );
	idx = new ndindex( x );

	ndindex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = array( toAccessorArray( [ 1, 2, 3 ] ), opts );
	idx = new ndindex( x );

	ndindex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = array( new Uint8Array( [ 0, 1, 0, 1 ] ) );
	idx = new ndindex( x );

	ndindex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = array( new BooleanArray( [ 0, 1, 0, 1 ] ) );
	idx = new ndindex( x );

	ndindex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = array( [ true, false, true, false ], opts );
	idx = new ndindex( x );

	ndindex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = array( new Int32Array( [ 1, 2, 3 ] ) );
	idx = new ndindex( x );

	ndindex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	t.end();

	function invalidated( idx ) {
		return function invalidated() {
			var v = idx.data; // eslint-disable-line no-unused-vars
		};
	}
});

tape( 'the function returns an instance having a `dtype` property which returns the underlying index ndarray data type', function test( t ) {
	var opts;
	var idx;
	var x;

	opts = {
		'dtype': 'generic'
	};
	x = array( [ 1, 2, 3 ], opts );
	idx = new ndindex( x );

	t.strictEqual( idx.dtype, 'generic', 'returns expected value' );

	x = array( [], opts );
	idx = new ndindex( x );

	t.strictEqual( idx.dtype, 'generic', 'returns expected value' );

	x = array( toAccessorArray( [ 1, 2, 3 ] ), opts );
	idx = new ndindex( x );

	t.strictEqual( idx.dtype, 'generic', 'returns expected value' );

	x = array( new Uint8Array( [ 0, 1, 0, 1 ] ) );
	idx = new ndindex( x );

	t.strictEqual( idx.dtype, 'uint8', 'returns expected value' );

	x = array( new BooleanArray( [ 0, 1, 0, 1 ] ) );
	idx = new ndindex( x );

	t.strictEqual( idx.dtype, 'bool', 'returns expected value' );

	x = array( [ true, false, true, false ], opts );
	idx = new ndindex( x );

	t.strictEqual( idx.dtype, 'generic', 'returns expected value' );

	x = array( new Int32Array( [ 1, 2, 3 ] ) );
	idx = new ndindex( x );

	t.strictEqual( idx.dtype, 'int32', 'returns expected value' );

	t.end();
});

tape( 'the function returns an instance having a `dtype` property which throws an error if an instance has been invalidated', function test( t ) {
	var opts;
	var idx;
	var x;

	opts = {
		'dtype': 'generic'
	};
	x = array( [ 1, 2, 3 ], opts );
	idx = new ndindex( x );

	ndindex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = array( [], opts );
	idx = new ndindex( x );

	ndindex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = array( toAccessorArray( [ 1, 2, 3 ] ), opts );
	idx = new ndindex( x );

	ndindex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = array( new Uint8Array( [ 0, 1, 0, 1 ] ) );
	idx = new ndindex( x );

	ndindex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = array( new BooleanArray( [ 0, 1, 0, 1 ] ) );
	idx = new ndindex( x );

	ndindex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = array( [ true, false, true, false ], opts );
	idx = new ndindex( x );

	ndindex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = array( new Int32Array( [ 1, 2, 3 ] ) );
	idx = new ndindex( x );

	ndindex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	t.end();

	function invalidated( idx ) {
		return function invalidated() {
			var v = idx.dtype; // eslint-disable-line no-unused-vars
		};
	}
});

tape( 'the function returns an instance having an `id` property which returns the ndarray index identifier', function test( t ) {
	var opts;
	var obj;
	var idx;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};

	x = array( [ 1, 2, 3 ], opts );
	idx = new ndindex( x );

	t.strictEqual( isString( idx.id ), true, 'returns expected value' );

	x = array( [], opts );
	idx = new ndindex( x );

	t.strictEqual( isString( idx.id ), true, 'returns expected value' );

	x = array( toAccessorArray( [ 1, 2, 3 ] ), opts );
	idx = new ndindex( x );

	t.strictEqual( isString( idx.id ), true, 'returns expected value' );

	x = array( new Uint8Array( [ 0, 1, 0, 1 ] ) );
	idx = new ndindex( x );

	t.strictEqual( isString( idx.id ), true, 'returns expected value' );

	x = array( new BooleanArray( [ 0, 1, 0, 1 ] ) );
	idx = new ndindex( x );

	t.strictEqual( isString( idx.id ), true, 'returns expected value' );

	x = array( [ true, false, true, false ], opts );
	idx = new ndindex( x );

	t.strictEqual( isString( idx.id ), true, 'returns expected value' );

	x = array( new Int32Array( [ 1, 2, 3 ] ) );
	idx = new ndindex( x );

	t.strictEqual( isString( idx.id ), true, 'returns expected value' );

	// Should assign unique identifiers...
	obj = {};
	for ( i = 0; i < 100; i++ ) {
		idx = new ndindex( array( [ 1, 2, 3 ], opts ) );
		if ( obj[ idx.id ] === void 0 ) {
			obj[ idx.id ] = true;
		} else {
			t.fail( 'should not return a duplicate id: ' + idx.id );
		}
	}
	t.end();
});

tape( 'the function returns an instance having an `id` property which throws an error if an instance has been invalidated', function test( t ) {
	var opts;
	var idx;
	var x;

	opts = {
		'dtype': 'generic'
	};
	x = array( [ 1, 2, 3 ], opts );
	idx = new ndindex( x );

	ndindex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = array( [], opts );
	idx = new ndindex( x );

	ndindex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = array( toAccessorArray( [ 1, 2, 3 ] ), opts );
	idx = new ndindex( x );

	ndindex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = array( new Uint8Array( [ 0, 1, 0, 1 ] ) );
	idx = new ndindex( x );

	ndindex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = array( new BooleanArray( [ 0, 1, 0, 1 ] ) );
	idx = new ndindex( x );

	ndindex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = array( [ true, false, true, false ], opts );
	idx = new ndindex( x );

	ndindex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = array( new Int32Array( [ 1, 2, 3 ] ) );
	idx = new ndindex( x );

	ndindex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	t.end();

	function invalidated( idx ) {
		return function invalidated() {
			var v = idx.id; // eslint-disable-line no-unused-vars
		};
	}
});

tape( 'the function returns an instance having an `isCached` property which returns a boolean indicating whether an ndarray index is actively cached', function test( t ) {
	var opts;
	var idx;
	var x;

	opts = {
		'dtype': 'generic'
	};
	x = array( [ 1, 2, 3 ], opts );
	idx = new ndindex( x );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	ndindex.get( idx.id );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	x = array( [ 1, 2, 3 ], opts );
	idx = new ndindex( x, {
		'persist': true
	});

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	ndindex.get( idx.id );
	t.strictEqual( idx.isCached, true, 'returns expected value' );

	ndindex.get( idx.id );
	t.strictEqual( idx.isCached, true, 'returns expected value' );

	ndindex.get( idx.id );
	t.strictEqual( idx.isCached, true, 'returns expected value' );

	ndindex.get( idx.id );
	t.strictEqual( idx.isCached, true, 'returns expected value' );

	ndindex.free( idx.id );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	t.end();
});

tape( 'the function returns an instance having a `kind` property which returns the ndarray index kind', function test( t ) {
	var opts;
	var idx;
	var x;

	opts = {
		'dtype': 'generic'
	};
	x = array( [ 1, 2, 3 ], opts );
	idx = new ndindex( x );

	t.strictEqual( idx.kind, '', 'returns expected value' );

	x = array( [], opts );
	idx = new ndindex( x );

	t.strictEqual( idx.kind, '', 'returns expected value' );

	x = array( toAccessorArray( [ 1, 2, 3 ] ), opts );
	idx = new ndindex( x );

	t.strictEqual( idx.kind, '', 'returns expected value' );

	x = array( new Uint8Array( [ 0, 1, 0, 1 ] ) );
	idx = new ndindex( x );

	t.strictEqual( idx.kind, '', 'returns expected value' );

	x = array( new BooleanArray( [ 0, 1, 0, 1 ] ) );
	idx = new ndindex( x );

	t.strictEqual( idx.kind, '', 'returns expected value' );

	x = array( [ true, false, true, false ], opts );
	idx = new ndindex( x );

	t.strictEqual( idx.kind, '', 'returns expected value' );

	x = array( new Int32Array( [ 1, 2, 3 ] ) );
	idx = new ndindex( x );

	t.strictEqual( idx.kind, '', 'returns expected value' );

	t.end();
});

tape( 'the function returns an instance having a `kind` property which returns the ndarray index kind (kind=cartesian)', function test( t ) {
	var opts;
	var idx;
	var x;

	opts = {
		'dtype': 'generic'
	};
	x = array( [ 1, 2, 3 ], opts );
	idx = new ndindex( x, {
		'kind': 'cartesian'
	});

	t.strictEqual( idx.kind, 'cartesian', 'returns expected value' );

	x = array( [], opts );
	idx = new ndindex( x, {
		'kind': 'cartesian'
	});

	t.strictEqual( idx.kind, 'cartesian', 'returns expected value' );

	x = array( toAccessorArray( [ 1, 2, 3 ] ), opts );
	idx = new ndindex( x, {
		'kind': 'cartesian'
	});

	t.strictEqual( idx.kind, 'cartesian', 'returns expected value' );

	x = array( new Int32Array( [ 1, 2, 3 ] ) );
	idx = new ndindex( x, {
		'kind': 'cartesian'
	});

	t.strictEqual( idx.kind, 'cartesian', 'returns expected value' );

	t.end();
});

tape( 'the function returns an instance having a `kind` property which returns the ndarray index kind (kind=linear)', function test( t ) {
	var opts;
	var idx;
	var x;

	opts = {
		'dtype': 'generic'
	};
	x = array( [ 1, 2, 3 ], opts );
	idx = new ndindex( x, {
		'kind': 'linear'
	});

	t.strictEqual( idx.kind, 'linear', 'returns expected value' );

	x = array( [], opts );
	idx = new ndindex( x, {
		'kind': 'linear'
	});

	t.strictEqual( idx.kind, 'linear', 'returns expected value' );

	x = array( toAccessorArray( [ 1, 2, 3 ] ), opts );
	idx = new ndindex( x, {
		'kind': 'linear'
	});

	t.strictEqual( idx.kind, 'linear', 'returns expected value' );

	x = array( new Int32Array( [ 1, 2, 3 ] ) );
	idx = new ndindex( x, {
		'kind': 'linear'
	});

	t.strictEqual( idx.kind, 'linear', 'returns expected value' );

	t.end();
});

tape( 'the function returns an instance having a `kind` property which throws an error if an instance has been invalidated', function test( t ) {
	var opts;
	var idx;
	var x;

	opts = {
		'dtype': 'generic'
	};
	x = array( [ 1, 2, 3 ], opts );
	idx = new ndindex( x );

	ndindex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = array( [], opts );
	idx = new ndindex( x );

	ndindex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = array( toAccessorArray( [ 1, 2, 3 ] ), opts );
	idx = new ndindex( x );

	ndindex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = array( new Uint8Array( [ 0, 1, 0, 1 ] ) );
	idx = new ndindex( x );

	ndindex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = array( new BooleanArray( [ 0, 1, 0, 1 ] ) );
	idx = new ndindex( x );

	ndindex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = array( [ true, false, true, false ], opts );
	idx = new ndindex( x );

	ndindex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = array( new Int32Array( [ 1, 2, 3 ] ) );
	idx = new ndindex( x );

	ndindex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	t.end();

	function invalidated( idx ) {
		return function invalidated() {
			var v = idx.kind; // eslint-disable-line no-unused-vars
		};
	}
});

tape( 'the function returns an instance having a `type` property which returns the ndarray index type', function test( t ) {
	var opts;
	var idx;
	var x;

	opts = {
		'dtype': 'generic'
	};
	x = array( [ 1, 2, 3 ], opts );
	idx = new ndindex( x );

	t.strictEqual( idx.type, 'int', 'returns expected value' );

	x = array( [], opts );
	idx = new ndindex( x );

	t.strictEqual( idx.type, 'int', 'returns expected value' );

	x = array( toAccessorArray( [ 1, 2, 3 ] ), opts );
	idx = new ndindex( x );

	t.strictEqual( idx.type, 'int', 'returns expected value' );

	x = array( new Uint8Array( [ 0, 1, 0, 1 ] ) );
	idx = new ndindex( x );

	t.strictEqual( idx.type, 'mask', 'returns expected value' );

	x = array( new BooleanArray( [ 0, 1, 0, 1 ] ) );
	idx = new ndindex( x );

	t.strictEqual( idx.type, 'bool', 'returns expected value' );

	x = array( [ true, false, true, false ], opts );
	idx = new ndindex( x );

	t.strictEqual( idx.type, 'bool', 'returns expected value' );

	x = array( new Int32Array( [ 1, 2, 3 ] ) );
	idx = new ndindex( x );

	t.strictEqual( idx.type, 'int', 'returns expected value' );

	t.end();
});

tape( 'the function returns an instance having a `type` property which returns the ndarray index type (kind=cartesian)', function test( t ) {
	var opts;
	var idx;
	var x;

	opts = {
		'dtype': 'generic'
	};
	x = array( [ 1, 2, 3 ], opts );
	idx = new ndindex( x, {
		'kind': 'cartesian'
	});

	t.strictEqual( idx.type, 'int', 'returns expected value' );

	x = array( [], opts );
	idx = new ndindex( x, {
		'kind': 'cartesian'
	});

	t.strictEqual( idx.type, 'int', 'returns expected value' );

	x = array( toAccessorArray( [ 1, 2, 3 ] ), opts );
	idx = new ndindex( x, {
		'kind': 'cartesian'
	});

	t.strictEqual( idx.type, 'int', 'returns expected value' );

	x = array( new Int32Array( [ 1, 2, 3 ] ) );
	idx = new ndindex( x, {
		'kind': 'cartesian'
	});

	t.strictEqual( idx.type, 'int', 'returns expected value' );

	t.end();
});

tape( 'the function returns an instance having a `type` property which returns the ndarray index type (kind=linear)', function test( t ) {
	var opts;
	var idx;
	var x;

	opts = {
		'dtype': 'generic'
	};
	x = array( [ 1, 2, 3 ], opts );
	idx = new ndindex( x, {
		'kind': 'linear'
	});

	t.strictEqual( idx.type, 'int', 'returns expected value' );

	x = array( [], opts );
	idx = new ndindex( x, {
		'kind': 'linear'
	});

	t.strictEqual( idx.type, 'int', 'returns expected value' );

	x = array( toAccessorArray( [ 1, 2, 3 ] ), opts );
	idx = new ndindex( x, {
		'kind': 'linear'
	});

	t.strictEqual( idx.type, 'int', 'returns expected value' );

	x = array( new Int32Array( [ 1, 2, 3 ] ) );
	idx = new ndindex( x, {
		'kind': 'linear'
	});

	t.strictEqual( idx.type, 'int', 'returns expected value' );

	t.end();
});

tape( 'the function returns an instance having a `type` property which throws an error if an instance has been invalidated', function test( t ) {
	var opts;
	var idx;
	var x;

	opts = {
		'dtype': 'generic'
	};
	x = array( [ 1, 2, 3 ], opts );
	idx = new ndindex( x );

	ndindex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = array( [], opts );
	idx = new ndindex( x );

	ndindex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = array( toAccessorArray( [ 1, 2, 3 ] ), opts );
	idx = new ndindex( x );

	ndindex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = array( new Uint8Array( [ 0, 1, 0, 1 ] ) );
	idx = new ndindex( x );

	ndindex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = array( new BooleanArray( [ 0, 1, 0, 1 ] ) );
	idx = new ndindex( x );

	ndindex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = array( [ true, false, true, false ], opts );
	idx = new ndindex( x );

	ndindex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = array( new Int32Array( [ 1, 2, 3 ] ) );
	idx = new ndindex( x );

	ndindex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	t.end();

	function invalidated( idx ) {
		return function invalidated() {
			var v = idx.type; // eslint-disable-line no-unused-vars
		};
	}
});

tape( 'the function returns an instance having a custom `toString` method', function test( t ) {
	var opts;
	var idx;
	var x;

	opts = {
		'dtype': 'generic'
	};
	x = array( [ 1, 2, 3 ], opts );
	idx = new ndindex( x );

	t.strictEqual( /ndindex<[^>]+>/.test( idx.toString() ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns an instance having a custom `toString` method which throws an error if an instance has been invalidated', function test( t ) {
	var opts;
	var idx;
	var x;

	opts = {
		'dtype': 'generic'
	};
	x = array( [ 1, 2, 3 ], opts );
	idx = new ndindex( x );

	ndindex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	t.end();

	function invalidated( idx ) {
		return function invalidated() {
			idx.toString();
		};
	}
});

tape( 'the function returns an instance having a custom `toJSON` method', function test( t ) {
	var expected;
	var actual;
	var opts;
	var idx;
	var x;

	opts = {
		'dtype': 'generic'
	};
	x = array( [ 1, 2, 3 ], opts );
	idx = new ndindex( x );

	expected = {
		'type': 'ndindex',
		'kind': '',
		'data': ndarray2json( x )
	};
	actual = idx.toJSON();
	t.deepEqual( actual, expected, 'returns expected value' );

	x = array( [ true, false, true, false ], opts );
	idx = new ndindex( x );

	expected = {
		'type': 'ndindex',
		'kind': '',
		'data': ndarray2json( x )
	};
	actual = idx.toJSON();
	t.deepEqual( actual, expected, 'returns expected value' );

	x = array( toAccessorArray( [ 1, 2, 3 ] ), opts );
	idx = new ndindex( x );

	expected = {
		'type': 'ndindex',
		'kind': '',
		'data': ndarray2json( x )
	};
	actual = idx.toJSON();
	t.deepEqual( actual, expected, 'returns expected value' );

	x = array( new Uint8Array( [ 1, 0, 1, 0 ] ) );
	idx = new ndindex( x );

	expected = {
		'type': 'ndindex',
		'kind': '',
		'data': ndarray2json( x )
	};
	actual = idx.toJSON();
	t.deepEqual( actual, expected, 'returns expected value' );

	x = array( new BooleanArray( [ 1, 0, 1, 0 ] ) );
	idx = new ndindex( x );

	expected = {
		'type': 'ndindex',
		'kind': '',
		'data': ndarray2json( x )
	};
	actual = idx.toJSON();
	t.deepEqual( actual, expected, 'returns expected value' );

	x = array( new Int32Array( [ 1, 2, 3, 4 ] ) );
	idx = new ndindex( x );

	expected = {
		'type': 'ndindex',
		'kind': '',
		'data': ndarray2json( x )
	};
	actual = idx.toJSON();
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an instance having a custom `toJSON` method (kind=cartesian)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var idx;
	var x;

	opts = {
		'dtype': 'generic'
	};
	x = array( [ 1, 2, 3 ], opts );
	idx = new ndindex( x, {
		'kind': 'cartesian'
	});

	expected = {
		'type': 'ndindex',
		'kind': 'cartesian',
		'data': ndarray2json( x )
	};
	actual = idx.toJSON();
	t.deepEqual( actual, expected, 'returns expected value' );

	x = array( toAccessorArray( [ 1, 2, 3 ] ), opts );
	idx = new ndindex( x, {
		'kind': 'cartesian'
	});

	expected = {
		'type': 'ndindex',
		'kind': 'cartesian',
		'data': ndarray2json( x )
	};
	actual = idx.toJSON();
	t.deepEqual( actual, expected, 'returns expected value' );

	x = array( new Int32Array( [ 1, 2, 3, 4 ] ) );
	idx = new ndindex( x, {
		'kind': 'cartesian'
	});

	expected = {
		'type': 'ndindex',
		'kind': 'cartesian',
		'data': ndarray2json( x )
	};
	actual = idx.toJSON();
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an instance having a custom `toJSON` method (kind=linear)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var idx;
	var x;

	opts = {
		'dtype': 'generic'
	};
	x = array( [ 1, 2, 3 ], opts );
	idx = new ndindex( x, {
		'kind': 'linear'
	});

	expected = {
		'type': 'ndindex',
		'kind': 'linear',
		'data': ndarray2json( x )
	};
	actual = idx.toJSON();
	t.deepEqual( actual, expected, 'returns expected value' );

	x = array( toAccessorArray( [ 1, 2, 3 ] ), opts );
	idx = new ndindex( x, {
		'kind': 'linear'
	});

	expected = {
		'type': 'ndindex',
		'kind': 'linear',
		'data': ndarray2json( x )
	};
	actual = idx.toJSON();
	t.deepEqual( actual, expected, 'returns expected value' );

	x = array( new Int32Array( [ 1, 2, 3, 4 ] ) );
	idx = new ndindex( x, {
		'kind': 'linear'
	});

	expected = {
		'type': 'ndindex',
		'kind': 'linear',
		'data': ndarray2json( x )
	};
	actual = idx.toJSON();
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an instance having a custom `toJSON` method which throws an error if an instance has been invalidated', function test( t ) {
	var opts;
	var idx;
	var x;

	opts = {
		'dtype': 'generic'
	};
	x = array( [ 1, 2, 3 ], opts );
	idx = new ndindex( x );

	ndindex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	t.end();

	function invalidated( idx ) {
		return function invalidated() {
			idx.toJSON();
		};
	}
});

tape( 'attached to the constructor is a `name` property', function test( t ) {
	t.strictEqual( ndindex.name, 'ndindex', 'returns expected value' );
	t.end();
});

tape( 'attached to the constructor is a `free` method to free an actively cached index ndarray (non-persisted)', function test( t ) {
	var actual;
	var opts;
	var idx;
	var x;

	opts = {
		'dtype': 'generic'
	};
	x = array( [ 1, 2, 3 ], opts );
	idx = new ndindex( x );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	actual = ndindex.free( idx.id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	x = array( [ 1, 2, 3 ], opts );
	idx = new ndindex( x, {
		'persist': false
	});

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	actual = ndindex.free( idx.id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	x = array( toAccessorArray( [ 1, 2, 3 ] ), opts );
	idx = new ndindex( x );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	actual = ndindex.free( idx.id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	x = array( [ true, false, true, false ], opts );
	idx = new ndindex( x );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	actual = ndindex.free( idx.id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	x = array( new BooleanArray( [ 1, 0, 1, 0 ] ) );
	idx = new ndindex( x );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	actual = ndindex.free( idx.id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	x = array( new Uint8Array( [ 1, 0, 1, 0 ] ) );
	idx = new ndindex( x );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	actual = ndindex.free( idx.id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	x = array( new Int32Array( [ 1, 2, 3 ] ) );
	idx = new ndindex( x );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	actual = ndindex.free( idx.id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	t.end();
});

tape( 'attached to the constructor is a `free` method to free an actively cached index ndarray (persisted)', function test( t ) {
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
	idx = new ndindex( x, opts );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	actual = ndindex.free( idx.id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	x = array( toAccessorArray( [ 1, 2, 3 ] ), ndopts );
	idx = new ndindex( x, opts );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	actual = ndindex.free( idx.id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	x = array( [ true, false, true, false ], ndopts );
	idx = new ndindex( x, opts );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	actual = ndindex.free( idx.id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	x = array( new BooleanArray( [ 1, 0, 1, 0 ] ) );
	idx = new ndindex( x, opts );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	actual = ndindex.free( idx.id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	x = array( new Uint8Array( [ 1, 0, 1, 0 ] ) );
	idx = new ndindex( x, opts );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	actual = ndindex.free( idx.id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	x = array( new Int32Array( [ 1, 2, 3 ] ) );
	idx = new ndindex( x, opts );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	actual = ndindex.free( idx.id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	t.end();
});

tape( 'attached to the constructor is a `free` method which returns `false` if an index ndarray has already been freed', function test( t ) {
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
	idx = new ndindex( x );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	id = idx.id;
	actual = ndindex.free( id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	actual = ndindex.free( id );
	t.strictEqual( actual, false, 'returns expected value' );

	// Generic (persisted):
	x = array( [ 1, 2, 3 ], opts );
	idx = new ndindex( x, {
		'persist': true
	});

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	id = idx.id;
	actual = ndindex.free( id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	actual = ndindex.free( id );
	t.strictEqual( actual, false, 'returns expected value' );

	// Accessor:
	x = array( toAccessorArray( [ 1, 2, 3 ] ), opts );
	idx = new ndindex( x );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	id = idx.id;
	actual = ndindex.free( id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	actual = ndindex.free( id );
	t.strictEqual( actual, false, 'returns expected value' );

	// Boolean:
	x = array( [ true, false, true, false ], opts );
	idx = new ndindex( x );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	id = idx.id;
	actual = ndindex.free( id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	actual = ndindex.free( id );
	t.strictEqual( actual, false, 'returns expected value' );

	// Boolean:
	x = array( new BooleanArray( [ true, false, true, false ] ) );
	idx = new ndindex( x );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	id = idx.id;
	actual = ndindex.free( id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	actual = ndindex.free( id );
	t.strictEqual( actual, false, 'returns expected value' );

	// Mask:
	x = array( new Uint8Array( [ 1, 0, 1, 0 ] ) );
	idx = new ndindex( x );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	id = idx.id;
	actual = ndindex.free( id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	actual = ndindex.free( id );
	t.strictEqual( actual, false, 'returns expected value' );

	// Integer:
	x = array( new Int32Array( [ 1, 2, 3 ] ) );
	idx = new ndindex( x );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	id = idx.id;
	actual = ndindex.free( id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	actual = ndindex.free( id );
	t.strictEqual( actual, false, 'returns expected value' );

	t.end();
});

tape( 'attached to the constructor is a `get` method to return index ndarray data', function test( t ) {
	var expected;
	var actual;
	var opts;
	var idx;
	var x;

	opts = {
		'dtype': 'generic'
	};
	x = array( [ 1, 2, 3 ], opts );
	idx = new ndindex( x );

	expected = {
		'data': x,
		'type': 'int',
		'kind': '',
		'dtype': 'generic'
	};
	actual = ndindex.get( idx.id );
	t.strictEqual( actual.type, expected.type, 'returns expected value' );
	t.strictEqual( actual.kind, expected.kind, 'returns expected value' );
	t.strictEqual( actual.dtype, expected.dtype, 'returns expected value' );
	t.strictEqual( actual.data.data, expected.data.data, 'returns expected value' );

	x = array( [ 1, 2, 3 ], opts );
	idx = new ndindex( x, {
		'persist': true
	});

	expected = {
		'data': x,
		'type': 'int',
		'kind': '',
		'dtype': 'generic'
	};
	actual = ndindex.get( idx.id );
	t.strictEqual( actual.type, expected.type, 'returns expected value' );
	t.strictEqual( actual.kind, expected.kind, 'returns expected value' );
	t.strictEqual( actual.dtype, expected.dtype, 'returns expected value' );
	t.strictEqual( actual.data.data, expected.data.data, 'returns expected value' );

	x = array( toAccessorArray( [ 1, 2, 3 ] ), opts );
	idx = new ndindex( x );

	expected = {
		'data': x,
		'type': 'int',
		'kind': '',
		'dtype': 'generic'
	};
	actual = ndindex.get( idx.id );
	t.strictEqual( actual.type, expected.type, 'returns expected value' );
	t.strictEqual( actual.kind, expected.kind, 'returns expected value' );
	t.strictEqual( actual.dtype, expected.dtype, 'returns expected value' );
	t.strictEqual( actual.data.data, expected.data.data, 'returns expected value' );

	x = array( [ true, false, true, false ], opts );
	idx = new ndindex( x );

	expected = {
		'data': x,
		'type': 'bool',
		'kind': '',
		'dtype': 'generic'
	};
	actual = ndindex.get( idx.id );
	t.strictEqual( actual.type, expected.type, 'returns expected value' );
	t.strictEqual( actual.kind, expected.kind, 'returns expected value' );
	t.strictEqual( actual.dtype, expected.dtype, 'returns expected value' );
	t.strictEqual( actual.data.data, expected.data.data, 'returns expected value' );

	x = array( new BooleanArray( [ 1, 0, 1, 0 ] ) );
	idx = new ndindex( x );

	expected = {
		'data': x,
		'type': 'bool',
		'kind': '',
		'dtype': 'bool'
	};
	actual = ndindex.get( idx.id );
	t.strictEqual( actual.type, expected.type, 'returns expected value' );
	t.strictEqual( actual.kind, expected.kind, 'returns expected value' );
	t.strictEqual( actual.dtype, expected.dtype, 'returns expected value' );
	t.strictEqual( actual.data.data, expected.data.data, 'returns expected value' );

	x = array( new Uint8Array( [ 1, 0, 1, 0 ] ) );
	idx = new ndindex( x );

	expected = {
		'data': x,
		'type': 'mask',
		'kind': '',
		'dtype': 'uint8'
	};
	actual = ndindex.get( idx.id );
	t.strictEqual( actual.type, expected.type, 'returns expected value' );
	t.strictEqual( actual.kind, expected.kind, 'returns expected value' );
	t.strictEqual( actual.dtype, expected.dtype, 'returns expected value' );
	t.strictEqual( actual.data.data, expected.data.data, 'returns expected value' );

	x = array( new Int32Array( [ 1, 2, 3 ] ) );
	idx = new ndindex( x );

	expected = {
		'data': x,
		'type': 'int',
		'kind': '',
		'dtype': 'int32'
	};
	actual = ndindex.get( idx.id );
	t.strictEqual( actual.type, expected.type, 'returns expected value' );
	t.strictEqual( actual.kind, expected.kind, 'returns expected value' );
	t.strictEqual( actual.dtype, expected.dtype, 'returns expected value' );
	t.strictEqual( actual.data.data, expected.data.data, 'returns expected value' );

	t.end();
});

tape( 'attached to the constructor is a `get` method to return index ndarray data (kind=cartesian)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var idx;
	var x;

	opts = {
		'dtype': 'generic'
	};
	x = array( [ 1, 2, 3 ], opts );
	idx = new ndindex( x, {
		'kind': 'cartesian'
	});

	expected = {
		'data': x,
		'type': 'int',
		'kind': 'cartesian',
		'dtype': 'generic'
	};
	actual = ndindex.get( idx.id );
	t.strictEqual( actual.type, expected.type, 'returns expected value' );
	t.strictEqual( actual.kind, expected.kind, 'returns expected value' );
	t.strictEqual( actual.dtype, expected.dtype, 'returns expected value' );
	t.strictEqual( actual.data.data, expected.data.data, 'returns expected value' );

	x = array( [ 1, 2, 3 ], opts );
	idx = new ndindex( x, {
		'persist': true,
		'kind': 'cartesian'
	});

	expected = {
		'data': x,
		'type': 'int',
		'kind': 'cartesian',
		'dtype': 'generic'
	};
	actual = ndindex.get( idx.id );
	t.strictEqual( actual.type, expected.type, 'returns expected value' );
	t.strictEqual( actual.kind, expected.kind, 'returns expected value' );
	t.strictEqual( actual.dtype, expected.dtype, 'returns expected value' );
	t.strictEqual( actual.data.data, expected.data.data, 'returns expected value' );

	x = array( toAccessorArray( [ 1, 2, 3 ] ), opts );
	idx = new ndindex( x, {
		'kind': 'cartesian'
	});

	expected = {
		'data': x,
		'type': 'int',
		'kind': 'cartesian',
		'dtype': 'generic'
	};
	actual = ndindex.get( idx.id );
	t.strictEqual( actual.type, expected.type, 'returns expected value' );
	t.strictEqual( actual.kind, expected.kind, 'returns expected value' );
	t.strictEqual( actual.dtype, expected.dtype, 'returns expected value' );
	t.strictEqual( actual.data.data, expected.data.data, 'returns expected value' );

	x = array( new Int32Array( [ 1, 2, 3 ] ) );
	idx = new ndindex( x, {
		'kind': 'cartesian'
	});

	expected = {
		'data': x,
		'type': 'int',
		'kind': 'cartesian',
		'dtype': 'int32'
	};
	actual = ndindex.get( idx.id );
	t.strictEqual( actual.type, expected.type, 'returns expected value' );
	t.strictEqual( actual.kind, expected.kind, 'returns expected value' );
	t.strictEqual( actual.dtype, expected.dtype, 'returns expected value' );
	t.strictEqual( actual.data.data, expected.data.data, 'returns expected value' );

	t.end();
});

tape( 'attached to the constructor is a `get` method to return index ndarray data (kind=linear)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var idx;
	var x;

	opts = {
		'dtype': 'generic'
	};
	x = array( [ 1, 2, 3 ], opts );
	idx = new ndindex( x, {
		'kind': 'linear'
	});

	expected = {
		'data': x,
		'type': 'int',
		'kind': 'linear',
		'dtype': 'generic'
	};
	actual = ndindex.get( idx.id );
	t.strictEqual( actual.type, expected.type, 'returns expected value' );
	t.strictEqual( actual.kind, expected.kind, 'returns expected value' );
	t.strictEqual( actual.dtype, expected.dtype, 'returns expected value' );
	t.strictEqual( actual.data.data, expected.data.data, 'returns expected value' );

	x = array( [ 1, 2, 3 ], opts );
	idx = new ndindex( x, {
		'persist': true,
		'kind': 'linear'
	});

	expected = {
		'data': x,
		'type': 'int',
		'kind': 'linear',
		'dtype': 'generic'
	};
	actual = ndindex.get( idx.id );
	t.strictEqual( actual.type, expected.type, 'returns expected value' );
	t.strictEqual( actual.kind, expected.kind, 'returns expected value' );
	t.strictEqual( actual.dtype, expected.dtype, 'returns expected value' );
	t.strictEqual( actual.data.data, expected.data.data, 'returns expected value' );

	x = array( toAccessorArray( [ 1, 2, 3 ] ), opts );
	idx = new ndindex( x, {
		'kind': 'linear'
	});

	expected = {
		'data': x,
		'type': 'int',
		'kind': 'linear',
		'dtype': 'generic'
	};
	actual = ndindex.get( idx.id );
	t.strictEqual( actual.type, expected.type, 'returns expected value' );
	t.strictEqual( actual.kind, expected.kind, 'returns expected value' );
	t.strictEqual( actual.dtype, expected.dtype, 'returns expected value' );
	t.strictEqual( actual.data.data, expected.data.data, 'returns expected value' );

	x = array( new Int32Array( [ 1, 2, 3 ] ) );
	idx = new ndindex( x, {
		'kind': 'linear'
	});

	expected = {
		'data': x,
		'type': 'int',
		'kind': 'linear',
		'dtype': 'int32'
	};
	actual = ndindex.get( idx.id );
	t.strictEqual( actual.type, expected.type, 'returns expected value' );
	t.strictEqual( actual.kind, expected.kind, 'returns expected value' );
	t.strictEqual( actual.dtype, expected.dtype, 'returns expected value' );
	t.strictEqual( actual.data.data, expected.data.data, 'returns expected value' );

	t.end();
});

tape( 'attached to the constructor is a `get` method which frees non-persisted index ndarrays', function test( t ) {
	var opts;
	var idx;
	var x;

	opts = {
		'dtype': 'generic'
	};
	x = array( [ 1, 2, 3 ], opts );
	idx = new ndindex( x );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	ndindex.get( idx.id );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	x = array( [ 1, 2, 3 ], opts );
	idx = new ndindex( x, {
		'persist': false
	});

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	ndindex.get( idx.id );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	t.end();
});

tape( 'attached to the constructor is a `get` method which does not free persisted index ndarrays', function test( t ) {
	var opts;
	var idx;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};

	x = array( [ 1, 2, 3 ], opts );
	idx = new ndindex( x, {
		'persist': true
	});

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	for ( i = 0; i < 100; i++ ) {
		ndindex.get( idx.id );
		t.strictEqual( idx.isCached, true, 'returns expected value' );
	}
	ndindex.free( idx.id );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	t.end();
});

tape( 'attached to the constructor is a `get` method which returns `null` if unable to resolve an index ndarray', function test( t ) {
	var actual;
	var opts;
	var idx;
	var id;
	var x;

	opts = {
		'dtype': 'generic'
	};
	x = array( [ 1, 2, 3 ], opts );
	idx = new ndindex( x );

	id = idx.id;
	ndindex.free( id );
	actual = ndindex.get( id );
	t.strictEqual( actual, null, 'returns expected value' );

	x = array( [ 1, 2, 3 ], opts );
	idx = new ndindex( x, {
		'persist': true
	});

	id = idx.id;
	ndindex.free( id );
	actual = ndindex.get( id );
	t.strictEqual( actual, null, 'returns expected value' );

	x = array( toAccessorArray( [ 1, 2, 3 ] ), opts );
	idx = new ndindex( x );

	id = idx.id;
	ndindex.free( id );
	actual = ndindex.get( id );
	t.strictEqual( actual, null, 'returns expected value' );

	x = array( [ true, false, true, false ], opts );
	idx = new ndindex( x );

	id = idx.id;
	ndindex.free( id );
	actual = ndindex.get( id );
	t.strictEqual( actual, null, 'returns expected value' );

	x = array( new BooleanArray( [ 1, 0, 1, 0 ] ) );
	idx = new ndindex( x );

	id = idx.id;
	ndindex.free( id );
	actual = ndindex.get( id );
	t.strictEqual( actual, null, 'returns expected value' );

	x = array( new Uint8Array( [ 1, 0, 1, 0 ] ) );
	idx = new ndindex( x );

	id = idx.id;
	ndindex.free( id );
	actual = ndindex.get( id );
	t.strictEqual( actual, null, 'returns expected value' );

	x = array( new Int32Array( [ 1, 2, 3 ] ) );
	idx = new ndindex( x );

	id = idx.id;
	ndindex.free( id );
	actual = ndindex.get( id );
	t.strictEqual( actual, null, 'returns expected value' );

	actual = ndindex.get( '??beep_boop_foo_bar!!' );
	t.strictEqual( actual, null, 'returns expected value' );

	t.end();
});
