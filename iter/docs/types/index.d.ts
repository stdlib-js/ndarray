/*
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

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import nditerColumnEntries = require( './../../../iter/column-entries' );
import nditerColumns = require( './../../../iter/columns' );
import nditerEntries = require( './../../../iter/entries' );
import nditerIndices = require( './../../../iter/indices' );
import nditerInterleaveSubarrays = require( './../../../iter/interleave-subarrays' );
import nditerMatrices = require( './../../../iter/matrices' );
import nditerMatrixEntries = require( './../../../iter/matrix-entries' );
import nditerRowEntries = require( './../../../iter/row-entries' );
import nditerRows = require( './../../../iter/rows' );
import nditerSelectDimension = require( './../../../iter/select-dimension' );
import nditerStacks = require( './../../../iter/stacks' );
import nditerSubarrays = require( './../../../iter/subarrays' );
import nditer2arrayEach = require( './../../../iter/to-array-each' );
import nditerValues = require( './../../../iter/values' );

/**
* Interface describing the `iter` namespace.
*/
interface Namespace {
	/**
	* Returns an iterator which returns `[index, column]` pairs for each column in a matrix (or stack of matrices).
	*
	* ## Notes
	*
	* -   Each returned index is a Cartesian index (i.e., an array of subscripts/dimension indices). A dimension index equal to `null` indicates that all values along the respective dimension are included in the returned ndarray.
	*
	* @param x - input array
	* @param options - function options
	* @param options.readonly - boolean indicating whether returned views should be read-only
	* @returns iterator
	*
	* @example
	* var ndarray2array = require( './../../../to-array' );
	* var array = require( './../../../array' );
	*
	* var x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ], {
	*     'dtype': 'float64'
	* });
	* // returns <ndarray>
	*
	* var iter = ns.nditerColumnEntries( x );
	*
	* var v = iter.next().value;
	* // returns [...]
	*
	* var idx = v[ 0 ];
	* // returns [ 0, null, 0 ]
	*
	* var col = ndarray2array( v[ 1 ] );
	* // returns [ 1, 3 ]
	*
	* v = iter.next().value;
	* // returns [...]
	*
	* idx = v[ 0 ];
	* // returns [ 0, null, 1 ]
	*
	* col = ndarray2array( v[ 1 ] );
	* // returns [ 2, 4 ]
	*
	* // ...
	*/
	nditerColumnEntries: typeof nditerColumnEntries;

	/**
	* Returns an iterator which iterates over each column in a matrix (or stack of matrices).
	*
	* @param x - input value
	* @param options - function options
	* @param options.readonly - boolean indicating whether returned views should be read-only
	* @returns iterator
	*
	* @example
	* var array = require( './../../../array' );
	* var ndarray2array = require( './../../../to-array' );
	*
	* var x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ], {
	*     'dtype': 'float64'
	* });
	* // returns <ndarray>
	*
	* var iter = ns.nditerColumns( x );
	*
	* var v = iter.next().value;
	* // returns <ndarray>
	*
	* var arr = ndarray2array( v );
	* // returns [ 1, 3 ]
	*
	* v = iter.next().value;
	* // returns <ndarray>
	*
	* arr = ndarray2array( v );
	* // returns [ 2, 4 ]
	*
	* v = iter.next().value;
	* // returns <ndarray>
	*
	* arr = ndarray2array( v );
	* // returns [ 5, 7 ]
	*
	* // ...
	*/
	nditerColumns: typeof nditerColumns;

	/**
	* Returns an iterator which returns `[index, value]` pairs for each element in a provided ndarray.
	*
	* ## Notes
	*
	* -   Each returned index is a Cartesian index (i.e., an array of subscripts/dimension indices).
	*
	* @param x - input array
	* @param options - function options
	* @param options.order - index iteration order
	* @returns iterator
	*
	* @example
	* var array = require( './../../../array' );
	*
	* var x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ], {
	*     'dtype': 'float64'
	* });
	* // returns <ndarray>
	*
	* var iter = ns.nditerEntries( x );
	*
	* var v = iter.next().value;
	* // returns [ [ 0, 0, 0 ], 1 ]
	*
	* v = iter.next().value;
	* // returns [ [ 0, 0, 1 ], 2 ]
	*
	* v = iter.next().value;
	* // returns [ [ 0, 1, 0 ], 3 ]
	*
	* // ...
	*/
	nditerEntries: typeof nditerEntries;

