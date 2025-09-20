/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
var DataType = require( './../../../../dtype-ctor' );
var structFactory = require( '@stdlib/dstructs/struct' );
var dtypes = require( './../../../../dtypes' );
var isSafeCast = require( './../../../../base/assert/is-safe-data-type-cast' );
var isMostlySafeCast = require( './../../../../base/assert/is-mostly-safe-data-type-cast' );
var isSameKindCast = require( './../../../../base/assert/is-same-kind-data-type-cast' );
var str2enum = require( './../../../../base/dtype-str2enum' );
var isAllowedCast = require( './../lib' );


// VARIABLES //

var DTYPES = dtypes();


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isAllowedCast, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a boolean indicating if an ndarray data type can be cast to another ndarray data type (casting=unsafe, strings)', function test( t ) {
	var expected;
	var actual;
	var dt1;
	var dt2;
	var i;
	var j;

	expected = true;

	for ( i = 0; i < DTYPES.length; i++ ) {
		dt1 = DTYPES[ i ];
		for ( j = 0; j < DTYPES.length; j++ ) {
			dt2 = DTYPES[ j ];
			actual = isAllowedCast( dt1, dt2, 'unsafe' );
			t.strictEqual( actual, expected, 'returns expected value. from: '+dt1+'. to: '+dt2+'.' );
		}
	}
	t.end();
});

tape( 'the function returns a boolean indicating if an ndarray data type can be cast to another ndarray data type (casting=unsafe, enums)', function test( t ) {
	var expected;
	var actual;
	var dt1;
	var dt2;
	var i;
	var j;

	expected = true;

	for ( i = 0; i < DTYPES.length; i++ ) {
		dt1 = DTYPES[ i ];
		for ( j = 0; j < DTYPES.length; j++ ) {
			dt2 = DTYPES[ j ];
			actual = isAllowedCast( str2enum( dt1 ), str2enum( dt2 ), 'unsafe' );
			t.strictEqual( actual, expected, 'returns expected value. from: '+dt1+'. to: '+dt2+'.' );
		}
	}
	t.end();
});

tape( 'the function returns a boolean indicating if an ndarray data type can be cast to another ndarray data type (casting=unsafe, data type, strings)', function test( t ) {
	var expected;
	var actual;
	var dt1;
	var dt2;
	var i;
	var j;

	expected = true;

	for ( i = 0; i < DTYPES.length; i++ ) {
		dt1 = DTYPES[ i ];
		for ( j = 0; j < DTYPES.length; j++ ) {
			dt2 = DTYPES[ j ];
			actual = isAllowedCast( new DataType( dt1 ), new DataType( dt2 ), 'unsafe' );
			t.strictEqual( actual, expected, 'returns expected value. from: '+dt1+'. to: '+dt2+'.' );
		}
	}
	t.end();
});

tape( 'the function returns a boolean indicating if an ndarray data type can be cast to another ndarray data type (casting=unsafe, struct)', function test( t ) {
	var schemas;
	var values;
	var actual;
	var dt;
	var i;

	schemas = [
		[
			{
				'name': 'foo',
				'type': 'float64'
			}
		],
		[
			{
				'name': 'bar',
				'type': 'float32'
			}
		]
	];
	values = [
		structFactory( schemas[ 0 ] ),
		structFactory( schemas[ 1 ] )
	];

	for ( i = 0; i < values.length; i++ ) {
		dt = values[ i ];
		actual = isAllowedCast( dt, dt, 'unsafe' );
		t.strictEqual( actual, true, 'returns expected value. from: '+dt.layout+'. to: '+dt.layout+'.' );
	}
	actual = isAllowedCast( values[ 0 ], values[ 1 ], 'unsafe' );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns a boolean indicating if an ndarray data type can be cast to another ndarray data type (casting=unsafe, data type, struct)', function test( t ) {
	var schemas;
	var values;
	var actual;
	var dt;
	var i;

	schemas = [
		[
			{
				'name': 'foo',
				'type': 'float64'
			}
		],
		[
			{
				'name': 'bar',
				'type': 'float32'
			}
		]
	];
	values = [
		structFactory( schemas[ 0 ] ),
		structFactory( schemas[ 1 ] )
	];

	for ( i = 0; i < values.length; i++ ) {
		dt = values[ i ];
		actual = isAllowedCast( new DataType( dt ), new DataType( dt ), 'unsafe' );
		t.strictEqual( actual, true, 'returns expected value. from: '+dt.layout+'. to: '+dt.layout+'.' );
	}
	actual = isAllowedCast( new DataType( values[ 0 ] ), new DataType( values[ 1 ] ), 'unsafe' );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns a boolean indicating if an ndarray data type can be cast to another ndarray data type (casting=safe, strings)', function test( t ) {
	var expected;
	var actual;
	var dt1;
	var dt2;
	var i;
	var j;

	for ( i = 0; i < DTYPES.length; i++ ) {
		dt1 = DTYPES[ i ];
		for ( j = 0; j < DTYPES.length; j++ ) {
			dt2 = DTYPES[ j ];
			expected = isSafeCast( dt1, dt2 );
			actual = isAllowedCast( dt1, dt2, 'safe' );
			t.strictEqual( actual, expected, 'returns expected value. from: '+dt1+'. to: '+dt2+'.' );
		}
	}
	t.end();
});

