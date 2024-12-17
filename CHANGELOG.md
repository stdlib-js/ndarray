# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2024-12-17)

<section class="packages">

### Packages

<section class="package" id="ndarray-unreleased">

#### [@stdlib/ndarray](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray)

<details>

<section class="features">

##### Features

-   [`323e4e5`](https://github.com/stdlib-js/stdlib/commit/323e4e5e0f1af8130e8a6462abf619999c955f88) - update namespace TypeScript declarations [(#3977)](https://github.com/stdlib-js/stdlib/pull/3977)
-   [`9d912a3`](https://github.com/stdlib-js/stdlib/commit/9d912a3e992cb9c5fe272a3aecc55293efbc0647) - add `ndarray2json` to namespace
-   [`1a202e3`](https://github.com/stdlib-js/stdlib/commit/1a202e3605b10cd01bf9654f8356c72c5c8a8186) - update namespace TypeScript declarations [(#3916)](https://github.com/stdlib-js/stdlib/pull/3916)
-   [`dbfd8f5`](https://github.com/stdlib-js/stdlib/commit/dbfd8f5c81d11be2142ebfc4f2f0bb0316ba7478) - add `filterMap` to namespace
-   [`cbc4d3f`](https://github.com/stdlib-js/stdlib/commit/cbc4d3f7514b7213cad4f9d2ca5d916e13eeffa5) - add `reject` to namespace
-   [`831de1b`](https://github.com/stdlib-js/stdlib/commit/831de1b4ba21cda245c073a5412bf1a2e9d7598d) - add `map` and `filter` to namespace
-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec) - update namespace TypeScript declarations [(#3190)](https://github.com/stdlib-js/stdlib/pull/3190)

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec): update namespace declarations

    -   To migrate, users should consult the corresponding packages containing the respective implementations to determine what is breaking. The primary breakages come from the `blas/*` namespace, where we recently refactored how top-level BLAS APIs operate on input arguments.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-unreleased">

#### [@stdlib/ndarray/base](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base)

<details>

<section class="features">

##### Features

-   [`58e795d`](https://github.com/stdlib-js/stdlib/commit/58e795db467b7bd1d3dc6c5847f91a97fed2ccff) - update namespace TypeScript declarations [(#3937)](https://github.com/stdlib-js/stdlib/pull/3937)
-   [`14427c7`](https://github.com/stdlib-js/stdlib/commit/14427c79bc62f82b16cbadc9d34749901e48d105) - add `fill`, `map`, and `toReversed` to namespace
-   [`a0d6619`](https://github.com/stdlib-js/stdlib/commit/a0d66193409576538d0f16aa89cbaeedec7898be) - add `minSignedIntegerDataType` and `minUnsignedIntegerDataType` to namespace
-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec) - update namespace TypeScript declarations [(#3190)](https://github.com/stdlib-js/stdlib/pull/3190)

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec): update namespace declarations

    -   To migrate, users should consult the corresponding packages containing the respective implementations to determine what is breaking. The primary breakages come from the `blas/*` namespace, where we recently refactored how top-level BLAS APIs operate on input arguments.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-unreleased">

#### [@stdlib/ndarray/base/assert](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert)

<details>

<section class="features">

##### Features

-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec) - update namespace TypeScript declarations [(#3190)](https://github.com/stdlib-js/stdlib/pull/3190)

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec): update namespace declarations

    -   To migrate, users should consult the corresponding packages containing the respective implementations to determine what is breaking. The primary breakages come from the `blas/*` namespace, where we recently refactored how top-level BLAS APIs operate on input arguments.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-ctor-unreleased">

#### [@stdlib/ndarray/base/ctor](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/ctor)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`aea44c9`](https://github.com/stdlib-js/stdlib/commit/aea44c9c8699a4d748c0db70d4a60801bfc03c40) - update loop limit

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-map-unreleased">

#### [@stdlib/ndarray/base/map](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/map)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`b4502fb`](https://github.com/stdlib-js/stdlib/commit/b4502fbc4da03910f86c66e68b53e93e99e3e933) - remove perf logic in order to ensure expected indices in callback

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-min-signed-integer-dtype-unreleased">

#### [@stdlib/ndarray/base/min-signed-integer-dtype](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/min-signed-integer-dtype)

<details>

<section class="features">

##### Features

-   [`c3bffe5`](https://github.com/stdlib-js/stdlib/commit/c3bffe513318480e2ce4645bb05895df8148ee1e) - add `ndarray/base/min-signed-integer-dtype`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-min-unsigned-integer-dtype-unreleased">

#### [@stdlib/ndarray/base/min-unsigned-integer-dtype](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/min-unsigned-integer-dtype)

<details>

<section class="features">

##### Features

-   [`97e8c1a`](https://github.com/stdlib-js/stdlib/commit/97e8c1aff4f7c1a3b0946d15354a926d82e2120a) - add `ndarray/base/min-unsigned-integer-dtype`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-filter-unreleased">

#### [@stdlib/ndarray/filter](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/filter)

<details>

<section class="features">

##### Features

-   [`d481f26`](https://github.com/stdlib-js/stdlib/commit/d481f264f68deee3497bf73480c2c88efc3a725f) - add `ndarray/filter`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-filter-map-unreleased">

#### [@stdlib/ndarray/filter-map](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/filter-map)

<details>

<section class="features">

##### Features

-   [`6ff153f`](https://github.com/stdlib-js/stdlib/commit/6ff153f9023cffac527b3243489e6413e989e940) - add `ndarray/filter-map`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-iter-unreleased">

#### [@stdlib/ndarray/iter](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/iter)

<details>

<section class="features">

##### Features

-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec) - update namespace TypeScript declarations [(#3190)](https://github.com/stdlib-js/stdlib/pull/3190)

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec): update namespace declarations

    -   To migrate, users should consult the corresponding packages containing the respective implementations to determine what is breaking. The primary breakages come from the `blas/*` namespace, where we recently refactored how top-level BLAS APIs operate on input arguments.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-iter-indices-unreleased">

#### [@stdlib/ndarray/iter/indices](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/iter/indices)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`a299630`](https://github.com/stdlib-js/stdlib/commit/a299630d08a49ba51c6e3501fbd7d215338ca23a) - avoid potential external mutation

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-map-unreleased">

#### [@stdlib/ndarray/map](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/map)

<details>

<section class="features">

##### Features

-   [`3ea906b`](https://github.com/stdlib-js/stdlib/commit/3ea906bb64f93b4d323bc91f99a176d2729a2cc9) - add `ndarray/map` [(#3314)](https://github.com/stdlib-js/stdlib/pull/3314)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-reject-unreleased">

#### [@stdlib/ndarray/reject](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/reject)

<details>

<section class="features">

##### Features

-   [`43ccbfb`](https://github.com/stdlib-js/stdlib/commit/43ccbfbf9cd0ffcdd92fbe6ae0cc60db4f46ea6e) - add `ndarray/reject`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-to-fancy-unreleased">

#### [@stdlib/ndarray/to-fancy](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/to-fancy)

<details>

<section class="features">

##### Features

-   [`fb1ca76`](https://github.com/stdlib-js/stdlib/commit/fb1ca76ccf2f324c45b24411aa3fd1088a7a7b6e) - add `ndarray/to-fancy`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-to-json-unreleased">

#### [@stdlib/ndarray/to-json](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/to-json)

<details>

<section class="features">

##### Features

-   [`ae80da2`](https://github.com/stdlib-js/stdlib/commit/ae80da29fdbfd1be7541df6607715b77b06f1019) - add `ndarray/to-json`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

</section>

<!-- /.packages -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec): update namespace declarations

    -   To migrate, users should consult the corresponding packages containing the respective implementations to determine what is breaking. The primary breakages come from the `blas/*` namespace, where we recently refactored how top-level BLAS APIs operate on input arguments.

</section>

<!-- /.breaking-changes -->

<section class="contributors">

### Contributors

A total of 3 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Muhammad Haris
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`323e4e5`](https://github.com/stdlib-js/stdlib/commit/323e4e5e0f1af8130e8a6462abf619999c955f88) - **feat:** update namespace TypeScript declarations [(#3977)](https://github.com/stdlib-js/stdlib/pull/3977) _(by stdlib-bot, Philipp Burckhardt)_
-   [`c5a9ae2`](https://github.com/stdlib-js/stdlib/commit/c5a9ae2f9d4076665eba406ab1d420ba9df1fbdc) - **docs:** update namespace table of contents [(#3979)](https://github.com/stdlib-js/stdlib/pull/3979) _(by stdlib-bot, Philipp Burckhardt)_
-   [`9d912a3`](https://github.com/stdlib-js/stdlib/commit/9d912a3e992cb9c5fe272a3aecc55293efbc0647) - **feat:** add `ndarray2json` to namespace _(by Athan Reines)_
-   [`ae80da2`](https://github.com/stdlib-js/stdlib/commit/ae80da29fdbfd1be7541df6607715b77b06f1019) - **feat:** add `ndarray/to-json` _(by Athan Reines)_
-   [`aea44c9`](https://github.com/stdlib-js/stdlib/commit/aea44c9c8699a4d748c0db70d4a60801bfc03c40) - **fix:** update loop limit _(by Athan Reines)_
-   [`58e795d`](https://github.com/stdlib-js/stdlib/commit/58e795db467b7bd1d3dc6c5847f91a97fed2ccff) - **feat:** update namespace TypeScript declarations [(#3937)](https://github.com/stdlib-js/stdlib/pull/3937) _(by stdlib-bot, Philipp Burckhardt)_
-   [`c106b69`](https://github.com/stdlib-js/stdlib/commit/c106b69cc141efc8c32e79d55ad8acf07f3c9c0a) - **docs:** update namespace table of contents [(#3939)](https://github.com/stdlib-js/stdlib/pull/3939) _(by stdlib-bot, Philipp Burckhardt)_
-   [`58f02bf`](https://github.com/stdlib-js/stdlib/commit/58f02bf605d6879cd80152f11f913451df2ad494) - **docs:** fix comment _(by Athan Reines)_
-   [`baffefb`](https://github.com/stdlib-js/stdlib/commit/baffefb25177147fa3bafa5c1d0562a7528d5054) - **docs:** fix comment _(by Athan Reines)_
-   [`0546f39`](https://github.com/stdlib-js/stdlib/commit/0546f395abecb502fd703aa364e758bd733cd18e) - **docs:** disable lint rule _(by Athan Reines)_
-   [`5079aa3`](https://github.com/stdlib-js/stdlib/commit/5079aa30f3aa11908c78aac6750b4272852dbb4d) - **docs:** disable lint rule _(by Athan Reines)_
-   [`e81185b`](https://github.com/stdlib-js/stdlib/commit/e81185b4a0fa3537ab4a8a16644b7fa90bb184a3) - **refactor:** rely on `ndarray/to-fancy` for implementation logic _(by Athan Reines)_
-   [`fb1ca76`](https://github.com/stdlib-js/stdlib/commit/fb1ca76ccf2f324c45b24411aa3fd1088a7a7b6e) - **feat:** add `ndarray/to-fancy` _(by Athan Reines)_
-   [`1a202e3`](https://github.com/stdlib-js/stdlib/commit/1a202e3605b10cd01bf9654f8356c72c5c8a8186) - **feat:** update namespace TypeScript declarations [(#3916)](https://github.com/stdlib-js/stdlib/pull/3916) _(by stdlib-bot, Philipp Burckhardt)_
-   [`ef82c21`](https://github.com/stdlib-js/stdlib/commit/ef82c2133cc2cb955eb1fc73da0209eda97de59a) - **docs:** update namespace table of contents [(#3918)](https://github.com/stdlib-js/stdlib/pull/3918) _(by stdlib-bot, Philipp Burckhardt)_
-   [`14427c7`](https://github.com/stdlib-js/stdlib/commit/14427c79bc62f82b16cbadc9d34749901e48d105) - **feat:** add `fill`, `map`, and `toReversed` to namespace _(by Athan Reines)_
-   [`a0d6619`](https://github.com/stdlib-js/stdlib/commit/a0d66193409576538d0f16aa89cbaeedec7898be) - **feat:** add `minSignedIntegerDataType` and `minUnsignedIntegerDataType` to namespace _(by Athan Reines)_
-   [`97e8c1a`](https://github.com/stdlib-js/stdlib/commit/97e8c1aff4f7c1a3b0946d15354a926d82e2120a) - **feat:** add `ndarray/base/min-unsigned-integer-dtype` _(by Athan Reines)_
-   [`c3bffe5`](https://github.com/stdlib-js/stdlib/commit/c3bffe513318480e2ce4645bb05895df8148ee1e) - **feat:** add `ndarray/base/min-signed-integer-dtype` _(by Athan Reines)_
-   [`0d6bf75`](https://github.com/stdlib-js/stdlib/commit/0d6bf755cd3fcefbdf4751bc1f8e011bedefc057) - **refactor:** resolve error constructor and add todos _(by Athan Reines)_
-   [`dbfd8f5`](https://github.com/stdlib-js/stdlib/commit/dbfd8f5c81d11be2142ebfc4f2f0bb0316ba7478) - **feat:** add `filterMap` to namespace _(by Athan Reines)_
-   [`6ff153f`](https://github.com/stdlib-js/stdlib/commit/6ff153f9023cffac527b3243489e6413e989e940) - **feat:** add `ndarray/filter-map` _(by Athan Reines)_
-   [`8d1be60`](https://github.com/stdlib-js/stdlib/commit/8d1be60be03dae4a293d0a2967ab2539d759a498) - **refactor:** remove unnecessary variable _(by Athan Reines)_
-   [`07c9202`](https://github.com/stdlib-js/stdlib/commit/07c92021666d2b439a239397d54a43e5785b3360) - **refactor:** remove unnecessary variable _(by Athan Reines)_
-   [`4cc1f54`](https://github.com/stdlib-js/stdlib/commit/4cc1f54e1c601aefcf00bfa03948f2909eba60be) - **docs:** update example _(by Athan Reines)_
-   [`3cd740e`](https://github.com/stdlib-js/stdlib/commit/3cd740ed3e550ee7411139fef930a96216cff5d9) - **docs:** add example _(by Athan Reines)_
-   [`855b8c2`](https://github.com/stdlib-js/stdlib/commit/855b8c255abba003e9505aa3a80105a2e2b6b3a7) - **docs:** add example _(by Athan Reines)_
-   [`47d03ca`](https://github.com/stdlib-js/stdlib/commit/47d03ca557edea6a39c8fa3cc3262ad85d04cd56) - **docs:** add example _(by Athan Reines)_
-   [`cbc4d3f`](https://github.com/stdlib-js/stdlib/commit/cbc4d3f7514b7213cad4f9d2ca5d916e13eeffa5) - **feat:** add `reject` to namespace _(by Athan Reines)_
-   [`43ccbfb`](https://github.com/stdlib-js/stdlib/commit/43ccbfbf9cd0ffcdd92fbe6ae0cc60db4f46ea6e) - **feat:** add `ndarray/reject` _(by Athan Reines)_
-   [`1cc3e09`](https://github.com/stdlib-js/stdlib/commit/1cc3e095080947f8fdd61ea2217f9b3031b9f93b) - **docs:** fix annotation _(by Athan Reines)_
-   [`7efc6f3`](https://github.com/stdlib-js/stdlib/commit/7efc6f3c8f899974f7d11cb9e06f65f90d5caaa9) - **bench:** fix symbol name _(by Athan Reines)_
-   [`17430f4`](https://github.com/stdlib-js/stdlib/commit/17430f4a7f15da00c9288b2b4d0577b6b7f8007f) - **docs:** add note _(by Athan Reines)_
-   [`354a147`](https://github.com/stdlib-js/stdlib/commit/354a1472bd69ab26c020aa7ba1df043c88e985b2) - **docs:** add note _(by Athan Reines)_
-   [`80542fd`](https://github.com/stdlib-js/stdlib/commit/80542fd459075dc2c49f6e529a21bd661129899e) - **docs:** remove note _(by Athan Reines)_
-   [`831de1b`](https://github.com/stdlib-js/stdlib/commit/831de1b4ba21cda245c073a5412bf1a2e9d7598d) - **feat:** add `map` and `filter` to namespace _(by Athan Reines)_
-   [`d481f26`](https://github.com/stdlib-js/stdlib/commit/d481f264f68deee3497bf73480c2c88efc3a725f) - **feat:** add `ndarray/filter` _(by Athan Reines)_
-   [`082a45a`](https://github.com/stdlib-js/stdlib/commit/082a45a9540b2af89f8cb3bc0b11e56b14e3ff8c) - **style:** fix missing empty line _(by Athan Reines)_
-   [`849c335`](https://github.com/stdlib-js/stdlib/commit/849c33579ea43f853fee93368431275d5481140a) - **docs:** fix description _(by Athan Reines)_
-   [`b4502fb`](https://github.com/stdlib-js/stdlib/commit/b4502fbc4da03910f86c66e68b53e93e99e3e933) - **fix:** remove perf logic in order to ensure expected indices in callback _(by Athan Reines)_
-   [`59814ef`](https://github.com/stdlib-js/stdlib/commit/59814ef8589df3b9792a05f4ca46dcb92c9782e4) - **test:** add argument tests _(by Athan Reines)_
-   [`2825b42`](https://github.com/stdlib-js/stdlib/commit/2825b42e8cd7483d15dfed1c6b389bfcb86d7ca0) - **docs:** update related packages sections [(#3898)](https://github.com/stdlib-js/stdlib/pull/3898) _(by stdlib-bot)_
-   [`a299630`](https://github.com/stdlib-js/stdlib/commit/a299630d08a49ba51c6e3501fbd7d215338ca23a) - **fix:** avoid potential external mutation _(by Athan Reines)_
-   [`2d9de13`](https://github.com/stdlib-js/stdlib/commit/2d9de13da6f54c36452274c5179e1354c7be3f34) - **docs:** fix description _(by Athan Reines)_
-   [`3ea906b`](https://github.com/stdlib-js/stdlib/commit/3ea906bb64f93b4d323bc91f99a176d2729a2cc9) - **feat:** add `ndarray/map` [(#3314)](https://github.com/stdlib-js/stdlib/pull/3314) _(by Muhammad Haris, Athan Reines)_
-   [`cf7d38a`](https://github.com/stdlib-js/stdlib/commit/cf7d38ae3e7bce92cf47778f7b1c3da731121d77) - **docs:** update related packages sections [(#3527)](https://github.com/stdlib-js/stdlib/pull/3527) _(by stdlib-bot)_
-   [`bf5643f`](https://github.com/stdlib-js/stdlib/commit/bf5643fb1a3f32a60903d8e210f71571e609119f) - **docs:** update related packages sections [(#3404)](https://github.com/stdlib-js/stdlib/pull/3404) _(by stdlib-bot)_
-   [`a80835b`](https://github.com/stdlib-js/stdlib/commit/a80835b8f9959a15751adfce5572bb2b29cfeeed) - **refactor:** declare parameters and pointer as const _(by Philipp Burckhardt)_
-   [`6c020d3`](https://github.com/stdlib-js/stdlib/commit/6c020d33665c4aec232196fd86214b296ddc7d36) - **chore:** use relative paths to load package.json file _(by Philipp Burckhardt)_
-   [`b6a2b0b`](https://github.com/stdlib-js/stdlib/commit/b6a2b0b27dc8cc1e9fc02d9679a3ce468cf49b9d) - **docs:** update namespace table of contents [(#3192)](https://github.com/stdlib-js/stdlib/pull/3192) _(by stdlib-bot, Philipp Burckhardt)_
-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec) - **feat:** update namespace TypeScript declarations [(#3190)](https://github.com/stdlib-js/stdlib/pull/3190) _(by stdlib-bot, Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.3.3">

## 0.3.3 (2024-11-05)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.3.2">

## 0.3.2 (2024-11-05)

<section class="packages">

### Packages

<section class="package" id="ndarray-base-assert-v0.3.2">

#### [@stdlib/ndarray/base/assert](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert)

<details>

<section class="features">

##### Features

-   [`98e4809`](https://github.com/stdlib-js/stdlib/commit/98e480997058c3f21d3016b97d25f4c4e62231b9) - add `isBooleanDataType` to namespace
-   [`3e7f2ca`](https://github.com/stdlib-js/stdlib/commit/3e7f2ca3c987040575b732129281c384c453e0b8) - add `hasEqualShape` to namespace

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-has-equal-shape-v0.3.2">

#### [@stdlib/ndarray/base/assert/has-equal-shape](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/has-equal-shape)

<details>

<section class="features">

##### Features

-   [`6e74647`](https://github.com/stdlib-js/stdlib/commit/6e74647839e3ca184dd7df80df9bd0ede9505469) - add `ndarray/base/assert/has-equal-shape`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-fill-v0.3.2">

#### [@stdlib/ndarray/base/fill](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/fill)

<details>

<section class="features">

##### Features

-   [`6a6bc1d`](https://github.com/stdlib-js/stdlib/commit/6a6bc1da925c3c3f24463cf0d381d0d38e84868b) - add `ndarray/base/fill` [(#2817)](https://github.com/stdlib-js/stdlib/pull/2817)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-reverse-v0.3.2">

#### [@stdlib/ndarray/base/reverse](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/reverse)

<details>

<section class="features">

##### Features

-   [`8bcb738`](https://github.com/stdlib-js/stdlib/commit/8bcb738f0fc355eae92b40541cc61550fda1fbef) - add `ndarray/base/to-reversed` [(#2861)](https://github.com/stdlib-js/stdlib/pull/2861)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-slice-dimension-from-v0.3.2">

#### [@stdlib/ndarray/base/slice-dimension-from](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/slice-dimension-from)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`7f368f6`](https://github.com/stdlib-js/stdlib/commit/7f368f6c3f4cea444a304a62616cea36a5f143eb) - remove unused imports from TS declaration file

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-slice-dimension-to-v0.3.2">

#### [@stdlib/ndarray/base/slice-dimension-to](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/slice-dimension-to)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`7f368f6`](https://github.com/stdlib-js/stdlib/commit/7f368f6c3f4cea444a304a62616cea36a5f143eb) - remove unused imports from TS declaration file

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-to-reversed-v0.3.2">

#### [@stdlib/ndarray/base/to-reversed](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/to-reversed)

<details>

<section class="features">

##### Features

-   [`8bcb738`](https://github.com/stdlib-js/stdlib/commit/8bcb738f0fc355eae92b40541cc61550fda1fbef) - add `ndarray/base/to-reversed` [(#2861)](https://github.com/stdlib-js/stdlib/pull/2861)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-transpose-v0.3.2">

#### [@stdlib/ndarray/base/transpose](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/transpose)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`7f368f6`](https://github.com/stdlib-js/stdlib/commit/7f368f6c3f4cea444a304a62616cea36a5f143eb) - remove unused imports from TS declaration file

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-iter-column-entries-v0.3.2">

#### [@stdlib/ndarray/iter/column-entries](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/iter/column-entries)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`7f368f6`](https://github.com/stdlib-js/stdlib/commit/7f368f6c3f4cea444a304a62616cea36a5f143eb) - remove unused imports from TS declaration file

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-iter-matrix-entries-v0.3.2">

#### [@stdlib/ndarray/iter/matrix-entries](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/iter/matrix-entries)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`7f368f6`](https://github.com/stdlib-js/stdlib/commit/7f368f6c3f4cea444a304a62616cea36a5f143eb) - remove unused imports from TS declaration file

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-iter-row-entries-v0.3.2">

#### [@stdlib/ndarray/iter/row-entries](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/iter/row-entries)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`7f368f6`](https://github.com/stdlib-js/stdlib/commit/7f368f6c3f4cea444a304a62616cea36a5f143eb) - remove unused imports from TS declaration file

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-slice-dimension-from-v0.3.2">

#### [@stdlib/ndarray/slice-dimension-from](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/slice-dimension-from)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`7f368f6`](https://github.com/stdlib-js/stdlib/commit/7f368f6c3f4cea444a304a62616cea36a5f143eb) - remove unused imports from TS declaration file

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-slice-dimension-to-v0.3.2">

#### [@stdlib/ndarray/slice-dimension-to](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/slice-dimension-to)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`7f368f6`](https://github.com/stdlib-js/stdlib/commit/7f368f6c3f4cea444a304a62616cea36a5f143eb) - remove unused imports from TS declaration file

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

</section>

<!-- /.packages -->

<section class="contributors">

### Contributors

A total of 3 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Muhammad Haris
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`99cca3d`](https://github.com/stdlib-js/stdlib/commit/99cca3dc8a07ef39b9821468b8a0f7a4d6cacf72) - **chore:** declare parameter as const array _(by Philipp Burckhardt)_
-   [`2c4e5d8`](https://github.com/stdlib-js/stdlib/commit/2c4e5d824e0c5dc8fd536bf79ff565cee100ce46) - **build:** disable additional lint rule in TS tests _(by Philipp Burckhardt)_
-   [`abf0407`](https://github.com/stdlib-js/stdlib/commit/abf040787f6598438b0100a729a8331b7f80f62f) - **chore:** resolve lint errors in TS files _(by Philipp Burckhardt)_
-   [`7f368f6`](https://github.com/stdlib-js/stdlib/commit/7f368f6c3f4cea444a304a62616cea36a5f143eb) - **fix:** remove unused imports from TS declaration file _(by Philipp Burckhardt)_
-   [`975147f`](https://github.com/stdlib-js/stdlib/commit/975147f3125c786ec1672acb3d2564ca16eaa790) - **docs:** fix TSDoc lint errors _(by Philipp Burckhardt)_
-   [`8f72b43`](https://github.com/stdlib-js/stdlib/commit/8f72b432c0fc81a78641d5689722ecc9671c6f02) - **style:** add missing spaces around parentheses _(by Philipp Burckhardt)_
-   [`37ef5f4`](https://github.com/stdlib-js/stdlib/commit/37ef5f4f43d4fe03643b693a40b166420cbb07fd) - **refactor:** use dedicated array utility _(by Athan Reines)_
-   [`2e00b1f`](https://github.com/stdlib-js/stdlib/commit/2e00b1f79b968e3436fbb2cf406b308029cd7156) - **refactor:** use dedicated array utility _(by Athan Reines)_
-   [`bcc9d29`](https://github.com/stdlib-js/stdlib/commit/bcc9d29f11ad54bd388625ae257668304d829a5c) - **refactor:** use dedicated array utility _(by Athan Reines)_
-   [`8436f67`](https://github.com/stdlib-js/stdlib/commit/8436f675a80d4824d8571b2b1ce91c5c17e3938d) - **refactor:** use dedicated array utility _(by Athan Reines)_
-   [`b675172`](https://github.com/stdlib-js/stdlib/commit/b675172498c9449ca0e957f4af9694b8bc0f8dc6) - **refactor:** use dedicated array utility _(by Athan Reines)_
-   [`6e9f42e`](https://github.com/stdlib-js/stdlib/commit/6e9f42e4c912485d9896eaa16c88b70fd3688e97) - **docs:** harmonize list formatting in repl.txt and ensure starting newline _(by Philipp Burckhardt)_
-   [`f387603`](https://github.com/stdlib-js/stdlib/commit/f387603e739f88a38af3263ce6ff675ad903ee8c) - **docs:** consistently use declarative instead of imperative sentences outside of intros _(by Philipp Burckhardt)_
-   [`95ef049`](https://github.com/stdlib-js/stdlib/commit/95ef04997f2f0f98406dbdf59c5c0ff757c5637a) - **docs:** fix grammar _(by Athan Reines)_
-   [`037a7a8`](https://github.com/stdlib-js/stdlib/commit/037a7a81819bbbf2c0d784678b42d423f47d62ce) - **refactor:** use `const` qualifier and update examples _(by Athan Reines)_
-   [`00651e7`](https://github.com/stdlib-js/stdlib/commit/00651e7847283dadfb29ef6c90addd78380a3c5b) - **refactor:** use `const` qualifier and update examples _(by Athan Reines)_
-   [`114f651`](https://github.com/stdlib-js/stdlib/commit/114f651d1f29cc711adf2990a10d56470650af48) - **refactor:** use base array assertion utility _(by Athan Reines)_
-   [`98e4809`](https://github.com/stdlib-js/stdlib/commit/98e480997058c3f21d3016b97d25f4c4e62231b9) - **feat:** add `isBooleanDataType` to namespace _(by Athan Reines)_
-   [`3e7f2ca`](https://github.com/stdlib-js/stdlib/commit/3e7f2ca3c987040575b732129281c384c453e0b8) - **feat:** add `hasEqualShape` to namespace _(by Athan Reines)_
-   [`6e74647`](https://github.com/stdlib-js/stdlib/commit/6e74647839e3ca184dd7df80df9bd0ede9505469) - **feat:** add `ndarray/base/assert/has-equal-shape` _(by Athan Reines)_
-   [`5debe82`](https://github.com/stdlib-js/stdlib/commit/5debe8216a1449be68fad01af52d896e63163191) - **test:** add tests to `ndarray/base/map` [(#2810)](https://github.com/stdlib-js/stdlib/pull/2810) _(by Muhammad Haris, Athan Reines)_
-   [`0c5f1bc`](https://github.com/stdlib-js/stdlib/commit/0c5f1bc12678832bf4aafddbf2a960e98612327b) - **chore:** rename folder from benchmarks to benchmark _(by Philipp Burckhardt)_
-   [`6a6bc1d`](https://github.com/stdlib-js/stdlib/commit/6a6bc1da925c3c3f24463cf0d381d0d38e84868b) - **feat:** add `ndarray/base/fill` [(#2817)](https://github.com/stdlib-js/stdlib/pull/2817) _(by Muhammad Haris, Athan Reines)_
-   [`8bcb738`](https://github.com/stdlib-js/stdlib/commit/8bcb738f0fc355eae92b40541cc61550fda1fbef) - **feat:** add `ndarray/base/to-reversed` [(#2861)](https://github.com/stdlib-js/stdlib/pull/2861) _(by Muhammad Haris, Athan Reines)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.3.1">

## 0.3.1 (2024-08-18)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.3.0">

## 0.3.0 (2024-08-17)

<section class="packages">

### Packages

<section class="package" id="ndarray-v0.3.0">

#### [@stdlib/ndarray](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray)

<details>

<section class="features">

##### Features

-   [`ba0c5d0`](https://github.com/stdlib-js/stdlib/commit/ba0c5d0a00c8f2b5eff6321b14dd62398be26be8) - add `ndarraylike2ndarray` to namespace
-   [`de17de3`](https://github.com/stdlib-js/stdlib/commit/de17de32867461079aae166d5cecbecb1da7f922) - update namespace TypeScript declarations [(#2593)](https://github.com/stdlib-js/stdlib/pull/2593)
-   [`b8bd516`](https://github.com/stdlib-js/stdlib/commit/b8bd51687cabdda74299cb37b9a5527fddd35aaa) - update namespace TypeScript declarations [(#2351)](https://github.com/stdlib-js/stdlib/pull/2351)
-   [`0adcae5`](https://github.com/stdlib-js/stdlib/commit/0adcae51386086e2ef5fb5d78402389cff776deb) - update namespace TypeScript declarations [(#1340)](https://github.com/stdlib-js/stdlib/pull/1340)
-   [`8f43afc`](https://github.com/stdlib-js/stdlib/commit/8f43afc5d9637ba35f60d35046041e5f0579f92c) - rename exported aliases

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`0adcae5`](https://github.com/stdlib-js/stdlib/commit/0adcae51386086e2ef5fb5d78402389cff776deb): rename exported aliases

    -   To migrate, users should consult the relevant namespace documentation and associated commits in order to determine which aliases have been renamed.

-   [`8f43afc`](https://github.com/stdlib-js/stdlib/commit/8f43afc5d9637ba35f60d35046041e5f0579f92c): rename exported aliases

    -   To migrate, users should consult the documentation for the updated
        aliases. For the most part, updating code should be as simple as
        dropping an `ndarray` or `nd` prefix. For others, they should more
        directly match, or be inferrable from, the package name.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-v0.3.0">

#### [@stdlib/ndarray/base](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base)

<details>

<section class="features">

##### Features

-   [`54262c8`](https://github.com/stdlib-js/stdlib/commit/54262c89e70eae566591c6e87ece69b68ca09488) - add `ndarraylike2ndarray` to namespace
-   [`6e4b9eb`](https://github.com/stdlib-js/stdlib/commit/6e4b9ebc31d9629446019e37e31bfe9b180b675c) - update namespace TypeScript declarations [(#2681)](https://github.com/stdlib-js/stdlib/pull/2681)
-   [`d31e751`](https://github.com/stdlib-js/stdlib/commit/d31e7515b71dc5b76751173c7724d73d943b1473) - add `forEach` to namespace
-   [`de17de3`](https://github.com/stdlib-js/stdlib/commit/de17de32867461079aae166d5cecbecb1da7f922) - update namespace TypeScript declarations [(#2593)](https://github.com/stdlib-js/stdlib/pull/2593)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-boolean--v0.3.0">

#### [@stdlib/ndarray/base/assert/is-boolean-](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-boolean-)

<details>

<section class="features">

##### Features

-   [`979cf48`](https://github.com/stdlib-js/stdlib/commit/979cf4883141c4c5545860ac59ae056b2ecd3e43) - add `ndarray/base/assert/is-boolean-data-type` [(#2575)](https://github.com/stdlib-js/stdlib/pull/2575)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assign-v0.3.0">

#### [@stdlib/ndarray/base/assign](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assign)

<details>

<section class="features">

##### Features

-   [`6ea880c`](https://github.com/stdlib-js/stdlib/commit/6ea880ccabbf770cf13a2def4f9ce806daa2b2f6) - add boolean dtype support to `ndarray/base/assign` [(#2598)](https://github.com/stdlib-js/stdlib/pull/2598)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`96c7ddf`](https://github.com/stdlib-js/stdlib/commit/96c7ddfdbcecc6ff60fcb56681db16463d19020e) - use computed order and fix strides in examples
-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-buffer-v0.3.0">

#### [@stdlib/ndarray/base/buffer](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/buffer)

<details>

<section class="features">

##### Features

-   [`fa118f2`](https://github.com/stdlib-js/stdlib/commit/fa118f279848e1c85ea6e5cf9799f3089649214c) - add boolean dtype support to `ndarray/base/buffer` [(#2574)](https://github.com/stdlib-js/stdlib/pull/2574)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-buffer-ctors-v0.3.0">

#### [@stdlib/ndarray/base/buffer-ctors](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/buffer-ctors)

<details>

<section class="features">

##### Features

-   [`0f0dbca`](https://github.com/stdlib-js/stdlib/commit/0f0dbcaa7eddb30c09c8cc394224cd4a409b90a6) - add boolean dtype support to `ndarray/base/buffer-ctors` [(#2571)](https://github.com/stdlib-js/stdlib/pull/2571)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-buffer-dtype-v0.3.0">

#### [@stdlib/ndarray/base/buffer-dtype](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/buffer-dtype)

<details>

<section class="features">

##### Features

-   [`efecd32`](https://github.com/stdlib-js/stdlib/commit/efecd32448520402335cdf8fdb34ee88b96556b9) - add boolean dtype support to `ndarray/base/buffer-dtype` [(#2572)](https://github.com/stdlib-js/stdlib/pull/2572)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-empty-v0.3.0">

#### [@stdlib/ndarray/base/empty](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/empty)

<details>

<section class="features">

##### Features

-   [`71cf5a0`](https://github.com/stdlib-js/stdlib/commit/71cf5a05a13d12aed627d332147642adc4694ab9) - add boolean dtype support to `ndarray/empty*` and `ndarray/base/empty*` packages [(#2588)](https://github.com/stdlib-js/stdlib/pull/2588)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-empty-like-v0.3.0">

#### [@stdlib/ndarray/base/empty-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/empty-like)

<details>

<section class="features">

##### Features

-   [`71cf5a0`](https://github.com/stdlib-js/stdlib/commit/71cf5a05a13d12aed627d332147642adc4694ab9) - add boolean dtype support to `ndarray/empty*` and `ndarray/base/empty*` packages [(#2588)](https://github.com/stdlib-js/stdlib/pull/2588)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-for-each-v0.3.0">

#### [@stdlib/ndarray/base/for-each](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/for-each)

<details>

<section class="features">

##### Features

-   [`e3fe1fa`](https://github.com/stdlib-js/stdlib/commit/e3fe1fad242ff60466807239c3d156c302885104) - add `ndarray/base/for-each`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`4e6b2eb`](https://github.com/stdlib-js/stdlib/commit/4e6b2eb39e01d193302cd93ebf93dd2f42c71291) - update type for indices
-   [`c57d1d8`](https://github.com/stdlib-js/stdlib/commit/c57d1d880a32cfaff0c57744c81ef641640cddef) - return subscripts from perspective of ndarray view, not buffer

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-map-v0.3.0">

#### [@stdlib/ndarray/base/map](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/map)

<details>

<section class="features">

##### Features

-   [`72ed2e1`](https://github.com/stdlib-js/stdlib/commit/72ed2e1e6331858c078564e22b6dca041f5daaca) - add `ndarray/base/map` [(#2715)](https://github.com/stdlib-js/stdlib/pull/2715)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-ndarraylike2ndarray-v0.3.0">

#### [@stdlib/ndarray/base/ndarraylike2ndarray](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/ndarraylike2ndarray)

<details>

<section class="features">

##### Features

-   [`5d01561`](https://github.com/stdlib-js/stdlib/commit/5d015616e9731e40d20f7d4dca6b136ae47cc9bc) - add `ndarray/base/ndarraylike2ndarray`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-nullary-v0.3.0">

#### [@stdlib/ndarray/base/nullary](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/nullary)

<details>

<section class="features">

##### Features

-   [`19d4a8d`](https://github.com/stdlib-js/stdlib/commit/19d4a8da27facd0cc72b6162dc7e6b0d66d7a63c) - add boolean dtype support to `ndarray/base/nullary` [(#2586)](https://github.com/stdlib-js/stdlib/pull/2586)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#2229](https://github.com/stdlib-js/stdlib/issues/2229)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-unary-v0.3.0">

#### [@stdlib/ndarray/base/unary](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/unary)

<details>

<section class="features">

##### Features

-   [`a360f04`](https://github.com/stdlib-js/stdlib/commit/a360f048dde8429a3ffcc60d36abe9ad33038c73) - add boolean dtype support to `ndarray/base/unary` [(#2587)](https://github.com/stdlib-js/stdlib/pull/2587)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`1375823`](https://github.com/stdlib-js/stdlib/commit/1375823f58c93aeac8c687147f40e78d52adec04) - use computed order and fix strides in examples
-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-unary-by-v0.3.0">

#### [@stdlib/ndarray/base/unary-by](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/unary-by)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`e2b7fb5`](https://github.com/stdlib-js/stdlib/commit/e2b7fb5df61f15ae7dbf148ec0c0412ff434b123) - use computed order and fix strides in examples

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-unary-loop-interchange-order-v0.3.0">

#### [@stdlib/ndarray/base/unary-loop-interchange-order](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/unary-loop-interchange-order)

<details>

<section class="features">

##### Features

-   [`0d360b3`](https://github.com/stdlib-js/stdlib/commit/0d360b33eba8019d2d638f265986d861ed22642a) - return index array as part of the results object

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-zeros-v0.3.0">

#### [@stdlib/ndarray/base/zeros](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/zeros)

<details>

<section class="features">

##### Features

-   [`71cf5a0`](https://github.com/stdlib-js/stdlib/commit/71cf5a05a13d12aed627d332147642adc4694ab9) - add boolean dtype support to `ndarray/empty*` and `ndarray/base/empty*` packages [(#2588)](https://github.com/stdlib-js/stdlib/pull/2588)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-zeros-like-v0.3.0">

#### [@stdlib/ndarray/base/zeros-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/zeros-like)

<details>

<section class="features">

##### Features

-   [`71cf5a0`](https://github.com/stdlib-js/stdlib/commit/71cf5a05a13d12aed627d332147642adc4694ab9) - add boolean dtype support to `ndarray/empty*` and `ndarray/base/empty*` packages [(#2588)](https://github.com/stdlib-js/stdlib/pull/2588)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-ctor-v0.3.0">

#### [@stdlib/ndarray/ctor](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/ctor)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-defaults-v0.3.0">

#### [@stdlib/ndarray/defaults](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/defaults)

<details>

<section class="features">

##### Features

-   [`e92152b`](https://github.com/stdlib-js/stdlib/commit/e92152baba61ab358640cba9d0506d75123a5f60) - add boolean dtype support to `ndarray/defaults` [(#2551)](https://github.com/stdlib-js/stdlib/pull/2551)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-dtypes-v0.3.0">

#### [@stdlib/ndarray/dtypes](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/dtypes)

<details>

<section class="features">

##### Features

-   [`d06165b`](https://github.com/stdlib-js/stdlib/commit/d06165bd6c491b4ad19bc2577be76cff083eda98) - add support for extending data type kind subsets with a \"generic\" data type
-   [`16e0808`](https://github.com/stdlib-js/stdlib/commit/16e0808004b7bd4f16eea7eced5229ee1120b577) - add boolean dtype support to `ndarray/dtypes` [(#2550)](https://github.com/stdlib-js/stdlib/pull/2550)
-   [`6b9e18f`](https://github.com/stdlib-js/stdlib/commit/6b9e18f625337d030eb3cd2001934696ef05bfc2) - add support for 'typed' data type kind

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-empty-v0.3.0">

#### [@stdlib/ndarray/empty](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/empty)

<details>

<section class="features">

##### Features

-   [`71cf5a0`](https://github.com/stdlib-js/stdlib/commit/71cf5a05a13d12aed627d332147642adc4694ab9) - add boolean dtype support to `ndarray/empty*` and `ndarray/base/empty*` packages [(#2588)](https://github.com/stdlib-js/stdlib/pull/2588)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-empty-like-v0.3.0">

#### [@stdlib/ndarray/empty-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/empty-like)

<details>

<section class="features">

##### Features

-   [`71cf5a0`](https://github.com/stdlib-js/stdlib/commit/71cf5a05a13d12aed627d332147642adc4694ab9) - add boolean dtype support to `ndarray/empty*` and `ndarray/base/empty*` packages [(#2588)](https://github.com/stdlib-js/stdlib/pull/2588)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-from-scalar-v0.3.0">

#### [@stdlib/ndarray/from-scalar](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/from-scalar)

<details>

<section class="features">

##### Features

-   [`f766a56`](https://github.com/stdlib-js/stdlib/commit/f766a563e112098dc229991c0eedb5f5b7417811) - add boolean dtype support to `ndarray/from-scalar` [(#2589)](https://github.com/stdlib-js/stdlib/pull/2589)
-   [`9e08caf`](https://github.com/stdlib-js/stdlib/commit/9e08caf0e897040e9b82ff104cb5a09d6b03465e) - return a `complex64` dtype ndarray if provided a Complex64 scalar

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`9e08caf`](https://github.com/stdlib-js/stdlib/commit/9e08caf0e897040e9b82ff104cb5a09d6b03465e): return same dtype when provided a complex number instance

    -   To migrate, users relying on the previous behavior where anything
        complex-like resulted in a `complex128` ndarray should explicitly
        set the output dtype to 'complex128'. By default, the function will
        return an ndarray having the same dtype as a provided complex number
        instance. When a user wants to explicitly upcast a Complex64 scalar,
        the user can explicitly set the `dtype` option. The previous default
        behavior is undesirable, as we disregarded the explicit type info
        of a provided complex number scalar.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-iter-v0.3.0">

#### [@stdlib/ndarray/iter](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/iter)

<details>

<section class="features">

##### Features

-   [`6576f4f`](https://github.com/stdlib-js/stdlib/commit/6576f4f82a2f47b2c0ffa35731efcb15a22e158a) - add `nditerInterleaveSubarrays`
-   [`4289f78`](https://github.com/stdlib-js/stdlib/commit/4289f78da1d67c5671151413b4673ec32ede26c2) - add `nditerStacks` to namespace
-   [`873b085`](https://github.com/stdlib-js/stdlib/commit/873b085ae0183426f3e8e831a50a42e2df3ba13d) - add `nditerSubarrays` to namespace
-   [`46aec25`](https://github.com/stdlib-js/stdlib/commit/46aec25aac5d4a0c8a3fd7b719dd6a080e59beb8) - add `nditerSelectDimension` to namespace

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-iter-interleave-subarrays-v0.3.0">

#### [@stdlib/ndarray/iter/interleave-subarrays](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/iter/interleave-subarrays)

<details>

<section class="features">

##### Features

-   [`25e87e4`](https://github.com/stdlib-js/stdlib/commit/25e87e46c052b2fb2bbd026a71a5ee10f4c50d3f) - add `ndarray/iter/interleave-subarrays`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-iter-select-dimension-v0.3.0">

#### [@stdlib/ndarray/iter/select-dimension](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/iter/select-dimension)

<details>

<section class="features">

##### Features

-   [`6dce19b`](https://github.com/stdlib-js/stdlib/commit/6dce19b2a2dfae6159257dab0c52a8421e0861d2) - add `ndarray/iter/select-dimension`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-iter-stacks-v0.3.0">

#### [@stdlib/ndarray/iter/stacks](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/iter/stacks)

<details>

<section class="features">

##### Features

-   [`d256bd9`](https://github.com/stdlib-js/stdlib/commit/d256bd93e03a245d45b732ba4d8ab60e47d378d6) - add `ndarray/iter/stacks`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-iter-subarrays-v0.3.0">

#### [@stdlib/ndarray/iter/subarrays](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/iter/subarrays)

<details>

<section class="features">

##### Features

-   [`fd9a5c2`](https://github.com/stdlib-js/stdlib/commit/fd9a5c2e29508ab5b393e2273ddb7463be6affb3) - add `ndarray/iter/subarrays`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-min-dtype-v0.3.0">

#### [@stdlib/ndarray/min-dtype](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/min-dtype)

<details>

<section class="features">

##### Features

-   [`21052a2`](https://github.com/stdlib-js/stdlib/commit/21052a211289b86b0e8a2e1f43a4d4c5b2379ffb) - add boolean dtype support to ndarray/min-dtype [(#2552)](https://github.com/stdlib-js/stdlib/pull/2552)

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`21052a2`](https://github.com/stdlib-js/stdlib/commit/21052a211289b86b0e8a2e1f43a4d4c5b2379ffb): return "bool" when provided a boolean

    -   To migrate, users explicitly handle "bool" return values. If "generic" is still desired, users should consolidate accordingly.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-mostly-safe-casts-v0.3.0">

#### [@stdlib/ndarray/mostly-safe-casts](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/mostly-safe-casts)

<details>

<section class="features">

##### Features

-   [`131d649`](https://github.com/stdlib-js/stdlib/commit/131d649c6b22a6247121db1fd380658bf4e83b65) - add boolean dtype support to `ndarray/mostly-safe-casts` [(#2554)](https://github.com/stdlib-js/stdlib/pull/2554)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-ndarraylike2ndarray-v0.3.0">

#### [@stdlib/ndarray/ndarraylike2ndarray](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/ndarraylike2ndarray)

<details>

<section class="features">

##### Features

-   [`e7b56b1`](https://github.com/stdlib-js/stdlib/commit/e7b56b133fffc0bf83638ab267242c25eb8a359a) - add `ndarray/ndarraylike2ndarray`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-next-dtype-v0.3.0">

#### [@stdlib/ndarray/next-dtype](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/next-dtype)

<details>

<section class="features">

##### Features

-   [`1cb0243`](https://github.com/stdlib-js/stdlib/commit/1cb0243d79c25ae193c058bb15ceeebad6cf3cfd) - add boolean dtype support to `ndarray/next-dtype` [(#2553)](https://github.com/stdlib-js/stdlib/pull/2553)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-promotion-rules-v0.3.0">

#### [@stdlib/ndarray/promotion-rules](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/promotion-rules)

<details>

<section class="features">

##### Features

-   [`29f4e2b`](https://github.com/stdlib-js/stdlib/commit/29f4e2b3786a8dcec6254b0ab6fb0d69164a673a) - add boolean dtype support to `ndarray/promotion-rules` [(#2524)](https://github.com/stdlib-js/stdlib/pull/2524)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-safe-casts-v0.3.0">

#### [@stdlib/ndarray/safe-casts](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/safe-casts)

<details>

<section class="features">

##### Features

-   [`ca687d6`](https://github.com/stdlib-js/stdlib/commit/ca687d6a8d8476309630c5a03f303c2420dc753f) - add boolean dtype support to `ndarray/safe-casts` [(#2507)](https://github.com/stdlib-js/stdlib/pull/2507)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-same-kind-casts-v0.3.0">

#### [@stdlib/ndarray/same-kind-casts](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/same-kind-casts)

<details>

<section class="features">

##### Features

-   [`4e860d8`](https://github.com/stdlib-js/stdlib/commit/4e860d827216f445b5abc569a0d7d7d7e61d83f6) - add boolean dtype support to `ndarray/same-kind-casts` [(#2555)](https://github.com/stdlib-js/stdlib/pull/2555)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-zeros-v0.3.0">

#### [@stdlib/ndarray/zeros](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/zeros)

<details>

<section class="features">

##### Features

-   [`71cf5a0`](https://github.com/stdlib-js/stdlib/commit/71cf5a05a13d12aed627d332147642adc4694ab9) - add boolean dtype support to `ndarray/empty*` and `ndarray/base/empty*` packages [(#2588)](https://github.com/stdlib-js/stdlib/pull/2588)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-zeros-like-v0.3.0">

#### [@stdlib/ndarray/zeros-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/zeros-like)

<details>

<section class="features">

##### Features

-   [`71cf5a0`](https://github.com/stdlib-js/stdlib/commit/71cf5a05a13d12aed627d332147642adc4694ab9) - add boolean dtype support to `ndarray/empty*` and `ndarray/base/empty*` packages [(#2588)](https://github.com/stdlib-js/stdlib/pull/2588)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

</section>

<!-- /.packages -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`21052a2`](https://github.com/stdlib-js/stdlib/commit/21052a211289b86b0e8a2e1f43a4d4c5b2379ffb): return "bool" when provided a boolean

    -   To migrate, users explicitly handle "bool" return values. If "generic" is still desired, users should consolidate accordingly.

-   [`0adcae5`](https://github.com/stdlib-js/stdlib/commit/0adcae51386086e2ef5fb5d78402389cff776deb): rename exported aliases

    -   To migrate, users should consult the relevant namespace documentation and associated commits in order to determine which aliases have been renamed.

-   [`8f43afc`](https://github.com/stdlib-js/stdlib/commit/8f43afc5d9637ba35f60d35046041e5f0579f92c): rename exported aliases

    -   To migrate, users should consult the documentation for the updated
        aliases. For the most part, updating code should be as simple as
        dropping an `ndarray` or `nd` prefix. For others, they should more
        directly match, or be inferrable from, the package name.

-   [`9e08caf`](https://github.com/stdlib-js/stdlib/commit/9e08caf0e897040e9b82ff104cb5a09d6b03465e): return same dtype when provided a complex number instance

    -   To migrate, users relying on the previous behavior where anything
        complex-like resulted in a `complex128` ndarray should explicitly
        set the output dtype to 'complex128'. By default, the function will
        return an ndarray having the same dtype as a provided complex number
        instance. When a user wants to explicitly upcast a Complex64 scalar,
        the user can explicitly set the `dtype` option. The previous default
        behavior is undesirable, as we disregarded the explicit type info
        of a provided complex number scalar.

</section>

<!-- /.breaking-changes -->

<section class="issues">

### Closed Issues

This release closes the following issue:

[#2229](https://github.com/stdlib-js/stdlib/issues/2229)

</section>

<!-- /.issues -->

<section class="contributors">

### Contributors

A total of 4 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Jaysukh Makvana
-   Muhammad Haris
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`df3ed1e`](https://github.com/stdlib-js/stdlib/commit/df3ed1ee7fdc62c9f49bfa38eb1df240fb752a6e) - **docs:** update namespace ToCs _(by Athan Reines)_
-   [`6a3b3d7`](https://github.com/stdlib-js/stdlib/commit/6a3b3d731ca697a62e3d58900e1b6cb06e7667dd) - **chore:** update directories meta data _(by Athan Reines)_
-   [`ba0c5d0`](https://github.com/stdlib-js/stdlib/commit/ba0c5d0a00c8f2b5eff6321b14dd62398be26be8) - **feat:** add `ndarraylike2ndarray` to namespace _(by Athan Reines)_
-   [`e7b56b1`](https://github.com/stdlib-js/stdlib/commit/e7b56b133fffc0bf83638ab267242c25eb8a359a) - **feat:** add `ndarray/ndarraylike2ndarray` _(by Athan Reines)_
-   [`453c7f9`](https://github.com/stdlib-js/stdlib/commit/453c7f9f7c8ac5b8817b1d81f98af42570f1d0a5) - **refactor:** allow array-like objects containing submodes _(by Athan Reines)_
-   [`dd48932`](https://github.com/stdlib-js/stdlib/commit/dd489326b8dcee32f41f2ef7c2bafcaa4eb6ce46) - **docs:** fix descriptions _(by Athan Reines)_
-   [`54262c8`](https://github.com/stdlib-js/stdlib/commit/54262c89e70eae566591c6e87ece69b68ca09488) - **feat:** add `ndarraylike2ndarray` to namespace _(by Athan Reines)_
-   [`5d01561`](https://github.com/stdlib-js/stdlib/commit/5d015616e9731e40d20f7d4dca6b136ae47cc9bc) - **feat:** add `ndarray/base/ndarraylike2ndarray` _(by Athan Reines)_
-   [`72ed2e1`](https://github.com/stdlib-js/stdlib/commit/72ed2e1e6331858c078564e22b6dca041f5daaca) - **feat:** add `ndarray/base/map` [(#2715)](https://github.com/stdlib-js/stdlib/pull/2715) _(by Muhammad Haris, Athan Reines)_
-   [`96c7ddf`](https://github.com/stdlib-js/stdlib/commit/96c7ddfdbcecc6ff60fcb56681db16463d19020e) - **fix:** use computed order and fix strides in examples _(by Athan Reines)_
-   [`e2b7fb5`](https://github.com/stdlib-js/stdlib/commit/e2b7fb5df61f15ae7dbf148ec0c0412ff434b123) - **fix:** use computed order and fix strides in examples _(by Athan Reines)_
-   [`1375823`](https://github.com/stdlib-js/stdlib/commit/1375823f58c93aeac8c687147f40e78d52adec04) - **fix:** use computed order and fix strides in examples _(by Athan Reines)_
-   [`bc07347`](https://github.com/stdlib-js/stdlib/commit/bc07347c2ebd7ea17befbb91f3c422776acf0c42) - **docs:** fix strides _(by Athan Reines)_
-   [`e261bc2`](https://github.com/stdlib-js/stdlib/commit/e261bc2c64bb3ac5236abc447b9ae3f40acf31ab) - **docs:** fix strides _(by Athan Reines)_
-   [`0d360b3`](https://github.com/stdlib-js/stdlib/commit/0d360b33eba8019d2d638f265986d861ed22642a) - **feat:** return index array as part of the results object _(by Athan Reines)_
-   [`6576f4f`](https://github.com/stdlib-js/stdlib/commit/6576f4f82a2f47b2c0ffa35731efcb15a22e158a) - **feat:** add `nditerInterleaveSubarrays` _(by Athan Reines)_
-   [`25e87e4`](https://github.com/stdlib-js/stdlib/commit/25e87e46c052b2fb2bbd026a71a5ee10f4c50d3f) - **feat:** add `ndarray/iter/interleave-subarrays` _(by Athan Reines)_
-   [`4289f78`](https://github.com/stdlib-js/stdlib/commit/4289f78da1d67c5671151413b4673ec32ede26c2) - **feat:** add `nditerStacks` to namespace _(by Athan Reines)_
-   [`d256bd9`](https://github.com/stdlib-js/stdlib/commit/d256bd93e03a245d45b732ba4d8ab60e47d378d6) - **feat:** add `ndarray/iter/stacks` _(by Athan Reines)_
-   [`7a4424b`](https://github.com/stdlib-js/stdlib/commit/7a4424bd81e212e9c7534520213b696c0c64c644) - **docs:** fix comment _(by Athan Reines)_
-   [`873b085`](https://github.com/stdlib-js/stdlib/commit/873b085ae0183426f3e8e831a50a42e2df3ba13d) - **feat:** add `nditerSubarrays` to namespace _(by Athan Reines)_
-   [`fd9a5c2`](https://github.com/stdlib-js/stdlib/commit/fd9a5c2e29508ab5b393e2273ddb7463be6affb3) - **feat:** add `ndarray/iter/subarrays` _(by Athan Reines)_
-   [`46aec25`](https://github.com/stdlib-js/stdlib/commit/46aec25aac5d4a0c8a3fd7b719dd6a080e59beb8) - **feat:** add `nditerSelectDimension` to namespace _(by Athan Reines)_
-   [`6dce19b`](https://github.com/stdlib-js/stdlib/commit/6dce19b2a2dfae6159257dab0c52a8421e0861d2) - **feat:** add `ndarray/iter/select-dimension` _(by Athan Reines)_
-   [`4ec7a03`](https://github.com/stdlib-js/stdlib/commit/4ec7a031214836b442e5bce57b57b20e166ef8a4) - **refactor:** improve type specificity _(by Athan Reines)_
-   [`0fef28c`](https://github.com/stdlib-js/stdlib/commit/0fef28ccec002134fb0ebd2db1a713404ab1db17) - **refactor:** improve type specificity _(by Athan Reines)_
-   [`9a4b430`](https://github.com/stdlib-js/stdlib/commit/9a4b430c6013d48480cb73a266fabd9683f49b31) - **refactor:** improve type specificity _(by Athan Reines)_
-   [`5fe7f2e`](https://github.com/stdlib-js/stdlib/commit/5fe7f2e437b3bf7ff82db46944d8f928c7fc4090) - **style:** remove backticks _(by Athan Reines)_
-   [`dab89ca`](https://github.com/stdlib-js/stdlib/commit/dab89ca7cb89b404eef61ae48cfb84afec543222) - **style:** remove backticks _(by Athan Reines)_
-   [`22c4d29`](https://github.com/stdlib-js/stdlib/commit/22c4d29898e2b5bb4cb071a6b7f62536027eaf28) - **docs:** remove blank line _(by Athan Reines)_
-   [`4e6b2eb`](https://github.com/stdlib-js/stdlib/commit/4e6b2eb39e01d193302cd93ebf93dd2f42c71291) - **fix:** update type for indices _(by Athan Reines)_
-   [`c57d1d8`](https://github.com/stdlib-js/stdlib/commit/c57d1d880a32cfaff0c57744c81ef641640cddef) - **fix:** return subscripts from perspective of ndarray view, not buffer _(by Athan Reines)_
-   [`2777e4b`](https://github.com/stdlib-js/stdlib/commit/2777e4be161869d09406e3b17947d24c64b47af2) - **bench:** resolve lint errors in benchmarks _(by Athan Reines)_
-   [`6e4b9eb`](https://github.com/stdlib-js/stdlib/commit/6e4b9ebc31d9629446019e37e31bfe9b180b675c) - **feat:** update namespace TypeScript declarations [(#2681)](https://github.com/stdlib-js/stdlib/pull/2681) _(by stdlib-bot, Philipp Burckhardt)_
-   [`7ee91a5`](https://github.com/stdlib-js/stdlib/commit/7ee91a531462ec823da632c6ae8ff65a8d16549e) - **docs:** update namespace table of contents [(#2674)](https://github.com/stdlib-js/stdlib/pull/2674) _(by stdlib-bot, Athan Reines)_
-   [`d31e751`](https://github.com/stdlib-js/stdlib/commit/d31e7515b71dc5b76751173c7724d73d943b1473) - **feat:** add `forEach` to namespace _(by Athan Reines)_
-   [`147a189`](https://github.com/stdlib-js/stdlib/commit/147a1897cc5ec7c05a97f8b4d4526ed6e6f224c1) - **docs:** reorder notes _(by Athan Reines)_
-   [`e3fe1fa`](https://github.com/stdlib-js/stdlib/commit/e3fe1fad242ff60466807239c3d156c302885104) - **feat:** add `ndarray/base/for-each` _(by Athan Reines)_
-   [`cace2b4`](https://github.com/stdlib-js/stdlib/commit/cace2b43ed6624d28afdc5d85fb6551f7f0155b1) - **test:** add tests to `ndarray/base/nullary` [(#2663)](https://github.com/stdlib-js/stdlib/pull/2663) _(by Muhammad Haris, Athan Reines)_
-   [`468eb7f`](https://github.com/stdlib-js/stdlib/commit/468eb7f2d12876dc0713c081a53043961c70feda) - **test:** add tests to `ndarray/base/nullary` [(#2655)](https://github.com/stdlib-js/stdlib/pull/2655) _(by Muhammad Haris, Athan Reines)_
-   [`fa34b48`](https://github.com/stdlib-js/stdlib/commit/fa34b48968bddc6eb016fd4991833d7942e2a9a9) - **test:** add tests to `ndarray/base/nullary` [(#2652)](https://github.com/stdlib-js/stdlib/pull/2652) _(by Muhammad Haris, Athan Reines)_
-   [`0dfdd7d`](https://github.com/stdlib-js/stdlib/commit/0dfdd7da997c13178f0a2bd7a9895a4618629a46) - **test:** add tests to `ndarray/base/nullary` [(#2645)](https://github.com/stdlib-js/stdlib/pull/2645) _(by Muhammad Haris, Athan Reines)_
-   [`14a2930`](https://github.com/stdlib-js/stdlib/commit/14a2930e995e2a92b2886146514c82f637807724) - **test:** add tests to `ndarray/base/nullary` [(#2644)](https://github.com/stdlib-js/stdlib/pull/2644) _(by Muhammad Haris, Athan Reines)_
-   [`06b4d43`](https://github.com/stdlib-js/stdlib/commit/06b4d4334a2c56bb39787c902fadfb9bb794779d) - **test:** add tests to `ndarray/base/nullary` [(#2634)](https://github.com/stdlib-js/stdlib/pull/2634) _(by Muhammad Haris, Athan Reines)_
-   [`e4cd553`](https://github.com/stdlib-js/stdlib/commit/e4cd5534b04ce1c7277126fdd1811b845f95d1f2) - **test:** add tests to `ndarray/base/nullary` [(#2609)](https://github.com/stdlib-js/stdlib/pull/2609) _(by Muhammad Haris, Athan Reines)_
-   [`32bbcb3`](https://github.com/stdlib-js/stdlib/commit/32bbcb3b3dae1f028fd18166ee7875a93d44d0ee) - **refactor:** update paths _(by Athan Reines)_
-   [`8d4c46b`](https://github.com/stdlib-js/stdlib/commit/8d4c46b10ca912401e0ff0caa37a17cd3c443c2f) - **refactor:** update paths _(by Athan Reines)_
-   [`ed9c0a5`](https://github.com/stdlib-js/stdlib/commit/ed9c0a5e55ff09af3dd6af8c38615480e2c1828e) - **refactor:** update paths _(by Athan Reines)_
-   [`18b3c79`](https://github.com/stdlib-js/stdlib/commit/18b3c79c5035c7082618b7379cd6576e64393a96) - **refactor:** update paths _(by Athan Reines)_
-   [`9abdead`](https://github.com/stdlib-js/stdlib/commit/9abdead65457225ccbf44f4bab8caf96167a71c5) - **test:** add tests for three-dimensional arrays [(#2599)](https://github.com/stdlib-js/stdlib/pull/2599) _(by Muhammad Haris, Athan Reines)_
-   [`d04dcbd`](https://github.com/stdlib-js/stdlib/commit/d04dcbd6dc3b0bf4a89bd3947d317fa5ff15bb38) - **docs:** remove private annotations in C comments _(by Philipp Burckhardt)_
-   [`d06165b`](https://github.com/stdlib-js/stdlib/commit/d06165bd6c491b4ad19bc2577be76cff083eda98) - **feat:** add support for extending data type kind subsets with a \"generic\" data type _(by Athan Reines)_
-   [`6ea880c`](https://github.com/stdlib-js/stdlib/commit/6ea880ccabbf770cf13a2def4f9ce806daa2b2f6) - **feat:** add boolean dtype support to `ndarray/base/assign` [(#2598)](https://github.com/stdlib-js/stdlib/pull/2598) _(by Jaysukh Makvana, Athan Reines)_
-   [`903c51c`](https://github.com/stdlib-js/stdlib/commit/903c51c7d0a06d9186a6f2be1b01fa25f770a3eb) - **test:** add tests to `@stdlib/ndarray/base/nullary` [(#2350)](https://github.com/stdlib-js/stdlib/pull/2350) _(by Muhammad Haris, Athan Reines)_
-   [`de17de3`](https://github.com/stdlib-js/stdlib/commit/de17de32867461079aae166d5cecbecb1da7f922) - **feat:** update namespace TypeScript declarations [(#2593)](https://github.com/stdlib-js/stdlib/pull/2593) _(by stdlib-bot, Athan Reines)_
-   [`71cf5a0`](https://github.com/stdlib-js/stdlib/commit/71cf5a05a13d12aed627d332147642adc4694ab9) - **feat:** add boolean dtype support to `ndarray/empty*` and `ndarray/base/empty*` packages [(#2588)](https://github.com/stdlib-js/stdlib/pull/2588) _(by Jaysukh Makvana, Athan Reines)_
-   [`f766a56`](https://github.com/stdlib-js/stdlib/commit/f766a563e112098dc229991c0eedb5f5b7417811) - **feat:** add boolean dtype support to `ndarray/from-scalar` [(#2589)](https://github.com/stdlib-js/stdlib/pull/2589) _(by Jaysukh Makvana, Athan Reines)_
-   [`a360f04`](https://github.com/stdlib-js/stdlib/commit/a360f048dde8429a3ffcc60d36abe9ad33038c73) - **feat:** add boolean dtype support to `ndarray/base/unary` [(#2587)](https://github.com/stdlib-js/stdlib/pull/2587) _(by Jaysukh Makvana)_
-   [`19d4a8d`](https://github.com/stdlib-js/stdlib/commit/19d4a8da27facd0cc72b6162dc7e6b0d66d7a63c) - **feat:** add boolean dtype support to `ndarray/base/nullary` [(#2586)](https://github.com/stdlib-js/stdlib/pull/2586) _(by Jaysukh Makvana)_
-   [`c067b6c`](https://github.com/stdlib-js/stdlib/commit/c067b6c990c99b8f4cf315b5378af8574098962b) - **docs:** update namespace table of contents [(#2576)](https://github.com/stdlib-js/stdlib/pull/2576) _(by stdlib-bot, Philipp Burckhardt)_
-   [`d71c3a9`](https://github.com/stdlib-js/stdlib/commit/d71c3a91bd81b7dff1a24b151ef429c427e5875b) - **docs:** update namespace TypeScript declarations [(#2584)](https://github.com/stdlib-js/stdlib/pull/2584) _(by stdlib-bot, Athan Reines)_
-   [`979cf48`](https://github.com/stdlib-js/stdlib/commit/979cf4883141c4c5545860ac59ae056b2ecd3e43) - **feat:** add `ndarray/base/assert/is-boolean-data-type` [(#2575)](https://github.com/stdlib-js/stdlib/pull/2575) _(by Jaysukh Makvana, Athan Reines)_
-   [`fa118f2`](https://github.com/stdlib-js/stdlib/commit/fa118f279848e1c85ea6e5cf9799f3089649214c) - **feat:** add boolean dtype support to `ndarray/base/buffer` [(#2574)](https://github.com/stdlib-js/stdlib/pull/2574) _(by Jaysukh Makvana, Athan Reines)_
-   [`e92152b`](https://github.com/stdlib-js/stdlib/commit/e92152baba61ab358640cba9d0506d75123a5f60) - **feat:** add boolean dtype support to `ndarray/defaults` [(#2551)](https://github.com/stdlib-js/stdlib/pull/2551) _(by Jaysukh Makvana, Athan Reines)_
-   [`16e0808`](https://github.com/stdlib-js/stdlib/commit/16e0808004b7bd4f16eea7eced5229ee1120b577) - **feat:** add boolean dtype support to `ndarray/dtypes` [(#2550)](https://github.com/stdlib-js/stdlib/pull/2550) _(by Jaysukh Makvana, Athan Reines)_
-   [`21052a2`](https://github.com/stdlib-js/stdlib/commit/21052a211289b86b0e8a2e1f43a4d4c5b2379ffb) - **feat:** add boolean dtype support to ndarray/min-dtype [(#2552)](https://github.com/stdlib-js/stdlib/pull/2552) _(by Jaysukh Makvana, Athan Reines)_
-   [`efecd32`](https://github.com/stdlib-js/stdlib/commit/efecd32448520402335cdf8fdb34ee88b96556b9) - **feat:** add boolean dtype support to `ndarray/base/buffer-dtype` [(#2572)](https://github.com/stdlib-js/stdlib/pull/2572) _(by Jaysukh Makvana, Athan Reines)_
-   [`0f0dbca`](https://github.com/stdlib-js/stdlib/commit/0f0dbcaa7eddb30c09c8cc394224cd4a409b90a6) - **feat:** add boolean dtype support to `ndarray/base/buffer-ctors` [(#2571)](https://github.com/stdlib-js/stdlib/pull/2571) _(by Jaysukh Makvana, Athan Reines)_
-   [`1cb0243`](https://github.com/stdlib-js/stdlib/commit/1cb0243d79c25ae193c058bb15ceeebad6cf3cfd) - **feat:** add boolean dtype support to `ndarray/next-dtype` [(#2553)](https://github.com/stdlib-js/stdlib/pull/2553) _(by Jaysukh Makvana)_
-   [`131d649`](https://github.com/stdlib-js/stdlib/commit/131d649c6b22a6247121db1fd380658bf4e83b65) - **feat:** add boolean dtype support to `ndarray/mostly-safe-casts` [(#2554)](https://github.com/stdlib-js/stdlib/pull/2554) _(by Jaysukh Makvana, Athan Reines)_
-   [`4e860d8`](https://github.com/stdlib-js/stdlib/commit/4e860d827216f445b5abc569a0d7d7d7e61d83f6) - **feat:** add boolean dtype support to `ndarray/same-kind-casts` [(#2555)](https://github.com/stdlib-js/stdlib/pull/2555) _(by Jaysukh Makvana)_
-   [`29f4e2b`](https://github.com/stdlib-js/stdlib/commit/29f4e2b3786a8dcec6254b0ab6fb0d69164a673a) - **feat:** add boolean dtype support to `ndarray/promotion-rules` [(#2524)](https://github.com/stdlib-js/stdlib/pull/2524) _(by Jaysukh Makvana)_
-   [`41a5c49`](https://github.com/stdlib-js/stdlib/commit/41a5c4954cc46899abfe20145987627b2e86fc94) - **test:** update tests in `ndarray/base/*` to support boolean dtypes [(#2505)](https://github.com/stdlib-js/stdlib/pull/2505) _(by Jaysukh Makvana, Athan Reines)_
-   [`ca687d6`](https://github.com/stdlib-js/stdlib/commit/ca687d6a8d8476309630c5a03f303c2420dc753f) - **feat:** add boolean dtype support to `ndarray/safe-casts` [(#2507)](https://github.com/stdlib-js/stdlib/pull/2507) _(by Jaysukh Makvana, Athan Reines)_
-   [`b8bd516`](https://github.com/stdlib-js/stdlib/commit/b8bd51687cabdda74299cb37b9a5527fddd35aaa) - **feat:** update namespace TypeScript declarations [(#2351)](https://github.com/stdlib-js/stdlib/pull/2351) _(by stdlib-bot, Philipp Burckhardt)_
-   [`539fc72`](https://github.com/stdlib-js/stdlib/commit/539fc725d1fea6738862de98e3f3c6385fbdc0e6) - **style:** fix indentation _(by Athan Reines)_
-   [`71b0621`](https://github.com/stdlib-js/stdlib/commit/71b06218afbce673efa51c4704f26637a27a1d1c) - **refactor:** ensure enumeration constants match BLAS layouts _(by Athan Reines)_
-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - **fix:** update include paths _(by Athan Reines)_
-   [`75d4f83`](https://github.com/stdlib-js/stdlib/commit/75d4f83cb85610d23a04dc21a03f8075f6d3665f) - **refactor:** update require and include paths _(by Athan Reines)_
-   [`8a7e5fb`](https://github.com/stdlib-js/stdlib/commit/8a7e5fb11dee8930ac73b69302065a701966146a) - **chore:** address lint errors _(by Philipp Burckhardt)_
-   [`b0e93c7`](https://github.com/stdlib-js/stdlib/commit/b0e93c779d0ea7c8f8bae337baa190651c20151c) - **docs:** update related packages sections [(#2155)](https://github.com/stdlib-js/stdlib/pull/2155) _(by stdlib-bot)_
-   [`39b8176`](https://github.com/stdlib-js/stdlib/commit/39b81766b9d8a5e89ba4a26e5ea07f6413b46973) - **docs:** update namespace table of contents [(#1341)](https://github.com/stdlib-js/stdlib/pull/1341) _(by stdlib-bot, Athan Reines)_
-   [`0adcae5`](https://github.com/stdlib-js/stdlib/commit/0adcae51386086e2ef5fb5d78402389cff776deb) - **feat:** update namespace TypeScript declarations [(#1340)](https://github.com/stdlib-js/stdlib/pull/1340) _(by stdlib-bot, Athan Reines)_
-   [`8f43afc`](https://github.com/stdlib-js/stdlib/commit/8f43afc5d9637ba35f60d35046041e5f0579f92c) - **feat:** rename exported aliases _(by Athan Reines)_
-   [`7137673`](https://github.com/stdlib-js/stdlib/commit/7137673f0798ef13d7c9fd7becf78e557b1d583b) - **docs:** update related packages sections (#1315) _(by stdlib-bot)_
-   [`9e08caf`](https://github.com/stdlib-js/stdlib/commit/9e08caf0e897040e9b82ff104cb5a09d6b03465e) - **feat:** return a `complex64` dtype ndarray if provided a Complex64 scalar _(by Athan Reines)_
-   [`2c0d176`](https://github.com/stdlib-js/stdlib/commit/2c0d176ac196f519dde40c745cc93e3420d1de15) - **refactor:** dynamically query default dtypes _(by Athan Reines)_
-   [`6b9e18f`](https://github.com/stdlib-js/stdlib/commit/6b9e18f625337d030eb3cd2001934696ef05bfc2) - **feat:** add support for 'typed' data type kind _(by Athan Reines)_
-   [`b501073`](https://github.com/stdlib-js/stdlib/commit/b5010734a696fcd8b0415dfbf302636d408a33e3) - **bench:** simplify array access logic to avoid influencing results _(by Athan Reines)_
-   [`0ad4756`](https://github.com/stdlib-js/stdlib/commit/0ad4756c8d54c35bd503e14d78f5133f6cd6a09d) - **docs:** update examples _(by Athan Reines)_
-   [`e8cab88`](https://github.com/stdlib-js/stdlib/commit/e8cab8848dec80fd00d4355169db890b556fd128) - **docs:** update examples _(by Athan Reines)_
-   [`4c4509f`](https://github.com/stdlib-js/stdlib/commit/4c4509f9a4c6a8aec7dbe57ae8a5d732af2a0095) - **docs:** update examples _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-05)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-05)

<section class="packages">

### Packages

<section class="package" id="ndarray-v0.2.0">

#### [@stdlib/ndarray](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray)

<details>

<section class="features">

##### Features

-   [`2693e3b`](https://github.com/stdlib-js/stdlib/commit/2693e3b3f0382542a51fc57d78e9ab59e2dc0681) - update namespace TypeScript declarations [(#1287)](https://github.com/stdlib-js/stdlib/pull/1287)
-   [`babf9b1`](https://github.com/stdlib-js/stdlib/commit/babf9b181c3a196d6541e7d7347b263d8844480e) - add `ndat` to namespace
-   [`68413e0`](https://github.com/stdlib-js/stdlib/commit/68413e05376206b18c4ff8662a8568a189dad77e) - update namespace TypeScript declarations [(#1221)](https://github.com/stdlib-js/stdlib/pull/1221)
-   [`7680fb8`](https://github.com/stdlib-js/stdlib/commit/7680fb8c8acf1515e6e77ebf59ff1529bb13066d) - add `numelDimension` to namespace
-   [`2e7df3f`](https://github.com/stdlib-js/stdlib/commit/2e7df3f99cdcdd34675503027c26af5d8d47630a) - add `ndarrayFlag` to namespace
-   [`2abfe17`](https://github.com/stdlib-js/stdlib/commit/2abfe170316726b7ad02d21a7cb84a25c5434e69) - add `ndarrayFlags` to namespace
-   [`66a9552`](https://github.com/stdlib-js/stdlib/commit/66a9552307adeddf5d721940938f8d6f492a59b6) - add `maybeBroadcastArrays` to namespace
-   [`32f45b3`](https://github.com/stdlib-js/stdlib/commit/32f45b31c64957bd6bd2a612eeae35d2a4506a5b) - add `broadcastArrays` to namespace
-   [`b1e4cca`](https://github.com/stdlib-js/stdlib/commit/b1e4cca30147188064b2275a0242a0334befbcd1) - update namespace exports
-   [`783804d`](https://github.com/stdlib-js/stdlib/commit/783804dbc9b3899c5227c5593e0ca1e8a6a9f195) - update namespace TypeScript declarations [(#1170)](https://github.com/stdlib-js/stdlib/pull/1170)
-   [`fca85b7`](https://github.com/stdlib-js/stdlib/commit/fca85b7d10fc3a84033633cfa6034521a6d5aa42) - add `ndsliceFrom` to namespace
-   [`e391499`](https://github.com/stdlib-js/stdlib/commit/e3914991ac1b77626f7a10051930f53af0344470) - add `ndarrayStride` to namespace
-   [`d138eac`](https://github.com/stdlib-js/stdlib/commit/d138eacc068299ac8b928e1f65f6731da68dbcc9) - add `ndsliceTo` to namespace

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-array-v0.2.0">

#### [@stdlib/ndarray/array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/array)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`6134859`](https://github.com/stdlib-js/stdlib/commit/61348590284d468ea52a07c51a68219407588757) - flatten nested arrays in (co)lexicographic order

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-at-v0.2.0">

#### [@stdlib/ndarray/at](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/at)

<details>

<section class="features">

##### Features

-   [`c553280`](https://github.com/stdlib-js/stdlib/commit/c55328043b8ede3ff02562cb27fc005ef80bb150) - add `ndarray/at`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-v0.2.0">

#### [@stdlib/ndarray/base](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base)

<details>

<section class="features">

##### Features

-   [`2693e3b`](https://github.com/stdlib-js/stdlib/commit/2693e3b3f0382542a51fc57d78e9ab59e2dc0681) - update namespace TypeScript declarations [(#1287)](https://github.com/stdlib-js/stdlib/pull/1287)
-   [`68413e0`](https://github.com/stdlib-js/stdlib/commit/68413e05376206b18c4ff8662a8568a189dad77e) - update namespace TypeScript declarations [(#1221)](https://github.com/stdlib-js/stdlib/pull/1221)
-   [`46c964b`](https://github.com/stdlib-js/stdlib/commit/46c964b8697cd49865726bcf1bf37574a5ff6386) - add `numelDimension` to namespace
-   [`36d1ecc`](https://github.com/stdlib-js/stdlib/commit/36d1eccee290162d423283a088d9467f3a06d475) - add `flag` to namespace
-   [`25bde3f`](https://github.com/stdlib-js/stdlib/commit/25bde3f0411e0256e1f93ab2537ece9eefebd5df) - add `flags` to namespace
-   [`b97dcf0`](https://github.com/stdlib-js/stdlib/commit/b97dcf02f8b10885152891ba521f3ed72706d397) - add `maybeBroadcastArrays` to namespace
-   [`dc5bb62`](https://github.com/stdlib-js/stdlib/commit/dc5bb62c65148f6d6dadb351a2b9d0a26134473d) - add `broadcastArrays` to namespace
-   [`783804d`](https://github.com/stdlib-js/stdlib/commit/783804dbc9b3899c5227c5593e0ca1e8a6a9f195) - update namespace TypeScript declarations [(#1170)](https://github.com/stdlib-js/stdlib/pull/1170)
-   [`9f19a74`](https://github.com/stdlib-js/stdlib/commit/9f19a74b5e8907f2925f3bc21f002a260031c564) - add `stride` to namespace
-   [`8a27986`](https://github.com/stdlib-js/stdlib/commit/8a279869a4a7c154d239f4e7af037833350e208f) - add support for `normalize` index mode

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-broadcast-arrays-v0.2.0">

#### [@stdlib/ndarray/base/broadcast-arrays](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/broadcast-arrays)

<details>

<section class="features">

##### Features

-   [`d47c764`](https://github.com/stdlib-js/stdlib/commit/d47c7648f41c6622489321f7ee36b875acd117f6) - add `ndarray/base/broadcast-arrays`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-empty-v0.2.0">

#### [@stdlib/ndarray/base/empty](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/empty)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`def989d`](https://github.com/stdlib-js/stdlib/commit/def989d20c35d4cb0834e91324177abc8f522626) - resolve type declaration typo by removing stray lint directive

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-flag-v0.2.0">

#### [@stdlib/ndarray/base/flag](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/flag)

<details>

<section class="features">

##### Features

-   [`e557f2b`](https://github.com/stdlib-js/stdlib/commit/e557f2bd167692a6d0c67e8b9b0133a72d91903c) - add `ndarray/base/flag`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-flags-v0.2.0">

#### [@stdlib/ndarray/base/flags](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/flags)

<details>

<section class="features">

##### Features

-   [`181c73e`](https://github.com/stdlib-js/stdlib/commit/181c73e2f2b9a88ddfe95df533e975a1b1c3a469) - add `ndarray/base/flags`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-ind-v0.2.0">

#### [@stdlib/ndarray/base/ind](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/ind)

<details>

<section class="features">

##### Features

-   [`f3d3f4f`](https://github.com/stdlib-js/stdlib/commit/f3d3f4f4d69804a3f31bdb542abf1aca9f3576d9) - add a `factory` method to allow for partial application
-   [`a7d2960`](https://github.com/stdlib-js/stdlib/commit/a7d2960bebae832e80d61cadeb2a1b6d719f0db1) - add support for returning a normalized index

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-ind2sub-v0.2.0">

#### [@stdlib/ndarray/base/ind2sub](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/ind2sub)

<details>

<section class="features">

##### Features

-   [`8e18e43`](https://github.com/stdlib-js/stdlib/commit/8e18e43bbd0b553e32bd5e8df1d36d4a8cc9d8c3) - add support for `normalize` index mode

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-maybe-broadcast-arrays-v0.2.0">

#### [@stdlib/ndarray/base/maybe-broadcast-arrays](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/maybe-broadcast-arrays)

<details>

<section class="features">

##### Features

-   [`74d4f9f`](https://github.com/stdlib-js/stdlib/commit/74d4f9f193420a70ea40fb576d667d582da5cd6f) - add `ndarray/base/maybe-broadcast-arrays`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-nullary-v0.2.0">

#### [@stdlib/ndarray/base/nullary](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/nullary)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`ba92c62`](https://github.com/stdlib-js/stdlib/commit/ba92c62429e3f7165f526c72ad37824283b459d7) - remove related section

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-nullary-loop-interchange-order-v0.2.0">

#### [@stdlib/ndarray/base/nullary-loop-interchange-order](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/nullary-loop-interchange-order)

<details>

<section class="features">

##### Features

-   [`c73cbe7`](https://github.com/stdlib-js/stdlib/commit/c73cbe76e440cf2e4211467d0db69d752409054d) - add support for returning dimension indices

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-numel-dimension-v0.2.0">

#### [@stdlib/ndarray/base/numel-dimension](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/numel-dimension)

<details>

<section class="features">

##### Features

-   [`6224528`](https://github.com/stdlib-js/stdlib/commit/62245282f95e98d2fe25e5aadc92f9d196ff25c5) - add `ndarray/base/numel-dimension`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-slice-from-v0.2.0">

#### [@stdlib/ndarray/base/slice-from](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/slice-from)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`c8241c2`](https://github.com/stdlib-js/stdlib/commit/c8241c254b2ab5e5116f293ad2f8165c38ac9f4e) - ensure ability to return an empty slice in strict mode

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-stride-v0.2.0">

#### [@stdlib/ndarray/base/stride](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/stride)

<details>

<section class="features">

##### Features

-   [`b4aa572`](https://github.com/stdlib-js/stdlib/commit/b4aa5729cbf528faac2a81b2bf73d11f9f3ad39f) - add `ndarray/base/stride`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-sub2ind-v0.2.0">

#### [@stdlib/ndarray/base/sub2ind](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/sub2ind)

<details>

<section class="features">

##### Features

-   [`5363916`](https://github.com/stdlib-js/stdlib/commit/5363916b97a8b70622fff6d8663760d3582e4336) - add support for `normalize` index mode

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-vind2-v0.2.0">

#### [@stdlib/ndarray/base/vind2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/vind2)

<details>

<section class="features">

##### Features

-   [`274da55`](https://github.com/stdlib-js/stdlib/commit/274da55cfd025bbc1f1bf59d5c7e71ed12250ae4) - add support for `normalize` index mode

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-zeros-v0.2.0">

#### [@stdlib/ndarray/base/zeros](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/zeros)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`def989d`](https://github.com/stdlib-js/stdlib/commit/def989d20c35d4cb0834e91324177abc8f522626) - resolve type declaration typo by removing stray lint directive

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-broadcast-arrays-v0.2.0">

#### [@stdlib/ndarray/broadcast-arrays](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/broadcast-arrays)

<details>

<section class="features">

##### Features

-   [`f3b79c9`](https://github.com/stdlib-js/stdlib/commit/f3b79c9696d2db950fb28874e4ca8d2562bd38f7) - add `ndarray/broadcast-arrays`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-ctor-v0.2.0">

#### [@stdlib/ndarray/ctor](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/ctor)

<details>

<section class="features">

##### Features

-   [`5c9d067`](https://github.com/stdlib-js/stdlib/commit/5c9d067cfaf35e20ff0dde4943f9e75a9ceb6037) - add tests and update docs for `normalize` index mode support

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-dispatch-v0.2.0">

#### [@stdlib/ndarray/dispatch](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/dispatch)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`f204b3f`](https://github.com/stdlib-js/stdlib/commit/f204b3fd61259968e39e91aa3579df62c6fda2ca) - resolve type declaration typo by removing stray lint directive [(#1133)](https://github.com/stdlib-js/stdlib/pull/1133)
-   [`e3a8985`](https://github.com/stdlib-js/stdlib/commit/e3a898537dc0ff2e08c24fbb5a6e58c6394fcd0c) - move links

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-dispatch-by-v0.2.0">

#### [@stdlib/ndarray/dispatch-by](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/dispatch-by)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`8fccaaa`](https://github.com/stdlib-js/stdlib/commit/8fccaaa1d2ce14f2ee512f0ea307b53f9bd16211) - move links

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-dtypes-v0.2.0">

#### [@stdlib/ndarray/dtypes](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/dtypes)

<details>

<section class="features">

##### Features

-   [`e90a075`](https://github.com/stdlib-js/stdlib/commit/e90a075eea2dbfe41a5b19209226316544f95f4d) - improve type specificity of return type and update examples

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-empty-v0.2.0">

#### [@stdlib/ndarray/empty](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/empty)

<details>

<section class="features">

##### Features

-   [`9ed4346`](https://github.com/stdlib-js/stdlib/commit/9ed4346eb686d5c3d95467dfd8db4a6f5ef5fb6b) - document support for `normalize` index mode

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`def989d`](https://github.com/stdlib-js/stdlib/commit/def989d20c35d4cb0834e91324177abc8f522626) - resolve type declaration typo by removing stray lint directive

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-empty-like-v0.2.0">

#### [@stdlib/ndarray/empty-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/empty-like)

<details>

<section class="features">

##### Features

-   [`55928ab`](https://github.com/stdlib-js/stdlib/commit/55928abe7265b9edf33b2aae02acaabe567ce4b2) - document support for `normalize` index mode

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-fancy-v0.2.0">

#### [@stdlib/ndarray/fancy](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/fancy)

<details>

<section class="features">

##### Features

-   [`6ee30cd`](https://github.com/stdlib-js/stdlib/commit/6ee30cdbe8fe3148bf6b0316db4303da154e10c3) - document support for `normalize` index mode

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-flag-v0.2.0">

#### [@stdlib/ndarray/flag](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/flag)

<details>

<section class="features">

##### Features

-   [`54c0fd9`](https://github.com/stdlib-js/stdlib/commit/54c0fd9fa9efd14e3fd6033e03b3769841d6cf2d) - add `ndarray/flag`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`452059f`](https://github.com/stdlib-js/stdlib/commit/452059f1b75eff6c5f3d9153be44616427e3ae3d) - add missing `format` call

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-flags-v0.2.0">

#### [@stdlib/ndarray/flags](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/flags)

<details>

<section class="features">

##### Features

-   [`04502ec`](https://github.com/stdlib-js/stdlib/commit/04502ecbc5c181ca74a2da97c122fd3b7622a987) - add `ndarray/flags`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-ind2sub-v0.2.0">

#### [@stdlib/ndarray/ind2sub](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/ind2sub)

<details>

<section class="features">

##### Features

-   [`12102f1`](https://github.com/stdlib-js/stdlib/commit/12102f1b974064f4c0ca0156e435e9299ad75c68) - add support for `normalize` index mode

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`08d72b4`](https://github.com/stdlib-js/stdlib/commit/08d72b4a33847fd4ce8da0eca7875eaac118e68c) - improve type declarations

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-index-modes-v0.2.0">

#### [@stdlib/ndarray/index-modes](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/index-modes)

<details>

<section class="features">

##### Features

-   [`272081f`](https://github.com/stdlib-js/stdlib/commit/272081ff11f0b57f3d83f61abc409dbc3aa74821) - add support for a `normalize` index mode

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-iter-v0.2.0">

#### [@stdlib/ndarray/iter](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/iter)

<details>

<section class="features">

##### Features

-   [`d9952f2`](https://github.com/stdlib-js/stdlib/commit/d9952f2a25042570dfe5b20a2dacc4a07cec81c4) - update namespace TypeScript declarations [(#1128)](https://github.com/stdlib-js/stdlib/pull/1128)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-maybe-broadcast-arrays-v0.2.0">

#### [@stdlib/ndarray/maybe-broadcast-arrays](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/maybe-broadcast-arrays)

<details>

<section class="features">

##### Features

-   [`5d0f444`](https://github.com/stdlib-js/stdlib/commit/5d0f444b334e2621c96e187a825d92bf410f8d03) - add `ndarray/maybe-broadcast-arrays`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-numel-dimension-v0.2.0">

#### [@stdlib/ndarray/numel-dimension](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/numel-dimension)

<details>

<section class="features">

##### Features

-   [`1124fc6`](https://github.com/stdlib-js/stdlib/commit/1124fc69bbbda00bdaebf3b825795fecd06ce537) - add `ndarray/numel-dimension`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-slice-from-v0.2.0">

#### [@stdlib/ndarray/slice-from](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/slice-from)

<details>

<section class="features">

##### Features

-   [`d0a8bea`](https://github.com/stdlib-js/stdlib/commit/d0a8bea89869e7f72528bae02b7b81ea4430f3f1) - add `ndarray/slice-from`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-slice-to-v0.2.0">

#### [@stdlib/ndarray/slice-to](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/slice-to)

<details>

<section class="features">

##### Features

-   [`44dcbe6`](https://github.com/stdlib-js/stdlib/commit/44dcbe692ae45e070dcd125a801c0f9db73c2f30) - add `ndarray/slice-to`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-stride-v0.2.0">

#### [@stdlib/ndarray/stride](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/stride)

<details>

<section class="features">

##### Features

-   [`eeb2bdd`](https://github.com/stdlib-js/stdlib/commit/eeb2bddf52087c4de74898de681e090cec03426d) - add `ndarray/stride`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-sub2ind-v0.2.0">

#### [@stdlib/ndarray/sub2ind](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/sub2ind)

<details>

<section class="features">

##### Features

-   [`dd80dd0`](https://github.com/stdlib-js/stdlib/commit/dd80dd06ee514621c7cda8acea17c06add946336) - add support for `normalize` index mode

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-zeros-v0.2.0">

#### [@stdlib/ndarray/zeros](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/zeros)

<details>

<section class="features">

##### Features

-   [`cc475bc`](https://github.com/stdlib-js/stdlib/commit/cc475bc4eb69351b15b231bf42257744e25635cd) - document support for `normalize` index mode

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-zeros-like-v0.2.0">

#### [@stdlib/ndarray/zeros-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/zeros-like)

<details>

<section class="features">

##### Features

-   [`4ea3975`](https://github.com/stdlib-js/stdlib/commit/4ea39750d4b9d772deb1b4ee374275e3ee995599) - document support for `normalize` index mode

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

</section>

<!-- /.packages -->

<section class="contributors">

### Contributors

A total of 3 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Daniel Killenberger
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`42b1c7e`](https://github.com/stdlib-js/stdlib/commit/42b1c7e18fadf89854f359a3a01cf37c66dd66cc) - **docs:** update related packages sections [(#1290)](https://github.com/stdlib-js/stdlib/pull/1290) _(by stdlib-bot)_
-   [`2693e3b`](https://github.com/stdlib-js/stdlib/commit/2693e3b3f0382542a51fc57d78e9ab59e2dc0681) - **feat:** update namespace TypeScript declarations [(#1287)](https://github.com/stdlib-js/stdlib/pull/1287) _(by stdlib-bot, Athan Reines)_
-   [`08e9376`](https://github.com/stdlib-js/stdlib/commit/08e9376a82d3641f0482a83c7d8ad39ce8a63ae6) - **docs:** update namespace table of contents [(#1288)](https://github.com/stdlib-js/stdlib/pull/1288) _(by stdlib-bot, Athan Reines)_
-   [`babf9b1`](https://github.com/stdlib-js/stdlib/commit/babf9b181c3a196d6541e7d7347b263d8844480e) - **feat:** add `ndat` to namespace _(by Athan Reines)_
-   [`c553280`](https://github.com/stdlib-js/stdlib/commit/c55328043b8ede3ff02562cb27fc005ef80bb150) - **feat:** add `ndarray/at` _(by Athan Reines)_
-   [`f04074a`](https://github.com/stdlib-js/stdlib/commit/f04074abd0c151f1b92c58b8cd71ecb9279803e0) - **docs:** update related packages sections [(#1276)](https://github.com/stdlib-js/stdlib/pull/1276) _(by stdlib-bot)_
-   [`c73cbe7`](https://github.com/stdlib-js/stdlib/commit/c73cbe76e440cf2e4211467d0db69d752409054d) - **feat:** add support for returning dimension indices _(by Athan Reines)_
-   [`a33d506`](https://github.com/stdlib-js/stdlib/commit/a33d506252c11f20153e0de408996ee8798bb4ae) - **docs:** fix comments _(by Athan Reines)_
-   [`8cec00e`](https://github.com/stdlib-js/stdlib/commit/8cec00e2ba3e5a446a378a932beae01eb400ea8a) - **docs:** fix copy-paste error _(by Athan Reines)_
-   [`1e909db`](https://github.com/stdlib-js/stdlib/commit/1e909dbafa41bfc46d3f5525a73b5f46cd7a5392) - **docs:** update related packages sections [(#1267)](https://github.com/stdlib-js/stdlib/pull/1267) _(by stdlib-bot)_
-   [`e8cf70a`](https://github.com/stdlib-js/stdlib/commit/e8cf70aa37d29998ec2b4c31f21e41c0ac8c4006) - **docs:** update related packages sections [(#1263)](https://github.com/stdlib-js/stdlib/pull/1263) _(by stdlib-bot)_
-   [`d2d2b70`](https://github.com/stdlib-js/stdlib/commit/d2d2b707e954b400b72b7b9f158164d026d09636) - **docs:** update related packages sections [(#1261)](https://github.com/stdlib-js/stdlib/pull/1261) _(by stdlib-bot)_
-   [`68413e0`](https://github.com/stdlib-js/stdlib/commit/68413e05376206b18c4ff8662a8568a189dad77e) - **feat:** update namespace TypeScript declarations [(#1221)](https://github.com/stdlib-js/stdlib/pull/1221) _(by stdlib-bot, Philipp Burckhardt)_
-   [`f1ab4d8`](https://github.com/stdlib-js/stdlib/commit/f1ab4d8fc34236a8651961095815548871db7ccd) - **refactor:** remove export of unready function _(by Philipp Burckhardt)_
-   [`96489fa`](https://github.com/stdlib-js/stdlib/commit/96489fa603a2920bef92fb38b49ca9468851714d) - **docs:** update namespace table of contents [(#1251)](https://github.com/stdlib-js/stdlib/pull/1251) _(by stdlib-bot, Philipp Burckhardt)_
-   [`dea49e0`](https://github.com/stdlib-js/stdlib/commit/dea49e03ab5571233e3da26835a6a6d3256d5737) - **docs:** use single quotes in require calls instead of backticks _(by Philipp Burckhardt)_
-   [`5c8d407`](https://github.com/stdlib-js/stdlib/commit/5c8d407a1ae6fb6128343b7465741922369d500a) - **docs:** update related packages sections [(#1255)](https://github.com/stdlib-js/stdlib/pull/1255) _(by stdlib-bot)_
-   [`ebde8f6`](https://github.com/stdlib-js/stdlib/commit/ebde8f607ac62b5a33c48347394ef592e2acd74c) - **test:** fix test descriptions _(by Athan Reines)_
-   [`95a9ea6`](https://github.com/stdlib-js/stdlib/commit/95a9ea6d7b6ab41d523232bb34022e490afb2fa9) - **test:** fix test descriptions _(by Athan Reines)_
-   [`8affb20`](https://github.com/stdlib-js/stdlib/commit/8affb20402cfd15cf33663a601541b36cc7edb56) - **docs:** update related packages sections [(#1248)](https://github.com/stdlib-js/stdlib/pull/1248) _(by stdlib-bot)_
-   [`7680fb8`](https://github.com/stdlib-js/stdlib/commit/7680fb8c8acf1515e6e77ebf59ff1529bb13066d) - **feat:** add `numelDimension` to namespace _(by Athan Reines)_
-   [`1124fc6`](https://github.com/stdlib-js/stdlib/commit/1124fc69bbbda00bdaebf3b825795fecd06ce537) - **feat:** add `ndarray/numel-dimension` _(by Athan Reines)_
-   [`46c964b`](https://github.com/stdlib-js/stdlib/commit/46c964b8697cd49865726bcf1bf37574a5ff6386) - **feat:** add `numelDimension` to namespace _(by Athan Reines)_
-   [`6224528`](https://github.com/stdlib-js/stdlib/commit/62245282f95e98d2fe25e5aadc92f9d196ff25c5) - **feat:** add `ndarray/base/numel-dimension` _(by Athan Reines)_
-   [`82e6932`](https://github.com/stdlib-js/stdlib/commit/82e69321894166757380db502db9241db7821616) - **test:** fix test description and function invocations _(by Athan Reines)_
-   [`1b94b32`](https://github.com/stdlib-js/stdlib/commit/1b94b32f45d7f1728d5b352043fa0dda99fbbaab) - **test:** fix test description _(by Athan Reines)_
-   [`a405ab5`](https://github.com/stdlib-js/stdlib/commit/a405ab5dd0d868566f7e4efe2dcf605908367632) - **refactor:** use base utility to resolve an ndarray flag _(by Athan Reines)_
-   [`452059f`](https://github.com/stdlib-js/stdlib/commit/452059f1b75eff6c5f3d9153be44616427e3ae3d) - **fix:** add missing `format` call _(by Athan Reines)_
-   [`e90a075`](https://github.com/stdlib-js/stdlib/commit/e90a075eea2dbfe41a5b19209226316544f95f4d) - **feat:** improve type specificity of return type and update examples _(by Athan Reines)_
-   [`a6eb07f`](https://github.com/stdlib-js/stdlib/commit/a6eb07f21ba96025798827e611c337d4239492aa) - **docs:** update namespace table of contents [(#1245)](https://github.com/stdlib-js/stdlib/pull/1245) _(by stdlib-bot, Athan Reines)_
-   [`6bbca95`](https://github.com/stdlib-js/stdlib/commit/6bbca954939bdbfbfd31fe8c402bc06cdb1addf7) - **refactor:** test for number primitive _(by Athan Reines)_
-   [`a553fb9`](https://github.com/stdlib-js/stdlib/commit/a553fb98429007e306fa7a091d5092341a672b51) - **test:** fix broken tests _(by Athan Reines)_
-   [`2e7df3f`](https://github.com/stdlib-js/stdlib/commit/2e7df3f99cdcdd34675503027c26af5d8d47630a) - **feat:** add `ndarrayFlag` to namespace _(by Athan Reines)_
-   [`54c0fd9`](https://github.com/stdlib-js/stdlib/commit/54c0fd9fa9efd14e3fd6033e03b3769841d6cf2d) - **feat:** add `ndarray/flag` _(by Athan Reines)_
-   [`7e1700c`](https://github.com/stdlib-js/stdlib/commit/7e1700c858e6cc93086ef4ac25d41c2ac12de629) - **docs:** fix description _(by Athan Reines)_
-   [`2abfe17`](https://github.com/stdlib-js/stdlib/commit/2abfe170316726b7ad02d21a7cb84a25c5434e69) - **feat:** add `ndarrayFlags` to namespace _(by Athan Reines)_
-   [`04502ec`](https://github.com/stdlib-js/stdlib/commit/04502ecbc5c181ca74a2da97c122fd3b7622a987) - **feat:** add `ndarray/flags` _(by Athan Reines)_
-   [`8713747`](https://github.com/stdlib-js/stdlib/commit/87137479521daec5b4df0376fe9038107727d7b2) - **refactor:** preserve type information for individual flags _(by Athan Reines)_
-   [`558baf5`](https://github.com/stdlib-js/stdlib/commit/558baf5c1626333a9a198c75fc0889ddc131e489) - **refactor:** use `Flags` interface _(by Athan Reines)_
-   [`36d1ecc`](https://github.com/stdlib-js/stdlib/commit/36d1eccee290162d423283a088d9467f3a06d475) - **feat:** add `flag` to namespace _(by Athan Reines)_
-   [`e557f2b`](https://github.com/stdlib-js/stdlib/commit/e557f2bd167692a6d0c67e8b9b0133a72d91903c) - **feat:** add `ndarray/base/flag` _(by Athan Reines)_
-   [`9b87012`](https://github.com/stdlib-js/stdlib/commit/9b87012e598bd0d2692af5d59332cb0e2231e9e8) - **docs:** update related packages sections [(#1243)](https://github.com/stdlib-js/stdlib/pull/1243) _(by stdlib-bot)_
-   [`25bde3f`](https://github.com/stdlib-js/stdlib/commit/25bde3f0411e0256e1f93ab2537ece9eefebd5df) - **feat:** add `flags` to namespace _(by Athan Reines)_
-   [`181c73e`](https://github.com/stdlib-js/stdlib/commit/181c73e2f2b9a88ddfe95df533e975a1b1c3a469) - **feat:** add `ndarray/base/flags` _(by Athan Reines)_
-   [`053eb7a`](https://github.com/stdlib-js/stdlib/commit/053eb7a9e7fdca4cb4014fbf2d832c7cc0176407) - **docs:** update namespace table of contents [(#1235)](https://github.com/stdlib-js/stdlib/pull/1235) _(by stdlib-bot, Athan Reines)_
-   [`66a9552`](https://github.com/stdlib-js/stdlib/commit/66a9552307adeddf5d721940938f8d6f492a59b6) - **feat:** add `maybeBroadcastArrays` to namespace _(by Athan Reines)_
-   [`5d0f444`](https://github.com/stdlib-js/stdlib/commit/5d0f444b334e2621c96e187a825d92bf410f8d03) - **feat:** add `ndarray/maybe-broadcast-arrays` _(by Athan Reines)_
-   [`32f45b3`](https://github.com/stdlib-js/stdlib/commit/32f45b31c64957bd6bd2a612eeae35d2a4506a5b) - **feat:** add `broadcastArrays` to namespace _(by Athan Reines)_
-   [`f3b79c9`](https://github.com/stdlib-js/stdlib/commit/f3b79c9696d2db950fb28874e4ca8d2562bd38f7) - **feat:** add `ndarray/broadcast-arrays` _(by Athan Reines)_
-   [`7de0830`](https://github.com/stdlib-js/stdlib/commit/7de08307c48bc60701dd4fab8a7effe7421882f7) - **bench:** fix description _(by Athan Reines)_
-   [`f5242e4`](https://github.com/stdlib-js/stdlib/commit/f5242e4c0c8087451d4851a7873ce35eeddcec8d) - **bench:** fix description _(by Athan Reines)_
-   [`507f951`](https://github.com/stdlib-js/stdlib/commit/507f95109fa161caf41acc5d0fe4dbc7499abfd7) - **refactor:** use accessor to access the input array shape _(by Athan Reines)_
-   [`b97dcf0`](https://github.com/stdlib-js/stdlib/commit/b97dcf02f8b10885152891ba521f3ed72706d397) - **feat:** add `maybeBroadcastArrays` to namespace _(by Athan Reines)_
-   [`74d4f9f`](https://github.com/stdlib-js/stdlib/commit/74d4f9f193420a70ea40fb576d667d582da5cd6f) - **feat:** add `ndarray/base/maybe-broadcast-arrays` _(by Athan Reines)_
-   [`0beacd0`](https://github.com/stdlib-js/stdlib/commit/0beacd0c0007da402d8219c5e7078c7bb1d1ec88) - **docs:** update examples and fix typos _(by Athan Reines)_
-   [`d105983`](https://github.com/stdlib-js/stdlib/commit/d105983b65fd6dbbbf4cf49a6ae00d2d8176fac9) - **docs:** update namespace table of contents [(#1230)](https://github.com/stdlib-js/stdlib/pull/1230) _(by stdlib-bot, Athan Reines)_
-   [`398a2ac`](https://github.com/stdlib-js/stdlib/commit/398a2ac65d2291cf7ea630f3a5665c6395502792) - **docs:** update related packages sections [(#1228)](https://github.com/stdlib-js/stdlib/pull/1228) _(by stdlib-bot)_
-   [`dc5bb62`](https://github.com/stdlib-js/stdlib/commit/dc5bb62c65148f6d6dadb351a2b9d0a26134473d) - **feat:** add `broadcastArrays` to namespace _(by Athan Reines)_
-   [`d47c764`](https://github.com/stdlib-js/stdlib/commit/d47c7648f41c6622489321f7ee36b875acd117f6) - **feat:** add `ndarray/base/broadcast-arrays` _(by Athan Reines)_
-   [`5184bd0`](https://github.com/stdlib-js/stdlib/commit/5184bd0461e8c78f983d4b619a863d93c52c6396) - **docs:** update namespace table of contents [(#1213)](https://github.com/stdlib-js/stdlib/pull/1213) _(by stdlib-bot, Athan Reines)_
-   [`b1e4cca`](https://github.com/stdlib-js/stdlib/commit/b1e4cca30147188064b2275a0242a0334befbcd1) - **feat:** update namespace exports _(by Philipp Burckhardt)_
-   [`783804d`](https://github.com/stdlib-js/stdlib/commit/783804dbc9b3899c5227c5593e0ca1e8a6a9f195) - **feat:** update namespace TypeScript declarations [(#1170)](https://github.com/stdlib-js/stdlib/pull/1170) _(by stdlib-bot, Athan Reines)_
-   [`d575e8b`](https://github.com/stdlib-js/stdlib/commit/d575e8b063a37d90c3178fcff7b425314ae73c98) - **docs:** update related packages sections [(#1167)](https://github.com/stdlib-js/stdlib/pull/1167) _(by stdlib-bot)_
-   [`6ff6caf`](https://github.com/stdlib-js/stdlib/commit/6ff6cafeb4e71cb856ded8e0b42957a627fe617d) - **docs:** update namespace table of contents [(#1162)](https://github.com/stdlib-js/stdlib/pull/1162 ) _(by stdlib-bot)_
-   [`26cf434`](https://github.com/stdlib-js/stdlib/commit/26cf4347b243f1f363273481512e1ffebcb27ad5) - **docs:** update related packages sections [(#1156)](https://github.com/stdlib-js/stdlib/pull/1156) _(by stdlib-bot)_
-   [`2f0cb7e`](https://github.com/stdlib-js/stdlib/commit/2f0cb7ed139b763e65205939511c7cc85b947e64) - **docs:** update related packages sections [(#1154)](https://github.com/stdlib-js/stdlib/pull/1154) _(by stdlib-bot)_
-   [`fca85b7`](https://github.com/stdlib-js/stdlib/commit/fca85b7d10fc3a84033633cfa6034521a6d5aa42) - **feat:** add `ndsliceFrom` to namespace _(by Athan Reines)_
-   [`d0a8bea`](https://github.com/stdlib-js/stdlib/commit/d0a8bea89869e7f72528bae02b7b81ea4430f3f1) - **feat:** add `ndarray/slice-from` _(by Athan Reines)_
-   [`c8241c2`](https://github.com/stdlib-js/stdlib/commit/c8241c254b2ab5e5116f293ad2f8165c38ac9f4e) - **fix:** ensure ability to return an empty slice in strict mode _(by Athan Reines)_
-   [`1f5c1b3`](https://github.com/stdlib-js/stdlib/commit/1f5c1b31400b38d518fac89ba5eadf93e1d4e067) - **docs:** update link and description _(by Athan Reines)_
-   [`e391499`](https://github.com/stdlib-js/stdlib/commit/e3914991ac1b77626f7a10051930f53af0344470) - **feat:** add `ndarrayStride` to namespace _(by Athan Reines)_
-   [`eeb2bdd`](https://github.com/stdlib-js/stdlib/commit/eeb2bddf52087c4de74898de681e090cec03426d) - **feat:** add `ndarray/stride` _(by Athan Reines)_
-   [`654e776`](https://github.com/stdlib-js/stdlib/commit/654e776d259d189482267931abbc4df6f9f544a0) - **refactor:** avoid copying the strides array if possible _(by Athan Reines)_
-   [`4b79950`](https://github.com/stdlib-js/stdlib/commit/4b799504ac2ef9b99526f08f34aba26041f4421a) - **docs:** add note _(by Athan Reines)_
-   [`9f19a74`](https://github.com/stdlib-js/stdlib/commit/9f19a74b5e8907f2925f3bc21f002a260031c564) - **feat:** add `stride` to namespace _(by Athan Reines)_
-   [`b4aa572`](https://github.com/stdlib-js/stdlib/commit/b4aa5729cbf528faac2a81b2bf73d11f9f3ad39f) - **feat:** add `ndarray/base/stride` _(by Athan Reines)_
-   [`57592a3`](https://github.com/stdlib-js/stdlib/commit/57592a33a922a782cf7395fc132260ce6789aa71) - **style:** add missing space _(by Athan Reines)_
-   [`d138eac`](https://github.com/stdlib-js/stdlib/commit/d138eacc068299ac8b928e1f65f6731da68dbcc9) - **feat:** add `ndsliceTo` to namespace _(by Athan Reines)_
-   [`44dcbe6`](https://github.com/stdlib-js/stdlib/commit/44dcbe692ae45e070dcd125a801c0f9db73c2f30) - **feat:** add `ndarray/slice-to` _(by Athan Reines)_
-   [`78a556e`](https://github.com/stdlib-js/stdlib/commit/78a556efa2f1da29eb9081d393f5768ad1518117) - **docs:** update related packages sections [(#1145)](https://github.com/stdlib-js/stdlib/pull/1145) _(by stdlib-bot)_
-   [`34ac72a`](https://github.com/stdlib-js/stdlib/commit/34ac72a3d30bc14b366787a5660c44051d84bec5) - **docs:** document interface and add line break _(by Athan Reines)_
-   [`f3d3f4f`](https://github.com/stdlib-js/stdlib/commit/f3d3f4f4d69804a3f31bdb542abf1aca9f3576d9) - **feat:** add a `factory` method to allow for partial application _(by Athan Reines)_
-   [`ecb0cf1`](https://github.com/stdlib-js/stdlib/commit/ecb0cf1b6dc6374cc27bfc9e74c32a434360dfe1) - **bench:** fix value range _(by Athan Reines)_
-   [`446b4cb`](https://github.com/stdlib-js/stdlib/commit/446b4cbdd8e1e8099fa66e60e5d680a9bb0e3498) - **bench:** fix value range _(by Athan Reines)_
-   [`ca9cb28`](https://github.com/stdlib-js/stdlib/commit/ca9cb280bfa24e713f465838c98328b7aea5a153) - **docs:** ensure notes use consistent grammar _(by Athan Reines)_
-   [`dd80dd0`](https://github.com/stdlib-js/stdlib/commit/dd80dd06ee514621c7cda8acea17c06add946336) - **feat:** add support for `normalize` index mode _(by Athan Reines)_
-   [`08d72b4`](https://github.com/stdlib-js/stdlib/commit/08d72b4a33847fd4ce8da0eca7875eaac118e68c) - **fix:** improve type declarations _(by Athan Reines)_
-   [`12102f1`](https://github.com/stdlib-js/stdlib/commit/12102f1b974064f4c0ca0156e435e9299ad75c68) - **feat:** add support for `normalize` index mode _(by Athan Reines)_
-   [`274da55`](https://github.com/stdlib-js/stdlib/commit/274da55cfd025bbc1f1bf59d5c7e71ed12250ae4) - **feat:** add support for `normalize` index mode _(by Athan Reines)_
-   [`5363916`](https://github.com/stdlib-js/stdlib/commit/5363916b97a8b70622fff6d8663760d3582e4336) - **feat:** add support for `normalize` index mode _(by Athan Reines)_
-   [`8e18e43`](https://github.com/stdlib-js/stdlib/commit/8e18e43bbd0b553e32bd5e8df1d36d4a8cc9d8c3) - **feat:** add support for `normalize` index mode _(by Athan Reines)_
-   [`6ee30cd`](https://github.com/stdlib-js/stdlib/commit/6ee30cdbe8fe3148bf6b0316db4303da154e10c3) - **feat:** document support for `normalize` index mode _(by Athan Reines)_
-   [`4ea3975`](https://github.com/stdlib-js/stdlib/commit/4ea39750d4b9d772deb1b4ee374275e3ee995599) - **feat:** document support for `normalize` index mode _(by Athan Reines)_
-   [`cc475bc`](https://github.com/stdlib-js/stdlib/commit/cc475bc4eb69351b15b231bf42257744e25635cd) - **feat:** document support for `normalize` index mode _(by Athan Reines)_
-   [`55928ab`](https://github.com/stdlib-js/stdlib/commit/55928abe7265b9edf33b2aae02acaabe567ce4b2) - **feat:** document support for `normalize` index mode _(by Athan Reines)_
-   [`9ed4346`](https://github.com/stdlib-js/stdlib/commit/9ed4346eb686d5c3d95467dfd8db4a6f5ef5fb6b) - **feat:** document support for `normalize` index mode _(by Athan Reines)_
-   [`5c9d067`](https://github.com/stdlib-js/stdlib/commit/5c9d067cfaf35e20ff0dde4943f9e75a9ceb6037) - **feat:** add tests and update docs for `normalize` index mode support _(by Athan Reines)_
-   [`a7d2960`](https://github.com/stdlib-js/stdlib/commit/a7d2960bebae832e80d61cadeb2a1b6d719f0db1) - **feat:** add support for returning a normalized index _(by Athan Reines)_
-   [`4f15a40`](https://github.com/stdlib-js/stdlib/commit/4f15a4060127c61a00f7ebb395afadee3ecf7736) - **test:** add tests to ensure support for `normalize` index mode _(by Athan Reines)_
-   [`2d7299c`](https://github.com/stdlib-js/stdlib/commit/2d7299c9dd91a44022ae26513a40658105c7ae1b) - **docs:** document support for `normalize` index mode _(by Athan Reines)_
-   [`8a27986`](https://github.com/stdlib-js/stdlib/commit/8a279869a4a7c154d239f4e7af037833350e208f) - **feat:** add support for `normalize` index mode _(by Athan Reines)_
-   [`dffeaf2`](https://github.com/stdlib-js/stdlib/commit/dffeaf27e1c892ddb13dc581a1525abfa9b0a8ff) - **refactor:** use array contains utility and add support for `normalize` index mode _(by Athan Reines)_
-   [`272081f`](https://github.com/stdlib-js/stdlib/commit/272081ff11f0b57f3d83f61abc409dbc3aa74821) - **feat:** add support for a `normalize` index mode _(by Athan Reines)_
-   [`30e3541`](https://github.com/stdlib-js/stdlib/commit/30e35413446e1f46eb385bb811db2297bfc66bb0) - **refactor:** update require path _(by Athan Reines)_
-   [`f87e2ee`](https://github.com/stdlib-js/stdlib/commit/f87e2eecc0cb47d8ad15f63dc0d94405e040ac2f) - **refactor:** update require path _(by Athan Reines)_
-   [`def989d`](https://github.com/stdlib-js/stdlib/commit/def989d20c35d4cb0834e91324177abc8f522626) - **fix:** resolve type declaration typo by removing stray lint directive _(by Philipp Burckhardt)_
-   [`f204b3f`](https://github.com/stdlib-js/stdlib/commit/f204b3fd61259968e39e91aa3579df62c6fda2ca) - **fix:** resolve type declaration typo by removing stray lint directive [(#1133)](https://github.com/stdlib-js/stdlib/pull/1133) _(by Daniel Killenberger)_
-   [`bcb4079`](https://github.com/stdlib-js/stdlib/commit/bcb4079adf3e31d33d28db5dff21558c9e6bd5be) - **build:** remove and replace tslint directives _(by Philipp Burckhardt)_
-   [`23114c6`](https://github.com/stdlib-js/stdlib/commit/23114c65f67ea8c17fc835e280408c39544dfa76) - **build:** remove tslint directives _(by Philipp Burckhardt)_
-   [`6a9cc0e`](https://github.com/stdlib-js/stdlib/commit/6a9cc0e47fa5783053f8fd2895ea76f5deea0829) - **build:** replace tslint directive with eslint equivalent _(by Philipp Burckhardt)_
-   [`5497c40`](https://github.com/stdlib-js/stdlib/commit/5497c40ce46dfa7c4de64d15526ba794446487e2) - **build:** replace tslint directive with eslint equivalent _(by Philipp Burckhardt)_
-   [`b496b72`](https://github.com/stdlib-js/stdlib/commit/b496b72595355b5a794c940bd7f81ea5223b91bd) - **build:** replace tslint directive with eslint equivalent _(by Philipp Burckhardt)_
-   [`9502ed2`](https://github.com/stdlib-js/stdlib/commit/9502ed27e2853e312c556a48bdd7775095e66709) - **build:** replace tslint directive with eslint equivalent _(by Philipp Burckhardt)_
-   [`46d049b`](https://github.com/stdlib-js/stdlib/commit/46d049b5d38f9ef6e426d6a517ac8925c94d7642) - **build:** replace tslint directive _(by Philipp Burckhardt)_
-   [`de93ae0`](https://github.com/stdlib-js/stdlib/commit/de93ae01f1d5e234696e02b9e778d3d71515f5b7) - **build:** remove tslint directives _(by Philipp Burckhardt)_
-   [`6134859`](https://github.com/stdlib-js/stdlib/commit/61348590284d468ea52a07c51a68219407588757) - **fix:** flatten nested arrays in (co)lexicographic order _(by Athan Reines)_
-   [`d9952f2`](https://github.com/stdlib-js/stdlib/commit/d9952f2a25042570dfe5b20a2dacc4a07cec81c4) - **feat:** update namespace TypeScript declarations [(#1128)](https://github.com/stdlib-js/stdlib/pull/1128) _(by stdlib-bot, Athan Reines)_
-   [`2ee04a1`](https://github.com/stdlib-js/stdlib/commit/2ee04a1a56367b9663698aa0d01c10dca8d716df) - **docs:** update namespace ToCs _(by Athan Reines)_
-   [`6b34523`](https://github.com/stdlib-js/stdlib/commit/6b3452322174342479d6c8b3277c3efee65d4cc0) - **docs:** update links _(by Athan Reines)_
-   [`6c6d8bd`](https://github.com/stdlib-js/stdlib/commit/6c6d8bdd9de3d0b1e0c2cdaa56d677166b5434bd) - **docs:** update links _(by Athan Reines)_
-   [`8c8e3d1`](https://github.com/stdlib-js/stdlib/commit/8c8e3d15f6698c81c75fc94fa10a7e2b9fb8b5d9) - **docs:** update links _(by Athan Reines)_
-   [`ba92c62`](https://github.com/stdlib-js/stdlib/commit/ba92c62429e3f7165f526c72ad37824283b459d7) - **fix:** remove related section _(by Athan Reines)_
-   [`1e55c4b`](https://github.com/stdlib-js/stdlib/commit/1e55c4be392d4453a136bed034653452986821d7) - **docs:** remove related packages _(by Athan Reines)_
-   [`e3a8985`](https://github.com/stdlib-js/stdlib/commit/e3a898537dc0ff2e08c24fbb5a6e58c6394fcd0c) - **fix:** move links _(by Athan Reines)_
-   [`8fccaaa`](https://github.com/stdlib-js/stdlib/commit/8fccaaa1d2ce14f2ee512f0ea307b53f9bd16211) - **fix:** move links _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.1">

## 0.1.1 (2023-11-08)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-11-08)

<section class="packages">

### Packages

<section class="package" id="ndarray-v0.1.0">

#### [@stdlib/ndarray](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray)

<details>

<section class="features">

##### Features

-   [`7faffe3`](https://github.com/stdlib-js/stdlib/commit/7faffe325bbf186b14c3dfef621e9d4cc56b47ff) - update namespace TypeScript declarations [(#1122)](https://github.com/stdlib-js/stdlib/pull/1122)
-   [`c54dc22`](https://github.com/stdlib-js/stdlib/commit/c54dc2221daaeb94f148dd042f68f28e27afee34) - add `ndsliceDimensionFrom`
-   [`1b0fc06`](https://github.com/stdlib-js/stdlib/commit/1b0fc06ec87f77a925ec0881f3aeda270759be14) - add `ndsliceDimensionTo` to namespace
-   [`1ee8ca1`](https://github.com/stdlib-js/stdlib/commit/1ee8ca150bc67b905084fe89d20f6102ed823794) - add `ndarrayMostlySafeCasts` to namespace
-   [`b5c4543`](https://github.com/stdlib-js/stdlib/commit/b5c454313c1f2cce40a913f889093410608246bf) - add `ndsliceDimension` to namespace
-   [`3eeff0a`](https://github.com/stdlib-js/stdlib/commit/3eeff0a0843cbe3c94c814def9f26b5caa4ed429) - add `ndarrayDataBuffer` to namespace
-   [`a2b2082`](https://github.com/stdlib-js/stdlib/commit/a2b208201a324c5efea72831cc35da60fe560583) - add `ndarray/data-buffer`
-   [`6cd4e38`](https://github.com/stdlib-js/stdlib/commit/6cd4e38150c7b040fa6266f71113b35944896167) - rename aliases
-   [`b38f7f8`](https://github.com/stdlib-js/stdlib/commit/b38f7f89759f2f8577c1184a9b0cd71d412db8a2) - add `ndorder` to namespace
-   [`a0baf19`](https://github.com/stdlib-js/stdlib/commit/a0baf191ee0dd9c4fa49229ced25c00cd25ca4a9) - add `ndarrayDataType` to namespace
-   [`6eb1720`](https://github.com/stdlib-js/stdlib/commit/6eb1720344be2cc2e1ac46ae1aef501edc0dc4a2) - add `ndstrides` to namespace
-   [`482bd69`](https://github.com/stdlib-js/stdlib/commit/482bd6970166f88f832e4d0e241b2fc1d0d780ea) - add `ndshape` to namespace
-   [`e20c23e`](https://github.com/stdlib-js/stdlib/commit/e20c23e36bdb2904b2aa51a47a5cd674bdc377d0) - add `ndoffset` to namespace
-   [`94b7c2d`](https://github.com/stdlib-js/stdlib/commit/94b7c2da42e0d782ccd380503ec6770a0c671822) - add `ndims` to namespace
-   [`3514d7d`](https://github.com/stdlib-js/stdlib/commit/3514d7d812aaad71eaaf60dd570bf460758319f2) - add `numel` to namespace
-   [`3e3d62e`](https://github.com/stdlib-js/stdlib/commit/3e3d62e3b7dd32fce3cb16ae1457729fdbecdaf7) - add `maybeBroadcastArray` to namespace
-   [`9759a2c`](https://github.com/stdlib-js/stdlib/commit/9759a2c124154866e00bcba3c19647e45079ce56) - add `broadcastArray` to namespace
-   [`fdebad4`](https://github.com/stdlib-js/stdlib/commit/fdebad409c163e0358421db3705d37768c8bca32) - add `iter` to namespace
-   [`6d9677a`](https://github.com/stdlib-js/stdlib/commit/6d9677a1d879fd369ad1145d43b3334659c5d10f) - add `ndsliceAssign` to namespace
-   [`c3ff11f`](https://github.com/stdlib-js/stdlib/commit/c3ff11f96e30d608107ed1c7034792b40adc4ca0) - add `FancyArray` to namespace
-   [`c26a733`](https://github.com/stdlib-js/stdlib/commit/c26a7337fcc5c1d1c50d492d6ea362d7bc360810) - add `ndslice` to namespace
-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`3556d4e`](https://github.com/stdlib-js/stdlib/commit/3556d4e588a0840c788c02b357a7b8d87e575f78) - add `defaults` to namespace
-   [`a3a7a45`](https://github.com/stdlib-js/stdlib/commit/a3a7a4579edeb83503df22604e0ee47b60184ad3) - add `ndarrayOutputDataTypePolicies` to namespace
-   [`3da30d7`](https://github.com/stdlib-js/stdlib/commit/3da30d74baf9e5ee13c299cf33a767fd071f1694) - add `ndemptyLike` to namespace
-   [`8306cb9`](https://github.com/stdlib-js/stdlib/commit/8306cb9fedf86eb1d090149e4beed3d23fdee4b0) - add `ndempty` to namespace
-   [`1c450ba`](https://github.com/stdlib-js/stdlib/commit/1c450ba6f265f5160dd66a0638efcc8899fc119a) - add `ndarray2array` to namespace

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`72c6fa0`](https://github.com/stdlib-js/stdlib/commit/72c6fa09c02e49ff622030040703aee18ddfd3e8) - rename alias from `ndorder` to `ndarrayOrder` to match existing convention

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`6cd4e38`](https://github.com/stdlib-js/stdlib/commit/6cd4e38150c7b040fa6266f71113b35944896167): rename aliases

    -   To migrate, users should make the following name changes:
        ndoffset => ndarrayOffset
        ndshape => ndarrayShape
        ndstrides => ndarrayStrides
        This renaming allows for more consistent naming conventions with
        other ndarray utility functions.

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-array-v0.1.0">

#### [@stdlib/ndarray/array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/array)

<details>

<section class="features">

##### Features

-   [`9b8ad73`](https://github.com/stdlib-js/stdlib/commit/9b8ad73643ef01a8382e65c668b6a39c01be06a1) - convert declaration to generic to provide additional type information
-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`267e16e`](https://github.com/stdlib-js/stdlib/commit/267e16e021c86a2dbfeefc4112b3008ac7638688) - add support for complex numbers and provided ndarrays having arbitrary rank

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-v0.1.0">

#### [@stdlib/ndarray/base](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base)

<details>

<section class="features">

##### Features

-   [`7faffe3`](https://github.com/stdlib-js/stdlib/commit/7faffe325bbf186b14c3dfef621e9d4cc56b47ff) - update namespace TypeScript declarations [(#1122)](https://github.com/stdlib-js/stdlib/pull/1122)
-   [`d90228a`](https://github.com/stdlib-js/stdlib/commit/d90228a01f71e0b0a9e443377e711549040ecf31) - add `sliceDimensionFrom` to namespace
-   [`229ab6e`](https://github.com/stdlib-js/stdlib/commit/229ab6efd7b1b93991b78a9399d071e23522e633) - add `sliceDimensionTo` to namespace
-   [`67592b8`](https://github.com/stdlib-js/stdlib/commit/67592b82b088e4b8516f4f5e210368c96cbb4c11) - add `normalizeIndex` to namespace
-   [`a41ecbd`](https://github.com/stdlib-js/stdlib/commit/a41ecbd20541d1f60bc30db109b2599021cc4e47) - add `sliceFrom` to namespace
-   [`54401ac`](https://github.com/stdlib-js/stdlib/commit/54401acffc828b45fbe3cabe6b17f305cb4170b0) - add `sliceTo` to namespace
-   [`2934e57`](https://github.com/stdlib-js/stdlib/commit/2934e576d314c60fc6198228d33282a1ab4f76c1) - add `flipud` to namespace
-   [`013beaa`](https://github.com/stdlib-js/stdlib/commit/013beaa9f51f64fb56a25ab95dc85a0f849dc1ad) - add `fliplr` to namespace
-   [`b390e0b`](https://github.com/stdlib-js/stdlib/commit/b390e0bdfc5f184568b70ddd3d9b4a9cd92dbf9e) - add `reverseDimension` to namespace
-   [`be83095`](https://github.com/stdlib-js/stdlib/commit/be83095aaf7d0dec724ac1d42135459f33ca38af) - add `reverse` to namespace
-   [`f4cb44c`](https://github.com/stdlib-js/stdlib/commit/f4cb44c4a2f34211b7f53aa1e7e49e564445268b) - add `assign` to namespace
-   [`b985417`](https://github.com/stdlib-js/stdlib/commit/b9854176622b79eb7338247ac9d77ec0d22dc3a7) - add `data` to namespace
-   [`0786d6c`](https://github.com/stdlib-js/stdlib/commit/0786d6c0bc1087b5748b42632c6b8efebcb147ad) - add `ndarray/base/data-buffer`
-   [`3a2e182`](https://github.com/stdlib-js/stdlib/commit/3a2e182a27fd4d6ca7d5b518cf24570c273a2556) - add `order` to namespace
-   [`88e5849`](https://github.com/stdlib-js/stdlib/commit/88e58498365a51ba56218c74a4767e89eb5061cc) - add `dtype` to namespace
-   [`ed14448`](https://github.com/stdlib-js/stdlib/commit/ed1444886a2b28f68d09d313c7fe550be337d2b4) - add `sliceDimension` to namespace
-   [`b6571b2`](https://github.com/stdlib-js/stdlib/commit/b6571b2e436559d99e92767a95e95588857205c8) - add `strides` to namespace
-   [`ed378b7`](https://github.com/stdlib-js/stdlib/commit/ed378b72c05992f0473dc5891dc4664773949148) - add `shape` to namespace
-   [`0f8bc08`](https://github.com/stdlib-js/stdlib/commit/0f8bc0882a61b2c54219f37e6d2cb80c50985194) - add `offset` to namespace
-   [`6b48944`](https://github.com/stdlib-js/stdlib/commit/6b48944663c08f64956469340e8561704d9923f8) - add `ndims` to namespace
-   [`49e1d21`](https://github.com/stdlib-js/stdlib/commit/49e1d216375e904a5448da4bf414a3261e1f68ba) - add `nextCartesianIndex` to namespace
-   [`212c1fa`](https://github.com/stdlib-js/stdlib/commit/212c1fa13fd177b87d0ddfa4e70d411e587d5560) - add `sliceAssign` to namespace
-   [`15373b4`](https://github.com/stdlib-js/stdlib/commit/15373b4bc5df65314a0fffe20184429f7ad29616) - add `slice` to namespace
-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`98c37fa`](https://github.com/stdlib-js/stdlib/commit/98c37fa381ef03c24703d76a5b0be4f95727243c) - add `unaryOutputDataType` to namespace
-   [`6ca0ecb`](https://github.com/stdlib-js/stdlib/commit/6ca0ecb07f89d0ff6041ac2d2cb4a91cdad0059d) - add policy APIs to namespace
-   [`00b4630`](https://github.com/stdlib-js/stdlib/commit/00b46302fa85b4a133c2b93d13ac4cedd427bc11) - add `emptyLike` to namespace
-   [`33e76ef`](https://github.com/stdlib-js/stdlib/commit/33e76efad5564bbd2455f492c34b04a4fbfc8988) - add `empty` to namespace
-   [`0661629`](https://github.com/stdlib-js/stdlib/commit/06616293c16e65f85a2b9b72fc9e036e20cff6ab) - add `broadcastScalar` to namespace
-   [`9800cc4`](https://github.com/stdlib-js/stdlib/commit/9800cc4f8df8d96db8bac00b51ae1491fa579666) - add `nullary` to namespace
-   [`4e94bf0`](https://github.com/stdlib-js/stdlib/commit/4e94bf079c6677f10e5ea1f4eaca93dc52dac8f3) - add `binaryLoopOrder` to namespace
-   [`d151153`](https://github.com/stdlib-js/stdlib/commit/d151153ac4aced58a04e795607000b7138feb05d) - add `ndarray/base/binary-loop-interchange-order`
-   [`0ac8825`](https://github.com/stdlib-js/stdlib/commit/0ac88258a1b720982b47661c5ddeb5a932cf56d4) - add `binaryBlockSize` to namespace
-   [`2600d28`](https://github.com/stdlib-js/stdlib/commit/2600d28341fe75b74e3ab7c02779ee856d0d53ad) - add `ndarray/base/binary-tiling-block-size`
-   [`e8775fc`](https://github.com/stdlib-js/stdlib/commit/e8775fcbe3617b9013bd1cea74d7f70aa2669ab4) - update namespace TypeScript declarations [(#951)](https://github.com/stdlib-js/stdlib/pull/951)
-   [`6b7c54d`](https://github.com/stdlib-js/stdlib/commit/6b7c54dd2aa970a48a5f73d89c160c7ab6b6ba28) - add `nullaryLoopOrder` to namespace
-   [`760a0a1`](https://github.com/stdlib-js/stdlib/commit/760a0a1aab281e0a1b043b526eac9592551cffb8) - add `nullaryBlockSize` to namespace

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-v0.1.0">

#### [@stdlib/ndarray/base/assert](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert)

<details>

<section class="features">

##### Features

-   [`7faffe3`](https://github.com/stdlib-js/stdlib/commit/7faffe325bbf186b14c3dfef621e9d4cc56b47ff) - update namespace TypeScript declarations [(#1122)](https://github.com/stdlib-js/stdlib/pull/1122)
-   [`1aefe83`](https://github.com/stdlib-js/stdlib/commit/1aefe83e90f109989a001e85ca25ed278a7c3a50) - add `isMostlySafeDataTypeCast` to namespace
-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`1e78f7b`](https://github.com/stdlib-js/stdlib/commit/1e78f7b05c30245bd7ae22991ee021ae38a90a53) - rename `isIntegralDataType` to `isIntegerDataType`
-   [`d0eb2cf`](https://github.com/stdlib-js/stdlib/commit/d0eb2cf2a86e9c9002b3b78218297f3aa57a5ff5) - add `isRealDataType` to namespace
-   [`901dc93`](https://github.com/stdlib-js/stdlib/commit/901dc93c3954e048073b711818553f2a065476f1) - add `isNumericDataType` to namespace
-   [`d3d2708`](https://github.com/stdlib-js/stdlib/commit/d3d2708eb6919b2eace1fb6f0fa06afac138f117) - add `isComplexFloatingPointDataType` to namespace
-   [`088f3e9`](https://github.com/stdlib-js/stdlib/commit/088f3e9fea4a7090b1c1c09765d264acc832094b) - add `isRealFloatingPointDataType` to namespace
-   [`61a6fee`](https://github.com/stdlib-js/stdlib/commit/61a6feec47761cf559d455264a6908a1f4ac545e) - add `isFloatingPointDataType` to namespace
-   [`f1b2025`](https://github.com/stdlib-js/stdlib/commit/f1b20259563e3e94ef269e3c98cec028af4e87ae) - add `isIntegralDataType` to namespace
-   [`74d366e`](https://github.com/stdlib-js/stdlib/commit/74d366e11957a3016839fa6836a021f49e2d4337) - add `isUnsignedIntegerDataType` to namespace
-   [`35dc02a`](https://github.com/stdlib-js/stdlib/commit/35dc02a0c40af961cfe20e14e4ceddaa4012bc4d) - add `isSignedIntegerDataType` to namespace

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

-   [`1e78f7b`](https://github.com/stdlib-js/stdlib/commit/1e78f7b05c30245bd7ae22991ee021ae38a90a53): rename `isIntegralDataType` to `isIntegerDataType`

    -   To migrate, users should update their usage accordingly.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is--v0.1.0">

#### [@stdlib/ndarray/base/assert/is-](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-allowed--v0.1.0">

#### [@stdlib/ndarray/base/assert/is-allowed-](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-allowed-)

<details>

<section class="features">

##### Features

-   [`733ee49`](https://github.com/stdlib-js/stdlib/commit/733ee4954b08c24007460390d688fe86bb1e8fae) - add support for a `mostly-safe` casting mode
-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-buffer-length-compatible-v0.1.0">

#### [@stdlib/ndarray/base/assert/is-buffer-length-compatible](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-buffer-length-compatible)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-buffer-length-compatible-shape-v0.1.0">

#### [@stdlib/ndarray/base/assert/is-buffer-length-compatible-shape](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-buffer-length-compatible-shape)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-casting-mode-v0.1.0">

#### [@stdlib/ndarray/base/assert/is-casting-mode](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-casting-mode)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-column-major-v0.1.0">

#### [@stdlib/ndarray/base/assert/is-column-major](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-column-major)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-column-major-contiguous-v0.1.0">

#### [@stdlib/ndarray/base/assert/is-column-major-contiguous](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-column-major-contiguous)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-complex-floating-point--v0.1.0">

#### [@stdlib/ndarray/base/assert/is-complex-floating-point-](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-complex-floating-point-)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`7b0d1b0`](https://github.com/stdlib-js/stdlib/commit/7b0d1b09616c4d92e0733564ef3c8b420a9ddb4f) - add `ndarray/base/assert/is-complex-floating-point-data-type`

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-contiguous-v0.1.0">

#### [@stdlib/ndarray/base/assert/is-contiguous](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-contiguous)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-floating-point--v0.1.0">

#### [@stdlib/ndarray/base/assert/is-floating-point-](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-floating-point-)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`31ad686`](https://github.com/stdlib-js/stdlib/commit/31ad686cf56d70e9cd1d24043330eb3f4a688684) - add `ndarray/base/assert/is-floating-point-data-type`

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-index-mode-v0.1.0">

#### [@stdlib/ndarray/base/assert/is-index-mode](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-index-mode)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-integer--v0.1.0">

#### [@stdlib/ndarray/base/assert/is-integer-](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-integer-)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`d96fdc9`](https://github.com/stdlib-js/stdlib/commit/d96fdc905898b96fffcc8ab210ad4b4d6c700565) - add `ndarray/base/assert/is-integer-data-type`

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-integral--v0.1.0">

#### [@stdlib/ndarray/base/assert/is-integral-](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-integral-)

<details>

<section class="features">

##### Features

-   [`e2f9bb3`](https://github.com/stdlib-js/stdlib/commit/e2f9bb3c9d922cddeb3bbdac52744c46f4fa6186) - add `ndarray/base/assert/is-integral-data-type`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-mostly-safe--v0.1.0">

#### [@stdlib/ndarray/base/assert/is-mostly-safe-](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-mostly-safe-)

<details>

<section class="features">

##### Features

-   [`a8290c4`](https://github.com/stdlib-js/stdlib/commit/a8290c4059e1aa16ed2388a02c5637e58659ae01) - add `ndarray/base/assert/is-mostly-safe-data-type-cast`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-numeric--v0.1.0">

#### [@stdlib/ndarray/base/assert/is-numeric-](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-numeric-)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`c326c3f`](https://github.com/stdlib-js/stdlib/commit/c326c3fe89ba54c362395aa53e442ec70a2ad69d) - add `ndarray/base/assert/is-numeric-data-type`

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-order-v0.1.0">

#### [@stdlib/ndarray/base/assert/is-order](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-order)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-read-only-v0.1.0">

#### [@stdlib/ndarray/base/assert/is-read-only](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-read-only)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-real--v0.1.0">

#### [@stdlib/ndarray/base/assert/is-real-](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-real-)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`889da69`](https://github.com/stdlib-js/stdlib/commit/889da694559f4b0da7670277001dc2414e55edd9) - add `ndarray/base/assert/is-real-data-type`

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-real-floating-point--v0.1.0">

#### [@stdlib/ndarray/base/assert/is-real-floating-point-](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-real-floating-point-)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`41d3972`](https://github.com/stdlib-js/stdlib/commit/41d3972e82c51bdd6522708d9446fce378e30c8a) - add `ndarray/base/assert/is-real-floating-point-data-type`

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-row-major-v0.1.0">

#### [@stdlib/ndarray/base/assert/is-row-major](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-row-major)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-row-major-contiguous-v0.1.0">

#### [@stdlib/ndarray/base/assert/is-row-major-contiguous](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-row-major-contiguous)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-safe--v0.1.0">

#### [@stdlib/ndarray/base/assert/is-safe-](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-safe-)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-same-kind--v0.1.0">

#### [@stdlib/ndarray/base/assert/is-same-kind-](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-same-kind-)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-signed-integer--v0.1.0">

#### [@stdlib/ndarray/base/assert/is-signed-integer-](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-signed-integer-)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`063b647`](https://github.com/stdlib-js/stdlib/commit/063b6475df8c93d7b199e77b28325928e960e18b) - add `ndarray/base/assert/is-signed-integer-data-type`

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-single-segment-compatible-v0.1.0">

#### [@stdlib/ndarray/base/assert/is-single-segment-compatible](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-single-segment-compatible)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-unsigned-integer--v0.1.0">

#### [@stdlib/ndarray/base/assert/is-unsigned-integer-](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-unsigned-integer-)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`f2fd134`](https://github.com/stdlib-js/stdlib/commit/f2fd1344eee163ede1839e2be9a537be2d4ec240) - add `ndarray/base/assert/is-unsigned-integer-data-type`

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assign-v0.1.0">

#### [@stdlib/ndarray/base/assign](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assign)

<details>

<section class="features">

##### Features

-   [`aabbb4e`](https://github.com/stdlib-js/stdlib/commit/aabbb4eaff80556d2320d75cf9520f5b01352e50) - add loop functions for downcasting floating-point dtypes
-   [`c28a16e`](https://github.com/stdlib-js/stdlib/commit/c28a16e50e84bc0fb8dd16b644f83b60248fe3b7) - add `ndarray/base/assign`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`c8417b0`](https://github.com/stdlib-js/stdlib/commit/c8417b07e7637b7c5c2336191d9b3288a0e5a228) - add support for assigning real-valued elements to complex-valued elements
-   [`46d5210`](https://github.com/stdlib-js/stdlib/commit/46d52108725f354f62312121e797195cbbfe7611) - address unterminated macro
-   [`39b2b0d`](https://github.com/stdlib-js/stdlib/commit/39b2b0da7407b46375ee9897ce60452f5179cf1b) - use correct type for dispatch object

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-broadcast-array-v0.1.0">

#### [@stdlib/ndarray/base/broadcast-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/broadcast-array)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-broadcast-scalar-v0.1.0">

#### [@stdlib/ndarray/base/broadcast-scalar](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/broadcast-scalar)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`efe7c22`](https://github.com/stdlib-js/stdlib/commit/efe7c226d5fb5ac7fb0c36dec4b5925d4484ee43) - add `ndarray/base/broadcast-scalar`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-broadcast-shapes-v0.1.0">

#### [@stdlib/ndarray/base/broadcast-shapes](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/broadcast-shapes)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-buffer-v0.1.0">

#### [@stdlib/ndarray/base/buffer](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/buffer)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-buffer-ctors-v0.1.0">

#### [@stdlib/ndarray/base/buffer-ctors](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/buffer-ctors)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-buffer-dtype-v0.1.0">

#### [@stdlib/ndarray/base/buffer-dtype](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/buffer-dtype)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-buffer-dtype-enum-v0.1.0">

#### [@stdlib/ndarray/base/buffer-dtype-enum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/buffer-dtype-enum)

<details>

<section class="features">

##### Features

-   [`015ff99`](https://github.com/stdlib-js/stdlib/commit/015ff99285585b1a9267a8ad3f8c856e64742dfd) - increase minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`0deb1be`](https://github.com/stdlib-js/stdlib/commit/0deb1be1f1efe2cc98bd944ab1c50cc885cf523b) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`015ff99`](https://github.com/stdlib-js/stdlib/commit/015ff99285585b1a9267a8ad3f8c856e64742dfd): increase minimum TypeScript version

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-bytes-per-element-v0.1.0">

#### [@stdlib/ndarray/base/bytes-per-element](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/bytes-per-element)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-char2dtype-v0.1.0">

#### [@stdlib/ndarray/base/char2dtype](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/char2dtype)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-clamp-index-v0.1.0">

#### [@stdlib/ndarray/base/clamp-index](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/clamp-index)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-ctor-v0.1.0">

#### [@stdlib/ndarray/base/ctor](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/ctor)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-dtype-v0.1.0">

#### [@stdlib/ndarray/base/dtype](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/dtype)

<details>

<section class="features">

##### Features

-   [`9d9b5ca`](https://github.com/stdlib-js/stdlib/commit/9d9b5ca04c251db89351dabfd1d3868fdee22fd2) - add `ndarray/base/dtype`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-dtype-char-v0.1.0">

#### [@stdlib/ndarray/base/dtype-char](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/dtype-char)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-dtype-desc-v0.1.0">

#### [@stdlib/ndarray/base/dtype-desc](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/dtype-desc)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-dtype-enum2str-v0.1.0">

#### [@stdlib/ndarray/base/dtype-enum2str](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/dtype-enum2str)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`fe527ef`](https://github.com/stdlib-js/stdlib/commit/fe527ef22a44592d7eaa0adbded47730248eaa74) - fix require path

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-dtype-resolve-enum-v0.1.0">

#### [@stdlib/ndarray/base/dtype-resolve-enum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/dtype-resolve-enum)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-dtype-resolve-str-v0.1.0">

#### [@stdlib/ndarray/base/dtype-resolve-str](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/dtype-resolve-str)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-dtype-str2enum-v0.1.0">

#### [@stdlib/ndarray/base/dtype-str2enum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/dtype-str2enum)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-dtype2c-v0.1.0">

#### [@stdlib/ndarray/base/dtype2c](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/dtype2c)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-dtypes2signatures-v0.1.0">

#### [@stdlib/ndarray/base/dtypes2signatures](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/dtypes2signatures)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-empty-v0.1.0">

#### [@stdlib/ndarray/base/empty](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/empty)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`c593502`](https://github.com/stdlib-js/stdlib/commit/c593502093613634a80bdb6c6806b8d2477d17d4) - add `ndarray/base/empty`

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-empty-like-v0.1.0">

#### [@stdlib/ndarray/base/empty-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/empty-like)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`9f1c2f3`](https://github.com/stdlib-js/stdlib/commit/9f1c2f30fd1fc23c8159c2d8df5df0f14b679ce8) - add `ndarray/base/empty-like`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`65d964f`](https://github.com/stdlib-js/stdlib/commit/65d964fc0d0cde545a0e15fd34bcfcdec5eb01b6) - add missing argument

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-expand-dimensions-v0.1.0">

#### [@stdlib/ndarray/base/expand-dimensions](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/expand-dimensions)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`61aa8e7`](https://github.com/stdlib-js/stdlib/commit/61aa8e7e7d3d64e9bac8b51d34b1b734a24a84de) - add missing argument

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-fliplr-v0.1.0">

#### [@stdlib/ndarray/base/fliplr](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/fliplr)

<details>

<section class="features">

##### Features

-   [`bb9e0a4`](https://github.com/stdlib-js/stdlib/commit/bb9e0a4dc183c68ffd21fecc1130cb4bac303597) - add `ndarray/base/fliplr`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-flipud-v0.1.0">

#### [@stdlib/ndarray/base/flipud](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/flipud)

<details>

<section class="features">

##### Features

-   [`316273f`](https://github.com/stdlib-js/stdlib/commit/316273feed1a28304e7e4a1612831e257fc6e9e2) - add `ndarray/base/flipud`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-from-scalar-v0.1.0">

#### [@stdlib/ndarray/base/from-scalar](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/from-scalar)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`171fc57`](https://github.com/stdlib-js/stdlib/commit/171fc571b800ceb803d7d925cd871fc9bbcd7e8c) - add support for providing `order` argument

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

-   [`171fc57`](https://github.com/stdlib-js/stdlib/commit/171fc571b800ceb803d7d925cd871fc9bbcd7e8c): must provide `order` argument.

    -   To migrate, users should explicitly provide an `order` argument as
        a third argument when invoking `scalar2ndarray`.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-function-object-v0.1.0">

#### [@stdlib/ndarray/base/function-object](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/function-object)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-ind-v0.1.0">

#### [@stdlib/ndarray/base/ind](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/ind)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`aaaf01e`](https://github.com/stdlib-js/stdlib/commit/aaaf01e43bfef9b8b3c2c9d3f703b3e95e0524b9) - use correct format specifier in error message

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-ind2sub-v0.1.0">

#### [@stdlib/ndarray/base/ind2sub](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/ind2sub)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-iteration-order-v0.1.0">

#### [@stdlib/ndarray/base/iteration-order](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/iteration-order)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-max-view-buffer-index-v0.1.0">

#### [@stdlib/ndarray/base/max-view-buffer-index](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/max-view-buffer-index)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-maybe-broadcast-array-v0.1.0">

#### [@stdlib/ndarray/base/maybe-broadcast-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/maybe-broadcast-array)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`c142624`](https://github.com/stdlib-js/stdlib/commit/c1426240f375b6c864a2d59368694ac09d7637f6) - add missing argument

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-meta--v0.1.0">

#### [@stdlib/ndarray/base/meta-](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/meta-)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-min-view-buffer-index-v0.1.0">

#### [@stdlib/ndarray/base/min-view-buffer-index](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/min-view-buffer-index)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-minmax-view-buffer-index-v0.1.0">

#### [@stdlib/ndarray/base/minmax-view-buffer-index](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/minmax-view-buffer-index)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-napi-v0.1.0">

#### [@stdlib/ndarray/base/napi](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/napi)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-napi-addon-arguments-v0.1.0">

#### [@stdlib/ndarray/base/napi/addon-arguments](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/napi/addon-arguments)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-napi-dtype-string-to-dtype-v0.1.0">

#### [@stdlib/ndarray/base/napi/dtype-string-to-dtype](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/napi/dtype-string-to-dtype)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-napi-typedarray-type-to-dtype-v0.1.0">

#### [@stdlib/ndarray/base/napi/typedarray-type-to-dtype](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/napi/typedarray-type-to-dtype)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-napi-unary-v0.1.0">

#### [@stdlib/ndarray/base/napi/unary](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/napi/unary)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-ndarraylike2object-v0.1.0">

#### [@stdlib/ndarray/base/ndarraylike2object](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/ndarraylike2object)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`c539bd1`](https://github.com/stdlib-js/stdlib/commit/c539bd17b8cd17ca3a37a958626dbd6df2e25477) - add missing argument
-   [`0deb1be`](https://github.com/stdlib-js/stdlib/commit/0deb1be1f1efe2cc98bd944ab1c50cc885cf523b) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-ndims-v0.1.0">

#### [@stdlib/ndarray/base/ndims](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/ndims)

<details>

<section class="features">

##### Features

-   [`dd72b0f`](https://github.com/stdlib-js/stdlib/commit/dd72b0f28dc570151a855a31c9c831fe86f91169) - add `ndarray/base/ndims`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-next-cartesian-index-v0.1.0">

#### [@stdlib/ndarray/base/next-cartesian-index](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/next-cartesian-index)

<details>

<section class="features">

##### Features

-   [`b8de2da`](https://github.com/stdlib-js/stdlib/commit/b8de2dab6ca473794f646945254f97c839fc31af) - add `ndarray/base/next-cartesian-index`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-nonsingleton-dimensions-v0.1.0">

#### [@stdlib/ndarray/base/nonsingleton-dimensions](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/nonsingleton-dimensions)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-normalize-index-v0.1.0">

#### [@stdlib/ndarray/base/normalize-index](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/normalize-index)

<details>

<section class="features">

##### Features

-   [`512c8a8`](https://github.com/stdlib-js/stdlib/commit/512c8a8f75a158a42f9ea9113bda929e0c28519e) - add `ndarray/base/normalize-index`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-nullary-v0.1.0">

#### [@stdlib/ndarray/base/nullary](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/nullary)

<details>

<section class="features">

##### Features

-   [`c28a16e`](https://github.com/stdlib-js/stdlib/commit/c28a16e50e84bc0fb8dd16b644f83b60248fe3b7) - add `ndarray/base/assign`
-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`28c87ca`](https://github.com/stdlib-js/stdlib/commit/28c87ca422d9953a5d5ee583e904b24d66e59682) - add `ndarray/base/nullary`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`23b99ac`](https://github.com/stdlib-js/stdlib/commit/23b99acc256b4c9034347ed42ba21f202caedda8) - resolve C lint errors

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-nullary-loop-interchange-order-v0.1.0">

#### [@stdlib/ndarray/base/nullary-loop-interchange-order](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/nullary-loop-interchange-order)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`45b2ba9`](https://github.com/stdlib-js/stdlib/commit/45b2ba9a82ac496a9c00c697839453cd2aef285a) - add `@stdlib/ndarray/base/nullary-loop-interchange-order`

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-nullary-tiling-block-size-v0.1.0">

#### [@stdlib/ndarray/base/nullary-tiling-block-size](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/nullary-tiling-block-size)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`0ed2dc6`](https://github.com/stdlib-js/stdlib/commit/0ed2dc6083a20d0f90e653191778da2a9ddf9105) - add `@stdlib/ndarray/base/nullary-tiling-block-size`

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-numel-v0.1.0">

#### [@stdlib/ndarray/base/numel](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/numel)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-offset-v0.1.0">

#### [@stdlib/ndarray/base/offset](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/offset)

<details>

<section class="features">

##### Features

-   [`08dd5cd`](https://github.com/stdlib-js/stdlib/commit/08dd5cdbbfb2370bc88cf0e223a1371473243c09) - add `ndarray/base/offset`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-order-v0.1.0">

#### [@stdlib/ndarray/base/order](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/order)

<details>

<section class="features">

##### Features

-   [`857a8c7`](https://github.com/stdlib-js/stdlib/commit/857a8c79fd6099e8a34cec07d9b6c89a8e29e77f) - add `ndarray/base/order`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-output-policy-enum2str-v0.1.0">

#### [@stdlib/ndarray/base/output-policy-enum2str](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/output-policy-enum2str)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`144d739`](https://github.com/stdlib-js/stdlib/commit/144d7393381f2430219962e39287792bf69374b8) - add `ndarray/base/output-policy-enum2str`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`b4dbeae`](https://github.com/stdlib-js/stdlib/commit/b4dbeaebb752c2494a156cd6f92d7055bea024ec) - set correct package names

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-output-policy-resolve-enum-v0.1.0">

#### [@stdlib/ndarray/base/output-policy-resolve-enum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/output-policy-resolve-enum)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`c0d63fe`](https://github.com/stdlib-js/stdlib/commit/c0d63fe91fe1de62e13334ade3bb157aa3ccdb4a) - add `ndarray/base/output-policy-resolve-enum`

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-output-policy-resolve-str-v0.1.0">

#### [@stdlib/ndarray/base/output-policy-resolve-str](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/output-policy-resolve-str)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`375a3e8`](https://github.com/stdlib-js/stdlib/commit/375a3e851b300eb1b936520f43e6d303c253ba26) - add `ndarray/base/output-policy-resolve-str`

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-output-policy-str2enum-v0.1.0">

#### [@stdlib/ndarray/base/output-policy-str2enum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/output-policy-str2enum)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`66e4d33`](https://github.com/stdlib-js/stdlib/commit/66e4d331999220774c45c093900470e88fb6953a) - add `ndarray/base/output-policy-str2enum`

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-prepend-singleton-dimensions-v0.1.0">

#### [@stdlib/ndarray/base/prepend-singleton-dimensions](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/prepend-singleton-dimensions)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`a5ce155`](https://github.com/stdlib-js/stdlib/commit/a5ce155e3f2da8176e848e5fd75833a7a943fdb6) - add missing argument

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-remove-singleton-dimensions-v0.1.0">

#### [@stdlib/ndarray/base/remove-singleton-dimensions](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/remove-singleton-dimensions)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`9741d55`](https://github.com/stdlib-js/stdlib/commit/9741d5527de099260554aa7f4e2e4ca4c3e2cd2a) - add missing argument

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-reverse-v0.1.0">

#### [@stdlib/ndarray/base/reverse](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/reverse)

<details>

<section class="features">

##### Features

-   [`aff949b`](https://github.com/stdlib-js/stdlib/commit/aff949b5c2ee01b9aef69e471c735691b27ec370) - add `ndarray/base/reverse`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-reverse-dimension-v0.1.0">

#### [@stdlib/ndarray/base/reverse-dimension](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/reverse-dimension)

<details>

<section class="features">

##### Features

-   [`86f5a89`](https://github.com/stdlib-js/stdlib/commit/86f5a894a141d677a19ee54e1263dacb165a177c) - add `ndarray/base/reverse-dimension`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-serialize-meta--v0.1.0">

#### [@stdlib/ndarray/base/serialize-meta-](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/serialize-meta-)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`6a6225d`](https://github.com/stdlib-js/stdlib/commit/6a6225d3d7a9a7e97387c1d1b3dff09c702eddd7) - add missing argument

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-shape-v0.1.0">

#### [@stdlib/ndarray/base/shape](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/shape)

<details>

<section class="features">

##### Features

-   [`7a6cc2b`](https://github.com/stdlib-js/stdlib/commit/7a6cc2b58a83de238126dc3e899d663b5939167b) - add `ndarray/base/shape`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-shape2strides-v0.1.0">

#### [@stdlib/ndarray/base/shape2strides](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/shape2strides)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-singleton-dimensions-v0.1.0">

#### [@stdlib/ndarray/base/singleton-dimensions](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/singleton-dimensions)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-slice-v0.1.0">

#### [@stdlib/ndarray/base/slice](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/slice)

<details>

<section class="features">

##### Features

-   [`48cb9aa`](https://github.com/stdlib-js/stdlib/commit/48cb9aabdfbeb58af82ad69ebf0754e2802797fd) - add support for returning a mutable ndarray view
-   [`37ddf6d`](https://github.com/stdlib-js/stdlib/commit/37ddf6d4d84a64c83743a3e18863ad5ea8fd0d6f) - add `ndarray/base/slice`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`b75bcc2`](https://github.com/stdlib-js/stdlib/commit/b75bcc2e8807ea3f2ec8d8803bb6f4106bd11d0f) - add missing argument
-   [`09b4354`](https://github.com/stdlib-js/stdlib/commit/09b435430b5f5a1809e409d8b64bd3974fc56ccb) - rename parameter to match docs
-   [`c636c08`](https://github.com/stdlib-js/stdlib/commit/c636c084bae9899fff1e667f00ecf9a71dd61175) - address bug when resolving buffer index of the first element indexed by a slice

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-slice-assign-v0.1.0">

#### [@stdlib/ndarray/base/slice-assign](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/slice-assign)

<details>

<section class="features">

##### Features

-   [`c90e739`](https://github.com/stdlib-js/stdlib/commit/c90e7393fb2abf6d563581c2e47e8fe707b4cc33) - add `ndarray/base/slice-assign`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`c13a4d5`](https://github.com/stdlib-js/stdlib/commit/c13a4d58f04d875125481add5d68e1e2052b19ce) - add missing argument

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-slice-dimension-v0.1.0">

#### [@stdlib/ndarray/base/slice-dimension](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/slice-dimension)

<details>

<section class="features">

##### Features

-   [`5ca2f0e`](https://github.com/stdlib-js/stdlib/commit/5ca2f0e339d3580058c55d401045f8e66caaf543) - add `ndarray/base/slice-dimension`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-slice-dimension-from-v0.1.0">

#### [@stdlib/ndarray/base/slice-dimension-from](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/slice-dimension-from)

<details>

<section class="features">

##### Features

-   [`de5ef5e`](https://github.com/stdlib-js/stdlib/commit/de5ef5e1b15d235a28570f92fb5c12b1958227b5) - add `ndarray/base/slice-dimension-from`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-slice-dimension-to-v0.1.0">

#### [@stdlib/ndarray/base/slice-dimension-to](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/slice-dimension-to)

<details>

<section class="features">

##### Features

-   [`3eb7c44`](https://github.com/stdlib-js/stdlib/commit/3eb7c445c25a352075cd32b826ec399fdb8f2775) - add `ndarray/base/slice-dimension-to`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-slice-from-v0.1.0">

#### [@stdlib/ndarray/base/slice-from](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/slice-from)

<details>

<section class="features">

##### Features

-   [`7f80a7c`](https://github.com/stdlib-js/stdlib/commit/7f80a7cdf828e50f98b963df45b2c9262c501a14) - add `ndarray/base/slice-from`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-slice-to-v0.1.0">

#### [@stdlib/ndarray/base/slice-to](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/slice-to)

<details>

<section class="features">

##### Features

-   [`4da3db2`](https://github.com/stdlib-js/stdlib/commit/4da3db265d7a7ab8dd6e91eb55d3ab393a2789f3) - add `ndarray/base/slice-to`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-strides-v0.1.0">

#### [@stdlib/ndarray/base/strides](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/strides)

<details>

<section class="features">

##### Features

-   [`5a0c235`](https://github.com/stdlib-js/stdlib/commit/5a0c23554e53b29fe6c36148c351699dfefe4ea7) - add `ndarray/base/strides`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`8874562`](https://github.com/stdlib-js/stdlib/commit/8874562a8e3383393bef0e1220080fb20a99880f) - add missing support for minimal ndarray-like objects not supporting a strides property

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-strides2offset-v0.1.0">

#### [@stdlib/ndarray/base/strides2offset](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/strides2offset)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-strides2order-v0.1.0">

#### [@stdlib/ndarray/base/strides2order](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/strides2order)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-sub2ind-v0.1.0">

#### [@stdlib/ndarray/base/sub2ind](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/sub2ind)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-to-array-v0.1.0">

#### [@stdlib/ndarray/base/to-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/to-array)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-transpose-v0.1.0">

#### [@stdlib/ndarray/base/transpose](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/transpose)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-unary-v0.1.0">

#### [@stdlib/ndarray/base/unary](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/unary)

<details>

<section class="features">

##### Features

-   [`c28a16e`](https://github.com/stdlib-js/stdlib/commit/c28a16e50e84bc0fb8dd16b644f83b60248fe3b7) - add `ndarray/base/assign`
-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`23b99ac`](https://github.com/stdlib-js/stdlib/commit/23b99acc256b4c9034347ed42ba21f202caedda8) - resolve C lint errors
-   [`64a7e92`](https://github.com/stdlib-js/stdlib/commit/64a7e9272da47f0b0a7afd8a5f4d5be613cbfb8d) - add missing variable declaration

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-unary-by-v0.1.0">

#### [@stdlib/ndarray/base/unary-by](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/unary-by)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-unary-loop-interchange-order-v0.1.0">

#### [@stdlib/ndarray/base/unary-loop-interchange-order](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/unary-loop-interchange-order)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-unary-output-dtype-v0.1.0">

#### [@stdlib/ndarray/base/unary-output-dtype](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/unary-output-dtype)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`eec20f6`](https://github.com/stdlib-js/stdlib/commit/eec20f6aba797b451addbf452384c2c4f2ff1add) - add `ndarray/base/unary-output-dtype`

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-unary-tiling-block-size-v0.1.0">

#### [@stdlib/ndarray/base/unary-tiling-block-size](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/unary-tiling-block-size)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-vind2-v0.1.0">

#### [@stdlib/ndarray/base/vind2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/vind2)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-wrap-index-v0.1.0">

#### [@stdlib/ndarray/base/wrap-index](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/wrap-index)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-zeros-v0.1.0">

#### [@stdlib/ndarray/base/zeros](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/zeros)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-zeros-like-v0.1.0">

#### [@stdlib/ndarray/base/zeros-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/zeros-like)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-broadcast-array-v0.1.0">

#### [@stdlib/ndarray/broadcast-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/broadcast-array)

<details>

<section class="features">

##### Features

-   [`6d0da66`](https://github.com/stdlib-js/stdlib/commit/6d0da668d0d69bfe1a7fdceeceae05b52eada5c1) - add `ndarray/broadcast-array`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-casting-modes-v0.1.0">

#### [@stdlib/ndarray/casting-modes](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/casting-modes)

<details>

<section class="features">

##### Features

-   [`12ee2c9`](https://github.com/stdlib-js/stdlib/commit/12ee2c9e8cd35134cc91dd32dd609144e76b8686) - add `mostly-safe` casting mode
-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-ctor-v0.1.0">

#### [@stdlib/ndarray/ctor](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/ctor)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`fb65dfe`](https://github.com/stdlib-js/stdlib/commit/fb65dfe5b36b35ad8b3747df6ddb693a5b62d171) - use `Collection`, rather than `ArrayLike`

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-defaults-v0.1.0">

#### [@stdlib/ndarray/defaults](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/defaults)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`d45a05b`](https://github.com/stdlib-js/stdlib/commit/d45a05b03973bf5b6a5e97cb4bc8c0aba3a68a12) - rename `integral` to `integer`
-   [`bd1017d`](https://github.com/stdlib-js/stdlib/commit/bd1017ddb8dd6fe552675221570186440cdbb4f5) - add `numeric` and `real` dtype defaults
-   [`9363dc3`](https://github.com/stdlib-js/stdlib/commit/9363dc3376fcb9ba18d181716fae8fbb731771bd) - add `get` method for retrieving a single default setting
-   [`35de20d`](https://github.com/stdlib-js/stdlib/commit/35de20d9359f2497eb0527c7cd99778dd7bff038) - add `ndarray/defaults`

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

-   [`d45a05b`](https://github.com/stdlib-js/stdlib/commit/d45a05b03973bf5b6a5e97cb4bc8c0aba3a68a12): rename `integral` to `integer`

    -   To migrate, users should update their code to use `integer` rather
        than `integral` to refer to the policy/kind which includes both
        signed and unsigned integer dtypes.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-dispatch-v0.1.0">

#### [@stdlib/ndarray/dispatch](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/dispatch)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-dispatch-by-v0.1.0">

#### [@stdlib/ndarray/dispatch-by](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/dispatch-by)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`2ef370c`](https://github.com/stdlib-js/stdlib/commit/2ef370c299de57a389c57f1815824b05665c9ece) - add missing test fixture [(#1054)](https://github.com/stdlib-js/stdlib/pull/1054)

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-dtype-v0.1.0">

#### [@stdlib/ndarray/dtype](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/dtype)

<details>

<section class="features">

##### Features

-   [`29df3cf`](https://github.com/stdlib-js/stdlib/commit/29df3cf36888a96512dfade51adf0e3dde320166) - add `ndarray/dtype`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-dtypes-v0.1.0">

#### [@stdlib/ndarray/dtypes](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/dtypes)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`d45a05b`](https://github.com/stdlib-js/stdlib/commit/d45a05b03973bf5b6a5e97cb4bc8c0aba3a68a12) - rename `integral` to `integer`
-   [`03effb2`](https://github.com/stdlib-js/stdlib/commit/03effb27ed971c369883a650dd3f8d079a2acab1) - add `real` data type kind
-   [`99146bb`](https://github.com/stdlib-js/stdlib/commit/99146bb9777c1c042d95f68494c9fb4f9377e651) - add support for returning a subset of data types

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

-   [`d45a05b`](https://github.com/stdlib-js/stdlib/commit/d45a05b03973bf5b6a5e97cb4bc8c0aba3a68a12): rename `integral` to `integer`

    -   To migrate, users should update their code to use `integer` rather
        than `integral` to refer to the policy/kind which includes both
        signed and unsigned integer dtypes.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-empty-v0.1.0">

#### [@stdlib/ndarray/empty](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/empty)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`910fed5`](https://github.com/stdlib-js/stdlib/commit/910fed5f346f7d5ac2d94a41e50c9eff2219518e) - add `ndarray/empty`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`06712ce`](https://github.com/stdlib-js/stdlib/commit/06712ce614899b7bf573e6323532a48a452526fe) - fix package name and keywords

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-empty-like-v0.1.0">

#### [@stdlib/ndarray/empty-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/empty-like)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`561a9ea`](https://github.com/stdlib-js/stdlib/commit/561a9ea36c1300678da980b4740f78d71a49c0ba) - add `ndarray/empty-like`

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-fancy-v0.1.0">

#### [@stdlib/ndarray/fancy](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/fancy)

<details>

<section class="features">

##### Features

-   [`54858d0`](https://github.com/stdlib-js/stdlib/commit/54858d0033107586ec0b0b823019e75548664bd4) - add support for slice assignment and refactor index expression handling
-   [`d64f3c7`](https://github.com/stdlib-js/stdlib/commit/d64f3c7831c6490eae291c9de253dfc763052fbb) - add TypeScript declarations and add REPL help
-   [`4433c86`](https://github.com/stdlib-js/stdlib/commit/4433c8677f64ffe451f267484367d3d9f27e32f5) - add `ndarray/fancy`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`fcbe4c1`](https://github.com/stdlib-js/stdlib/commit/fcbe4c18fd4ebfad0466b56b4c19abda6cdb4c2b) - address indexing expression errors and refactor to use `ndarray/base/slice`
-   [`e17e199`](https://github.com/stdlib-js/stdlib/commit/e17e1999c8d3f29a7b9fe509ce3fb05db05aaf39) - address dimension reduction bug

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-from-scalar-v0.1.0">

#### [@stdlib/ndarray/from-scalar](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/from-scalar)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`f07f1ce`](https://github.com/stdlib-js/stdlib/commit/f07f1cedbfa64e81f21fcea8bb4e7ccbc67bde35) - add ndarray option support to `ndarray/from-scalar`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

-   [`f07f1ce`](https://github.com/stdlib-js/stdlib/commit/f07f1cedbfa64e81f21fcea8bb4e7ccbc67bde35): `dtype` argument replaced by `options` argument

    -   In order to migrate to the new API, users should replace any
        `dtype` argument usage with an equivalent `options` argument.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-ind2sub-v0.1.0">

#### [@stdlib/ndarray/ind2sub](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/ind2sub)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-index-modes-v0.1.0">

#### [@stdlib/ndarray/index-modes](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/index-modes)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-iter-v0.1.0">

#### [@stdlib/ndarray/iter](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/iter)

<details>

<section class="features">

##### Features

-   [`b01d709`](https://github.com/stdlib-js/stdlib/commit/b01d7098eca0cb303d820723d45e8c3e9828a944) - add `nditerMatrixEntries` to namespace
-   [`7685072`](https://github.com/stdlib-js/stdlib/commit/7685072aff78337a4ba796cb1ac4a6f5eb9d6a4d) - add `nditerColumnEntries` to namespace
-   [`b96a9a2`](https://github.com/stdlib-js/stdlib/commit/b96a9a24e8028d366f5435b793cd285a3565e008) - add `nditerRowEntries` to namespace
-   [`29d99d7`](https://github.com/stdlib-js/stdlib/commit/29d99d75414e9559ce2938cc19e4bc13af1d4968) - add `nditerMatrices` to namespace
-   [`7faffe3`](https://github.com/stdlib-js/stdlib/commit/7faffe325bbf186b14c3dfef621e9d4cc56b47ff) - update namespace TypeScript declarations [(#1122)](https://github.com/stdlib-js/stdlib/pull/1122)
-   [`b45eb8f`](https://github.com/stdlib-js/stdlib/commit/b45eb8f83d224bea7e4bc063535ddb7962964872) - add `nditerValues` to namespace
-   [`665ce24`](https://github.com/stdlib-js/stdlib/commit/665ce24b77631e05ab7f1788c5777e2fc7e7cca0) - add `nditerEntries` to namespace
-   [`5c7312f`](https://github.com/stdlib-js/stdlib/commit/5c7312f1de2a2e5b6c10c4c4e1c76e7cec8d1620) - add `nditerIndices` to namespace
-   [`474e7e4`](https://github.com/stdlib-js/stdlib/commit/474e7e4fb2a15bfc8e9e719692b94044d25a7365) - add `nditer2arrayEach` to namespace
-   [`9c23309`](https://github.com/stdlib-js/stdlib/commit/9c233099b1cb3304b0158a52e103b01b262fb683) - add `nditerColumns` to namespace
-   [`43b42fe`](https://github.com/stdlib-js/stdlib/commit/43b42fe596c9b01fb19d3dd710ef71dfdc738510) - add `ndarray/iter` namespace

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-iter-column-entries-v0.1.0">

#### [@stdlib/ndarray/iter/column-entries](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/iter/column-entries)

<details>

<section class="features">

##### Features

-   [`aeccc0d`](https://github.com/stdlib-js/stdlib/commit/aeccc0da93a0cd2ad37e8e8bb69494e8453b068e) - add `ndarray/iter/column-entries`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-iter-columns-v0.1.0">

#### [@stdlib/ndarray/iter/columns](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/iter/columns)

<details>

<section class="features">

##### Features

-   [`8aec891`](https://github.com/stdlib-js/stdlib/commit/8aec8914b2435090b1b466bcdd5820b158da94ef) - add `ndarray/iter/columns`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`bc1768e`](https://github.com/stdlib-js/stdlib/commit/bc1768ea93ed7c72ce90dd4ade9b6786603381b8) - prevent creating writable views when an input array is read-only
-   [`92b814f`](https://github.com/stdlib-js/stdlib/commit/92b814fe9446bc9f31aed4fb151e6f8bf75213da) - update parameter name to match docs

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-iter-entries-v0.1.0">

#### [@stdlib/ndarray/iter/entries](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/iter/entries)

<details>

<section class="features">

##### Features

-   [`6cd1bad`](https://github.com/stdlib-js/stdlib/commit/6cd1badeb9fff42ccb03486ccf7d6c0b53d03350) - add `ndarray/iter/entries`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-iter-indices-v0.1.0">

#### [@stdlib/ndarray/iter/indices](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/iter/indices)

<details>

<section class="features">

##### Features

-   [`613fb18`](https://github.com/stdlib-js/stdlib/commit/613fb18c3890649335378f7b235a5f06e96860eb) - add `ndarray/iter/indices`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-iter-matrices-v0.1.0">

#### [@stdlib/ndarray/iter/matrices](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/iter/matrices)

<details>

<section class="features">

##### Features

-   [`88a673c`](https://github.com/stdlib-js/stdlib/commit/88a673c7ed8f97ab14df8f26c60211f634994108) - add `ndarray/iter/matrices`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-iter-matrix-entries-v0.1.0">

#### [@stdlib/ndarray/iter/matrix-entries](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/iter/matrix-entries)

<details>

<section class="features">

##### Features

-   [`5f80a15`](https://github.com/stdlib-js/stdlib/commit/5f80a15dcb950ca672331f0fc276b10bc7c06105) - add `ndarray/iter/matrix-entries`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-iter-row-entries-v0.1.0">

#### [@stdlib/ndarray/iter/row-entries](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/iter/row-entries)

<details>

<section class="features">

##### Features

-   [`344aa9e`](https://github.com/stdlib-js/stdlib/commit/344aa9e386486ee8b5af3edd2bd788db19f338e1) - add `ndarray/iter/row-entries`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-iter-rows-v0.1.0">

#### [@stdlib/ndarray/iter/rows](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/iter/rows)

<details>

<section class="features">

##### Features

-   [`fda2bf6`](https://github.com/stdlib-js/stdlib/commit/fda2bf6c22937a44b2e17949b437d5bbec08708c) - add `ndarray/iter/rows`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`64bd3a8`](https://github.com/stdlib-js/stdlib/commit/64bd3a808f060dc2004d130c2cb974b100527e82) - prevent creating writable views when provided a read-only array
-   [`69e0a71`](https://github.com/stdlib-js/stdlib/commit/69e0a718dd5b79eae03864b276b635754396d9a0) - update parameter name to match docs

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-iter-to-array-each-v0.1.0">

#### [@stdlib/ndarray/iter/to-array-each](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/iter/to-array-each)

<details>

<section class="features">

##### Features

-   [`19af262`](https://github.com/stdlib-js/stdlib/commit/19af262e0319ea748c0300abfb363fb4561571a6) - add `ndarray/iter/to-array-each`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-iter-values-v0.1.0">

#### [@stdlib/ndarray/iter/values](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/iter/values)

<details>

<section class="features">

##### Features

-   [`3cc2fdb`](https://github.com/stdlib-js/stdlib/commit/3cc2fdb3b4ba4b60fb52139dc3ffbef267ecfeec) - add `ndarray/iter/values`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-maybe-broadcast-array-v0.1.0">

#### [@stdlib/ndarray/maybe-broadcast-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/maybe-broadcast-array)

<details>

<section class="features">

##### Features

-   [`e96df4a`](https://github.com/stdlib-js/stdlib/commit/e96df4adf3598d2453ab869cec535971d4187c20) - add `ndarray/maybe-broadcast-array`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-min-dtype-v0.1.0">

#### [@stdlib/ndarray/min-dtype](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/min-dtype)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-mostly-safe-casts-v0.1.0">

#### [@stdlib/ndarray/mostly-safe-casts](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/mostly-safe-casts)

<details>

<section class="features">

##### Features

-   [`eff3cdd`](https://github.com/stdlib-js/stdlib/commit/eff3cdd2245ee7c9265d38f2d31b49bc7f4400d8) - add `ndarray/mostly-safe-casts`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`a763ac4`](https://github.com/stdlib-js/stdlib/commit/a763ac4c03c49343e3f06ba93325f39a20da97cc) - allow downcast from `float64` to `complex64`

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-ndims-v0.1.0">

#### [@stdlib/ndarray/ndims](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/ndims)

<details>

<section class="features">

##### Features

-   [`e3e6b60`](https://github.com/stdlib-js/stdlib/commit/e3e6b60e161766128d601efc49aa73b21c4ebe54) - add `ndarray/ndims`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-next-dtype-v0.1.0">

#### [@stdlib/ndarray/next-dtype](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/next-dtype)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-numel-v0.1.0">

#### [@stdlib/ndarray/numel](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/numel)

<details>

<section class="features">

##### Features

-   [`657947f`](https://github.com/stdlib-js/stdlib/commit/657947fab94fc9e62005afe17406b1d39c5a3bfa) - add `ndarray/numel`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-offset-v0.1.0">

#### [@stdlib/ndarray/offset](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/offset)

<details>

<section class="features">

##### Features

-   [`6e284c2`](https://github.com/stdlib-js/stdlib/commit/6e284c28a7e00043ffa90077ede849ad3bdb9272) - add `ndarray/offset`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-order-v0.1.0">

#### [@stdlib/ndarray/order](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/order)

<details>

<section class="features">

##### Features

-   [`819f02e`](https://github.com/stdlib-js/stdlib/commit/819f02e21e7481d3a43265cb61e9aa1a0d2fd406) - add `ndarray/order`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-orders-v0.1.0">

#### [@stdlib/ndarray/orders](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/orders)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-output-dtype-policies-v0.1.0">

#### [@stdlib/ndarray/output-dtype-policies](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/output-dtype-policies)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`d45a05b`](https://github.com/stdlib-js/stdlib/commit/d45a05b03973bf5b6a5e97cb4bc8c0aba3a68a12) - rename `integral` to `integer`
-   [`3d64252`](https://github.com/stdlib-js/stdlib/commit/3d64252e8c076e22298c987fc7237fcaae81023d) - add `default` policy
-   [`1127626`](https://github.com/stdlib-js/stdlib/commit/11276264fde9fc31a2143a1f64db050046bb6085) - add `real` policy
-   [`5954cd5`](https://github.com/stdlib-js/stdlib/commit/5954cd5b913c6d3b2d05c0bb07b607c885d6e5af) - add `ndarray/output-dtype-policies`

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

-   [`d45a05b`](https://github.com/stdlib-js/stdlib/commit/d45a05b03973bf5b6a5e97cb4bc8c0aba3a68a12): rename `integral` to `integer`

    -   To migrate, users should update their code to use `integer` rather
        than `integral` to refer to the policy/kind which includes both
        signed and unsigned integer dtypes.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-promotion-rules-v0.1.0">

#### [@stdlib/ndarray/promotion-rules](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/promotion-rules)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-safe-casts-v0.1.0">

#### [@stdlib/ndarray/safe-casts](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/safe-casts)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-same-kind-casts-v0.1.0">

#### [@stdlib/ndarray/same-kind-casts](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/same-kind-casts)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-shape-v0.1.0">

#### [@stdlib/ndarray/shape](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/shape)

<details>

<section class="features">

##### Features

-   [`b76d481`](https://github.com/stdlib-js/stdlib/commit/b76d48151d39b4db1ec0440da235b0f9c042c675) - add `ndarray/shape`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-slice-v0.1.0">

#### [@stdlib/ndarray/slice](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/slice)

<details>

<section class="features">

##### Features

-   [`afda5bd`](https://github.com/stdlib-js/stdlib/commit/afda5bdedf10cc899794385201b356cf45e90334) - add `ndarray/slice`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`8d7dfdc`](https://github.com/stdlib-js/stdlib/commit/8d7dfdc706aea0628b8d8fce181fae12bcb049c2) - add missing argument
-   [`2910f80`](https://github.com/stdlib-js/stdlib/commit/2910f803215131c7ba9c9e1eb71875a6305cd402) - address broken benchmarks for out-of-bounds slices
-   [`eae0905`](https://github.com/stdlib-js/stdlib/commit/eae09050d3e8bcf751636d469b997d54db1fac9c) - ensure support for slicing zero-dimensional arrays

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-slice-assign-v0.1.0">

#### [@stdlib/ndarray/slice-assign](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/slice-assign)

<details>

<section class="features">

##### Features

-   [`d73d723`](https://github.com/stdlib-js/stdlib/commit/d73d72364028ed44ed35409292c3357399750db8) - add `ndarray/slice-assign`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`8fabec9`](https://github.com/stdlib-js/stdlib/commit/8fabec9ee825644e00b6088d1684ca6bef752a8a) - add missing check for an output array which is read-only

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-slice-dimension-v0.1.0">

#### [@stdlib/ndarray/slice-dimension](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/slice-dimension)

<details>

<section class="features">

##### Features

-   [`2fd5a3a`](https://github.com/stdlib-js/stdlib/commit/2fd5a3a25229f47a859fd86f5f4a8311153c2618) - add `ndarray/slice-dimension`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-slice-dimension-from-v0.1.0">

#### [@stdlib/ndarray/slice-dimension-from](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/slice-dimension-from)

<details>

<section class="features">

##### Features

-   [`aeab98d`](https://github.com/stdlib-js/stdlib/commit/aeab98dc6f81a6266e0c2d61645f2b85850d263f) - add `ndarray/slice-dimension-from`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-slice-dimension-to-v0.1.0">

#### [@stdlib/ndarray/slice-dimension-to](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/slice-dimension-to)

<details>

<section class="features">

##### Features

-   [`f9774e0`](https://github.com/stdlib-js/stdlib/commit/f9774e088c9d5e471a3bd8379b913561a8d7c64c) - add `ndarray/slice-dimension-to`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-strides-v0.1.0">

#### [@stdlib/ndarray/strides](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/strides)

<details>

<section class="features">

##### Features

-   [`1407845`](https://github.com/stdlib-js/stdlib/commit/1407845fab9107bcab1834c0017c6424e6accccd) - add `ndarray/strides`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`09306de`](https://github.com/stdlib-js/stdlib/commit/09306deea6b832fdc8b6bf11a853cf2c5eab8108) - ensure consistent results when provided a minimal zero-dimensional ndarray

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-sub2ind-v0.1.0">

#### [@stdlib/ndarray/sub2ind](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/sub2ind)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-to-array-v0.1.0">

#### [@stdlib/ndarray/to-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/to-array)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`cf7c497`](https://github.com/stdlib-js/stdlib/commit/cf7c4978afd11bd988e8bb9cd2d138df357997e2) - add `ndarray/to-array`

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-zeros-v0.1.0">

#### [@stdlib/ndarray/zeros](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/zeros)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`78cb6e3`](https://github.com/stdlib-js/stdlib/commit/78cb6e35c41caff418a7dde7759a311dd35bb407) - add support for additional ndarray constructor options

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`3aec20d`](https://github.com/stdlib-js/stdlib/commit/3aec20d84a70edd88ac294294bb733cabb544d66) - remove leftover disabled lint rule

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-zeros-like-v0.1.0">

#### [@stdlib/ndarray/zeros-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/zeros-like)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`e618407`](https://github.com/stdlib-js/stdlib/commit/e618407f673288e8aa303b5db6bd316c6f130762) - add support for additional ndarray constructor options

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

</section>

<!-- /.packages -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`6cd4e38`](https://github.com/stdlib-js/stdlib/commit/6cd4e38150c7b040fa6266f71113b35944896167): rename aliases

    -   To migrate, users should make the following name changes:
        ndoffset => ndarrayOffset
        ndshape => ndarrayShape
        ndstrides => ndarrayStrides
        This renaming allows for more consistent naming conventions with
        other ndarray utility functions.

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

-   [`015ff99`](https://github.com/stdlib-js/stdlib/commit/015ff99285585b1a9267a8ad3f8c856e64742dfd): increase minimum TypeScript version
-   [`1e78f7b`](https://github.com/stdlib-js/stdlib/commit/1e78f7b05c30245bd7ae22991ee021ae38a90a53): rename `isIntegralDataType` to `isIntegerDataType`

    -   To migrate, users should update their usage accordingly.

-   [`d45a05b`](https://github.com/stdlib-js/stdlib/commit/d45a05b03973bf5b6a5e97cb4bc8c0aba3a68a12): rename `integral` to `integer`

    -   To migrate, users should update their code to use `integer` rather
        than `integral` to refer to the policy/kind which includes both
        signed and unsigned integer dtypes.

-   [`f07f1ce`](https://github.com/stdlib-js/stdlib/commit/f07f1cedbfa64e81f21fcea8bb4e7ccbc67bde35): `dtype` argument replaced by `options` argument

    -   In order to migrate to the new API, users should replace any
        `dtype` argument usage with an equivalent `options` argument.

-   [`171fc57`](https://github.com/stdlib-js/stdlib/commit/171fc571b800ceb803d7d925cd871fc9bbcd7e8c): must provide `order` argument.

    -   To migrate, users should explicitly provide an `order` argument as
        a third argument when invoking `scalar2ndarray`.

</section>

<!-- /.breaking-changes -->

<section class="contributors">

### Contributors

A total of 3 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Dan Rose
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`18d7b79`](https://github.com/stdlib-js/stdlib/commit/18d7b79b109b7a144bc343d528b6aec1cbd38bd9) - **docs:** fix comment _(by Athan Reines)_
-   [`f74d56a`](https://github.com/stdlib-js/stdlib/commit/f74d56a193844b0173a5b5b8eae406f927e53b23) - **docs:** fix comment _(by Athan Reines)_
-   [`471e925`](https://github.com/stdlib-js/stdlib/commit/471e9257d5ca06d13a3c9faf7594d96870deeff0) - **docs:** fix comment _(by Athan Reines)_
-   [`52556c3`](https://github.com/stdlib-js/stdlib/commit/52556c32f126881ddcd1aaf8b1b0baf85ac78e59) - **docs:** fix examples _(by Athan Reines)_
-   [`ec6d1ed`](https://github.com/stdlib-js/stdlib/commit/ec6d1edc85b345d8bd0a4034d2bc2b0c6445d155) - **docs:** fix error description _(by Athan Reines)_
-   [`b01d709`](https://github.com/stdlib-js/stdlib/commit/b01d7098eca0cb303d820723d45e8c3e9828a944) - **feat:** add `nditerMatrixEntries` to namespace _(by Athan Reines)_
-   [`5f80a15`](https://github.com/stdlib-js/stdlib/commit/5f80a15dcb950ca672331f0fc276b10bc7c06105) - **feat:** add `ndarray/iter/matrix-entries` _(by Athan Reines)_
-   [`7685072`](https://github.com/stdlib-js/stdlib/commit/7685072aff78337a4ba796cb1ac4a6f5eb9d6a4d) - **feat:** add `nditerColumnEntries` to namespace _(by Athan Reines)_
-   [`aeccc0d`](https://github.com/stdlib-js/stdlib/commit/aeccc0da93a0cd2ad37e8e8bb69494e8453b068e) - **feat:** add `ndarray/iter/column-entries` _(by Athan Reines)_
-   [`ba9ef60`](https://github.com/stdlib-js/stdlib/commit/ba9ef60faebdc0d38428e2d487e71d0324538985) - **docs:** fix grammar typo _(by Athan Reines)_
-   [`5ab2e80`](https://github.com/stdlib-js/stdlib/commit/5ab2e80c8cbc08556636e42eeca94340dcb77ca4) - **docs:** update comments _(by Athan Reines)_
-   [`dc1e33f`](https://github.com/stdlib-js/stdlib/commit/dc1e33f6720ea3f7714f4b76c60a777efd650645) - **docs:** update returns annotation _(by Athan Reines)_
-   [`b96a9a2`](https://github.com/stdlib-js/stdlib/commit/b96a9a24e8028d366f5435b793cd285a3565e008) - **feat:** add `nditerRowEntries` to namespace _(by Athan Reines)_
-   [`344aa9e`](https://github.com/stdlib-js/stdlib/commit/344aa9e386486ee8b5af3edd2bd788db19f338e1) - **feat:** add `ndarray/iter/row-entries` _(by Athan Reines)_
-   [`29d99d7`](https://github.com/stdlib-js/stdlib/commit/29d99d75414e9559ce2938cc19e4bc13af1d4968) - **feat:** add `nditerMatrices` to namespace _(by Athan Reines)_
-   [`88a673c`](https://github.com/stdlib-js/stdlib/commit/88a673c7ed8f97ab14df8f26c60211f634994108) - **feat:** add `ndarray/iter/matrices` _(by Athan Reines)_
-   [`3aec20d`](https://github.com/stdlib-js/stdlib/commit/3aec20d84a70edd88ac294294bb733cabb544d66) - **fix:** remove leftover disabled lint rule _(by Athan Reines)_
-   [`d73bbf4`](https://github.com/stdlib-js/stdlib/commit/d73bbf43d222f935085f8ecf7526e5f57835f74e) - **build:** replace lint directives _(by Philipp Burckhardt)_
-   [`bf2cf8b`](https://github.com/stdlib-js/stdlib/commit/bf2cf8b0424e608a4e3abb6d18a8b44d790aa99c) - **build:** remove tslint directives _(by Philipp Burckhardt)_
-   [`453dd85`](https://github.com/stdlib-js/stdlib/commit/453dd85b5dd186d2b4d458256fe84906e1503fe2) - **build:** remove tslint directives _(by Philipp Burckhardt)_
-   [`7faffe3`](https://github.com/stdlib-js/stdlib/commit/7faffe325bbf186b14c3dfef621e9d4cc56b47ff) - **feat:** update namespace TypeScript declarations [(#1122)](https://github.com/stdlib-js/stdlib/pull/1122) _(by stdlib-bot, Athan Reines)_
-   [`a17f2aa`](https://github.com/stdlib-js/stdlib/commit/a17f2aaed3f2449944d5c5d348e9550087ff7a87) - **docs:** update namespace table of contents [(#1116)](https://github.com/stdlib-js/stdlib/pull/1116) _(by stdlib-bot, Athan Reines)_
-   [`c54dc22`](https://github.com/stdlib-js/stdlib/commit/c54dc2221daaeb94f148dd042f68f28e27afee34) - **feat:** add `ndsliceDimensionFrom` _(by Athan Reines)_
-   [`aeab98d`](https://github.com/stdlib-js/stdlib/commit/aeab98dc6f81a6266e0c2d61645f2b85850d263f) - **feat:** add `ndarray/slice-dimension-from` _(by Athan Reines)_
-   [`ce8a312`](https://github.com/stdlib-js/stdlib/commit/ce8a3129e8f00c590cc4c7350d25dacef0873ea8) - **test:** update test description _(by Athan Reines)_
-   [`0dd9ce5`](https://github.com/stdlib-js/stdlib/commit/0dd9ce57938da76ad290687c521e123d7c3bf306) - **test:** update test cases _(by Athan Reines)_
-   [`3fc3d44`](https://github.com/stdlib-js/stdlib/commit/3fc3d44bb885d6d8b31a2a31b614941d074c01d8) - **docs:** fix example _(by Athan Reines)_
-   [`1b0fc06`](https://github.com/stdlib-js/stdlib/commit/1b0fc06ec87f77a925ec0881f3aeda270759be14) - **feat:** add `ndsliceDimensionTo` to namespace _(by Athan Reines)_
-   [`f9774e0`](https://github.com/stdlib-js/stdlib/commit/f9774e088c9d5e471a3bd8379b913561a8d7c64c) - **feat:** add `ndarray/slice-dimension-to` _(by Athan Reines)_
-   [`7193f92`](https://github.com/stdlib-js/stdlib/commit/7193f92f82b1335c5527c6a8b3d1f36f866cff2e) - **test:** update test description to use consistent language _(by Athan Reines)_
-   [`d90228a`](https://github.com/stdlib-js/stdlib/commit/d90228a01f71e0b0a9e443377e711549040ecf31) - **feat:** add `sliceDimensionFrom` to namespace _(by Athan Reines)_
-   [`de5ef5e`](https://github.com/stdlib-js/stdlib/commit/de5ef5e1b15d235a28570f92fb5c12b1958227b5) - **feat:** add `ndarray/base/slice-dimension-from` _(by Athan Reines)_
-   [`229ab6e`](https://github.com/stdlib-js/stdlib/commit/229ab6efd7b1b93991b78a9399d071e23522e633) - **feat:** add `sliceDimensionTo` to namespace _(by Athan Reines)_
-   [`cb19b0e`](https://github.com/stdlib-js/stdlib/commit/cb19b0ed2878a48c3fe70cef41695ac587fa1907) - **docs:** update parameter description _(by Athan Reines)_
-   [`177eb1f`](https://github.com/stdlib-js/stdlib/commit/177eb1f9403d09272254662c38eb92ecf2bb2398) - **docs:** update parameter description _(by Athan Reines)_
-   [`3eb7c44`](https://github.com/stdlib-js/stdlib/commit/3eb7c445c25a352075cd32b826ec399fdb8f2775) - **feat:** add `ndarray/base/slice-dimension-to` _(by Athan Reines)_
-   [`4ee7e66`](https://github.com/stdlib-js/stdlib/commit/4ee7e66b7800ec8f720d5120a746c0f7a01662c9) - **docs:** fix typo _(by Athan Reines)_
-   [`21396dd`](https://github.com/stdlib-js/stdlib/commit/21396dd772ca631e3c6899999e40ab72925bc771) - **docs:** fix typo _(by Athan Reines)_
-   [`244aa35`](https://github.com/stdlib-js/stdlib/commit/244aa355c7767363ecc7745ca02744067c619f5f) - **docs:** remove unused requires _(by Athan Reines)_
-   [`0ac2169`](https://github.com/stdlib-js/stdlib/commit/0ac21696a8b6a4c9fca124edb92beaa923de2143) - **docs:** remove unused requires _(by Athan Reines)_
-   [`3aeb245`](https://github.com/stdlib-js/stdlib/commit/3aeb2455e4c6293f9c979355e2ea0755a250501b) - **docs:** remove unused requires _(by Athan Reines)_
-   [`af588fe`](https://github.com/stdlib-js/stdlib/commit/af588fed3d9d59a4e775ab691ee5d01d5d52fa1d) - **docs:** remove unused requires _(by Athan Reines)_
-   [`9061852`](https://github.com/stdlib-js/stdlib/commit/9061852038a6d4dc558baddfed0ff5d05ab2e6ae) - **docs:** remove unused requires _(by Athan Reines)_
-   [`fceed60`](https://github.com/stdlib-js/stdlib/commit/fceed6025372853e2bac1274dbfa83f69ebbf38e) - **docs:** remove unused requires _(by Athan Reines)_
-   [`f8f5ed5`](https://github.com/stdlib-js/stdlib/commit/f8f5ed57bcb3be1ff656d1d00a559cbbafca3e83) - **docs:** remove used requires _(by Athan Reines)_
-   [`2c57a3d`](https://github.com/stdlib-js/stdlib/commit/2c57a3d5e100df23e0d638ca44937c4026b0af08) - **docs:** remove unused requires _(by Athan Reines)_
-   [`d717347`](https://github.com/stdlib-js/stdlib/commit/d717347f290f6c738c47131a1557da42228ccd39) - **refactor:** use utility to normalize an index _(by Athan Reines)_
-   [`67592b8`](https://github.com/stdlib-js/stdlib/commit/67592b82b088e4b8516f4f5e210368c96cbb4c11) - **feat:** add `normalizeIndex` to namespace _(by Athan Reines)_
-   [`d57a9aa`](https://github.com/stdlib-js/stdlib/commit/d57a9aa0e900bde98c302a7ee711aed8be127056) - **docs:** update heading _(by Athan Reines)_
-   [`4b3b43d`](https://github.com/stdlib-js/stdlib/commit/4b3b43d45f39775896743ec9d5d2df8c0baa4d79) - **docs:** update heading _(by Athan Reines)_
-   [`512c8a8`](https://github.com/stdlib-js/stdlib/commit/512c8a8f75a158a42f9ea9113bda929e0c28519e) - **feat:** add `ndarray/base/normalize-index` _(by Athan Reines)_
-   [`a41ecbd`](https://github.com/stdlib-js/stdlib/commit/a41ecbd20541d1f60bc30db109b2599021cc4e47) - **feat:** add `sliceFrom` to namespace _(by Athan Reines)_
-   [`7f80a7c`](https://github.com/stdlib-js/stdlib/commit/7f80a7cdf828e50f98b963df45b2c9262c501a14) - **feat:** add `ndarray/base/slice-from` _(by Athan Reines)_
-   [`6a52a46`](https://github.com/stdlib-js/stdlib/commit/6a52a46aa5478a0ee2fc6b946a8665788dbbaec7) - **refactor:** use assertion utility _(by Athan Reines)_
-   [`54401ac`](https://github.com/stdlib-js/stdlib/commit/54401acffc828b45fbe3cabe6b17f305cb4170b0) - **feat:** add `sliceTo` to namespace _(by Athan Reines)_
-   [`4da3db2`](https://github.com/stdlib-js/stdlib/commit/4da3db265d7a7ab8dd6e91eb55d3ab393a2789f3) - **feat:** add `ndarray/base/slice-to` _(by Athan Reines)_
-   [`2934e57`](https://github.com/stdlib-js/stdlib/commit/2934e576d314c60fc6198228d33282a1ab4f76c1) - **feat:** add `flipud` to namespace _(by Athan Reines)_
-   [`316273f`](https://github.com/stdlib-js/stdlib/commit/316273feed1a28304e7e4a1612831e257fc6e9e2) - **feat:** add `ndarray/base/flipud` _(by Athan Reines)_
-   [`013beaa`](https://github.com/stdlib-js/stdlib/commit/013beaa9f51f64fb56a25ab95dc85a0f849dc1ad) - **feat:** add `fliplr` to namespace _(by Athan Reines)_
-   [`bb9e0a4`](https://github.com/stdlib-js/stdlib/commit/bb9e0a4dc183c68ffd21fecc1130cb4bac303597) - **feat:** add `ndarray/base/fliplr` _(by Athan Reines)_
-   [`b390e0b`](https://github.com/stdlib-js/stdlib/commit/b390e0bdfc5f184568b70ddd3d9b4a9cd92dbf9e) - **feat:** add `reverseDimension` to namespace _(by Athan Reines)_
-   [`86f5a89`](https://github.com/stdlib-js/stdlib/commit/86f5a894a141d677a19ee54e1263dacb165a177c) - **feat:** add `ndarray/base/reverse-dimension` _(by Athan Reines)_
-   [`c6128d2`](https://github.com/stdlib-js/stdlib/commit/c6128d2bd4505180493013dfefaa2b3292d4404a) - **test:** add test cases for negative dimension indices _(by Athan Reines)_
-   [`b93826a`](https://github.com/stdlib-js/stdlib/commit/b93826a118ec82feecf5da6cdb66fd6cf5d86e6c) - **test:** add test cases for negative dimension indices _(by Athan Reines)_
-   [`d1efd51`](https://github.com/stdlib-js/stdlib/commit/d1efd5153de57df1926a497ac56bb66c0f23329a) - **refactor:** use base array utility to create argument array _(by Athan Reines)_
-   [`be83095`](https://github.com/stdlib-js/stdlib/commit/be83095aaf7d0dec724ac1d42135459f33ca38af) - **feat:** add `reverse` to namespace _(by Athan Reines)_
-   [`aff949b`](https://github.com/stdlib-js/stdlib/commit/aff949b5c2ee01b9aef69e471c735691b27ec370) - **feat:** add `ndarray/base/reverse` _(by Athan Reines)_
-   [`89ff3eb`](https://github.com/stdlib-js/stdlib/commit/89ff3eb40b71405e4df16f2f876621ac0e114259) - **refactor:** use utility to create a MultiSlice from a list of arguments _(by Athan Reines)_
-   [`17d37fd`](https://github.com/stdlib-js/stdlib/commit/17d37fda2dfd259ca643841a3dfe3b5f4f80587e) - **refactor:** use utility to create a MultiSlice from a list of arguments _(by Athan Reines)_
-   [`654cb7e`](https://github.com/stdlib-js/stdlib/commit/654cb7e3f563edb835a1705b4d99c31fcd57d1fa) - **refactor:** use utility to create a MultiSlice from a list of arguments _(by Athan Reines)_
-   [`fe69034`](https://github.com/stdlib-js/stdlib/commit/fe6903497b6f745d27a2cfca5ea290de06e4a5a1) - **refactor:** use utility to create a MultiSlice from a list of arguments _(by Athan Reines)_
-   [`0fa588f`](https://github.com/stdlib-js/stdlib/commit/0fa588fa4f4eb1b45f405838d2252a8b9a4aab88) - **refactor:** use utility to create a MultiSlice from a list of arguments _(by Athan Reines)_
-   [`aabbb4e`](https://github.com/stdlib-js/stdlib/commit/aabbb4eaff80556d2320d75cf9520f5b01352e50) - **feat:** add loop functions for downcasting floating-point dtypes _(by Athan Reines)_
-   [`b621204`](https://github.com/stdlib-js/stdlib/commit/b621204db5caea8e9474ca11a17390426a6481c3) - **refactor:** use assertion utility for mostly safe casts _(by Athan Reines)_
-   [`733ee49`](https://github.com/stdlib-js/stdlib/commit/733ee4954b08c24007460390d688fe86bb1e8fae) - **feat:** add support for a `mostly-safe` casting mode _(by Athan Reines)_
-   [`1aefe83`](https://github.com/stdlib-js/stdlib/commit/1aefe83e90f109989a001e85ca25ed278a7c3a50) - **feat:** add `isMostlySafeDataTypeCast` to namespace _(by Athan Reines)_
-   [`a8290c4`](https://github.com/stdlib-js/stdlib/commit/a8290c4059e1aa16ed2388a02c5637e58659ae01) - **feat:** add `ndarray/base/assert/is-mostly-safe-data-type-cast` _(by Athan Reines)_
-   [`a763ac4`](https://github.com/stdlib-js/stdlib/commit/a763ac4c03c49343e3f06ba93325f39a20da97cc) - **fix:** allow downcast from `float64` to `complex64` _(by Athan Reines)_
-   [`32d8d05`](https://github.com/stdlib-js/stdlib/commit/32d8d0583c9810eb6eb740a54a84921f7a712a3e) - **docs:** document support for `mostly-safe` casting mode _(by Athan Reines)_
-   [`fc82b83`](https://github.com/stdlib-js/stdlib/commit/fc82b835423892d4e354ae3aec2ec3823565f3d4) - **docs:** document `mostly-safe` casting mode _(by Athan Reines)_
-   [`12ee2c9`](https://github.com/stdlib-js/stdlib/commit/12ee2c9e8cd35134cc91dd32dd609144e76b8686) - **feat:** add `mostly-safe` casting mode _(by Athan Reines)_
-   [`1ee8ca1`](https://github.com/stdlib-js/stdlib/commit/1ee8ca150bc67b905084fe89d20f6102ed823794) - **feat:** add `ndarrayMostlySafeCasts` to namespace _(by Athan Reines)_
-   [`eff3cdd`](https://github.com/stdlib-js/stdlib/commit/eff3cdd2245ee7c9265d38f2d31b49bc7f4400d8) - **feat:** add `ndarray/mostly-safe-casts` _(by Athan Reines)_
-   [`267e16e`](https://github.com/stdlib-js/stdlib/commit/267e16e021c86a2dbfeefc4112b3008ac7638688) - **fix:** add support for complex numbers and provided ndarrays having arbitrary rank _(by Athan Reines)_
-   [`e5e8db8`](https://github.com/stdlib-js/stdlib/commit/e5e8db8c741f5195fe0b9d823a6eff6d1011b6a6) - **chore:** add TODO _(by Athan Reines)_
-   [`5ec7c84`](https://github.com/stdlib-js/stdlib/commit/5ec7c84218508cd2c188764951042c838167bc8f) - **chore:** add TODO _(by Athan Reines)_
-   [`a174903`](https://github.com/stdlib-js/stdlib/commit/a174903fecf53776cf2a283c932f1602145326ce) - **chore:** add TODO _(by Athan Reines)_
-   [`f4cb44c`](https://github.com/stdlib-js/stdlib/commit/f4cb44c4a2f34211b7f53aa1e7e49e564445268b) - **feat:** add `assign` to namespace _(by Athan Reines)_
-   [`4711195`](https://github.com/stdlib-js/stdlib/commit/471119503f0230ea0078a40a93d9f790cfec3e02) - **style:** disable lint rule _(by Athan Reines)_
-   [`5a97436`](https://github.com/stdlib-js/stdlib/commit/5a97436e934c0759dce08a5b9ba46717b370fd31) - **refactor:** use `ndarray/base/assign` for assignment _(by Athan Reines)_
-   [`c8417b0`](https://github.com/stdlib-js/stdlib/commit/c8417b07e7637b7c5c2336191d9b3288a0e5a228) - **fix:** add support for assigning real-valued elements to complex-valued elements _(by Athan Reines)_
-   [`46d5210`](https://github.com/stdlib-js/stdlib/commit/46d52108725f354f62312121e797195cbbfe7611) - **fix:** address unterminated macro _(by Athan Reines)_
-   [`39b2b0d`](https://github.com/stdlib-js/stdlib/commit/39b2b0da7407b46375ee9897ce60452f5179cf1b) - **fix:** use correct type for dispatch object _(by Athan Reines)_
-   [`ec59584`](https://github.com/stdlib-js/stdlib/commit/ec59584921dfb496f926c6a72f0278f667b01a02) - **docs:** fix providing of extraneous argument _(by Athan Reines)_
-   [`c28a16e`](https://github.com/stdlib-js/stdlib/commit/c28a16e50e84bc0fb8dd16b644f83b60248fe3b7) - **feat:** add `ndarray/base/assign` _(by Athan Reines)_
-   [`248d4e0`](https://github.com/stdlib-js/stdlib/commit/248d4e092bb84bb80266ebce30cb3224695cc39c) - **docs:** fix error description _(by Athan Reines)_
-   [`d334294`](https://github.com/stdlib-js/stdlib/commit/d334294dec1b4921b6d0d6a5b42234ab09e2ca11) - **chore:** add keyword _(by Athan Reines)_
-   [`b8f8c28`](https://github.com/stdlib-js/stdlib/commit/b8f8c28db9816e6fb5b0cee0ad61f377f6815d65) - **chore:** add keyword _(by Athan Reines)_
-   [`5660dc8`](https://github.com/stdlib-js/stdlib/commit/5660dc86e4a4738c5a9b8f4357639d2d98460a8d) - **chore:** add keyword _(by Athan Reines)_
-   [`a2ee99a`](https://github.com/stdlib-js/stdlib/commit/a2ee99a77edf1e2aed7e79624e5159aa7652b94f) - **chore:** add keyword _(by Athan Reines)_
-   [`c9b2252`](https://github.com/stdlib-js/stdlib/commit/c9b22527ae39831cd16f6f250b27821badc4bddf) - **chore:** add keyword _(by Athan Reines)_
-   [`c741ca0`](https://github.com/stdlib-js/stdlib/commit/c741ca0797dc58e9d912db708c832f0e1ed8b7e3) - **chore:** add keyword _(by Athan Reines)_
-   [`67e62cb`](https://github.com/stdlib-js/stdlib/commit/67e62cb41fa15c58d9c29532db4eac8ab3dcd0ba) - **chore:** add NumPy alias as a keyword _(by Athan Reines)_
-   [`b5c4543`](https://github.com/stdlib-js/stdlib/commit/b5c454313c1f2cce40a913f889093410608246bf) - **feat:** add `ndsliceDimension` to namespace _(by Athan Reines)_
-   [`2fd5a3a`](https://github.com/stdlib-js/stdlib/commit/2fd5a3a25229f47a859fd86f5f4a8311153c2618) - **feat:** add `ndarray/slice-dimension` _(by Athan Reines)_
-   [`ae27776`](https://github.com/stdlib-js/stdlib/commit/ae27776d5d4827f695a9ad316234d207bf1038d9) - **test:** fix declaration tests _(by Athan Reines)_
-   [`532089a`](https://github.com/stdlib-js/stdlib/commit/532089aa75aaa057c8902ccfe56c245e731bfb30) - **docs:** fix return annotation _(by Athan Reines)_
-   [`9df2f0a`](https://github.com/stdlib-js/stdlib/commit/9df2f0ab1385d4ce8763e5770aa5a099ac324ef1) - **docs:** fix heading _(by Athan Reines)_
-   [`ac561c6`](https://github.com/stdlib-js/stdlib/commit/ac561c6ae65906e40ee96a664f3ed5f920d94285) - **test:** add input argument validation tests _(by Athan Reines)_
-   [`b2569d3`](https://github.com/stdlib-js/stdlib/commit/b2569d342a0e9fee8214cb18de258e61ab0efdd4) - **test:** add missing tests for error conditions _(by Athan Reines)_
-   [`d5e5b40`](https://github.com/stdlib-js/stdlib/commit/d5e5b40c2af6d821edafb3e4827c7e61b6e704e9) - **test:** add test case to ensure full test coverage _(by Athan Reines)_
-   [`c794d6b`](https://github.com/stdlib-js/stdlib/commit/c794d6b070e23aa1ab14d7f7e9a5bf9d8b43b837) - **test:** add test case to ensure full test coverage _(by Athan Reines)_
-   [`da64af1`](https://github.com/stdlib-js/stdlib/commit/da64af1beadcbaa73717ac68566feffb5b5ecc43) - **refactor:** remove obsolete branch _(by Athan Reines)_
-   [`f59a264`](https://github.com/stdlib-js/stdlib/commit/f59a26499caa43e748d6cf1aec868508585f4262) - **refactor:** remove obsolete branch _(by Athan Reines)_
-   [`1d23784`](https://github.com/stdlib-js/stdlib/commit/1d2378420b1e26a0815e458009271e7894809a06) - **refactor:** use accessor utility _(by Athan Reines)_
-   [`199d59c`](https://github.com/stdlib-js/stdlib/commit/199d59c07623b9f003fe6bef18da11a84c30274c) - **refactor:** use accessor utility _(by Athan Reines)_
-   [`3b849ec`](https://github.com/stdlib-js/stdlib/commit/3b849ec1545f4dae310a8350da56a4f42ec04881) - **refactor:** use accessor utility _(by Athan Reines)_
-   [`1bd53fc`](https://github.com/stdlib-js/stdlib/commit/1bd53fcc9394287b8c8dd82abd4ba83266b5aa7f) - **refactor:** use accessor utility _(by Athan Reines)_
-   [`6e15664`](https://github.com/stdlib-js/stdlib/commit/6e15664c61abd383b4511990ba96869c59b96e99) - **refactor:** use accessor utility and rename parameter _(by Athan Reines)_
-   [`86ef740`](https://github.com/stdlib-js/stdlib/commit/86ef74012a1bd35dd6de6046f87f84f8bf219352) - **refactor:** use accessor utility _(by Athan Reines)_
-   [`61db175`](https://github.com/stdlib-js/stdlib/commit/61db175f0cfabf39d2fd3053436a64de3627f5ad) - **refactor:** use accessor utility _(by Athan Reines)_
-   [`71d561c`](https://github.com/stdlib-js/stdlib/commit/71d561cc2b942a92983a38c8bde009d35255c5d1) - **refactor:** use accessor utilities _(by Athan Reines)_
-   [`db91a38`](https://github.com/stdlib-js/stdlib/commit/db91a388c5f19d23ca5e09ba090e1b86cf307fb4) - **refactor:** use accessor utilities _(by Athan Reines)_
-   [`54bec59`](https://github.com/stdlib-js/stdlib/commit/54bec5942986105b25f88fe9a633df91c837623a) - **refactor:** use accessor utility _(by Athan Reines)_
-   [`279034e`](https://github.com/stdlib-js/stdlib/commit/279034eddb4b9ec511c6001f2c120b9c34bf3cfd) - **refactor:** use accessor utility _(by Athan Reines)_
-   [`836aaf4`](https://github.com/stdlib-js/stdlib/commit/836aaf48a1824e3002122cc67aae3d01a17451a5) - **test:** add test case for zero-dimensional ndarray-like object _(by Athan Reines)_
-   [`8874562`](https://github.com/stdlib-js/stdlib/commit/8874562a8e3383393bef0e1220080fb20a99880f) - **fix:** add missing support for minimal ndarray-like objects not supporting a strides property _(by Athan Reines)_
-   [`693a93d`](https://github.com/stdlib-js/stdlib/commit/693a93d5511cba4f5ad0255bba8415e603e65816) - **refactor:** use accessor utilities _(by Athan Reines)_
-   [`b545940`](https://github.com/stdlib-js/stdlib/commit/b5459409877703be84df2e88e2dd2a9617eb05e3) - **refactor:** use top-level accessor packages _(by Athan Reines)_
-   [`0c2ab4c`](https://github.com/stdlib-js/stdlib/commit/0c2ab4cb17253856ebe8fdc07a69032e04851693) - **refactor:** use accessor utilities _(by Athan Reines)_
-   [`b75bcc2`](https://github.com/stdlib-js/stdlib/commit/b75bcc2e8807ea3f2ec8d8803bb6f4106bd11d0f) - **fix:** add missing argument _(by Athan Reines)_
-   [`c13a4d5`](https://github.com/stdlib-js/stdlib/commit/c13a4d58f04d875125481add5d68e1e2052b19ce) - **fix:** add missing argument _(by Athan Reines)_
-   [`6a6225d`](https://github.com/stdlib-js/stdlib/commit/6a6225d3d7a9a7e97387c1d1b3dff09c702eddd7) - **fix:** add missing argument _(by Athan Reines)_
-   [`9741d55`](https://github.com/stdlib-js/stdlib/commit/9741d5527de099260554aa7f4e2e4ca4c3e2cd2a) - **fix:** add missing argument _(by Athan Reines)_
-   [`a5ce155`](https://github.com/stdlib-js/stdlib/commit/a5ce155e3f2da8176e848e5fd75833a7a943fdb6) - **fix:** add missing argument _(by Athan Reines)_
-   [`c539bd1`](https://github.com/stdlib-js/stdlib/commit/c539bd17b8cd17ca3a37a958626dbd6df2e25477) - **fix:** add missing argument _(by Athan Reines)_
-   [`c142624`](https://github.com/stdlib-js/stdlib/commit/c1426240f375b6c864a2d59368694ac09d7637f6) - **fix:** add missing argument _(by Athan Reines)_
-   [`61aa8e7`](https://github.com/stdlib-js/stdlib/commit/61aa8e7e7d3d64e9bac8b51d34b1b734a24a84de) - **fix:** add missing argument _(by Athan Reines)_
-   [`65d964f`](https://github.com/stdlib-js/stdlib/commit/65d964fc0d0cde545a0e15fd34bcfcdec5eb01b6) - **fix:** add missing argument _(by Athan Reines)_
-   [`11d1d5d`](https://github.com/stdlib-js/stdlib/commit/11d1d5d61ac0b89f10982bfd44566d4f7fd03408) - **refactor:** use accessor utilities _(by Athan Reines)_
-   [`d3d1190`](https://github.com/stdlib-js/stdlib/commit/d3d119010e4cb5a21fc8f07e8ea5508e7bea2111) - **refactor:** use accessor utilities and add TODO _(by Athan Reines)_
-   [`da14441`](https://github.com/stdlib-js/stdlib/commit/da1444138eccd12ecee59c0872ff99655899374f) - **refactor:** use accessor utilities _(by Athan Reines)_
-   [`59fe5b7`](https://github.com/stdlib-js/stdlib/commit/59fe5b79e6328439e4e6eccc7563cd1ef2dc8ad9) - **refactor:** use accessor utilities _(by Athan Reines)_
-   [`6b7aed1`](https://github.com/stdlib-js/stdlib/commit/6b7aed1cb8f67d76b9a1676fd48d7964f168d3b3) - **refactor:** use accessor utilities _(by Athan Reines)_
-   [`725cf2d`](https://github.com/stdlib-js/stdlib/commit/725cf2d5e22b6d745c5c0565dee497b06594d730) - **refactor:** use accessor utilities _(by Athan Reines)_
-   [`f0abdf8`](https://github.com/stdlib-js/stdlib/commit/f0abdf87ef922a985a0b5a727dd1a25e06cac934) - **refactor:** use accessor utilities _(by Athan Reines)_
-   [`5325a1c`](https://github.com/stdlib-js/stdlib/commit/5325a1c582f04488de7cfb0cf5f4c08a9bef014d) - **refactor:** use accessor utilities _(by Athan Reines)_
-   [`ab25d92`](https://github.com/stdlib-js/stdlib/commit/ab25d926bec34f375717276ed31e62c34f97c293) - **refactor:** use accessor utility _(by Athan Reines)_
-   [`b1146ea`](https://github.com/stdlib-js/stdlib/commit/b1146ea457769d51a1c83a95c397f49631716923) - **refactor:** use accessor utilities _(by Athan Reines)_
-   [`9e143f8`](https://github.com/stdlib-js/stdlib/commit/9e143f811371fc79236fb9d0b3e97234637749ad) - **refactor:** use accessor utilities _(by Athan Reines)_
-   [`43bd26c`](https://github.com/stdlib-js/stdlib/commit/43bd26c238ffadf082186cfb08799b130375e06f) - **refactor:** use accessor utilities _(by Athan Reines)_
-   [`b985417`](https://github.com/stdlib-js/stdlib/commit/b9854176622b79eb7338247ac9d77ec0d22dc3a7) - **feat:** add `data` to namespace _(by Athan Reines)_
-   [`0786d6c`](https://github.com/stdlib-js/stdlib/commit/0786d6c0bc1087b5748b42632c6b8efebcb147ad) - **feat:** add `ndarray/base/data-buffer` _(by Athan Reines)_
-   [`3eeff0a`](https://github.com/stdlib-js/stdlib/commit/3eeff0a0843cbe3c94c814def9f26b5caa4ed429) - **feat:** add `ndarrayDataBuffer` to namespace _(by Athan Reines)_
-   [`a2b2082`](https://github.com/stdlib-js/stdlib/commit/a2b208201a324c5efea72831cc35da60fe560583) - **feat:** add `ndarray/data-buffer` _(by Athan Reines)_
-   [`e9a2610`](https://github.com/stdlib-js/stdlib/commit/e9a26107c8f00762aecd5305d8d98e9ee4a53bd7) - **docs:** add links _(by Athan Reines)_
-   [`3a2e182`](https://github.com/stdlib-js/stdlib/commit/3a2e182a27fd4d6ca7d5b518cf24570c273a2556) - **feat:** add `order` to namespace _(by Athan Reines)_
-   [`64a866a`](https://github.com/stdlib-js/stdlib/commit/64a866a312aae36b2faab5776f73e9c4af9baec6) - **docs:** fix missing hyphen in comment _(by Athan Reines)_
-   [`857a8c7`](https://github.com/stdlib-js/stdlib/commit/857a8c79fd6099e8a34cec07d9b6c89a8e29e77f) - **feat:** add `ndarray/base/order` _(by Athan Reines)_
-   [`6cd4e38`](https://github.com/stdlib-js/stdlib/commit/6cd4e38150c7b040fa6266f71113b35944896167) - **feat:** rename aliases _(by Athan Reines)_
-   [`72c6fa0`](https://github.com/stdlib-js/stdlib/commit/72c6fa09c02e49ff622030040703aee18ddfd3e8) - **fix:** rename alias from `ndorder` to `ndarrayOrder` to match existing convention _(by Athan Reines)_
-   [`b38f7f8`](https://github.com/stdlib-js/stdlib/commit/b38f7f89759f2f8577c1184a9b0cd71d412db8a2) - **feat:** add `ndorder` to namespace _(by Athan Reines)_
-   [`819f02e`](https://github.com/stdlib-js/stdlib/commit/819f02e21e7481d3a43265cb61e9aa1a0d2fd406) - **feat:** add `ndarray/order` _(by Athan Reines)_
-   [`88e5849`](https://github.com/stdlib-js/stdlib/commit/88e58498365a51ba56218c74a4767e89eb5061cc) - **feat:** add `dtype` to namespace _(by Athan Reines)_
-   [`9d9b5ca`](https://github.com/stdlib-js/stdlib/commit/9d9b5ca04c251db89351dabfd1d3868fdee22fd2) - **feat:** add `ndarray/base/dtype` _(by Athan Reines)_
-   [`a0baf19`](https://github.com/stdlib-js/stdlib/commit/a0baf191ee0dd9c4fa49229ced25c00cd25ca4a9) - **feat:** add `ndarrayDataType` to namespace _(by Athan Reines)_
-   [`29df3cf`](https://github.com/stdlib-js/stdlib/commit/29df3cf36888a96512dfade51adf0e3dde320166) - **feat:** add `ndarray/dtype` _(by Athan Reines)_
-   [`13a81fe`](https://github.com/stdlib-js/stdlib/commit/13a81fee0748b91d9d3b5d763054020c72676b6d) - **docs:** fix description _(by Athan Reines)_
-   [`75f46d2`](https://github.com/stdlib-js/stdlib/commit/75f46d2e505f4422f8016331aaf54aa77cd20e33) - **docs:** fix description _(by Athan Reines)_
-   [`ed14448`](https://github.com/stdlib-js/stdlib/commit/ed1444886a2b28f68d09d313c7fe550be337d2b4) - **feat:** add `sliceDimension` to namespace _(by Athan Reines)_
-   [`5ca2f0e`](https://github.com/stdlib-js/stdlib/commit/5ca2f0e339d3580058c55d401045f8e66caaf543) - **feat:** add `ndarray/base/slice-dimension` _(by Athan Reines)_
-   [`a8c0a5e`](https://github.com/stdlib-js/stdlib/commit/a8c0a5e69523eab335a311ca8f86dc4eeeb01eb3) - **docs:** remove throws annotation _(by Athan Reines)_
-   [`6cae75a`](https://github.com/stdlib-js/stdlib/commit/6cae75ae7be925b6bcca3fb503d7371b2ca22894) - **docs:** fix variable names _(by Athan Reines)_
-   [`09306de`](https://github.com/stdlib-js/stdlib/commit/09306deea6b832fdc8b6bf11a853cf2c5eab8108) - **fix:** ensure consistent results when provided a minimal zero-dimensional ndarray _(by Athan Reines)_
-   [`b6571b2`](https://github.com/stdlib-js/stdlib/commit/b6571b2e436559d99e92767a95e95588857205c8) - **feat:** add `strides` to namespace _(by Athan Reines)_
-   [`5a0c235`](https://github.com/stdlib-js/stdlib/commit/5a0c23554e53b29fe6c36148c351699dfefe4ea7) - **feat:** add `ndarray/base/strides` _(by Athan Reines)_
-   [`6eb1720`](https://github.com/stdlib-js/stdlib/commit/6eb1720344be2cc2e1ac46ae1aef501edc0dc4a2) - **feat:** add `ndstrides` to namespace _(by Athan Reines)_
-   [`1407845`](https://github.com/stdlib-js/stdlib/commit/1407845fab9107bcab1834c0017c6424e6accccd) - **feat:** add `ndarray/strides` _(by Athan Reines)_
-   [`ed378b7`](https://github.com/stdlib-js/stdlib/commit/ed378b72c05992f0473dc5891dc4664773949148) - **feat:** add `shape` to namespace _(by Athan Reines)_
-   [`7a6cc2b`](https://github.com/stdlib-js/stdlib/commit/7a6cc2b58a83de238126dc3e899d663b5939167b) - **feat:** add `ndarray/base/shape` _(by Athan Reines)_
-   [`482bd69`](https://github.com/stdlib-js/stdlib/commit/482bd6970166f88f832e4d0e241b2fc1d0d780ea) - **feat:** add `ndshape` to namespace _(by Athan Reines)_
-   [`b76d481`](https://github.com/stdlib-js/stdlib/commit/b76d48151d39b4db1ec0440da235b0f9c042c675) - **feat:** add `ndarray/shape` _(by Athan Reines)_
-   [`8d3b925`](https://github.com/stdlib-js/stdlib/commit/8d3b9255ac8b517c4b815505773bcc71b5c358b4) - **bench:** fix buffer size _(by Athan Reines)_
-   [`43cc884`](https://github.com/stdlib-js/stdlib/commit/43cc884dad74ade7d7dee24f4764ab6c613b497d) - **bench:** fix buffer size _(by Athan Reines)_
-   [`0f8bc08`](https://github.com/stdlib-js/stdlib/commit/0f8bc0882a61b2c54219f37e6d2cb80c50985194) - **feat:** add `offset` to namespace _(by Athan Reines)_
-   [`6743af8`](https://github.com/stdlib-js/stdlib/commit/6743af86ded77d28103a9dbbecbc63d8da9b6059) - **docs:** fix description _(by Athan Reines)_
-   [`08dd5cd`](https://github.com/stdlib-js/stdlib/commit/08dd5cdbbfb2370bc88cf0e223a1371473243c09) - **feat:** add `ndarray/base/offset` _(by Athan Reines)_
-   [`e20c23e`](https://github.com/stdlib-js/stdlib/commit/e20c23e36bdb2904b2aa51a47a5cd674bdc377d0) - **feat:** add `ndoffset` to namespace _(by Athan Reines)_
-   [`6e284c2`](https://github.com/stdlib-js/stdlib/commit/6e284c28a7e00043ffa90077ede849ad3bdb9272) - **feat:** add `ndarray/offset` _(by Athan Reines)_
-   [`6b48944`](https://github.com/stdlib-js/stdlib/commit/6b48944663c08f64956469340e8561704d9923f8) - **feat:** add `ndims` to namespace _(by Athan Reines)_
-   [`dd72b0f`](https://github.com/stdlib-js/stdlib/commit/dd72b0f28dc570151a855a31c9c831fe86f91169) - **feat:** add `ndarray/base/ndims` _(by Athan Reines)_
-   [`94b7c2d`](https://github.com/stdlib-js/stdlib/commit/94b7c2da42e0d782ccd380503ec6770a0c671822) - **feat:** add `ndims` to namespace _(by Athan Reines)_
-   [`e3e6b60`](https://github.com/stdlib-js/stdlib/commit/e3e6b60e161766128d601efc49aa73b21c4ebe54) - **feat:** add `ndarray/ndims` _(by Athan Reines)_
-   [`4471b9a`](https://github.com/stdlib-js/stdlib/commit/4471b9a4ab23dc789069d77eb9c9eb6a08b4b557) - **docs:** fix description _(by Athan Reines)_
-   [`c65450d`](https://github.com/stdlib-js/stdlib/commit/c65450df7733439374fe01c011f3e2f92f7fbdbb) - **docs:** fix description _(by Athan Reines)_
-   [`3514d7d`](https://github.com/stdlib-js/stdlib/commit/3514d7d812aaad71eaaf60dd570bf460758319f2) - **feat:** add `numel` to namespace _(by Athan Reines)_
-   [`de3e5f4`](https://github.com/stdlib-js/stdlib/commit/de3e5f407b421efdc6d08f78851281a613ef6b1c) - **docs:** update comment _(by Athan Reines)_
-   [`657947f`](https://github.com/stdlib-js/stdlib/commit/657947fab94fc9e62005afe17406b1d39c5a3bfa) - **feat:** add `ndarray/numel` _(by Athan Reines)_
-   [`ef501a1`](https://github.com/stdlib-js/stdlib/commit/ef501a18da47c65e159a174d814d15d31627a54f) - **docs:** update parameter name _(by Athan Reines)_
-   [`3e3d62e`](https://github.com/stdlib-js/stdlib/commit/3e3d62e3b7dd32fce3cb16ae1457729fdbecdaf7) - **feat:** add `maybeBroadcastArray` to namespace _(by Athan Reines)_
-   [`634cb2a`](https://github.com/stdlib-js/stdlib/commit/634cb2a9ca66d1ec8f9b16b2d003a6856913702e) - **docs:** fix duplicate note and fix benchmark loop _(by Athan Reines)_
-   [`e96df4a`](https://github.com/stdlib-js/stdlib/commit/e96df4adf3598d2453ab869cec535971d4187c20) - **feat:** add `ndarray/maybe-broadcast-array` _(by Athan Reines)_
-   [`bc1768e`](https://github.com/stdlib-js/stdlib/commit/bc1768ea93ed7c72ce90dd4ade9b6786603381b8) - **fix:** prevent creating writable views when an input array is read-only _(by Athan Reines)_
-   [`64bd3a8`](https://github.com/stdlib-js/stdlib/commit/64bd3a808f060dc2004d130c2cb974b100527e82) - **fix:** prevent creating writable views when provided a read-only array _(by Athan Reines)_
-   [`b45eb8f`](https://github.com/stdlib-js/stdlib/commit/b45eb8f83d224bea7e4bc063535ddb7962964872) - **feat:** add `nditerValues` to namespace _(by Athan Reines)_
-   [`3cc2fdb`](https://github.com/stdlib-js/stdlib/commit/3cc2fdb3b4ba4b60fb52139dc3ffbef267ecfeec) - **feat:** add `ndarray/iter/values` _(by Athan Reines)_
-   [`3fb0d08`](https://github.com/stdlib-js/stdlib/commit/3fb0d0867de3e5e4e201ebda76c202f1651f1d27) - **chore:** add keyword _(by Athan Reines)_
-   [`a2eea70`](https://github.com/stdlib-js/stdlib/commit/a2eea700f6ce9618ac939c493412c262b4c8fd67) - **chore:** add keywords _(by Athan Reines)_
-   [`665ce24`](https://github.com/stdlib-js/stdlib/commit/665ce24b77631e05ab7f1788c5777e2fc7e7cca0) - **feat:** add `nditerEntries` to namespace _(by Athan Reines)_
-   [`6cd1bad`](https://github.com/stdlib-js/stdlib/commit/6cd1badeb9fff42ccb03486ccf7d6c0b53d03350) - **feat:** add `ndarray/iter/entries` _(by Athan Reines)_
-   [`905a042`](https://github.com/stdlib-js/stdlib/commit/905a0427dcde188ab854d94cd313ca7e1e3d5200) - **docs:** fix comment _(by Athan Reines)_
-   [`3d40220`](https://github.com/stdlib-js/stdlib/commit/3d402204446c8f6230cdc699d8f1dc444673aa95) - **refactor:** use base utility to resolve the next Cartesian index _(by Athan Reines)_
-   [`a0a3f9f`](https://github.com/stdlib-js/stdlib/commit/a0a3f9fc1a6d9d5aaa48500c2609b3876d2b7d9a) - **refactor:** use base utility to resolve the next Cartesian index _(by Athan Reines)_
-   [`afdef7b`](https://github.com/stdlib-js/stdlib/commit/afdef7b5b4b2666a95a20395fef83e6871a08c19) - **refactor:** only import specific method _(by Athan Reines)_
-   [`a4c5a86`](https://github.com/stdlib-js/stdlib/commit/a4c5a866e87e35336b13bb73b6b1a53d44f759df) - **refactor:** use base package to resolve the next Cartesian index _(by Athan Reines)_
-   [`49e1d21`](https://github.com/stdlib-js/stdlib/commit/49e1d216375e904a5448da4bf414a3261e1f68ba) - **feat:** add `nextCartesianIndex` to namespace _(by Athan Reines)_
-   [`b355ef7`](https://github.com/stdlib-js/stdlib/commit/b355ef7f0a5a8b653773812a0ee91c486d5b3120) - **test:** add `assign` tests _(by Athan Reines)_
-   [`b8de2da`](https://github.com/stdlib-js/stdlib/commit/b8de2dab6ca473794f646945254f97c839fc31af) - **feat:** add `ndarray/base/next-cartesian-index` _(by Athan Reines)_
-   [`5c7312f`](https://github.com/stdlib-js/stdlib/commit/5c7312f1de2a2e5b6c10c4c4e1c76e7cec8d1620) - **feat:** add `nditerIndices` to namespace _(by Athan Reines)_
-   [`613fb18`](https://github.com/stdlib-js/stdlib/commit/613fb18c3890649335378f7b235a5f06e96860eb) - **feat:** add `ndarray/iter/indices` _(by Athan Reines)_
-   [`92b814f`](https://github.com/stdlib-js/stdlib/commit/92b814fe9446bc9f31aed4fb151e6f8bf75213da) - **fix:** update parameter name to match docs _(by Athan Reines)_
-   [`69e0a71`](https://github.com/stdlib-js/stdlib/commit/69e0a718dd5b79eae03864b276b635754396d9a0) - **fix:** update parameter name to match docs _(by Athan Reines)_
-   [`836b37c`](https://github.com/stdlib-js/stdlib/commit/836b37cf688bfa381fcb3cb3a2dd327f0a94ad19) - **bench:** fix branch check _(by Athan Reines)_
-   [`b1c31b3`](https://github.com/stdlib-js/stdlib/commit/b1c31b32ccffd3dbdd7ebb29a8e0728c02784631) - **bench:** fix branch check _(by Athan Reines)_
-   [`9759a2c`](https://github.com/stdlib-js/stdlib/commit/9759a2c124154866e00bcba3c19647e45079ce56) - **feat:** add `broadcastArray` to namespace _(by Athan Reines)_
-   [`6d0da66`](https://github.com/stdlib-js/stdlib/commit/6d0da668d0d69bfe1a7fdceeceae05b52eada5c1) - **feat:** add `ndarray/broadcast-array` _(by Athan Reines)_
-   [`474e7e4`](https://github.com/stdlib-js/stdlib/commit/474e7e4fb2a15bfc8e9e719692b94044d25a7365) - **feat:** add `nditer2arrayEach` to namespace _(by Athan Reines)_
-   [`19af262`](https://github.com/stdlib-js/stdlib/commit/19af262e0319ea748c0300abfb363fb4561571a6) - **feat:** add `ndarray/iter/to-array-each` _(by Athan Reines)_
-   [`f53e8ef`](https://github.com/stdlib-js/stdlib/commit/f53e8ef9359ccc083045bd01b3c8929c4d138900) - **docs:** add links _(by Athan Reines)_
-   [`d8f8bb2`](https://github.com/stdlib-js/stdlib/commit/d8f8bb2738494c148a9f297dfcf2d6d57e787c66) - **docs:** add links _(by Athan Reines)_
-   [`253a22d`](https://github.com/stdlib-js/stdlib/commit/253a22d97052f4e3cfd1ad02f18b557954a6d7d6) - **docs:** fix imports _(by Athan Reines)_
-   [`f7149ad`](https://github.com/stdlib-js/stdlib/commit/f7149adfb43b24909d710e92ece0bc8f6c4ab2e2) - **docs:** fix imports _(by Athan Reines)_
-   [`9c23309`](https://github.com/stdlib-js/stdlib/commit/9c233099b1cb3304b0158a52e103b01b262fb683) - **feat:** add `nditerColumns` to namespace _(by Athan Reines)_
-   [`8aec891`](https://github.com/stdlib-js/stdlib/commit/8aec8914b2435090b1b466bcdd5820b158da94ef) - **feat:** add `ndarray/iter/columns` _(by Athan Reines)_
-   [`c8bfb98`](https://github.com/stdlib-js/stdlib/commit/c8bfb987426f830b64815fe0785be1b41f00720b) - **docs:** update ToC pattern _(by Athan Reines)_
-   [`fdebad4`](https://github.com/stdlib-js/stdlib/commit/fdebad409c163e0358421db3705d37768c8bca32) - **feat:** add `iter` to namespace _(by Athan Reines)_
-   [`43b42fe`](https://github.com/stdlib-js/stdlib/commit/43b42fe596c9b01fb19d3dd710ef71dfdc738510) - **feat:** add `ndarray/iter` namespace _(by Athan Reines)_
-   [`fda2bf6`](https://github.com/stdlib-js/stdlib/commit/fda2bf6c22937a44b2e17949b437d5bbec08708c) - **feat:** add `ndarray/iter/rows` _(by Athan Reines)_
-   [`657a07f`](https://github.com/stdlib-js/stdlib/commit/657a07f32040037dbc2d10d9429e1f8496895f46) - **docs:** update comment _(by Athan Reines)_
-   [`3aa8ff7`](https://github.com/stdlib-js/stdlib/commit/3aa8ff7bab4bc2837509e30f494de310c2e7f676) - **docs:** add notes concerning applicability of `writable` parameter _(by Athan Reines)_
-   [`0e5e49b`](https://github.com/stdlib-js/stdlib/commit/0e5e49bbbf3f9d9e206e19372425c5a1bd3a6a9f) - **refactor:** rename parameter from `mutable` to `writable` _(by Athan Reines)_
-   [`c99d7ea`](https://github.com/stdlib-js/stdlib/commit/c99d7ea8e1e871c6d2d01018d9a5d2fd9bca6b83) - **docs:** add notes concerning handling of read-only output arrays _(by Athan Reines)_
-   [`8fabec9`](https://github.com/stdlib-js/stdlib/commit/8fabec9ee825644e00b6088d1684ca6bef752a8a) - **fix:** add missing check for an output array which is read-only _(by Athan Reines)_
-   [`882f4e1`](https://github.com/stdlib-js/stdlib/commit/882f4e16d33cd7ab3a4dc900374df631aeec6cf8) - **docs:** fix undefined variable in example _(by Athan Reines)_
-   [`6d9677a`](https://github.com/stdlib-js/stdlib/commit/6d9677a1d879fd369ad1145d43b3334659c5d10f) - **feat:** add `ndsliceAssign` to namespace _(by Athan Reines)_
-   [`389bd3f`](https://github.com/stdlib-js/stdlib/commit/389bd3f2007941c6774cfdc95efc082105afc31e) - **docs:** fix heading _(by Athan Reines)_
-   [`d73d723`](https://github.com/stdlib-js/stdlib/commit/d73d72364028ed44ed35409292c3357399750db8) - **feat:** add `ndarray/slice-assign` _(by Athan Reines)_
-   [`fc66ad8`](https://github.com/stdlib-js/stdlib/commit/fc66ad870122e33f24f390ecd682283e2aba076a) - **docs:** fix import identifier _(by Athan Reines)_
-   [`212c1fa`](https://github.com/stdlib-js/stdlib/commit/212c1fa13fd177b87d0ddfa4e70d411e587d5560) - **feat:** add `sliceAssign` to namespace _(by Athan Reines)_
-   [`599e2ca`](https://github.com/stdlib-js/stdlib/commit/599e2ca8b21323e11e9614202a39ad377cc95ceb) - **docs:** rename examples and add slice assignment example _(by Athan Reines)_
-   [`54858d0`](https://github.com/stdlib-js/stdlib/commit/54858d0033107586ec0b0b823019e75548664bd4) - **feat:** add support for slice assignment and refactor index expression handling _(by Athan Reines)_
-   [`e348e20`](https://github.com/stdlib-js/stdlib/commit/e348e203c4da3c570cea0924b4eb0320999adbc7) - **test:** add casting tests _(by Athan Reines)_
-   [`152ee45`](https://github.com/stdlib-js/stdlib/commit/152ee451e095a2cd2fc94a34331e14c83a3d98e5) - **test:** add broadcasting tests _(by Athan Reines)_
-   [`c90e739`](https://github.com/stdlib-js/stdlib/commit/c90e7393fb2abf6d563581c2e47e8fe707b4cc33) - **feat:** add `ndarray/base/slice-assign` _(by Athan Reines)_
-   [`8d7dfdc`](https://github.com/stdlib-js/stdlib/commit/8d7dfdc706aea0628b8d8fce181fae12bcb049c2) - **fix:** add missing argument _(by Athan Reines)_
-   [`48cb9aa`](https://github.com/stdlib-js/stdlib/commit/48cb9aabdfbeb58af82ad69ebf0754e2802797fd) - **feat:** add support for returning a mutable ndarray view _(by Athan Reines)_
-   [`09b4354`](https://github.com/stdlib-js/stdlib/commit/09b435430b5f5a1809e409d8b64bd3974fc56ccb) - **fix:** rename parameter to match docs _(by Athan Reines)_
-   [`1393caf`](https://github.com/stdlib-js/stdlib/commit/1393caf7604f449cb906428b1c9ea07a13ad482b) - **test:** add ndarray tests _(by Athan Reines)_
-   [`d81786b`](https://github.com/stdlib-js/stdlib/commit/d81786be3cf34d964bfe45ba25704228af41c56a) - **docs:** add link _(by Athan Reines)_
-   [`3574c0a`](https://github.com/stdlib-js/stdlib/commit/3574c0afcb1eb663462ecf5d220a4ede191b96bc) - **docs:** add links _(by Athan Reines)_
-   [`e11b048`](https://github.com/stdlib-js/stdlib/commit/e11b04813691e71b939decf1e053f0669ead8058) - **docs:** rename argument to avoid conflict with function name _(by Athan Reines)_
-   [`c3ff11f`](https://github.com/stdlib-js/stdlib/commit/c3ff11f96e30d608107ed1c7034792b40adc4ca0) - **feat:** add `FancyArray` to namespace _(by Athan Reines)_
-   [`c26a733`](https://github.com/stdlib-js/stdlib/commit/c26a7337fcc5c1d1c50d492d6ea362d7bc360810) - **feat:** add `ndslice` to namespace _(by Athan Reines)_
-   [`2910f80`](https://github.com/stdlib-js/stdlib/commit/2910f803215131c7ba9c9e1eb71875a6305cd402) - **fix:** address broken benchmarks for out-of-bounds slices _(by Athan Reines)_
-   [`1603774`](https://github.com/stdlib-js/stdlib/commit/16037740c1f22f0b69b011e44f8ff7f9744de5d2) - **test:** add test for when providing insufficient slice arguments _(by Athan Reines)_
-   [`b754d5a`](https://github.com/stdlib-js/stdlib/commit/b754d5a428b28386d3ab32506b963e945acd2941) - **style:** disable lint rule _(by Athan Reines)_
-   [`228e4d0`](https://github.com/stdlib-js/stdlib/commit/228e4d076c6205156ae8ba21f873747d52b4b869) - **test:** add tests for different invocation conventions _(by Athan Reines)_
-   [`52ac3f5`](https://github.com/stdlib-js/stdlib/commit/52ac3f5b730023b632fee0589b83cef2cd038d5b) - **docs:** add note concerning matching dimensionality _(by Athan Reines)_
-   [`eae0905`](https://github.com/stdlib-js/stdlib/commit/eae09050d3e8bcf751636d469b997d54db1fac9c) - **fix:** ensure support for slicing zero-dimensional arrays _(by Athan Reines)_
-   [`afda5bd`](https://github.com/stdlib-js/stdlib/commit/afda5bdedf10cc899794385201b356cf45e90334) - **feat:** add `ndarray/slice` _(by Athan Reines)_
-   [`70088a4`](https://github.com/stdlib-js/stdlib/commit/70088a43e057dc3227ecd7180491e165ffd31c51) - **style:** remove extra blank line _(by Athan Reines)_
-   [`976d69a`](https://github.com/stdlib-js/stdlib/commit/976d69a7c27bad4d43cfaf8bdd0d2838363a6d91) - **test:** add tests _(by Athan Reines)_
-   [`2321699`](https://github.com/stdlib-js/stdlib/commit/23216991ba4e9a1d853790581f2108b7fd4318d9) - **test:** add tests _(by Athan Reines)_
-   [`05d7722`](https://github.com/stdlib-js/stdlib/commit/05d7722b6b9941eae7571fc7b8b4dd1c16e3d182) - **test:** add tests _(by Athan Reines)_
-   [`aaaf01e`](https://github.com/stdlib-js/stdlib/commit/aaaf01e43bfef9b8b3c2c9d3f703b3e95e0524b9) - **fix:** use correct format specifier in error message _(by Athan Reines)_
-   [`b9b3ae6`](https://github.com/stdlib-js/stdlib/commit/b9b3ae6452615df30231366ce5cdc8ea9cdbdb5d) - **docs:** add example _(by Athan Reines)_
-   [`c636c08`](https://github.com/stdlib-js/stdlib/commit/c636c084bae9899fff1e667f00ecf9a71dd61175) - **fix:** address bug when resolving buffer index of the first element indexed by a slice _(by Athan Reines)_
-   [`987a311`](https://github.com/stdlib-js/stdlib/commit/987a311a1242d4db19d57be1c9e01b6dc5ba813a) - **test:** add tests _(by Athan Reines)_
-   [`fcbe4c1`](https://github.com/stdlib-js/stdlib/commit/fcbe4c18fd4ebfad0466b56b4c19abda6cdb4c2b) - **fix:** address indexing expression errors and refactor to use `ndarray/base/slice` _(by Athan Reines)_
-   [`15373b4`](https://github.com/stdlib-js/stdlib/commit/15373b4bc5df65314a0fffe20184429f7ad29616) - **feat:** add `slice` to namespace _(by Athan Reines)_
-   [`37ddf6d`](https://github.com/stdlib-js/stdlib/commit/37ddf6d4d84a64c83743a3e18863ad5ea8fd0d6f) - **feat:** add `ndarray/base/slice` _(by Athan Reines)_
-   [`f5f669f`](https://github.com/stdlib-js/stdlib/commit/f5f669fe49db4cb57103fb1c5f4ba2532bf9011b) - **refactor:** use base utility to construct MultiSlice from args array _(by Athan Reines)_
-   [`e17e199`](https://github.com/stdlib-js/stdlib/commit/e17e1999c8d3f29a7b9fe509ce3fb05db05aaf39) - **fix:** address dimension reduction bug _(by Athan Reines)_
-   [`cadd340`](https://github.com/stdlib-js/stdlib/commit/cadd340383dab4e71f41789eb629844fd83b05d6) - **refactor:** use base package for resolving non-reduced dimensions _(by Athan Reines)_
-   [`4f2310d`](https://github.com/stdlib-js/stdlib/commit/4f2310de3494fe36f4b74db309593f63e9d24dcc) - **docs:** update namespace table of contents  [(#1102)](https://github.com/stdlib-js/stdlib/pull/1102 ) _(by stdlib-bot)_
-   [`d358245`](https://github.com/stdlib-js/stdlib/commit/d358245c921277b5069a5baa037582adf22d22f7) - **docs:** fix require paths in README _(by Athan Reines)_
-   [`f4024f0`](https://github.com/stdlib-js/stdlib/commit/f4024f0d2c13cb5c74917228231ae9f6a9793a50) - **docs:** fix rule location _(by Athan Reines)_
-   [`6d60c74`](https://github.com/stdlib-js/stdlib/commit/6d60c74f1eb464d2d3875943c75a1c4b04239984) - **docs:** add horizontal rule _(by Athan Reines)_
-   [`5b30bc7`](https://github.com/stdlib-js/stdlib/commit/5b30bc7bfcd4f52f58e127767d4b74b9248e5e17) - **docs:** fix example _(by Athan Reines)_
-   [`d64f3c7`](https://github.com/stdlib-js/stdlib/commit/d64f3c7831c6490eae291c9de253dfc763052fbb) - **feat:** add TypeScript declarations and add REPL help _(by Athan Reines)_
-   [`fb65dfe`](https://github.com/stdlib-js/stdlib/commit/fb65dfe5b36b35ad8b3747df6ddb693a5b62d171) - **fix:** use `Collection`, rather than `ArrayLike` _(by Athan Reines)_
-   [`eb620f1`](https://github.com/stdlib-js/stdlib/commit/eb620f17546a817ffafaec22ff2a3a87994adad9) - **style:** disable lint rule _(by Athan Reines)_
-   [`87c2569`](https://github.com/stdlib-js/stdlib/commit/87c2569eabbb8a173c4f03fcc75cea7a2aebe8cb) - **test:** add constructor and argument validation tests _(by Athan Reines)_
-   [`f1d9cee`](https://github.com/stdlib-js/stdlib/commit/f1d9cee38667941f3483bcce57366e4cfa6e6ac7) - **docs:** fix heading _(by Athan Reines)_
-   [`4433c86`](https://github.com/stdlib-js/stdlib/commit/4433c8677f64ffe451f267484367d3d9f27e32f5) - **feat:** add `ndarray/fancy` _(by Athan Reines)_
-   [`6039604`](https://github.com/stdlib-js/stdlib/commit/60396048a2220ecc9ebd2d29b9fb4e4b69dfe4ab) - **bench:** refactor benchmarks by splitting across multiple files _(by Athan Reines)_
-   [`9b8ad73`](https://github.com/stdlib-js/stdlib/commit/9b8ad73643ef01a8382e65c668b6a39c01be06a1) - **feat:** convert declaration to generic to provide additional type information _(by Athan Reines)_
-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`0deb1be`](https://github.com/stdlib-js/stdlib/commit/0deb1be1f1efe2cc98bd944ab1c50cc885cf523b) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - **fix:** update import paths for complex type defs _(by Athan Reines)_
-   [`b4dbeae`](https://github.com/stdlib-js/stdlib/commit/b4dbeaebb752c2494a156cd6f92d7055bea024ec) - **fix:** set correct package names _(by Philipp Burckhardt)_
-   [`ab5d324`](https://github.com/stdlib-js/stdlib/commit/ab5d324b547870938b21ebdeecc1f7fda132f321) - **chore:** resolve lint errors _(by Philipp Burckhardt)_
-   [`55866ea`](https://github.com/stdlib-js/stdlib/commit/55866ea8ef1282528b839fd9ce9c43c6a80056f8) - **test:** use strictEqual checks _(by Philipp Burckhardt)_
-   [`45a6884`](https://github.com/stdlib-js/stdlib/commit/45a688482b5b21da325ac425ff14899405d47df1) - **refactor:** use `array/base/flatten` to avoid implicit use of `utils/copy` _(by Athan Reines)_
-   [`2ef370c`](https://github.com/stdlib-js/stdlib/commit/2ef370c299de57a389c57f1815824b05665c9ece) - **fix:** add missing test fixture [(#1054)](https://github.com/stdlib-js/stdlib/pull/1054) _(by Dan Rose)_
-   [`015ff99`](https://github.com/stdlib-js/stdlib/commit/015ff99285585b1a9267a8ad3f8c856e64742dfd) - **feat:** increase minimum TypeScript version _(by Athan Reines)_
-   [`23b99ac`](https://github.com/stdlib-js/stdlib/commit/23b99acc256b4c9034347ed42ba21f202caedda8) - **fix:** resolve C lint errors _(by Athan Reines)_
-   [`28e1c84`](https://github.com/stdlib-js/stdlib/commit/28e1c84390d88044883c9ef940a12f38d66ea3ef) - **docs:** resolve C lint errors _(by Athan Reines)_
-   [`a36b160`](https://github.com/stdlib-js/stdlib/commit/a36b160369dcac098c064e78245e4437008885d2) - **docs:** update namespace table of contents [(#995)](https://github.com/stdlib-js/stdlib/pull/995) _(by stdlib-bot, Athan Reines)_
-   [`adc0378`](https://github.com/stdlib-js/stdlib/commit/adc037897e98e120616fcbb0d854ff8b24445b6d) - **docs:** update namespace TypeScript declarations [(#993)](https://github.com/stdlib-js/stdlib/pull/993) _(by stdlib-bot, Athan Reines)_
-   [`98c37fa`](https://github.com/stdlib-js/stdlib/commit/98c37fa381ef03c24703d76a5b0be4f95727243c) - **feat:** add `unaryOutputDataType` to namespace _(by Athan Reines)_
-   [`eec20f6`](https://github.com/stdlib-js/stdlib/commit/eec20f6aba797b451addbf452384c2c4f2ff1add) - **feat:** add `ndarray/base/unary-output-dtype` _(by Athan Reines)_
-   [`2e884c5`](https://github.com/stdlib-js/stdlib/commit/2e884c5c86b0c66990c0aca78f1c0c8eadd18620) - **remove:** remove `ndarray/base/assert/is-integral-data-type` _(by Athan Reines)_
-   [`40af3d0`](https://github.com/stdlib-js/stdlib/commit/40af3d0d70ffdbbf65d863a2d0f6061c9d98f406) - **test:** use `integer` rather than `integral` _(by Athan Reines)_
-   [`1e78f7b`](https://github.com/stdlib-js/stdlib/commit/1e78f7b05c30245bd7ae22991ee021ae38a90a53) - **feat:** rename `isIntegralDataType` to `isIntegerDataType` _(by Athan Reines)_
-   [`d45a05b`](https://github.com/stdlib-js/stdlib/commit/d45a05b03973bf5b6a5e97cb4bc8c0aba3a68a12) - **feat:** rename `integral` to `integer` _(by Athan Reines)_
-   [`d96fdc9`](https://github.com/stdlib-js/stdlib/commit/d96fdc905898b96fffcc8ab210ad4b4d6c700565) - **feat:** add `ndarray/base/assert/is-integer-data-type` _(by Athan Reines)_
-   [`8707511`](https://github.com/stdlib-js/stdlib/commit/87075115748ada8a4b6872c78c7196d9b6a934fd) - **test:** update list of test values _(by Athan Reines)_
-   [`3d64252`](https://github.com/stdlib-js/stdlib/commit/3d64252e8c076e22298c987fc7237fcaae81023d) - **feat:** add `default` policy _(by Athan Reines)_
-   [`86d02e2`](https://github.com/stdlib-js/stdlib/commit/86d02e26cd8dd87d061ec308a03fb21a54065a0e) - **test:** add comments to explain test value distinction _(by Athan Reines)_
-   [`d0eb2cf`](https://github.com/stdlib-js/stdlib/commit/d0eb2cf2a86e9c9002b3b78218297f3aa57a5ff5) - **feat:** add `isRealDataType` to namespace _(by Athan Reines)_
-   [`889da69`](https://github.com/stdlib-js/stdlib/commit/889da694559f4b0da7670277001dc2414e55edd9) - **feat:** add `ndarray/base/assert/is-real-data-type` _(by Athan Reines)_
-   [`f4e6d5e`](https://github.com/stdlib-js/stdlib/commit/f4e6d5e67845c36dfa62db34eb7bc5e7e707c381) - **test:** update list of policies and add link _(by Athan Reines)_
-   [`59c61bc`](https://github.com/stdlib-js/stdlib/commit/59c61bc90a3ad633d0eda9d6d2acc32d532c940a) - **test:** update list of policies and add link _(by Athan Reines)_
-   [`330207b`](https://github.com/stdlib-js/stdlib/commit/330207b291744c37c851c00bbf934d4ef1957c75) - **test:** update list of policies and add link _(by Athan Reines)_
-   [`1ada629`](https://github.com/stdlib-js/stdlib/commit/1ada629c4201c8190c510cbad971fd57c5045db3) - **test:** update list of policies and add link _(by Athan Reines)_
-   [`1127626`](https://github.com/stdlib-js/stdlib/commit/11276264fde9fc31a2143a1f64db050046bb6085) - **feat:** add `real` policy _(by Athan Reines)_
-   [`bd1017d`](https://github.com/stdlib-js/stdlib/commit/bd1017ddb8dd6fe552675221570186440cdbb4f5) - **feat:** add `numeric` and `real` dtype defaults _(by Athan Reines)_
-   [`03effb2`](https://github.com/stdlib-js/stdlib/commit/03effb27ed971c369883a650dd3f8d079a2acab1) - **feat:** add `real` data type kind _(by Athan Reines)_
-   [`223c329`](https://github.com/stdlib-js/stdlib/commit/223c329d01984ab016fe228c95353709cc6961b2) - **refactor:** use ndarray defaults _(by Athan Reines)_
-   [`9250c59`](https://github.com/stdlib-js/stdlib/commit/9250c59f0791be3281a437b777ca4dcf2ddbc96c) - **refactor:** use ndarray defaults _(by Athan Reines)_
-   [`9dbf98e`](https://github.com/stdlib-js/stdlib/commit/9dbf98ecffc9e72508b2db6d5f4af574a48033be) - **refactor:** use ndarray defaults _(by Athan Reines)_
-   [`d04286d`](https://github.com/stdlib-js/stdlib/commit/d04286dbb94df5a5daf62e008006285b7e84efa5) - **refactor:** use ndarray defaults _(by Athan Reines)_
-   [`568f63f`](https://github.com/stdlib-js/stdlib/commit/568f63f8c107f330a9ee9f6754b01d97d9642c8a) - **refactor:** use ndarray defaults _(by Athan Reines)_
-   [`901dc93`](https://github.com/stdlib-js/stdlib/commit/901dc93c3954e048073b711818553f2a065476f1) - **feat:** add `isNumericDataType` to namespace _(by Athan Reines)_
-   [`c326c3f`](https://github.com/stdlib-js/stdlib/commit/c326c3fe89ba54c362395aa53e442ec70a2ad69d) - **feat:** add `ndarray/base/assert/is-numeric-data-type` _(by Athan Reines)_
-   [`d3d2708`](https://github.com/stdlib-js/stdlib/commit/d3d2708eb6919b2eace1fb6f0fa06afac138f117) - **feat:** add `isComplexFloatingPointDataType` to namespace _(by Athan Reines)_
-   [`7b0d1b0`](https://github.com/stdlib-js/stdlib/commit/7b0d1b09616c4d92e0733564ef3c8b420a9ddb4f) - **feat:** add `ndarray/base/assert/is-complex-floating-point-data-type` _(by Athan Reines)_
-   [`088f3e9`](https://github.com/stdlib-js/stdlib/commit/088f3e9fea4a7090b1c1c09765d264acc832094b) - **feat:** add `isRealFloatingPointDataType` to namespace _(by Athan Reines)_
-   [`41d3972`](https://github.com/stdlib-js/stdlib/commit/41d3972e82c51bdd6522708d9446fce378e30c8a) - **feat:** add `ndarray/base/assert/is-real-floating-point-data-type` _(by Athan Reines)_
-   [`b4e24c3`](https://github.com/stdlib-js/stdlib/commit/b4e24c345f1bbff346cd95286bc55cbcbaa6f2c9) - **docs:** fix description _(by Athan Reines)_
-   [`61a6fee`](https://github.com/stdlib-js/stdlib/commit/61a6feec47761cf559d455264a6908a1f4ac545e) - **feat:** add `isFloatingPointDataType` to namespace _(by Athan Reines)_
-   [`31ad686`](https://github.com/stdlib-js/stdlib/commit/31ad686cf56d70e9cd1d24043330eb3f4a688684) - **feat:** add `ndarray/base/assert/is-floating-point-data-type` _(by Athan Reines)_
-   [`f1b2025`](https://github.com/stdlib-js/stdlib/commit/f1b20259563e3e94ef269e3c98cec028af4e87ae) - **feat:** add `isIntegralDataType` to namespace _(by Athan Reines)_
-   [`e2f9bb3`](https://github.com/stdlib-js/stdlib/commit/e2f9bb3c9d922cddeb3bbdac52744c46f4fa6186) - **feat:** add `ndarray/base/assert/is-integral-data-type` _(by Athan Reines)_
-   [`74d366e`](https://github.com/stdlib-js/stdlib/commit/74d366e11957a3016839fa6836a021f49e2d4337) - **feat:** add `isUnsignedIntegerDataType` to namespace _(by Athan Reines)_
-   [`f2fd134`](https://github.com/stdlib-js/stdlib/commit/f2fd1344eee163ede1839e2be9a537be2d4ec240) - **feat:** add `ndarray/base/assert/is-unsigned-integer-data-type` _(by Athan Reines)_
-   [`35dc02a`](https://github.com/stdlib-js/stdlib/commit/35dc02a0c40af961cfe20e14e4ceddaa4012bc4d) - **feat:** add `isSignedIntegerDataType` to namespace _(by Athan Reines)_
-   [`063b647`](https://github.com/stdlib-js/stdlib/commit/063b6475df8c93d7b199e77b28325928e960e18b) - **feat:** add `ndarray/base/assert/is-signed-integer-data-type` _(by Athan Reines)_
-   [`8fa429a`](https://github.com/stdlib-js/stdlib/commit/8fa429ae2ad40fcf40be3c65c7f8fe4af0bf5ca3) - **refactor:** use array utility to perform iteration _(by Athan Reines)_
-   [`99146bb`](https://github.com/stdlib-js/stdlib/commit/99146bb9777c1c042d95f68494c9fb4f9377e651) - **feat:** add support for returning a subset of data types _(by Athan Reines)_
-   [`9363dc3`](https://github.com/stdlib-js/stdlib/commit/9363dc3376fcb9ba18d181716fae8fbb731771bd) - **feat:** add `get` method for retrieving a single default setting _(by Athan Reines)_
-   [`3556d4e`](https://github.com/stdlib-js/stdlib/commit/3556d4e588a0840c788c02b357a7b8d87e575f78) - **feat:** add `defaults` to namespace _(by Athan Reines)_
-   [`35de20d`](https://github.com/stdlib-js/stdlib/commit/35de20d9359f2497eb0527c7cd99778dd7bff038) - **feat:** add `ndarray/defaults` _(by Athan Reines)_
-   [`6ca0ecb`](https://github.com/stdlib-js/stdlib/commit/6ca0ecb07f89d0ff6041ac2d2cb4a91cdad0059d) - **feat:** add policy APIs to namespace _(by Athan Reines)_
-   [`c0d63fe`](https://github.com/stdlib-js/stdlib/commit/c0d63fe91fe1de62e13334ade3bb157aa3ccdb4a) - **feat:** add `ndarray/base/output-policy-resolve-enum` _(by Athan Reines)_
-   [`375a3e8`](https://github.com/stdlib-js/stdlib/commit/375a3e851b300eb1b936520f43e6d303c253ba26) - **feat:** add `ndarray/base/output-policy-resolve-str` _(by Athan Reines)_
-   [`144d739`](https://github.com/stdlib-js/stdlib/commit/144d7393381f2430219962e39287792bf69374b8) - **feat:** add `ndarray/base/output-policy-enum2str` _(by Athan Reines)_
-   [`66e4d33`](https://github.com/stdlib-js/stdlib/commit/66e4d331999220774c45c093900470e88fb6953a) - **feat:** add `ndarray/base/output-policy-str2enum` _(by Athan Reines)_
-   [`fe527ef`](https://github.com/stdlib-js/stdlib/commit/fe527ef22a44592d7eaa0adbded47730248eaa74) - **fix:** fix require path _(by Athan Reines)_
-   [`a3a7a45`](https://github.com/stdlib-js/stdlib/commit/a3a7a4579edeb83503df22604e0ee47b60184ad3) - **feat:** add `ndarrayOutputDataTypePolicies` to namespace _(by Athan Reines)_
-   [`5954cd5`](https://github.com/stdlib-js/stdlib/commit/5954cd5b913c6d3b2d05c0bb07b607c885d6e5af) - **feat:** add `ndarray/output-dtype-policies` _(by Athan Reines)_
-   [`00b4630`](https://github.com/stdlib-js/stdlib/commit/00b46302fa85b4a133c2b93d13ac4cedd427bc11) - **feat:** add `emptyLike` to namespace _(by Athan Reines)_
-   [`9f1c2f3`](https://github.com/stdlib-js/stdlib/commit/9f1c2f30fd1fc23c8159c2d8df5df0f14b679ce8) - **feat:** add `ndarray/base/empty-like` _(by Athan Reines)_
-   [`aeca0a6`](https://github.com/stdlib-js/stdlib/commit/aeca0a63fed9aaff133ad6b93e10c7cdadc6c5cd) - **docs:** update note _(by Athan Reines)_
-   [`33e76ef`](https://github.com/stdlib-js/stdlib/commit/33e76efad5564bbd2455f492c34b04a4fbfc8988) - **feat:** add `empty` to namespace _(by Athan Reines)_
-   [`c593502`](https://github.com/stdlib-js/stdlib/commit/c593502093613634a80bdb6c6806b8d2477d17d4) - **feat:** add `ndarray/base/empty` _(by Athan Reines)_
-   [`3da30d7`](https://github.com/stdlib-js/stdlib/commit/3da30d74baf9e5ee13c299cf33a767fd071f1694) - **feat:** add `ndemptyLike` to namespace _(by Athan Reines)_
-   [`561a9ea`](https://github.com/stdlib-js/stdlib/commit/561a9ea36c1300678da980b4740f78d71a49c0ba) - **feat:** add `ndarray/empty-like` _(by Athan Reines)_
-   [`9fac15c`](https://github.com/stdlib-js/stdlib/commit/9fac15ccfdf4b3b1b5b92442e56b077c6b69fa42) - **docs:** remove unsupport option _(by Athan Reines)_
-   [`99d42a5`](https://github.com/stdlib-js/stdlib/commit/99d42a595b0466f36293718bd7be43bf01edc5ed) - **test:** add `binary` dtype tests _(by Athan Reines)_
-   [`06712ce`](https://github.com/stdlib-js/stdlib/commit/06712ce614899b7bf573e6323532a48a452526fe) - **fix:** fix package name and keywords _(by Athan Reines)_
-   [`8306cb9`](https://github.com/stdlib-js/stdlib/commit/8306cb9fedf86eb1d090149e4beed3d23fdee4b0) - **feat:** add `ndempty` to namespace _(by Athan Reines)_
-   [`910fed5`](https://github.com/stdlib-js/stdlib/commit/910fed5f346f7d5ac2d94a41e50c9eff2219518e) - **feat:** add `ndarray/empty` _(by Athan Reines)_
-   [`e618407`](https://github.com/stdlib-js/stdlib/commit/e618407f673288e8aa303b5db6bd316c6f130762) - **feat:** add support for additional ndarray constructor options _(by Athan Reines)_
-   [`7d8e9d6`](https://github.com/stdlib-js/stdlib/commit/7d8e9d6d338ec41ec789713799cda27a0d4a9c1d) - **test:** add option validation tests and document options _(by Athan Reines)_
-   [`78cb6e3`](https://github.com/stdlib-js/stdlib/commit/78cb6e35c41caff418a7dde7759a311dd35bb407) - **feat:** add support for additional ndarray constructor options _(by Athan Reines)_
-   [`e6f07c9`](https://github.com/stdlib-js/stdlib/commit/e6f07c9d9f62d9928698f74ce892955ebc78b741) - **bench:** fix options argument _(by Athan Reines)_
-   [`f07f1ce`](https://github.com/stdlib-js/stdlib/commit/f07f1cedbfa64e81f21fcea8bb4e7ccbc67bde35) - **feat:** add ndarray option support to `ndarray/from-scalar` _(by Athan Reines)_
-   [`171fc57`](https://github.com/stdlib-js/stdlib/commit/171fc571b800ceb803d7d925cd871fc9bbcd7e8c) - **feat:** add support for providing `order` argument _(by Athan Reines)_
-   [`dace169`](https://github.com/stdlib-js/stdlib/commit/dace169a8a53022f0ffcabf4084f61a7f0f49a8f) - **docs:** update namespace table of contents [(#986)](https://github.com/stdlib-js/stdlib/pull/986) _(by stdlib-bot, Athan Reines)_
-   [`e34d9a0`](https://github.com/stdlib-js/stdlib/commit/e34d9a09e864d8f25460974f6e3e4eb3b03ea6a2) - **docs:** update namespace TypeScript declarations [(#984)](https://github.com/stdlib-js/stdlib/pull/984) _(by stdlib-bot, Athan Reines)_
-   [`54cafbf`](https://github.com/stdlib-js/stdlib/commit/54cafbf8e5253b2be8816446a7b850cc6a8ada30) - **docs:** add notes _(by Athan Reines)_
-   [`3c02553`](https://github.com/stdlib-js/stdlib/commit/3c025537f1151a7aa31eaea2be86e994628907f3) - **docs:** fix description _(by Athan Reines)_
-   [`0661629`](https://github.com/stdlib-js/stdlib/commit/06616293c16e65f85a2b9b72fc9e036e20cff6ab) - **feat:** add `broadcastScalar` to namespace _(by Athan Reines)_
-   [`4df8427`](https://github.com/stdlib-js/stdlib/commit/4df84275bcd530d638f053f25f2f4f7dcd27ee98) - **docs:** fix example _(by Athan Reines)_
-   [`efe7c22`](https://github.com/stdlib-js/stdlib/commit/efe7c226d5fb5ac7fb0c36dec4b5925d4484ee43) - **feat:** add `ndarray/base/broadcast-scalar` _(by Athan Reines)_
-   [`5fda197`](https://github.com/stdlib-js/stdlib/commit/5fda19741c7bb19742c34670494d8d7c907d65b0) - **docs:** update namespace TypeScript declarations [(#977)](https://github.com/stdlib-js/stdlib/pull/977) _(by stdlib-bot, Athan Reines)_
-   [`a3c864c`](https://github.com/stdlib-js/stdlib/commit/a3c864ce071479e85bd3334fffe3ece53cea075e) - **docs:** update namespace table of contents [(#975)](https://github.com/stdlib-js/stdlib/pull/975) _(by stdlib-bot, Athan Reines)_
-   [`1c450ba`](https://github.com/stdlib-js/stdlib/commit/1c450ba6f265f5160dd66a0638efcc8899fc119a) - **feat:** add `ndarray2array` to namespace _(by Athan Reines)_
-   [`cf7c497`](https://github.com/stdlib-js/stdlib/commit/cf7c4978afd11bd988e8bb9cd2d138df357997e2) - **feat:** add `ndarray/to-array` _(by Athan Reines)_
-   [`bfaff0d`](https://github.com/stdlib-js/stdlib/commit/bfaff0d60a7cbc3f0f067d479d68ebd634fb9a5c) - **docs:** fix grammar in comments _(by Athan Reines)_
-   [`3b85626`](https://github.com/stdlib-js/stdlib/commit/3b85626ca3e81438fa113ee94f78fa2603127702) - **docs:** update namespace table of contents [(#966)](https://github.com/stdlib-js/stdlib/pull/966) _(by stdlib-bot, Athan Reines)_
-   [`8953419`](https://github.com/stdlib-js/stdlib/commit/89534192da77bc7d8765012acb6199fab49c50d2) - **docs:** fix comments _(by Athan Reines)_
-   [`48f86bd`](https://github.com/stdlib-js/stdlib/commit/48f86bd9e771b715c09a409573b96e8c3c9bf511) - **docs:** update comment _(by Athan Reines)_
-   [`eabd48c`](https://github.com/stdlib-js/stdlib/commit/eabd48caae18191fd18d6661a1d1e9d3daaa8edc) - **docs:** fix comments _(by Athan Reines)_
-   [`9800cc4`](https://github.com/stdlib-js/stdlib/commit/9800cc4f8df8d96db8bac00b51ae1491fa579666) - **feat:** add `nullary` to namespace _(by Athan Reines)_
-   [`28c87ca`](https://github.com/stdlib-js/stdlib/commit/28c87ca422d9953a5d5ee583e904b24d66e59682) - **feat:** add `ndarray/base/nullary` _(by Athan Reines)_
-   [`f290865`](https://github.com/stdlib-js/stdlib/commit/f29086561a2be3125ceac5a4f98b81b30065bf67) - **style:** add missing space _(by Athan Reines)_
-   [`c503012`](https://github.com/stdlib-js/stdlib/commit/c50301205c0ef890c7c446a930faa922db444b97) - **style:** fix indentation _(by Athan Reines)_
-   [`7974538`](https://github.com/stdlib-js/stdlib/commit/79745389154e682f111d371a13870f54cabe6297) - **docs:** fix example requires _(by Athan Reines)_
-   [`9936867`](https://github.com/stdlib-js/stdlib/commit/99368675b7c86eb3c858cb578575bca34250b4c7) - **refactor:** add shebang to script _(by Athan Reines)_
-   [`1982cd2`](https://github.com/stdlib-js/stdlib/commit/1982cd225f5970145499c1746ce04e6f5b5fa064) - **docs:** fix variable name _(by Athan Reines)_
-   [`4e94bf0`](https://github.com/stdlib-js/stdlib/commit/4e94bf079c6677f10e5ea1f4eaca93dc52dac8f3) - **feat:** add `binaryLoopOrder` to namespace _(by Athan Reines)_
-   [`d151153`](https://github.com/stdlib-js/stdlib/commit/d151153ac4aced58a04e795607000b7138feb05d) - **feat:** add `ndarray/base/binary-loop-interchange-order` _(by Athan Reines)_
-   [`0ac8825`](https://github.com/stdlib-js/stdlib/commit/0ac88258a1b720982b47661c5ddeb5a932cf56d4) - **feat:** add `binaryBlockSize` to namespace _(by Athan Reines)_
-   [`2600d28`](https://github.com/stdlib-js/stdlib/commit/2600d28341fe75b74e3ab7c02779ee856d0d53ad) - **feat:** add `ndarray/base/binary-tiling-block-size` _(by Athan Reines)_
-   [`64a7e92`](https://github.com/stdlib-js/stdlib/commit/64a7e9272da47f0b0a7afd8a5f4d5be613cbfb8d) - **fix:** add missing variable declaration _(by Athan Reines)_
-   [`924b525`](https://github.com/stdlib-js/stdlib/commit/924b52594f4b21b42eb4fa3d40c6d36ea97f1723) - **docs:** fix typo _(by Athan Reines)_
-   [`80b8444`](https://github.com/stdlib-js/stdlib/commit/80b8444ae4991062d8961b2a020d24c2fe7a8a48) - **docs:** fix typo _(by Athan Reines)_
-   [`8078b8c`](https://github.com/stdlib-js/stdlib/commit/8078b8c58eedf23e46e5f9083053b6db52514641) - **docs:** fix typo _(by Athan Reines)_
-   [`5b98beb`](https://github.com/stdlib-js/stdlib/commit/5b98beb85e5468e604175c8140bef795a92686a3) - **docs:** update namespace table of contents [(#953)](https://github.com/stdlib-js/stdlib/pull/953) _(by stdlib-bot, Athan Reines)_
-   [`e8775fc`](https://github.com/stdlib-js/stdlib/commit/e8775fcbe3617b9013bd1cea74d7f70aa2669ab4) - **feat:** update namespace TypeScript declarations [(#951)](https://github.com/stdlib-js/stdlib/pull/951) _(by stdlib-bot, Athan Reines)_
-   [`6b7c54d`](https://github.com/stdlib-js/stdlib/commit/6b7c54dd2aa970a48a5f73d89c160c7ab6b6ba28) - **feat:** add `nullaryLoopOrder` to namespace _(by Athan Reines)_
-   [`45b2ba9`](https://github.com/stdlib-js/stdlib/commit/45b2ba9a82ac496a9c00c697839453cd2aef285a) - **feat:** add `@stdlib/ndarray/base/nullary-loop-interchange-order` _(by Athan Reines)_
-   [`99b2138`](https://github.com/stdlib-js/stdlib/commit/99b2138aa1168adc84815286ccb1dd8cdb8208f5) - **docs:** update description _(by Athan Reines)_
-   [`8df288a`](https://github.com/stdlib-js/stdlib/commit/8df288ad176e2b374f61112a37091b47462f0ec5) - **docs:** fix comment _(by Athan Reines)_
-   [`760a0a1`](https://github.com/stdlib-js/stdlib/commit/760a0a1aab281e0a1b043b526eac9592551cffb8) - **feat:** add `nullaryBlockSize` to namespace _(by Athan Reines)_
-   [`0ed2dc6`](https://github.com/stdlib-js/stdlib/commit/0ed2dc6083a20d0f90e653191778da2a9ddf9105) - **feat:** add `@stdlib/ndarray/base/nullary-tiling-block-size` _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.13">

## 0.0.13 (2021-08-22)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.12">

## 0.0.12 (2021-07-10)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.11">

## 0.0.11 (2021-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.10">

## 0.0.10 (2021-06-29)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.9">

## 0.0.9 (2021-06-27)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.8">

## 0.0.8 (2021-06-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.7">

## 0.0.7 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.6">

## 0.0.6 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.5">

## 0.0.5 (2021-06-13)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.4">

## 0.0.4 (2021-06-12)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.3">

## 0.0.3 (2021-06-12)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.2">

## 0.0.2 (2021-06-10)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2021-06-10)

No changes reported for this release.

</section>

<!-- /.release -->

