/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var Float32Array = require( '@stdlib/array/float32' );
var Int32Array = require( '@stdlib/array/int32' );
var Uint32Array = require( '@stdlib/array/uint32' );
var Int16Array = require( '@stdlib/array/int16' );
var Uint16Array = require( '@stdlib/array/uint16' );
var Int8Array = require( '@stdlib/array/int8' );
var Uint8Array = require( '@stdlib/array/uint8' );
var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex128Array = require( '@stdlib/array/complex128' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );
var instanceOf = require( '@stdlib/assert/instance-of' );
var base = require( './../../../base/ctor' );
var ndarray = require( './../../../ctor' );
var array = require( './../../../array' );
var transpose = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof transpose, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an ndarray having fewer than two dimensions', function test( t ) {
	var values;
	var i;

	values = [
		new ndarray( 'float64', [], [], [ 0 ], 0, 'row-major' ),
		new ndarray( 'float64', [ 1 ], [ 1 ], [ 1 ], 0, 'row-major' )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			transpose( value );
		};
	}
});

tape( 'the function transposes a matrix (dtype=float64, base)', function test( t ) {
	var arr;
	var buf;
	var v1;
	var v2;
	var x;
	var i;
	var j;

	buf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	x = new base( 'float64', buf, [ 2, 3 ], [ 3, 1 ], 0, 'row-major' );
	arr = transpose( x );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, x.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 3, 2 ], 'returns expected value' );
	t.strictEqual( arr.data, x.data, 'returns expected value' );
	t.strictEqual( arr.order, x.order, 'returns expected value' );

	for ( i = 0; i < 2; i++ ) {
		for ( j = 0; j < 3; j++ ) {
			v1 = x.get( i, j );
			v2 = arr.get( j, i );
			t.strictEqual( v1, v2, 'returns expected value for ('+j+','+i+')' );
		}
	}
	t.end();
});

tape( 'the function transposes a matrix (dtype=float64, base, column-major)', function test( t ) {
	var arr;
	var buf;
	var v1;
	var v2;
	var x;
	var i;
	var j;

	buf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	x = new base( 'float64', buf, [ 2, 3 ], [ 1, 2 ], 0, 'column-major' );
	arr = transpose( x );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, x.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 3, 2 ], 'returns expected value' );
	t.strictEqual( arr.data, x.data, 'returns expected value' );
	t.strictEqual( arr.order, x.order, 'returns expected value' );

	for ( i = 0; i < 2; i++ ) {
		for ( j = 0; j < 3; j++ ) {
			v1 = x.get( i, j );
			v2 = arr.get( j, i );
			t.strictEqual( v1, v2, 'returns expected value for ('+j+','+i+')' );
		}
	}
	t.end();
});

tape( 'the function transposes a matrix (dtype=float64, non-base)', function test( t ) {
	var arr;
	var buf;
	var v1;
	var v2;
	var x;
	var i;
	var j;

	buf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	x = array( buf, {
		'shape': [ 2, 3 ],
		'dtype': 'float64'
	});
	arr = transpose( x );

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, x.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 3, 2 ], 'returns expected value' );
	t.strictEqual( arr.data, x.data, 'returns expected value' );
	t.strictEqual( arr.order, x.order, 'returns expected value' );

	for ( i = 0; i < 2; i++ ) {
		for ( j = 0; j < 3; j++ ) {
			v1 = x.get( i, j );
			v2 = arr.get( j, i );
			t.strictEqual( v1, v2, 'returns expected value for ('+j+','+i+')' );
		}
	}
	t.end();
});

tape( 'the function transposes a matrix (dtype=float32, base)', function test( t ) {
	var arr;
	var buf;
	var v1;
	var v2;
	var x;
	var i;
	var j;

	buf = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	x = new base( 'float32', buf, [ 2, 3 ], [ 3, 1 ], 0, 'row-major' );
	arr = transpose( x );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, x.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 3, 2 ], 'returns expected value' );
	t.strictEqual( arr.data, x.data, 'returns expected value' );
	t.strictEqual( arr.order, x.order, 'returns expected value' );

	for ( i = 0; i < 2; i++ ) {
		for ( j = 0; j < 3; j++ ) {
			v1 = x.get( i, j );
			v2 = arr.get( j, i );
			t.strictEqual( v1, v2, 'returns expected value for ('+j+','+i+')' );
		}
	}
	t.end();
});

