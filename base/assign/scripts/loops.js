#!/usr/bin/env node

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

// MODULES //

var path = require( 'path' );
var logger = require( 'debug' );
var readDir = require( '@stdlib/fs/read-dir' ).sync;
var unlink = require( '@stdlib/fs/unlink' ).sync;
var readFile = require( '@stdlib/fs/read-file' ).sync;
var readJSON = require( '@stdlib/fs/read-json' ).sync;
var writeFile = require( '@stdlib/fs/write-file' ).sync;
var replace = require( '@stdlib/string/replace' );
var substringBefore = require( '@stdlib/string/substring-before' );
var substringAfter = require( '@stdlib/string/substring-after' );
var uppercase = require( '@stdlib/string/uppercase' );
var dtypes = require( './../../../dtypes' );
var mostlySafeCasts = require( './../../../mostly-safe-casts' );
var dtypeChar = require( './../../../base/dtype-char' );
var dtypeDesc = require( './../../../base/dtype-desc' );
var dtype2c = require( './../../../base/dtype2c' );
var char2dtype = require( './../../../base/char2dtype' );
var bytesPerElement = require( './../../../base/bytes-per-element' );
var shape2strides = require( './../../../base/shape2strides' );
var numel = require( './../../../base/numel' );
var gscal = require( '@stdlib/blas/base/gscal' );
var filledarray = require( '@stdlib/array/filled' );
var currentYear = require( '@stdlib/time/current-year' );
var format = require( '@stdlib/string/format' );


// VARIABLES //

var FOPTS = {
	'encoding': 'utf8'
};

// Logger:
var debug = logger( 'ndarray-assign-loops:script' );

// Get the current year:
var CURRENT_YEAR = currentYear().toString();

// Specify the copyright holder:
var COPYRIGHT = 'The Stdlib Authors';

// Templates:
var TMPL_HEADER = readFile( path.join( __dirname, 'templates', 'header.txt' ), FOPTS );
var TMPL_SOURCE = readFile( path.join( __dirname, 'templates', 'source.txt' ), FOPTS );
var TMPL_README = readFile( path.join( __dirname, 'templates', 'docs.txt' ), FOPTS );

// Output directories:
var INCLUDE_DIR = path.resolve( __dirname, '..', 'include', 'stdlib', 'ndarray', 'base', 'assign' );
var SRC_DIR = path.resolve( __dirname, '..', 'src' );

// Main header file:
var INCLUDE_MAIN = INCLUDE_DIR + '.h';

// Manifest file:
var MANIFEST = path.resolve( __dirname, '..', 'manifest.json' );

// README file:
var README = path.resolve( __dirname, '..', 'README.md' );

// Data types to exclude when generating loops:
var EXCLUDE_DTYPES = [ 'binary', 'generic', 'uint8c' ];

// Resolve a list of dtypes for which we want to create loops:
var DTYPES = filter( dtypes(), EXCLUDE_DTYPES );

// Define "special" loops, which cannot be readily generated according to standardized rules:
var SPECIAL_LOOPS = [
	// Support callbacks which operate on signed integers, but whose return values are always positive and can be cast to unsigned integers of the same or greater bit width:
	'i_u',
	'k_t',
	'k_u',
	's_b',
	's_t',
	's_u'
];

// Hash containing C macro names:
var MACROS = {
	'nocast': 'NOCAST',
	'cast': 'CAST',
	'fcast': 'CAST_FCN'
};

// Regular expression to test for a "loop" file:
var RE_LOOP_FILE = /^[a-z]_[a-z]\.(?:h|c)$/;

// Regular expression to test for a "loop" file in the manifest.json:
var RE_MANIFEST_LOOP_FILE = /\.\/src\/[a-z]_[a-z]\.c$/;

// Regular expression to match input and output array dtype characters:
var RE_SIGNATURE = /^([a-z])_([a-z])/;

