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

#ifndef STDLIB_NDARRAY_SAFE_CASTS_H
#define STDLIB_NDARRAY_SAFE_CASTS_H

#include <stdint.h>
#include "stdlib/ndarray/dtypes.h"

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

const int8_t STDLIB_NDARRAY_SAFE_CASTS_FLOAT64[ STDLIB_NDARRAY_NDTYPES ] = {

	[ STDLIB_NDARRAY_INT8 ] = 0,
	[ STDLIB_NDARRAY_UINT8 ] = 0,
	[ STDLIB_NDARRAY_UINT8C ] = 0,
	[ STDLIB_NDARRAY_INT16 ] = 0,
	[ STDLIB_NDARRAY_UINT16 ] = 0,
	[ STDLIB_NDARRAY_INT32 ] = 0,
	[ STDLIB_NDARRAY_UINT32 ] = 0,
	[ STDLIB_NDARRAY_INT64 ] = 0,
	[ STDLIB_NDARRAY_UINT64 ] = 0,

	[ STDLIB_NDARRAY_FLOAT16 ] = 0,
	[ STDLIB_NDARRAY_FLOAT32 ] = 0,
	[ STDLIB_NDARRAY_FLOAT64 ] = 1,

	[ STDLIB_NDARRAY_COMPLEX32 ] = 0,
	[ STDLIB_NDARRAY_COMPLEX64 ] = 0,
	[ STDLIB_NDARRAY_COMPLEX128 ] = 1,

	[ STDLIB_NDARRAY_BOOL ] = 0,

	[ STDLIB_NDARRAY_BINARY ] = 0,
	[ STDLIB_NDARRAY_GENERIC ] = 0
};

const int8_t STDLIB_NDARRAY_SAFE_CASTS_FLOAT32[ STDLIB_NDARRAY_NDTYPES ] = {

	[ STDLIB_NDARRAY_INT8 ] = 0,
	[ STDLIB_NDARRAY_UINT8 ] = 0,
	[ STDLIB_NDARRAY_UINT8C ] = 0,
	[ STDLIB_NDARRAY_INT16 ] = 0,
	[ STDLIB_NDARRAY_UINT16 ] = 0,
	[ STDLIB_NDARRAY_INT32 ] = 0,
	[ STDLIB_NDARRAY_UINT32 ] = 0,
	[ STDLIB_NDARRAY_INT64 ] = 0,
	[ STDLIB_NDARRAY_UINT64 ] = 0,

	[ STDLIB_NDARRAY_FLOAT16 ] = 0,
	[ STDLIB_NDARRAY_FLOAT32 ] = 1,
	[ STDLIB_NDARRAY_FLOAT64 ] = 1,

	[ STDLIB_NDARRAY_COMPLEX32 ] = 0,
	[ STDLIB_NDARRAY_COMPLEX64 ] = 1,
	[ STDLIB_NDARRAY_COMPLEX128 ] = 1,

	[ STDLIB_NDARRAY_BOOL ] = 0,

	[ STDLIB_NDARRAY_BINARY ] = 0,
	[ STDLIB_NDARRAY_GENERIC ] = 0
};

const int8_t STDLIB_NDARRAY_SAFE_CASTS_FLOAT16[ STDLIB_NDARRAY_NDTYPES ] = {

	[ STDLIB_NDARRAY_INT8 ] = 0,
	[ STDLIB_NDARRAY_UINT8 ] = 0,
	[ STDLIB_NDARRAY_UINT8C ] = 0,
	[ STDLIB_NDARRAY_INT16 ] = 0,
	[ STDLIB_NDARRAY_UINT16 ] = 0,
	[ STDLIB_NDARRAY_INT32 ] = 0,
	[ STDLIB_NDARRAY_UINT32 ] = 0,
	[ STDLIB_NDARRAY_INT64 ] = 0,
	[ STDLIB_NDARRAY_UINT64 ] = 0,

	[ STDLIB_NDARRAY_FLOAT16 ] = 1,
	[ STDLIB_NDARRAY_FLOAT32 ] = 1,
	[ STDLIB_NDARRAY_FLOAT64 ] = 1,

	[ STDLIB_NDARRAY_COMPLEX32 ] = 1,
	[ STDLIB_NDARRAY_COMPLEX64 ] = 1,
	[ STDLIB_NDARRAY_COMPLEX128 ] = 1,

	[ STDLIB_NDARRAY_BOOL ] = 0,

	[ STDLIB_NDARRAY_BINARY ] = 0,
	[ STDLIB_NDARRAY_GENERIC ] = 0
};

