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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var canvas = document.querySelector('.screen');\n  var ctx = canvas.getContext(\"2d\");\n  var GAME_WIDTH = 450;\n  var GAME_HEIGHT = 500;\n  var game = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](GAME_WIDTH, GAME_HEIGHT);\n  var tileSheet = new Image();\n  tileSheet.src = './assets/block.png';\n  var lava = new Image();\n  lava.src = './assets/lava.png'; // lava make one that is 450 by 500 in hieght\n\n  lava.addEventListener('load', function () {\n    ctx.drawImage(lava, 0, 450);\n    ctx.drawImage(lava, 100, 450);\n    ctx.drawImage(lava, 200, 450);\n    ctx.drawImage(lava, 300, 450);\n    ctx.drawImage(lava, 400, 450);\n  });\n  tileSheet.addEventListener('load', function () {\n    ctx.drawImage(tileSheet, 0, 400, 35, 25);\n    ctx.drawImage(tileSheet, 30, 400, 35, 25);\n    ctx.drawImage(tileSheet, 60, 400, 35, 25);\n    ctx.drawImage(tileSheet, 90, 400, 35, 25);\n    ctx.drawImage(tileSheet, 120, 400, 35, 25);\n    ctx.drawImage(tileSheet, 150, 400, 35, 25);\n    ctx.drawImage(tileSheet, 180, 400, 35, 25);\n    ctx.drawImage(tileSheet, 240, 360, 35, 25);\n    ctx.drawImage(tileSheet, 300, 320, 35, 25);\n    ctx.drawImage(tileSheet, 240, 280, 35, 25);\n    ctx.drawImage(tileSheet, 210, 280, 35, 25);\n    ctx.drawImage(tileSheet, 180, 280, 35, 25);\n    ctx.drawImage(tileSheet, 150, 280, 35, 25);\n    ctx.drawImage(tileSheet, 120, 280, 35, 25);\n    ctx.drawImage(tileSheet, 90, 280, 35, 25);\n  }, false);\n  game.draw(ctx); // const tileMap = document.querySelector('#tile_set');\n  // ctx.fillStyle = 'black';\n  // ctx.fillRect(10, 10, 45, 45);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2hELE1BQUlDLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxhQUFULENBQXVCLFNBQXZCLENBQWI7QUFDQSxNQUFJQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csVUFBUCxDQUFrQixJQUFsQixDQUFWO0FBRUEsTUFBTUMsVUFBVSxHQUFHLEdBQW5CO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLEdBQXBCO0FBRUEsTUFBSUMsSUFBSSxHQUFHLElBQUlULHFEQUFKLENBQVNPLFVBQVQsRUFBcUJDLFdBQXJCLENBQVg7QUFJQSxNQUFJRSxTQUFTLEdBQUcsSUFBSUMsS0FBSixFQUFoQjtBQUNBRCxFQUFBQSxTQUFTLENBQUNFLEdBQVYsR0FBZ0Isb0JBQWhCO0FBRUEsTUFBSUMsSUFBSSxHQUFHLElBQUlGLEtBQUosRUFBWDtBQUNBRSxFQUFBQSxJQUFJLENBQUNELEdBQUwsR0FBVyxtQkFBWCxDQWZnRCxDQWlCaEQ7O0FBQ0FDLEVBQUFBLElBQUksQ0FBQ1gsZ0JBQUwsQ0FBc0IsTUFBdEIsRUFBOEIsWUFBTTtBQUNoQ0csSUFBQUEsR0FBRyxDQUFDUyxTQUFKLENBQWNELElBQWQsRUFBb0IsQ0FBcEIsRUFBdUIsR0FBdkI7QUFDQVIsSUFBQUEsR0FBRyxDQUFDUyxTQUFKLENBQWNELElBQWQsRUFBb0IsR0FBcEIsRUFBeUIsR0FBekI7QUFDQVIsSUFBQUEsR0FBRyxDQUFDUyxTQUFKLENBQWNELElBQWQsRUFBb0IsR0FBcEIsRUFBeUIsR0FBekI7QUFDQVIsSUFBQUEsR0FBRyxDQUFDUyxTQUFKLENBQWNELElBQWQsRUFBb0IsR0FBcEIsRUFBeUIsR0FBekI7QUFDQVIsSUFBQUEsR0FBRyxDQUFDUyxTQUFKLENBQWNELElBQWQsRUFBb0IsR0FBcEIsRUFBeUIsR0FBekI7QUFFSCxHQVBEO0FBU0FILEVBQUFBLFNBQVMsQ0FBQ1IsZ0JBQVYsQ0FBMkIsTUFBM0IsRUFBbUMsWUFBTTtBQUNyQ0csSUFBQUEsR0FBRyxDQUFDUyxTQUFKLENBQWNKLFNBQWQsRUFBeUIsQ0FBekIsRUFBNEIsR0FBNUIsRUFBaUMsRUFBakMsRUFBcUMsRUFBckM7QUFDQUwsSUFBQUEsR0FBRyxDQUFDUyxTQUFKLENBQWNKLFNBQWQsRUFBeUIsRUFBekIsRUFBNkIsR0FBN0IsRUFBa0MsRUFBbEMsRUFBc0MsRUFBdEM7QUFDQUwsSUFBQUEsR0FBRyxDQUFDUyxTQUFKLENBQWNKLFNBQWQsRUFBeUIsRUFBekIsRUFBNkIsR0FBN0IsRUFBa0MsRUFBbEMsRUFBc0MsRUFBdEM7QUFDQUwsSUFBQUEsR0FBRyxDQUFDUyxTQUFKLENBQWNKLFNBQWQsRUFBeUIsRUFBekIsRUFBNkIsR0FBN0IsRUFBa0MsRUFBbEMsRUFBc0MsRUFBdEM7QUFDQUwsSUFBQUEsR0FBRyxDQUFDUyxTQUFKLENBQWNKLFNBQWQsRUFBeUIsR0FBekIsRUFBOEIsR0FBOUIsRUFBbUMsRUFBbkMsRUFBdUMsRUFBdkM7QUFDQUwsSUFBQUEsR0FBRyxDQUFDUyxTQUFKLENBQWNKLFNBQWQsRUFBeUIsR0FBekIsRUFBOEIsR0FBOUIsRUFBbUMsRUFBbkMsRUFBdUMsRUFBdkM7QUFDQUwsSUFBQUEsR0FBRyxDQUFDUyxTQUFKLENBQWNKLFNBQWQsRUFBeUIsR0FBekIsRUFBOEIsR0FBOUIsRUFBbUMsRUFBbkMsRUFBdUMsRUFBdkM7QUFDQUwsSUFBQUEsR0FBRyxDQUFDUyxTQUFKLENBQWNKLFNBQWQsRUFBeUIsR0FBekIsRUFBOEIsR0FBOUIsRUFBbUMsRUFBbkMsRUFBdUMsRUFBdkM7QUFDQUwsSUFBQUEsR0FBRyxDQUFDUyxTQUFKLENBQWNKLFNBQWQsRUFBeUIsR0FBekIsRUFBOEIsR0FBOUIsRUFBbUMsRUFBbkMsRUFBdUMsRUFBdkM7QUFDQUwsSUFBQUEsR0FBRyxDQUFDUyxTQUFKLENBQWNKLFNBQWQsRUFBeUIsR0FBekIsRUFBOEIsR0FBOUIsRUFBbUMsRUFBbkMsRUFBdUMsRUFBdkM7QUFDQUwsSUFBQUEsR0FBRyxDQUFDUyxTQUFKLENBQWNKLFNBQWQsRUFBeUIsR0FBekIsRUFBOEIsR0FBOUIsRUFBbUMsRUFBbkMsRUFBdUMsRUFBdkM7QUFDQUwsSUFBQUEsR0FBRyxDQUFDUyxTQUFKLENBQWNKLFNBQWQsRUFBeUIsR0FBekIsRUFBOEIsR0FBOUIsRUFBbUMsRUFBbkMsRUFBdUMsRUFBdkM7QUFDQUwsSUFBQUEsR0FBRyxDQUFDUyxTQUFKLENBQWNKLFNBQWQsRUFBeUIsR0FBekIsRUFBOEIsR0FBOUIsRUFBbUMsRUFBbkMsRUFBdUMsRUFBdkM7QUFDQUwsSUFBQUEsR0FBRyxDQUFDUyxTQUFKLENBQWNKLFNBQWQsRUFBeUIsR0FBekIsRUFBOEIsR0FBOUIsRUFBbUMsRUFBbkMsRUFBdUMsRUFBdkM7QUFDQUwsSUFBQUEsR0FBRyxDQUFDUyxTQUFKLENBQWNKLFNBQWQsRUFBeUIsRUFBekIsRUFBNkIsR0FBN0IsRUFBa0MsRUFBbEMsRUFBc0MsRUFBdEM7QUFDSCxHQWhCRCxFQWdCRyxLQWhCSDtBQWtCQUQsRUFBQUEsSUFBSSxDQUFDTSxJQUFMLENBQVVWLEdBQVYsRUE3Q2dELENBbURoRDtBQUNBO0FBQ0E7QUFHSCxDQXhERCIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaW1iZXIvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZSBmcm9tICcuL3NjcmlwdHMvZ2FtZSdcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjcmVlbicpXG4gICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICBjb25zdCBHQU1FX1dJRFRIID0gNDUwO1xuICAgIGNvbnN0IEdBTUVfSEVJR0hUID0gNTAwO1xuXG4gICAgbGV0IGdhbWUgPSBuZXcgR2FtZShHQU1FX1dJRFRILCBHQU1FX0hFSUdIVClcblxuICAgIFxuXG4gICAgbGV0IHRpbGVTaGVldCA9IG5ldyBJbWFnZSgpXG4gICAgdGlsZVNoZWV0LnNyYyA9ICcuL2Fzc2V0cy9ibG9jay5wbmcnXG5cbiAgICBsZXQgbGF2YSA9IG5ldyBJbWFnZSgpXG4gICAgbGF2YS5zcmMgPSAnLi9hc3NldHMvbGF2YS5wbmcnXG5cbiAgICAvLyBsYXZhIG1ha2Ugb25lIHRoYXQgaXMgNDUwIGJ5IDUwMCBpbiBoaWVnaHRcbiAgICBsYXZhLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UobGF2YSwgMCwgNDUwKVxuICAgICAgICBjdHguZHJhd0ltYWdlKGxhdmEsIDEwMCwgNDUwKVxuICAgICAgICBjdHguZHJhd0ltYWdlKGxhdmEsIDIwMCwgNDUwKVxuICAgICAgICBjdHguZHJhd0ltYWdlKGxhdmEsIDMwMCwgNDUwKVxuICAgICAgICBjdHguZHJhd0ltYWdlKGxhdmEsIDQwMCwgNDUwKVxuXG4gICAgfSlcblxuICAgIHRpbGVTaGVldC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRpbGVTaGVldCwgMCwgNDAwLCAzNSwgMjUpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRpbGVTaGVldCwgMzAsIDQwMCwgMzUsIDI1KTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aWxlU2hlZXQsIDYwLCA0MDAsIDM1LCAyNSk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGlsZVNoZWV0LCA5MCwgNDAwLCAzNSwgMjUpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRpbGVTaGVldCwgMTIwLCA0MDAsIDM1LCAyNSk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGlsZVNoZWV0LCAxNTAsIDQwMCwgMzUsIDI1KTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aWxlU2hlZXQsIDE4MCwgNDAwLCAzNSwgMjUpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRpbGVTaGVldCwgMjQwLCAzNjAsIDM1LCAyNSk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGlsZVNoZWV0LCAzMDAsIDMyMCwgMzUsIDI1KTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aWxlU2hlZXQsIDI0MCwgMjgwLCAzNSwgMjUpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRpbGVTaGVldCwgMjEwLCAyODAsIDM1LCAyNSk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGlsZVNoZWV0LCAxODAsIDI4MCwgMzUsIDI1KTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aWxlU2hlZXQsIDE1MCwgMjgwLCAzNSwgMjUpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRpbGVTaGVldCwgMTIwLCAyODAsIDM1LCAyNSk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGlsZVNoZWV0LCA5MCwgMjgwLCAzNSwgMjUpO1xuICAgIH0sIGZhbHNlKVxuXG4gICAgZ2FtZS5kcmF3KGN0eClcblxuICAgIFxuXG5cblxuICAgIC8vIGNvbnN0IHRpbGVNYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGlsZV9zZXQnKTtcbiAgICAvLyBjdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICAvLyBjdHguZmlsbFJlY3QoMTAsIDEwLCA0NSwgNDUpO1xuICAgIFxuICAgIFxufSkiXSwibmFtZXMiOlsiR2FtZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsInF1ZXJ5U2VsZWN0b3IiLCJjdHgiLCJnZXRDb250ZXh0IiwiR0FNRV9XSURUSCIsIkdBTUVfSEVJR0hUIiwiZ2FtZSIsInRpbGVTaGVldCIsIkltYWdlIiwic3JjIiwibGF2YSIsImRyYXdJbWFnZSIsImRyYXciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ \"./src/scripts/sprite.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Game = /*#__PURE__*/function () {\n  function Game(gameWidth, gameHeight) {\n    _classCallCheck(this, Game);\n\n    this.gameWidth = gameWidth;\n    this.gameHeight = gameHeight;\n    this.sprite = new _sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this);\n  }\n\n  _createClass(Game, [{\n    key: \"draw\",\n    value: function draw(ctx) {\n      this.sprite.draw(ctx);\n    }\n  }]);\n\n  return Game;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0lBRXFCQztBQUNqQixnQkFBWUMsU0FBWixFQUF1QkMsVUFBdkIsRUFBbUM7QUFBQTs7QUFDL0IsU0FBS0QsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUVBLFNBQUtDLE1BQUwsR0FBYyxJQUFJSiwrQ0FBSixDQUFXLElBQVgsQ0FBZDtBQUNIOzs7O1dBRUQsY0FBS0ssR0FBTCxFQUFVO0FBQ04sV0FBS0QsTUFBTCxDQUFZRSxJQUFaLENBQWlCRCxHQUFqQjtBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpbWJlci8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3ByaXRlIGZyb20gXCIuL3Nwcml0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihnYW1lV2lkdGgsIGdhbWVIZWlnaHQpIHtcbiAgICAgICAgdGhpcy5nYW1lV2lkdGggPSBnYW1lV2lkdGg7XG4gICAgICAgIHRoaXMuZ2FtZUhlaWdodCA9IGdhbWVIZWlnaHRcblxuICAgICAgICB0aGlzLnNwcml0ZSA9IG5ldyBTcHJpdGUodGhpcyk7XG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgdGhpcy5zcHJpdGUuZHJhdyhjdHgpXG4gICAgfVxufSJdLCJuYW1lcyI6WyJTcHJpdGUiLCJHYW1lIiwiZ2FtZVdpZHRoIiwiZ2FtZUhlaWdodCIsInNwcml0ZSIsImN0eCIsImRyYXciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/sprite.js":
/*!*******************************!*\
  !*** ./src/scripts/sprite.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Sprite; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Sprite = /*#__PURE__*/function () {\n  function Sprite(game) {\n    _classCallCheck(this, Sprite);\n\n    this.game = game;\n    this.speed = {\n      x: 4,\n      y: 2\n    };\n    this.position = {\n      x: 0,\n      y: 400\n    };\n    this.width = 16;\n    this.height = 16;\n  }\n\n  _createClass(Sprite, [{\n    key: \"draw\",\n    value: function draw(ctx) {\n      ctx.fillStyle = 'green';\n      ctx.fillRect(0, 350, this.width, this.height);\n    }\n  }, {\n    key: \"update\",\n    value: function update() {}\n  }]);\n\n  return Sprite;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zcHJpdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFxQkE7QUFDakIsa0JBQVlDLElBQVosRUFBa0I7QUFBQTs7QUFDZCxTQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFBRUMsTUFBQUEsQ0FBQyxFQUFFLENBQUw7QUFBUUMsTUFBQUEsQ0FBQyxFQUFFO0FBQVgsS0FBYjtBQUVBLFNBQUtDLFFBQUwsR0FBZ0I7QUFBQ0YsTUFBQUEsQ0FBQyxFQUFFLENBQUo7QUFBT0MsTUFBQUEsQ0FBQyxFQUFFO0FBQVYsS0FBaEI7QUFDQSxTQUFLRSxLQUFMLEdBQWEsRUFBYjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxFQUFkO0FBRUg7Ozs7V0FFRCxjQUFLQyxHQUFMLEVBQVU7QUFDTkEsTUFBQUEsR0FBRyxDQUFDQyxTQUFKLEdBQWdCLE9BQWhCO0FBQ0FELE1BQUFBLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLENBQWIsRUFBZ0IsR0FBaEIsRUFBcUIsS0FBS0osS0FBMUIsRUFBaUMsS0FBS0MsTUFBdEM7QUFDSDs7O1dBRUQsa0JBQVMsQ0FFUiIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaW1iZXIvLi9zcmMvc2NyaXB0cy9zcHJpdGUuanM/MGFjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBTcHJpdGUge1xuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZVxuICAgICAgICB0aGlzLnNwZWVkID0geyB4OiA0LCB5OiAyfVxuXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7eDogMCwgeTogNDAwfVxuICAgICAgICB0aGlzLndpZHRoID0gMTZcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxNlxuXG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdncmVlbidcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDM1MCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuXG4gICAgfVxufSJdLCJuYW1lcyI6WyJTcHJpdGUiLCJnYW1lIiwic3BlZWQiLCJ4IiwieSIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJjdHgiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/sprite.js\n");

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