// Specify array shapes:
var SHAPES = [
	[],
	[ 3 ],
	[ 2, 2 ],
	[ 2, 2, 2 ],
	[ 1, 2, 2, 2 ],
	[ 1, 1, 2, 2, 2 ],
	[ 1, 1, 1, 2, 2, 2 ],
	[ 1, 1, 1, 1, 2, 2, 2 ],
	[ 1, 1, 1, 1, 1, 2, 2, 2 ],
	[ 1, 1, 1, 1, 1, 1, 2, 2, 2 ],
	[ 1, 1, 1, 1, 1, 1, 1, 2, 2, 2 ]
];

// Array order:
var ORDER = 'row-major';


// FUNCTIONS //

/**
* Removes a list of elements from a provided list.
*
* @private
* @param {ArrayLikeObject} src - list to filter
* @param {ArrayLikeObject} list - items to remove
* @returns {Array} filtered list
*
* @example
* var src = [ 'a', 'b', 'c', 'd' ];
* var list = [ 'b', 'd' ];
*
* var out = filter( src, list );
* // returns [ 'a', 'c' ]
*/
function filter( src, list ) {
	var out;
	var M;
	var N;
	var v;
	var i;
	var j;

	M = src.length;
	N = list.length;

	out = [];
	for ( i = 0; i < M; i++ ) {
		v = src[ i ];
		for ( j = 0; j < N; j++ ) {
			if ( v === list[ j ] ) {
				break;
			}
		}
		if ( j === N ) {
			out.push( v );
		}
	}
	return out;
}

/**
* Removes loop files from a directory.
*
* @private
* @param {string} dir - directory
*/
function removeLoopFiles( dir ) {
	var list;
	var i;

	list = readDir( dir );
	for ( i = 0; i < list.length; i++ ) {
		if ( RE_LOOP_FILE.test( list[ i ] ) ) {
			unlink( path.join( dir, list[ i ] ) );
		}
	}
}

/**
* Generates a list of loop signatures from a list of data types.
*
* @private
* @param {StringArray} dtypes - list of data types
* @returns {StringArray} list of loop signatures
*/
function signatures( dtypes ) {
	var casts;
	var out;
	var ch1;
	var ch2;
	var t1;
	var t2;
	var N;
	var s;
	var i;
	var j;

	N = dtypes.length;

	// Generate the list of signatures:
	out = [];
	for ( i = 0; i < N; i++ ) {
		t1 = dtypes[ i ];

		// Resolve single-letter dtype abbreviation:
		ch1 = dtypeChar( t1 );

		// Generate the input/output array signature:
		s = ch1+'_'+ch1; // e.g., d_d
		out.push( s );

		// Resolve the list of (mostly) safe casts for the input dtype:
		casts = mostlySafeCasts( t1 );

		// Remove the excluded dtypes:
		casts = filter( casts, EXCLUDE_DTYPES );

		// Generate signatures for allowed casts:
		for ( j = 0; j < casts.length; j++ ) {
			t2 = casts[ j ];
			if ( t2 === t1 ) {
				continue;
			}
			ch2 = dtypeChar( t2 );
			s = ch1+'_'+ch2;

			out.push( s ); // e.g., `b_i`
		}
	}
	// Append any special loops:
	for ( i = 0; i < SPECIAL_LOOPS.length; i++ ) {
		out.push( SPECIAL_LOOPS[ i ] );
	}
	return out.sort();
}

/**
* Defines byte arrays in a provided template string.
*
* @private
* @param {string} tmpl - template string
* @param {PositiveInteger} nb1 - bytes per element for input array
* @param {PositiveInteger} nb2 - bytes per element for output array
* @returns {string} updated string
*/
function defineByteArrays( tmpl, nb1, nb2 ) {
	var bytes;
	var tmp;
	var N;
	var i;

	bytes = filledarray( 0, nb1, 'generic' ).join( ', ' );
	tmpl = replace( tmpl, '{{INPUT_NDARRAY_1_BYTES_0D}}', bytes );

	bytes = filledarray( 0, nb2, 'generic' ).join( ', ' );
	tmpl = replace( tmpl, '{{OUTPUT_NDARRAY_BYTES_0D}}', bytes );

	for ( i = 1; i < SHAPES.length; i++ ) {
		N = numel( SHAPES[ i ] );

		tmp = '{{INPUT_NDARRAY_1_BYTES_'+i+'D}}';
		bytes = filledarray( 0, nb1*N, 'generic' ).join( ', ' );
		tmpl = replace( tmpl, tmp, bytes );

		tmp = '{{OUTPUT_NDARRAY_BYTES_'+i+'D}}';
		bytes = filledarray( 0, nb2*N, 'generic' ).join( ', ' );
		tmpl = replace( tmpl, tmp, bytes );
	}
	return tmpl;
}