const int8_t STDLIB_NDARRAY_SAFE_CASTS_UINT64[ STDLIB_NDARRAY_NDTYPES ] = {

	[ STDLIB_NDARRAY_INT8 ] = 0,
	[ STDLIB_NDARRAY_UINT8 ] = 0,
	[ STDLIB_NDARRAY_UINT8C ] = 0,
	[ STDLIB_NDARRAY_INT16 ] = 0,
	[ STDLIB_NDARRAY_UINT16 ] = 0,
	[ STDLIB_NDARRAY_INT32 ] = 0,
	[ STDLIB_NDARRAY_UINT32 ] = 0,
	[ STDLIB_NDARRAY_INT64 ] = 0,
	[ STDLIB_NDARRAY_UINT64 ] = 1,

	[ STDLIB_NDARRAY_FLOAT16 ] = 0,
	[ STDLIB_NDARRAY_FLOAT32 ] = 0,
	[ STDLIB_NDARRAY_FLOAT64 ] = 0,

	[ STDLIB_NDARRAY_COMPLEX32 ] = 0,
	[ STDLIB_NDARRAY_COMPLEX64 ] = 0,
	[ STDLIB_NDARRAY_COMPLEX128 ] = 0,

	[ STDLIB_NDARRAY_BOOL ] = 0,

	[ STDLIB_NDARRAY_BINARY ] = 0,
	[ STDLIB_NDARRAY_GENERIC ] = 0
};

const int8_t STDLIB_NDARRAY_SAFE_CASTS_INT64[ STDLIB_NDARRAY_NDTYPES ] = {

	[ STDLIB_NDARRAY_INT8 ] = 0,
	[ STDLIB_NDARRAY_UINT8 ] = 0,
	[ STDLIB_NDARRAY_UINT8C ] = 0,
	[ STDLIB_NDARRAY_INT16 ] = 0,
	[ STDLIB_NDARRAY_UINT16 ] = 0,
	[ STDLIB_NDARRAY_INT32 ] = 0,
	[ STDLIB_NDARRAY_UINT32 ] = 0,
	[ STDLIB_NDARRAY_INT64 ] = 1,
	[ STDLIB_NDARRAY_UINT64 ] = 0,

	[ STDLIB_NDARRAY_FLOAT16 ] = 0,
	[ STDLIB_NDARRAY_FLOAT32 ] = 0,
	[ STDLIB_NDARRAY_FLOAT64 ] = 0,

	[ STDLIB_NDARRAY_COMPLEX32 ] = 0,
	[ STDLIB_NDARRAY_COMPLEX64 ] = 0,
	[ STDLIB_NDARRAY_COMPLEX128 ] = 0,

	[ STDLIB_NDARRAY_BOOL ] = 0,

	[ STDLIB_NDARRAY_BINARY ] = 0,
	[ STDLIB_NDARRAY_GENERIC ] = 0
};

const int8_t STDLIB_NDARRAY_SAFE_CASTS_UINT32[ STDLIB_NDARRAY_NDTYPES ] = {

	[ STDLIB_NDARRAY_INT8 ] = 0,
	[ STDLIB_NDARRAY_UINT8 ] = 0,
	[ STDLIB_NDARRAY_UINT8C ] = 0,
	[ STDLIB_NDARRAY_INT16 ] = 0,
	[ STDLIB_NDARRAY_UINT16 ] = 0,
	[ STDLIB_NDARRAY_INT32 ] = 0,
	[ STDLIB_NDARRAY_UINT32 ] = 1,
	[ STDLIB_NDARRAY_INT64 ] = 1,
	[ STDLIB_NDARRAY_UINT64 ] = 1,

	[ STDLIB_NDARRAY_FLOAT16 ] = 0,
	[ STDLIB_NDARRAY_FLOAT32 ] = 0,
	[ STDLIB_NDARRAY_FLOAT64 ] = 1,

	[ STDLIB_NDARRAY_COMPLEX32 ] = 0,
	[ STDLIB_NDARRAY_COMPLEX64 ] = 0,
	[ STDLIB_NDARRAY_COMPLEX128 ] = 1,

	[ STDLIB_NDARRAY_BOOL ] = 0,

	[ STDLIB_NDARRAY_BINARY ] = 0,
	[ STDLIB_NDARRAY_GENERIC ] = 0
};