	/**
	* Returns an iterator which returns indices for use indexing into an ndarray having a specified shape.
	*
	* @param shape - input shape
	* @param options - function options
	* @param options.order - index iteration order
	* @returns iterator
	*
	* @example
	* var array = require( './../../../array' );
	*
	* var x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ], {
	*     'dtype': 'float64'
	* });
	* // returns <ndarray>
	*
	* var iter = ns.nditerIndices( x.shape );
	*
	* var v = iter.next().value;
	* // returns [ 0, 0, 0 ]
	*
	* v = iter.next().value;
	* // returns [ 0, 0, 1 ]
	*
	* v = iter.next().value;
	* // returns [ 0, 1, 0 ]
	*
	* // ...
	*/
	nditerIndices: typeof nditerIndices;

	/**
	* Returns an iterator which iterates over interleaved subarrays.
	*
	* ## Notes
	*
	* -   The function throws an error if a provided broadcast-incompatible ndarrays.
	* -   For input ndarrays supporting read-only views, the function returns *read-only* views of interleaved subarrays. As input ndarrays may be broadcasted, a view is typically *not* contiguous. As more than one element of a returned view may refer to the same memory location, writing to a view may affect multiple elements. If you need to write to a subarray, copy the subarray before attempting mutation.
	*
	* @param arr - input ndarrays
	* @param ndims - number of dimensions to stack
	* @returns iterator
	*
	* @example
	* var array = require( './../../../array' );
	* var ndarray2array = require( './../../../to-array' );
	*
	* var x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ], {
	*     'dtype': 'float64'
	* });
	* // returns <ndarray>
	*
	* var iter = ns.nditerInterleaveSubarrays( [ x, x ], 2 );
	*
	* var v = iter.next().value;
	* // returns <ndarray>
	*
	* var arr = ndarray2array( v );
	* // returns [ [ 1, 2 ], [ 3, 4 ] ]
	*
	* v = iter.next().value;
	* // returns <ndarray>
	*
	* arr = ndarray2array( v );
	* // returns [ [ 1, 2 ], [ 3, 4 ] ]
	*
	* // ...
	*/
	nditerInterleaveSubarrays: typeof nditerInterleaveSubarrays;

	/**
	* Returns an iterator which iterates over each matrix in a stack of matrices.
	*
	* @param x - input value
	* @param options - function options
	* @param options.readonly - boolean indicating whether returned views should be read-only
	* @returns iterator
	*
	* @example
	* var array = require( './../../../array' );
	* var ndarray2array = require( './../../../to-array' );
	*
	* var x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ], {
	*     'dtype': 'float64'
	* });
	* // returns <ndarray>
	*
	* var iter = ns.nditerMatrices( x );
	*
	* var v = iter.next().value;
	* // returns <ndarray>
	*
	* var arr = ndarray2array( v );
	* // returns [ [ 1, 2 ], [ 3, 4 ] ]
	*
	* v = iter.next().value;
	* // returns <ndarray>
	*
	* arr = ndarray2array( v );
	* // returns [ [ 5, 6 ], [ 7, 8 ] ]
	*
	* // ...
	*/
	nditerMatrices: typeof nditerMatrices;