tape( 'the function returns a boolean indicating if an ndarray data type can be cast to another ndarray data type (casting=safe, enums)', function test( t ) {
	var expected;
	var actual;
	var dt1;
	var dt2;
	var i;
	var j;

	for ( i = 0; i < DTYPES.length; i++ ) {
		dt1 = DTYPES[ i ];
		for ( j = 0; j < DTYPES.length; j++ ) {
			dt2 = DTYPES[ j ];
			expected = isSafeCast( dt1, dt2 );
			actual = isAllowedCast( str2enum( dt1 ), str2enum( dt2 ), 'safe' );
			t.strictEqual( actual, expected, 'returns expected value. from: '+dt1+'. to: '+dt2+'.' );
		}
	}
	t.end();
});

tape( 'the function returns a boolean indicating if an ndarray data type can be cast to another ndarray data type (casting=safe, data type, strings)', function test( t ) {
	var expected;
	var actual;
	var dt1;
	var dt2;
	var i;
	var j;

	for ( i = 0; i < DTYPES.length; i++ ) {
		dt1 = DTYPES[ i ];
		for ( j = 0; j < DTYPES.length; j++ ) {
			dt2 = DTYPES[ j ];
			expected = isSafeCast( dt1, dt2 );
			actual = isAllowedCast( new DataType( dt1 ), new DataType( dt2 ), 'safe' );
			t.strictEqual( actual, expected, 'returns expected value. from: '+dt1+'. to: '+dt2+'.' );
		}
	}
	t.end();
});

tape( 'the function returns a boolean indicating if an ndarray data type can be cast to another ndarray data type (casting=safe, struct)', function test( t ) {
	var schemas;
	var values;
	var actual;
	var dt;
	var i;

	schemas = [
		[
			{
				'name': 'foo',
				'type': 'float64'
			}
		],
		[
			{
				'name': 'bar',
				'type': 'float32'
			}
		]
	];
	values = [
		structFactory( schemas[ 0 ] ),
		structFactory( schemas[ 1 ] )
	];

	for ( i = 0; i < values.length; i++ ) {
		dt = values[ i ];
		actual = isAllowedCast( dt, dt, 'safe' );
		t.strictEqual( actual, true, 'returns expected value. from: '+dt.layout+'. to: '+dt.layout+'.' );
	}
	actual = isAllowedCast( values[ 0 ], values[ 1 ], 'safe' );
	t.strictEqual( actual, false, 'returns expected value' );

	t.end();
});

tape( 'the function returns a boolean indicating if an ndarray data type can be cast to another ndarray data type (casting=safe, data type, struct)', function test( t ) {
	var schemas;
	var values;
	var actual;
	var dt;
	var i;

	schemas = [
		[
			{
				'name': 'foo',
				'type': 'float64'
			}
		],
		[
			{
				'name': 'bar',
				'type': 'float32'
			}
		]
	];
	values = [
		structFactory( schemas[ 0 ] ),
		structFactory( schemas[ 1 ] )
	];

	for ( i = 0; i < values.length; i++ ) {
		dt = values[ i ];
		actual = isAllowedCast( new DataType( dt ), new DataType( dt ), 'safe' );
		t.strictEqual( actual, true, 'returns expected value. from: '+dt.layout+'. to: '+dt.layout+'.' );
	}
	actual = isAllowedCast( new DataType( values[ 0 ] ), new DataType( values[ 1 ] ), 'safe' );
	t.strictEqual( actual, false, 'returns expected value' );

	t.end();
});

