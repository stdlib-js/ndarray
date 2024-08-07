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
var safeCasts = require( './../../../safe-casts' );
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
var debug = logger( 'ndarray-nullary-loops:script' );

// Get the current year:
var CURRENT_YEAR = currentYear().toString();

// Specify the copyright holder:
var COPYRIGHT = 'The Stdlib Authors';

// Templates:
var TMPL_HEADER = readFile( path.join( __dirname, 'templates', 'header.txt' ), FOPTS );
var TMPL_SOURCE = readFile( path.join( __dirname, 'templates', 'source.txt' ), FOPTS );
var TMPL_README = readFile( path.join( __dirname, 'templates', 'docs.txt' ), FOPTS );

// Output directories:
var INCLUDE_DIR = path.resolve( __dirname, '..', 'include', 'stdlib', 'ndarray', 'base', 'nullary' );
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
var DTYPES = filter( dtypes(), EXCLUDE_DTYPES ).sort();

// Define "special" loops, which cannot be readily generated according to standardized rules:
var SPECIAL_LOOPS = [];

// Hash containing C macro names:
var MACROS = {
	'default': 'CLBK',
	'nocast': 'CLBK_RET_NOCAST',
	'rcast': 'CLBK_RET_CAST_FCN'
};

// Regular expression to test for a "loop" file:
var RE_LOOP_FILE = /^[a-z](?:_as_[a-z]|)\.(?:h|c)$/;

// Regular expression to test for a "loop" file in the manifest.json:
var RE_MANIFEST_LOOP_FILE = /\.\/src\/[a-z](?:_as_[a-z]|)\.c$/;

// Regular expression to match output array dtype characters:
var RE_SIGNATURE = /^([a-z])/;

// Regular expression to match callback dtype characters:
var RE_CALLBACK = /_as_([a-z])$/;

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
* Tests whether a one-letter character abbreviation corresponds to a complex number data type.
*
* @private
* @param {string} ch - one-letter character abbreviation
* @returns {boolean} test result
*
* @example
* var bool = isComplexChar( 'z' );
* // returns true
*/
function isComplexChar( ch ) {
	return ( ch === 'c' || ch === 'z' );
}

/**
* Returns a callback body based on an output data type.
*
* @private
* @param {string} ch1 - one-letter character abbreviation for output data type
* @returns {string} callback body
*/
function callbackBody( ch1 ) {
	if ( isComplexChar( ch1 ) ) {
		return '// ...';
	}
	if ( ch1 === 'x' ) {
		return 'return true;';
	}
	if ( ch1 === 'd' ) {
		return 'return 10.0;';
	}
	if ( ch1 === 'f' ) {
		return 'return 10.0f;';
	}
	return 'return 10;';
}

