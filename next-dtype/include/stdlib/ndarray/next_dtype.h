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

#ifndef STDLIB_NDARRAY_NEXT_DTYPE_H
#define STDLIB_NDARRAY_NEXT_DTYPE_H

#include <stdint.h>
#include "stdlib/ndarray/dtypes.h"

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

const int8_t STDLIB_NDARRAY_NEXT_DTYPE_FLOAT64 = -1;
const int8_t STDLIB_NDARRAY_NEXT_DTYPE_FLOAT32 = STDLIB_NDARRAY_FLOAT64;

const int8_t STDLIB_NDARRAY_NEXT_DTYPE_UINT64 = -1;
const int8_t STDLIB_NDARRAY_NEXT_DTYPE_INT64 = -1;

const int8_t STDLIB_NDARRAY_NEXT_DTYPE_UINT32 = STDLIB_NDARRAY_UINT64;
const int8_t STDLIB_NDARRAY_NEXT_DTYPE_INT32 = STDLIB_NDARRAY_INT64;

const int8_t STDLIB_NDARRAY_NEXT_DTYPE_UINT16 = STDLIB_NDARRAY_UINT32;
const int8_t STDLIB_NDARRAY_NEXT_DTYPE_INT16 = STDLIB_NDARRAY_INT32;

const int8_t STDLIB_NDARRAY_NEXT_DTYPE_UINT8 = STDLIB_NDARRAY_UINT16;
const int8_t STDLIB_NDARRAY_NEXT_DTYPE_UINT8C = STDLIB_NDARRAY_UINT16;
const int8_t STDLIB_NDARRAY_NEXT_DTYPE_INT8 = STDLIB_NDARRAY_INT16;

const int8_t STDLIB_NDARRAY_NEXT_DTYPE_COMPLEX128 = -1;
const int8_t STDLIB_NDARRAY_NEXT_DTYPE_COMPLEX64 = STDLIB_NDARRAY_COMPLEX128;

const int8_t STDLIB_NDARRAY_NEXT_DTYPE_BOOL = -1;

const int8_t STDLIB_NDARRAY_NEXT_DTYPE_BINARY = -1;
const int8_t STDLIB_NDARRAY_NEXT_DTYPE_GENERIC = -1;

// Define a table of containing the above:
const int8_t STDLIB_NDARRAY_NEXT_DTYPE[ STDLIB_NDARRAY_NDTYPES ] = {

	[ STDLIB_NDARRAY_INT8 ] = STDLIB_NDARRAY_NEXT_DTYPE_INT8,
	[ STDLIB_NDARRAY_UINT8 ] = STDLIB_NDARRAY_NEXT_DTYPE_UINT8,
	[ STDLIB_NDARRAY_UINT8C ] = STDLIB_NDARRAY_NEXT_DTYPE_UINT8C,
	[ STDLIB_NDARRAY_INT16 ] = STDLIB_NDARRAY_NEXT_DTYPE_INT16,
	[ STDLIB_NDARRAY_UINT16 ] = STDLIB_NDARRAY_NEXT_DTYPE_UINT16,
	[ STDLIB_NDARRAY_INT32 ] = STDLIB_NDARRAY_NEXT_DTYPE_INT32,
	[ STDLIB_NDARRAY_UINT32 ] = STDLIB_NDARRAY_NEXT_DTYPE_UINT32,
	[ STDLIB_NDARRAY_INT64 ] = STDLIB_NDARRAY_NEXT_DTYPE_INT64,
	[ STDLIB_NDARRAY_UINT64 ] = STDLIB_NDARRAY_NEXT_DTYPE_UINT64,

	[ STDLIB_NDARRAY_FLOAT32 ] = STDLIB_NDARRAY_NEXT_DTYPE_FLOAT32,
	[ STDLIB_NDARRAY_FLOAT64 ] = STDLIB_NDARRAY_NEXT_DTYPE_FLOAT64,

	[ STDLIB_NDARRAY_COMPLEX64 ] = STDLIB_NDARRAY_NEXT_DTYPE_COMPLEX64,
	[ STDLIB_NDARRAY_COMPLEX128 ] = STDLIB_NDARRAY_NEXT_DTYPE_COMPLEX128,

	[ STDLIB_NDARRAY_BOOL ] = STDLIB_NDARRAY_NEXT_DTYPE_BOOL,

	[ STDLIB_NDARRAY_BINARY ] = STDLIB_NDARRAY_NEXT_DTYPE_BINARY,
	[ STDLIB_NDARRAY_GENERIC ] = STDLIB_NDARRAY_NEXT_DTYPE_GENERIC
};

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_NDARRAY_NEXT_DTYPE_H
