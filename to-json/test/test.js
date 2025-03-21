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
var Float64Array = require( '@stdlib/array/float64' );
var Complex64Array = require( '@stdlib/array/complex64' );
var ndarray = require( './../../ctor' );
var sub2ind = require( './../../sub2ind' );
var noop = require( '@stdlib/utils/noop' );
var ndarray2json = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ndarray2json, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided an ndarray-like object', function test( t ) {
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
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			ndarray2json( value );
		};
	}
});

tape( 'the function serializes an ndarray to JSON (row-major)', function test( t ) {
	var expected;
	var strides;
	var actual;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ 2, 1 ];
	offset = 2;

	arr = ndarray( dtype, buffer, shape, strides, offset, order );

	expected = {
		'type': 'ndarray',
		'dtype': 'float64',
		'data': [ 3.0, 4.0, 5.0, 6.0 ],
		'shape': [ 2, 2 ],
		'strides': [ 2, 1 ],
		'order': 'row-major',
		'flags': {
			'READONLY': false
		}
	};
	actual = ndarray2json( arr );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function serializes an ndarray to JSON (row-major, negative strides)', function test( t ) {
	var expected;
	var strides;
	var actual;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ -2, -1 ];
	offset = 5;

	arr = ndarray( dtype, buffer, shape, strides, offset, order );

	expected = {
		'type': 'ndarray',
		'dtype': 'float64',
		'data': [ 6.0, 5.0, 4.0, 3.0 ],
		'shape': [ 2, 2 ],
		'strides': [ 2, 1 ],
		'order': 'row-major',
		'flags': {
			'READONLY': false
		}
	};
	actual = ndarray2json( arr );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function serializes an ndarray to JSON (column-major)', function test( t ) {
	var expected;
	var strides;
	var actual;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'generic';
	buffer = [ 1.0, 2.0, 3.0, 4.0 ];
	shape = [ 2, 2 ];
	order = 'column-major';
	strides = [ 1, 2 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order );

	expected = {
		'type': 'ndarray',
		'dtype': 'generic',
		'data': [ 1.0, 2.0, 3.0, 4.0 ],
		'shape': [ 2, 2 ],
		'strides': [ 1, 2 ],
		'order': 'column-major',
		'flags': {
			'READONLY': false
		}
	};
	actual = ndarray2json( arr );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function serializes an ndarray to JSON (column-major, negative strides)', function test( t ) {
	var expected;
	var strides;
	var actual;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	shape = [ 2, 2 ];
	order = 'column-major';
	strides = [ -1, -2 ];
	offset = 5;

	arr = ndarray( dtype, buffer, shape, strides, offset, order );

	expected = {
		'type': 'ndarray',
		'dtype': 'float64',
		'data': [ 6.0, 5.0, 4.0, 3.0 ],
		'shape': [ 2, 2 ],
		'strides': [ 1, 2 ],
		'order': 'column-major',
		'flags': {
			'READONLY': false
		}
	};
	actual = ndarray2json( arr );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function serializes an ndarray to JSON (0d)', function test( t ) {
	var expected;
	var strides;
	var actual;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'generic';
	buffer = [ 1.0, 2.0, 3.0, 4.0 ];
	shape = [];
	order = 'column-major';
	strides = [ 0 ];
	offset = 2;

	arr = ndarray( dtype, buffer, shape, strides, offset, order );

	expected = {
		'type': 'ndarray',
		'dtype': 'generic',
		'data': [ 3.0 ],
		'shape': [],
		'strides': [ 0 ],
		'order': 'column-major',
		'flags': {
			'READONLY': false
		}
	};
	actual = ndarray2json( arr );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function serializes an ndarray to JSON (dtype=complex)', function test( t ) {
	var expected;
	var strides;
	var actual;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'complex64';
	buffer = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ 2, 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order );

	expected = {
		'type': 'ndarray',
		'dtype': 'complex64',
		'data': [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ],
		'shape': [ 2, 2 ],
		'strides': [ 2, 1 ],
		'order': 'row-major',
		'flags': {
			'READONLY': false
		}
	};
	actual = ndarray2json( arr );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function serializes an ndarray-like object to JSON (row-major)', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = {
		'dtype': 'float64',
		'data': new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] ),
		'shape': [ 2, 2 ],
		'strides': [ 2, 1 ],
		'offset': 2,
		'order': 'row-major',
		'ndims': 2,
		'length': 4,
		'flags': {
			'READONLY': true
		},
		'get': getter,
		'set': noop
	};

	expected = {
		'type': 'ndarray',
		'dtype': 'float64',
		'data': [ 3.0, 4.0, 5.0, 6.0 ],
		'shape': [ 2, 2 ],
		'strides': [ 2, 1 ],
		'order': 'row-major',
		'flags': {
			'READONLY': true
		}
	};
	actual = ndarray2json( arr );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();

	function getter( i, j ) {
		return arr.data[ arr.offset+sub2ind( [ 2, 2 ], i, j ) ];
	}
});

tape( 'the function serializes an ndarray-like object to JSON (column-major)', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = {
		'dtype': 'float64',
		'data': new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] ),
		'shape': [ 2, 2 ],
		'strides': [ 1, 2 ],
		'offset': 2,
		'order': 'column-major',
		'ndims': 2,
		'length': 4,
		'flags': {
			'READONLY': true
		},
		'get': getter,
		'set': noop
	};

	expected = {
		'type': 'ndarray',
		'dtype': 'float64',
		'data': [ 3.0, 5.0, 4.0, 6.0 ],
		'shape': [ 2, 2 ],
		'strides': [ 1, 2 ],
		'order': 'column-major',
		'flags': {
			'READONLY': true
		}
	};
	actual = ndarray2json( arr );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();

	function getter( i, j ) {
		return arr.data[ arr.offset+sub2ind( [ 2, 2 ], i, j ) ];
	}
});

tape( 'the function serializes an ndarray-like object to JSON (row-major, dtype=complex)', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = {
		'dtype': 'complex64',
		'data': new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] ),
		'shape': [ 2, 2 ],
		'strides': [ 2, 1 ],
		'offset': 0,
		'order': 'row-major',
		'ndims': 2,
		'length': 4,
		'flags': {
			'READONLY': true
		},
		'get': getter,
		'set': noop
	};

	expected = {
		'type': 'ndarray',
		'dtype': 'complex64',
		'data': [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ],
		'shape': [ 2, 2 ],
		'strides': [ 2, 1 ],
		'order': 'row-major',
		'flags': {
			'READONLY': true
		}
	};
	actual = ndarray2json( arr );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();

	function getter( i, j ) {
		return arr.data.get( arr.offset+sub2ind( [ 2, 2 ], i, j ) );
	}
});