tape( 'the function transposes a matrix (dtype=float32, non-base)', function test( t ) {
	var arr;
	var buf;
	var v1;
	var v2;
	var x;
	var i;
	var j;

	buf = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	x = array( buf, {
		'shape': [ 2, 3 ],
		'dtype': 'float32'
	});
	arr = transpose( x );

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, x.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 3, 2 ], 'returns expected value' );
	t.strictEqual( arr.data, x.data, 'returns expected value' );
	t.strictEqual( arr.order, x.order, 'returns expected value' );

	for ( i = 0; i < 2; i++ ) {
		for ( j = 0; j < 3; j++ ) {
			v1 = x.get( i, j );
			v2 = arr.get( j, i );
			t.strictEqual( v1, v2, 'returns expected value for ('+j+','+i+')' );
		}
	}
	t.end();
});

tape( 'the function transposes a matrix (dtype=int32, base)', function test( t ) {
	var arr;
	var buf;
	var v1;
	var v2;
	var x;
	var i;
	var j;

	buf = new Int32Array( [ 1, 2, 3, 4, 5, 6 ] );
	x = new base( 'int32', buf, [ 2, 3 ], [ 3, 1 ], 0, 'row-major' );
	arr = transpose( x );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, x.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 3, 2 ], 'returns expected value' );
	t.strictEqual( arr.data, x.data, 'returns expected value' );
	t.strictEqual( arr.order, x.order, 'returns expected value' );

	for ( i = 0; i < 2; i++ ) {
		for ( j = 0; j < 3; j++ ) {
			v1 = x.get( i, j );
			v2 = arr.get( j, i );
			t.strictEqual( v1, v2, 'returns expected value for ('+j+','+i+')' );
		}
	}
	t.end();
});

tape( 'the function transposes a matrix (dtype=int32, non-base)', function test( t ) {
	var arr;
	var buf;
	var v1;
	var v2;
	var x;
	var i;
	var j;

	buf = new Int32Array( [ 1, 2, 3, 4, 5, 6 ] );
	x = array( buf, {
		'shape': [ 2, 3 ],
		'dtype': 'int32'
	});
	arr = transpose( x );

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, x.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 3, 2 ], 'returns expected value' );
	t.strictEqual( arr.data, x.data, 'returns expected value' );
	t.strictEqual( arr.order, x.order, 'returns expected value' );

	for ( i = 0; i < 2; i++ ) {
		for ( j = 0; j < 3; j++ ) {
			v1 = x.get( i, j );
			v2 = arr.get( j, i );
			t.strictEqual( v1, v2, 'returns expected value for ('+j+','+i+')' );
		}
	}
	t.end();
});

tape( 'the function transposes a matrix (dtype=int16, base)', function test( t ) {
	var arr;
	var buf;
	var v1;
	var v2;
	var x;
	var i;
	var j;

	buf = new Int16Array( [ 1, 2, 3, 4, 5, 6 ] );
	x = new base( 'int16', buf, [ 2, 3 ], [ 3, 1 ], 0, 'row-major' );
	arr = transpose( x );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, x.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 3, 2 ], 'returns expected value' );
	t.strictEqual( arr.data, x.data, 'returns expected value' );
	t.strictEqual( arr.order, x.order, 'returns expected value' );

	for ( i = 0; i < 2; i++ ) {
		for ( j = 0; j < 3; j++ ) {
			v1 = x.get( i, j );
			v2 = arr.get( j, i );
			t.strictEqual( v1, v2, 'returns expected value for ('+j+','+i+')' );
		}
	}
	t.end();
});

tape( 'the function transposes a matrix (dtype=int16, non-base)', function test( t ) {
	var arr;
	var buf;
	var v1;
	var v2;
	var x;
	var i;
	var j;

	buf = new Int16Array( [ 1, 2, 3, 4, 5, 6 ] );
	x = array( buf, {
		'shape': [ 2, 3 ],
		'dtype': 'int16'
	});
	arr = transpose( x );

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, x.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 3, 2 ], 'returns expected value' );
	t.strictEqual( arr.data, x.data, 'returns expected value' );
	t.strictEqual( arr.order, x.order, 'returns expected value' );

	for ( i = 0; i < 2; i++ ) {
		for ( j = 0; j < 3; j++ ) {
			v1 = x.get( i, j );
			v2 = arr.get( j, i );
			t.strictEqual( v1, v2, 'returns expected value for ('+j+','+i+')' );
		}
	}
	t.end();
});

