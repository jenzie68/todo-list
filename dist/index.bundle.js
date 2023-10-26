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
    overflow:hidden;
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

#add-task-btn {
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

#add-task-btn > div {
    align-self:center;
    justify-self: left;
}

#add-task-btn > img {
    align-self: center;
    justify-self: center;
}

#add-task-btn:hover {
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

.task-container-display {
    height: 9%;
}

.task-background {
    background-color: white;
    width: 80%;
    height: 100%;
    margin-left: 3.8rem;
    display: grid;
    grid-template-columns: 0.7fr 4fr 1fr 0.7fr ;
    justify-content: center;
    align-items: center;
}

.task-background > input[type="checkbox"] {
    align-self: center;
    justify-self: center;
    appearance: none;
    margin: 0;
    font: inherit;
    width: 2.15em;
    border-color: #6eb49f;
    border-style: solid;
    height: 2.15em;
    border-radius: 0.15em;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;    
    border-radius: 3vw;
}

.task-background > input[type="checkbox"]:checked {
    content: "";
    width: 0.65em;
    height: 0.65em;
    transform: scale(3);
    background-color: #6eb49f !important;
    transition: 120ms transform ease-in-out;
}

.todo-list {
    display: flex;
    flex-direction: column;   
    height: 100%;
    gap: 1rem;
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

#date-display {
    font-weight: bolder;
    font-size: 1.6rem;
}





