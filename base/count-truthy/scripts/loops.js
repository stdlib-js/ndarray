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
var writeFile = require( '@stdlib/fs/write-file' ).sync;
var dtypeChar = require( './../../../base/dtype-char' );
var dtypeDesc = require( './../../../base/dtype-desc' );
var DTYPES = require( './lib/dtypes.js' );


// VARIABLES //

var FOPTS = {
	'encoding': 'utf8'
};

// Logger:
var debug = logger( 'ndarray-count-truthy-loops:script' );

// README file:
var README = path.resolve( __dirname, '..', 'README.md' );


// FUNCTIONS //

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
* @throws {Error} unexpected error
*/
function updateREADME() {
	var parts;
	var file;
	var out;
	var err;

	file = readFile( README, FOPTS );
	if ( file instanceof Error ) {
		throw file;
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
	out.push( parts[ 1 ] );

	err = writeFile( README, out.join( '\n' ), FOPTS );
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
	debug( 'Updating README file: %s', README );
	updateREADME();
}

require( './inline_loops.js' ); // eslint-disable-line stdlib/no-unassigned-require
main();