const int8_t STDLIB_NDARRAY_SAFE_CASTS_INT32[ STDLIB_NDARRAY_NDTYPES ] = {

	[ STDLIB_NDARRAY_INT8 ] = 0,
	[ STDLIB_NDARRAY_UINT8 ] = 0,
	[ STDLIB_NDARRAY_UINT8C ] = 0,
	[ STDLIB_NDARRAY_INT16 ] = 0,
	[ STDLIB_NDARRAY_UINT16 ] = 0,
	[ STDLIB_NDARRAY_INT32 ] = 1,
	[ STDLIB_NDARRAY_UINT32 ] = 0,
	[ STDLIB_NDARRAY_INT64 ] = 1,
	[ STDLIB_NDARRAY_UINT64 ] = 0,

	[ STDLIB_NDARRAY_FLOAT16 ] = 0,
	[ STDLIB_NDARRAY_FLOAT32 ] = 0,
	[ STDLIB_NDARRAY_FLOAT64 ] = 1,

	[ STDLIB_NDARRAY_COMPLEX32 ] = 0,
	[ STDLIB_NDARRAY_COMPLEX64 ] = 0,
	[ STDLIB_NDARRAY_COMPLEX128 ] = 1,

	[ STDLIB_NDARRAY_BOOL ] = 0,

	[ STDLIB_NDARRAY_BINARY ] = 0,
	[ STDLIB_NDARRAY_GENERIC ] = 0
};

const int8_t STDLIB_NDARRAY_SAFE_CASTS_UINT16[ STDLIB_NDARRAY_NDTYPES ] = {

	[ STDLIB_NDARRAY_INT8 ] = 0,
	[ STDLIB_NDARRAY_UINT8 ] = 0,
	[ STDLIB_NDARRAY_UINT8C ] = 0,
	[ STDLIB_NDARRAY_INT16 ] = 0,
	[ STDLIB_NDARRAY_UINT16 ] = 1,
	[ STDLIB_NDARRAY_INT32 ] = 1,
	[ STDLIB_NDARRAY_UINT32 ] = 1,
	[ STDLIB_NDARRAY_INT64 ] = 1,
	[ STDLIB_NDARRAY_UINT64 ] = 1,

	[ STDLIB_NDARRAY_FLOAT16 ] = 0,
	[ STDLIB_NDARRAY_FLOAT32 ] = 1,
	[ STDLIB_NDARRAY_FLOAT64 ] = 1,

	[ STDLIB_NDARRAY_COMPLEX32 ] = 0,
	[ STDLIB_NDARRAY_COMPLEX64 ] = 1,
	[ STDLIB_NDARRAY_COMPLEX128 ] = 1,

	[ STDLIB_NDARRAY_BOOL ] = 0,

	[ STDLIB_NDARRAY_BINARY ] = 0,
	[ STDLIB_NDARRAY_GENERIC ] = 0
};