tape( 'the function transposes a matrix (dtype=int8, base)', function test( t ) {
	var arr;
	var buf;
	var v1;
	var v2;
	var x;
	var i;
	var j;

	buf = new Int8Array( [ 1, 2, 3, 4, 5, 6 ] );
	x = new base( 'int8', buf, [ 2, 3 ], [ 3, 1 ], 0, 'row-major' );
	arr = transpose( x );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, x.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 3, 2 ], 'returns expected value' );
	t.strictEqual( arr.data, x.data, 'returns expected value' );
	t.strictEqual( arr.order, x.order, 'returns expected value' );

	for ( i = 0; i < 2; i++ ) {
		for ( j = 0; j < 3; j++ ) {
			v1 = x.get( i, j );
			v2 = arr.get( j, i );
			t.strictEqual( v1, v2, 'returns expected value for ('+j+','+i+')' );
		}
	}
	t.end();
});

tape( 'the function transposes a matrix (dtype=int8, non-base)', function test( t ) {
	var arr;
	var buf;
	var v1;
	var v2;
	var x;
	var i;
	var j;

	buf = new Int8Array( [ 1, 2, 3, 4, 5, 6 ] );
	x = array( buf, {
		'shape': [ 2, 3 ],
		'dtype': 'int8'
	});
	arr = transpose( x );

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, x.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 3, 2 ], 'returns expected value' );
	t.strictEqual( arr.data, x.data, 'returns expected value' );
	t.strictEqual( arr.order, x.order, 'returns expected value' );

	for ( i = 0; i < 2; i++ ) {
		for ( j = 0; j < 3; j++ ) {
			v1 = x.get( i, j );
			v2 = arr.get( j, i );
			t.strictEqual( v1, v2, 'returns expected value for ('+j+','+i+')' );
		}
	}
	t.end();
});

tape( 'the function transposes a matrix (dtype=uint32, base)', function test( t ) {
	var arr;
	var buf;
	var v1;
	var v2;
	var x;
	var i;
	var j;

	buf = new Uint32Array( [ 1, 2, 3, 4, 5, 6 ] );
	x = new base( 'uint32', buf, [ 2, 3 ], [ 3, 1 ], 0, 'row-major' );
	arr = transpose( x );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, x.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 3, 2 ], 'returns expected value' );
	t.strictEqual( arr.data, x.data, 'returns expected value' );
	t.strictEqual( arr.order, x.order, 'returns expected value' );

	for ( i = 0; i < 2; i++ ) {
		for ( j = 0; j < 3; j++ ) {
			v1 = x.get( i, j );
			v2 = arr.get( j, i );
			t.strictEqual( v1, v2, 'returns expected value for ('+j+','+i+')' );
		}
	}
	t.end();
});

tape( 'the function transposes a matrix (dtype=uint32, non-base)', function test( t ) {
	var arr;
	var buf;
	var v1;
	var v2;
	var x;
	var i;
	var j;

	buf = new Uint32Array( [ 1, 2, 3, 4, 5, 6 ] );
	x = array( buf, {
		'shape': [ 2, 3 ],
		'dtype': 'uint32'
	});
	arr = transpose( x );

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, x.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 3, 2 ], 'returns expected value' );
	t.strictEqual( arr.data, x.data, 'returns expected value' );
	t.strictEqual( arr.order, x.order, 'returns expected value' );

	for ( i = 0; i < 2; i++ ) {
		for ( j = 0; j < 3; j++ ) {
			v1 = x.get( i, j );
			v2 = arr.get( j, i );
			t.strictEqual( v1, v2, 'returns expected value for ('+j+','+i+')' );
		}
	}
	t.end();
});

tape( 'the function transposes a matrix (dtype=uint16, base)', function test( t ) {
	var arr;
	var buf;
	var v1;
	var v2;
	var x;
	var i;
	var j;

	buf = new Uint16Array( [ 1, 2, 3, 4, 5, 6 ] );
	x = new base( 'uint16', buf, [ 2, 3 ], [ 3, 1 ], 0, 'row-major' );
	arr = transpose( x );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, x.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 3, 2 ], 'returns expected value' );
	t.strictEqual( arr.data, x.data, 'returns expected value' );
	t.strictEqual( arr.order, x.order, 'returns expected value' );

	for ( i = 0; i < 2; i++ ) {
		for ( j = 0; j < 3; j++ ) {
			v1 = x.get( i, j );
			v2 = arr.get( j, i );
			t.strictEqual( v1, v2, 'returns expected value for ('+j+','+i+')' );
		}
	}
	t.end();
});

