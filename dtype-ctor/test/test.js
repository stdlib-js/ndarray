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
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var dtypeDesc = require( './../../base/dtype-desc' );
var structFactory = require( '@stdlib/dstructs/struct' );
var DataType = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof DataType, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function is a constructor', function test( t ) {
	var dt;

	dt = new DataType( 'float64' );
	t.strictEqual( dt instanceof DataType, true, 'returns expected value' );

	dt = new DataType( 'float64', {} );
	t.strictEqual( dt instanceof DataType, true, 'returns expected value' );

	t.end();
});

tape( 'the constructor does not require the `new` keyword', function test( t ) {
	var dtype;
	var dt;

	dtype = DataType;

	dt = dtype( 'float64' );
	t.strictEqual( dt instanceof DataType, true, 'returns expected value' );

	dt = dtype( 'float64', {} );
	t.strictEqual( dt instanceof DataType, true, 'returns expected value' );

	t.end();
});

tape( 'the constructor throws an error if provided a first argument which is not a supported data type string, a struct constructor, or another data type instance', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		false,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var dt = new DataType( value ); // eslint-disable-line no-unused-vars
		};
	}
});

tape( 'the constructor throws an error if provided a first argument which is not a supported data type string, a struct constructor, or another data type instance (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		false,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var dt = new DataType( value, {} ); // eslint-disable-line no-unused-vars
		};
	}
});

tape( 'the constructor throws an error if provided an options argument which is not an object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		false,
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var dt = new DataType( 'float64', value ); // eslint-disable-line no-unused-vars
		};
	}
});

tape( 'the constructor throws an error if provided a `description` option which is not a string', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		null,
		void 0,
		true,
		false,
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var opts = {
				'description': value
			};
			var dt = new DataType( 'float64', opts ); // eslint-disable-line no-unused-vars
		};
	}
});

tape( 'attached to the constructor is a `name` property', function test( t ) {
	t.strictEqual( DataType.name, 'DataType', 'returns expected value' );
	t.end();
});

tape( 'the constructor supports creating a data type instance from another data type instance', function test( t ) {
	var dt1;
	var dt2;

	dt1 = new DataType( 'int32' );
	dt2 = new DataType( dt1 );

	t.notEqual( dt1, dt2, 'returns expected value' );
	t.strictEqual( dt1.value, dt2.value, 'returns expected value' );
	t.deepEqual( dt1.toJSON(), dt2.toJSON(), 'returns expected value' );
	t.end();
});

tape( 'the constructor supports creating a data type instance from a struct', function test( t ) {
	var schema;
	var dt;
	var S;

	schema = [
		{
			'name': 'foo',
			'type': 'float64'
		}
	];
	S = structFactory( schema );
	dt = new DataType( S );

	t.strictEqual( dt.value, S, 'returns expected value' );
	t.strictEqual( dt.toString(), S.layout, 'returns expected value' );

	t.end();
});

tape( 'the constructor prototype has a read-only property for getting the data type alignment', function test( t ) {
	var dt = new DataType( 'float32' );
	t.strictEqual( hasOwnProp( DataType.prototype, 'alignment' ), true, 'returns expected value' );
	t.strictEqual( dt.alignment, 4, 'returns expected value' );
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		dt.alignment = 5;
	}
});

tape( 'the constructor prototype has a read-only property for getting the data type size', function test( t ) {
	var dt = new DataType( 'float32' );
	t.strictEqual( hasOwnProp( DataType.prototype, 'byteLength' ), true, 'returns expected value' );
	t.strictEqual( dt.byteLength, 4, 'returns expected value' );
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		dt.byteLength = 5;
	}
});

tape( 'the constructor prototype has a read-only property for getting the data type byte order', function test( t ) {
	var dt = new DataType( 'float32' );
	t.strictEqual( hasOwnProp( DataType.prototype, 'byteOrder' ), true, 'returns expected value' );
	t.strictEqual( dt.byteOrder, 'host', 'returns expected value' );
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		dt.byteOrder = 'foo';
	}
});

tape( 'the constructor prototype has a read-only property for getting the data type single letter character abbreviation', function test( t ) {
	var dt = new DataType( 'float32' );
	t.strictEqual( hasOwnProp( DataType.prototype, 'char' ), true, 'returns expected value' );
	t.strictEqual( dt.char, 'f', 'returns expected value' );
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		dt.char = 'foo';
	}
});

tape( 'the constructor prototype has a read-only property for getting the data type description', function test( t ) {
	var dt;

	dt = new DataType( 'float32' );
	t.strictEqual( hasOwnProp( DataType.prototype, 'description' ), true, 'returns expected value' );
	t.strictEqual( typeof dt.description, 'string', 'returns expected value' );
	t.throws( foo, Error, 'throws an error' );

	dt = new DataType( 'float64', {
		'description': 'foo bar'
	});
	t.strictEqual( hasOwnProp( DataType.prototype, 'description' ), true, 'returns expected value' );
	t.strictEqual( dt.description, 'foo bar', 'returns expected value' );

	t.end();

	function foo() {
		dt.description = 'foo';
	}
});

tape( 'the constructor prototype has a read-only property for getting the data type enumeration constant', function test( t ) {
	var dt = new DataType( 'float32' );
	t.strictEqual( hasOwnProp( DataType.prototype, 'enum' ), true, 'returns expected value' );
	t.strictEqual( typeof dt.enum, 'number', 'returns expected value' );
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		dt.enum = -4;
	}
});

tape( 'the constructor prototype has a read-only property for getting the "raw" data type value', function test( t ) {
	var dt = new DataType( 'generic' );
	t.strictEqual( hasOwnProp( DataType.prototype, 'value' ), true, 'returns expected value' );
	t.strictEqual( dt.value, 'generic', 'returns expected value' );
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		dt.value = 'foo';
	}
});

tape( 'the constructor returns an instance which supports serializing an instance to a string', function test( t ) {
	var dt;

	dt = new DataType( 'float64' );
	t.strictEqual( dt.toString(), 'float64', 'returns expected value' );

	dt = new DataType( 'float32' );
	t.strictEqual( dt.toString(), 'float32', 'returns expected value' );

	t.end();
});

tape( 'the constructor returns an instance which supports serializing an instance as a JSON object', function test( t ) {
	var expected;
	var dt;

	dt = new DataType( 'float64' );
	expected = {
		'type': 'DataType',
		'value': 'float64',
		'byteOrder': 'host',
		'description': dtypeDesc( 'float64' )
	};
	t.deepEqual( dt.toJSON(), expected, 'returns expected value' );

	dt = new DataType( 'float32' );
	expected = {
		'type': 'DataType',
		'value': 'float32',
		'byteOrder': 'host',
		'description': dtypeDesc( 'float32' )
	};
	t.deepEqual( dt.toJSON(), expected, 'returns expected value' );

	t.end();
});
