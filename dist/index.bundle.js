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
    position: relative;
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
    position: absolute;
    flex-direction: column;
    padding: 3rem;
    justify-content: space-between;
    position: absolute;
    height: 13rem;
    width: 45%;
    left: 30%;
    margin-left: -50px;
    top: 30%;
    margin-top: -50px;
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

#blur   {
    filter: blur(5px);
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -o-filter: blur(5px);
    -ms-filter: blur(5px);
}

#overlay    {
    position: fixed;
    display: none;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    background: rgba(255,255,255,.8);
    z-index: 999;
}





`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n}\n\n#headline {\n    display: inline-block;\n    grid-column: span 2;\n    background-color: #92C1B2;\n    color: aliceblue;\n    font-weight: bolder;\n    font-size: 4rem;\n    letter-spacing: 10px;\n    overflow: hidden;\n}\n\n#todo-list-icon {\n    margin-right: 2rem;\n}\n\n#text {\n    padding-top: 1.4rem;\n    padding-left: 23rem;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: 1.5fr 4fr;\n    grid-template-rows: 0.6fr 4fr;\n    height: 100vh;\n    width: 100vw;\n    position: relative;\n}\n\n.todo-list-container {\n    display: grid;\n    grid-template-columns: 1.3fr 4fr;\n    width: 100vw;\n}\n\n.main {\n    background-color: #bdd6d6;\n    overflow:hidden;\n}\n\n.title-add-project {\n    display: flex;\n    outline-style: solid;\n    color: turquoise;\n}\n\n.all-projects {\n    display: flex;\n    flex-direction: column;\n}\n\n.header {\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  position: relative;\n}\n\n.newProjectTitle,\n.btn-containers {\n    display: flex;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n};\n\n.task-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.side-bar {\n    display: flex;\n    flex-direction: column;\n}\n\n.project-btn-container {\n    display: grid;\n    grid-template-columns: 3fr 1fr;\n}\n\n.today,\n.upcoming,\n.show-projects-container {\n    display: grid;\n    grid-template-columns: 0.7fr 3fr;\n    font-size: 2rem;\n    padding-top: 0.8rem;\n    padding-bottom: 0.8rem;\n    letter-spacing: 0.3rem;\n    background-color: white;\n    border-color: #92C1B2;\n    border-style: solid;\n    color: #92C1B2;\n    font-weight: bolder;\n}\n\n.today:hover,\n.upcoming:hover,\n.all-projects > button:hover {\n    background: #6eb49f;\n    opacity: 50%;\n    color: white;\n}\n\n.upcoming {\n    border-top: none;\n}\n\n.today > div,\n.upcoming > div {\n    justify-self: left;\n    padding-left: 2rem;\n}\n\n.show-projects-container {\n    grid-template-columns: 1fr 1.9fr 1fr;\n    border-top: none;\n}\n\n#projects-btn {\n    font-size: 2rem;\n    letter-spacing: 0.3rem;\n    display: inline-block;\n    background-color: white;\n    text-align: left;\n    font-weight: bolder;\n    color: #92C1B2;\n    border-style: none;\n}\n\n.drop-down-btn {\n    background-color: white;\n    border-style: none;\n}\n\n#projects-icon {\n    padding-right: 1.9rem;\n}\n\n.all-projects {\n    display: flex;\n    flex-direction: column;\n    gap: 0.9px;\n    width: 50%;\n    height: 40%;\n    padding-left: 8rem;\n    padding-top: 2rem;\n}\n\n.all-projects > button {\n    height: 2.7rem;\n    font-size: 1.5rem;\n    background-color: white;\n    border-color: #92C1B2;\n    border-style: solid;\n    color: #92C1B2;\n    font-weight: bolder;\n}\n\n.sidebar-icons {\n    justify-self: end;\n}\n\n.input-project {\n    padding-top: 4rem;\n    align-self: center;\n}\n\n.input-project > div {\n    display: grid;\n    grid-template-columns: 10fr 1.5fr;\n    height: 3rem;\n}\n\n#get-project-title {\n    background: #EFEFEF;\n    border-style: solid;\n    border-color: #92C1B2;\n    font-size: 1.5rem;\n}\n\n.add-project-btn {\n    background-color: #92C1B2;\n    border-style: none;\n}\n\n.delete-project-btn {\n    margin-top: 1rem;\n    text-align: center;\n    width: 100%;\n    height: 2.5rem;\n    font-size: larger;\n    letter-spacing: 0.2rem;\n    background-color: #92C1B2;\n    font-weight: bolder;\n    color: white;\n    border-style: none;\n}\n\n.delete-project-btn:hover {\n    border-style: solid;\n    border-color: #6eb49f;\n    background-color: white;\n    color: #6eb49f;\n}\n\n.project-title {\n    padding-top: 1rem;\n    padding-bottom: 3rem;\n    font-size: 3.5rem;\n    font-weight: bolder;\n    color: white;\n    letter-spacing: 10px;\n}\n\n#add-task-btn {\n    display: grid;\n    grid-template-columns: 2fr 3.5fr;\n    width: 20%;\n    padding: 1.2rem 1.3rem 1.2rem 1.3rem;\n    font-size: 1rem;\n    letter-spacing: 5px;\n    background-color: #6eb49f;\n    color: white;\n    font-weight: bold;\n    border-radius: 4vw;\n    border-style: none;\n    margin-left: 3rem;\n}\n\n#add-task-btn > div {\n    align-self:center;\n    justify-self: left;\n}\n\n#add-task-btn > img {\n    align-self: center;\n    justify-self: center;\n}\n\n#add-task-btn:hover {\n    background-color: #78C4AD;\n}\n\n.change-name-container {\n    padding-top: 2.5rem;\n}\n\n#new-project-title {\n    height: 3.5rem;\n    width: 24rem;\n    font-size: 2.5rem;\n    letter-spacing: 0.5rem;\n    background-color: #6eb49f;\n    color: white;\n    border-style: none;\n    border-radius: 0.2vw;\n}\n\n.btn-containers {\n    padding-top: 1rem;\n}\n\n#save-btn,\n#cancel-btn {\n    padding: 0.5rem 0.7rem 0.5rem 0.7rem;\n    font-weight: bold;\n    color: white;\n    letter-spacing: 3px;\n    border-radius:0.5vw;\n}\n\n#save-btn {\n    margin-right: 1.5rem;\n    background-color: #8ED0DE;\n    border-style: none;\n}\n\n#cancel-btn {\n    background-color: #92C1B2;\n    border-style: none;\n}\n\n#save-btn:hover,\n#cancel-btn:hover {\n    border-style: solid;\n    border-color: white;\n}\n\n.task-form {\n    display: flex;\n    position: absolute;\n    flex-direction: column;\n    padding: 3rem;\n    justify-content: space-between;\n    position: absolute;\n    height: 13rem;\n    width: 45%;\n    left: 30%;\n    margin-left: -50px;\n    top: 30%;\n    margin-top: -50px;\n    background: white;\n    z-index: 1;\n}\n\n.task-form > input,\n.task-form > select {\n    background-color: #6eb49f;\n    color: white;\n    height: 2rem;\n    border-style: none;\n    border-radius: 0.3vw;\n}\n\ntextarea {\n    background-color: #6eb49f;\n    border-radius: 0.3vw;\n}\n\n#cancel-task-btn,\n#submit-task-btn,\n#save-task-btn {\n    padding: 0.5rem 0.7rem 0.5rem 0.7rem;\n    font-weight: bolder;\n}\n\n#submit-task-btn:hover,\n#save-task-btn:hover {\n    background-color: #75D7BA;\n}\n\n#cancel-task-btn:hover {\n    background-color: #6eb49f;\n    color: white;\n    border-radius: 0.3vw;  \n    border-style: none; \n}\n\n#submit-task-btn,\n#save-task-btn {\n    background-color: #6eb49f;\n    color: white;\n    border-radius: 0.3vw;  \n    border-style: none; \n}\n\n#cancel-task-btn {\n    margin-left: 1rem;\n    color: #6eb49f;\n    background-color: white;\n    border-style: solid;\n    border-color: #6eb49f;\n    border-radius: 0.3vw; \n}\n\n.task-container-display {\n    height: 9%;\n}\n\n.task-background {\n    background-color: white;\n    width: 80%;\n    height: 100%;\n    margin-left: 3.8rem;\n    display: grid;\n    grid-template-columns: 0.7fr 4fr 1fr 0.7fr ;\n    justify-content: center;\n    align-items: center;\n}\n\n.task-background > input[type=\"checkbox\"] {\n    align-self: center;\n    justify-self: center;\n    appearance: none;\n    margin: 0;\n    font: inherit;\n    width: 2.15em;\n    border-color: #6eb49f;\n    border-style: solid;\n    height: 2.15em;\n    border-radius: 0.15em;\n    transform: translateY(-0.075em);\n    display: grid;\n    place-content: center;    \n    border-radius: 3vw;\n}\n\n.task-background > input[type=\"checkbox\"]:checked {\n    content: \"\";\n    width: 0.65em;\n    height: 0.65em;\n    transform: scale(3);\n    background-color: #6eb49f !important;\n    transition: 120ms transform ease-in-out;\n}\n\n.todo-list {\n    display: flex;\n    flex-direction: column;   \n    height: 100%;\n    gap: 1rem;\n}\n\n.taskBtns {\n    display: flex;\n    flex-direction: column;\n    justify-self: center;\n    align-self: center;\n    background-color: none;\n    gap: 4px;\n}\n\n.taskBtns > button {\n    background-color: white;\n    border-style: none;\n}\n\n.taskBtns > button:hover {\n    background: whitesmoke;\n} \n\n#date-display {\n    font-weight: bolder;\n    font-size: 1.6rem;\n}\n\n#blur   {\n    filter: blur(5px);\n    -webkit-filter: blur(5px);\n    -moz-filter: blur(5px);\n    -o-filter: blur(5px);\n    -ms-filter: blur(5px);\n}\n\n#overlay    {\n    position: fixed;\n    display: none;\n    left: 0px;\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    background: rgba(255,255,255,.8);\n    z-index: 999;\n}\n\n\n\n\n\n"],"sourceRoot":""}]);
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
        div.classList.add('add-task-btn');
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
        const bg = document.querySelector('.todo-list-container');
        bg.setAttribute('id','blur') 
    
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
    
        document.body.appendChild(form);
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

    function removeBlurAttribute() {
        const todoListContainer = document.querySelector('.todo-list-container');
        todoListContainer.removeAttribute('id');
    }

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
        } 
        if (priority == 'important') {
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
        removeBlurAttribute,
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
            _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.removeBlurAttribute();
            let projTitle = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.getProjTitle)();
            newInfo = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.getTaskInfo)();
            _pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.publish('createTask', projTitle, newInfo.task, newInfo.description, newInfo.date, newInfo.priorityList);
            _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.taskDisplay(newInfo.task, newInfo.description, newInfo.date, newInfo.priorityList);
            _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.headerDisplay(projTitle);
            _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.updateUITaskBtn();
            _pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.publish('saveData', _local_storage__WEBPACK_IMPORTED_MODULE_2__.saveData); 
            _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.removeTaskForm();
        }
        if (e.target.matches('#cancel-task-btn')) {
            e.preventDefault();
            _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.removeBlurAttribute();
            _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.removeTaskForm();
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
            _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.removeBlurAttribute();
            _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.removeDataNameAttribute(task);
            _pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.publish('editTask', task);
            _pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.publish('saveData');
            newInfo = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.getTaskInfo)();
            _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.taskDisplay(newInfo.task, newInfo.description, newInfo.date, newInfo.priorityList);
            _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.removeTaskForm();
            _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.updateUITaskBtn();
        };
        if (e.target.matches('.today') || e.target.textContent == "Today") {
            _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.emptyToDoPage();
            _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.headerDisplay('TODAY');
            (0,_logic__WEBPACK_IMPORTED_MODULE_1__.todayAndUpcomingTask)().displayTodayTasks();
        };
        if (e.target.matches('.upcoming') || e.target.textContent == "Upcoming") {
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
        let mm = String(today.getMonth() + 1).padStart(2, '0'); 
        let yyyy = today.getFullYear();

        return today = yyyy + '-' + mm + '-' + dd;
    }

    const displayTodayTasks = () => allProjects.forEach(p => p.projectDetails.allTasks.forEach(t => {
        if (t.dueDate == todayDate()) {
            _DOM_js__WEBPACK_IMPORTED_MODULE_0__.UI.taskDisplay(t.taskName, t.description, t.dueDate, t.priorityList, t.checkBox);
        }
    })); 
    
    const displayUpcomingTask = () =>  allProjects.forEach(p => p.projectDetails.allTasks.forEach(t => {
        if (t.dueDate > todayDate()) {
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
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic */ "./src/logic.js");
/* harmony import */ var _DOM_events_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM_events.js */ "./src/DOM_events.js");
/* harmony import */ var _renderStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderStorage */ "./src/renderStorage.js");






window.addEventListener('DOMContentLoaded', () => {
    (0,_renderStorage__WEBPACK_IMPORTED_MODULE_4__.renderSavedData)();
    _DOM__WEBPACK_IMPORTED_MODULE_1__.UI.emptyToDoPage();
    _DOM__WEBPACK_IMPORTED_MODULE_1__.UI.headerDisplay('TODAY');
    (0,_logic__WEBPACK_IMPORTED_MODULE_2__.todayAndUpcomingTask)().displayTodayTasks();
});

document.addEventListener('DOMContentLoaded', () => {
    (0,_DOM_events_js__WEBPACK_IMPORTED_MODULE_3__.DOMEvents)();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQSxPQUFPLGdGQUFnRixVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFlBQVksS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sT0FBTyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxPQUFPLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE9BQU8sWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFB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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2Qiw2Q0FBUztBQUN0QyxRQUFRLCtDQUFXO0FBQ25CO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0REFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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dHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET01fZXZlbnRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2NhbC1zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHVic3ViLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9yZW5kZXJTdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbiNoZWFkbGluZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkyQzFCMjtcbiAgICBjb2xvcjogYWxpY2VibHVlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAxMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiN0b2RvLWxpc3QtaWNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xufVxuXG4jdGV4dCB7XG4gICAgcGFkZGluZy10b3A6IDEuNHJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIzcmVtO1xufVxuXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS41ZnIgNGZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC42ZnIgNGZyO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRvZG8tbGlzdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjNmciA0ZnI7XG4gICAgd2lkdGg6IDEwMHZ3O1xufVxuXG4ubWFpbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JkZDZkNjtcbiAgICBvdmVyZmxvdzpoaWRkZW47XG59XG5cbi50aXRsZS1hZGQtcHJvamVjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBvdXRsaW5lLXN0eWxlOiBzb2xpZDtcbiAgICBjb2xvcjogdHVycXVvaXNlO1xufVxuXG4uYWxsLXByb2plY3RzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubmV3UHJvamVjdFRpdGxlLFxuLmJ0bi1jb250YWluZXJzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcbn07XG5cbi50YXNrLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc2lkZS1iYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnByb2plY3QtYnRuLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7XG59XG5cbi50b2RheSxcbi51cGNvbWluZyxcbi5zaG93LXByb2plY3RzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuN2ZyIDNmcjtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgcGFkZGluZy10b3A6IDAuOHJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC44cmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjNyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLWNvbG9yOiAjOTJDMUIyO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgY29sb3I6ICM5MkMxQjI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLnRvZGF5OmhvdmVyLFxuLnVwY29taW5nOmhvdmVyLFxuLmFsbC1wcm9qZWN0cyA+IGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzZlYjQ5ZjtcbiAgICBvcGFjaXR5OiA1MCU7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4udXBjb21pbmcge1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG59XG5cbi50b2RheSA+IGRpdixcbi51cGNvbWluZyA+IGRpdiB7XG4gICAganVzdGlmeS1zZWxmOiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbn1cblxuLnNob3ctcHJvamVjdHMtY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxLjlmciAxZnI7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbn1cblxuI3Byb2plY3RzLWJ0biB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjNyZW07XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBjb2xvcjogIzkyQzFCMjtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbi5kcm9wLWRvd24tYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbiNwcm9qZWN0cy1pY29uIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjlyZW07XG59XG5cbi5hbGwtcHJvamVjdHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDAuOXB4O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiA0MCU7XG4gICAgcGFkZGluZy1sZWZ0OiA4cmVtO1xuICAgIHBhZGRpbmctdG9wOiAycmVtO1xufVxuXG4uYWxsLXByb2plY3RzID4gYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDIuN3JlbTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItY29sb3I6ICM5MkMxQjI7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBjb2xvcjogIzkyQzFCMjtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4uc2lkZWJhci1pY29ucyB7XG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XG59XG5cbi5pbnB1dC1wcm9qZWN0IHtcbiAgICBwYWRkaW5nLXRvcDogNHJlbTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5pbnB1dC1wcm9qZWN0ID4gZGl2IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTBmciAxLjVmcjtcbiAgICBoZWlnaHQ6IDNyZW07XG59XG5cbiNnZXQtcHJvamVjdC10aXRsZSB7XG4gICAgYmFja2dyb3VuZDogI0VGRUZFRjtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogIzkyQzFCMjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmFkZC1wcm9qZWN0LWJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkyQzFCMjtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbi5kZWxldGUtcHJvamVjdC1idG4ge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMi41cmVtO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjJyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkyQzFCMjtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbi5kZWxldGUtcHJvamVjdC1idG46aG92ZXIge1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjNmViNDlmO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiAjNmViNDlmO1xufVxuXG4ucHJvamVjdC10aXRsZSB7XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDNyZW07XG4gICAgZm9udC1zaXplOiAzLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XG59XG5cbiNhZGQtdGFzay1idG4ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMy41ZnI7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBwYWRkaW5nOiAxLjJyZW0gMS4zcmVtIDEuMnJlbSAxLjNyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZlYjQ5ZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHZ3O1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogM3JlbTtcbn1cblxuI2FkZC10YXNrLWJ0biA+IGRpdiB7XG4gICAgYWxpZ24tc2VsZjpjZW50ZXI7XG4gICAganVzdGlmeS1zZWxmOiBsZWZ0O1xufVxuXG4jYWRkLXRhc2stYnRuID4gaW1nIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cbiNhZGQtdGFzay1idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OEM0QUQ7XG59XG5cbi5jaGFuZ2UtbmFtZS1jb250YWluZXIge1xuICAgIHBhZGRpbmctdG9wOiAyLjVyZW07XG59XG5cbiNuZXctcHJvamVjdC10aXRsZSB7XG4gICAgaGVpZ2h0OiAzLjVyZW07XG4gICAgd2lkdGg6IDI0cmVtO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZlYjQ5ZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMnZ3O1xufVxuXG4uYnRuLWNvbnRhaW5lcnMge1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xufVxuXG4jc2F2ZS1idG4sXG4jY2FuY2VsLWJ0biB7XG4gICAgcGFkZGluZzogMC41cmVtIDAuN3JlbSAwLjVyZW0gMC43cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6MC41dnc7XG59XG5cbiNzYXZlLWJ0biB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhFRDBERTtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbiNjYW5jZWwtYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTJDMUIyO1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuI3NhdmUtYnRuOmhvdmVyLFxuI2NhbmNlbC1idG46aG92ZXIge1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnRhc2stZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAzcmVtO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxM3JlbTtcbiAgICB3aWR0aDogNDUlO1xuICAgIGxlZnQ6IDMwJTtcbiAgICBtYXJnaW4tbGVmdDogLTUwcHg7XG4gICAgdG9wOiAzMCU7XG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgei1pbmRleDogMTtcbn1cblxuLnRhc2stZm9ybSA+IGlucHV0LFxuLnRhc2stZm9ybSA+IHNlbGVjdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZlYjQ5ZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjN2dztcbn1cblxudGV4dGFyZWEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZWI0OWY7XG4gICAgYm9yZGVyLXJhZGl1czogMC4zdnc7XG59XG5cbiNjYW5jZWwtdGFzay1idG4sXG4jc3VibWl0LXRhc2stYnRuLFxuI3NhdmUtdGFzay1idG4ge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjdyZW0gMC41cmVtIDAuN3JlbTtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4jc3VibWl0LXRhc2stYnRuOmhvdmVyLFxuI3NhdmUtdGFzay1idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NUQ3QkE7XG59XG5cbiNjYW5jZWwtdGFzay1idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZWI0OWY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuM3Z3OyAgXG4gICAgYm9yZGVyLXN0eWxlOiBub25lOyBcbn1cblxuI3N1Ym1pdC10YXNrLWJ0bixcbiNzYXZlLXRhc2stYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmViNDlmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjN2dzsgIFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTsgXG59XG5cbiNjYW5jZWwtdGFzay1idG4ge1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgIGNvbG9yOiAjNmViNDlmO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjNmViNDlmO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuM3Z3OyBcbn1cblxuLnRhc2stY29udGFpbmVyLWRpc3BsYXkge1xuICAgIGhlaWdodDogOSU7XG59XG5cbi50YXNrLWJhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAzLjhyZW07XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuN2ZyIDRmciAxZnIgMC43ZnIgO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50YXNrLWJhY2tncm91bmQgPiBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250OiBpbmhlcml0O1xuICAgIHdpZHRoOiAyLjE1ZW07XG4gICAgYm9yZGVyLWNvbG9yOiAjNmViNDlmO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgaGVpZ2h0OiAyLjE1ZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4xNWVtO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4wNzVlbSk7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7ICAgIFxuICAgIGJvcmRlci1yYWRpdXM6IDN2dztcbn1cblxuLnRhc2stYmFja2dyb3VuZCA+IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHdpZHRoOiAwLjY1ZW07XG4gICAgaGVpZ2h0OiAwLjY1ZW07XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgzKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmViNDlmICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogMTIwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xufVxuXG4udG9kby1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAgXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGdhcDogMXJlbTtcbn1cblxuLnRhc2tCdG5zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG4gICAgZ2FwOiA0cHg7XG59XG5cbi50YXNrQnRucyA+IGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG4udGFza0J0bnMgPiBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG59IFxuXG4jZGF0ZS1kaXNwbGF5IHtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG4jYmx1ciAgIHtcbiAgICBmaWx0ZXI6IGJsdXIoNXB4KTtcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cig1cHgpO1xuICAgIC1tb3otZmlsdGVyOiBibHVyKDVweCk7XG4gICAgLW8tZmlsdGVyOiBibHVyKDVweCk7XG4gICAgLW1zLWZpbHRlcjogYmx1cig1cHgpO1xufVxuXG4jb3ZlcmxheSAgICB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgbGVmdDogMHB4O1xuICAgIHRvcDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuOCk7XG4gICAgei1pbmRleDogOTk5O1xufVxuXG5cblxuXG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEMsQ0FBQTs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTs7O0lBR0ksYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsY0FBYztJQUNk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Q3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixTQUFTO0lBQ1QsUUFBUTtJQUNSLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuI2hlYWRsaW5lIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTJDMUIyO1xcbiAgICBjb2xvcjogYWxpY2VibHVlO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAxMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4jdG9kby1saXN0LWljb24ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxufVxcblxcbiN0ZXh0IHtcXG4gICAgcGFkZGluZy10b3A6IDEuNHJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAyM3JlbTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS41ZnIgNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNmZyIDRmcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50b2RvLWxpc3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjNmciA0ZnI7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLm1haW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRkNmQ2O1xcbiAgICBvdmVyZmxvdzpoaWRkZW47XFxufVxcblxcbi50aXRsZS1hZGQtcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG91dGxpbmUtc3R5bGU6IHNvbGlkO1xcbiAgICBjb2xvcjogdHVycXVvaXNlO1xcbn1cXG5cXG4uYWxsLXByb2plY3RzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubmV3UHJvamVjdFRpdGxlLFxcbi5idG4tY29udGFpbmVycyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxufTtcXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc2lkZS1iYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucHJvamVjdC1idG4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyO1xcbn1cXG5cXG4udG9kYXksXFxuLnVwY29taW5nLFxcbi5zaG93LXByb2plY3RzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC43ZnIgM2ZyO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHBhZGRpbmctdG9wOiAwLjhyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjhyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItY29sb3I6ICM5MkMxQjI7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGNvbG9yOiAjOTJDMUIyO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4udG9kYXk6aG92ZXIsXFxuLnVwY29taW5nOmhvdmVyLFxcbi5hbGwtcHJvamVjdHMgPiBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjNmViNDlmO1xcbiAgICBvcGFjaXR5OiA1MCU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnVwY29taW5nIHtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG59XFxuXFxuLnRvZGF5ID4gZGl2LFxcbi51cGNvbWluZyA+IGRpdiB7XFxuICAgIGp1c3RpZnktc2VsZjogbGVmdDtcXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbn1cXG5cXG4uc2hvdy1wcm9qZWN0cy1jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxLjlmciAxZnI7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxufVxcblxcbiNwcm9qZWN0cy1idG4ge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjNyZW07XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGNvbG9yOiAjOTJDMUIyO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi5kcm9wLWRvd24tYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuI3Byb2plY3RzLWljb24ge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjlyZW07XFxufVxcblxcbi5hbGwtcHJvamVjdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuOXB4O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDQwJTtcXG4gICAgcGFkZGluZy1sZWZ0OiA4cmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXG59XFxuXFxuLmFsbC1wcm9qZWN0cyA+IGJ1dHRvbiB7XFxuICAgIGhlaWdodDogMi43cmVtO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1jb2xvcjogIzkyQzFCMjtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgY29sb3I6ICM5MkMxQjI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi5zaWRlYmFyLWljb25zIHtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5pbnB1dC1wcm9qZWN0IHtcXG4gICAgcGFkZGluZy10b3A6IDRyZW07XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmlucHV0LXByb2plY3QgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwZnIgMS41ZnI7XFxuICAgIGhlaWdodDogM3JlbTtcXG59XFxuXFxuI2dldC1wcm9qZWN0LXRpdGxlIHtcXG4gICAgYmFja2dyb3VuZDogI0VGRUZFRjtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiAjOTJDMUIyO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MkMxQjI7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0LWJ0biB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkyQzFCMjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdC1idG46aG92ZXIge1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6ICM2ZWI0OWY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogIzZlYjQ5ZjtcXG59XFxuXFxuLnByb2plY3QtdGl0bGUge1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDNyZW07XFxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxMHB4O1xcbn1cXG5cXG4jYWRkLXRhc2stYnRuIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMy41ZnI7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIHBhZGRpbmc6IDEuMnJlbSAxLjNyZW0gMS4ycmVtIDEuM3JlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmViNDlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXItcmFkaXVzOiA0dnc7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDNyZW07XFxufVxcblxcbiNhZGQtdGFzay1idG4gPiBkaXYge1xcbiAgICBhbGlnbi1zZWxmOmNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBsZWZ0O1xcbn1cXG5cXG4jYWRkLXRhc2stYnRuID4gaW1nIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI2FkZC10YXNrLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OEM0QUQ7XFxufVxcblxcbi5jaGFuZ2UtbmFtZS1jb250YWluZXIge1xcbiAgICBwYWRkaW5nLXRvcDogMi41cmVtO1xcbn1cXG5cXG4jbmV3LXByb2plY3QtdGl0bGUge1xcbiAgICBoZWlnaHQ6IDMuNXJlbTtcXG4gICAgd2lkdGg6IDI0cmVtO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZlYjQ5ZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMnZ3O1xcbn1cXG5cXG4uYnRuLWNvbnRhaW5lcnMge1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG59XFxuXFxuI3NhdmUtYnRuLFxcbiNjYW5jZWwtYnRuIHtcXG4gICAgcGFkZGluZzogMC41cmVtIDAuN3JlbSAwLjVyZW0gMC43cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xcbiAgICBib3JkZXItcmFkaXVzOjAuNXZ3O1xcbn1cXG5cXG4jc2F2ZS1idG4ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhFRDBERTtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4jY2FuY2VsLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MkMxQjI7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuI3NhdmUtYnRuOmhvdmVyLFxcbiNjYW5jZWwtYnRuOmhvdmVyIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRhc2stZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogM3JlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMTNyZW07XFxuICAgIHdpZHRoOiA0NSU7XFxuICAgIGxlZnQ6IDMwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IC01MHB4O1xcbiAgICB0b3A6IDMwJTtcXG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4udGFzay1mb3JtID4gaW5wdXQsXFxuLnRhc2stZm9ybSA+IHNlbGVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZWI0OWY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3Z3O1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZWI0OWY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3Z3O1xcbn1cXG5cXG4jY2FuY2VsLXRhc2stYnRuLFxcbiNzdWJtaXQtdGFzay1idG4sXFxuI3NhdmUtdGFzay1idG4ge1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC43cmVtIDAuNXJlbSAwLjdyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbiNzdWJtaXQtdGFzay1idG46aG92ZXIsXFxuI3NhdmUtdGFzay1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzVEN0JBO1xcbn1cXG5cXG4jY2FuY2VsLXRhc2stYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZlYjQ5ZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjN2dzsgIFxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7IFxcbn1cXG5cXG4jc3VibWl0LXRhc2stYnRuLFxcbiNzYXZlLXRhc2stYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZlYjQ5ZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjN2dzsgIFxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7IFxcbn1cXG5cXG4jY2FuY2VsLXRhc2stYnRuIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICAgIGNvbG9yOiAjNmViNDlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiAjNmViNDlmO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjN2dzsgXFxufVxcblxcbi50YXNrLWNvbnRhaW5lci1kaXNwbGF5IHtcXG4gICAgaGVpZ2h0OiA5JTtcXG59XFxuXFxuLnRhc2stYmFja2dyb3VuZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAzLjhyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC43ZnIgNGZyIDFmciAwLjdmciA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzay1iYWNrZ3JvdW5kID4gaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgd2lkdGg6IDIuMTVlbTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjNmViNDlmO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBoZWlnaHQ6IDIuMTVlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4xNWVtO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMDc1ZW0pO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7ICAgIFxcbiAgICBib3JkZXItcmFkaXVzOiAzdnc7XFxufVxcblxcbi50YXNrLWJhY2tncm91bmQgPiBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgd2lkdGg6IDAuNjVlbTtcXG4gICAgaGVpZ2h0OiAwLjY1ZW07XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZWI0OWYgIWltcG9ydGFudDtcXG4gICAgdHJhbnNpdGlvbjogMTIwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udG9kby1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgICBcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi50YXNrQnRucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XFxuICAgIGdhcDogNHB4O1xcbn1cXG5cXG4udGFza0J0bnMgPiBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4udGFza0J0bnMgPiBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xcbn0gXFxuXFxuI2RhdGUtZGlzcGxheSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbn1cXG5cXG4jYmx1ciAgIHtcXG4gICAgZmlsdGVyOiBibHVyKDVweCk7XFxuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDVweCk7XFxuICAgIC1tb3otZmlsdGVyOiBibHVyKDVweCk7XFxuICAgIC1vLWZpbHRlcjogYmx1cig1cHgpO1xcbiAgICAtbXMtZmlsdGVyOiBibHVyKDVweCk7XFxufVxcblxcbiNvdmVybGF5ICAgIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIHRvcDogMHB4O1xcbiAgICByaWdodDogMHB4O1xcbiAgICBib3R0b206IDBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuOCk7XFxuICAgIHotaW5kZXg6IDk5OTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGFsbFByb2plY3RzLGRpc2FibGVQcmV2aW91c0RhdGVzLCBkZWxldGVUYXNrLCBmaW5kSW5kZXggfSBmcm9tIFwiLi9sb2dpY1wiO1xuXG5mdW5jdGlvbiBnZXRQcm9qTmFtZSgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dldC1wcm9qZWN0LXRpdGxlJyk7XG59O1xuXG5mdW5jdGlvbiBnZXRQcm9qVGl0bGUoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRpdGxlJykudGV4dENvbnRlbnQ7XG59O1xuXG5mdW5jdGlvbiBnZXROZXdUdGxlKCl7XG4gICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctcHJvamVjdC10aXRsZScpOyBcbn07XG5cbmNvbnN0IGdldFRhc2tJbmZvID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2V0LXRhc2stbmFtZScpLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dldC1kZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2V0LWRhdGUnKS52YWx1ZTtcbiAgICBjb25zdCBwcmlvcml0eUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2V0LXByaW9yaXR5LWxpc3QnKS52YWx1ZTsgXG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0YXNrLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZGF0ZSxcbiAgICAgICAgcHJpb3JpdHlMaXN0XG4gICAgfTtcbn07XG5cbmNvbnN0IFVJID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiBtYWtlUHJvamVjdEJ0bihuYW1lKSB7XG4gICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidG4uc2V0QXR0cmlidXRlKCdpZCcsYCR7bmFtZX0tcHJvamVjdC1idG5gKTtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYnRuJyk7XG4gICAgICAgIGJ0bi50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1wcm9qZWN0cycpO1xuICAgICAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChidG4pO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZW5kZXJTYXZlZFRhc2soKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IGZpbmRJbmRleC5wcm9qZWN0SW5kZXgoKVxuICAgICAgICBhbGxQcm9qZWN0c1twcm9qZWN0SW5kZXhdLnByb2plY3REZXRhaWxzLmFsbFRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICB0YXNrRGlzcGxheSh0YXNrLnRhc2tOYW1lLCB0YXNrLmRlc2NyaXB0aW9uLCB0YXNrLmR1ZURhdGUsIHRhc2sucHJpb3JpdHlMaXN0LCB0YXNrLmNoZWNrQm94KTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIG1ha2VBZGRUYXNrQnRuKCkge1xuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QnKTtcbiAgICBcbiAgICAgICAgY29uc3QgY29udGFpbmVyVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXJUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lci10YXNrLWJ0bicpO1xuICAgIFxuICAgICAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGFkZFRhc2tCdG4uc2V0QXR0cmlidXRlKCdpZCcsJ2FkZC10YXNrLWJ0bicpXG4gICAgICAgIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stYnRuJyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBhZGRJY29uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGFkZEljb25JbWcuc2V0QXR0cmlidXRlKCdzcmMnLCcvc3JjL2ljb25zL21hdGVyaWFsLXN5bWJvbHNfYWRkLnN2ZycpO1xuICAgICAgICBhZGRJY29uSW1nLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrLWJ0bicpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzay1idG4nKTtcbiAgICAgICAgZGl2LnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcbiAgICBcbiAgICAgICAgYWRkVGFza0J0bi5hcHBlbmRDaGlsZChhZGRJY29uSW1nKTtcbiAgICAgICAgYWRkVGFza0J0bi5hcHBlbmRDaGlsZChkaXYpXG4gICAgICAgIGNvbnRhaW5lclRhc2tCdG4uYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG4gICAgICAgIHRvZG9MaXN0LmFwcGVuZENoaWxkKGNvbnRhaW5lclRhc2tCdG4pO1xuICAgIH07XG4gICAgXG4gICAgZnVuY3Rpb24gaGVhZGVyRGlzcGxheShuYW1lKSB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIHJlbmRlclByb2pUdGxlKGhlYWRlciwgbmFtZSk7XG4gICAgfTtcbiAgICBcbiAgICBmdW5jdGlvbiByZW5kZXJQcm9qVHRsZShhcHBlbmQsIHByb2pUdGxlKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZScpO1xuICAgICAgICBwcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsIHByb2pUdGxlKTtcbiAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvalR0bGU7XG4gICAgICAgIGFwcGVuZC5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICAgIH07XG4gICAgXG4gICAgZnVuY3Rpb24gdGFza0Zvcm0oKSB7XG4gICAgICAgIGNvbnN0IGJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdC1jb250YWluZXInKTtcbiAgICAgICAgYmcuc2V0QXR0cmlidXRlKCdpZCcsJ2JsdXInKSBcbiAgICBcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCd0YXNrLWZvcm0nKTtcbiAgICBcbiAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRhc2suc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpO1xuICAgICAgICB0YXNrLnNldEF0dHJpYnV0ZSgnaWQnLCdnZXQtdGFzay1uYW1lJyk7XG4gICAgICAgIHRhc2suc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsJ1Rhc2sgbmFtZScpO1xuICAgIFxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKTtcbiAgICAgICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsJ2dldC1kZXNjcmlwdGlvbicpO1xuICAgICAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywnRGVzY3JpcHRpb24nKTtcbiAgICBcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywnZGF0ZScpO1xuICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCdnZXQtZGF0ZScpO1xuICAgICAgICBkaXNhYmxlUHJldmlvdXNEYXRlcyhkYXRlKTtcbiAgICBcbiAgICAgICAgY29uc3QgcHJpb3JpdHlMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIHByaW9yaXR5TGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywnZ2V0LXByaW9yaXR5LWxpc3QnKTtcbiAgICBcbiAgICAgICAgY29uc3QgdXJnZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIHVyZ2VudC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywndXJnZW50Jyk7XG4gICAgICAgIHVyZ2VudC50ZXh0Q29udGVudCA9ICd1cmdlbnQnO1xuICAgIFxuICAgICAgICBjb25zdCBpbXBvcnRhbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgaW1wb3J0YW50LnNldEF0dHJpYnV0ZSgndmFsdWUnLCdpbXBvcnRhbnQnKTtcbiAgICAgICAgaW1wb3J0YW50LnRleHRDb250ZW50ID0gJ2ltcG9ydGFudCc7XG4gICAgXG4gICAgICAgIGNvbnN0IG5vdEltcG9ydGFudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBub3RJbXBvcnRhbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsJ25vdC1pbXBvcnRhbnQnKTtcbiAgICAgICAgbm90SW1wb3J0YW50LnRleHRDb250ZW50ID0gJ25vdC1pbXBvcnRhbnQnO1xuICAgIFxuICAgICAgICBjb25zdCBidG5Db250YWluZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdzdWJtaXQnKTtcbiAgICAgICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCdzdWJtaXQtdGFzay1idG4nKTtcbiAgICAgICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG4gICAgXG4gICAgICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCdpZCcsJ2NhbmNlbC10YXNrLWJ0bicpO1xuICAgICAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnY2FuY2VsJztcbiAgICBcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0YXNrKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlMaXN0KTtcbiAgICAgICAgcHJpb3JpdHlMaXN0LmFwcGVuZENoaWxkKHVyZ2VudCk7XG4gICAgICAgIHByaW9yaXR5TGlzdC5hcHBlbmRDaGlsZChpbXBvcnRhbnQpO1xuICAgICAgICBwcmlvcml0eUxpc3QuYXBwZW5kQ2hpbGQobm90SW1wb3J0YW50KTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChidG5Db250YWluZXJzKTtcbiAgICAgICAgYnRuQ29udGFpbmVycy5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuICAgICAgICBidG5Db250YWluZXJzLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlbW92ZUJsdXJBdHRyaWJ1dGUoKSB7XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdC1jb250YWluZXInKTtcbiAgICAgICAgdG9kb0xpc3RDb250YWluZXIucmVtb3ZlQXR0cmlidXRlKCdpZCcpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVVJVGFza0J0bigpIHtcbiAgICAgICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXItdGFzay1idG4nKTtcbiAgICAgICAgYWRkVGFza0J0bi5yZW1vdmUoKTtcbiAgICAgICAgbWFrZUFkZFRhc2tCdG4oKTtcbiAgICB9O1xuICAgIFxuICAgIGZ1bmN0aW9uIHRhc2tEaXNwbGF5KHRhc2ssIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSwgY2hlY2tCb3gpIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QnKTtcbiAgICBcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRhaW5lci1kaXNwbGF5Jyk7XG4gICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScsIHRhc2spO1xuICAgIFxuICAgICAgICBjb25zdCBiZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBiZy5jbGFzc0xpc3QuYWRkKCd0YXNrLWJhY2tncm91bmQnKTtcbiAgICBcbiAgICAgICAgY29uc3QgY2hlY2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY2hlY2tMaXN0LnNldEF0dHJpYnV0ZSgndHlwZScsJ2NoZWNrYm94Jyk7XG4gICAgICAgIGNoZWNrTGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgdGFzayk7XG4gICAgICAgIGNoZWNrTGlzdC5jbGFzc0xpc3QuYWRkKCdjaGVjay1ib3gnKTtcbiAgICAgICAgY2hlY2tCb3ggPT0gJ2NoZWNrZWQnID8gY2hlY2tMaXN0LmNoZWNrZWQgPSB0cnVlIDogZmFsc2U7ICBcblxuICAgICAgICBjb25zdCB0YXNrRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHRhc2tEaXNwbGF5LnNldEF0dHJpYnV0ZSgnZm9yJyx0YXNrKTtcbiAgICBcbiAgICAgICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBoMy5zZXRBdHRyaWJ1dGUoJ2lkJywndGFzay1uYW1lJyk7XG4gICAgICAgIGgzLnRleHRDb250ZW50ID0gdGFzaztcbiAgICBcbiAgICAgICAgY29uc3QgZGVzY0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGVzY0Rpc3BsYXkuc2V0QXR0cmlidXRlKCdpZCcsJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIGRlc2NEaXNwbGF5LnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gICAgXG4gICAgICAgIGNvbnN0IGRhdGVEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRhdGVEaXNwbGF5LnNldEF0dHJpYnV0ZSgnaWQnLCdkYXRlLWRpc3BsYXknKTtcbiAgICAgICAgZGF0ZURpc3BsYXkudGV4dENvbnRlbnQgPSBkYXRlO1xuICAgIFxuICAgICAgICBjb25zdCB0YXNrQnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrQnRucy5jbGFzc0xpc3QuYWRkKCd0YXNrQnRucycpO1xuICAgIFxuICAgICAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCdkZWxldGUtdGFzaycpO1xuICAgICAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnLCB0YXNrKTtcbiAgICAgICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBkZWxldGVJY29uLnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgdGFzayk7XG4gICAgICAgIGRlbGV0ZUljb24uc2V0QXR0cmlidXRlKCdpZCcsJ2RlbGV0ZS1pY29uJyk7XG4gICAgICAgIGRlbGV0ZUljb24uc2V0QXR0cmlidXRlKCdzcmMnLCcvc3JjL2ljb25zL2JpX3RyYXNoLWZpbGwuc3ZnJyk7XG4gICAgXG4gICAgICAgIGNvbnN0IGVkaXRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGVkaXRUYXNrQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCdlZGl0LXRhc2snKTtcbiAgICAgICAgZWRpdFRhc2tCdG4uc2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnLCB0YXNrKTtcbiAgICAgICAgY29uc3QgZWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgZWRpdEljb24uc2V0QXR0cmlidXRlKCdpZCcsJ2VkaXQtaWNvbicpO1xuICAgICAgICBlZGl0SWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsJy9zcmMvaWNvbnMvdGFibGVyX2VkaXQuc3ZnJyk7XG4gICAgICAgIGVkaXRJY29uLnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgdGFzayk7XG5cbiAgICAgICAgcHJpb3JpdHlDb2xvcihwcmlvcml0eSwgY2hlY2tMaXN0LCBkYXRlRGlzcGxheSk7XG4gICAgXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJnKTtcbiAgICAgICAgYmcuYXBwZW5kQ2hpbGQoY2hlY2tMaXN0KTtcbiAgICAgICAgYmcuYXBwZW5kQ2hpbGQodGFza0Rpc3BsYXkpO1xuICAgICAgICBiZy5hcHBlbmRDaGlsZChkYXRlRGlzcGxheSk7XG4gICAgICAgIGJnLmFwcGVuZENoaWxkKHRhc2tCdG5zKTtcbiAgICAgICAgdGFza0J0bnMuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgICAgICAgZGVsZXRlQnRuLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuICAgICAgICB0YXNrQnRucy5hcHBlbmRDaGlsZChlZGl0VGFza0J0bik7XG4gICAgICAgIGVkaXRUYXNrQnRuLmFwcGVuZENoaWxkKGVkaXRJY29uKTtcbiAgICAgICAgdGFza0Rpc3BsYXkuYXBwZW5kQ2hpbGQoaDMpO1xuICAgICAgICB0YXNrRGlzcGxheS5hcHBlbmRDaGlsZChkZXNjRGlzcGxheSk7XG4gICAgfTtcbiAgICBcbiAgICBmdW5jdGlvbiBwcmlvcml0eUNvbG9yKHByaW9yaXR5LCBjaGVja0JveCwgZGF0ZSkge1xuICAgICAgICBpZiAocHJpb3JpdHkgPT0gJ25vdC1pbXBvcnRhbnQnKSB7XG4gICAgICAgICAgICBjaGVja0JveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2QzZDNkMyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByaW9yaXR5ID09ICd1cmdlbnQnKSB7XG4gICAgICAgICAgICBjaGVja0JveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0Y2NUM1Qyc7XG4gICAgICAgICAgICBkYXRlLnN0eWxlLmNvbG9yID0gJyNGNjVDNUMnO1xuICAgICAgICB9IFxuICAgICAgICBpZiAocHJpb3JpdHkgPT0gJ2ltcG9ydGFudCcpIHtcbiAgICAgICAgICAgIGNoZWNrQm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjRjZEMzVDJztcbiAgICAgICAgICAgIGRhdGUuc3R5bGUuY29sb3IgPSAnI0Y2RDM1Qyc7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZW1wdHlUb0RvTGlzdCgpIHtcbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1saXN0Jyk7XG4gICAgICAgIHRvZG9MaXN0LnRleHRDb250ZW50ID0gJyc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlU2F2ZUJ0bigpIHtcbiAgICAgICAgY29uc3Qgc2F2ZVRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc2F2ZVRhc2tCdG4uc2V0QXR0cmlidXRlKCdpZCcsJ3NhdmUtdGFzay1idG4nKTtcbiAgICAgICAgc2F2ZVRhc2tCdG4udGV4dENvbnRlbnQgPSAnU0FWRSc7XG4gICAgICAgIHJldHVybiBzYXZlVGFza0J0bjtcbiAgICB9O1xuICAgIFxuICAgIGZ1bmN0aW9uIHJlcGxhY2VCdG5zKCkge1xuICAgICAgICBjb25zdCBzdWJtaXRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC10YXNrLWJ0bicpO1xuICAgICAgICBjb25zdCBzYXZlVGFza0J0biA9IGNyZWF0ZVNhdmVCdG4oKTtcbiAgICAgICAgc2F2ZVRhc2tCdG4uc2V0QXR0cmlidXRlKCdpZCcsJ3NhdmUtdGFzay1idG4nKTtcbiAgICAgICAgc3VibWl0VGFza0J0bi5yZXBsYWNlV2l0aChzYXZlVGFza0J0bik7XG4gICAgfTtcbiAgICBcbiAgICBmdW5jdGlvbiBjdXJyZW50VGFza0luZm8obmFtZVRhc2spIHtcbiAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gZmluZEluZGV4LnByb2plY3RJbmRleCgpO1xuICAgICAgICBjb25zdCB0YXNrSW5kZXggPSBmaW5kSW5kZXgudGFza0luZGV4KG5hbWVUYXNrKTtcbiAgICAgICAgY29uc3QgbmFtZSA9IGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0ucHJvamVjdERldGFpbHMuYWxsVGFza3NbdGFza0luZGV4XS50YXNrTmFtZTtcbiAgICAgICAgY29uc3QgZGV0YWlscyA9IGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0ucHJvamVjdERldGFpbHMuYWxsVGFza3NbdGFza0luZGV4XS5kZXNjcmlwdGlvbjtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0ucHJvamVjdERldGFpbHMuYWxsVGFza3NbdGFza0luZGV4XS5kdWVEYXRlO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0ucHJvamVjdERldGFpbHMuYWxsVGFza3NbdGFza0luZGV4XS5wcmlvcml0eUxpc3Q7XG4gICAgICAgIGNvbnN0IGdldFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2V0LXRhc2stbmFtZScpO1xuICAgICAgICBjb25zdCBnZXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZXQtZGVzY3JpcHRpb24nKTtcbiAgICAgICAgY29uc3QgZ2V0RGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZXQtZGF0ZScpO1xuICAgICAgICBjb25zdCBnZXRQcmlvcml0eUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2V0LXByaW9yaXR5LWxpc3QnKTsgXG4gICAgICAgIGdldFRhc2sudmFsdWUgPSBuYW1lO1xuICAgICAgICBnZXREZXNjcmlwdGlvbi52YWx1ZSA9IGRldGFpbHM7XG4gICAgICAgIGdldERhdGUudmFsdWUgPSBkdWVEYXRlO1xuICAgICAgICBnZXRQcmlvcml0eUxpc3QudmFsdWUgPSBwcmlvcml0eTtcbiAgICB9O1xuICAgIFxuICAgIGZ1bmN0aW9uIHJlbW92ZURhdGFOYW1lQXR0cmlidXRlKG5hbWVPZlRhc2spIHtcbiAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gZmluZEluZGV4LnByb2plY3RJbmRleCgpO1xuICAgICAgICBjb25zdCB0YXNrSW5kZXggPSBmaW5kSW5kZXgudGFza0luZGV4KG5hbWVPZlRhc2spOyBcbiAgICAgICAgY29uc3QgY3VycmVudFRhc2tOYW1lID0gYWxsUHJvamVjdHNbcHJvamVjdEluZGV4XS5wcm9qZWN0RGV0YWlscy5hbGxUYXNrc1t0YXNrSW5kZXhdLnRhc2tOYW1lO1xuICAgICAgICBjb25zdCBkYXRhQXR0cmlidXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtbmFtZT0nJHtjdXJyZW50VGFza05hbWV9J11gKTtcbiAgICAgICAgZGF0YUF0dHJpYnV0ZS5yZW1vdmUoKTtcbiAgICB9O1xuICAgIFxuICAgIGZ1bmN0aW9uIHJlbW92ZVRhc2tGb3JtKCkge1xuICAgICAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWZvcm0nKTtcbiAgICAgICAgdGFza0Zvcm0ucmVtb3ZlKCk7XG4gICAgfTtcbiAgICBcbiAgICBmdW5jdGlvbiBkZWxldGVUYXNrRGlzcGxheShuYW1lT2ZUYXNrKSB7XG4gICAgICAgIHJlbW92ZURhdGFOYW1lQXR0cmlidXRlKG5hbWVPZlRhc2spO1xuICAgICAgICBkZWxldGVUYXNrKG5hbWVPZlRhc2spO1xuICAgIH07XG4gICAgXG4gICAgZnVuY3Rpb24gY2hhbmdlUHJvak5hbWUobmFtZSkge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG4gICAgXG4gICAgICAgIGNvbnN0IGNoYW5nZU5hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2hhbmdlTmFtZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjaGFuZ2UtbmFtZS1jb250YWluZXInKTtcbiAgICBcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgbmV3UHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCduZXctcHJvamVjdC10aXRsZScpO1xuICAgICAgICBuZXdQcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgbmV3UHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBuYW1lKTtcbiAgICAgICAgaGVhZGVyLnJlcGxhY2VDaGlsZChuZXdQcm9qZWN0VGl0bGUsIGhlYWRlci5maXJzdEVsZW1lbnRDaGlsZCk7XG4gICAgXG4gICAgICAgIGNvbnN0IGJ0bkNvbnRhaW5lcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYnRuQ29udGFpbmVycy5jbGFzc0xpc3QuYWRkKCdidG4tY29udGFpbmVycycpO1xuICAgIFxuICAgICAgICBjb25zdCBzYXZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHNhdmVCdG4uc2V0QXR0cmlidXRlKCdpZCcsJ3NhdmUtYnRuJyk7XG4gICAgICAgIHNhdmVCdG4udGV4dENvbnRlbnQgPSAnU0FWRSc7XG4gICAgXG4gICAgICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnQ0FOQ0VMJztcbiAgICAgICAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCdjYW5jZWwtYnRuJyk7XG4gICAgXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChjaGFuZ2VOYW1lQ29udGFpbmVyKTtcbiAgICAgICAgY2hhbmdlTmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0VGl0bGUpO1xuICAgICAgICBjaGFuZ2VOYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcnMpO1xuICAgICAgICBidG5Db250YWluZXJzLmFwcGVuZENoaWxkKHNhdmVCdG4pO1xuICAgICAgICBidG5Db250YWluZXJzLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG4gICAgfTtcbiAgICBcbiAgICBmdW5jdGlvbiBuZXdUdGxlQnRuKGN1cnJlbnRQcm9qKSB7XG4gICAgICAgIGNvbnN0IG5ld1RpdGxlID0gZ2V0TmV3VHRsZSgpOyBcbiAgICAgICAgY29uc3QgQ2hhbmdlTmFtZWJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2N1cnJlbnRQcm9qfS1wcm9qZWN0LWJ0bmApO1xuICAgICAgICBDaGFuZ2VOYW1lYnRuLnJlbW92ZUF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgQ2hhbmdlTmFtZWJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJyxgJHtuZXdUaXRsZS52YWx1ZX0tcHJvamVjdC1idG5gKTtcbiAgICAgICAgQ2hhbmdlTmFtZWJ0bi50ZXh0Q29udGVudCA9IG5ld1RpdGxlLnZhbHVlO1xuICAgIH07XG4gICAgXG4gICAgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdEJ0bigpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGl0bGUnKTtcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cHJvamVjdFRpdGxlLnRleHRDb250ZW50fS1wcm9qZWN0LWJ0bmApO1xuICAgICAgICBwcm9qZWN0VGl0bGVCdG4ucmVtb3ZlKCk7XG4gICAgfTtcbiAgICBcbiAgICBmdW5jdGlvbiBlbXB0eVRvRG9QYWdlKCkge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBlbXB0eVRvRG9MaXN0KCk7XG4gICAgfTtcbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGVTYXZlQnRuLFxuICAgICAgICBjdXJyZW50VGFza0luZm8sXG4gICAgICAgIGNoYW5nZVByb2pOYW1lLFxuICAgICAgICBkZWxldGVUYXNrRGlzcGxheSxcbiAgICAgICAgZW1wdHlUb0RvTGlzdCxcbiAgICAgICAgZW1wdHlUb0RvUGFnZSxcbiAgICAgICAgbWFrZVByb2plY3RCdG4sXG4gICAgICAgIG1ha2VBZGRUYXNrQnRuLFxuICAgICAgICBuZXdUdGxlQnRuLFxuICAgICAgICByZW1vdmVEYXRhTmFtZUF0dHJpYnV0ZSxcbiAgICAgICAgcmVtb3ZlUHJvamVjdEJ0bixcbiAgICAgICAgcmVtb3ZlVGFza0Zvcm0sXG4gICAgICAgIHJlbW92ZUJsdXJBdHRyaWJ1dGUsXG4gICAgICAgIHJlcGxhY2VCdG5zLFxuICAgICAgICByZW5kZXJTYXZlZFRhc2ssXG4gICAgICAgIGhlYWRlckRpc3BsYXksXG4gICAgICAgIHByaW9yaXR5Q29sb3IsXG4gICAgICAgIHRhc2tGb3JtLFxuICAgICAgICB0YXNrRGlzcGxheSxcbiAgICAgICAgdXBkYXRlVUlUYXNrQnRuLFxuICAgIH1cbn0pKCk7XG5cbmV4cG9ydCB7IGdldFRhc2tJbmZvLCBnZXRQcm9qTmFtZSwgZ2V0TmV3VHRsZSwgZ2V0UHJvalRpdGxlLCBVSSB9IiwiaW1wb3J0IHsgVUksIGdldFByb2pUaXRsZSwgZ2V0TmV3VHRsZSwgZ2V0UHJvak5hbWUsIGdldFRhc2tJbmZvIH0gZnJvbSBcIi4vRE9NXCI7XG5pbXBvcnQgeyBhZGRQcm9qZWN0LCBkZWxldGVQcm9qZWN0LCBzYXZlTmFtZSwgYWxsUHJvamVjdHMsIGNyZWF0ZVRhc2ssIGVkaXRUYXNrLCBzYXZlQ2hlY2tCb3gsIHRvZGF5QW5kVXBjb21pbmdUYXNrIH0gZnJvbSBcIi4vbG9naWNcIjtcbmltcG9ydCB7IHNhdmVEYXRhIH0gZnJvbSBcIi4vbG9jYWwtc3RvcmFnZVwiO1xuaW1wb3J0IHsgcHVic3ViIH0gZnJvbSAnLi9wdWJzdWIuanMnO1xuXG5wdWJzdWIuc3Vic2NyaWJlKCdhZGRQcm9qJywgYWRkUHJvamVjdCk7XG5wdWJzdWIuc3Vic2NyaWJlKCdkbGV0ZVByb2onLGRlbGV0ZVByb2plY3QpO1xucHVic3ViLnN1YnNjcmliZSgnc2F2ZU5hbWUnLCBzYXZlTmFtZSk7XG5wdWJzdWIuc3Vic2NyaWJlKCdzYXZlRGF0YScsIHNhdmVEYXRhKTtcbnB1YnN1Yi5zdWJzY3JpYmUoJ2NyZWF0ZVRhc2snLCBjcmVhdGVUYXNrKTtcbnB1YnN1Yi5zdWJzY3JpYmUoJ2VkaXRUYXNrJywgZWRpdFRhc2spO1xucHVic3ViLnN1YnNjcmliZSgnc2F2ZUJveCcsIHNhdmVDaGVja0JveCk7XG5cbmNvbnN0IERPTUV2ZW50cyA9ICgpID0+IHtcbiAgICBjb25zdCBkID0gZG9jdW1lbnQ7XG4gICAgbGV0IGN1cnJlbnRQcm9qO1xuICAgIGxldCB0YXNrO1xuICAgIGxldCBuZXdJbmZvO1xuICAgIGxldCBidG47XG4gICAgZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmKGUudGFyZ2V0Lm1hdGNoZXMoJy5hZGQtcHJvamVjdC1idG4nKSB8fCBlLnRhcmdldC5tYXRjaGVzKCcjYWRkLWljb24nKSkge1xuICAgICAgICAgICAgY29uc3QgZ2V0UHJvalRpdGxlID0gZ2V0UHJvak5hbWUoKTtcbiAgICAgICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdhZGRQcm9qJywgZ2V0UHJvalRpdGxlLnZhbHVlKTtcbiAgICAgICAgICAgIFVJLm1ha2VQcm9qZWN0QnRuKGdldFByb2pUaXRsZS52YWx1ZSk7XG4gICAgICAgICAgICBnZXRQcm9qVGl0bGUudmFsdWUgPSAnJztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnLmRlbGV0ZS1wcm9qZWN0LWJ0bicpKSB7XG4gICAgICAgICAgICBwdWJzdWIucHVibGlzaCgnZGxldGVQcm9qJyk7XG4gICAgICAgICAgICBwdWJzdWIucHVibGlzaCgnc2F2ZURhdGEnKTtcbiAgICAgICAgICAgIFVJLnJlbW92ZVByb2plY3RCdG4oKTtcbiAgICAgICAgICAgIFVJLmVtcHR5VG9Eb1BhZ2UoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhgLnByb2plY3QtYnRuYCkpIHtcbiAgICAgICAgICAgIGlmIChidG4gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGJ0bi5zdHlsZS5jb2xvciA9ICcjOTJDMUIyJztcbiAgICAgICAgICAgICAgICBidG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZS50YXJnZXQudGV4dENvbnRlbnR9LXByb2plY3QtYnRuYCk7XG4gICAgICAgICAgICBidG4uc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuICAgICAgICAgICAgYnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjOTJDMUIyJ1xuICAgICAgICAgICAgVUkuaGVhZGVyRGlzcGxheShlLnRhcmdldC50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICBVSS5lbXB0eVRvRG9MaXN0KCk7XG4gICAgICAgICAgICBVSS5yZW5kZXJTYXZlZFRhc2soKTtcbiAgICAgICAgICAgIFVJLm1ha2VBZGRUYXNrQnRuKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJy5hZGQtdGFzay1idG4nKSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgVUkudGFza0Zvcm0oZ2V0UHJvalRpdGxlKCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmKGUudGFyZ2V0Lm1hdGNoZXMoJy5wcm9qZWN0LXRpdGxlJykpIHtcbiAgICAgICAgICAgIFVJLmNoYW5nZVByb2pOYW1lKGUudGFyZ2V0LnRleHRDb250ZW50KTtcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJyNzYXZlLWJ0bicpKSB7XG4gICAgICAgICAgICBwdWJzdWIucHVibGlzaCgnc2F2ZU5hbWUnLCBjdXJyZW50UHJvaik7XG4gICAgICAgICAgICBwdWJzdWIucHVibGlzaCgnc2F2ZURhdGEnKTtcbiAgICAgICAgICAgIFVJLm5ld1R0bGVCdG4oY3VycmVudFByb2opO1xuICAgICAgICAgICAgVUkuaGVhZGVyRGlzcGxheShnZXROZXdUdGxlKCkudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCcjY2FuY2VsLWJ0bicpKSB7XG4gICAgICAgICAgICBVSS5oZWFkZXJEaXNwbGF5KGN1cnJlbnRQcm9qKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnI3N1Ym1pdC10YXNrLWJ0bicpKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBVSS5yZW1vdmVCbHVyQXR0cmlidXRlKCk7XG4gICAgICAgICAgICBsZXQgcHJvalRpdGxlID0gZ2V0UHJvalRpdGxlKCk7XG4gICAgICAgICAgICBuZXdJbmZvID0gZ2V0VGFza0luZm8oKTtcbiAgICAgICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdjcmVhdGVUYXNrJywgcHJvalRpdGxlLCBuZXdJbmZvLnRhc2ssIG5ld0luZm8uZGVzY3JpcHRpb24sIG5ld0luZm8uZGF0ZSwgbmV3SW5mby5wcmlvcml0eUxpc3QpO1xuICAgICAgICAgICAgVUkudGFza0Rpc3BsYXkobmV3SW5mby50YXNrLCBuZXdJbmZvLmRlc2NyaXB0aW9uLCBuZXdJbmZvLmRhdGUsIG5ld0luZm8ucHJpb3JpdHlMaXN0KTtcbiAgICAgICAgICAgIFVJLmhlYWRlckRpc3BsYXkocHJvalRpdGxlKTtcbiAgICAgICAgICAgIFVJLnVwZGF0ZVVJVGFza0J0bigpO1xuICAgICAgICAgICAgcHVic3ViLnB1Ymxpc2goJ3NhdmVEYXRhJywgc2F2ZURhdGEpOyBcbiAgICAgICAgICAgIFVJLnJlbW92ZVRhc2tGb3JtKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJyNjYW5jZWwtdGFzay1idG4nKSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgVUkucmVtb3ZlQmx1ckF0dHJpYnV0ZSgpO1xuICAgICAgICAgICAgVUkucmVtb3ZlVGFza0Zvcm0oKTtcbiAgICAgICAgICAgIFVJLmhlYWRlckRpc3BsYXkoZ2V0UHJvalRpdGxlKCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCcjZGVsZXRlLXRhc2snKSB8fCBlLnRhcmdldC5tYXRjaGVzKCcjZGVsZXRlLWljb24nKSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgVUkuZGVsZXRlVGFza0Rpc3BsYXkoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJyNlZGl0LXRhc2snKSB8fCBlLnRhcmdldC5tYXRjaGVzKCcjZWRpdC1pY29uJykpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRhc2sgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpO1xuICAgICAgICAgICAgVUkudGFza0Zvcm0oKTtcbiAgICAgICAgICAgIFVJLmN1cnJlbnRUYXNrSW5mbyh0YXNrKTtcbiAgICAgICAgICAgIFVJLmNyZWF0ZVNhdmVCdG4oKTtcbiAgICAgICAgICAgIFVJLnJlcGxhY2VCdG5zKHRhc2spO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCcjc2F2ZS10YXNrLWJ0bicpKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBVSS5yZW1vdmVCbHVyQXR0cmlidXRlKCk7XG4gICAgICAgICAgICBVSS5yZW1vdmVEYXRhTmFtZUF0dHJpYnV0ZSh0YXNrKTtcbiAgICAgICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdlZGl0VGFzaycsIHRhc2spO1xuICAgICAgICAgICAgcHVic3ViLnB1Ymxpc2goJ3NhdmVEYXRhJyk7XG4gICAgICAgICAgICBuZXdJbmZvID0gZ2V0VGFza0luZm8oKTtcbiAgICAgICAgICAgIFVJLnRhc2tEaXNwbGF5KG5ld0luZm8udGFzaywgbmV3SW5mby5kZXNjcmlwdGlvbiwgbmV3SW5mby5kYXRlLCBuZXdJbmZvLnByaW9yaXR5TGlzdCk7XG4gICAgICAgICAgICBVSS5yZW1vdmVUYXNrRm9ybSgpO1xuICAgICAgICAgICAgVUkudXBkYXRlVUlUYXNrQnRuKCk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCcudG9kYXknKSB8fCBlLnRhcmdldC50ZXh0Q29udGVudCA9PSBcIlRvZGF5XCIpIHtcbiAgICAgICAgICAgIFVJLmVtcHR5VG9Eb1BhZ2UoKTtcbiAgICAgICAgICAgIFVJLmhlYWRlckRpc3BsYXkoJ1RPREFZJyk7XG4gICAgICAgICAgICB0b2RheUFuZFVwY29taW5nVGFzaygpLmRpc3BsYXlUb2RheVRhc2tzKCk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCcudXBjb21pbmcnKSB8fCBlLnRhcmdldC50ZXh0Q29udGVudCA9PSBcIlVwY29taW5nXCIpIHtcbiAgICAgICAgICAgIFVJLmVtcHR5VG9Eb1BhZ2UoKTtcbiAgICAgICAgICAgIFVJLmhlYWRlckRpc3BsYXkoJ1VQQ09NSU5HJyk7XG4gICAgICAgICAgICB0b2RheUFuZFVwY29taW5nVGFzaygpLmRpc3BsYXlVcGNvbWluZ1Rhc2soKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICBkLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCcuY2hlY2stYm94JykpIHtcbiAgICAgICAgICAgIGxldCB0YXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdpZCcpKTtcbiAgICAgICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdzYXZlQm94Jyx0YXNrLCBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkJyksIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvcik7XG4gICAgICAgICAgICBwdWJzdWIucHVibGlzaCgnc2F2ZURhdGEnKTsgXG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbmV4cG9ydCB7IERPTUV2ZW50cyB9IiwiaW1wb3J0IHsgYWxsUHJvamVjdHMgfSBmcm9tIFwiLi9sb2dpY1wiO1xuXG5mdW5jdGlvbiBzYXZlRGF0YSgpIHsgXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhbGxQcm9qZWN0RGF0YVwiLCBKU09OLnN0cmluZ2lmeShhbGxQcm9qZWN0cykpO1xuICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhbGxQcm9qZWN0RGF0YVwiKSk7XG59O1xuXG5leHBvcnQgeyBzYXZlRGF0YSB9XG4iLCJpbXBvcnQgeyBnZXRUYXNrSW5mbywgZ2V0TmV3VHRsZSwgZ2V0UHJvalRpdGxlLCBVSSB9IGZyb20gXCIuL0RPTS5qc1wiO1xuaW1wb3J0IHsgc2F2ZURhdGEgfSBmcm9tIFwiLi9sb2NhbC1zdG9yYWdlLmpzXCI7XG5cbmNvbnN0IGFsbFByb2plY3RzID0gW107XG5cbmNvbnN0IHByb2plY3RNYW5hZ2VtZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGFkZFByb2plY3QgPSAodGl0bGUpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IG1ha2VQcm9qZWN0KHRpdGxlKTtcbiAgICAgICAgYWxsUHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICB9O1xuXG4gICAgY29uc3QgZWRpdFByb2plY3ROYW1lID0gKGksIG5hbWUpID0+IHtcbiAgICAgICAgIGFsbFByb2plY3RzW2ldLnByb2plY3REZXRhaWxzLnByb2plY3ROYW1lID0gbmFtZVxuICAgIH07XG4gICAgXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChpKSA9PiB7XG4gICAgICAgIGFsbFByb2plY3RzLnNwbGljZShpLDEpO1xuICAgIH07XG4gICAgXG4gICAgY29uc3Qgdmlld1Byb2plY3RzID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhhbGxQcm9qZWN0cyk7XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBtYWtlUHJvamVjdCA9IChwcm9qZWN0VGl0bGUpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdERldGFpbHMgPSB7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZTogcHJvamVjdFRpdGxlLFxuICAgICAgICAgICAgYWxsVGFza3M6IFtdXG4gICAgICAgIH07XG4gICAgXG4gICAgICAgIGNvbnN0IHRhc2tNYW5hZ2VtZW50ID0gbmV3IHRhc2tPcGVyYXRpb25zKHByb2plY3REZXRhaWxzKTtcbiAgICAgICAgY29uc3QgYWRkVGFzayA9IHRhc2tNYW5hZ2VtZW50LmFkZFRhc2s7XG4gICAgICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSB0YXNrTWFuYWdlbWVudC5kZWxldGVUYXNrO1xuICAgICAgICBjb25zdCBlZGl0VGFzayA9IHRhc2tNYW5hZ2VtZW50LmVkaXRUYXNrcztcbiAgICBcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByb2plY3REZXRhaWxzLFxuICAgICAgICAgICAgYWRkVGFzayxcbiAgICAgICAgICAgIGRlbGV0ZVRhc2ssXG4gICAgICAgICAgICBlZGl0VGFzayxcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkUHJvamVjdCxcbiAgICAgICAgZGVsZXRlUHJvamVjdCxcbiAgICAgICAgdmlld1Byb2plY3RzLFxuICAgICAgICBlZGl0UHJvamVjdE5hbWVcbiAgICB9O1xufTtcblxuY29uc3QgcHJvamVjdCA9IHByb2plY3RNYW5hZ2VtZW50KCk7XG5cbmNsYXNzIHRhc2tPcGVyYXRpb25zIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0KSAge1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIH1cblxuICAgIGFkZFRhc2sgPSAobmFtZSwgZGV0YWlscywgZGF0ZSwgcHJpb3JpdHlMaXN0LCBjaGVjaykgPT4ge1xuICAgICAgICBjb25zdCB0YXNrRGV0YWlscyA9IG5ldyB0YXNrKG5hbWUsIGRldGFpbHMsIGRhdGUsIHByaW9yaXR5TGlzdCwgY2hlY2spO1xuXG4gICAgICAgIHRoaXMucHJvamVjdC5hbGxUYXNrcy5wdXNoKHRhc2tEZXRhaWxzKTtcbiAgICB9XG5cbiAgICBkZWxldGVUYXNrKGkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdERldGFpbHMuYWxsVGFza3Muc3BsaWNlKGksMSlcbiAgICB9O1xufTtcblxuY2xhc3MgdGFzayB7XG4gICAgY29uc3RydWN0b3IodGFza05hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eUxpc3QsIGNoZWNrQm94KSB7XG4gICAgICAgIHRoaXMudGFza05hbWUgPSB0YXNrTmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5TGlzdCA9IHByaW9yaXR5TGlzdDtcbiAgICAgICAgdGhpcy5jaGVja0JveCA9IGNoZWNrQm94O1xuICAgIH07XG5cbiAgICBzZXQoKSB7XG4gICAgICAgIFt0aGlzLnRhc2tOYW1lLCB0aGlzLmRlc2NyaXB0aW9uLCB0aGlzLmR1ZURhdGUsIHRoaXMucHJpb3JpdHlMaXN0XSA9IHZhbHVlLnNwbGl0KFwiIFwiKTtcbiAgICB9O1xufTtcblxuY29uc3Qgc3RvcmVDaGVja0JveCA9IChuYW1lT2ZUYXNrKSA9PiB7XG4gICAgY29uc3QgbmFtZU9mUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRpdGxlJykudGV4dENvbnRlbnQ7XG4gICAgY29uc3QgcHJvamVjdEluZGV4ID0gYWxsUHJvamVjdHMuZmluZEluZGV4KHAgPT4gcC5wcm9qZWN0RGV0YWlscy5wcm9qZWN0TmFtZSA9PT0gbmFtZU9mUHJvamVjdCk7XG4gICAgY29uc3QgdGFza0luZGV4ID0gYWxsUHJvamVjdHNbcHJvamVjdEluZGV4XS5wcm9qZWN0RGV0YWlscy5hbGxUYXNrcy5maW5kSW5kZXgocCA9PiBwLnRhc2tOYW1lID09PSBuYW1lT2ZUYXNrKTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrKCkge1xuICAgICAgICBhbGxQcm9qZWN0c1twcm9qZWN0SW5kZXhdLnByb2plY3REZXRhaWxzLmFsbFRhc2tzW3Rhc2tJbmRleF0uY2hlY2tCb3ggPSAnY2hlY2tlZCc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdW5jaGVja2VkKCkge1xuICAgICAgICBhbGxQcm9qZWN0c1twcm9qZWN0SW5kZXhdLnByb2plY3REZXRhaWxzLmFsbFRhc2tzW3Rhc2tJbmRleF0uY2hlY2tCb3ggPSAndW5jaGVja2VkJztcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHsgY2hlY2ssIHVuY2hlY2tlZCB9XG59O1xuXG5mdW5jdGlvbiBzYXZlQ2hlY2tCb3goYm94LG5hbWVPZlRhc2spIHtcbiAgICBjb25zdCBjaGVja0JveCA9IHN0b3JlQ2hlY2tCb3gobmFtZU9mVGFzayk7IFxuICAgIGlmIChib3guY2hlY2tlZCA9PSB0cnVlKSB7XG4gICAgICAgIGNoZWNrQm94LmNoZWNrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2hlY2tCb3gudW5jaGVja2VkKCk7XG4gICAgfVxufTtcblxuZnVuY3Rpb24gYWRkUHJvamVjdChuYW1lT2ZQcm9qZWN0KSB7XG4gICAgcHJvamVjdC5hZGRQcm9qZWN0KG5hbWVPZlByb2plY3QpO1xuICAgIHNhdmVEYXRhKCk7XG59O1xuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KCkge1xuICAgIGNvbnN0IGluZGV4ID0gZmluZEluZGV4LnByb2plY3RJbmRleCgpO1xuICAgIHByb2plY3QuZGVsZXRlUHJvamVjdChpbmRleCk7XG59O1xuXG5jb25zdCBmaW5kSW5kZXggPSAoKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RJbmRleCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGdldFByb2pUaXRsZSgpO1xuICAgICAgICBjb25zdCBpbmRleCA9IGFsbFByb2plY3RzLmZpbmRJbmRleChwID0+IHAucHJvamVjdERldGFpbHMucHJvamVjdE5hbWUgPT09IG5hbWUpO1xuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfTtcblxuICAgIGNvbnN0IHRhc2tJbmRleCA9IChuYW1lVGFzaykgPT4gYWxsUHJvamVjdHNbcHJvamVjdEluZGV4KCldLnByb2plY3REZXRhaWxzLmFsbFRhc2tzLmZpbmRJbmRleChwID0+IHAudGFza05hbWUgPT09IG5hbWVUYXNrKTtcblxuICAgIHJldHVybiB7IHByb2plY3RJbmRleCAsIHRhc2tJbmRleH1cbn0pKCk7XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2sobmFtZVRhc2spIHtcbiAgICBjb25zdCBwcm9qSW5kZXggPSBmaW5kSW5kZXgucHJvamVjdEluZGV4KCk7XG4gICAgY29uc3QgdGFza0luZGV4ID0gZmluZEluZGV4LnRhc2tJbmRleChuYW1lVGFzayk7XG4gICAgYWxsUHJvamVjdHNbcHJvakluZGV4XS5kZWxldGVUYXNrKHRhc2tJbmRleCk7XG4gICAgc2F2ZURhdGEoKTtcbn07XG5cbmZ1bmN0aW9uIHNhdmVOYW1lKGN1cnJlbnRQcm9qKSB7XG4gICAgY29uc3QgbmV3VGl0bGUgPSBnZXROZXdUdGxlKCk7XG4gICAgY29uc3QgaW5kZXggPSBhbGxQcm9qZWN0cy5maW5kSW5kZXgocCA9PiBwLnByb2plY3REZXRhaWxzLnByb2plY3ROYW1lID09PSBjdXJyZW50UHJvaik7XG4gICAgcHJvamVjdC5lZGl0UHJvamVjdE5hbWUoaW5kZXgsIG5ld1RpdGxlLnZhbHVlKTtcbiAgICBwcm9qZWN0LnZpZXdQcm9qZWN0cygpO1xufTtcblxuZnVuY3Rpb24gZWRpdFRhc2sobmFtZVRhc2spIHtcbiAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBmaW5kSW5kZXgucHJvamVjdEluZGV4KCk7XG4gICAgY29uc3QgdGFza0luZGV4ID0gZmluZEluZGV4LnRhc2tJbmRleChuYW1lVGFzayk7XG4gICAgY29uc3QgbmV3SW5mbyA9IGdldFRhc2tJbmZvKCk7XG4gICAgYWxsUHJvamVjdHNbcHJvamVjdEluZGV4XS5wcm9qZWN0RGV0YWlscy5hbGxUYXNrc1t0YXNrSW5kZXhdLnRhc2tOYW1lID0gbmV3SW5mby50YXNrO1xuICAgIGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0ucHJvamVjdERldGFpbHMuYWxsVGFza3NbdGFza0luZGV4XS5kZXNjcmlwdGlvbiA9IG5ld0luZm8uZGVzY3JpcHRpb247XG4gICAgYWxsUHJvamVjdHNbcHJvamVjdEluZGV4XS5wcm9qZWN0RGV0YWlscy5hbGxUYXNrc1t0YXNrSW5kZXhdLmR1ZURhdGUgPSBuZXdJbmZvLmRhdGU7XG4gICAgYWxsUHJvamVjdHNbcHJvamVjdEluZGV4XS5wcm9qZWN0RGV0YWlscy5hbGxUYXNrc1t0YXNrSW5kZXhdLnByaW9yaXR5TGlzdCA9IG5ld0luZm8ucHJpb3JpdHlMaXN0O1xufTtcblxuZnVuY3Rpb24gY3JlYXRlVGFzayhuYW1lUHJvaiwgdHNrLCBkZXNjcnAsIGR0ZSwgcHJMaXN0KSB7XG4gICAgY29uc3QgaW5kZXggPSBhbGxQcm9qZWN0cy5maW5kSW5kZXgocCA9PiBwLnByb2plY3REZXRhaWxzLnByb2plY3ROYW1lID09PSBuYW1lUHJvaik7XG4gICAgYWxsUHJvamVjdHNbaW5kZXhdLmFkZFRhc2sodHNrLGRlc2NycCxkdGUscHJMaXN0KTtcbn07XG5cbmZ1bmN0aW9uIGRpc2FibGVQcmV2aW91c0RhdGVzKGRhdGUpIHtcbiAgICBsZXQgZHRUb2RheSA9IG5ldyBEYXRlKCk7XG4gXG4gICAgbGV0IG1vbnRoID0gZHRUb2RheS5nZXRNb250aCgpICsgMTtcbiAgICBsZXQgZGF5ID0gZHRUb2RheS5nZXREYXRlKCk7XG4gICAgbGV0IHllYXIgPSBkdFRvZGF5LmdldEZ1bGxZZWFyKCk7XG4gICAgaWYobW9udGggPCAxMClcbiAgICAgICAgbW9udGggPSAnMCcgKyBtb250aC50b1N0cmluZygpO1xuICAgIGlmKGRheSA8IDEwKVxuICAgICAgICBkYXkgPSAnMCcgKyBkYXkudG9TdHJpbmcoKTtcbiAgICBcbiAgICBsZXQgbWF4RGF0ZSA9IHllYXIgKyAnLScgKyBtb250aCArICctJyArIGRheTtcbiAgICBkYXRlLnNldEF0dHJpYnV0ZSgnbWluJywgbWF4RGF0ZSk7XG59XG5cbmNvbnN0IHRvZGF5QW5kVXBjb21pbmdUYXNrID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvZGF5RGF0ZSA9ICgpID0+IHtcbiAgICAgICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgbGV0IGRkID0gU3RyaW5nKHRvZGF5LmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgbGV0IG1tID0gU3RyaW5nKHRvZGF5LmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpOyBcbiAgICAgICAgbGV0IHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuXG4gICAgICAgIHJldHVybiB0b2RheSA9IHl5eXkgKyAnLScgKyBtbSArICctJyArIGRkO1xuICAgIH1cblxuICAgIGNvbnN0IGRpc3BsYXlUb2RheVRhc2tzID0gKCkgPT4gYWxsUHJvamVjdHMuZm9yRWFjaChwID0+IHAucHJvamVjdERldGFpbHMuYWxsVGFza3MuZm9yRWFjaCh0ID0+IHtcbiAgICAgICAgaWYgKHQuZHVlRGF0ZSA9PSB0b2RheURhdGUoKSkge1xuICAgICAgICAgICAgVUkudGFza0Rpc3BsYXkodC50YXNrTmFtZSwgdC5kZXNjcmlwdGlvbiwgdC5kdWVEYXRlLCB0LnByaW9yaXR5TGlzdCwgdC5jaGVja0JveCk7XG4gICAgICAgIH1cbiAgICB9KSk7IFxuICAgIFxuICAgIGNvbnN0IGRpc3BsYXlVcGNvbWluZ1Rhc2sgPSAoKSA9PiAgYWxsUHJvamVjdHMuZm9yRWFjaChwID0+IHAucHJvamVjdERldGFpbHMuYWxsVGFza3MuZm9yRWFjaCh0ID0+IHtcbiAgICAgICAgaWYgKHQuZHVlRGF0ZSA+IHRvZGF5RGF0ZSgpKSB7XG4gICAgICAgICAgICBVSS50YXNrRGlzcGxheSh0LnRhc2tOYW1lLCB0LmRlc2NyaXB0aW9uLCB0LmR1ZURhdGUsIHQucHJpb3JpdHlMaXN0LCB0LmNoZWNrQm94KTtcbiAgICAgICAgfVxuICAgIH0pKTsgXG4gICAgXG4gICAgcmV0dXJuIHsgZGlzcGxheVRvZGF5VGFza3MsIGRpc3BsYXlVcGNvbWluZ1Rhc2sgfVxufVxuXG5leHBvcnQge1xuICAgIGFsbFByb2plY3RzLFxuICAgIGRpc2FibGVQcmV2aW91c0RhdGVzLFxuICAgIHN0b3JlQ2hlY2tCb3gsXG4gICAgc2F2ZUNoZWNrQm94LFxuICAgIGNyZWF0ZVRhc2ssXG4gICAgcHJvamVjdCxcbiAgICBhZGRQcm9qZWN0LFxuICAgIGRlbGV0ZVRhc2ssXG4gICAgZWRpdFRhc2ssXG4gICAgc2F2ZU5hbWUsXG4gICAgdG9kYXlBbmRVcGNvbWluZ1Rhc2ssXG4gICAgZGVsZXRlUHJvamVjdCxcbiAgICBmaW5kSW5kZXgsXG59XG5cbiIsImNsYXNzIFB1YnN1YiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICB0aGlzLnRyYWNrZXIgPSB7XG4gICAgICAgIC8vIGtleTogZXZlbnRuYW1lLCB2YWx1ZTogWyBmdW5jcyBdXG4gICAgICB9O1xuICAgIH1cbiAgXG4gICAgc3Vic2NyaWJlKGV2ZW50TmFtZSwgZnVuYykge1xuICAgICAgaWYgKHRoaXMudHJhY2tlcltldmVudE5hbWVdKSB7XG4gICAgICAgIHRoaXMudHJhY2tlcltldmVudE5hbWVdLnB1c2goZnVuYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRyYWNrZXJbZXZlbnROYW1lXSA9IFtmdW5jXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHVuc3Vic2NyaWJlOiAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgZnVuY3MgPSB0aGlzLnRyYWNrZXJbZXZlbnROYW1lXTtcbiAgICAgICAgICBjb25zdCBpZHggPSBmdW5jcy5pbmRleE9mKGZ1bmMpO1xuICAgICAgICAgIGlmIChpZHggPiAtMSkge1xuICAgICAgICAgICAgZnVuY3Muc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgXG4gICAgcHVibGlzaChldmVudE5hbWUsIC4uLmFyZ3MpIHtcbiAgICAgIGNvbnN0IGZ1bmNzID0gdGhpcy50cmFja2VyW2V2ZW50TmFtZV07XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShmdW5jcykpIHtcbiAgICAgICAgZnVuY3MuZm9yRWFjaCgoZnVuYykgPT4ge1xuICAgICAgICAgIGZ1bmMuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5jb25zdCBwdWJzdWIgPSBuZXcgUHVic3ViKCk7XG5cbmV4cG9ydCB7IHB1YnN1YiB9IiwiaW1wb3J0IHsgYWxsUHJvamVjdHMsIGFkZFByb2plY3QgfSBmcm9tIFwiLi9sb2dpY1wiO1xuaW1wb3J0IHsgVUkgfSBmcm9tIFwiLi9ET01cIjtcbmltcG9ydCB7IHNhdmVEYXRhIH0gZnJvbSBcIi4vbG9jYWwtc3RvcmFnZVwiO1xuXG5mdW5jdGlvbiByZW5kZXJUdGxlQnRuKHByb2plY3REYXRhKSB7XG4gICAgcHJvamVjdERhdGEuZm9yRWFjaChwID0+IHtcbiAgICAgICAgYWRkUHJvamVjdChwLnByb2plY3REZXRhaWxzLnByb2plY3ROYW1lKTtcbiAgICAgICAgVUkubWFrZVByb2plY3RCdG4ocC5wcm9qZWN0RGV0YWlscy5wcm9qZWN0TmFtZSk7XG4gICAgfSk7XG59O1xuXG5mdW5jdGlvbiByZW5kZXJUYXNrRGlzcGxheShwcm9qZWN0RGF0YSkge1xuICAgIHByb2plY3REYXRhLmZvckVhY2gocCA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IGFsbFByb2plY3RzLmZpbmRJbmRleChwcm9qZWN0ID0+IHByb2plY3QucHJvamVjdERldGFpbHMucHJvamVjdE5hbWUgPT09IChwLnByb2plY3REZXRhaWxzLnByb2plY3ROYW1lKSk7XG4gICAgICAgIGlmIChwLnByb2plY3REZXRhaWxzLmFsbFRhc2tzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgcC5wcm9qZWN0RGV0YWlscy5hbGxUYXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgIGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0uYWRkVGFzayh0YXNrLnRhc2tOYW1lLCB0YXNrLmRlc2NyaXB0aW9uLCB0YXNrLmR1ZURhdGUsIHRhc2sucHJpb3JpdHlMaXN0LCB0YXNrLmNoZWNrQm94KTtcbiAgICAgICAgICAgICAgICBzYXZlRGF0YSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhbGxQcm9qZWN0cyk7XG4gICAgICAgIH07XG4gICAgfSk7XG59O1xuXG5mdW5jdGlvbiByZW5kZXJTYXZlZERhdGEoKSB7XG4gICAgY29uc3QgYWxsUHJvamVjdERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWxsUHJvamVjdERhdGFcIikpO1xuICAgIGlmIChsb2NhbFN0b3JhZ2UubGVuZ3RoICE9PSAwKSB7XG4gICAgICBpZiAoYWxsUHJvamVjdHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICByZW5kZXJUdGxlQnRuKGFsbFByb2plY3REYXRhKTtcbiAgICAgICAgICByZW5kZXJUYXNrRGlzcGxheShhbGxQcm9qZWN0RGF0YSk7XG4gICAgICB9O1xuICAgIH07IFxufTtcblxuZXhwb3J0IHsgcmVuZGVyVHRsZUJ0biwgcmVuZGVyVGFza0Rpc3BsYXksIHJlbmRlclNhdmVkRGF0YSB9XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgVUkgfSBmcm9tIFwiLi9ET01cIjtcbmltcG9ydCB7IHRvZGF5QW5kVXBjb21pbmdUYXNrIH0gZnJvbSBcIi4vbG9naWNcIjtcbmltcG9ydCB7IERPTUV2ZW50cyB9IGZyb20gJy4vRE9NX2V2ZW50cy5qcydcbmltcG9ydCB7IHJlbmRlclNhdmVkRGF0YSB9IGZyb20gXCIuL3JlbmRlclN0b3JhZ2VcIjtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgcmVuZGVyU2F2ZWREYXRhKCk7XG4gICAgVUkuZW1wdHlUb0RvUGFnZSgpO1xuICAgIFVJLmhlYWRlckRpc3BsYXkoJ1RPREFZJyk7XG4gICAgdG9kYXlBbmRVcGNvbWluZ1Rhc2soKS5kaXNwbGF5VG9kYXlUYXNrcygpO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgRE9NRXZlbnRzKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==