/**
* Defines array strides in a provided template string.
*
* @private
* @param {string} tmpl - template string
* @param {PositiveInteger} nb1 - bytes per element for input array
* @param {PositiveInteger} nb2 - bytes per element for output array
* @returns {string} updated string
*/
function defineStrides( tmpl, nb1, nb2 ) {
	var strides;
	var tmp;
	var st;
	var i;

	for ( i = 1; i < SHAPES.length; i++ ) {
		strides = shape2strides( SHAPES[ i ], ORDER );

		tmp = '{{INPUT_NDARRAY_1_STRIDES_'+i+'D}}';
		st = gscal( strides.length, nb1, strides.slice(), 1 );
		tmpl = replace( tmpl, tmp, st.join( ', ' ) );

		tmp = '{{OUTPUT_NDARRAY_STRIDES_'+i+'D}}';
		st = gscal( strides.length, nb2, strides.slice(), 1 );
		tmpl = replace( tmpl, tmp, st.join( ', ' ) );
	}
	return tmpl;
}

/**
* Defines array shapes in a provided template string.
*
* @private
* @param {string} tmpl - template string
* @returns {string} updated string
*/
function defineShapes( tmpl ) {
	var i;
	for ( i = 1; i < SHAPES.length; i++ ) {
		tmpl = replace( tmpl, '{{NDARRAY_SHAPE_'+i+'D}}', SHAPES[ i ].join( ', ' ) );
	}
	return tmpl;
}

/**
* Creates a header file for a provided loop signature.
*
* @private
* @param {string} signature - loop signature
* @throws {Error} unexpected error
*/
function createHeaderFile( signature ) {
	var fpath;
	var file;
	var err;

	file = replace( TMPL_HEADER, '{{YEAR}}', CURRENT_YEAR );
	file = replace( file, '{{COPYRIGHT}}', COPYRIGHT );
	file = replace( file, '{{INCLUDE_GUARD}}', uppercase( signature ) );
	file = replace( file, '{{SIGNATURE}}', signature );

	fpath = path.join( INCLUDE_DIR, signature+'.h' );

	debug( 'Creating header file: %s', fpath );
	err = writeFile( fpath, file, FOPTS );
	if ( err ) {
		throw err;
	}
}

/**
* Creates header files for a list of loop signatures.
*
* @private
* @param {StringArray} signatures - list of loop signatures
*/
function createHeaderFiles( signatures ) {
	var i;
	for ( i = 0; i < signatures.length; i++ ) {
		createHeaderFile( signatures[ i ] );
	}
}