	/**
	* Returns an iterator which returns `[index, matrix]` pairs for each matrix in a stack of matrices.
	*
	* ## Notes
	*
	* -   Each returned index is a Cartesian index (i.e., an array of subscripts/dimension indices). A dimension index equal to `null` indicates that all values along the respective dimension are included in the returned ndarray.
	*
	* @param x - input array
	* @param options - function options
	* @param options.readonly - boolean indicating whether returned views should be read-only
	* @returns iterator
	*
	* @example
	* var ndarray2array = require( './../../../to-array' );
	* var array = require( './../../../array' );
	*
	* var x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ], {
	*     'dtype': 'float64'
	* });
	* // returns <ndarray>
	*
	* var iter = ns.nditerMatrixEntries( x );
	*
	* var v = iter.next().value;
	* // returns [...]
	*
	* var idx = v[ 0 ];
	* // returns [ 0, null, null ]
	*
	* var mat = ndarray2array( v[ 1 ] );
	* // returns [ [ 1, 2 ], [ 3, 4 ] ]
	*
	* v = iter.next().value;
	* // returns [...]
	*
	* idx = v[ 0 ];
	* // returns [ 1, null, null ]
	*
	* mat = ndarray2array( v[ 1 ] );
	* // returns [ [ 5, 6 ], [ 7, 8 ] ]
	*
	* // ...
	*/
	nditerMatrixEntries: typeof nditerMatrixEntries;

	/**
	* Returns an iterator which returns `[index, row]` pairs for each row in a matrix (or stack of matrices).
	*
	* ## Notes
	*
	* -   Each returned index is a Cartesian index (i.e., an array of subscripts/dimension indices). A dimension index equal to `null` indicates that all values along the respective dimension are included in the returned ndarray.
	*
	* @param x - input array
	* @param options - function options
	* @param options.readonly - boolean indicating whether returned views should be read-only
	* @returns iterator
	*
	* @example
	* var ndarray2array = require( './../../../to-array' );
	* var array = require( './../../../array' );
	*
	* var x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ], {
	*     'dtype': 'float64'
	* });
	* // returns <ndarray>
	*
	* var iter = ns.nditerRowEntries( x );
	*
	* var v = iter.next().value;
	* // returns [...]
	*
	* var idx = v[ 0 ];
	* // returns [ 0, 0, null ]
	*
	* var row = ndarray2array( v[ 1 ] );
	* // returns [ 1, 2 ]
	*
	* v = iter.next().value;
	* // returns [...]
	*
	* idx = v[ 0 ];
	* // returns [ 0, 1, null ]
	*
	* row = ndarray2array( v[ 1 ] );
	* // returns [ 3, 4 ]
	*
	* // ...
	*/
	nditerRowEntries: typeof nditerRowEntries;

	/**
	* Returns an iterator which iterates over each row in a matrix (or stack of matrices).
	*
	* @param x - input value
	* @param options - function options
	* @param options.readonly - boolean indicating whether returned views should be read-only
	* @returns iterator
	*
	* @example
	* var array = require( './../../../array' );
	* var ndarray2array = require( './../../../to-array' );
	*
	* var x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ], {
	*     'dtype': 'float64'
	* });
	* // returns <ndarray>
	*
	* var iter = ns.nditerRows( x );
	*
	* var v = iter.next().value;
	* // returns <ndarray>
	*
	* var arr = ndarray2array( v );
	* // returns [ 1, 2 ]
	*
	* v = iter.next().value;
	* // returns <ndarray>
	*
	* arr = ndarray2array( v );
	* // returns [ 3, 4 ]
	*
	* v = iter.next().value;
	* // returns <ndarray>
	*
	* arr = ndarray2array( v );
	* // returns [ 5, 6 ]
	*
	* // ...
	*/
	nditerRows: typeof nditerRows;

	/**
	* Returns an iterator which iterates over each view along a specified dimension.
	*
	* @param x - input value
	* @param dim - dimension index
	* @param options - function options
	* @param options.readonly - boolean indicating whether returned views should be read-only
	* @param options.keepdim - boolean indicating whether returned views should include the selected dimension as a singleton dimension
	* @returns iterator
	*
	* @example
	* var array = require( './../../../array' );
	* var ndarray2array = require( './../../../to-array' );
	*
	* var x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ], {
	*     'dtype': 'float64'
	* });
	* // returns <ndarray>
	*
	* var iter = ns.nditerSelectDimension( x, 0 );
	*
	* var v = iter.next().value;
	* // returns <ndarray>
	*
	* var arr = ndarray2array( v );
	* // returns [ [ 1, 2 ], [ 3, 4 ] ]
	*
	* v = iter.next().value;
	* // returns <ndarray>
	*
	* arr = ndarray2array( v );
	* // returns [ [ 5, 6 ], [ 7, 8 ] ]
	*
	* // ...
	*/
	nditerSelectDimension: typeof nditerSelectDimension;

