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

#ifndef STDLIB_NDARRAY_BASE_COUNT_TRUTHY_DISPATCH_OBJECT_H
#define STDLIB_NDARRAY_BASE_COUNT_TRUTHY_DISPATCH_OBJECT_H

#include "stdlib/ndarray/base/count-truthy/typedefs.h"
#include <stdint.h>

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Structure for grouping function dispatch information.
*
* @example
* #include "stdlib/ndarray/base/count-truthy/b.h"
* #include <stdlib.h>
* #include <stdio.h>
*
* ndarrayCountTruthyFcn functions[] = {
*     stdlib_ndarray_count_truthy_b_i_0d,
*     stdlib_ndarray_count_truthy_b_i_1d,
*     stdlib_ndarray_count_truthy_b_i_2d,
*     stdlib_ndarray_count_truthy_b_i_3d,
*     stdlib_ndarray_count_truthy_b_i_4d,
*     stdlib_ndarray_count_truthy_b_i_5d,
*     stdlib_ndarray_count_truthy_b_i_6d,
*     stdlib_ndarray_count_truthy_b_i_7d,
*     stdlib_ndarray_count_truthy_b_i_8d,
*     stdlib_ndarray_count_truthy_b_i_9d,
*     stdlib_ndarray_count_truthy_b_i_10d
*     stdlib_ndarray_count_truthy_b_i_nd
* };

* ndarrayCountTruthyFcn blocked_functions[] = {
*     stdlib_ndarray_count_truthy_b_i_2d_blocked,
*     stdlib_ndarray_count_truthy_b_i_3d_blocked,
*     stdlib_ndarray_count_truthy_b_i_4d_blocked,
*     stdlib_ndarray_count_truthy_b_i_5d_blocked,
*     stdlib_ndarray_count_truthy_b_i_6d_blocked,
*     stdlib_ndarray_count_truthy_b_i_7d_blocked,
*     stdlib_ndarray_count_truthy_b_i_8d_blocked,
*     stdlib_ndarray_count_truthy_b_i_9d_blocked,
*     stdlib_ndarray_count_truthy_b_i_10d_blocked
* };
*
* ndarrayCountTruthyDispatchObject obj = {
*     functions,
*     12,
*     blocked_functions
*     9
* };
*
* // ...
*/
struct ndarrayCountTruthyDispatchObject {
	// Array containing ndarray functions for performing element-wise computation:
	ndarrayCountTruthyFcn *functions;

	// Number of ndarray functions:
	int32_t nfunctions;

	// Array containing ndarray functions for performing element-wise computation using loop blocking:
	ndarrayCountTruthyFcn *blocked_functions;

	// Number of blocked ndarray functions:
	int32_t nblockedfunctions;
};

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_NDARRAY_BASE_COUNT_TRUTHY_DISPATCH_OBJECT_H