const int8_t STDLIB_NDARRAY_SAFE_CASTS_INT16[ STDLIB_NDARRAY_NDTYPES ] = {

	[ STDLIB_NDARRAY_INT8 ] = 0,
	[ STDLIB_NDARRAY_UINT8 ] = 0,
	[ STDLIB_NDARRAY_UINT8C ] = 0,
	[ STDLIB_NDARRAY_INT16 ] = 1,
	[ STDLIB_NDARRAY_UINT16 ] = 0,
	[ STDLIB_NDARRAY_INT32 ] = 1,
	[ STDLIB_NDARRAY_UINT32 ] = 0,
	[ STDLIB_NDARRAY_INT64 ] = 1,
	[ STDLIB_NDARRAY_UINT64 ] = 0,

	[ STDLIB_NDARRAY_FLOAT16 ] = 0,
	[ STDLIB_NDARRAY_FLOAT32 ] = 1,
	[ STDLIB_NDARRAY_FLOAT64 ] = 1,

	[ STDLIB_NDARRAY_COMPLEX32 ] = 0,
	[ STDLIB_NDARRAY_COMPLEX64 ] = 1,
	[ STDLIB_NDARRAY_COMPLEX128 ] = 1,

	[ STDLIB_NDARRAY_BOOL ] = 0,

	[ STDLIB_NDARRAY_BINARY ] = 0,
	[ STDLIB_NDARRAY_GENERIC ] = 0
};

const int8_t STDLIB_NDARRAY_SAFE_CASTS_UINT8[ STDLIB_NDARRAY_NDTYPES ] = {

	[ STDLIB_NDARRAY_INT8 ] = 0,
	[ STDLIB_NDARRAY_UINT8 ] = 1,
	[ STDLIB_NDARRAY_UINT8C ] = 1,
	[ STDLIB_NDARRAY_INT16 ] = 1,
	[ STDLIB_NDARRAY_UINT16 ] = 1,
	[ STDLIB_NDARRAY_INT32 ] = 1,
	[ STDLIB_NDARRAY_UINT32 ] = 1,
	[ STDLIB_NDARRAY_INT64 ] = 1,
	[ STDLIB_NDARRAY_UINT64 ] = 1,

	[ STDLIB_NDARRAY_FLOAT16 ] = 1,
	[ STDLIB_NDARRAY_FLOAT32 ] = 1,
	[ STDLIB_NDARRAY_FLOAT64 ] = 1,

	[ STDLIB_NDARRAY_COMPLEX32 ] = 1,
	[ STDLIB_NDARRAY_COMPLEX64 ] = 1,
	[ STDLIB_NDARRAY_COMPLEX128 ] = 1,

	[ STDLIB_NDARRAY_BOOL ] = 0,

	[ STDLIB_NDARRAY_BINARY ] = 0,
	[ STDLIB_NDARRAY_GENERIC ] = 0
};

const int8_t STDLIB_NDARRAY_SAFE_CASTS_UINT8C[ STDLIB_NDARRAY_NDTYPES ] = {

	[ STDLIB_NDARRAY_INT8 ] = 0,
	[ STDLIB_NDARRAY_UINT8 ] = 1,
	[ STDLIB_NDARRAY_UINT8C ] = 1,
	[ STDLIB_NDARRAY_INT16 ] = 1,
	[ STDLIB_NDARRAY_UINT16 ] = 1,
	[ STDLIB_NDARRAY_INT32 ] = 1,
	[ STDLIB_NDARRAY_UINT32 ] = 1,
	[ STDLIB_NDARRAY_INT64 ] = 1,
	[ STDLIB_NDARRAY_UINT64 ] = 1,

	[ STDLIB_NDARRAY_FLOAT16 ] = 1,
	[ STDLIB_NDARRAY_FLOAT32 ] = 1,
	[ STDLIB_NDARRAY_FLOAT64 ] = 1,

	[ STDLIB_NDARRAY_COMPLEX32 ] = 1,
	[ STDLIB_NDARRAY_COMPLEX64 ] = 1,
	[ STDLIB_NDARRAY_COMPLEX128 ] = 1,

	[ STDLIB_NDARRAY_BOOL ] = 0,

	[ STDLIB_NDARRAY_BINARY ] = 0,
	[ STDLIB_NDARRAY_GENERIC ] = 0
};

