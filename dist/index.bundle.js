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
  background-color: #92c1b2;
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
  overflow: hidden;
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
}

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
  border-color: #92c1b2;
  border-style: solid;
  color: #92c1b2;
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
  color: #92c1b2;
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
  border-color: #92c1b2;
  border-style: solid;
  color: #92c1b2;
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
  background: #efefef;
  border-style: solid;
  border-color: #92c1b2;
  font-size: 1.5rem;
}

.add-project-btn {
  background-color: #92c1b2;
  border-style: none;
}

.delete-project-btn {
  margin-top: 1rem;
  text-align: center;
  width: 100%;
  height: 2.5rem;
  font-size: larger;
  letter-spacing: 0.2rem;
  background-color: #92c1b2;
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
  align-self: center;
  justify-self: left;
}

#add-task-btn > img {
  align-self: center;
  justify-self: center;
}

#add-task-btn:hover {
  background-color: #78c4ad;
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
  border-radius: 0.5vw;
}

#save-btn {
  margin-right: 1.5rem;
  background-color: #8ed0de;
  border-style: none;
}

#cancel-btn {
  background-color: #92c1b2;
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
  background-color: #75d7ba;
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
  grid-template-columns: 0.7fr 4fr 1fr 0.7fr;
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

#blur {
  filter: blur(5px);
  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
}

#overlay {
  position: fixed;
  display: none;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  background: rgba(255, 255, 255, 0.8);
  z-index: 999;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n}\n\n#headline {\n  display: inline-block;\n  grid-column: span 2;\n  background-color: #92c1b2;\n  color: aliceblue;\n  font-weight: bolder;\n  font-size: 4rem;\n  letter-spacing: 10px;\n  overflow: hidden;\n}\n\n#todo-list-icon {\n  margin-right: 2rem;\n}\n\n#text {\n  padding-top: 1.4rem;\n  padding-left: 23rem;\n}\n\nbody {\n  display: grid;\n  grid-template-columns: 1.5fr 4fr;\n  grid-template-rows: 0.6fr 4fr;\n  height: 100vh;\n  width: 100vw;\n  position: relative;\n}\n\n.todo-list-container {\n  display: grid;\n  grid-template-columns: 1.3fr 4fr;\n  width: 100vw;\n}\n\n.main {\n  background-color: #bdd6d6;\n  overflow: hidden;\n}\n\n.title-add-project {\n  display: flex;\n  outline-style: solid;\n  color: turquoise;\n}\n\n.all-projects {\n  display: flex;\n  flex-direction: column;\n}\n\n.header {\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  position: relative;\n}\n\n.newProjectTitle,\n.btn-containers {\n  display: flex;\n}\n\nbody {\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n}\n\n.task-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.side-bar {\n  display: flex;\n  flex-direction: column;\n}\n\n.project-btn-container {\n  display: grid;\n  grid-template-columns: 3fr 1fr;\n}\n\n.today,\n.upcoming,\n.show-projects-container {\n  display: grid;\n  grid-template-columns: 0.7fr 3fr;\n  font-size: 2rem;\n  padding-top: 0.8rem;\n  padding-bottom: 0.8rem;\n  letter-spacing: 0.3rem;\n  background-color: white;\n  border-color: #92c1b2;\n  border-style: solid;\n  color: #92c1b2;\n  font-weight: bolder;\n}\n\n.today:hover,\n.upcoming:hover,\n.all-projects > button:hover {\n  background: #6eb49f;\n  opacity: 50%;\n  color: white;\n}\n\n.upcoming {\n  border-top: none;\n}\n\n.today > div,\n.upcoming > div {\n  justify-self: left;\n  padding-left: 2rem;\n}\n\n.show-projects-container {\n  grid-template-columns: 1fr 1.9fr 1fr;\n  border-top: none;\n}\n\n#projects-btn {\n  font-size: 2rem;\n  letter-spacing: 0.3rem;\n  display: inline-block;\n  background-color: white;\n  text-align: left;\n  font-weight: bolder;\n  color: #92c1b2;\n  border-style: none;\n}\n\n.drop-down-btn {\n  background-color: white;\n  border-style: none;\n}\n\n#projects-icon {\n  padding-right: 1.9rem;\n}\n\n.all-projects {\n  display: flex;\n  flex-direction: column;\n  gap: 0.9px;\n  width: 50%;\n  height: 40%;\n  padding-left: 8rem;\n  padding-top: 2rem;\n}\n\n.all-projects > button {\n  height: 2.7rem;\n  font-size: 1.5rem;\n  background-color: white;\n  border-color: #92c1b2;\n  border-style: solid;\n  color: #92c1b2;\n  font-weight: bolder;\n}\n\n.sidebar-icons {\n  justify-self: end;\n}\n\n.input-project {\n  padding-top: 4rem;\n  align-self: center;\n}\n\n.input-project > div {\n  display: grid;\n  grid-template-columns: 10fr 1.5fr;\n  height: 3rem;\n}\n\n#get-project-title {\n  background: #efefef;\n  border-style: solid;\n  border-color: #92c1b2;\n  font-size: 1.5rem;\n}\n\n.add-project-btn {\n  background-color: #92c1b2;\n  border-style: none;\n}\n\n.delete-project-btn {\n  margin-top: 1rem;\n  text-align: center;\n  width: 100%;\n  height: 2.5rem;\n  font-size: larger;\n  letter-spacing: 0.2rem;\n  background-color: #92c1b2;\n  font-weight: bolder;\n  color: white;\n  border-style: none;\n}\n\n.delete-project-btn:hover {\n  border-style: solid;\n  border-color: #6eb49f;\n  background-color: white;\n  color: #6eb49f;\n}\n\n.project-title {\n  padding-top: 1rem;\n  padding-bottom: 3rem;\n  font-size: 3.5rem;\n  font-weight: bolder;\n  color: white;\n  letter-spacing: 10px;\n}\n\n#add-task-btn {\n  display: grid;\n  grid-template-columns: 2fr 3.5fr;\n  width: 20%;\n  padding: 1.2rem 1.3rem 1.2rem 1.3rem;\n  font-size: 1rem;\n  letter-spacing: 5px;\n  background-color: #6eb49f;\n  color: white;\n  font-weight: bold;\n  border-radius: 4vw;\n  border-style: none;\n  margin-left: 3rem;\n}\n\n#add-task-btn > div {\n  align-self: center;\n  justify-self: left;\n}\n\n#add-task-btn > img {\n  align-self: center;\n  justify-self: center;\n}\n\n#add-task-btn:hover {\n  background-color: #78c4ad;\n}\n\n.change-name-container {\n  padding-top: 2.5rem;\n}\n\n#new-project-title {\n  height: 3.5rem;\n  width: 24rem;\n  font-size: 2.5rem;\n  letter-spacing: 0.5rem;\n  background-color: #6eb49f;\n  color: white;\n  border-style: none;\n  border-radius: 0.2vw;\n}\n\n.btn-containers {\n  padding-top: 1rem;\n}\n\n#save-btn,\n#cancel-btn {\n  padding: 0.5rem 0.7rem 0.5rem 0.7rem;\n  font-weight: bold;\n  color: white;\n  letter-spacing: 3px;\n  border-radius: 0.5vw;\n}\n\n#save-btn {\n  margin-right: 1.5rem;\n  background-color: #8ed0de;\n  border-style: none;\n}\n\n#cancel-btn {\n  background-color: #92c1b2;\n  border-style: none;\n}\n\n#save-btn:hover,\n#cancel-btn:hover {\n  border-style: solid;\n  border-color: white;\n}\n\n.task-form {\n  display: flex;\n  position: absolute;\n  flex-direction: column;\n  padding: 3rem;\n  justify-content: space-between;\n  position: absolute;\n  height: 13rem;\n  width: 45%;\n  left: 30%;\n  margin-left: -50px;\n  top: 30%;\n  margin-top: -50px;\n  background: white;\n  z-index: 1;\n}\n\n.task-form > input,\n.task-form > select {\n  background-color: #6eb49f;\n  color: white;\n  height: 2rem;\n  border-style: none;\n  border-radius: 0.3vw;\n}\n\ntextarea {\n  background-color: #6eb49f;\n  border-radius: 0.3vw;\n}\n\n#cancel-task-btn,\n#submit-task-btn,\n#save-task-btn {\n  padding: 0.5rem 0.7rem 0.5rem 0.7rem;\n  font-weight: bolder;\n}\n\n#submit-task-btn:hover,\n#save-task-btn:hover {\n  background-color: #75d7ba;\n}\n\n#cancel-task-btn:hover {\n  background-color: #6eb49f;\n  color: white;\n  border-radius: 0.3vw;\n  border-style: none;\n}\n\n#submit-task-btn,\n#save-task-btn {\n  background-color: #6eb49f;\n  color: white;\n  border-radius: 0.3vw;\n  border-style: none;\n}\n\n#cancel-task-btn {\n  margin-left: 1rem;\n  color: #6eb49f;\n  background-color: white;\n  border-style: solid;\n  border-color: #6eb49f;\n  border-radius: 0.3vw;\n}\n\n.task-container-display {\n  height: 9%;\n}\n\n.task-background {\n  background-color: white;\n  width: 80%;\n  height: 100%;\n  margin-left: 3.8rem;\n  display: grid;\n  grid-template-columns: 0.7fr 4fr 1fr 0.7fr;\n  justify-content: center;\n  align-items: center;\n}\n\n.task-background > input[type=\"checkbox\"] {\n  align-self: center;\n  justify-self: center;\n  appearance: none;\n  margin: 0;\n  font: inherit;\n  width: 2.15em;\n  border-color: #6eb49f;\n  border-style: solid;\n  height: 2.15em;\n  border-radius: 0.15em;\n  transform: translateY(-0.075em);\n  display: grid;\n  place-content: center;\n  border-radius: 3vw;\n}\n\n.task-background > input[type=\"checkbox\"]:checked {\n  content: \"\";\n  width: 0.65em;\n  height: 0.65em;\n  transform: scale(3);\n  background-color: #6eb49f !important;\n  transition: 120ms transform ease-in-out;\n}\n\n.todo-list {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  gap: 1rem;\n}\n\n.taskBtns {\n  display: flex;\n  flex-direction: column;\n  justify-self: center;\n  align-self: center;\n  background-color: none;\n  gap: 4px;\n}\n\n.taskBtns > button {\n  background-color: white;\n  border-style: none;\n}\n\n.taskBtns > button:hover {\n  background: whitesmoke;\n}\n\n#date-display {\n  font-weight: bolder;\n  font-size: 1.6rem;\n}\n\n#blur {\n  filter: blur(5px);\n  -webkit-filter: blur(5px);\n  -moz-filter: blur(5px);\n  -o-filter: blur(5px);\n  -ms-filter: blur(5px);\n}\n\n#overlay {\n  position: fixed;\n  display: none;\n  left: 0px;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  background: rgba(255, 255, 255, 0.8);\n  z-index: 999;\n}\n"],"sourceRoot":""}]);
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
  return document.getElementById("get-project-title");
}

function getProjTitle() {
  let projTitle = document.querySelector(".project-title").textContent;
  return projTitle;
}

function getNewTtle() {
  return document.getElementById("new-project-title");
}

const getTaskInfo = () => {
  const task = document.getElementById("get-task-name").value;
  const description = document.getElementById("get-description").value;
  const date = document.getElementById("get-date").value;
  const priorityList = document.getElementById("get-priority-list").value;

  return {
    task,
    description,
    date,
    priorityList,
  };
};