tape( 'the function transposes a matrix (dtype=uint16, non-base)', function test( t ) {
	var arr;
	var buf;
	var v1;
	var v2;
	var x;
	var i;
	var j;

	buf = new Uint16Array( [ 1, 2, 3, 4, 5, 6 ] );
	x = array( buf, {
		'shape': [ 2, 3 ],
		'dtype': 'uint16'
	});
	arr = transpose( x );

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, x.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 3, 2 ], 'returns expected value' );
	t.strictEqual( arr.data, x.data, 'returns expected value' );
	t.strictEqual( arr.order, x.order, 'returns expected value' );

	for ( i = 0; i < 2; i++ ) {
		for ( j = 0; j < 3; j++ ) {
			v1 = x.get( i, j );
			v2 = arr.get( j, i );
			t.strictEqual( v1, v2, 'returns expected value for ('+j+','+i+')' );
		}
	}
	t.end();
});

tape( 'the function transposes a matrix (dtype=uint8, base)', function test( t ) {
	var arr;
	var buf;
	var v1;
	var v2;
	var x;
	var i;
	var j;

	buf = new Uint8Array( [ 1, 2, 3, 4, 5, 6 ] );
	x = new base( 'uint8', buf, [ 2, 3 ], [ 3, 1 ], 0, 'row-major' );
	arr = transpose( x );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, x.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 3, 2 ], 'returns expected value' );
	t.strictEqual( arr.data, x.data, 'returns expected value' );
	t.strictEqual( arr.order, x.order, 'returns expected value' );

	for ( i = 0; i < 2; i++ ) {
		for ( j = 0; j < 3; j++ ) {
			v1 = x.get( i, j );
			v2 = arr.get( j, i );
			t.strictEqual( v1, v2, 'returns expected value for ('+j+','+i+')' );
		}
	}
	t.end();
});

tape( 'the function transposes a matrix (dtype=uint8, non-base)', function test( t ) {
	var arr;
	var buf;
	var v1;
	var v2;
	var x;
	var i;
	var j;

	buf = new Uint8Array( [ 1, 2, 3, 4, 5, 6 ] );
	x = array( buf, {
		'shape': [ 2, 3 ],
		'dtype': 'uint8'
	});
	arr = transpose( x );

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, x.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 3, 2 ], 'returns expected value' );
	t.strictEqual( arr.data, x.data, 'returns expected value' );
	t.strictEqual( arr.order, x.order, 'returns expected value' );

	for ( i = 0; i < 2; i++ ) {
		for ( j = 0; j < 3; j++ ) {
			v1 = x.get( i, j );
			v2 = arr.get( j, i );
			t.strictEqual( v1, v2, 'returns expected value for ('+j+','+i+')' );
		}
	}
	t.end();
});

tape( 'the function transposes a matrix (dtype=uint8c, base)', function test( t ) {
	var arr;
	var buf;
	var v1;
	var v2;
	var x;
	var i;
	var j;

	buf = new Uint8ClampedArray( [ 1, 2, 3, 4, 5, 6 ] );
	x = new base( 'uint8c', buf, [ 2, 3 ], [ 3, 1 ], 0, 'row-major' );
	arr = transpose( x );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, x.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 3, 2 ], 'returns expected value' );
	t.strictEqual( arr.data, x.data, 'returns expected value' );
	t.strictEqual( arr.order, x.order, 'returns expected value' );

	for ( i = 0; i < 2; i++ ) {
		for ( j = 0; j < 3; j++ ) {
			v1 = x.get( i, j );
			v2 = arr.get( j, i );
			t.strictEqual( v1, v2, 'returns expected value for ('+j+','+i+')' );
		}
	}
	t.end();
});

