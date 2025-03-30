#!/usr/bin/env node

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

'use strict';

// MODULES //

var path = require( 'path' );
var logger = require( 'debug' );
var readFile = require( '@stdlib/fs/read-file' ).sync;
var readJSON = require( '@stdlib/fs/read-json' ).sync;
var writeFile = require( '@stdlib/fs/write-file' ).sync;
var replace = require( '@stdlib/string/replace' );
var substringBefore = require( '@stdlib/string/substring-before' );
var substringAfter = require( '@stdlib/string/substring-after' );
var uppercase = require( '@stdlib/string/uppercase' );
var safeCasts = require( './../../../safe-casts' );
var dtypeChar = require( './../../../base/dtype-char' );
var dtype2c = require( './../../../base/dtype2c' );
var char2dtype = require( './../../../base/char2dtype' );
var bytesPerElement = require( './../../../base/bytes-per-element' );
var currentYear = require( '@stdlib/time/current-year' );
var format = require( '@stdlib/string/format' );
var isComplexChar = require( './lib/is_complex_char.js' );
var filter = require( './lib/filter.js' );
var defineStrides = require( './lib/define_strides.js' );
var defineShapes = require( './lib/define_shapes.js' );
var defineByteArrays = require( './lib/define_byte_arrays.js' );
var removeFilesByRegExp = require( './lib/remove_files.js' );
var EXCLUDE_DTYPES = require( './lib/exclude_dtypes.js' );
var DTYPES = require( './lib/dtypes.js' );


// VARIABLES //

var FOPTS = {
	'encoding': 'utf8'
};

// Logger:
var debug = logger( 'ndarray-every-predicate-loops:script' );

// Get the current year:
var CURRENT_YEAR = currentYear().toString();

// Specify the copyright holder:
var COPYRIGHT = 'The Stdlib Authors';

// Templates:
var TMPL_HEADER = readFile( path.join( __dirname, 'templates', 'predicate', 'header.txt' ), FOPTS );
var TMPL_SOURCE = readFile( path.join( __dirname, 'templates', 'predicate', 'source.txt' ), FOPTS );
var TMPL_README = readFile( path.join( __dirname, 'templates', 'predicate', 'docs.txt' ), FOPTS );

// Output directories:
var INCLUDE_DIR = path.resolve( __dirname, '..', 'include', 'stdlib', 'ndarray', 'base', 'every' );
var SRC_DIR = path.resolve( __dirname, '..', 'src', 'predicate' );

// Main header file:
var INCLUDE_MAIN = INCLUDE_DIR + '.h';

// Manifest file:
var MANIFEST = path.resolve( __dirname, '..', 'manifest.json' );

// README file:
var README = path.resolve( __dirname, '..', 'README.md' );

// Define "special" loops, which cannot be readily generated according to standardized rules:
var SPECIAL_LOOPS = [];

// Hash containing C macro names:
var MACROS = {
	'default': 'CLBK',
	'cast': 'CLBK_ARG_CAST',
	'acast': 'CLBK_ARG_CAST_FCN'
};

// Regular expression to test for a "loop" file:
var RE_LOOP_FILE = /^[a-z]_[a-z](?:_as_[a-z]_[a-z]|)\.(?:h|c)$/;

// Regular expression to test for a "loop" file in the manifest.json:
var RE_MANIFEST_LOOP_FILE = /\.\/src\/predicate\/[a-z]_[a-z](?:_as_[a-z]_[a-z]|)\.c$/;

// Regular expression to match input and output array dtype characters:
var RE_SIGNATURE = /^([a-z])_([a-z])/;

