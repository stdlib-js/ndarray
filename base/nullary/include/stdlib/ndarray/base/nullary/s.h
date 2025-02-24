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

/*
* The following is auto-generated. Do not manually edit. See scripts/loops.js.
*/

#ifndef STDLIB_NDARRAY_BASE_NULLARY_S_H
#define STDLIB_NDARRAY_BASE_NULLARY_S_H

#include "stdlib/ndarray/ctor.h"
#include <stdint.h>

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Applies a nullary callback and assigns results to elements in an output ndarray.
*/
int8_t stdlib_ndarray_s( struct ndarray *arrays[], void *fcn );

/**
* Applies a nullary callback and assigns results to elements in a zero-dimensional output ndarray.
*/
int8_t stdlib_ndarray_s_0d( struct ndarray *arrays[], void *fcn );

/**
* Applies a nullary callback and assigns results to elements in a one-dimensional output ndarray.
*/
int8_t stdlib_ndarray_s_1d( struct ndarray *arrays[], void *fcn );

/**
* Applies a nullary callback and assigns results to elements in a two-dimensional output ndarray.
*/
int8_t stdlib_ndarray_s_2d( struct ndarray *arrays[], void *fcn );

/**
* Applies a nullary callback and assigns results to elements in a two-dimensional output ndarray.
*/
int8_t stdlib_ndarray_s_2d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a nullary callback and assigns results to elements in a three-dimensional output ndarray.
*/
int8_t stdlib_ndarray_s_3d( struct ndarray *arrays[], void *fcn );

/**
* Applies a nullary callback and assigns results to elements in a three-dimensional output ndarray.
*/
int8_t stdlib_ndarray_s_3d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a nullary callback and assigns results to elements in a four-dimensional output ndarray.
*/
int8_t stdlib_ndarray_s_4d( struct ndarray *arrays[], void *fcn );

/**
* Applies a nullary callback and assigns results to elements in a four-dimensional output ndarray.
*/
int8_t stdlib_ndarray_s_4d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a nullary callback and assigns results to elements in a five-dimensional output ndarray.
*/
int8_t stdlib_ndarray_s_5d( struct ndarray *arrays[], void *fcn );

/**
* Applies a nullary callback and assigns results to elements in a five-dimensional output ndarray.
*/
int8_t stdlib_ndarray_s_5d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a nullary callback and assigns results to elements in a six-dimensional output ndarray.
*/
int8_t stdlib_ndarray_s_6d( struct ndarray *arrays[], void *fcn );

/**
* Applies a nullary callback and assigns results to elements in a six-dimensional output ndarray.
*/
int8_t stdlib_ndarray_s_6d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a nullary callback and assigns results to elements in a seven-dimensional output ndarray.
*/
int8_t stdlib_ndarray_s_7d( struct ndarray *arrays[], void *fcn );

/**
* Applies a nullary callback and assigns results to elements in a seven-dimensional output ndarray.
*/
int8_t stdlib_ndarray_s_7d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a nullary callback and assigns results to elements in an eight-dimensional output ndarray.
*/
int8_t stdlib_ndarray_s_8d( struct ndarray *arrays[], void *fcn );

/**
* Applies a nullary callback and assigns results to elements in an eight-dimensional output ndarray.
*/
int8_t stdlib_ndarray_s_8d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a nullary callback and assigns results to elements in a nine-dimensional output ndarray.
*/
int8_t stdlib_ndarray_s_9d( struct ndarray *arrays[], void *fcn );

/**
* Applies a nullary callback and assigns results to elements in a nine-dimensional output ndarray.
*/
int8_t stdlib_ndarray_s_9d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a nullary callback and assigns results to elements in a ten-dimensional output ndarray.
*/
int8_t stdlib_ndarray_s_10d( struct ndarray *arrays[], void *fcn );

/**
* Applies a nullary callback and assigns results to elements in a ten-dimensional output ndarray.
*/
int8_t stdlib_ndarray_s_10d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a nullary callback and assigns results to elements in an n-dimensional output ndarray.
*/
int8_t stdlib_ndarray_s_nd( struct ndarray *arrays[], void *fcn );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_NDARRAY_BASE_NULLARY_S_H