const UI = (() => {
  function makeProjectBtn(name) {
    const btn = document.createElement("button");
    btn.setAttribute("id", `${name}-project-btn`);
    btn.classList.add("project-btn");
    btn.textContent = name;

    const projects = document.querySelector(".all-projects");
    projects.appendChild(btn);
  }

  function renderSavedTask() {
    const projectIndex = _logic__WEBPACK_IMPORTED_MODULE_0__.findIndex.projectIndex();
    _logic__WEBPACK_IMPORTED_MODULE_0__.allProjects[projectIndex].projectDetails.allTasks.forEach((task) => {
      taskDisplay(
        task.taskName,
        task.description,
        task.dueDate,
        task.priorityList,
        task.checkBox,
      );
    });
  }

  function makeAddTaskBtn() {
    const todoList = document.querySelector(".todo-list");

    const containerTaskBtn = document.createElement("div");
    containerTaskBtn.classList.add("container-task-btn");

    const addTaskBtn = document.createElement("button");
    addTaskBtn.setAttribute("id", "add-task-btn");
    addTaskBtn.classList.add("add-task-btn");

    const addIconImg = document.createElement("img");
    addIconImg.setAttribute("src", "/src/icons/material-symbols_add.svg");
    addIconImg.classList.add("add-task-btn");

    const div = document.createElement("div");
    div.classList.add("add-task-btn");
    div.textContent = "Add Task";

    addTaskBtn.appendChild(addIconImg);
    addTaskBtn.appendChild(div);
    containerTaskBtn.appendChild(addTaskBtn);
    todoList.appendChild(containerTaskBtn);
  }

  function headerDisplay(name) {
    const header = document.querySelector(".header");
    header.textContent = "";
    renderProjTtle(header, name);
  }

  function renderProjTtle(append, projTtle) {
    const projectTitle = document.createElement("div");
    projectTitle.classList.add("project-title");
    projectTitle.setAttribute("id", projTtle);
    projectTitle.textContent = projTtle;
    append.appendChild(projectTitle);
  }

  function taskForm() {
    const bg = document.querySelector(".todo-list-container");
    bg.setAttribute("id", "blur");

    const form = document.createElement("form");
    form.classList.add("task-form");

    const task = document.createElement("input");
    task.setAttribute("type", "text");
    task.setAttribute("id", "get-task-name");
    task.setAttribute("placeholder", "Task name");

    const description = document.createElement("textarea");
    description.setAttribute("type", "text");
    description.setAttribute("id", "get-description");
    description.setAttribute("placeholder", "Description");

    const date = document.createElement("input");
    date.setAttribute("type", "date");
    date.setAttribute("id", "get-date");
    (0,_logic__WEBPACK_IMPORTED_MODULE_0__.disablePreviousDates)(date);

    const priorityList = document.createElement("select");
    priorityList.setAttribute("id", "get-priority-list");

    const urgent = document.createElement("option");
    urgent.setAttribute("value", "urgent");
    urgent.textContent = "urgent";

    const important = document.createElement("option");
    important.setAttribute("value", "important");
    important.textContent = "important";

    const notImportant = document.createElement("option");
    notImportant.setAttribute("value", "not-important");
    notImportant.textContent = "not-important";

    const btnContainers = document.createElement("div");

    const submitBtn = document.createElement("input");
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("id", "submit-task-btn");
    submitBtn.textContent = "Submit";

    const cancelBtn = document.createElement("button");
    cancelBtn.setAttribute("id", "cancel-task-btn");
    cancelBtn.textContent = "cancel";

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
  }

  function removeBlurAttribute() {
    const todoListContainer = document.querySelector(".todo-list-container");
    todoListContainer.removeAttribute("id");
  }

  function updateUITaskBtn() {
    const addTaskBtn = document.querySelector(".container-task-btn");
    addTaskBtn.remove();
    makeAddTaskBtn();
  }

  function taskDisplay(task, description, date, priority, checkBox) {
    const form = document.querySelector(".todo-list");

    const container = document.createElement("div");
    container.classList.add("task-container-display");
    container.setAttribute("data-name", task);

    const bg = document.createElement("div");
    bg.classList.add("task-background");

    const checkList = document.createElement("input");
    checkList.setAttribute("type", "checkbox");
    checkList.setAttribute("id", task);
    checkList.classList.add("check-box");
    checkBox == "checked" ? (checkList.checked = true) : false;

    const taskDisplay = document.createElement("label");
    taskDisplay.setAttribute("for", task);

    const h3 = document.createElement("h3");
    h3.setAttribute("id", "task-name");
    h3.textContent = task;

    const descDisplay = document.createElement("div");
    descDisplay.setAttribute("id", "description");
    descDisplay.textContent = description;

    const dateDisplay = document.createElement("div");
    dateDisplay.setAttribute("id", "date-display");
    dateDisplay.textContent = date;

    const taskBtns = document.createElement("div");
    taskBtns.classList.add("taskBtns");

    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("id", "delete-task");
    deleteBtn.setAttribute("data-name", task);
    const deleteIcon = document.createElement("img");
    deleteIcon.setAttribute("data-name", task);
    deleteIcon.setAttribute("id", "delete-icon");
    deleteIcon.setAttribute("src", "/src/icons/bi_trash-fill.svg");

    const editTaskBtn = document.createElement("button");
    editTaskBtn.setAttribute("id", "edit-task");
    editTaskBtn.setAttribute("data-name", task);
    const editIcon = document.createElement("img");
    editIcon.setAttribute("id", "edit-icon");
    editIcon.setAttribute("src", "/src/icons/tabler_edit.svg");
    editIcon.setAttribute("data-name", task);

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
  }

  function priorityColor(priority, checkBox, date) {
    if (priority == "not-important") {
      checkBox.style.backgroundColor = "#d3d3d3";
    }
    if (priority == "urgent") {
      checkBox.style.backgroundColor = "#F65C5C";
      date.style.color = "#F65C5C";
    }
    if (priority == "important") {
      checkBox.style.backgroundColor = "#F6D35C";
      date.style.color = "#F6D35C";
    }
  }

  function emptyToDoList() {
    const todoList = document.querySelector(".todo-list");
    todoList.textContent = "";
  }

  function createSaveBtn() {
    const saveTaskBtn = document.createElement("button");
    saveTaskBtn.setAttribute("id", "save-task-btn");
    saveTaskBtn.textContent = "SAVE";
    return saveTaskBtn;
  }

  function replaceBtns(taskName) {
    const submitTaskBtn = document.getElementById("submit-task-btn");
    const saveTaskBtn = createSaveBtn();
    saveTaskBtn.setAttribute("id", "save-task-btn");
    saveTaskBtn.setAttribute("data-name", taskName)
    submitTaskBtn.replaceWith(saveTaskBtn);
  }

  function currentTaskInfo(nameOfTask, projectName) {
    const projectIndex = _logic__WEBPACK_IMPORTED_MODULE_0__.findIndex.projectIndex(projectName);
    const taskIndex = _logic__WEBPACK_IMPORTED_MODULE_0__.allProjects[
      projectIndex
    ].projectDetails.allTasks.findIndex((p) => p.taskName === nameOfTask);
    const name =
      _logic__WEBPACK_IMPORTED_MODULE_0__.allProjects[projectIndex].projectDetails.allTasks[taskIndex].taskName;
    const details =
      _logic__WEBPACK_IMPORTED_MODULE_0__.allProjects[projectIndex].projectDetails.allTasks[taskIndex].description;
    const dueDate =
      _logic__WEBPACK_IMPORTED_MODULE_0__.allProjects[projectIndex].projectDetails.allTasks[taskIndex].dueDate;
    const priority =
      _logic__WEBPACK_IMPORTED_MODULE_0__.allProjects[projectIndex].projectDetails.allTasks[taskIndex].priorityList;
    const getTask = document.getElementById("get-task-name");
    const getDescription = document.getElementById("get-description");
    const getDate = document.getElementById("get-date");
    const getPriorityList = document.getElementById("get-priority-list");
    getTask.value = name;
    getDescription.value = details;
    getDate.value = dueDate;
    getPriorityList.value = priority;
  }

  function removeDataNameAttribute(nameOfTask, projectName) {
    const projectIndex = _logic__WEBPACK_IMPORTED_MODULE_0__.findIndex.projectIndex(projectName);
    const taskIndex = _logic__WEBPACK_IMPORTED_MODULE_0__.findIndex.taskIndex(nameOfTask, projectName);
    const currentTaskName =
      _logic__WEBPACK_IMPORTED_MODULE_0__.allProjects[projectIndex].projectDetails.allTasks[taskIndex].taskName;
    const dataAttribute = document.querySelector(
      `[data-name='${currentTaskName}']`,
    );
    dataAttribute.remove();
  }

  function removeTaskForm() {
    const taskForm = document.querySelector(".task-form");
    taskForm.remove();
  }

  function changeProjName(name) {
    const header = document.querySelector(".header");

    const changeNameContainer = document.createElement("div");
    changeNameContainer.classList.add("change-name-container");

    const newProjectTitle = document.createElement("input");
    newProjectTitle.setAttribute("id", "new-project-title");
    newProjectTitle.setAttribute("type", "text");
    newProjectTitle.setAttribute("value", name);
    header.replaceChild(newProjectTitle, header.firstElementChild);

    const btnContainers = document.createElement("div");
    btnContainers.classList.add("btn-containers");

    const saveBtn = document.createElement("button");
    saveBtn.setAttribute("id", "save-btn");
    saveBtn.textContent = "SAVE";

    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "CANCEL";
    cancelBtn.setAttribute("id", "cancel-btn");

    header.appendChild(changeNameContainer);
    changeNameContainer.appendChild(newProjectTitle);
    changeNameContainer.appendChild(btnContainers);
    btnContainers.appendChild(saveBtn);
    btnContainers.appendChild(cancelBtn);
  }

  function newTtleBtn(currentProj) {
    const newTitle = getNewTtle();
    const ChangeNamebtn = document.getElementById(`${currentProj}-project-btn`);
    ChangeNamebtn.removeAttribute("id");
    ChangeNamebtn.setAttribute("id", `${newTitle.value}-project-btn`);
    ChangeNamebtn.textContent = newTitle.value;
  }

  function removeProjectBtn() {
    const projectTitle = document.querySelector(".project-title");
    const projectTitleBtn = document.getElementById(
      `${projectTitle.textContent}-project-btn`,
    );
    projectTitleBtn.remove();
  }

  function emptyToDoPage() {
    const header = document.querySelector(".header");
    header.textContent = "";
    emptyToDoList();
  }

  return {
    createSaveBtn,
    currentTaskInfo,
    changeProjName,
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
  };
})();

(0,_logic__WEBPACK_IMPORTED_MODULE_0__.findProjectName)("STUDY");




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





_pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.subscribe("addProj", _logic__WEBPACK_IMPORTED_MODULE_1__.addProject);
_pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.subscribe("dleteProj", _logic__WEBPACK_IMPORTED_MODULE_1__.deleteProject);
_pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.subscribe("saveName", _logic__WEBPACK_IMPORTED_MODULE_1__.saveName);
_pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.subscribe("saveData", _local_storage__WEBPACK_IMPORTED_MODULE_2__.saveData);
_pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.subscribe("createTask", _logic__WEBPACK_IMPORTED_MODULE_1__.createTask);
_pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.subscribe("editTask", _logic__WEBPACK_IMPORTED_MODULE_1__.editTask);
_pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.subscribe("saveBox", _logic__WEBPACK_IMPORTED_MODULE_1__.saveCheckBox);

