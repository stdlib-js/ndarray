# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2025-08-15)

<section class="features">

### Features

-   [`c42febe`](https://github.com/stdlib-js/stdlib/commit/c42febe4bb7062771a68d869eff02b40e3644f6d) - add `ndarray/base/binary-reduce-strided1d` [(#7813)](https://github.com/stdlib-js/stdlib/pull/7813)
-   [`51e49b8`](https://github.com/stdlib-js/stdlib/commit/51e49b83cdb5c0d37d9e64864d6319655518dc25) - add `zip2views1d` to namespace
-   [`36f3f0c`](https://github.com/stdlib-js/stdlib/commit/36f3f0cdf92b3a63c67c9ed79a2b9f15855d3800) - add `ndarray/base/zip2views1d`
-   [`724d6be`](https://github.com/stdlib-js/stdlib/commit/724d6be1abb00700577700905dd847f6ab98812d) - add `array2ndarray` to namespace
-   [`485fd08`](https://github.com/stdlib-js/stdlib/commit/485fd086608ee3b2457da777a8a9d6f0dcd28d94) - add `ndarray/base/from-array`
-   [`76ea5a8`](https://github.com/stdlib-js/stdlib/commit/76ea5a8e8d964f78aa953ae4822345d3c1e3a6ae) - add missing tests to `ndarray/base/includes` [(#7304)](https://github.com/stdlib-js/stdlib/pull/7304)
-   [`f7c56f9`](https://github.com/stdlib-js/stdlib/commit/f7c56f9f6bdc0a64518d7ed0def31c9a3753b206) - add support for `float16`, `complex32`, `int64`, and `uint64` dtypes
-   [`d979fb3`](https://github.com/stdlib-js/stdlib/commit/d979fb33794fae5c14e2bbc78a77387ab8a407cb) - add support for `float16`, `complex32`, `int64`, and `uint64` dtypes
-   [`6ccfa0f`](https://github.com/stdlib-js/stdlib/commit/6ccfa0fe61914f7812d55608d963affdb4500b2d) - add support for `float16`, `complex32`, `int64`, and `uint64` dtypes
-   [`64309b8`](https://github.com/stdlib-js/stdlib/commit/64309b8af78e2bb0e1841552024626d4f403a3ab) - add support for `float16`, `complex32`, `int64`, and `uint64` dtypes
-   [`aa50d4a`](https://github.com/stdlib-js/stdlib/commit/aa50d4a9df711679416201559c4a0513281b874e) - add 16-bit data types
-   [`787d8da`](https://github.com/stdlib-js/stdlib/commit/787d8da9caf55181afa9e7d198f7622660397b7d) - add half-precision data types
-   [`9a4ffa0`](https://github.com/stdlib-js/stdlib/commit/9a4ffa071ed1a891b0520088ff8e6b5815142f20) - add half-precision complex data type
-   [`6540f29`](https://github.com/stdlib-js/stdlib/commit/6540f29cc83ec1fb172986f87e14730b5973e94f) - add support for 16-bit data types
-   [`1390cf3`](https://github.com/stdlib-js/stdlib/commit/1390cf3c36b931394e470c7ba4950399b249c5f9) - add `isDataTypeString` to namespace
-   [`0ef0986`](https://github.com/stdlib-js/stdlib/commit/0ef098649fc4c4d64d8b5c06316e0793d8974651) - add `ndarray/base/assert/is-data-type-string`
-   [`4115e86`](https://github.com/stdlib-js/stdlib/commit/4115e8662062db0f878fe9cf33293fbf308d352f) - rename alias from `unaryReduceStrided1dToStruct` to `unaryReduceStrided1dAssignStruct`
-   [`03299d1`](https://github.com/stdlib-js/stdlib/commit/03299d15a76284c8e22e357794686a837faefb7e) - add `ndarray/base/unary-reduce-strided1d-assign-struct`
-   [`636e9ba`](https://github.com/stdlib-js/stdlib/commit/636e9ba626fb59ebd2abe0fb5562fd34bca253d3) - add `unaryReduceStrided1dToStruct` to namespace
-   [`0f1545f`](https://github.com/stdlib-js/stdlib/commit/0f1545fc6d22ad051bdae2f081f26d1d56cc9538) - add package entry point
-   [`142e477`](https://github.com/stdlib-js/stdlib/commit/142e4774ab7acbd79e76ff5f9f6e0ae47f70dae4) - add `factory` function
-   [`a752e25`](https://github.com/stdlib-js/stdlib/commit/a752e25ef1735c0253d3d3feb95dda2d145d5f1e) - add main entry point
-   [`ba8eed7`](https://github.com/stdlib-js/stdlib/commit/ba8eed78f0ffcb83ba752cf3ee2a841e9cf1a4b6) - add remaining kernels
-   [`af25b04`](https://github.com/stdlib-js/stdlib/commit/af25b04f00af720af3890f850dc5ea972d3711bb) - add 6d blocked kernel
-   [`c401a2a`](https://github.com/stdlib-js/stdlib/commit/c401a2a226b4589bf127cbb5e26e131a4aa39581) - add 6d kernel
-   [`2b3907f`](https://github.com/stdlib-js/stdlib/commit/2b3907fa3f5e2653f42d6be9b3ec3786880f4833) - add 5d blocked kernel
-   [`4e16eb2`](https://github.com/stdlib-js/stdlib/commit/4e16eb22dfe611c8649d40888fa4f1404bd6d329) - add 5d kernel
-   [`266d60a`](https://github.com/stdlib-js/stdlib/commit/266d60a3ec0b6d234f231c61e196a0ba0712dc79) - add 4d blocked kernel
-   [`22397d6`](https://github.com/stdlib-js/stdlib/commit/22397d61d7a0fdb3ae820434f6c256d1bb03dd09) - add 4d kernel
-   [`9942682`](https://github.com/stdlib-js/stdlib/commit/9942682d6e7ac1ab8f3a31a5868e3f32e2273d8a) - add 3d blocked kernel
-   [`6f4f47e`](https://github.com/stdlib-js/stdlib/commit/6f4f47e6d22ce8f9ae965d82112d229e19c7ca1f) - add 3d kernel
-   [`e152a98`](https://github.com/stdlib-js/stdlib/commit/e152a988d68f191b128cf5344812f423daee8099) - add 2d blocked kernel
-   [`bd392dc`](https://github.com/stdlib-js/stdlib/commit/bd392dcc6062a41edb281b4f87b70dc5485b9491) - add nd kernel
-   [`4d30065`](https://github.com/stdlib-js/stdlib/commit/4d3006542bd1526d173c1d56833249b6a000bd62) - add 2d kernel
-   [`f65a6ef`](https://github.com/stdlib-js/stdlib/commit/f65a6ef86b94fee9ba3ae0e7c5848002c6a32c56) - add 1d kernel
-   [`c9b5f5e`](https://github.com/stdlib-js/stdlib/commit/c9b5f5ecac19ea4602086a9f7dbc9c34938fb13d) - add 0d kernel
-   [`b1f7e33`](https://github.com/stdlib-js/stdlib/commit/b1f7e33277d00292ca5b45de636eaf80b3d45c22) - add `ndarraylike2scalar` to namespace
-   [`7a8bc40`](https://github.com/stdlib-js/stdlib/commit/7a8bc400fc2e1dd6a5edabc750bb75f4f665c041) - add `ndarray/base/ndarraylike2scalar`
-   [`eac188f`](https://github.com/stdlib-js/stdlib/commit/eac188f4def9fa545e9e0cfcd5731a66337fcd1a) - add support for struct data types
-   [`99ecc69`](https://github.com/stdlib-js/stdlib/commit/99ecc6907e9c26dabe4dd8e8dfb3b08d10d622c3) - add `isStructDataType` to namespace
-   [`d20a2ea`](https://github.com/stdlib-js/stdlib/commit/d20a2ea2cba39ea485abb500861a1fdc2088a36c) - add `ndarray/base/assert/is-struct-data-type`
-   [`9a30157`](https://github.com/stdlib-js/stdlib/commit/9a3015754f96452f5f205d91338bbc92def20249) - add `unaryReduceStrided1dDispatchByFactory` to namespace
-   [`50ebfa6`](https://github.com/stdlib-js/stdlib/commit/50ebfa6340bddbb7627195e27bdf7ece3a6f1198) - add `unaryReduceStrided1dDispatchBy` to namespace
-   [`64103e2`](https://github.com/stdlib-js/stdlib/commit/64103e22a2cf0fcad5914d53885d09e311fef6ee) - add `ndarray/base/unary-reduce-strided1d-dispatch-by-factory`
-   [`34ed9af`](https://github.com/stdlib-js/stdlib/commit/34ed9af63e302a5f4a759c7ef9b4f048b3ef89d4) - add `ndarray/base/unary-reduce-strided1d-dispatch-by`
-   [`2460ce8`](https://github.com/stdlib-js/stdlib/commit/2460ce82935de6512ee0979cc3b3918924af5ae1) - add `unaryReduceStrided1dBy` to namespace
-   [`b228b5e`](https://github.com/stdlib-js/stdlib/commit/b228b5e89da183b38160c6cd6f9908a07918dd09) - add `ndarray/base/unary-reduce-strided1d-by` [(#7214)](https://github.com/stdlib-js/stdlib/pull/7214)
-   [`67e9602`](https://github.com/stdlib-js/stdlib/commit/67e9602131f6e714d98de70ce6809cd9d327b02f) - add `someBy` to namespace
-   [`cc66d3b`](https://github.com/stdlib-js/stdlib/commit/cc66d3b709812126709d2d6c8232ffc2dbd8b576) - add `ndarray/some-by` [(#7145)](https://github.com/stdlib-js/stdlib/pull/7145)
-   [`e05819a`](https://github.com/stdlib-js/stdlib/commit/e05819abfe0fbf982469653a85add02159e8b122) - add `someBy` to namespace
-   [`350203f`](https://github.com/stdlib-js/stdlib/commit/350203f7cb6419700b7b07e558b677fb177828f8) - add `ndarray/base/some-by` [(#7087)](https://github.com/stdlib-js/stdlib/pull/7087)
-   [`b933a8d`](https://github.com/stdlib-js/stdlib/commit/b933a8d4d5176d89e9efe541a65431275011a477) - add `countIf` to namespace
-   [`4e85371`](https://github.com/stdlib-js/stdlib/commit/4e853712ccdbcce3faf40291446fee3f9cfb3d7f) - add `ndarray/count-if`
-   [`4049106`](https://github.com/stdlib-js/stdlib/commit/40491061117827e6d9ce80b60c73fd3cc0859bb6) - add `countFalsy` to namespace
-   [`ef3824d`](https://github.com/stdlib-js/stdlib/commit/ef3824dbdf18a2c7b3b5b27fa1fa395f7bf5928c) - add `ndarray/count-falsy`
-   [`dd4efd1`](https://github.com/stdlib-js/stdlib/commit/dd4efd1b69de5ef91139000a1dfd70f35a75ed74) - add `countTruthy` to namespace
-   [`328b07e`](https://github.com/stdlib-js/stdlib/commit/328b07ed9a9ceb43694b093e9befd2e76bae6cfd) - add `ndarray/count-truthy`
-   [`ee2b159`](https://github.com/stdlib-js/stdlib/commit/ee2b159ed8a4f1396f8ca0b66f39d6d69326ac9a) - add `countIf` to namespace
-   [`e1f67f1`](https://github.com/stdlib-js/stdlib/commit/e1f67f1a48d2b596ea19b2dd8433d67a122cc0fc) - add `ndarray/base/count-if`
-   [`fe062d3`](https://github.com/stdlib-js/stdlib/commit/fe062d37148ed8c6f474fafb36904f01b5903156) - add `countFalsy` to namespace
-   [`6df26cb`](https://github.com/stdlib-js/stdlib/commit/6df26cb20720cc4d566f5667debe8c60cf706f8f) - add `ndarray/base/count-falsy`
-   [`737ae65`](https://github.com/stdlib-js/stdlib/commit/737ae657cece40efaf246fdc2a33e84bfa314fe3) - add `unaryReduceSubarrayBy` to namespace
-   [`6c567f0`](https://github.com/stdlib-js/stdlib/commit/6c567f0b8ae1c0987f30b08dc032dd0af800793d) - add `countTruthy` to namespace
-   [`63796c4`](https://github.com/stdlib-js/stdlib/commit/63796c4bc3bc0d3cef746b97ea92e286abbc78c7) - add `ndarray/base/count-truthy`
-   [`138cc36`](https://github.com/stdlib-js/stdlib/commit/138cc36c180a676fc4ae8b675d77d58db8f02f26) - add `Complex64Vector` to namespace
-   [`50dac78`](https://github.com/stdlib-js/stdlib/commit/50dac7824c40e9cf5c10b0ee576f44fba8b191a5) - add `ndarray/vector/complex64`
-   [`0431d21`](https://github.com/stdlib-js/stdlib/commit/0431d211467c0ebfa57547a5da66f598870bbf33) - add `Complex128Vector` to namespace
-   [`0183f29`](https://github.com/stdlib-js/stdlib/commit/0183f293bf9a127899492ad80a87394e8b18afc1) - add `ndarray/vector/complex128`
-   [`5149a37`](https://github.com/stdlib-js/stdlib/commit/5149a3789bf321b18b1636b838ab086175b6c2ca) - add `ndarray/base/unary-reduce-subarray-by` [(#7008)](https://github.com/stdlib-js/stdlib/pull/7008)
-   [`54dc71e`](https://github.com/stdlib-js/stdlib/commit/54dc71e0ff4a2b5661d48a1bdee584507f66373f) - add `every` and `includes` to namespace
-   [`2349a6e`](https://github.com/stdlib-js/stdlib/commit/2349a6edf849f8f7093a77bbdeb2fdd7d9955f89) - add `vector` to namespace
-   [`1ab9f58`](https://github.com/stdlib-js/stdlib/commit/1ab9f58bcd109f19afd9ab08212d69bfe9d32bbe) - add `ndarray/vector` namespace
-   [`c08c18d`](https://github.com/stdlib-js/stdlib/commit/c08c18d74faca63932755275c9f9bc08742f1fe6) - add `ndarray/vector/bool`
-   [`34aa089`](https://github.com/stdlib-js/stdlib/commit/34aa08963d038cffbee304f6142f10dadfbf3d74) - add `ndarray/vector/uint8c`
-   [`1456ea8`](https://github.com/stdlib-js/stdlib/commit/1456ea8d4f5a3519811261ebbaf4760600a4bc6e) - add `ndarray/vector/uint8`
-   [`f9923b3`](https://github.com/stdlib-js/stdlib/commit/f9923b3b975f3fe14767d24dbd696bc704da762c) - add `ndarray/vector/uint16`
-   [`b7c276b`](https://github.com/stdlib-js/stdlib/commit/b7c276b5d4e32dd0409afb946319d4581b8f6ff1) - add `ndarray/vector/uint32`
-   [`3e6bb9d`](https://github.com/stdlib-js/stdlib/commit/3e6bb9d2c5d0977b0e101d89d6db13772aabb17c) - add `ndarray/vector/int8`
-   [`ea3f7af`](https://github.com/stdlib-js/stdlib/commit/ea3f7afc1eed9b9d6c7964b8e984dd1e205bcd24) - add `ndarray/vector/int16`
-   [`031fecf`](https://github.com/stdlib-js/stdlib/commit/031fecf3ade6e37cf1cda50ea30303cd922310b3) - add `ndarray/vector/int32`
-   [`2501de9`](https://github.com/stdlib-js/stdlib/commit/2501de9d60e1239dc54568fff1c6ecdf2770e3fa) - add `ndarray/vector/float64`
-   [`e8064cd`](https://github.com/stdlib-js/stdlib/commit/e8064cdc716fc9381a143620ef291722dba49228) - add `ndarray/vector/float32`
-   [`b2cefbe`](https://github.com/stdlib-js/stdlib/commit/b2cefbe2b2192cb705b85c43ffac2f57ca782c42) - add custom `valueOf` method
-   [`848f226`](https://github.com/stdlib-js/stdlib/commit/848f226d45aad2d627453c8306ae192c75338ac3) - add `factory` method
-   [`916b907`](https://github.com/stdlib-js/stdlib/commit/916b9073d6cf82262233e835f9bbbaca26d685f0) - add `ndarray/vector/ctor`
-   [`9b0d852`](https://github.com/stdlib-js/stdlib/commit/9b0d8520418c2788d20d446b6a39471b6393a787) - add `loopOrder` to namespace
-   [`bdc9110`](https://github.com/stdlib-js/stdlib/commit/bdc91105259200e3ebb60aea16e918718301ce4b) - add `ndarray/base/loop-interchange-order`
-   [`e5ddc80`](https://github.com/stdlib-js/stdlib/commit/e5ddc80ad0e60653c61dfc8847ecc65dff6c69f2) - add `outputDataType` to namespace
-   [`5e7af03`](https://github.com/stdlib-js/stdlib/commit/5e7af03b8d27240b12f4fbf7bbad86ff57b64917) - add `ndarray/base/output-dtype`
-   [`1f3ebc8`](https://github.com/stdlib-js/stdlib/commit/1f3ebc857c1c4b98d4681867b0d738b572631bcd) - add `promoteDataTypes` to namespace
-   [`ec51b4f`](https://github.com/stdlib-js/stdlib/commit/ec51b4f38e6bb9a1ad1d6ee7a2d35d0516312e48) - add `ndarray/base/promote-dtypes`
-   [`556e832`](https://github.com/stdlib-js/stdlib/commit/556e832729f770a48692fc796fb4d5c9b4b5ae34) - add `unaryStrided1dDispatchFactory` to namespace
-   [`1133bce`](https://github.com/stdlib-js/stdlib/commit/1133bceaec004d01bf20932b6334529dc7a79648) - add `unaryStrided1dDispatch` to namespace
-   [`8905452`](https://github.com/stdlib-js/stdlib/commit/890545242b456f9e6b85d744993d4e7c97cd0ae7) - add `unaryStrided1d` to namespace
-   [`5c8cd3f`](https://github.com/stdlib-js/stdlib/commit/5c8cd3f6a140e0698ff623334c05951d34ecd6c3) - add `unaryReduceStrided1dDispatchFactory` to namespace
-   [`53a52e9`](https://github.com/stdlib-js/stdlib/commit/53a52e9a773b443e13f39798746b55727053d92e) - add `unaryReduceStrided1dDispatch` to namespace
-   [`d6b451d`](https://github.com/stdlib-js/stdlib/commit/d6b451d5777547244a171595c5f09cccfa4d8dd3) - add `unaryReduceStrided1d` to namespace
-   [`3355982`](https://github.com/stdlib-js/stdlib/commit/33559820f55c0e1477017d2c09b2426f52659e1f) - add `everyBy` to namespace
-   [`afc6368`](https://github.com/stdlib-js/stdlib/commit/afc6368796cba9bbfb9a0182251212248f0edea9) - add `binary` to namespace
-   [`9501636`](https://github.com/stdlib-js/stdlib/commit/9501636c0d9198393a7aaf9691407402e80faead) - add `binaryOutputDataType` to namespace
-   [`99449d7`](https://github.com/stdlib-js/stdlib/commit/99449d7fbbd16dbea7436b75153cbdb38099d03f) - add `ndarray/base/binary-output-dtype`
-   [`a95ac02`](https://github.com/stdlib-js/stdlib/commit/a95ac027b1e359e28c27929db51793cbb297cf52) - add package entry point
-   [`5358d7b`](https://github.com/stdlib-js/stdlib/commit/5358d7b9cd327ebbfa3cac61af5cd5684132ea88) - add nd accessors kernel
-   [`9d4bbdf`](https://github.com/stdlib-js/stdlib/commit/9d4bbdfd17d977eb6bc1429abd760abe9d436210) - add 3d blocked accessors kernel
-   [`8e5606b`](https://github.com/stdlib-js/stdlib/commit/8e5606b09d9969c198b4bf9f7aedd14eb003ff93) - add 4d blocked accessors kernel
-   [`83e4b14`](https://github.com/stdlib-js/stdlib/commit/83e4b14020459604d4ebc4ae8ff45c7ce24bd2f9) - add 5d blocked accessors kernel
-   [`b00bd71`](https://github.com/stdlib-js/stdlib/commit/b00bd7132b46a30f7650a883220006e7335c194d) - add 6d blocked accessors kernel
-   [`2e4f0bc`](https://github.com/stdlib-js/stdlib/commit/2e4f0bcddd78f39e692dcc52baeb0c4e5f054bde) - add 7d blocked accessors kernel
-   [`ef496b0`](https://github.com/stdlib-js/stdlib/commit/ef496b03e5e4d162a7e134fdff5097e8be8ec31d) - add 8d blocked accessors kernel
-   [`bcc4271`](https://github.com/stdlib-js/stdlib/commit/bcc427128fc6f2ef25d1c1a7ec46b772de84f8d0) - add 9d blocked accessors kernel
-   [`2792a62`](https://github.com/stdlib-js/stdlib/commit/2792a62c564bb67183e6c422eebd470f2c2d0387) - add 10d blocked accessors kernel
-   [`10f7656`](https://github.com/stdlib-js/stdlib/commit/10f76566fbc8135b21f5d957a6a5be20a5262d7e) - add 2d blocked accessors kernel
-   [`ab4f417`](https://github.com/stdlib-js/stdlib/commit/ab4f417df27d95b9f16ba8cb7cf01ecc55f75c58) - add 10d blocked kernel
-   [`5a37da9`](https://github.com/stdlib-js/stdlib/commit/5a37da9e140327674b12d58f310ebb61c6ebacba) - add 9d blocked kernel
-   [`907c8f4`](https://github.com/stdlib-js/stdlib/commit/907c8f4e128fa7e7abb9b6276ebb25db5ebf45e3) - add 8d blocked kernel
-   [`8500ee3`](https://github.com/stdlib-js/stdlib/commit/8500ee3ab7fead5be0c81a635e7378de658eed4e) - add 7d block kernel
-   [`8a2f7e2`](https://github.com/stdlib-js/stdlib/commit/8a2f7e29aba824e388fd12fdcde371d41c1eed0a) - add 6d blocked kernel
-   [`62bde63`](https://github.com/stdlib-js/stdlib/commit/62bde63d0d548122c2f5ea8d2f6391a8d0267dc6) - add 5d blocked kernel
-   [`e6dc6be`](https://github.com/stdlib-js/stdlib/commit/e6dc6be0a6b7ceef7e3ad03abdf38ae8c27cb752) - add 4d blocked kernel
-   [`e7f8179`](https://github.com/stdlib-js/stdlib/commit/e7f8179e4b8076402e87498ff55bf31a1b5daeca) - add 3d blocked kernel
-   [`ba6846b`](https://github.com/stdlib-js/stdlib/commit/ba6846b5a5b6b944f348bad07a1127cdd40da191) - add 2d blocked kernel
-   [`7010ff5`](https://github.com/stdlib-js/stdlib/commit/7010ff5c07472a02fa2cc68dae5ae3e9a96dd8cb) - add 10d accessors kernel
-   [`fdf57c8`](https://github.com/stdlib-js/stdlib/commit/fdf57c81c833a6db1c6540113bab326e47aee78a) - add 9d accessors kernel
-   [`c7aeb32`](https://github.com/stdlib-js/stdlib/commit/c7aeb32227e9aa7ad0551b95336532b589bfa12c) - add 8d accessors kernel
-   [`462ba1c`](https://github.com/stdlib-js/stdlib/commit/462ba1c49a1d8ab5105af53898bcc0424bdae5fd) - add 7d accessors kernel
-   [`4fe65c6`](https://github.com/stdlib-js/stdlib/commit/4fe65c64aa1882a49728b233ebeefd6cc821e920) - add 6d accessors kernel
-   [`964d21f`](https://github.com/stdlib-js/stdlib/commit/964d21f08ae155ea7409a3d6cb6a95eab1182bd8) - add 5d accessors kernel
-   [`d223b39`](https://github.com/stdlib-js/stdlib/commit/d223b3924044d55e09a530f6b141c7087f1fa364) - add 4d accessors kernel
-   [`12a9858`](https://github.com/stdlib-js/stdlib/commit/12a9858be8b89300b72ec80486a43564a97be05e) - add 3d accessors kernel
-   [`a18a916`](https://github.com/stdlib-js/stdlib/commit/a18a916546eb2c364be0a314a2caa291490f5561) - add 2d accessors kernel
-   [`18b91ff`](https://github.com/stdlib-js/stdlib/commit/18b91ffeee255d85ec8bf80c18f679711d71f9f0) - add 1d accessors kernel
-   [`cdac44a`](https://github.com/stdlib-js/stdlib/commit/cdac44a8150892bde67cc5e4e3823bdd175fda48) - add 0d accessors kernel
-   [`a9dd7d2`](https://github.com/stdlib-js/stdlib/commit/a9dd7d2da8dcb2a49f8ba1c87105714e4e89b45e) - add nd kernel
-   [`059e866`](https://github.com/stdlib-js/stdlib/commit/059e8663bd3b995bcfa611460b354ab70ba69c77) - add 10 kernel
-   [`3b7413a`](https://github.com/stdlib-js/stdlib/commit/3b7413a240746356763c5508797756f67b2f7f2f) - add 9d kernel
-   [`1372f84`](https://github.com/stdlib-js/stdlib/commit/1372f84c834e08501006ebc7e1b22fc5053d0779) - add 8d kernel
-   [`33822b7`](https://github.com/stdlib-js/stdlib/commit/33822b7385bff2697e3a6496f9874dc27793e70f) - add 7d kernel
-   [`b459438`](https://github.com/stdlib-js/stdlib/commit/b459438fae2ae7484e102639f737dd36ccf02fd8) - add 6d kernel
-   [`5ad453e`](https://github.com/stdlib-js/stdlib/commit/5ad453e52b68e90430abe40360443f52310de4c5) - add 5d kernel
-   [`2d4acfe`](https://github.com/stdlib-js/stdlib/commit/2d4acfe9dade003dce0c5a34d819956fe975ce09) - add 4d kernel
-   [`3c5c398`](https://github.com/stdlib-js/stdlib/commit/3c5c398099e4bd34b4f4e30661286d13b00102a2) - add 3d kernel
-   [`6ad8db8`](https://github.com/stdlib-js/stdlib/commit/6ad8db8af20aac64755f89d1142ea7290b435b87) - add 2d kernel
-   [`b55f6f7`](https://github.com/stdlib-js/stdlib/commit/b55f6f7ea07120361a6af7762631157ea20e7b93) - add `1d` kernel
-   [`4ebe3c8`](https://github.com/stdlib-js/stdlib/commit/4ebe3c8d9fe099b9b9daaa03459f52a21bbedd27) - add 0d kernel
-   [`b087d7b`](https://github.com/stdlib-js/stdlib/commit/b087d7b801c7cae56cb39587b295fb7433638405) - add support for enforcing traversal order
-   [`d1bc036`](https://github.com/stdlib-js/stdlib/commit/d1bc0365ded44eefb0073b8ae9bf582041b49be5) - add support for enforcing traversal order
-   [`aa7edbf`](https://github.com/stdlib-js/stdlib/commit/aa7edbf50d41cdea1f28b13537f2810fa84ef3c7) - add support for enforcing traversal order
-   [`19a94ba`](https://github.com/stdlib-js/stdlib/commit/19a94ba6becae6ee0d021a1ad11af0bfa6ffa116) - add `unaryInputCastingDataType` to namespace
-   [`c6195ff`](https://github.com/stdlib-js/stdlib/commit/c6195ff858e3ba8b90a0560dd0af753be76b5d44) - add `ndarray/base/unary-input-casting-dtype`
-   [`a127aaf`](https://github.com/stdlib-js/stdlib/commit/a127aaf3a0a12ec7f2ae62e5fbb2bed4d67f9794) - add support for accumulation and index policies
-   [`0cf010e`](https://github.com/stdlib-js/stdlib/commit/0cf010ebd42bc5e06c935c023e41d98a2571300d) - add accumulation input casting policy
-   [`d97a6dc`](https://github.com/stdlib-js/stdlib/commit/d97a6dce7cbaaeec6168a853a70038d49ca3bf9c) - add `isInputCastingPolicy` to namespace
-   [`76720ca`](https://github.com/stdlib-js/stdlib/commit/76720ca15cf2ab2362923073da524e6d1b882afb) - add `ndarray/base/assert/is-input-casting-policy`
-   [`edbd922`](https://github.com/stdlib-js/stdlib/commit/edbd9221b2d935e924f94052cc3c22c55c112173) - add `inputCastingPolicies` to namespace
-   [`a4c7f4f`](https://github.com/stdlib-js/stdlib/commit/a4c7f4f5eed4b028a397e11a40e2c0cf80517703) - add `ndarray/input-casting-policies`
-   [`38de753`](https://github.com/stdlib-js/stdlib/commit/38de753fb6f02cb74f8ba6f4dd23b8232c378565) - add logic supporting an accumulation policy
-   [`1bbc59f`](https://github.com/stdlib-js/stdlib/commit/1bbc59f31cd81f3058f6c568567acdbd8056526b) - add `isBooleanIndexDataType` to namespace
-   [`1281240`](https://github.com/stdlib-js/stdlib/commit/128124061f8609ef1a5eaec35e6872ee3e119671) - add `ndarray/base/assert/is-boolean-index-data-type`
-   [`13702c8`](https://github.com/stdlib-js/stdlib/commit/13702c885f2a27bc95d4d563ebd4ed27f10103cc) - add `isMaskIndexDataType` to namespace
-   [`0feae39`](https://github.com/stdlib-js/stdlib/commit/0feae395dfe2c602d11ce118387dbe9270b3a270) - add `ndarray/base/assert/is-mask-index-data-type`
-   [`9c59659`](https://github.com/stdlib-js/stdlib/commit/9c59659f08f6ce5e52a8ae97ed9840391832ac36) - add `isIntegerIndexDataType` to namespace
-   [`262df73`](https://github.com/stdlib-js/stdlib/commit/262df739241e51bd92e21d5cb9168dc71972fec4) - add `ndarray/base/assert/is-integer-index-data-type`
-   [`a61e5b4`](https://github.com/stdlib-js/stdlib/commit/a61e5b4d222cbb72e236f6293279edc87641eb91) - add `isIndexDataType` to namespace
-   [`bd8958d`](https://github.com/stdlib-js/stdlib/commit/bd8958d43f54be203ffa1f6665a51f782a4aca6d) - add `ndarray/base/assert/is-index-data-type`
-   [`06667ad`](https://github.com/stdlib-js/stdlib/commit/06667ad3af114bad67b73ec1e78352044612186e) - add accumulation and index data type policies
-   [`83b4397`](https://github.com/stdlib-js/stdlib/commit/83b4397ead81f62400301a333ada0882da688ee8) - add default `indexing` data type
-   [`a76c12c`](https://github.com/stdlib-js/stdlib/commit/a76c12c36a3ec2c34ca6d9798f7e72e42f6d0597) - add `indexing` data type kind
-   [`db7d60b`](https://github.com/stdlib-js/stdlib/commit/db7d60b388d19ab8a4b537ec3445f3181ef270b7) - add `ndarray/base/unary-strided1d-dispatch-factory`
-   [`3036ccc`](https://github.com/stdlib-js/stdlib/commit/3036cccd1db41f0093555d2b7c890bdbd6f07cdf) - add `ndarray/base/unary-strided1d-dispatch`
-   [`9c1e5c9`](https://github.com/stdlib-js/stdlib/commit/9c1e5c9b5b87643d31668a7a0b9c009413fa4c05) - add `ndarray/base/unary-reduce-strided1d-dispatch-factory`
-   [`a374c5a`](https://github.com/stdlib-js/stdlib/commit/a374c5a0a41ce15ea957d6fa92d0a6b7fe6baa1f) - add `ndarray/base/unary-reduce-strided1d-dispatch`
-   [`d389d89`](https://github.com/stdlib-js/stdlib/commit/d389d8905c302347394f2df9d9553b3d02d4c759) - add `ndarray/base/unary-strided1d`
-   [`00450cc`](https://github.com/stdlib-js/stdlib/commit/00450cc5a91760e1d2aba09bb942bb0a84bc9157) - add `ndarray/base/every-by` [(#6667)](https://github.com/stdlib-js/stdlib/pull/6667)
-   [`ca10e52`](https://github.com/stdlib-js/stdlib/commit/ca10e526a8d174acca07ea25631f3254a768690c) - add `ndarray/base/unary-reduce-strided1d`
-   [`a468fa8`](https://github.com/stdlib-js/stdlib/commit/a468fa85dd5a0bdf9bb98fd27fca221cac2cc465) - add `every`, `includes`, `unaryAccumulate`, and `unaryReduceSubarray` to namespace [(#6605)](https://github.com/stdlib-js/stdlib/pull/6605)
-   [`3f4de77`](https://github.com/stdlib-js/stdlib/commit/3f4de77d333dea3962dec5f53858a4a2db86bd63) - add `ndarray/includes`
-   [`2ec7da5`](https://github.com/stdlib-js/stdlib/commit/2ec7da5371c0e94eec75db9374206753367761fd) - add package entry point
-   [`7631d15`](https://github.com/stdlib-js/stdlib/commit/7631d157dbaa53d165e84335c1c656504387c22c) - add nd kernels
-   [`9eb7bd3`](https://github.com/stdlib-js/stdlib/commit/9eb7bd359a705daeb1d2541db398e00d9c639786) - add 9d kernels
-   [`175e813`](https://github.com/stdlib-js/stdlib/commit/175e813a98369656c2bc3c5e3dfcbd2a6a78d207) - add 8d kernels
-   [`f13f725`](https://github.com/stdlib-js/stdlib/commit/f13f725463374ee53253ff45610ec68600b4f01d) - add 7d kernels
-   [`6bdf8aa`](https://github.com/stdlib-js/stdlib/commit/6bdf8aaf476c44183ac333f9bab349ec5b23cde9) - add 6d kernels
-   [`c907d71`](https://github.com/stdlib-js/stdlib/commit/c907d7194df26fab41665ec031de26d9c4716a99) - add 5d kernels
-   [`dab4993`](https://github.com/stdlib-js/stdlib/commit/dab49934d6adb33a90ec6661027f638075a8fa7b) - add 4d kernels
-   [`999d496`](https://github.com/stdlib-js/stdlib/commit/999d4968b54b50e41f1e0e3420afb87729b85b02) - add 3d kernels
-   [`27cd3d9`](https://github.com/stdlib-js/stdlib/commit/27cd3d90b12b3f98c1032fb7130aceeb54ecc345) - add 2d kernels
-   [`9dec091`](https://github.com/stdlib-js/stdlib/commit/9dec091d45d3c7272fc74267588891207a2f9048) - add 1d kernels
-   [`8bb576b`](https://github.com/stdlib-js/stdlib/commit/8bb576b6d3f4f6421f2a0065f36c24a223b9803d) - add 10d kernels
-   [`1392a91`](https://github.com/stdlib-js/stdlib/commit/1392a91b60c42b10757a4a2b187b58e648f8de98) - add 0d kernels
-   [`998b3ba`](https://github.com/stdlib-js/stdlib/commit/998b3ba4e628e6d8564c6b33fe41925da2046b41) - add missing kernels to `ndarray/base/unary-reduce-subarray` [(#6421)](https://github.com/stdlib-js/stdlib/pull/6421)
-   [`2690141`](https://github.com/stdlib-js/stdlib/commit/26901419b6a9b93f8e55216b4137e4a08ae57d28) - add `ndarray/every`
-   [`935f698`](https://github.com/stdlib-js/stdlib/commit/935f698bd565928d3fc862dfdff14ab0e56aa478) - add initial implementation for `ndarray/base/unary-reduce-subarray`
-   [`d8f2acf`](https://github.com/stdlib-js/stdlib/commit/d8f2acf4d31d3da271e7d2074ffb40a6317c4a23) - update namespace TypeScript declarations [(#6337)](https://github.com/stdlib-js/stdlib/pull/6337)
-   [`1a18317`](https://github.com/stdlib-js/stdlib/commit/1a183174f05d99bf78be477639df489493c01e2b) - add `isScalarMostlySafeCompatible` to namespace
-   [`6003449`](https://github.com/stdlib-js/stdlib/commit/600344933e2836421aa15fb89d62e9a0a9266bd6) - add `ndarray/base/assert/is-scalar-mostly-safe-compatible`
-   [`41b3b21`](https://github.com/stdlib-js/stdlib/commit/41b3b214c891ac64926296439240e2bf5f85de3f) - add `fillBy` to namespace
-   [`da8a676`](https://github.com/stdlib-js/stdlib/commit/da8a676ef0097af7ad60e7379b52930e03d65c95) - update namespace TypeScript declarations [(#6315)](https://github.com/stdlib-js/stdlib/pull/6315)
-   [`e5d835c`](https://github.com/stdlib-js/stdlib/commit/e5d835cb9acbd4597f255246fecd52f024212fbb) - add `ndarray/fill-by`
-   [`5e275bf`](https://github.com/stdlib-js/stdlib/commit/5e275bf225e7ea1cb233caef5336a062463342cb) - add `fill` to namespace
-   [`f475f78`](https://github.com/stdlib-js/stdlib/commit/f475f7891aa4103a113c9569902311d3570a2751) - add `ndarray/fill`
-   [`282d01f`](https://github.com/stdlib-js/stdlib/commit/282d01f86247ea1b4c8a3345493b6dc8ec034517) - add `fillBy` to namespace
-   [`d29b55f`](https://github.com/stdlib-js/stdlib/commit/d29b55fd2f01608cf9cbff68eb5b6dad4ca1722b) - add `ndarray/base/fill-by`
-   [`08aeae7`](https://github.com/stdlib-js/stdlib/commit/08aeae7804a6c7b95d1b18e2001854bfa5d98a03) - add loop implementations
-   [`b71f305`](https://github.com/stdlib-js/stdlib/commit/b71f305ed0f5e7bd763adcc44c710c9f751e1f66) - add header files
-   [`3677e41`](https://github.com/stdlib-js/stdlib/commit/3677e411f8dad66192e35cc15290e551a5534d4c) - add dispatch implementation
-   [`af44236`](https://github.com/stdlib-js/stdlib/commit/af4423684f924575e9bedcb47348ab455b6db688) - add main header file
-   [`1c01e33`](https://github.com/stdlib-js/stdlib/commit/1c01e334f75f28a39e08b89fab0117add60e3664) - add macros header
-   [`608f79b`](https://github.com/stdlib-js/stdlib/commit/608f79be4c10e031e8cfb450561ced24eee221e3) - add 10d blocked macros
-   [`552d565`](https://github.com/stdlib-js/stdlib/commit/552d565db6cf90e962da92793af6ac7f00846bd4) - add 5d blocked macros
-   [`6f0da38`](https://github.com/stdlib-js/stdlib/commit/6f0da38194edf4a54349071f7b4704fde6059865) - add 6d blocked macros
-   [`74fe0a2`](https://github.com/stdlib-js/stdlib/commit/74fe0a292a06f08be392bb231b4e28df6c73672d) - add 7d blocked macros
-   [`03696ac`](https://github.com/stdlib-js/stdlib/commit/03696ac18aff30b250b446017ce04a92aad2e9d1) - add 8d blocked macros
-   [`3764601`](https://github.com/stdlib-js/stdlib/commit/3764601d1c8ce115e1a068e9ff103d2dc53b1e4e) - add 9d blocked macros
-   [`26395f5`](https://github.com/stdlib-js/stdlib/commit/26395f59c471187503619bdbd4339297012642b5) - add 4d blocked macros
-   [`28aa078`](https://github.com/stdlib-js/stdlib/commit/28aa0787076a7f280df934d2fb3350736f8355c0) - add 3d blocked macros
-   [`b611927`](https://github.com/stdlib-js/stdlib/commit/b6119272bb72f287656606032b38fdea3a89fcfb) - add n-d macros
-   [`4695983`](https://github.com/stdlib-js/stdlib/commit/4695983369ab642e91c9cbed641bbac291d90bed) - add 10d macros
-   [`44a361c`](https://github.com/stdlib-js/stdlib/commit/44a361c150864c56d06975a7d27368b49fe51766) - add 9d macros
-   [`f33e9ce`](https://github.com/stdlib-js/stdlib/commit/f33e9ce577867ade65c8f46049909931f4364663) - add 8d macros
-   [`1032827`](https://github.com/stdlib-js/stdlib/commit/1032827c6b8d735e596b586483ced0ab56c65733) - add 7d macros
-   [`375cc14`](https://github.com/stdlib-js/stdlib/commit/375cc1414897521d2a08cf68431e9d9b57057d51) - add 6d macros
-   [`ef5ac9c`](https://github.com/stdlib-js/stdlib/commit/ef5ac9c8be208e28126ca44197cf6eaf7022d343) - add 5d macros
-   [`fb74648`](https://github.com/stdlib-js/stdlib/commit/fb74648f427a15f27765c46130aadb64a432f0b4) - add 4d macros
-   [`92b4704`](https://github.com/stdlib-js/stdlib/commit/92b47045fe2b3d36a2a1ea802411b2c9bff221f9) - add 3d macros
-   [`6126c56`](https://github.com/stdlib-js/stdlib/commit/6126c560ec19909e26ea9182b09e362805dcdad1) - add 2d blocked macros
-   [`3609a6b`](https://github.com/stdlib-js/stdlib/commit/3609a6beacc5cecaad7b9906ee796c4897801892) - add 2d macros
-   [`30a9f4d`](https://github.com/stdlib-js/stdlib/commit/30a9f4d177d487dd6211707a47a4197a736d24f0) - add 1d macros
-   [`4194f20`](https://github.com/stdlib-js/stdlib/commit/4194f20366c7ad8ae0121a9e5cd1821f8edaaa6f) - add header for dispatch function
-   [`5c412d3`](https://github.com/stdlib-js/stdlib/commit/5c412d3fbf47959a6b7d386fcb319dad664ddbde) - add constant macros
-   [`f0dc809`](https://github.com/stdlib-js/stdlib/commit/f0dc80912cc1ad7ab94f05a90704e96c75aa69fc) - add typedefs
-   [`242e3a9`](https://github.com/stdlib-js/stdlib/commit/242e3a9378662d968b32e65e5e15f0c545b79b7d) - add dispatch object header
-   [`9f517d8`](https://github.com/stdlib-js/stdlib/commit/9f517d8d5d18593c7a60d0fb4d0b0fe51f7087d0) - add header files for internal C utilities
-   [`7a58757`](https://github.com/stdlib-js/stdlib/commit/7a587578700738d61b0beddb311c967a8bf4c0f7) - add internal C utilities
-   [`4b2a5de`](https://github.com/stdlib-js/stdlib/commit/4b2a5de6d1d42c0ab318f71d77af2ffa1b86b1fc) - add implementation for `ndarray/base/every`
-   [`2f0aa48`](https://github.com/stdlib-js/stdlib/commit/2f0aa48ef6d561779d4bd4c4a54fe00a5a26c0e1) - update namespace TypeScript declarations [(#5436)](https://github.com/stdlib-js/stdlib/pull/5436)
-   [`c1b6794`](https://github.com/stdlib-js/stdlib/commit/c1b6794e36255d7df6795f5f5f4d3e493165f397) - add `isOutputDataTypePolicy` to namespace
-   [`9cabe87`](https://github.com/stdlib-js/stdlib/commit/9cabe87a0ce5401967f41d91dc4479a722ba3288) - add `ndarray/base/assert/is-output-data-type-policy`
-   [`f230249`](https://github.com/stdlib-js/stdlib/commit/f23024908c1d43ff5c2a8402a53cad2ff1054366) - add support for `_and_generic` data type policies
-   [`2b8c0d7`](https://github.com/stdlib-js/stdlib/commit/2b8c0d7579975a2fffdcf8cd8607d93ab8fe5658) - add policies which support returning a \"generic\" data type
-   [`f75dcc2`](https://github.com/stdlib-js/stdlib/commit/f75dcc2318bdfb56f5372ea81683a0be2b26b7e9) - enable completed macros
-   [`9f59d85`](https://github.com/stdlib-js/stdlib/commit/9f59d859b51df15f67ab19ee6b1b52c386c52a8c) - add dispatcher
-   [`665d4fe`](https://github.com/stdlib-js/stdlib/commit/665d4fef52207ace1795cbcd226f4eccfd0b54e8) - add 3d accumulation macros
-   [`05201fc`](https://github.com/stdlib-js/stdlib/commit/05201fc38530d538e5e6a6124d7406a9720e51f5) - add macros for 2d accumulation
-   [`e3e0b26`](https://github.com/stdlib-js/stdlib/commit/e3e0b26c6cee0ceaef93c85895ad65e3178399db) - add header file
-   [`4ccc539`](https://github.com/stdlib-js/stdlib/commit/4ccc5395a330137ccb62cfdd9e59035beb79c948) - add header file
-   [`963a710`](https://github.com/stdlib-js/stdlib/commit/963a7106b0f2b895403ce28a6d384c2f0f80eae6) - add header files
-   [`629d388`](https://github.com/stdlib-js/stdlib/commit/629d388f7cfee9c1d539c89ab0a401e5496074b2) - add headers for internal utilities
-   [`9055997`](https://github.com/stdlib-js/stdlib/commit/90559976d2b8f3b825ad434dfdae86f8505a876f) - add internal utilities
-   [`e661213`](https://github.com/stdlib-js/stdlib/commit/e66121352ef767cdb87d19e938b1eccf7970fa3a) - update namespace TypeScript declarations [(#4706)](https://github.com/stdlib-js/stdlib/pull/4706)
-   [`741b6f1`](https://github.com/stdlib-js/stdlib/commit/741b6f1df8ce11e77fb22c279cee6bbae3323176) - add `spreadDimensions` to namespace
-   [`3767255`](https://github.com/stdlib-js/stdlib/commit/3767255c7cfe85f09cea5c007e21297cd628245d) - add `ndarray/base/spread-dimensions`
-   [`a94dcea`](https://github.com/stdlib-js/stdlib/commit/a94dceaa9469c774ee4622567e4c15a15e215bcf) - add `isColumnMajorString` to namespace
-   [`76872c7`](https://github.com/stdlib-js/stdlib/commit/76872c76f1c655afe5e87d9d894be37f6a07c08b) - add `ndarray/base/assert/is-column-major-string`
-   [`5e1be08`](https://github.com/stdlib-js/stdlib/commit/5e1be08ff661fb981dc4a91c2e9d37d7396327f5) - add `isRowMajorString` to namespace
-   [`8cce31a`](https://github.com/stdlib-js/stdlib/commit/8cce31aadb16c58d167e89b6b9f8483d9314715f) - add `ndarray/base/assert/is-row-major-string`
-   [`908239e`](https://github.com/stdlib-js/stdlib/commit/908239e7cc6b4b3e260d0cc1f5aebb9af35d83c6) - add `toUniqueNormalizedIndices` to namespace
-   [`494a92b`](https://github.com/stdlib-js/stdlib/commit/494a92bf8a9fba830cbffcc7017097fae36dd73b) - add `ndarray/base/to-unique-normalized-indices`
-   [`524e854`](https://github.com/stdlib-js/stdlib/commit/524e854202862d5b37d66470d719fac1270e33c1) - add `toNormalizedIndices` to namespace
-   [`9f1d586`](https://github.com/stdlib-js/stdlib/commit/9f1d586a2c8d619deb5c6c6334e1c0fadb452075) - add `ndarray/base/to-normalized-indices`
-   [`7bb4167`](https://github.com/stdlib-js/stdlib/commit/7bb4167cb5017f6ab6a1f4018bd1e0b28f57eb44) - add `normalizeIndices` to namespace
-   [`8615f56`](https://github.com/stdlib-js/stdlib/commit/8615f568459d831a04b78034ec5141567f13d1d9) - add `ndarray/base/normalize-indices`
-   [`cc6f711`](https://github.com/stdlib-js/stdlib/commit/cc6f7116815dd33f196292a66017b832b6ff0e30) - add main entry point
-   [`c90c354`](https://github.com/stdlib-js/stdlib/commit/c90c354affab090f1c91ce1401dcf3acf8320fbe) - add an n-d accessors accumulator
-   [`064a8f9`](https://github.com/stdlib-js/stdlib/commit/064a8f9fdcc19b02659a44db6dd05b3d5b32a7b3) - add an n-d accumulator
-   [`2d93dfb`](https://github.com/stdlib-js/stdlib/commit/2d93dfbfa7953c84fd9b03bda5df082b59b309e3) - add 9d blocked accessors accumulator
-   [`fdc3131`](https://github.com/stdlib-js/stdlib/commit/fdc3131072c2b6c0804092cb8df9fc2860e01021) - add 9d blocked accumulator
-   [`ea6b38c`](https://github.com/stdlib-js/stdlib/commit/ea6b38c252925110fa3240f8c9cab2aac7d4d0f4) - add 9d accessors accumulators
-   [`3c51978`](https://github.com/stdlib-js/stdlib/commit/3c5197834ef9003436d9a6a2e65827649a28e97d) - add 9d accumulator
-   [`24c8a3a`](https://github.com/stdlib-js/stdlib/commit/24c8a3a234cc9ba047815f21d4c994bf85989494) - add 8d blocked accessors accumulator
-   [`e320953`](https://github.com/stdlib-js/stdlib/commit/e32095351dc5560b67c30e4d1e00282279a04edf) - add 8d blocked accumulator
-   [`a995be8`](https://github.com/stdlib-js/stdlib/commit/a995be8e3cb2c9a80442ed24056abee15a21a4f4) - add 8d accessors accumulator
-   [`0a6350e`](https://github.com/stdlib-js/stdlib/commit/0a6350e19d048ce3df15fcba526ad4572089e97d) - add 8d accumulator
-   [`fe22938`](https://github.com/stdlib-js/stdlib/commit/fe2293857a27ba412cd1bfc7f757ec8b7ab78643) - add 7d blocked accessors accumulator
-   [`1617255`](https://github.com/stdlib-js/stdlib/commit/1617255739ae2282d166b237c38b05f38303c9b4) - add 7d blocked accumulator
-   [`627699c`](https://github.com/stdlib-js/stdlib/commit/627699ceb1abe555d9fa6320373c239750e82a9c) - add 7d accessors accumulator
-   [`39f87db`](https://github.com/stdlib-js/stdlib/commit/39f87db060078addf749b53326670548e02eb34b) - add 7d accumulator
-   [`c02cc5e`](https://github.com/stdlib-js/stdlib/commit/c02cc5ec7f4834b968878c80df04e6cd5390bc6c) - add 6d blocked accessors accumulator
-   [`79a6c7c`](https://github.com/stdlib-js/stdlib/commit/79a6c7cc87aa714c9b9e900d532cc44906088743) - add 6d blocked accumulator
-   [`70d0d2a`](https://github.com/stdlib-js/stdlib/commit/70d0d2aa36f0a3d430aaaf37e018c3b54fec7bb1) - add 6d accessors accumulator
-   [`3e0c232`](https://github.com/stdlib-js/stdlib/commit/3e0c2323b5d09296cda154271dc0a775deb4bb61) - add 6d accumulator
-   [`42e1358`](https://github.com/stdlib-js/stdlib/commit/42e13587ea8c874482ccd9d054914e7853c868e3) - add 5d blocked accessors accumulator
-   [`828a6a6`](https://github.com/stdlib-js/stdlib/commit/828a6a659015cd0187b8b85a3a83105d2f50807c) - add 5d blocked accumulator
-   [`298fb43`](https://github.com/stdlib-js/stdlib/commit/298fb438f7996eaef6ffb9069057b524d17c4a23) - add 5d accessors accumulator
-   [`9678ff8`](https://github.com/stdlib-js/stdlib/commit/9678ff84f0823d1272b893c7c638d6b014b17523) - add 5d accumulator
-   [`ace6b17`](https://github.com/stdlib-js/stdlib/commit/ace6b177e8e4ba85b47c6c3fae39540b70609e0c) - add 4d blocked accessors accumulator
-   [`c686569`](https://github.com/stdlib-js/stdlib/commit/c68656944c4ff05c3cdcd6ff8f084354b207d86a) - add 4d blocked accumulator
-   [`afe0d98`](https://github.com/stdlib-js/stdlib/commit/afe0d98c95b5ed839049014e161f368d81d6852f) - add 4d accessors accumulator
-   [`714ab64`](https://github.com/stdlib-js/stdlib/commit/714ab64dcbc8911f317ffc4e3b315b1c48192eb6) - add 4d accumulator
-   [`062be58`](https://github.com/stdlib-js/stdlib/commit/062be5859727da44f5af9d38cde6de39f61b51f7) - add 3d blocked accessors accumulator
-   [`a78f2b1`](https://github.com/stdlib-js/stdlib/commit/a78f2b162c32840702e0b02e8d730ae1b568ae97) - add 3d blocked accumulator
-   [`ea33936`](https://github.com/stdlib-js/stdlib/commit/ea339369e379fd22a635e1e11c7e9412a4385528) - add 3d accessors accumulator
-   [`33036b0`](https://github.com/stdlib-js/stdlib/commit/33036b038cecaa5b98e1b4793d41077cc9168513) - add 3d accumulator
-   [`45fe885`](https://github.com/stdlib-js/stdlib/commit/45fe885cc5f595cf68804bf605f5dc4fdc5a3580) - add 2d blocked accessors accumulator
-   [`4c080fd`](https://github.com/stdlib-js/stdlib/commit/4c080fd599fdff49cade83dbd29d6b75f862c7bb) - add 2d blocked accumulator
-   [`caf7397`](https://github.com/stdlib-js/stdlib/commit/caf7397f94553933295586c183275201e7df96e7) - add 2d accessors accumulator
-   [`1a5172d`](https://github.com/stdlib-js/stdlib/commit/1a5172d9de881e97d4300b022201a154eb1e0ca0) - add 2d accumulator
-   [`74d9fef`](https://github.com/stdlib-js/stdlib/commit/74d9fefaff44947b314862a3574857e0cdb7ab03) - add 1d accessors accumulator
-   [`2d97fb5`](https://github.com/stdlib-js/stdlib/commit/2d97fb548f0d0c7722bc1d4c540b352b203ff236) - add 1d accumulator
-   [`db61fca`](https://github.com/stdlib-js/stdlib/commit/db61fcae67ae7bb23ac2b9ce0084eb1f67b18cf6) - add 10d blocked accessor accumulator
-   [`8bc84b3`](https://github.com/stdlib-js/stdlib/commit/8bc84b33f635d90af7c2da209bcf6fb4fce0e15f) - add 10d blocked accumulator
-   [`b516586`](https://github.com/stdlib-js/stdlib/commit/b51658624b80eb39eddeb5d752b781f77a2c3b5a) - add 10d accessors accumulator
-   [`f36a0ab`](https://github.com/stdlib-js/stdlib/commit/f36a0ab4aaa1cdf08748fcde1339fe41b335eca2) - add 10d accumulator
-   [`7601be7`](https://github.com/stdlib-js/stdlib/commit/7601be773588756a38c537b4dbc48f1ae4d2c90a) - add 0d accessor accumulator
-   [`a049375`](https://github.com/stdlib-js/stdlib/commit/a04937599dfcc1cb4dbd1c3998748f8fd72e7610) - add 0d accumulator
-   [`33b46cb`](https://github.com/stdlib-js/stdlib/commit/33b46cbab14e25a72a7464d6d923f09a56ee0d44) - update namespace TypeScript declarations [(#4426)](https://github.com/stdlib-js/stdlib/pull/4426)
-   [`259b682`](https://github.com/stdlib-js/stdlib/commit/259b682b2fb67d03e2987ca02b57d0cbc631ae8e) - add support for specifying an array index cache and add support for linear indexing
-   [`1ddeba9`](https://github.com/stdlib-js/stdlib/commit/1ddeba98295bb53fb8098d1016f0de4b7f544e96) - add `scalar2ndarrayLike` to namespace
-   [`b2dcaa0`](https://github.com/stdlib-js/stdlib/commit/b2dcaa0d97eeb11585ab4cae5b7c319308e6b3c2) - add `ndarray/base/from-scalar-like`
-   [`25d8240`](https://github.com/stdlib-js/stdlib/commit/25d8240f51b27bd0ee85ca3ef70c89fd3778b902) - update namespace TypeScript declarations [(#4363)](https://github.com/stdlib-js/stdlib/pull/4363)
-   [`44547ea`](https://github.com/stdlib-js/stdlib/commit/44547ead986e505d5fdffac47d44cd1d18480f8c) - add `ndarray2fancy` to namespace
-   [`3f35e51`](https://github.com/stdlib-js/stdlib/commit/3f35e518a65e0cce1a8bcaf0ef6e4d45c08afc59) - add `forEach` to namespace
-   [`413827b`](https://github.com/stdlib-js/stdlib/commit/413827b397945f584daa5b2b2380e36d2d833ac3) - add `ndindex` to namespace
-   [`4d1bbcd`](https://github.com/stdlib-js/stdlib/commit/4d1bbcd8bb4bc13bb77f7fcda7d7701ebadf765d) - add types for static methods
-   [`0c85b4d`](https://github.com/stdlib-js/stdlib/commit/0c85b4d64aed91d8119330dd7aaa27fbc3629413) - add `ndarray/index`
-   [`ac735b1`](https://github.com/stdlib-js/stdlib/commit/ac735b1ee32aa14c3760551c3f9a4acf3843fd76) - add `ndarray/for-each` [(#3926)](https://github.com/stdlib-js/stdlib/pull/3926)
-   [`323e4e5`](https://github.com/stdlib-js/stdlib/commit/323e4e5e0f1af8130e8a6462abf619999c955f88) - update namespace TypeScript declarations [(#3977)](https://github.com/stdlib-js/stdlib/pull/3977)
-   [`9d912a3`](https://github.com/stdlib-js/stdlib/commit/9d912a3e992cb9c5fe272a3aecc55293efbc0647) - add `ndarray2json` to namespace
-   [`ae80da2`](https://github.com/stdlib-js/stdlib/commit/ae80da29fdbfd1be7541df6607715b77b06f1019) - add `ndarray/to-json`
-   [`58e795d`](https://github.com/stdlib-js/stdlib/commit/58e795db467b7bd1d3dc6c5847f91a97fed2ccff) - update namespace TypeScript declarations [(#3937)](https://github.com/stdlib-js/stdlib/pull/3937)
-   [`fb1ca76`](https://github.com/stdlib-js/stdlib/commit/fb1ca76ccf2f324c45b24411aa3fd1088a7a7b6e) - add `ndarray/to-fancy`
-   [`1a202e3`](https://github.com/stdlib-js/stdlib/commit/1a202e3605b10cd01bf9654f8356c72c5c8a8186) - update namespace TypeScript declarations [(#3916)](https://github.com/stdlib-js/stdlib/pull/3916)
-   [`14427c7`](https://github.com/stdlib-js/stdlib/commit/14427c79bc62f82b16cbadc9d34749901e48d105) - add `fill`, `map`, and `toReversed` to namespace
-   [`a0d6619`](https://github.com/stdlib-js/stdlib/commit/a0d66193409576538d0f16aa89cbaeedec7898be) - add `minSignedIntegerDataType` and `minUnsignedIntegerDataType` to namespace
-   [`97e8c1a`](https://github.com/stdlib-js/stdlib/commit/97e8c1aff4f7c1a3b0946d15354a926d82e2120a) - add `ndarray/base/min-unsigned-integer-dtype`
-   [`c3bffe5`](https://github.com/stdlib-js/stdlib/commit/c3bffe513318480e2ce4645bb05895df8148ee1e) - add `ndarray/base/min-signed-integer-dtype`
-   [`dbfd8f5`](https://github.com/stdlib-js/stdlib/commit/dbfd8f5c81d11be2142ebfc4f2f0bb0316ba7478) - add `filterMap` to namespace
-   [`6ff153f`](https://github.com/stdlib-js/stdlib/commit/6ff153f9023cffac527b3243489e6413e989e940) - add `ndarray/filter-map`
-   [`cbc4d3f`](https://github.com/stdlib-js/stdlib/commit/cbc4d3f7514b7213cad4f9d2ca5d916e13eeffa5) - add `reject` to namespace
-   [`43ccbfb`](https://github.com/stdlib-js/stdlib/commit/43ccbfbf9cd0ffcdd92fbe6ae0cc60db4f46ea6e) - add `ndarray/reject`
-   [`831de1b`](https://github.com/stdlib-js/stdlib/commit/831de1b4ba21cda245c073a5412bf1a2e9d7598d) - add `map` and `filter` to namespace
-   [`d481f26`](https://github.com/stdlib-js/stdlib/commit/d481f264f68deee3497bf73480c2c88efc3a725f) - add `ndarray/filter`
-   [`3ea906b`](https://github.com/stdlib-js/stdlib/commit/3ea906bb64f93b4d323bc91f99a176d2729a2cc9) - add `ndarray/map` [(#3314)](https://github.com/stdlib-js/stdlib/pull/3314)
-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec) - update namespace TypeScript declarations [(#3190)](https://github.com/stdlib-js/stdlib/pull/3190)

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`cae1beb`](https://github.com/stdlib-js/stdlib/commit/cae1bebbed3f299a18e786a150625582b54763a2) - address assignment bug
-   [`f2f4cba`](https://github.com/stdlib-js/stdlib/commit/f2f4cba93e4b45064b4197f7c90f22abf8f3fb8c) - address assignment bug
-   [`e4dd1ed`](https://github.com/stdlib-js/stdlib/commit/e4dd1ed8bf809ec7c8c34fd8c5dae03f5ed7cdf3) - use correct name in package.json
-   [`8df8042`](https://github.com/stdlib-js/stdlib/commit/8df804279a206bd3b8f2e2fd7016170836ca9381) - add newly supported data types
-   [`bd03989`](https://github.com/stdlib-js/stdlib/commit/bd03989d684053a787d91f33dc9f7e5963d8f478) - add missing table
-   [`c86cb96`](https://github.com/stdlib-js/stdlib/commit/c86cb96872dce4d7b508daf43886e10c0fedad8f) - update require path
-   [`0ddb52b`](https://github.com/stdlib-js/stdlib/commit/0ddb52b2f0719c4dce9aa2e5a7fd1d1112dae6e5) - update require path
-   [`3f6c0ff`](https://github.com/stdlib-js/stdlib/commit/3f6c0ffd9568665b54d0547b0550b2c96505bed6) - address increment bug
-   [`4d29349`](https://github.com/stdlib-js/stdlib/commit/4d29349017e6d62d7f72aa0c3a86a24fdd83e86a) - address increment bug
-   [`d1f5820`](https://github.com/stdlib-js/stdlib/commit/d1f58208fc95174fcfce03f00df278a8190578de) - address increment bug
-   [`495669a`](https://github.com/stdlib-js/stdlib/commit/495669aaf5064ff0043a6ceab9216a3b8c1c84f1) - update assertion
-   [`a300862`](https://github.com/stdlib-js/stdlib/commit/a300862d4f05d4d8bd85f1e235db93ad5d35a767) - address increment bugs
-   [`fab9873`](https://github.com/stdlib-js/stdlib/commit/fab9873a907807195f2f6673b5b97f09e383bd69) - address index bug
-   [`a4f78ea`](https://github.com/stdlib-js/stdlib/commit/a4f78ea79e24bab68ce4f3381c8bc9fb685bd002) - account for loop tiling when generating list of indices
-   [`99be29d`](https://github.com/stdlib-js/stdlib/commit/99be29d87a59460302f43792e0f24b4dbe128dab) - account for loop tiling when generating list of indices
-   [`9a1ee35`](https://github.com/stdlib-js/stdlib/commit/9a1ee35193c5c474720c58f34d9584f41108bc5c) - account for loop tiling when generating list of indices
-   [`ae2b9a3`](https://github.com/stdlib-js/stdlib/commit/ae2b9a327b74ca7bdc03996cbb77a87053d19896) - use resolved order when computing loop variables
-   [`9bc10d4`](https://github.com/stdlib-js/stdlib/commit/9bc10d4dc2b9afe6b55ca2b6e17c165e9dd2a88d) - use resolved order when computing loop variables
-   [`ccc7890`](https://github.com/stdlib-js/stdlib/commit/ccc7890aee959303e2defbc627b32f66b18535eb) - check for row-major value
-   [`d066ec9`](https://github.com/stdlib-js/stdlib/commit/d066ec94f0484e735ea8025e7c9339f248c8d450) - check for row-major value
-   [`4795826`](https://github.com/stdlib-js/stdlib/commit/47958261521f7d00ccd325cb978e55af39b9cbe0) - check for row-major value
-   [`a8bac64`](https://github.com/stdlib-js/stdlib/commit/a8bac644b23c4413a566f309b43857ad779f05cc) - check for row-major value
-   [`7583774`](https://github.com/stdlib-js/stdlib/commit/7583774f4307a69b9e364a2e60c14ee034fa02a9) - use resolved order when computing loop variables
-   [`b9e9eca`](https://github.com/stdlib-js/stdlib/commit/b9e9eca93c4611a77122090ab8e589e6ba82e47b) - use resolved order when computing loop variables
-   [`1e0917b`](https://github.com/stdlib-js/stdlib/commit/1e0917b1bba1d273d93e8fa97cc8a060661bbbf0) - use resolved order when computing loop variables
-   [`92bf1a1`](https://github.com/stdlib-js/stdlib/commit/92bf1a12b2398ec5823eb3094bdc89f88d9876a7) - use resolved order when computing loop variables
-   [`742b7ec`](https://github.com/stdlib-js/stdlib/commit/742b7ec1f60fc811148afcea78cfc36dc1018e24) - use resolved order when computing loop variables
-   [`a19b8f2`](https://github.com/stdlib-js/stdlib/commit/a19b8f2405c62dd79247ef4c3a9a1cadda1f3576) - use resolved order when computing loop variables
-   [`f7cf8ed`](https://github.com/stdlib-js/stdlib/commit/f7cf8ed8066b7b2fe18a9b9bc6ed1226eb1cc1ea) - use resolved order when computing loop variables
-   [`f10dd8c`](https://github.com/stdlib-js/stdlib/commit/f10dd8ccbd1c245467d156a1b87f5eb2ba47e0ad) - use resolved order when computing loop variables
-   [`6c09182`](https://github.com/stdlib-js/stdlib/commit/6c09182156a8a7d13e52660e278b52d9d6b0166a) - use resolved order when computing loop variables
-   [`ca6378c`](https://github.com/stdlib-js/stdlib/commit/ca6378c56d971ae1c08f162bfda933b7b2fc04cf) - use resolved order when computing loop variables
-   [`ab22671`](https://github.com/stdlib-js/stdlib/commit/ab2267149121cf347c5be11d7bfc7ee64e4f663a) - use resolved order when computing loop variables
-   [`18036a4`](https://github.com/stdlib-js/stdlib/commit/18036a4b73cbae2f90f5ce929645d1eb769138dc) - use resolved order when determining increment offsets
-   [`3ce09af`](https://github.com/stdlib-js/stdlib/commit/3ce09af9819ae7dbaad178179264fc84c5db5690) - ensure separate array instance for each memory layout
-   [`7c29c2d`](https://github.com/stdlib-js/stdlib/commit/7c29c2d3aea7b8d0396a77f6781d7d76bd7adde4) - use computed order
-   [`8722299`](https://github.com/stdlib-js/stdlib/commit/8722299df603836eaf1aba2404e833f77db4ed0b) - use computed order
-   [`e0a04fe`](https://github.com/stdlib-js/stdlib/commit/e0a04fe3cbdcab5adb4529158d2ccf085fb971a6) - use computed order
-   [`3fbb654`](https://github.com/stdlib-js/stdlib/commit/3fbb6542732cd06fc8d54b9bea5734261ab7c871) - use computed order
-   [`aa86262`](https://github.com/stdlib-js/stdlib/commit/aa862629c2826d5f0b9e69c64264eea89ea1de7d) - use computed order
-   [`71e6a7f`](https://github.com/stdlib-js/stdlib/commit/71e6a7f82bcc08d20d09772ba0e99c825be191bf) - use computed order
-   [`23f47b4`](https://github.com/stdlib-js/stdlib/commit/23f47b4ef44cb8bbdc7009c403630d003af9c0a2) - use computed order
-   [`1473377`](https://github.com/stdlib-js/stdlib/commit/1473377ac4faecd7ff1448fb7972d851c3e8b2a8) - use computed order
-   [`f44eb41`](https://github.com/stdlib-js/stdlib/commit/f44eb41a8314b3f305d88617d26b78a4c7d7e888) - provide z dtype
-   [`ccba75e`](https://github.com/stdlib-js/stdlib/commit/ccba75ea9ec47fe7ccc85f87dff6c9759294094e) - address off-by-one error
-   [`954292d`](https://github.com/stdlib-js/stdlib/commit/954292d127bf5dfd360df92ab5e73bac33a9b673) - address off-by-one error
-   [`f3e3561`](https://github.com/stdlib-js/stdlib/commit/f3e3561a46cca1fbb13c0a1b5eb5f5475ef9b032) - address off-by-one error
-   [`79f6ac4`](https://github.com/stdlib-js/stdlib/commit/79f6ac4a6aa789b2e012126b8b485c8173a89f11) - accumulate in the default real-valued floating-point dtype
-   [`ebe55b2`](https://github.com/stdlib-js/stdlib/commit/ebe55b2015d81d3b0f7288dc87451a2f0d362d47) - update hash table
-   [`b43db40`](https://github.com/stdlib-js/stdlib/commit/b43db40273306f34ee9cde05d82c7fb9207aeb2b) - ensure correct ndarray argument order where output ndarray should be second ndarray argument
-   [`ac10964`](https://github.com/stdlib-js/stdlib/commit/ac109649d1cfad63800282f0d509aff419bfeb33) - ensure correct table validation
-   [`0216d98`](https://github.com/stdlib-js/stdlib/commit/0216d98429db599b577ac3b5dd89bc6b72902e1c) - verify that input and output ndarrays have same number of dimensions
-   [`ad90a38`](https://github.com/stdlib-js/stdlib/commit/ad90a38e1d8eabd6476c7c086ac1f82f2742d386) - ensure correct shape and strides
-   [`1d0c130`](https://github.com/stdlib-js/stdlib/commit/1d0c13090eff8e9802ebd43c8628529309895b11) - ensure correct shape and strides
-   [`f7bb91c`](https://github.com/stdlib-js/stdlib/commit/f7bb91c2aa3b31c86ddd57cfd3396632c78d42c0) - ensure support for zero-dimensional shapes
-   [`046926b`](https://github.com/stdlib-js/stdlib/commit/046926b9a0ad4643802944ef110b1cfe1eb488c9) - ensure support for zero-dimensional shapes
-   [`86632f3`](https://github.com/stdlib-js/stdlib/commit/86632f3d1a2de336941303b32e994c870bcaeb71) - check for duplicate indices
-   [`07710f8`](https://github.com/stdlib-js/stdlib/commit/07710f849133f4414b37a19a96fb3ccdad7538d5) - check for duplicate indices
-   [`cdc66ce`](https://github.com/stdlib-js/stdlib/commit/cdc66ce1876b95dd8c23aa2f869aebe9b842e86e) - remove unused parameters
-   [`0ede0da`](https://github.com/stdlib-js/stdlib/commit/0ede0dafa46ddea7dfce7be63250ca9ae0c1c546) - add missing imports in `ndarray/base/unary-reduce-subarray` [(#6642)](https://github.com/stdlib-js/stdlib/pull/6642)
-   [`605c582`](https://github.com/stdlib-js/stdlib/commit/605c5828fe6efeae442d8df17d29404d2acb759f) - update error message
-   [`0836dce`](https://github.com/stdlib-js/stdlib/commit/0836dce5df85cb2cc185c65ca839aa99f30eb9e1) - update error message
-   [`f0d205d`](https://github.com/stdlib-js/stdlib/commit/f0d205d7073055c7a69f1ba7ccee95671ab762ba) - address indexing error
-   [`043dc69`](https://github.com/stdlib-js/stdlib/commit/043dc69c76ea6780cbba2c223417fccda4685c7a) - handle 0d edge case
-   [`6f61b2d`](https://github.com/stdlib-js/stdlib/commit/6f61b2dfab95f59ff05a07769b777f5012e1c193) - handle edge case when `dims=[]`
-   [`5768926`](https://github.com/stdlib-js/stdlib/commit/5768926be4fb253947f5d44bcf6b9d8bb5c75274) - update error message
-   [`7378f4d`](https://github.com/stdlib-js/stdlib/commit/7378f4db96fc059523a6f181388aa8f4fa202675) - ensure support when providing no dimensions to reduce
-   [`91778b7`](https://github.com/stdlib-js/stdlib/commit/91778b7ca6ae2c6ee0c6017687426c3952d90098) - handle scenario where a core dimension is zero
-   [`54de8ff`](https://github.com/stdlib-js/stdlib/commit/54de8ff8a11f970858032265f2bc5caeba082479) - update default type
-   [`1aca9d3`](https://github.com/stdlib-js/stdlib/commit/1aca9d37e47e33c03b94bb5b128647c7387172e2) - update type defn
-   [`1e48327`](https://github.com/stdlib-js/stdlib/commit/1e48327f169d8cd8adf1177f92d5147077edbfe7) - handle zero-dimensional ndarrays
-   [`5f03a9c`](https://github.com/stdlib-js/stdlib/commit/5f03a9c9c4192b27996e9fb22959ca948230396a) - update function names and fix buffer dtype
-   [`f22a9ab`](https://github.com/stdlib-js/stdlib/commit/f22a9ab1c1c50aacc3529b77401469c915f79aaf) - ensure support for allocating zero-dimensional ndarrays
-   [`835bd41`](https://github.com/stdlib-js/stdlib/commit/835bd415145e4f72c46ec7222a2f90fbcc79b791) - remove extra slash
-   [`c274741`](https://github.com/stdlib-js/stdlib/commit/c274741b9abb10df5dc8a887ca2500db5bb506c0) - define constant pointer
-   [`e76a62f`](https://github.com/stdlib-js/stdlib/commit/e76a62fbd4563eaa921bbfe5e4b515ec8a2668bf) - set pointer to constant
-   [`ba9b416`](https://github.com/stdlib-js/stdlib/commit/ba9b4160f16f1ae1a7f8603920ae0a9f43e6b29f) - rename `bool` to `boolean` to match data type kind and avoid conflict with `bool` data type
-   [`2e9ea06`](https://github.com/stdlib-js/stdlib/commit/2e9ea0690e40506e0c09764f40f8163fb0c7ff7c) - update signatures
-   [`c82563a`](https://github.com/stdlib-js/stdlib/commit/c82563aa50c03568da53abce9420b97924f60e3f) - remove continuation
-   [`52f7ac2`](https://github.com/stdlib-js/stdlib/commit/52f7ac26eff82f57ccfca5a3b04c15dbacad074e) - use correct stride
-   [`e689326`](https://github.com/stdlib-js/stdlib/commit/e68932672651e213b4cf6500100d7055b794ba82) - use correct stride
-   [`712a9a8`](https://github.com/stdlib-js/stdlib/commit/712a9a8554f59fdfe520c4e2daafdbfd93637c76) - compute singleton strides as if strides computed apriori
-   [`5e2bbef`](https://github.com/stdlib-js/stdlib/commit/5e2bbef14efd5937e23047c01af0e740e6cbd4f6) - add missing boolean array support
-   [`be3e0b9`](https://github.com/stdlib-js/stdlib/commit/be3e0b984eb981caa758172dc7179cbd6a118a2e) - treat generic accessor arrays similar to built-in generic arrays
-   [`aea44c9`](https://github.com/stdlib-js/stdlib/commit/aea44c9c8699a4d748c0db70d4a60801bfc03c40) - update loop limit
-   [`b4502fb`](https://github.com/stdlib-js/stdlib/commit/b4502fbc4da03910f86c66e68b53e93e99e3e933) - remove perf logic in order to ensure expected indices in callback
-   [`a299630`](https://github.com/stdlib-js/stdlib/commit/a299630d08a49ba51c6e3501fbd7d215338ca23a) - avoid potential external mutation

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`97834dd`](https://github.com/stdlib-js/stdlib/commit/97834ddd6f863bd8e9b30ce10966f5db8a1f48b2): remove package

    -   To migrate, users should use `ndarray/base/unary-reduce-strided1d-assign-struct`
        which provides the exact same API and behavior.

-   [`4115e86`](https://github.com/stdlib-js/stdlib/commit/4115e8662062db0f878fe9cf33293fbf308d352f): rename alias from `unaryReduceStrided1dToStruct` to `unaryReduceStrided1dAssignStruct`
-   [`7507be0`](https://github.com/stdlib-js/stdlib/commit/7507be008cc27aa0c74770a29cd4b4507eca6745): replace policy string argument with a policy object
-   [`f0602e3`](https://github.com/stdlib-js/stdlib/commit/f0602e31fcfab3c05954ac9b3d37ae01d3f51b6b): replace policy string argument with a policy object
-   [`9f35a29`](https://github.com/stdlib-js/stdlib/commit/9f35a299838dee39db10a82b498884bc045383bb): replace policy string argument with a policy object
-   [`a044e35`](https://github.com/stdlib-js/stdlib/commit/a044e354764d59dd965c90a4317f1b3898a83d6d): replace policy string argument with a policy object
-   [`270d773`](https://github.com/stdlib-js/stdlib/commit/270d77340c33be953ec29ca4d1924fffdb18df0b): modify dispatch table to support type signatures
-   [`2b48dd6`](https://github.com/stdlib-js/stdlib/commit/2b48dd67916dc94703baac7f524b3136e8014f1c): modify dispatch table to support type signatures
-   [`d4f8189`](https://github.com/stdlib-js/stdlib/commit/d4f8189e03d81f54c5483ffb016ca967a3888565): modify dispatch table to support type signatures
-   [`d287f8e`](https://github.com/stdlib-js/stdlib/commit/d287f8e4a80211270e9fa96e05a17d6d1a9d2655): modify dispatch table to support type signatures
-   [`2f0aa48`](https://github.com/stdlib-js/stdlib/commit/2f0aa48ef6d561779d4bd4c4a54fe00a5a26c0e1): remove `mulf` symbol

    -   To migrate, users should access the same symbol via the `number/float32/base` namespace.

-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec): update namespace declarations

    -   To migrate, users should consult the corresponding packages containing the respective implementations to determine what is breaking. The primary breakages come from the `blas/*` namespace, where we recently refactored how top-level BLAS APIs operate on input arguments.

</section>

<!-- /.breaking-changes -->

<section class="issues">

### Closed Issues

A total of 23 issues were closed in this release:

[#5526](https://github.com/stdlib-js/stdlib/issues/5526), [#5788](https://github.com/stdlib-js/stdlib/issues/5788), [#5960](https://github.com/stdlib-js/stdlib/issues/5960), [#6053](https://github.com/stdlib-js/stdlib/issues/6053), [#6236](https://github.com/stdlib-js/stdlib/issues/6236), [#6456](https://github.com/stdlib-js/stdlib/issues/6456), [#6457](https://github.com/stdlib-js/stdlib/issues/6457), [#6473](https://github.com/stdlib-js/stdlib/issues/6473), [#6521](https://github.com/stdlib-js/stdlib/issues/6521), [#6574](https://github.com/stdlib-js/stdlib/issues/6574), [#6589](https://github.com/stdlib-js/stdlib/issues/6589), [#6604](https://github.com/stdlib-js/stdlib/issues/6604), [#6663](https://github.com/stdlib-js/stdlib/issues/6663), [#6776](https://github.com/stdlib-js/stdlib/issues/6776), [#6933](https://github.com/stdlib-js/stdlib/issues/6933), [#7114](https://github.com/stdlib-js/stdlib/issues/7114), [#7135](https://github.com/stdlib-js/stdlib/issues/7135), [#7215](https://github.com/stdlib-js/stdlib/issues/7215), [#7296](https://github.com/stdlib-js/stdlib/issues/7296), [#7395](https://github.com/stdlib-js/stdlib/issues/7395), [#7554](https://github.com/stdlib-js/stdlib/issues/7554), [#7626](https://github.com/stdlib-js/stdlib/issues/7626), [#7767](https://github.com/stdlib-js/stdlib/issues/7767)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`c42febe`](https://github.com/stdlib-js/stdlib/commit/c42febe4bb7062771a68d869eff02b40e3644f6d) - **feat:** add `ndarray/base/binary-reduce-strided1d` [(#7813)](https://github.com/stdlib-js/stdlib/pull/7813) _(by Gururaj Gurram, Athan Reines)_
-   [`cae1beb`](https://github.com/stdlib-js/stdlib/commit/cae1bebbed3f299a18e786a150625582b54763a2) - **fix:** address assignment bug _(by Athan Reines)_
-   [`f2f4cba`](https://github.com/stdlib-js/stdlib/commit/f2f4cba93e4b45064b4197f7c90f22abf8f3fb8c) - **fix:** address assignment bug _(by Athan Reines)_
-   [`7add020`](https://github.com/stdlib-js/stdlib/commit/7add0201c13e56a0381926ccfd4073c84eaf2ed4) - **test:** use standardized assertion messages and fix lint errors _(by Philipp Burckhardt)_
-   [`07f7c05`](https://github.com/stdlib-js/stdlib/commit/07f7c0522c73e6ad9505e1d45035ae439344200d) - **test:** use standardized assertion messages and fix lint errors _(by Philipp Burckhardt)_
-   [`f344466`](https://github.com/stdlib-js/stdlib/commit/f344466c6dcfb8f52d7f3148acaadd52772938da) - **test:** use .strictEqual() instead of .equal() and fix lint errors _(by Philipp Burckhardt)_
-   [`c894b66`](https://github.com/stdlib-js/stdlib/commit/c894b664661bfb87286304b24dd5a1758ae482b7) - **test:** use .strictEqual() instead of .equal() and fix lint errors _(by Philipp Burckhardt)_
-   [`77867ac`](https://github.com/stdlib-js/stdlib/commit/77867ac1767a186023f633dea30ddf860962aaed) - **docs:** remove trailing whitespace _(by Philipp Burckhardt)_
-   [`6eee151`](https://github.com/stdlib-js/stdlib/commit/6eee15199727d04e3757e66f38384e97b8a333da) - **style:** fix indentation in JSON files _(by Philipp Burckhardt)_
-   [`153c9c1`](https://github.com/stdlib-js/stdlib/commit/153c9c19e7e5bc138e18500cea598365d6df55d8) - **style:** fix indentation in JSON files _(by Philipp Burckhardt)_
-   [`09ffc3c`](https://github.com/stdlib-js/stdlib/commit/09ffc3c9d3609ca545f2e4509eb81151a10c45b1) - **docs:** fix example code in TS declaration files _(by Philipp Burckhardt)_
-   [`2c927e4`](https://github.com/stdlib-js/stdlib/commit/2c927e403da0ed8841b6ce19296262a88c9856e0) - **docs:** fix example code in TS declaration files _(by Philipp Burckhardt)_
-   [`fd9f8d2`](https://github.com/stdlib-js/stdlib/commit/fd9f8d2b7cb5d4a8c7f2a9cef97e7a0b246523f6) - **chore:** fix C lint errors [(#7769)](https://github.com/stdlib-js/stdlib/pull/7769) _(by GeoDaoyu)_
-   [`e7a0669`](https://github.com/stdlib-js/stdlib/commit/e7a0669e9a196f7d59a0937d1ee7076dbcd8256e) - **refactor:** normalize input ndarrays to ensure expected get/set methods _(by Athan Reines)_
-   [`51e49b8`](https://github.com/stdlib-js/stdlib/commit/51e49b83cdb5c0d37d9e64864d6319655518dc25) - **feat:** add `zip2views1d` to namespace _(by Athan Reines)_
-   [`36f3f0c`](https://github.com/stdlib-js/stdlib/commit/36f3f0cdf92b3a63c67c9ed79a2b9f15855d3800) - **feat:** add `ndarray/base/zip2views1d` _(by Athan Reines)_
-   [`724d6be`](https://github.com/stdlib-js/stdlib/commit/724d6be1abb00700577700905dd847f6ab98812d) - **feat:** add `array2ndarray` to namespace _(by Athan Reines)_
-   [`485fd08`](https://github.com/stdlib-js/stdlib/commit/485fd086608ee3b2457da777a8a9d6f0dcd28d94) - **feat:** add `ndarray/base/from-array` _(by Athan Reines)_
-   [`e4dd1ed`](https://github.com/stdlib-js/stdlib/commit/e4dd1ed8bf809ec7c8c34fd8c5dae03f5ed7cdf3) - **fix:** use correct name in package.json _(by Philipp Burckhardt)_
-   [`b8933b0`](https://github.com/stdlib-js/stdlib/commit/b8933b0c7fbabd051657132f49cb6eb603ad69db) - **docs:** fix return value description _(by Philipp Burckhardt)_
-   [`097c6fb`](https://github.com/stdlib-js/stdlib/commit/097c6fbd4f91e243d6c8a62f5e2abed0ee3d82df) - **chore:** fix C lint errors [(#7630)](https://github.com/stdlib-js/stdlib/pull/7630) _(by GeoDaoyu, Athan Reines)_
-   [`a937794`](https://github.com/stdlib-js/stdlib/commit/a937794d19a04066bdc0b63349283d2e0af5a350) - **docs:** update signature _(by Athan Reines)_
-   [`f5b05ea`](https://github.com/stdlib-js/stdlib/commit/f5b05eab62b82810bc657081dd4d97edf8c779a7) - **test:** add tests to `ndarray/base/some-by` [(#7305)](https://github.com/stdlib-js/stdlib/pull/7305) _(by Muhammad Haris, Athan Reines)_
-   [`e995411`](https://github.com/stdlib-js/stdlib/commit/e995411cf68fa5d1d0960ce0eff8d3dda3297cd8) - **test:** add tests to `ndarray/base/every-by` [(#7285)](https://github.com/stdlib-js/stdlib/pull/7285) _(by Muhammad Haris)_
-   [`15fa50d`](https://github.com/stdlib-js/stdlib/commit/15fa50ddc789259ce8c21fe70d85e26fbb54cf44) - **chore:** fix C lint errors [(#7568)](https://github.com/stdlib-js/stdlib/pull/7568) _(by zhanggy, Athan Reines)_
-   [`8df8042`](https://github.com/stdlib-js/stdlib/commit/8df804279a206bd3b8f2e2fd7016170836ca9381) - **fix:** add newly supported data types _(by Philipp Burckhardt)_
-   [`76ea5a8`](https://github.com/stdlib-js/stdlib/commit/76ea5a8e8d964f78aa953ae4822345d3c1e3a6ae) - **feat:** add missing tests to `ndarray/base/includes` [(#7304)](https://github.com/stdlib-js/stdlib/pull/7304) _(by Muhammad Haris, Athan Reines)_
-   [`82ef59a`](https://github.com/stdlib-js/stdlib/commit/82ef59aadd8de578d9a57780108e3ff4cb440dfe) - **bench:** ensure values are within bounds _(by Athan Reines)_
-   [`bd03989`](https://github.com/stdlib-js/stdlib/commit/bd03989d684053a787d91f33dc9f7e5963d8f478) - **fix:** add missing table _(by Athan Reines)_
-   [`f7c56f9`](https://github.com/stdlib-js/stdlib/commit/f7c56f9f6bdc0a64518d7ed0def31c9a3753b206) - **feat:** add support for `float16`, `complex32`, `int64`, and `uint64` dtypes _(by Athan Reines)_
-   [`d979fb3`](https://github.com/stdlib-js/stdlib/commit/d979fb33794fae5c14e2bbc78a77387ab8a407cb) - **feat:** add support for `float16`, `complex32`, `int64`, and `uint64` dtypes _(by Athan Reines)_
-   [`6ccfa0f`](https://github.com/stdlib-js/stdlib/commit/6ccfa0fe61914f7812d55608d963affdb4500b2d) - **feat:** add support for `float16`, `complex32`, `int64`, and `uint64` dtypes _(by Athan Reines)_
-   [`64309b8`](https://github.com/stdlib-js/stdlib/commit/64309b8af78e2bb0e1841552024626d4f403a3ab) - **feat:** add support for `float16`, `complex32`, `int64`, and `uint64` dtypes _(by Athan Reines)_
-   [`3045045`](https://github.com/stdlib-js/stdlib/commit/30450455fd87ca90d4c020faadfdb42234ff5eec) - **docs:** update dtype list _(by Athan Reines)_
-   [`aa50d4a`](https://github.com/stdlib-js/stdlib/commit/aa50d4a9df711679416201559c4a0513281b874e) - **feat:** add 16-bit data types _(by Athan Reines)_
-   [`787d8da`](https://github.com/stdlib-js/stdlib/commit/787d8da9caf55181afa9e7d198f7622660397b7d) - **feat:** add half-precision data types _(by Athan Reines)_
-   [`9a4ffa0`](https://github.com/stdlib-js/stdlib/commit/9a4ffa071ed1a891b0520088ff8e6b5815142f20) - **feat:** add half-precision complex data type _(by Athan Reines)_
-   [`6540f29`](https://github.com/stdlib-js/stdlib/commit/6540f29cc83ec1fb172986f87e14730b5973e94f) - **feat:** add support for 16-bit data types _(by Athan Reines)_
-   [`1390cf3`](https://github.com/stdlib-js/stdlib/commit/1390cf3c36b931394e470c7ba4950399b249c5f9) - **feat:** add `isDataTypeString` to namespace _(by Athan Reines)_
-   [`0ef0986`](https://github.com/stdlib-js/stdlib/commit/0ef098649fc4c4d64d8b5c06316e0793d8974651) - **feat:** add `ndarray/base/assert/is-data-type-string` _(by Athan Reines)_
-   [`da1761d`](https://github.com/stdlib-js/stdlib/commit/da1761d4f0a218f85d7db082086709662a09df44) - **docs:** update namespace table of contents [(#7491)](https://github.com/stdlib-js/stdlib/pull/7491) _(by stdlib-bot)_
-   [`97834dd`](https://github.com/stdlib-js/stdlib/commit/97834ddd6f863bd8e9b30ce10966f5db8a1f48b2) - **remove:** remove `ndarray/base/unary-reduce-strided1d-struct` _(by Athan Reines)_
-   [`4115e86`](https://github.com/stdlib-js/stdlib/commit/4115e8662062db0f878fe9cf33293fbf308d352f) - **feat:** rename alias from `unaryReduceStrided1dToStruct` to `unaryReduceStrided1dAssignStruct` _(by Athan Reines)_
-   [`03299d1`](https://github.com/stdlib-js/stdlib/commit/03299d15a76284c8e22e357794686a837faefb7e) - **feat:** add `ndarray/base/unary-reduce-strided1d-assign-struct` _(by Athan Reines)_
-   [`708d82f`](https://github.com/stdlib-js/stdlib/commit/708d82f3743eb9e6433f517e54188a597068904e) - **docs:** update namespace table of contents [(#7479)](https://github.com/stdlib-js/stdlib/pull/7479) _(by stdlib-bot)_
-   [`636e9ba`](https://github.com/stdlib-js/stdlib/commit/636e9ba626fb59ebd2abe0fb5562fd34bca253d3) - **feat:** add `unaryReduceStrided1dToStruct` to namespace _(by Athan Reines)_
-   [`b8cacc1`](https://github.com/stdlib-js/stdlib/commit/b8cacc136fceed774024cbbe0c24fc07f2675636) - **docs:** add README and fix docs _(by Athan Reines)_
-   [`c2e0a60`](https://github.com/stdlib-js/stdlib/commit/c2e0a60dfb54b54cd60a1a3c510fec38abf74c49) - **test:** add initial test stub _(by Athan Reines)_
-   [`43a64a5`](https://github.com/stdlib-js/stdlib/commit/43a64a54569efd99a3c03654f56e8e533d59dcfb) - **docs:** add examples _(by Athan Reines)_
-   [`0f1545f`](https://github.com/stdlib-js/stdlib/commit/0f1545fc6d22ad051bdae2f081f26d1d56cc9538) - **feat:** add package entry point _(by Athan Reines)_
-   [`142e477`](https://github.com/stdlib-js/stdlib/commit/142e4774ab7acbd79e76ff5f9f6e0ae47f70dae4) - **feat:** add `factory` function _(by Athan Reines)_
-   [`a752e25`](https://github.com/stdlib-js/stdlib/commit/a752e25ef1735c0253d3d3feb95dda2d145d5f1e) - **feat:** add main entry point _(by Athan Reines)_
-   [`ba8eed7`](https://github.com/stdlib-js/stdlib/commit/ba8eed78f0ffcb83ba752cf3ee2a841e9cf1a4b6) - **feat:** add remaining kernels _(by Athan Reines)_
-   [`81ce090`](https://github.com/stdlib-js/stdlib/commit/81ce090ad67eac64691e78508cfdc447a99b9fd7) - **docs:** update comment _(by Athan Reines)_
-   [`af25b04`](https://github.com/stdlib-js/stdlib/commit/af25b04f00af720af3890f850dc5ea972d3711bb) - **feat:** add 6d blocked kernel _(by Athan Reines)_
-   [`c401a2a`](https://github.com/stdlib-js/stdlib/commit/c401a2a226b4589bf127cbb5e26e131a4aa39581) - **feat:** add 6d kernel _(by Athan Reines)_
-   [`2b3907f`](https://github.com/stdlib-js/stdlib/commit/2b3907fa3f5e2653f42d6be9b3ec3786880f4833) - **feat:** add 5d blocked kernel _(by Athan Reines)_
-   [`4e16eb2`](https://github.com/stdlib-js/stdlib/commit/4e16eb22dfe611c8649d40888fa4f1404bd6d329) - **feat:** add 5d kernel _(by Athan Reines)_
-   [`266d60a`](https://github.com/stdlib-js/stdlib/commit/266d60a3ec0b6d234f231c61e196a0ba0712dc79) - **feat:** add 4d blocked kernel _(by Athan Reines)_
-   [`22397d6`](https://github.com/stdlib-js/stdlib/commit/22397d61d7a0fdb3ae820434f6c256d1bb03dd09) - **feat:** add 4d kernel _(by Athan Reines)_
-   [`9942682`](https://github.com/stdlib-js/stdlib/commit/9942682d6e7ac1ab8f3a31a5868e3f32e2273d8a) - **feat:** add 3d blocked kernel _(by Athan Reines)_
-   [`6f4f47e`](https://github.com/stdlib-js/stdlib/commit/6f4f47e6d22ce8f9ae965d82112d229e19c7ca1f) - **feat:** add 3d kernel _(by Athan Reines)_
-   [`e152a98`](https://github.com/stdlib-js/stdlib/commit/e152a988d68f191b128cf5344812f423daee8099) - **feat:** add 2d blocked kernel _(by Athan Reines)_
-   [`bd392dc`](https://github.com/stdlib-js/stdlib/commit/bd392dcc6062a41edb281b4f87b70dc5485b9491) - **feat:** add nd kernel _(by Athan Reines)_
-   [`aa126ca`](https://github.com/stdlib-js/stdlib/commit/aa126cac3c9fccd378bb3a936f9b8bcb6f580651) - **docs:** add REPL help _(by Athan Reines)_
-   [`2cc4943`](https://github.com/stdlib-js/stdlib/commit/2cc4943bf4042480bc123365f3943bced574ae17) - **docs:** fix example _(by Athan Reines)_
-   [`94d843a`](https://github.com/stdlib-js/stdlib/commit/94d843af73c57022a0ebf76e8c5316fe1493f09c) - **docs:** fix example _(by Athan Reines)_
-   [`19385a6`](https://github.com/stdlib-js/stdlib/commit/19385a661da9d3460d7328e456b5b59347c908f7) - **docs:** fix example _(by Athan Reines)_
-   [`c90080b`](https://github.com/stdlib-js/stdlib/commit/c90080b29f28aabee615d9f72a13c78cc6581436) - **docs:** fix example _(by Athan Reines)_
-   [`f628312`](https://github.com/stdlib-js/stdlib/commit/f628312bf9eada1a982b2563d3aa65908e29a476) - **docs:** fix example _(by Athan Reines)_
-   [`c4b89f1`](https://github.com/stdlib-js/stdlib/commit/c4b89f114fba9a82c26d0e1610784fc2113f6c5e) - **refactor:** add function to resolve a reshape strategy _(by Athan Reines)_
-   [`6de44d2`](https://github.com/stdlib-js/stdlib/commit/6de44d2a564e2f01c974cf11c65eff0bba624083) - **refactor:** add function to set view offsets _(by Athan Reines)_
-   [`e86640c`](https://github.com/stdlib-js/stdlib/commit/e86640cfc69ab81fb3c9f21363cf6b695a69181f) - **refactor:** add function to resolve offsets _(by Athan Reines)_
-   [`ceae67b`](https://github.com/stdlib-js/stdlib/commit/ceae67bbc4cb19fdc314ac6cc301fb37613730aa) - **refactor:** add function to initialize array views _(by Athan Reines)_
-   [`3864776`](https://github.com/stdlib-js/stdlib/commit/38647769542d8a285c56f95bca47b5a528b45323) - **refactor:** add function to increment offsets _(by Athan Reines)_
-   [`4d30065`](https://github.com/stdlib-js/stdlib/commit/4d3006542bd1526d173c1d56833249b6a000bd62) - **feat:** add 2d kernel _(by Athan Reines)_
-   [`f65a6ef`](https://github.com/stdlib-js/stdlib/commit/f65a6ef86b94fee9ba3ae0e7c5848002c6a32c56) - **feat:** add 1d kernel _(by Athan Reines)_
-   [`c9b5f5e`](https://github.com/stdlib-js/stdlib/commit/c9b5f5ecac19ea4602086a9f7dbc9c34938fb13d) - **feat:** add 0d kernel _(by Athan Reines)_
-   [`6bc3cd0`](https://github.com/stdlib-js/stdlib/commit/6bc3cd01d5760daa41777a070aae6a9d6b476d44) - **docs:** update examples _(by Athan Reines)_
-   [`b1f7e33`](https://github.com/stdlib-js/stdlib/commit/b1f7e33277d00292ca5b45de636eaf80b3d45c22) - **feat:** add `ndarraylike2scalar` to namespace _(by Athan Reines)_
-   [`7a8bc40`](https://github.com/stdlib-js/stdlib/commit/7a8bc400fc2e1dd6a5edabc750bb75f4f665c041) - **feat:** add `ndarray/base/ndarraylike2scalar` _(by Athan Reines)_
-   [`1bb671f`](https://github.com/stdlib-js/stdlib/commit/1bb671f66c75cf8ec48146394fe2756831937853) - **refactor:** relax dtype type _(by Athan Reines)_
-   [`e6a8b55`](https://github.com/stdlib-js/stdlib/commit/e6a8b554a64663970ed6f56b16532222543ddefd) - **refactor:** relax dtype type _(by Athan Reines)_
-   [`b479fcf`](https://github.com/stdlib-js/stdlib/commit/b479fcfb90c9c9cd56cc0908b2a60a5302f1710f) - **test:** add missing tests to `ndarray/base/every` [(#7235)](https://github.com/stdlib-js/stdlib/pull/7235) _(by Muhammad Haris)_
-   [`3f4be91`](https://github.com/stdlib-js/stdlib/commit/3f4be91fd9025e696b72b5159fee981f47937c7f) - **docs:** update namespace table of contents [(#7433)](https://github.com/stdlib-js/stdlib/pull/7433) _(by stdlib-bot, Philipp Burckhardt)_
-   [`eac188f`](https://github.com/stdlib-js/stdlib/commit/eac188f4def9fa545e9e0cfcd5731a66337fcd1a) - **feat:** add support for struct data types _(by Athan Reines)_
-   [`99ecc69`](https://github.com/stdlib-js/stdlib/commit/99ecc6907e9c26dabe4dd8e8dfb3b08d10d622c3) - **feat:** add `isStructDataType` to namespace _(by Athan Reines)_
-   [`d20a2ea`](https://github.com/stdlib-js/stdlib/commit/d20a2ea2cba39ea485abb500861a1fdc2088a36c) - **feat:** add `ndarray/base/assert/is-struct-data-type` _(by Athan Reines)_
-   [`599c41f`](https://github.com/stdlib-js/stdlib/commit/599c41f5fb2ec89c381b7902319b779be8cc6bd5) - **docs:** remove extra empty lines [(#7405)](https://github.com/stdlib-js/stdlib/pull/7405) _(by stdlib-bot)_
-   [`3bc4c9f`](https://github.com/stdlib-js/stdlib/commit/3bc4c9f1bf064e7d07f3b2f62d8d0c3c1a305c05) - **chore:** fix C lint errors [(#7397)](https://github.com/stdlib-js/stdlib/pull/7397) _(by Lokesh Ranjan)_
-   [`c68bdbf`](https://github.com/stdlib-js/stdlib/commit/c68bdbf98a4bb5a85cc6f04c26bc43b49b3218b7) - **chore:** fix EditorConfig lint errors [(#7310)](https://github.com/stdlib-js/stdlib/pull/7310) _(by Deepak Singh)_
-   [`1782090`](https://github.com/stdlib-js/stdlib/commit/17820909290d01df1ee44cc370d18e74d76291d9) - **refactor:** update paths _(by Gururaj Gurram)_
-   [`3e432af`](https://github.com/stdlib-js/stdlib/commit/3e432af9104dae7dab407d3b8df14ae6c7f78310) - **chore:** fix EditorConfig lint errors [(#7226)](https://github.com/stdlib-js/stdlib/pull/7226) _(by Deepak Singh)_
-   [`4833ce6`](https://github.com/stdlib-js/stdlib/commit/4833ce619a3e26e217f6ae5db96fb3c6b3e4a604) - **docs:** update namespace table of contents [(#7243)](https://github.com/stdlib-js/stdlib/pull/7243) _(by stdlib-bot)_
-   [`71f1df4`](https://github.com/stdlib-js/stdlib/commit/71f1df4e7a7c70aa99e3ea52aaabaafa6d033878) - **docs:** update examples _(by Athan Reines)_
-   [`9b376ef`](https://github.com/stdlib-js/stdlib/commit/9b376effa2bcc564e59814df6bb609b40370c303) - **docs:** update examples _(by Athan Reines)_
-   [`da7f3a3`](https://github.com/stdlib-js/stdlib/commit/da7f3a3223a6f8cef6847d05ddc059825d93dbbd) - **docs:** fix require path _(by Athan Reines)_
-   [`9a30157`](https://github.com/stdlib-js/stdlib/commit/9a3015754f96452f5f205d91338bbc92def20249) - **feat:** add `unaryReduceStrided1dDispatchByFactory` to namespace _(by Athan Reines)_
-   [`50ebfa6`](https://github.com/stdlib-js/stdlib/commit/50ebfa6340bddbb7627195e27bdf7ece3a6f1198) - **feat:** add `unaryReduceStrided1dDispatchBy` to namespace _(by Athan Reines)_
-   [`64103e2`](https://github.com/stdlib-js/stdlib/commit/64103e22a2cf0fcad5914d53885d09e311fef6ee) - **feat:** add `ndarray/base/unary-reduce-strided1d-dispatch-by-factory` _(by Athan Reines)_
-   [`5b938ee`](https://github.com/stdlib-js/stdlib/commit/5b938eee513bfe9b1859cb2875aaed8d787daf74) - **docs:** update description _(by Athan Reines)_
-   [`34ed9af`](https://github.com/stdlib-js/stdlib/commit/34ed9af63e302a5f4a759c7ef9b4f048b3ef89d4) - **feat:** add `ndarray/base/unary-reduce-strided1d-dispatch-by` _(by Athan Reines)_
-   [`970b3be`](https://github.com/stdlib-js/stdlib/commit/970b3be65917ec995e5d8c0e06fbebd5870a4687) - **docs:** fix description _(by Athan Reines)_
-   [`c86cb96`](https://github.com/stdlib-js/stdlib/commit/c86cb96872dce4d7b508daf43886e10c0fedad8f) - **fix:** update require path _(by Athan Reines)_
-   [`0ddb52b`](https://github.com/stdlib-js/stdlib/commit/0ddb52b2f0719c4dce9aa2e5a7fd1d1112dae6e5) - **fix:** update require path _(by Athan Reines)_
-   [`dded8bb`](https://github.com/stdlib-js/stdlib/commit/dded8bb627d2634c2e244a9a74bc320511d66263) - **docs:** fix description _(by Athan Reines)_
-   [`03e5c54`](https://github.com/stdlib-js/stdlib/commit/03e5c54b90e538bee276484281d2e4553d7ec83e) - **docs:** update namespace table of contents [(#7233)](https://github.com/stdlib-js/stdlib/pull/7233) _(by stdlib-bot)_
-   [`2460ce8`](https://github.com/stdlib-js/stdlib/commit/2460ce82935de6512ee0979cc3b3918924af5ae1) - **feat:** add `unaryReduceStrided1dBy` to namespace _(by Athan Reines)_
-   [`b228b5e`](https://github.com/stdlib-js/stdlib/commit/b228b5e89da183b38160c6cd6f9908a07918dd09) - **feat:** add `ndarray/base/unary-reduce-strided1d-by` [(#7214)](https://github.com/stdlib-js/stdlib/pull/7214) _(by Muhammad Haris, Athan Reines)_
-   [`3f6c0ff`](https://github.com/stdlib-js/stdlib/commit/3f6c0ffd9568665b54d0547b0550b2c96505bed6) - **fix:** address increment bug _(by Athan Reines)_
-   [`4d29349`](https://github.com/stdlib-js/stdlib/commit/4d29349017e6d62d7f72aa0c3a86a24fdd83e86a) - **fix:** address increment bug _(by Athan Reines)_
-   [`d1f5820`](https://github.com/stdlib-js/stdlib/commit/d1f58208fc95174fcfce03f00df278a8190578de) - **fix:** address increment bug _(by Athan Reines)_
-   [`9a2b61d`](https://github.com/stdlib-js/stdlib/commit/9a2b61d04186d607367371e9ef345df179516692) - **docs:** update namespace table of contents [(#7187)](https://github.com/stdlib-js/stdlib/pull/7187) _(by stdlib-bot)_
-   [`495669a`](https://github.com/stdlib-js/stdlib/commit/495669aaf5064ff0043a6ceab9216a3b8c1c84f1) - **fix:** update assertion _(by Athan Reines)_
-   [`67e9602`](https://github.com/stdlib-js/stdlib/commit/67e9602131f6e714d98de70ce6809cd9d327b02f) - **feat:** add `someBy` to namespace _(by Athan Reines)_
-   [`cc66d3b`](https://github.com/stdlib-js/stdlib/commit/cc66d3b709812126709d2d6c8232ffc2dbd8b576) - **feat:** add `ndarray/some-by` [(#7145)](https://github.com/stdlib-js/stdlib/pull/7145) _(by Muhammad Haris, Athan Reines)_
-   [`b3d811d`](https://github.com/stdlib-js/stdlib/commit/b3d811d4d6ba1aed9aa1c5e012bba252c99929b6) - **refactor:** reorder expressions _(by Athan Reines)_
-   [`d76442e`](https://github.com/stdlib-js/stdlib/commit/d76442e623bf8b7e8e4d50b80e90315b84cbf771) - **refactor:** add missing assertion _(by Athan Reines)_
-   [`aec1d1b`](https://github.com/stdlib-js/stdlib/commit/aec1d1b77f2f320cf740954b3c8147b1c90aded7) - **chore:** add TODO _(by Athan Reines)_
-   [`f99ec78`](https://github.com/stdlib-js/stdlib/commit/f99ec78d011d093ea3a102371d615f636a643b0a) - **refactor:** add missing assertion _(by Athan Reines)_
-   [`e031b1b`](https://github.com/stdlib-js/stdlib/commit/e031b1b5d6c8993087b34770ae694ba11c23532a) - **docs:** fix comment _(by Athan Reines)_
-   [`bcfac3b`](https://github.com/stdlib-js/stdlib/commit/bcfac3b4e64b90de693948adfffe3658f9b99e99) - **docs:** update example _(by Athan Reines)_
-   [`dc302b7`](https://github.com/stdlib-js/stdlib/commit/dc302b712bee9871320887a4473c707512dc9196) - **test:** fix broken tests _(by Athan Reines)_
-   [`9168604`](https://github.com/stdlib-js/stdlib/commit/9168604c1138d438bee5c6856026cc36de35e705) - **refactor:** improve type specificity _(by Athan Reines)_
-   [`49952f7`](https://github.com/stdlib-js/stdlib/commit/49952f7b2fbfdad1b20108aab89a34aeab73da48) - **refactor:** improve type specificity _(by Athan Reines)_
-   [`d47c5ea`](https://github.com/stdlib-js/stdlib/commit/d47c5eab74c76573c9479de1bc7addf8a97483cb) - **docs:** update example _(by Athan Reines)_
-   [`0643a79`](https://github.com/stdlib-js/stdlib/commit/0643a7936cfa4d916eb52b0f4ad89964ceb70560) - **bench:** fix call signatures _(by Athan Reines)_
-   [`344834e`](https://github.com/stdlib-js/stdlib/commit/344834ebf6c9102b86aee2c7c45b9e60e8486576) - **refactor:** rename template parameter _(by Athan Reines)_
-   [`37070e8`](https://github.com/stdlib-js/stdlib/commit/37070e8d3748ba83f8fcbf41f5a3dc9a4f2bd2a8) - **bench:** refactor value generation _(by Athan Reines)_
-   [`2bec349`](https://github.com/stdlib-js/stdlib/commit/2bec349f607cc8fd3a4d05e6aca72c73b734c888) - **chore:** clean-up descriptions and comments _(by Athan Reines)_
-   [`0367f1d`](https://github.com/stdlib-js/stdlib/commit/0367f1d22be37c646f5a354c6c34ee3a755b3aeb) - **refactor:** fix error messages and use string interpolation _(by Athan Reines)_
-   [`f50db5b`](https://github.com/stdlib-js/stdlib/commit/f50db5b43e51607e188f38bd6fab7d0ad5098110) - **docs:** update namespace table of contents [(#7152)](https://github.com/stdlib-js/stdlib/pull/7152) _(by stdlib-bot)_
-   [`4f41317`](https://github.com/stdlib-js/stdlib/commit/4f413178393495c6fb1a25d9ebcfd90132013ea5) - **docs:** update comments _(by Athan Reines)_
-   [`63eaebc`](https://github.com/stdlib-js/stdlib/commit/63eaebc120e5588352cd7b78871eb5c1b736c9bc) - **docs:** update comment _(by Athan Reines)_
-   [`d48a363`](https://github.com/stdlib-js/stdlib/commit/d48a36343854a0d824eaa97ff49ac7e5727c7249) - **docs:** update comment _(by Athan Reines)_
-   [`64b7801`](https://github.com/stdlib-js/stdlib/commit/64b7801d3202b603b6014e0a065d0ddff2f9fce8) - **docs:** update comment _(by Athan Reines)_
-   [`77957f2`](https://github.com/stdlib-js/stdlib/commit/77957f2a9bb3d815b7bc92d07d3f6fdebce44f33) - **docs:** update examples _(by Athan Reines)_
-   [`e05819a`](https://github.com/stdlib-js/stdlib/commit/e05819abfe0fbf982469653a85add02159e8b122) - **feat:** add `someBy` to namespace _(by Athan Reines)_
-   [`350203f`](https://github.com/stdlib-js/stdlib/commit/350203f7cb6419700b7b07e558b677fb177828f8) - **feat:** add `ndarray/base/some-by` [(#7087)](https://github.com/stdlib-js/stdlib/pull/7087) _(by Muhammad Haris, Athan Reines)_
-   [`b933a8d`](https://github.com/stdlib-js/stdlib/commit/b933a8d4d5176d89e9efe541a65431275011a477) - **feat:** add `countIf` to namespace _(by Athan Reines)_
-   [`be08665`](https://github.com/stdlib-js/stdlib/commit/be08665312b7e55f04365176a4f6ea75aad8c70d) - **style:** enable lint rule _(by Athan Reines)_
-   [`d9244bc`](https://github.com/stdlib-js/stdlib/commit/d9244bc1788da997f3c7029291dc19ba1116f0cc) - **docs:** update examples _(by Athan Reines)_
-   [`f425761`](https://github.com/stdlib-js/stdlib/commit/f425761ec069b02489419f9982cc3f6f83799c53) - **docs:** update comment _(by Athan Reines)_
-   [`07508fb`](https://github.com/stdlib-js/stdlib/commit/07508fb8b65cdc3b48410eb7e49381e8664eaf7d) - **docs:** update comment _(by Athan Reines)_
-   [`590e26e`](https://github.com/stdlib-js/stdlib/commit/590e26e8ac570a5053220ac3dcc44c22b85c3d1b) - **docs:** update examples _(by Athan Reines)_
-   [`fcd6519`](https://github.com/stdlib-js/stdlib/commit/fcd6519615725f27183826568c4364b9ef47d073) - **docs:** update examples _(by Athan Reines)_
-   [`c2369c2`](https://github.com/stdlib-js/stdlib/commit/c2369c2800eb0d8a3aaf6dd05ce6d31dc154398e) - **docs:** update examples _(by Athan Reines)_
-   [`a1a33a8`](https://github.com/stdlib-js/stdlib/commit/a1a33a86b1276e0dab105dfea158f7bc1e36c756) - **docs:** update examples _(by Athan Reines)_
-   [`b2f3ce6`](https://github.com/stdlib-js/stdlib/commit/b2f3ce632558927b4a7b7c1931dd7e838462e8d6) - **docs:** update examples _(by Athan Reines)_
-   [`4e85371`](https://github.com/stdlib-js/stdlib/commit/4e853712ccdbcce3faf40291446fee3f9cfb3d7f) - **feat:** add `ndarray/count-if` _(by Athan Reines)_
-   [`02934dd`](https://github.com/stdlib-js/stdlib/commit/02934ddb2c30d40c07f4a8de4c7ef8e83b8c6757) - **docs:** update comment _(by Athan Reines)_
-   [`b98ce6e`](https://github.com/stdlib-js/stdlib/commit/b98ce6ed7551ce3232474ea17a31693528a56bca) - **docs:** fix note _(by Athan Reines)_
-   [`4049106`](https://github.com/stdlib-js/stdlib/commit/40491061117827e6d9ce80b60c73fd3cc0859bb6) - **feat:** add `countFalsy` to namespace _(by Athan Reines)_
-   [`ef3824d`](https://github.com/stdlib-js/stdlib/commit/ef3824dbdf18a2c7b3b5b27fa1fa395f7bf5928c) - **feat:** add `ndarray/count-falsy` _(by Athan Reines)_
-   [`dd4efd1`](https://github.com/stdlib-js/stdlib/commit/dd4efd1b69de5ef91139000a1dfd70f35a75ed74) - **feat:** add `countTruthy` to namespace _(by Athan Reines)_
-   [`328b07e`](https://github.com/stdlib-js/stdlib/commit/328b07ed9a9ceb43694b093e9befd2e76bae6cfd) - **feat:** add `ndarray/count-truthy` _(by Athan Reines)_
-   [`ee2b159`](https://github.com/stdlib-js/stdlib/commit/ee2b159ed8a4f1396f8ca0b66f39d6d69326ac9a) - **feat:** add `countIf` to namespace _(by Athan Reines)_
-   [`e1f67f1`](https://github.com/stdlib-js/stdlib/commit/e1f67f1a48d2b596ea19b2dd8433d67a122cc0fc) - **feat:** add `ndarray/base/count-if` _(by Athan Reines)_
-   [`a5f516c`](https://github.com/stdlib-js/stdlib/commit/a5f516c96d479568dca5099e24fe709977d3ec5b) - **chore:** fix EditorConfig lint errors [(#7137)](https://github.com/stdlib-js/stdlib/pull/7137) _(by Karan Vasudevamurthy)_
-   [`7615f51`](https://github.com/stdlib-js/stdlib/commit/7615f51e363ddd06950c778d49abc2c60308fa61) - **docs:** update namespace table of contents [(#7139)](https://github.com/stdlib-js/stdlib/pull/7139) _(by stdlib-bot)_
-   [`385ab25`](https://github.com/stdlib-js/stdlib/commit/385ab256cd1a74c103ed333727946183f9bf723c) - **chore:** fix EditorConfig lint errors [(#7118)](https://github.com/stdlib-js/stdlib/pull/7118) _(by Tushar Bhardwaj, Athan Reines, stdlib-bot)_
-   [`fe062d3`](https://github.com/stdlib-js/stdlib/commit/fe062d37148ed8c6f474fafb36904f01b5903156) - **feat:** add `countFalsy` to namespace _(by Athan Reines)_
-   [`6df26cb`](https://github.com/stdlib-js/stdlib/commit/6df26cb20720cc4d566f5667debe8c60cf706f8f) - **feat:** add `ndarray/base/count-falsy` _(by Athan Reines)_
-   [`d7ff4d9`](https://github.com/stdlib-js/stdlib/commit/d7ff4d95ef2cc594f26213c09c8930620f3ca8f0) - **docs:** update namespace table of contents [(#7116)](https://github.com/stdlib-js/stdlib/pull/7116) _(by stdlib-bot)_
-   [`4bbd8c3`](https://github.com/stdlib-js/stdlib/commit/4bbd8c3b489a7a170d00f1330051b526407f9194) - **docs:** update example _(by Athan Reines)_
-   [`cad5279`](https://github.com/stdlib-js/stdlib/commit/cad5279c2af21abc508e712ae31eb57a32a0e8bb) - **docs:** fix example _(by Athan Reines)_
-   [`e84dc6e`](https://github.com/stdlib-js/stdlib/commit/e84dc6e0b895e5b9247ffd8606e635d1f6867a20) - **style:** fix alignment _(by Athan Reines)_
-   [`737ae65`](https://github.com/stdlib-js/stdlib/commit/737ae657cece40efaf246fdc2a33e84bfa314fe3) - **feat:** add `unaryReduceSubarrayBy` to namespace _(by Athan Reines)_
-   [`6c567f0`](https://github.com/stdlib-js/stdlib/commit/6c567f0b8ae1c0987f30b08dc032dd0af800793d) - **feat:** add `countTruthy` to namespace _(by Athan Reines)_
-   [`63796c4`](https://github.com/stdlib-js/stdlib/commit/63796c4bc3bc0d3cef746b97ea92e286abbc78c7) - **feat:** add `ndarray/base/count-truthy` _(by Athan Reines)_
-   [`b00bebf`](https://github.com/stdlib-js/stdlib/commit/b00bebf69833c3e4de2c280472c166fc79cfaf44) - **docs:** fix examples _(by Athan Reines)_
-   [`7ecedc0`](https://github.com/stdlib-js/stdlib/commit/7ecedc01b6a480da62a659feb509c6f18c6d9d45) - **chore:** clean-up _(by Athan Reines)_
-   [`92cf47b`](https://github.com/stdlib-js/stdlib/commit/92cf47b704f75a6a0074d4ee3b5f65de0dd411b2) - **bench:** fix typo in filename _(by Athan Reines)_
-   [`11e6c60`](https://github.com/stdlib-js/stdlib/commit/11e6c608e47109a8576613435dc1c43ea2d9dbc8) - **bench:** fix typo in filename _(by Athan Reines)_
-   [`ff2a8c6`](https://github.com/stdlib-js/stdlib/commit/ff2a8c6de98066b13d14ee4a771f68fa8f99f586) - **docs:** update comment _(by Athan Reines)_
-   [`388d79e`](https://github.com/stdlib-js/stdlib/commit/388d79e99d05a7de27b193de72f46618ccba1241) - **docs:** update comment _(by Athan Reines)_
-   [`19164e7`](https://github.com/stdlib-js/stdlib/commit/19164e7d0f3cad9e5f3090ea12db115fda8628e9) - **docs:** update example _(by Athan Reines)_
-   [`34f6c88`](https://github.com/stdlib-js/stdlib/commit/34f6c88797418bf412b222450bd1659e43b7a7c1) - **docs:** update namespace table of contents [(#7105)](https://github.com/stdlib-js/stdlib/pull/7105) _(by stdlib-bot)_
-   [`138cc36`](https://github.com/stdlib-js/stdlib/commit/138cc36c180a676fc4ae8b675d77d58db8f02f26) - **feat:** add `Complex64Vector` to namespace _(by Athan Reines)_
-   [`50dac78`](https://github.com/stdlib-js/stdlib/commit/50dac7824c40e9cf5c10b0ee576f44fba8b191a5) - **feat:** add `ndarray/vector/complex64` _(by Athan Reines)_
-   [`0431d21`](https://github.com/stdlib-js/stdlib/commit/0431d211467c0ebfa57547a5da66f598870bbf33) - **feat:** add `Complex128Vector` to namespace _(by Athan Reines)_
-   [`0183f29`](https://github.com/stdlib-js/stdlib/commit/0183f293bf9a127899492ad80a87394e8b18afc1) - **feat:** add `ndarray/vector/complex128` _(by Athan Reines)_
-   [`cc20b2d`](https://github.com/stdlib-js/stdlib/commit/cc20b2de446f10e06216b84bdd5457ef473ffdd6) - **refactor:** update require path _(by Athan Reines)_
-   [`5149a37`](https://github.com/stdlib-js/stdlib/commit/5149a3789bf321b18b1636b838ab086175b6c2ca) - **feat:** add `ndarray/base/unary-reduce-subarray-by` [(#7008)](https://github.com/stdlib-js/stdlib/pull/7008) _(by Muhammad Haris, Athan Reines)_
-   [`89d9dc3`](https://github.com/stdlib-js/stdlib/commit/89d9dc316985aa3c194222afbf8146e58ff6d761) - **docs:** update namespace table of contents [(#7046)](https://github.com/stdlib-js/stdlib/pull/7046) _(by stdlib-bot)_
-   [`a300862`](https://github.com/stdlib-js/stdlib/commit/a300862d4f05d4d8bd85f1e235db93ad5d35a767) - **fix:** address increment bugs _(by Athan Reines)_
-   [`fab9873`](https://github.com/stdlib-js/stdlib/commit/fab9873a907807195f2f6673b5b97f09e383bd69) - **fix:** address index bug _(by Athan Reines)_
-   [`c8ed1f9`](https://github.com/stdlib-js/stdlib/commit/c8ed1f99772d36d99cf0d836a506c3c83f58c02c) - **docs:** fix description _(by Athan Reines)_
-   [`30e17f4`](https://github.com/stdlib-js/stdlib/commit/30e17f4a8ea63e7cad77946fc946a7c587781bb9) - **docs:** update descriptions _(by Athan Reines)_
-   [`a8d1b40`](https://github.com/stdlib-js/stdlib/commit/a8d1b40510aee43e3ce0e6e663ee79f149429390) - **test:** fix require path _(by Athan Reines)_
-   [`d002f3a`](https://github.com/stdlib-js/stdlib/commit/d002f3ae7d4f785a0d0d8c4c9f3b383776deea15) - **bench:** fix condition _(by Athan Reines)_
-   [`468d6f7`](https://github.com/stdlib-js/stdlib/commit/468d6f7247367a32f73738a0cf7dfda28126eac2) - **bench:** fix assertion _(by Athan Reines)_
-   [`54dc71e`](https://github.com/stdlib-js/stdlib/commit/54dc71e0ff4a2b5661d48a1bdee584507f66373f) - **feat:** add `every` and `includes` to namespace _(by Athan Reines)_
-   [`2349a6e`](https://github.com/stdlib-js/stdlib/commit/2349a6edf849f8f7093a77bbdeb2fdd7d9955f89) - **feat:** add `vector` to namespace _(by Athan Reines)_
-   [`1ab9f58`](https://github.com/stdlib-js/stdlib/commit/1ab9f58bcd109f19afd9ab08212d69bfe9d32bbe) - **feat:** add `ndarray/vector` namespace _(by Athan Reines)_
-   [`c08c18d`](https://github.com/stdlib-js/stdlib/commit/c08c18d74faca63932755275c9f9bc08742f1fe6) - **feat:** add `ndarray/vector/bool` _(by Athan Reines)_
-   [`34aa089`](https://github.com/stdlib-js/stdlib/commit/34aa08963d038cffbee304f6142f10dadfbf3d74) - **feat:** add `ndarray/vector/uint8c` _(by Athan Reines)_
-   [`1456ea8`](https://github.com/stdlib-js/stdlib/commit/1456ea8d4f5a3519811261ebbaf4760600a4bc6e) - **feat:** add `ndarray/vector/uint8` _(by Athan Reines)_
-   [`f9923b3`](https://github.com/stdlib-js/stdlib/commit/f9923b3b975f3fe14767d24dbd696bc704da762c) - **feat:** add `ndarray/vector/uint16` _(by Athan Reines)_
-   [`b7c276b`](https://github.com/stdlib-js/stdlib/commit/b7c276b5d4e32dd0409afb946319d4581b8f6ff1) - **feat:** add `ndarray/vector/uint32` _(by Athan Reines)_
-   [`3e6bb9d`](https://github.com/stdlib-js/stdlib/commit/3e6bb9d2c5d0977b0e101d89d6db13772aabb17c) - **feat:** add `ndarray/vector/int8` _(by Athan Reines)_
-   [`ea3f7af`](https://github.com/stdlib-js/stdlib/commit/ea3f7afc1eed9b9d6c7964b8e984dd1e205bcd24) - **feat:** add `ndarray/vector/int16` _(by Athan Reines)_
-   [`031fecf`](https://github.com/stdlib-js/stdlib/commit/031fecf3ade6e37cf1cda50ea30303cd922310b3) - **feat:** add `ndarray/vector/int32` _(by Athan Reines)_
-   [`2501de9`](https://github.com/stdlib-js/stdlib/commit/2501de9d60e1239dc54568fff1c6ecdf2770e3fa) - **feat:** add `ndarray/vector/float64` _(by Athan Reines)_
-   [`f75732b`](https://github.com/stdlib-js/stdlib/commit/f75732ba5e3117ae0f9336722834307243eca2be) - **docs:** update example _(by Athan Reines)_
-   [`5662f92`](https://github.com/stdlib-js/stdlib/commit/5662f920d833b3033ac24e38ef2a13b7506f7495) - **docs:** update example _(by Athan Reines)_
-   [`b599489`](https://github.com/stdlib-js/stdlib/commit/b5994896400e31d3850ba003a2eb016142bf6c9a) - **docs:** fix signature _(by Athan Reines)_
-   [`e8064cd`](https://github.com/stdlib-js/stdlib/commit/e8064cdc716fc9381a143620ef291722dba49228) - **feat:** add `ndarray/vector/float32` _(by Athan Reines)_
-   [`fbc6b85`](https://github.com/stdlib-js/stdlib/commit/fbc6b852fae5eb77c36e04208c4aad574d146459) - **docs:** fix comments _(by Athan Reines)_
-   [`5471fc4`](https://github.com/stdlib-js/stdlib/commit/5471fc4ca1505d407bc2f0cb13cea076c73341c5) - **docs:** fix descriptions _(by Athan Reines)_
-   [`7f4b555`](https://github.com/stdlib-js/stdlib/commit/7f4b555601081338bacc307c2a752ba9cd69107e) - **chore:** fix copyright year _(by Athan Reines)_
-   [`6ce1c71`](https://github.com/stdlib-js/stdlib/commit/6ce1c716ea44aded1b140b1a897fd866774b22d8) - **docs:** update examples _(by Athan Reines)_
-   [`384bc19`](https://github.com/stdlib-js/stdlib/commit/384bc19cdc6d91ddd4af97c2b1e5a4a0dac2b112) - **docs:** update examples _(by Athan Reines)_
-   [`aa0af9e`](https://github.com/stdlib-js/stdlib/commit/aa0af9ec8401bad45f0dcafaeea4b38fd0f60e16) - **chore:** add TODO _(by Athan Reines)_
-   [`30e2005`](https://github.com/stdlib-js/stdlib/commit/30e2005330c027b33d1386afacdacc50b3a46c77) - **test:** add tests _(by Athan Reines)_
-   [`63756c5`](https://github.com/stdlib-js/stdlib/commit/63756c5110a952dc6f7d874badb99f125312902a) - **test:** add tests _(by Athan Reines)_
-   [`01544ae`](https://github.com/stdlib-js/stdlib/commit/01544aef20deb6e2b8c6826462cd29916ce3e45b) - **test:** add tests _(by Athan Reines)_
-   [`b2cefbe`](https://github.com/stdlib-js/stdlib/commit/b2cefbe2b2192cb705b85c43ffac2f57ca782c42) - **feat:** add custom `valueOf` method _(by Athan Reines)_
-   [`848f226`](https://github.com/stdlib-js/stdlib/commit/848f226d45aad2d627453c8306ae192c75338ac3) - **feat:** add `factory` method _(by Athan Reines)_
-   [`d30fed0`](https://github.com/stdlib-js/stdlib/commit/d30fed0b3516e362f957aa15d1521b3b3fe6cefd) - **docs:** update examples _(by Athan Reines)_
-   [`916b907`](https://github.com/stdlib-js/stdlib/commit/916b9073d6cf82262233e835f9bbbaca26d685f0) - **feat:** add `ndarray/vector/ctor` _(by Athan Reines)_
-   [`9b8f3a8`](https://github.com/stdlib-js/stdlib/commit/9b8f3a8e51b449803b683c7bf394d498de479a5f) - **docs:** update namespace table of contents [(#6996)](https://github.com/stdlib-js/stdlib/pull/6996) _(by stdlib-bot)_
-   [`603ba97`](https://github.com/stdlib-js/stdlib/commit/603ba974c88f33cb73ba53c69435183ca535ded9) - **docs:** fix parameter names _(by Athan Reines)_
-   [`dcfb648`](https://github.com/stdlib-js/stdlib/commit/dcfb6488ac9624b23ec546f7c54a2da0156c6695) - **refactor:** use generalized utility for resolving loop data _(by Athan Reines)_
-   [`d8fe0d8`](https://github.com/stdlib-js/stdlib/commit/d8fe0d87591079990591bd5727abdabaa81cd265) - **bench:** update value generation and update examples _(by Athan Reines)_
-   [`9b0d852`](https://github.com/stdlib-js/stdlib/commit/9b0d8520418c2788d20d446b6a39471b6393a787) - **feat:** add `loopOrder` to namespace _(by Athan Reines)_
-   [`bdc9110`](https://github.com/stdlib-js/stdlib/commit/bdc91105259200e3ebb60aea16e918718301ce4b) - **feat:** add `ndarray/base/loop-interchange-order` _(by Athan Reines)_
-   [`09c158e`](https://github.com/stdlib-js/stdlib/commit/09c158e65824e081b5abef0454122e6c63a05586) - **docs:** update namespace table of contents [(#6987)](https://github.com/stdlib-js/stdlib/pull/6987) _(by stdlib-bot)_
-   [`c1805ef`](https://github.com/stdlib-js/stdlib/commit/c1805eface6e530b09bfc77c800b249e6b321b2c) - **test:** fix broken tests _(by Athan Reines)_
-   [`7ac3d7d`](https://github.com/stdlib-js/stdlib/commit/7ac3d7d0dbf2202eb1b1494ea91825fb46725df4) - **test:** remove console statements _(by Athan Reines)_
-   [`f3198d2`](https://github.com/stdlib-js/stdlib/commit/f3198d2c29a5832a62b5438ea293af2d84006151) - **temp:** add console statements to debug on CI _(by Athan Reines)_
-   [`a4f78ea`](https://github.com/stdlib-js/stdlib/commit/a4f78ea79e24bab68ce4f3381c8bc9fb685bd002) - **fix:** account for loop tiling when generating list of indices _(by Athan Reines)_
-   [`e9070c8`](https://github.com/stdlib-js/stdlib/commit/e9070c86a713054a38eb6ae7ec330049c20b961c) - **docs:** update copy _(by Athan Reines)_
-   [`7836149`](https://github.com/stdlib-js/stdlib/commit/78361499b7549bcca311892843d538d65c54a22d) - **docs:** add note and update copy _(by Athan Reines)_
-   [`65748be`](https://github.com/stdlib-js/stdlib/commit/65748bea9a961babc95ff0f63b08f785097c79f9) - **docs:** fix parameter name _(by Athan Reines)_
-   [`c67eb9f`](https://github.com/stdlib-js/stdlib/commit/c67eb9fb021a73f3417d80bf387f665e738b7135) - **docs:** update copy _(by Athan Reines)_
-   [`417fdb8`](https://github.com/stdlib-js/stdlib/commit/417fdb8670894d84425db01e10a4e3910dca0d7b) - **docs:** add notes _(by Athan Reines)_
-   [`99be29d`](https://github.com/stdlib-js/stdlib/commit/99be29d87a59460302f43792e0f24b4dbe128dab) - **fix:** account for loop tiling when generating list of indices _(by Athan Reines)_
-   [`9a1ee35`](https://github.com/stdlib-js/stdlib/commit/9a1ee35193c5c474720c58f34d9584f41108bc5c) - **fix:** account for loop tiling when generating list of indices _(by Athan Reines)_
-   [`9dbc485`](https://github.com/stdlib-js/stdlib/commit/9dbc4858e55015a26440f370643f322f4a63e41e) - **docs:** update namespace table of contents [(#6980)](https://github.com/stdlib-js/stdlib/pull/6980) _(by stdlib-bot)_
-   [`26d65cd`](https://github.com/stdlib-js/stdlib/commit/26d65cd0dc57249b45b35032a3c251e715a9b8ce) - **refactor:** use generalized utility _(by Athan Reines)_
-   [`b51882d`](https://github.com/stdlib-js/stdlib/commit/b51882d4f8acb7af8e93109c3b76ab36fcbb3b76) - **refactor:** use generalized utility _(by Athan Reines)_
-   [`e5ddc80`](https://github.com/stdlib-js/stdlib/commit/e5ddc80ad0e60653c61dfc8847ecc65dff6c69f2) - **feat:** add `outputDataType` to namespace _(by Athan Reines)_
-   [`5e7af03`](https://github.com/stdlib-js/stdlib/commit/5e7af03b8d27240b12f4fbf7bbad86ff57b64917) - **feat:** add `ndarray/base/output-dtype` _(by Athan Reines)_
-   [`1f3ebc8`](https://github.com/stdlib-js/stdlib/commit/1f3ebc857c1c4b98d4681867b0d738b572631bcd) - **feat:** add `promoteDataTypes` to namespace _(by Athan Reines)_
-   [`ec51b4f`](https://github.com/stdlib-js/stdlib/commit/ec51b4f38e6bb9a1ad1d6ee7a2d35d0516312e48) - **feat:** add `ndarray/base/promote-dtypes` _(by Athan Reines)_
-   [`ad9966a`](https://github.com/stdlib-js/stdlib/commit/ad9966a5d6c560c6a4b2c785f2caafdd472b8399) - **refactor:** reuse existing logic by building on `ndarray/base/unary-output-dtype` _(by Athan Reines)_
-   [`d2d6c1d`](https://github.com/stdlib-js/stdlib/commit/d2d6c1daa1671c5e174e815640efffe63c7f528f) - **refactor:** reduce code complexity by reducing branching logic _(by Athan Reines)_
-   [`0973f6f`](https://github.com/stdlib-js/stdlib/commit/0973f6fd8117253edf90c856b82c97b4e3a9181b) - **docs:** update namespace table of contents [(#6968)](https://github.com/stdlib-js/stdlib/pull/6968) _(by stdlib-bot)_
-   [`556e832`](https://github.com/stdlib-js/stdlib/commit/556e832729f770a48692fc796fb4d5c9b4b5ae34) - **feat:** add `unaryStrided1dDispatchFactory` to namespace _(by Athan Reines)_
-   [`1133bce`](https://github.com/stdlib-js/stdlib/commit/1133bceaec004d01bf20932b6334529dc7a79648) - **feat:** add `unaryStrided1dDispatch` to namespace _(by Athan Reines)_
-   [`8905452`](https://github.com/stdlib-js/stdlib/commit/890545242b456f9e6b85d744993d4e7c97cd0ae7) - **feat:** add `unaryStrided1d` to namespace _(by Athan Reines)_
-   [`5c8cd3f`](https://github.com/stdlib-js/stdlib/commit/5c8cd3f6a140e0698ff623334c05951d34ecd6c3) - **feat:** add `unaryReduceStrided1dDispatchFactory` to namespace _(by Athan Reines)_
-   [`53a52e9`](https://github.com/stdlib-js/stdlib/commit/53a52e9a773b443e13f39798746b55727053d92e) - **feat:** add `unaryReduceStrided1dDispatch` to namespace _(by Athan Reines)_
-   [`d6b451d`](https://github.com/stdlib-js/stdlib/commit/d6b451d5777547244a171595c5f09cccfa4d8dd3) - **feat:** add `unaryReduceStrided1d` to namespace _(by Athan Reines)_
-   [`3355982`](https://github.com/stdlib-js/stdlib/commit/33559820f55c0e1477017d2c09b2426f52659e1f) - **feat:** add `everyBy` to namespace _(by Athan Reines)_
-   [`afc6368`](https://github.com/stdlib-js/stdlib/commit/afc6368796cba9bbfb9a0182251212248f0edea9) - **feat:** add `binary` to namespace _(by Athan Reines)_
-   [`9501636`](https://github.com/stdlib-js/stdlib/commit/9501636c0d9198393a7aaf9691407402e80faead) - **feat:** add `binaryOutputDataType` to namespace _(by Athan Reines)_
-   [`99449d7`](https://github.com/stdlib-js/stdlib/commit/99449d7fbbd16dbea7436b75153cbdb38099d03f) - **feat:** add `ndarray/base/binary-output-dtype` _(by Athan Reines)_
-   [`48d8be1`](https://github.com/stdlib-js/stdlib/commit/48d8be17cb1fb81b2e30a0ce976391fcf622b4c3) - **test:** add tests _(by Athan Reines)_
-   [`5bb21e7`](https://github.com/stdlib-js/stdlib/commit/5bb21e71dd19df4153a9e4e10640fa74f1fb9a0a) - **test:** add tests for when strides are transposed _(by Athan Reines)_
-   [`ccb3f8e`](https://github.com/stdlib-js/stdlib/commit/ccb3f8e33a29e6a09074d8bc7e54f0a6fa88a022) - **refactor:** use base assertion utility _(by Athan Reines)_
-   [`53de942`](https://github.com/stdlib-js/stdlib/commit/53de94256d47d502f47da4af97c0dfeb6ceb086e) - **refactor:** use base assertion utility _(by Athan Reines)_
-   [`b1ed7bc`](https://github.com/stdlib-js/stdlib/commit/b1ed7bc33de9d21119087820e0002a8803d97203) - **refactor:** use base assertion utility _(by Athan Reines)_
-   [`7321e29`](https://github.com/stdlib-js/stdlib/commit/7321e294d995d496b35f24f253055190ae6a78d5) - **refactor:** use base assertion utility _(by Athan Reines)_
-   [`ed2d89f`](https://github.com/stdlib-js/stdlib/commit/ed2d89f2c0c0950bfb6fad6375296173a7aee0b9) - **refactor:** use base assertion utility _(by Athan Reines)_
-   [`f84a4f9`](https://github.com/stdlib-js/stdlib/commit/f84a4f981f22b7ac35f917941264e792f4ba854b) - **refactor:** use base assertion utility _(by Athan Reines)_
-   [`92b9956`](https://github.com/stdlib-js/stdlib/commit/92b99565374d44d5456a36871bd19a957e33a986) - **chore:** fix EditorConfig lint errors [(#6939)](https://github.com/stdlib-js/stdlib/pull/6939) _(by zhanggy)_
-   [`3d355ab`](https://github.com/stdlib-js/stdlib/commit/3d355ab124de9c965171d08aebc8d14156fb9711) - **chore:** fix meta data _(by Athan Reines)_
-   [`79338a4`](https://github.com/stdlib-js/stdlib/commit/79338a45542acc87c31fb6ad7220b8ecab4c467d) - **chore:** update meta data _(by Athan Reines)_
-   [`f328b4f`](https://github.com/stdlib-js/stdlib/commit/f328b4f3b5bc69a79761c820e56c5849c7616dee) - **docs:** add README _(by Athan Reines)_
-   [`c713f5a`](https://github.com/stdlib-js/stdlib/commit/c713f5a247329781c52833ae42b7b86b5a585637) - **bench:** add 1d and 2d benchmarks _(by Athan Reines)_
-   [`ceb856d`](https://github.com/stdlib-js/stdlib/commit/ceb856d1e079781c58f713c2163b629cf561b963) - **test:** add 2d kernel tests _(by Athan Reines)_
-   [`4901ce8`](https://github.com/stdlib-js/stdlib/commit/4901ce89f5f80c080ec2db7d7f6e7405340fec1a) - **test:** add 1d kernel tests _(by Athan Reines)_
-   [`bcf1683`](https://github.com/stdlib-js/stdlib/commit/bcf1683a583934523896b342f8a1621d3aad9e1c) - **test:** add 0d kernel tests _(by Athan Reines)_
-   [`ae2b9a3`](https://github.com/stdlib-js/stdlib/commit/ae2b9a327b74ca7bdc03996cbb77a87053d19896) - **fix:** use resolved order when computing loop variables _(by Athan Reines)_
-   [`9bc10d4`](https://github.com/stdlib-js/stdlib/commit/9bc10d4dc2b9afe6b55ca2b6e17c165e9dd2a88d) - **fix:** use resolved order when computing loop variables _(by Athan Reines)_
-   [`ccc7890`](https://github.com/stdlib-js/stdlib/commit/ccc7890aee959303e2defbc627b32f66b18535eb) - **fix:** check for row-major value _(by Athan Reines)_
-   [`d066ec9`](https://github.com/stdlib-js/stdlib/commit/d066ec94f0484e735ea8025e7c9339f248c8d450) - **fix:** check for row-major value _(by Athan Reines)_
-   [`4795826`](https://github.com/stdlib-js/stdlib/commit/47958261521f7d00ccd325cb978e55af39b9cbe0) - **fix:** check for row-major value _(by Athan Reines)_
-   [`a8bac64`](https://github.com/stdlib-js/stdlib/commit/a8bac644b23c4413a566f309b43857ad779f05cc) - **fix:** check for row-major value _(by Athan Reines)_
-   [`7583774`](https://github.com/stdlib-js/stdlib/commit/7583774f4307a69b9e364a2e60c14ee034fa02a9) - **fix:** use resolved order when computing loop variables _(by Athan Reines)_
-   [`a616f66`](https://github.com/stdlib-js/stdlib/commit/a616f66172ea9e5ea730258daff8232f38675e39) - **refactor:** avoid duplicate computation _(by Athan Reines)_
-   [`1d2c4e2`](https://github.com/stdlib-js/stdlib/commit/1d2c4e2ef621e2304c5d855c4c8b6ed2f9e9e1ad) - **refactor:** avoid duplicate computation _(by Athan Reines)_
-   [`0fb7df7`](https://github.com/stdlib-js/stdlib/commit/0fb7df7fe84102add9858f53da605a6f2e0d42a9) - **docs:** document expected properties for accessor kernels _(by Athan Reines)_
-   [`529687d`](https://github.com/stdlib-js/stdlib/commit/529687d72291fe7c2f717e24bffe55130375139d) - **refactor:** avoid duplicate computation _(by Athan Reines)_
-   [`b9e9eca`](https://github.com/stdlib-js/stdlib/commit/b9e9eca93c4611a77122090ab8e589e6ba82e47b) - **fix:** use resolved order when computing loop variables _(by Athan Reines)_
-   [`1e0917b`](https://github.com/stdlib-js/stdlib/commit/1e0917b1bba1d273d93e8fa97cc8a060661bbbf0) - **fix:** use resolved order when computing loop variables _(by Athan Reines)_
-   [`92bf1a1`](https://github.com/stdlib-js/stdlib/commit/92bf1a12b2398ec5823eb3094bdc89f88d9876a7) - **fix:** use resolved order when computing loop variables _(by Athan Reines)_
-   [`742b7ec`](https://github.com/stdlib-js/stdlib/commit/742b7ec1f60fc811148afcea78cfc36dc1018e24) - **fix:** use resolved order when computing loop variables _(by Athan Reines)_
-   [`a19b8f2`](https://github.com/stdlib-js/stdlib/commit/a19b8f2405c62dd79247ef4c3a9a1cadda1f3576) - **fix:** use resolved order when computing loop variables _(by Athan Reines)_
-   [`f7cf8ed`](https://github.com/stdlib-js/stdlib/commit/f7cf8ed8066b7b2fe18a9b9bc6ed1226eb1cc1ea) - **fix:** use resolved order when computing loop variables _(by Athan Reines)_
-   [`f10dd8c`](https://github.com/stdlib-js/stdlib/commit/f10dd8ccbd1c245467d156a1b87f5eb2ba47e0ad) - **fix:** use resolved order when computing loop variables _(by Athan Reines)_
-   [`6c09182`](https://github.com/stdlib-js/stdlib/commit/6c09182156a8a7d13e52660e278b52d9d6b0166a) - **fix:** use resolved order when computing loop variables _(by Athan Reines)_
-   [`ca6378c`](https://github.com/stdlib-js/stdlib/commit/ca6378c56d971ae1c08f162bfda933b7b2fc04cf) - **fix:** use resolved order when computing loop variables _(by Athan Reines)_
-   [`25f29f8`](https://github.com/stdlib-js/stdlib/commit/25f29f85b888fd71646902ad9cda4f5f6aa62eff) - **refactor:** use base assertion utility _(by Athan Reines)_
-   [`3088dea`](https://github.com/stdlib-js/stdlib/commit/3088deabee417ce890ccb15e87066ef11c3f2305) - **test:** fix lint errors _(by Athan Reines)_
-   [`b9d3f03`](https://github.com/stdlib-js/stdlib/commit/b9d3f03a8fc45fa0f65dc1ded1a5b40125a0a0fb) - **refactor:** use base assertion utility _(by Athan Reines)_
-   [`ab22671`](https://github.com/stdlib-js/stdlib/commit/ab2267149121cf347c5be11d7bfc7ee64e4f663a) - **fix:** use resolved order when computing loop variables _(by Athan Reines)_
-   [`18036a4`](https://github.com/stdlib-js/stdlib/commit/18036a4b73cbae2f90f5ce929645d1eb769138dc) - **fix:** use resolved order when determining increment offsets _(by Athan Reines)_
-   [`ac7d5b4`](https://github.com/stdlib-js/stdlib/commit/ac7d5b41eeefdc2a27ffeb244442c2e29feb728c) - **refactor:** use assertion utility rather than hardcoded string _(by Athan Reines)_
-   [`2464b78`](https://github.com/stdlib-js/stdlib/commit/2464b78c6e164fd048d04d13d57a3ba44707cac9) - **docs:** remove import _(by Athan Reines)_
-   [`3ce09af`](https://github.com/stdlib-js/stdlib/commit/3ce09af9819ae7dbaad178179264fc84c5db5690) - **fix:** ensure separate array instance for each memory layout _(by Athan Reines)_
-   [`974d32e`](https://github.com/stdlib-js/stdlib/commit/974d32e3dcd93a5d44360e185a8c66ebbc3e5076) - **refactor:** use base array utility _(by Athan Reines)_
-   [`3dd8cb3`](https://github.com/stdlib-js/stdlib/commit/3dd8cb379ea22c4a92d610d146cdd662d3187e27) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`2e62223`](https://github.com/stdlib-js/stdlib/commit/2e6222321d2f7e50afa459c0dc815c56ec83fdf5) - **chore:** remove directory until we have actually added benchmarks _(by Athan Reines)_
-   [`b403898`](https://github.com/stdlib-js/stdlib/commit/b403898016bc31f1331765bb5bfbcab94f0e1692) - **test:** add initial tests _(by Athan Reines)_
-   [`590a7d9`](https://github.com/stdlib-js/stdlib/commit/590a7d9fc1e57249015e425c59201fc9e5daeb0c) - **docs:** add REPL help and TypeScript declarations _(by Athan Reines)_
-   [`903ffa2`](https://github.com/stdlib-js/stdlib/commit/903ffa2ffea01672dd401cfe3c210a525c484590) - **docs:** add example _(by Athan Reines)_
-   [`7c29c2d`](https://github.com/stdlib-js/stdlib/commit/7c29c2d3aea7b8d0396a77f6781d7d76bd7adde4) - **fix:** use computed order _(by Athan Reines)_
-   [`8722299`](https://github.com/stdlib-js/stdlib/commit/8722299df603836eaf1aba2404e833f77db4ed0b) - **fix:** use computed order _(by Athan Reines)_
-   [`e0a04fe`](https://github.com/stdlib-js/stdlib/commit/e0a04fe3cbdcab5adb4529158d2ccf085fb971a6) - **fix:** use computed order _(by Athan Reines)_
-   [`3fbb654`](https://github.com/stdlib-js/stdlib/commit/3fbb6542732cd06fc8d54b9bea5734261ab7c871) - **fix:** use computed order _(by Athan Reines)_
-   [`5fcde08`](https://github.com/stdlib-js/stdlib/commit/5fcde08f9cce69278aa50f7aff8c17d5222df0af) - **style:** disable lint rule _(by Athan Reines)_
-   [`aa86262`](https://github.com/stdlib-js/stdlib/commit/aa862629c2826d5f0b9e69c64264eea89ea1de7d) - **fix:** use computed order _(by Athan Reines)_
-   [`71e6a7f`](https://github.com/stdlib-js/stdlib/commit/71e6a7f82bcc08d20d09772ba0e99c825be191bf) - **fix:** use computed order _(by Athan Reines)_
-   [`23f47b4`](https://github.com/stdlib-js/stdlib/commit/23f47b4ef44cb8bbdc7009c403630d003af9c0a2) - **fix:** use computed order _(by Athan Reines)_
-   [`1473377`](https://github.com/stdlib-js/stdlib/commit/1473377ac4faecd7ff1448fb7972d851c3e8b2a8) - **fix:** use computed order _(by Athan Reines)_
-   [`713a42f`](https://github.com/stdlib-js/stdlib/commit/713a42f2252e401fef5e90ec3111a26ef8d14aa5) - **chore:** add package meta data _(by Athan Reines)_
-   [`a95ac02`](https://github.com/stdlib-js/stdlib/commit/a95ac027b1e359e28c27929db51793cbb297cf52) - **feat:** add package entry point _(by Athan Reines)_
-   [`5358d7b`](https://github.com/stdlib-js/stdlib/commit/5358d7b9cd327ebbfa3cac61af5cd5684132ea88) - **feat:** add nd accessors kernel _(by Athan Reines)_
-   [`9d4bbdf`](https://github.com/stdlib-js/stdlib/commit/9d4bbdfd17d977eb6bc1429abd760abe9d436210) - **feat:** add 3d blocked accessors kernel _(by Athan Reines)_
-   [`8e5606b`](https://github.com/stdlib-js/stdlib/commit/8e5606b09d9969c198b4bf9f7aedd14eb003ff93) - **feat:** add 4d blocked accessors kernel _(by Athan Reines)_
-   [`83e4b14`](https://github.com/stdlib-js/stdlib/commit/83e4b14020459604d4ebc4ae8ff45c7ce24bd2f9) - **feat:** add 5d blocked accessors kernel _(by Athan Reines)_
-   [`b00bd71`](https://github.com/stdlib-js/stdlib/commit/b00bd7132b46a30f7650a883220006e7335c194d) - **feat:** add 6d blocked accessors kernel _(by Athan Reines)_
-   [`2e4f0bc`](https://github.com/stdlib-js/stdlib/commit/2e4f0bcddd78f39e692dcc52baeb0c4e5f054bde) - **feat:** add 7d blocked accessors kernel _(by Athan Reines)_
-   [`ef496b0`](https://github.com/stdlib-js/stdlib/commit/ef496b03e5e4d162a7e134fdff5097e8be8ec31d) - **feat:** add 8d blocked accessors kernel _(by Athan Reines)_
-   [`bcc4271`](https://github.com/stdlib-js/stdlib/commit/bcc427128fc6f2ef25d1c1a7ec46b772de84f8d0) - **feat:** add 9d blocked accessors kernel _(by Athan Reines)_
-   [`2792a62`](https://github.com/stdlib-js/stdlib/commit/2792a62c564bb67183e6c422eebd470f2c2d0387) - **feat:** add 10d blocked accessors kernel _(by Athan Reines)_
-   [`10f7656`](https://github.com/stdlib-js/stdlib/commit/10f76566fbc8135b21f5d957a6a5be20a5262d7e) - **feat:** add 2d blocked accessors kernel _(by Athan Reines)_
-   [`ab4f417`](https://github.com/stdlib-js/stdlib/commit/ab4f417df27d95b9f16ba8cb7cf01ecc55f75c58) - **feat:** add 10d blocked kernel _(by Athan Reines)_
-   [`5a37da9`](https://github.com/stdlib-js/stdlib/commit/5a37da9e140327674b12d58f310ebb61c6ebacba) - **feat:** add 9d blocked kernel _(by Athan Reines)_
-   [`907c8f4`](https://github.com/stdlib-js/stdlib/commit/907c8f4e128fa7e7abb9b6276ebb25db5ebf45e3) - **feat:** add 8d blocked kernel _(by Athan Reines)_
-   [`8500ee3`](https://github.com/stdlib-js/stdlib/commit/8500ee3ab7fead5be0c81a635e7378de658eed4e) - **feat:** add 7d block kernel _(by Athan Reines)_
-   [`8a2f7e2`](https://github.com/stdlib-js/stdlib/commit/8a2f7e29aba824e388fd12fdcde371d41c1eed0a) - **feat:** add 6d blocked kernel _(by Athan Reines)_
-   [`62bde63`](https://github.com/stdlib-js/stdlib/commit/62bde63d0d548122c2f5ea8d2f6391a8d0267dc6) - **feat:** add 5d blocked kernel _(by Athan Reines)_
-   [`e6dc6be`](https://github.com/stdlib-js/stdlib/commit/e6dc6be0a6b7ceef7e3ad03abdf38ae8c27cb752) - **feat:** add 4d blocked kernel _(by Athan Reines)_
-   [`e7f8179`](https://github.com/stdlib-js/stdlib/commit/e7f8179e4b8076402e87498ff55bf31a1b5daeca) - **feat:** add 3d blocked kernel _(by Athan Reines)_
-   [`f44eb41`](https://github.com/stdlib-js/stdlib/commit/f44eb41a8314b3f305d88617d26b78a4c7d7e888) - **fix:** provide z dtype _(by Athan Reines)_
-   [`ba6846b`](https://github.com/stdlib-js/stdlib/commit/ba6846b5a5b6b944f348bad07a1127cdd40da191) - **feat:** add 2d blocked kernel _(by Athan Reines)_
-   [`7010ff5`](https://github.com/stdlib-js/stdlib/commit/7010ff5c07472a02fa2cc68dae5ae3e9a96dd8cb) - **feat:** add 10d accessors kernel _(by Athan Reines)_
-   [`fdf57c8`](https://github.com/stdlib-js/stdlib/commit/fdf57c81c833a6db1c6540113bab326e47aee78a) - **feat:** add 9d accessors kernel _(by Athan Reines)_
-   [`c7aeb32`](https://github.com/stdlib-js/stdlib/commit/c7aeb32227e9aa7ad0551b95336532b589bfa12c) - **feat:** add 8d accessors kernel _(by Athan Reines)_
-   [`462ba1c`](https://github.com/stdlib-js/stdlib/commit/462ba1c49a1d8ab5105af53898bcc0424bdae5fd) - **feat:** add 7d accessors kernel _(by Athan Reines)_
-   [`4fe65c6`](https://github.com/stdlib-js/stdlib/commit/4fe65c64aa1882a49728b233ebeefd6cc821e920) - **feat:** add 6d accessors kernel _(by Athan Reines)_
-   [`9025425`](https://github.com/stdlib-js/stdlib/commit/90254253e00833630dadb7dab5544cc413f9f2fa) - **style:** disable lint rule _(by Athan Reines)_
-   [`964d21f`](https://github.com/stdlib-js/stdlib/commit/964d21f08ae155ea7409a3d6cb6a95eab1182bd8) - **feat:** add 5d accessors kernel _(by Athan Reines)_
-   [`d223b39`](https://github.com/stdlib-js/stdlib/commit/d223b3924044d55e09a530f6b141c7087f1fa364) - **feat:** add 4d accessors kernel _(by Athan Reines)_
-   [`12a9858`](https://github.com/stdlib-js/stdlib/commit/12a9858be8b89300b72ec80486a43564a97be05e) - **feat:** add 3d accessors kernel _(by Athan Reines)_
-   [`a18a916`](https://github.com/stdlib-js/stdlib/commit/a18a916546eb2c364be0a314a2caa291490f5561) - **feat:** add 2d accessors kernel _(by Athan Reines)_
-   [`18b91ff`](https://github.com/stdlib-js/stdlib/commit/18b91ffeee255d85ec8bf80c18f679711d71f9f0) - **feat:** add 1d accessors kernel _(by Athan Reines)_
-   [`cdac44a`](https://github.com/stdlib-js/stdlib/commit/cdac44a8150892bde67cc5e4e3823bdd175fda48) - **feat:** add 0d accessors kernel _(by Athan Reines)_
-   [`a9dd7d2`](https://github.com/stdlib-js/stdlib/commit/a9dd7d2da8dcb2a49f8ba1c87105714e4e89b45e) - **feat:** add nd kernel _(by Athan Reines)_
-   [`059e866`](https://github.com/stdlib-js/stdlib/commit/059e8663bd3b995bcfa611460b354ab70ba69c77) - **feat:** add 10 kernel _(by Athan Reines)_
-   [`3b7413a`](https://github.com/stdlib-js/stdlib/commit/3b7413a240746356763c5508797756f67b2f7f2f) - **feat:** add 9d kernel _(by Athan Reines)_
-   [`1372f84`](https://github.com/stdlib-js/stdlib/commit/1372f84c834e08501006ebc7e1b22fc5053d0779) - **feat:** add 8d kernel _(by Athan Reines)_
-   [`33822b7`](https://github.com/stdlib-js/stdlib/commit/33822b7385bff2697e3a6496f9874dc27793e70f) - **feat:** add 7d kernel _(by Athan Reines)_
-   [`b459438`](https://github.com/stdlib-js/stdlib/commit/b459438fae2ae7484e102639f737dd36ccf02fd8) - **feat:** add 6d kernel _(by Athan Reines)_
-   [`5ad453e`](https://github.com/stdlib-js/stdlib/commit/5ad453e52b68e90430abe40360443f52310de4c5) - **feat:** add 5d kernel _(by Athan Reines)_
-   [`2d4acfe`](https://github.com/stdlib-js/stdlib/commit/2d4acfe9dade003dce0c5a34d819956fe975ce09) - **feat:** add 4d kernel _(by Athan Reines)_
-   [`3c5c398`](https://github.com/stdlib-js/stdlib/commit/3c5c398099e4bd34b4f4e30661286d13b00102a2) - **feat:** add 3d kernel _(by Athan Reines)_
-   [`6ad8db8`](https://github.com/stdlib-js/stdlib/commit/6ad8db8af20aac64755f89d1142ea7290b435b87) - **feat:** add 2d kernel _(by Athan Reines)_
-   [`b55f6f7`](https://github.com/stdlib-js/stdlib/commit/b55f6f7ea07120361a6af7762631157ea20e7b93) - **feat:** add `1d` kernel _(by Athan Reines)_
-   [`4ebe3c8`](https://github.com/stdlib-js/stdlib/commit/4ebe3c8d9fe099b9b9daaa03459f52a21bbedd27) - **feat:** add 0d kernel _(by Athan Reines)_
-   [`9990c87`](https://github.com/stdlib-js/stdlib/commit/9990c87f2b4d99bab6fc24a5376ac69c1b160db1) - **docs:** update note _(by Athan Reines)_
-   [`6eafecd`](https://github.com/stdlib-js/stdlib/commit/6eafecd48801dd4bcb20626341c998adfdcb3d32) - **docs:** update note _(by Athan Reines)_
-   [`2369aeb`](https://github.com/stdlib-js/stdlib/commit/2369aebf8699a768a88b018c166ad220a108589f) - **docs:** update note _(by Athan Reines)_
-   [`ee7d10d`](https://github.com/stdlib-js/stdlib/commit/ee7d10d4b989f11f10b355be7d5b7cad5d84e2a0) - **docs:** update note _(by Athan Reines)_
-   [`e1e45f6`](https://github.com/stdlib-js/stdlib/commit/e1e45f6323aa212a1ae7bbc0ac584131f7c87805) - **chore:** fix EditorConfig lint errors [(#6860)](https://github.com/stdlib-js/stdlib/pull/6860) _(by zhanggy)_
-   [`6bf62ef`](https://github.com/stdlib-js/stdlib/commit/6bf62efb7fde322edbdf4e0b46a74473dbd62d60) - **refactor:** update error message _(by Athan Reines)_
-   [`6464a4b`](https://github.com/stdlib-js/stdlib/commit/6464a4ba00ba9579a2da77a0e2282a0f03bfdc01) - **docs:** update namespace table of contents [(#6828)](https://github.com/stdlib-js/stdlib/pull/6828) _(by stdlib-bot)_
-   [`25abfc6`](https://github.com/stdlib-js/stdlib/commit/25abfc67b400f646304fa1f10b239a051f6569f6) - **refactor:** support non-built-in shape and strides objects _(by Athan Reines)_
-   [`b087d7b`](https://github.com/stdlib-js/stdlib/commit/b087d7b801c7cae56cb39587b295fb7433638405) - **feat:** add support for enforcing traversal order _(by Athan Reines)_
-   [`d1bc036`](https://github.com/stdlib-js/stdlib/commit/d1bc0365ded44eefb0073b8ae9bf582041b49be5) - **feat:** add support for enforcing traversal order _(by Athan Reines)_
-   [`aa7edbf`](https://github.com/stdlib-js/stdlib/commit/aa7edbf50d41cdea1f28b13537f2810fa84ef3c7) - **feat:** add support for enforcing traversal order _(by Athan Reines)_
-   [`ccba75e`](https://github.com/stdlib-js/stdlib/commit/ccba75ea9ec47fe7ccc85f87dff6c9759294094e) - **fix:** address off-by-one error _(by Athan Reines)_
-   [`954292d`](https://github.com/stdlib-js/stdlib/commit/954292d127bf5dfd360df92ab5e73bac33a9b673) - **fix:** address off-by-one error _(by Athan Reines)_
-   [`f3e3561`](https://github.com/stdlib-js/stdlib/commit/f3e3561a46cca1fbb13c0a1b5eb5f5475ef9b032) - **fix:** address off-by-one error _(by Athan Reines)_
-   [`9db35a0`](https://github.com/stdlib-js/stdlib/commit/9db35a046ad390bb8d781c43641dc1b01fe20cbf) - **refactor:** use assertion utility _(by Athan Reines)_
-   [`abc70f7`](https://github.com/stdlib-js/stdlib/commit/abc70f761f409120b8a44de8023bcab6138c9cc9) - **refactor:** use assertion utility _(by Athan Reines)_
-   [`7507be0`](https://github.com/stdlib-js/stdlib/commit/7507be008cc27aa0c74770a29cd4b4507eca6745) - **refactor:** replace policy string argument with a policy object _(by Athan Reines)_
-   [`f0602e3`](https://github.com/stdlib-js/stdlib/commit/f0602e31fcfab3c05954ac9b3d37ae01d3f51b6b) - **refactor:** replace policy string argument with a policy object _(by Athan Reines)_
-   [`bdc7714`](https://github.com/stdlib-js/stdlib/commit/bdc7714ba936acb59f48e22bc8773bb2eb51e9a1) - **docs:** fix grammar _(by Athan Reines)_
-   [`524b0ff`](https://github.com/stdlib-js/stdlib/commit/524b0ff24c657f76c638191ce996fdd99002b4f7) - **docs:** add use cases and notes _(by Athan Reines)_
-   [`9f35a29`](https://github.com/stdlib-js/stdlib/commit/9f35a299838dee39db10a82b498884bc045383bb) - **refactor:** replace policy string argument with a policy object _(by Athan Reines)_
-   [`a044e35`](https://github.com/stdlib-js/stdlib/commit/a044e354764d59dd965c90a4317f1b3898a83d6d) - **refactor:** replace policy string argument with a policy object _(by Athan Reines)_
-   [`19a94ba`](https://github.com/stdlib-js/stdlib/commit/19a94ba6becae6ee0d021a1ad11af0bfa6ffa116) - **feat:** add `unaryInputCastingDataType` to namespace _(by Athan Reines)_
-   [`c6195ff`](https://github.com/stdlib-js/stdlib/commit/c6195ff858e3ba8b90a0560dd0af753be76b5d44) - **feat:** add `ndarray/base/unary-input-casting-dtype` _(by Athan Reines)_
-   [`79f6ac4`](https://github.com/stdlib-js/stdlib/commit/79f6ac4a6aa789b2e012126b8b485c8173a89f11) - **fix:** accumulate in the default real-valued floating-point dtype _(by Athan Reines)_
-   [`e4a213e`](https://github.com/stdlib-js/stdlib/commit/e4a213e0070ca858adef9c759627173a2c91370b) - **test:** add tests for newly added output policies _(by Athan Reines)_
-   [`a127aaf`](https://github.com/stdlib-js/stdlib/commit/a127aaf3a0a12ec7f2ae62e5fbb2bed4d67f9794) - **feat:** add support for accumulation and index policies _(by Athan Reines)_
-   [`9459c45`](https://github.com/stdlib-js/stdlib/commit/9459c452bfd439f732c3eaa20c6ab257c64b10bd) - **test:** add test case _(by Athan Reines)_
-   [`0cf010e`](https://github.com/stdlib-js/stdlib/commit/0cf010ebd42bc5e06c935c023e41d98a2571300d) - **feat:** add accumulation input casting policy _(by Athan Reines)_
-   [`d97a6dc`](https://github.com/stdlib-js/stdlib/commit/d97a6dce7cbaaeec6168a853a70038d49ca3bf9c) - **feat:** add `isInputCastingPolicy` to namespace _(by Athan Reines)_
-   [`76720ca`](https://github.com/stdlib-js/stdlib/commit/76720ca15cf2ab2362923073da524e6d1b882afb) - **feat:** add `ndarray/base/assert/is-input-casting-policy` _(by Athan Reines)_
-   [`edbd922`](https://github.com/stdlib-js/stdlib/commit/edbd9221b2d935e924f94052cc3c22c55c112173) - **feat:** add `inputCastingPolicies` to namespace _(by Athan Reines)_
-   [`a4c7f4f`](https://github.com/stdlib-js/stdlib/commit/a4c7f4f5eed4b028a397e11a40e2c0cf80517703) - **feat:** add `ndarray/input-casting-policies` _(by Athan Reines)_
-   [`38de753`](https://github.com/stdlib-js/stdlib/commit/38de753fb6f02cb74f8ba6f4dd23b8232c378565) - **feat:** add logic supporting an accumulation policy _(by Athan Reines)_
-   [`2d63924`](https://github.com/stdlib-js/stdlib/commit/2d63924aea1ea500037ca025d8d405018907c8dd) - **docs:** update comment _(by Athan Reines)_
-   [`b9d5fc2`](https://github.com/stdlib-js/stdlib/commit/b9d5fc27dcdc1d57f94f63be1d05276c63025c14) - **docs:** update namespace table of contents [(#6819)](https://github.com/stdlib-js/stdlib/pull/6819) _(by stdlib-bot, Philipp Burckhardt)_
-   [`1bbc59f`](https://github.com/stdlib-js/stdlib/commit/1bbc59f31cd81f3058f6c568567acdbd8056526b) - **feat:** add `isBooleanIndexDataType` to namespace _(by Athan Reines)_
-   [`1281240`](https://github.com/stdlib-js/stdlib/commit/128124061f8609ef1a5eaec35e6872ee3e119671) - **feat:** add `ndarray/base/assert/is-boolean-index-data-type` _(by Athan Reines)_
-   [`13702c8`](https://github.com/stdlib-js/stdlib/commit/13702c885f2a27bc95d4d563ebd4ed27f10103cc) - **feat:** add `isMaskIndexDataType` to namespace _(by Athan Reines)_
-   [`0feae39`](https://github.com/stdlib-js/stdlib/commit/0feae395dfe2c602d11ce118387dbe9270b3a270) - **feat:** add `ndarray/base/assert/is-mask-index-data-type` _(by Athan Reines)_
-   [`9c59659`](https://github.com/stdlib-js/stdlib/commit/9c59659f08f6ce5e52a8ae97ed9840391832ac36) - **feat:** add `isIntegerIndexDataType` to namespace _(by Athan Reines)_
-   [`262df73`](https://github.com/stdlib-js/stdlib/commit/262df739241e51bd92e21d5cb9168dc71972fec4) - **feat:** add `ndarray/base/assert/is-integer-index-data-type` _(by Athan Reines)_
-   [`a61e5b4`](https://github.com/stdlib-js/stdlib/commit/a61e5b4d222cbb72e236f6293279edc87641eb91) - **feat:** add `isIndexDataType` to namespace _(by Athan Reines)_
-   [`bd8958d`](https://github.com/stdlib-js/stdlib/commit/bd8958d43f54be203ffa1f6665a51f782a4aca6d) - **feat:** add `ndarray/base/assert/is-index-data-type` _(by Athan Reines)_
-   [`06667ad`](https://github.com/stdlib-js/stdlib/commit/06667ad3af114bad67b73ec1e78352044612186e) - **feat:** add accumulation and index data type policies _(by Athan Reines)_
-   [`ebe55b2`](https://github.com/stdlib-js/stdlib/commit/ebe55b2015d81d3b0f7288dc87451a2f0d362d47) - **fix:** update hash table _(by Athan Reines)_
-   [`e842143`](https://github.com/stdlib-js/stdlib/commit/e8421431fa8e811d57761310af0460c6f0ea37b5) - **refactor:** rename `indexing` to `index` and add defaults for specialized index data types _(by Athan Reines)_
-   [`2b5e9f1`](https://github.com/stdlib-js/stdlib/commit/2b5e9f129eb801afffded4df13b73dc4a5ae4963) - **refactor:** rename `indexing` to `index` and add specialized index data type kinds _(by Athan Reines)_
-   [`83b4397`](https://github.com/stdlib-js/stdlib/commit/83b4397ead81f62400301a333ada0882da688ee8) - **feat:** add default `indexing` data type _(by Athan Reines)_
-   [`a76c12c`](https://github.com/stdlib-js/stdlib/commit/a76c12c36a3ec2c34ca6d9798f7e72e42f6d0597) - **feat:** add `indexing` data type kind _(by Athan Reines)_
-   [`998cea3`](https://github.com/stdlib-js/stdlib/commit/998cea3de3266730ae7e35905faf5570df1a4b29) - **docs:** fix equality check _(by Athan Reines)_
-   [`5426105`](https://github.com/stdlib-js/stdlib/commit/5426105c564949702197dd622aab2e81cae79283) - **docs:** use C equality operator _(by Philipp Burckhardt)_
-   [`5fb7055`](https://github.com/stdlib-js/stdlib/commit/5fb70551ba3e223bbb24ca2166b81dbc4545786a) - **docs:** fix copy _(by Athan Reines)_
-   [`8aea263`](https://github.com/stdlib-js/stdlib/commit/8aea26357040a545433c325c662239e2aa43fec1) - **docs:** fix copy _(by Athan Reines)_
-   [`9ffa53e`](https://github.com/stdlib-js/stdlib/commit/9ffa53e1178f1e7c67f59d4d4e81e76602e4915b) - **docs:** update copy _(by Athan Reines)_
-   [`270d773`](https://github.com/stdlib-js/stdlib/commit/270d77340c33be953ec29ca4d1924fffdb18df0b) - **refactor:** modify dispatch table to support type signatures _(by Athan Reines)_
-   [`2b48dd6`](https://github.com/stdlib-js/stdlib/commit/2b48dd67916dc94703baac7f524b3136e8014f1c) - **refactor:** modify dispatch table to support type signatures _(by Athan Reines)_
-   [`a99a19f`](https://github.com/stdlib-js/stdlib/commit/a99a19f59967df65f528167c8754cad9aed4c6ae) - **docs:** fix copy _(by Athan Reines)_
-   [`03e37de`](https://github.com/stdlib-js/stdlib/commit/03e37de727a96025a60f60b910bd3029365b9bb6) - **refactor:** avoid unnecessary variable _(by Athan Reines)_
-   [`a520c93`](https://github.com/stdlib-js/stdlib/commit/a520c939390ec43739c53df7f7720a36cf9a56a5) - **docs:** update copy _(by Athan Reines)_
-   [`86165ae`](https://github.com/stdlib-js/stdlib/commit/86165ae550a1ada6f35aa760ab65c3f3e2440f7c) - **docs:** update copy _(by Athan Reines)_
-   [`db2ad49`](https://github.com/stdlib-js/stdlib/commit/db2ad49f2600daac6a52b0c73bd6de2246d3cd5a) - **chore:** add todo _(by Athan Reines)_
-   [`10cee20`](https://github.com/stdlib-js/stdlib/commit/10cee20847e51f75adc284d72a4908a2dc30c440) - **refactor:** remove unnecessary parameter _(by Athan Reines)_
-   [`128c03a`](https://github.com/stdlib-js/stdlib/commit/128c03a400dafdd695172ce2597b0ad7da54f795) - **refactor:** use similar calling signatures _(by Athan Reines)_
-   [`b43db40`](https://github.com/stdlib-js/stdlib/commit/b43db40273306f34ee9cde05d82c7fb9207aeb2b) - **fix:** ensure correct ndarray argument order where output ndarray should be second ndarray argument _(by Athan Reines)_
-   [`70909a2`](https://github.com/stdlib-js/stdlib/commit/70909a23604547f4430a729bf811dcc0ee999055) - **docs:** use consistent terms _(by Athan Reines)_
-   [`165c983`](https://github.com/stdlib-js/stdlib/commit/165c9830b22788f30213ae6e8df73bd2b683f332) - **docs:** use consistent terms _(by Athan Reines)_
-   [`ac10964`](https://github.com/stdlib-js/stdlib/commit/ac109649d1cfad63800282f0d509aff419bfeb33) - **fix:** ensure correct table validation _(by Athan Reines)_
-   [`d4f8189`](https://github.com/stdlib-js/stdlib/commit/d4f8189e03d81f54c5483ffb016ca967a3888565) - **refactor:** modify dispatch table to support type signatures _(by Athan Reines)_
-   [`d287f8e`](https://github.com/stdlib-js/stdlib/commit/d287f8e4a80211270e9fa96e05a17d6d1a9d2655) - **refactor:** modify dispatch table to support type signatures _(by Athan Reines)_
-   [`db7d60b`](https://github.com/stdlib-js/stdlib/commit/db7d60b388d19ab8a4b537ec3445f3181ef270b7) - **feat:** add `ndarray/base/unary-strided1d-dispatch-factory` _(by Athan Reines)_
-   [`3036ccc`](https://github.com/stdlib-js/stdlib/commit/3036cccd1db41f0093555d2b7c890bdbd6f07cdf) - **feat:** add `ndarray/base/unary-strided1d-dispatch` _(by Athan Reines)_
-   [`9c1e5c9`](https://github.com/stdlib-js/stdlib/commit/9c1e5c9b5b87643d31668a7a0b9c009413fa4c05) - **feat:** add `ndarray/base/unary-reduce-strided1d-dispatch-factory` _(by Athan Reines)_
-   [`a374c5a`](https://github.com/stdlib-js/stdlib/commit/a374c5a0a41ce15ea957d6fa92d0a6b7fe6baa1f) - **feat:** add `ndarray/base/unary-reduce-strided1d-dispatch` _(by Athan Reines)_
-   [`3be1d66`](https://github.com/stdlib-js/stdlib/commit/3be1d666a8dffa16c58b4ab1b4186e0f7b1b15f9) - **chore:** address commit comments for commit `a1e8f03` [(#6784)](https://github.com/stdlib-js/stdlib/pull/6784) _(by devshree-bhati, stdlib-bot)_
-   [`e00f861`](https://github.com/stdlib-js/stdlib/commit/e00f86162891392508f20d212cf2b3b01f111203) - **refactor:** ensure iteration happens according to memory layout of input ndarray _(by Athan Reines)_
-   [`0216d98`](https://github.com/stdlib-js/stdlib/commit/0216d98429db599b577ac3b5dd89bc6b72902e1c) - **fix:** verify that input and output ndarrays have same number of dimensions _(by Athan Reines)_
-   [`d19823e`](https://github.com/stdlib-js/stdlib/commit/d19823e71c410b6f6ff1db39a70fdf83ed7e4267) - **refactor:** avoid mutating the list of views _(by Athan Reines)_
-   [`d923b6e`](https://github.com/stdlib-js/stdlib/commit/d923b6e9ae5449dd7d68bf267d498f968600e03b) - **refactor:** avoid mutating the list of views _(by Athan Reines)_
-   [`bd6213b`](https://github.com/stdlib-js/stdlib/commit/bd6213b8c0aceedc4681ef581768820ff1911e4e) - **refactor:** precompute shape and strides _(by Athan Reines)_
-   [`38e6862`](https://github.com/stdlib-js/stdlib/commit/38e6862ed900b11bde5596931df3adfd652118ee) - **refactor:** precompute shape and strides _(by Athan Reines)_
-   [`ad90a38`](https://github.com/stdlib-js/stdlib/commit/ad90a38e1d8eabd6476c7c086ac1f82f2742d386) - **fix:** ensure correct shape and strides _(by Athan Reines)_
-   [`1d0c130`](https://github.com/stdlib-js/stdlib/commit/1d0c13090eff8e9802ebd43c8628529309895b11) - **fix:** ensure correct shape and strides _(by Athan Reines)_
-   [`d389d89`](https://github.com/stdlib-js/stdlib/commit/d389d8905c302347394f2df9d9553b3d02d4c759) - **feat:** add `ndarray/base/unary-strided1d` _(by Athan Reines)_
-   [`4534d81`](https://github.com/stdlib-js/stdlib/commit/4534d81a85cc3b55592e807887a47c6aa233ac1b) - **docs:** update comment _(by Athan Reines)_
-   [`6223529`](https://github.com/stdlib-js/stdlib/commit/62235292bcb59d6ee9a1af4418aec6afee619f6d) - **docs:** remove unused import in example _(by Athan Reines)_
-   [`00450cc`](https://github.com/stdlib-js/stdlib/commit/00450cc5a91760e1d2aba09bb942bb0a84bc9157) - **feat:** add `ndarray/base/every-by` [(#6667)](https://github.com/stdlib-js/stdlib/pull/6667) _(by Muhammad Haris, Athan Reines)_
-   [`f7bb91c`](https://github.com/stdlib-js/stdlib/commit/f7bb91c2aa3b31c86ddd57cfd3396632c78d42c0) - **fix:** ensure support for zero-dimensional shapes _(by Athan Reines)_
-   [`046926b`](https://github.com/stdlib-js/stdlib/commit/046926b9a0ad4643802944ef110b1cfe1eb488c9) - **fix:** ensure support for zero-dimensional shapes _(by Athan Reines)_
-   [`b1d96c9`](https://github.com/stdlib-js/stdlib/commit/b1d96c95fce3e8692ec6cbb4436eacd1943a5528) - **refactor:** use assertion utility _(by Athan Reines)_
-   [`f62c303`](https://github.com/stdlib-js/stdlib/commit/f62c303e990ecc605a34774772091dda14e3088f) - **refactor:** use assertion utility _(by Athan Reines)_
-   [`86632f3`](https://github.com/stdlib-js/stdlib/commit/86632f3d1a2de336941303b32e994c870bcaeb71) - **fix:** check for duplicate indices _(by Athan Reines)_
-   [`07710f8`](https://github.com/stdlib-js/stdlib/commit/07710f849133f4414b37a19a96fb3ccdad7538d5) - **fix:** check for duplicate indices _(by Athan Reines)_
-   [`dcd9428`](https://github.com/stdlib-js/stdlib/commit/dcd9428900fbd2bdfe3505e71fa00ccd08a7efce) - **refactor:** fix argument _(by Athan Reines)_
-   [`867f172`](https://github.com/stdlib-js/stdlib/commit/867f172f951619f7ca087c25f7944954198fabb0) - **refactor:** fix argument _(by Athan Reines)_
-   [`9d6cd84`](https://github.com/stdlib-js/stdlib/commit/9d6cd84404f09e09f22721d4e3bd1d083b8f83b1) - **chore:** add TODO _(by Athan Reines)_
-   [`35612e9`](https://github.com/stdlib-js/stdlib/commit/35612e9369b15f22fc8be80a9da56cf73aee05d8) - **chore:** add TODO _(by Athan Reines)_
-   [`ca10e52`](https://github.com/stdlib-js/stdlib/commit/ca10e526a8d174acca07ea25631f3254a768690c) - **feat:** add `ndarray/base/unary-reduce-strided1d` _(by Athan Reines)_
-   [`999b4d7`](https://github.com/stdlib-js/stdlib/commit/999b4d7f258e8c9c20ef474b1839f62a9481c652) - **docs:** update note _(by Athan Reines)_
-   [`a032199`](https://github.com/stdlib-js/stdlib/commit/a03219903da3dce11a6a290890078a969841e582) - **docs:** update description _(by Athan Reines)_
-   [`29a39e8`](https://github.com/stdlib-js/stdlib/commit/29a39e8cb6562c29d96a91b3969ef35ae85b661a) - **chore:** update copyright year _(by Athan Reines)_
-   [`cdc66ce`](https://github.com/stdlib-js/stdlib/commit/cdc66ce1876b95dd8c23aa2f869aebe9b842e86e) - **fix:** remove unused parameters _(by Athan Reines)_
-   [`9485c2b`](https://github.com/stdlib-js/stdlib/commit/9485c2b14a159557d8d097c2cfbd106db12a2210) - **chore:** fix EditorConfig lint errors (issue #6663) [(#6672)](https://github.com/stdlib-js/stdlib/pull/6672) _(by Dipjyoti Das)_
-   [`f9d3b79`](https://github.com/stdlib-js/stdlib/commit/f9d3b793f4100fcf1c9b7391550d3264bb395b00) - **docs:** update related packages sections [(#6670)](https://github.com/stdlib-js/stdlib/pull/6670) _(by stdlib-bot)_
-   [`0ede0da`](https://github.com/stdlib-js/stdlib/commit/0ede0dafa46ddea7dfce7be63250ca9ae0c1c546) - **fix:** add missing imports in `ndarray/base/unary-reduce-subarray` [(#6642)](https://github.com/stdlib-js/stdlib/pull/6642) _(by Muhammad Haris)_
-   [`b2eef05`](https://github.com/stdlib-js/stdlib/commit/b2eef05de589bc6dafb0f462fa0088c2eb1bf26d) - **docs:** update namespace table of contents [(#6631)](https://github.com/stdlib-js/stdlib/pull/6631) _(by stdlib-bot)_
-   [`710e6dd`](https://github.com/stdlib-js/stdlib/commit/710e6dde3e7201cec996e3bdc70f8be3c0905416) - **refactor:** update signature to use `const` qualifier [(#6610)](https://github.com/stdlib-js/stdlib/pull/6610) _(by Pravesh Kunwar, Athan Reines)_
-   [`605c582`](https://github.com/stdlib-js/stdlib/commit/605c5828fe6efeae442d8df17d29404d2acb759f) - **fix:** update error message _(by Athan Reines)_
-   [`0836dce`](https://github.com/stdlib-js/stdlib/commit/0836dce5df85cb2cc185c65ca839aa99f30eb9e1) - **fix:** update error message _(by Athan Reines)_
-   [`a468fa8`](https://github.com/stdlib-js/stdlib/commit/a468fa85dd5a0bdf9bb98fd27fca221cac2cc465) - **feat:** add `every`, `includes`, `unaryAccumulate`, and `unaryReduceSubarray` to namespace [(#6605)](https://github.com/stdlib-js/stdlib/pull/6605) _(by Pravesh Kunwar)_
-   [`1ad09d5`](https://github.com/stdlib-js/stdlib/commit/1ad09d5c9437c763081275186e7517d3739da988) - **chore:** update package meta data [(#6576)](https://github.com/stdlib-js/stdlib/pull/6576) _(by stdlib-bot)_
-   [`b5bff35`](https://github.com/stdlib-js/stdlib/commit/b5bff35c7183d5ccd4cf0349c1a3be06b34e844f) - **docs:** update copy _(by Athan Reines)_
-   [`fccf762`](https://github.com/stdlib-js/stdlib/commit/fccf76232823c1bbbef2152aa3c1488210a5a12b) - **docs:** update copy _(by Athan Reines)_
-   [`3f4de77`](https://github.com/stdlib-js/stdlib/commit/3f4de77d333dea3962dec5f53858a4a2db86bd63) - **feat:** add `ndarray/includes` _(by Athan Reines)_
-   [`f0d205d`](https://github.com/stdlib-js/stdlib/commit/f0d205d7073055c7a69f1ba7ccee95671ab762ba) - **fix:** address indexing error _(by Athan Reines)_
-   [`043dc69`](https://github.com/stdlib-js/stdlib/commit/043dc69c76ea6780cbba2c223417fccda4685c7a) - **fix:** handle 0d edge case _(by Athan Reines)_
-   [`560e643`](https://github.com/stdlib-js/stdlib/commit/560e643d902d37529d503ba1c8bf5ac0dd88f926) - **chore:** fix EditorConfig lint errors [(#6549)](https://github.com/stdlib-js/stdlib/pull/6549) _(by Muhammad Taaha Tariq, Athan Reines)_
-   [`128019a`](https://github.com/stdlib-js/stdlib/commit/128019a60f5fde63b21804d5914dba020e5d53a4) - **docs:** update examples _(by Athan Reines)_
-   [`ac2b843`](https://github.com/stdlib-js/stdlib/commit/ac2b843dd8a6341d876c559cf8d79ab8bdf7ac46) - **bench:** fix invocations _(by Athan Reines)_
-   [`1e0863b`](https://github.com/stdlib-js/stdlib/commit/1e0863b926876e26ad82a3d28ead805326de30d4) - **bench:** add benchmarks _(by Athan Reines)_
-   [`4b9e117`](https://github.com/stdlib-js/stdlib/commit/4b9e11763d3684596e19cdb0ff8931dca41b49df) - **docs:** add README _(by Athan Reines)_
-   [`9635155`](https://github.com/stdlib-js/stdlib/commit/9635155b8986f7cdbbeda766741deaab6ff76567) - **docs:** add example _(by Athan Reines)_
-   [`5b99ffb`](https://github.com/stdlib-js/stdlib/commit/5b99ffb24c9dec39925e95e3a5992cef9283e4eb) - **docs:** fix text block _(by Athan Reines)_
-   [`63f96e4`](https://github.com/stdlib-js/stdlib/commit/63f96e40cc84ff4d4636701eaad7182a5eee325b) - **test:** add initial tests _(by Athan Reines)_
-   [`ba1be5d`](https://github.com/stdlib-js/stdlib/commit/ba1be5d4934296745fdbf2f45945ea4edaa302d8) - **docs:** add REPL help and TS declarations _(by Athan Reines)_
-   [`f48027c`](https://github.com/stdlib-js/stdlib/commit/f48027ca63fab9c8cec60137439a7c9a741360a0) - **docs:** fix description _(by Athan Reines)_
-   [`2ec7da5`](https://github.com/stdlib-js/stdlib/commit/2ec7da5371c0e94eec75db9374206753367761fd) - **feat:** add package entry point _(by Athan Reines)_
-   [`7631d15`](https://github.com/stdlib-js/stdlib/commit/7631d157dbaa53d165e84335c1c656504387c22c) - **feat:** add nd kernels _(by Athan Reines)_
-   [`9eb7bd3`](https://github.com/stdlib-js/stdlib/commit/9eb7bd359a705daeb1d2541db398e00d9c639786) - **feat:** add 9d kernels _(by Athan Reines)_
-   [`175e813`](https://github.com/stdlib-js/stdlib/commit/175e813a98369656c2bc3c5e3dfcbd2a6a78d207) - **feat:** add 8d kernels _(by Athan Reines)_
-   [`f13f725`](https://github.com/stdlib-js/stdlib/commit/f13f725463374ee53253ff45610ec68600b4f01d) - **feat:** add 7d kernels _(by Athan Reines)_
-   [`6bdf8aa`](https://github.com/stdlib-js/stdlib/commit/6bdf8aaf476c44183ac333f9bab349ec5b23cde9) - **feat:** add 6d kernels _(by Athan Reines)_
-   [`c907d71`](https://github.com/stdlib-js/stdlib/commit/c907d7194df26fab41665ec031de26d9c4716a99) - **feat:** add 5d kernels _(by Athan Reines)_
-   [`6c1ccd3`](https://github.com/stdlib-js/stdlib/commit/6c1ccd3f507367f7ffa9cb40c15fe360682fd294) - **chore:** add package meta data _(by Athan Reines)_
-   [`dab4993`](https://github.com/stdlib-js/stdlib/commit/dab49934d6adb33a90ec6661027f638075a8fa7b) - **feat:** add 4d kernels _(by Athan Reines)_
-   [`999d496`](https://github.com/stdlib-js/stdlib/commit/999d4968b54b50e41f1e0e3420afb87729b85b02) - **feat:** add 3d kernels _(by Athan Reines)_
-   [`27cd3d9`](https://github.com/stdlib-js/stdlib/commit/27cd3d90b12b3f98c1032fb7130aceeb54ecc345) - **feat:** add 2d kernels _(by Athan Reines)_
-   [`9dec091`](https://github.com/stdlib-js/stdlib/commit/9dec091d45d3c7272fc74267588891207a2f9048) - **feat:** add 1d kernels _(by Athan Reines)_
-   [`8bb576b`](https://github.com/stdlib-js/stdlib/commit/8bb576b6d3f4f6421f2a0065f36c24a223b9803d) - **feat:** add 10d kernels _(by Athan Reines)_
-   [`1392a91`](https://github.com/stdlib-js/stdlib/commit/1392a91b60c42b10757a4a2b187b58e648f8de98) - **feat:** add 0d kernels _(by Athan Reines)_
-   [`d2564c7`](https://github.com/stdlib-js/stdlib/commit/d2564c7c234ed2be3b8ea32ffa41cb937cc83289) - **docs:** update example _(by Athan Reines)_
-   [`d070f40`](https://github.com/stdlib-js/stdlib/commit/d070f4068364ed50c796c7961d9b7d967b2079ab) - **docs:** fix example _(by Athan Reines)_
-   [`13b7262`](https://github.com/stdlib-js/stdlib/commit/13b726232dfe12efc850f095633e373840f3e02a) - **chore:** fix EditorConfig lint errors [(#6541)](https://github.com/stdlib-js/stdlib/pull/6541) _(by Muhammad Taaha Tariq, Athan Reines)_
-   [`b98c6a9`](https://github.com/stdlib-js/stdlib/commit/b98c6a93187e39c2db3958a2b6be92c2d50be593) - **docs:** update related packages sections [(#6538)](https://github.com/stdlib-js/stdlib/pull/6538) _(by stdlib-bot)_
-   [`b2db775`](https://github.com/stdlib-js/stdlib/commit/b2db7759e0779037cea020e7c80ce91740257f46) - **chore:** fix EditorConfig lint error [(#6180)](https://github.com/stdlib-js/stdlib/pull/6180) _(by MANI, Athan Reines)_
-   [`5d57761`](https://github.com/stdlib-js/stdlib/commit/5d57761c446339e796d1add0c03b7febfa4253fd) - **chore:** fix EditorConfig lint errors [(#6178)](https://github.com/stdlib-js/stdlib/pull/6178) _(by MANI)_
-   [`a464a60`](https://github.com/stdlib-js/stdlib/commit/a464a60568b819f813aff054ba0c32476192d269) - **chore:** fix EditorConfig lint errors [(#6246)](https://github.com/stdlib-js/stdlib/pull/6246) _(by MANI, Athan Reines)_
-   [`d3289c3`](https://github.com/stdlib-js/stdlib/commit/d3289c3af88a698ed39ee5234c525cfec98c56f5) - **test:** use `zfill` rather than `gfill` to improve performance _(by Athan Reines)_
-   [`b96a6a2`](https://github.com/stdlib-js/stdlib/commit/b96a6a258f9c560073e252b9969095a12723074e) - **test:** add missing tests to `ndarray/base/unary` [(#5821)](https://github.com/stdlib-js/stdlib/pull/5821) _(by Muhammad Haris)_
-   [`998b3ba`](https://github.com/stdlib-js/stdlib/commit/998b3ba4e628e6d8564c6b33fe41925da2046b41) - **feat:** add missing kernels to `ndarray/base/unary-reduce-subarray` [(#6421)](https://github.com/stdlib-js/stdlib/pull/6421) _(by Muhammad Haris)_
-   [`89d16f9`](https://github.com/stdlib-js/stdlib/commit/89d16f95b188c5afb513af630134dd40cdad380b) - **chore:** fix JSON lint errors [(#6466)](https://github.com/stdlib-js/stdlib/pull/6466) _(by Sai Avinash)_
-   [`f0af2cb`](https://github.com/stdlib-js/stdlib/commit/f0af2cb05b0442f2ef20f5296cee2576191130e8) - **chore:** fix JavaScript lint errors [(#6463)](https://github.com/stdlib-js/stdlib/pull/6463) _(by lohithganni)_
-   [`b28f85a`](https://github.com/stdlib-js/stdlib/commit/b28f85a0469dd2f4ace20c220f6718cce912eaea) - **refactor:** use assertion utility to check for row-major order _(by Athan Reines)_
-   [`b47a8a7`](https://github.com/stdlib-js/stdlib/commit/b47a8a74795416cbf42790c89aedb5d1958c53b1) - **docs:** fix argument name _(by Athan Reines)_
-   [`fdf4cc1`](https://github.com/stdlib-js/stdlib/commit/fdf4cc10816de43b8a73890e1f93f1635104c79f) - **docs:** fix signature _(by Athan Reines)_
-   [`1e3aa40`](https://github.com/stdlib-js/stdlib/commit/1e3aa40c44b6d1fe63e8426c9c78ed00ffecc7f0) - **docs:** update copy _(by Athan Reines)_
-   [`74b7a03`](https://github.com/stdlib-js/stdlib/commit/74b7a03f171a8241edb737fbd59d7822023a2263) - **docs:** update copy _(by Athan Reines)_
-   [`eb9cf48`](https://github.com/stdlib-js/stdlib/commit/eb9cf4814a5902a7ca979b162977a43fc3bf17ce) - **bench:** fix duplicate assignment _(by Athan Reines)_
-   [`6f61b2d`](https://github.com/stdlib-js/stdlib/commit/6f61b2dfab95f59ff05a07769b777f5012e1c193) - **fix:** handle edge case when `dims=[]` _(by Athan Reines)_
-   [`ebb1ce8`](https://github.com/stdlib-js/stdlib/commit/ebb1ce814e9d9f56a93093c6997e5c0f4e927f2d) - **bench:** fix ndarray creation _(by Athan Reines)_
-   [`2690141`](https://github.com/stdlib-js/stdlib/commit/26901419b6a9b93f8e55216b4137e4a08ae57d28) - **feat:** add `ndarray/every` _(by Athan Reines)_
-   [`c533b6d`](https://github.com/stdlib-js/stdlib/commit/c533b6d0cf52949bc78141f23ebd58743f94a5a6) - **docs:** fix description _(by Athan Reines)_
-   [`7ed649e`](https://github.com/stdlib-js/stdlib/commit/7ed649eccd8436c1f34ff3583e0623e2228b9db0) - **bench:** rename files _(by Athan Reines)_
-   [`5768926`](https://github.com/stdlib-js/stdlib/commit/5768926be4fb253947f5d44bcf6b9d8bb5c75274) - **fix:** update error message _(by Athan Reines)_
-   [`bdf4246`](https://github.com/stdlib-js/stdlib/commit/bdf4246934e957faced935c2cda4b1f30b7ac9e9) - **refactor:** update error messages _(by Athan Reines)_
-   [`9934f2c`](https://github.com/stdlib-js/stdlib/commit/9934f2ceb44cbcdc02c27d9a1a5fc231e24b10ff) - **refactor:** only branch when `y` is backed by an accessor array _(by Athan Reines)_
-   [`7378f4d`](https://github.com/stdlib-js/stdlib/commit/7378f4db96fc059523a6f181388aa8f4fa202675) - **fix:** ensure support when providing no dimensions to reduce _(by Athan Reines)_
-   [`abbc923`](https://github.com/stdlib-js/stdlib/commit/abbc923faa3036bb6b2bce8446a56926ef26163d) - **docs:** add example _(by Athan Reines)_
-   [`91778b7`](https://github.com/stdlib-js/stdlib/commit/91778b7ca6ae2c6ee0c6017687426c3952d90098) - **fix:** handle scenario where a core dimension is zero _(by Athan Reines)_
-   [`9cb2473`](https://github.com/stdlib-js/stdlib/commit/9cb247321b8b2285713404fc4e43d43630163097) - **chore:** update directory list _(by Athan Reines)_
-   [`0fc4015`](https://github.com/stdlib-js/stdlib/commit/0fc401573e94e99adbd3c31d7067c28ee2d270a1) - **docs:** add README and repl help _(by Athan Reines)_
-   [`a331234`](https://github.com/stdlib-js/stdlib/commit/a33123481db5e24d5f0550b837b81bd0574d748e) - **test:** add initial test file _(by Athan Reines)_
-   [`6d21670`](https://github.com/stdlib-js/stdlib/commit/6d21670d117320f7bc77b2b3ad4ce2fc51dbdd75) - **chore:** update directory list _(by Athan Reines)_
-   [`935f698`](https://github.com/stdlib-js/stdlib/commit/935f698bd565928d3fc862dfdff14ab0e56aa478) - **feat:** add initial implementation for `ndarray/base/unary-reduce-subarray` _(by Athan Reines)_
-   [`ad7c705`](https://github.com/stdlib-js/stdlib/commit/ad7c7056b95d52aac386e81209fbcd7fe8eac81f) - **refactor:** format error message _(by Athan Reines)_
-   [`70bee88`](https://github.com/stdlib-js/stdlib/commit/70bee887bd024ca10b1676742e0f3b3051fa7b00) - **docs:** update namespace TypeScript declarations [(#6357)](https://github.com/stdlib-js/stdlib/pull/6357) _(by stdlib-bot)_
-   [`442efb4`](https://github.com/stdlib-js/stdlib/commit/442efb4980c95c38eb1333c1d7a38b5e2ab4d2ec) - **chore:** resolve lint errors _(by Athan Reines)_
-   [`3419f20`](https://github.com/stdlib-js/stdlib/commit/3419f20af1c819b14ab5ccf7b17379fa8f977399) - **chore:** resolve lint errors _(by Athan Reines)_
-   [`47f726c`](https://github.com/stdlib-js/stdlib/commit/47f726ce566a85f054035c662768653bae07d25a) - **chore:** resolve lint errors _(by Athan Reines)_
-   [`8aad405`](https://github.com/stdlib-js/stdlib/commit/8aad4050220ad7cff7b807f0913dcab3d8555fae) - **docs:** add markup _(by Athan Reines)_
-   [`f8c4dad`](https://github.com/stdlib-js/stdlib/commit/f8c4dad867ebdc2182267a2b6e6f97a004c0f6a0) - **docs:** add markup _(by Athan Reines)_
-   [`2e5d1fc`](https://github.com/stdlib-js/stdlib/commit/2e5d1fc2d31228deaf880f767324e73464a4ed65) - **docs:** update namespace table of contents [(#6339)](https://github.com/stdlib-js/stdlib/pull/6339) _(by stdlib-bot)_
-   [`d8f2acf`](https://github.com/stdlib-js/stdlib/commit/d8f2acf4d31d3da271e7d2074ffb40a6317c4a23) - **feat:** update namespace TypeScript declarations [(#6337)](https://github.com/stdlib-js/stdlib/pull/6337) _(by stdlib-bot)_
-   [`bb0671b`](https://github.com/stdlib-js/stdlib/commit/bb0671b5a497770bbf71f1c2315cafcbb75f4a73) - **refactor:** enforce mostly safe casts _(by Athan Reines)_
-   [`5cab853`](https://github.com/stdlib-js/stdlib/commit/5cab853c4f710e60d7dc1639e0cb5e9f00ad2134) - **refactor:** update to enforce mostly safe casts _(by Athan Reines)_
-   [`1a18317`](https://github.com/stdlib-js/stdlib/commit/1a183174f05d99bf78be477639df489493c01e2b) - **feat:** add `isScalarMostlySafeCompatible` to namespace _(by Athan Reines)_
-   [`6003449`](https://github.com/stdlib-js/stdlib/commit/600344933e2836421aa15fb89d62e9a0a9266bd6) - **feat:** add `ndarray/base/assert/is-scalar-mostly-safe-compatible` _(by Athan Reines)_
-   [`bc026be`](https://github.com/stdlib-js/stdlib/commit/bc026be819b804711432f11bbdbc369271a27a9b) - **refactor:** use assertion utility _(by Athan Reines)_
-   [`41b3b21`](https://github.com/stdlib-js/stdlib/commit/41b3b214c891ac64926296439240e2bf5f85de3f) - **feat:** add `fillBy` to namespace _(by Athan Reines)_
-   [`da8a676`](https://github.com/stdlib-js/stdlib/commit/da8a676ef0097af7ad60e7379b52930e03d65c95) - **feat:** update namespace TypeScript declarations [(#6315)](https://github.com/stdlib-js/stdlib/pull/6315) _(by stdlib-bot)_
-   [`e5d835c`](https://github.com/stdlib-js/stdlib/commit/e5d835cb9acbd4597f255246fecd52f024212fbb) - **feat:** add `ndarray/fill-by` _(by Athan Reines)_
-   [`bb5117c`](https://github.com/stdlib-js/stdlib/commit/bb5117c314dcc31b3c7100eacb1a693198962e3b) - **docs:** update namespace table of contents [(#6317)](https://github.com/stdlib-js/stdlib/pull/6317) _(by stdlib-bot)_
-   [`54de8ff`](https://github.com/stdlib-js/stdlib/commit/54de8ff8a11f970858032265f2bc5caeba082479) - **fix:** update default type _(by Athan Reines)_
-   [`40fc3a2`](https://github.com/stdlib-js/stdlib/commit/40fc3a218445c34a667237cadb74ae9417cc0392) - **chore:** add TODO _(by Athan Reines)_
-   [`5e275bf`](https://github.com/stdlib-js/stdlib/commit/5e275bf225e7ea1cb233caef5336a062463342cb) - **feat:** add `fill` to namespace _(by Athan Reines)_
-   [`1aca9d3`](https://github.com/stdlib-js/stdlib/commit/1aca9d37e47e33c03b94bb5b128647c7387172e2) - **fix:** update type defn _(by Athan Reines)_
-   [`f475f78`](https://github.com/stdlib-js/stdlib/commit/f475f7891aa4103a113c9569902311d3570a2751) - **feat:** add `ndarray/fill` _(by Athan Reines)_
-   [`1e48327`](https://github.com/stdlib-js/stdlib/commit/1e48327f169d8cd8adf1177f92d5147077edbfe7) - **fix:** handle zero-dimensional ndarrays _(by Athan Reines)_
-   [`282d01f`](https://github.com/stdlib-js/stdlib/commit/282d01f86247ea1b4c8a3345493b6dc8ec034517) - **feat:** add `fillBy` to namespace _(by Athan Reines)_
-   [`d29b55f`](https://github.com/stdlib-js/stdlib/commit/d29b55fd2f01608cf9cbff68eb5b6dad4ca1722b) - **feat:** add `ndarray/base/fill-by` _(by Athan Reines)_
-   [`266a064`](https://github.com/stdlib-js/stdlib/commit/266a064a8cc55b100a00d2ad98c84820d8f17653) - **style:** fix spacing _(by Athan Reines)_
-   [`04f7752`](https://github.com/stdlib-js/stdlib/commit/04f77520acf685e9325bf4413be6da7543ed3cb5) - **refactor:** accommodate known array types for increased performance _(by Athan Reines)_
-   [`70d0be2`](https://github.com/stdlib-js/stdlib/commit/70d0be235297eecc69d8e7ec4aad484ac7d5aedc) - **test:** add 0d tests _(by Athan Reines)_
-   [`d761114`](https://github.com/stdlib-js/stdlib/commit/d761114ce6f6f74f0befb8c445e4632c0265c150) - **docs:** update descriptions _(by Athan Reines)_
-   [`59ab26d`](https://github.com/stdlib-js/stdlib/commit/59ab26d220e5950d2a4e1fa087602e73ce3e3b5b) - **docs:** add `c_x_as_z_x` example _(by Athan Reines)_
-   [`ae76c53`](https://github.com/stdlib-js/stdlib/commit/ae76c53f6559c382a9843c62f2b767b59e2554d9) - **docs:** add `z_x` example _(by Athan Reines)_
-   [`86cff92`](https://github.com/stdlib-js/stdlib/commit/86cff928cc8c5915782aa0c0b93063a93232f812) - **docs:** add `c_x` example _(by Athan Reines)_
-   [`f18745d`](https://github.com/stdlib-js/stdlib/commit/f18745d20d6b884c938e7705a3716b2c2fd143ce) - **docs:** add `s_x` example _(by Athan Reines)_
-   [`8e9d2a2`](https://github.com/stdlib-js/stdlib/commit/8e9d2a20687de20c270bf55954d7b4dd50348ed2) - **docs:** add `t_x_as_u_x` example _(by Athan Reines)_
-   [`219d06a`](https://github.com/stdlib-js/stdlib/commit/219d06a5fea5b198df3ed90c819785150154de8b) - **docs:** fix dtype _(by Athan Reines)_
-   [`9a8e36f`](https://github.com/stdlib-js/stdlib/commit/9a8e36ffe63f3e0f56e1aa50c5eca95afb2e7a60) - **docs:** add `k_x_as_i_x` example _(by Athan Reines)_
-   [`151d22e`](https://github.com/stdlib-js/stdlib/commit/151d22e924f6636065f2558bf76a4ca2fa85d153) - **docs:** add `u_x` example _(by Athan Reines)_
-   [`e8891b5`](https://github.com/stdlib-js/stdlib/commit/e8891b597ced936af5e56ce7c928b41bec87afa6) - **docs:** add `i_x` example _(by Athan Reines)_
-   [`20474dc`](https://github.com/stdlib-js/stdlib/commit/20474dce8d183aca11b2a6c78dc2e7eb04b2e7dd) - **docs:** update example _(by Athan Reines)_
-   [`d3f3847`](https://github.com/stdlib-js/stdlib/commit/d3f384758b05eaf74d6d1ed81c8e4a7712e35c15) - **docs:** add `f_x` example _(by Athan Reines)_
-   [`6f642bf`](https://github.com/stdlib-js/stdlib/commit/6f642bf515e928ca27a5245e1fa021484982c6f9) - **docs:** add `d_x` example _(by Athan Reines)_
-   [`23f4cb5`](https://github.com/stdlib-js/stdlib/commit/23f4cb5d51eef16ca8229560d4d35c4537892c50) - **docs:** add `b_x` example _(by Athan Reines)_
-   [`1e907c0`](https://github.com/stdlib-js/stdlib/commit/1e907c0e9fb203d0b045d04eb1109eb71a49a08e) - **docs:** document C APIs _(by Athan Reines)_
-   [`6e315b0`](https://github.com/stdlib-js/stdlib/commit/6e315b07350876fcd04f83290fad4ac38c757e7b) - **build:** update manifest _(by Athan Reines)_
-   [`08aeae7`](https://github.com/stdlib-js/stdlib/commit/08aeae7804a6c7b95d1b18e2001854bfa5d98a03) - **feat:** add loop implementations _(by Athan Reines)_
-   [`1d26ae4`](https://github.com/stdlib-js/stdlib/commit/1d26ae441913819d1de434fc2dbfacf092cd0df2) - **build:** add loop generation scripts and refactor templates _(by Athan Reines)_
-   [`b71f305`](https://github.com/stdlib-js/stdlib/commit/b71f305ed0f5e7bd763adcc44c710c9f751e1f66) - **feat:** add header files _(by Athan Reines)_
-   [`5f03a9c`](https://github.com/stdlib-js/stdlib/commit/5f03a9c9c4192b27996e9fb22959ca948230396a) - **fix:** update function names and fix buffer dtype _(by Athan Reines)_
-   [`7536870`](https://github.com/stdlib-js/stdlib/commit/75368709f4bdeb91221d08492b5a0bc9c94f5b71) - **docs:** fix example and update docs _(by Athan Reines)_
-   [`f22a9ab`](https://github.com/stdlib-js/stdlib/commit/f22a9ab1c1c50aacc3529b77401469c915f79aaf) - **fix:** ensure support for allocating zero-dimensional ndarrays _(by Athan Reines)_
-   [`6b2c525`](https://github.com/stdlib-js/stdlib/commit/6b2c525c004ce04def43ac37edace672d414916d) - **build:** add manifest file _(by Athan Reines)_
-   [`3677e41`](https://github.com/stdlib-js/stdlib/commit/3677e411f8dad66192e35cc15290e551a5534d4c) - **feat:** add dispatch implementation _(by Athan Reines)_
-   [`2c5c512`](https://github.com/stdlib-js/stdlib/commit/2c5c5127bd8bec569f88086096c65e39efc722c9) - **docs:** update comment _(by Athan Reines)_
-   [`19ed652`](https://github.com/stdlib-js/stdlib/commit/19ed652198d5f219df78a46f8d4d0a5447ab2cb1) - **style:** reorder variable declarations to match ndarray/base/unary _(by Athan Reines)_
-   [`2b67d75`](https://github.com/stdlib-js/stdlib/commit/2b67d75c6c85b360e539bc5316ad0607a08d9521) - **docs:** fix examples and resolve lint error _(by Athan Reines)_
-   [`a934d8c`](https://github.com/stdlib-js/stdlib/commit/a934d8c2b9261053a94f90840c93cea9ea7bfc82) - **build:** add documentation template _(by Athan Reines)_
-   [`5543e2c`](https://github.com/stdlib-js/stdlib/commit/5543e2c370163b6bce15115c6902c4c06d4705ba) - **docs:** document predicate interfaces _(by Athan Reines)_
-   [`15931ac`](https://github.com/stdlib-js/stdlib/commit/15931ac3c7825db6951cad8470e8737618f7f18e) - **chore:** update template to include predicate function signatures _(by Athan Reines)_
-   [`29c95a5`](https://github.com/stdlib-js/stdlib/commit/29c95a5095aa88870e3515b853eef6d6f6b67570) - **build:** add template for source files _(by Athan Reines)_
-   [`461ea5c`](https://github.com/stdlib-js/stdlib/commit/461ea5c11458392ef9310b6ef398b6138ccc3e4d) - **docs:** add README _(by Athan Reines)_
-   [`4846eb1`](https://github.com/stdlib-js/stdlib/commit/4846eb195c29d2133d39717da261b73cbe9eac7c) - **style:** fix spacing _(by Athan Reines)_
-   [`af44236`](https://github.com/stdlib-js/stdlib/commit/af4423684f924575e9bedcb47348ab455b6db688) - **feat:** add main header file _(by Athan Reines)_
-   [`1c01e33`](https://github.com/stdlib-js/stdlib/commit/1c01e334f75f28a39e08b89fab0117add60e3664) - **feat:** add macros header _(by Athan Reines)_
-   [`608f79b`](https://github.com/stdlib-js/stdlib/commit/608f79be4c10e031e8cfb450561ced24eee221e3) - **feat:** add 10d blocked macros _(by Athan Reines)_
-   [`552d565`](https://github.com/stdlib-js/stdlib/commit/552d565db6cf90e962da92793af6ac7f00846bd4) - **feat:** add 5d blocked macros _(by Athan Reines)_
-   [`6f0da38`](https://github.com/stdlib-js/stdlib/commit/6f0da38194edf4a54349071f7b4704fde6059865) - **feat:** add 6d blocked macros _(by Athan Reines)_
-   [`74fe0a2`](https://github.com/stdlib-js/stdlib/commit/74fe0a292a06f08be392bb231b4e28df6c73672d) - **feat:** add 7d blocked macros _(by Athan Reines)_
-   [`03696ac`](https://github.com/stdlib-js/stdlib/commit/03696ac18aff30b250b446017ce04a92aad2e9d1) - **feat:** add 8d blocked macros _(by Athan Reines)_
-   [`3764601`](https://github.com/stdlib-js/stdlib/commit/3764601d1c8ce115e1a068e9ff103d2dc53b1e4e) - **feat:** add 9d blocked macros _(by Athan Reines)_
-   [`26395f5`](https://github.com/stdlib-js/stdlib/commit/26395f59c471187503619bdbd4339297012642b5) - **feat:** add 4d blocked macros _(by Athan Reines)_
-   [`28aa078`](https://github.com/stdlib-js/stdlib/commit/28aa0787076a7f280df934d2fb3350736f8355c0) - **feat:** add 3d blocked macros _(by Athan Reines)_
-   [`b611927`](https://github.com/stdlib-js/stdlib/commit/b6119272bb72f287656606032b38fdea3a89fcfb) - **feat:** add n-d macros _(by Athan Reines)_
-   [`4695983`](https://github.com/stdlib-js/stdlib/commit/4695983369ab642e91c9cbed641bbac291d90bed) - **feat:** add 10d macros _(by Athan Reines)_
-   [`44a361c`](https://github.com/stdlib-js/stdlib/commit/44a361c150864c56d06975a7d27368b49fe51766) - **feat:** add 9d macros _(by Athan Reines)_
-   [`f33e9ce`](https://github.com/stdlib-js/stdlib/commit/f33e9ce577867ade65c8f46049909931f4364663) - **feat:** add 8d macros _(by Athan Reines)_
-   [`835bd41`](https://github.com/stdlib-js/stdlib/commit/835bd415145e4f72c46ec7222a2f90fbcc79b791) - **fix:** remove extra slash _(by Athan Reines)_
-   [`1032827`](https://github.com/stdlib-js/stdlib/commit/1032827c6b8d735e596b586483ced0ab56c65733) - **feat:** add 7d macros _(by Athan Reines)_
-   [`375cc14`](https://github.com/stdlib-js/stdlib/commit/375cc1414897521d2a08cf68431e9d9b57057d51) - **feat:** add 6d macros _(by Athan Reines)_
-   [`ef5ac9c`](https://github.com/stdlib-js/stdlib/commit/ef5ac9c8be208e28126ca44197cf6eaf7022d343) - **feat:** add 5d macros _(by Athan Reines)_
-   [`fb74648`](https://github.com/stdlib-js/stdlib/commit/fb74648f427a15f27765c46130aadb64a432f0b4) - **feat:** add 4d macros _(by Athan Reines)_
-   [`92b4704`](https://github.com/stdlib-js/stdlib/commit/92b47045fe2b3d36a2a1ea802411b2c9bff221f9) - **feat:** add 3d macros _(by Athan Reines)_
-   [`382eff4`](https://github.com/stdlib-js/stdlib/commit/382eff4642422f1e7a8ff0f1fb05b5ec9642384d) - **docs:** fix comment _(by Athan Reines)_
-   [`6126c56`](https://github.com/stdlib-js/stdlib/commit/6126c560ec19909e26ea9182b09e362805dcdad1) - **feat:** add 2d blocked macros _(by Athan Reines)_
-   [`c274741`](https://github.com/stdlib-js/stdlib/commit/c274741b9abb10df5dc8a887ca2500db5bb506c0) - **fix:** define constant pointer _(by Athan Reines)_
-   [`e76a62f`](https://github.com/stdlib-js/stdlib/commit/e76a62fbd4563eaa921bbfe5e4b515ec8a2668bf) - **fix:** set pointer to constant _(by Athan Reines)_
-   [`845e64a`](https://github.com/stdlib-js/stdlib/commit/845e64a2f7e12bd60729097230774569b2d4954e) - **refactor:** update paths _(by Gururaj Gurram)_
-   [`3609a6b`](https://github.com/stdlib-js/stdlib/commit/3609a6beacc5cecaad7b9906ee796c4897801892) - **feat:** add 2d macros _(by Athan Reines)_
-   [`30a9f4d`](https://github.com/stdlib-js/stdlib/commit/30a9f4d177d487dd6211707a47a4197a736d24f0) - **feat:** add 1d macros _(by Athan Reines)_
-   [`b4d1f2a`](https://github.com/stdlib-js/stdlib/commit/b4d1f2acb831253107b9e6e4a11bf0660f3c1660) - **chore:** update copyright years _(by Athan Reines)_
-   [`4194f20`](https://github.com/stdlib-js/stdlib/commit/4194f20366c7ad8ae0121a9e5cd1821f8edaaa6f) - **feat:** add header for dispatch function _(by Athan Reines)_
-   [`7e4c3fc`](https://github.com/stdlib-js/stdlib/commit/7e4c3fcc009fa5d2681378249f0de42b0cb67920) - **docs:** add TypeScript declarations _(by Athan Reines)_
-   [`5c412d3`](https://github.com/stdlib-js/stdlib/commit/5c412d3fbf47959a6b7d386fcb319dad664ddbde) - **feat:** add constant macros _(by Athan Reines)_
-   [`f0dc809`](https://github.com/stdlib-js/stdlib/commit/f0dc80912cc1ad7ab94f05a90704e96c75aa69fc) - **feat:** add typedefs _(by Athan Reines)_
-   [`242e3a9`](https://github.com/stdlib-js/stdlib/commit/242e3a9378662d968b32e65e5e15f0c545b79b7d) - **feat:** add dispatch object header _(by Athan Reines)_
-   [`af95422`](https://github.com/stdlib-js/stdlib/commit/af954224f1ff50e950c27f9fb56e7453e6eca4b5) - **docs:** add folder README _(by Athan Reines)_
-   [`de19c22`](https://github.com/stdlib-js/stdlib/commit/de19c2218e00215027ff8f57bcfaae326cf590ee) - **test:** add initial test file _(by Athan Reines)_
-   [`ada26fc`](https://github.com/stdlib-js/stdlib/commit/ada26fc7215bcaef495b16f2db2c7a306d449d42) - **docs:** add package meta data _(by Athan Reines)_
-   [`8f3b1e2`](https://github.com/stdlib-js/stdlib/commit/8f3b1e265eee6bcdd2b822c54e1742fdfd276240) - **docs:** add REPL help _(by Athan Reines)_
-   [`7ca0425`](https://github.com/stdlib-js/stdlib/commit/7ca042590eea8a8d796bfa86e6662810d3176c6b) - **docs:** add example _(by Athan Reines)_
-   [`1b340b4`](https://github.com/stdlib-js/stdlib/commit/1b340b4aba5c597ea2a1cae079264215b62c823c) - **bench:** add benchmarks _(by Athan Reines)_
-   [`090d188`](https://github.com/stdlib-js/stdlib/commit/090d188f6925e3d6cdc98f63815996ef952bf249) - **build:** add header template _(by Athan Reines)_
-   [`9f517d8`](https://github.com/stdlib-js/stdlib/commit/9f517d8d5d18593c7a60d0fb4d0b0fe51f7087d0) - **feat:** add header files for internal C utilities _(by Athan Reines)_
-   [`7a58757`](https://github.com/stdlib-js/stdlib/commit/7a587578700738d61b0beddb311c967a8bf4c0f7) - **feat:** add internal C utilities _(by Athan Reines)_
-   [`4b2a5de`](https://github.com/stdlib-js/stdlib/commit/4b2a5de6d1d42c0ab318f71d77af2ffa1b86b1fc) - **feat:** add implementation for `ndarray/base/every` _(by Athan Reines)_
-   [`843fd22`](https://github.com/stdlib-js/stdlib/commit/843fd22b54dd151a98bf2dd9f145147a6e7f8522) - **docs:** fix example _(by Athan Reines)_
-   [`d6437f7`](https://github.com/stdlib-js/stdlib/commit/d6437f72ff5f7b0b08c531e25826651f28757143) - **docs:** fix example _(by Athan Reines)_
-   [`ea0fc20`](https://github.com/stdlib-js/stdlib/commit/ea0fc20c91111d85cc32c9d38bd7ce7a70b825f8) - **chore:** fix EditorConfig lint error [(#6135)](https://github.com/stdlib-js/stdlib/pull/6135) _(by Bhavishy Agrawal, Athan Reines)_
-   [`b6a6575`](https://github.com/stdlib-js/stdlib/commit/b6a657548d4e7beacc37f26e7f49c77ae3ea2f0b) - **chore:** fix EditorConfig lint errors [(#6057)](https://github.com/stdlib-js/stdlib/pull/6057) _(by Kaushikgtm)_
-   [`45a92db`](https://github.com/stdlib-js/stdlib/commit/45a92dba41673fda4e01deb4cfc74e7bcb28d50b) - **bench:** fix require expression _(by Athan Reines)_
-   [`3938b26`](https://github.com/stdlib-js/stdlib/commit/3938b265e603116448c89fcaa58df70e79d40f59) - **refactor:** update paths _(by Gururaj Gurram)_
-   [`40b4245`](https://github.com/stdlib-js/stdlib/commit/40b4245a2a2ddc1fc8d93ea54a6f629102a037bc) - **chore:** fix EditorConfig lint errors [(#5970)](https://github.com/stdlib-js/stdlib/pull/5970) _(by Kaushikgtm)_
-   [`a1e8f03`](https://github.com/stdlib-js/stdlib/commit/a1e8f03af0ee470d0783cb840878dc7cde0826c3) - **chore:** fix EditorConfig lint errors [(#5543)](https://github.com/stdlib-js/stdlib/pull/5543) _(by ditsu, Athan Reines, Philipp Burckhardt)_
-   [`2f0aa48`](https://github.com/stdlib-js/stdlib/commit/2f0aa48ef6d561779d4bd4c4a54fe00a5a26c0e1) - **feat:** update namespace TypeScript declarations [(#5436)](https://github.com/stdlib-js/stdlib/pull/5436) _(by stdlib-bot)_
-   [`9d532b5`](https://github.com/stdlib-js/stdlib/commit/9d532b5510055d80c5df8ba4c8e897c1670dcd1a) - **docs:** update namespace table of contents [(#5438)](https://github.com/stdlib-js/stdlib/pull/5438) _(by stdlib-bot, Philipp Burckhardt)_
-   [`c1b6794`](https://github.com/stdlib-js/stdlib/commit/c1b6794e36255d7df6795f5f5f4d3e493165f397) - **feat:** add `isOutputDataTypePolicy` to namespace _(by Athan Reines)_
-   [`9cabe87`](https://github.com/stdlib-js/stdlib/commit/9cabe87a0ce5401967f41d91dc4479a722ba3288) - **feat:** add `ndarray/base/assert/is-output-data-type-policy` _(by Athan Reines)_
-   [`2632915`](https://github.com/stdlib-js/stdlib/commit/2632915e58a2949e11840ce39161f5056a700afc) - **test:** fix variable name _(by Athan Reines)_
-   [`f230249`](https://github.com/stdlib-js/stdlib/commit/f23024908c1d43ff5c2a8402a53cad2ff1054366) - **feat:** add support for `_and_generic` data type policies _(by Athan Reines)_
-   [`c27d672`](https://github.com/stdlib-js/stdlib/commit/c27d672d1d72d49c7331f44b9b00f6324d67f218) - **test:** fix tests due to upstream patches _(by Athan Reines)_
-   [`ba9b416`](https://github.com/stdlib-js/stdlib/commit/ba9b4160f16f1ae1a7f8603920ae0a9f43e6b29f) - **fix:** rename `bool` to `boolean` to match data type kind and avoid conflict with `bool` data type _(by Athan Reines)_
-   [`2b8c0d7`](https://github.com/stdlib-js/stdlib/commit/2b8c0d7579975a2fffdcf8cd8607d93ab8fe5658) - **feat:** add policies which support returning a \"generic\" data type _(by Athan Reines)_
-   [`81e5755`](https://github.com/stdlib-js/stdlib/commit/81e5755a07adae5d75fbbd113f677d57247c94bc) - **refactor:** update path _(by Athan Reines)_
-   [`d38fd36`](https://github.com/stdlib-js/stdlib/commit/d38fd36fcf6ac58240b13abe41ceb3046f36a8b2) - **style:** resolve lint errors _(by Athan Reines)_
-   [`836170d`](https://github.com/stdlib-js/stdlib/commit/836170decec14309639deb41ae3a3c22256d68af) - **refactor:** update paths _(by Gururaj Gurram)_
-   [`421c4cf`](https://github.com/stdlib-js/stdlib/commit/421c4cfcd29b8dafd580ef8feecb1d664de64040) - **bench:** fix assertion _(by Athan Reines)_
-   [`ad5e480`](https://github.com/stdlib-js/stdlib/commit/ad5e480824fd11be76a4ecd064a6f1e1f228162e) - **bench:** fix invocations _(by Athan Reines)_
-   [`30f0e04`](https://github.com/stdlib-js/stdlib/commit/30f0e04aa6bac8f09661925a1975f8e065321a33) - **chore:** resolve lint errors _(by Athan Reines)_
-   [`00b45b2`](https://github.com/stdlib-js/stdlib/commit/00b45b292b95bcaa1b47f4cd3b933c94bbf5f7be) - **docs:** update examples _(by Athan Reines)_
-   [`2e9ea06`](https://github.com/stdlib-js/stdlib/commit/2e9ea0690e40506e0c09764f40f8163fb0c7ff7c) - **fix:** update signatures _(by Athan Reines)_
-   [`f75dcc2`](https://github.com/stdlib-js/stdlib/commit/f75dcc2318bdfb56f5372ea81683a0be2b26b7e9) - **feat:** enable completed macros _(by Athan Reines)_
-   [`390d7df`](https://github.com/stdlib-js/stdlib/commit/390d7df2e67aedbf14b148fa1bafa3963d93a7bf) - **docs:** update examples _(by Athan Reines)_
-   [`59e3ecb`](https://github.com/stdlib-js/stdlib/commit/59e3ecbe6a175a51d5fdf9568c160c07640ded93) - **docs:** update examples _(by Athan Reines)_
-   [`f55d93c`](https://github.com/stdlib-js/stdlib/commit/f55d93c0d2c8ff2fcb27ac1cec1f05648fbaf9e8) - **docs:** update comment _(by Athan Reines)_
-   [`a30acad`](https://github.com/stdlib-js/stdlib/commit/a30acadd3b5501e87434d81a67da469dc669814b) - **docs:** update examples _(by Athan Reines)_
-   [`510faa8`](https://github.com/stdlib-js/stdlib/commit/510faa8105a50136c0515b502538525cbd73a218) - **docs:** update copy _(by Athan Reines)_
-   [`40580e2`](https://github.com/stdlib-js/stdlib/commit/40580e249115744f20e97bc85a8b4168a39596d8) - **build:** add source templates _(by Athan Reines)_
-   [`e0729ac`](https://github.com/stdlib-js/stdlib/commit/e0729ac66ecdc917546e59767d037c33fdaebe63) - **build:** add manifest file _(by Athan Reines)_
-   [`3552e0e`](https://github.com/stdlib-js/stdlib/commit/3552e0e05840ebfc2fe3455384ddc014b447c1ca) - **bench:** add 2d benchmarks _(by Athan Reines)_
-   [`af2bd1f`](https://github.com/stdlib-js/stdlib/commit/af2bd1f4518bb0f599d3b3b4d598dd08829ae97d) - **bench:** add 1d benchmarks _(by Athan Reines)_
-   [`d3e18e1`](https://github.com/stdlib-js/stdlib/commit/d3e18e1a37c524f1e7d7f3f4723cbc63977a9d03) - **bench:** add 11d benchmarks _(by Athan Reines)_
-   [`8420c5a`](https://github.com/stdlib-js/stdlib/commit/8420c5aae35d63025cee62e5c4f8eee30f0b45dd) - **bench:** add 10d benchmarks _(by Athan Reines)_
-   [`0a457b7`](https://github.com/stdlib-js/stdlib/commit/0a457b79efc50fca93946020d071b5f071c100bd) - **build:** add header template _(by Athan Reines)_
-   [`8e40a3c`](https://github.com/stdlib-js/stdlib/commit/8e40a3c3c8bddb453028fa3a3800546657e18b4e) - **build:** add docs template _(by Athan Reines)_
-   [`c645151`](https://github.com/stdlib-js/stdlib/commit/c6451519aad4497373b2ce803467673309f746af) - **chore:** add package meta data _(by Athan Reines)_
-   [`fdbe9c2`](https://github.com/stdlib-js/stdlib/commit/fdbe9c218cfe554e8e929186f4ba4e70ba884c72) - **docs:** add README _(by Athan Reines)_
-   [`9f59d85`](https://github.com/stdlib-js/stdlib/commit/9f59d859b51df15f67ab19ee6b1b52c386c52a8c) - **feat:** add dispatcher _(by Athan Reines)_
-   [`74a1e24`](https://github.com/stdlib-js/stdlib/commit/74a1e244d67128d21fb053d3819c461ba682b804) - **docs:** add example _(by Athan Reines)_
-   [`665d4fe`](https://github.com/stdlib-js/stdlib/commit/665d4fef52207ace1795cbcd226f4eccfd0b54e8) - **feat:** add 3d accumulation macros _(by Athan Reines)_
-   [`c82563a`](https://github.com/stdlib-js/stdlib/commit/c82563aa50c03568da53abce9420b97924f60e3f) - **fix:** remove continuation _(by Athan Reines)_
-   [`05201fc`](https://github.com/stdlib-js/stdlib/commit/05201fc38530d538e5e6a6124d7406a9720e51f5) - **feat:** add macros for 2d accumulation _(by Athan Reines)_
-   [`77ad50a`](https://github.com/stdlib-js/stdlib/commit/77ad50a2c98aefbf161fbbf19c286c966259e72b) - **docs:** rename parameter _(by Athan Reines)_
-   [`82a0d1b`](https://github.com/stdlib-js/stdlib/commit/82a0d1b2e045e08bc4bb5b8eb3c2e3e0c77e5ac1) - **refactor:** rename parameter _(by Athan Reines)_
-   [`52f7ac2`](https://github.com/stdlib-js/stdlib/commit/52f7ac26eff82f57ccfca5a3b04c15dbacad074e) - **fix:** use correct stride _(by Athan Reines)_
-   [`e689326`](https://github.com/stdlib-js/stdlib/commit/e68932672651e213b4cf6500100d7055b794ba82) - **fix:** use correct stride _(by Athan Reines)_
-   [`e3e0b26`](https://github.com/stdlib-js/stdlib/commit/e3e0b26c6cee0ceaef93c85895ad65e3178399db) - **feat:** add header file _(by Athan Reines)_
-   [`4ccc539`](https://github.com/stdlib-js/stdlib/commit/4ccc5395a330137ccb62cfdd9e59035beb79c948) - **feat:** add header file _(by Athan Reines)_
-   [`963a710`](https://github.com/stdlib-js/stdlib/commit/963a7106b0f2b895403ce28a6d384c2f0f80eae6) - **feat:** add header files _(by Athan Reines)_
-   [`629d388`](https://github.com/stdlib-js/stdlib/commit/629d388f7cfee9c1d539c89ab0a401e5496074b2) - **feat:** add headers for internal utilities _(by Athan Reines)_
-   [`be03002`](https://github.com/stdlib-js/stdlib/commit/be030020b7201707258c67b8dc278792dabd2426) - **docs:** add folder README _(by Athan Reines)_
-   [`9055997`](https://github.com/stdlib-js/stdlib/commit/90559976d2b8f3b825ad434dfdae86f8505a876f) - **feat:** add internal utilities _(by Athan Reines)_
-   [`b0fecf0`](https://github.com/stdlib-js/stdlib/commit/b0fecf04e18fe12dccd1faa2b6f3871efa71bb8b) - **test:** add stub test file _(by Athan Reines)_
-   [`efe1f05`](https://github.com/stdlib-js/stdlib/commit/efe1f05049247502e9b124957755ebc6d7974b4e) - **docs:** add note _(by Athan Reines)_
-   [`fc93a7c`](https://github.com/stdlib-js/stdlib/commit/fc93a7c94279c57675c8fc695189200ec0129821) - **docs:** add note _(by Athan Reines)_
-   [`1634973`](https://github.com/stdlib-js/stdlib/commit/16349736f27970606eda37417f4d2c868d9f1457) - **docs:** add note _(by Athan Reines)_
-   [`2d758d2`](https://github.com/stdlib-js/stdlib/commit/2d758d2dbab56194af31b9d54988b5fb9b928860) - **docs:** add note _(by Athan Reines)_
-   [`705dd30`](https://github.com/stdlib-js/stdlib/commit/705dd302fe6448af5addcacf9215574da5473f31) - **docs:** update examples _(by Athan Reines)_
-   [`e661213`](https://github.com/stdlib-js/stdlib/commit/e66121352ef767cdb87d19e938b1eccf7970fa3a) - **feat:** update namespace TypeScript declarations [(#4706)](https://github.com/stdlib-js/stdlib/pull/4706) _(by stdlib-bot)_
-   [`cff470f`](https://github.com/stdlib-js/stdlib/commit/cff470f9608165100c8c122fce70c40b1af864ec) - **docs:** update namespace table of contents (#4708) _(by stdlib-bot, Planeshifter)_
-   [`741b6f1`](https://github.com/stdlib-js/stdlib/commit/741b6f1df8ce11e77fb22c279cee6bbae3323176) - **feat:** add `spreadDimensions` to namespace _(by Athan Reines)_
-   [`3767255`](https://github.com/stdlib-js/stdlib/commit/3767255c7cfe85f09cea5c007e21297cd628245d) - **feat:** add `ndarray/base/spread-dimensions` _(by Athan Reines)_
-   [`712a9a8`](https://github.com/stdlib-js/stdlib/commit/712a9a8554f59fdfe520c4e2daafdbfd93637c76) - **fix:** compute singleton strides as if strides computed apriori _(by Athan Reines)_
-   [`c634089`](https://github.com/stdlib-js/stdlib/commit/c634089f1fdf724c589c016b55da015a1d779709) - **refactor:** use ndarray utility to normalize an index _(by Athan Reines)_
-   [`dbb338e`](https://github.com/stdlib-js/stdlib/commit/dbb338e80336515e9f7ef602188985bbbe9b9010) - **docs:** update related packages sections [(#4690)](https://github.com/stdlib-js/stdlib/pull/4690) _(by stdlib-bot)_
-   [`a94dcea`](https://github.com/stdlib-js/stdlib/commit/a94dceaa9469c774ee4622567e4c15a15e215bcf) - **feat:** add `isColumnMajorString` to namespace _(by Athan Reines)_
-   [`76872c7`](https://github.com/stdlib-js/stdlib/commit/76872c76f1c655afe5e87d9d894be37f6a07c08b) - **feat:** add `ndarray/base/assert/is-column-major-string` _(by Athan Reines)_
-   [`5e1be08`](https://github.com/stdlib-js/stdlib/commit/5e1be08ff661fb981dc4a91c2e9d37d7396327f5) - **feat:** add `isRowMajorString` to namespace _(by Athan Reines)_
-   [`8cce31a`](https://github.com/stdlib-js/stdlib/commit/8cce31aadb16c58d167e89b6b9f8483d9314715f) - **feat:** add `ndarray/base/assert/is-row-major-string` _(by Athan Reines)_
-   [`851a95f`](https://github.com/stdlib-js/stdlib/commit/851a95f2201a21f8a1535f61cd002de260bd2236) - **bench:** simplify value selection _(by Athan Reines)_
-   [`264a2fc`](https://github.com/stdlib-js/stdlib/commit/264a2fce5b1fcfdf53cb27fe16980f5414564baf) - **refactor:** use base array utility _(by Athan Reines)_
-   [`e588900`](https://github.com/stdlib-js/stdlib/commit/e5889000cb438ee4ea7f1ba8c9a2922b71a9c462) - **chore:** fix meta data _(by Athan Reines)_
-   [`11c2592`](https://github.com/stdlib-js/stdlib/commit/11c25926baf0e0c76912c482663b5c3daf4abd1d) - **chore:** fix meta data _(by Athan Reines)_
-   [`838bb5b`](https://github.com/stdlib-js/stdlib/commit/838bb5be71f0e7f5304cc38c7769653df0d03bd1) - **chore:** fix meta data _(by Athan Reines)_
-   [`908239e`](https://github.com/stdlib-js/stdlib/commit/908239e7cc6b4b3e260d0cc1f5aebb9af35d83c6) - **feat:** add `toUniqueNormalizedIndices` to namespace _(by Athan Reines)_
-   [`494a92b`](https://github.com/stdlib-js/stdlib/commit/494a92bf8a9fba830cbffcc7017097fae36dd73b) - **feat:** add `ndarray/base/to-unique-normalized-indices` _(by Athan Reines)_
-   [`14073ce`](https://github.com/stdlib-js/stdlib/commit/14073ce88718e9a4979110bb5390c9e6fd53a322) - **docs:** fix return type _(by Athan Reines)_
-   [`abcceb2`](https://github.com/stdlib-js/stdlib/commit/abcceb2d29719b7f1ac25c9fa8dd7f41992a5553) - **docs:** fix example return value _(by Athan Reines)_
-   [`524e854`](https://github.com/stdlib-js/stdlib/commit/524e854202862d5b37d66470d719fac1270e33c1) - **feat:** add `toNormalizedIndices` to namespace _(by Athan Reines)_
-   [`9f1d586`](https://github.com/stdlib-js/stdlib/commit/9f1d586a2c8d619deb5c6c6334e1c0fadb452075) - **feat:** add `ndarray/base/to-normalized-indices` _(by Athan Reines)_
-   [`5e72ffb`](https://github.com/stdlib-js/stdlib/commit/5e72ffbd59654061d22173d326e9d66dfe4ed0d3) - **refactor:** allow input to be any array-like object of numbers _(by Athan Reines)_
-   [`7bb4167`](https://github.com/stdlib-js/stdlib/commit/7bb4167cb5017f6ab6a1f4018bd1e0b28f57eb44) - **feat:** add `normalizeIndices` to namespace _(by Athan Reines)_
-   [`8615f56`](https://github.com/stdlib-js/stdlib/commit/8615f568459d831a04b78034ec5141567f13d1d9) - **feat:** add `ndarray/base/normalize-indices` _(by Athan Reines)_
-   [`d2d8a05`](https://github.com/stdlib-js/stdlib/commit/d2d8a05f2b3de75e8a1537e8b71b00f32f71c57b) - **docs:** add TypeScript declarations _(by Athan Reines)_
-   [`ad85c44`](https://github.com/stdlib-js/stdlib/commit/ad85c446105fdd4922bc89900e1cccc003e4ddf3) - **docs:** add repl help _(by Athan Reines)_
-   [`a768ca7`](https://github.com/stdlib-js/stdlib/commit/a768ca7e554ff8224b58e7c9ca5abdbd4994bce2) - **docs:** add example _(by Athan Reines)_
-   [`f706f53`](https://github.com/stdlib-js/stdlib/commit/f706f53580a821ca491a314462a09fd7ef72494e) - **chore:** update copyright years _(by Athan Reines)_
-   [`cc6f711`](https://github.com/stdlib-js/stdlib/commit/cc6f7116815dd33f196292a66017b832b6ff0e30) - **feat:** add main entry point _(by Athan Reines)_
-   [`c90c354`](https://github.com/stdlib-js/stdlib/commit/c90c354affab090f1c91ce1401dcf3acf8320fbe) - **feat:** add an n-d accessors accumulator _(by Athan Reines)_
-   [`064a8f9`](https://github.com/stdlib-js/stdlib/commit/064a8f9fdcc19b02659a44db6dd05b3d5b32a7b3) - **feat:** add an n-d accumulator _(by Athan Reines)_
-   [`2d93dfb`](https://github.com/stdlib-js/stdlib/commit/2d93dfbfa7953c84fd9b03bda5df082b59b309e3) - **feat:** add 9d blocked accessors accumulator _(by Athan Reines)_
-   [`fdc3131`](https://github.com/stdlib-js/stdlib/commit/fdc3131072c2b6c0804092cb8df9fc2860e01021) - **feat:** add 9d blocked accumulator _(by Athan Reines)_
-   [`ea6b38c`](https://github.com/stdlib-js/stdlib/commit/ea6b38c252925110fa3240f8c9cab2aac7d4d0f4) - **feat:** add 9d accessors accumulators _(by Athan Reines)_
-   [`3c51978`](https://github.com/stdlib-js/stdlib/commit/3c5197834ef9003436d9a6a2e65827649a28e97d) - **feat:** add 9d accumulator _(by Athan Reines)_
-   [`24c8a3a`](https://github.com/stdlib-js/stdlib/commit/24c8a3a234cc9ba047815f21d4c994bf85989494) - **feat:** add 8d blocked accessors accumulator _(by Athan Reines)_
-   [`e320953`](https://github.com/stdlib-js/stdlib/commit/e32095351dc5560b67c30e4d1e00282279a04edf) - **feat:** add 8d blocked accumulator _(by Athan Reines)_
-   [`a995be8`](https://github.com/stdlib-js/stdlib/commit/a995be8e3cb2c9a80442ed24056abee15a21a4f4) - **feat:** add 8d accessors accumulator _(by Athan Reines)_
-   [`0a6350e`](https://github.com/stdlib-js/stdlib/commit/0a6350e19d048ce3df15fcba526ad4572089e97d) - **feat:** add 8d accumulator _(by Athan Reines)_
-   [`fe22938`](https://github.com/stdlib-js/stdlib/commit/fe2293857a27ba412cd1bfc7f757ec8b7ab78643) - **feat:** add 7d blocked accessors accumulator _(by Athan Reines)_
-   [`1617255`](https://github.com/stdlib-js/stdlib/commit/1617255739ae2282d166b237c38b05f38303c9b4) - **feat:** add 7d blocked accumulator _(by Athan Reines)_
-   [`627699c`](https://github.com/stdlib-js/stdlib/commit/627699ceb1abe555d9fa6320373c239750e82a9c) - **feat:** add 7d accessors accumulator _(by Athan Reines)_
-   [`39f87db`](https://github.com/stdlib-js/stdlib/commit/39f87db060078addf749b53326670548e02eb34b) - **feat:** add 7d accumulator _(by Athan Reines)_
-   [`c02cc5e`](https://github.com/stdlib-js/stdlib/commit/c02cc5ec7f4834b968878c80df04e6cd5390bc6c) - **feat:** add 6d blocked accessors accumulator _(by Athan Reines)_
-   [`79a6c7c`](https://github.com/stdlib-js/stdlib/commit/79a6c7cc87aa714c9b9e900d532cc44906088743) - **feat:** add 6d blocked accumulator _(by Athan Reines)_
-   [`70d0d2a`](https://github.com/stdlib-js/stdlib/commit/70d0d2aa36f0a3d430aaaf37e018c3b54fec7bb1) - **feat:** add 6d accessors accumulator _(by Athan Reines)_
-   [`3e0c232`](https://github.com/stdlib-js/stdlib/commit/3e0c2323b5d09296cda154271dc0a775deb4bb61) - **feat:** add 6d accumulator _(by Athan Reines)_
-   [`42e1358`](https://github.com/stdlib-js/stdlib/commit/42e13587ea8c874482ccd9d054914e7853c868e3) - **feat:** add 5d blocked accessors accumulator _(by Athan Reines)_
-   [`828a6a6`](https://github.com/stdlib-js/stdlib/commit/828a6a659015cd0187b8b85a3a83105d2f50807c) - **feat:** add 5d blocked accumulator _(by Athan Reines)_
-   [`298fb43`](https://github.com/stdlib-js/stdlib/commit/298fb438f7996eaef6ffb9069057b524d17c4a23) - **feat:** add 5d accessors accumulator _(by Athan Reines)_
-   [`9678ff8`](https://github.com/stdlib-js/stdlib/commit/9678ff84f0823d1272b893c7c638d6b014b17523) - **feat:** add 5d accumulator _(by Athan Reines)_
-   [`ace6b17`](https://github.com/stdlib-js/stdlib/commit/ace6b177e8e4ba85b47c6c3fae39540b70609e0c) - **feat:** add 4d blocked accessors accumulator _(by Athan Reines)_
-   [`c686569`](https://github.com/stdlib-js/stdlib/commit/c68656944c4ff05c3cdcd6ff8f084354b207d86a) - **feat:** add 4d blocked accumulator _(by Athan Reines)_
-   [`afe0d98`](https://github.com/stdlib-js/stdlib/commit/afe0d98c95b5ed839049014e161f368d81d6852f) - **feat:** add 4d accessors accumulator _(by Athan Reines)_
-   [`714ab64`](https://github.com/stdlib-js/stdlib/commit/714ab64dcbc8911f317ffc4e3b315b1c48192eb6) - **feat:** add 4d accumulator _(by Athan Reines)_
-   [`062be58`](https://github.com/stdlib-js/stdlib/commit/062be5859727da44f5af9d38cde6de39f61b51f7) - **feat:** add 3d blocked accessors accumulator _(by Athan Reines)_
-   [`a78f2b1`](https://github.com/stdlib-js/stdlib/commit/a78f2b162c32840702e0b02e8d730ae1b568ae97) - **feat:** add 3d blocked accumulator _(by Athan Reines)_
-   [`ea33936`](https://github.com/stdlib-js/stdlib/commit/ea339369e379fd22a635e1e11c7e9412a4385528) - **feat:** add 3d accessors accumulator _(by Athan Reines)_
-   [`33036b0`](https://github.com/stdlib-js/stdlib/commit/33036b038cecaa5b98e1b4793d41077cc9168513) - **feat:** add 3d accumulator _(by Athan Reines)_
-   [`45fe885`](https://github.com/stdlib-js/stdlib/commit/45fe885cc5f595cf68804bf605f5dc4fdc5a3580) - **feat:** add 2d blocked accessors accumulator _(by Athan Reines)_
-   [`4c080fd`](https://github.com/stdlib-js/stdlib/commit/4c080fd599fdff49cade83dbd29d6b75f862c7bb) - **feat:** add 2d blocked accumulator _(by Athan Reines)_
-   [`35ef28d`](https://github.com/stdlib-js/stdlib/commit/35ef28d935caeb85d7369cfe0e8b984abb61ef8b) - **docs:** fix comment _(by Athan Reines)_
-   [`48e9197`](https://github.com/stdlib-js/stdlib/commit/48e919759ec6c48d3c3f328014af204ee81c0981) - **docs:** fix comment _(by Athan Reines)_
-   [`caf7397`](https://github.com/stdlib-js/stdlib/commit/caf7397f94553933295586c183275201e7df96e7) - **feat:** add 2d accessors accumulator _(by Athan Reines)_
-   [`1a5172d`](https://github.com/stdlib-js/stdlib/commit/1a5172d9de881e97d4300b022201a154eb1e0ca0) - **feat:** add 2d accumulator _(by Athan Reines)_
-   [`74d9fef`](https://github.com/stdlib-js/stdlib/commit/74d9fefaff44947b314862a3574857e0cdb7ab03) - **feat:** add 1d accessors accumulator _(by Athan Reines)_
-   [`2d97fb5`](https://github.com/stdlib-js/stdlib/commit/2d97fb548f0d0c7722bc1d4c540b352b203ff236) - **feat:** add 1d accumulator _(by Athan Reines)_
-   [`db61fca`](https://github.com/stdlib-js/stdlib/commit/db61fcae67ae7bb23ac2b9ce0084eb1f67b18cf6) - **feat:** add 10d blocked accessor accumulator _(by Athan Reines)_
-   [`8bc84b3`](https://github.com/stdlib-js/stdlib/commit/8bc84b33f635d90af7c2da209bcf6fb4fce0e15f) - **feat:** add 10d blocked accumulator _(by Athan Reines)_
-   [`b516586`](https://github.com/stdlib-js/stdlib/commit/b51658624b80eb39eddeb5d752b781f77a2c3b5a) - **feat:** add 10d accessors accumulator _(by Athan Reines)_
-   [`f36a0ab`](https://github.com/stdlib-js/stdlib/commit/f36a0ab4aaa1cdf08748fcde1339fe41b335eca2) - **feat:** add 10d accumulator _(by Athan Reines)_
-   [`7601be7`](https://github.com/stdlib-js/stdlib/commit/7601be773588756a38c537b4dbc48f1ae4d2c90a) - **feat:** add 0d accessor accumulator _(by Athan Reines)_
-   [`a049375`](https://github.com/stdlib-js/stdlib/commit/a04937599dfcc1cb4dbd1c3998748f8fd72e7610) - **feat:** add 0d accumulator _(by Athan Reines)_
-   [`e0af8c4`](https://github.com/stdlib-js/stdlib/commit/e0af8c4bf522a77f3c0073acbb0b1a0679575809) - **docs:** fix description _(by Athan Reines)_
-   [`10a14b5`](https://github.com/stdlib-js/stdlib/commit/10a14b576aa39aba24959261860788f82efdcd26) - **docs:** fix description _(by Athan Reines)_
-   [`9f49cfb`](https://github.com/stdlib-js/stdlib/commit/9f49cfb0e8047348ee5dc24d64bf82afbc7ca644) - **docs:** fix description _(by Athan Reines)_
-   [`769b921`](https://github.com/stdlib-js/stdlib/commit/769b921be1ac5285f0becdaaae27cace376ee124) - **docs:** update related packages sections [(#4638)](https://github.com/stdlib-js/stdlib/pull/4638) _(by stdlib-bot, Athan Reines)_
-   [`cc71dc2`](https://github.com/stdlib-js/stdlib/commit/cc71dc23c9335d7187844e6a020cff2594679e76) - **docs:** update related packages sections [(#4622)](https://github.com/stdlib-js/stdlib/pull/4622) _(by stdlib-bot)_
-   [`f231799`](https://github.com/stdlib-js/stdlib/commit/f231799e1d40cfff7ceb79a6074166a08c4ba072) - **docs:** update related packages sections [(#4545)](https://github.com/stdlib-js/stdlib/pull/4545) _(by stdlib-bot)_
-   [`84a3698`](https://github.com/stdlib-js/stdlib/commit/84a36981e85104c9ee4204a87d3d7b14f4141396) - **docs:** fix grammar _(by Athan Reines)_
-   [`2764a32`](https://github.com/stdlib-js/stdlib/commit/2764a32b5942d2aff2d0fe8cfcb2cd6b9c184633) - **docs:** fix grammar _(by Athan Reines)_
-   [`5e977ba`](https://github.com/stdlib-js/stdlib/commit/5e977ba129f9aa3e1d88ccba7db34a38f355f113) - **docs:** fix grammar and type annotation _(by Athan Reines)_
-   [`f8777ec`](https://github.com/stdlib-js/stdlib/commit/f8777ec116247e8481a20c0798dccfa90baa6171) - **docs:** fix grammar _(by Athan Reines)_
-   [`2bde288`](https://github.com/stdlib-js/stdlib/commit/2bde288643491a4c317a02fe6b835c81e05e2235) - **docs:** fix grammar _(by Athan Reines)_
-   [`4b4fbbe`](https://github.com/stdlib-js/stdlib/commit/4b4fbbe10e081052684191d56965c57cc8f2785b) - **docs:** fix copy and dtype _(by Athan Reines)_
-   [`8a15baa`](https://github.com/stdlib-js/stdlib/commit/8a15baa639e8c4f45479821cf7331715e0546e86) - **docs:** update related packages sections [(#4425)](https://github.com/stdlib-js/stdlib/pull/4425) _(by stdlib-bot)_
-   [`33b46cb`](https://github.com/stdlib-js/stdlib/commit/33b46cbab14e25a72a7464d6d923f09a56ee0d44) - **feat:** update namespace TypeScript declarations [(#4426)](https://github.com/stdlib-js/stdlib/pull/4426) _(by stdlib-bot, Philipp Burckhardt)_
-   [`edae311`](https://github.com/stdlib-js/stdlib/commit/edae3110b4b7cc1d675d44e211ffffcff77d6153) - **docs:** update namespace table of contents [(#4428)](https://github.com/stdlib-js/stdlib/pull/4428) _(by stdlib-bot, Philipp Burckhardt)_
-   [`e4a53d5`](https://github.com/stdlib-js/stdlib/commit/e4a53d5816f5918f7c7fc5135dce21d676835eca) - **docs:** update related packages sections [(#4399)](https://github.com/stdlib-js/stdlib/pull/4399) _(by stdlib-bot)_
-   [`259b682`](https://github.com/stdlib-js/stdlib/commit/259b682b2fb67d03e2987ca02b57d0cbc631ae8e) - **feat:** add support for specifying an array index cache and add support for linear indexing _(by Athan Reines)_
-   [`1ddeba9`](https://github.com/stdlib-js/stdlib/commit/1ddeba98295bb53fb8098d1016f0de4b7f544e96) - **feat:** add `scalar2ndarrayLike` to namespace _(by Athan Reines)_
-   [`b2dcaa0`](https://github.com/stdlib-js/stdlib/commit/b2dcaa0d97eeb11585ab4cae5b7c319308e6b3c2) - **feat:** add `ndarray/base/from-scalar-like` _(by Athan Reines)_
-   [`4301694`](https://github.com/stdlib-js/stdlib/commit/43016945387e02d6396d33cb7134c62c977b7fd8) - **docs:** update related packages sections [(#4362)](https://github.com/stdlib-js/stdlib/pull/4362) _(by stdlib-bot)_
-   [`cdf5e79`](https://github.com/stdlib-js/stdlib/commit/cdf5e79d125ce5da53cfa18df6ffbe2df5fe4d9f) - **docs:** update namespace table of contents [(#4365)](https://github.com/stdlib-js/stdlib/pull/4365) _(by stdlib-bot)_
-   [`25d8240`](https://github.com/stdlib-js/stdlib/commit/25d8240f51b27bd0ee85ca3ef70c89fd3778b902) - **feat:** update namespace TypeScript declarations [(#4363)](https://github.com/stdlib-js/stdlib/pull/4363) _(by stdlib-bot)_
-   [`7dc5c14`](https://github.com/stdlib-js/stdlib/commit/7dc5c14b995c7c4bd286087d04a20497057c0e71) - **refactor:** use assertion utility _(by Athan Reines)_
-   [`44547ea`](https://github.com/stdlib-js/stdlib/commit/44547ead986e505d5fdffac47d44cd1d18480f8c) - **feat:** add `ndarray2fancy` to namespace _(by Athan Reines)_
-   [`3f35e51`](https://github.com/stdlib-js/stdlib/commit/3f35e518a65e0cce1a8bcaf0ef6e4d45c08afc59) - **feat:** add `forEach` to namespace _(by Athan Reines)_
-   [`413827b`](https://github.com/stdlib-js/stdlib/commit/413827b397945f584daa5b2b2380e36d2d833ac3) - **feat:** add `ndindex` to namespace _(by Athan Reines)_
-   [`4d1bbcd`](https://github.com/stdlib-js/stdlib/commit/4d1bbcd8bb4bc13bb77f7fcda7d7701ebadf765d) - **feat:** add types for static methods _(by Athan Reines)_
-   [`0c85b4d`](https://github.com/stdlib-js/stdlib/commit/0c85b4d64aed91d8119330dd7aaa27fbc3629413) - **feat:** add `ndarray/index` _(by Athan Reines)_
-   [`5e2bbef`](https://github.com/stdlib-js/stdlib/commit/5e2bbef14efd5937e23047c01af0e740e6cbd4f6) - **fix:** add missing boolean array support _(by Athan Reines)_
-   [`be3e0b9`](https://github.com/stdlib-js/stdlib/commit/be3e0b984eb981caa758172dc7179cbd6a118a2e) - **fix:** treat generic accessor arrays similar to built-in generic arrays _(by Athan Reines)_
-   [`8f2808d`](https://github.com/stdlib-js/stdlib/commit/8f2808dec8c8a6508841e86453fba823823efc6c) - **docs:** update related packages sections [(#4302)](https://github.com/stdlib-js/stdlib/pull/4302) _(by stdlib-bot)_
-   [`4a70790`](https://github.com/stdlib-js/stdlib/commit/4a707903dfef7c2b56216000165706497d19a251) - **style:** add missing spaces _(by Philipp Burckhardt)_
-   [`acb12c7`](https://github.com/stdlib-js/stdlib/commit/acb12c77fd8eca09956f62e052f79ce1a0d9c1d0) - **refactor:** improve type specificity for array provided to callback _(by Athan Reines)_
-   [`5b71452`](https://github.com/stdlib-js/stdlib/commit/5b71452bd40811341a2e4eaab018c3cc17c5feac) - **docs:** update related packages sections [(#4135)](https://github.com/stdlib-js/stdlib/pull/4135) _(by stdlib-bot, Athan Reines)_
-   [`ac735b1`](https://github.com/stdlib-js/stdlib/commit/ac735b1ee32aa14c3760551c3f9a4acf3843fd76) - **feat:** add `ndarray/for-each` [(#3926)](https://github.com/stdlib-js/stdlib/pull/3926) _(by Muhammad Haris, Athan Reines)_
-   [`8684eb4`](https://github.com/stdlib-js/stdlib/commit/8684eb429498a239bff9bdd72f443dd1cd981552) - **docs:** update related packages sections [(#4114)](https://github.com/stdlib-js/stdlib/pull/4114) _(by stdlib-bot, Athan Reines)_
-   [`c322b66`](https://github.com/stdlib-js/stdlib/commit/c322b6647751b73a9d0fe12bf5665e8e2243d4ca) - **docs:** update related packages sections [(#4070)](https://github.com/stdlib-js/stdlib/pull/4070) _(by stdlib-bot, Philipp Burckhardt)_
-   [`a1b543a`](https://github.com/stdlib-js/stdlib/commit/a1b543a2a1bdf4d1fb9438bd4a13cb971af62063) - **docs:** update related packages sections [(#4009)](https://github.com/stdlib-js/stdlib/pull/4009) _(by stdlib-bot, Philipp Burckhardt)_
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

<section class="contributors">

### Contributors

A total of 20 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Bhavishy Agrawal
-   Deepak Singh
-   Dipjyoti Das
-   GeoDaoyu
-   Gururaj Gurram
-   Karan Vasudevamurthy
-   Kaushikgtm
-   Lokesh Ranjan
-   MANI
-   Muhammad Haris
-   Muhammad Taaha Tariq
-   Philipp Burckhardt
-   Pravesh Kunwar
-   Sai Avinash
-   Tushar Bhardwaj
-   devshree-bhati
-   ditsu
-   lohithganni
-   zhanggy

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.3.3">

## 0.3.3 (2024-11-05)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.3.2">

## 0.3.2 (2024-11-05)

<section class="features">

### Features

-   [`98e4809`](https://github.com/stdlib-js/stdlib/commit/98e480997058c3f21d3016b97d25f4c4e62231b9) - add `isBooleanDataType` to namespace
-   [`3e7f2ca`](https://github.com/stdlib-js/stdlib/commit/3e7f2ca3c987040575b732129281c384c453e0b8) - add `hasEqualShape` to namespace
-   [`6e74647`](https://github.com/stdlib-js/stdlib/commit/6e74647839e3ca184dd7df80df9bd0ede9505469) - add `ndarray/base/assert/has-equal-shape`
-   [`6a6bc1d`](https://github.com/stdlib-js/stdlib/commit/6a6bc1da925c3c3f24463cf0d381d0d38e84868b) - add `ndarray/base/fill` [(#2817)](https://github.com/stdlib-js/stdlib/pull/2817)
-   [`8bcb738`](https://github.com/stdlib-js/stdlib/commit/8bcb738f0fc355eae92b40541cc61550fda1fbef) - add `ndarray/base/to-reversed` [(#2861)](https://github.com/stdlib-js/stdlib/pull/2861)

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`7f368f6`](https://github.com/stdlib-js/stdlib/commit/7f368f6c3f4cea444a304a62616cea36a5f143eb) - remove unused imports from TS declaration file

</section>

<!-- /.bug-fixes -->

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

<section class="contributors">

### Contributors

A total of 3 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Muhammad Haris
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.3.1">

## 0.3.1 (2024-08-18)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.3.0">

## 0.3.0 (2024-08-17)

<section class="features">

### Features

-   [`ba0c5d0`](https://github.com/stdlib-js/stdlib/commit/ba0c5d0a00c8f2b5eff6321b14dd62398be26be8) - add `ndarraylike2ndarray` to namespace
-   [`e7b56b1`](https://github.com/stdlib-js/stdlib/commit/e7b56b133fffc0bf83638ab267242c25eb8a359a) - add `ndarray/ndarraylike2ndarray`
-   [`54262c8`](https://github.com/stdlib-js/stdlib/commit/54262c89e70eae566591c6e87ece69b68ca09488) - add `ndarraylike2ndarray` to namespace
-   [`5d01561`](https://github.com/stdlib-js/stdlib/commit/5d015616e9731e40d20f7d4dca6b136ae47cc9bc) - add `ndarray/base/ndarraylike2ndarray`
-   [`72ed2e1`](https://github.com/stdlib-js/stdlib/commit/72ed2e1e6331858c078564e22b6dca041f5daaca) - add `ndarray/base/map` [(#2715)](https://github.com/stdlib-js/stdlib/pull/2715)
-   [`0d360b3`](https://github.com/stdlib-js/stdlib/commit/0d360b33eba8019d2d638f265986d861ed22642a) - return index array as part of the results object
-   [`6576f4f`](https://github.com/stdlib-js/stdlib/commit/6576f4f82a2f47b2c0ffa35731efcb15a22e158a) - add `nditerInterleaveSubarrays`
-   [`25e87e4`](https://github.com/stdlib-js/stdlib/commit/25e87e46c052b2fb2bbd026a71a5ee10f4c50d3f) - add `ndarray/iter/interleave-subarrays`
-   [`4289f78`](https://github.com/stdlib-js/stdlib/commit/4289f78da1d67c5671151413b4673ec32ede26c2) - add `nditerStacks` to namespace
-   [`d256bd9`](https://github.com/stdlib-js/stdlib/commit/d256bd93e03a245d45b732ba4d8ab60e47d378d6) - add `ndarray/iter/stacks`
-   [`873b085`](https://github.com/stdlib-js/stdlib/commit/873b085ae0183426f3e8e831a50a42e2df3ba13d) - add `nditerSubarrays` to namespace
-   [`fd9a5c2`](https://github.com/stdlib-js/stdlib/commit/fd9a5c2e29508ab5b393e2273ddb7463be6affb3) - add `ndarray/iter/subarrays`
-   [`46aec25`](https://github.com/stdlib-js/stdlib/commit/46aec25aac5d4a0c8a3fd7b719dd6a080e59beb8) - add `nditerSelectDimension` to namespace
-   [`6dce19b`](https://github.com/stdlib-js/stdlib/commit/6dce19b2a2dfae6159257dab0c52a8421e0861d2) - add `ndarray/iter/select-dimension`
-   [`6e4b9eb`](https://github.com/stdlib-js/stdlib/commit/6e4b9ebc31d9629446019e37e31bfe9b180b675c) - update namespace TypeScript declarations [(#2681)](https://github.com/stdlib-js/stdlib/pull/2681)
-   [`d31e751`](https://github.com/stdlib-js/stdlib/commit/d31e7515b71dc5b76751173c7724d73d943b1473) - add `forEach` to namespace
-   [`e3fe1fa`](https://github.com/stdlib-js/stdlib/commit/e3fe1fad242ff60466807239c3d156c302885104) - add `ndarray/base/for-each`
-   [`d06165b`](https://github.com/stdlib-js/stdlib/commit/d06165bd6c491b4ad19bc2577be76cff083eda98) - add support for extending data type kind subsets with a \"generic\" data type
-   [`6ea880c`](https://github.com/stdlib-js/stdlib/commit/6ea880ccabbf770cf13a2def4f9ce806daa2b2f6) - add boolean dtype support to `ndarray/base/assign` [(#2598)](https://github.com/stdlib-js/stdlib/pull/2598)
-   [`de17de3`](https://github.com/stdlib-js/stdlib/commit/de17de32867461079aae166d5cecbecb1da7f922) - update namespace TypeScript declarations [(#2593)](https://github.com/stdlib-js/stdlib/pull/2593)
-   [`71cf5a0`](https://github.com/stdlib-js/stdlib/commit/71cf5a05a13d12aed627d332147642adc4694ab9) - add boolean dtype support to `ndarray/empty*` and `ndarray/base/empty*` packages [(#2588)](https://github.com/stdlib-js/stdlib/pull/2588)
-   [`f766a56`](https://github.com/stdlib-js/stdlib/commit/f766a563e112098dc229991c0eedb5f5b7417811) - add boolean dtype support to `ndarray/from-scalar` [(#2589)](https://github.com/stdlib-js/stdlib/pull/2589)
-   [`a360f04`](https://github.com/stdlib-js/stdlib/commit/a360f048dde8429a3ffcc60d36abe9ad33038c73) - add boolean dtype support to `ndarray/base/unary` [(#2587)](https://github.com/stdlib-js/stdlib/pull/2587)
-   [`19d4a8d`](https://github.com/stdlib-js/stdlib/commit/19d4a8da27facd0cc72b6162dc7e6b0d66d7a63c) - add boolean dtype support to `ndarray/base/nullary` [(#2586)](https://github.com/stdlib-js/stdlib/pull/2586)
-   [`979cf48`](https://github.com/stdlib-js/stdlib/commit/979cf4883141c4c5545860ac59ae056b2ecd3e43) - add `ndarray/base/assert/is-boolean-data-type` [(#2575)](https://github.com/stdlib-js/stdlib/pull/2575)
-   [`fa118f2`](https://github.com/stdlib-js/stdlib/commit/fa118f279848e1c85ea6e5cf9799f3089649214c) - add boolean dtype support to `ndarray/base/buffer` [(#2574)](https://github.com/stdlib-js/stdlib/pull/2574)
-   [`e92152b`](https://github.com/stdlib-js/stdlib/commit/e92152baba61ab358640cba9d0506d75123a5f60) - add boolean dtype support to `ndarray/defaults` [(#2551)](https://github.com/stdlib-js/stdlib/pull/2551)
-   [`16e0808`](https://github.com/stdlib-js/stdlib/commit/16e0808004b7bd4f16eea7eced5229ee1120b577) - add boolean dtype support to `ndarray/dtypes` [(#2550)](https://github.com/stdlib-js/stdlib/pull/2550)
-   [`21052a2`](https://github.com/stdlib-js/stdlib/commit/21052a211289b86b0e8a2e1f43a4d4c5b2379ffb) - add boolean dtype support to ndarray/min-dtype [(#2552)](https://github.com/stdlib-js/stdlib/pull/2552)
-   [`efecd32`](https://github.com/stdlib-js/stdlib/commit/efecd32448520402335cdf8fdb34ee88b96556b9) - add boolean dtype support to `ndarray/base/buffer-dtype` [(#2572)](https://github.com/stdlib-js/stdlib/pull/2572)
-   [`0f0dbca`](https://github.com/stdlib-js/stdlib/commit/0f0dbcaa7eddb30c09c8cc394224cd4a409b90a6) - add boolean dtype support to `ndarray/base/buffer-ctors` [(#2571)](https://github.com/stdlib-js/stdlib/pull/2571)
-   [`1cb0243`](https://github.com/stdlib-js/stdlib/commit/1cb0243d79c25ae193c058bb15ceeebad6cf3cfd) - add boolean dtype support to `ndarray/next-dtype` [(#2553)](https://github.com/stdlib-js/stdlib/pull/2553)
-   [`131d649`](https://github.com/stdlib-js/stdlib/commit/131d649c6b22a6247121db1fd380658bf4e83b65) - add boolean dtype support to `ndarray/mostly-safe-casts` [(#2554)](https://github.com/stdlib-js/stdlib/pull/2554)
-   [`4e860d8`](https://github.com/stdlib-js/stdlib/commit/4e860d827216f445b5abc569a0d7d7d7e61d83f6) - add boolean dtype support to `ndarray/same-kind-casts` [(#2555)](https://github.com/stdlib-js/stdlib/pull/2555)
-   [`29f4e2b`](https://github.com/stdlib-js/stdlib/commit/29f4e2b3786a8dcec6254b0ab6fb0d69164a673a) - add boolean dtype support to `ndarray/promotion-rules` [(#2524)](https://github.com/stdlib-js/stdlib/pull/2524)
-   [`ca687d6`](https://github.com/stdlib-js/stdlib/commit/ca687d6a8d8476309630c5a03f303c2420dc753f) - add boolean dtype support to `ndarray/safe-casts` [(#2507)](https://github.com/stdlib-js/stdlib/pull/2507)
-   [`b8bd516`](https://github.com/stdlib-js/stdlib/commit/b8bd51687cabdda74299cb37b9a5527fddd35aaa) - update namespace TypeScript declarations [(#2351)](https://github.com/stdlib-js/stdlib/pull/2351)
-   [`0adcae5`](https://github.com/stdlib-js/stdlib/commit/0adcae51386086e2ef5fb5d78402389cff776deb) - update namespace TypeScript declarations [(#1340)](https://github.com/stdlib-js/stdlib/pull/1340)
-   [`8f43afc`](https://github.com/stdlib-js/stdlib/commit/8f43afc5d9637ba35f60d35046041e5f0579f92c) - rename exported aliases
-   [`9e08caf`](https://github.com/stdlib-js/stdlib/commit/9e08caf0e897040e9b82ff104cb5a09d6b03465e) - return a `complex64` dtype ndarray if provided a Complex64 scalar
-   [`6b9e18f`](https://github.com/stdlib-js/stdlib/commit/6b9e18f625337d030eb3cd2001934696ef05bfc2) - add support for 'typed' data type kind

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`96c7ddf`](https://github.com/stdlib-js/stdlib/commit/96c7ddfdbcecc6ff60fcb56681db16463d19020e) - use computed order and fix strides in examples
-   [`e2b7fb5`](https://github.com/stdlib-js/stdlib/commit/e2b7fb5df61f15ae7dbf148ec0c0412ff434b123) - use computed order and fix strides in examples
-   [`1375823`](https://github.com/stdlib-js/stdlib/commit/1375823f58c93aeac8c687147f40e78d52adec04) - use computed order and fix strides in examples
-   [`4e6b2eb`](https://github.com/stdlib-js/stdlib/commit/4e6b2eb39e01d193302cd93ebf93dd2f42c71291) - update type for indices
-   [`c57d1d8`](https://github.com/stdlib-js/stdlib/commit/c57d1d880a32cfaff0c57744c81ef641640cddef) - return subscripts from perspective of ndarray view, not buffer
-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

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

<section class="contributors">

### Contributors

A total of 4 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Jaysukh Makvana
-   Muhammad Haris
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-05)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-05)

<section class="features">

### Features

-   [`2693e3b`](https://github.com/stdlib-js/stdlib/commit/2693e3b3f0382542a51fc57d78e9ab59e2dc0681) - update namespace TypeScript declarations [(#1287)](https://github.com/stdlib-js/stdlib/pull/1287)
-   [`babf9b1`](https://github.com/stdlib-js/stdlib/commit/babf9b181c3a196d6541e7d7347b263d8844480e) - add `ndat` to namespace
-   [`c553280`](https://github.com/stdlib-js/stdlib/commit/c55328043b8ede3ff02562cb27fc005ef80bb150) - add `ndarray/at`
-   [`c73cbe7`](https://github.com/stdlib-js/stdlib/commit/c73cbe76e440cf2e4211467d0db69d752409054d) - add support for returning dimension indices
-   [`68413e0`](https://github.com/stdlib-js/stdlib/commit/68413e05376206b18c4ff8662a8568a189dad77e) - update namespace TypeScript declarations [(#1221)](https://github.com/stdlib-js/stdlib/pull/1221)
-   [`7680fb8`](https://github.com/stdlib-js/stdlib/commit/7680fb8c8acf1515e6e77ebf59ff1529bb13066d) - add `numelDimension` to namespace
-   [`1124fc6`](https://github.com/stdlib-js/stdlib/commit/1124fc69bbbda00bdaebf3b825795fecd06ce537) - add `ndarray/numel-dimension`
-   [`46c964b`](https://github.com/stdlib-js/stdlib/commit/46c964b8697cd49865726bcf1bf37574a5ff6386) - add `numelDimension` to namespace
-   [`6224528`](https://github.com/stdlib-js/stdlib/commit/62245282f95e98d2fe25e5aadc92f9d196ff25c5) - add `ndarray/base/numel-dimension`
-   [`e90a075`](https://github.com/stdlib-js/stdlib/commit/e90a075eea2dbfe41a5b19209226316544f95f4d) - improve type specificity of return type and update examples
-   [`2e7df3f`](https://github.com/stdlib-js/stdlib/commit/2e7df3f99cdcdd34675503027c26af5d8d47630a) - add `ndarrayFlag` to namespace
-   [`54c0fd9`](https://github.com/stdlib-js/stdlib/commit/54c0fd9fa9efd14e3fd6033e03b3769841d6cf2d) - add `ndarray/flag`
-   [`2abfe17`](https://github.com/stdlib-js/stdlib/commit/2abfe170316726b7ad02d21a7cb84a25c5434e69) - add `ndarrayFlags` to namespace
-   [`04502ec`](https://github.com/stdlib-js/stdlib/commit/04502ecbc5c181ca74a2da97c122fd3b7622a987) - add `ndarray/flags`
-   [`36d1ecc`](https://github.com/stdlib-js/stdlib/commit/36d1eccee290162d423283a088d9467f3a06d475) - add `flag` to namespace
-   [`e557f2b`](https://github.com/stdlib-js/stdlib/commit/e557f2bd167692a6d0c67e8b9b0133a72d91903c) - add `ndarray/base/flag`
-   [`25bde3f`](https://github.com/stdlib-js/stdlib/commit/25bde3f0411e0256e1f93ab2537ece9eefebd5df) - add `flags` to namespace
-   [`181c73e`](https://github.com/stdlib-js/stdlib/commit/181c73e2f2b9a88ddfe95df533e975a1b1c3a469) - add `ndarray/base/flags`
-   [`66a9552`](https://github.com/stdlib-js/stdlib/commit/66a9552307adeddf5d721940938f8d6f492a59b6) - add `maybeBroadcastArrays` to namespace
-   [`5d0f444`](https://github.com/stdlib-js/stdlib/commit/5d0f444b334e2621c96e187a825d92bf410f8d03) - add `ndarray/maybe-broadcast-arrays`
-   [`32f45b3`](https://github.com/stdlib-js/stdlib/commit/32f45b31c64957bd6bd2a612eeae35d2a4506a5b) - add `broadcastArrays` to namespace
-   [`f3b79c9`](https://github.com/stdlib-js/stdlib/commit/f3b79c9696d2db950fb28874e4ca8d2562bd38f7) - add `ndarray/broadcast-arrays`
-   [`b97dcf0`](https://github.com/stdlib-js/stdlib/commit/b97dcf02f8b10885152891ba521f3ed72706d397) - add `maybeBroadcastArrays` to namespace
-   [`74d4f9f`](https://github.com/stdlib-js/stdlib/commit/74d4f9f193420a70ea40fb576d667d582da5cd6f) - add `ndarray/base/maybe-broadcast-arrays`
-   [`dc5bb62`](https://github.com/stdlib-js/stdlib/commit/dc5bb62c65148f6d6dadb351a2b9d0a26134473d) - add `broadcastArrays` to namespace
-   [`d47c764`](https://github.com/stdlib-js/stdlib/commit/d47c7648f41c6622489321f7ee36b875acd117f6) - add `ndarray/base/broadcast-arrays`
-   [`b1e4cca`](https://github.com/stdlib-js/stdlib/commit/b1e4cca30147188064b2275a0242a0334befbcd1) - update namespace exports
-   [`783804d`](https://github.com/stdlib-js/stdlib/commit/783804dbc9b3899c5227c5593e0ca1e8a6a9f195) - update namespace TypeScript declarations [(#1170)](https://github.com/stdlib-js/stdlib/pull/1170)
-   [`fca85b7`](https://github.com/stdlib-js/stdlib/commit/fca85b7d10fc3a84033633cfa6034521a6d5aa42) - add `ndsliceFrom` to namespace
-   [`d0a8bea`](https://github.com/stdlib-js/stdlib/commit/d0a8bea89869e7f72528bae02b7b81ea4430f3f1) - add `ndarray/slice-from`
-   [`e391499`](https://github.com/stdlib-js/stdlib/commit/e3914991ac1b77626f7a10051930f53af0344470) - add `ndarrayStride` to namespace
-   [`eeb2bdd`](https://github.com/stdlib-js/stdlib/commit/eeb2bddf52087c4de74898de681e090cec03426d) - add `ndarray/stride`
-   [`9f19a74`](https://github.com/stdlib-js/stdlib/commit/9f19a74b5e8907f2925f3bc21f002a260031c564) - add `stride` to namespace
-   [`b4aa572`](https://github.com/stdlib-js/stdlib/commit/b4aa5729cbf528faac2a81b2bf73d11f9f3ad39f) - add `ndarray/base/stride`
-   [`d138eac`](https://github.com/stdlib-js/stdlib/commit/d138eacc068299ac8b928e1f65f6731da68dbcc9) - add `ndsliceTo` to namespace
-   [`44dcbe6`](https://github.com/stdlib-js/stdlib/commit/44dcbe692ae45e070dcd125a801c0f9db73c2f30) - add `ndarray/slice-to`
-   [`f3d3f4f`](https://github.com/stdlib-js/stdlib/commit/f3d3f4f4d69804a3f31bdb542abf1aca9f3576d9) - add a `factory` method to allow for partial application
-   [`dd80dd0`](https://github.com/stdlib-js/stdlib/commit/dd80dd06ee514621c7cda8acea17c06add946336) - add support for `normalize` index mode
-   [`12102f1`](https://github.com/stdlib-js/stdlib/commit/12102f1b974064f4c0ca0156e435e9299ad75c68) - add support for `normalize` index mode
-   [`274da55`](https://github.com/stdlib-js/stdlib/commit/274da55cfd025bbc1f1bf59d5c7e71ed12250ae4) - add support for `normalize` index mode
-   [`5363916`](https://github.com/stdlib-js/stdlib/commit/5363916b97a8b70622fff6d8663760d3582e4336) - add support for `normalize` index mode
-   [`8e18e43`](https://github.com/stdlib-js/stdlib/commit/8e18e43bbd0b553e32bd5e8df1d36d4a8cc9d8c3) - add support for `normalize` index mode
-   [`6ee30cd`](https://github.com/stdlib-js/stdlib/commit/6ee30cdbe8fe3148bf6b0316db4303da154e10c3) - document support for `normalize` index mode
-   [`4ea3975`](https://github.com/stdlib-js/stdlib/commit/4ea39750d4b9d772deb1b4ee374275e3ee995599) - document support for `normalize` index mode
-   [`cc475bc`](https://github.com/stdlib-js/stdlib/commit/cc475bc4eb69351b15b231bf42257744e25635cd) - document support for `normalize` index mode
-   [`55928ab`](https://github.com/stdlib-js/stdlib/commit/55928abe7265b9edf33b2aae02acaabe567ce4b2) - document support for `normalize` index mode
-   [`9ed4346`](https://github.com/stdlib-js/stdlib/commit/9ed4346eb686d5c3d95467dfd8db4a6f5ef5fb6b) - document support for `normalize` index mode
-   [`5c9d067`](https://github.com/stdlib-js/stdlib/commit/5c9d067cfaf35e20ff0dde4943f9e75a9ceb6037) - add tests and update docs for `normalize` index mode support
-   [`a7d2960`](https://github.com/stdlib-js/stdlib/commit/a7d2960bebae832e80d61cadeb2a1b6d719f0db1) - add support for returning a normalized index
-   [`8a27986`](https://github.com/stdlib-js/stdlib/commit/8a279869a4a7c154d239f4e7af037833350e208f) - add support for `normalize` index mode
-   [`272081f`](https://github.com/stdlib-js/stdlib/commit/272081ff11f0b57f3d83f61abc409dbc3aa74821) - add support for a `normalize` index mode
-   [`d9952f2`](https://github.com/stdlib-js/stdlib/commit/d9952f2a25042570dfe5b20a2dacc4a07cec81c4) - update namespace TypeScript declarations [(#1128)](https://github.com/stdlib-js/stdlib/pull/1128)

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`452059f`](https://github.com/stdlib-js/stdlib/commit/452059f1b75eff6c5f3d9153be44616427e3ae3d) - add missing `format` call
-   [`c8241c2`](https://github.com/stdlib-js/stdlib/commit/c8241c254b2ab5e5116f293ad2f8165c38ac9f4e) - ensure ability to return an empty slice in strict mode
-   [`08d72b4`](https://github.com/stdlib-js/stdlib/commit/08d72b4a33847fd4ce8da0eca7875eaac118e68c) - improve type declarations
-   [`def989d`](https://github.com/stdlib-js/stdlib/commit/def989d20c35d4cb0834e91324177abc8f522626) - resolve type declaration typo by removing stray lint directive
-   [`f204b3f`](https://github.com/stdlib-js/stdlib/commit/f204b3fd61259968e39e91aa3579df62c6fda2ca) - resolve type declaration typo by removing stray lint directive [(#1133)](https://github.com/stdlib-js/stdlib/pull/1133)
-   [`6134859`](https://github.com/stdlib-js/stdlib/commit/61348590284d468ea52a07c51a68219407588757) - flatten nested arrays in (co)lexicographic order
-   [`ba92c62`](https://github.com/stdlib-js/stdlib/commit/ba92c62429e3f7165f526c72ad37824283b459d7) - remove related section
-   [`e3a8985`](https://github.com/stdlib-js/stdlib/commit/e3a898537dc0ff2e08c24fbb5a6e58c6394fcd0c) - move links
-   [`8fccaaa`](https://github.com/stdlib-js/stdlib/commit/8fccaaa1d2ce14f2ee512f0ea307b53f9bd16211) - move links

</section>

<!-- /.bug-fixes -->

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

<section class="contributors">

### Contributors

A total of 3 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Daniel Killenberger
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.1">

## 0.1.1 (2023-11-08)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-11-08)

<section class="features">

### Features

-   [`b01d709`](https://github.com/stdlib-js/stdlib/commit/b01d7098eca0cb303d820723d45e8c3e9828a944) - add `nditerMatrixEntries` to namespace
-   [`5f80a15`](https://github.com/stdlib-js/stdlib/commit/5f80a15dcb950ca672331f0fc276b10bc7c06105) - add `ndarray/iter/matrix-entries`
-   [`7685072`](https://github.com/stdlib-js/stdlib/commit/7685072aff78337a4ba796cb1ac4a6f5eb9d6a4d) - add `nditerColumnEntries` to namespace
-   [`aeccc0d`](https://github.com/stdlib-js/stdlib/commit/aeccc0da93a0cd2ad37e8e8bb69494e8453b068e) - add `ndarray/iter/column-entries`
-   [`b96a9a2`](https://github.com/stdlib-js/stdlib/commit/b96a9a24e8028d366f5435b793cd285a3565e008) - add `nditerRowEntries` to namespace
-   [`344aa9e`](https://github.com/stdlib-js/stdlib/commit/344aa9e386486ee8b5af3edd2bd788db19f338e1) - add `ndarray/iter/row-entries`
-   [`29d99d7`](https://github.com/stdlib-js/stdlib/commit/29d99d75414e9559ce2938cc19e4bc13af1d4968) - add `nditerMatrices` to namespace
-   [`88a673c`](https://github.com/stdlib-js/stdlib/commit/88a673c7ed8f97ab14df8f26c60211f634994108) - add `ndarray/iter/matrices`
-   [`7faffe3`](https://github.com/stdlib-js/stdlib/commit/7faffe325bbf186b14c3dfef621e9d4cc56b47ff) - update namespace TypeScript declarations [(#1122)](https://github.com/stdlib-js/stdlib/pull/1122)
-   [`c54dc22`](https://github.com/stdlib-js/stdlib/commit/c54dc2221daaeb94f148dd042f68f28e27afee34) - add `ndsliceDimensionFrom`
-   [`aeab98d`](https://github.com/stdlib-js/stdlib/commit/aeab98dc6f81a6266e0c2d61645f2b85850d263f) - add `ndarray/slice-dimension-from`
-   [`1b0fc06`](https://github.com/stdlib-js/stdlib/commit/1b0fc06ec87f77a925ec0881f3aeda270759be14) - add `ndsliceDimensionTo` to namespace
-   [`f9774e0`](https://github.com/stdlib-js/stdlib/commit/f9774e088c9d5e471a3bd8379b913561a8d7c64c) - add `ndarray/slice-dimension-to`
-   [`d90228a`](https://github.com/stdlib-js/stdlib/commit/d90228a01f71e0b0a9e443377e711549040ecf31) - add `sliceDimensionFrom` to namespace
-   [`de5ef5e`](https://github.com/stdlib-js/stdlib/commit/de5ef5e1b15d235a28570f92fb5c12b1958227b5) - add `ndarray/base/slice-dimension-from`
-   [`229ab6e`](https://github.com/stdlib-js/stdlib/commit/229ab6efd7b1b93991b78a9399d071e23522e633) - add `sliceDimensionTo` to namespace
-   [`3eb7c44`](https://github.com/stdlib-js/stdlib/commit/3eb7c445c25a352075cd32b826ec399fdb8f2775) - add `ndarray/base/slice-dimension-to`
-   [`67592b8`](https://github.com/stdlib-js/stdlib/commit/67592b82b088e4b8516f4f5e210368c96cbb4c11) - add `normalizeIndex` to namespace
-   [`512c8a8`](https://github.com/stdlib-js/stdlib/commit/512c8a8f75a158a42f9ea9113bda929e0c28519e) - add `ndarray/base/normalize-index`
-   [`a41ecbd`](https://github.com/stdlib-js/stdlib/commit/a41ecbd20541d1f60bc30db109b2599021cc4e47) - add `sliceFrom` to namespace
-   [`7f80a7c`](https://github.com/stdlib-js/stdlib/commit/7f80a7cdf828e50f98b963df45b2c9262c501a14) - add `ndarray/base/slice-from`
-   [`54401ac`](https://github.com/stdlib-js/stdlib/commit/54401acffc828b45fbe3cabe6b17f305cb4170b0) - add `sliceTo` to namespace
-   [`4da3db2`](https://github.com/stdlib-js/stdlib/commit/4da3db265d7a7ab8dd6e91eb55d3ab393a2789f3) - add `ndarray/base/slice-to`
-   [`2934e57`](https://github.com/stdlib-js/stdlib/commit/2934e576d314c60fc6198228d33282a1ab4f76c1) - add `flipud` to namespace
-   [`316273f`](https://github.com/stdlib-js/stdlib/commit/316273feed1a28304e7e4a1612831e257fc6e9e2) - add `ndarray/base/flipud`
-   [`013beaa`](https://github.com/stdlib-js/stdlib/commit/013beaa9f51f64fb56a25ab95dc85a0f849dc1ad) - add `fliplr` to namespace
-   [`bb9e0a4`](https://github.com/stdlib-js/stdlib/commit/bb9e0a4dc183c68ffd21fecc1130cb4bac303597) - add `ndarray/base/fliplr`
-   [`b390e0b`](https://github.com/stdlib-js/stdlib/commit/b390e0bdfc5f184568b70ddd3d9b4a9cd92dbf9e) - add `reverseDimension` to namespace
-   [`86f5a89`](https://github.com/stdlib-js/stdlib/commit/86f5a894a141d677a19ee54e1263dacb165a177c) - add `ndarray/base/reverse-dimension`
-   [`be83095`](https://github.com/stdlib-js/stdlib/commit/be83095aaf7d0dec724ac1d42135459f33ca38af) - add `reverse` to namespace
-   [`aff949b`](https://github.com/stdlib-js/stdlib/commit/aff949b5c2ee01b9aef69e471c735691b27ec370) - add `ndarray/base/reverse`
-   [`aabbb4e`](https://github.com/stdlib-js/stdlib/commit/aabbb4eaff80556d2320d75cf9520f5b01352e50) - add loop functions for downcasting floating-point dtypes
-   [`733ee49`](https://github.com/stdlib-js/stdlib/commit/733ee4954b08c24007460390d688fe86bb1e8fae) - add support for a `mostly-safe` casting mode
-   [`1aefe83`](https://github.com/stdlib-js/stdlib/commit/1aefe83e90f109989a001e85ca25ed278a7c3a50) - add `isMostlySafeDataTypeCast` to namespace
-   [`a8290c4`](https://github.com/stdlib-js/stdlib/commit/a8290c4059e1aa16ed2388a02c5637e58659ae01) - add `ndarray/base/assert/is-mostly-safe-data-type-cast`
-   [`12ee2c9`](https://github.com/stdlib-js/stdlib/commit/12ee2c9e8cd35134cc91dd32dd609144e76b8686) - add `mostly-safe` casting mode
-   [`1ee8ca1`](https://github.com/stdlib-js/stdlib/commit/1ee8ca150bc67b905084fe89d20f6102ed823794) - add `ndarrayMostlySafeCasts` to namespace
-   [`eff3cdd`](https://github.com/stdlib-js/stdlib/commit/eff3cdd2245ee7c9265d38f2d31b49bc7f4400d8) - add `ndarray/mostly-safe-casts`
-   [`f4cb44c`](https://github.com/stdlib-js/stdlib/commit/f4cb44c4a2f34211b7f53aa1e7e49e564445268b) - add `assign` to namespace
-   [`c28a16e`](https://github.com/stdlib-js/stdlib/commit/c28a16e50e84bc0fb8dd16b644f83b60248fe3b7) - add `ndarray/base/assign`
-   [`b5c4543`](https://github.com/stdlib-js/stdlib/commit/b5c454313c1f2cce40a913f889093410608246bf) - add `ndsliceDimension` to namespace
-   [`2fd5a3a`](https://github.com/stdlib-js/stdlib/commit/2fd5a3a25229f47a859fd86f5f4a8311153c2618) - add `ndarray/slice-dimension`
-   [`b985417`](https://github.com/stdlib-js/stdlib/commit/b9854176622b79eb7338247ac9d77ec0d22dc3a7) - add `data` to namespace
-   [`0786d6c`](https://github.com/stdlib-js/stdlib/commit/0786d6c0bc1087b5748b42632c6b8efebcb147ad) - add `ndarray/base/data-buffer`
-   [`3eeff0a`](https://github.com/stdlib-js/stdlib/commit/3eeff0a0843cbe3c94c814def9f26b5caa4ed429) - add `ndarrayDataBuffer` to namespace
-   [`a2b2082`](https://github.com/stdlib-js/stdlib/commit/a2b208201a324c5efea72831cc35da60fe560583) - add `ndarray/data-buffer`
-   [`3a2e182`](https://github.com/stdlib-js/stdlib/commit/3a2e182a27fd4d6ca7d5b518cf24570c273a2556) - add `order` to namespace
-   [`857a8c7`](https://github.com/stdlib-js/stdlib/commit/857a8c79fd6099e8a34cec07d9b6c89a8e29e77f) - add `ndarray/base/order`
-   [`6cd4e38`](https://github.com/stdlib-js/stdlib/commit/6cd4e38150c7b040fa6266f71113b35944896167) - rename aliases
-   [`b38f7f8`](https://github.com/stdlib-js/stdlib/commit/b38f7f89759f2f8577c1184a9b0cd71d412db8a2) - add `ndorder` to namespace
-   [`819f02e`](https://github.com/stdlib-js/stdlib/commit/819f02e21e7481d3a43265cb61e9aa1a0d2fd406) - add `ndarray/order`
-   [`88e5849`](https://github.com/stdlib-js/stdlib/commit/88e58498365a51ba56218c74a4767e89eb5061cc) - add `dtype` to namespace
-   [`9d9b5ca`](https://github.com/stdlib-js/stdlib/commit/9d9b5ca04c251db89351dabfd1d3868fdee22fd2) - add `ndarray/base/dtype`
-   [`a0baf19`](https://github.com/stdlib-js/stdlib/commit/a0baf191ee0dd9c4fa49229ced25c00cd25ca4a9) - add `ndarrayDataType` to namespace
-   [`29df3cf`](https://github.com/stdlib-js/stdlib/commit/29df3cf36888a96512dfade51adf0e3dde320166) - add `ndarray/dtype`
-   [`ed14448`](https://github.com/stdlib-js/stdlib/commit/ed1444886a2b28f68d09d313c7fe550be337d2b4) - add `sliceDimension` to namespace
-   [`5ca2f0e`](https://github.com/stdlib-js/stdlib/commit/5ca2f0e339d3580058c55d401045f8e66caaf543) - add `ndarray/base/slice-dimension`
-   [`b6571b2`](https://github.com/stdlib-js/stdlib/commit/b6571b2e436559d99e92767a95e95588857205c8) - add `strides` to namespace
-   [`5a0c235`](https://github.com/stdlib-js/stdlib/commit/5a0c23554e53b29fe6c36148c351699dfefe4ea7) - add `ndarray/base/strides`
-   [`6eb1720`](https://github.com/stdlib-js/stdlib/commit/6eb1720344be2cc2e1ac46ae1aef501edc0dc4a2) - add `ndstrides` to namespace
-   [`1407845`](https://github.com/stdlib-js/stdlib/commit/1407845fab9107bcab1834c0017c6424e6accccd) - add `ndarray/strides`
-   [`ed378b7`](https://github.com/stdlib-js/stdlib/commit/ed378b72c05992f0473dc5891dc4664773949148) - add `shape` to namespace
-   [`7a6cc2b`](https://github.com/stdlib-js/stdlib/commit/7a6cc2b58a83de238126dc3e899d663b5939167b) - add `ndarray/base/shape`
-   [`482bd69`](https://github.com/stdlib-js/stdlib/commit/482bd6970166f88f832e4d0e241b2fc1d0d780ea) - add `ndshape` to namespace
-   [`b76d481`](https://github.com/stdlib-js/stdlib/commit/b76d48151d39b4db1ec0440da235b0f9c042c675) - add `ndarray/shape`
-   [`0f8bc08`](https://github.com/stdlib-js/stdlib/commit/0f8bc0882a61b2c54219f37e6d2cb80c50985194) - add `offset` to namespace
-   [`08dd5cd`](https://github.com/stdlib-js/stdlib/commit/08dd5cdbbfb2370bc88cf0e223a1371473243c09) - add `ndarray/base/offset`
-   [`e20c23e`](https://github.com/stdlib-js/stdlib/commit/e20c23e36bdb2904b2aa51a47a5cd674bdc377d0) - add `ndoffset` to namespace
-   [`6e284c2`](https://github.com/stdlib-js/stdlib/commit/6e284c28a7e00043ffa90077ede849ad3bdb9272) - add `ndarray/offset`
-   [`6b48944`](https://github.com/stdlib-js/stdlib/commit/6b48944663c08f64956469340e8561704d9923f8) - add `ndims` to namespace
-   [`dd72b0f`](https://github.com/stdlib-js/stdlib/commit/dd72b0f28dc570151a855a31c9c831fe86f91169) - add `ndarray/base/ndims`
-   [`94b7c2d`](https://github.com/stdlib-js/stdlib/commit/94b7c2da42e0d782ccd380503ec6770a0c671822) - add `ndims` to namespace
-   [`e3e6b60`](https://github.com/stdlib-js/stdlib/commit/e3e6b60e161766128d601efc49aa73b21c4ebe54) - add `ndarray/ndims`
-   [`3514d7d`](https://github.com/stdlib-js/stdlib/commit/3514d7d812aaad71eaaf60dd570bf460758319f2) - add `numel` to namespace
-   [`657947f`](https://github.com/stdlib-js/stdlib/commit/657947fab94fc9e62005afe17406b1d39c5a3bfa) - add `ndarray/numel`
-   [`3e3d62e`](https://github.com/stdlib-js/stdlib/commit/3e3d62e3b7dd32fce3cb16ae1457729fdbecdaf7) - add `maybeBroadcastArray` to namespace
-   [`e96df4a`](https://github.com/stdlib-js/stdlib/commit/e96df4adf3598d2453ab869cec535971d4187c20) - add `ndarray/maybe-broadcast-array`
-   [`b45eb8f`](https://github.com/stdlib-js/stdlib/commit/b45eb8f83d224bea7e4bc063535ddb7962964872) - add `nditerValues` to namespace
-   [`3cc2fdb`](https://github.com/stdlib-js/stdlib/commit/3cc2fdb3b4ba4b60fb52139dc3ffbef267ecfeec) - add `ndarray/iter/values`
-   [`665ce24`](https://github.com/stdlib-js/stdlib/commit/665ce24b77631e05ab7f1788c5777e2fc7e7cca0) - add `nditerEntries` to namespace
-   [`6cd1bad`](https://github.com/stdlib-js/stdlib/commit/6cd1badeb9fff42ccb03486ccf7d6c0b53d03350) - add `ndarray/iter/entries`
-   [`49e1d21`](https://github.com/stdlib-js/stdlib/commit/49e1d216375e904a5448da4bf414a3261e1f68ba) - add `nextCartesianIndex` to namespace
-   [`b8de2da`](https://github.com/stdlib-js/stdlib/commit/b8de2dab6ca473794f646945254f97c839fc31af) - add `ndarray/base/next-cartesian-index`
-   [`5c7312f`](https://github.com/stdlib-js/stdlib/commit/5c7312f1de2a2e5b6c10c4c4e1c76e7cec8d1620) - add `nditerIndices` to namespace
-   [`613fb18`](https://github.com/stdlib-js/stdlib/commit/613fb18c3890649335378f7b235a5f06e96860eb) - add `ndarray/iter/indices`
-   [`9759a2c`](https://github.com/stdlib-js/stdlib/commit/9759a2c124154866e00bcba3c19647e45079ce56) - add `broadcastArray` to namespace
-   [`6d0da66`](https://github.com/stdlib-js/stdlib/commit/6d0da668d0d69bfe1a7fdceeceae05b52eada5c1) - add `ndarray/broadcast-array`
-   [`474e7e4`](https://github.com/stdlib-js/stdlib/commit/474e7e4fb2a15bfc8e9e719692b94044d25a7365) - add `nditer2arrayEach` to namespace
-   [`19af262`](https://github.com/stdlib-js/stdlib/commit/19af262e0319ea748c0300abfb363fb4561571a6) - add `ndarray/iter/to-array-each`
-   [`9c23309`](https://github.com/stdlib-js/stdlib/commit/9c233099b1cb3304b0158a52e103b01b262fb683) - add `nditerColumns` to namespace
-   [`8aec891`](https://github.com/stdlib-js/stdlib/commit/8aec8914b2435090b1b466bcdd5820b158da94ef) - add `ndarray/iter/columns`
-   [`fdebad4`](https://github.com/stdlib-js/stdlib/commit/fdebad409c163e0358421db3705d37768c8bca32) - add `iter` to namespace
-   [`43b42fe`](https://github.com/stdlib-js/stdlib/commit/43b42fe596c9b01fb19d3dd710ef71dfdc738510) - add `ndarray/iter` namespace
-   [`fda2bf6`](https://github.com/stdlib-js/stdlib/commit/fda2bf6c22937a44b2e17949b437d5bbec08708c) - add `ndarray/iter/rows`
-   [`6d9677a`](https://github.com/stdlib-js/stdlib/commit/6d9677a1d879fd369ad1145d43b3334659c5d10f) - add `ndsliceAssign` to namespace
-   [`d73d723`](https://github.com/stdlib-js/stdlib/commit/d73d72364028ed44ed35409292c3357399750db8) - add `ndarray/slice-assign`
-   [`212c1fa`](https://github.com/stdlib-js/stdlib/commit/212c1fa13fd177b87d0ddfa4e70d411e587d5560) - add `sliceAssign` to namespace
-   [`54858d0`](https://github.com/stdlib-js/stdlib/commit/54858d0033107586ec0b0b823019e75548664bd4) - add support for slice assignment and refactor index expression handling
-   [`c90e739`](https://github.com/stdlib-js/stdlib/commit/c90e7393fb2abf6d563581c2e47e8fe707b4cc33) - add `ndarray/base/slice-assign`
-   [`48cb9aa`](https://github.com/stdlib-js/stdlib/commit/48cb9aabdfbeb58af82ad69ebf0754e2802797fd) - add support for returning a mutable ndarray view
-   [`c3ff11f`](https://github.com/stdlib-js/stdlib/commit/c3ff11f96e30d608107ed1c7034792b40adc4ca0) - add `FancyArray` to namespace
-   [`c26a733`](https://github.com/stdlib-js/stdlib/commit/c26a7337fcc5c1d1c50d492d6ea362d7bc360810) - add `ndslice` to namespace
-   [`afda5bd`](https://github.com/stdlib-js/stdlib/commit/afda5bdedf10cc899794385201b356cf45e90334) - add `ndarray/slice`
-   [`15373b4`](https://github.com/stdlib-js/stdlib/commit/15373b4bc5df65314a0fffe20184429f7ad29616) - add `slice` to namespace
-   [`37ddf6d`](https://github.com/stdlib-js/stdlib/commit/37ddf6d4d84a64c83743a3e18863ad5ea8fd0d6f) - add `ndarray/base/slice`
-   [`d64f3c7`](https://github.com/stdlib-js/stdlib/commit/d64f3c7831c6490eae291c9de253dfc763052fbb) - add TypeScript declarations and add REPL help
-   [`4433c86`](https://github.com/stdlib-js/stdlib/commit/4433c8677f64ffe451f267484367d3d9f27e32f5) - add `ndarray/fancy`
-   [`9b8ad73`](https://github.com/stdlib-js/stdlib/commit/9b8ad73643ef01a8382e65c668b6a39c01be06a1) - convert declaration to generic to provide additional type information
-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`015ff99`](https://github.com/stdlib-js/stdlib/commit/015ff99285585b1a9267a8ad3f8c856e64742dfd) - increase minimum TypeScript version
-   [`98c37fa`](https://github.com/stdlib-js/stdlib/commit/98c37fa381ef03c24703d76a5b0be4f95727243c) - add `unaryOutputDataType` to namespace
-   [`eec20f6`](https://github.com/stdlib-js/stdlib/commit/eec20f6aba797b451addbf452384c2c4f2ff1add) - add `ndarray/base/unary-output-dtype`
-   [`1e78f7b`](https://github.com/stdlib-js/stdlib/commit/1e78f7b05c30245bd7ae22991ee021ae38a90a53) - rename `isIntegralDataType` to `isIntegerDataType`
-   [`d45a05b`](https://github.com/stdlib-js/stdlib/commit/d45a05b03973bf5b6a5e97cb4bc8c0aba3a68a12) - rename `integral` to `integer`
-   [`d96fdc9`](https://github.com/stdlib-js/stdlib/commit/d96fdc905898b96fffcc8ab210ad4b4d6c700565) - add `ndarray/base/assert/is-integer-data-type`
-   [`3d64252`](https://github.com/stdlib-js/stdlib/commit/3d64252e8c076e22298c987fc7237fcaae81023d) - add `default` policy
-   [`d0eb2cf`](https://github.com/stdlib-js/stdlib/commit/d0eb2cf2a86e9c9002b3b78218297f3aa57a5ff5) - add `isRealDataType` to namespace
-   [`889da69`](https://github.com/stdlib-js/stdlib/commit/889da694559f4b0da7670277001dc2414e55edd9) - add `ndarray/base/assert/is-real-data-type`
-   [`1127626`](https://github.com/stdlib-js/stdlib/commit/11276264fde9fc31a2143a1f64db050046bb6085) - add `real` policy
-   [`bd1017d`](https://github.com/stdlib-js/stdlib/commit/bd1017ddb8dd6fe552675221570186440cdbb4f5) - add `numeric` and `real` dtype defaults
-   [`03effb2`](https://github.com/stdlib-js/stdlib/commit/03effb27ed971c369883a650dd3f8d079a2acab1) - add `real` data type kind
-   [`901dc93`](https://github.com/stdlib-js/stdlib/commit/901dc93c3954e048073b711818553f2a065476f1) - add `isNumericDataType` to namespace
-   [`c326c3f`](https://github.com/stdlib-js/stdlib/commit/c326c3fe89ba54c362395aa53e442ec70a2ad69d) - add `ndarray/base/assert/is-numeric-data-type`
-   [`d3d2708`](https://github.com/stdlib-js/stdlib/commit/d3d2708eb6919b2eace1fb6f0fa06afac138f117) - add `isComplexFloatingPointDataType` to namespace
-   [`7b0d1b0`](https://github.com/stdlib-js/stdlib/commit/7b0d1b09616c4d92e0733564ef3c8b420a9ddb4f) - add `ndarray/base/assert/is-complex-floating-point-data-type`
-   [`088f3e9`](https://github.com/stdlib-js/stdlib/commit/088f3e9fea4a7090b1c1c09765d264acc832094b) - add `isRealFloatingPointDataType` to namespace
-   [`41d3972`](https://github.com/stdlib-js/stdlib/commit/41d3972e82c51bdd6522708d9446fce378e30c8a) - add `ndarray/base/assert/is-real-floating-point-data-type`
-   [`61a6fee`](https://github.com/stdlib-js/stdlib/commit/61a6feec47761cf559d455264a6908a1f4ac545e) - add `isFloatingPointDataType` to namespace
-   [`31ad686`](https://github.com/stdlib-js/stdlib/commit/31ad686cf56d70e9cd1d24043330eb3f4a688684) - add `ndarray/base/assert/is-floating-point-data-type`
-   [`f1b2025`](https://github.com/stdlib-js/stdlib/commit/f1b20259563e3e94ef269e3c98cec028af4e87ae) - add `isIntegralDataType` to namespace
-   [`e2f9bb3`](https://github.com/stdlib-js/stdlib/commit/e2f9bb3c9d922cddeb3bbdac52744c46f4fa6186) - add `ndarray/base/assert/is-integral-data-type`
-   [`74d366e`](https://github.com/stdlib-js/stdlib/commit/74d366e11957a3016839fa6836a021f49e2d4337) - add `isUnsignedIntegerDataType` to namespace
-   [`f2fd134`](https://github.com/stdlib-js/stdlib/commit/f2fd1344eee163ede1839e2be9a537be2d4ec240) - add `ndarray/base/assert/is-unsigned-integer-data-type`
-   [`35dc02a`](https://github.com/stdlib-js/stdlib/commit/35dc02a0c40af961cfe20e14e4ceddaa4012bc4d) - add `isSignedIntegerDataType` to namespace
-   [`063b647`](https://github.com/stdlib-js/stdlib/commit/063b6475df8c93d7b199e77b28325928e960e18b) - add `ndarray/base/assert/is-signed-integer-data-type`
-   [`99146bb`](https://github.com/stdlib-js/stdlib/commit/99146bb9777c1c042d95f68494c9fb4f9377e651) - add support for returning a subset of data types
-   [`9363dc3`](https://github.com/stdlib-js/stdlib/commit/9363dc3376fcb9ba18d181716fae8fbb731771bd) - add `get` method for retrieving a single default setting
-   [`3556d4e`](https://github.com/stdlib-js/stdlib/commit/3556d4e588a0840c788c02b357a7b8d87e575f78) - add `defaults` to namespace
-   [`35de20d`](https://github.com/stdlib-js/stdlib/commit/35de20d9359f2497eb0527c7cd99778dd7bff038) - add `ndarray/defaults`
-   [`6ca0ecb`](https://github.com/stdlib-js/stdlib/commit/6ca0ecb07f89d0ff6041ac2d2cb4a91cdad0059d) - add policy APIs to namespace
-   [`c0d63fe`](https://github.com/stdlib-js/stdlib/commit/c0d63fe91fe1de62e13334ade3bb157aa3ccdb4a) - add `ndarray/base/output-policy-resolve-enum`
-   [`375a3e8`](https://github.com/stdlib-js/stdlib/commit/375a3e851b300eb1b936520f43e6d303c253ba26) - add `ndarray/base/output-policy-resolve-str`
-   [`144d739`](https://github.com/stdlib-js/stdlib/commit/144d7393381f2430219962e39287792bf69374b8) - add `ndarray/base/output-policy-enum2str`
-   [`66e4d33`](https://github.com/stdlib-js/stdlib/commit/66e4d331999220774c45c093900470e88fb6953a) - add `ndarray/base/output-policy-str2enum`
-   [`a3a7a45`](https://github.com/stdlib-js/stdlib/commit/a3a7a4579edeb83503df22604e0ee47b60184ad3) - add `ndarrayOutputDataTypePolicies` to namespace
-   [`5954cd5`](https://github.com/stdlib-js/stdlib/commit/5954cd5b913c6d3b2d05c0bb07b607c885d6e5af) - add `ndarray/output-dtype-policies`
-   [`00b4630`](https://github.com/stdlib-js/stdlib/commit/00b46302fa85b4a133c2b93d13ac4cedd427bc11) - add `emptyLike` to namespace
-   [`9f1c2f3`](https://github.com/stdlib-js/stdlib/commit/9f1c2f30fd1fc23c8159c2d8df5df0f14b679ce8) - add `ndarray/base/empty-like`
-   [`33e76ef`](https://github.com/stdlib-js/stdlib/commit/33e76efad5564bbd2455f492c34b04a4fbfc8988) - add `empty` to namespace
-   [`c593502`](https://github.com/stdlib-js/stdlib/commit/c593502093613634a80bdb6c6806b8d2477d17d4) - add `ndarray/base/empty`
-   [`3da30d7`](https://github.com/stdlib-js/stdlib/commit/3da30d74baf9e5ee13c299cf33a767fd071f1694) - add `ndemptyLike` to namespace
-   [`561a9ea`](https://github.com/stdlib-js/stdlib/commit/561a9ea36c1300678da980b4740f78d71a49c0ba) - add `ndarray/empty-like`
-   [`8306cb9`](https://github.com/stdlib-js/stdlib/commit/8306cb9fedf86eb1d090149e4beed3d23fdee4b0) - add `ndempty` to namespace
-   [`910fed5`](https://github.com/stdlib-js/stdlib/commit/910fed5f346f7d5ac2d94a41e50c9eff2219518e) - add `ndarray/empty`
-   [`e618407`](https://github.com/stdlib-js/stdlib/commit/e618407f673288e8aa303b5db6bd316c6f130762) - add support for additional ndarray constructor options
-   [`78cb6e3`](https://github.com/stdlib-js/stdlib/commit/78cb6e35c41caff418a7dde7759a311dd35bb407) - add support for additional ndarray constructor options
-   [`f07f1ce`](https://github.com/stdlib-js/stdlib/commit/f07f1cedbfa64e81f21fcea8bb4e7ccbc67bde35) - add ndarray option support to `ndarray/from-scalar`
-   [`171fc57`](https://github.com/stdlib-js/stdlib/commit/171fc571b800ceb803d7d925cd871fc9bbcd7e8c) - add support for providing `order` argument
-   [`0661629`](https://github.com/stdlib-js/stdlib/commit/06616293c16e65f85a2b9b72fc9e036e20cff6ab) - add `broadcastScalar` to namespace
-   [`efe7c22`](https://github.com/stdlib-js/stdlib/commit/efe7c226d5fb5ac7fb0c36dec4b5925d4484ee43) - add `ndarray/base/broadcast-scalar`
-   [`1c450ba`](https://github.com/stdlib-js/stdlib/commit/1c450ba6f265f5160dd66a0638efcc8899fc119a) - add `ndarray2array` to namespace
-   [`cf7c497`](https://github.com/stdlib-js/stdlib/commit/cf7c4978afd11bd988e8bb9cd2d138df357997e2) - add `ndarray/to-array`
-   [`9800cc4`](https://github.com/stdlib-js/stdlib/commit/9800cc4f8df8d96db8bac00b51ae1491fa579666) - add `nullary` to namespace
-   [`28c87ca`](https://github.com/stdlib-js/stdlib/commit/28c87ca422d9953a5d5ee583e904b24d66e59682) - add `ndarray/base/nullary`
-   [`4e94bf0`](https://github.com/stdlib-js/stdlib/commit/4e94bf079c6677f10e5ea1f4eaca93dc52dac8f3) - add `binaryLoopOrder` to namespace
-   [`d151153`](https://github.com/stdlib-js/stdlib/commit/d151153ac4aced58a04e795607000b7138feb05d) - add `ndarray/base/binary-loop-interchange-order`
-   [`0ac8825`](https://github.com/stdlib-js/stdlib/commit/0ac88258a1b720982b47661c5ddeb5a932cf56d4) - add `binaryBlockSize` to namespace
-   [`2600d28`](https://github.com/stdlib-js/stdlib/commit/2600d28341fe75b74e3ab7c02779ee856d0d53ad) - add `ndarray/base/binary-tiling-block-size`
-   [`e8775fc`](https://github.com/stdlib-js/stdlib/commit/e8775fcbe3617b9013bd1cea74d7f70aa2669ab4) - update namespace TypeScript declarations [(#951)](https://github.com/stdlib-js/stdlib/pull/951)
-   [`6b7c54d`](https://github.com/stdlib-js/stdlib/commit/6b7c54dd2aa970a48a5f73d89c160c7ab6b6ba28) - add `nullaryLoopOrder` to namespace
-   [`45b2ba9`](https://github.com/stdlib-js/stdlib/commit/45b2ba9a82ac496a9c00c697839453cd2aef285a) - add `@stdlib/ndarray/base/nullary-loop-interchange-order`
-   [`760a0a1`](https://github.com/stdlib-js/stdlib/commit/760a0a1aab281e0a1b043b526eac9592551cffb8) - add `nullaryBlockSize` to namespace
-   [`0ed2dc6`](https://github.com/stdlib-js/stdlib/commit/0ed2dc6083a20d0f90e653191778da2a9ddf9105) - add `@stdlib/ndarray/base/nullary-tiling-block-size`

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`3aec20d`](https://github.com/stdlib-js/stdlib/commit/3aec20d84a70edd88ac294294bb733cabb544d66) - remove leftover disabled lint rule
-   [`a763ac4`](https://github.com/stdlib-js/stdlib/commit/a763ac4c03c49343e3f06ba93325f39a20da97cc) - allow downcast from `float64` to `complex64`
-   [`267e16e`](https://github.com/stdlib-js/stdlib/commit/267e16e021c86a2dbfeefc4112b3008ac7638688) - add support for complex numbers and provided ndarrays having arbitrary rank
-   [`c8417b0`](https://github.com/stdlib-js/stdlib/commit/c8417b07e7637b7c5c2336191d9b3288a0e5a228) - add support for assigning real-valued elements to complex-valued elements
-   [`46d5210`](https://github.com/stdlib-js/stdlib/commit/46d52108725f354f62312121e797195cbbfe7611) - address unterminated macro
-   [`39b2b0d`](https://github.com/stdlib-js/stdlib/commit/39b2b0da7407b46375ee9897ce60452f5179cf1b) - use correct type for dispatch object
-   [`8874562`](https://github.com/stdlib-js/stdlib/commit/8874562a8e3383393bef0e1220080fb20a99880f) - add missing support for minimal ndarray-like objects not supporting a strides property
-   [`b75bcc2`](https://github.com/stdlib-js/stdlib/commit/b75bcc2e8807ea3f2ec8d8803bb6f4106bd11d0f) - add missing argument
-   [`c13a4d5`](https://github.com/stdlib-js/stdlib/commit/c13a4d58f04d875125481add5d68e1e2052b19ce) - add missing argument
-   [`6a6225d`](https://github.com/stdlib-js/stdlib/commit/6a6225d3d7a9a7e97387c1d1b3dff09c702eddd7) - add missing argument
-   [`9741d55`](https://github.com/stdlib-js/stdlib/commit/9741d5527de099260554aa7f4e2e4ca4c3e2cd2a) - add missing argument
-   [`a5ce155`](https://github.com/stdlib-js/stdlib/commit/a5ce155e3f2da8176e848e5fd75833a7a943fdb6) - add missing argument
-   [`c539bd1`](https://github.com/stdlib-js/stdlib/commit/c539bd17b8cd17ca3a37a958626dbd6df2e25477) - add missing argument
-   [`c142624`](https://github.com/stdlib-js/stdlib/commit/c1426240f375b6c864a2d59368694ac09d7637f6) - add missing argument
-   [`61aa8e7`](https://github.com/stdlib-js/stdlib/commit/61aa8e7e7d3d64e9bac8b51d34b1b734a24a84de) - add missing argument
-   [`65d964f`](https://github.com/stdlib-js/stdlib/commit/65d964fc0d0cde545a0e15fd34bcfcdec5eb01b6) - add missing argument
-   [`72c6fa0`](https://github.com/stdlib-js/stdlib/commit/72c6fa09c02e49ff622030040703aee18ddfd3e8) - rename alias from `ndorder` to `ndarrayOrder` to match existing convention
-   [`09306de`](https://github.com/stdlib-js/stdlib/commit/09306deea6b832fdc8b6bf11a853cf2c5eab8108) - ensure consistent results when provided a minimal zero-dimensional ndarray
-   [`bc1768e`](https://github.com/stdlib-js/stdlib/commit/bc1768ea93ed7c72ce90dd4ade9b6786603381b8) - prevent creating writable views when an input array is read-only
-   [`64bd3a8`](https://github.com/stdlib-js/stdlib/commit/64bd3a808f060dc2004d130c2cb974b100527e82) - prevent creating writable views when provided a read-only array
-   [`92b814f`](https://github.com/stdlib-js/stdlib/commit/92b814fe9446bc9f31aed4fb151e6f8bf75213da) - update parameter name to match docs
-   [`69e0a71`](https://github.com/stdlib-js/stdlib/commit/69e0a718dd5b79eae03864b276b635754396d9a0) - update parameter name to match docs
-   [`8fabec9`](https://github.com/stdlib-js/stdlib/commit/8fabec9ee825644e00b6088d1684ca6bef752a8a) - add missing check for an output array which is read-only
-   [`8d7dfdc`](https://github.com/stdlib-js/stdlib/commit/8d7dfdc706aea0628b8d8fce181fae12bcb049c2) - add missing argument
-   [`09b4354`](https://github.com/stdlib-js/stdlib/commit/09b435430b5f5a1809e409d8b64bd3974fc56ccb) - rename parameter to match docs
-   [`2910f80`](https://github.com/stdlib-js/stdlib/commit/2910f803215131c7ba9c9e1eb71875a6305cd402) - address broken benchmarks for out-of-bounds slices
-   [`eae0905`](https://github.com/stdlib-js/stdlib/commit/eae09050d3e8bcf751636d469b997d54db1fac9c) - ensure support for slicing zero-dimensional arrays
-   [`aaaf01e`](https://github.com/stdlib-js/stdlib/commit/aaaf01e43bfef9b8b3c2c9d3f703b3e95e0524b9) - use correct format specifier in error message
-   [`c636c08`](https://github.com/stdlib-js/stdlib/commit/c636c084bae9899fff1e667f00ecf9a71dd61175) - address bug when resolving buffer index of the first element indexed by a slice
-   [`fcbe4c1`](https://github.com/stdlib-js/stdlib/commit/fcbe4c18fd4ebfad0466b56b4c19abda6cdb4c2b) - address indexing expression errors and refactor to use `ndarray/base/slice`
-   [`e17e199`](https://github.com/stdlib-js/stdlib/commit/e17e1999c8d3f29a7b9fe509ce3fb05db05aaf39) - address dimension reduction bug
-   [`fb65dfe`](https://github.com/stdlib-js/stdlib/commit/fb65dfe5b36b35ad8b3747df6ddb693a5b62d171) - use `Collection`, rather than `ArrayLike`
-   [`0deb1be`](https://github.com/stdlib-js/stdlib/commit/0deb1be1f1efe2cc98bd944ab1c50cc885cf523b) - update import path for `Collection` type definition
-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs
-   [`b4dbeae`](https://github.com/stdlib-js/stdlib/commit/b4dbeaebb752c2494a156cd6f92d7055bea024ec) - set correct package names
-   [`2ef370c`](https://github.com/stdlib-js/stdlib/commit/2ef370c299de57a389c57f1815824b05665c9ece) - add missing test fixture [(#1054)](https://github.com/stdlib-js/stdlib/pull/1054)
-   [`23b99ac`](https://github.com/stdlib-js/stdlib/commit/23b99acc256b4c9034347ed42ba21f202caedda8) - resolve C lint errors
-   [`fe527ef`](https://github.com/stdlib-js/stdlib/commit/fe527ef22a44592d7eaa0adbded47730248eaa74) - fix require path
-   [`06712ce`](https://github.com/stdlib-js/stdlib/commit/06712ce614899b7bf573e6323532a48a452526fe) - fix package name and keywords
-   [`64a7e92`](https://github.com/stdlib-js/stdlib/commit/64a7e9272da47f0b0a7afd8a5f4d5be613cbfb8d) - add missing variable declaration

</section>

<!-- /.bug-fixes -->

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

<section class="contributors">

### Contributors

A total of 3 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Dan Rose
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

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

