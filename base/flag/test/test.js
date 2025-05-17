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
var zeros = require( './../../../zeros' );
var flag = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof flag, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a specified flag for an ndarray', function test( t ) {
	var expected;
	var values;
	var names;
	var out;
	var i;

	values = [
		zeros( [ 3, 3, 3 ] ),
		zeros( [ 1, 1 ] ),
		zeros( [ 3, 3, 0, 3 ] ),
		zeros( [ 1, 2, 3, 4 ] ),
		zeros( [ 5 ] ),
		zeros( [] )
	];

	names = [
		'READONLY',
		'ROW_MAJOR_CONTIGUOUS',
		'COLUMN_MAJOR_CONTIGUOUS',
		'READONLY',
		'ROW_MAJOR_CONTIGUOUS',
		'COLUMN_MAJOR_CONTIGUOUS'
	];

	expected = [
		values[ 0 ].flags[ names[ 0 ] ],
		values[ 1 ].flags[ names[ 1 ] ],
		values[ 2 ].flags[ names[ 2 ] ],
		values[ 3 ].flags[ names[ 3 ] ],
		values[ 4 ].flags[ names[ 4 ] ],
		values[ 5 ].flags[ names[ 5 ] ]
	];

	for ( i = 0; i < values.length; i++ ) {
		out = flag( values[ i ], names[ i ] );
		t.strictEqual( out, expected[ i ], 'returns expected value for array '+i );
	}
	t.end();
});

tape( 'the function accepts minimal ndarray-like objects', function test( t ) {
	var expected;
	var values;
	var names;
	var out;
	var i;

	values = [
		{
			'flags': {
				'ROW_MAJOR_CONTIGUOUS': true,
				'COLUMN_MAJOR_CONTIGUOUS': false,
				'READ_ONLY': true
			}
		},
		{
			'flags': {
				'ROW_MAJOR_CONTIGUOUS': false,
				'COLUMN_MAJOR_CONTIGUOUS': true,
				'READ_ONLY': true
			}
		},
		{
			'flags': {
				'ROW_MAJOR_CONTIGUOUS': false,
				'COLUMN_MAJOR_CONTIGUOUS': false,
				'READ_ONLY': false
			}
		},
		{
			'flags': {
				'ROW_MAJOR_CONTIGUOUS': true,
				'COLUMN_MAJOR_CONTIGUOUS': true,
				'READ_ONLY': false
			}
		},
		{
			'flags': {
				'ROW_MAJOR_CONTIGUOUS': false,
				'COLUMN_MAJOR_CONTIGUOUS': true,
				'READ_ONLY': false
			}
		},
		{},
		{
			'flags': null
		},
		{
			'flags': {}
		}
	];

	names = [
		'READONLY',
		'ROW_MAJOR_CONTIGUOUS',
		'COLUMN_MAJOR_CONTIGUOUS',
		'READONLY',
		'ROW_MAJOR_CONTIGUOUS',
		'COLUMN_MAJOR_CONTIGUOUS'
	];

	expected = [
		values[ 0 ].flags[ names[ 0 ] ],
		values[ 1 ].flags[ names[ 1 ] ],
		values[ 2 ].flags[ names[ 2 ] ],
		values[ 3 ].flags[ names[ 3 ] ],
		values[ 4 ].flags[ names[ 4 ] ],
		void 0,
		void 0,
		void 0
	];

	for ( i = 0; i < values.length; i++ ) {
		out = flag( values[ i ], names[ i ] );
		t.strictEqual( out, expected[ i ], 'returns expected value for array '+i );
	}
	t.end();
});
