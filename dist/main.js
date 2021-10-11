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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n/* harmony import */ var _scripts_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/input */ \"./src/scripts/input.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var canvas = document.querySelector('.screen');\n  var ctx = canvas.getContext(\"2d\");\n  var GAME_WIDTH = 450;\n  var GAME_HEIGHT = 500;\n  var game = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](GAME_WIDTH, GAME_HEIGHT);\n  var tileSheet = new Image();\n  tileSheet.src = './assets/block.png';\n  var lava = new Image();\n  lava.src = './assets/lava.png';\n  (0,_scripts_input__WEBPACK_IMPORTED_MODULE_1__.inputHandler)(); // lava make one that is 450 by 500 in hieght\n\n  lava.addEventListener('load', function () {\n    ctx.drawImage(lava, 0, 450);\n    ctx.drawImage(lava, 100, 450);\n    ctx.drawImage(lava, 200, 450);\n    ctx.drawImage(lava, 300, 450);\n    ctx.drawImage(lava, 400, 450);\n  });\n  tileSheet.addEventListener('load', function () {\n    ctx.drawImage(tileSheet, 0, 400, 35, 25);\n    ctx.drawImage(tileSheet, 30, 400, 35, 25);\n    ctx.drawImage(tileSheet, 60, 400, 35, 25);\n    ctx.drawImage(tileSheet, 90, 400, 35, 25);\n    ctx.drawImage(tileSheet, 120, 400, 35, 25);\n    ctx.drawImage(tileSheet, 150, 400, 35, 25);\n    ctx.drawImage(tileSheet, 180, 400, 35, 25);\n    ctx.drawImage(tileSheet, 240, 360, 35, 25);\n    ctx.drawImage(tileSheet, 300, 320, 35, 25);\n    ctx.drawImage(tileSheet, 240, 280, 35, 25);\n    ctx.drawImage(tileSheet, 210, 280, 35, 25);\n    ctx.drawImage(tileSheet, 180, 280, 35, 25);\n    ctx.drawImage(tileSheet, 150, 280, 35, 25);\n    ctx.drawImage(tileSheet, 120, 280, 35, 25);\n    ctx.drawImage(tileSheet, 90, 280, 35, 25);\n  }, false);\n  game.draw(ctx); // let time = 0\n  // function engine(currentTime) {\n  //     let dT = timeStamp - time\n  //     time = currentTime\n  // }\n  // const tileMap = document.querySelector('#tile_set');\n  // ctx.fillStyle = 'black';\n  // ctx.fillRect(10, 10, 45, 45);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUVBRSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2hELE1BQUlDLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxhQUFULENBQXVCLFNBQXZCLENBQWI7QUFDQSxNQUFJQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csVUFBUCxDQUFrQixJQUFsQixDQUFWO0FBRUEsTUFBTUMsVUFBVSxHQUFHLEdBQW5CO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLEdBQXBCO0FBRUEsTUFBSUMsSUFBSSxHQUFHLElBQUlWLHFEQUFKLENBQVNRLFVBQVQsRUFBcUJDLFdBQXJCLENBQVg7QUFJQSxNQUFJRSxTQUFTLEdBQUcsSUFBSUMsS0FBSixFQUFoQjtBQUNBRCxFQUFBQSxTQUFTLENBQUNFLEdBQVYsR0FBZ0Isb0JBQWhCO0FBRUEsTUFBSUMsSUFBSSxHQUFHLElBQUlGLEtBQUosRUFBWDtBQUNBRSxFQUFBQSxJQUFJLENBQUNELEdBQUwsR0FBVyxtQkFBWDtBQUVBWixFQUFBQSw0REFBWSxHQWpCb0MsQ0FtQmhEOztBQUNBYSxFQUFBQSxJQUFJLENBQUNYLGdCQUFMLENBQXNCLE1BQXRCLEVBQThCLFlBQU07QUFDaENHLElBQUFBLEdBQUcsQ0FBQ1MsU0FBSixDQUFjRCxJQUFkLEVBQW9CLENBQXBCLEVBQXVCLEdBQXZCO0FBQ0FSLElBQUFBLEdBQUcsQ0FBQ1MsU0FBSixDQUFjRCxJQUFkLEVBQW9CLEdBQXBCLEVBQXlCLEdBQXpCO0FBQ0FSLElBQUFBLEdBQUcsQ0FBQ1MsU0FBSixDQUFjRCxJQUFkLEVBQW9CLEdBQXBCLEVBQXlCLEdBQXpCO0FBQ0FSLElBQUFBLEdBQUcsQ0FBQ1MsU0FBSixDQUFjRCxJQUFkLEVBQW9CLEdBQXBCLEVBQXlCLEdBQXpCO0FBQ0FSLElBQUFBLEdBQUcsQ0FBQ1MsU0FBSixDQUFjRCxJQUFkLEVBQW9CLEdBQXBCLEVBQXlCLEdBQXpCO0FBRUgsR0FQRDtBQVNBSCxFQUFBQSxTQUFTLENBQUNSLGdCQUFWLENBQTJCLE1BQTNCLEVBQW1DLFlBQU07QUFDckNHLElBQUFBLEdBQUcsQ0FBQ1MsU0FBSixDQUFjSixTQUFkLEVBQXlCLENBQXpCLEVBQTRCLEdBQTVCLEVBQWlDLEVBQWpDLEVBQXFDLEVBQXJDO0FBQ0FMLElBQUFBLEdBQUcsQ0FBQ1MsU0FBSixDQUFjSixTQUFkLEVBQXlCLEVBQXpCLEVBQTZCLEdBQTdCLEVBQWtDLEVBQWxDLEVBQXNDLEVBQXRDO0FBQ0FMLElBQUFBLEdBQUcsQ0FBQ1MsU0FBSixDQUFjSixTQUFkLEVBQXlCLEVBQXpCLEVBQTZCLEdBQTdCLEVBQWtDLEVBQWxDLEVBQXNDLEVBQXRDO0FBQ0FMLElBQUFBLEdBQUcsQ0FBQ1MsU0FBSixDQUFjSixTQUFkLEVBQXlCLEVBQXpCLEVBQTZCLEdBQTdCLEVBQWtDLEVBQWxDLEVBQXNDLEVBQXRDO0FBQ0FMLElBQUFBLEdBQUcsQ0FBQ1MsU0FBSixDQUFjSixTQUFkLEVBQXlCLEdBQXpCLEVBQThCLEdBQTlCLEVBQW1DLEVBQW5DLEVBQXVDLEVBQXZDO0FBQ0FMLElBQUFBLEdBQUcsQ0FBQ1MsU0FBSixDQUFjSixTQUFkLEVBQXlCLEdBQXpCLEVBQThCLEdBQTlCLEVBQW1DLEVBQW5DLEVBQXVDLEVBQXZDO0FBQ0FMLElBQUFBLEdBQUcsQ0FBQ1MsU0FBSixDQUFjSixTQUFkLEVBQXlCLEdBQXpCLEVBQThCLEdBQTlCLEVBQW1DLEVBQW5DLEVBQXVDLEVBQXZDO0FBQ0FMLElBQUFBLEdBQUcsQ0FBQ1MsU0FBSixDQUFjSixTQUFkLEVBQXlCLEdBQXpCLEVBQThCLEdBQTlCLEVBQW1DLEVBQW5DLEVBQXVDLEVBQXZDO0FBQ0FMLElBQUFBLEdBQUcsQ0FBQ1MsU0FBSixDQUFjSixTQUFkLEVBQXlCLEdBQXpCLEVBQThCLEdBQTlCLEVBQW1DLEVBQW5DLEVBQXVDLEVBQXZDO0FBQ0FMLElBQUFBLEdBQUcsQ0FBQ1MsU0FBSixDQUFjSixTQUFkLEVBQXlCLEdBQXpCLEVBQThCLEdBQTlCLEVBQW1DLEVBQW5DLEVBQXVDLEVBQXZDO0FBQ0FMLElBQUFBLEdBQUcsQ0FBQ1MsU0FBSixDQUFjSixTQUFkLEVBQXlCLEdBQXpCLEVBQThCLEdBQTlCLEVBQW1DLEVBQW5DLEVBQXVDLEVBQXZDO0FBQ0FMLElBQUFBLEdBQUcsQ0FBQ1MsU0FBSixDQUFjSixTQUFkLEVBQXlCLEdBQXpCLEVBQThCLEdBQTlCLEVBQW1DLEVBQW5DLEVBQXVDLEVBQXZDO0FBQ0FMLElBQUFBLEdBQUcsQ0FBQ1MsU0FBSixDQUFjSixTQUFkLEVBQXlCLEdBQXpCLEVBQThCLEdBQTlCLEVBQW1DLEVBQW5DLEVBQXVDLEVBQXZDO0FBQ0FMLElBQUFBLEdBQUcsQ0FBQ1MsU0FBSixDQUFjSixTQUFkLEVBQXlCLEdBQXpCLEVBQThCLEdBQTlCLEVBQW1DLEVBQW5DLEVBQXVDLEVBQXZDO0FBQ0FMLElBQUFBLEdBQUcsQ0FBQ1MsU0FBSixDQUFjSixTQUFkLEVBQXlCLEVBQXpCLEVBQTZCLEdBQTdCLEVBQWtDLEVBQWxDLEVBQXNDLEVBQXRDO0FBQ0gsR0FoQkQsRUFnQkcsS0FoQkg7QUFrQkFELEVBQUFBLElBQUksQ0FBQ00sSUFBTCxDQUFVVixHQUFWLEVBL0NnRCxDQWlEaEQ7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQU1BO0FBQ0E7QUFDQTtBQUdILENBbkVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpbWJlci8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lIGZyb20gJy4vc2NyaXB0cy9nYW1lJ1xuaW1wb3J0IHsgaW5wdXRIYW5kbGVyIH0gZnJvbSAnLi9zY3JpcHRzL2lucHV0J1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NyZWVuJylcbiAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgIGNvbnN0IEdBTUVfV0lEVEggPSA0NTA7XG4gICAgY29uc3QgR0FNRV9IRUlHSFQgPSA1MDA7XG5cbiAgICBsZXQgZ2FtZSA9IG5ldyBHYW1lKEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKVxuXG4gICAgXG5cbiAgICBsZXQgdGlsZVNoZWV0ID0gbmV3IEltYWdlKClcbiAgICB0aWxlU2hlZXQuc3JjID0gJy4vYXNzZXRzL2Jsb2NrLnBuZydcblxuICAgIGxldCBsYXZhID0gbmV3IEltYWdlKClcbiAgICBsYXZhLnNyYyA9ICcuL2Fzc2V0cy9sYXZhLnBuZydcblxuICAgIGlucHV0SGFuZGxlcigpO1xuXG4gICAgLy8gbGF2YSBtYWtlIG9uZSB0aGF0IGlzIDQ1MCBieSA1MDAgaW4gaGllZ2h0XG4gICAgbGF2YS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBjdHguZHJhd0ltYWdlKGxhdmEsIDAsIDQ1MClcbiAgICAgICAgY3R4LmRyYXdJbWFnZShsYXZhLCAxMDAsIDQ1MClcbiAgICAgICAgY3R4LmRyYXdJbWFnZShsYXZhLCAyMDAsIDQ1MClcbiAgICAgICAgY3R4LmRyYXdJbWFnZShsYXZhLCAzMDAsIDQ1MClcbiAgICAgICAgY3R4LmRyYXdJbWFnZShsYXZhLCA0MDAsIDQ1MClcblxuICAgIH0pXG5cbiAgICB0aWxlU2hlZXQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aWxlU2hlZXQsIDAsIDQwMCwgMzUsIDI1KTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aWxlU2hlZXQsIDMwLCA0MDAsIDM1LCAyNSk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGlsZVNoZWV0LCA2MCwgNDAwLCAzNSwgMjUpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRpbGVTaGVldCwgOTAsIDQwMCwgMzUsIDI1KTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aWxlU2hlZXQsIDEyMCwgNDAwLCAzNSwgMjUpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRpbGVTaGVldCwgMTUwLCA0MDAsIDM1LCAyNSk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGlsZVNoZWV0LCAxODAsIDQwMCwgMzUsIDI1KTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aWxlU2hlZXQsIDI0MCwgMzYwLCAzNSwgMjUpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRpbGVTaGVldCwgMzAwLCAzMjAsIDM1LCAyNSk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGlsZVNoZWV0LCAyNDAsIDI4MCwgMzUsIDI1KTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aWxlU2hlZXQsIDIxMCwgMjgwLCAzNSwgMjUpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRpbGVTaGVldCwgMTgwLCAyODAsIDM1LCAyNSk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGlsZVNoZWV0LCAxNTAsIDI4MCwgMzUsIDI1KTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aWxlU2hlZXQsIDEyMCwgMjgwLCAzNSwgMjUpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRpbGVTaGVldCwgOTAsIDI4MCwgMzUsIDI1KTtcbiAgICB9LCBmYWxzZSlcblxuICAgIGdhbWUuZHJhdyhjdHgpXG5cbiAgICAvLyBsZXQgdGltZSA9IDBcblxuICAgIC8vIGZ1bmN0aW9uIGVuZ2luZShjdXJyZW50VGltZSkge1xuICAgIC8vICAgICBsZXQgZFQgPSB0aW1lU3RhbXAgLSB0aW1lXG4gICAgLy8gICAgIHRpbWUgPSBjdXJyZW50VGltZVxuXG4gICAgICAgIFxuICAgIC8vIH1cblxuICAgIFxuXG5cblxuICAgIC8vIGNvbnN0IHRpbGVNYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGlsZV9zZXQnKTtcbiAgICAvLyBjdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICAvLyBjdHguZmlsbFJlY3QoMTAsIDEwLCA0NSwgNDUpO1xuICAgIFxuICAgIFxufSkiXSwibmFtZXMiOlsiR2FtZSIsImlucHV0SGFuZGxlciIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsInF1ZXJ5U2VsZWN0b3IiLCJjdHgiLCJnZXRDb250ZXh0IiwiR0FNRV9XSURUSCIsIkdBTUVfSEVJR0hUIiwiZ2FtZSIsInRpbGVTaGVldCIsIkltYWdlIiwic3JjIiwibGF2YSIsImRyYXdJbWFnZSIsImRyYXciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ \"./src/scripts/sprite.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Game = /*#__PURE__*/function () {\n  function Game(gameWidth, gameHeight) {\n    _classCallCheck(this, Game);\n\n    this.gameWidth = gameWidth;\n    this.gameHeight = gameHeight;\n    this.sprite = new _sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this);\n  }\n\n  _createClass(Game, [{\n    key: \"draw\",\n    value: function draw(ctx) {\n      this.sprite.draw(ctx);\n    }\n  }]);\n\n  return Game;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0lBRXFCQztBQUNqQixnQkFBWUMsU0FBWixFQUF1QkMsVUFBdkIsRUFBbUM7QUFBQTs7QUFDL0IsU0FBS0QsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUVBLFNBQUtDLE1BQUwsR0FBYyxJQUFJSiwrQ0FBSixDQUFXLElBQVgsQ0FBZDtBQUNIOzs7O1dBRUQsY0FBS0ssR0FBTCxFQUFVO0FBQ04sV0FBS0QsTUFBTCxDQUFZRSxJQUFaLENBQWlCRCxHQUFqQjtBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpbWJlci8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3ByaXRlIGZyb20gXCIuL3Nwcml0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihnYW1lV2lkdGgsIGdhbWVIZWlnaHQpIHtcbiAgICAgICAgdGhpcy5nYW1lV2lkdGggPSBnYW1lV2lkdGg7XG4gICAgICAgIHRoaXMuZ2FtZUhlaWdodCA9IGdhbWVIZWlnaHRcblxuICAgICAgICB0aGlzLnNwcml0ZSA9IG5ldyBTcHJpdGUodGhpcyk7XG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgdGhpcy5zcHJpdGUuZHJhdyhjdHgpXG4gICAgfVxufSJdLCJuYW1lcyI6WyJTcHJpdGUiLCJHYW1lIiwiZ2FtZVdpZHRoIiwiZ2FtZUhlaWdodCIsInNwcml0ZSIsImN0eCIsImRyYXciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/input.js":
/*!******************************!*\
  !*** ./src/scripts/input.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"inputHandler\": function() { return /* binding */ inputHandler; }\n/* harmony export */ });\nfunction inputHandler(sprite) {\n  document.addEventListener('keydown', function (event) {\n    switch (event.keyCode) {\n      case 39:\n        sprite.moveRight();\n        break;\n\n      case 37:\n        sprite.moveLeft();\n        break;\n    }\n  });\n  document.addEventListener('keyup', function (event) {\n    switch (event.keyCode) {\n      case 39:\n        if (sprite.speed.x > 0) sprite.stop();\n        break;\n\n      case 37:\n        if (sprite.speed.x < 0) sprite.stop();\n        break;\n\n      case 32:\n        sprite.falling();\n        break;\n      //  13.88 pixels persecond is gravity figure out out to find time to find out velocity\n      // velocity = .4629px\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9pbnB1dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQ08sU0FBU0EsWUFBVCxDQUFzQkMsTUFBdEIsRUFBOEI7QUFFakNDLEVBQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsVUFBQ0MsS0FBRCxFQUFXO0FBQzVDLFlBQU9BLEtBQUssQ0FBQ0MsT0FBYjtBQUNJLFdBQUssRUFBTDtBQUNJSixRQUFBQSxNQUFNLENBQUNLLFNBQVA7QUFDQTs7QUFDSixXQUFLLEVBQUw7QUFDSUwsUUFBQUEsTUFBTSxDQUFDTSxRQUFQO0FBQ0E7QUFOUjtBQVFILEdBVEQ7QUFXQUwsRUFBQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFDQyxLQUFELEVBQVc7QUFDMUMsWUFBT0EsS0FBSyxDQUFDQyxPQUFiO0FBQ0ksV0FBSyxFQUFMO0FBQ0ksWUFBSUosTUFBTSxDQUFDTyxLQUFQLENBQWFDLENBQWIsR0FBaUIsQ0FBckIsRUFBd0JSLE1BQU0sQ0FBQ1MsSUFBUDtBQUN4Qjs7QUFDSixXQUFLLEVBQUw7QUFDSSxZQUFHVCxNQUFNLENBQUNPLEtBQVAsQ0FBYUMsQ0FBYixHQUFpQixDQUFwQixFQUF1QlIsTUFBTSxDQUFDUyxJQUFQO0FBQ3ZCOztBQUNKLFdBQUssRUFBTDtBQUNJVCxRQUFBQSxNQUFNLENBQUNVLE9BQVA7QUFDQTtBQUVBO0FBQ0E7QUFaUjtBQWNILEdBZkQ7QUFpQkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGltYmVyLy4vc3JjL3NjcmlwdHMvaW5wdXQuanM/NDRkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBmdW5jdGlvbiBpbnB1dEhhbmRsZXIoc3ByaXRlKSB7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgIHNwcml0ZS5tb3ZlUmlnaHQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgICAgc3ByaXRlLm1vdmVMZWZ0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgIGlmIChzcHJpdGUuc3BlZWQueCA+IDApIHNwcml0ZS5zdG9wKClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgICAgaWYoc3ByaXRlLnNwZWVkLnggPCAwKSBzcHJpdGUuc3RvcCgpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgICAgIHNwcml0ZS5mYWxsaW5nKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAvLyAgMTMuODggcGl4ZWxzIHBlcnNlY29uZCBpcyBncmF2aXR5IGZpZ3VyZSBvdXQgb3V0IHRvIGZpbmQgdGltZSB0byBmaW5kIG91dCB2ZWxvY2l0eVxuICAgICAgICAgICAgICAgIC8vIHZlbG9jaXR5ID0gLjQ2MjlweFxuICAgICAgICB9XG4gICAgfSkgXG5cbn0iXSwibmFtZXMiOlsiaW5wdXRIYW5kbGVyIiwic3ByaXRlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJrZXlDb2RlIiwibW92ZVJpZ2h0IiwibW92ZUxlZnQiLCJzcGVlZCIsIngiLCJzdG9wIiwiZmFsbGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/input.js\n");

/***/ }),

/***/ "./src/scripts/sprite.js":
/*!*******************************!*\
  !*** ./src/scripts/sprite.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Sprite; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Sprite = /*#__PURE__*/function () {\n  function Sprite(game) {\n    _classCallCheck(this, Sprite);\n\n    this.game = game;\n    this.speed = {\n      x: 4,\n      y: 2\n    };\n    this.totalSpeed = 10;\n    this.position = {\n      x: 0,\n      y: 375\n    };\n    this.width = 16;\n    this.height = 16;\n  }\n\n  _createClass(Sprite, [{\n    key: \"draw\",\n    value: function draw(ctx) {\n      ctx.fillStyle = 'green';\n      ctx.fillRect(this.position.x, this.position.y, this.width, this.height);\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      this.position.x += this.speed.x;\n      this.position.y += this.speed.y;\n    }\n  }, {\n    key: \"moveLeft\",\n    value: function moveLeft() {\n      this.speed.x = -this.totalSpeed;\n    }\n  }, {\n    key: \"moveRight\",\n    value: function moveRight() {\n      this.speed.x = this.totalSpeed;\n    }\n  }, {\n    key: \"moveUp\",\n    value: function moveUp() {\n      this.speed.y = -this.totalSpeed;\n    }\n  }, {\n    key: \"falling\",\n    value: function falling() {\n      this.speed.y = this.totalSpeed;\n    }\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      this.speed = 0;\n    }\n  }]);\n\n  return Sprite;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zcHJpdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFxQkE7QUFDakIsa0JBQVlDLElBQVosRUFBa0I7QUFBQTs7QUFDZCxTQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFBRUMsTUFBQUEsQ0FBQyxFQUFFLENBQUw7QUFBUUMsTUFBQUEsQ0FBQyxFQUFFO0FBQVgsS0FBYjtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCO0FBQUNILE1BQUFBLENBQUMsRUFBRSxDQUFKO0FBQU9DLE1BQUFBLENBQUMsRUFBRTtBQUFWLEtBQWhCO0FBQ0EsU0FBS0csS0FBTCxHQUFhLEVBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsRUFBZDtBQUVIOzs7O1dBRUQsY0FBS0MsR0FBTCxFQUFVO0FBQ05BLE1BQUFBLEdBQUcsQ0FBQ0MsU0FBSixHQUFnQixPQUFoQjtBQUNBRCxNQUFBQSxHQUFHLENBQUNFLFFBQUosQ0FBYSxLQUFLTCxRQUFMLENBQWNILENBQTNCLEVBQThCLEtBQUtHLFFBQUwsQ0FBY0YsQ0FBNUMsRUFBK0MsS0FBS0csS0FBcEQsRUFBMkQsS0FBS0MsTUFBaEU7QUFDSDs7O1dBRUQsa0JBQVM7QUFDTCxXQUFLRixRQUFMLENBQWNILENBQWQsSUFBbUIsS0FBS0QsS0FBTCxDQUFXQyxDQUE5QjtBQUNBLFdBQUtHLFFBQUwsQ0FBY0YsQ0FBZCxJQUFtQixLQUFLRixLQUFMLENBQVdFLENBQTlCO0FBQ0g7OztXQUVELG9CQUFXO0FBQ1AsV0FBS0YsS0FBTCxDQUFXQyxDQUFYLEdBQWUsQ0FBQyxLQUFLRSxVQUFyQjtBQUNIOzs7V0FFRCxxQkFBWTtBQUNSLFdBQUtILEtBQUwsQ0FBV0MsQ0FBWCxHQUFlLEtBQUtFLFVBQXBCO0FBQ0g7OztXQUVELGtCQUFTO0FBQ0wsV0FBS0gsS0FBTCxDQUFXRSxDQUFYLEdBQWUsQ0FBQyxLQUFLQyxVQUFyQjtBQUNIOzs7V0FFRCxtQkFBVTtBQUNOLFdBQUtILEtBQUwsQ0FBV0UsQ0FBWCxHQUFlLEtBQUtDLFVBQXBCO0FBQ0g7OztXQUVELGdCQUFPO0FBQ0gsV0FBS0gsS0FBTCxHQUFhLENBQWI7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaW1iZXIvLi9zcmMvc2NyaXB0cy9zcHJpdGUuanM/MGFjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBTcHJpdGUge1xuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZVxuICAgICAgICB0aGlzLnNwZWVkID0geyB4OiA0LCB5OiAyfVxuICAgICAgICB0aGlzLnRvdGFsU3BlZWQgPSAxMFxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge3g6IDAsIHk6IDM3NX1cbiAgICAgICAgdGhpcy53aWR0aCA9IDE2XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMTZcblxuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAnZ3JlZW4nXG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy5zcGVlZC54XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSArPSB0aGlzLnNwZWVkLnlcbiAgICB9XG5cbiAgICBtb3ZlTGVmdCgpIHtcbiAgICAgICAgdGhpcy5zcGVlZC54ID0gLXRoaXMudG90YWxTcGVlZFxuICAgIH1cblxuICAgIG1vdmVSaWdodCgpIHtcbiAgICAgICAgdGhpcy5zcGVlZC54ID0gdGhpcy50b3RhbFNwZWVkXG4gICAgfVxuXG4gICAgbW92ZVVwKCkge1xuICAgICAgICB0aGlzLnNwZWVkLnkgPSAtdGhpcy50b3RhbFNwZWVkXG4gICAgfVxuXG4gICAgZmFsbGluZygpIHtcbiAgICAgICAgdGhpcy5zcGVlZC55ID0gdGhpcy50b3RhbFNwZWVkXG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDBcbiAgICB9XG59Il0sIm5hbWVzIjpbIlNwcml0ZSIsImdhbWUiLCJzcGVlZCIsIngiLCJ5IiwidG90YWxTcGVlZCIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJjdHgiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/sprite.js\n");

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