const int8_t STDLIB_NDARRAY_SAFE_CASTS_INT8[ STDLIB_NDARRAY_NDTYPES ] = {

	[ STDLIB_NDARRAY_INT8 ] = 1,
	[ STDLIB_NDARRAY_UINT8 ] = 0,
	[ STDLIB_NDARRAY_UINT8C ] = 0,
	[ STDLIB_NDARRAY_INT16 ] = 1,
	[ STDLIB_NDARRAY_UINT16 ] = 0,
	[ STDLIB_NDARRAY_INT32 ] = 1,
	[ STDLIB_NDARRAY_UINT32 ] = 0,
	[ STDLIB_NDARRAY_INT64 ] = 1,
	[ STDLIB_NDARRAY_UINT64 ] = 0,

	[ STDLIB_NDARRAY_FLOAT16 ] = 1,
	[ STDLIB_NDARRAY_FLOAT32 ] = 1,
	[ STDLIB_NDARRAY_FLOAT64 ] = 1,

	[ STDLIB_NDARRAY_COMPLEX32 ] = 1,
	[ STDLIB_NDARRAY_COMPLEX64 ] = 1,
	[ STDLIB_NDARRAY_COMPLEX128 ] = 1,

	[ STDLIB_NDARRAY_BOOL ] = 0,

	[ STDLIB_NDARRAY_BINARY ] = 0,
	[ STDLIB_NDARRAY_GENERIC ] = 0
};

const int8_t STDLIB_NDARRAY_SAFE_CASTS_COMPLEX128[ STDLIB_NDARRAY_NDTYPES ] = {

	[ STDLIB_NDARRAY_INT8 ] = 0,
	[ STDLIB_NDARRAY_UINT8 ] = 0,
	[ STDLIB_NDARRAY_UINT8C ] = 0,
	[ STDLIB_NDARRAY_INT16 ] = 0,
	[ STDLIB_NDARRAY_UINT16 ] = 0,
	[ STDLIB_NDARRAY_INT32 ] = 0,
	[ STDLIB_NDARRAY_UINT32 ] = 0,
	[ STDLIB_NDARRAY_INT64 ] = 0,
	[ STDLIB_NDARRAY_UINT64 ] = 0,

	[ STDLIB_NDARRAY_FLOAT16 ] = 0,
	[ STDLIB_NDARRAY_FLOAT32 ] = 0,
	[ STDLIB_NDARRAY_FLOAT64 ] = 0,

	[ STDLIB_NDARRAY_COMPLEX32 ] = 0,
	[ STDLIB_NDARRAY_COMPLEX64 ] = 0,
	[ STDLIB_NDARRAY_COMPLEX128 ] = 1,

	[ STDLIB_NDARRAY_BOOL ] = 0,

	[ STDLIB_NDARRAY_BINARY ] = 0,
	[ STDLIB_NDARRAY_GENERIC ] = 0
};

const int8_t STDLIB_NDARRAY_SAFE_CASTS_COMPLEX64[ STDLIB_NDARRAY_NDTYPES ] = {

	[ STDLIB_NDARRAY_INT8 ] = 0,
	[ STDLIB_NDARRAY_UINT8 ] = 0,
	[ STDLIB_NDARRAY_UINT8C ] = 0,
	[ STDLIB_NDARRAY_INT16 ] = 0,
	[ STDLIB_NDARRAY_UINT16 ] = 0,
	[ STDLIB_NDARRAY_INT32 ] = 0,
	[ STDLIB_NDARRAY_UINT32 ] = 0,
	[ STDLIB_NDARRAY_INT64 ] = 0,
	[ STDLIB_NDARRAY_UINT64 ] = 0,

	[ STDLIB_NDARRAY_FLOAT16 ] = 0,
	[ STDLIB_NDARRAY_FLOAT32 ] = 0,
	[ STDLIB_NDARRAY_FLOAT64 ] = 0,

	[ STDLIB_NDARRAY_COMPLEX32 ] = 0,
	[ STDLIB_NDARRAY_COMPLEX64 ] = 1,
	[ STDLIB_NDARRAY_COMPLEX128 ] = 1,

	[ STDLIB_NDARRAY_BOOL ] = 0,

	[ STDLIB_NDARRAY_BINARY ] = 0,
	[ STDLIB_NDARRAY_GENERIC ] = 0
};