/**
* Creates a source file for a provided loop signature.
*
* @private
* @param {string} signature - loop signature
* @throws {Error} unexpected error
*/
function createSourceFile( signature ) {
	var match1;
	var macro;
	var fpath;
	var file;
	var args;
	var err;
	var inc;
	var tmp;
	var ch1;
	var ch2;
	var ct1;
	var ct2;
	var nb1;
	var nb2;
	var t1;
	var t2;

	file = replace( TMPL_SOURCE, '{{YEAR}}', CURRENT_YEAR );
	file = replace( file, '{{COPYRIGHT}}', COPYRIGHT );
	file = replace( file, '{{SIGNATURE}}', signature );

	// Ensure the appropriate header files are included in source files:
	inc = [];
	if ( /c/.test( signature ) ) {
		inc.push( '#include "stdlib/complex/float32/ctor.h"' );
	}
	if ( /z/.test( signature ) ) {
		inc.push( '#include "stdlib/complex/float64/ctor.h"' );
	}
	if ( /x/.test( signature ) ) {
		inc.push( '#include <stdbool.h>' );
	}
	if ( inc.length ) {
		file = replace( file, '{{INCLUDES}}', '\n'+inc.join( '\n' ) );
	} else {
		file = replace( file, '{{INCLUDES}}', '' );
	}
	// Ensure the appropriate header files are included in source documentation examples:
	file = replace( file, '{{EXAMPLE_INCLUDES}}', '' );

	// Resolve the array data types:
	match1 = signature.match( RE_SIGNATURE );
	ch1 = match1[ 1 ];
	t1 = char2dtype( ch1 );
	ch2 = match1[ 2 ];
	t2 = char2dtype( ch2 );

	// Define array data types:
	file = replace( file, '{{INPUT_NDARRAY_1_DTYPE_UPPER}}', uppercase( t1 ) );
	file = replace( file, '{{OUTPUT_NDARRAY_DTYPE_UPPER}}', uppercase( t2 ) );

	file = replace( file, '{{INPUT_NDARRAY_1_DTYPE_LOWER}}', t1 );
	file = replace( file, '{{OUTPUT_NDARRAY_DTYPE_LOWER}}', t2 );

	// Define the input array C data type:
	file = replace( file, '{{INPUT_NDARRAY_1_CTYPE}}', dtype2c( t1 ) );

	// Define the number of bytes per element for the respective arrays:
	nb1 = bytesPerElement( t1 );
	file = replace( file, '{{INPUT_NDARRAY_1_BYTES_PER_ELEMENT}}', nb1.toString() );

	nb2 = bytesPerElement( t2 );
	file = replace( file, '{{OUTPUT_NDARRAY_BYTES_PER_ELEMENT}}', nb2.toString() );

	// Define the array shapes:
	file = defineShapes( file );

	// Define underlying byte arrays:
	file = defineByteArrays( file, nb1, nb2 );

	// Define array strides:
	file = defineStrides( file, nb1, nb2 );

	// Resolve C data types:
	ct1 = dtype2c( t1 );
	ct2 = dtype2c( t2 );

	// Resolve the 0D expression:
	if ( /[cz]/.test( signature ) ) {
		if ( ch1 === ch2 ) { // e.g., z_z, c_c
			tmp = 'v';
		} else if ( ch2 === 'z' ) { // e.g., c_z, d_z, u_z
			tmp = format( 'stdlib_complex128_from_%s( v )', char2dtype( ch1 ) );// e.g., stdlib_complex128_from_float64( v )
		} else if ( ch2 === 'c' ) {
			if ( ch1 === 'z' ) { // e.g., z_c
				tmp = 'stdlib_complex128_to_complex64( v )';
			} else { // e.g., f_c
				tmp = format( 'stdlib_complex64_from_%s( v )', char2dtype( ch1 ) );
			}
		} else { // e.g., z_d, c_f
			// Based on type promotion rules and conventions, we shouldn't reach here.
		}
	} else if ( ch1 === ch2 ) { // e.g., d_d, f_f, b_b
		tmp = 'v';
	} else { // e.g., b_d, f_d
		tmp = format( '(%s)v', ct2 ); // e.g., (double)v
	}
	file = replace( file, '{{EXPRESSION_0D}}', tmp );

	// Resolve the loop macro:
	if ( /[cz]/.test( signature ) ) {
		// E.g., z_z, c_c, c_z, f_c, d_z, u_z, #_(c|z), etc.
		if ( ch1 === ch2 ) { // e.g., z_z, c_c
			macro = MACROS.nocast;
			args = [ ct1, ct2 ];
		} else if ( ch2 === 'z' ) { // e.g., c_z, d_z, u_z
			macro = MACROS.fcast;
			args = [ ct1, ct2, 'stdlib_complex128_from_'+char2dtype( ch1 ) ];
		} else if ( ch2 === 'c' ) {
			macro = MACROS.fcast;
			args = [ ct1, ct2 ];
			if ( ch1 === 'z' ) { // e.g., z_c
				args.push( 'stdlib_complex128_to_complex64' );
			} else { // e.g., f_c
				args.push( 'stdlib_complex64_from_'+char2dtype( ch1 ) );
			}
		} else { // e.g., z_d
			throw new Error( 'unexpected error. Should not reach this branch according to type promotion rules.' );
		}
	} else {
		macro = MACROS.cast;
		args = [ ct1, ct2 ];
	}
	file = replace( file, '{{LOOP_MACRO}}', macro );
	file = replace( file, '{{LOOP_MACRO_ARGUMENTS}}', args.join( ', ' ) );

	// Create the source file:
	fpath = path.join( SRC_DIR, signature+'.c' );
	debug( 'Creating source file: %s', fpath );
	err = writeFile( fpath, file, FOPTS );
	if ( err ) {
		throw err;
	}
}

