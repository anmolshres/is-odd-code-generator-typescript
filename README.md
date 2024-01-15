# is-odd-code-generator [![CI](https://github.com/anmolshres/is-odd-code-generator-typescript/actions/workflows/ci.yml/badge.svg)](https://github.com/anmolshres/is-odd-code-generator-typescript/actions/workflows/ci.yml) [![NPM version](https://img.shields.io/npm/v/is-odd-code-generator.svg?style=flat)](https://www.npmjs.com/package/is-odd-code-generator) [![NPM monthly downloads](https://img.shields.io/npm/dm/is-odd-code-generator.svg?style=flat)](https://npmjs.org/package/is-odd-code-generator) [![NPM total downloads](https://img.shields.io/npm/dt/is-odd-code-generator.svg?style=flat)](https://npmjs.org/package/is-odd-code-generator)

Have you been looking for a npm package that can generate JavaScript code that can determine if a number is odd or not? Look no further. This package takes in a positive integer value, then generates JS code that can determine if a number is odd or not up to and including the supplied positive integer value.

## Install

Install with [npm](https://www.npmjs.com/package/is-odd-code-generator):

```sh
npm install is-odd-code-generator
```

## Usage

Only supports positive integers as input

```js
import { generateIsOddCode } from 'is-odd-code-generator';

console.log(generateIsOddCode(-1)) // throws Error since the given number is negative

console.log(generateIsOddCode(0));
// returns:
// export function isOdd(number) {
//   if(number === 0) return false;
// }
console.log(generateIsOddCode(10));
// returns:
// export function isOdd(number) {
//   if(number === 0) return false;
//   else if(number === 1) return true;
//   else if(number === 2) return false;
//   else if(number === 3) return true;
//   else if(number === 4) return false;
//   else if(number === 5) return true;
//   else if(number === 6) return false;
//   else if(number === 7) return true;
//   else if(number === 8) return false;
//   else if(number === 9) return true;
//   else if(number === 10) return false;
// }
console.log(generateIsOddCode(15));
// returns:
// export function isOdd(number) {
//   if(number === 0) return false;
//   else if(number === 1) return true;
//   else if(number === 2) return false;
//   else if(number === 3) return true;
//   else if(number === 4) return false;
//   else if(number === 5) return true;
//   else if(number === 6) return false;
//   else if(number === 7) return true;
//   else if(number === 8) return false;
//   else if(number === 9) return true;
//   else if(number === 10) return false;
//   else if(number === 11) return true;
//   else if(number === 12) return false;
//   else if(number === 13) return true;
//   else if(number === 14) return false;
//   else if(number === 15) return true;
// }
```

<details>
<summary><strong>Running Tests</strong></summary>

In order to run tests, first install the packages then run the tests. Like so:

```sh
pnpm install && pnpm test
```

</details>

<details>
<summary><strong>Building package</strong></summary>

In order to build the package, run the following command:

```sh
pnpm build
```

</details>

## About

<details>
<summary><strong>Contributing</strong></summary>

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

</details>

### License

Released under the [MIT License](LICENSE).

***