tape( 'the function transposes a matrix (dtype=uint8c, non-base)', function test( t ) {
	var arr;
	var buf;
	var v1;
	var v2;
	var x;
	var i;
	var j;

	buf = new Uint8ClampedArray( [ 1, 2, 3, 4, 5, 6 ] );
	x = array( buf, {
		'shape': [ 2, 3 ],
		'dtype': 'uint8c'
	});
	arr = transpose( x );

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, x.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 3, 2 ], 'returns expected value' );
	t.strictEqual( arr.data, x.data, 'returns expected value' );
	t.strictEqual( arr.order, x.order, 'returns expected value' );

	for ( i = 0; i < 2; i++ ) {
		for ( j = 0; j < 3; j++ ) {
			v1 = x.get( i, j );
			v2 = arr.get( j, i );
			t.strictEqual( v1, v2, 'returns expected value for ('+j+','+i+')' );
		}
	}
	t.end();
});

tape( 'the function transposes a matrix (dtype=complex128, base)', function test( t ) {
	var arr;
	var buf;
	var v1;
	var v2;
	var x;
	var i;
	var j;

	buf = new Complex128Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0, 6.0, 6.0 ] ); // eslint-disable-line max-len
	x = new base( 'complex128', buf, [ 2, 3 ], [ 3, 1 ], 0, 'row-major' );
	arr = transpose( x );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, x.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 3, 2 ], 'returns expected value' );
	t.strictEqual( arr.data, x.data, 'returns expected value' );
	t.strictEqual( arr.order, x.order, 'returns expected value' );

	for ( i = 0; i < 2; i++ ) {
		for ( j = 0; j < 3; j++ ) {
			v1 = x.get( i, j );
			v2 = arr.get( j, i );
			t.strictEqual( real( v1 ), real( v2 ), 'returns expected value for ('+j+','+i+')' );
			t.strictEqual( imag( v1 ), imag( v2 ), 'returns expected value for ('+j+','+i+')' );
		}
	}
	t.end();
});

tape( 'the function transposes a matrix (dtype=complex128, non-base)', function test( t ) {
	var arr;
	var buf;
	var v1;
	var v2;
	var x;
	var i;
	var j;

	buf = new Complex128Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0, 6.0, 6.0 ] ); // eslint-disable-line max-len
	x = array( buf, {
		'shape': [ 2, 3 ],
		'dtype': 'complex128'
	});
	arr = transpose( x );

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, x.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 3, 2 ], 'returns expected value' );
	t.strictEqual( arr.data, x.data, 'returns expected value' );
	t.strictEqual( arr.order, x.order, 'returns expected value' );

	for ( i = 0; i < 2; i++ ) {
		for ( j = 0; j < 3; j++ ) {
			v1 = x.get( i, j );
			v2 = arr.get( j, i );
			t.strictEqual( real( v1 ), real( v2 ), 'returns expected value for ('+j+','+i+')' );
			t.strictEqual( imag( v1 ), imag( v2 ), 'returns expected value for ('+j+','+i+')' );
		}
	}
	t.end();
});

tape( 'the function transposes a matrix (dtype=complex64, base)', function test( t ) {
	var arr;
	var buf;
	var v1;
	var v2;
	var x;
	var i;
	var j;

	buf = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0, 6.0, 6.0 ] ); // eslint-disable-line max-len
	x = new base( 'complex64', buf, [ 2, 3 ], [ 3, 1 ], 0, 'row-major' );
	arr = transpose( x );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, x.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 3, 2 ], 'returns expected value' );
	t.strictEqual( arr.data, x.data, 'returns expected value' );
	t.strictEqual( arr.order, x.order, 'returns expected value' );

	for ( i = 0; i < 2; i++ ) {
		for ( j = 0; j < 3; j++ ) {
			v1 = x.get( i, j );
			v2 = arr.get( j, i );
			t.strictEqual( realf( v1 ), realf( v2 ), 'returns expected value for ('+j+','+i+')' );
			t.strictEqual( imagf( v1 ), imagf( v2 ), 'returns expected value for ('+j+','+i+')' );
		}
	}
	t.end();
});

tape( 'the function transposes a matrix (dtype=complex64, non-base)', function test( t ) {
	var arr;
	var buf;
	var v1;
	var v2;
	var x;
	var i;
	var j;

	buf = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0, 6.0, 6.0 ] ); // eslint-disable-line max-len
	x = array( buf, {
		'shape': [ 2, 3 ],
		'dtype': 'complex64'
	});
	arr = transpose( x );

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, x.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 3, 2 ], 'returns expected value' );
	t.strictEqual( arr.data, x.data, 'returns expected value' );
	t.strictEqual( arr.order, x.order, 'returns expected value' );

	for ( i = 0; i < 2; i++ ) {
		for ( j = 0; j < 3; j++ ) {
			v1 = x.get( i, j );
			v2 = arr.get( j, i );
			t.strictEqual( realf( v1 ), realf( v2 ), 'returns expected value for ('+j+','+i+')' );
			t.strictEqual( imagf( v1 ), imagf( v2 ), 'returns expected value for ('+j+','+i+')' );
		}
	}
	t.end();
});

