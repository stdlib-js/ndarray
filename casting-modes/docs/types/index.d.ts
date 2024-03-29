/*
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

// TypeScript Version: 4.1

/**
* Returns a list of ndarray casting modes.
*
* ## Notes
*
* -   The output array contains the following modes:
*
*     -   'none': only allow casting between identical types
*     -   'equiv': allow casting between identical and byte swapped types
*     -   'safe': only allow "safe" casts
*     -   'mostly-safe': allow "safe" casts and, for floating-point data types, downcasts
*     -   'same-kind': allow "safe" casts and casts within the same kind (e.g.,
*    between signed integers or between floats)
*     -   'unsafe': allow casting between all types (including between integers and
*    floats)
*
* @returns list of ndarray casting modes
*
* @example
* var list = modes();
* // returns [ 'none', 'equiv', 'safe', 'mostly-safe', 'same-kind', 'unsafe' ]
*/
declare function modes(): Array<string>;


// EXPORTS //

export = modes;