tape( 'the function returns a boolean indicating if an ndarray data type can be cast to another ndarray data type (casting=mostly-safe, strings)', function test( t ) {
	var expected;
	var actual;
	var dt1;
	var dt2;
	var i;
	var j;

	for ( i = 0; i < DTYPES.length; i++ ) {
		dt1 = DTYPES[ i ];
		for ( j = 0; j < DTYPES.length; j++ ) {
			dt2 = DTYPES[ j ];
			expected = isMostlySafeCast( dt1, dt2 );
			actual = isAllowedCast( dt1, dt2, 'mostly-safe' );
			t.strictEqual( actual, expected, 'returns expected value. from: '+dt1+'. to: '+dt2+'.' );
		}
	}
	t.end();
});

tape( 'the function returns a boolean indicating if an ndarray data type can be cast to another ndarray data type (casting=mostly-safe, enums)', function test( t ) {
	var expected;
	var actual;
	var dt1;
	var dt2;
	var i;
	var j;

	for ( i = 0; i < DTYPES.length; i++ ) {
		dt1 = DTYPES[ i ];
		for ( j = 0; j < DTYPES.length; j++ ) {
			dt2 = DTYPES[ j ];
			expected = isMostlySafeCast( dt1, dt2 );
			actual = isAllowedCast( str2enum( dt1 ), str2enum( dt2 ), 'mostly-safe' );
			t.strictEqual( actual, expected, 'returns expected value. from: '+dt1+'. to: '+dt2+'.' );
		}
	}
	t.end();
});

tape( 'the function returns a boolean indicating if an ndarray data type can be cast to another ndarray data type (casting=mostly-safe, data type, strings)', function test( t ) {
	var expected;
	var actual;
	var dt1;
	var dt2;
	var i;
	var j;

	for ( i = 0; i < DTYPES.length; i++ ) {
		dt1 = DTYPES[ i ];
		for ( j = 0; j < DTYPES.length; j++ ) {
			dt2 = DTYPES[ j ];
			expected = isMostlySafeCast( dt1, dt2 );
			actual = isAllowedCast( new DataType( dt1 ), new DataType( dt2 ), 'mostly-safe' );
			t.strictEqual( actual, expected, 'returns expected value. from: '+dt1+'. to: '+dt2+'.' );
		}
	}
	t.end();
});

tape( 'the function returns a boolean indicating if an ndarray data type can be cast to another ndarray data type (casting=mostly-safe, struct)', function test( t ) {
	var schemas;
	var values;
	var actual;
	var dt;
	var i;

	schemas = [
		[
			{
				'name': 'foo',
				'type': 'float64'
			}
		],
		[
			{
				'name': 'bar',
				'type': 'float32'
			}
		]
	];
	values = [
		structFactory( schemas[ 0 ] ),
		structFactory( schemas[ 1 ] )
	];

	for ( i = 0; i < values.length; i++ ) {
		dt = values[ i ];
		actual = isAllowedCast( dt, dt, 'mostly-safe' );
		t.strictEqual( actual, true, 'returns expected value. from: '+dt.layout+'. to: '+dt.layout+'.' );
	}
	actual = isAllowedCast( values[ 0 ], values[ 1 ], 'mostly-safe' );
	t.strictEqual( actual, false, 'returns expected value' );

	t.end();
});

tape( 'the function returns a boolean indicating if an ndarray data type can be cast to another ndarray data type (casting=mostly-safe, data type, struct)', function test( t ) {
	var schemas;
	var values;
	var actual;
	var dt;
	var i;

	schemas = [
		[
			{
				'name': 'foo',
				'type': 'float64'
			}
		],
		[
			{
				'name': 'bar',
				'type': 'float32'
			}
		]
	];
	values = [
		structFactory( schemas[ 0 ] ),
		structFactory( schemas[ 1 ] )
	];

	for ( i = 0; i < values.length; i++ ) {
		dt = values[ i ];
		actual = isAllowedCast( new DataType( dt ), new DataType( dt ), 'mostly-safe' );
		t.strictEqual( actual, true, 'returns expected value. from: '+dt.layout+'. to: '+dt.layout+'.' );
	}
	actual = isAllowedCast( new DataType( values[ 0 ] ), new DataType( values[ 1 ] ), 'mostly-safe' );
	t.strictEqual( actual, false, 'returns expected value' );

	t.end();
});

