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

#include "stdlib/ndarray/base/max_view_buffer_index.h"
#include <stdint.h>
#include <stdio.h>
#include <inttypes.h>

int main( void ) {
	// Specify the number of dimensions:
	const int64_t ndims = 2;

	// Define an array shape:
	const int64_t shape[] = { 10, 10 };

	// Define array strides:
	const int64_t strides[] = { -2, 5 };

	// Define an offset:
	const int64_t offset = 100;

	// Compute the maximum accessible index:
	int64_t idx = stdlib_ndarray_max_view_buffer_index( ndims, shape, strides, offset );

	// Print the results:
	printf( "idx: %"PRId64"\n", idx );
}
