/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
}

#headline {
    display: inline-block;
    grid-column: span 2;
    background-color: #92C1B2;
    color: aliceblue;
    font-weight: bolder;
    font-size: 4rem;
    letter-spacing: 10px;
    overflow: hidden;
}

#todo-list-icon {
    margin-right: 2rem;
}

#text {
    padding-top: 1.4rem;
    padding-left: 23rem;
}

body {
    display: grid;
    grid-template-columns: 1.5fr 4fr;
    grid-template-rows: 0.6fr 4fr;
    height: 100vh;
    width: 100vw;
}

.todo-list-container {
    display: grid;
    grid-template-columns: 1.3fr 4fr;
    width: 100vw;
}

.main {
    background-color: #bdd6d6;
}

.title-add-project {
    display: flex;
    outline-style: solid;
    color: turquoise;
}

.all-projects {
    display: flex;
    flex-direction: column;
}

.header {
  display: flex;
  justify-content: center;
  flex-direction: row;
  position: relative;
}

.newProjectTitle,
.btn-containers {
    display: flex;
}

body {
    display: grid;
    grid-template-columns: 1fr 4fr;
};

.task-container {
    display: flex;
    flex-direction: column;
}

.side-bar {
    display: flex;
    flex-direction: column;
}

.project-btn-container {
    display: grid;
    grid-template-columns: 3fr 1fr;
}

.today,
.upcoming,
.show-projects-container {
    display: grid;
    grid-template-columns: 0.7fr 3fr;
    font-size: 2rem;
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    letter-spacing: 0.3rem;
    background-color: white;
    border-color: #92C1B2;
    border-style: solid;
    color: #92C1B2;
    font-weight: bolder;
}

.today:hover,
.upcoming:hover,
#projects-btn:hover,
.all-projects > button:hover {
    background: #6eb49f;
    opacity: 50%;
    color: white;
}

.upcoming {
    border-top: none;
}

.today > div,
.upcoming > div {
    justify-self: left;
    padding-left: 2rem;
}

.show-projects-container {
    grid-template-columns: 1fr 1.9fr 1fr;
    border-top: none;
}

#projects-btn {
    font-size: 2rem;
    letter-spacing: 0.3rem;
    display: inline-block;
    background-color: white;
    text-align: left;
    font-weight: bolder;
    color: #92C1B2;
    border-style: none;
}

.drop-down-btn {
    background-color: white;
    border-style: none;
}

#projects-icon {
    padding-right: 1.9rem;
}

.all-projects {
    display: flex;
    flex-direction: column;
    gap: 0.9px;
    width: 50%;
    height: 40%;
    padding-left: 8rem;
    padding-top: 2rem;
}

.all-projects > button {
    height: 2.7rem;
    font-size: 1.5rem;
    background-color: white;
    border-color: #92C1B2;
    border-style: solid;
    color: #92C1B2;
    font-weight: bolder;
}

.sidebar-icons {
    justify-self: end;
}

.input-project {
    padding-top: 4rem;
    align-self: center;
}

.input-project > div {
    display: grid;
    grid-template-columns: 10fr 1.5fr;
    height: 3rem;
}

#get-project-title {
    background: #EFEFEF;
    border-style: solid;
    border-color: #92C1B2;
    font-size: 1.5rem;
}

.add-project-btn {
    background-color: #92C1B2;
    border-style: none;
}

.delete-project-btn {
    margin-top: 1rem;
    text-align: center;
    width: 100%;
    height: 2.5rem;
    font-size: larger;
    letter-spacing: 0.2rem;
    background-color: #92C1B2;
    font-weight: bolder;
    color: white;
    border-style: none;
}

.delete-project-btn:hover {
    border-style: solid;
    border-color: #6eb49f;
    background-color: white;
    color: #6eb49f;
}

.project-title {
    padding-top: 1rem;
    padding-bottom: 3rem;
    font-size: 3.5rem;
    font-weight: bolder;
    color: white;
    letter-spacing: 10px;
}

.add-task-btn {
    display: grid;
    grid-template-columns: 2fr 3.5fr;
    width: 20%;
    padding: 1.2rem 1.3rem 1.2rem 1.3rem;
    font-size: 1rem;
    letter-spacing: 5px;
    background-color: #6eb49f;
    color: white;
    font-weight: bold;
    border-radius: 4vw;
    border-style: none;
    margin-left: 3rem;
}

.add-task-btn > div {
    align-self:center;
    justify-self: left;
}

.add-task-btn > img {
    align-self: center;
    justify-self: center;
}

.add-task-btn:hover {
    background-color: #78C4AD;
}

.change-name-container {
    padding-top: 2.5rem;
}

#new-project-title {
    height: 3.5rem;
    width: 24rem;
    font-size: 2.5rem;
    letter-spacing: 0.5rem;
    background-color: #6eb49f;
    color: white;
    border-style: none;
    border-radius: 0.2vw;
}

.btn-containers {
    padding-top: 1rem;
}

#save-btn,
#cancel-btn {
    padding: 0.5rem 0.7rem 0.5rem 0.7rem;
    font-weight: bold;
    color: white;
    letter-spacing: 3px;
    border-radius:0.5vw;
}

#save-btn {
    margin-right: 1.5rem;
    background-color: #8ED0DE;
    border-style: none;
}

#cancel-btn {
    background-color: #92C1B2;
    border-style: none;
}

#save-btn:hover,
#cancel-btn:hover {
    border-style: solid;
    border-color: white;
}

.task-form {
    display: flex;
    flex-direction: column;
    padding: 3rem;
    justify-content: space-between;
    position: absolute;
    top: 7rem;
    left: 4rem;
    height: 13rem;
    width: 45%;
    background: white;
    z-index: 1;
}

.task-form > input,
.task-form > select {
    background-color: #6eb49f;
    color: white;
    height: 2rem;
    border-style: none;
    border-radius: 0.3vw;
}

textarea {
    background-color: #6eb49f;
    border-radius: 0.3vw;
}

#cancel-task-btn,
#submit-task-btn,
#save-task-btn {
    padding: 0.5rem 0.7rem 0.5rem 0.7rem;
    font-weight: bolder;
}

#submit-task-btn:hover,
#save-task-btn:hover {
    background-color: #75D7BA;
}

#cancel-task-btn:hover {
    background-color: #6eb49f;
    color: white;
    border-radius: 0.3vw;  
    border-style: none; 
}

#submit-task-btn,
#save-task-btn {
    background-color: #6eb49f;
    color: white;
    border-radius: 0.3vw;  
    border-style: none; 
}

#cancel-task-btn {
    margin-left: 1rem;
    color: #6eb49f;
    background-color: white;
    border-style: solid;
    border-color: #6eb49f;
    border-radius: 0.3vw; 
}

#task-container {
    height: 9%;
}

#task-background {
    background-color: white;
    width: 80%;
    height: 100%;
    margin-left: 3.8rem;
    display: grid;
    grid-template-columns: 0.7fr 4fr 1fr 0.7fr ;
    justify-content: center;
    align-items: center;
}

#task-background > input[type="checkbox"] {
    align-self: center;
    justify-self: center;
    appearance: none;
    background-color: #fff;
    margin: 0;
    font: inherit;
    color: lightslategray;
    width: 2.15em;
    height: 2.15em;
    border: 0.15em solid currentColor;
    border-radius: 0.15em;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;    
    border-radius: 3vw;
    background-color: lightgrey;
}

#task-background > input[type="checkbox"]:checked {
    content: "";
    width: 0.65em;
    height: 0.65em;
    background-color: lightblue;
    transform: scale(3);
    transition: 120ms transform ease-in-out;
}

#task-background > input[type="checkbox"]:checked::before {
    transform: scale(1);
}

.todo-list {
    display: flex;
    flex-direction: column;   
    height: 100%;
    gap: 1rem;
    overflow: hidden;
}

.taskBtns {
    display: flex;
    flex-direction: column;
    justify-self: center;
    align-self: center;
    background-color: none;
    gap: 4px;
}

.taskBtns > button {
    background-color: white;
    border-style: none;
}

.taskBtns > button:hover {
    background: whitesmoke;
} 