	/**
	* Returns an iterator which iterates over each subarray in a stack of subarrays according to a list of specified stack dimensions.
	*
	* @param x - input value
	* @param dims - indices of dimensions to stack
	* @param options - function options
	* @param options.readonly - boolean indicating whether returned views should be read-only
	* @returns iterator
	*
	* @example
	* var array = require( './../../../array' );
	* var ndarray2array = require( './../../../to-array' );
	*
	* var x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ], {
	*     'dtype': 'float64'
	* });
	* // returns <ndarray>
	*
	* var iter = ns.nditerStacks( x, [ 1, 2 ] );
	*
	* var v = iter.next().value;
	* // returns <ndarray>
	*
	* var arr = ndarray2array( v );
	* // returns [ [ 1, 2 ], [ 3, 4 ] ]
	*
	* v = iter.next().value;
	* // returns <ndarray>
	*
	* arr = ndarray2array( v );
	* // returns [ [ 5, 6 ], [ 7, 8 ] ]
	*
	* // ...
	*/
	nditerStacks: typeof nditerStacks;

	/**
	* Returns an iterator which iterates over each subarray in a stack of subarrays.
	*
	* @param x - input value
	* @param ndims - number of dimensions to stack
	* @param options - function options
	* @param options.readonly - boolean indicating whether returned views should be read-only
	* @returns iterator
	*
	* @example
	* var array = require( './../../../array' );
	* var ndarray2array = require( './../../../to-array' );
	*
	* var x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ], {
	*     'dtype': 'float64'
	* });
	* // returns <ndarray>
	*
	* var iter = ns.nditerSubarrays( x, 2 );
	*
	* var v = iter.next().value;
	* // returns <ndarray>
	*
	* var arr = ndarray2array( v );
	* // returns [ [ 1, 2 ], [ 3, 4 ] ]
	*
	* v = iter.next().value;
	* // returns <ndarray>
	*
	* arr = ndarray2array( v );
	* // returns [ [ 5, 6 ], [ 7, 8 ] ]
	*
	* // ...
	*/
	nditerSubarrays: typeof nditerSubarrays;

	/**
	* Returns an iterator which converts each iterated ndarray to a generic array.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` and a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var array = require( './../../../array' );
	* var ndarray2array = require( './../../../to-array' );
	* var nditerRows = require( './../../../iter/rows' );
	*
	* var x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ] );
	* // returns <ndarray>
	*
	* var iter = ns.nditer2arrayEach( nditerRows( x ) );
	*
	* var v = iter.next().value;
	* // returns [ 1, 2 ]
	*
	* v = iter.next().value;
	* // returns [ 3, 4 ]
	*
	* v = iter.next().value;
	* // returns [ 5, 6 ]
	*
	* // ...
	*/
	nditer2arrayEach: typeof nditer2arrayEach;

	/**
	* Returns an iterator which returns individual elements of a provided ndarray.
	*
	* @param x - input array
	* @param options - function options
	* @param options.order - index iteration order
	* @returns iterator
	*
	* @example
	* var array = require( './../../../array' );
	*
	* var x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ], {
	*     'dtype': 'float64'
	* });
	* // returns <ndarray>
	*
	* var iter = ns.nditerValues( x );
	*
	* var v = iter.next().value;
	* // returns 1
	*
	* v = iter.next().value;
	* // returns 2
	*
	* v = iter.next().value;
	* // returns 3
	*
	* // ...
	*/
	nditerValues: typeof nditerValues;
}

/**
* Multidimensional array iterators.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