/**
* Creates source files for a list of loop signatures.
*
* @private
* @param {StringArray} signatures - list of loop signatures
*/
function createSourceFiles( signatures ) {
	var i;
	for ( i = 0; i < signatures.length; i++ ) {
		createSourceFile( signatures[ i ] );
	}
}

/**
* Generates README documentation for a loop interface.
*
* @private
* @param {string} signature - loop signature
* @returns {string} documentation
*/
function createDoc( signature ) {
	var match;
	var doc;
	var ch1;
	var ch2;
	var nb1;
	var nb2;
	var t1;
	var t2;

	doc = replace( TMPL_README, '{{SIGNATURE}}', signature );

	// Ensure appropriate header files are included in documentation examples:
	doc = replace( doc, '{{EXAMPLE_INCLUDES}}', '' );

	// Resolve the array data types:
	match = signature.match( RE_SIGNATURE );
	ch1 = match[ 1 ];
	t1 = char2dtype( ch1 );
	ch2 = match[ 2 ];
	t2 = char2dtype( ch2 );

	// Define array data types:
	doc = replace( doc, '{{INPUT_NDARRAY_1_DTYPE_UPPER}}', uppercase( t1 ) );
	doc = replace( doc, '{{OUTPUT_NDARRAY_DTYPE_UPPER}}', uppercase( t2 ) );

	// Define the number of bytes per element for the respective arrays:
	nb1 = bytesPerElement( t1 );
	doc = replace( doc, '{{INPUT_NDARRAY_1_BYTES_PER_ELEMENT}}', nb1.toString() );

	nb2 = bytesPerElement( t2 );
	doc = replace( doc, '{{OUTPUT_NDARRAY_BYTES_PER_ELEMENT}}', nb2.toString() );

	// Define the array shapes:
	doc = defineShapes( doc );

	// Define underlying byte arrays:
	doc = defineByteArrays( doc, nb1, nb2 );

	// Define array strides:
	doc = defineStrides( doc, nb1, nb2 );

	return doc;
}

/**
* Returns a character code list item.
*
* @private
* @param {string} dtype - data type
* @returns {string} list item
*/
function charCodeListItem( dtype ) {
	return [
		'-   **',
		dtypeChar( dtype ),
		'**: `',
		dtype,
		'` (',
		dtypeDesc( dtype ),
		').'
	].join( '' );
}

/**
* Returns a list of character code descriptions.
*
* @private
* @param {StringArray} dtypes - list of data types
* @returns {StringArray} list of character code descriptions
*/
function charCodeList( dtypes ) {
	var out;
	var i;

	out = [];
	for ( i = 0; i < dtypes.length; i++ ) {
		out.push( charCodeListItem( dtypes[ i ] ) );
	}
	return out;
}

/**
* Update the package README.
*
* @private
* @param {StringArray} signatures - list of (sorted) loop signatures
* @throws {Error} unexpected error
*/
function updateREADME( signatures ) {
	var parts;
	var file;
	var docs;
	var out;
	var err;
	var i;

	file = readFile( README, FOPTS );
	if ( file instanceof Error ) {
		throw file;
	}
	docs = [];
	for ( i = 0; i < signatures.length; i++ ) {
		docs.push( createDoc( signatures[ i ] ) );
	}
	out = [];
	parts = file.split( '\n<!-- charcodes -->' );
	out.push( parts[ 0 ] );
	out.push( '<!-- charcodes -->' );
	out.push( '' );
	out.push( charCodeList( DTYPES ).join( '\n' ) );
	out.push( '' );

	parts = parts[ 1 ].split( '<!-- ./charcodes -->\n' );
	out.push( '<!-- ./charcodes -->' );

	parts = parts[ 1 ].split( '\n<!-- loops -->' );
	out.push( parts[ 0 ] );
	out.push( '<!-- loops -->' );
	out.push( '' );
	out.push( docs.join( '\n' ) );

	parts = parts[ 1 ].split( '<!-- ./loops -->\n' );
	out.push( '<!-- ./loops -->' );
	out.push( parts[ 1 ] );

	err = writeFile( README, out.join( '\n' ), FOPTS );
	if ( err ) {
		throw err;
	}
}

