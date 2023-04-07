/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContant() {\n  const contact = document.createElement(\"div\");\n  contact.classList.add(\"contact\");\n\n  const address = document.createElement(\"p\");\n  address.textContent = \"Address: Kruszwicka 1, 85-213 Bydgoszcz\";\n\n  const hours = document.createElement(\"p\");\n  hours.textContent = `Monday-Friday: 7am-8pm\n                       Sat-Sun: 8am-7pm`;\n\n  const phone = document.createElement(\"p\");\n  phone.textContent = \"Phone: (323)534-23-432\";\n\n  const map = document.createElement(\"div\");\n  map.innerHTML = `\n    <iframe\n      src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76613.46161565487!2d17.85340306249999!3d53.1250817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470313b3d4d2088d%3A0xe1053c84a02493c8!2sKFC%20Bydgoszcz%20Casino!5e0!3m2!1spl!2spl!4v1680899077571!5m2!1spl!2spl\"\n      width=\"600\"\n      height=\"450\"\n      style=\"border:0;\"\n      allowfullscreen=\"\"\n      loading=\"lazy\"\n      referrerpolicy=\"no-referrer-when-downgrade\"\n    ></iframe>`;\n  document.cookie = \"username=John Doe; SameSite=Strict;\";\n\n  contact.appendChild(address);\n  contact.appendChild(hours);\n  contact.appendChild(phone);\n  contact.appendChild(map);\n\n  return contact;\n}\n\nfunction contactLoad() {\n  const main = document.getElementById(\"main\");\n  main.textContent = \"\";\n  main.appendChild(createContant());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactLoad);\n\n\n//# sourceURL=webpack://restaurant-page-project/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHomepage() {\n  const homePage = document.createElement(\"div\");\n  homePage.classList.add(\"homePage\");\n\n  const homePicture = document.createElement(\"img\");\n  homePicture.setAttribute(\"id\", \"homeImage\");\n  homePicture.src = \"images/chicken-chef.png\";\n\n  const para = document.createElement(\"p\");\n  para.setAttribute(\"id\", \"homePara\");\n  para.textContent = \"Since 1992 We are The Chickenzz\";\n\n  homePage.appendChild(para);\n  homePage.appendChild(homePicture);\n\n  return homePage;\n}\n\nfunction homeLoad() {\n  const main = document.getElementById(\"main\");\n  main.textContent = \"\";\n  main.appendChild(createHomepage());\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeLoad);\n\n\n//# sourceURL=webpack://restaurant-page-project/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ \"./src/page-load.js\");\n\n\n(0,_page_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://restaurant-page-project/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenu() {\n  const menu = document.createElement(\"div\");\n  menu.classList.add(\"menu\");\n\n  menu.appendChild(\n    createDish(\n      \"Creamy\",\n      \"When it comes to chicken breast recipes, it's hard to beat this one. The sauce is simple but so flavorful thanks to garlic, tomatoes, and most importantly, cream. It's bright and easy and just as good in the summer as it is in the winter, whether you're craving comfort food or a dinner fancy enough for guests.\"\n    )\n  );\n\n  menu.appendChild(\n    createDish(\n      \"Chicken&Rice\",\n      \"This dish started as way to use leftover rice that has dried out some and may not be great on its own, but is still perfectly edible. The addition of oil and soy sauce and veggies and meat spruce up the rice for a delicious meal.\"\n    )\n  );\n\n  menu.appendChild(\n    createDish(\n      \"Za'atar\",\n      \"This sheet-pan dinner is our newest fave: Bone-in chicken thighs, baby potatoes, broccoli, and red onion are all tossed in a simple olive oil, lemon juice, and za’atar marinade, then roasted to crispy, schmaltzy perfection. To kick it up another notch, we’re drizzling it all in a creamy tahini sauce to finish it off. \"\n    )\n  );\n\n  menu.appendChild(\n    createDish(\n      \"Chicken&Cacciatore\",\n      \"The dish emerged in the 14th century as a means to feed hunters who’d been away tracking for long periods of time, using the meat, mushrooms, and herbs they’d collected along the way. While we may not have been out hunting, after a long day this dish is still particularly comforting, not in the least because it all comes together in one pot.\"\n    )\n  );\n\n  menu.appendChild(\n    createDish(\n      \"Chicken&Parmesan\",\n      \"The fact that crispy golden chicken can be achieved without the use of any oil whatsoever is amazing (not to mention how quickly the air fryer can do it!). There's no need to turn on your oven or make a whole oily mess on your stovetop: This chicken Parm tastes every bit as good as the traditional version with much less effort to get there.\"\n    )\n  );\n\n  return menu;\n}\n\nfunction createDish(name, description) {\n  const dish = document.createElement(\"div\");\n  dish.classList.add(\"dish-card\");\n\n  const dishName = document.createElement(\"h2\");\n  dishName.textContent = name;\n\n  const dishDescription = document.createElement(\"p\");\n  dishDescription.textContent = description;\n\n  const dishPic = document.createElement(\"img\");\n  dishPic.src = `images/dish/${name.toLowerCase()}.png`;\n  dishPic.alt = `Picture of ${name}`;\n  dishPic.classList.add(\"dish-pic\");\n\n  dish.appendChild(dishName);\n  dish.appendChild(dishPic);\n  dish.appendChild(dishDescription);\n\n  return dish;\n}\n\nfunction menuLoad() {\n  const main = document.getElementById(\"main\");\n  main.textContent = \"\";\n  main.appendChild(createMenu());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuLoad);\n\n\n//# sourceURL=webpack://restaurant-page-project/./src/menu.js?");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nfunction createHeader() {\n  const header = document.createElement(\"header\");\n  header.classList.add(\"header\");\n\n  const restaurantName = document.createElement(\"h1\");\n  restaurantName.classList.add(\"restaurant-name\");\n  restaurantName.textContent = \"The Chickenzz\";\n\n  header.appendChild(restaurantName);\n\n  return header;\n}\nfunction createNav() {\n  const nav = document.createElement(\"nav\");\n  nav.classList.add(\"nav\");\n\n  const homeButton = document.createElement(\"button\");\n  homeButton.classList.add(\"nav-button\");\n  homeButton.textContent = \"HenHouse\";\n  homeButton.addEventListener(\"click\", () => {\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  });\n\n  const menuButton = document.createElement(\"button\");\n  menuButton.classList.add(\"nav-button\");\n  menuButton.textContent = \"Chickens\";\n  menuButton.addEventListener(\"click\", () => {\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  });\n\n  const contactButton = document.createElement(\"button\");\n  contactButton.classList.add(\"nav-button\");\n  contactButton.textContent = \"Cluck Us\";\n  contactButton.addEventListener(\"click\", () => {\n    (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  });\n\n  nav.appendChild(homeButton);\n  nav.appendChild(menuButton);\n  nav.appendChild(contactButton);\n\n  return nav;\n}\n\nfunction createMain() {\n  const main = document.createElement(\"main\");\n  main.classList.add(\"main\");\n  main.setAttribute(\"id\", \"main\");\n  return main;\n}\n\nfunction createFooter() {\n  const footer = document.createElement(\"footer\");\n  footer.classList.add(\"footer\");\n\n  const authorName = document.createElement(\"p\");\n  authorName.textContent = \"Copyright © Damian Koziol\";\n\n  footer.appendChild(authorName);\n  return footer;\n}\n\nfunction renderWebsite() {\n  const content = document.getElementById(\"content\");\n\n  content.appendChild(createHeader());\n  content.appendChild(createNav());\n  content.appendChild(createMain());\n  content.appendChild(createFooter());\n\n  (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderWebsite);\n\n\n//# sourceURL=webpack://restaurant-page-project/./src/page-load.js?");

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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;