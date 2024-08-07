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

#include "stdlib/ndarray/base/ind2sub.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include <stdlib.h>
#include <stdio.h>
#include <stdint.h>
#include <math.h>
#include <time.h>
#include <sys/time.h>

#define NAME "ind2sub"
#define ITERATIONS 1000000
#define REPEATS 3

/**
* Prints the TAP version.
*/
static void print_version( void ) {
	printf( "TAP version 13\n" );
}

/**
* Prints the TAP summary.
*
* @param total     total number of tests
* @param passing   total number of passing tests
*/
static void print_summary( int total, int passing ) {
	printf( "#\n" );
	printf( "1..%d\n", total ); // TAP plan
	printf( "# total %d\n", total );
	printf( "# pass  %d\n", passing );
	printf( "#\n" );
	printf( "# ok\n" );
}

/**
* Prints benchmarks results.
*
* @param elapsed   elapsed time in seconds
*/
static void print_results( double elapsed ) {
	double rate = (double)ITERATIONS / elapsed;
	printf( "  ---\n" );
	printf( "  iterations: %d\n", ITERATIONS );
	printf( "  elapsed: %0.9f\n", elapsed );
	printf( "  rate: %0.9f\n", rate );
	printf( "  ...\n" );
}

/**
* Returns a clock time.
*
* @return clock time
*/
static double tic( void ) {
	struct timeval now;
	gettimeofday( &now, NULL );
	return (double)now.tv_sec + (double)now.tv_usec/1.0e6;
}