const DOMEvents = () => {
  const d = document;
  let currentProj;
  let task;
  let newInfo;
  let btn;
  d.addEventListener("click", (e) => {
    if (e.target.matches(".add-project-btn") || e.target.matches("#add-icon")) {
      const getProjTitle = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.getProjName)();
      _pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.publish("addProj", getProjTitle.value);
      _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.makeProjectBtn(getProjTitle.value);
      if (btn != null) {
        btn.style.color = "#92C1B2";
        btn.style.backgroundColor = "white";
      }
      btn = document.getElementById(`${getProjTitle.value}-project-btn`);
      btn.style.color = "white";
      btn.style.backgroundColor = "#92C1B2";
      _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.headerDisplay(getProjTitle.value);
      _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.emptyToDoList();
      _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.makeAddTaskBtn();
      getProjTitle.value = "";
    }
    if (e.target.matches(".delete-project-btn")) {
      _pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.publish("dleteProj");
      _pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.publish("saveData");
      _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.removeProjectBtn();
      _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.emptyToDoPage();
    }
    if (e.target.matches(`.project-btn`)) {
      if (btn != null) {
        btn.style.color = "#92C1B2";
        btn.style.backgroundColor = "white";
      }
      btn = document.getElementById(`${e.target.textContent}-project-btn`);
      btn.style.color = "white";
      btn.style.backgroundColor = "#92C1B2";
      _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.headerDisplay(e.target.textContent);
      _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.emptyToDoList();
      _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.renderSavedTask();
      _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.makeAddTaskBtn();
    }
    if (e.target.matches(".add-task-btn")) {
      e.preventDefault();
      _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.taskForm((0,_DOM__WEBPACK_IMPORTED_MODULE_0__.getProjTitle)());
    }
    if (e.target.matches(".project-title")) {
      _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.changeProjName(e.target.textContent);
      currentProj = e.target.textContent;
    }
    if (e.target.matches("#save-btn")) {
      _pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.publish("saveName", currentProj);
      _pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.publish("saveData");
      _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.newTtleBtn(currentProj);
      _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.headerDisplay((0,_DOM__WEBPACK_IMPORTED_MODULE_0__.getNewTtle)().value);
    }
    if (e.target.matches("#cancel-btn")) {
      _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.headerDisplay(currentProj);
    }
    if (e.target.matches("#submit-task-btn")) {
      e.preventDefault();
      _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.removeBlurAttribute();
      let projTitle = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.getProjTitle)();
      newInfo = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.getTaskInfo)();
      _pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.publish(
        "createTask",
        projTitle,
        newInfo.task,
        newInfo.description,
        newInfo.date,
        newInfo.priorityList,
      );
      _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.taskDisplay(
        newInfo.task,
        newInfo.description,
        newInfo.date,
        newInfo.priorityList,
      );
      _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.headerDisplay(projTitle);
      _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.updateUITaskBtn();
      _pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.publish("saveData", _local_storage__WEBPACK_IMPORTED_MODULE_2__.saveData);
      _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.removeTaskForm();
    }
    if (e.target.matches("#cancel-task-btn")) {
      e.preventDefault();
      _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.removeBlurAttribute();
      _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.removeTaskForm();
      _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.headerDisplay((0,_DOM__WEBPACK_IMPORTED_MODULE_0__.getProjTitle)());
    }
    if (e.target.matches("#delete-task") || e.target.matches("#delete-icon")) {
      e.preventDefault();
      task = e.target.getAttribute("data-name");
      let nameOfProject = (0,_logic__WEBPACK_IMPORTED_MODULE_1__.findProjectName)(task);
      _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.removeDataNameAttribute(task, nameOfProject)
      ;(0,_logic__WEBPACK_IMPORTED_MODULE_1__.deleteTask)(task, nameOfProject);
    }
    if (e.target.matches("#edit-task") || e.target.matches("#edit-icon")) {
      e.preventDefault();
      _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.taskForm();
      task = e.target.getAttribute("data-name");
      let nameOfProject = (0,_logic__WEBPACK_IMPORTED_MODULE_1__.findProjectName)(task);
      _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.currentTaskInfo(task, nameOfProject);
      _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.createSaveBtn();
      _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.replaceBtns(task);
    }
    if (e.target.matches("#save-task-btn")) {
      e.preventDefault();
      _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.removeBlurAttribute();
      task = e.target.getAttribute("data-name");
      let nameOfProject = (0,_logic__WEBPACK_IMPORTED_MODULE_1__.findProjectName)(task);
      _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.removeDataNameAttribute(task, nameOfProject);
      _pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.publish("editTask", task, nameOfProject);
      _pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.publish("saveData");
      newInfo = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.getTaskInfo)();
      _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.taskDisplay(
        newInfo.task,
        newInfo.description,
        newInfo.date,
        newInfo.priorityList,
      );
      _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.removeTaskForm();
      const addTaskBtn = document.querySelector(".container-task-btn");
      if ((addTaskBtn !== null)) {
        _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.updateUITaskBtn();
      }
    }
    if (e.target.matches(".today") || e.target.textContent == "Today") {
      _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.emptyToDoPage();
      _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.headerDisplay("TODAY");
      (0,_logic__WEBPACK_IMPORTED_MODULE_1__.todayAndUpcomingTask)().displayTodayTasks();
    }
    if (e.target.matches(".upcoming") || e.target.textContent == "Upcoming") {
      _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.emptyToDoPage();
      _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.headerDisplay("UPCOMING");
      (0,_logic__WEBPACK_IMPORTED_MODULE_1__.todayAndUpcomingTask)().displayUpcomingTask();
    }
  });
  d.addEventListener("change", (e) => {
    if (e.target.matches(".check-box")) {
      let task = document.getElementById(e.target.getAttribute("id"));
      _pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.publish(
        "saveBox",
        task,
        e.target.getAttribute("id"),
        e.target.style.backgroundColor,
      );
      _pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.publish("saveData");
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
}




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
/* harmony export */   findProjectName: () => (/* binding */ findProjectName),
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
    allProjects[i].projectDetails.projectName = name;
  };

  const deleteProject = (i) => {
    allProjects.splice(i, 1);
  };

  const viewProjects = () => {
    console.log(allProjects);
  };

  const makeProject = (projectTitle) => {
    const projectDetails = {
      projectName: projectTitle,
      allTasks: [],
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
    editProjectName,
  };
};

const project = projectManagement();

class taskOperations {
  constructor(project) {
    this.project = project;
  }

  addTask = (name, details, date, priorityList, check) => {
    const taskDetails = new task(name, details, date, priorityList, check);

    this.project.allTasks.push(taskDetails);
  };

  deleteTask(i) {
    return this.projectDetails.allTasks.splice(i, 1);
  }
}

class task {
  constructor(taskName, description, dueDate, priorityList, checkBox) {
    this.taskName = taskName;
    this.description = description;
    this.dueDate = dueDate;
    this.priorityList = priorityList;
    this.checkBox = checkBox;
  }

  set() {
    [this.taskName, this.description, this.dueDate, this.priorityList] =
      value.split(" ");
  }
}

const storeCheckBox = (nameOfTask) => {
  const nameOfProject = document.querySelector(".project-title").textContent;
  const projectIndex = allProjects.findIndex(
    (p) => p.projectDetails.projectName === nameOfProject,
  );
  const taskIndex = allProjects[projectIndex].projectDetails.allTasks.findIndex(
    (p) => p.taskName === nameOfTask,
  );

  function check() {
    allProjects[projectIndex].projectDetails.allTasks[taskIndex].checkBox =
      "checked";
  }

  function unchecked() {
    allProjects[projectIndex].projectDetails.allTasks[taskIndex].checkBox =
      "unchecked";
  }

  return { check, unchecked };
};

function saveCheckBox(box, nameOfTask) {
  const checkBox = storeCheckBox(nameOfTask);
  if (box.checked == true) {
    checkBox.check();
  } else {
    checkBox.unchecked();
  }
}

function addProject(nameOfProject) {
  project.addProject(nameOfProject);
  (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveData)();
}

function deleteProject() {
  const index = findIndex.projectIndex();
  project.deleteProject(index);
}

const findIndex = (() => {
  const projectIndex = (name = (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.getProjTitle)()) => {
    const index = allProjects.findIndex(
      (p) => p.projectDetails.projectName === name,
    );
    return index;
  };

  const taskIndex = (nameTask, projName) =>
    allProjects[projectIndex(projName)].projectDetails.allTasks.findIndex(
      (p) => p.taskName === nameTask,
    );

  return { projectIndex, taskIndex };
})();

function deleteTask(nameTask, projectName) {
  const projIndex = findIndex.projectIndex(projectName);
  const taskIndex = findIndex.taskIndex(nameTask, projectName);
  allProjects[projIndex].deleteTask(taskIndex);
  (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveData)();
}

function saveName(currentProj) {
  const newTitle = (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.getNewTtle)();
  const index = allProjects.findIndex(
    (p) => p.projectDetails.projectName === currentProj,
  );
  project.editProjectName(index, newTitle.value);
  project.viewProjects();
}

function editTask(nameTask, nameOfProject) {
  const projectIndex = findIndex.projectIndex(nameOfProject);
  const taskIndex = findIndex.taskIndex(nameTask, nameOfProject);
  const newInfo = (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.getTaskInfo)();
  allProjects[projectIndex].projectDetails.allTasks[taskIndex].taskName =
    newInfo.task;
  allProjects[projectIndex].projectDetails.allTasks[taskIndex].description =
    newInfo.description;
  allProjects[projectIndex].projectDetails.allTasks[taskIndex].dueDate =
    newInfo.date;
  allProjects[projectIndex].projectDetails.allTasks[taskIndex].priorityList =
    newInfo.priorityList;
}

function createTask(nameProj, tsk, descrp, dte, prList) {
  const index = allProjects.findIndex(
    (p) => p.projectDetails.projectName === nameProj,
  );
  allProjects[index].addTask(tsk, descrp, dte, prList);
}

function disablePreviousDates(date) {
  let dtToday = new Date();

  let month = dtToday.getMonth() + 1;
  let day = dtToday.getDate();
  let year = dtToday.getFullYear();
  if (month < 10) month = "0" + month.toString();
  if (day < 10) day = "0" + day.toString();

  let maxDate = year + "-" + month + "-" + day;
  date.setAttribute("min", maxDate);
}

const todayAndUpcomingTask = () => {
  const todayDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();

    return (today = yyyy + "-" + mm + "-" + dd);
  };

  const displayTodayTasks = () =>
    allProjects.forEach((p) =>
      p.projectDetails.allTasks.forEach((t) => {
        if (t.dueDate == todayDate()) {
          _DOM_js__WEBPACK_IMPORTED_MODULE_0__.UI.taskDisplay(
            t.taskName,
            t.description,
            t.dueDate,
            t.priorityList,
            t.checkBox,
          );
        }
      }),
    );

  const displayUpcomingTask = () =>
    allProjects.forEach((p) =>
      p.projectDetails.allTasks.forEach((t) => {
        if (t.dueDate > todayDate()) {
          _DOM_js__WEBPACK_IMPORTED_MODULE_0__.UI.taskDisplay(
            t.taskName,
            t.description,
            t.dueDate,
            t.priorityList,
            t.checkBox,
          );
        }
      }),
    );

  return { displayTodayTasks, displayUpcomingTask };
};

function findProjectName(nameOfTask) {
  let name;
  allProjects.forEach(p => {
    p.projectDetails.allTasks.forEach(t => {
      if (t.taskName == nameOfTask) {
         name = p.projectDetails.projectName;
      };
    });
  });

  return name;
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
      },
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
  projectData.forEach((p) => {
    (0,_logic__WEBPACK_IMPORTED_MODULE_0__.addProject)(p.projectDetails.projectName);
    _DOM__WEBPACK_IMPORTED_MODULE_1__.UI.makeProjectBtn(p.projectDetails.projectName);
  });
}

function renderTaskDisplay(projectData) {
  projectData.forEach((p) => {
    const projectIndex = _logic__WEBPACK_IMPORTED_MODULE_0__.allProjects.findIndex(
      (project) =>
        project.projectDetails.projectName === p.projectDetails.projectName,
    );
    if (p.projectDetails.allTasks.length !== 0) {
      p.projectDetails.allTasks.forEach((task) => {
        _logic__WEBPACK_IMPORTED_MODULE_0__.allProjects[projectIndex].addTask(
          task.taskName,
          task.description,
          task.dueDate,
          task.priorityList,
          task.checkBox,
        );
        (0,_local_storage__WEBPACK_IMPORTED_MODULE_2__.saveData)();
      });
      console.log(_logic__WEBPACK_IMPORTED_MODULE_0__.allProjects);
    }
  });
}

function renderSavedData() {
  const allProjectData = JSON.parse(localStorage.getItem("allProjectData"));
  if (localStorage.length !== 0) {
    if (_logic__WEBPACK_IMPORTED_MODULE_0__.allProjects.length == 0) {
      renderTtleBtn(allProjectData);
      renderTaskDisplay(allProjectData);
    }
  }
}




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






window.addEventListener("DOMContentLoaded", () => {
  (0,_renderStorage__WEBPACK_IMPORTED_MODULE_4__.renderSavedData)();
  _DOM__WEBPACK_IMPORTED_MODULE_1__.UI.emptyToDoPage();
  _DOM__WEBPACK_IMPORTED_MODULE_1__.UI.headerDisplay("TODAY");
  (0,_logic__WEBPACK_IMPORTED_MODULE_2__.todayAndUpcomingTask)().displayTodayTasks();
});

