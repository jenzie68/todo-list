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
    background-color: #fff;
    margin: 0;
    font: inherit;
    color: #6eb49f;
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

.task-background > input[type="checkbox"]:checked {
    content: "";
    width: 0.65em;
    height: 0.65em;
    background-color: #6eb49f;
    color: #6eb49f;
    transform: scale(3);
    transition: 120ms transform ease-in-out;
}

.task-background > input[type="checkbox"]:checked::before {
    transform: scale(1);
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





`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n}\n\n#headline {\n    display: inline-block;\n    grid-column: span 2;\n    background-color: #92C1B2;\n    color: aliceblue;\n    font-weight: bolder;\n    font-size: 4rem;\n    letter-spacing: 10px;\n    overflow: hidden;\n}\n\n#todo-list-icon {\n    margin-right: 2rem;\n}\n\n#text {\n    padding-top: 1.4rem;\n    padding-left: 23rem;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: 1.5fr 4fr;\n    grid-template-rows: 0.6fr 4fr;\n    height: 100vh;\n    width: 100vw;\n}\n\n.todo-list-container {\n    display: grid;\n    grid-template-columns: 1.3fr 4fr;\n    width: 100vw;\n}\n\n.main {\n    background-color: #bdd6d6;\n    overflow:hidden;\n}\n\n.title-add-project {\n    display: flex;\n    outline-style: solid;\n    color: turquoise;\n}\n\n.all-projects {\n    display: flex;\n    flex-direction: column;\n}\n\n.header {\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  position: relative;\n}\n\n.newProjectTitle,\n.btn-containers {\n    display: flex;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n};\n\n.task-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.side-bar {\n    display: flex;\n    flex-direction: column;\n}\n\n.project-btn-container {\n    display: grid;\n    grid-template-columns: 3fr 1fr;\n}\n\n.today,\n.upcoming,\n.show-projects-container {\n    display: grid;\n    grid-template-columns: 0.7fr 3fr;\n    font-size: 2rem;\n    padding-top: 0.8rem;\n    padding-bottom: 0.8rem;\n    letter-spacing: 0.3rem;\n    background-color: white;\n    border-color: #92C1B2;\n    border-style: solid;\n    color: #92C1B2;\n    font-weight: bolder;\n}\n\n.today:hover,\n.upcoming:hover,\n#projects-btn:hover,\n.all-projects > button:hover {\n    background: #6eb49f;\n    opacity: 50%;\n    color: white;\n}\n\n.upcoming {\n    border-top: none;\n}\n\n.today > div,\n.upcoming > div {\n    justify-self: left;\n    padding-left: 2rem;\n}\n\n.show-projects-container {\n    grid-template-columns: 1fr 1.9fr 1fr;\n    border-top: none;\n}\n\n#projects-btn {\n    font-size: 2rem;\n    letter-spacing: 0.3rem;\n    display: inline-block;\n    background-color: white;\n    text-align: left;\n    font-weight: bolder;\n    color: #92C1B2;\n    border-style: none;\n}\n\n.drop-down-btn {\n    background-color: white;\n    border-style: none;\n}\n\n#projects-icon {\n    padding-right: 1.9rem;\n}\n\n.all-projects {\n    display: flex;\n    flex-direction: column;\n    gap: 0.9px;\n    width: 50%;\n    height: 40%;\n    padding-left: 8rem;\n    padding-top: 2rem;\n}\n\n.all-projects > button {\n    height: 2.7rem;\n    font-size: 1.5rem;\n    background-color: white;\n    border-color: #92C1B2;\n    border-style: solid;\n    color: #92C1B2;\n    font-weight: bolder;\n}\n\n.sidebar-icons {\n    justify-self: end;\n}\n\n.input-project {\n    padding-top: 4rem;\n    align-self: center;\n}\n\n.input-project > div {\n    display: grid;\n    grid-template-columns: 10fr 1.5fr;\n    height: 3rem;\n}\n\n#get-project-title {\n    background: #EFEFEF;\n    border-style: solid;\n    border-color: #92C1B2;\n    font-size: 1.5rem;\n}\n\n.add-project-btn {\n    background-color: #92C1B2;\n    border-style: none;\n}\n\n.delete-project-btn {\n    margin-top: 1rem;\n    text-align: center;\n    width: 100%;\n    height: 2.5rem;\n    font-size: larger;\n    letter-spacing: 0.2rem;\n    background-color: #92C1B2;\n    font-weight: bolder;\n    color: white;\n    border-style: none;\n}\n\n.delete-project-btn:hover {\n    border-style: solid;\n    border-color: #6eb49f;\n    background-color: white;\n    color: #6eb49f;\n}\n\n.project-title {\n    padding-top: 1rem;\n    padding-bottom: 3rem;\n    font-size: 3.5rem;\n    font-weight: bolder;\n    color: white;\n    letter-spacing: 10px;\n}\n\n#add-task-btn {\n    display: grid;\n    grid-template-columns: 2fr 3.5fr;\n    width: 20%;\n    padding: 1.2rem 1.3rem 1.2rem 1.3rem;\n    font-size: 1rem;\n    letter-spacing: 5px;\n    background-color: #6eb49f;\n    color: white;\n    font-weight: bold;\n    border-radius: 4vw;\n    border-style: none;\n    margin-left: 3rem;\n}\n\n#add-task-btn > div {\n    align-self:center;\n    justify-self: left;\n}\n\n#add-task-btn > img {\n    align-self: center;\n    justify-self: center;\n}\n\n#add-task-btn:hover {\n    background-color: #78C4AD;\n}\n\n.change-name-container {\n    padding-top: 2.5rem;\n}\n\n#new-project-title {\n    height: 3.5rem;\n    width: 24rem;\n    font-size: 2.5rem;\n    letter-spacing: 0.5rem;\n    background-color: #6eb49f;\n    color: white;\n    border-style: none;\n    border-radius: 0.2vw;\n}\n\n.btn-containers {\n    padding-top: 1rem;\n}\n\n#save-btn,\n#cancel-btn {\n    padding: 0.5rem 0.7rem 0.5rem 0.7rem;\n    font-weight: bold;\n    color: white;\n    letter-spacing: 3px;\n    border-radius:0.5vw;\n}\n\n#save-btn {\n    margin-right: 1.5rem;\n    background-color: #8ED0DE;\n    border-style: none;\n}\n\n#cancel-btn {\n    background-color: #92C1B2;\n    border-style: none;\n}\n\n#save-btn:hover,\n#cancel-btn:hover {\n    border-style: solid;\n    border-color: white;\n}\n\n.task-form {\n    display: flex;\n    flex-direction: column;\n    padding: 3rem;\n    justify-content: space-between;\n    position: absolute;\n    top: 7rem;\n    left: 4rem;\n    height: 13rem;\n    width: 45%;\n    background: white;\n    z-index: 1;\n}\n\n.task-form > input,\n.task-form > select {\n    background-color: #6eb49f;\n    color: white;\n    height: 2rem;\n    border-style: none;\n    border-radius: 0.3vw;\n}\n\ntextarea {\n    background-color: #6eb49f;\n    border-radius: 0.3vw;\n}\n\n#cancel-task-btn,\n#submit-task-btn,\n#save-task-btn {\n    padding: 0.5rem 0.7rem 0.5rem 0.7rem;\n    font-weight: bolder;\n}\n\n#submit-task-btn:hover,\n#save-task-btn:hover {\n    background-color: #75D7BA;\n}\n\n#cancel-task-btn:hover {\n    background-color: #6eb49f;\n    color: white;\n    border-radius: 0.3vw;  \n    border-style: none; \n}\n\n#submit-task-btn,\n#save-task-btn {\n    background-color: #6eb49f;\n    color: white;\n    border-radius: 0.3vw;  \n    border-style: none; \n}\n\n#cancel-task-btn {\n    margin-left: 1rem;\n    color: #6eb49f;\n    background-color: white;\n    border-style: solid;\n    border-color: #6eb49f;\n    border-radius: 0.3vw; \n}\n\n.task-container-display {\n    height: 9%;\n}\n\n.task-background {\n    background-color: white;\n    width: 80%;\n    height: 100%;\n    margin-left: 3.8rem;\n    display: grid;\n    grid-template-columns: 0.7fr 4fr 1fr 0.7fr ;\n    justify-content: center;\n    align-items: center;\n}\n\n.task-background > input[type=\"checkbox\"] {\n    align-self: center;\n    justify-self: center;\n    appearance: none;\n    background-color: #fff;\n    margin: 0;\n    font: inherit;\n    color: #6eb49f;\n    width: 2.15em;\n    height: 2.15em;\n    border: 0.15em solid currentColor;\n    border-radius: 0.15em;\n    transform: translateY(-0.075em);\n    display: grid;\n    place-content: center;    \n    border-radius: 3vw;\n    background-color: lightgrey;\n}\n\n.task-background > input[type=\"checkbox\"]:checked {\n    content: \"\";\n    width: 0.65em;\n    height: 0.65em;\n    background-color: #6eb49f;\n    color: #6eb49f;\n    transform: scale(3);\n    transition: 120ms transform ease-in-out;\n}\n\n.task-background > input[type=\"checkbox\"]:checked::before {\n    transform: scale(1);\n}\n\n.todo-list {\n    display: flex;\n    flex-direction: column;   \n    height: 100%;\n    gap: 1rem;\n}\n\n.taskBtns {\n    display: flex;\n    flex-direction: column;\n    justify-self: center;\n    align-self: center;\n    background-color: none;\n    gap: 4px;\n}\n\n.taskBtns > button {\n    background-color: white;\n    border-style: none;\n}\n\n.taskBtns > button:hover {\n    background: whitesmoke;\n} \n\n#date-display {\n    font-weight: bolder;\n    font-size: 1.6rem;\n}\n\n\n\n\n\n"],"sourceRoot":""}]);
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
/* harmony export */   DOMEvents: () => (/* binding */ DOMEvents),
/* harmony export */   getNewTtle: () => (/* binding */ getNewTtle),
/* harmony export */   getProjName: () => (/* binding */ getProjName),
/* harmony export */   getProjTitle: () => (/* binding */ getProjTitle),
/* harmony export */   getTaskInfo: () => (/* binding */ getTaskInfo),
/* harmony export */   renderSavedData: () => (/* binding */ renderSavedData),
/* harmony export */   renderTaskDisplay: () => (/* binding */ renderTaskDisplay),
/* harmony export */   renderTtleBtn: () => (/* binding */ renderTtleBtn)
/* harmony export */ });
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ "./src/logic.js");
/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage.js */ "./src/local-storage.js");



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
        btn.setAttribute('id',`${name}-btn`);
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
        projectTitle.addEventListener('click',() => changeProjName(projTtle));
        append.appendChild(projectTitle);
    }
    
    function taskForm(name) {
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
        checkList.addEventListener('change', () => (0,_logic__WEBPACK_IMPORTED_MODULE_0__.saveCheckBox)(checkList,task));
    
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
        const deleteIcon = document.createElement('img');
        deleteIcon.setAttribute('src','/src/icons/bi_trash-fill.svg');
        deleteBtn.addEventListener('click', (e) => {
            e.preventDefault();
            deleteTaskDisplay(task);
        });
    
        const editTaskBtn = document.createElement('button');
        const editIcon = document.createElement('img');
        editIcon.setAttribute('src','/src/icons/tabler_edit.svg');
        editTaskBtn.addEventListener('click',(e) => {
            e.preventDefault();
            renderEditTask(task);
        });
    
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
        if (priority == 'urgent') {
            checkBox.style.backgroundColor = '#F65C5C';
            date.style.color = '#F65C5C';
        } else if (priority == 'important') {
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
    
    function replaceBtns(taskName) {
        const submitTaskBtn = document.getElementById('submit-task-btn');
        const saveTaskBtn = createSaveBtn();
        saveTaskBtn.addEventListener('click',(e) => {
            e.preventDefault();
            submitEditTask(taskName);
        });
        submitTaskBtn.replaceWith(saveTaskBtn);
    };

    function submitTaskForm(name) {
        const taskInfo = getTaskInfo()
        ;(0,_logic__WEBPACK_IMPORTED_MODULE_0__.createTask)(name, taskInfo.task, taskInfo.description, taskInfo.date, taskInfo.priorityList);
        taskDisplay(taskInfo.task, taskInfo.description, taskInfo.date, taskInfo.priorityList);
        headerDisplay(name);
        updateUITaskBtn();
        (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveData)();
    };
    
    function renderEditTask(nameOfTask) {
        const name = getProjTitle();
        taskForm(name);
        currentTaskInfo(nameOfTask);
        createSaveBtn();
        replaceBtns(nameOfTask);
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
    
    function submitEditTask(taskName) {
        removeDataNameAttribute(taskName);
        (0,_logic__WEBPACK_IMPORTED_MODULE_0__.editTask)(taskName);
        (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveData)();
        const newInfo = getTaskInfo();
        taskDisplay(newInfo.task, newInfo.description, newInfo.date, newInfo.priorityList);
        removeTaskForm();
        updateUITaskBtn();
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
        saveBtn.addEventListener('click', () => renderNewTtle(name))
        saveBtn.setAttribute('id','save-btn');
        saveBtn.textContent = 'SAVE';
    
        const cancelBtn = document.createElement('button');
        cancelBtn.textContent = 'CANCEL';
        cancelBtn.setAttribute('id','cancel-btn');
        cancelBtn.addEventListener('click', () => headerDisplay(name));
    
        header.appendChild(changeNameContainer);
        changeNameContainer.appendChild(newProjectTitle);
        changeNameContainer.appendChild(btnContainers);
        btnContainers.appendChild(saveBtn);
        btnContainers.appendChild(cancelBtn);
    };
    
    function renderNewTtle(name) {
        (0,_logic__WEBPACK_IMPORTED_MODULE_0__.saveName)(name);
        (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveData)();
        newTtleBtn(name);
        headerDisplay(getNewTtle().value);
    };
    
    function newTtleBtn(currentProj) {
        const newTitle = getNewTtle(); 
        const ChangeNamebtn = document.getElementById(`${currentProj}-btn`);
        ChangeNamebtn.removeAttribute('id');
        ChangeNamebtn.setAttribute('id',`${newTitle.value}-btn`);
        ChangeNamebtn.textContent = newTitle.value;
        ChangeNamebtn.addEventListener('click',() => headerDisplay(newTitle.value));
    };
    
    function removeProjectBtn() {
        const projectTitle = document.querySelector('.project-title');
        const projectTitleBtn = document.getElementById(`${projectTitle.textContent}-btn`);
        projectTitleBtn.remove();
    };
    
    function emptyToDoPage() {
        const header = document.querySelector('.header');
        header.textContent = '';
        emptyToDoList();
    };
    
    return {
        makeProjectBtn,
        makeAddTaskBtn,
        removeProjectBtn,
        emptyToDoList,
        emptyToDoPage,
        renderSavedTask,
        headerDisplay,
        taskForm,
    }
})();

const DOMEvents = () => {
    const d = document;
    d.addEventListener('click', (e) => {
        if(e.target.matches('.add-project-btn') || e.target.matches('#add-icon')) {
            const getProjTitle = getProjName();
            (0,_logic__WEBPACK_IMPORTED_MODULE_0__.addProject)(getProjTitle.value);
            UI.makeProjectBtn(getProjTitle.value);
            getProjTitle.value = '';
            console.log(_logic__WEBPACK_IMPORTED_MODULE_0__.allProjects);
        }
        if (e.target.matches('.delete-project-btn')) {
            (0,_logic__WEBPACK_IMPORTED_MODULE_0__.deleteProject)();
            (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveData)(); 
            UI.removeProjectBtn();
            UI.emptyToDoPage();
        };
        if (e.target.matches(`#${e.target.textContent}-btn`)) {
            UI.headerDisplay(e.target.textContent);
            UI.emptyToDoList();
            UI.renderSavedTask();
            UI.makeAddTaskBtn();
        }
        if (e.target.matches('.add-task-btn')) {
            e.preventDefault();
            UI.taskForm(getProjTitle());
        }
    });
};

