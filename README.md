<p align="center">
  <a href="" rel="noopener">
 <img width=256px height=256px src="https://github.com/alexlee-dev/pickitt/blob/master/documentation/images/pick.svg" alt="pickitt logo"></a>
</p>

<h3 align="center">Pickitt</h3>

<div align="center">

[![NPM Version][npm-image]][npm-url] [![NPM Total Downloads][npm-downloads]][npm-url] [![npm bundle size (minified + gzip)][size-image]][npm-url] [![Coverage Status](https://coveralls.io/repos/github/alexlee-dev/pickitt/badge.svg?branch=master)](https://coveralls.io/github/alexlee-dev/pickitt?branch=master) [![Build Status](https://travis-ci.org/alexlee-dev/pickitt.svg?branch=master)](https://travis-ci.org/alexlee-dev/pickitt.svg?branch=master)

</div>

---

<p align="center"> When you need a computer to just pick it, reach for Pickitt!
    <br> 
</p>

<div align="center">https://pickitt.netlify.com/</div>

## 📝 Table of Contents

- [About](#about)
- [Installing](#installing)
- [Usage](#usage)
- [Built Using](#built_using)
- [Author](#author)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name="about"></a>

Pickitt is a simple utility function designed to help you pick an element from an array.

## 📦 Installing <a name="installing"></a>

### NPM

```sh
npm install pickitt
```

### Yarn

```sh
yarn add pickitt
```

## 🎈 Usage <a name="usage"></a>

```js
import { pickitt } from "pickitt";

const testArray = ["item1", "item2", "item3"];

const randomElement = pickitt(testArray); // <-- 'item1', 'item2', or 'item3'
```

## ⛏️ Built Using <a name="built_using"></a>

- [Grommet](https://v2.grommet.io/) - UI Framework
- [React](https://reactjs.org/) - UI Framework
- [react-custom-scrollbars](https://malte-wessel.com/react-custom-scrollbars/) - Sidebar Scrolling

## ✍️ Author <a name="author"></a>

- [Alex Lee](https://github.com/alexlee-dev) - Developer

## 🎉 Acknowledgements <a name="acknowledgement"></a>

- Pick Icon by [freepik](http://www.freepik.com) from [www.flaticon.com](www.flaticon.com).
- Concept from [lodash/sample](https://www.npmjs.com/package/lodash.sample).

[npm-image]: https://img.shields.io/npm/v/pickitt.svg
[npm-downloads]: https://img.shields.io/npm/dt/pickitt.svg
[npm-url]: https://www.npmjs.com/package/pickitt
[size-image]: https://img.shields.io/bundlephobia/minzip/pickitt.svg
[pickitt-icon]: https://github.com/alexlee-dev/pickitt/raw/master/pickitt.png