const int8_t STDLIB_NDARRAY_SAFE_CASTS_COMPLEX32[ STDLIB_NDARRAY_NDTYPES ] = {

	[ STDLIB_NDARRAY_INT8 ] = 0,
	[ STDLIB_NDARRAY_UINT8 ] = 0,
	[ STDLIB_NDARRAY_UINT8C ] = 0,
	[ STDLIB_NDARRAY_INT16 ] = 0,
	[ STDLIB_NDARRAY_UINT16 ] = 0,
	[ STDLIB_NDARRAY_INT32 ] = 0,
	[ STDLIB_NDARRAY_UINT32 ] = 0,
	[ STDLIB_NDARRAY_INT64 ] = 0,
	[ STDLIB_NDARRAY_UINT64 ] = 0,

	[ STDLIB_NDARRAY_FLOAT16 ] = 0,
	[ STDLIB_NDARRAY_FLOAT32 ] = 0,
	[ STDLIB_NDARRAY_FLOAT64 ] = 0,

	[ STDLIB_NDARRAY_COMPLEX32 ] = 1,
	[ STDLIB_NDARRAY_COMPLEX64 ] = 1,
	[ STDLIB_NDARRAY_COMPLEX128 ] = 1,

	[ STDLIB_NDARRAY_BOOL ] = 0,

	[ STDLIB_NDARRAY_BINARY ] = 0,
	[ STDLIB_NDARRAY_GENERIC ] = 0
};

const int8_t STDLIB_NDARRAY_SAFE_CASTS_BOOL[ STDLIB_NDARRAY_NDTYPES ] = {

	[ STDLIB_NDARRAY_INT8 ] = 0,
	[ STDLIB_NDARRAY_UINT8 ] = 0,
	[ STDLIB_NDARRAY_UINT8C ] = 0,
	[ STDLIB_NDARRAY_INT16 ] = 0,
	[ STDLIB_NDARRAY_UINT16 ] = 0,
	[ STDLIB_NDARRAY_INT32 ] = 0,
	[ STDLIB_NDARRAY_UINT32 ] = 0,
	[ STDLIB_NDARRAY_INT64 ] = 0,
	[ STDLIB_NDARRAY_UINT64 ] = 0,

	[ STDLIB_NDARRAY_FLOAT16 ] = 0,
	[ STDLIB_NDARRAY_FLOAT32 ] = 0,
	[ STDLIB_NDARRAY_FLOAT64 ] = 0,

	[ STDLIB_NDARRAY_COMPLEX32 ] = 0,
	[ STDLIB_NDARRAY_COMPLEX64 ] = 0,
	[ STDLIB_NDARRAY_COMPLEX128 ] = 0,

	[ STDLIB_NDARRAY_BOOL ] = 1,

	[ STDLIB_NDARRAY_BINARY ] = 0,
	[ STDLIB_NDARRAY_GENERIC ] = 0
};

const int8_t STDLIB_NDARRAY_SAFE_CASTS_BINARY[ STDLIB_NDARRAY_NDTYPES ] = {

	[ STDLIB_NDARRAY_INT8 ] = 0,
	[ STDLIB_NDARRAY_UINT8 ] = 0,
	[ STDLIB_NDARRAY_UINT8C ] = 0,
	[ STDLIB_NDARRAY_INT16 ] = 0,
	[ STDLIB_NDARRAY_UINT16 ] = 0,
	[ STDLIB_NDARRAY_INT32 ] = 0,
	[ STDLIB_NDARRAY_UINT32 ] = 0,
	[ STDLIB_NDARRAY_INT64 ] = 0,
	[ STDLIB_NDARRAY_UINT64 ] = 0,

	[ STDLIB_NDARRAY_FLOAT16 ] = 0,
	[ STDLIB_NDARRAY_FLOAT32 ] = 0,
	[ STDLIB_NDARRAY_FLOAT64 ] = 0,

	[ STDLIB_NDARRAY_COMPLEX32 ] = 0,
	[ STDLIB_NDARRAY_COMPLEX64 ] = 0,
	[ STDLIB_NDARRAY_COMPLEX128 ] = 0,

	[ STDLIB_NDARRAY_BOOL ] = 0,

	[ STDLIB_NDARRAY_BINARY ] = 1,
	[ STDLIB_NDARRAY_GENERIC ] = 0
};