function renderTtleBtn(projectData) {
    projectData.forEach(p => {
        (0,_logic__WEBPACK_IMPORTED_MODULE_0__.addProject)(p.projectDetails.projectName);
        UI.makeProjectBtn(p.projectDetails.projectName);
    });
};

function renderTaskDisplay(projectData) {
    projectData.forEach(p => {
        const projectIndex = _logic__WEBPACK_IMPORTED_MODULE_0__.allProjects.findIndex(project => project.projectDetails.projectName === (p.projectDetails.projectName));
        if (p.projectDetails.allTasks.length !== 0) {
            p.projectDetails.allTasks.forEach(task => {
                _logic__WEBPACK_IMPORTED_MODULE_0__.allProjects[projectIndex].addTask(task.taskName, task.description, task.dueDate, task.priorityList, task.checkBox);
                (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveData)();
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
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic */ "./src/logic.js");



function saveData() { 
    localStorage.setItem("allProjectData", JSON.stringify(_logic__WEBPACK_IMPORTED_MODULE_1__.allProjects));
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
/* harmony export */   editTask: () => (/* binding */ editTask),
/* harmony export */   findIndex: () => (/* binding */ findIndex),
/* harmony export */   project: () => (/* binding */ project),
/* harmony export */   projectManagement: () => (/* binding */ projectManagement),
/* harmony export */   saveCheckBox: () => (/* binding */ saveCheckBox),
/* harmony export */   saveName: () => (/* binding */ saveName),
/* harmony export */   storeCheckBox: () => (/* binding */ storeCheckBox)
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
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");



(0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.renderSavedData)();
document.addEventListener('DOMContentLoaded', () => {
    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.DOMEvents)();
});


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUEsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksWUFBWSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxPQUFPLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLFFBQVEsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sT0FBTyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZ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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxvREFBWTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFD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YWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2NhbC1zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4jaGVhZGxpbmUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MkMxQjI7XG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4jdG9kby1saXN0LWljb24ge1xuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbn1cblxuI3RleHQge1xuICAgIHBhZGRpbmctdG9wOiAxLjRyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAyM3JlbTtcbn1cblxuYm9keSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuNWZyIDRmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNmZyIDRmcjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbn1cblxuLnRvZG8tbGlzdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjNmciA0ZnI7XG4gICAgd2lkdGg6IDEwMHZ3O1xufVxuXG4ubWFpbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JkZDZkNjtcbiAgICBvdmVyZmxvdzpoaWRkZW47XG59XG5cbi50aXRsZS1hZGQtcHJvamVjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBvdXRsaW5lLXN0eWxlOiBzb2xpZDtcbiAgICBjb2xvcjogdHVycXVvaXNlO1xufVxuXG4uYWxsLXByb2plY3RzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubmV3UHJvamVjdFRpdGxlLFxuLmJ0bi1jb250YWluZXJzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcbn07XG5cbi50YXNrLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc2lkZS1iYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnByb2plY3QtYnRuLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7XG59XG5cbi50b2RheSxcbi51cGNvbWluZyxcbi5zaG93LXByb2plY3RzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuN2ZyIDNmcjtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgcGFkZGluZy10b3A6IDAuOHJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC44cmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjNyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLWNvbG9yOiAjOTJDMUIyO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgY29sb3I6ICM5MkMxQjI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLnRvZGF5OmhvdmVyLFxuLnVwY29taW5nOmhvdmVyLFxuI3Byb2plY3RzLWJ0bjpob3Zlcixcbi5hbGwtcHJvamVjdHMgPiBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICM2ZWI0OWY7XG4gICAgb3BhY2l0eTogNTAlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnVwY29taW5nIHtcbiAgICBib3JkZXItdG9wOiBub25lO1xufVxuXG4udG9kYXkgPiBkaXYsXG4udXBjb21pbmcgPiBkaXYge1xuICAgIGp1c3RpZnktc2VsZjogbGVmdDtcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XG59XG5cbi5zaG93LXByb2plY3RzLWNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS45ZnIgMWZyO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG59XG5cbiNwcm9qZWN0cy1idG4ge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zcmVtO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgY29sb3I6ICM5MkMxQjI7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG4uZHJvcC1kb3duLWJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG4jcHJvamVjdHMtaWNvbiB7XG4gICAgcGFkZGluZy1yaWdodDogMS45cmVtO1xufVxuXG4uYWxsLXByb2plY3RzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAwLjlweDtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogNDAlO1xuICAgIHBhZGRpbmctbGVmdDogOHJlbTtcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcbn1cblxuLmFsbC1wcm9qZWN0cyA+IGJ1dHRvbiB7XG4gICAgaGVpZ2h0OiAyLjdyZW07XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLWNvbG9yOiAjOTJDMUIyO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgY29sb3I6ICM5MkMxQjI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLnNpZGViYXItaWNvbnMge1xuICAgIGp1c3RpZnktc2VsZjogZW5kO1xufVxuXG4uaW5wdXQtcHJvamVjdCB7XG4gICAgcGFkZGluZy10b3A6IDRyZW07XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uaW5wdXQtcHJvamVjdCA+IGRpdiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwZnIgMS41ZnI7XG4gICAgaGVpZ2h0OiAzcmVtO1xufVxuXG4jZ2V0LXByb2plY3QtdGl0bGUge1xuICAgIGJhY2tncm91bmQ6ICNFRkVGRUY7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6ICM5MkMxQjI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5hZGQtcHJvamVjdC1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MkMxQjI7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG4uZGVsZXRlLXByb2plY3QtYnRuIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICBmb250LXNpemU6IGxhcmdlcjtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4ycmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MkMxQjI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG4uZGVsZXRlLXByb2plY3QtYnRuOmhvdmVyIHtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogIzZlYjQ5ZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogIzZlYjQ5Zjtcbn1cblxuLnByb2plY3QtdGl0bGUge1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGxldHRlci1zcGFjaW5nOiAxMHB4O1xufVxuXG4jYWRkLXRhc2stYnRuIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDMuNWZyO1xuICAgIHdpZHRoOiAyMCU7XG4gICAgcGFkZGluZzogMS4ycmVtIDEuM3JlbSAxLjJyZW0gMS4zcmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZWI0OWY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJvcmRlci1yYWRpdXM6IDR2dztcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG4gICAgbWFyZ2luLWxlZnQ6IDNyZW07XG59XG5cbiNhZGQtdGFzay1idG4gPiBkaXYge1xuICAgIGFsaWduLXNlbGY6Y2VudGVyO1xuICAgIGp1c3RpZnktc2VsZjogbGVmdDtcbn1cblxuI2FkZC10YXNrLWJ0biA+IGltZyB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4jYWRkLXRhc2stYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzhDNEFEO1xufVxuXG4uY2hhbmdlLW5hbWUtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLXRvcDogMi41cmVtO1xufVxuXG4jbmV3LXByb2plY3QtdGl0bGUge1xuICAgIGhlaWdodDogMy41cmVtO1xuICAgIHdpZHRoOiAyNHJlbTtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZWI0OWY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjJ2dztcbn1cblxuLmJ0bi1jb250YWluZXJzIHtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbn1cblxuI3NhdmUtYnRuLFxuI2NhbmNlbC1idG4ge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjdyZW0gMC41cmVtIDAuN3JlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgICBib3JkZXItcmFkaXVzOjAuNXZ3O1xufVxuXG4jc2F2ZS1idG4ge1xuICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4RUQwREU7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG4jY2FuY2VsLWJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkyQzFCMjtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbiNzYXZlLWJ0bjpob3ZlcixcbiNjYW5jZWwtYnRuOmhvdmVyIHtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG59XG5cbi50YXNrLWZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAzcmVtO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA3cmVtO1xuICAgIGxlZnQ6IDRyZW07XG4gICAgaGVpZ2h0OiAxM3JlbTtcbiAgICB3aWR0aDogNDUlO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi50YXNrLWZvcm0gPiBpbnB1dCxcbi50YXNrLWZvcm0gPiBzZWxlY3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZWI0OWY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGhlaWdodDogMnJlbTtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMC4zdnc7XG59XG5cbnRleHRhcmVhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmViNDlmO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuM3Z3O1xufVxuXG4jY2FuY2VsLXRhc2stYnRuLFxuI3N1Ym1pdC10YXNrLWJ0bixcbiNzYXZlLXRhc2stYnRuIHtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC43cmVtIDAuNXJlbSAwLjdyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuI3N1Ym1pdC10YXNrLWJ0bjpob3ZlcixcbiNzYXZlLXRhc2stYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzVEN0JBO1xufVxuXG4jY2FuY2VsLXRhc2stYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmViNDlmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjN2dzsgIFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTsgXG59XG5cbiNzdWJtaXQtdGFzay1idG4sXG4jc2F2ZS10YXNrLWJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZlYjQ5ZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMC4zdnc7ICBcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7IFxufVxuXG4jY2FuY2VsLXRhc2stYnRuIHtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICBjb2xvcjogIzZlYjQ5ZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogIzZlYjQ5ZjtcbiAgICBib3JkZXItcmFkaXVzOiAwLjN2dzsgXG59XG5cbi50YXNrLWNvbnRhaW5lci1kaXNwbGF5IHtcbiAgICBoZWlnaHQ6IDklO1xufVxuXG4udGFzay1iYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMy44cmVtO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjdmciA0ZnIgMWZyIDAuN2ZyIDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGFzay1iYWNrZ3JvdW5kID4gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250OiBpbmhlcml0O1xuICAgIGNvbG9yOiAjNmViNDlmO1xuICAgIHdpZHRoOiAyLjE1ZW07XG4gICAgaGVpZ2h0OiAyLjE1ZW07XG4gICAgYm9yZGVyOiAwLjE1ZW0gc29saWQgY3VycmVudENvbG9yO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMTVlbTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMDc1ZW0pO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGxhY2UtY29udGVudDogY2VudGVyOyAgICBcbiAgICBib3JkZXItcmFkaXVzOiAzdnc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xufVxuXG4udGFzay1iYWNrZ3JvdW5kID4gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgd2lkdGg6IDAuNjVlbTtcbiAgICBoZWlnaHQ6IDAuNjVlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmViNDlmO1xuICAgIGNvbG9yOiAjNmViNDlmO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMyk7XG4gICAgdHJhbnNpdGlvbjogMTIwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xufVxuXG4udGFzay1iYWNrZ3JvdW5kID4gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQ6OmJlZm9yZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLnRvZG8tbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgIFxuICAgIGhlaWdodDogMTAwJTtcbiAgICBnYXA6IDFyZW07XG59XG5cbi50YXNrQnRucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xuICAgIGdhcDogNHB4O1xufVxuXG4udGFza0J0bnMgPiBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuLnRhc2tCdG5zID4gYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xufSBcblxuI2RhdGUtZGlzcGxheSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbn1cblxuXG5cblxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFB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bkIsYUFBYTtJQUNiLDJDQUEyQztJQUMzQyx1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxhQUFhO0lBQ2IsY0FBYztJQUNkLGFBQWE7SUFDYixjQUFjO0lBQ2QsaUNBQWlDO0lBQ2pDLHFCQUFxQjtJQUNyQiwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixRQUFRO0FBQ1o7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jaGVhZGxpbmUge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MkMxQjI7XFxuICAgIGNvbG9yOiBhbGljZWJsdWU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbiN0b2RvLWxpc3QtaWNvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcXG59XFxuXFxuI3RleHQge1xcbiAgICBwYWRkaW5nLXRvcDogMS40cmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIzcmVtO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjVmciA0ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC42ZnIgNGZyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcbi50b2RvLWxpc3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjNmciA0ZnI7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLm1haW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRkNmQ2O1xcbiAgICBvdmVyZmxvdzpoaWRkZW47XFxufVxcblxcbi50aXRsZS1hZGQtcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG91dGxpbmUtc3R5bGU6IHNvbGlkO1xcbiAgICBjb2xvcjogdHVycXVvaXNlO1xcbn1cXG5cXG4uYWxsLXByb2plY3RzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubmV3UHJvamVjdFRpdGxlLFxcbi5idG4tY29udGFpbmVycyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxufTtcXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc2lkZS1iYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucHJvamVjdC1idG4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyO1xcbn1cXG5cXG4udG9kYXksXFxuLnVwY29taW5nLFxcbi5zaG93LXByb2plY3RzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC43ZnIgM2ZyO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHBhZGRpbmctdG9wOiAwLjhyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjhyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItY29sb3I6ICM5MkMxQjI7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGNvbG9yOiAjOTJDMUIyO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4udG9kYXk6aG92ZXIsXFxuLnVwY29taW5nOmhvdmVyLFxcbiNwcm9qZWN0cy1idG46aG92ZXIsXFxuLmFsbC1wcm9qZWN0cyA+IGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICM2ZWI0OWY7XFxuICAgIG9wYWNpdHk6IDUwJTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udXBjb21pbmcge1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbn1cXG5cXG4udG9kYXkgPiBkaXYsXFxuLnVwY29taW5nID4gZGl2IHtcXG4gICAganVzdGlmeS1zZWxmOiBsZWZ0O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxufVxcblxcbi5zaG93LXByb2plY3RzLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEuOWZyIDFmcjtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG59XFxuXFxuI3Byb2plY3RzLWJ0biB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuM3JlbTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgY29sb3I6ICM5MkMxQjI7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmRyb3AtZG93bi1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4jcHJvamVjdHMtaWNvbiB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEuOXJlbTtcXG59XFxuXFxuLmFsbC1wcm9qZWN0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC45cHg7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogNDAlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDhyZW07XFxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xcbn1cXG5cXG4uYWxsLXByb2plY3RzID4gYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAyLjdyZW07XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjOTJDMUIyO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBjb2xvcjogIzkyQzFCMjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLnNpZGViYXItaWNvbnMge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLmlucHV0LXByb2plY3Qge1xcbiAgICBwYWRkaW5nLXRvcDogNHJlbTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uaW5wdXQtcHJvamVjdCA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTBmciAxLjVmcjtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbn1cXG5cXG4jZ2V0LXByb2plY3QtdGl0bGUge1xcbiAgICBiYWNrZ3JvdW5kOiAjRUZFRkVGO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6ICM5MkMxQjI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkyQzFCMjtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3QtYnRuIHtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4ycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTJDMUIyO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0LWJ0bjpob3ZlciB7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogIzZlYjQ5ZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiAjNmViNDlmO1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZSB7XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcXG4gICAgZm9udC1zaXplOiAzLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XFxufVxcblxcbiNhZGQtdGFzay1idG4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzLjVmcjtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgcGFkZGluZzogMS4ycmVtIDEuM3JlbSAxLjJyZW0gMS4zcmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZWI0OWY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDR2dztcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBtYXJnaW4tbGVmdDogM3JlbTtcXG59XFxuXFxuI2FkZC10YXNrLWJ0biA+IGRpdiB7XFxuICAgIGFsaWduLXNlbGY6Y2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxufVxcblxcbiNhZGQtdGFzay1idG4gPiBpbWcge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jYWRkLXRhc2stYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc4QzRBRDtcXG59XFxuXFxuLmNoYW5nZS1uYW1lLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmctdG9wOiAyLjVyZW07XFxufVxcblxcbiNuZXctcHJvamVjdC10aXRsZSB7XFxuICAgIGhlaWdodDogMy41cmVtO1xcbiAgICB3aWR0aDogMjRyZW07XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmViNDlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4ydnc7XFxufVxcblxcbi5idG4tY29udGFpbmVycyB7XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbn1cXG5cXG4jc2F2ZS1idG4sXFxuI2NhbmNlbC1idG4ge1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC43cmVtIDAuNXJlbSAwLjdyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6MC41dnc7XFxufVxcblxcbiNzYXZlLWJ0biB7XFxuICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEVEMERFO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbiNjYW5jZWwtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkyQzFCMjtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4jc2F2ZS1idG46aG92ZXIsXFxuI2NhbmNlbC1idG46aG92ZXIge1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGFzay1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogM3JlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogN3JlbTtcXG4gICAgbGVmdDogNHJlbTtcXG4gICAgaGVpZ2h0OiAxM3JlbTtcXG4gICAgd2lkdGg6IDQ1JTtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi50YXNrLWZvcm0gPiBpbnB1dCxcXG4udGFzay1mb3JtID4gc2VsZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZlYjQ5ZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zdnc7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZlYjQ5ZjtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zdnc7XFxufVxcblxcbiNjYW5jZWwtdGFzay1idG4sXFxuI3N1Ym1pdC10YXNrLWJ0bixcXG4jc2F2ZS10YXNrLWJ0biB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjdyZW0gMC41cmVtIDAuN3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuI3N1Ym1pdC10YXNrLWJ0bjpob3ZlcixcXG4jc2F2ZS10YXNrLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NUQ3QkE7XFxufVxcblxcbiNjYW5jZWwtdGFzay1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmViNDlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3Z3OyAgXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTsgXFxufVxcblxcbiNzdWJtaXQtdGFzay1idG4sXFxuI3NhdmUtdGFzay1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmViNDlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3Z3OyAgXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTsgXFxufVxcblxcbiNjYW5jZWwtdGFzay1idG4ge1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gICAgY29sb3I6ICM2ZWI0OWY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6ICM2ZWI0OWY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3Z3OyBcXG59XFxuXFxuLnRhc2stY29udGFpbmVyLWRpc3BsYXkge1xcbiAgICBoZWlnaHQ6IDklO1xcbn1cXG5cXG4udGFzay1iYWNrZ3JvdW5kIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDMuOHJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjdmciA0ZnIgMWZyIDAuN2ZyIDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWJhY2tncm91bmQgPiBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICBjb2xvcjogIzZlYjQ5ZjtcXG4gICAgd2lkdGg6IDIuMTVlbTtcXG4gICAgaGVpZ2h0OiAyLjE1ZW07XFxuICAgIGJvcmRlcjogMC4xNWVtIHNvbGlkIGN1cnJlbnRDb2xvcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4xNWVtO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMDc1ZW0pO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7ICAgIFxcbiAgICBib3JkZXItcmFkaXVzOiAzdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG59XFxuXFxuLnRhc2stYmFja2dyb3VuZCA+IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICB3aWR0aDogMC42NWVtO1xcbiAgICBoZWlnaHQ6IDAuNjVlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZlYjQ5ZjtcXG4gICAgY29sb3I6ICM2ZWI0OWY7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMyk7XFxuICAgIHRyYW5zaXRpb246IDEyMG1zIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRhc2stYmFja2dyb3VuZCA+IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZDo6YmVmb3JlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLnRvZG8tbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAgXFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4udGFza0J0bnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxuLnRhc2tCdG5zID4gYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnRhc2tCdG5zID4gYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcXG59IFxcblxcbiNkYXRlLWRpc3BsYXkge1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IFxuICAgIGFsbFByb2plY3RzLCBcbiAgICBzYXZlQ2hlY2tCb3gsXG4gICAgY3JlYXRlVGFzayxcbiAgICBlZGl0VGFzayxcbiAgICBkZWxldGVUYXNrLFxuICAgIHNhdmVOYW1lLFxuICAgIGRlbGV0ZVByb2plY3QsXG4gICAgZmluZEluZGV4LFxuICAgIGFkZFByb2plY3Rcbn0gZnJvbSBcIi4vbG9naWNcIjtcbmltcG9ydCB7IHNhdmVEYXRhIH0gZnJvbSBcIi4vbG9jYWwtc3RvcmFnZS5qc1wiO1xuXG5mdW5jdGlvbiBnZXRQcm9qTmFtZSgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dldC1wcm9qZWN0LXRpdGxlJyk7XG59O1xuXG5mdW5jdGlvbiBnZXRQcm9qVGl0bGUoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRpdGxlJykudGV4dENvbnRlbnQ7XG59O1xuXG5mdW5jdGlvbiBnZXROZXdUdGxlKCl7XG4gICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctcHJvamVjdC10aXRsZScpOyBcbn07XG5cbmNvbnN0IGdldFRhc2tJbmZvID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2V0LXRhc2stbmFtZScpLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dldC1kZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2V0LWRhdGUnKS52YWx1ZTtcbiAgICBjb25zdCBwcmlvcml0eUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2V0LXByaW9yaXR5LWxpc3QnKS52YWx1ZTsgXG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0YXNrLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZGF0ZSxcbiAgICAgICAgcHJpb3JpdHlMaXN0XG4gICAgfTtcbn07XG5cbmNvbnN0IFVJID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiBtYWtlUHJvamVjdEJ0bihuYW1lKSB7XG4gICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidG4uc2V0QXR0cmlidXRlKCdpZCcsYCR7bmFtZX0tYnRuYCk7XG4gICAgICAgIGJ0bi50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1wcm9qZWN0cycpO1xuICAgICAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChidG4pO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZW5kZXJTYXZlZFRhc2soKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IGZpbmRJbmRleC5wcm9qZWN0SW5kZXgoKVxuICAgICAgICBhbGxQcm9qZWN0c1twcm9qZWN0SW5kZXhdLnByb2plY3REZXRhaWxzLmFsbFRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICB0YXNrRGlzcGxheSh0YXNrLnRhc2tOYW1lLCB0YXNrLmRlc2NyaXB0aW9uLCB0YXNrLmR1ZURhdGUsIHRhc2sucHJpb3JpdHlMaXN0LCB0YXNrLmNoZWNrQm94KTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIG1ha2VBZGRUYXNrQnRuKCkge1xuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QnKTtcbiAgICBcbiAgICAgICAgY29uc3QgY29udGFpbmVyVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXJUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lci10YXNrLWJ0bicpO1xuICAgIFxuICAgICAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGFkZFRhc2tCdG4uc2V0QXR0cmlidXRlKCdpZCcsJ2FkZC10YXNrLWJ0bicpXG4gICAgICAgIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stYnRuJyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBhZGRJY29uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGFkZEljb25JbWcuc2V0QXR0cmlidXRlKCdzcmMnLCcvc3JjL2ljb25zL21hdGVyaWFsLXN5bWJvbHNfYWRkLnN2ZycpO1xuICAgICAgICBhZGRJY29uSW1nLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrLWJ0bicpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XG4gICAgXG4gICAgICAgIGFkZFRhc2tCdG4uYXBwZW5kQ2hpbGQoYWRkSWNvbkltZyk7XG4gICAgICAgIGFkZFRhc2tCdG4uYXBwZW5kQ2hpbGQoZGl2KVxuICAgICAgICBjb250YWluZXJUYXNrQnRuLmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xuICAgICAgICB0b2RvTGlzdC5hcHBlbmRDaGlsZChjb250YWluZXJUYXNrQnRuKTtcbiAgICB9O1xuICAgIFxuICAgIGZ1bmN0aW9uIGhlYWRlckRpc3BsYXkobmFtZSkge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICByZW5kZXJQcm9qVHRsZShoZWFkZXIsIG5hbWUpO1xuICAgIH07XG4gICAgXG4gICAgZnVuY3Rpb24gcmVuZGVyUHJvalR0bGUoYXBwZW5kLCBwcm9qVHRsZSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUnKTtcbiAgICAgICAgcHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCBwcm9qVHRsZSk7XG4gICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2pUdGxlO1xuICAgICAgICBwcm9qZWN0VGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IGNoYW5nZVByb2pOYW1lKHByb2pUdGxlKSk7XG4gICAgICAgIGFwcGVuZC5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiB0YXNrRm9ybShuYW1lKSB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcbiAgICBcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCd0YXNrLWZvcm0nKTtcbiAgICBcbiAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRhc2suc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpO1xuICAgICAgICB0YXNrLnNldEF0dHJpYnV0ZSgnaWQnLCdnZXQtdGFzay1uYW1lJyk7XG4gICAgICAgIHRhc2suc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsJ1Rhc2sgbmFtZScpO1xuICAgIFxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKTtcbiAgICAgICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsJ2dldC1kZXNjcmlwdGlvbicpO1xuICAgICAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywnRGVzY3JpcHRpb24nKTtcbiAgICBcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywnZGF0ZScpO1xuICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCdnZXQtZGF0ZScpO1xuICAgIFxuICAgICAgICBjb25zdCBwcmlvcml0eUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgcHJpb3JpdHlMaXN0LnNldEF0dHJpYnV0ZSgnaWQnLCdnZXQtcHJpb3JpdHktbGlzdCcpO1xuICAgIFxuICAgICAgICBjb25zdCB1cmdlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgdXJnZW50LnNldEF0dHJpYnV0ZSgndmFsdWUnLCd1cmdlbnQnKTtcbiAgICAgICAgdXJnZW50LnRleHRDb250ZW50ID0gJ3VyZ2VudCc7XG4gICAgXG4gICAgICAgIGNvbnN0IGltcG9ydGFudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBpbXBvcnRhbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsJ2ltcG9ydGFudCcpO1xuICAgICAgICBpbXBvcnRhbnQudGV4dENvbnRlbnQgPSAnaW1wb3J0YW50JztcbiAgICBcbiAgICAgICAgY29uc3Qgbm90SW1wb3J0YW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG5vdEltcG9ydGFudC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnbm90LWltcG9ydGFudCcpO1xuICAgICAgICBub3RJbXBvcnRhbnQudGV4dENvbnRlbnQgPSAnbm90LWltcG9ydGFudCc7XG4gICAgXG4gICAgICAgIGNvbnN0IGJ0bkNvbnRhaW5lcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBcbiAgICAgICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsJ3N1Ym1pdCcpO1xuICAgICAgICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCdpZCcsJ3N1Ym1pdC10YXNrLWJ0bicpO1xuICAgICAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSAnU3VibWl0JztcbiAgICAgICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzdWJtaXRUYXNrRm9ybShuYW1lKTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCdpZCcsJ2NhbmNlbC10YXNrLWJ0bicpO1xuICAgICAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnY2FuY2VsJztcbiAgICAgICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiBoZWFkZXJEaXNwbGF5KG5hbWUpKTtcbiAgICBcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHRhc2spO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUxpc3QpO1xuICAgICAgICBwcmlvcml0eUxpc3QuYXBwZW5kQ2hpbGQodXJnZW50KTtcbiAgICAgICAgcHJpb3JpdHlMaXN0LmFwcGVuZENoaWxkKGltcG9ydGFudCk7XG4gICAgICAgIHByaW9yaXR5TGlzdC5hcHBlbmRDaGlsZChub3RJbXBvcnRhbnQpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcnMpO1xuICAgICAgICBidG5Db250YWluZXJzLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG4gICAgICAgIGJ0bkNvbnRhaW5lcnMuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlVUlUYXNrQnRuKCkge1xuICAgICAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lci10YXNrLWJ0bicpO1xuICAgICAgICBhZGRUYXNrQnRuLnJlbW92ZSgpO1xuICAgICAgICBtYWtlQWRkVGFza0J0bigpO1xuICAgIH07XG4gICAgXG4gICAgZnVuY3Rpb24gdGFza0Rpc3BsYXkodGFzaywgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCBjaGVja0JveCkge1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdCcpO1xuICAgIFxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGFpbmVyLWRpc3BsYXknKTtcbiAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgdGFzayk7XG4gICAgXG4gICAgICAgIGNvbnN0IGJnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJnLmNsYXNzTGlzdC5hZGQoJ3Rhc2stYmFja2dyb3VuZCcpO1xuICAgIFxuICAgICAgICBjb25zdCBjaGVja0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjaGVja0xpc3Quc2V0QXR0cmlidXRlKCd0eXBlJywnY2hlY2tib3gnKTtcbiAgICAgICAgY2hlY2tMaXN0LnNldEF0dHJpYnV0ZSgnaWQnLCB0YXNrKTtcbiAgICAgICAgY2hlY2tMaXN0LmNsYXNzTGlzdC5hZGQoJ2NoZWNrLWJveCcpO1xuICAgICAgICBjaGVja0JveCA9PSAnY2hlY2tlZCcgPyBjaGVja0xpc3QuY2hlY2tlZCA9IHRydWUgOiBmYWxzZTsgIFxuICAgICAgICBjaGVja0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gc2F2ZUNoZWNrQm94KGNoZWNrTGlzdCx0YXNrKSk7XG4gICAgXG4gICAgICAgIGNvbnN0IHRhc2tEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgdGFza0Rpc3BsYXkuc2V0QXR0cmlidXRlKCdmb3InLHRhc2spO1xuICAgIFxuICAgICAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGgzLnNldEF0dHJpYnV0ZSgnaWQnLCd0YXNrLW5hbWUnKTtcbiAgICAgICAgaDMudGV4dENvbnRlbnQgPSB0YXNrO1xuICAgIFxuICAgICAgICBjb25zdCBkZXNjRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZXNjRGlzcGxheS5zZXRBdHRyaWJ1dGUoJ2lkJywnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgZGVzY0Rpc3BsYXkudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcbiAgICBcbiAgICAgICAgY29uc3QgZGF0ZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGF0ZURpc3BsYXkuc2V0QXR0cmlidXRlKCdpZCcsJ2RhdGUtZGlzcGxheScpO1xuICAgICAgICBkYXRlRGlzcGxheS50ZXh0Q29udGVudCA9IGRhdGU7XG4gICAgXG4gICAgICAgIGNvbnN0IHRhc2tCdG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tCdG5zLmNsYXNzTGlzdC5hZGQoJ3Rhc2tCdG5zJyk7XG4gICAgXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGRlbGV0ZUljb24uc2V0QXR0cmlidXRlKCdzcmMnLCcvc3JjL2ljb25zL2JpX3RyYXNoLWZpbGwuc3ZnJyk7XG4gICAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBkZWxldGVUYXNrRGlzcGxheSh0YXNrKTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIGNvbnN0IGVkaXRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGVkaXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGVkaXRJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywnL3NyYy9pY29ucy90YWJsZXJfZWRpdC5zdmcnKTtcbiAgICAgICAgZWRpdFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZW5kZXJFZGl0VGFzayh0YXNrKTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIHByaW9yaXR5Q29sb3IocHJpb3JpdHksIGNoZWNrTGlzdCwgZGF0ZURpc3BsYXkpO1xuICAgIFxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChiZyk7XG4gICAgICAgIGJnLmFwcGVuZENoaWxkKGNoZWNrTGlzdCk7XG4gICAgICAgIGJnLmFwcGVuZENoaWxkKHRhc2tEaXNwbGF5KTtcbiAgICAgICAgYmcuYXBwZW5kQ2hpbGQoZGF0ZURpc3BsYXkpO1xuICAgICAgICBiZy5hcHBlbmRDaGlsZCh0YXNrQnRucyk7XG4gICAgICAgIHRhc2tCdG5zLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgICAgIGRlbGV0ZUJ0bi5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcbiAgICAgICAgdGFza0J0bnMuYXBwZW5kQ2hpbGQoZWRpdFRhc2tCdG4pO1xuICAgICAgICBlZGl0VGFza0J0bi5hcHBlbmRDaGlsZChlZGl0SWNvbik7XG4gICAgICAgIHRhc2tEaXNwbGF5LmFwcGVuZENoaWxkKGgzKTtcbiAgICAgICAgdGFza0Rpc3BsYXkuYXBwZW5kQ2hpbGQoZGVzY0Rpc3BsYXkpO1xuICAgIH07XG4gICAgXG4gICAgZnVuY3Rpb24gcHJpb3JpdHlDb2xvcihwcmlvcml0eSwgY2hlY2tCb3gsIGRhdGUpIHtcbiAgICAgICAgaWYgKHByaW9yaXR5ID09ICd1cmdlbnQnKSB7XG4gICAgICAgICAgICBjaGVja0JveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0Y2NUM1Qyc7XG4gICAgICAgICAgICBkYXRlLnN0eWxlLmNvbG9yID0gJyNGNjVDNUMnO1xuICAgICAgICB9IGVsc2UgaWYgKHByaW9yaXR5ID09ICdpbXBvcnRhbnQnKSB7XG4gICAgICAgICAgICBjaGVja0JveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0Y2RDM1Qyc7XG4gICAgICAgICAgICBkYXRlLnN0eWxlLmNvbG9yID0gJyNGNkQzNUMnO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGVtcHR5VG9Eb0xpc3QoKSB7XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdCcpO1xuICAgICAgICB0b2RvTGlzdC50ZXh0Q29udGVudCA9ICcnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVNhdmVCdG4oKSB7XG4gICAgICAgIGNvbnN0IHNhdmVUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHNhdmVUYXNrQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCdzYXZlLXRhc2stYnRuJyk7XG4gICAgICAgIHNhdmVUYXNrQnRuLnRleHRDb250ZW50ID0gJ1NBVkUnO1xuICAgICAgICByZXR1cm4gc2F2ZVRhc2tCdG47XG4gICAgfTtcbiAgICBcbiAgICBmdW5jdGlvbiByZXBsYWNlQnRucyh0YXNrTmFtZSkge1xuICAgICAgICBjb25zdCBzdWJtaXRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC10YXNrLWJ0bicpO1xuICAgICAgICBjb25zdCBzYXZlVGFza0J0biA9IGNyZWF0ZVNhdmVCdG4oKTtcbiAgICAgICAgc2F2ZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzdWJtaXRFZGl0VGFzayh0YXNrTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBzdWJtaXRUYXNrQnRuLnJlcGxhY2VXaXRoKHNhdmVUYXNrQnRuKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gc3VibWl0VGFza0Zvcm0obmFtZSkge1xuICAgICAgICBjb25zdCB0YXNrSW5mbyA9IGdldFRhc2tJbmZvKClcbiAgICAgICAgY3JlYXRlVGFzayhuYW1lLCB0YXNrSW5mby50YXNrLCB0YXNrSW5mby5kZXNjcmlwdGlvbiwgdGFza0luZm8uZGF0ZSwgdGFza0luZm8ucHJpb3JpdHlMaXN0KTtcbiAgICAgICAgdGFza0Rpc3BsYXkodGFza0luZm8udGFzaywgdGFza0luZm8uZGVzY3JpcHRpb24sIHRhc2tJbmZvLmRhdGUsIHRhc2tJbmZvLnByaW9yaXR5TGlzdCk7XG4gICAgICAgIGhlYWRlckRpc3BsYXkobmFtZSk7XG4gICAgICAgIHVwZGF0ZVVJVGFza0J0bigpO1xuICAgICAgICBzYXZlRGF0YSgpO1xuICAgIH07XG4gICAgXG4gICAgZnVuY3Rpb24gcmVuZGVyRWRpdFRhc2sobmFtZU9mVGFzaykge1xuICAgICAgICBjb25zdCBuYW1lID0gZ2V0UHJvalRpdGxlKCk7XG4gICAgICAgIHRhc2tGb3JtKG5hbWUpO1xuICAgICAgICBjdXJyZW50VGFza0luZm8obmFtZU9mVGFzayk7XG4gICAgICAgIGNyZWF0ZVNhdmVCdG4oKTtcbiAgICAgICAgcmVwbGFjZUJ0bnMobmFtZU9mVGFzayk7XG4gICAgfTtcbiAgICBcbiAgICBmdW5jdGlvbiBjdXJyZW50VGFza0luZm8obmFtZVRhc2spIHtcbiAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gZmluZEluZGV4LnByb2plY3RJbmRleCgpO1xuICAgICAgICBjb25zdCB0YXNrSW5kZXggPSBmaW5kSW5kZXgudGFza0luZGV4KG5hbWVUYXNrKTtcbiAgICAgICAgY29uc3QgbmFtZSA9IGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0ucHJvamVjdERldGFpbHMuYWxsVGFza3NbdGFza0luZGV4XS50YXNrTmFtZTtcbiAgICAgICAgY29uc3QgZGV0YWlscyA9IGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0ucHJvamVjdERldGFpbHMuYWxsVGFza3NbdGFza0luZGV4XS5kZXNjcmlwdGlvbjtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0ucHJvamVjdERldGFpbHMuYWxsVGFza3NbdGFza0luZGV4XS5kdWVEYXRlO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0ucHJvamVjdERldGFpbHMuYWxsVGFza3NbdGFza0luZGV4XS5wcmlvcml0eUxpc3Q7XG4gICAgICAgIGNvbnN0IGdldFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2V0LXRhc2stbmFtZScpO1xuICAgICAgICBjb25zdCBnZXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZXQtZGVzY3JpcHRpb24nKTtcbiAgICAgICAgY29uc3QgZ2V0RGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZXQtZGF0ZScpO1xuICAgICAgICBjb25zdCBnZXRQcmlvcml0eUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2V0LXByaW9yaXR5LWxpc3QnKTsgXG4gICAgICAgIGdldFRhc2sudmFsdWUgPSBuYW1lO1xuICAgICAgICBnZXREZXNjcmlwdGlvbi52YWx1ZSA9IGRldGFpbHM7XG4gICAgICAgIGdldERhdGUudmFsdWUgPSBkdWVEYXRlO1xuICAgICAgICBnZXRQcmlvcml0eUxpc3QudmFsdWUgPSBwcmlvcml0eTtcbiAgICB9O1xuICAgIFxuICAgIGZ1bmN0aW9uIHN1Ym1pdEVkaXRUYXNrKHRhc2tOYW1lKSB7XG4gICAgICAgIHJlbW92ZURhdGFOYW1lQXR0cmlidXRlKHRhc2tOYW1lKTtcbiAgICAgICAgZWRpdFRhc2sodGFza05hbWUpO1xuICAgICAgICBzYXZlRGF0YSgpO1xuICAgICAgICBjb25zdCBuZXdJbmZvID0gZ2V0VGFza0luZm8oKTtcbiAgICAgICAgdGFza0Rpc3BsYXkobmV3SW5mby50YXNrLCBuZXdJbmZvLmRlc2NyaXB0aW9uLCBuZXdJbmZvLmRhdGUsIG5ld0luZm8ucHJpb3JpdHlMaXN0KTtcbiAgICAgICAgcmVtb3ZlVGFza0Zvcm0oKTtcbiAgICAgICAgdXBkYXRlVUlUYXNrQnRuKCk7XG4gICAgfTtcbiAgICBcbiAgICBmdW5jdGlvbiByZW1vdmVEYXRhTmFtZUF0dHJpYnV0ZShuYW1lT2ZUYXNrKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IGZpbmRJbmRleC5wcm9qZWN0SW5kZXgoKTtcbiAgICAgICAgY29uc3QgdGFza0luZGV4ID0gZmluZEluZGV4LnRhc2tJbmRleChuYW1lT2ZUYXNrKTsgXG4gICAgICAgIGNvbnN0IGN1cnJlbnRUYXNrTmFtZSA9IGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0ucHJvamVjdERldGFpbHMuYWxsVGFza3NbdGFza0luZGV4XS50YXNrTmFtZTtcbiAgICAgICAgY29uc3QgZGF0YUF0dHJpYnV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW5hbWU9JyR7Y3VycmVudFRhc2tOYW1lfSddYCk7XG4gICAgICAgIGRhdGFBdHRyaWJ1dGUucmVtb3ZlKCk7XG4gICAgfTtcbiAgICBcbiAgICBmdW5jdGlvbiByZW1vdmVUYXNrRm9ybSgpIHtcbiAgICAgICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1mb3JtJyk7XG4gICAgICAgIHRhc2tGb3JtLnJlbW92ZSgpO1xuICAgIH07XG4gICAgXG4gICAgZnVuY3Rpb24gZGVsZXRlVGFza0Rpc3BsYXkobmFtZU9mVGFzaykge1xuICAgICAgICByZW1vdmVEYXRhTmFtZUF0dHJpYnV0ZShuYW1lT2ZUYXNrKTtcbiAgICAgICAgZGVsZXRlVGFzayhuYW1lT2ZUYXNrKTtcbiAgICB9O1xuICAgIFxuICAgIGZ1bmN0aW9uIGNoYW5nZVByb2pOYW1lKG5hbWUpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuICAgIFxuICAgICAgICBjb25zdCBjaGFuZ2VOYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNoYW5nZU5hbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2hhbmdlLW5hbWUtY29udGFpbmVyJyk7XG4gICAgXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIG5ld1Byb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywnbmV3LXByb2plY3QtdGl0bGUnKTtcbiAgICAgICAgbmV3UHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgIG5ld1Byb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgbmFtZSk7XG4gICAgICAgIGhlYWRlci5yZXBsYWNlQ2hpbGQobmV3UHJvamVjdFRpdGxlLCBoZWFkZXIuZmlyc3RFbGVtZW50Q2hpbGQpO1xuICAgIFxuICAgICAgICBjb25zdCBidG5Db250YWluZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJ0bkNvbnRhaW5lcnMuY2xhc3NMaXN0LmFkZCgnYnRuLWNvbnRhaW5lcnMnKTtcbiAgICBcbiAgICAgICAgY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBzYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVuZGVyTmV3VHRsZShuYW1lKSlcbiAgICAgICAgc2F2ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywnc2F2ZS1idG4nKTtcbiAgICAgICAgc2F2ZUJ0bi50ZXh0Q29udGVudCA9ICdTQVZFJztcbiAgICBcbiAgICAgICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDQU5DRUwnO1xuICAgICAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCdpZCcsJ2NhbmNlbC1idG4nKTtcbiAgICAgICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gaGVhZGVyRGlzcGxheShuYW1lKSk7XG4gICAgXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChjaGFuZ2VOYW1lQ29udGFpbmVyKTtcbiAgICAgICAgY2hhbmdlTmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0VGl0bGUpO1xuICAgICAgICBjaGFuZ2VOYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcnMpO1xuICAgICAgICBidG5Db250YWluZXJzLmFwcGVuZENoaWxkKHNhdmVCdG4pO1xuICAgICAgICBidG5Db250YWluZXJzLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG4gICAgfTtcbiAgICBcbiAgICBmdW5jdGlvbiByZW5kZXJOZXdUdGxlKG5hbWUpIHtcbiAgICAgICAgc2F2ZU5hbWUobmFtZSk7XG4gICAgICAgIHNhdmVEYXRhKCk7XG4gICAgICAgIG5ld1R0bGVCdG4obmFtZSk7XG4gICAgICAgIGhlYWRlckRpc3BsYXkoZ2V0TmV3VHRsZSgpLnZhbHVlKTtcbiAgICB9O1xuICAgIFxuICAgIGZ1bmN0aW9uIG5ld1R0bGVCdG4oY3VycmVudFByb2opIHtcbiAgICAgICAgY29uc3QgbmV3VGl0bGUgPSBnZXROZXdUdGxlKCk7IFxuICAgICAgICBjb25zdCBDaGFuZ2VOYW1lYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7Y3VycmVudFByb2p9LWJ0bmApO1xuICAgICAgICBDaGFuZ2VOYW1lYnRuLnJlbW92ZUF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgQ2hhbmdlTmFtZWJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJyxgJHtuZXdUaXRsZS52YWx1ZX0tYnRuYCk7XG4gICAgICAgIENoYW5nZU5hbWVidG4udGV4dENvbnRlbnQgPSBuZXdUaXRsZS52YWx1ZTtcbiAgICAgICAgQ2hhbmdlTmFtZWJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4gaGVhZGVyRGlzcGxheShuZXdUaXRsZS52YWx1ZSkpO1xuICAgIH07XG4gICAgXG4gICAgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdEJ0bigpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGl0bGUnKTtcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cHJvamVjdFRpdGxlLnRleHRDb250ZW50fS1idG5gKTtcbiAgICAgICAgcHJvamVjdFRpdGxlQnRuLnJlbW92ZSgpO1xuICAgIH07XG4gICAgXG4gICAgZnVuY3Rpb24gZW1wdHlUb0RvUGFnZSgpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgZW1wdHlUb0RvTGlzdCgpO1xuICAgIH07XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFrZVByb2plY3RCdG4sXG4gICAgICAgIG1ha2VBZGRUYXNrQnRuLFxuICAgICAgICByZW1vdmVQcm9qZWN0QnRuLFxuICAgICAgICBlbXB0eVRvRG9MaXN0LFxuICAgICAgICBlbXB0eVRvRG9QYWdlLFxuICAgICAgICByZW5kZXJTYXZlZFRhc2ssXG4gICAgICAgIGhlYWRlckRpc3BsYXksXG4gICAgICAgIHRhc2tGb3JtLFxuICAgIH1cbn0pKCk7XG5cbmNvbnN0IERPTUV2ZW50cyA9ICgpID0+IHtcbiAgICBjb25zdCBkID0gZG9jdW1lbnQ7XG4gICAgZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmKGUudGFyZ2V0Lm1hdGNoZXMoJy5hZGQtcHJvamVjdC1idG4nKSB8fCBlLnRhcmdldC5tYXRjaGVzKCcjYWRkLWljb24nKSkge1xuICAgICAgICAgICAgY29uc3QgZ2V0UHJvalRpdGxlID0gZ2V0UHJvak5hbWUoKTtcbiAgICAgICAgICAgIGFkZFByb2plY3QoZ2V0UHJvalRpdGxlLnZhbHVlKTtcbiAgICAgICAgICAgIFVJLm1ha2VQcm9qZWN0QnRuKGdldFByb2pUaXRsZS52YWx1ZSk7XG4gICAgICAgICAgICBnZXRQcm9qVGl0bGUudmFsdWUgPSAnJztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnLmRlbGV0ZS1wcm9qZWN0LWJ0bicpKSB7XG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0KCk7XG4gICAgICAgICAgICBzYXZlRGF0YSgpOyBcbiAgICAgICAgICAgIFVJLnJlbW92ZVByb2plY3RCdG4oKTtcbiAgICAgICAgICAgIFVJLmVtcHR5VG9Eb1BhZ2UoKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoYCMke2UudGFyZ2V0LnRleHRDb250ZW50fS1idG5gKSkge1xuICAgICAgICAgICAgVUkuaGVhZGVyRGlzcGxheShlLnRhcmdldC50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICBVSS5lbXB0eVRvRG9MaXN0KCk7XG4gICAgICAgICAgICBVSS5yZW5kZXJTYXZlZFRhc2soKTtcbiAgICAgICAgICAgIFVJLm1ha2VBZGRUYXNrQnRuKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJy5hZGQtdGFzay1idG4nKSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgVUkudGFza0Zvcm0oZ2V0UHJvalRpdGxlKCkpO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5mdW5jdGlvbiByZW5kZXJUdGxlQnRuKHByb2plY3REYXRhKSB7XG4gICAgcHJvamVjdERhdGEuZm9yRWFjaChwID0+IHtcbiAgICAgICAgYWRkUHJvamVjdChwLnByb2plY3REZXRhaWxzLnByb2plY3ROYW1lKTtcbiAgICAgICAgVUkubWFrZVByb2plY3RCdG4ocC5wcm9qZWN0RGV0YWlscy5wcm9qZWN0TmFtZSk7XG4gICAgfSk7XG59O1xuXG5mdW5jdGlvbiByZW5kZXJUYXNrRGlzcGxheShwcm9qZWN0RGF0YSkge1xuICAgIHByb2plY3REYXRhLmZvckVhY2gocCA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IGFsbFByb2plY3RzLmZpbmRJbmRleChwcm9qZWN0ID0+IHByb2plY3QucHJvamVjdERldGFpbHMucHJvamVjdE5hbWUgPT09IChwLnByb2plY3REZXRhaWxzLnByb2plY3ROYW1lKSk7XG4gICAgICAgIGlmIChwLnByb2plY3REZXRhaWxzLmFsbFRhc2tzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgcC5wcm9qZWN0RGV0YWlscy5hbGxUYXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgIGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0uYWRkVGFzayh0YXNrLnRhc2tOYW1lLCB0YXNrLmRlc2NyaXB0aW9uLCB0YXNrLmR1ZURhdGUsIHRhc2sucHJpb3JpdHlMaXN0LCB0YXNrLmNoZWNrQm94KTtcbiAgICAgICAgICAgICAgICBzYXZlRGF0YSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhbGxQcm9qZWN0cyk7XG4gICAgICAgIH07XG4gICAgfSk7XG59O1xuXG5mdW5jdGlvbiByZW5kZXJTYXZlZERhdGEoKSB7XG4gICAgY29uc3QgYWxsUHJvamVjdERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWxsUHJvamVjdERhdGFcIikpO1xuICAgIGlmIChsb2NhbFN0b3JhZ2UubGVuZ3RoICE9PSAwKSB7XG4gICAgICBpZiAoYWxsUHJvamVjdHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICByZW5kZXJUdGxlQnRuKGFsbFByb2plY3REYXRhKTtcbiAgICAgICAgICByZW5kZXJUYXNrRGlzcGxheShhbGxQcm9qZWN0RGF0YSk7XG4gICAgICB9O1xuICAgIH07IFxufTtcblxuZXhwb3J0IHsgZ2V0VGFza0luZm8sIGdldFByb2pOYW1lLCBnZXROZXdUdGxlLCBnZXRQcm9qVGl0bGUsIERPTUV2ZW50cywgcmVuZGVyVHRsZUJ0biwgcmVuZGVyVGFza0Rpc3BsYXksIHJlbmRlclNhdmVkRGF0YSB9IiwiaW1wb3J0IHsgfSBmcm9tIFwiLi9ET01cIjtcbmltcG9ydCB7IGFsbFByb2plY3RzIH0gZnJvbSBcIi4vbG9naWNcIjtcblxuZnVuY3Rpb24gc2F2ZURhdGEoKSB7IFxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWxsUHJvamVjdERhdGFcIiwgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdHMpKTtcbiAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWxsUHJvamVjdERhdGFcIikpO1xufTtcblxuZXhwb3J0IHsgc2F2ZURhdGEgfVxuIiwiaW1wb3J0IHsgZ2V0VGFza0luZm8sIGdldE5ld1R0bGUsIGdldFByb2pUaXRsZSB9IGZyb20gXCIuL0RPTS5qc1wiO1xuaW1wb3J0IHsgc2F2ZURhdGEgfSBmcm9tIFwiLi9sb2NhbC1zdG9yYWdlLmpzXCI7XG5cbmNvbnN0IGFsbFByb2plY3RzID0gW107XG5cbmNvbnN0IHByb2plY3RNYW5hZ2VtZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGFkZFByb2plY3QgPSAodGl0bGUpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IG1ha2VQcm9qZWN0KHRpdGxlKTtcbiAgICAgICAgYWxsUHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICB9O1xuXG4gICAgY29uc3QgZWRpdFByb2plY3ROYW1lID0gKGksIG5hbWUpID0+IHtcbiAgICAgICAgIGFsbFByb2plY3RzW2ldLnByb2plY3REZXRhaWxzLnByb2plY3ROYW1lID0gbmFtZVxuICAgIH07XG4gICAgXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChpKSA9PiB7XG4gICAgICAgIGFsbFByb2plY3RzLnNwbGljZShpLDEpO1xuICAgIH07XG4gICAgXG4gICAgY29uc3Qgdmlld1Byb2plY3RzID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhhbGxQcm9qZWN0cyk7XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBtYWtlUHJvamVjdCA9IChwcm9qZWN0VGl0bGUpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdERldGFpbHMgPSB7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZTogcHJvamVjdFRpdGxlLFxuICAgICAgICAgICAgYWxsVGFza3M6IFtdXG4gICAgICAgIH07XG4gICAgXG4gICAgICAgIGNvbnN0IHRhc2tNYW5hZ2VtZW50ID0gbmV3IHRhc2tPcGVyYXRpb25zKHByb2plY3REZXRhaWxzKTtcbiAgICAgICAgY29uc3QgYWRkVGFzayA9IHRhc2tNYW5hZ2VtZW50LmFkZFRhc2s7XG4gICAgICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSB0YXNrTWFuYWdlbWVudC5kZWxldGVUYXNrO1xuICAgICAgICBjb25zdCBlZGl0VGFzayA9IHRhc2tNYW5hZ2VtZW50LmVkaXRUYXNrcztcbiAgICBcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByb2plY3REZXRhaWxzLFxuICAgICAgICAgICAgYWRkVGFzayxcbiAgICAgICAgICAgIGRlbGV0ZVRhc2ssXG4gICAgICAgICAgICBlZGl0VGFzayxcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkUHJvamVjdCxcbiAgICAgICAgZGVsZXRlUHJvamVjdCxcbiAgICAgICAgdmlld1Byb2plY3RzLFxuICAgICAgICBlZGl0UHJvamVjdE5hbWVcbiAgICB9O1xufTtcblxuY29uc3QgcHJvamVjdCA9IHByb2plY3RNYW5hZ2VtZW50KCk7XG5cbmNsYXNzIHRhc2tPcGVyYXRpb25zIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0KSAge1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIH1cblxuICAgIGFkZFRhc2sgPSAobmFtZSwgZGV0YWlscywgZGF0ZSwgcHJpb3JpdHlMaXN0LCBjaGVjaykgPT4ge1xuICAgICAgICBjb25zdCB0YXNrRGV0YWlscyA9IG5ldyB0YXNrKG5hbWUsIGRldGFpbHMsIGRhdGUsIHByaW9yaXR5TGlzdCwgY2hlY2spO1xuXG4gICAgICAgIHRoaXMucHJvamVjdC5hbGxUYXNrcy5wdXNoKHRhc2tEZXRhaWxzKTtcbiAgICB9XG5cbiAgICBkZWxldGVUYXNrKGkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdERldGFpbHMuYWxsVGFza3Muc3BsaWNlKGksMSlcbiAgICB9O1xufTtcblxuY2xhc3MgdGFzayB7XG4gICAgY29uc3RydWN0b3IodGFza05hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eUxpc3QsIGNoZWNrQm94KSB7XG4gICAgICAgIHRoaXMudGFza05hbWUgPSB0YXNrTmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5TGlzdCA9IHByaW9yaXR5TGlzdDtcbiAgICAgICAgdGhpcy5jaGVja0JveCA9IGNoZWNrQm94O1xuICAgIH07XG5cbiAgICBzZXQoKSB7XG4gICAgICAgIFt0aGlzLnRhc2tOYW1lLCB0aGlzLmRlc2NyaXB0aW9uLCB0aGlzLmR1ZURhdGUsIHRoaXMucHJpb3JpdHlMaXN0XSA9IHZhbHVlLnNwbGl0KFwiIFwiKTtcbiAgICB9O1xufTtcblxuY29uc3Qgc3RvcmVDaGVja0JveCA9IChuYW1lT2ZUYXNrKSA9PiB7XG4gICAgY29uc3QgbmFtZU9mUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRpdGxlJykudGV4dENvbnRlbnQ7XG4gICAgY29uc3QgcHJvamVjdEluZGV4ID0gYWxsUHJvamVjdHMuZmluZEluZGV4KHAgPT4gcC5wcm9qZWN0RGV0YWlscy5wcm9qZWN0TmFtZSA9PT0gbmFtZU9mUHJvamVjdCk7XG4gICAgY29uc3QgdGFza0luZGV4ID0gYWxsUHJvamVjdHNbcHJvamVjdEluZGV4XS5wcm9qZWN0RGV0YWlscy5hbGxUYXNrcy5maW5kSW5kZXgocCA9PiBwLnRhc2tOYW1lID09PSBuYW1lT2ZUYXNrKTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrKCkge1xuICAgICAgICBhbGxQcm9qZWN0c1twcm9qZWN0SW5kZXhdLnByb2plY3REZXRhaWxzLmFsbFRhc2tzW3Rhc2tJbmRleF0uY2hlY2tCb3ggPSAnY2hlY2tlZCc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdW5jaGVja2VkKCkge1xuICAgICAgICBhbGxQcm9qZWN0c1twcm9qZWN0SW5kZXhdLnByb2plY3REZXRhaWxzLmFsbFRhc2tzW3Rhc2tJbmRleF0uY2hlY2tCb3ggPSAndW5jaGVja2VkJztcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHsgY2hlY2ssIHVuY2hlY2tlZCB9XG59O1xuXG5mdW5jdGlvbiBzYXZlQ2hlY2tCb3goYm94LG5hbWVPZlRhc2spIHtcbiAgICBjb25zdCBjaGVja0JveCA9IHN0b3JlQ2hlY2tCb3gobmFtZU9mVGFzayk7IFxuICAgIGlmIChib3guY2hlY2tlZCA9PSB0cnVlKSB7XG4gICAgICAgIGNoZWNrQm94LmNoZWNrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2hlY2tCb3gudW5jaGVja2VkKCk7XG4gICAgfVxufTtcblxuZnVuY3Rpb24gYWRkUHJvamVjdChuYW1lT2ZQcm9qZWN0KSB7XG4gICAgcHJvamVjdC5hZGRQcm9qZWN0KG5hbWVPZlByb2plY3QpO1xuICAgIHNhdmVEYXRhKCk7XG59O1xuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KCkge1xuICAgIGNvbnN0IGluZGV4ID0gZmluZEluZGV4LnByb2plY3RJbmRleCgpO1xuICAgIHByb2plY3QuZGVsZXRlUHJvamVjdChpbmRleCk7XG59O1xuXG5jb25zdCBmaW5kSW5kZXggPSAoKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RJbmRleCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGdldFByb2pUaXRsZSgpO1xuICAgICAgICBjb25zdCBpbmRleCA9IGFsbFByb2plY3RzLmZpbmRJbmRleChwID0+IHAucHJvamVjdERldGFpbHMucHJvamVjdE5hbWUgPT09IG5hbWUpO1xuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfTtcblxuICAgIGNvbnN0IHRhc2tJbmRleCA9IChuYW1lVGFzaykgPT4gYWxsUHJvamVjdHNbcHJvamVjdEluZGV4KCldLnByb2plY3REZXRhaWxzLmFsbFRhc2tzLmZpbmRJbmRleChwID0+IHAudGFza05hbWUgPT09IG5hbWVUYXNrKTtcblxuICAgIHJldHVybiB7IHByb2plY3RJbmRleCAsIHRhc2tJbmRleH1cbn0pKCk7XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2sobmFtZVRhc2spIHtcbiAgICBjb25zdCBwcm9qSW5kZXggPSBmaW5kSW5kZXgucHJvamVjdEluZGV4KCk7XG4gICAgY29uc3QgdGFza0luZGV4ID0gZmluZEluZGV4LnRhc2tJbmRleChuYW1lVGFzayk7XG4gICAgYWxsUHJvamVjdHNbcHJvakluZGV4XS5kZWxldGVUYXNrKHRhc2tJbmRleCk7XG4gICAgc2F2ZURhdGEoKTtcbn07XG5cbmZ1bmN0aW9uIHNhdmVOYW1lKGN1cnJlbnRQcm9qKSB7XG4gICAgY29uc3QgbmV3VGl0bGUgPSBnZXROZXdUdGxlKCk7XG4gICAgY29uc3QgaW5kZXggPSBhbGxQcm9qZWN0cy5maW5kSW5kZXgocCA9PiBwLnByb2plY3REZXRhaWxzLnByb2plY3ROYW1lID09PSBjdXJyZW50UHJvaik7XG4gICAgcHJvamVjdC5lZGl0UHJvamVjdE5hbWUoaW5kZXgsIG5ld1RpdGxlLnZhbHVlKTtcbiAgICBwcm9qZWN0LnZpZXdQcm9qZWN0cygpO1xufTtcblxuZnVuY3Rpb24gZWRpdFRhc2sobmFtZVRhc2spIHtcbiAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBmaW5kSW5kZXgucHJvamVjdEluZGV4KCk7XG4gICAgY29uc3QgdGFza0luZGV4ID0gZmluZEluZGV4LnRhc2tJbmRleChuYW1lVGFzayk7XG4gICAgY29uc3QgbmV3SW5mbyA9IGdldFRhc2tJbmZvKCk7XG4gICAgYWxsUHJvamVjdHNbcHJvamVjdEluZGV4XS5wcm9qZWN0RGV0YWlscy5hbGxUYXNrc1t0YXNrSW5kZXhdLnRhc2tOYW1lID0gbmV3SW5mby50YXNrO1xuICAgIGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0ucHJvamVjdERldGFpbHMuYWxsVGFza3NbdGFza0luZGV4XS5kZXNjcmlwdGlvbiA9IG5ld0luZm8uZGVzY3JpcHRpb247XG4gICAgYWxsUHJvamVjdHNbcHJvamVjdEluZGV4XS5wcm9qZWN0RGV0YWlscy5hbGxUYXNrc1t0YXNrSW5kZXhdLmR1ZURhdGUgPSBuZXdJbmZvLmRhdGU7XG4gICAgYWxsUHJvamVjdHNbcHJvamVjdEluZGV4XS5wcm9qZWN0RGV0YWlscy5hbGxUYXNrc1t0YXNrSW5kZXhdLnByaW9yaXR5TGlzdCA9IG5ld0luZm8ucHJpb3JpdHlMaXN0O1xufTtcblxuZnVuY3Rpb24gY3JlYXRlVGFzayhuYW1lUHJvaiwgdHNrLCBkZXNjcnAsIGR0ZSwgcHJMaXN0KSB7XG4gICAgY29uc3QgaW5kZXggPSBhbGxQcm9qZWN0cy5maW5kSW5kZXgocCA9PiBwLnByb2plY3REZXRhaWxzLnByb2plY3ROYW1lID09PSBuYW1lUHJvaik7XG4gICAgYWxsUHJvamVjdHNbaW5kZXhdLmFkZFRhc2sodHNrLGRlc2NycCxkdGUscHJMaXN0KTtcbn07XG5cbmV4cG9ydCB7XG4gICAgcHJvamVjdE1hbmFnZW1lbnQsXG4gICAgYWxsUHJvamVjdHMsXG4gICAgc3RvcmVDaGVja0JveCxcbiAgICBzYXZlQ2hlY2tCb3gsXG4gICAgY3JlYXRlVGFzayxcbiAgICBwcm9qZWN0LFxuICAgIGFkZFByb2plY3QsXG4gICAgZGVsZXRlVGFzayxcbiAgICBlZGl0VGFzayxcbiAgICBzYXZlTmFtZSxcbiAgICBkZWxldGVQcm9qZWN0LFxuICAgIGZpbmRJbmRleCxcbiAgICB9XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCJcbmltcG9ydCB7IERPTUV2ZW50cywgcmVuZGVyU2F2ZWREYXRhIH0gZnJvbSAnLi9ET00uanMnXG5cbnJlbmRlclNhdmVkRGF0YSgpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBET01FdmVudHMoKTtcbn0pO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=