tape( 'the function returns a boolean indicating if an ndarray data type can be cast to another ndarray data type (casting=same-kind, strings)', function test( t ) {
	var expected;
	var actual;
	var dt1;
	var dt2;
	var i;
	var j;

	for ( i = 0; i < DTYPES.length; i++ ) {
		dt1 = DTYPES[ i ];
		for ( j = 0; j < DTYPES.length; j++ ) {
			dt2 = DTYPES[ j ];
			expected = isSameKindCast( dt1, dt2 );
			actual = isAllowedCast( dt1, dt2, 'same-kind' );
			t.strictEqual( actual, expected, 'returns expected value. from: '+dt1+'. to: '+dt2+'.' );
		}
	}
	t.end();
});

tape( 'the function returns a boolean indicating if an ndarray data type can be cast to another ndarray data type (casting=same-kind, enums)', function test( t ) {
	var expected;
	var actual;
	var dt1;
	var dt2;
	var i;
	var j;

	for ( i = 0; i < DTYPES.length; i++ ) {
		dt1 = DTYPES[ i ];
		for ( j = 0; j < DTYPES.length; j++ ) {
			dt2 = DTYPES[ j ];
			expected = isSameKindCast( dt1, dt2 );
			actual = isAllowedCast( str2enum( dt1 ), str2enum( dt2 ), 'same-kind' );
			t.strictEqual( actual, expected, 'returns expected value. from: '+dt1+'. to: '+dt2+'.' );
		}
	}
	t.end();
});

tape( 'the function returns a boolean indicating if an ndarray data type can be cast to another ndarray data type (casting=same-kind, data type, strings)', function test( t ) {
	var expected;
	var actual;
	var dt1;
	var dt2;
	var i;
	var j;

	for ( i = 0; i < DTYPES.length; i++ ) {
		dt1 = DTYPES[ i ];
		for ( j = 0; j < DTYPES.length; j++ ) {
			dt2 = DTYPES[ j ];
			expected = isSameKindCast( dt1, dt2 );
			actual = isAllowedCast( new DataType( dt1 ), new DataType( dt2 ), 'same-kind' );
			t.strictEqual( actual, expected, 'returns expected value. from: '+dt1+'. to: '+dt2+'.' );
		}
	}
	t.end();
});

tape( 'the function returns a boolean indicating if an ndarray data type can be cast to another ndarray data type (casting=same-kind, struct)', function test( t ) {
	var schemas;
	var values;
	var actual;
	var dt;
	var i;

	schemas = [
		[
			{
				'name': 'foo',
				'type': 'float64'
			}
		],
		[
			{
				'name': 'bar',
				'type': 'float32'
			}
		]
	];
	values = [
		structFactory( schemas[ 0 ] ),
		structFactory( schemas[ 1 ] )
	];

	for ( i = 0; i < values.length; i++ ) {
		dt = values[ i ];
		actual = isAllowedCast( dt, dt, 'same-kind' );
		t.strictEqual( actual, true, 'returns expected value. from: '+dt.layout+'. to: '+dt.layout+'.' );
	}
	actual = isAllowedCast( values[ 0 ], values[ 1 ], 'same-kind' );
	t.strictEqual( actual, false, 'returns expected value' );

	t.end();
});

tape( 'the function returns a boolean indicating if an ndarray data type can be cast to another ndarray data type (casting=same-kind, data type, struct)', function test( t ) {
	var schemas;
	var values;
	var actual;
	var dt;
	var i;

	schemas = [
		[
			{
				'name': 'foo',
				'type': 'float64'
			}
		],
		[
			{
				'name': 'bar',
				'type': 'float32'
			}
		]
	];
	values = [
		structFactory( schemas[ 0 ] ),
		structFactory( schemas[ 1 ] )
	];

	for ( i = 0; i < values.length; i++ ) {
		dt = values[ i ];
		actual = isAllowedCast( new DataType( dt ), new DataType( dt ), 'same-kind' );
		t.strictEqual( actual, true, 'returns expected value. from: '+dt.layout+'. to: '+dt.layout+'.' );
	}
	actual = isAllowedCast( new DataType( values[ 0 ] ), new DataType( values[ 1 ] ), 'same-kind' );
	t.strictEqual( actual, false, 'returns expected value' );

	t.end();
});