document.addEventListener("DOMContentLoaded", () => {
  (0,_DOM_events_js__WEBPACK_IMPORTED_MODULE_3__.DOMEvents)();
});


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE9BQU8sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sT0FBTyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxPQUFPLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFB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QXlCLDZDQUFTO0FBQ2xDLElBQUksK0NBQVc7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQW9COztBQUV4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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LFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNNO0FBQ3FDO0FBQ3BCO0FBQ007O0FBRWxEO0FBQ0EsRUFBRSwrREFBZTtBQUNqQixFQUFFLG9DQUFFO0FBQ0osRUFBRSxvQ0FBRTtBQUNKLEVBQUUsNERBQW9CO0FBQ3RCLENBQUM7O0FBRUQ7QUFDQSxFQUFFLHlEQUFTO0FBQ1gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET01fZXZlbnRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2NhbC1zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHVic3ViLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9yZW5kZXJTdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuI2hlYWRsaW5lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBncmlkLWNvbHVtbjogc3BhbiAyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTJjMWIyO1xuICBjb2xvcjogYWxpY2VibHVlO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LXNpemU6IDRyZW07XG4gIGxldHRlci1zcGFjaW5nOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4jdG9kby1saXN0LWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDJyZW07XG59XG5cbiN0ZXh0IHtcbiAgcGFkZGluZy10b3A6IDEuNHJlbTtcbiAgcGFkZGluZy1sZWZ0OiAyM3JlbTtcbn1cblxuYm9keSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS41ZnIgNGZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNmZyIDRmcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50b2RvLWxpc3QtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjNmciA0ZnI7XG4gIHdpZHRoOiAxMDB2dztcbn1cblxuLm1haW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRkNmQ2O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGl0bGUtYWRkLXByb2plY3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdXRsaW5lLXN0eWxlOiBzb2xpZDtcbiAgY29sb3I6IHR1cnF1b2lzZTtcbn1cblxuLmFsbC1wcm9qZWN0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubmV3UHJvamVjdFRpdGxlLFxuLmJ0bi1jb250YWluZXJzIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuYm9keSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcbn1cblxuLnRhc2stY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnNpZGUtYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnByb2plY3QtYnRuLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjtcbn1cblxuLnRvZGF5LFxuLnVwY29taW5nLFxuLnNob3ctcHJvamVjdHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjdmciAzZnI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgcGFkZGluZy10b3A6IDAuOHJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuOHJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3JlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1jb2xvcjogIzkyYzFiMjtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgY29sb3I6ICM5MmMxYjI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi50b2RheTpob3Zlcixcbi51cGNvbWluZzpob3Zlcixcbi5hbGwtcHJvamVjdHMgPiBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNmViNDlmO1xuICBvcGFjaXR5OiA1MCU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnVwY29taW5nIHtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbn1cblxuLnRvZGF5ID4gZGl2LFxuLnVwY29taW5nID4gZGl2IHtcbiAganVzdGlmeS1zZWxmOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDJyZW07XG59XG5cbi5zaG93LXByb2plY3RzLWNvbnRhaW5lciB7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEuOWZyIDFmcjtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbn1cblxuI3Byb2plY3RzLWJ0biB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3JlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgY29sb3I6ICM5MmMxYjI7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuLmRyb3AtZG93bi1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG4jcHJvamVjdHMtaWNvbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDEuOXJlbTtcbn1cblxuLmFsbC1wcm9qZWN0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC45cHg7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNDAlO1xuICBwYWRkaW5nLWxlZnQ6IDhyZW07XG4gIHBhZGRpbmctdG9wOiAycmVtO1xufVxuXG4uYWxsLXByb2plY3RzID4gYnV0dG9uIHtcbiAgaGVpZ2h0OiAyLjdyZW07XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLWNvbG9yOiAjOTJjMWIyO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBjb2xvcjogIzkyYzFiMjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLnNpZGViYXItaWNvbnMge1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbn1cblxuLmlucHV0LXByb2plY3Qge1xuICBwYWRkaW5nLXRvcDogNHJlbTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uaW5wdXQtcHJvamVjdCA+IGRpdiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTBmciAxLjVmcjtcbiAgaGVpZ2h0OiAzcmVtO1xufVxuXG4jZ2V0LXByb2plY3QtdGl0bGUge1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICM5MmMxYjI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uYWRkLXByb2plY3QtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkyYzFiMjtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG4uZGVsZXRlLXByb2plY3QtYnRuIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyLjVyZW07XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTJjMWIyO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuLmRlbGV0ZS1wcm9qZWN0LWJ0bjpob3ZlciB7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogIzZlYjQ5ZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjNmViNDlmO1xufVxuXG4ucHJvamVjdC10aXRsZSB7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcbiAgZm9udC1zaXplOiAzLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XG59XG5cbiNhZGQtdGFzay1idG4ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzLjVmcjtcbiAgd2lkdGg6IDIwJTtcbiAgcGFkZGluZzogMS4ycmVtIDEuM3JlbSAxLjJyZW0gMS4zcmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZWI0OWY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlci1yYWRpdXM6IDR2dztcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICBtYXJnaW4tbGVmdDogM3JlbTtcbn1cblxuI2FkZC10YXNrLWJ0biA+IGRpdiB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBsZWZ0O1xufVxuXG4jYWRkLXRhc2stYnRuID4gaW1nIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuI2FkZC10YXNrLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3OGM0YWQ7XG59XG5cbi5jaGFuZ2UtbmFtZS1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogMi41cmVtO1xufVxuXG4jbmV3LXByb2plY3QtdGl0bGUge1xuICBoZWlnaHQ6IDMuNXJlbTtcbiAgd2lkdGg6IDI0cmVtO1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZlYjQ5ZjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMnZ3O1xufVxuXG4uYnRuLWNvbnRhaW5lcnMge1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbn1cblxuI3NhdmUtYnRuLFxuI2NhbmNlbC1idG4ge1xuICBwYWRkaW5nOiAwLjVyZW0gMC43cmVtIDAuNXJlbSAwLjdyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXZ3O1xufVxuXG4jc2F2ZS1idG4ge1xuICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhlZDBkZTtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG4jY2FuY2VsLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MmMxYjI7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuI3NhdmUtYnRuOmhvdmVyLFxuI2NhbmNlbC1idG46aG92ZXIge1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xufVxuXG4udGFzay1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAzcmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxM3JlbTtcbiAgd2lkdGg6IDQ1JTtcbiAgbGVmdDogMzAlO1xuICBtYXJnaW4tbGVmdDogLTUwcHg7XG4gIHRvcDogMzAlO1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi50YXNrLWZvcm0gPiBpbnB1dCxcbi50YXNrLWZvcm0gPiBzZWxlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmViNDlmO1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogMnJlbTtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwLjN2dztcbn1cblxudGV4dGFyZWEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmViNDlmO1xuICBib3JkZXItcmFkaXVzOiAwLjN2dztcbn1cblxuI2NhbmNlbC10YXNrLWJ0bixcbiNzdWJtaXQtdGFzay1idG4sXG4jc2F2ZS10YXNrLWJ0biB7XG4gIHBhZGRpbmc6IDAuNXJlbSAwLjdyZW0gMC41cmVtIDAuN3JlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuI3N1Ym1pdC10YXNrLWJ0bjpob3ZlcixcbiNzYXZlLXRhc2stYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc1ZDdiYTtcbn1cblxuI2NhbmNlbC10YXNrLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZWI0OWY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMC4zdnc7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuI3N1Ym1pdC10YXNrLWJ0bixcbiNzYXZlLXRhc2stYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZlYjQ5ZjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAwLjN2dztcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG4jY2FuY2VsLXRhc2stYnRuIHtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIGNvbG9yOiAjNmViNDlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjNmViNDlmO1xuICBib3JkZXItcmFkaXVzOiAwLjN2dztcbn1cblxuLnRhc2stY29udGFpbmVyLWRpc3BsYXkge1xuICBoZWlnaHQ6IDklO1xufVxuXG4udGFzay1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDMuOHJlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjdmciA0ZnIgMWZyIDAuN2ZyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRhc2stYmFja2dyb3VuZCA+IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgZm9udDogaW5oZXJpdDtcbiAgd2lkdGg6IDIuMTVlbTtcbiAgYm9yZGVyLWNvbG9yOiAjNmViNDlmO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBoZWlnaHQ6IDIuMTVlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4xNWVtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMDc1ZW0pO1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDN2dztcbn1cblxuLnRhc2stYmFja2dyb3VuZCA+IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDAuNjVlbTtcbiAgaGVpZ2h0OiAwLjY1ZW07XG4gIHRyYW5zZm9ybTogc2NhbGUoMyk7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZWI0OWYgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogMTIwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xufVxuXG4udG9kby1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBnYXA6IDFyZW07XG59XG5cbi50YXNrQnRucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG4gIGdhcDogNHB4O1xufVxuXG4udGFza0J0bnMgPiBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG4udGFza0J0bnMgPiBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xufVxuXG4jZGF0ZS1kaXNwbGF5IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAxLjZyZW07XG59XG5cbiNibHVyIHtcbiAgZmlsdGVyOiBibHVyKDVweCk7XG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKDVweCk7XG4gIC1tb3otZmlsdGVyOiBibHVyKDVweCk7XG4gIC1vLWZpbHRlcjogYmx1cig1cHgpO1xuICAtbXMtZmlsdGVyOiBibHVyKDVweCk7XG59XG5cbiNvdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBub25lO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICByaWdodDogMHB4O1xuICBib3R0b206IDBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICB6LWluZGV4OiA5OTk7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtF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ZTtFQUNmLGFBQWE7RUFDYixTQUFTO0VBQ1QsUUFBUTtFQUNSLFVBQVU7RUFDVixXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbiNoZWFkbGluZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkyYzFiMjtcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4jdG9kby1saXN0LWljb24ge1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbn1cXG5cXG4jdGV4dCB7XFxuICBwYWRkaW5nLXRvcDogMS40cmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAyM3JlbTtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjVmciA0ZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNmZyIDRmcjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50b2RvLWxpc3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuM2ZyIDRmcjtcXG4gIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLm1haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JkZDZkNjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi50aXRsZS1hZGQtcHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgb3V0bGluZS1zdHlsZTogc29saWQ7XFxuICBjb2xvcjogdHVycXVvaXNlO1xcbn1cXG5cXG4uYWxsLXByb2plY3RzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5uZXdQcm9qZWN0VGl0bGUsXFxuLmJ0bi1jb250YWluZXJzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc2lkZS1iYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wcm9qZWN0LWJ0bi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjtcXG59XFxuXFxuLnRvZGF5LFxcbi51cGNvbWluZyxcXG4uc2hvdy1wcm9qZWN0cy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC43ZnIgM2ZyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgcGFkZGluZy10b3A6IDAuOHJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjhyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMC4zcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItY29sb3I6ICM5MmMxYjI7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgY29sb3I6ICM5MmMxYjI7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4udG9kYXk6aG92ZXIsXFxuLnVwY29taW5nOmhvdmVyLFxcbi5hbGwtcHJvamVjdHMgPiBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzZlYjQ5ZjtcXG4gIG9wYWNpdHk6IDUwJTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnVwY29taW5nIHtcXG4gIGJvcmRlci10b3A6IG5vbmU7XFxufVxcblxcbi50b2RheSA+IGRpdixcXG4udXBjb21pbmcgPiBkaXYge1xcbiAganVzdGlmeS1zZWxmOiBsZWZ0O1xcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbn1cXG5cXG4uc2hvdy1wcm9qZWN0cy1jb250YWluZXIge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS45ZnIgMWZyO1xcbiAgYm9yZGVyLXRvcDogbm9uZTtcXG59XFxuXFxuI3Byb2plY3RzLWJ0biB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMC4zcmVtO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGNvbG9yOiAjOTJjMWIyO1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4uZHJvcC1kb3duLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuI3Byb2plY3RzLWljb24ge1xcbiAgcGFkZGluZy1yaWdodDogMS45cmVtO1xcbn1cXG5cXG4uYWxsLXByb2plY3RzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjlweDtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDQwJTtcXG4gIHBhZGRpbmctbGVmdDogOHJlbTtcXG4gIHBhZGRpbmctdG9wOiAycmVtO1xcbn1cXG5cXG4uYWxsLXByb2plY3RzID4gYnV0dG9uIHtcXG4gIGhlaWdodDogMi43cmVtO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1jb2xvcjogIzkyYzFiMjtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBjb2xvcjogIzkyYzFiMjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi5zaWRlYmFyLWljb25zIHtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4uaW5wdXQtcHJvamVjdCB7XFxuICBwYWRkaW5nLXRvcDogNHJlbTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmlucHV0LXByb2plY3QgPiBkaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTBmciAxLjVmcjtcXG4gIGhlaWdodDogM3JlbTtcXG59XFxuXFxuI2dldC1wcm9qZWN0LXRpdGxlIHtcXG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiAjOTJjMWIyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5hZGQtcHJvamVjdC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkyYzFiMjtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0LWJ0biB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5MmMxYjI7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3QtYnRuOmhvdmVyIHtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6ICM2ZWI0OWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiAjNmViNDlmO1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZSB7XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAzcmVtO1xcbiAgZm9udC1zaXplOiAzLjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XFxufVxcblxcbiNhZGQtdGFzay1idG4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDMuNWZyO1xcbiAgd2lkdGg6IDIwJTtcXG4gIHBhZGRpbmc6IDEuMnJlbSAxLjNyZW0gMS4ycmVtIDEuM3JlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmViNDlmO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXItcmFkaXVzOiA0dnc7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBtYXJnaW4tbGVmdDogM3JlbTtcXG59XFxuXFxuI2FkZC10YXNrLWJ0biA+IGRpdiB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxufVxcblxcbiNhZGQtdGFzay1idG4gPiBpbWcge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNhZGQtdGFzay1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc4YzRhZDtcXG59XFxuXFxuLmNoYW5nZS1uYW1lLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nLXRvcDogMi41cmVtO1xcbn1cXG5cXG4jbmV3LXByb2plY3QtdGl0bGUge1xcbiAgaGVpZ2h0OiAzLjVyZW07XFxuICB3aWR0aDogMjRyZW07XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmViNDlmO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC4ydnc7XFxufVxcblxcbi5idG4tY29udGFpbmVycyB7XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG59XFxuXFxuI3NhdmUtYnRuLFxcbiNjYW5jZWwtYnRuIHtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjdyZW0gMC41cmVtIDAuN3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXZ3O1xcbn1cXG5cXG4jc2F2ZS1idG4ge1xcbiAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGVkMGRlO1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4jY2FuY2VsLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTJjMWIyO1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4jc2F2ZS1idG46aG92ZXIsXFxuI2NhbmNlbC1idG46aG92ZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XFxufVxcblxcbi50YXNrLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAzcmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxM3JlbTtcXG4gIHdpZHRoOiA0NSU7XFxuICBsZWZ0OiAzMCU7XFxuICBtYXJnaW4tbGVmdDogLTUwcHg7XFxuICB0b3A6IDMwJTtcXG4gIG1hcmdpbi10b3A6IC01MHB4O1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4udGFzay1mb3JtID4gaW5wdXQsXFxuLnRhc2stZm9ybSA+IHNlbGVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmViNDlmO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC4zdnc7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZWI0OWY7XFxuICBib3JkZXItcmFkaXVzOiAwLjN2dztcXG59XFxuXFxuI2NhbmNlbC10YXNrLWJ0bixcXG4jc3VibWl0LXRhc2stYnRuLFxcbiNzYXZlLXRhc2stYnRuIHtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjdyZW0gMC41cmVtIDAuN3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbiNzdWJtaXQtdGFzay1idG46aG92ZXIsXFxuI3NhdmUtdGFzay1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc1ZDdiYTtcXG59XFxuXFxuI2NhbmNlbC10YXNrLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmViNDlmO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMC4zdnc7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbiNzdWJtaXQtdGFzay1idG4sXFxuI3NhdmUtdGFzay1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZlYjQ5ZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3Z3O1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4jY2FuY2VsLXRhc2stYnRuIHtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgY29sb3I6ICM2ZWI0OWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6ICM2ZWI0OWY7XFxuICBib3JkZXItcmFkaXVzOiAwLjN2dztcXG59XFxuXFxuLnRhc2stY29udGFpbmVyLWRpc3BsYXkge1xcbiAgaGVpZ2h0OiA5JTtcXG59XFxuXFxuLnRhc2stYmFja2dyb3VuZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW4tbGVmdDogMy44cmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC43ZnIgNGZyIDFmciAwLjdmcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stYmFja2dyb3VuZCA+IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHdpZHRoOiAyLjE1ZW07XFxuICBib3JkZXItY29sb3I6ICM2ZWI0OWY7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgaGVpZ2h0OiAyLjE1ZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjE1ZW07XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMDc1ZW0pO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDN2dztcXG59XFxuXFxuLnRhc2stYmFja2dyb3VuZCA+IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiAwLjY1ZW07XFxuICBoZWlnaHQ6IDAuNjVlbTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmViNDlmICFpbXBvcnRhbnQ7XFxuICB0cmFuc2l0aW9uOiAxMjBtcyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50b2RvLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi50YXNrQnRucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcXG4gIGdhcDogNHB4O1xcbn1cXG5cXG4udGFza0J0bnMgPiBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi50YXNrQnRucyA+IGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG4jZGF0ZS1kaXNwbGF5IHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG59XFxuXFxuI2JsdXIge1xcbiAgZmlsdGVyOiBibHVyKDVweCk7XFxuICAtd2Via2l0LWZpbHRlcjogYmx1cig1cHgpO1xcbiAgLW1vei1maWx0ZXI6IGJsdXIoNXB4KTtcXG4gIC1vLWZpbHRlcjogYmx1cig1cHgpO1xcbiAgLW1zLWZpbHRlcjogYmx1cig1cHgpO1xcbn1cXG5cXG4jb3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbGVmdDogMHB4O1xcbiAgdG9wOiAwcHg7XFxuICByaWdodDogMHB4O1xcbiAgYm90dG9tOiAwcHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICB6LWluZGV4OiA5OTk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge1xuICBhbGxQcm9qZWN0cyxcbiAgZGlzYWJsZVByZXZpb3VzRGF0ZXMsXG4gIGRlbGV0ZVRhc2ssXG4gIGZpbmRJbmRleCxcbiAgZmluZFByb2plY3ROYW1lLFxufSBmcm9tIFwiLi9sb2dpY1wiO1xuXG5mdW5jdGlvbiBnZXRQcm9qTmFtZSgpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2V0LXByb2plY3QtdGl0bGVcIik7XG59XG5cbmZ1bmN0aW9uIGdldFByb2pUaXRsZSgpIHtcbiAgbGV0IHByb2pUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10aXRsZVwiKS50ZXh0Q29udGVudDtcbiAgcmV0dXJuIHByb2pUaXRsZTtcbn1cblxuZnVuY3Rpb24gZ2V0TmV3VHRsZSgpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXByb2plY3QtdGl0bGVcIik7XG59XG5cbmNvbnN0IGdldFRhc2tJbmZvID0gKCkgPT4ge1xuICBjb25zdCB0YXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnZXQtdGFzay1uYW1lXCIpLnZhbHVlO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2V0LWRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnZXQtZGF0ZVwiKS52YWx1ZTtcbiAgY29uc3QgcHJpb3JpdHlMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnZXQtcHJpb3JpdHktbGlzdFwiKS52YWx1ZTtcblxuICByZXR1cm4ge1xuICAgIHRhc2ssXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZGF0ZSxcbiAgICBwcmlvcml0eUxpc3QsXG4gIH07XG59O1xuXG5jb25zdCBVSSA9ICgoKSA9PiB7XG4gIGZ1bmN0aW9uIG1ha2VQcm9qZWN0QnRuKG5hbWUpIHtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtuYW1lfS1wcm9qZWN0LWJ0bmApO1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1idG5cIik7XG4gICAgYnRuLnRleHRDb250ZW50ID0gbmFtZTtcblxuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGwtcHJvamVjdHNcIik7XG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlclNhdmVkVGFzaygpIHtcbiAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBmaW5kSW5kZXgucHJvamVjdEluZGV4KCk7XG4gICAgYWxsUHJvamVjdHNbcHJvamVjdEluZGV4XS5wcm9qZWN0RGV0YWlscy5hbGxUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICB0YXNrRGlzcGxheShcbiAgICAgICAgdGFzay50YXNrTmFtZSxcbiAgICAgICAgdGFzay5kZXNjcmlwdGlvbixcbiAgICAgICAgdGFzay5kdWVEYXRlLFxuICAgICAgICB0YXNrLnByaW9yaXR5TGlzdCxcbiAgICAgICAgdGFzay5jaGVja0JveCxcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBtYWtlQWRkVGFza0J0bigpIHtcbiAgICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1saXN0XCIpO1xuXG4gICAgY29uc3QgY29udGFpbmVyVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyVGFza0J0bi5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyLXRhc2stYnRuXCIpO1xuXG4gICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkVGFza0J0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC10YXNrLWJ0blwiKTtcbiAgICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoXCJhZGQtdGFzay1idG5cIik7XG5cbiAgICBjb25zdCBhZGRJY29uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBhZGRJY29uSW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi9zcmMvaWNvbnMvbWF0ZXJpYWwtc3ltYm9sc19hZGQuc3ZnXCIpO1xuICAgIGFkZEljb25JbWcuY2xhc3NMaXN0LmFkZChcImFkZC10YXNrLWJ0blwiKTtcblxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJhZGQtdGFzay1idG5cIik7XG4gICAgZGl2LnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuXG4gICAgYWRkVGFza0J0bi5hcHBlbmRDaGlsZChhZGRJY29uSW1nKTtcbiAgICBhZGRUYXNrQnRuLmFwcGVuZENoaWxkKGRpdik7XG4gICAgY29udGFpbmVyVGFza0J0bi5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcbiAgICB0b2RvTGlzdC5hcHBlbmRDaGlsZChjb250YWluZXJUYXNrQnRuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhlYWRlckRpc3BsYXkobmFtZSkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgcmVuZGVyUHJvalR0bGUoaGVhZGVyLCBuYW1lKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlclByb2pUdGxlKGFwcGVuZCwgcHJvalR0bGUpIHtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10aXRsZVwiKTtcbiAgICBwcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgcHJvalR0bGUpO1xuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2pUdGxlO1xuICAgIGFwcGVuZC5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGFza0Zvcm0oKSB7XG4gICAgY29uc3QgYmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tbGlzdC1jb250YWluZXJcIik7XG4gICAgYmcuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJibHVyXCIpO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcInRhc2stZm9ybVwiKTtcblxuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGFzay5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICB0YXNrLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZ2V0LXRhc2stbmFtZVwiKTtcbiAgICB0YXNrLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiVGFzayBuYW1lXCIpO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJnZXQtZGVzY3JpcHRpb25cIik7XG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJEZXNjcmlwdGlvblwiKTtcblxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgICBkYXRlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZ2V0LWRhdGVcIik7XG4gICAgZGlzYWJsZVByZXZpb3VzRGF0ZXMoZGF0ZSk7XG5cbiAgICBjb25zdCBwcmlvcml0eUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIHByaW9yaXR5TGlzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImdldC1wcmlvcml0eS1saXN0XCIpO1xuXG4gICAgY29uc3QgdXJnZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICB1cmdlbnQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJ1cmdlbnRcIik7XG4gICAgdXJnZW50LnRleHRDb250ZW50ID0gXCJ1cmdlbnRcIjtcblxuICAgIGNvbnN0IGltcG9ydGFudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgaW1wb3J0YW50LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiaW1wb3J0YW50XCIpO1xuICAgIGltcG9ydGFudC50ZXh0Q29udGVudCA9IFwiaW1wb3J0YW50XCI7XG5cbiAgICBjb25zdCBub3RJbXBvcnRhbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG5vdEltcG9ydGFudC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIm5vdC1pbXBvcnRhbnRcIik7XG4gICAgbm90SW1wb3J0YW50LnRleHRDb250ZW50ID0gXCJub3QtaW1wb3J0YW50XCI7XG5cbiAgICBjb25zdCBidG5Db250YWluZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdWJtaXQtdGFzay1idG5cIik7XG4gICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcblxuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2FuY2VsLXRhc2stYnRuXCIpO1xuICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiY2FuY2VsXCI7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5TGlzdCk7XG4gICAgcHJpb3JpdHlMaXN0LmFwcGVuZENoaWxkKHVyZ2VudCk7XG4gICAgcHJpb3JpdHlMaXN0LmFwcGVuZENoaWxkKGltcG9ydGFudCk7XG4gICAgcHJpb3JpdHlMaXN0LmFwcGVuZENoaWxkKG5vdEltcG9ydGFudCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChidG5Db250YWluZXJzKTtcbiAgICBidG5Db250YWluZXJzLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG4gICAgYnRuQ29udGFpbmVycy5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlQmx1ckF0dHJpYnV0ZSgpIHtcbiAgICBjb25zdCB0b2RvTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1saXN0LWNvbnRhaW5lclwiKTtcbiAgICB0b2RvTGlzdENvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVVJVGFza0J0bigpIHtcbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXItdGFzay1idG5cIik7XG4gICAgYWRkVGFza0J0bi5yZW1vdmUoKTtcbiAgICBtYWtlQWRkVGFza0J0bigpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGFza0Rpc3BsYXkodGFzaywgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCBjaGVja0JveCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tbGlzdFwiKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbnRhaW5lci1kaXNwbGF5XCIpO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkYXRhLW5hbWVcIiwgdGFzayk7XG5cbiAgICBjb25zdCBiZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYmcuY2xhc3NMaXN0LmFkZChcInRhc2stYmFja2dyb3VuZFwiKTtcblxuICAgIGNvbnN0IGNoZWNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjaGVja0xpc3Quc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgIGNoZWNrTGlzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0YXNrKTtcbiAgICBjaGVja0xpc3QuY2xhc3NMaXN0LmFkZChcImNoZWNrLWJveFwiKTtcbiAgICBjaGVja0JveCA9PSBcImNoZWNrZWRcIiA/IChjaGVja0xpc3QuY2hlY2tlZCA9IHRydWUpIDogZmFsc2U7XG5cbiAgICBjb25zdCB0YXNrRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICB0YXNrRGlzcGxheS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgdGFzayk7XG5cbiAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBoMy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stbmFtZVwiKTtcbiAgICBoMy50ZXh0Q29udGVudCA9IHRhc2s7XG5cbiAgICBjb25zdCBkZXNjRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVzY0Rpc3BsYXkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgICBkZXNjRGlzcGxheS50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuXG4gICAgY29uc3QgZGF0ZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRhdGVEaXNwbGF5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGF0ZS1kaXNwbGF5XCIpO1xuICAgIGRhdGVEaXNwbGF5LnRleHRDb250ZW50ID0gZGF0ZTtcblxuICAgIGNvbnN0IHRhc2tCdG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQnRucy5jbGFzc0xpc3QuYWRkKFwidGFza0J0bnNcIik7XG5cbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlbGV0ZS10YXNrXCIpO1xuICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLW5hbWVcIiwgdGFzayk7XG4gICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgZGVsZXRlSWNvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLW5hbWVcIiwgdGFzayk7XG4gICAgZGVsZXRlSWNvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlbGV0ZS1pY29uXCIpO1xuICAgIGRlbGV0ZUljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiL3NyYy9pY29ucy9iaV90cmFzaC1maWxsLnN2Z1wiKTtcblxuICAgIGNvbnN0IGVkaXRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBlZGl0VGFza0J0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVkaXQtdGFza1wiKTtcbiAgICBlZGl0VGFza0J0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLW5hbWVcIiwgdGFzayk7XG4gICAgY29uc3QgZWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGVkaXRJY29uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWRpdC1pY29uXCIpO1xuICAgIGVkaXRJY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi9zcmMvaWNvbnMvdGFibGVyX2VkaXQuc3ZnXCIpO1xuICAgIGVkaXRJY29uLnNldEF0dHJpYnV0ZShcImRhdGEtbmFtZVwiLCB0YXNrKTtcblxuICAgIHByaW9yaXR5Q29sb3IocHJpb3JpdHksIGNoZWNrTGlzdCwgZGF0ZURpc3BsYXkpO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChiZyk7XG4gICAgYmcuYXBwZW5kQ2hpbGQoY2hlY2tMaXN0KTtcbiAgICBiZy5hcHBlbmRDaGlsZCh0YXNrRGlzcGxheSk7XG4gICAgYmcuYXBwZW5kQ2hpbGQoZGF0ZURpc3BsYXkpO1xuICAgIGJnLmFwcGVuZENoaWxkKHRhc2tCdG5zKTtcbiAgICB0YXNrQnRucy5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICAgIGRlbGV0ZUJ0bi5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcbiAgICB0YXNrQnRucy5hcHBlbmRDaGlsZChlZGl0VGFza0J0bik7XG4gICAgZWRpdFRhc2tCdG4uYXBwZW5kQ2hpbGQoZWRpdEljb24pO1xuICAgIHRhc2tEaXNwbGF5LmFwcGVuZENoaWxkKGgzKTtcbiAgICB0YXNrRGlzcGxheS5hcHBlbmRDaGlsZChkZXNjRGlzcGxheSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcmlvcml0eUNvbG9yKHByaW9yaXR5LCBjaGVja0JveCwgZGF0ZSkge1xuICAgIGlmIChwcmlvcml0eSA9PSBcIm5vdC1pbXBvcnRhbnRcIikge1xuICAgICAgY2hlY2tCb3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZDNkM2QzXCI7XG4gICAgfVxuICAgIGlmIChwcmlvcml0eSA9PSBcInVyZ2VudFwiKSB7XG4gICAgICBjaGVja0JveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNGNjVDNUNcIjtcbiAgICAgIGRhdGUuc3R5bGUuY29sb3IgPSBcIiNGNjVDNUNcIjtcbiAgICB9XG4gICAgaWYgKHByaW9yaXR5ID09IFwiaW1wb3J0YW50XCIpIHtcbiAgICAgIGNoZWNrQm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI0Y2RDM1Q1wiO1xuICAgICAgZGF0ZS5zdHlsZS5jb2xvciA9IFwiI0Y2RDM1Q1wiO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGVtcHR5VG9Eb0xpc3QoKSB7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tbGlzdFwiKTtcbiAgICB0b2RvTGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTYXZlQnRuKCkge1xuICAgIGNvbnN0IHNhdmVUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzYXZlVGFza0J0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNhdmUtdGFzay1idG5cIik7XG4gICAgc2F2ZVRhc2tCdG4udGV4dENvbnRlbnQgPSBcIlNBVkVcIjtcbiAgICByZXR1cm4gc2F2ZVRhc2tCdG47XG4gIH1cblxuICBmdW5jdGlvbiByZXBsYWNlQnRucyh0YXNrTmFtZSkge1xuICAgIGNvbnN0IHN1Ym1pdFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdC10YXNrLWJ0blwiKTtcbiAgICBjb25zdCBzYXZlVGFza0J0biA9IGNyZWF0ZVNhdmVCdG4oKTtcbiAgICBzYXZlVGFza0J0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNhdmUtdGFzay1idG5cIik7XG4gICAgc2F2ZVRhc2tCdG4uc2V0QXR0cmlidXRlKFwiZGF0YS1uYW1lXCIsIHRhc2tOYW1lKVxuICAgIHN1Ym1pdFRhc2tCdG4ucmVwbGFjZVdpdGgoc2F2ZVRhc2tCdG4pO1xuICB9XG5cbiAgZnVuY3Rpb24gY3VycmVudFRhc2tJbmZvKG5hbWVPZlRhc2ssIHByb2plY3ROYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdEluZGV4ID0gZmluZEluZGV4LnByb2plY3RJbmRleChwcm9qZWN0TmFtZSk7XG4gICAgY29uc3QgdGFza0luZGV4ID0gYWxsUHJvamVjdHNbXG4gICAgICBwcm9qZWN0SW5kZXhcbiAgICBdLnByb2plY3REZXRhaWxzLmFsbFRhc2tzLmZpbmRJbmRleCgocCkgPT4gcC50YXNrTmFtZSA9PT0gbmFtZU9mVGFzayk7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBhbGxQcm9qZWN0c1twcm9qZWN0SW5kZXhdLnByb2plY3REZXRhaWxzLmFsbFRhc2tzW3Rhc2tJbmRleF0udGFza05hbWU7XG4gICAgY29uc3QgZGV0YWlscyA9XG4gICAgICBhbGxQcm9qZWN0c1twcm9qZWN0SW5kZXhdLnByb2plY3REZXRhaWxzLmFsbFRhc2tzW3Rhc2tJbmRleF0uZGVzY3JpcHRpb247XG4gICAgY29uc3QgZHVlRGF0ZSA9XG4gICAgICBhbGxQcm9qZWN0c1twcm9qZWN0SW5kZXhdLnByb2plY3REZXRhaWxzLmFsbFRhc2tzW3Rhc2tJbmRleF0uZHVlRGF0ZTtcbiAgICBjb25zdCBwcmlvcml0eSA9XG4gICAgICBhbGxQcm9qZWN0c1twcm9qZWN0SW5kZXhdLnByb2plY3REZXRhaWxzLmFsbFRhc2tzW3Rhc2tJbmRleF0ucHJpb3JpdHlMaXN0O1xuICAgIGNvbnN0IGdldFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdldC10YXNrLW5hbWVcIik7XG4gICAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdldC1kZXNjcmlwdGlvblwiKTtcbiAgICBjb25zdCBnZXREYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnZXQtZGF0ZVwiKTtcbiAgICBjb25zdCBnZXRQcmlvcml0eUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdldC1wcmlvcml0eS1saXN0XCIpO1xuICAgIGdldFRhc2sudmFsdWUgPSBuYW1lO1xuICAgIGdldERlc2NyaXB0aW9uLnZhbHVlID0gZGV0YWlscztcbiAgICBnZXREYXRlLnZhbHVlID0gZHVlRGF0ZTtcbiAgICBnZXRQcmlvcml0eUxpc3QudmFsdWUgPSBwcmlvcml0eTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZURhdGFOYW1lQXR0cmlidXRlKG5hbWVPZlRhc2ssIHByb2plY3ROYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdEluZGV4ID0gZmluZEluZGV4LnByb2plY3RJbmRleChwcm9qZWN0TmFtZSk7XG4gICAgY29uc3QgdGFza0luZGV4ID0gZmluZEluZGV4LnRhc2tJbmRleChuYW1lT2ZUYXNrLCBwcm9qZWN0TmFtZSk7XG4gICAgY29uc3QgY3VycmVudFRhc2tOYW1lID1cbiAgICAgIGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0ucHJvamVjdERldGFpbHMuYWxsVGFza3NbdGFza0luZGV4XS50YXNrTmFtZTtcbiAgICBjb25zdCBkYXRhQXR0cmlidXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1uYW1lPScke2N1cnJlbnRUYXNrTmFtZX0nXWAsXG4gICAgKTtcbiAgICBkYXRhQXR0cmlidXRlLnJlbW92ZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlVGFza0Zvcm0oKSB7XG4gICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZm9ybVwiKTtcbiAgICB0YXNrRm9ybS5yZW1vdmUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoYW5nZVByb2pOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcblxuICAgIGNvbnN0IGNoYW5nZU5hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNoYW5nZU5hbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNoYW5nZS1uYW1lLWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IG5ld1Byb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBuZXdQcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXctcHJvamVjdC10aXRsZVwiKTtcbiAgICBuZXdQcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgbmV3UHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIG5hbWUpO1xuICAgIGhlYWRlci5yZXBsYWNlQ2hpbGQobmV3UHJvamVjdFRpdGxlLCBoZWFkZXIuZmlyc3RFbGVtZW50Q2hpbGQpO1xuXG4gICAgY29uc3QgYnRuQ29udGFpbmVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnRuQ29udGFpbmVycy5jbGFzc0xpc3QuYWRkKFwiYnRuLWNvbnRhaW5lcnNcIik7XG5cbiAgICBjb25zdCBzYXZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzYXZlQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2F2ZS1idG5cIik7XG4gICAgc2F2ZUJ0bi50ZXh0Q29udGVudCA9IFwiU0FWRVwiO1xuXG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNBTkNFTFwiO1xuICAgIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNhbmNlbC1idG5cIik7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY2hhbmdlTmFtZUNvbnRhaW5lcik7XG4gICAgY2hhbmdlTmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0VGl0bGUpO1xuICAgIGNoYW5nZU5hbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuQ29udGFpbmVycyk7XG4gICAgYnRuQ29udGFpbmVycy5hcHBlbmRDaGlsZChzYXZlQnRuKTtcbiAgICBidG5Db250YWluZXJzLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG4gIH1cblxuICBmdW5jdGlvbiBuZXdUdGxlQnRuKGN1cnJlbnRQcm9qKSB7XG4gICAgY29uc3QgbmV3VGl0bGUgPSBnZXROZXdUdGxlKCk7XG4gICAgY29uc3QgQ2hhbmdlTmFtZWJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2N1cnJlbnRQcm9qfS1wcm9qZWN0LWJ0bmApO1xuICAgIENoYW5nZU5hbWVidG4ucmVtb3ZlQXR0cmlidXRlKFwiaWRcIik7XG4gICAgQ2hhbmdlTmFtZWJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtuZXdUaXRsZS52YWx1ZX0tcHJvamVjdC1idG5gKTtcbiAgICBDaGFuZ2VOYW1lYnRuLnRleHRDb250ZW50ID0gbmV3VGl0bGUudmFsdWU7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVQcm9qZWN0QnRuKCkge1xuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10aXRsZVwiKTtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIGAke3Byb2plY3RUaXRsZS50ZXh0Q29udGVudH0tcHJvamVjdC1idG5gLFxuICAgICk7XG4gICAgcHJvamVjdFRpdGxlQnRuLnJlbW92ZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZW1wdHlUb0RvUGFnZSgpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGVtcHR5VG9Eb0xpc3QoKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlU2F2ZUJ0bixcbiAgICBjdXJyZW50VGFza0luZm8sXG4gICAgY2hhbmdlUHJvak5hbWUsXG4gICAgZW1wdHlUb0RvTGlzdCxcbiAgICBlbXB0eVRvRG9QYWdlLFxuICAgIG1ha2VQcm9qZWN0QnRuLFxuICAgIG1ha2VBZGRUYXNrQnRuLFxuICAgIG5ld1R0bGVCdG4sXG4gICAgcmVtb3ZlRGF0YU5hbWVBdHRyaWJ1dGUsXG4gICAgcmVtb3ZlUHJvamVjdEJ0bixcbiAgICByZW1vdmVUYXNrRm9ybSxcbiAgICByZW1vdmVCbHVyQXR0cmlidXRlLFxuICAgIHJlcGxhY2VCdG5zLFxuICAgIHJlbmRlclNhdmVkVGFzayxcbiAgICBoZWFkZXJEaXNwbGF5LFxuICAgIHByaW9yaXR5Q29sb3IsXG4gICAgdGFza0Zvcm0sXG4gICAgdGFza0Rpc3BsYXksXG4gICAgdXBkYXRlVUlUYXNrQnRuLFxuICB9O1xufSkoKTtcblxuZmluZFByb2plY3ROYW1lKFwiU1RVRFlcIik7XG5cbmV4cG9ydCB7IGdldFRhc2tJbmZvLCBnZXRQcm9qTmFtZSwgZ2V0TmV3VHRsZSwgZ2V0UHJvalRpdGxlLCBVSSB9O1xuIiwiaW1wb3J0IHsgVUksIGdldFByb2pUaXRsZSwgZ2V0TmV3VHRsZSwgZ2V0UHJvak5hbWUsIGdldFRhc2tJbmZvIH0gZnJvbSBcIi4vRE9NXCI7XG5pbXBvcnQge1xuICBhZGRQcm9qZWN0LFxuICBkZWxldGVQcm9qZWN0LFxuICBkZWxldGVUYXNrLFxuICBzYXZlTmFtZSxcbiAgY3JlYXRlVGFzayxcbiAgZWRpdFRhc2ssXG4gIHNhdmVDaGVja0JveCxcbiAgdG9kYXlBbmRVcGNvbWluZ1Rhc2ssXG4gIGZpbmRQcm9qZWN0TmFtZSxcbn0gZnJvbSBcIi4vbG9naWNcIjtcbmltcG9ydCB7IHNhdmVEYXRhIH0gZnJvbSBcIi4vbG9jYWwtc3RvcmFnZVwiO1xuaW1wb3J0IHsgcHVic3ViIH0gZnJvbSBcIi4vcHVic3ViLmpzXCI7XG5cbnB1YnN1Yi5zdWJzY3JpYmUoXCJhZGRQcm9qXCIsIGFkZFByb2plY3QpO1xucHVic3ViLnN1YnNjcmliZShcImRsZXRlUHJvalwiLCBkZWxldGVQcm9qZWN0KTtcbnB1YnN1Yi5zdWJzY3JpYmUoXCJzYXZlTmFtZVwiLCBzYXZlTmFtZSk7XG5wdWJzdWIuc3Vic2NyaWJlKFwic2F2ZURhdGFcIiwgc2F2ZURhdGEpO1xucHVic3ViLnN1YnNjcmliZShcImNyZWF0ZVRhc2tcIiwgY3JlYXRlVGFzayk7XG5wdWJzdWIuc3Vic2NyaWJlKFwiZWRpdFRhc2tcIiwgZWRpdFRhc2spO1xucHVic3ViLnN1YnNjcmliZShcInNhdmVCb3hcIiwgc2F2ZUNoZWNrQm94KTtcblxuY29uc3QgRE9NRXZlbnRzID0gKCkgPT4ge1xuICBjb25zdCBkID0gZG9jdW1lbnQ7XG4gIGxldCBjdXJyZW50UHJvajtcbiAgbGV0IHRhc2s7XG4gIGxldCBuZXdJbmZvO1xuICBsZXQgYnRuO1xuICBkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiLmFkZC1wcm9qZWN0LWJ0blwiKSB8fCBlLnRhcmdldC5tYXRjaGVzKFwiI2FkZC1pY29uXCIpKSB7XG4gICAgICBjb25zdCBnZXRQcm9qVGl0bGUgPSBnZXRQcm9qTmFtZSgpO1xuICAgICAgcHVic3ViLnB1Ymxpc2goXCJhZGRQcm9qXCIsIGdldFByb2pUaXRsZS52YWx1ZSk7XG4gICAgICBVSS5tYWtlUHJvamVjdEJ0bihnZXRQcm9qVGl0bGUudmFsdWUpO1xuICAgICAgaWYgKGJ0biAhPSBudWxsKSB7XG4gICAgICAgIGJ0bi5zdHlsZS5jb2xvciA9IFwiIzkyQzFCMlwiO1xuICAgICAgICBidG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgfVxuICAgICAgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7Z2V0UHJvalRpdGxlLnZhbHVlfS1wcm9qZWN0LWJ0bmApO1xuICAgICAgYnRuLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgYnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzkyQzFCMlwiO1xuICAgICAgVUkuaGVhZGVyRGlzcGxheShnZXRQcm9qVGl0bGUudmFsdWUpO1xuICAgICAgVUkuZW1wdHlUb0RvTGlzdCgpO1xuICAgICAgVUkubWFrZUFkZFRhc2tCdG4oKTtcbiAgICAgIGdldFByb2pUaXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiLmRlbGV0ZS1wcm9qZWN0LWJ0blwiKSkge1xuICAgICAgcHVic3ViLnB1Ymxpc2goXCJkbGV0ZVByb2pcIik7XG4gICAgICBwdWJzdWIucHVibGlzaChcInNhdmVEYXRhXCIpO1xuICAgICAgVUkucmVtb3ZlUHJvamVjdEJ0bigpO1xuICAgICAgVUkuZW1wdHlUb0RvUGFnZSgpO1xuICAgIH1cbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhgLnByb2plY3QtYnRuYCkpIHtcbiAgICAgIGlmIChidG4gIT0gbnVsbCkge1xuICAgICAgICBidG4uc3R5bGUuY29sb3IgPSBcIiM5MkMxQjJcIjtcbiAgICAgICAgYnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgIH1cbiAgICAgIGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2UudGFyZ2V0LnRleHRDb250ZW50fS1wcm9qZWN0LWJ0bmApO1xuICAgICAgYnRuLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgYnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzkyQzFCMlwiO1xuICAgICAgVUkuaGVhZGVyRGlzcGxheShlLnRhcmdldC50ZXh0Q29udGVudCk7XG4gICAgICBVSS5lbXB0eVRvRG9MaXN0KCk7XG4gICAgICBVSS5yZW5kZXJTYXZlZFRhc2soKTtcbiAgICAgIFVJLm1ha2VBZGRUYXNrQnRuKCk7XG4gICAgfVxuICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiLmFkZC10YXNrLWJ0blwiKSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgVUkudGFza0Zvcm0oZ2V0UHJvalRpdGxlKCkpO1xuICAgIH1cbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIi5wcm9qZWN0LXRpdGxlXCIpKSB7XG4gICAgICBVSS5jaGFuZ2VQcm9qTmFtZShlLnRhcmdldC50ZXh0Q29udGVudCk7XG4gICAgICBjdXJyZW50UHJvaiA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICAgIH1cbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIiNzYXZlLWJ0blwiKSkge1xuICAgICAgcHVic3ViLnB1Ymxpc2goXCJzYXZlTmFtZVwiLCBjdXJyZW50UHJvaik7XG4gICAgICBwdWJzdWIucHVibGlzaChcInNhdmVEYXRhXCIpO1xuICAgICAgVUkubmV3VHRsZUJ0bihjdXJyZW50UHJvaik7XG4gICAgICBVSS5oZWFkZXJEaXNwbGF5KGdldE5ld1R0bGUoKS52YWx1ZSk7XG4gICAgfVxuICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiI2NhbmNlbC1idG5cIikpIHtcbiAgICAgIFVJLmhlYWRlckRpc3BsYXkoY3VycmVudFByb2opO1xuICAgIH1cbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIiNzdWJtaXQtdGFzay1idG5cIikpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIFVJLnJlbW92ZUJsdXJBdHRyaWJ1dGUoKTtcbiAgICAgIGxldCBwcm9qVGl0bGUgPSBnZXRQcm9qVGl0bGUoKTtcbiAgICAgIG5ld0luZm8gPSBnZXRUYXNrSW5mbygpO1xuICAgICAgcHVic3ViLnB1Ymxpc2goXG4gICAgICAgIFwiY3JlYXRlVGFza1wiLFxuICAgICAgICBwcm9qVGl0bGUsXG4gICAgICAgIG5ld0luZm8udGFzayxcbiAgICAgICAgbmV3SW5mby5kZXNjcmlwdGlvbixcbiAgICAgICAgbmV3SW5mby5kYXRlLFxuICAgICAgICBuZXdJbmZvLnByaW9yaXR5TGlzdCxcbiAgICAgICk7XG4gICAgICBVSS50YXNrRGlzcGxheShcbiAgICAgICAgbmV3SW5mby50YXNrLFxuICAgICAgICBuZXdJbmZvLmRlc2NyaXB0aW9uLFxuICAgICAgICBuZXdJbmZvLmRhdGUsXG4gICAgICAgIG5ld0luZm8ucHJpb3JpdHlMaXN0LFxuICAgICAgKTtcbiAgICAgIFVJLmhlYWRlckRpc3BsYXkocHJvalRpdGxlKTtcbiAgICAgIFVJLnVwZGF0ZVVJVGFza0J0bigpO1xuICAgICAgcHVic3ViLnB1Ymxpc2goXCJzYXZlRGF0YVwiLCBzYXZlRGF0YSk7XG4gICAgICBVSS5yZW1vdmVUYXNrRm9ybSgpO1xuICAgIH1cbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIiNjYW5jZWwtdGFzay1idG5cIikpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIFVJLnJlbW92ZUJsdXJBdHRyaWJ1dGUoKTtcbiAgICAgIFVJLnJlbW92ZVRhc2tGb3JtKCk7XG4gICAgICBVSS5oZWFkZXJEaXNwbGF5KGdldFByb2pUaXRsZSgpKTtcbiAgICB9XG4gICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCIjZGVsZXRlLXRhc2tcIikgfHwgZS50YXJnZXQubWF0Y2hlcyhcIiNkZWxldGUtaWNvblwiKSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGFzayA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtbmFtZVwiKTtcbiAgICAgIGxldCBuYW1lT2ZQcm9qZWN0ID0gZmluZFByb2plY3ROYW1lKHRhc2spO1xuICAgICAgVUkucmVtb3ZlRGF0YU5hbWVBdHRyaWJ1dGUodGFzaywgbmFtZU9mUHJvamVjdClcbiAgICAgIGRlbGV0ZVRhc2sodGFzaywgbmFtZU9mUHJvamVjdCk7XG4gICAgfVxuICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiI2VkaXQtdGFza1wiKSB8fCBlLnRhcmdldC5tYXRjaGVzKFwiI2VkaXQtaWNvblwiKSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgVUkudGFza0Zvcm0oKTtcbiAgICAgIHRhc2sgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW5hbWVcIik7XG4gICAgICBsZXQgbmFtZU9mUHJvamVjdCA9IGZpbmRQcm9qZWN0TmFtZSh0YXNrKTtcbiAgICAgIFVJLmN1cnJlbnRUYXNrSW5mbyh0YXNrLCBuYW1lT2ZQcm9qZWN0KTtcbiAgICAgIFVJLmNyZWF0ZVNhdmVCdG4oKTtcbiAgICAgIFVJLnJlcGxhY2VCdG5zKHRhc2spO1xuICAgIH1cbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIiNzYXZlLXRhc2stYnRuXCIpKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBVSS5yZW1vdmVCbHVyQXR0cmlidXRlKCk7XG4gICAgICB0YXNrID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1uYW1lXCIpO1xuICAgICAgbGV0IG5hbWVPZlByb2plY3QgPSBmaW5kUHJvamVjdE5hbWUodGFzayk7XG4gICAgICBVSS5yZW1vdmVEYXRhTmFtZUF0dHJpYnV0ZSh0YXNrLCBuYW1lT2ZQcm9qZWN0KTtcbiAgICAgIHB1YnN1Yi5wdWJsaXNoKFwiZWRpdFRhc2tcIiwgdGFzaywgbmFtZU9mUHJvamVjdCk7XG4gICAgICBwdWJzdWIucHVibGlzaChcInNhdmVEYXRhXCIpO1xuICAgICAgbmV3SW5mbyA9IGdldFRhc2tJbmZvKCk7XG4gICAgICBVSS50YXNrRGlzcGxheShcbiAgICAgICAgbmV3SW5mby50YXNrLFxuICAgICAgICBuZXdJbmZvLmRlc2NyaXB0aW9uLFxuICAgICAgICBuZXdJbmZvLmRhdGUsXG4gICAgICAgIG5ld0luZm8ucHJpb3JpdHlMaXN0LFxuICAgICAgKTtcbiAgICAgIFVJLnJlbW92ZVRhc2tGb3JtKCk7XG4gICAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXItdGFzay1idG5cIik7XG4gICAgICBpZiAoKGFkZFRhc2tCdG4gIT09IG51bGwpKSB7XG4gICAgICAgIFVJLnVwZGF0ZVVJVGFza0J0bigpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIi50b2RheVwiKSB8fCBlLnRhcmdldC50ZXh0Q29udGVudCA9PSBcIlRvZGF5XCIpIHtcbiAgICAgIFVJLmVtcHR5VG9Eb1BhZ2UoKTtcbiAgICAgIFVJLmhlYWRlckRpc3BsYXkoXCJUT0RBWVwiKTtcbiAgICAgIHRvZGF5QW5kVXBjb21pbmdUYXNrKCkuZGlzcGxheVRvZGF5VGFza3MoKTtcbiAgICB9XG4gICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCIudXBjb21pbmdcIikgfHwgZS50YXJnZXQudGV4dENvbnRlbnQgPT0gXCJVcGNvbWluZ1wiKSB7XG4gICAgICBVSS5lbXB0eVRvRG9QYWdlKCk7XG4gICAgICBVSS5oZWFkZXJEaXNwbGF5KFwiVVBDT01JTkdcIik7XG4gICAgICB0b2RheUFuZFVwY29taW5nVGFzaygpLmRpc3BsYXlVcGNvbWluZ1Rhc2soKTtcbiAgICB9XG4gIH0pO1xuICBkLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIi5jaGVjay1ib3hcIikpIHtcbiAgICAgIGxldCB0YXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIikpO1xuICAgICAgcHVic3ViLnB1Ymxpc2goXG4gICAgICAgIFwic2F2ZUJveFwiLFxuICAgICAgICB0YXNrLFxuICAgICAgICBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSxcbiAgICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yLFxuICAgICAgKTtcbiAgICAgIHB1YnN1Yi5wdWJsaXNoKFwic2F2ZURhdGFcIik7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCB7IERPTUV2ZW50cyB9O1xuIiwiaW1wb3J0IHsgYWxsUHJvamVjdHMgfSBmcm9tIFwiLi9sb2dpY1wiO1xuXG5mdW5jdGlvbiBzYXZlRGF0YSgpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhbGxQcm9qZWN0RGF0YVwiLCBKU09OLnN0cmluZ2lmeShhbGxQcm9qZWN0cykpO1xuICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWxsUHJvamVjdERhdGFcIikpO1xufVxuXG5leHBvcnQgeyBzYXZlRGF0YSB9O1xuIiwiaW1wb3J0IHsgZ2V0VGFza0luZm8sIGdldE5ld1R0bGUsIGdldFByb2pUaXRsZSwgVUkgfSBmcm9tIFwiLi9ET00uanNcIjtcbmltcG9ydCB7IHNhdmVEYXRhIH0gZnJvbSBcIi4vbG9jYWwtc3RvcmFnZS5qc1wiO1xuXG5jb25zdCBhbGxQcm9qZWN0cyA9IFtdO1xuXG5jb25zdCBwcm9qZWN0TWFuYWdlbWVudCA9ICgpID0+IHtcbiAgY29uc3QgYWRkUHJvamVjdCA9ICh0aXRsZSkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBtYWtlUHJvamVjdCh0aXRsZSk7XG4gICAgYWxsUHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgfTtcblxuICBjb25zdCBlZGl0UHJvamVjdE5hbWUgPSAoaSwgbmFtZSkgPT4ge1xuICAgIGFsbFByb2plY3RzW2ldLnByb2plY3REZXRhaWxzLnByb2plY3ROYW1lID0gbmFtZTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVQcm9qZWN0ID0gKGkpID0+IHtcbiAgICBhbGxQcm9qZWN0cy5zcGxpY2UoaSwgMSk7XG4gIH07XG5cbiAgY29uc3Qgdmlld1Byb2plY3RzID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcbiAgfTtcblxuICBjb25zdCBtYWtlUHJvamVjdCA9IChwcm9qZWN0VGl0bGUpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0RGV0YWlscyA9IHtcbiAgICAgIHByb2plY3ROYW1lOiBwcm9qZWN0VGl0bGUsXG4gICAgICBhbGxUYXNrczogW10sXG4gICAgfTtcblxuICAgIGNvbnN0IHRhc2tNYW5hZ2VtZW50ID0gbmV3IHRhc2tPcGVyYXRpb25zKHByb2plY3REZXRhaWxzKTtcbiAgICBjb25zdCBhZGRUYXNrID0gdGFza01hbmFnZW1lbnQuYWRkVGFzaztcbiAgICBjb25zdCBkZWxldGVUYXNrID0gdGFza01hbmFnZW1lbnQuZGVsZXRlVGFzaztcbiAgICBjb25zdCBlZGl0VGFzayA9IHRhc2tNYW5hZ2VtZW50LmVkaXRUYXNrcztcblxuICAgIHJldHVybiB7XG4gICAgICBwcm9qZWN0RGV0YWlscyxcbiAgICAgIGFkZFRhc2ssXG4gICAgICBkZWxldGVUYXNrLFxuICAgICAgZWRpdFRhc2ssXG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGFkZFByb2plY3QsXG4gICAgZGVsZXRlUHJvamVjdCxcbiAgICB2aWV3UHJvamVjdHMsXG4gICAgZWRpdFByb2plY3ROYW1lLFxuICB9O1xufTtcblxuY29uc3QgcHJvamVjdCA9IHByb2plY3RNYW5hZ2VtZW50KCk7XG5cbmNsYXNzIHRhc2tPcGVyYXRpb25zIHtcbiAgY29uc3RydWN0b3IocHJvamVjdCkge1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gIH1cblxuICBhZGRUYXNrID0gKG5hbWUsIGRldGFpbHMsIGRhdGUsIHByaW9yaXR5TGlzdCwgY2hlY2spID0+IHtcbiAgICBjb25zdCB0YXNrRGV0YWlscyA9IG5ldyB0YXNrKG5hbWUsIGRldGFpbHMsIGRhdGUsIHByaW9yaXR5TGlzdCwgY2hlY2spO1xuXG4gICAgdGhpcy5wcm9qZWN0LmFsbFRhc2tzLnB1c2godGFza0RldGFpbHMpO1xuICB9O1xuXG4gIGRlbGV0ZVRhc2soaSkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3REZXRhaWxzLmFsbFRhc2tzLnNwbGljZShpLCAxKTtcbiAgfVxufVxuXG5jbGFzcyB0YXNrIHtcbiAgY29uc3RydWN0b3IodGFza05hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eUxpc3QsIGNoZWNrQm94KSB7XG4gICAgdGhpcy50YXNrTmFtZSA9IHRhc2tOYW1lO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHlMaXN0ID0gcHJpb3JpdHlMaXN0O1xuICAgIHRoaXMuY2hlY2tCb3ggPSBjaGVja0JveDtcbiAgfVxuXG4gIHNldCgpIHtcbiAgICBbdGhpcy50YXNrTmFtZSwgdGhpcy5kZXNjcmlwdGlvbiwgdGhpcy5kdWVEYXRlLCB0aGlzLnByaW9yaXR5TGlzdF0gPVxuICAgICAgdmFsdWUuc3BsaXQoXCIgXCIpO1xuICB9XG59XG5cbmNvbnN0IHN0b3JlQ2hlY2tCb3ggPSAobmFtZU9mVGFzaykgPT4ge1xuICBjb25zdCBuYW1lT2ZQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRpdGxlXCIpLnRleHRDb250ZW50O1xuICBjb25zdCBwcm9qZWN0SW5kZXggPSBhbGxQcm9qZWN0cy5maW5kSW5kZXgoXG4gICAgKHApID0+IHAucHJvamVjdERldGFpbHMucHJvamVjdE5hbWUgPT09IG5hbWVPZlByb2plY3QsXG4gICk7XG4gIGNvbnN0IHRhc2tJbmRleCA9IGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0ucHJvamVjdERldGFpbHMuYWxsVGFza3MuZmluZEluZGV4KFxuICAgIChwKSA9PiBwLnRhc2tOYW1lID09PSBuYW1lT2ZUYXNrLFxuICApO1xuXG4gIGZ1bmN0aW9uIGNoZWNrKCkge1xuICAgIGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0ucHJvamVjdERldGFpbHMuYWxsVGFza3NbdGFza0luZGV4XS5jaGVja0JveCA9XG4gICAgICBcImNoZWNrZWRcIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVuY2hlY2tlZCgpIHtcbiAgICBhbGxQcm9qZWN0c1twcm9qZWN0SW5kZXhdLnByb2plY3REZXRhaWxzLmFsbFRhc2tzW3Rhc2tJbmRleF0uY2hlY2tCb3ggPVxuICAgICAgXCJ1bmNoZWNrZWRcIjtcbiAgfVxuXG4gIHJldHVybiB7IGNoZWNrLCB1bmNoZWNrZWQgfTtcbn07XG5cbmZ1bmN0aW9uIHNhdmVDaGVja0JveChib3gsIG5hbWVPZlRhc2spIHtcbiAgY29uc3QgY2hlY2tCb3ggPSBzdG9yZUNoZWNrQm94KG5hbWVPZlRhc2spO1xuICBpZiAoYm94LmNoZWNrZWQgPT0gdHJ1ZSkge1xuICAgIGNoZWNrQm94LmNoZWNrKCk7XG4gIH0gZWxzZSB7XG4gICAgY2hlY2tCb3gudW5jaGVja2VkKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdChuYW1lT2ZQcm9qZWN0KSB7XG4gIHByb2plY3QuYWRkUHJvamVjdChuYW1lT2ZQcm9qZWN0KTtcbiAgc2F2ZURhdGEoKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdCgpIHtcbiAgY29uc3QgaW5kZXggPSBmaW5kSW5kZXgucHJvamVjdEluZGV4KCk7XG4gIHByb2plY3QuZGVsZXRlUHJvamVjdChpbmRleCk7XG59XG5cbmNvbnN0IGZpbmRJbmRleCA9ICgoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RJbmRleCA9IChuYW1lID0gZ2V0UHJvalRpdGxlKCkpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IGFsbFByb2plY3RzLmZpbmRJbmRleChcbiAgICAgIChwKSA9PiBwLnByb2plY3REZXRhaWxzLnByb2plY3ROYW1lID09PSBuYW1lLFxuICAgICk7XG4gICAgcmV0dXJuIGluZGV4O1xuICB9O1xuXG4gIGNvbnN0IHRhc2tJbmRleCA9IChuYW1lVGFzaywgcHJvak5hbWUpID0+XG4gICAgYWxsUHJvamVjdHNbcHJvamVjdEluZGV4KHByb2pOYW1lKV0ucHJvamVjdERldGFpbHMuYWxsVGFza3MuZmluZEluZGV4KFxuICAgICAgKHApID0+IHAudGFza05hbWUgPT09IG5hbWVUYXNrLFxuICAgICk7XG5cbiAgcmV0dXJuIHsgcHJvamVjdEluZGV4LCB0YXNrSW5kZXggfTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2sobmFtZVRhc2ssIHByb2plY3ROYW1lKSB7XG4gIGNvbnN0IHByb2pJbmRleCA9IGZpbmRJbmRleC5wcm9qZWN0SW5kZXgocHJvamVjdE5hbWUpO1xuICBjb25zdCB0YXNrSW5kZXggPSBmaW5kSW5kZXgudGFza0luZGV4KG5hbWVUYXNrLCBwcm9qZWN0TmFtZSk7XG4gIGFsbFByb2plY3RzW3Byb2pJbmRleF0uZGVsZXRlVGFzayh0YXNrSW5kZXgpO1xuICBzYXZlRGF0YSgpO1xufVxuXG5mdW5jdGlvbiBzYXZlTmFtZShjdXJyZW50UHJvaikge1xuICBjb25zdCBuZXdUaXRsZSA9IGdldE5ld1R0bGUoKTtcbiAgY29uc3QgaW5kZXggPSBhbGxQcm9qZWN0cy5maW5kSW5kZXgoXG4gICAgKHApID0+IHAucHJvamVjdERldGFpbHMucHJvamVjdE5hbWUgPT09IGN1cnJlbnRQcm9qLFxuICApO1xuICBwcm9qZWN0LmVkaXRQcm9qZWN0TmFtZShpbmRleCwgbmV3VGl0bGUudmFsdWUpO1xuICBwcm9qZWN0LnZpZXdQcm9qZWN0cygpO1xufVxuXG5mdW5jdGlvbiBlZGl0VGFzayhuYW1lVGFzaywgbmFtZU9mUHJvamVjdCkge1xuICBjb25zdCBwcm9qZWN0SW5kZXggPSBmaW5kSW5kZXgucHJvamVjdEluZGV4KG5hbWVPZlByb2plY3QpO1xuICBjb25zdCB0YXNrSW5kZXggPSBmaW5kSW5kZXgudGFza0luZGV4KG5hbWVUYXNrLCBuYW1lT2ZQcm9qZWN0KTtcbiAgY29uc3QgbmV3SW5mbyA9IGdldFRhc2tJbmZvKCk7XG4gIGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0ucHJvamVjdERldGFpbHMuYWxsVGFza3NbdGFza0luZGV4XS50YXNrTmFtZSA9XG4gICAgbmV3SW5mby50YXNrO1xuICBhbGxQcm9qZWN0c1twcm9qZWN0SW5kZXhdLnByb2plY3REZXRhaWxzLmFsbFRhc2tzW3Rhc2tJbmRleF0uZGVzY3JpcHRpb24gPVxuICAgIG5ld0luZm8uZGVzY3JpcHRpb247XG4gIGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0ucHJvamVjdERldGFpbHMuYWxsVGFza3NbdGFza0luZGV4XS5kdWVEYXRlID1cbiAgICBuZXdJbmZvLmRhdGU7XG4gIGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0ucHJvamVjdERldGFpbHMuYWxsVGFza3NbdGFza0luZGV4XS5wcmlvcml0eUxpc3QgPVxuICAgIG5ld0luZm8ucHJpb3JpdHlMaXN0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKG5hbWVQcm9qLCB0c2ssIGRlc2NycCwgZHRlLCBwckxpc3QpIHtcbiAgY29uc3QgaW5kZXggPSBhbGxQcm9qZWN0cy5maW5kSW5kZXgoXG4gICAgKHApID0+IHAucHJvamVjdERldGFpbHMucHJvamVjdE5hbWUgPT09IG5hbWVQcm9qLFxuICApO1xuICBhbGxQcm9qZWN0c1tpbmRleF0uYWRkVGFzayh0c2ssIGRlc2NycCwgZHRlLCBwckxpc3QpO1xufVxuXG5mdW5jdGlvbiBkaXNhYmxlUHJldmlvdXNEYXRlcyhkYXRlKSB7XG4gIGxldCBkdFRvZGF5ID0gbmV3IERhdGUoKTtcblxuICBsZXQgbW9udGggPSBkdFRvZGF5LmdldE1vbnRoKCkgKyAxO1xuICBsZXQgZGF5ID0gZHRUb2RheS5nZXREYXRlKCk7XG4gIGxldCB5ZWFyID0gZHRUb2RheS5nZXRGdWxsWWVhcigpO1xuICBpZiAobW9udGggPCAxMCkgbW9udGggPSBcIjBcIiArIG1vbnRoLnRvU3RyaW5nKCk7XG4gIGlmIChkYXkgPCAxMCkgZGF5ID0gXCIwXCIgKyBkYXkudG9TdHJpbmcoKTtcblxuICBsZXQgbWF4RGF0ZSA9IHllYXIgKyBcIi1cIiArIG1vbnRoICsgXCItXCIgKyBkYXk7XG4gIGRhdGUuc2V0QXR0cmlidXRlKFwibWluXCIsIG1heERhdGUpO1xufVxuXG5jb25zdCB0b2RheUFuZFVwY29taW5nVGFzayA9ICgpID0+IHtcbiAgY29uc3QgdG9kYXlEYXRlID0gKCkgPT4ge1xuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IGRkID0gU3RyaW5nKHRvZGF5LmdldERhdGUoKSkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgIGxldCBtbSA9IFN0cmluZyh0b2RheS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgIGxldCB5eXl5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcblxuICAgIHJldHVybiAodG9kYXkgPSB5eXl5ICsgXCItXCIgKyBtbSArIFwiLVwiICsgZGQpO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlUb2RheVRhc2tzID0gKCkgPT5cbiAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKChwKSA9PlxuICAgICAgcC5wcm9qZWN0RGV0YWlscy5hbGxUYXNrcy5mb3JFYWNoKCh0KSA9PiB7XG4gICAgICAgIGlmICh0LmR1ZURhdGUgPT0gdG9kYXlEYXRlKCkpIHtcbiAgICAgICAgICBVSS50YXNrRGlzcGxheShcbiAgICAgICAgICAgIHQudGFza05hbWUsXG4gICAgICAgICAgICB0LmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdC5kdWVEYXRlLFxuICAgICAgICAgICAgdC5wcmlvcml0eUxpc3QsXG4gICAgICAgICAgICB0LmNoZWNrQm94LFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICk7XG5cbiAgY29uc3QgZGlzcGxheVVwY29taW5nVGFzayA9ICgpID0+XG4gICAgYWxsUHJvamVjdHMuZm9yRWFjaCgocCkgPT5cbiAgICAgIHAucHJvamVjdERldGFpbHMuYWxsVGFza3MuZm9yRWFjaCgodCkgPT4ge1xuICAgICAgICBpZiAodC5kdWVEYXRlID4gdG9kYXlEYXRlKCkpIHtcbiAgICAgICAgICBVSS50YXNrRGlzcGxheShcbiAgICAgICAgICAgIHQudGFza05hbWUsXG4gICAgICAgICAgICB0LmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdC5kdWVEYXRlLFxuICAgICAgICAgICAgdC5wcmlvcml0eUxpc3QsXG4gICAgICAgICAgICB0LmNoZWNrQm94LFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICk7XG5cbiAgcmV0dXJuIHsgZGlzcGxheVRvZGF5VGFza3MsIGRpc3BsYXlVcGNvbWluZ1Rhc2sgfTtcbn07XG5cbmZ1bmN0aW9uIGZpbmRQcm9qZWN0TmFtZShuYW1lT2ZUYXNrKSB7XG4gIGxldCBuYW1lO1xuICBhbGxQcm9qZWN0cy5mb3JFYWNoKHAgPT4ge1xuICAgIHAucHJvamVjdERldGFpbHMuYWxsVGFza3MuZm9yRWFjaCh0ID0+IHtcbiAgICAgIGlmICh0LnRhc2tOYW1lID09IG5hbWVPZlRhc2spIHtcbiAgICAgICAgIG5hbWUgPSBwLnByb2plY3REZXRhaWxzLnByb2plY3ROYW1lO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCB7XG4gIGFsbFByb2plY3RzLFxuICBkaXNhYmxlUHJldmlvdXNEYXRlcyxcbiAgc3RvcmVDaGVja0JveCxcbiAgc2F2ZUNoZWNrQm94LFxuICBjcmVhdGVUYXNrLFxuICBwcm9qZWN0LFxuICBhZGRQcm9qZWN0LFxuICBkZWxldGVUYXNrLFxuICBlZGl0VGFzayxcbiAgc2F2ZU5hbWUsXG4gIHRvZGF5QW5kVXBjb21pbmdUYXNrLFxuICBkZWxldGVQcm9qZWN0LFxuICBmaW5kSW5kZXgsXG4gIGZpbmRQcm9qZWN0TmFtZSxcbn07XG4iLCJjbGFzcyBQdWJzdWIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRyYWNrZXIgPSB7XG4gICAgICAvLyBrZXk6IGV2ZW50bmFtZSwgdmFsdWU6IFsgZnVuY3MgXVxuICAgIH07XG4gIH1cblxuICBzdWJzY3JpYmUoZXZlbnROYW1lLCBmdW5jKSB7XG4gICAgaWYgKHRoaXMudHJhY2tlcltldmVudE5hbWVdKSB7XG4gICAgICB0aGlzLnRyYWNrZXJbZXZlbnROYW1lXS5wdXNoKGZ1bmMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRyYWNrZXJbZXZlbnROYW1lXSA9IFtmdW5jXTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHVuc3Vic2NyaWJlOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZ1bmNzID0gdGhpcy50cmFja2VyW2V2ZW50TmFtZV07XG4gICAgICAgIGNvbnN0IGlkeCA9IGZ1bmNzLmluZGV4T2YoZnVuYyk7XG4gICAgICAgIGlmIChpZHggPiAtMSkge1xuICAgICAgICAgIGZ1bmNzLnNwbGljZShpZHgsIDEpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBwdWJsaXNoKGV2ZW50TmFtZSwgLi4uYXJncykge1xuICAgIGNvbnN0IGZ1bmNzID0gdGhpcy50cmFja2VyW2V2ZW50TmFtZV07XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZnVuY3MpKSB7XG4gICAgICBmdW5jcy5mb3JFYWNoKChmdW5jKSA9PiB7XG4gICAgICAgIGZ1bmMuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgcHVic3ViID0gbmV3IFB1YnN1YigpO1xuXG5leHBvcnQgeyBwdWJzdWIgfTtcbiIsImltcG9ydCB7IGFsbFByb2plY3RzLCBhZGRQcm9qZWN0IH0gZnJvbSBcIi4vbG9naWNcIjtcbmltcG9ydCB7IFVJIH0gZnJvbSBcIi4vRE9NXCI7XG5pbXBvcnQgeyBzYXZlRGF0YSB9IGZyb20gXCIuL2xvY2FsLXN0b3JhZ2VcIjtcblxuZnVuY3Rpb24gcmVuZGVyVHRsZUJ0bihwcm9qZWN0RGF0YSkge1xuICBwcm9qZWN0RGF0YS5mb3JFYWNoKChwKSA9PiB7XG4gICAgYWRkUHJvamVjdChwLnByb2plY3REZXRhaWxzLnByb2plY3ROYW1lKTtcbiAgICBVSS5tYWtlUHJvamVjdEJ0bihwLnByb2plY3REZXRhaWxzLnByb2plY3ROYW1lKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRhc2tEaXNwbGF5KHByb2plY3REYXRhKSB7XG4gIHByb2plY3REYXRhLmZvckVhY2goKHApID0+IHtcbiAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBhbGxQcm9qZWN0cy5maW5kSW5kZXgoXG4gICAgICAocHJvamVjdCkgPT5cbiAgICAgICAgcHJvamVjdC5wcm9qZWN0RGV0YWlscy5wcm9qZWN0TmFtZSA9PT0gcC5wcm9qZWN0RGV0YWlscy5wcm9qZWN0TmFtZSxcbiAgICApO1xuICAgIGlmIChwLnByb2plY3REZXRhaWxzLmFsbFRhc2tzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgcC5wcm9qZWN0RGV0YWlscy5hbGxUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0uYWRkVGFzayhcbiAgICAgICAgICB0YXNrLnRhc2tOYW1lLFxuICAgICAgICAgIHRhc2suZGVzY3JpcHRpb24sXG4gICAgICAgICAgdGFzay5kdWVEYXRlLFxuICAgICAgICAgIHRhc2sucHJpb3JpdHlMaXN0LFxuICAgICAgICAgIHRhc2suY2hlY2tCb3gsXG4gICAgICAgICk7XG4gICAgICAgIHNhdmVEYXRhKCk7XG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW5kZXJTYXZlZERhdGEoKSB7XG4gIGNvbnN0IGFsbFByb2plY3REYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFsbFByb2plY3REYXRhXCIpKTtcbiAgaWYgKGxvY2FsU3RvcmFnZS5sZW5ndGggIT09IDApIHtcbiAgICBpZiAoYWxsUHJvamVjdHMubGVuZ3RoID09IDApIHtcbiAgICAgIHJlbmRlclR0bGVCdG4oYWxsUHJvamVjdERhdGEpO1xuICAgICAgcmVuZGVyVGFza0Rpc3BsYXkoYWxsUHJvamVjdERhdGEpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyByZW5kZXJUdGxlQnRuLCByZW5kZXJUYXNrRGlzcGxheSwgcmVuZGVyU2F2ZWREYXRhIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgVUkgfSBmcm9tIFwiLi9ET01cIjtcbmltcG9ydCB7IHRvZGF5QW5kVXBjb21pbmdUYXNrLCBmaW5kUHJvamVjdE5hbWUgfSBmcm9tIFwiLi9sb2dpY1wiO1xuaW1wb3J0IHsgRE9NRXZlbnRzIH0gZnJvbSBcIi4vRE9NX2V2ZW50cy5qc1wiO1xuaW1wb3J0IHsgcmVuZGVyU2F2ZWREYXRhIH0gZnJvbSBcIi4vcmVuZGVyU3RvcmFnZVwiO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICByZW5kZXJTYXZlZERhdGEoKTtcbiAgVUkuZW1wdHlUb0RvUGFnZSgpO1xuICBVSS5oZWFkZXJEaXNwbGF5KFwiVE9EQVlcIik7XG4gIHRvZGF5QW5kVXBjb21pbmdUYXNrKCkuZGlzcGxheVRvZGF5VGFza3MoKTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIERPTUV2ZW50cygpO1xufSk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==