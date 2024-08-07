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

var array = require( './../../array' );
var defaults = require( './../lib' );

var o = defaults();

var buf = [ [ 1, 2 ], [ 3, 4 ] ];
var opts = {
	'order': o.order,
	'casting': 'unsafe',
	'mode': o.index_mode
};

opts.dtype = o.dtypes.default;
var x = array( buf, opts );
console.log( x.dtype );

opts.dtype = o.dtypes.floating_point;
x = array( buf, opts );
console.log( x.dtype );

opts.dtype = o.dtypes.real_floating_point;
x = array( buf, opts );
console.log( x.dtype );

opts.dtype = o.dtypes.integer;
x = array( buf, opts );
console.log( x.dtype );

opts.dtype = o.dtypes.signed_integer;
x = array( buf, opts );
console.log( x.dtype );

opts.dtype = o.dtypes.unsigned_integer;
x = array( buf, opts );
console.log( x.dtype );

opts.dtype = o.dtypes.boolean;
x = array( buf, opts );
console.log( x.dtype );