tape( 'the function returns a boolean indicating if an ndarray data type can be cast to another ndarray data type (casting=none, strings)', function test( t ) {
	var expected;
	var actual;
	var dt1;
	var dt2;
	var i;
	var j;

	for ( i = 0; i < DTYPES.length; i++ ) {
		dt1 = DTYPES[ i ];
		for ( j = 0; j < DTYPES.length; j++ ) {
			dt2 = DTYPES[ j ];
			if ( dt1 === dt2 ) {
				expected = true;
			} else {
				expected = false;
			}
			actual = isAllowedCast( dt1, dt2, 'none' );
			t.strictEqual( actual, expected, 'returns expected value. from: '+dt1+'. to: '+dt2+'.' );
		}
	}
	t.end();
});

tape( 'the function returns a boolean indicating if an ndarray data type can be cast to another ndarray data type (casting=none, enums)', function test( t ) {
	var expected;
	var actual;
	var dt1;
	var dt2;
	var i;
	var j;

	for ( i = 0; i < DTYPES.length; i++ ) {
		dt1 = DTYPES[ i ];
		for ( j = 0; j < DTYPES.length; j++ ) {
			dt2 = DTYPES[ j ];
			if ( dt1 === dt2 ) {
				expected = true;
			} else {
				expected = false;
			}
			actual = isAllowedCast( str2enum( dt1 ), str2enum( dt2 ), 'none' );
			t.strictEqual( actual, expected, 'returns expected value. from: '+dt1+'. to: '+dt2+'.' );
		}
	}
	t.end();
});

tape( 'the function returns a boolean indicating if an ndarray data type can be cast to another ndarray data type (casting=none, data type, strings)', function test( t ) {
	var expected;
	var actual;
	var dt1;
	var dt2;
	var i;
	var j;

	for ( i = 0; i < DTYPES.length; i++ ) {
		dt1 = DTYPES[ i ];
		for ( j = 0; j < DTYPES.length; j++ ) {
			dt2 = DTYPES[ j ];
			if ( dt1 === dt2 ) {
				expected = true;
			} else {
				expected = false;
			}
			actual = isAllowedCast( new DataType( dt1 ), new DataType( dt2 ), 'none' );
			t.strictEqual( actual, expected, 'returns expected value. from: '+dt1+'. to: '+dt2+'.' );
		}
	}
	t.end();
});

tape( 'the function returns a boolean indicating if an ndarray data type can be cast to another ndarray data type (casting=none, struct)', function test( t ) {
	var schemas;
	var values;
	var actual;
	var dt;
	var i;

	schemas = [
		[
			{
				'name': 'foo',
				'type': 'float64'
			}
		],
		[
			{
				'name': 'bar',
				'type': 'float32'
			}
		]
	];
	values = [
		structFactory( schemas[ 0 ] ),
		structFactory( schemas[ 1 ] )
	];

	for ( i = 0; i < values.length; i++ ) {
		dt = values[ i ];
		actual = isAllowedCast( dt, dt, 'none' );
		t.strictEqual( actual, true, 'returns expected value. from: '+dt.layout+'. to: '+dt.layout+'.' );
	}
	actual = isAllowedCast( values[ 0 ], values[ 1 ], 'none' );
	t.strictEqual( actual, false, 'returns expected value' );

	t.end();
});

tape( 'the function returns a boolean indicating if an ndarray data type can be cast to another ndarray data type (casting=none, data type, struct)', function test( t ) {
	var schemas;
	var values;
	var actual;
	var dt;
	var i;

	schemas = [
		[
			{
				'name': 'foo',
				'type': 'float64'
			}
		],
		[
			{
				'name': 'bar',
				'type': 'float32'
			}
		]
	];
	values = [
		structFactory( schemas[ 0 ] ),
		structFactory( schemas[ 1 ] )
	];

	for ( i = 0; i < values.length; i++ ) {
		dt = values[ i ];
		actual = isAllowedCast( new DataType( dt ), new DataType( dt ), 'none' );
		t.strictEqual( actual, true, 'returns expected value. from: '+dt.layout+'. to: '+dt.layout+'.' );
	}
	actual = isAllowedCast( new DataType( values[ 0 ] ), new DataType( values[ 1 ] ), 'none' );
	t.strictEqual( actual, false, 'returns expected value' );

	t.end();
});

