/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

#include "stdlib/ndarray/base/broadcast_shapes.h"
#include <stdlib.h>
#include <stdio.h>
#include <stdint.h>
#include <math.h>
#include <time.h>
#include <sys/time.h>

#define NAME "broadcast-shapes"
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
static double benchmark( void ) {
	double elapsed;
	int8_t status;
	double t;
	int i;

	const int64_t sh1[] = { 8, 1, 6, 1 };
	const int64_t sh2[] = { 7, 1, 5 };

	const int64_t ndims[] = { 4, 3 };
	const int64_t *shapes[] = { sh1, sh2 };

	int64_t out[] = { 0, 0, 0, 0 };

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		status = stdlib_ndarray_broadcast_shapes( 2, shapes, ndims, out );
		if ( status != 0 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;
	if ( out[ 0 ] != 8 ) {
		printf( "unexpected result\n" );
	}
	if ( out[ 1 ] != 7 ) {
		printf( "unexpected result\n" );
	}
	if ( out[ 2 ] != 6 ) {
		printf( "unexpected result\n" );
	}
	if ( out[ 3 ] != 5 ) {
		printf( "unexpected result\n" );
	}
	return elapsed;
}

/**
* Main execution sequence.
*/
int main( void ) {
	double elapsed;
	int i;

	// Use the current time to seed the random number generator:
	srand( time( NULL ) );

	print_version();
	for ( i = 0; i < REPEATS; i++ ) {
		printf( "# c::native::%s::two_arrays\n", NAME );
		elapsed = benchmark();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", i+1 );
	}
	print_summary( REPEATS, REPEATS );
}