`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n}\n\n#headline {\n    display: inline-block;\n    grid-column: span 2;\n    background-color: #92C1B2;\n    color: aliceblue;\n    font-weight: bolder;\n    font-size: 4rem;\n    letter-spacing: 10px;\n    overflow: hidden;\n}\n\n#todo-list-icon {\n    margin-right: 2rem;\n}\n\n#text {\n    padding-top: 1.4rem;\n    padding-left: 23rem;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: 1.5fr 4fr;\n    grid-template-rows: 0.6fr 4fr;\n    height: 100vh;\n    width: 100vw;\n}\n\n.todo-list-container {\n    display: grid;\n    grid-template-columns: 1.3fr 4fr;\n    width: 100vw;\n}\n\n.main {\n    background-color: #bdd6d6;\n    overflow:hidden;\n}\n\n.title-add-project {\n    display: flex;\n    outline-style: solid;\n    color: turquoise;\n}\n\n.all-projects {\n    display: flex;\n    flex-direction: column;\n}\n\n.header {\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  position: relative;\n}\n\n.newProjectTitle,\n.btn-containers {\n    display: flex;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n};\n\n.task-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.side-bar {\n    display: flex;\n    flex-direction: column;\n}\n\n.project-btn-container {\n    display: grid;\n    grid-template-columns: 3fr 1fr;\n}\n\n.today,\n.upcoming,\n.show-projects-container {\n    display: grid;\n    grid-template-columns: 0.7fr 3fr;\n    font-size: 2rem;\n    padding-top: 0.8rem;\n    padding-bottom: 0.8rem;\n    letter-spacing: 0.3rem;\n    background-color: white;\n    border-color: #92C1B2;\n    border-style: solid;\n    color: #92C1B2;\n    font-weight: bolder;\n}\n\n.today:hover,\n.upcoming:hover,\n#projects-btn:hover,\n.all-projects > button:hover {\n    background: #6eb49f;\n    opacity: 50%;\n    color: white;\n}\n\n.upcoming {\n    border-top: none;\n}\n\n.today > div,\n.upcoming > div {\n    justify-self: left;\n    padding-left: 2rem;\n}\n\n.show-projects-container {\n    grid-template-columns: 1fr 1.9fr 1fr;\n    border-top: none;\n}\n\n#projects-btn {\n    font-size: 2rem;\n    letter-spacing: 0.3rem;\n    display: inline-block;\n    background-color: white;\n    text-align: left;\n    font-weight: bolder;\n    color: #92C1B2;\n    border-style: none;\n}\n\n.drop-down-btn {\n    background-color: white;\n    border-style: none;\n}\n\n#projects-icon {\n    padding-right: 1.9rem;\n}\n\n.all-projects {\n    display: flex;\n    flex-direction: column;\n    gap: 0.9px;\n    width: 50%;\n    height: 40%;\n    padding-left: 8rem;\n    padding-top: 2rem;\n}\n\n.all-projects > button {\n    height: 2.7rem;\n    font-size: 1.5rem;\n    background-color: white;\n    border-color: #92C1B2;\n    border-style: solid;\n    color: #92C1B2;\n    font-weight: bolder;\n}\n\n.sidebar-icons {\n    justify-self: end;\n}\n\n.input-project {\n    padding-top: 4rem;\n    align-self: center;\n}\n\n.input-project > div {\n    display: grid;\n    grid-template-columns: 10fr 1.5fr;\n    height: 3rem;\n}\n\n#get-project-title {\n    background: #EFEFEF;\n    border-style: solid;\n    border-color: #92C1B2;\n    font-size: 1.5rem;\n}\n\n.add-project-btn {\n    background-color: #92C1B2;\n    border-style: none;\n}\n\n.delete-project-btn {\n    margin-top: 1rem;\n    text-align: center;\n    width: 100%;\n    height: 2.5rem;\n    font-size: larger;\n    letter-spacing: 0.2rem;\n    background-color: #92C1B2;\n    font-weight: bolder;\n    color: white;\n    border-style: none;\n}\n\n.delete-project-btn:hover {\n    border-style: solid;\n    border-color: #6eb49f;\n    background-color: white;\n    color: #6eb49f;\n}\n\n.project-title {\n    padding-top: 1rem;\n    padding-bottom: 3rem;\n    font-size: 3.5rem;\n    font-weight: bolder;\n    color: white;\n    letter-spacing: 10px;\n}\n\n#add-task-btn {\n    display: grid;\n    grid-template-columns: 2fr 3.5fr;\n    width: 20%;\n    padding: 1.2rem 1.3rem 1.2rem 1.3rem;\n    font-size: 1rem;\n    letter-spacing: 5px;\n    background-color: #6eb49f;\n    color: white;\n    font-weight: bold;\n    border-radius: 4vw;\n    border-style: none;\n    margin-left: 3rem;\n}\n\n#add-task-btn > div {\n    align-self:center;\n    justify-self: left;\n}\n\n#add-task-btn > img {\n    align-self: center;\n    justify-self: center;\n}\n\n#add-task-btn:hover {\n    background-color: #78C4AD;\n}\n\n.change-name-container {\n    padding-top: 2.5rem;\n}\n\n#new-project-title {\n    height: 3.5rem;\n    width: 24rem;\n    font-size: 2.5rem;\n    letter-spacing: 0.5rem;\n    background-color: #6eb49f;\n    color: white;\n    border-style: none;\n    border-radius: 0.2vw;\n}\n\n.btn-containers {\n    padding-top: 1rem;\n}\n\n#save-btn,\n#cancel-btn {\n    padding: 0.5rem 0.7rem 0.5rem 0.7rem;\n    font-weight: bold;\n    color: white;\n    letter-spacing: 3px;\n    border-radius:0.5vw;\n}\n\n#save-btn {\n    margin-right: 1.5rem;\n    background-color: #8ED0DE;\n    border-style: none;\n}\n\n#cancel-btn {\n    background-color: #92C1B2;\n    border-style: none;\n}\n\n#save-btn:hover,\n#cancel-btn:hover {\n    border-style: solid;\n    border-color: white;\n}\n\n.task-form {\n    display: flex;\n    flex-direction: column;\n    padding: 3rem;\n    justify-content: space-between;\n    position: absolute;\n    top: 7rem;\n    left: 4rem;\n    height: 13rem;\n    width: 45%;\n    background: white;\n    z-index: 1;\n}\n\n.task-form > input,\n.task-form > select {\n    background-color: #6eb49f;\n    color: white;\n    height: 2rem;\n    border-style: none;\n    border-radius: 0.3vw;\n}\n\ntextarea {\n    background-color: #6eb49f;\n    border-radius: 0.3vw;\n}\n\n#cancel-task-btn,\n#submit-task-btn,\n#save-task-btn {\n    padding: 0.5rem 0.7rem 0.5rem 0.7rem;\n    font-weight: bolder;\n}\n\n#submit-task-btn:hover,\n#save-task-btn:hover {\n    background-color: #75D7BA;\n}\n\n#cancel-task-btn:hover {\n    background-color: #6eb49f;\n    color: white;\n    border-radius: 0.3vw;  \n    border-style: none; \n}\n\n#submit-task-btn,\n#save-task-btn {\n    background-color: #6eb49f;\n    color: white;\n    border-radius: 0.3vw;  \n    border-style: none; \n}\n\n#cancel-task-btn {\n    margin-left: 1rem;\n    color: #6eb49f;\n    background-color: white;\n    border-style: solid;\n    border-color: #6eb49f;\n    border-radius: 0.3vw; \n}\n\n.task-container-display {\n    height: 9%;\n}\n\n.task-background {\n    background-color: white;\n    width: 80%;\n    height: 100%;\n    margin-left: 3.8rem;\n    display: grid;\n    grid-template-columns: 0.7fr 4fr 1fr 0.7fr ;\n    justify-content: center;\n    align-items: center;\n}\n\n.task-background > input[type=\"checkbox\"] {\n    align-self: center;\n    justify-self: center;\n    appearance: none;\n    margin: 0;\n    font: inherit;\n    width: 2.15em;\n    border-color: #6eb49f;\n    border-style: solid;\n    height: 2.15em;\n    border-radius: 0.15em;\n    transform: translateY(-0.075em);\n    display: grid;\n    place-content: center;    \n    border-radius: 3vw;\n}\n\n.task-background > input[type=\"checkbox\"]:checked {\n    content: \"\";\n    width: 0.65em;\n    height: 0.65em;\n    transform: scale(3);\n    background-color: #6eb49f !important;\n    transition: 120ms transform ease-in-out;\n}\n\n.todo-list {\n    display: flex;\n    flex-direction: column;   \n    height: 100%;\n    gap: 1rem;\n}\n\n.taskBtns {\n    display: flex;\n    flex-direction: column;\n    justify-self: center;\n    align-self: center;\n    background-color: none;\n    gap: 4px;\n}\n\n.taskBtns > button {\n    background-color: white;\n    border-style: none;\n}\n\n.taskBtns > button:hover {\n    background: whitesmoke;\n} \n\n#date-display {\n    font-weight: bolder;\n    font-size: 1.6rem;\n}\n\n\n\n\n\n"],"sourceRoot":""}]);
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

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UI: () => (/* binding */ UI),
/* harmony export */   getNewTtle: () => (/* binding */ getNewTtle),
/* harmony export */   getProjName: () => (/* binding */ getProjName),
/* harmony export */   getProjTitle: () => (/* binding */ getProjTitle),
/* harmony export */   getTaskInfo: () => (/* binding */ getTaskInfo)
/* harmony export */ });
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ "./src/logic.js");


function getProjName() {
    return document.getElementById('get-project-title');
};

function getProjTitle() {
    return document.querySelector('.project-title').textContent;
};

function getNewTtle(){
    return document.getElementById('new-project-title'); 
};

const getTaskInfo = () => {
    const task = document.getElementById('get-task-name').value;
    const description = document.getElementById('get-description').value;
    const date = document.getElementById('get-date').value;
    const priorityList = document.getElementById('get-priority-list').value; 

    return {
        task,
        description,
        date,
        priorityList
    };
};

const UI = (() => {
    function makeProjectBtn(name) {
        const btn = document.createElement('button');
        btn.setAttribute('id',`${name}-project-btn`);
        btn.classList.add('project-btn');
        btn.textContent = name;
    
        const projects = document.querySelector('.all-projects');
        projects.appendChild(btn);
    };

    function renderSavedTask() {
        const projectIndex = _logic__WEBPACK_IMPORTED_MODULE_0__.findIndex.projectIndex()
        _logic__WEBPACK_IMPORTED_MODULE_0__.allProjects[projectIndex].projectDetails.allTasks.forEach(task => {
            taskDisplay(task.taskName, task.description, task.dueDate, task.priorityList, task.checkBox);
        });
    };

    function makeAddTaskBtn() {
        const todoList = document.querySelector('.todo-list');
    
        const containerTaskBtn = document.createElement('div');
        containerTaskBtn.classList.add('container-task-btn');
    
        const addTaskBtn = document.createElement('button');
        addTaskBtn.setAttribute('id','add-task-btn')
        addTaskBtn.classList.add('add-task-btn');
        
        const addIconImg = document.createElement('img');
        addIconImg.setAttribute('src','/src/icons/material-symbols_add.svg');
        addIconImg.classList.add('add-task-btn');
        
        const div = document.createElement('div');
        div.textContent = 'Add Task';
    
        addTaskBtn.appendChild(addIconImg);
        addTaskBtn.appendChild(div)
        containerTaskBtn.appendChild(addTaskBtn);
        todoList.appendChild(containerTaskBtn);
    };
    
    function headerDisplay(name) {
        const header = document.querySelector('.header');
        header.textContent = '';
        renderProjTtle(header, name);
    };
    
    function renderProjTtle(append, projTtle) {
        const projectTitle = document.createElement('div');
        projectTitle.classList.add('project-title');
        projectTitle.setAttribute('id', projTtle);
        projectTitle.textContent = projTtle;
        append.appendChild(projectTitle);
    };
    
    function taskForm() {
        const header = document.querySelector('.header');
    
        const form = document.createElement('form');
        form.classList.add('task-form');
    
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
        (0,_logic__WEBPACK_IMPORTED_MODULE_0__.disablePreviousDates)(date);
    
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
    
        const cancelBtn = document.createElement('button');
        cancelBtn.setAttribute('id','cancel-task-btn');
        cancelBtn.textContent = 'cancel';
    
        header.appendChild(form);
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

    function updateUITaskBtn() {
        const addTaskBtn = document.querySelector('.container-task-btn');
        addTaskBtn.remove();
        makeAddTaskBtn();
    };
    
    function taskDisplay(task, description, date, priority, checkBox) {
        const form = document.querySelector('.todo-list');
    
        const container = document.createElement('div');
        container.classList.add('task-container-display');
        container.setAttribute('data-name', task);
    
        const bg = document.createElement('div');
        bg.classList.add('task-background');
    
        const checkList = document.createElement('input');
        checkList.setAttribute('type','checkbox');
        checkList.setAttribute('id', task);
        checkList.classList.add('check-box');
        checkBox == 'checked' ? checkList.checked = true : false;  

        const taskDisplay = document.createElement('label');
        taskDisplay.setAttribute('for',task);
    
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
        deleteBtn.setAttribute('id','delete-task');
        deleteBtn.setAttribute('data-name', task);
        const deleteIcon = document.createElement('img');
        deleteIcon.setAttribute('data-name', task);
        deleteIcon.setAttribute('id','delete-icon');
        deleteIcon.setAttribute('src','/src/icons/bi_trash-fill.svg');
    
        const editTaskBtn = document.createElement('button');
        editTaskBtn.setAttribute('id','edit-task');
        editTaskBtn.setAttribute('data-name', task);
        const editIcon = document.createElement('img');
        editIcon.setAttribute('id','edit-icon');
        editIcon.setAttribute('src','/src/icons/tabler_edit.svg');
        editIcon.setAttribute('data-name', task);

        priorityColor(priority, checkList, dateDisplay);
    
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
    
    function priorityColor(priority, checkBox, date) {
        if (priority == 'not-important') {
            checkBox.style.backgroundColor = '#d3d3d3';
        }
        if (priority == 'urgent') {
            checkBox.style.backgroundColor = '#F65C5C';
            date.style.color = '#F65C5C';
        } if (priority == 'important') {
            checkBox.style.backgroundColor = '#F6D35C';
            date.style.color = '#F6D35C';
        }
    };

    function emptyToDoList() {
        const todoList = document.querySelector('.todo-list');
        todoList.textContent = '';
    }

    function createSaveBtn() {
        const saveTaskBtn = document.createElement('button');
        saveTaskBtn.setAttribute('id','save-task-btn');
        saveTaskBtn.textContent = 'SAVE';
        return saveTaskBtn;
    };
    
    function replaceBtns() {
        const submitTaskBtn = document.getElementById('submit-task-btn');
        const saveTaskBtn = createSaveBtn();
        saveTaskBtn.setAttribute('id','save-task-btn');
        submitTaskBtn.replaceWith(saveTaskBtn);
    };
    
    function currentTaskInfo(nameTask) {
        const projectIndex = _logic__WEBPACK_IMPORTED_MODULE_0__.findIndex.projectIndex();
        const taskIndex = _logic__WEBPACK_IMPORTED_MODULE_0__.findIndex.taskIndex(nameTask);
        const name = _logic__WEBPACK_IMPORTED_MODULE_0__.allProjects[projectIndex].projectDetails.allTasks[taskIndex].taskName;
        const details = _logic__WEBPACK_IMPORTED_MODULE_0__.allProjects[projectIndex].projectDetails.allTasks[taskIndex].description;
        const dueDate = _logic__WEBPACK_IMPORTED_MODULE_0__.allProjects[projectIndex].projectDetails.allTasks[taskIndex].dueDate;
        const priority = _logic__WEBPACK_IMPORTED_MODULE_0__.allProjects[projectIndex].projectDetails.allTasks[taskIndex].priorityList;
        const getTask = document.getElementById('get-task-name');
        const getDescription = document.getElementById('get-description');
        const getDate = document.getElementById('get-date');
        const getPriorityList = document.getElementById('get-priority-list'); 
        getTask.value = name;
        getDescription.value = details;
        getDate.value = dueDate;
        getPriorityList.value = priority;
    };
    
    function removeDataNameAttribute(nameOfTask) {
        const projectIndex = _logic__WEBPACK_IMPORTED_MODULE_0__.findIndex.projectIndex();
        const taskIndex = _logic__WEBPACK_IMPORTED_MODULE_0__.findIndex.taskIndex(nameOfTask); 
        const currentTaskName = _logic__WEBPACK_IMPORTED_MODULE_0__.allProjects[projectIndex].projectDetails.allTasks[taskIndex].taskName;
        const dataAttribute = document.querySelector(`[data-name='${currentTaskName}']`);
        dataAttribute.remove();
    };
    
    function removeTaskForm() {
        const taskForm = document.querySelector('.task-form');
        taskForm.remove();
    };
    
    function deleteTaskDisplay(nameOfTask) {
        removeDataNameAttribute(nameOfTask);
        (0,_logic__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(nameOfTask);
    };
    
    function changeProjName(name) {
        const header = document.querySelector('.header');
    
        const changeNameContainer = document.createElement('div');
        changeNameContainer.classList.add('change-name-container');
    
        const newProjectTitle = document.createElement('input');
        newProjectTitle.setAttribute('id','new-project-title');
        newProjectTitle.setAttribute('type', 'text');
        newProjectTitle.setAttribute('value', name);
        header.replaceChild(newProjectTitle, header.firstElementChild);
    
        const btnContainers = document.createElement('div');
        btnContainers.classList.add('btn-containers');
    
        const saveBtn = document.createElement('button');
        saveBtn.setAttribute('id','save-btn');
        saveBtn.textContent = 'SAVE';
    
        const cancelBtn = document.createElement('button');
        cancelBtn.textContent = 'CANCEL';
        cancelBtn.setAttribute('id','cancel-btn');
    
        header.appendChild(changeNameContainer);
        changeNameContainer.appendChild(newProjectTitle);
        changeNameContainer.appendChild(btnContainers);
        btnContainers.appendChild(saveBtn);
        btnContainers.appendChild(cancelBtn);
    };
    
    function newTtleBtn(currentProj) {
        const newTitle = getNewTtle(); 
        const ChangeNamebtn = document.getElementById(`${currentProj}-project-btn`);
        ChangeNamebtn.removeAttribute('id');
        ChangeNamebtn.setAttribute('id',`${newTitle.value}-project-btn`);
        ChangeNamebtn.textContent = newTitle.value;
    };
    
    function removeProjectBtn() {
        const projectTitle = document.querySelector('.project-title');
        const projectTitleBtn = document.getElementById(`${projectTitle.textContent}-project-btn`);
        projectTitleBtn.remove();
    };
    
    function emptyToDoPage() {
        const header = document.querySelector('.header');
        header.textContent = '';
        emptyToDoList();
    };
    
    return {
        createSaveBtn,
        currentTaskInfo,
        changeProjName,
        deleteTaskDisplay,
        emptyToDoList,
        emptyToDoPage,
        makeProjectBtn,
        makeAddTaskBtn,
        newTtleBtn,
        removeDataNameAttribute,
        removeProjectBtn,
        removeTaskForm,
        replaceBtns,
        renderSavedTask,
        headerDisplay,
        priorityColor,
        taskForm,
        taskDisplay,
        updateUITaskBtn,
    }
})();



/***/ }),

/***/ "./src/DOM_events.js":
/*!***************************!*\
  !*** ./src/DOM_events.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOMEvents: () => (/* binding */ DOMEvents)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic */ "./src/logic.js");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-storage */ "./src/local-storage.js");
/* harmony import */ var _pubsub_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pubsub.js */ "./src/pubsub.js");





_pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.subscribe('addProj', _logic__WEBPACK_IMPORTED_MODULE_1__.addProject);
_pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.subscribe('dleteProj',_logic__WEBPACK_IMPORTED_MODULE_1__.deleteProject);
_pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.subscribe('saveName', _logic__WEBPACK_IMPORTED_MODULE_1__.saveName);
_pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.subscribe('saveData', _local_storage__WEBPACK_IMPORTED_MODULE_2__.saveData);
_pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.subscribe('createTask', _logic__WEBPACK_IMPORTED_MODULE_1__.createTask);
_pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.subscribe('editTask', _logic__WEBPACK_IMPORTED_MODULE_1__.editTask);
_pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.subscribe('saveBox', _logic__WEBPACK_IMPORTED_MODULE_1__.saveCheckBox);

const DOMEvents = () => {
    const d = document;
    let currentProj;
    let task;
    let newInfo;
    let btn;
    d.addEventListener('click', (e) => {
        if(e.target.matches('.add-project-btn') || e.target.matches('#add-icon')) {
            const getProjTitle = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.getProjName)();
            _pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.publish('addProj', getProjTitle.value);
            _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.makeProjectBtn(getProjTitle.value);
            getProjTitle.value = '';
            console.log(_logic__WEBPACK_IMPORTED_MODULE_1__.allProjects);
        }
        if (e.target.matches('.delete-project-btn')) {
            _pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.publish('dleteProj');
            _pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.publish('saveData');
            _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.removeProjectBtn();
            _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.emptyToDoPage();
        }
        if (e.target.matches(`.project-btn`)) {
            if (btn != null) {
                btn.style.color = '#92C1B2';
                btn.style.backgroundColor = 'white'
            }
            btn = document.getElementById(`${e.target.textContent}-project-btn`);
            btn.style.color = 'white';
            btn.style.backgroundColor = '#92C1B2'
            _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.headerDisplay(e.target.textContent);
            _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.emptyToDoList();
            _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.renderSavedTask();
            _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.makeAddTaskBtn();
        }
        if (e.target.matches('.add-task-btn')) {
            e.preventDefault();
            _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.taskForm((0,_DOM__WEBPACK_IMPORTED_MODULE_0__.getProjTitle)());
        }
        if(e.target.matches('.project-title')) {
            _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.changeProjName(e.target.textContent);
            currentProj = e.target.textContent;
        }
        if (e.target.matches(`${e.target.textContent}-btn`)) {
            headerDisplay(e.target.textContent);
        }
        if (e.target.matches('#save-btn')) {
            _pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.publish('saveName', currentProj);
            _pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.publish('saveData');
            _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.newTtleBtn(currentProj);
            _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.headerDisplay((0,_DOM__WEBPACK_IMPORTED_MODULE_0__.getNewTtle)().value);
        }
        if (e.target.matches('#cancel-btn')) {
            _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.headerDisplay(currentProj);
        }
        if (e.target.matches('#submit-task-btn')) {
            e.preventDefault();
            let projTitle = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.getProjTitle)();
            newInfo = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.getTaskInfo)();
            _pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.publish('createTask', projTitle, newInfo.task, newInfo.description, newInfo.date, newInfo.priorityList);
            _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.taskDisplay(newInfo.task, newInfo.description, newInfo.date, newInfo.priorityList);
            _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.headerDisplay(projTitle);
            _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.updateUITaskBtn();
            _pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.publish('saveData', _local_storage__WEBPACK_IMPORTED_MODULE_2__.saveData); 
        }
        if (e.target.matches('#cancel-task-btn')) {
            e.preventDefault();
            _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.headerDisplay((0,_DOM__WEBPACK_IMPORTED_MODULE_0__.getProjTitle)());
        }
        if (e.target.matches('#delete-task') || e.target.matches('#delete-icon')) {
            e.preventDefault();
            _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.deleteTaskDisplay(e.target.getAttribute('data-name'));
        }
        if (e.target.matches('#edit-task') || e.target.matches('#edit-icon')) {
            e.preventDefault();
            task = e.target.getAttribute('data-name');
            _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.taskForm();
            _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.currentTaskInfo(task);
            _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.createSaveBtn();
            _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.replaceBtns(task);
        }
        if (e.target.matches('#save-task-btn')) {
            e.preventDefault();
            _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.removeDataNameAttribute(task);
            _pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.publish('editTask', task);
            _pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.publish('saveData');
            newInfo = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.getTaskInfo)();
            _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.taskDisplay(newInfo.task, newInfo.description, newInfo.date, newInfo.priorityList);
            _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.removeTaskForm();
            _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.updateUITaskBtn();
        };
        if (e.target.matches('.today')) {
            _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.emptyToDoPage();
            _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.headerDisplay('TODAY');
            (0,_logic__WEBPACK_IMPORTED_MODULE_1__.todayAndUpcomingTask)().displayTodayTasks();
        };
        if (e.target.matches('.upcoming')) {
            _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.emptyToDoPage();
            _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.headerDisplay('UPCOMING');
            (0,_logic__WEBPACK_IMPORTED_MODULE_1__.todayAndUpcomingTask)().displayUpcomingTask();
        };
    });
    d.addEventListener('change', (e) => {
        if (e.target.matches('.check-box')) {
            let task = document.getElementById(e.target.getAttribute('id'));
            _pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.publish('saveBox',task, e.target.getAttribute('id'), e.target.style.backgroundColor);
            _pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.publish('saveData'); 
        }
    });
};



/***/ }),

/***/ "./src/local-storage.js":
/*!******************************!*\
  !*** ./src/local-storage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   saveData: () => (/* binding */ saveData)
/* harmony export */ });
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ "./src/logic.js");


function saveData() { 
    localStorage.setItem("allProjectData", JSON.stringify(_logic__WEBPACK_IMPORTED_MODULE_0__.allProjects));
    JSON.parse(localStorage.getItem("allProjectData"));
};




/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   allProjects: () => (/* binding */ allProjects),
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   deleteProject: () => (/* binding */ deleteProject),
/* harmony export */   deleteTask: () => (/* binding */ deleteTask),
/* harmony export */   disablePreviousDates: () => (/* binding */ disablePreviousDates),
/* harmony export */   editTask: () => (/* binding */ editTask),
/* harmony export */   findIndex: () => (/* binding */ findIndex),
/* harmony export */   project: () => (/* binding */ project),
/* harmony export */   saveCheckBox: () => (/* binding */ saveCheckBox),
/* harmony export */   saveName: () => (/* binding */ saveName),
/* harmony export */   storeCheckBox: () => (/* binding */ storeCheckBox),
/* harmony export */   todayAndUpcomingTask: () => (/* binding */ todayAndUpcomingTask)
/* harmony export */ });
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");
/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage.js */ "./src/local-storage.js");



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

const project = projectManagement();

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

const storeCheckBox = (nameOfTask) => {
    const nameOfProject = document.querySelector('.project-title').textContent;
    const projectIndex = allProjects.findIndex(p => p.projectDetails.projectName === nameOfProject);
    const taskIndex = allProjects[projectIndex].projectDetails.allTasks.findIndex(p => p.taskName === nameOfTask);

    function check() {
        allProjects[projectIndex].projectDetails.allTasks[taskIndex].checkBox = 'checked';
    }

    function unchecked() {
        allProjects[projectIndex].projectDetails.allTasks[taskIndex].checkBox = 'unchecked';
    }
    
    return { check, unchecked }
};

function saveCheckBox(box,nameOfTask) {
    const checkBox = storeCheckBox(nameOfTask); 
    if (box.checked == true) {
        checkBox.check();
    } else {
        checkBox.unchecked();
    }
};

function addProject(nameOfProject) {
    project.addProject(nameOfProject);
    (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveData)();
};

function deleteProject() {
    const index = findIndex.projectIndex();
    project.deleteProject(index);
};

const findIndex = (() => {
    const projectIndex = () => {
        const name = (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.getProjTitle)();
        const index = allProjects.findIndex(p => p.projectDetails.projectName === name);
        return index;
    };

    const taskIndex = (nameTask) => allProjects[projectIndex()].projectDetails.allTasks.findIndex(p => p.taskName === nameTask);

    return { projectIndex , taskIndex}
})();

function deleteTask(nameTask) {
    const projIndex = findIndex.projectIndex();
    const taskIndex = findIndex.taskIndex(nameTask);
    allProjects[projIndex].deleteTask(taskIndex);
    (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveData)();
};

function saveName(currentProj) {
    const newTitle = (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.getNewTtle)();
    const index = allProjects.findIndex(p => p.projectDetails.projectName === currentProj);
    project.editProjectName(index, newTitle.value);
    project.viewProjects();
};

function editTask(nameTask) {
    const projectIndex = findIndex.projectIndex();
    const taskIndex = findIndex.taskIndex(nameTask);
    const newInfo = (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.getTaskInfo)();
    allProjects[projectIndex].projectDetails.allTasks[taskIndex].taskName = newInfo.task;
    allProjects[projectIndex].projectDetails.allTasks[taskIndex].description = newInfo.description;
    allProjects[projectIndex].projectDetails.allTasks[taskIndex].dueDate = newInfo.date;
    allProjects[projectIndex].projectDetails.allTasks[taskIndex].priorityList = newInfo.priorityList;
};

function createTask(nameProj, tsk, descrp, dte, prList) {
    const index = allProjects.findIndex(p => p.projectDetails.projectName === nameProj);
    allProjects[index].addTask(tsk,descrp,dte,prList);
};

function disablePreviousDates(date) {
    let dtToday = new Date();
 
    let month = dtToday.getMonth() + 1;
    let day = dtToday.getDate();
    let year = dtToday.getFullYear();
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();
    
    let maxDate = year + '-' + month + '-' + day;
    date.setAttribute('min', maxDate);
}

const todayAndUpcomingTask = () => {
    const todayDate = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        return today = yyyy + '-' + mm + '-' + dd;
    }

    const displayTodayTasks = () => allProjects.forEach(p => p.projectDetails.allTasks.forEach(t => {
        if (t.dueDate == todayDate()) {
            _DOM_js__WEBPACK_IMPORTED_MODULE_0__.UI.taskDisplay(t.taskName, t.description, t.dueDate, t.priorityList, t.checkBox);
        }
    })); 
    
    const displayUpcomingTask = () =>  allProjects.forEach(p => p.projectDetails.allTasks.forEach(t => {
        if (t.dueDate !== todayDate()) {
            _DOM_js__WEBPACK_IMPORTED_MODULE_0__.UI.taskDisplay(t.taskName, t.description, t.dueDate, t.priorityList, t.checkBox);
        }
    })); 
    
    return { displayTodayTasks, displayUpcomingTask }
}





/***/ }),

/***/ "./src/pubsub.js":
/*!***********************!*\
  !*** ./src/pubsub.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pubsub: () => (/* binding */ pubsub)
/* harmony export */ });
class Pubsub {
    constructor() {
      this.tracker = {
        // key: eventname, value: [ funcs ]
      };
    }
  
    subscribe(eventName, func) {
      if (this.tracker[eventName]) {
        this.tracker[eventName].push(func);
      } else {
        this.tracker[eventName] = [func];
      }
      return {
        unsubscribe: () => {
          const funcs = this.tracker[eventName];
          const idx = funcs.indexOf(func);
          if (idx > -1) {
            funcs.splice(idx, 1);
          }
        }
      };
    }
  
    publish(eventName, ...args) {
      const funcs = this.tracker[eventName];
      if (Array.isArray(funcs)) {
        funcs.forEach((func) => {
          func.apply(null, args);
        });
      }
    }
  }

const pubsub = new Pubsub();



/***/ }),

/***/ "./src/renderStorage.js":
/*!******************************!*\
  !*** ./src/renderStorage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderSavedData: () => (/* binding */ renderSavedData),
/* harmony export */   renderTaskDisplay: () => (/* binding */ renderTaskDisplay),
/* harmony export */   renderTtleBtn: () => (/* binding */ renderTtleBtn)
/* harmony export */ });
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ "./src/logic.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-storage */ "./src/local-storage.js");




function renderTtleBtn(projectData) {
    projectData.forEach(p => {
        (0,_logic__WEBPACK_IMPORTED_MODULE_0__.addProject)(p.projectDetails.projectName);
        _DOM__WEBPACK_IMPORTED_MODULE_1__.UI.makeProjectBtn(p.projectDetails.projectName);
    });
};

function renderTaskDisplay(projectData) {
    projectData.forEach(p => {
        const projectIndex = _logic__WEBPACK_IMPORTED_MODULE_0__.allProjects.findIndex(project => project.projectDetails.projectName === (p.projectDetails.projectName));
        if (p.projectDetails.allTasks.length !== 0) {
            p.projectDetails.allTasks.forEach(task => {
                _logic__WEBPACK_IMPORTED_MODULE_0__.allProjects[projectIndex].addTask(task.taskName, task.description, task.dueDate, task.priorityList, task.checkBox);
                (0,_local_storage__WEBPACK_IMPORTED_MODULE_2__.saveData)();
            });
            console.log(_logic__WEBPACK_IMPORTED_MODULE_0__.allProjects);
        };
    });
};

function renderSavedData() {
    const allProjectData = JSON.parse(localStorage.getItem("allProjectData"));
    if (localStorage.length !== 0) {
      if (_logic__WEBPACK_IMPORTED_MODULE_0__.allProjects.length == 0) {
          renderTtleBtn(allProjectData);
          renderTaskDisplay(allProjectData);
      };
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
/* harmony import */ var _DOM_events_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM_events.js */ "./src/DOM_events.js");
/* harmony import */ var _renderStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderStorage */ "./src/renderStorage.js");




window.addEventListener('DOMContentLoaded', () => {
    (0,_renderStorage__WEBPACK_IMPORTED_MODULE_2__.renderSavedData)();
});

document.addEventListener('DOMContentLoaded', () => {
    (0,_DOM_events_js__WEBPACK_IMPORTED_MODULE_1__.DOMEvents)();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQSxPQUFPLGdGQUFnRixVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxZQUFZLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE9BQU8sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sUUFBUSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxPQUFPLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUss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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FvQjtBQUN1QjtBQUNPOztBQUVsRDtBQUNBLElBQUksK0RBQWU7QUFDbkIsQ0FBQzs7QUFFRDtBQUNBLElBQUkseURBQVM7QUFDYixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTV9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvY2FsLXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvZ2ljLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3JlbmRlclN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuI2hlYWRsaW5lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTJDMUIyO1xuICAgIGNvbG9yOiBhbGljZWJsdWU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI3RvZG8tbGlzdC1pY29uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG59XG5cbiN0ZXh0IHtcbiAgICBwYWRkaW5nLXRvcDogMS40cmVtO1xuICAgIHBhZGRpbmctbGVmdDogMjNyZW07XG59XG5cbmJvZHkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjVmciA0ZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjZmciA0ZnI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG59XG5cbi50b2RvLWxpc3QtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS4zZnIgNGZyO1xuICAgIHdpZHRoOiAxMDB2dztcbn1cblxuLm1haW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZGQ2ZDY7XG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xufVxuXG4udGl0bGUtYWRkLXByb2plY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgb3V0bGluZS1zdHlsZTogc29saWQ7XG4gICAgY29sb3I6IHR1cnF1b2lzZTtcbn1cblxuLmFsbC1wcm9qZWN0cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm5ld1Byb2plY3RUaXRsZSxcbi5idG4tY29udGFpbmVycyB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuYm9keSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XG59O1xuXG4udGFzay1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnNpZGUtYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5wcm9qZWN0LWJ0bi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyO1xufVxuXG4udG9kYXksXG4udXBjb21pbmcsXG4uc2hvdy1wcm9qZWN0cy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjdmciAzZnI7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIHBhZGRpbmctdG9wOiAwLjhyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDAuOHJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1jb2xvcjogIzkyQzFCMjtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGNvbG9yOiAjOTJDMUIyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi50b2RheTpob3Zlcixcbi51cGNvbWluZzpob3ZlcixcbiNwcm9qZWN0cy1idG46aG92ZXIsXG4uYWxsLXByb2plY3RzID4gYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNmViNDlmO1xuICAgIG9wYWNpdHk6IDUwJTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi51cGNvbWluZyB7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbn1cblxuLnRvZGF5ID4gZGl2LFxuLnVwY29taW5nID4gZGl2IHtcbiAgICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xufVxuXG4uc2hvdy1wcm9qZWN0cy1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEuOWZyIDFmcjtcbiAgICBib3JkZXItdG9wOiBub25lO1xufVxuXG4jcHJvamVjdHMtYnRuIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuM3JlbTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGNvbG9yOiAjOTJDMUIyO1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuLmRyb3AtZG93bi1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuI3Byb2plY3RzLWljb24ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuOXJlbTtcbn1cblxuLmFsbC1wcm9qZWN0cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMC45cHg7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDhyZW07XG4gICAgcGFkZGluZy10b3A6IDJyZW07XG59XG5cbi5hbGwtcHJvamVjdHMgPiBidXR0b24ge1xuICAgIGhlaWdodDogMi43cmVtO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1jb2xvcjogIzkyQzFCMjtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGNvbG9yOiAjOTJDMUIyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi5zaWRlYmFyLWljb25zIHtcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbn1cblxuLmlucHV0LXByb2plY3Qge1xuICAgIHBhZGRpbmctdG9wOiA0cmVtO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmlucHV0LXByb2plY3QgPiBkaXYge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMGZyIDEuNWZyO1xuICAgIGhlaWdodDogM3JlbTtcbn1cblxuI2dldC1wcm9qZWN0LXRpdGxlIHtcbiAgICBiYWNrZ3JvdW5kOiAjRUZFRkVGO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjOTJDMUIyO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uYWRkLXByb2plY3QtYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTJDMUIyO1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuLmRlbGV0ZS1wcm9qZWN0LWJ0biB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgZm9udC1zaXplOiBsYXJnZXI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTJDMUIyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuLmRlbGV0ZS1wcm9qZWN0LWJ0bjpob3ZlciB7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6ICM2ZWI0OWY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6ICM2ZWI0OWY7XG59XG5cbi5wcm9qZWN0LXRpdGxlIHtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcbiAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMTBweDtcbn1cblxuI2FkZC10YXNrLWJ0biB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzLjVmcjtcbiAgICB3aWR0aDogMjAlO1xuICAgIHBhZGRpbmc6IDEuMnJlbSAxLjNyZW0gMS4ycmVtIDEuM3JlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmViNDlmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXItcmFkaXVzOiA0dnc7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIG1hcmdpbi1sZWZ0OiAzcmVtO1xufVxuXG4jYWRkLXRhc2stYnRuID4gZGl2IHtcbiAgICBhbGlnbi1zZWxmOmNlbnRlcjtcbiAgICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XG59XG5cbiNhZGQtdGFzay1idG4gPiBpbWcge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuI2FkZC10YXNrLWJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc4QzRBRDtcbn1cblxuLmNoYW5nZS1uYW1lLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy10b3A6IDIuNXJlbTtcbn1cblxuI25ldy1wcm9qZWN0LXRpdGxlIHtcbiAgICBoZWlnaHQ6IDMuNXJlbTtcbiAgICB3aWR0aDogMjRyZW07XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmViNDlmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMC4ydnc7XG59XG5cbi5idG4tY29udGFpbmVycyB7XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG59XG5cbiNzYXZlLWJ0bixcbiNjYW5jZWwtYnRuIHtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC43cmVtIDAuNXJlbSAwLjdyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgYm9yZGVyLXJhZGl1czowLjV2dztcbn1cblxuI3NhdmUtYnRuIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEVEMERFO1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuI2NhbmNlbC1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MkMxQjI7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG4jc2F2ZS1idG46aG92ZXIsXG4jY2FuY2VsLWJ0bjpob3ZlciB7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xufVxuXG4udGFzay1mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogM3JlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogN3JlbTtcbiAgICBsZWZ0OiA0cmVtO1xuICAgIGhlaWdodDogMTNyZW07XG4gICAgd2lkdGg6IDQ1JTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4udGFzay1mb3JtID4gaW5wdXQsXG4udGFzay1mb3JtID4gc2VsZWN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmViNDlmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuM3Z3O1xufVxuXG50ZXh0YXJlYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZlYjQ5ZjtcbiAgICBib3JkZXItcmFkaXVzOiAwLjN2dztcbn1cblxuI2NhbmNlbC10YXNrLWJ0bixcbiNzdWJtaXQtdGFzay1idG4sXG4jc2F2ZS10YXNrLWJ0biB7XG4gICAgcGFkZGluZzogMC41cmVtIDAuN3JlbSAwLjVyZW0gMC43cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbiNzdWJtaXQtdGFzay1idG46aG92ZXIsXG4jc2F2ZS10YXNrLWJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc1RDdCQTtcbn1cblxuI2NhbmNlbC10YXNrLWJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZlYjQ5ZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMC4zdnc7ICBcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7IFxufVxuXG4jc3VibWl0LXRhc2stYnRuLFxuI3NhdmUtdGFzay1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZWI0OWY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuM3Z3OyAgXG4gICAgYm9yZGVyLXN0eWxlOiBub25lOyBcbn1cblxuI2NhbmNlbC10YXNrLWJ0biB7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgY29sb3I6ICM2ZWI0OWY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6ICM2ZWI0OWY7XG4gICAgYm9yZGVyLXJhZGl1czogMC4zdnc7IFxufVxuXG4udGFzay1jb250YWluZXItZGlzcGxheSB7XG4gICAgaGVpZ2h0OiA5JTtcbn1cblxuLnRhc2stYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDMuOHJlbTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC43ZnIgNGZyIDFmciAwLjdmciA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRhc2stYmFja2dyb3VuZCA+IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgd2lkdGg6IDIuMTVlbTtcbiAgICBib3JkZXItY29sb3I6ICM2ZWI0OWY7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBoZWlnaHQ6IDIuMTVlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjE1ZW07XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjA3NWVtKTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjsgICAgXG4gICAgYm9yZGVyLXJhZGl1czogM3Z3O1xufVxuXG4udGFzay1iYWNrZ3JvdW5kID4gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgd2lkdGg6IDAuNjVlbTtcbiAgICBoZWlnaHQ6IDAuNjVlbTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDMpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZWI0OWYgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiAxMjBtcyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XG59XG5cbi50b2RvLWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgICBcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4udGFza0J0bnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbiAgICBnYXA6IDRweDtcbn1cblxuLnRhc2tCdG5zID4gYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbi50YXNrQnRucyA+IGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbn0gXG5cbiNkYXRlLWRpc3BsYXkge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG59XG5cblxuXG5cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQyxDQUFBOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBOzs7SUFHSSxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZC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LG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuI2hlYWRsaW5lIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTJDMUIyO1xcbiAgICBjb2xvcjogYWxpY2VibHVlO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAxMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4jdG9kby1saXN0LWljb24ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxufVxcblxcbiN0ZXh0IHtcXG4gICAgcGFkZGluZy10b3A6IDEuNHJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAyM3JlbTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS41ZnIgNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNmZyIDRmcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4udG9kby1saXN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS4zZnIgNGZyO1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcbi5tYWluIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JkZDZkNjtcXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xcbn1cXG5cXG4udGl0bGUtYWRkLXByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBvdXRsaW5lLXN0eWxlOiBzb2xpZDtcXG4gICAgY29sb3I6IHR1cnF1b2lzZTtcXG59XFxuXFxuLmFsbC1wcm9qZWN0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm5ld1Byb2plY3RUaXRsZSxcXG4uYnRuLWNvbnRhaW5lcnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbn07XFxuXFxuLnRhc2stY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNpZGUtYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnByb2plY3QtYnRuLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjtcXG59XFxuXFxuLnRvZGF5LFxcbi51cGNvbWluZyxcXG4uc2hvdy1wcm9qZWN0cy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuN2ZyIDNmcjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMC44cmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC44cmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjOTJDMUIyO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBjb2xvcjogIzkyQzFCMjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLnRvZGF5OmhvdmVyLFxcbi51cGNvbWluZzpob3ZlcixcXG4jcHJvamVjdHMtYnRuOmhvdmVyLFxcbi5hbGwtcHJvamVjdHMgPiBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjNmViNDlmO1xcbiAgICBvcGFjaXR5OiA1MCU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnVwY29taW5nIHtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG59XFxuXFxuLnRvZGF5ID4gZGl2LFxcbi51cGNvbWluZyA+IGRpdiB7XFxuICAgIGp1c3RpZnktc2VsZjogbGVmdDtcXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbn1cXG5cXG4uc2hvdy1wcm9qZWN0cy1jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxLjlmciAxZnI7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxufVxcblxcbiNwcm9qZWN0cy1idG4ge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjNyZW07XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGNvbG9yOiAjOTJDMUIyO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi5kcm9wLWRvd24tYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuI3Byb2plY3RzLWljb24ge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjlyZW07XFxufVxcblxcbi5hbGwtcHJvamVjdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuOXB4O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDQwJTtcXG4gICAgcGFkZGluZy1sZWZ0OiA4cmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXG59XFxuXFxuLmFsbC1wcm9qZWN0cyA+IGJ1dHRvbiB7XFxuICAgIGhlaWdodDogMi43cmVtO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1jb2xvcjogIzkyQzFCMjtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgY29sb3I6ICM5MkMxQjI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi5zaWRlYmFyLWljb25zIHtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5pbnB1dC1wcm9qZWN0IHtcXG4gICAgcGFkZGluZy10b3A6IDRyZW07XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmlucHV0LXByb2plY3QgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwZnIgMS41ZnI7XFxuICAgIGhlaWdodDogM3JlbTtcXG59XFxuXFxuI2dldC1wcm9qZWN0LXRpdGxlIHtcXG4gICAgYmFja2dyb3VuZDogI0VGRUZFRjtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiAjOTJDMUIyO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MkMxQjI7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0LWJ0biB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkyQzFCMjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdC1idG46aG92ZXIge1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6ICM2ZWI0OWY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogIzZlYjQ5ZjtcXG59XFxuXFxuLnByb2plY3QtdGl0bGUge1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDNyZW07XFxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxMHB4O1xcbn1cXG5cXG4jYWRkLXRhc2stYnRuIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMy41ZnI7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIHBhZGRpbmc6IDEuMnJlbSAxLjNyZW0gMS4ycmVtIDEuM3JlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmViNDlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXItcmFkaXVzOiA0dnc7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDNyZW07XFxufVxcblxcbiNhZGQtdGFzay1idG4gPiBkaXYge1xcbiAgICBhbGlnbi1zZWxmOmNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBsZWZ0O1xcbn1cXG5cXG4jYWRkLXRhc2stYnRuID4gaW1nIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI2FkZC10YXNrLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OEM0QUQ7XFxufVxcblxcbi5jaGFuZ2UtbmFtZS1jb250YWluZXIge1xcbiAgICBwYWRkaW5nLXRvcDogMi41cmVtO1xcbn1cXG5cXG4jbmV3LXByb2plY3QtdGl0bGUge1xcbiAgICBoZWlnaHQ6IDMuNXJlbTtcXG4gICAgd2lkdGg6IDI0cmVtO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZlYjQ5ZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMnZ3O1xcbn1cXG5cXG4uYnRuLWNvbnRhaW5lcnMge1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG59XFxuXFxuI3NhdmUtYnRuLFxcbiNjYW5jZWwtYnRuIHtcXG4gICAgcGFkZGluZzogMC41cmVtIDAuN3JlbSAwLjVyZW0gMC43cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xcbiAgICBib3JkZXItcmFkaXVzOjAuNXZ3O1xcbn1cXG5cXG4jc2F2ZS1idG4ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhFRDBERTtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4jY2FuY2VsLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MkMxQjI7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuI3NhdmUtYnRuOmhvdmVyLFxcbiNjYW5jZWwtYnRuOmhvdmVyIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRhc2stZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDNyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDdyZW07XFxuICAgIGxlZnQ6IDRyZW07XFxuICAgIGhlaWdodDogMTNyZW07XFxuICAgIHdpZHRoOiA0NSU7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4udGFzay1mb3JtID4gaW5wdXQsXFxuLnRhc2stZm9ybSA+IHNlbGVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZWI0OWY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3Z3O1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZWI0OWY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3Z3O1xcbn1cXG5cXG4jY2FuY2VsLXRhc2stYnRuLFxcbiNzdWJtaXQtdGFzay1idG4sXFxuI3NhdmUtdGFzay1idG4ge1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC43cmVtIDAuNXJlbSAwLjdyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbiNzdWJtaXQtdGFzay1idG46aG92ZXIsXFxuI3NhdmUtdGFzay1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzVEN0JBO1xcbn1cXG5cXG4jY2FuY2VsLXRhc2stYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZlYjQ5ZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjN2dzsgIFxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7IFxcbn1cXG5cXG4jc3VibWl0LXRhc2stYnRuLFxcbiNzYXZlLXRhc2stYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZlYjQ5ZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjN2dzsgIFxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7IFxcbn1cXG5cXG4jY2FuY2VsLXRhc2stYnRuIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICAgIGNvbG9yOiAjNmViNDlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiAjNmViNDlmO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjN2dzsgXFxufVxcblxcbi50YXNrLWNvbnRhaW5lci1kaXNwbGF5IHtcXG4gICAgaGVpZ2h0OiA5JTtcXG59XFxuXFxuLnRhc2stYmFja2dyb3VuZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAzLjhyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC43ZnIgNGZyIDFmciAwLjdmciA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzay1iYWNrZ3JvdW5kID4gaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgd2lkdGg6IDIuMTVlbTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjNmViNDlmO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBoZWlnaHQ6IDIuMTVlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4xNWVtO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMDc1ZW0pO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7ICAgIFxcbiAgICBib3JkZXItcmFkaXVzOiAzdnc7XFxufVxcblxcbi50YXNrLWJhY2tncm91bmQgPiBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgd2lkdGg6IDAuNjVlbTtcXG4gICAgaGVpZ2h0OiAwLjY1ZW07XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZWI0OWYgIWltcG9ydGFudDtcXG4gICAgdHJhbnNpdGlvbjogMTIwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udG9kby1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgICBcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi50YXNrQnRucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XFxuICAgIGdhcDogNHB4O1xcbn1cXG5cXG4udGFza0J0bnMgPiBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4udGFza0J0bnMgPiBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xcbn0gXFxuXFxuI2RhdGUtZGlzcGxheSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgYWxsUHJvamVjdHMsZGlzYWJsZVByZXZpb3VzRGF0ZXMsIGRlbGV0ZVRhc2ssIGZpbmRJbmRleCB9IGZyb20gXCIuL2xvZ2ljXCI7XG5cbmZ1bmN0aW9uIGdldFByb2pOYW1lKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2V0LXByb2plY3QtdGl0bGUnKTtcbn07XG5cbmZ1bmN0aW9uIGdldFByb2pUaXRsZSgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGl0bGUnKS50ZXh0Q29udGVudDtcbn07XG5cbmZ1bmN0aW9uIGdldE5ld1R0bGUoKXtcbiAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1wcm9qZWN0LXRpdGxlJyk7IFxufTtcblxuY29uc3QgZ2V0VGFza0luZm8gPSAoKSA9PiB7XG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZXQtdGFzay1uYW1lJykudmFsdWU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2V0LWRlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZXQtZGF0ZScpLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZXQtcHJpb3JpdHktbGlzdCcpLnZhbHVlOyBcblxuICAgIHJldHVybiB7XG4gICAgICAgIHRhc2ssXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBkYXRlLFxuICAgICAgICBwcmlvcml0eUxpc3RcbiAgICB9O1xufTtcblxuY29uc3QgVUkgPSAoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIG1ha2VQcm9qZWN0QnRuKG5hbWUpIHtcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJyxgJHtuYW1lfS1wcm9qZWN0LWJ0bmApO1xuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1idG4nKTtcbiAgICAgICAgYnRuLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICBcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLXByb2plY3RzJyk7XG4gICAgICAgIHByb2plY3RzLmFwcGVuZENoaWxkKGJ0bik7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlclNhdmVkVGFzaygpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gZmluZEluZGV4LnByb2plY3RJbmRleCgpXG4gICAgICAgIGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0ucHJvamVjdERldGFpbHMuYWxsVGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgIHRhc2tEaXNwbGF5KHRhc2sudGFza05hbWUsIHRhc2suZGVzY3JpcHRpb24sIHRhc2suZHVlRGF0ZSwgdGFzay5wcmlvcml0eUxpc3QsIHRhc2suY2hlY2tCb3gpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gbWFrZUFkZFRhc2tCdG4oKSB7XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdCcpO1xuICAgIFxuICAgICAgICBjb25zdCBjb250YWluZXJUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lclRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyLXRhc2stYnRuJyk7XG4gICAgXG4gICAgICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYWRkVGFza0J0bi5zZXRBdHRyaWJ1dGUoJ2lkJywnYWRkLXRhc2stYnRuJylcbiAgICAgICAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzay1idG4nKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGFkZEljb25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgYWRkSWNvbkltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsJy9zcmMvaWNvbnMvbWF0ZXJpYWwtc3ltYm9sc19hZGQuc3ZnJyk7XG4gICAgICAgIGFkZEljb25JbWcuY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stYnRuJyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcbiAgICBcbiAgICAgICAgYWRkVGFza0J0bi5hcHBlbmRDaGlsZChhZGRJY29uSW1nKTtcbiAgICAgICAgYWRkVGFza0J0bi5hcHBlbmRDaGlsZChkaXYpXG4gICAgICAgIGNvbnRhaW5lclRhc2tCdG4uYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG4gICAgICAgIHRvZG9MaXN0LmFwcGVuZENoaWxkKGNvbnRhaW5lclRhc2tCdG4pO1xuICAgIH07XG4gICAgXG4gICAgZnVuY3Rpb24gaGVhZGVyRGlzcGxheShuYW1lKSB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIHJlbmRlclByb2pUdGxlKGhlYWRlciwgbmFtZSk7XG4gICAgfTtcbiAgICBcbiAgICBmdW5jdGlvbiByZW5kZXJQcm9qVHRsZShhcHBlbmQsIHByb2pUdGxlKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZScpO1xuICAgICAgICBwcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsIHByb2pUdGxlKTtcbiAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvalR0bGU7XG4gICAgICAgIGFwcGVuZC5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICAgIH07XG4gICAgXG4gICAgZnVuY3Rpb24gdGFza0Zvcm0oKSB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcbiAgICBcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCd0YXNrLWZvcm0nKTtcbiAgICBcbiAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRhc2suc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpO1xuICAgICAgICB0YXNrLnNldEF0dHJpYnV0ZSgnaWQnLCdnZXQtdGFzay1uYW1lJyk7XG4gICAgICAgIHRhc2suc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsJ1Rhc2sgbmFtZScpO1xuICAgIFxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKTtcbiAgICAgICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsJ2dldC1kZXNjcmlwdGlvbicpO1xuICAgICAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywnRGVzY3JpcHRpb24nKTtcbiAgICBcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywnZGF0ZScpO1xuICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCdnZXQtZGF0ZScpO1xuICAgICAgICBkaXNhYmxlUHJldmlvdXNEYXRlcyhkYXRlKTtcbiAgICBcbiAgICAgICAgY29uc3QgcHJpb3JpdHlMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIHByaW9yaXR5TGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywnZ2V0LXByaW9yaXR5LWxpc3QnKTtcbiAgICBcbiAgICAgICAgY29uc3QgdXJnZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIHVyZ2VudC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywndXJnZW50Jyk7XG4gICAgICAgIHVyZ2VudC50ZXh0Q29udGVudCA9ICd1cmdlbnQnO1xuICAgIFxuICAgICAgICBjb25zdCBpbXBvcnRhbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgaW1wb3J0YW50LnNldEF0dHJpYnV0ZSgndmFsdWUnLCdpbXBvcnRhbnQnKTtcbiAgICAgICAgaW1wb3J0YW50LnRleHRDb250ZW50ID0gJ2ltcG9ydGFudCc7XG4gICAgXG4gICAgICAgIGNvbnN0IG5vdEltcG9ydGFudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBub3RJbXBvcnRhbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsJ25vdC1pbXBvcnRhbnQnKTtcbiAgICAgICAgbm90SW1wb3J0YW50LnRleHRDb250ZW50ID0gJ25vdC1pbXBvcnRhbnQnO1xuICAgIFxuICAgICAgICBjb25zdCBidG5Db250YWluZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdzdWJtaXQnKTtcbiAgICAgICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCdzdWJtaXQtdGFzay1idG4nKTtcbiAgICAgICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG4gICAgXG4gICAgICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCdpZCcsJ2NhbmNlbC10YXNrLWJ0bicpO1xuICAgICAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnY2FuY2VsJztcbiAgICBcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHRhc2spO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUxpc3QpO1xuICAgICAgICBwcmlvcml0eUxpc3QuYXBwZW5kQ2hpbGQodXJnZW50KTtcbiAgICAgICAgcHJpb3JpdHlMaXN0LmFwcGVuZENoaWxkKGltcG9ydGFudCk7XG4gICAgICAgIHByaW9yaXR5TGlzdC5hcHBlbmRDaGlsZChub3RJbXBvcnRhbnQpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcnMpO1xuICAgICAgICBidG5Db250YWluZXJzLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG4gICAgICAgIGJ0bkNvbnRhaW5lcnMuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlVUlUYXNrQnRuKCkge1xuICAgICAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lci10YXNrLWJ0bicpO1xuICAgICAgICBhZGRUYXNrQnRuLnJlbW92ZSgpO1xuICAgICAgICBtYWtlQWRkVGFza0J0bigpO1xuICAgIH07XG4gICAgXG4gICAgZnVuY3Rpb24gdGFza0Rpc3BsYXkodGFzaywgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCBjaGVja0JveCkge1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdCcpO1xuICAgIFxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGFpbmVyLWRpc3BsYXknKTtcbiAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgdGFzayk7XG4gICAgXG4gICAgICAgIGNvbnN0IGJnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJnLmNsYXNzTGlzdC5hZGQoJ3Rhc2stYmFja2dyb3VuZCcpO1xuICAgIFxuICAgICAgICBjb25zdCBjaGVja0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjaGVja0xpc3Quc2V0QXR0cmlidXRlKCd0eXBlJywnY2hlY2tib3gnKTtcbiAgICAgICAgY2hlY2tMaXN0LnNldEF0dHJpYnV0ZSgnaWQnLCB0YXNrKTtcbiAgICAgICAgY2hlY2tMaXN0LmNsYXNzTGlzdC5hZGQoJ2NoZWNrLWJveCcpO1xuICAgICAgICBjaGVja0JveCA9PSAnY2hlY2tlZCcgPyBjaGVja0xpc3QuY2hlY2tlZCA9IHRydWUgOiBmYWxzZTsgIFxuXG4gICAgICAgIGNvbnN0IHRhc2tEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgdGFza0Rpc3BsYXkuc2V0QXR0cmlidXRlKCdmb3InLHRhc2spO1xuICAgIFxuICAgICAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGgzLnNldEF0dHJpYnV0ZSgnaWQnLCd0YXNrLW5hbWUnKTtcbiAgICAgICAgaDMudGV4dENvbnRlbnQgPSB0YXNrO1xuICAgIFxuICAgICAgICBjb25zdCBkZXNjRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZXNjRGlzcGxheS5zZXRBdHRyaWJ1dGUoJ2lkJywnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgZGVzY0Rpc3BsYXkudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcbiAgICBcbiAgICAgICAgY29uc3QgZGF0ZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGF0ZURpc3BsYXkuc2V0QXR0cmlidXRlKCdpZCcsJ2RhdGUtZGlzcGxheScpO1xuICAgICAgICBkYXRlRGlzcGxheS50ZXh0Q29udGVudCA9IGRhdGU7XG4gICAgXG4gICAgICAgIGNvbnN0IHRhc2tCdG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tCdG5zLmNsYXNzTGlzdC5hZGQoJ3Rhc2tCdG5zJyk7XG4gICAgXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKCdpZCcsJ2RlbGV0ZS10YXNrJyk7XG4gICAgICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScsIHRhc2spO1xuICAgICAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGRlbGV0ZUljb24uc2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnLCB0YXNrKTtcbiAgICAgICAgZGVsZXRlSWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywnZGVsZXRlLWljb24nKTtcbiAgICAgICAgZGVsZXRlSWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsJy9zcmMvaWNvbnMvYmlfdHJhc2gtZmlsbC5zdmcnKTtcbiAgICBcbiAgICAgICAgY29uc3QgZWRpdFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZWRpdFRhc2tCdG4uc2V0QXR0cmlidXRlKCdpZCcsJ2VkaXQtdGFzaycpO1xuICAgICAgICBlZGl0VGFza0J0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScsIHRhc2spO1xuICAgICAgICBjb25zdCBlZGl0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBlZGl0SWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywnZWRpdC1pY29uJyk7XG4gICAgICAgIGVkaXRJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywnL3NyYy9pY29ucy90YWJsZXJfZWRpdC5zdmcnKTtcbiAgICAgICAgZWRpdEljb24uc2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnLCB0YXNrKTtcblxuICAgICAgICBwcmlvcml0eUNvbG9yKHByaW9yaXR5LCBjaGVja0xpc3QsIGRhdGVEaXNwbGF5KTtcbiAgICBcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYmcpO1xuICAgICAgICBiZy5hcHBlbmRDaGlsZChjaGVja0xpc3QpO1xuICAgICAgICBiZy5hcHBlbmRDaGlsZCh0YXNrRGlzcGxheSk7XG4gICAgICAgIGJnLmFwcGVuZENoaWxkKGRhdGVEaXNwbGF5KTtcbiAgICAgICAgYmcuYXBwZW5kQ2hpbGQodGFza0J0bnMpO1xuICAgICAgICB0YXNrQnRucy5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICAgICAgICBkZWxldGVCdG4uYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XG4gICAgICAgIHRhc2tCdG5zLmFwcGVuZENoaWxkKGVkaXRUYXNrQnRuKTtcbiAgICAgICAgZWRpdFRhc2tCdG4uYXBwZW5kQ2hpbGQoZWRpdEljb24pO1xuICAgICAgICB0YXNrRGlzcGxheS5hcHBlbmRDaGlsZChoMyk7XG4gICAgICAgIHRhc2tEaXNwbGF5LmFwcGVuZENoaWxkKGRlc2NEaXNwbGF5KTtcbiAgICB9O1xuICAgIFxuICAgIGZ1bmN0aW9uIHByaW9yaXR5Q29sb3IocHJpb3JpdHksIGNoZWNrQm94LCBkYXRlKSB7XG4gICAgICAgIGlmIChwcmlvcml0eSA9PSAnbm90LWltcG9ydGFudCcpIHtcbiAgICAgICAgICAgIGNoZWNrQm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZDNkM2QzJztcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJpb3JpdHkgPT0gJ3VyZ2VudCcpIHtcbiAgICAgICAgICAgIGNoZWNrQm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjRjY1QzVDJztcbiAgICAgICAgICAgIGRhdGUuc3R5bGUuY29sb3IgPSAnI0Y2NUM1Qyc7XG4gICAgICAgIH0gaWYgKHByaW9yaXR5ID09ICdpbXBvcnRhbnQnKSB7XG4gICAgICAgICAgICBjaGVja0JveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0Y2RDM1Qyc7XG4gICAgICAgICAgICBkYXRlLnN0eWxlLmNvbG9yID0gJyNGNkQzNUMnO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGVtcHR5VG9Eb0xpc3QoKSB7XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdCcpO1xuICAgICAgICB0b2RvTGlzdC50ZXh0Q29udGVudCA9ICcnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVNhdmVCdG4oKSB7XG4gICAgICAgIGNvbnN0IHNhdmVUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHNhdmVUYXNrQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCdzYXZlLXRhc2stYnRuJyk7XG4gICAgICAgIHNhdmVUYXNrQnRuLnRleHRDb250ZW50ID0gJ1NBVkUnO1xuICAgICAgICByZXR1cm4gc2F2ZVRhc2tCdG47XG4gICAgfTtcbiAgICBcbiAgICBmdW5jdGlvbiByZXBsYWNlQnRucygpIHtcbiAgICAgICAgY29uc3Qgc3VibWl0VGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQtdGFzay1idG4nKTtcbiAgICAgICAgY29uc3Qgc2F2ZVRhc2tCdG4gPSBjcmVhdGVTYXZlQnRuKCk7XG4gICAgICAgIHNhdmVUYXNrQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCdzYXZlLXRhc2stYnRuJyk7XG4gICAgICAgIHN1Ym1pdFRhc2tCdG4ucmVwbGFjZVdpdGgoc2F2ZVRhc2tCdG4pO1xuICAgIH07XG4gICAgXG4gICAgZnVuY3Rpb24gY3VycmVudFRhc2tJbmZvKG5hbWVUYXNrKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IGZpbmRJbmRleC5wcm9qZWN0SW5kZXgoKTtcbiAgICAgICAgY29uc3QgdGFza0luZGV4ID0gZmluZEluZGV4LnRhc2tJbmRleChuYW1lVGFzayk7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBhbGxQcm9qZWN0c1twcm9qZWN0SW5kZXhdLnByb2plY3REZXRhaWxzLmFsbFRhc2tzW3Rhc2tJbmRleF0udGFza05hbWU7XG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSBhbGxQcm9qZWN0c1twcm9qZWN0SW5kZXhdLnByb2plY3REZXRhaWxzLmFsbFRhc2tzW3Rhc2tJbmRleF0uZGVzY3JpcHRpb247XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBhbGxQcm9qZWN0c1twcm9qZWN0SW5kZXhdLnByb2plY3REZXRhaWxzLmFsbFRhc2tzW3Rhc2tJbmRleF0uZHVlRGF0ZTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBhbGxQcm9qZWN0c1twcm9qZWN0SW5kZXhdLnByb2plY3REZXRhaWxzLmFsbFRhc2tzW3Rhc2tJbmRleF0ucHJpb3JpdHlMaXN0O1xuICAgICAgICBjb25zdCBnZXRUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dldC10YXNrLW5hbWUnKTtcbiAgICAgICAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2V0LWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIGNvbnN0IGdldERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2V0LWRhdGUnKTtcbiAgICAgICAgY29uc3QgZ2V0UHJpb3JpdHlMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dldC1wcmlvcml0eS1saXN0Jyk7IFxuICAgICAgICBnZXRUYXNrLnZhbHVlID0gbmFtZTtcbiAgICAgICAgZ2V0RGVzY3JpcHRpb24udmFsdWUgPSBkZXRhaWxzO1xuICAgICAgICBnZXREYXRlLnZhbHVlID0gZHVlRGF0ZTtcbiAgICAgICAgZ2V0UHJpb3JpdHlMaXN0LnZhbHVlID0gcHJpb3JpdHk7XG4gICAgfTtcbiAgICBcbiAgICBmdW5jdGlvbiByZW1vdmVEYXRhTmFtZUF0dHJpYnV0ZShuYW1lT2ZUYXNrKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IGZpbmRJbmRleC5wcm9qZWN0SW5kZXgoKTtcbiAgICAgICAgY29uc3QgdGFza0luZGV4ID0gZmluZEluZGV4LnRhc2tJbmRleChuYW1lT2ZUYXNrKTsgXG4gICAgICAgIGNvbnN0IGN1cnJlbnRUYXNrTmFtZSA9IGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0ucHJvamVjdERldGFpbHMuYWxsVGFza3NbdGFza0luZGV4XS50YXNrTmFtZTtcbiAgICAgICAgY29uc3QgZGF0YUF0dHJpYnV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW5hbWU9JyR7Y3VycmVudFRhc2tOYW1lfSddYCk7XG4gICAgICAgIGRhdGFBdHRyaWJ1dGUucmVtb3ZlKCk7XG4gICAgfTtcbiAgICBcbiAgICBmdW5jdGlvbiByZW1vdmVUYXNrRm9ybSgpIHtcbiAgICAgICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1mb3JtJyk7XG4gICAgICAgIHRhc2tGb3JtLnJlbW92ZSgpO1xuICAgIH07XG4gICAgXG4gICAgZnVuY3Rpb24gZGVsZXRlVGFza0Rpc3BsYXkobmFtZU9mVGFzaykge1xuICAgICAgICByZW1vdmVEYXRhTmFtZUF0dHJpYnV0ZShuYW1lT2ZUYXNrKTtcbiAgICAgICAgZGVsZXRlVGFzayhuYW1lT2ZUYXNrKTtcbiAgICB9O1xuICAgIFxuICAgIGZ1bmN0aW9uIGNoYW5nZVByb2pOYW1lKG5hbWUpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuICAgIFxuICAgICAgICBjb25zdCBjaGFuZ2VOYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNoYW5nZU5hbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2hhbmdlLW5hbWUtY29udGFpbmVyJyk7XG4gICAgXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIG5ld1Byb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywnbmV3LXByb2plY3QtdGl0bGUnKTtcbiAgICAgICAgbmV3UHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgIG5ld1Byb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgbmFtZSk7XG4gICAgICAgIGhlYWRlci5yZXBsYWNlQ2hpbGQobmV3UHJvamVjdFRpdGxlLCBoZWFkZXIuZmlyc3RFbGVtZW50Q2hpbGQpO1xuICAgIFxuICAgICAgICBjb25zdCBidG5Db250YWluZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJ0bkNvbnRhaW5lcnMuY2xhc3NMaXN0LmFkZCgnYnRuLWNvbnRhaW5lcnMnKTtcbiAgICBcbiAgICAgICAgY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBzYXZlQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCdzYXZlLWJ0bicpO1xuICAgICAgICBzYXZlQnRuLnRleHRDb250ZW50ID0gJ1NBVkUnO1xuICAgIFxuICAgICAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NBTkNFTCc7XG4gICAgICAgIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywnY2FuY2VsLWJ0bicpO1xuICAgIFxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY2hhbmdlTmFtZUNvbnRhaW5lcik7XG4gICAgICAgIGNoYW5nZU5hbWVDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdFRpdGxlKTtcbiAgICAgICAgY2hhbmdlTmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChidG5Db250YWluZXJzKTtcbiAgICAgICAgYnRuQ29udGFpbmVycy5hcHBlbmRDaGlsZChzYXZlQnRuKTtcbiAgICAgICAgYnRuQ29udGFpbmVycy5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuICAgIH07XG4gICAgXG4gICAgZnVuY3Rpb24gbmV3VHRsZUJ0bihjdXJyZW50UHJvaikge1xuICAgICAgICBjb25zdCBuZXdUaXRsZSA9IGdldE5ld1R0bGUoKTsgXG4gICAgICAgIGNvbnN0IENoYW5nZU5hbWVidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtjdXJyZW50UHJvan0tcHJvamVjdC1idG5gKTtcbiAgICAgICAgQ2hhbmdlTmFtZWJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgIENoYW5nZU5hbWVidG4uc2V0QXR0cmlidXRlKCdpZCcsYCR7bmV3VGl0bGUudmFsdWV9LXByb2plY3QtYnRuYCk7XG4gICAgICAgIENoYW5nZU5hbWVidG4udGV4dENvbnRlbnQgPSBuZXdUaXRsZS52YWx1ZTtcbiAgICB9O1xuICAgIFxuICAgIGZ1bmN0aW9uIHJlbW92ZVByb2plY3RCdG4oKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRpdGxlJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3Byb2plY3RUaXRsZS50ZXh0Q29udGVudH0tcHJvamVjdC1idG5gKTtcbiAgICAgICAgcHJvamVjdFRpdGxlQnRuLnJlbW92ZSgpO1xuICAgIH07XG4gICAgXG4gICAgZnVuY3Rpb24gZW1wdHlUb0RvUGFnZSgpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgZW1wdHlUb0RvTGlzdCgpO1xuICAgIH07XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlU2F2ZUJ0bixcbiAgICAgICAgY3VycmVudFRhc2tJbmZvLFxuICAgICAgICBjaGFuZ2VQcm9qTmFtZSxcbiAgICAgICAgZGVsZXRlVGFza0Rpc3BsYXksXG4gICAgICAgIGVtcHR5VG9Eb0xpc3QsXG4gICAgICAgIGVtcHR5VG9Eb1BhZ2UsXG4gICAgICAgIG1ha2VQcm9qZWN0QnRuLFxuICAgICAgICBtYWtlQWRkVGFza0J0bixcbiAgICAgICAgbmV3VHRsZUJ0bixcbiAgICAgICAgcmVtb3ZlRGF0YU5hbWVBdHRyaWJ1dGUsXG4gICAgICAgIHJlbW92ZVByb2plY3RCdG4sXG4gICAgICAgIHJlbW92ZVRhc2tGb3JtLFxuICAgICAgICByZXBsYWNlQnRucyxcbiAgICAgICAgcmVuZGVyU2F2ZWRUYXNrLFxuICAgICAgICBoZWFkZXJEaXNwbGF5LFxuICAgICAgICBwcmlvcml0eUNvbG9yLFxuICAgICAgICB0YXNrRm9ybSxcbiAgICAgICAgdGFza0Rpc3BsYXksXG4gICAgICAgIHVwZGF0ZVVJVGFza0J0bixcbiAgICB9XG59KSgpO1xuXG5leHBvcnQgeyBnZXRUYXNrSW5mbywgZ2V0UHJvak5hbWUsIGdldE5ld1R0bGUsIGdldFByb2pUaXRsZSwgVUkgfSIsImltcG9ydCB7IFVJLCBnZXRQcm9qVGl0bGUsIGdldE5ld1R0bGUsIGdldFByb2pOYW1lLCBnZXRUYXNrSW5mbyB9IGZyb20gXCIuL0RPTVwiO1xuaW1wb3J0IHsgYWRkUHJvamVjdCwgZGVsZXRlUHJvamVjdCwgc2F2ZU5hbWUsIGFsbFByb2plY3RzLCBjcmVhdGVUYXNrLCBlZGl0VGFzaywgc2F2ZUNoZWNrQm94LCB0b2RheUFuZFVwY29taW5nVGFzayB9IGZyb20gXCIuL2xvZ2ljXCI7XG5pbXBvcnQgeyBzYXZlRGF0YSB9IGZyb20gXCIuL2xvY2FsLXN0b3JhZ2VcIjtcbmltcG9ydCB7IHB1YnN1YiB9IGZyb20gJy4vcHVic3ViLmpzJztcblxucHVic3ViLnN1YnNjcmliZSgnYWRkUHJvaicsIGFkZFByb2plY3QpO1xucHVic3ViLnN1YnNjcmliZSgnZGxldGVQcm9qJyxkZWxldGVQcm9qZWN0KTtcbnB1YnN1Yi5zdWJzY3JpYmUoJ3NhdmVOYW1lJywgc2F2ZU5hbWUpO1xucHVic3ViLnN1YnNjcmliZSgnc2F2ZURhdGEnLCBzYXZlRGF0YSk7XG5wdWJzdWIuc3Vic2NyaWJlKCdjcmVhdGVUYXNrJywgY3JlYXRlVGFzayk7XG5wdWJzdWIuc3Vic2NyaWJlKCdlZGl0VGFzaycsIGVkaXRUYXNrKTtcbnB1YnN1Yi5zdWJzY3JpYmUoJ3NhdmVCb3gnLCBzYXZlQ2hlY2tCb3gpO1xuXG5jb25zdCBET01FdmVudHMgPSAoKSA9PiB7XG4gICAgY29uc3QgZCA9IGRvY3VtZW50O1xuICAgIGxldCBjdXJyZW50UHJvajtcbiAgICBsZXQgdGFzaztcbiAgICBsZXQgbmV3SW5mbztcbiAgICBsZXQgYnRuO1xuICAgIGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZihlLnRhcmdldC5tYXRjaGVzKCcuYWRkLXByb2plY3QtYnRuJykgfHwgZS50YXJnZXQubWF0Y2hlcygnI2FkZC1pY29uJykpIHtcbiAgICAgICAgICAgIGNvbnN0IGdldFByb2pUaXRsZSA9IGdldFByb2pOYW1lKCk7XG4gICAgICAgICAgICBwdWJzdWIucHVibGlzaCgnYWRkUHJvaicsIGdldFByb2pUaXRsZS52YWx1ZSk7XG4gICAgICAgICAgICBVSS5tYWtlUHJvamVjdEJ0bihnZXRQcm9qVGl0bGUudmFsdWUpO1xuICAgICAgICAgICAgZ2V0UHJvalRpdGxlLnZhbHVlID0gJyc7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhbGxQcm9qZWN0cyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJy5kZWxldGUtcHJvamVjdC1idG4nKSkge1xuICAgICAgICAgICAgcHVic3ViLnB1Ymxpc2goJ2RsZXRlUHJvaicpO1xuICAgICAgICAgICAgcHVic3ViLnB1Ymxpc2goJ3NhdmVEYXRhJyk7XG4gICAgICAgICAgICBVSS5yZW1vdmVQcm9qZWN0QnRuKCk7XG4gICAgICAgICAgICBVSS5lbXB0eVRvRG9QYWdlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoYC5wcm9qZWN0LWJ0bmApKSB7XG4gICAgICAgICAgICBpZiAoYnRuICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBidG4uc3R5bGUuY29sb3IgPSAnIzkyQzFCMic7XG4gICAgICAgICAgICAgICAgYnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2UudGFyZ2V0LnRleHRDb250ZW50fS1wcm9qZWN0LWJ0bmApO1xuICAgICAgICAgICAgYnRuLnN0eWxlLmNvbG9yID0gJ3doaXRlJztcbiAgICAgICAgICAgIGJ0bi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzkyQzFCMidcbiAgICAgICAgICAgIFVJLmhlYWRlckRpc3BsYXkoZS50YXJnZXQudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgVUkuZW1wdHlUb0RvTGlzdCgpO1xuICAgICAgICAgICAgVUkucmVuZGVyU2F2ZWRUYXNrKCk7XG4gICAgICAgICAgICBVSS5tYWtlQWRkVGFza0J0bigpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCcuYWRkLXRhc2stYnRuJykpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIFVJLnRhc2tGb3JtKGdldFByb2pUaXRsZSgpKTtcbiAgICAgICAgfVxuICAgICAgICBpZihlLnRhcmdldC5tYXRjaGVzKCcucHJvamVjdC10aXRsZScpKSB7XG4gICAgICAgICAgICBVSS5jaGFuZ2VQcm9qTmFtZShlLnRhcmdldC50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICBjdXJyZW50UHJvaiA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKGAke2UudGFyZ2V0LnRleHRDb250ZW50fS1idG5gKSkge1xuICAgICAgICAgICAgaGVhZGVyRGlzcGxheShlLnRhcmdldC50ZXh0Q29udGVudCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJyNzYXZlLWJ0bicpKSB7XG4gICAgICAgICAgICBwdWJzdWIucHVibGlzaCgnc2F2ZU5hbWUnLCBjdXJyZW50UHJvaik7XG4gICAgICAgICAgICBwdWJzdWIucHVibGlzaCgnc2F2ZURhdGEnKTtcbiAgICAgICAgICAgIFVJLm5ld1R0bGVCdG4oY3VycmVudFByb2opO1xuICAgICAgICAgICAgVUkuaGVhZGVyRGlzcGxheShnZXROZXdUdGxlKCkudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCcjY2FuY2VsLWJ0bicpKSB7XG4gICAgICAgICAgICBVSS5oZWFkZXJEaXNwbGF5KGN1cnJlbnRQcm9qKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnI3N1Ym1pdC10YXNrLWJ0bicpKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBsZXQgcHJvalRpdGxlID0gZ2V0UHJvalRpdGxlKCk7XG4gICAgICAgICAgICBuZXdJbmZvID0gZ2V0VGFza0luZm8oKTtcbiAgICAgICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdjcmVhdGVUYXNrJywgcHJvalRpdGxlLCBuZXdJbmZvLnRhc2ssIG5ld0luZm8uZGVzY3JpcHRpb24sIG5ld0luZm8uZGF0ZSwgbmV3SW5mby5wcmlvcml0eUxpc3QpO1xuICAgICAgICAgICAgVUkudGFza0Rpc3BsYXkobmV3SW5mby50YXNrLCBuZXdJbmZvLmRlc2NyaXB0aW9uLCBuZXdJbmZvLmRhdGUsIG5ld0luZm8ucHJpb3JpdHlMaXN0KTtcbiAgICAgICAgICAgIFVJLmhlYWRlckRpc3BsYXkocHJvalRpdGxlKTtcbiAgICAgICAgICAgIFVJLnVwZGF0ZVVJVGFza0J0bigpO1xuICAgICAgICAgICAgcHVic3ViLnB1Ymxpc2goJ3NhdmVEYXRhJywgc2F2ZURhdGEpOyBcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnI2NhbmNlbC10YXNrLWJ0bicpKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBVSS5oZWFkZXJEaXNwbGF5KGdldFByb2pUaXRsZSgpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnI2RlbGV0ZS10YXNrJykgfHwgZS50YXJnZXQubWF0Y2hlcygnI2RlbGV0ZS1pY29uJykpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIFVJLmRlbGV0ZVRhc2tEaXNwbGF5KGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJykpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCcjZWRpdC10YXNrJykgfHwgZS50YXJnZXQubWF0Y2hlcygnI2VkaXQtaWNvbicpKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0YXNrID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKTtcbiAgICAgICAgICAgIFVJLnRhc2tGb3JtKCk7XG4gICAgICAgICAgICBVSS5jdXJyZW50VGFza0luZm8odGFzayk7XG4gICAgICAgICAgICBVSS5jcmVhdGVTYXZlQnRuKCk7XG4gICAgICAgICAgICBVSS5yZXBsYWNlQnRucyh0YXNrKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnI3NhdmUtdGFzay1idG4nKSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgVUkucmVtb3ZlRGF0YU5hbWVBdHRyaWJ1dGUodGFzayk7XG4gICAgICAgICAgICBwdWJzdWIucHVibGlzaCgnZWRpdFRhc2snLCB0YXNrKTtcbiAgICAgICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdzYXZlRGF0YScpO1xuICAgICAgICAgICAgbmV3SW5mbyA9IGdldFRhc2tJbmZvKCk7XG4gICAgICAgICAgICBVSS50YXNrRGlzcGxheShuZXdJbmZvLnRhc2ssIG5ld0luZm8uZGVzY3JpcHRpb24sIG5ld0luZm8uZGF0ZSwgbmV3SW5mby5wcmlvcml0eUxpc3QpO1xuICAgICAgICAgICAgVUkucmVtb3ZlVGFza0Zvcm0oKTtcbiAgICAgICAgICAgIFVJLnVwZGF0ZVVJVGFza0J0bigpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnLnRvZGF5JykpIHtcbiAgICAgICAgICAgIFVJLmVtcHR5VG9Eb1BhZ2UoKTtcbiAgICAgICAgICAgIFVJLmhlYWRlckRpc3BsYXkoJ1RPREFZJyk7XG4gICAgICAgICAgICB0b2RheUFuZFVwY29taW5nVGFzaygpLmRpc3BsYXlUb2RheVRhc2tzKCk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCcudXBjb21pbmcnKSkge1xuICAgICAgICAgICAgVUkuZW1wdHlUb0RvUGFnZSgpO1xuICAgICAgICAgICAgVUkuaGVhZGVyRGlzcGxheSgnVVBDT01JTkcnKTtcbiAgICAgICAgICAgIHRvZGF5QW5kVXBjb21pbmdUYXNrKCkuZGlzcGxheVVwY29taW5nVGFzaygpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIGQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJy5jaGVjay1ib3gnKSkge1xuICAgICAgICAgICAgbGV0IHRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkJykpO1xuICAgICAgICAgICAgcHVic3ViLnB1Ymxpc2goJ3NhdmVCb3gnLHRhc2ssIGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKSwgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yKTtcbiAgICAgICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdzYXZlRGF0YScpOyBcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuZXhwb3J0IHsgRE9NRXZlbnRzIH0iLCJpbXBvcnQgeyBhbGxQcm9qZWN0cyB9IGZyb20gXCIuL2xvZ2ljXCI7XG5cbmZ1bmN0aW9uIHNhdmVEYXRhKCkgeyBcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFsbFByb2plY3REYXRhXCIsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSk7XG4gICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFsbFByb2plY3REYXRhXCIpKTtcbn07XG5cbmV4cG9ydCB7IHNhdmVEYXRhIH1cbiIsImltcG9ydCB7IGdldFRhc2tJbmZvLCBnZXROZXdUdGxlLCBnZXRQcm9qVGl0bGUsIFVJIH0gZnJvbSBcIi4vRE9NLmpzXCI7XG5pbXBvcnQgeyBzYXZlRGF0YSB9IGZyb20gXCIuL2xvY2FsLXN0b3JhZ2UuanNcIjtcblxuY29uc3QgYWxsUHJvamVjdHMgPSBbXTtcblxuY29uc3QgcHJvamVjdE1hbmFnZW1lbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgYWRkUHJvamVjdCA9ICh0aXRsZSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gbWFrZVByb2plY3QodGl0bGUpO1xuICAgICAgICBhbGxQcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIH07XG5cbiAgICBjb25zdCBlZGl0UHJvamVjdE5hbWUgPSAoaSwgbmFtZSkgPT4ge1xuICAgICAgICAgYWxsUHJvamVjdHNbaV0ucHJvamVjdERldGFpbHMucHJvamVjdE5hbWUgPSBuYW1lXG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gKGkpID0+IHtcbiAgICAgICAgYWxsUHJvamVjdHMuc3BsaWNlKGksMSk7XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCB2aWV3UHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IG1ha2VQcm9qZWN0ID0gKHByb2plY3RUaXRsZSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0RGV0YWlscyA9IHtcbiAgICAgICAgICAgIHByb2plY3ROYW1lOiBwcm9qZWN0VGl0bGUsXG4gICAgICAgICAgICBhbGxUYXNrczogW11cbiAgICAgICAgfTtcbiAgICBcbiAgICAgICAgY29uc3QgdGFza01hbmFnZW1lbnQgPSBuZXcgdGFza09wZXJhdGlvbnMocHJvamVjdERldGFpbHMpO1xuICAgICAgICBjb25zdCBhZGRUYXNrID0gdGFza01hbmFnZW1lbnQuYWRkVGFzaztcbiAgICAgICAgY29uc3QgZGVsZXRlVGFzayA9IHRhc2tNYW5hZ2VtZW50LmRlbGV0ZVRhc2s7XG4gICAgICAgIGNvbnN0IGVkaXRUYXNrID0gdGFza01hbmFnZW1lbnQuZWRpdFRhc2tzO1xuICAgIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJvamVjdERldGFpbHMsXG4gICAgICAgICAgICBhZGRUYXNrLFxuICAgICAgICAgICAgZGVsZXRlVGFzayxcbiAgICAgICAgICAgIGVkaXRUYXNrLFxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhZGRQcm9qZWN0LFxuICAgICAgICBkZWxldGVQcm9qZWN0LFxuICAgICAgICB2aWV3UHJvamVjdHMsXG4gICAgICAgIGVkaXRQcm9qZWN0TmFtZVxuICAgIH07XG59O1xuXG5jb25zdCBwcm9qZWN0ID0gcHJvamVjdE1hbmFnZW1lbnQoKTtcblxuY2xhc3MgdGFza09wZXJhdGlvbnMge1xuICAgIGNvbnN0cnVjdG9yKHByb2plY3QpICB7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgfVxuXG4gICAgYWRkVGFzayA9IChuYW1lLCBkZXRhaWxzLCBkYXRlLCBwcmlvcml0eUxpc3QsIGNoZWNrKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gbmV3IHRhc2sobmFtZSwgZGV0YWlscywgZGF0ZSwgcHJpb3JpdHlMaXN0LCBjaGVjayk7XG5cbiAgICAgICAgdGhpcy5wcm9qZWN0LmFsbFRhc2tzLnB1c2godGFza0RldGFpbHMpO1xuICAgIH1cblxuICAgIGRlbGV0ZVRhc2soaSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0RGV0YWlscy5hbGxUYXNrcy5zcGxpY2UoaSwxKVxuICAgIH07XG59O1xuXG5jbGFzcyB0YXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0YXNrTmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5TGlzdCwgY2hlY2tCb3gpIHtcbiAgICAgICAgdGhpcy50YXNrTmFtZSA9IHRhc2tOYW1lO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHlMaXN0ID0gcHJpb3JpdHlMaXN0O1xuICAgICAgICB0aGlzLmNoZWNrQm94ID0gY2hlY2tCb3g7XG4gICAgfTtcblxuICAgIHNldCgpIHtcbiAgICAgICAgW3RoaXMudGFza05hbWUsIHRoaXMuZGVzY3JpcHRpb24sIHRoaXMuZHVlRGF0ZSwgdGhpcy5wcmlvcml0eUxpc3RdID0gdmFsdWUuc3BsaXQoXCIgXCIpO1xuICAgIH07XG59O1xuXG5jb25zdCBzdG9yZUNoZWNrQm94ID0gKG5hbWVPZlRhc2spID0+IHtcbiAgICBjb25zdCBuYW1lT2ZQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGl0bGUnKS50ZXh0Q29udGVudDtcbiAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBhbGxQcm9qZWN0cy5maW5kSW5kZXgocCA9PiBwLnByb2plY3REZXRhaWxzLnByb2plY3ROYW1lID09PSBuYW1lT2ZQcm9qZWN0KTtcbiAgICBjb25zdCB0YXNrSW5kZXggPSBhbGxQcm9qZWN0c1twcm9qZWN0SW5kZXhdLnByb2plY3REZXRhaWxzLmFsbFRhc2tzLmZpbmRJbmRleChwID0+IHAudGFza05hbWUgPT09IG5hbWVPZlRhc2spO1xuXG4gICAgZnVuY3Rpb24gY2hlY2soKSB7XG4gICAgICAgIGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0ucHJvamVjdERldGFpbHMuYWxsVGFza3NbdGFza0luZGV4XS5jaGVja0JveCA9ICdjaGVja2VkJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bmNoZWNrZWQoKSB7XG4gICAgICAgIGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0ucHJvamVjdERldGFpbHMuYWxsVGFza3NbdGFza0luZGV4XS5jaGVja0JveCA9ICd1bmNoZWNrZWQnO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4geyBjaGVjaywgdW5jaGVja2VkIH1cbn07XG5cbmZ1bmN0aW9uIHNhdmVDaGVja0JveChib3gsbmFtZU9mVGFzaykge1xuICAgIGNvbnN0IGNoZWNrQm94ID0gc3RvcmVDaGVja0JveChuYW1lT2ZUYXNrKTsgXG4gICAgaWYgKGJveC5jaGVja2VkID09IHRydWUpIHtcbiAgICAgICAgY2hlY2tCb3guY2hlY2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjaGVja0JveC51bmNoZWNrZWQoKTtcbiAgICB9XG59O1xuXG5mdW5jdGlvbiBhZGRQcm9qZWN0KG5hbWVPZlByb2plY3QpIHtcbiAgICBwcm9qZWN0LmFkZFByb2plY3QobmFtZU9mUHJvamVjdCk7XG4gICAgc2F2ZURhdGEoKTtcbn07XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoKSB7XG4gICAgY29uc3QgaW5kZXggPSBmaW5kSW5kZXgucHJvamVjdEluZGV4KCk7XG4gICAgcHJvamVjdC5kZWxldGVQcm9qZWN0KGluZGV4KTtcbn07XG5cbmNvbnN0IGZpbmRJbmRleCA9ICgoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEluZGV4ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBuYW1lID0gZ2V0UHJvalRpdGxlKCk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gYWxsUHJvamVjdHMuZmluZEluZGV4KHAgPT4gcC5wcm9qZWN0RGV0YWlscy5wcm9qZWN0TmFtZSA9PT0gbmFtZSk7XG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9O1xuXG4gICAgY29uc3QgdGFza0luZGV4ID0gKG5hbWVUYXNrKSA9PiBhbGxQcm9qZWN0c1twcm9qZWN0SW5kZXgoKV0ucHJvamVjdERldGFpbHMuYWxsVGFza3MuZmluZEluZGV4KHAgPT4gcC50YXNrTmFtZSA9PT0gbmFtZVRhc2spO1xuXG4gICAgcmV0dXJuIHsgcHJvamVjdEluZGV4ICwgdGFza0luZGV4fVxufSkoKTtcblxuZnVuY3Rpb24gZGVsZXRlVGFzayhuYW1lVGFzaykge1xuICAgIGNvbnN0IHByb2pJbmRleCA9IGZpbmRJbmRleC5wcm9qZWN0SW5kZXgoKTtcbiAgICBjb25zdCB0YXNrSW5kZXggPSBmaW5kSW5kZXgudGFza0luZGV4KG5hbWVUYXNrKTtcbiAgICBhbGxQcm9qZWN0c1twcm9qSW5kZXhdLmRlbGV0ZVRhc2sodGFza0luZGV4KTtcbiAgICBzYXZlRGF0YSgpO1xufTtcblxuZnVuY3Rpb24gc2F2ZU5hbWUoY3VycmVudFByb2opIHtcbiAgICBjb25zdCBuZXdUaXRsZSA9IGdldE5ld1R0bGUoKTtcbiAgICBjb25zdCBpbmRleCA9IGFsbFByb2plY3RzLmZpbmRJbmRleChwID0+IHAucHJvamVjdERldGFpbHMucHJvamVjdE5hbWUgPT09IGN1cnJlbnRQcm9qKTtcbiAgICBwcm9qZWN0LmVkaXRQcm9qZWN0TmFtZShpbmRleCwgbmV3VGl0bGUudmFsdWUpO1xuICAgIHByb2plY3Qudmlld1Byb2plY3RzKCk7XG59O1xuXG5mdW5jdGlvbiBlZGl0VGFzayhuYW1lVGFzaykge1xuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IGZpbmRJbmRleC5wcm9qZWN0SW5kZXgoKTtcbiAgICBjb25zdCB0YXNrSW5kZXggPSBmaW5kSW5kZXgudGFza0luZGV4KG5hbWVUYXNrKTtcbiAgICBjb25zdCBuZXdJbmZvID0gZ2V0VGFza0luZm8oKTtcbiAgICBhbGxQcm9qZWN0c1twcm9qZWN0SW5kZXhdLnByb2plY3REZXRhaWxzLmFsbFRhc2tzW3Rhc2tJbmRleF0udGFza05hbWUgPSBuZXdJbmZvLnRhc2s7XG4gICAgYWxsUHJvamVjdHNbcHJvamVjdEluZGV4XS5wcm9qZWN0RGV0YWlscy5hbGxUYXNrc1t0YXNrSW5kZXhdLmRlc2NyaXB0aW9uID0gbmV3SW5mby5kZXNjcmlwdGlvbjtcbiAgICBhbGxQcm9qZWN0c1twcm9qZWN0SW5kZXhdLnByb2plY3REZXRhaWxzLmFsbFRhc2tzW3Rhc2tJbmRleF0uZHVlRGF0ZSA9IG5ld0luZm8uZGF0ZTtcbiAgICBhbGxQcm9qZWN0c1twcm9qZWN0SW5kZXhdLnByb2plY3REZXRhaWxzLmFsbFRhc2tzW3Rhc2tJbmRleF0ucHJpb3JpdHlMaXN0ID0gbmV3SW5mby5wcmlvcml0eUxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKG5hbWVQcm9qLCB0c2ssIGRlc2NycCwgZHRlLCBwckxpc3QpIHtcbiAgICBjb25zdCBpbmRleCA9IGFsbFByb2plY3RzLmZpbmRJbmRleChwID0+IHAucHJvamVjdERldGFpbHMucHJvamVjdE5hbWUgPT09IG5hbWVQcm9qKTtcbiAgICBhbGxQcm9qZWN0c1tpbmRleF0uYWRkVGFzayh0c2ssZGVzY3JwLGR0ZSxwckxpc3QpO1xufTtcblxuZnVuY3Rpb24gZGlzYWJsZVByZXZpb3VzRGF0ZXMoZGF0ZSkge1xuICAgIGxldCBkdFRvZGF5ID0gbmV3IERhdGUoKTtcbiBcbiAgICBsZXQgbW9udGggPSBkdFRvZGF5LmdldE1vbnRoKCkgKyAxO1xuICAgIGxldCBkYXkgPSBkdFRvZGF5LmdldERhdGUoKTtcbiAgICBsZXQgeWVhciA9IGR0VG9kYXkuZ2V0RnVsbFllYXIoKTtcbiAgICBpZihtb250aCA8IDEwKVxuICAgICAgICBtb250aCA9ICcwJyArIG1vbnRoLnRvU3RyaW5nKCk7XG4gICAgaWYoZGF5IDwgMTApXG4gICAgICAgIGRheSA9ICcwJyArIGRheS50b1N0cmluZygpO1xuICAgIFxuICAgIGxldCBtYXhEYXRlID0geWVhciArICctJyArIG1vbnRoICsgJy0nICsgZGF5O1xuICAgIGRhdGUuc2V0QXR0cmlidXRlKCdtaW4nLCBtYXhEYXRlKTtcbn1cblxuY29uc3QgdG9kYXlBbmRVcGNvbWluZ1Rhc2sgPSAoKSA9PiB7XG4gICAgY29uc3QgdG9kYXlEYXRlID0gKCkgPT4ge1xuICAgICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBsZXQgbW0gPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7IC8vSmFudWFyeSBpcyAwIVxuICAgICAgICBsZXQgeXl5eSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG5cbiAgICAgICAgcmV0dXJuIHRvZGF5ID0geXl5eSArICctJyArIG1tICsgJy0nICsgZGQ7XG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheVRvZGF5VGFza3MgPSAoKSA9PiBhbGxQcm9qZWN0cy5mb3JFYWNoKHAgPT4gcC5wcm9qZWN0RGV0YWlscy5hbGxUYXNrcy5mb3JFYWNoKHQgPT4ge1xuICAgICAgICBpZiAodC5kdWVEYXRlID09IHRvZGF5RGF0ZSgpKSB7XG4gICAgICAgICAgICBVSS50YXNrRGlzcGxheSh0LnRhc2tOYW1lLCB0LmRlc2NyaXB0aW9uLCB0LmR1ZURhdGUsIHQucHJpb3JpdHlMaXN0LCB0LmNoZWNrQm94KTtcbiAgICAgICAgfVxuICAgIH0pKTsgXG4gICAgXG4gICAgY29uc3QgZGlzcGxheVVwY29taW5nVGFzayA9ICgpID0+ICBhbGxQcm9qZWN0cy5mb3JFYWNoKHAgPT4gcC5wcm9qZWN0RGV0YWlscy5hbGxUYXNrcy5mb3JFYWNoKHQgPT4ge1xuICAgICAgICBpZiAodC5kdWVEYXRlICE9PSB0b2RheURhdGUoKSkge1xuICAgICAgICAgICAgVUkudGFza0Rpc3BsYXkodC50YXNrTmFtZSwgdC5kZXNjcmlwdGlvbiwgdC5kdWVEYXRlLCB0LnByaW9yaXR5TGlzdCwgdC5jaGVja0JveCk7XG4gICAgICAgIH1cbiAgICB9KSk7IFxuICAgIFxuICAgIHJldHVybiB7IGRpc3BsYXlUb2RheVRhc2tzLCBkaXNwbGF5VXBjb21pbmdUYXNrIH1cbn1cblxuZXhwb3J0IHtcbiAgICBhbGxQcm9qZWN0cyxcbiAgICBkaXNhYmxlUHJldmlvdXNEYXRlcyxcbiAgICBzdG9yZUNoZWNrQm94LFxuICAgIHNhdmVDaGVja0JveCxcbiAgICBjcmVhdGVUYXNrLFxuICAgIHByb2plY3QsXG4gICAgYWRkUHJvamVjdCxcbiAgICBkZWxldGVUYXNrLFxuICAgIGVkaXRUYXNrLFxuICAgIHNhdmVOYW1lLFxuICAgIHRvZGF5QW5kVXBjb21pbmdUYXNrLFxuICAgIGRlbGV0ZVByb2plY3QsXG4gICAgZmluZEluZGV4LFxufVxuXG4iLCJjbGFzcyBQdWJzdWIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgdGhpcy50cmFja2VyID0ge1xuICAgICAgICAvLyBrZXk6IGV2ZW50bmFtZSwgdmFsdWU6IFsgZnVuY3MgXVxuICAgICAgfTtcbiAgICB9XG4gIFxuICAgIHN1YnNjcmliZShldmVudE5hbWUsIGZ1bmMpIHtcbiAgICAgIGlmICh0aGlzLnRyYWNrZXJbZXZlbnROYW1lXSkge1xuICAgICAgICB0aGlzLnRyYWNrZXJbZXZlbnROYW1lXS5wdXNoKGZ1bmMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50cmFja2VyW2V2ZW50TmFtZV0gPSBbZnVuY107XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICB1bnN1YnNjcmliZTogKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGZ1bmNzID0gdGhpcy50cmFja2VyW2V2ZW50TmFtZV07XG4gICAgICAgICAgY29uc3QgaWR4ID0gZnVuY3MuaW5kZXhPZihmdW5jKTtcbiAgICAgICAgICBpZiAoaWR4ID4gLTEpIHtcbiAgICAgICAgICAgIGZ1bmNzLnNwbGljZShpZHgsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIFxuICAgIHB1Ymxpc2goZXZlbnROYW1lLCAuLi5hcmdzKSB7XG4gICAgICBjb25zdCBmdW5jcyA9IHRoaXMudHJhY2tlcltldmVudE5hbWVdO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZnVuY3MpKSB7XG4gICAgICAgIGZ1bmNzLmZvckVhY2goKGZ1bmMpID0+IHtcbiAgICAgICAgICBmdW5jLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuY29uc3QgcHVic3ViID0gbmV3IFB1YnN1YigpO1xuXG5leHBvcnQgeyBwdWJzdWIgfSIsImltcG9ydCB7IGFsbFByb2plY3RzLCBhZGRQcm9qZWN0IH0gZnJvbSBcIi4vbG9naWNcIjtcbmltcG9ydCB7IFVJIH0gZnJvbSBcIi4vRE9NXCI7XG5pbXBvcnQgeyBzYXZlRGF0YSB9IGZyb20gXCIuL2xvY2FsLXN0b3JhZ2VcIjtcblxuZnVuY3Rpb24gcmVuZGVyVHRsZUJ0bihwcm9qZWN0RGF0YSkge1xuICAgIHByb2plY3REYXRhLmZvckVhY2gocCA9PiB7XG4gICAgICAgIGFkZFByb2plY3QocC5wcm9qZWN0RGV0YWlscy5wcm9qZWN0TmFtZSk7XG4gICAgICAgIFVJLm1ha2VQcm9qZWN0QnRuKHAucHJvamVjdERldGFpbHMucHJvamVjdE5hbWUpO1xuICAgIH0pO1xufTtcblxuZnVuY3Rpb24gcmVuZGVyVGFza0Rpc3BsYXkocHJvamVjdERhdGEpIHtcbiAgICBwcm9qZWN0RGF0YS5mb3JFYWNoKHAgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBhbGxQcm9qZWN0cy5maW5kSW5kZXgocHJvamVjdCA9PiBwcm9qZWN0LnByb2plY3REZXRhaWxzLnByb2plY3ROYW1lID09PSAocC5wcm9qZWN0RGV0YWlscy5wcm9qZWN0TmFtZSkpO1xuICAgICAgICBpZiAocC5wcm9qZWN0RGV0YWlscy5hbGxUYXNrcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIHAucHJvamVjdERldGFpbHMuYWxsVGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICBhbGxQcm9qZWN0c1twcm9qZWN0SW5kZXhdLmFkZFRhc2sodGFzay50YXNrTmFtZSwgdGFzay5kZXNjcmlwdGlvbiwgdGFzay5kdWVEYXRlLCB0YXNrLnByaW9yaXR5TGlzdCwgdGFzay5jaGVja0JveCk7XG4gICAgICAgICAgICAgICAgc2F2ZURhdGEoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYWxsUHJvamVjdHMpO1xuICAgICAgICB9O1xuICAgIH0pO1xufTtcblxuZnVuY3Rpb24gcmVuZGVyU2F2ZWREYXRhKCkge1xuICAgIGNvbnN0IGFsbFByb2plY3REYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFsbFByb2plY3REYXRhXCIpKTtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmxlbmd0aCAhPT0gMCkge1xuICAgICAgaWYgKGFsbFByb2plY3RzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgcmVuZGVyVHRsZUJ0bihhbGxQcm9qZWN0RGF0YSk7XG4gICAgICAgICAgcmVuZGVyVGFza0Rpc3BsYXkoYWxsUHJvamVjdERhdGEpO1xuICAgICAgfTtcbiAgICB9OyBcbn07XG5cbmV4cG9ydCB7IHJlbmRlclR0bGVCdG4sIHJlbmRlclRhc2tEaXNwbGF5LCByZW5kZXJTYXZlZERhdGEgfVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxuaW1wb3J0IHsgRE9NRXZlbnRzIH0gZnJvbSAnLi9ET01fZXZlbnRzLmpzJ1xuaW1wb3J0IHsgcmVuZGVyU2F2ZWREYXRhIH0gZnJvbSBcIi4vcmVuZGVyU3RvcmFnZVwiO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICByZW5kZXJTYXZlZERhdGEoKTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIERPTUV2ZW50cygpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=