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

#include "stdlib/ndarray/base/unary_accumulate.h"
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <inttypes.h>

static void print_ndarray_contents( const struct ndarray *x ) {
	int64_t i;
	int8_t s;
	double v;

	for ( i = 0; i < stdlib_ndarray_length( x ); i++ ) {
		s = stdlib_ndarray_iget_float64( x, i, &v );
		if ( s != 0 ) {
			fprintf( stderr, "Unable to resolve data element.\n" );
			exit( EXIT_FAILURE );
		}
		fprintf( stdout, "data[%"PRId64"] = %lf\n", i, v );
	}
}

static double add( const double acc, const double x ) {
	return acc + x;
}

int main( void ) {
	// Define the ndarray data type:
	enum STDLIB_NDARRAY_DTYPE dtype = STDLIB_NDARRAY_FLOAT64;

	// Create underlying byte arrays:
	double xvalues[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 };
	double ivalues[] = { 0.0 };
	double ovalues[] = { 0.0 };

	uint8_t *xbuf = (uint8_t *)xvalues; // cppcheck-suppress invalidPointerCast
	uint8_t *ibuf = (uint8_t *)ivalues; // cppcheck-suppress invalidPointerCast
	uint8_t *obuf = (uint8_t *)ovalues; // cppcheck-suppress invalidPointerCast

	// Define the number of dimensions:
	int64_t ndims = 3;

	// Define the array shapes:
	int64_t xsh[] = { 2, 2, 2 };
	int64_t ish[] = { 0 };
	int64_t osh[] = { 0 };

	// Define the strides:
	int64_t sx[] = { 32, 16, 8 };
	int64_t si[] = { 0 };
	int64_t so[] = { 0 };

	// Define the offsets:
	int64_t ox = 0;
	int64_t oi = 0;
	int64_t oo = 0;

	// Define the array order:
	enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

	// Specify the index mode:
	enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

	// Specify the subscript index modes:
	int8_t submodes[] = { imode };
	int64_t nsubmodes = 1;

	// Create an input ndarray:
	struct ndarray *x = stdlib_ndarray_allocate( dtype, xbuf, ndims, xsh, sx, ox, order, imode, nsubmodes, submodes );
	if ( x == NULL ) {
		fprintf( stderr, "Error allocating memory.\n" );
		exit( EXIT_FAILURE );
	}

	// Create an initial value zero-dimensional ndarray:
	struct ndarray *initial = stdlib_ndarray_allocate( dtype, ibuf, 0, ish, si, oi, order, imode, nsubmodes, submodes );
	if ( initial == NULL ) {
		fprintf( stderr, "Error allocating memory.\n" );
		exit( EXIT_FAILURE );
	}

	// Create an output zero-dimensional ndarray:
	struct ndarray *out = stdlib_ndarray_allocate( dtype, obuf, 0, osh, so, oo, order, imode, nsubmodes, submodes );
	if ( out == NULL ) {
		fprintf( stderr, "Error allocating memory.\n" );
		exit( EXIT_FAILURE );
	}

	// Define an array containing the ndarrays:
	struct ndarray *arrays[] = { x, initial, out };

	// Apply the callback:
	int8_t status = stdlib_ndarray_accumulate_dd_d( arrays, (void *)add );
	if ( status != 0 ) {
		fprintf( stderr, "Error during computation.\n" );
		exit( EXIT_FAILURE );
	}

	// Print the results:
	print_ndarray_contents( out );
	fprintf( stdout, "\n" );

	// Free allocated memory:
	stdlib_ndarray_free( x );
	stdlib_ndarray_free( initial );
	stdlib_ndarray_free( out );
}