const int8_t STDLIB_NDARRAY_SAFE_CASTS_GENERIC[ STDLIB_NDARRAY_NDTYPES ] = {

	[ STDLIB_NDARRAY_INT8 ] = 0,
	[ STDLIB_NDARRAY_UINT8 ] = 0,
	[ STDLIB_NDARRAY_UINT8C ] = 0,
	[ STDLIB_NDARRAY_INT16 ] = 0,
	[ STDLIB_NDARRAY_UINT16 ] = 0,
	[ STDLIB_NDARRAY_INT32 ] = 0,
	[ STDLIB_NDARRAY_UINT32 ] = 0,
	[ STDLIB_NDARRAY_INT64 ] = 0,
	[ STDLIB_NDARRAY_UINT64 ] = 0,

	[ STDLIB_NDARRAY_FLOAT16 ] = 0,
	[ STDLIB_NDARRAY_FLOAT32 ] = 0,
	[ STDLIB_NDARRAY_FLOAT64 ] = 0,

	[ STDLIB_NDARRAY_COMPLEX32 ] = 0,
	[ STDLIB_NDARRAY_COMPLEX64 ] = 0,
	[ STDLIB_NDARRAY_COMPLEX128 ] = 0,

	[ STDLIB_NDARRAY_BOOL ] = 0,

	[ STDLIB_NDARRAY_BINARY ] = 0,
	[ STDLIB_NDARRAY_GENERIC ] = 1
};

// Define a table of pointers containing the above casting tables:
const int8_t *STDLIB_NDARRAY_SAFE_CASTS[ STDLIB_NDARRAY_NDTYPES ] = {

	[ STDLIB_NDARRAY_INT8 ] = STDLIB_NDARRAY_SAFE_CASTS_INT8,
	[ STDLIB_NDARRAY_UINT8 ] = STDLIB_NDARRAY_SAFE_CASTS_UINT8,
	[ STDLIB_NDARRAY_UINT8C ] = STDLIB_NDARRAY_SAFE_CASTS_UINT8C,
	[ STDLIB_NDARRAY_INT16 ] = STDLIB_NDARRAY_SAFE_CASTS_INT16,
	[ STDLIB_NDARRAY_UINT16 ] = STDLIB_NDARRAY_SAFE_CASTS_UINT16,
	[ STDLIB_NDARRAY_INT32 ] = STDLIB_NDARRAY_SAFE_CASTS_INT32,
	[ STDLIB_NDARRAY_UINT32 ] = STDLIB_NDARRAY_SAFE_CASTS_UINT32,
	[ STDLIB_NDARRAY_INT64 ] = STDLIB_NDARRAY_SAFE_CASTS_INT64,
	[ STDLIB_NDARRAY_UINT64 ] = STDLIB_NDARRAY_SAFE_CASTS_UINT64,

	[ STDLIB_NDARRAY_FLOAT16 ] = STDLIB_NDARRAY_SAFE_CASTS_FLOAT16,
	[ STDLIB_NDARRAY_FLOAT32 ] = STDLIB_NDARRAY_SAFE_CASTS_FLOAT32,
	[ STDLIB_NDARRAY_FLOAT64 ] = STDLIB_NDARRAY_SAFE_CASTS_FLOAT64,

	[ STDLIB_NDARRAY_COMPLEX32 ] = STDLIB_NDARRAY_SAFE_CASTS_COMPLEX32,
	[ STDLIB_NDARRAY_COMPLEX64 ] = STDLIB_NDARRAY_SAFE_CASTS_COMPLEX64,
	[ STDLIB_NDARRAY_COMPLEX128 ] = STDLIB_NDARRAY_SAFE_CASTS_COMPLEX128,

	[ STDLIB_NDARRAY_BOOL ] = STDLIB_NDARRAY_SAFE_CASTS_BOOL,

	[ STDLIB_NDARRAY_BINARY ] = STDLIB_NDARRAY_SAFE_CASTS_BINARY,
	[ STDLIB_NDARRAY_GENERIC ] = STDLIB_NDARRAY_SAFE_CASTS_GENERIC
};

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_NDARRAY_SAFE_CASTS_H