/**
* Removes a list of elements from a provided list.
*
* @private
* @param {ArrayLikeObject} src - list to filter
* @param {ArrayLikeObject} list - items to remove
* @returns {ArrayLikeObject} filtered list
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
* Returns the intersection of two sorted lists.
*
* @private
* @param {ArrayLikeObject} list1 - first sorted list
* @param {ArrayLikeObject} list2 - second sorted list
* @returns {ArrayLikeObject} result
*
* @example
* var list1 = [ 'a', 'b', 'c', 'd' ];
* var list2 = [ 'b', 'd', 'e' ];
*
* var out = intersection( list1, list2 );
* // returns [ 'b', 'd' ]
*/
function intersection( list1, list2 ) {
	var out;
	var M;
	var N;
	var v;
	var i;
	var j;
	var k;

	M = list1.length;
	N = list2.length;

	out = [];
	k = 0;
	for ( i = 0; i < M; i++ ) {
		if ( k >= N ) {
			break;
		}
		v = list1[ i ];
		for ( j = k; j < N; j++ ) {
			if ( v === list2[ j ] ) {
				k = j + 1;
				out.push( v );
				break;
			}
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
		s = ch1; // e.g., d
		out.push( s );

		// Resolve the list of safe casts for the input dtype:
		casts = safeCasts( t1 );

		// Remove the excluded dtypes:
		casts = filter( casts, EXCLUDE_DTYPES );

		// Remove safe casts which are not among the supported output dtypes:
		casts = intersection( dtypes, casts.sort() );

		// Generate signatures for allowed casts:
		for ( j = 0; j < casts.length; j++ ) {
			t2 = casts[ j ];
			if ( t2 === t1 ) {
				// For float dtypes, allow downcasting from a higher precision...
				if ( ch1 === 'f' ) {
					out.push( ch1+'_as_d' ); // e.g., `f` => `f_as_d`
				} else if ( ch1 === 'c' ) {
					out.push( ch1+'_as_z' ); // e.g., `c` => `c_as_z`
				}
				continue;
			}
			ch2 = dtypeChar( t2 );
			out.push( ch2+'_as_'+ch1 ); // e.g., `z_as_d`
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
* @param {PositiveInteger} nb1 - bytes per element for output array
* @returns {string} updated string
*/
function defineByteArrays( tmpl, nb1 ) {
	var bytes;
	var tmp;
	var N;
	var i;

	bytes = filledarray( 0, nb1, 'generic' ).join( ', ' );
	tmpl = replace( tmpl, '{{OUTPUT_NDARRAY_BYTES_0D}}', bytes );

	for ( i = 1; i < SHAPES.length; i++ ) {
		N = numel( SHAPES[ i ] );

		tmp = '{{OUTPUT_NDARRAY_BYTES_'+i+'D}}';
		bytes = filledarray( 0, nb1*N, 'generic' ).join( ', ' );
		tmpl = replace( tmpl, tmp, bytes );
	}
	return tmpl;
}

/**
* Defines array strides in a provided template string.
*
* @private
* @param {string} tmpl - template string
* @param {PositiveInteger} nb1 - bytes per element for output array
* @returns {string} updated string
*/
function defineStrides( tmpl, nb1 ) {
	var strides;
	var tmp;
	var st;
	var i;

	for ( i = 1; i < SHAPES.length; i++ ) {
		strides = shape2strides( SHAPES[ i ], ORDER );

		tmp = '{{OUTPUT_NDARRAY_STRIDES_'+i+'D}}';
		st = gscal( strides.length, nb1, strides.slice(), 1 );
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
	if ( /x/.test( signature ) ) {
		inc.push( '#include <stdbool.h>');
	}
	if ( inc.length ) {
		file = replace( file, '{{INCLUDES}}', '\n'+inc.join( '\n' ) );
	} else {
		file = replace( file, '{{INCLUDES}}', '' );
	}
	// Ensure the appropriate header files are included in source documentation examples:
	inc = [];
	tmp = signature.substring( 3 ); // explicit callback signature; e.g., _as_c, _as_z
	if ( tmp === '' ) {
		tmp = signature.substring( 0, 1 ); // implicit callback signature; e.g., c, z, d, f, etc
	}
	if ( /c/.test( tmp ) ) {
		inc.push( '#include "stdlib/complex/float32/ctor.h"' );
	}
	if ( /z/.test( tmp ) ) {
		inc.push( '#include "stdlib/complex/float64/ctor.h"' );
	}
	if ( /x/.test( tmp ) ) {
		inc.push( '#include <stdbool.h>');
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
	file = replace( file, '{{OUTPUT_NDARRAY_DTYPE_UPPER}}', uppercase( t1 ) );
	file = replace( file, '{{OUTPUT_NDARRAY_DTYPE_LOWER}}', t1 );

	// Define the number of bytes per element for the respective arrays:
	nb1 = bytesPerElement( t1 );
	file = replace( file, '{{OUTPUT_NDARRAY_BYTES_PER_ELEMENT}}', nb1.toString() );

	// Define the array shapes:
	file = defineShapes( file );

	// Define underlying byte arrays:
	file = defineByteArrays( file, nb1 );

	// Define array strides:
	file = defineStrides( file, nb1 );

	// Resolve the callback parameter data types:
	match2 = signature.match( RE_CALLBACK );
	if ( match2 ) {
		ch1 = match2[ 1 ];
		ct1 = dtype2c( char2dtype( ch1 ) );
	} else {
		ct1 = dtype2c( t1 );
	}
	file = replace( file, '{{CALLBACK_RETURN_DTYPE}}', ct1 );
	file = replace( file, '{{CALLBACK_BODY}}', callbackBody( ch1 ) );

	// Resolve the 0D callback expression:
	if ( match2 ) {
		if ( ch1 === 'z' ) {
			if ( match1[ 1 ] === 'c' ) { // e.g., c_as_z
				tmp = format( 'stdlib_complex128_to_%s( f() )', t1 );
			} else {
				// Based on safe casting rules, we shouldn't reach here.
				throw new Error( format( 'unexpected error. Signature: %s', signature ) );
			}
		} else if ( ch1 === 'c' ) { // e.g., z_as_c
			if ( match1[ 1 ] === 'z' ) {
				tmp = format( 'stdlib_complex128_from_%s( f() )', char2dtype( ch1 ) );
			} else {
				// Based on safe casting rules, we shouldn't reach here.
				throw new Error( format( 'unexpected error. Signature: %s', signature ) );
			}
		} else if ( match1[ 1 ] === 'z' ) { // e.g., z_as_d
			tmp = format( 'stdlib_complex128_from_%s( f() )', char2dtype( ch1 ) );
		} else if ( match1[ 1 ] === 'c' ) { // e.g., c_as_f
			tmp = format( 'stdlib_complex64_from_%s( f() )', char2dtype( ch1 ) );
		} else { // e.g., d_as_f, f_as_d
			tmp = format( '(%s)f()', dtype2c( t1 ) );
		}
	} else { // e.g., c, z, f, d, b, etc
		tmp = format( 'f()' );
	}
	file = replace( file, '{{CALLBACK_EXPRESSION_0D}}', tmp );

	// Resolve the loop macro:
	if ( match2 ) {
		args = [ dtype2c( t1 ) ];
		if ( isComplexChar( match1[ 1 ] ) ) {
			macro = MACROS.rcast;
			if ( ch1 === 'z' ) {
				args.push( 'stdlib_complex128_to_'+t1 ); // e.g., `c_as_z`
			} else {
				args.push( 'stdlib_'+t1+'_from_'+char2dtype( ch1 ) ); // e.g., `z_as_d`
			}
		} else { // e.g., `f_as_d`
			macro = MACROS.default;
		}
	} else if ( /[cz]/.test( signature ) ) {
		macro = MACROS.nocast;
		args = [ ct1 ];
	} else {
		macro = MACROS.default;
		args = [ ct1 ];
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
	tmp = signature.substring( 3 ); // explicit callback signature; e.g., _as_c, _as_z
	if ( tmp === '' ) {
		tmp = signature.substring( 0, 1 ); // implicit callback signature; e.g., c, z, d, f, etc
	}
	if ( /c/.test( tmp ) ) {
		inc.push( '#include "stdlib/complex/float32/ctor.h"' );
	}
	if ( /z/.test( tmp ) ) {
		inc.push( '#include "stdlib/complex/float64/ctor.h"' );
	}
	if ( /x/.test( tmp ) ) {
		inc.push( '#include <stdbool.h>');
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
	doc = replace( doc, '{{OUTPUT_NDARRAY_DTYPE_UPPER}}', uppercase( t1 ) );

	// Define the number of bytes per element for the respective arrays:
	nb1 = bytesPerElement( t1 );
	doc = replace( doc, '{{OUTPUT_NDARRAY_BYTES_PER_ELEMENT}}', nb1.toString() );

	// Define the array shapes:
	doc = defineShapes( doc );

	// Define underlying byte arrays:
	doc = defineByteArrays( doc, nb1 );

	// Define array strides:
	doc = defineStrides( doc, nb1 );

	// Resolve the callback parameter data types:
	match = signature.match( RE_CALLBACK );
	if ( match ) {
		ch1 = match[ 1 ];
		ct1 = dtype2c( char2dtype( ch1 ) );
	} else {
		ct1 = dtype2c( t1 );
	}
	doc = replace( doc, '{{CALLBACK_RETURN_DTYPE}}', ct1 );
	doc = replace( doc, '{{CALLBACK_BODY}}', callbackBody( ch1 ) );

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
		list.push( '#include "nullary/'+sig+'.h"' );
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
