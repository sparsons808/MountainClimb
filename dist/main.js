/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var canvas = document.querySelector('.screen');\n  var ctx = canvas.getContext(\"2d\");\n  var GAME_WIDTH = 450;\n  var GAME_HEIGHT = 500;\n  var game = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](GAME_WIDTH, GAME_HEIGHT);\n  var tileSheet = new Image();\n  tileSheet.src = './assets/block.png';\n  var lava = new Image();\n  lava.src = './assets/lava.png'; // lava make one that is 450 by 500 in hieght\n\n  lava.addEventListener('load', function () {\n    ctx.drawImage(lava, 0, 450);\n    ctx.drawImage(lava, 100, 450);\n    ctx.drawImage(lava, 200, 450);\n    ctx.drawImage(lava, 300, 450);\n    ctx.drawImage(lava, 400, 450);\n  });\n  tileSheet.addEventListener('load', function () {\n    ctx.drawImage(tileSheet, 0, 400, 35, 25);\n    ctx.drawImage(tileSheet, 30, 400, 35, 25);\n    ctx.drawImage(tileSheet, 60, 400, 35, 25);\n    ctx.drawImage(tileSheet, 90, 400, 35, 25);\n    ctx.drawImage(tileSheet, 120, 400, 35, 25);\n    ctx.drawImage(tileSheet, 150, 400, 35, 25);\n    ctx.drawImage(tileSheet, 180, 400, 35, 25);\n    ctx.drawImage(tileSheet, 240, 360, 35, 25);\n    ctx.drawImage(tileSheet, 300, 320, 35, 25);\n    ctx.drawImage(tileSheet, 240, 280, 35, 25);\n    ctx.drawImage(tileSheet, 210, 280, 35, 25);\n    ctx.drawImage(tileSheet, 180, 280, 35, 25);\n    ctx.drawImage(tileSheet, 150, 280, 35, 25);\n    ctx.drawImage(tileSheet, 120, 280, 35, 25);\n    ctx.drawImage(tileSheet, 90, 280, 35, 25);\n  }, false); // const tileMap = document.querySelector('#tile_set');\n  // ctx.fillStyle = 'black';\n  // ctx.fillRect(10, 10, 45, 45);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2hELE1BQUlDLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxhQUFULENBQXVCLFNBQXZCLENBQWI7QUFDQSxNQUFJQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csVUFBUCxDQUFrQixJQUFsQixDQUFWO0FBRUEsTUFBTUMsVUFBVSxHQUFHLEdBQW5CO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLEdBQXBCO0FBRUEsTUFBSUMsSUFBSSxHQUFHLElBQUlULHFEQUFKLENBQVNPLFVBQVQsRUFBcUJDLFdBQXJCLENBQVg7QUFFQSxNQUFJRSxTQUFTLEdBQUcsSUFBSUMsS0FBSixFQUFoQjtBQUNBRCxFQUFBQSxTQUFTLENBQUNFLEdBQVYsR0FBZ0Isb0JBQWhCO0FBRUEsTUFBSUMsSUFBSSxHQUFHLElBQUlGLEtBQUosRUFBWDtBQUNBRSxFQUFBQSxJQUFJLENBQUNELEdBQUwsR0FBVyxtQkFBWCxDQWJnRCxDQWVoRDs7QUFDQUMsRUFBQUEsSUFBSSxDQUFDWCxnQkFBTCxDQUFzQixNQUF0QixFQUE4QixZQUFNO0FBQ2hDRyxJQUFBQSxHQUFHLENBQUNTLFNBQUosQ0FBY0QsSUFBZCxFQUFvQixDQUFwQixFQUF1QixHQUF2QjtBQUNBUixJQUFBQSxHQUFHLENBQUNTLFNBQUosQ0FBY0QsSUFBZCxFQUFvQixHQUFwQixFQUF5QixHQUF6QjtBQUNBUixJQUFBQSxHQUFHLENBQUNTLFNBQUosQ0FBY0QsSUFBZCxFQUFvQixHQUFwQixFQUF5QixHQUF6QjtBQUNBUixJQUFBQSxHQUFHLENBQUNTLFNBQUosQ0FBY0QsSUFBZCxFQUFvQixHQUFwQixFQUF5QixHQUF6QjtBQUNBUixJQUFBQSxHQUFHLENBQUNTLFNBQUosQ0FBY0QsSUFBZCxFQUFvQixHQUFwQixFQUF5QixHQUF6QjtBQUVILEdBUEQ7QUFTQUgsRUFBQUEsU0FBUyxDQUFDUixnQkFBVixDQUEyQixNQUEzQixFQUFtQyxZQUFNO0FBQ3JDRyxJQUFBQSxHQUFHLENBQUNTLFNBQUosQ0FBY0osU0FBZCxFQUF5QixDQUF6QixFQUE0QixHQUE1QixFQUFpQyxFQUFqQyxFQUFxQyxFQUFyQztBQUNBTCxJQUFBQSxHQUFHLENBQUNTLFNBQUosQ0FBY0osU0FBZCxFQUF5QixFQUF6QixFQUE2QixHQUE3QixFQUFrQyxFQUFsQyxFQUFzQyxFQUF0QztBQUNBTCxJQUFBQSxHQUFHLENBQUNTLFNBQUosQ0FBY0osU0FBZCxFQUF5QixFQUF6QixFQUE2QixHQUE3QixFQUFrQyxFQUFsQyxFQUFzQyxFQUF0QztBQUNBTCxJQUFBQSxHQUFHLENBQUNTLFNBQUosQ0FBY0osU0FBZCxFQUF5QixFQUF6QixFQUE2QixHQUE3QixFQUFrQyxFQUFsQyxFQUFzQyxFQUF0QztBQUNBTCxJQUFBQSxHQUFHLENBQUNTLFNBQUosQ0FBY0osU0FBZCxFQUF5QixHQUF6QixFQUE4QixHQUE5QixFQUFtQyxFQUFuQyxFQUF1QyxFQUF2QztBQUNBTCxJQUFBQSxHQUFHLENBQUNTLFNBQUosQ0FBY0osU0FBZCxFQUF5QixHQUF6QixFQUE4QixHQUE5QixFQUFtQyxFQUFuQyxFQUF1QyxFQUF2QztBQUNBTCxJQUFBQSxHQUFHLENBQUNTLFNBQUosQ0FBY0osU0FBZCxFQUF5QixHQUF6QixFQUE4QixHQUE5QixFQUFtQyxFQUFuQyxFQUF1QyxFQUF2QztBQUNBTCxJQUFBQSxHQUFHLENBQUNTLFNBQUosQ0FBY0osU0FBZCxFQUF5QixHQUF6QixFQUE4QixHQUE5QixFQUFtQyxFQUFuQyxFQUF1QyxFQUF2QztBQUNBTCxJQUFBQSxHQUFHLENBQUNTLFNBQUosQ0FBY0osU0FBZCxFQUF5QixHQUF6QixFQUE4QixHQUE5QixFQUFtQyxFQUFuQyxFQUF1QyxFQUF2QztBQUNBTCxJQUFBQSxHQUFHLENBQUNTLFNBQUosQ0FBY0osU0FBZCxFQUF5QixHQUF6QixFQUE4QixHQUE5QixFQUFtQyxFQUFuQyxFQUF1QyxFQUF2QztBQUNBTCxJQUFBQSxHQUFHLENBQUNTLFNBQUosQ0FBY0osU0FBZCxFQUF5QixHQUF6QixFQUE4QixHQUE5QixFQUFtQyxFQUFuQyxFQUF1QyxFQUF2QztBQUNBTCxJQUFBQSxHQUFHLENBQUNTLFNBQUosQ0FBY0osU0FBZCxFQUF5QixHQUF6QixFQUE4QixHQUE5QixFQUFtQyxFQUFuQyxFQUF1QyxFQUF2QztBQUNBTCxJQUFBQSxHQUFHLENBQUNTLFNBQUosQ0FBY0osU0FBZCxFQUF5QixHQUF6QixFQUE4QixHQUE5QixFQUFtQyxFQUFuQyxFQUF1QyxFQUF2QztBQUNBTCxJQUFBQSxHQUFHLENBQUNTLFNBQUosQ0FBY0osU0FBZCxFQUF5QixHQUF6QixFQUE4QixHQUE5QixFQUFtQyxFQUFuQyxFQUF1QyxFQUF2QztBQUNBTCxJQUFBQSxHQUFHLENBQUNTLFNBQUosQ0FBY0osU0FBZCxFQUF5QixFQUF6QixFQUE2QixHQUE3QixFQUFrQyxFQUFsQyxFQUFzQyxFQUF0QztBQUNILEdBaEJELEVBZ0JHLEtBaEJILEVBekJnRCxDQWlEaEQ7QUFDQTtBQUNBO0FBR0gsQ0F0REQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGltYmVyLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWUgZnJvbSAnLi9zY3JpcHRzL2dhbWUnXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JlZW4nKVxuICAgIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgY29uc3QgR0FNRV9XSURUSCA9IDQ1MDtcbiAgICBjb25zdCBHQU1FX0hFSUdIVCA9IDUwMDtcblxuICAgIGxldCBnYW1lID0gbmV3IEdhbWUoR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpXG5cbiAgICBsZXQgdGlsZVNoZWV0ID0gbmV3IEltYWdlKClcbiAgICB0aWxlU2hlZXQuc3JjID0gJy4vYXNzZXRzL2Jsb2NrLnBuZydcblxuICAgIGxldCBsYXZhID0gbmV3IEltYWdlKClcbiAgICBsYXZhLnNyYyA9ICcuL2Fzc2V0cy9sYXZhLnBuZydcblxuICAgIC8vIGxhdmEgbWFrZSBvbmUgdGhhdCBpcyA0NTAgYnkgNTAwIGluIGhpZWdodFxuICAgIGxhdmEuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShsYXZhLCAwLCA0NTApXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UobGF2YSwgMTAwLCA0NTApXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UobGF2YSwgMjAwLCA0NTApXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UobGF2YSwgMzAwLCA0NTApXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UobGF2YSwgNDAwLCA0NTApXG5cbiAgICB9KVxuXG4gICAgdGlsZVNoZWV0LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGlsZVNoZWV0LCAwLCA0MDAsIDM1LCAyNSk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGlsZVNoZWV0LCAzMCwgNDAwLCAzNSwgMjUpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRpbGVTaGVldCwgNjAsIDQwMCwgMzUsIDI1KTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aWxlU2hlZXQsIDkwLCA0MDAsIDM1LCAyNSk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGlsZVNoZWV0LCAxMjAsIDQwMCwgMzUsIDI1KTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aWxlU2hlZXQsIDE1MCwgNDAwLCAzNSwgMjUpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRpbGVTaGVldCwgMTgwLCA0MDAsIDM1LCAyNSk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGlsZVNoZWV0LCAyNDAsIDM2MCwgMzUsIDI1KTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aWxlU2hlZXQsIDMwMCwgMzIwLCAzNSwgMjUpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRpbGVTaGVldCwgMjQwLCAyODAsIDM1LCAyNSk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGlsZVNoZWV0LCAyMTAsIDI4MCwgMzUsIDI1KTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aWxlU2hlZXQsIDE4MCwgMjgwLCAzNSwgMjUpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRpbGVTaGVldCwgMTUwLCAyODAsIDM1LCAyNSk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGlsZVNoZWV0LCAxMjAsIDI4MCwgMzUsIDI1KTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aWxlU2hlZXQsIDkwLCAyODAsIDM1LCAyNSk7XG4gICAgfSwgZmFsc2UpXG5cbiAgICBcblxuICAgIFxuXG5cblxuICAgIC8vIGNvbnN0IHRpbGVNYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGlsZV9zZXQnKTtcbiAgICAvLyBjdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICAvLyBjdHguZmlsbFJlY3QoMTAsIDEwLCA0NSwgNDUpO1xuICAgIFxuICAgIFxufSkiXSwibmFtZXMiOlsiR2FtZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsInF1ZXJ5U2VsZWN0b3IiLCJjdHgiLCJnZXRDb250ZXh0IiwiR0FNRV9XSURUSCIsIkdBTUVfSEVJR0hUIiwiZ2FtZSIsInRpbGVTaGVldCIsIkltYWdlIiwic3JjIiwibGF2YSIsImRyYXdJbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ \"./src/scripts/sprite.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\nvar Game = function Game(gameWidth, gameHeight) {\n  _classCallCheck(this, Game);\n\n  this.gameWidth = gameWidth;\n  this.gameHeight = gameHeight;\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7SUFFcUJDLE9BQ2pCLGNBQVlDLFNBQVosRUFBdUJDLFVBQXZCLEVBQW1DO0FBQUE7O0FBQy9CLE9BQUtELFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsT0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaW1iZXIvLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwcml0ZSBmcm9tIFwiLi9zcHJpdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoZ2FtZVdpZHRoLCBnYW1lSGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuZ2FtZVdpZHRoID0gZ2FtZVdpZHRoO1xuICAgICAgICB0aGlzLmdhbWVIZWlnaHQgPSBnYW1lSGVpZ2h0XG4gICAgfVxufSJdLCJuYW1lcyI6WyJTcHJpdGUiLCJHYW1lIiwiZ2FtZVdpZHRoIiwiZ2FtZUhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/sprite.js":
/*!*******************************!*\
  !*** ./src/scripts/sprite.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Sprite; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Sprite = function Sprite(game) {\n  _classCallCheck(this, Sprite);\n\n  this.game = game;\n  this.speed = {\n    x: 4,\n    y: 2\n  };\n  this.position = {\n    x: 0,\n    y: 400\n  };\n  this.width = 16;\n  this.height = 16;\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zcHJpdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQXFCQSxTQUNqQixnQkFBWUMsSUFBWixFQUFrQjtBQUFBOztBQUNkLE9BQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNBLE9BQUtDLEtBQUwsR0FBYTtBQUFFQyxJQUFBQSxDQUFDLEVBQUUsQ0FBTDtBQUFRQyxJQUFBQSxDQUFDLEVBQUU7QUFBWCxHQUFiO0FBRUEsT0FBS0MsUUFBTCxHQUFnQjtBQUFDRixJQUFBQSxDQUFDLEVBQUUsQ0FBSjtBQUFPQyxJQUFBQSxDQUFDLEVBQUU7QUFBVixHQUFoQjtBQUNBLE9BQUtFLEtBQUwsR0FBYSxFQUFiO0FBQ0EsT0FBS0MsTUFBTCxHQUFhLEVBQWI7QUFFSCIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaW1iZXIvLi9zcmMvc2NyaXB0cy9zcHJpdGUuanM/MGFjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBTcHJpdGUge1xuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZVxuICAgICAgICB0aGlzLnNwZWVkID0geyB4OiA0LCB5OiAyfVxuXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7eDogMCwgeTogNDAwfVxuICAgICAgICB0aGlzLndpZHRoID0gMTZcbiAgICAgICAgdGhpcy5oZWlnaHQgPTE2XG5cbiAgICB9XG59Il0sIm5hbWVzIjpbIlNwcml0ZSIsImdhbWUiLCJzcGVlZCIsIngiLCJ5IiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/sprite.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGltYmVyLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;