`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n}\n\n#headline {\n    display: inline-block;\n    grid-column: span 2;\n    background-color: #92C1B2;\n    color: aliceblue;\n    font-weight: bolder;\n    font-size: 4rem;\n    letter-spacing: 10px;\n    overflow: hidden;\n}\n\n#todo-list-icon {\n    margin-right: 2rem;\n}\n\n#text {\n    padding-top: 1.4rem;\n    padding-left: 23rem;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: 1.5fr 4fr;\n    grid-template-rows: 0.6fr 4fr;\n    height: 100vh;\n    width: 100vw;\n}\n\n.todo-list-container {\n    display: grid;\n    grid-template-columns: 1.3fr 4fr;\n    width: 100vw;\n}\n\n.main {\n    background-color: #bdd6d6;\n}\n\n.title-add-project {\n    display: flex;\n    outline-style: solid;\n    color: turquoise;\n}\n\n.all-projects {\n    display: flex;\n    flex-direction: column;\n}\n\n.header {\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  position: relative;\n}\n\n.newProjectTitle,\n.btn-containers {\n    display: flex;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n};\n\n.task-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.side-bar {\n    display: flex;\n    flex-direction: column;\n}\n\n.project-btn-container {\n    display: grid;\n    grid-template-columns: 3fr 1fr;\n}\n\n.today,\n.upcoming,\n.show-projects-container {\n    display: grid;\n    grid-template-columns: 0.7fr 3fr;\n    font-size: 2rem;\n    padding-top: 0.8rem;\n    padding-bottom: 0.8rem;\n    letter-spacing: 0.3rem;\n    background-color: white;\n    border-color: #92C1B2;\n    border-style: solid;\n    color: #92C1B2;\n    font-weight: bolder;\n}\n\n.today:hover,\n.upcoming:hover,\n#projects-btn:hover,\n.all-projects > button:hover {\n    background: #6eb49f;\n    opacity: 50%;\n    color: white;\n}\n\n.upcoming {\n    border-top: none;\n}\n\n.today > div,\n.upcoming > div {\n    justify-self: left;\n    padding-left: 2rem;\n}\n\n.show-projects-container {\n    grid-template-columns: 1fr 1.9fr 1fr;\n    border-top: none;\n}\n\n#projects-btn {\n    font-size: 2rem;\n    letter-spacing: 0.3rem;\n    display: inline-block;\n    background-color: white;\n    text-align: left;\n    font-weight: bolder;\n    color: #92C1B2;\n    border-style: none;\n}\n\n.drop-down-btn {\n    background-color: white;\n    border-style: none;\n}\n\n#projects-icon {\n    padding-right: 1.9rem;\n}\n\n.all-projects {\n    display: flex;\n    flex-direction: column;\n    gap: 0.9px;\n    width: 50%;\n    height: 40%;\n    padding-left: 8rem;\n    padding-top: 2rem;\n}\n\n.all-projects > button {\n    height: 2.7rem;\n    font-size: 1.5rem;\n    background-color: white;\n    border-color: #92C1B2;\n    border-style: solid;\n    color: #92C1B2;\n    font-weight: bolder;\n}\n\n.sidebar-icons {\n    justify-self: end;\n}\n\n.input-project {\n    padding-top: 4rem;\n    align-self: center;\n}\n\n.input-project > div {\n    display: grid;\n    grid-template-columns: 10fr 1.5fr;\n    height: 3rem;\n}\n\n#get-project-title {\n    background: #EFEFEF;\n    border-style: solid;\n    border-color: #92C1B2;\n    font-size: 1.5rem;\n}\n\n.add-project-btn {\n    background-color: #92C1B2;\n    border-style: none;\n}\n\n.delete-project-btn {\n    margin-top: 1rem;\n    text-align: center;\n    width: 100%;\n    height: 2.5rem;\n    font-size: larger;\n    letter-spacing: 0.2rem;\n    background-color: #92C1B2;\n    font-weight: bolder;\n    color: white;\n    border-style: none;\n}\n\n.delete-project-btn:hover {\n    border-style: solid;\n    border-color: #6eb49f;\n    background-color: white;\n    color: #6eb49f;\n}\n\n.project-title {\n    padding-top: 1rem;\n    padding-bottom: 3rem;\n    font-size: 3.5rem;\n    font-weight: bolder;\n    color: white;\n    letter-spacing: 10px;\n}\n\n.add-task-btn {\n    display: grid;\n    grid-template-columns: 2fr 3.5fr;\n    width: 20%;\n    padding: 1.2rem 1.3rem 1.2rem 1.3rem;\n    font-size: 1rem;\n    letter-spacing: 5px;\n    background-color: #6eb49f;\n    color: white;\n    font-weight: bold;\n    border-radius: 4vw;\n    border-style: none;\n    margin-left: 3rem;\n}\n\n.add-task-btn > div {\n    align-self:center;\n    justify-self: left;\n}\n\n.add-task-btn > img {\n    align-self: center;\n    justify-self: center;\n}\n\n.add-task-btn:hover {\n    background-color: #78C4AD;\n}\n\n.change-name-container {\n    padding-top: 2.5rem;\n}\n\n#new-project-title {\n    height: 3.5rem;\n    width: 24rem;\n    font-size: 2.5rem;\n    letter-spacing: 0.5rem;\n    background-color: #6eb49f;\n    color: white;\n    border-style: none;\n    border-radius: 0.2vw;\n}\n\n.btn-containers {\n    padding-top: 1rem;\n}\n\n#save-btn,\n#cancel-btn {\n    padding: 0.5rem 0.7rem 0.5rem 0.7rem;\n    font-weight: bold;\n    color: white;\n    letter-spacing: 3px;\n    border-radius:0.5vw;\n}\n\n#save-btn {\n    margin-right: 1.5rem;\n    background-color: #8ED0DE;\n    border-style: none;\n}\n\n#cancel-btn {\n    background-color: #92C1B2;\n    border-style: none;\n}\n\n#save-btn:hover,\n#cancel-btn:hover {\n    border-style: solid;\n    border-color: white;\n}\n\n.task-form {\n    display: flex;\n    flex-direction: column;\n    padding: 3rem;\n    justify-content: space-between;\n    position: absolute;\n    top: 7rem;\n    left: 4rem;\n    height: 13rem;\n    width: 45%;\n    background: white;\n    z-index: 1;\n}\n\n.task-form > input,\n.task-form > select {\n    background-color: #6eb49f;\n    color: white;\n    height: 2rem;\n    border-style: none;\n    border-radius: 0.3vw;\n}\n\ntextarea {\n    background-color: #6eb49f;\n    border-radius: 0.3vw;\n}\n\n#cancel-task-btn,\n#submit-task-btn,\n#save-task-btn {\n    padding: 0.5rem 0.7rem 0.5rem 0.7rem;\n    font-weight: bolder;\n}\n\n#submit-task-btn:hover,\n#save-task-btn:hover {\n    background-color: #75D7BA;\n}\n\n#cancel-task-btn:hover {\n    background-color: #6eb49f;\n    color: white;\n    border-radius: 0.3vw;  \n    border-style: none; \n}\n\n#submit-task-btn,\n#save-task-btn {\n    background-color: #6eb49f;\n    color: white;\n    border-radius: 0.3vw;  \n    border-style: none; \n}\n\n#cancel-task-btn {\n    margin-left: 1rem;\n    color: #6eb49f;\n    background-color: white;\n    border-style: solid;\n    border-color: #6eb49f;\n    border-radius: 0.3vw; \n}\n\n#task-container {\n    height: 9%;\n}\n\n#task-background {\n    background-color: white;\n    width: 80%;\n    height: 100%;\n    margin-left: 3.8rem;\n    display: grid;\n    grid-template-columns: 0.7fr 4fr 1fr 0.7fr ;\n    justify-content: center;\n    align-items: center;\n}\n\n#task-background > input[type=\"checkbox\"] {\n    align-self: center;\n    justify-self: center;\n    appearance: none;\n    background-color: #fff;\n    margin: 0;\n    font: inherit;\n    color: lightslategray;\n    width: 2.15em;\n    height: 2.15em;\n    border: 0.15em solid currentColor;\n    border-radius: 0.15em;\n    transform: translateY(-0.075em);\n    display: grid;\n    place-content: center;    \n    border-radius: 3vw;\n    background-color: lightgrey;\n}\n\n#task-background > input[type=\"checkbox\"]:checked {\n    content: \"\";\n    width: 0.65em;\n    height: 0.65em;\n    background-color: lightblue;\n    transform: scale(3);\n    transition: 120ms transform ease-in-out;\n}\n\n#task-background > input[type=\"checkbox\"]:checked::before {\n    transform: scale(1);\n}\n\n.todo-list {\n    display: flex;\n    flex-direction: column;   \n    height: 100%;\n    gap: 1rem;\n    overflow: hidden;\n}\n\n.taskBtns {\n    display: flex;\n    flex-direction: column;\n    justify-self: center;\n    align-self: center;\n    background-color: none;\n    gap: 4px;\n}\n\n.taskBtns > button {\n    background-color: white;\n    border-style: none;\n}\n\n.taskBtns > button:hover {\n    background: whitesmoke;\n} \n\n\n\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   allProjects: () => (/* binding */ allProjects),
/* harmony export */   projectManagement: () => (/* binding */ projectManagement)
/* harmony export */ });
const allProjects = [];

const projectManagement = () => {
    const addProject = (title) => {
        const project = makeProject(title);
        allProjects.push(project);
    };

    const editProjectName = (i, name) => {
         allProjects[i].projectDetails.projectName = name
    };
    
    const deleteProject = (i) => {
        allProjects.splice(i,1);
    };
    
    const viewProjects = () => {
        console.log(allProjects);
    };
    
    const makeProject = (projectTitle) => {
        const projectDetails = {
            projectName: projectTitle,
            allTasks: []
        };
    
        const taskManagement = new taskOperations(projectDetails);
        const addTask = taskManagement.addTask;
        const deleteTask = taskManagement.deleteTask;
        const editTask = taskManagement.editTasks;
    
        return {
            projectDetails,
            addTask,
            deleteTask,
            editTask,
        };
    };

    return {
        addProject,
        deleteProject,
        viewProjects,
        editProjectName
    };
};

class taskOperations {
    constructor(project)  {
        this.project = project;
    }

    addTask = (name, details, date, priorityList, check) => {
        const taskDetails = new task(name, details, date, priorityList, check);

        this.project.allTasks.push(taskDetails);
    }

    deleteTask(i) {
        return this.projectDetails.allTasks.splice(i,1)
    };
};

class task {
    constructor(taskName, description, dueDate, priorityList, checkBox) {
        this.taskName = taskName;
        this.description = description;
        this.dueDate = dueDate;
        this.priorityList = priorityList;
        this.checkBox = checkBox;
    };

    set() {
        [this.taskName, this.description, this.dueDate, this.priorityList] = value.split(" ");
    };
};





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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic */ "./src/logic.js");



//DOM

_logic__WEBPACK_IMPORTED_MODULE_1__.allProjects
const project = (0,_logic__WEBPACK_IMPORTED_MODULE_1__.projectManagement)();

const addProjectBtn = document.querySelector('.add-project-btn');
addProjectBtn.addEventListener('click', () => addProject());
const deleteProjectBtn = document.querySelector('.delete-project-btn');
deleteProjectBtn.addEventListener('click',deleteProject);

function addProject() {
    const getProjectTitle = document.getElementById('get-project-title');
    projectNameDisplay(getProjectTitle.value);
    getProjectTitle.value = '';
}

function projectNameDisplay(projectName) {
    project.addProject(projectName);
    project.viewProjects();
    const projects = document.querySelector('.all-projects');
    const btn = document.createElement('button');
    btn.setAttribute('id',`${projectName}-btn`);
    btn.textContent = projectName;
    btn.addEventListener('click',() => {
        headerDisplay(btn.textContent);
        const currentProjectTitle = document.querySelector('.project-title').textContent;
        projectTaskDisplay(currentProjectTitle);
    })
    projects.appendChild(btn);
};

function projectTaskDisplay() {
    const name = document.querySelector('.project-title').textContent;
    const todoList = document.querySelector('.todo-list');
    todoList.textContent = '';
    const projectIndex = _logic__WEBPACK_IMPORTED_MODULE_1__.allProjects.findIndex(p => p.projectDetails.projectName === name);
    _logic__WEBPACK_IMPORTED_MODULE_1__.allProjects[projectIndex].projectDetails.allTasks.forEach(task => {
        addTaskDOM(task.taskName, task.description, task.dueDate, task.priorityList);
    });
    makeAddTaskBtn();
}

function makeAddTaskBtn() {
    const name = document.querySelector('.project-title').textContent;
    const todoList = document.querySelector('.todo-list');
    const containerTaskBtn = document.createElement('div');
    containerTaskBtn.classList.add('container-task-btn')
    const addTaskBtn = document.createElement('button');
    const addIconImg = document.createElement('img');
    const div = document.createElement('div');
    addIconImg.setAttribute('src','/src/icons/material-symbols_add.svg')
    addTaskBtn.addEventListener('click',(e) => {
        e.preventDefault();
        taskForm(name);
    });
    div.textContent = 'Add Task';
    addTaskBtn.classList.add('add-task-btn');
    addTaskBtn.appendChild(addIconImg);
    addTaskBtn.appendChild(div)
    containerTaskBtn.appendChild(addTaskBtn);
    todoList.appendChild(containerTaskBtn);
}

function headerDisplay(name) {
    const header = document.querySelector('.header');
    header.textContent = '';
    const projectTitle = document.createElement('div');
    projectTitle.classList.add('project-title');
    projectTitle.setAttribute('id', name);
    projectTitle.textContent = name;
    projectTitle.addEventListener('click',() => changeName(name));
    header.appendChild(projectTitle);
};

function taskForm(name) {
    const header = document.querySelector('.header');
    const form = document.createElement('form');
    form.classList.add('task-form');
    header.appendChild(form);
    const task = document.createElement('input');
    task.setAttribute('type','text');
    task.setAttribute('id','get-task-name');
    task.setAttribute('placeholder','Task name');
    const description = document.createElement('textarea');
    description.setAttribute('type','text');
    description.setAttribute('id','get-description');
    description.setAttribute('placeholder','Description');
    const date = document.createElement('input');
    date.setAttribute('type','date');
    date.setAttribute('id','get-date');
    const priorityList = document.createElement('select');
    priorityList.setAttribute('id','get-priority-list');
    const urgent = document.createElement('option');
    urgent.setAttribute('value','urgent');
    urgent.textContent = 'urgent';
    const important = document.createElement('option');
    important.setAttribute('value','important');
    important.textContent = 'important';
    const notImportant = document.createElement('option');
    notImportant.setAttribute('value','not-important');
    notImportant.textContent = 'not-important';
    const btnContainers = document.createElement('div');
    const submitBtn = document.createElement('input');
    submitBtn.setAttribute('type','submit');
    submitBtn.setAttribute('id','submit-task-btn');
    submitBtn.textContent = 'Submit';
    submitBtn.addEventListener('click',(event) => {
        event.preventDefault();
        submitTaskForm(name);
    });
    const cancelBtn = document.createElement('button');
    cancelBtn.setAttribute('id','cancel-task-btn');
    cancelBtn.textContent = 'cancel';
    cancelBtn.addEventListener('click',() => headerDisplay(name));
    form.appendChild(task);
    form.appendChild(description);
    form.appendChild(date);
    form.appendChild(priorityList);
    priorityList.appendChild(urgent);
    priorityList.appendChild(important);
    priorityList.appendChild(notImportant);
    form.appendChild(btnContainers);
    btnContainers.appendChild(submitBtn);
    btnContainers.appendChild(cancelBtn);
};

function submitTaskForm(name) {
    const task = document.getElementById('get-task-name');
    const description = document.getElementById('get-description');
    const date = document.getElementById('get-date');
    const priorityList = document.getElementById('get-priority-list');
    const index = _logic__WEBPACK_IMPORTED_MODULE_1__.allProjects.findIndex(p => p.projectDetails.projectName === name);
    _logic__WEBPACK_IMPORTED_MODULE_1__.allProjects[index].addTask(task.value,description.value,date.value,priorityList.value);
    project.viewProjects();
    headerDisplay(name);
    addTaskDOM(task.value, description.value, date.value, priorityList.value);
    const addTaskBtn = document.querySelector('.container-task-btn');
    addTaskBtn.remove();
    makeAddTaskBtn();
};

function addTaskDOM(task, description, date, priority) {
    const form = document.querySelector('.todo-list');
    const container = document.createElement('div');
    container.setAttribute('id','task-container');
    container.setAttribute('data-name', task);
    const bg = document.createElement('div');
    bg.setAttribute('id','task-background');
    const checkList = document.createElement('input');
    checkList.setAttribute('type','checkbox');
    const taskDisplay = document.createElement('label');
    taskDisplay.setAttribute('class',task);
    const h3 = document.createElement('h3');
    h3.setAttribute('id','task-name');
    h3.textContent = task;
    const descDisplay = document.createElement('div');
    descDisplay.setAttribute('id','description');
    descDisplay.textContent = description;
    const dateDisplay = document.createElement('div');
    dateDisplay.setAttribute('id','date-display');
    dateDisplay.textContent = date;
    const taskBtns = document.createElement('div');
    taskBtns.classList.add('taskBtns');
    const deleteBtn = document.createElement('button');
    const deleteIcon = document.createElement('img');
    deleteIcon.setAttribute('src','/src/icons/bi_trash-fill.svg');
    deleteBtn.addEventListener('click', (e) => {
        e.preventDefault();
        deleteTask(task);
    });
    const editTaskBtn = document.createElement('button');
    const editIcon = document.createElement('img');
    editIcon.setAttribute('src','/src/icons/tabler_edit.svg');
    editTaskBtn.addEventListener('click',(e) => {
        e.preventDefault();
        editTask(task);
    });
    form.appendChild(container);
    container.appendChild(bg);
    bg.appendChild(checkList);
    bg.appendChild(taskDisplay);
    bg.appendChild(dateDisplay);
    bg.appendChild(taskBtns);
    taskBtns.appendChild(deleteBtn);
    deleteBtn.appendChild(deleteIcon);
    taskBtns.appendChild(editTaskBtn);
    editTaskBtn.appendChild(editIcon);
    taskDisplay.appendChild(h3);
    taskDisplay.appendChild(descDisplay);
};

function editTask(nameOfTask) {
    const name = document.querySelector('.project-title').textContent;
    const projectIndex = _logic__WEBPACK_IMPORTED_MODULE_1__.allProjects.findIndex(p => p.projectDetails.projectName === name);
    const taskIndex = _logic__WEBPACK_IMPORTED_MODULE_1__.allProjects[projectIndex].projectDetails.allTasks.findIndex(p => p.taskName === nameOfTask);
    taskForm(name);
    const task = document.getElementById('get-task-name');
    const description = document.getElementById('get-description');
    const date = document.getElementById('get-date');
    const priorityList = document.getElementById('get-priority-list'); 
    task.value = _logic__WEBPACK_IMPORTED_MODULE_1__.allProjects[projectIndex].projectDetails.allTasks[taskIndex].taskName;
    description.value = _logic__WEBPACK_IMPORTED_MODULE_1__.allProjects[projectIndex].projectDetails.allTasks[taskIndex].description;
    date.value = _logic__WEBPACK_IMPORTED_MODULE_1__.allProjects[projectIndex].projectDetails.allTasks[taskIndex].dueDate;
    priorityList.value = _logic__WEBPACK_IMPORTED_MODULE_1__.allProjects[projectIndex].projectDetails.allTasks[taskIndex].priorityList;
    const submitTaskBtn = document.getElementById('submit-task-btn'); 
    const saveTaskBtn = document.createElement('button');
    saveTaskBtn.setAttribute('id','save-task-btn');
    saveTaskBtn.textContent = 'SAVE';
    saveTaskBtn.addEventListener('click',(e) => {
        e.preventDefault();
        submitEditTask(projectIndex, taskIndex, task, description, date, priorityList);
    });
    submitTaskBtn.replaceWith(saveTaskBtn);
};

function submitEditTask(index, index2, newTask, newDescription, newDate, newPriorityList) {
    const currentTaskName = _logic__WEBPACK_IMPORTED_MODULE_1__.allProjects[index].projectDetails.allTasks[index2].taskName;
    const dataAttribute = document.querySelector(`[data-name='${currentTaskName}']`);
    dataAttribute.remove();
    addTaskDOM(newTask.value, newDescription.value, newDate.value, newPriorityList.value);
    _logic__WEBPACK_IMPORTED_MODULE_1__.allProjects[index].projectDetails.allTasks[index2].taskName = newTask.value;
    _logic__WEBPACK_IMPORTED_MODULE_1__.allProjects[index].projectDetails.allTasks[index2].description = newDescription.value;
    _logic__WEBPACK_IMPORTED_MODULE_1__.allProjects[index].projectDetails.allTasks[index2].dueDate = newDate.value;
    _logic__WEBPACK_IMPORTED_MODULE_1__.allProjects[index].projectDetails.allTasks[index2].priorityList = newPriorityList.value;
    const taskForm = document.querySelector('.task-form');
    taskForm.remove();
    project.viewProjects();
    const addTaskBtn = document.querySelector('.container-task-btn');
    addTaskBtn.remove();
    makeAddTaskBtn();
};

function deleteTask(nameOfTask) {
    const name = document.querySelector('.project-title').textContent;
    const projectIndex = _logic__WEBPACK_IMPORTED_MODULE_1__.allProjects.findIndex(p => p.projectDetails.projectName === name);
    const taskIndex = _logic__WEBPACK_IMPORTED_MODULE_1__.allProjects[projectIndex].projectDetails.allTasks.findIndex(p => p.taskName === nameOfTask);
    const currentTaskName = _logic__WEBPACK_IMPORTED_MODULE_1__.allProjects[projectIndex].projectDetails.allTasks[taskIndex].taskName;
    const dataAttribute = document.querySelector(`[data-name='${currentTaskName}']`);
    dataAttribute.remove();
    _logic__WEBPACK_IMPORTED_MODULE_1__.allProjects[projectIndex].deleteTask(taskIndex);
    project.viewProjects();
};

function changeName(name) {
    const header = document.querySelector('.header');
    const changeNameContainer = document.createElement('div');
    changeNameContainer.classList.add('change-name-container');
    header.appendChild(changeNameContainer);
    const newProjectTitle = document.createElement('input');
    newProjectTitle.setAttribute('id','new-project-title');
    newProjectTitle.setAttribute('type', 'text');
    newProjectTitle.setAttribute('value', name);
    header.replaceChild(newProjectTitle, header.firstElementChild);
    changeNameContainer.appendChild(newProjectTitle);
    const btnContainers = document.createElement('div');
    btnContainers.classList.add('btn-containers');
    const saveBtn = document.createElement('button');
    saveBtn.addEventListener('click', () => saveName(name))
    saveBtn.setAttribute('id','save-btn');
    saveBtn.textContent = 'SAVE';
    changeNameContainer.appendChild(btnContainers);
    btnContainers.appendChild(saveBtn);
    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'CANCEL';
    cancelBtn.setAttribute('id','cancel-btn');
    cancelBtn.addEventListener('click', () => headerDisplay(name))
    btnContainers.appendChild(cancelBtn);
};

function saveName(name) {
    const newProjectTitle = document.getElementById('new-project-title'); 
    const index = _logic__WEBPACK_IMPORTED_MODULE_1__.allProjects.findIndex(p => p.projectDetails.projectName === name);
    project.editProjectName(index, newProjectTitle.value);
    project.viewProjects();
    const ChangeNamebtn = document.getElementById(`${name}-btn`);
    ChangeNamebtn.removeAttribute('id');
    ChangeNamebtn.setAttribute('id',`${newProjectTitle.value}-btn`);
    ChangeNamebtn.textContent = newProjectTitle.value;
    ChangeNamebtn.addEventListener('click',() => headerDisplay(newProjectTitle.value));
    headerDisplay(newProjectTitle.value);
};

function deleteProject() {
    const projectTitle = document.querySelector('.project-title');
    const index = _logic__WEBPACK_IMPORTED_MODULE_1__.allProjects.findIndex(p => p.projectDetails.projectName === projectTitle.textContent);
    project.deleteProject(index);
    project.viewProjects();
    const projectTitleBtn = document.getElementById(`${projectTitle.textContent}-btn`);
    projectTitleBtn.remove();
    const header = document.querySelector('.header');
    header.textContent = '';
    const todoList = document.querySelector('.todo-list');
    todoList.textContent = '';
};





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztBQU1BLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxZQUFZLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE9BQU8sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sUUFBUSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxPQUFPLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSw2QkFBNkIsZ0JBQWdCLGlCQUFpQixHQUFHLGVBQWUsNEJBQTRCLDBCQUEwQixnQ0FBZ0MsdUJBQXVCLDBCQUEwQixzQkFBc0IsMkJBQTJCLHVCQUF1QixHQUFHLHFCQUFxQix5QkFBeUIsR0FBRyxXQUFXLDBCQUEwQiwwQkFBMEIsR0FBRyxVQUFVLG9CQUFvQix1Q0FBdUMsb0NBQW9DLG9CQUFvQixtQkFBbUIsR0FBRywwQkFBMEIsb0JBQW9CLHVDQUF1QyxtQkFBbUIsR0FBRyxXQUFXLGdDQUFnQyxHQUFHLHdCQUF3QixvQkFBb0IsMkJBQTJCLHVCQUF1QixHQUFHLG1CQUFtQixvQkFBb0IsNkJBQTZCLEdBQUcsYUFBYSxrQkFBa0IsNEJBQTRCLHdCQUF3Qix1QkFBdUIsR0FBRyx3Q0FBd0Msb0JBQW9CLEdBQUcsVUFBVSxvQkFBb0IscUNBQXFDLElBQUkscUJBQXFCLG9CQUFvQiw2QkFBNkIsR0FBRyxlQUFlLG9CQUFvQiw2QkFBNkIsR0FBRyw0QkFBNEIsb0JBQW9CLHFDQUFxQyxHQUFHLG1EQUFtRCxvQkFBb0IsdUNBQXVDLHNCQUFzQiwwQkFBMEIsNkJBQTZCLDZCQUE2Qiw4QkFBOEIsNEJBQTRCLDBCQUEwQixxQkFBcUIsMEJBQTBCLEdBQUcseUZBQXlGLDBCQUEwQixtQkFBbUIsbUJBQW1CLEdBQUcsZUFBZSx1QkFBdUIsR0FBRyxvQ0FBb0MseUJBQXlCLHlCQUF5QixHQUFHLDhCQUE4QiwyQ0FBMkMsdUJBQXVCLEdBQUcsbUJBQW1CLHNCQUFzQiw2QkFBNkIsNEJBQTRCLDhCQUE4Qix1QkFBdUIsMEJBQTBCLHFCQUFxQix5QkFBeUIsR0FBRyxvQkFBb0IsOEJBQThCLHlCQUF5QixHQUFHLG9CQUFvQiw0QkFBNEIsR0FBRyxtQkFBbUIsb0JBQW9CLDZCQUE2QixpQkFBaUIsaUJBQWlCLGtCQUFrQix5QkFBeUIsd0JBQXdCLEdBQUcsNEJBQTRCLHFCQUFxQix3QkFBd0IsOEJBQThCLDRCQUE0QiwwQkFBMEIscUJBQXFCLDBCQUEwQixHQUFHLG9CQUFvQix3QkFBd0IsR0FBRyxvQkFBb0Isd0JBQXdCLHlCQUF5QixHQUFHLDBCQUEwQixvQkFBb0Isd0NBQXdDLG1CQUFtQixHQUFHLHdCQUF3QiwwQkFBMEIsMEJBQTBCLDRCQUE0Qix3QkFBd0IsR0FBRyxzQkFBc0IsZ0NBQWdDLHlCQUF5QixHQUFHLHlCQUF5Qix1QkFBdUIseUJBQXlCLGtCQUFrQixxQkFBcUIsd0JBQXdCLDZCQUE2QixnQ0FBZ0MsMEJBQTBCLG1CQUFtQix5QkFBeUIsR0FBRywrQkFBK0IsMEJBQTBCLDRCQUE0Qiw4QkFBOEIscUJBQXFCLEdBQUcsb0JBQW9CLHdCQUF3QiwyQkFBMkIsd0JBQXdCLDBCQUEwQixtQkFBbUIsMkJBQTJCLEdBQUcsbUJBQW1CLG9CQUFvQix1Q0FBdUMsaUJBQWlCLDJDQUEyQyxzQkFBc0IsMEJBQTBCLGdDQUFnQyxtQkFBbUIsd0JBQXdCLHlCQUF5Qix5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3Qix5QkFBeUIsR0FBRyx5QkFBeUIseUJBQXlCLDJCQUEyQixHQUFHLHlCQUF5QixnQ0FBZ0MsR0FBRyw0QkFBNEIsMEJBQTBCLEdBQUcsd0JBQXdCLHFCQUFxQixtQkFBbUIsd0JBQXdCLDZCQUE2QixnQ0FBZ0MsbUJBQW1CLHlCQUF5QiwyQkFBMkIsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcsNkJBQTZCLDJDQUEyQyx3QkFBd0IsbUJBQW1CLDBCQUEwQiwwQkFBMEIsR0FBRyxlQUFlLDJCQUEyQixnQ0FBZ0MseUJBQXlCLEdBQUcsaUJBQWlCLGdDQUFnQyx5QkFBeUIsR0FBRyx5Q0FBeUMsMEJBQTBCLDBCQUEwQixHQUFHLGdCQUFnQixvQkFBb0IsNkJBQTZCLG9CQUFvQixxQ0FBcUMseUJBQXlCLGdCQUFnQixpQkFBaUIsb0JBQW9CLGlCQUFpQix3QkFBd0IsaUJBQWlCLEdBQUcsOENBQThDLGdDQUFnQyxtQkFBbUIsbUJBQW1CLHlCQUF5QiwyQkFBMkIsR0FBRyxjQUFjLGdDQUFnQywyQkFBMkIsR0FBRywwREFBMEQsMkNBQTJDLDBCQUEwQixHQUFHLG1EQUFtRCxnQ0FBZ0MsR0FBRyw0QkFBNEIsZ0NBQWdDLG1CQUFtQiw2QkFBNkIsMEJBQTBCLEdBQUcsdUNBQXVDLGdDQUFnQyxtQkFBbUIsNkJBQTZCLDBCQUEwQixHQUFHLHNCQUFzQix3QkFBd0IscUJBQXFCLDhCQUE4QiwwQkFBMEIsNEJBQTRCLDRCQUE0QixHQUFHLHFCQUFxQixpQkFBaUIsR0FBRyxzQkFBc0IsOEJBQThCLGlCQUFpQixtQkFBbUIsMEJBQTBCLG9CQUFvQixrREFBa0QsOEJBQThCLDBCQUEwQixHQUFHLGlEQUFpRCx5QkFBeUIsMkJBQTJCLHVCQUF1Qiw2QkFBNkIsZ0JBQWdCLG9CQUFvQiw0QkFBNEIsb0JBQW9CLHFCQUFxQix3Q0FBd0MsNEJBQTRCLHNDQUFzQyxvQkFBb0IsZ0NBQWdDLHlCQUF5QixrQ0FBa0MsR0FBRyx5REFBeUQsb0JBQW9CLG9CQUFvQixxQkFBcUIsa0NBQWtDLDBCQUEwQiw4Q0FBOEMsR0FBRyxpRUFBaUUsMEJBQTBCLEdBQUcsZ0JBQWdCLG9CQUFvQixnQ0FBZ0MsbUJBQW1CLGdCQUFnQix1QkFBdUIsR0FBRyxlQUFlLG9CQUFvQiw2QkFBNkIsMkJBQTJCLHlCQUF5Qiw2QkFBNkIsZUFBZSxHQUFHLHdCQUF3Qiw4QkFBOEIseUJBQXlCLEdBQUcsOEJBQThCLDZCQUE2QixJQUFJLCtCQUErQjtBQUNsd1c7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUM1YjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNiQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFdUM7Ozs7Ozs7O1VDN0V2QztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FvQjtBQUNxQzs7QUFFekQ7O0FBRUEsK0NBQVc7QUFDWCxnQkFBZ0IseURBQWlCOztBQUVqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsWUFBWTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsK0NBQVc7QUFDcEMsSUFBSSwrQ0FBVztBQUNmO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsK0NBQVc7QUFDN0IsSUFBSSwrQ0FBVztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLCtDQUFXO0FBQ3BDLHNCQUFzQiwrQ0FBVztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLCtDQUFXO0FBQzVCLHdCQUF3QiwrQ0FBVztBQUNuQyxpQkFBaUIsK0NBQVc7QUFDNUIseUJBQXlCLCtDQUFXO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsK0NBQVc7QUFDdkMsZ0VBQWdFLGdCQUFnQjtBQUNoRjtBQUNBO0FBQ0EsSUFBSSwrQ0FBVztBQUNmLElBQUksK0NBQVc7QUFDZixJQUFJLCtDQUFXO0FBQ2YsSUFBSSwrQ0FBVztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsK0NBQVc7QUFDcEMsc0JBQXNCLCtDQUFXO0FBQ2pDLDRCQUE0QiwrQ0FBVztBQUN2QyxnRUFBZ0UsZ0JBQWdCO0FBQ2hGO0FBQ0EsSUFBSSwrQ0FBVztBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQiwrQ0FBVztBQUM3QjtBQUNBO0FBQ0EscURBQXFELEtBQUs7QUFDMUQ7QUFDQSx1Q0FBdUMsc0JBQXNCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsK0NBQVc7QUFDN0I7QUFDQTtBQUNBLHVEQUF1RCx5QkFBeUI7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4jaGVhZGxpbmUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MkMxQjI7XG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4jdG9kby1saXN0LWljb24ge1xuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbn1cblxuI3RleHQge1xuICAgIHBhZGRpbmctdG9wOiAxLjRyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAyM3JlbTtcbn1cblxuYm9keSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuNWZyIDRmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNmZyIDRmcjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbn1cblxuLnRvZG8tbGlzdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjNmciA0ZnI7XG4gICAgd2lkdGg6IDEwMHZ3O1xufVxuXG4ubWFpbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JkZDZkNjtcbn1cblxuLnRpdGxlLWFkZC1wcm9qZWN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG91dGxpbmUtc3R5bGU6IHNvbGlkO1xuICAgIGNvbG9yOiB0dXJxdW9pc2U7XG59XG5cbi5hbGwtcHJvamVjdHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5uZXdQcm9qZWN0VGl0bGUsXG4uYnRuLWNvbnRhaW5lcnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbmJvZHkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xufTtcblxuLnRhc2stY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zaWRlLWJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucHJvamVjdC1idG4tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjtcbn1cblxuLnRvZGF5LFxuLnVwY29taW5nLFxuLnNob3ctcHJvamVjdHMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC43ZnIgM2ZyO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBwYWRkaW5nLXRvcDogMC44cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjhyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuM3JlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItY29sb3I6ICM5MkMxQjI7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBjb2xvcjogIzkyQzFCMjtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4udG9kYXk6aG92ZXIsXG4udXBjb21pbmc6aG92ZXIsXG4jcHJvamVjdHMtYnRuOmhvdmVyLFxuLmFsbC1wcm9qZWN0cyA+IGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzZlYjQ5ZjtcbiAgICBvcGFjaXR5OiA1MCU7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4udXBjb21pbmcge1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG59XG5cbi50b2RheSA+IGRpdixcbi51cGNvbWluZyA+IGRpdiB7XG4gICAganVzdGlmeS1zZWxmOiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbn1cblxuLnNob3ctcHJvamVjdHMtY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxLjlmciAxZnI7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbn1cblxuI3Byb2plY3RzLWJ0biB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjNyZW07XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBjb2xvcjogIzkyQzFCMjtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbi5kcm9wLWRvd24tYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbiNwcm9qZWN0cy1pY29uIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjlyZW07XG59XG5cbi5hbGwtcHJvamVjdHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDAuOXB4O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiA0MCU7XG4gICAgcGFkZGluZy1sZWZ0OiA4cmVtO1xuICAgIHBhZGRpbmctdG9wOiAycmVtO1xufVxuXG4uYWxsLXByb2plY3RzID4gYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDIuN3JlbTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItY29sb3I6ICM5MkMxQjI7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBjb2xvcjogIzkyQzFCMjtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4uc2lkZWJhci1pY29ucyB7XG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XG59XG5cbi5pbnB1dC1wcm9qZWN0IHtcbiAgICBwYWRkaW5nLXRvcDogNHJlbTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5pbnB1dC1wcm9qZWN0ID4gZGl2IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTBmciAxLjVmcjtcbiAgICBoZWlnaHQ6IDNyZW07XG59XG5cbiNnZXQtcHJvamVjdC10aXRsZSB7XG4gICAgYmFja2dyb3VuZDogI0VGRUZFRjtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogIzkyQzFCMjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmFkZC1wcm9qZWN0LWJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkyQzFCMjtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbi5kZWxldGUtcHJvamVjdC1idG4ge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMi41cmVtO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjJyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkyQzFCMjtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbi5kZWxldGUtcHJvamVjdC1idG46aG92ZXIge1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjNmViNDlmO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiAjNmViNDlmO1xufVxuXG4ucHJvamVjdC10aXRsZSB7XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDNyZW07XG4gICAgZm9udC1zaXplOiAzLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XG59XG5cbi5hZGQtdGFzay1idG4ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMy41ZnI7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBwYWRkaW5nOiAxLjJyZW0gMS4zcmVtIDEuMnJlbSAxLjNyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZlYjQ5ZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHZ3O1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogM3JlbTtcbn1cblxuLmFkZC10YXNrLWJ0biA+IGRpdiB7XG4gICAgYWxpZ24tc2VsZjpjZW50ZXI7XG4gICAganVzdGlmeS1zZWxmOiBsZWZ0O1xufVxuXG4uYWRkLXRhc2stYnRuID4gaW1nIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cbi5hZGQtdGFzay1idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OEM0QUQ7XG59XG5cbi5jaGFuZ2UtbmFtZS1jb250YWluZXIge1xuICAgIHBhZGRpbmctdG9wOiAyLjVyZW07XG59XG5cbiNuZXctcHJvamVjdC10aXRsZSB7XG4gICAgaGVpZ2h0OiAzLjVyZW07XG4gICAgd2lkdGg6IDI0cmVtO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZlYjQ5ZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMnZ3O1xufVxuXG4uYnRuLWNvbnRhaW5lcnMge1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xufVxuXG4jc2F2ZS1idG4sXG4jY2FuY2VsLWJ0biB7XG4gICAgcGFkZGluZzogMC41cmVtIDAuN3JlbSAwLjVyZW0gMC43cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6MC41dnc7XG59XG5cbiNzYXZlLWJ0biB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhFRDBERTtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbiNjYW5jZWwtYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTJDMUIyO1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuI3NhdmUtYnRuOmhvdmVyLFxuI2NhbmNlbC1idG46aG92ZXIge1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnRhc2stZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDNyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDdyZW07XG4gICAgbGVmdDogNHJlbTtcbiAgICBoZWlnaHQ6IDEzcmVtO1xuICAgIHdpZHRoOiA0NSU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgei1pbmRleDogMTtcbn1cblxuLnRhc2stZm9ybSA+IGlucHV0LFxuLnRhc2stZm9ybSA+IHNlbGVjdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZlYjQ5ZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjN2dztcbn1cblxudGV4dGFyZWEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZWI0OWY7XG4gICAgYm9yZGVyLXJhZGl1czogMC4zdnc7XG59XG5cbiNjYW5jZWwtdGFzay1idG4sXG4jc3VibWl0LXRhc2stYnRuLFxuI3NhdmUtdGFzay1idG4ge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjdyZW0gMC41cmVtIDAuN3JlbTtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4jc3VibWl0LXRhc2stYnRuOmhvdmVyLFxuI3NhdmUtdGFzay1idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NUQ3QkE7XG59XG5cbiNjYW5jZWwtdGFzay1idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZWI0OWY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuM3Z3OyAgXG4gICAgYm9yZGVyLXN0eWxlOiBub25lOyBcbn1cblxuI3N1Ym1pdC10YXNrLWJ0bixcbiNzYXZlLXRhc2stYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmViNDlmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjN2dzsgIFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTsgXG59XG5cbiNjYW5jZWwtdGFzay1idG4ge1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgIGNvbG9yOiAjNmViNDlmO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjNmViNDlmO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuM3Z3OyBcbn1cblxuI3Rhc2stY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDklO1xufVxuXG4jdGFzay1iYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMy44cmVtO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjdmciA0ZnIgMWZyIDAuN2ZyIDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jdGFzay1iYWNrZ3JvdW5kID4gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250OiBpbmhlcml0O1xuICAgIGNvbG9yOiBsaWdodHNsYXRlZ3JheTtcbiAgICB3aWR0aDogMi4xNWVtO1xuICAgIGhlaWdodDogMi4xNWVtO1xuICAgIGJvcmRlcjogMC4xNWVtIHNvbGlkIGN1cnJlbnRDb2xvcjtcbiAgICBib3JkZXItcmFkaXVzOiAwLjE1ZW07XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjA3NWVtKTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjsgICAgXG4gICAgYm9yZGVyLXJhZGl1czogM3Z3O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbn1cblxuI3Rhc2stYmFja2dyb3VuZCA+IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHdpZHRoOiAwLjY1ZW07XG4gICAgaGVpZ2h0OiAwLjY1ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMyk7XG4gICAgdHJhbnNpdGlvbjogMTIwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xufVxuXG4jdGFzay1iYWNrZ3JvdW5kID4gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQ6OmJlZm9yZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLnRvZG8tbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgIFxuICAgIGhlaWdodDogMTAwJTtcbiAgICBnYXA6IDFyZW07XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnRhc2tCdG5zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG4gICAgZ2FwOiA0cHg7XG59XG5cbi50YXNrQnRucyA+IGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG4udGFza0J0bnMgPiBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG59IFxuXG5cblxuXG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJB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QUNyQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLDJDQUEyQztJQUMzQyx1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixjQUFjO0lBQ2QsaUNBQWlDO0lBQ2pDLHFCQUFxQjtJQUNyQiwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixjQUFjO0lBQ2QsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQix1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixRQUFRO0FBQ1o7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbiNoZWFkbGluZSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkyQzFCMjtcXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMTBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuI3RvZG8tbGlzdC1pY29uIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbn1cXG5cXG4jdGV4dCB7XFxuICAgIHBhZGRpbmctdG9wOiAxLjRyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMjNyZW07XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuNWZyIDRmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjZmciA0ZnI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLnRvZG8tbGlzdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuM2ZyIDRmcjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZGQ2ZDY7XFxufVxcblxcbi50aXRsZS1hZGQtcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG91dGxpbmUtc3R5bGU6IHNvbGlkO1xcbiAgICBjb2xvcjogdHVycXVvaXNlO1xcbn1cXG5cXG4uYWxsLXByb2plY3RzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubmV3UHJvamVjdFRpdGxlLFxcbi5idG4tY29udGFpbmVycyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxufTtcXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc2lkZS1iYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucHJvamVjdC1idG4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyO1xcbn1cXG5cXG4udG9kYXksXFxuLnVwY29taW5nLFxcbi5zaG93LXByb2plY3RzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC43ZnIgM2ZyO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHBhZGRpbmctdG9wOiAwLjhyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjhyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItY29sb3I6ICM5MkMxQjI7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGNvbG9yOiAjOTJDMUIyO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4udG9kYXk6aG92ZXIsXFxuLnVwY29taW5nOmhvdmVyLFxcbiNwcm9qZWN0cy1idG46aG92ZXIsXFxuLmFsbC1wcm9qZWN0cyA+IGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICM2ZWI0OWY7XFxuICAgIG9wYWNpdHk6IDUwJTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udXBjb21pbmcge1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbn1cXG5cXG4udG9kYXkgPiBkaXYsXFxuLnVwY29taW5nID4gZGl2IHtcXG4gICAganVzdGlmeS1zZWxmOiBsZWZ0O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxufVxcblxcbi5zaG93LXByb2plY3RzLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEuOWZyIDFmcjtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG59XFxuXFxuI3Byb2plY3RzLWJ0biB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuM3JlbTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgY29sb3I6ICM5MkMxQjI7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmRyb3AtZG93bi1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4jcHJvamVjdHMtaWNvbiB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEuOXJlbTtcXG59XFxuXFxuLmFsbC1wcm9qZWN0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC45cHg7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogNDAlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDhyZW07XFxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xcbn1cXG5cXG4uYWxsLXByb2plY3RzID4gYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAyLjdyZW07XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjOTJDMUIyO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBjb2xvcjogIzkyQzFCMjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLnNpZGViYXItaWNvbnMge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLmlucHV0LXByb2plY3Qge1xcbiAgICBwYWRkaW5nLXRvcDogNHJlbTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uaW5wdXQtcHJvamVjdCA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTBmciAxLjVmcjtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbn1cXG5cXG4jZ2V0LXByb2plY3QtdGl0bGUge1xcbiAgICBiYWNrZ3JvdW5kOiAjRUZFRkVGO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6ICM5MkMxQjI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkyQzFCMjtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3QtYnRuIHtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4ycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTJDMUIyO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0LWJ0bjpob3ZlciB7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogIzZlYjQ5ZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiAjNmViNDlmO1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZSB7XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcXG4gICAgZm9udC1zaXplOiAzLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XFxufVxcblxcbi5hZGQtdGFzay1idG4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzLjVmcjtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgcGFkZGluZzogMS4ycmVtIDEuM3JlbSAxLjJyZW0gMS4zcmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZWI0OWY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDR2dztcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBtYXJnaW4tbGVmdDogM3JlbTtcXG59XFxuXFxuLmFkZC10YXNrLWJ0biA+IGRpdiB7XFxuICAgIGFsaWduLXNlbGY6Y2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxufVxcblxcbi5hZGQtdGFzay1idG4gPiBpbWcge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc4QzRBRDtcXG59XFxuXFxuLmNoYW5nZS1uYW1lLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmctdG9wOiAyLjVyZW07XFxufVxcblxcbiNuZXctcHJvamVjdC10aXRsZSB7XFxuICAgIGhlaWdodDogMy41cmVtO1xcbiAgICB3aWR0aDogMjRyZW07XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmViNDlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4ydnc7XFxufVxcblxcbi5idG4tY29udGFpbmVycyB7XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbn1cXG5cXG4jc2F2ZS1idG4sXFxuI2NhbmNlbC1idG4ge1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC43cmVtIDAuNXJlbSAwLjdyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6MC41dnc7XFxufVxcblxcbiNzYXZlLWJ0biB7XFxuICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEVEMERFO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbiNjYW5jZWwtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkyQzFCMjtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4jc2F2ZS1idG46aG92ZXIsXFxuI2NhbmNlbC1idG46aG92ZXIge1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGFzay1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogM3JlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogN3JlbTtcXG4gICAgbGVmdDogNHJlbTtcXG4gICAgaGVpZ2h0OiAxM3JlbTtcXG4gICAgd2lkdGg6IDQ1JTtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi50YXNrLWZvcm0gPiBpbnB1dCxcXG4udGFzay1mb3JtID4gc2VsZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZlYjQ5ZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zdnc7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZlYjQ5ZjtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zdnc7XFxufVxcblxcbiNjYW5jZWwtdGFzay1idG4sXFxuI3N1Ym1pdC10YXNrLWJ0bixcXG4jc2F2ZS10YXNrLWJ0biB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjdyZW0gMC41cmVtIDAuN3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuI3N1Ym1pdC10YXNrLWJ0bjpob3ZlcixcXG4jc2F2ZS10YXNrLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NUQ3QkE7XFxufVxcblxcbiNjYW5jZWwtdGFzay1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmViNDlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3Z3OyAgXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTsgXFxufVxcblxcbiNzdWJtaXQtdGFzay1idG4sXFxuI3NhdmUtdGFzay1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmViNDlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3Z3OyAgXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTsgXFxufVxcblxcbiNjYW5jZWwtdGFzay1idG4ge1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gICAgY29sb3I6ICM2ZWI0OWY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6ICM2ZWI0OWY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3Z3OyBcXG59XFxuXFxuI3Rhc2stY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiA5JTtcXG59XFxuXFxuI3Rhc2stYmFja2dyb3VuZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAzLjhyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC43ZnIgNGZyIDFmciAwLjdmciA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jdGFzay1iYWNrZ3JvdW5kID4gaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xcbiAgICB3aWR0aDogMi4xNWVtO1xcbiAgICBoZWlnaHQ6IDIuMTVlbTtcXG4gICAgYm9yZGVyOiAwLjE1ZW0gc29saWQgY3VycmVudENvbG9yO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjE1ZW07XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4wNzVlbSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjsgICAgXFxuICAgIGJvcmRlci1yYWRpdXM6IDN2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbn1cXG5cXG4jdGFzay1iYWNrZ3JvdW5kID4gaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHdpZHRoOiAwLjY1ZW07XFxuICAgIGhlaWdodDogMC42NWVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMyk7XFxuICAgIHRyYW5zaXRpb246IDEyMG1zIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcXG59XFxuXFxuI3Rhc2stYmFja2dyb3VuZCA+IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZDo6YmVmb3JlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLnRvZG8tbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAgXFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4udGFza0J0bnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxuLnRhc2tCdG5zID4gYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnRhc2tCdG5zID4gYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcXG59IFxcblxcblxcblxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBhbGxQcm9qZWN0cyA9IFtdO1xuXG5jb25zdCBwcm9qZWN0TWFuYWdlbWVudCA9ICgpID0+IHtcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKHRpdGxlKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBtYWtlUHJvamVjdCh0aXRsZSk7XG4gICAgICAgIGFsbFByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGVkaXRQcm9qZWN0TmFtZSA9IChpLCBuYW1lKSA9PiB7XG4gICAgICAgICBhbGxQcm9qZWN0c1tpXS5wcm9qZWN0RGV0YWlscy5wcm9qZWN0TmFtZSA9IG5hbWVcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAoaSkgPT4ge1xuICAgICAgICBhbGxQcm9qZWN0cy5zcGxpY2UoaSwxKTtcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IHZpZXdQcm9qZWN0cyA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYWxsUHJvamVjdHMpO1xuICAgIH07XG4gICAgXG4gICAgY29uc3QgbWFrZVByb2plY3QgPSAocHJvamVjdFRpdGxlKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3REZXRhaWxzID0ge1xuICAgICAgICAgICAgcHJvamVjdE5hbWU6IHByb2plY3RUaXRsZSxcbiAgICAgICAgICAgIGFsbFRhc2tzOiBbXVxuICAgICAgICB9O1xuICAgIFxuICAgICAgICBjb25zdCB0YXNrTWFuYWdlbWVudCA9IG5ldyB0YXNrT3BlcmF0aW9ucyhwcm9qZWN0RGV0YWlscyk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2sgPSB0YXNrTWFuYWdlbWVudC5hZGRUYXNrO1xuICAgICAgICBjb25zdCBkZWxldGVUYXNrID0gdGFza01hbmFnZW1lbnQuZGVsZXRlVGFzaztcbiAgICAgICAgY29uc3QgZWRpdFRhc2sgPSB0YXNrTWFuYWdlbWVudC5lZGl0VGFza3M7XG4gICAgXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcm9qZWN0RGV0YWlscyxcbiAgICAgICAgICAgIGFkZFRhc2ssXG4gICAgICAgICAgICBkZWxldGVUYXNrLFxuICAgICAgICAgICAgZWRpdFRhc2ssXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZFByb2plY3QsXG4gICAgICAgIGRlbGV0ZVByb2plY3QsXG4gICAgICAgIHZpZXdQcm9qZWN0cyxcbiAgICAgICAgZWRpdFByb2plY3ROYW1lXG4gICAgfTtcbn07XG5cbmNsYXNzIHRhc2tPcGVyYXRpb25zIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0KSAge1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIH1cblxuICAgIGFkZFRhc2sgPSAobmFtZSwgZGV0YWlscywgZGF0ZSwgcHJpb3JpdHlMaXN0LCBjaGVjaykgPT4ge1xuICAgICAgICBjb25zdCB0YXNrRGV0YWlscyA9IG5ldyB0YXNrKG5hbWUsIGRldGFpbHMsIGRhdGUsIHByaW9yaXR5TGlzdCwgY2hlY2spO1xuXG4gICAgICAgIHRoaXMucHJvamVjdC5hbGxUYXNrcy5wdXNoKHRhc2tEZXRhaWxzKTtcbiAgICB9XG5cbiAgICBkZWxldGVUYXNrKGkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdERldGFpbHMuYWxsVGFza3Muc3BsaWNlKGksMSlcbiAgICB9O1xufTtcblxuY2xhc3MgdGFzayB7XG4gICAgY29uc3RydWN0b3IodGFza05hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eUxpc3QsIGNoZWNrQm94KSB7XG4gICAgICAgIHRoaXMudGFza05hbWUgPSB0YXNrTmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5TGlzdCA9IHByaW9yaXR5TGlzdDtcbiAgICAgICAgdGhpcy5jaGVja0JveCA9IGNoZWNrQm94O1xuICAgIH07XG5cbiAgICBzZXQoKSB7XG4gICAgICAgIFt0aGlzLnRhc2tOYW1lLCB0aGlzLmRlc2NyaXB0aW9uLCB0aGlzLmR1ZURhdGUsIHRoaXMucHJpb3JpdHlMaXN0XSA9IHZhbHVlLnNwbGl0KFwiIFwiKTtcbiAgICB9O1xufTtcblxuZXhwb3J0IHtwcm9qZWN0TWFuYWdlbWVudCwgYWxsUHJvamVjdHN9XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCJcbmltcG9ydCB7IHByb2plY3RNYW5hZ2VtZW50LCBhbGxQcm9qZWN0cyB9IGZyb20gXCIuL2xvZ2ljXCI7XG5cbi8vRE9NXG5cbmFsbFByb2plY3RzXG5jb25zdCBwcm9qZWN0ID0gcHJvamVjdE1hbmFnZW1lbnQoKTtcblxuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1idG4nKTtcbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBhZGRQcm9qZWN0KCkpO1xuY29uc3QgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUtcHJvamVjdC1idG4nKTtcbmRlbGV0ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGRlbGV0ZVByb2plY3QpO1xuXG5mdW5jdGlvbiBhZGRQcm9qZWN0KCkge1xuICAgIGNvbnN0IGdldFByb2plY3RUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZXQtcHJvamVjdC10aXRsZScpO1xuICAgIHByb2plY3ROYW1lRGlzcGxheShnZXRQcm9qZWN0VGl0bGUudmFsdWUpO1xuICAgIGdldFByb2plY3RUaXRsZS52YWx1ZSA9ICcnO1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0TmFtZURpc3BsYXkocHJvamVjdE5hbWUpIHtcbiAgICBwcm9qZWN0LmFkZFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgIHByb2plY3Qudmlld1Byb2plY3RzKCk7XG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLXByb2plY3RzJyk7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuLnNldEF0dHJpYnV0ZSgnaWQnLGAke3Byb2plY3ROYW1lfS1idG5gKTtcbiAgICBidG4udGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICAgICAgaGVhZGVyRGlzcGxheShidG4udGV4dENvbnRlbnQpO1xuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGl0bGUnKS50ZXh0Q29udGVudDtcbiAgICAgICAgcHJvamVjdFRhc2tEaXNwbGF5KGN1cnJlbnRQcm9qZWN0VGl0bGUpO1xuICAgIH0pXG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQoYnRuKTtcbn07XG5cbmZ1bmN0aW9uIHByb2plY3RUYXNrRGlzcGxheSgpIHtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGl0bGUnKS50ZXh0Q29udGVudDtcbiAgICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QnKTtcbiAgICB0b2RvTGlzdC50ZXh0Q29udGVudCA9ICcnO1xuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IGFsbFByb2plY3RzLmZpbmRJbmRleChwID0+IHAucHJvamVjdERldGFpbHMucHJvamVjdE5hbWUgPT09IG5hbWUpO1xuICAgIGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0ucHJvamVjdERldGFpbHMuYWxsVGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgYWRkVGFza0RPTSh0YXNrLnRhc2tOYW1lLCB0YXNrLmRlc2NyaXB0aW9uLCB0YXNrLmR1ZURhdGUsIHRhc2sucHJpb3JpdHlMaXN0KTtcbiAgICB9KTtcbiAgICBtYWtlQWRkVGFza0J0bigpO1xufVxuXG5mdW5jdGlvbiBtYWtlQWRkVGFza0J0bigpIHtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGl0bGUnKS50ZXh0Q29udGVudDtcbiAgICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QnKTtcbiAgICBjb25zdCBjb250YWluZXJUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyVGFza0J0bi5jbGFzc0xpc3QuYWRkKCdjb250YWluZXItdGFzay1idG4nKVxuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBhZGRJY29uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkSWNvbkltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsJy9zcmMvaWNvbnMvbWF0ZXJpYWwtc3ltYm9sc19hZGQuc3ZnJylcbiAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRhc2tGb3JtKG5hbWUpO1xuICAgIH0pO1xuICAgIGRpdi50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XG4gICAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzay1idG4nKTtcbiAgICBhZGRUYXNrQnRuLmFwcGVuZENoaWxkKGFkZEljb25JbWcpO1xuICAgIGFkZFRhc2tCdG4uYXBwZW5kQ2hpbGQoZGl2KVxuICAgIGNvbnRhaW5lclRhc2tCdG4uYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG4gICAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQoY29udGFpbmVyVGFza0J0bik7XG59XG5cbmZ1bmN0aW9uIGhlYWRlckRpc3BsYXkobmFtZSkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnJztcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZScpO1xuICAgIHByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgbmFtZSk7XG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICBwcm9qZWN0VGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IGNoYW5nZU5hbWUobmFtZSkpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xufTtcblxuZnVuY3Rpb24gdGFza0Zvcm0obmFtZSkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgndGFzay1mb3JtJyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRhc2suc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpO1xuICAgIHRhc2suc2V0QXR0cmlidXRlKCdpZCcsJ2dldC10YXNrLW5hbWUnKTtcbiAgICB0YXNrLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCdUYXNrIG5hbWUnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpO1xuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCdnZXQtZGVzY3JpcHRpb24nKTtcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywnRGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsJ2RhdGUnKTtcbiAgICBkYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCdnZXQtZGF0ZScpO1xuICAgIGNvbnN0IHByaW9yaXR5TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHByaW9yaXR5TGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywnZ2V0LXByaW9yaXR5LWxpc3QnKTtcbiAgICBjb25zdCB1cmdlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICB1cmdlbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsJ3VyZ2VudCcpO1xuICAgIHVyZ2VudC50ZXh0Q29udGVudCA9ICd1cmdlbnQnO1xuICAgIGNvbnN0IGltcG9ydGFudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGltcG9ydGFudC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnaW1wb3J0YW50Jyk7XG4gICAgaW1wb3J0YW50LnRleHRDb250ZW50ID0gJ2ltcG9ydGFudCc7XG4gICAgY29uc3Qgbm90SW1wb3J0YW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgbm90SW1wb3J0YW50LnNldEF0dHJpYnV0ZSgndmFsdWUnLCdub3QtaW1wb3J0YW50Jyk7XG4gICAgbm90SW1wb3J0YW50LnRleHRDb250ZW50ID0gJ25vdC1pbXBvcnRhbnQnO1xuICAgIGNvbnN0IGJ0bkNvbnRhaW5lcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdzdWJtaXQnKTtcbiAgICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCdpZCcsJ3N1Ym1pdC10YXNrLWJ0bicpO1xuICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHN1Ym1pdFRhc2tGb3JtKG5hbWUpO1xuICAgIH0pO1xuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywnY2FuY2VsLXRhc2stYnRuJyk7XG4gICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ2NhbmNlbCc7XG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiBoZWFkZXJEaXNwbGF5KG5hbWUpKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRhc2spO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUxpc3QpO1xuICAgIHByaW9yaXR5TGlzdC5hcHBlbmRDaGlsZCh1cmdlbnQpO1xuICAgIHByaW9yaXR5TGlzdC5hcHBlbmRDaGlsZChpbXBvcnRhbnQpO1xuICAgIHByaW9yaXR5TGlzdC5hcHBlbmRDaGlsZChub3RJbXBvcnRhbnQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnRuQ29udGFpbmVycyk7XG4gICAgYnRuQ29udGFpbmVycy5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuICAgIGJ0bkNvbnRhaW5lcnMuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcbn07XG5cbmZ1bmN0aW9uIHN1Ym1pdFRhc2tGb3JtKG5hbWUpIHtcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dldC10YXNrLW5hbWUnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZXQtZGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dldC1kYXRlJyk7XG4gICAgY29uc3QgcHJpb3JpdHlMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dldC1wcmlvcml0eS1saXN0Jyk7XG4gICAgY29uc3QgaW5kZXggPSBhbGxQcm9qZWN0cy5maW5kSW5kZXgocCA9PiBwLnByb2plY3REZXRhaWxzLnByb2plY3ROYW1lID09PSBuYW1lKTtcbiAgICBhbGxQcm9qZWN0c1tpbmRleF0uYWRkVGFzayh0YXNrLnZhbHVlLGRlc2NyaXB0aW9uLnZhbHVlLGRhdGUudmFsdWUscHJpb3JpdHlMaXN0LnZhbHVlKTtcbiAgICBwcm9qZWN0LnZpZXdQcm9qZWN0cygpO1xuICAgIGhlYWRlckRpc3BsYXkobmFtZSk7XG4gICAgYWRkVGFza0RPTSh0YXNrLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSwgZGF0ZS52YWx1ZSwgcHJpb3JpdHlMaXN0LnZhbHVlKTtcbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lci10YXNrLWJ0bicpO1xuICAgIGFkZFRhc2tCdG4ucmVtb3ZlKCk7XG4gICAgbWFrZUFkZFRhc2tCdG4oKTtcbn07XG5cbmZ1bmN0aW9uIGFkZFRhc2tET00odGFzaywgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5KSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QnKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsJ3Rhc2stY29udGFpbmVyJyk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgdGFzayk7XG4gICAgY29uc3QgYmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBiZy5zZXRBdHRyaWJ1dGUoJ2lkJywndGFzay1iYWNrZ3JvdW5kJyk7XG4gICAgY29uc3QgY2hlY2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjaGVja0xpc3Quc2V0QXR0cmlidXRlKCd0eXBlJywnY2hlY2tib3gnKTtcbiAgICBjb25zdCB0YXNrRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGFza0Rpc3BsYXkuc2V0QXR0cmlidXRlKCdjbGFzcycsdGFzayk7XG4gICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGgzLnNldEF0dHJpYnV0ZSgnaWQnLCd0YXNrLW5hbWUnKTtcbiAgICBoMy50ZXh0Q29udGVudCA9IHRhc2s7XG4gICAgY29uc3QgZGVzY0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjRGlzcGxheS5zZXRBdHRyaWJ1dGUoJ2lkJywnZGVzY3JpcHRpb24nKTtcbiAgICBkZXNjRGlzcGxheS50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuICAgIGNvbnN0IGRhdGVEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGF0ZURpc3BsYXkuc2V0QXR0cmlidXRlKCdpZCcsJ2RhdGUtZGlzcGxheScpO1xuICAgIGRhdGVEaXNwbGF5LnRleHRDb250ZW50ID0gZGF0ZTtcbiAgICBjb25zdCB0YXNrQnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tCdG5zLmNsYXNzTGlzdC5hZGQoJ3Rhc2tCdG5zJyk7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGRlbGV0ZUljb24uc2V0QXR0cmlidXRlKCdzcmMnLCcvc3JjL2ljb25zL2JpX3RyYXNoLWZpbGwuc3ZnJyk7XG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBkZWxldGVUYXNrKHRhc2spO1xuICAgIH0pO1xuICAgIGNvbnN0IGVkaXRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgZWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBlZGl0SWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsJy9zcmMvaWNvbnMvdGFibGVyX2VkaXQuc3ZnJyk7XG4gICAgZWRpdFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZWRpdFRhc2sodGFzayk7XG4gICAgfSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChiZyk7XG4gICAgYmcuYXBwZW5kQ2hpbGQoY2hlY2tMaXN0KTtcbiAgICBiZy5hcHBlbmRDaGlsZCh0YXNrRGlzcGxheSk7XG4gICAgYmcuYXBwZW5kQ2hpbGQoZGF0ZURpc3BsYXkpO1xuICAgIGJnLmFwcGVuZENoaWxkKHRhc2tCdG5zKTtcbiAgICB0YXNrQnRucy5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICAgIGRlbGV0ZUJ0bi5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcbiAgICB0YXNrQnRucy5hcHBlbmRDaGlsZChlZGl0VGFza0J0bik7XG4gICAgZWRpdFRhc2tCdG4uYXBwZW5kQ2hpbGQoZWRpdEljb24pO1xuICAgIHRhc2tEaXNwbGF5LmFwcGVuZENoaWxkKGgzKTtcbiAgICB0YXNrRGlzcGxheS5hcHBlbmRDaGlsZChkZXNjRGlzcGxheSk7XG59O1xuXG5mdW5jdGlvbiBlZGl0VGFzayhuYW1lT2ZUYXNrKSB7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRpdGxlJykudGV4dENvbnRlbnQ7XG4gICAgY29uc3QgcHJvamVjdEluZGV4ID0gYWxsUHJvamVjdHMuZmluZEluZGV4KHAgPT4gcC5wcm9qZWN0RGV0YWlscy5wcm9qZWN0TmFtZSA9PT0gbmFtZSk7XG4gICAgY29uc3QgdGFza0luZGV4ID0gYWxsUHJvamVjdHNbcHJvamVjdEluZGV4XS5wcm9qZWN0RGV0YWlscy5hbGxUYXNrcy5maW5kSW5kZXgocCA9PiBwLnRhc2tOYW1lID09PSBuYW1lT2ZUYXNrKTtcbiAgICB0YXNrRm9ybShuYW1lKTtcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dldC10YXNrLW5hbWUnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZXQtZGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dldC1kYXRlJyk7XG4gICAgY29uc3QgcHJpb3JpdHlMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dldC1wcmlvcml0eS1saXN0Jyk7IFxuICAgIHRhc2sudmFsdWUgPSBhbGxQcm9qZWN0c1twcm9qZWN0SW5kZXhdLnByb2plY3REZXRhaWxzLmFsbFRhc2tzW3Rhc2tJbmRleF0udGFza05hbWU7XG4gICAgZGVzY3JpcHRpb24udmFsdWUgPSBhbGxQcm9qZWN0c1twcm9qZWN0SW5kZXhdLnByb2plY3REZXRhaWxzLmFsbFRhc2tzW3Rhc2tJbmRleF0uZGVzY3JpcHRpb247XG4gICAgZGF0ZS52YWx1ZSA9IGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0ucHJvamVjdERldGFpbHMuYWxsVGFza3NbdGFza0luZGV4XS5kdWVEYXRlO1xuICAgIHByaW9yaXR5TGlzdC52YWx1ZSA9IGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0ucHJvamVjdERldGFpbHMuYWxsVGFza3NbdGFza0luZGV4XS5wcmlvcml0eUxpc3Q7XG4gICAgY29uc3Qgc3VibWl0VGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQtdGFzay1idG4nKTsgXG4gICAgY29uc3Qgc2F2ZVRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzYXZlVGFza0J0bi5zZXRBdHRyaWJ1dGUoJ2lkJywnc2F2ZS10YXNrLWJ0bicpO1xuICAgIHNhdmVUYXNrQnRuLnRleHRDb250ZW50ID0gJ1NBVkUnO1xuICAgIHNhdmVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHN1Ym1pdEVkaXRUYXNrKHByb2plY3RJbmRleCwgdGFza0luZGV4LCB0YXNrLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHlMaXN0KTtcbiAgICB9KTtcbiAgICBzdWJtaXRUYXNrQnRuLnJlcGxhY2VXaXRoKHNhdmVUYXNrQnRuKTtcbn07XG5cbmZ1bmN0aW9uIHN1Ym1pdEVkaXRUYXNrKGluZGV4LCBpbmRleDIsIG5ld1Rhc2ssIG5ld0Rlc2NyaXB0aW9uLCBuZXdEYXRlLCBuZXdQcmlvcml0eUxpc3QpIHtcbiAgICBjb25zdCBjdXJyZW50VGFza05hbWUgPSBhbGxQcm9qZWN0c1tpbmRleF0ucHJvamVjdERldGFpbHMuYWxsVGFza3NbaW5kZXgyXS50YXNrTmFtZTtcbiAgICBjb25zdCBkYXRhQXR0cmlidXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtbmFtZT0nJHtjdXJyZW50VGFza05hbWV9J11gKTtcbiAgICBkYXRhQXR0cmlidXRlLnJlbW92ZSgpO1xuICAgIGFkZFRhc2tET00obmV3VGFzay52YWx1ZSwgbmV3RGVzY3JpcHRpb24udmFsdWUsIG5ld0RhdGUudmFsdWUsIG5ld1ByaW9yaXR5TGlzdC52YWx1ZSk7XG4gICAgYWxsUHJvamVjdHNbaW5kZXhdLnByb2plY3REZXRhaWxzLmFsbFRhc2tzW2luZGV4Ml0udGFza05hbWUgPSBuZXdUYXNrLnZhbHVlO1xuICAgIGFsbFByb2plY3RzW2luZGV4XS5wcm9qZWN0RGV0YWlscy5hbGxUYXNrc1tpbmRleDJdLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb24udmFsdWU7XG4gICAgYWxsUHJvamVjdHNbaW5kZXhdLnByb2plY3REZXRhaWxzLmFsbFRhc2tzW2luZGV4Ml0uZHVlRGF0ZSA9IG5ld0RhdGUudmFsdWU7XG4gICAgYWxsUHJvamVjdHNbaW5kZXhdLnByb2plY3REZXRhaWxzLmFsbFRhc2tzW2luZGV4Ml0ucHJpb3JpdHlMaXN0ID0gbmV3UHJpb3JpdHlMaXN0LnZhbHVlO1xuICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZm9ybScpO1xuICAgIHRhc2tGb3JtLnJlbW92ZSgpO1xuICAgIHByb2plY3Qudmlld1Byb2plY3RzKCk7XG4gICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXItdGFzay1idG4nKTtcbiAgICBhZGRUYXNrQnRuLnJlbW92ZSgpO1xuICAgIG1ha2VBZGRUYXNrQnRuKCk7XG59O1xuXG5mdW5jdGlvbiBkZWxldGVUYXNrKG5hbWVPZlRhc2spIHtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGl0bGUnKS50ZXh0Q29udGVudDtcbiAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBhbGxQcm9qZWN0cy5maW5kSW5kZXgocCA9PiBwLnByb2plY3REZXRhaWxzLnByb2plY3ROYW1lID09PSBuYW1lKTtcbiAgICBjb25zdCB0YXNrSW5kZXggPSBhbGxQcm9qZWN0c1twcm9qZWN0SW5kZXhdLnByb2plY3REZXRhaWxzLmFsbFRhc2tzLmZpbmRJbmRleChwID0+IHAudGFza05hbWUgPT09IG5hbWVPZlRhc2spO1xuICAgIGNvbnN0IGN1cnJlbnRUYXNrTmFtZSA9IGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0ucHJvamVjdERldGFpbHMuYWxsVGFza3NbdGFza0luZGV4XS50YXNrTmFtZTtcbiAgICBjb25zdCBkYXRhQXR0cmlidXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtbmFtZT0nJHtjdXJyZW50VGFza05hbWV9J11gKTtcbiAgICBkYXRhQXR0cmlidXRlLnJlbW92ZSgpO1xuICAgIGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0uZGVsZXRlVGFzayh0YXNrSW5kZXgpO1xuICAgIHByb2plY3Qudmlld1Byb2plY3RzKCk7XG59O1xuXG5mdW5jdGlvbiBjaGFuZ2VOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG4gICAgY29uc3QgY2hhbmdlTmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNoYW5nZU5hbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2hhbmdlLW5hbWUtY29udGFpbmVyJyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNoYW5nZU5hbWVDb250YWluZXIpO1xuICAgIGNvbnN0IG5ld1Byb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbmV3UHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCduZXctcHJvamVjdC10aXRsZScpO1xuICAgIG5ld1Byb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIG5ld1Byb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgbmFtZSk7XG4gICAgaGVhZGVyLnJlcGxhY2VDaGlsZChuZXdQcm9qZWN0VGl0bGUsIGhlYWRlci5maXJzdEVsZW1lbnRDaGlsZCk7XG4gICAgY2hhbmdlTmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0VGl0bGUpO1xuICAgIGNvbnN0IGJ0bkNvbnRhaW5lcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidG5Db250YWluZXJzLmNsYXNzTGlzdC5hZGQoJ2J0bi1jb250YWluZXJzJyk7XG4gICAgY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHNhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzYXZlTmFtZShuYW1lKSlcbiAgICBzYXZlQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCdzYXZlLWJ0bicpO1xuICAgIHNhdmVCdG4udGV4dENvbnRlbnQgPSAnU0FWRSc7XG4gICAgY2hhbmdlTmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChidG5Db250YWluZXJzKTtcbiAgICBidG5Db250YWluZXJzLmFwcGVuZENoaWxkKHNhdmVCdG4pO1xuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDQU5DRUwnO1xuICAgIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywnY2FuY2VsLWJ0bicpO1xuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGhlYWRlckRpc3BsYXkobmFtZSkpXG4gICAgYnRuQ29udGFpbmVycy5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xufTtcblxuZnVuY3Rpb24gc2F2ZU5hbWUobmFtZSkge1xuICAgIGNvbnN0IG5ld1Byb2plY3RUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctcHJvamVjdC10aXRsZScpOyBcbiAgICBjb25zdCBpbmRleCA9IGFsbFByb2plY3RzLmZpbmRJbmRleChwID0+IHAucHJvamVjdERldGFpbHMucHJvamVjdE5hbWUgPT09IG5hbWUpO1xuICAgIHByb2plY3QuZWRpdFByb2plY3ROYW1lKGluZGV4LCBuZXdQcm9qZWN0VGl0bGUudmFsdWUpO1xuICAgIHByb2plY3Qudmlld1Byb2plY3RzKCk7XG4gICAgY29uc3QgQ2hhbmdlTmFtZWJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke25hbWV9LWJ0bmApO1xuICAgIENoYW5nZU5hbWVidG4ucmVtb3ZlQXR0cmlidXRlKCdpZCcpO1xuICAgIENoYW5nZU5hbWVidG4uc2V0QXR0cmlidXRlKCdpZCcsYCR7bmV3UHJvamVjdFRpdGxlLnZhbHVlfS1idG5gKTtcbiAgICBDaGFuZ2VOYW1lYnRuLnRleHRDb250ZW50ID0gbmV3UHJvamVjdFRpdGxlLnZhbHVlO1xuICAgIENoYW5nZU5hbWVidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IGhlYWRlckRpc3BsYXkobmV3UHJvamVjdFRpdGxlLnZhbHVlKSk7XG4gICAgaGVhZGVyRGlzcGxheShuZXdQcm9qZWN0VGl0bGUudmFsdWUpO1xufTtcblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdCgpIHtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10aXRsZScpO1xuICAgIGNvbnN0IGluZGV4ID0gYWxsUHJvamVjdHMuZmluZEluZGV4KHAgPT4gcC5wcm9qZWN0RGV0YWlscy5wcm9qZWN0TmFtZSA9PT0gcHJvamVjdFRpdGxlLnRleHRDb250ZW50KTtcbiAgICBwcm9qZWN0LmRlbGV0ZVByb2plY3QoaW5kZXgpO1xuICAgIHByb2plY3Qudmlld1Byb2plY3RzKCk7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cHJvamVjdFRpdGxlLnRleHRDb250ZW50fS1idG5gKTtcbiAgICBwcm9qZWN0VGl0bGVCdG4ucmVtb3ZlKCk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICcnO1xuICAgIGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdCcpO1xuICAgIHRvZG9MaXN0LnRleHRDb250ZW50ID0gJyc7XG59O1xuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=