// Regular expression to match callback dtype characters:
var RE_CALLBACK = /_as_([a-z])_([a-z])$/;

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
* Returns a callback body based on an output data type.
*
* @private
* @param {string} ch1 - one-letter character abbreviation for output data type
* @returns {string} callback body
*/
function callbackBody( ch1 ) {
	if ( ch1 === 'c' ) {
		return 'return ( stdlib_complex64_real( x ) == 0.0f && stdlib_complex64_imag( x ) === 0.0f );';
	}
	if ( ch1 === 'z' ) {
		return 'return ( stdlib_complex128_real( x ) == 0.0 && stdlib_complex128_imag( x ) === 0.0 );';
	}
	if ( ch1 === 'x' ) {
		return 'return x;';
	}
	if ( ch1 === 'd' ) {
		return 'return x == 0.0;';
	}
	if ( ch1 === 'f' ) {
		return 'return x == 0.0f;';
	}
	return 'return x == 0;';
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
		s = ch1+'_x'; // e.g., d_x
		out.push( s );

		// Resolve the list of safe casts for the input dtype:
		casts = safeCasts( t1 );

		// Remove the excluded dtypes:
		casts = filter( casts, EXCLUDE_DTYPES );

		// Generate signatures for allowed casts:
		for ( j = 0; j < casts.length; j++ ) {
			t2 = casts[ j ];
			if ( t2 === t1 ) {
				continue;
			}
			ch2 = dtypeChar( t2 );
			out.push( s+'_as_'+ch2+'_x' ); // e.g., `b_x_as_i_x`
		}
	}
	// Append any special loops:
	for ( i = 0; i < SPECIAL_LOOPS.length; i++ ) {
		out.push( SPECIAL_LOOPS[ i ] );
	}
	return out.sort();
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

	fpath = path.join( INCLUDE_DIR, 'predicate', signature+'.h' );

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
	var match2;
	var macro;
	var fpath;
	var file;
	var args;
	var err;
	var inc;
	var tmp;
	var ch1;
	var ct1;
	var nb1;
	var t1;

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
	if ( inc.length ) {
		file = replace( file, '{{INCLUDES}}', '\n'+inc.join( '\n' ) );
	} else {
		file = replace( file, '{{INCLUDES}}', '' );
	}
	// Ensure the appropriate header files are included in source documentation examples:
	inc = [];
	tmp = signature.substring( 3 ); // explicit callback signature; e.g., _as_d_x, _as_z_x
	if ( tmp === '' ) {
		tmp = signature.substring( 0, 1 ); // implicit callback signature; e.g., c, z, d, f, etc
	}
	if ( /c/.test( tmp ) ) {
		inc.push( '#include "stdlib/complex/float32/ctor.h"' );
	}
	if ( /z/.test( tmp ) ) {
		inc.push( '#include "stdlib/complex/float64/ctor.h"' );
	}
	if ( inc.length ) {
		file = replace( file, '{{EXAMPLE_INCLUDES}}', '\n* '+inc.join( '\n* ' ) );
	} else {
		file = replace( file, '{{EXAMPLE_INCLUDES}}', '' );
	}
	// Resolve the array data types:
	match1 = signature.match( RE_SIGNATURE );
	ch1 = match1[ 1 ];
	t1 = char2dtype( ch1 );

	// Define array data types:
	file = replace( file, '{{INPUT_NDARRAY_1_DTYPE_UPPER}}', uppercase( t1 ) );
	file = replace( file, '{{INPUT_NDARRAY_1_DTYPE_LOWER}}', t1 );

	// Define the input array C data type:
	file = replace( file, '{{INPUT_NDARRAY_1_CTYPE}}', dtype2c( t1 ) );

	// Define the number of bytes per element for the respective arrays:
	nb1 = bytesPerElement( t1 );
	file = replace( file, '{{INPUT_NDARRAY_1_BYTES_PER_ELEMENT}}', nb1.toString() );

	// Define the array shapes:
	file = defineShapes( file, SHAPES );

	// Define underlying byte arrays:
	file = defineByteArrays( file, SHAPES, nb1 );

	// Define array strides:
	file = defineStrides( file, SHAPES, nb1, ORDER );

	// Resolve the callback parameter data types:
	match2 = signature.match( RE_CALLBACK );
	if ( match2 ) {
		ch1 = match2[ 1 ];
		ct1 = dtype2c( char2dtype( ch1 ) );
	} else {
		ct1 = dtype2c( t1 );
	}
	file = replace( file, '{{CALLBACK_PARAM_1_DTYPE}}', ct1 );
	file = replace( file, '{{CALLBACK_BODY}}', callbackBody( ch1 ) );

	// Resolve the 0D callback expression:
	if ( match2 ) { // (match1[1])_x_as_(ch1)_x
		if ( ch1 === 'z' ) { // e.g., c_x_as_z_x
			tmp = format( 'f( stdlib_complex128_from_%s( v ) )', t1 );
		} else if ( ch1 === 'c' ) { // e.g., f_x_as_c_x
			tmp = format( 'f( stdlib_complex64_from_%s( v ) )', t1 );
		} else { // e.g., d_x_as_f_x, f_x_as_d_x
			tmp = format( 'f( (%s)v )', ct1 );
		}
	} else { // e.g., c, z, f, d, b, etc
		tmp = format( 'f( v )' );
	}
	file = replace( file, '{{CALLBACK_EXPRESSION_0D}}', tmp );

	// Resolve the loop macro:
	if ( match2 ) { // (match1[1])_x_as_(ch1)_x
		args = [ dtype2c( t1 ) ];
		if ( isComplexChar( ch1 ) ) {
			macro = MACROS.acast; // e.g., `c_x_as_z_x`
			if ( ch1 === 'z' ) {
				args.push( 'stdlib_complex128_from_'+t1 ); // e.g., `c_x_as_z_x`
			} else { // ch1 === 'c'
				args.push( 'stdlib_complex64_from_'+t1 ); // e.g., `f_x_as_c_x`
			}
		} else { // e.g., `f_x_as_d_x`
			macro = MACROS.cast;
			args.push( ct1 );
		}
	} else {
		macro = MACROS.default;
		args = [ ct1 ];
	}
	file = replace( file, '{{PREDICATE_LOOP_MACRO}}', macro );
	file = replace( file, '{{PREDICATE_LOOP_MACRO_ARGUMENTS}}', args.join( ', ' ) );

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
	var inc;
	var doc;
	var ch1;
	var ct1;
	var tmp;
	var nb1;
	var t1;

	doc = replace( TMPL_README, '{{SIGNATURE}}', signature );

	// Ensure appropriate header files are included in documentation examples:
	inc = [];
	tmp = signature.substring( 3 ); // explicit callback signature; e.g., _as_d_x, _as_z_x
	if ( tmp === '' ) {
		tmp = signature.substring( 0, 1 ); // implicit callback signature; e.g., c, z, d, f, etc
	}
	if ( /c/.test( tmp ) ) {
		inc.push( '#include "stdlib/complex/float32/ctor.h"' );
	}
	if ( /z/.test( tmp ) ) {
		inc.push( '#include "stdlib/complex/float64/ctor.h"' );
	}
	if ( inc.length ) {
		doc = replace( doc, '{{EXAMPLE_INCLUDES}}', '\n'+inc.join( '\n' ) );
	} else {
		doc = replace( doc, '{{EXAMPLE_INCLUDES}}', '' );
	}
	// Resolve the array data types:
	match = signature.match( RE_SIGNATURE );
	ch1 = match[ 1 ];
	t1 = char2dtype( ch1 );

	// Define array data types:
	doc = replace( doc, '{{INPUT_NDARRAY_1_DTYPE_UPPER}}', uppercase( t1 ) );

	// Define the number of bytes per element for the respective arrays:
	nb1 = bytesPerElement( t1 );
	doc = replace( doc, '{{INPUT_NDARRAY_1_BYTES_PER_ELEMENT}}', nb1.toString() );

	// Define the array shapes:
	doc = defineShapes( doc, SHAPES );

	// Define underlying byte arrays:
	doc = defineByteArrays( doc, SHAPES, nb1 );

	// Define array strides:
	doc = defineStrides( doc, SHAPES, nb1, ORDER );

	// Resolve the callback parameter data types:
	match = signature.match( RE_CALLBACK );
	if ( match ) {
		ch1 = match[ 1 ];
		ct1 = dtype2c( char2dtype( ch1 ) );
	} else {
		ct1 = dtype2c( t1 );
	}
	doc = replace( doc, '{{CALLBACK_PARAM_1_DTYPE}}', ct1 );
	doc = replace( doc, '{{CALLBACK_BODY}}', callbackBody( ch1 ) );

	return doc;
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
	parts = file.split( '\n<!-- predicate-loops -->' );
	out.push( parts[ 0 ] );
	out.push( '<!-- predicate-loops -->' );
	out.push( '' );
	out.push( docs.join( '\n' ) );

	parts = parts[ 1 ].split( '<!-- ./predicate-loops -->\n' );
	out.push( '<!-- ./predicate-loops -->' );
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
		list.push( '#include "every/predicate/'+sig+'.h"' );
	}
	file = [
		substringBefore( file, '\n// BEGIN PREDICATE LOOPS' ),
		'// BEGIN PREDICATE LOOPS',
		list.join( '\n' ),
		'// END PREDICATE LOOPS',
		substringAfter( file, '// END PREDICATE LOOPS\n' )
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
		list.push( './src/predicate/'+signatures[ i ]+'.c' );
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
		l.sort();

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
	var dir;

	debug( 'Data types: %s', DTYPES.join( ', ' ) );

	// Generate the list of loop signatures:
	sigs = signatures( DTYPES );
	debug( 'Signatures: %s', '\n'+sigs.join( '\n' ) );

	// Remove loop files from output directories:
	dir = path.join( INCLUDE_DIR, 'predicate' );
	debug( 'Clearing include directory: %s', dir );
	removeFilesByRegExp( dir, RE_LOOP_FILE );

	debug( 'Clearing source directory: %s', SRC_DIR );
	removeFilesByRegExp( SRC_DIR, RE_LOOP_FILE );

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