/**
* Updates the main header file.
*
* @private
* @param {StringArray} signatures - list of (sorted) loop signatures
* @throws {Error} unexpected error
*/
function updateMainHeader( signatures ) {
	var file;
	var list;
	var err;
	var sig;
	var ch;
	var i;

	file = readFile( INCLUDE_MAIN, FOPTS );
	if ( file instanceof Error ) {
		throw file;
	}
	list = [];
	ch = signatures[ 0 ].charAt( 0 );
	for ( i = 0; i < signatures.length; i++ ) {
		sig = signatures[ i ];
		if ( sig.charAt( 0 ) !== ch ) {
			ch = sig.charAt( 0 );
			list.push( '' );
		}
		list.push( '#include "assign/'+sig+'.h"' );
	}
	file = [
		substringBefore( file, '\n// BEGIN LOOPS' ),
		'// BEGIN LOOPS',
		list.join( '\n' ),
		'// END LOOPS',
		substringAfter( file, '// END LOOPS\n' )
	].join( '\n' );

	err = writeFile( INCLUDE_MAIN, file, FOPTS );
	if ( err ) {
		throw err;
	}
}

/**
* Updates the package manifest.
*
* @private
* @param {StringArray} signatures - list of (sorted) loop signatures
* @throws {Error} unexpected error
*/
function updateManifest( signatures ) {
	var file;
	var list;
	var tmp;
	var err;
	var l;
	var i;
	var j;

	file = readJSON( MANIFEST, FOPTS );
	if ( file instanceof Error ) {
		throw file;
	}
	list = [];
	for ( i = 0; i < signatures.length; i++ ) {
		list.push( './src/'+signatures[ i ]+'.c' );
	}
	for ( j = 0; j < file.confs.length; j++ ) {
		l = list.slice();

		// Copy over non-signature source files...
		tmp = file.confs[ j ].src;
		for ( i = 0; i < tmp.length; i++ ) {
			if ( RE_MANIFEST_LOOP_FILE.test( tmp[ i ] ) === false ) {
				l.push( tmp[ i ] );
			}
		}
		// Replace the list of source files:
		file.confs[ j ].src = l;
	}
	err = writeFile( MANIFEST, JSON.stringify( file, null, 2 )+'\n', FOPTS );
	if ( err ) {
		throw err;
	}
}


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var sigs;

	debug( 'Data types: %s', DTYPES.join( ', ' ) );

	// Generate the list of loop signatures:
	sigs = signatures( DTYPES );
	debug( 'Signatures: %s', '\n'+sigs.join( '\n' ) );

	// Remove loop files from output directories:
	debug( 'Clearing include directory: %s', INCLUDE_DIR );
	removeLoopFiles( INCLUDE_DIR );

	debug( 'Clearing source directory: %s', SRC_DIR );
	removeLoopFiles( SRC_DIR );

	// Create header files for the list of loop signatures:
	debug( 'Creating header files...' );
	createHeaderFiles( sigs );

	// Create source files for the list of loop signatures:
	debug( 'Creating source files...' );
	createSourceFiles( sigs );

	// Update the main header file to include the loop header files:
	debug( 'Updating main header file: %s', INCLUDE_MAIN );
	updateMainHeader( sigs );

	// Update the package manifest to include the loop source files:
	debug( 'Updating manifest file: %s', MANIFEST );
	updateManifest( sigs );

	// Update the package README to include the loop interfaces:
	debug( 'Updating README file: %s', README );
	updateREADME( sigs );

	debug( 'Finished.' );
}

main();
