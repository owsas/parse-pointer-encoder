# parse-pointer-encoder

Encode and Decode Parse objects to and from pointer strings

## Why?

In some cases, you may want to convert a string like `MyClass:383` to a `Parse.Object`, or maybe convert a `Parse.Object` to a format like `MyClass$123`. This library helps you encoding and decoding Parse objects to and from strings.

## Install
```sh
npm install --save parse-pointer-encoder
```

## Usage
```js
// const module = require('parse-pointer-encoder');
// import module from 'parse-pointer-encoder';
```

## Dev Features
* Testing with Jest
* Linting out of the box (checks the style of your code), with TSLint
* Build, prepublish and other scripts to help you to develop
* Works with Typescript: Static typing for your JS Applications, reducing amount of runtime errors
* Coverage out of the box, thanks to Jest
* Uses deterministic module resolving, with `package-lock.json`