/**
* Generates a random number on the interval [0,1).
*
* @return random number
*/
static double rand_double( void ) {
	int r = rand();
	return (double)r / ( (double)RAND_MAX + 1.0 );
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
static double benchmark1( void ) {
	double elapsed;
	int64_t idx;
	int64_t flg;
	double t;
	int i;

	int64_t ndims = 3;
	int64_t shape[] = { 10, 10, 10 };
	int64_t strides[] = { 100, -10, 1 };
	int64_t offset = 90;
	int64_t len = 1000;

	int64_t out[ 3 ];

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		idx = (int64_t)( rand_double()*len );
		flg = stdlib_ndarray_ind2sub( ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, idx, STDLIB_NDARRAY_INDEX_ERROR, out );
		if ( flg < -1 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;
	if ( flg < -1 ) {
		printf( "unexpected result\n" );
	}
	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
static double benchmark2( void ) {
	double elapsed;
	int64_t idx;
	int64_t flg;
	double t;
	int i;

	int64_t ndims = 3;
	int64_t shape[] = { 10, 10, 10 };
	int64_t strides[] = { 1, -10, 100 };
	int64_t offset = 90;
	int64_t len = 1000;

	int64_t out[ 3 ];

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		idx = (int64_t)( rand_double()*len );
		flg = stdlib_ndarray_ind2sub( ndims, shape, strides, offset, STDLIB_NDARRAY_COLUMN_MAJOR, idx, STDLIB_NDARRAY_INDEX_ERROR, out );
		if ( flg < -1 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;
	if ( flg < -1 ) {
		printf( "unexpected result\n" );
	}
	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
static double benchmark3( void ) {
	double elapsed;
	int64_t idx;
	int64_t flg;
	double t;
	int i;

	int64_t ndims = 3;
	int64_t shape[] = { 10, 10, 10 };
	int64_t strides[] = { 100, 10, 1 };
	int64_t offset = 0;
	int64_t len = 1000;

	int64_t out[ 3 ];

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		idx = (int64_t)( rand_double()*len );
		flg = stdlib_ndarray_ind2sub( ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, idx, STDLIB_NDARRAY_INDEX_ERROR, out );
		if ( flg < -1 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;
	if ( flg < -1 ) {
		printf( "unexpected result\n" );
	}
	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
static double benchmark4( void ) {
	double elapsed;
	int64_t idx;
	int64_t flg;
	double t;
	int i;

	int64_t ndims = 3;
	int64_t shape[] = { 10, 10, 10 };
	int64_t strides[] = { 1, 10, 100 };
	int64_t offset = 0;
	int64_t len = 1000;

	int64_t out[ 3 ];

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		idx = (int64_t)( rand_double()*len );
		flg = stdlib_ndarray_ind2sub( ndims, shape, strides, offset, STDLIB_NDARRAY_COLUMN_MAJOR, idx, STDLIB_NDARRAY_INDEX_ERROR, out );
		if ( flg < -1 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;
	if ( flg < -1 ) {
		printf( "unexpected result\n" );
	}
	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
static double benchmark5( void ) {
	double elapsed;
	int64_t idx;
	int64_t flg;
	double t;
	int i;

	int64_t ndims = 3;
	int64_t shape[] = { 10, 10, 10 };
	int64_t strides[] = { 100, -10, 1 };
	int64_t offset = 90;
	int64_t len = 1000;

	int64_t out[ 3 ];

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		idx = (int64_t)( (rand_double()*len*2.0)-len );
		flg = stdlib_ndarray_ind2sub( ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, idx, STDLIB_NDARRAY_INDEX_WRAP, out );
		if ( flg < -1 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;
	if ( flg < -1 ) {
		printf( "unexpected result\n" );
	}
	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
static double benchmark6( void ) {
	double elapsed;
	int64_t idx;
	int64_t flg;
	double t;
	int i;

	int64_t ndims = 3;
	int64_t shape[] = { 10, 10, 10 };
	int64_t strides[] = { 1, -10, 100 };
	int64_t offset = 90;
	int64_t len = 1000;

	int64_t out[ 3 ];

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		idx = (int64_t)( (rand_double()*len*2.0)-len );
		flg = stdlib_ndarray_ind2sub( ndims, shape, strides, offset, STDLIB_NDARRAY_COLUMN_MAJOR, idx, STDLIB_NDARRAY_INDEX_WRAP, out );
		if ( flg < -1 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;
	if ( flg < -1 ) {
		printf( "unexpected result\n" );
	}
	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
static double benchmark7( void ) {
	double elapsed;
	int64_t idx;
	int64_t flg;
	double t;
	int i;

	int64_t ndims = 3;
	int64_t shape[] = { 10, 10, 10 };
	int64_t strides[] = { 100, 10, 1 };
	int64_t offset = 0;
	int64_t len = 1000;

	int64_t out[ 3 ];

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		idx = (int64_t)( (rand_double()*len*2.0)-len );
		flg = stdlib_ndarray_ind2sub( ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, idx, STDLIB_NDARRAY_INDEX_WRAP, out );
		if ( flg < -1 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;
	if ( flg < -1 ) {
		printf( "unexpected result\n" );
	}
	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
static double benchmark8( void ) {
	double elapsed;
	int64_t idx;
	int64_t flg;
	double t;
	int i;

	int64_t ndims = 3;
	int64_t shape[] = { 10, 10, 10 };
	int64_t strides[] = { 1, 10, 100 };
	int64_t offset = 0;
	int64_t len = 1000;

	int64_t out[ 3 ];

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		idx = (int64_t)( (rand_double()*len*2.0)-len );
		flg = stdlib_ndarray_ind2sub( ndims, shape, strides, offset, STDLIB_NDARRAY_COLUMN_MAJOR, idx, STDLIB_NDARRAY_INDEX_WRAP, out );
		if ( flg < -1 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;
	if ( flg < -1 ) {
		printf( "unexpected result\n" );
	}
	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
static double benchmark9( void ) {
	double elapsed;
	int64_t idx;
	int64_t flg;
	double t;
	int i;

	int64_t ndims = 3;
	int64_t shape[] = { 10, 10, 10 };
	int64_t strides[] = { 100, -10, 1 };
	int64_t offset = 90;
	int64_t len = 1000;

	int64_t out[ 3 ];

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		idx = (int64_t)( (rand_double()*len*2.0)-len );
		flg = stdlib_ndarray_ind2sub( ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, idx, STDLIB_NDARRAY_INDEX_CLAMP, out );
		if ( flg < -1 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;
	if ( flg < -1 ) {
		printf( "unexpected result\n" );
	}
	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
static double benchmark10( void ) {
	double elapsed;
	int64_t idx;
	int64_t flg;
	double t;
	int i;

	int64_t ndims = 3;
	int64_t shape[] = { 10, 10, 10 };
	int64_t strides[] = { 1, -10, 100 };
	int64_t offset = 90;
	int64_t len = 1000;

	int64_t out[ 3 ];

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		idx = (int64_t)( (rand_double()*len*2.0)-len );
		flg = stdlib_ndarray_ind2sub( ndims, shape, strides, offset, STDLIB_NDARRAY_COLUMN_MAJOR, idx, STDLIB_NDARRAY_INDEX_CLAMP, out );
		if ( flg < -1 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;
	if ( flg < -1 ) {
		printf( "unexpected result\n" );
	}
	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
static double benchmark11( void ) {
	double elapsed;
	int64_t idx;
	int64_t flg;
	double t;
	int i;

	int64_t ndims = 3;
	int64_t shape[] = { 10, 10, 10 };
	int64_t strides[] = { 100, 10, 1 };
	int64_t offset = 0;
	int64_t len = 1000;

	int64_t out[ 3 ];

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		idx = (int64_t)( (rand_double()*len*2.0)-len );
		flg = stdlib_ndarray_ind2sub( ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, idx, STDLIB_NDARRAY_INDEX_CLAMP, out );
		if ( flg < -1 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;
	if ( flg < -1 ) {
		printf( "unexpected result\n" );
	}
	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
static double benchmark12( void ) {
	double elapsed;
	int64_t idx;
	int64_t flg;
	double t;
	int i;

	int64_t ndims = 3;
	int64_t shape[] = { 10, 10, 10 };
	int64_t strides[] = { 1, 10, 100 };
	int64_t offset = 0;
	int64_t len = 1000;

	int64_t out[ 3 ];

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		idx = (int64_t)( (rand_double()*len*2.0)-len );
		flg = stdlib_ndarray_ind2sub( ndims, shape, strides, offset, STDLIB_NDARRAY_COLUMN_MAJOR, idx, STDLIB_NDARRAY_INDEX_CLAMP, out );
		if ( flg < -1 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;
	if ( flg < -1 ) {
		printf( "unexpected result\n" );
	}
	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
static double benchmark13( void ) {
	double elapsed;
	int64_t idx;
	int64_t flg;
	double t;
	int i;

	int64_t ndims = 3;
	int64_t shape[] = { 10, 10, 10 };
	int64_t strides[] = { 100, -10, 1 };
	int64_t offset = 90;
	int64_t len = 1000;

	int64_t out[ 3 ];

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		idx = (int64_t)( (rand_double()*len*2.0)-len );
		flg = stdlib_ndarray_ind2sub( ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, idx, STDLIB_NDARRAY_INDEX_NORMALIZE, out );
		if ( flg < -1 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;
	if ( flg < -1 ) {
		printf( "unexpected result\n" );
	}
	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
static double benchmark14( void ) {
	double elapsed;
	int64_t idx;
	int64_t flg;
	double t;
	int i;

	int64_t ndims = 3;
	int64_t shape[] = { 10, 10, 10 };
	int64_t strides[] = { 1, -10, 100 };
	int64_t offset = 90;
	int64_t len = 1000;

	int64_t out[ 3 ];

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		idx = (int64_t)( (rand_double()*len*2.0)-len );
		flg = stdlib_ndarray_ind2sub( ndims, shape, strides, offset, STDLIB_NDARRAY_COLUMN_MAJOR, idx, STDLIB_NDARRAY_INDEX_NORMALIZE, out );
		if ( flg < -1 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;
	if ( flg < -1 ) {
		printf( "unexpected result\n" );
	}
	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
static double benchmark15( void ) {
	double elapsed;
	int64_t idx;
	int64_t flg;
	double t;
	int i;

	int64_t ndims = 3;
	int64_t shape[] = { 10, 10, 10 };
	int64_t strides[] = { 100, 10, 1 };
	int64_t offset = 0;
	int64_t len = 1000;

	int64_t out[ 3 ];

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		idx = (int64_t)( (rand_double()*len*2.0)-len );
		flg = stdlib_ndarray_ind2sub( ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, idx, STDLIB_NDARRAY_INDEX_NORMALIZE, out );
		if ( flg < -1 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;
	if ( flg < -1 ) {
		printf( "unexpected result\n" );
	}
	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
static double benchmark16( void ) {
	double elapsed;
	int64_t idx;
	int64_t flg;
	double t;
	int i;

	int64_t ndims = 3;
	int64_t shape[] = { 10, 10, 10 };
	int64_t strides[] = { 1, 10, 100 };
	int64_t offset = 0;
	int64_t len = 1000;

	int64_t out[ 3 ];

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		idx = (int64_t)( (rand_double()*len*2.0)-len );
		flg = stdlib_ndarray_ind2sub( ndims, shape, strides, offset, STDLIB_NDARRAY_COLUMN_MAJOR, idx, STDLIB_NDARRAY_INDEX_NORMALIZE, out );
		if ( flg < -1 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;
	if ( flg < -1 ) {
		printf( "unexpected result\n" );
	}
	return elapsed;
}

/**
* Main execution sequence.
*/
int main( void ) {
	double elapsed;
	int count;
	int i;

	count = 0;

	// Use the current time to seed the random number generator:
	srand( time( NULL ) );

	print_version();
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s:mode=error,order=row-major\n", NAME );
		elapsed = benchmark1();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s:mode=error,order=column-major\n", NAME );
		elapsed = benchmark2();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s:mode=error,order=row-major,offset=0\n", NAME );
		elapsed = benchmark3();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s:mode=error,order=column-major,offset=0\n", NAME );
		elapsed = benchmark4();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s:mode=wrap,order=row-major\n", NAME );
		elapsed = benchmark5();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s:mode=wrap,order=column-major\n", NAME );
		elapsed = benchmark6();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s:mode=wrap,order=row-major,offset=0\n", NAME );
		elapsed = benchmark7();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s:mode=wrap,order=column-major,offset=0\n", NAME );
		elapsed = benchmark8();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s:mode=clamp,order=row-major\n", NAME );
		elapsed = benchmark9();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s:mode=clamp,order=column-major\n", NAME );
		elapsed = benchmark10();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s:mode=clamp,order=row-major,offset=0\n", NAME );
		elapsed = benchmark11();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s:mode=clamp,order=column-major,offset=0\n", NAME );
		elapsed = benchmark12();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s:mode=normalize,order=row-major\n", NAME );
		elapsed = benchmark9();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s:mode=normalize,order=column-major\n", NAME );
		elapsed = benchmark10();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s:mode=normalize,order=row-major,offset=0\n", NAME );
		elapsed = benchmark11();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s:mode=normalize,order=column-major,offset=0\n", NAME );
		elapsed = benchmark12();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	print_summary( count, count );
}