tape( 'the function transposes a matrix (dtype=generic, base)', function test( t ) {
	var arr;
	var buf;
	var v1;
	var v2;
	var x;
	var i;
	var j;

	buf = [ 1, 2, 3, 4, 5, 6 ];
	x = new base( 'generic', buf, [ 2, 3 ], [ 3, 1 ], 0, 'row-major' );
	arr = transpose( x );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, x.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 3, 2 ], 'returns expected value' );
	t.strictEqual( arr.data, x.data, 'returns expected value' );
	t.strictEqual( arr.order, x.order, 'returns expected value' );

	for ( i = 0; i < 2; i++ ) {
		for ( j = 0; j < 3; j++ ) {
			v1 = x.get( i, j );
			v2 = arr.get( j, i );
			t.strictEqual( v1, v2, 'returns expected value for ('+j+','+i+')' );
		}
	}
	t.end();
});

tape( 'the function transposes a matrix (dtype=generic, non-base)', function test( t ) {
	var arr;
	var buf;
	var v1;
	var v2;
	var x;
	var i;
	var j;

	buf = [ 1, 2, 3, 4, 5, 6 ];
	x = array( buf, {
		'shape': [ 2, 3 ],
		'dtype': 'generic'
	});
	arr = transpose( x );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, x.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 3, 2 ], 'returns expected value' );
	t.strictEqual( arr.data, x.data, 'returns expected value' );
	t.strictEqual( arr.order, x.order, 'returns expected value' );

	for ( i = 0; i < 2; i++ ) {
		for ( j = 0; j < 3; j++ ) {
			v1 = x.get( i, j );
			v2 = arr.get( j, i );
			t.strictEqual( v1, v2, 'returns expected value for ('+j+','+i+')' );
		}
	}
	t.end();
});

tape( 'the function supports stack of matrices (base)', function test( t ) {
	var arr;
	var buf;
	var v1;
	var v2;
	var x;
	var i;
	var j;
	var k;

	buf = [ 1, 2, 3, 4, 5, 6 ];
	x = new base( 'generic', buf, [ 4, 2, 3 ], [ 0, 3, 1 ], 0, 'row-major' );
	arr = transpose( x );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, x.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 4, 3, 2 ], 'returns expected value' );
	t.strictEqual( arr.data, x.data, 'returns expected value' );
	t.strictEqual( arr.order, x.order, 'returns expected value' );

	for ( i = 0; i < 4; i++ ) {
		for ( j = 0; j < 2; j++ ) {
			for ( k = 0; k < 3; k++ ) {
				v1 = x.get( i, j, k );
				v2 = arr.get( i, k, j );
				t.strictEqual( v1, v2, 'returns expected value for ('+i+','+k+','+j+')' );
			}
		}
	}
	t.end();
});

tape( 'the function supports stack of matrices (non-base)', function test( t ) {
	var arr;
	var buf;
	var v1;
	var v2;
	var x;
	var i;
	var j;
	var k;

	buf = [ 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6 ]; // eslint-disable-line max-len
	x = array( buf, {
		'shape': [ 4, 2, 3 ],
		'dtype': 'generic'
	});
	arr = transpose( x );

	t.strictEqual( instanceOf( arr, base ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, x.dtype, 'returns expected value' );
	t.deepEqual( arr.shape, [ 4, 3, 2 ], 'returns expected value' );
	t.strictEqual( arr.data, x.data, 'returns expected value' );
	t.strictEqual( arr.order, x.order, 'returns expected value' );

	for ( i = 0; i < 4; i++ ) {
		for ( j = 0; j < 2; j++ ) {
			for ( k = 0; k < 3; k++ ) {
				v1 = x.get( i, j, k );
				v2 = arr.get( i, k, j );
				t.strictEqual( v1, v2, 'returns expected value for ('+i+','+k+','+j+')' );
			}
		}
	}
	t.end();
});
