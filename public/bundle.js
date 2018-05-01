/******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        /******/ configurable: false,
        /******/ enumerable: true,
        /******/ get: getter,
        /******/
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function(exports) {
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__(
    (__webpack_require__.s = "./src/index.js")
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval(
          "// var lodash = require('lodash'); // PART I - STEP ONE - Uncomment this code.\n// var sortBy = require('lodash/sortBy'); // PART I - STEP TWO - Use this code instead.\n\n// require('./client/Nav/Nav'); // PART II - UNCOMMENT THIS LINE\n// require('./client/App/App'); // PART II - UNCOMMENT THIS LINE\n// require('./client/App/App.css'); // PART II - UNCOMMENT THIS LINE\n// require('./client/Nav/Nav.css'); // PART II - UNCOMMENT THIS LINE\n\nvar message = [\n  { phrase: \"Pretty awesome!\", order: 6 },\n  { phrase: \"It does not include the entire\", order: 4 },\n  { phrase: \"includes the code needed\", order: 2 },\n  { phrase: \"When you require sortBy individually, \", order: 0 },\n  { phrase: \"your bundle.js only\", order: 1 },\n  { phrase: \"This is called MODULARIZATION.\", order: 7 },\n  { phrase: \"lodash library.\", order: 5 },\n  { phrase: \"for the sortBy function.\", order: 3 },\n];\n\n// console.log(lodash.sortBy(message, 'order')); // PART I - STEP ONE - Uncomment this code.\n// console.log(sortBy(message, 'order')); // PART I - STEP TWO - Use this code instead.\n\n\n//# sourceURL=webpack:///./src/index.js?"
        );

        /***/
      },

    /******/
  }
);