tape( 'the function returns a boolean indicating if an ndarray data type can be cast to another ndarray data type (casting=equiv, strings)', function test( t ) {
	var expected;
	var actual;
	var dt1;
	var dt2;
	var i;
	var j;

	for ( i = 0; i < DTYPES.length; i++ ) {
		dt1 = DTYPES[ i ];
		for ( j = 0; j < DTYPES.length; j++ ) {
			dt2 = DTYPES[ j ];
			if ( dt1 === dt2 ) {
				expected = true;
			} else {
				expected = false;
			}
			actual = isAllowedCast( dt1, dt2, 'equiv' );
			t.strictEqual( actual, expected, 'returns expected value. from: '+dt1+'. to: '+dt2+'.' );
		}
	}
	t.end();
});

tape( 'the function returns a boolean indicating if an ndarray data type can be cast to another ndarray data type (casting=equiv, enums)', function test( t ) {
	var expected;
	var actual;
	var dt1;
	var dt2;
	var i;
	var j;

	for ( i = 0; i < DTYPES.length; i++ ) {
		dt1 = DTYPES[ i ];
		for ( j = 0; j < DTYPES.length; j++ ) {
			dt2 = DTYPES[ j ];
			if ( dt1 === dt2 ) {
				expected = true;
			} else {
				expected = false;
			}
			actual = isAllowedCast( str2enum( dt1 ), str2enum( dt2 ), 'equiv' );
			t.strictEqual( actual, expected, 'returns expected value. from: '+dt1+'. to: '+dt2+'.' );
		}
	}
	t.end();
});

tape( 'the function returns a boolean indicating if an ndarray data type can be cast to another ndarray data type (casting=equiv, data type, strings)', function test( t ) {
	var expected;
	var actual;
	var dt1;
	var dt2;
	var i;
	var j;

	for ( i = 0; i < DTYPES.length; i++ ) {
		dt1 = DTYPES[ i ];
		for ( j = 0; j < DTYPES.length; j++ ) {
			dt2 = DTYPES[ j ];
			if ( dt1 === dt2 ) {
				expected = true;
			} else {
				expected = false;
			}
			actual = isAllowedCast( new DataType( dt1 ), new DataType( dt2 ), 'equiv' );
			t.strictEqual( actual, expected, 'returns expected value. from: '+dt1+'. to: '+dt2+'.' );
		}
	}
	t.end();
});

tape( 'the function returns a boolean indicating if an ndarray data type can be cast to another ndarray data type (casting=equiv, struct)', function test( t ) {
	var schemas;
	var values;
	var actual;
	var dt;
	var i;

	schemas = [
		[
			{
				'name': 'foo',
				'type': 'float64'
			}
		],
		[
			{
				'name': 'bar',
				'type': 'float32'
			}
		]
	];
	values = [
		structFactory( schemas[ 0 ] ),
		structFactory( schemas[ 1 ] )
	];

	for ( i = 0; i < values.length; i++ ) {
		dt = values[ i ];
		actual = isAllowedCast( dt, dt, 'equiv' );
		t.strictEqual( actual, true, 'returns expected value. from: '+dt.layout+'. to: '+dt.layout+'.' );
	}
	actual = isAllowedCast( values[ 0 ], values[ 1 ], 'equiv' );
	t.strictEqual( actual, false, 'returns expected value' );

	t.end();
});

tape( 'the function returns a boolean indicating if an ndarray data type can be cast to another ndarray data type (casting=equiv, data type, struct)', function test( t ) {
	var schemas;
	var values;
	var actual;
	var dt;
	var i;

	schemas = [
		[
			{
				'name': 'foo',
				'type': 'float64'
			}
		],
		[
			{
				'name': 'bar',
				'type': 'float32'
			}
		]
	];
	values = [
		structFactory( schemas[ 0 ] ),
		structFactory( schemas[ 1 ] )
	];

	for ( i = 0; i < values.length; i++ ) {
		dt = values[ i ];
		actual = isAllowedCast( new DataType( dt ), new DataType( dt ), 'equiv' );
		t.strictEqual( actual, true, 'returns expected value. from: '+dt.layout+'. to: '+dt.layout+'.' );
	}
	actual = isAllowedCast( new DataType( values[ 0 ] ), new DataType( values[ 1 ] ), 'equiv' );
	t.strictEqual( actual, false, 'returns expected value' );

	t.end();
});
