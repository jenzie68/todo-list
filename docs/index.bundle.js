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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE9BQU8sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sT0FBTyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxPQUFPLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyw0QkFBNEIsY0FBYyxlQUFlLEdBQUcsZUFBZSwwQkFBMEIsd0JBQXdCLDhCQUE4QixxQkFBcUIsd0JBQXdCLG9CQUFvQix5QkFBeUIscUJBQXFCLEdBQUcscUJBQXFCLHVCQUF1QixHQUFHLFdBQVcsd0JBQXdCLHdCQUF3QixHQUFHLFVBQVUsa0JBQWtCLHFDQUFxQyxrQ0FBa0Msa0JBQWtCLGlCQUFpQix1QkFBdUIsR0FBRywwQkFBMEIsa0JBQWtCLHFDQUFxQyxpQkFBaUIsR0FBRyxXQUFXLDhCQUE4QixxQkFBcUIsR0FBRyx3QkFBd0Isa0JBQWtCLHlCQUF5QixxQkFBcUIsR0FBRyxtQkFBbUIsa0JBQWtCLDJCQUEyQixHQUFHLGFBQWEsa0JBQWtCLDRCQUE0Qix3QkFBd0IsdUJBQXVCLEdBQUcsd0NBQXdDLGtCQUFrQixHQUFHLFVBQVUsa0JBQWtCLG1DQUFtQyxHQUFHLHFCQUFxQixrQkFBa0IsMkJBQTJCLEdBQUcsZUFBZSxrQkFBa0IsMkJBQTJCLEdBQUcsNEJBQTRCLGtCQUFrQixtQ0FBbUMsR0FBRyxtREFBbUQsa0JBQWtCLHFDQUFxQyxvQkFBb0Isd0JBQXdCLDJCQUEyQiwyQkFBMkIsNEJBQTRCLDBCQUEwQix3QkFBd0IsbUJBQW1CLHdCQUF3QixHQUFHLG1FQUFtRSx3QkFBd0IsaUJBQWlCLGlCQUFpQixHQUFHLGVBQWUscUJBQXFCLEdBQUcsb0NBQW9DLHVCQUF1Qix1QkFBdUIsR0FBRyw4QkFBOEIseUNBQXlDLHFCQUFxQixHQUFHLG1CQUFtQixvQkFBb0IsMkJBQTJCLDBCQUEwQiw0QkFBNEIscUJBQXFCLHdCQUF3QixtQkFBbUIsdUJBQXVCLEdBQUcsb0JBQW9CLDRCQUE0Qix1QkFBdUIsR0FBRyxvQkFBb0IsMEJBQTBCLEdBQUcsbUJBQW1CLGtCQUFrQiwyQkFBMkIsZUFBZSxlQUFlLGdCQUFnQix1QkFBdUIsc0JBQXNCLEdBQUcsNEJBQTRCLG1CQUFtQixzQkFBc0IsNEJBQTRCLDBCQUEwQix3QkFBd0IsbUJBQW1CLHdCQUF3QixHQUFHLG9CQUFvQixzQkFBc0IsR0FBRyxvQkFBb0Isc0JBQXNCLHVCQUF1QixHQUFHLDBCQUEwQixrQkFBa0Isc0NBQXNDLGlCQUFpQixHQUFHLHdCQUF3Qix3QkFBd0Isd0JBQXdCLDBCQUEwQixzQkFBc0IsR0FBRyxzQkFBc0IsOEJBQThCLHVCQUF1QixHQUFHLHlCQUF5QixxQkFBcUIsdUJBQXVCLGdCQUFnQixtQkFBbUIsc0JBQXNCLDJCQUEyQiw4QkFBOEIsd0JBQXdCLGlCQUFpQix1QkFBdUIsR0FBRywrQkFBK0Isd0JBQXdCLDBCQUEwQiw0QkFBNEIsbUJBQW1CLEdBQUcsb0JBQW9CLHNCQUFzQix5QkFBeUIsc0JBQXNCLHdCQUF3QixpQkFBaUIseUJBQXlCLEdBQUcsbUJBQW1CLGtCQUFrQixxQ0FBcUMsZUFBZSx5Q0FBeUMsb0JBQW9CLHdCQUF3Qiw4QkFBOEIsaUJBQWlCLHNCQUFzQix1QkFBdUIsdUJBQXVCLHNCQUFzQixHQUFHLHlCQUF5Qix1QkFBdUIsdUJBQXVCLEdBQUcseUJBQXlCLHVCQUF1Qix5QkFBeUIsR0FBRyx5QkFBeUIsOEJBQThCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLHdCQUF3QixtQkFBbUIsaUJBQWlCLHNCQUFzQiwyQkFBMkIsOEJBQThCLGlCQUFpQix1QkFBdUIseUJBQXlCLEdBQUcscUJBQXFCLHNCQUFzQixHQUFHLDZCQUE2Qix5Q0FBeUMsc0JBQXNCLGlCQUFpQix3QkFBd0IseUJBQXlCLEdBQUcsZUFBZSx5QkFBeUIsOEJBQThCLHVCQUF1QixHQUFHLGlCQUFpQiw4QkFBOEIsdUJBQXVCLEdBQUcseUNBQXlDLHdCQUF3Qix3QkFBd0IsR0FBRyxnQkFBZ0Isa0JBQWtCLHVCQUF1QiwyQkFBMkIsa0JBQWtCLG1DQUFtQyx1QkFBdUIsa0JBQWtCLGVBQWUsY0FBYyx1QkFBdUIsYUFBYSxzQkFBc0Isc0JBQXNCLGVBQWUsR0FBRyw4Q0FBOEMsOEJBQThCLGlCQUFpQixpQkFBaUIsdUJBQXVCLHlCQUF5QixHQUFHLGNBQWMsOEJBQThCLHlCQUF5QixHQUFHLDBEQUEwRCx5Q0FBeUMsd0JBQXdCLEdBQUcsbURBQW1ELDhCQUE4QixHQUFHLDRCQUE0Qiw4QkFBOEIsaUJBQWlCLHlCQUF5Qix1QkFBdUIsR0FBRyx1Q0FBdUMsOEJBQThCLGlCQUFpQix5QkFBeUIsdUJBQXVCLEdBQUcsc0JBQXNCLHNCQUFzQixtQkFBbUIsNEJBQTRCLHdCQUF3QiwwQkFBMEIseUJBQXlCLEdBQUcsNkJBQTZCLGVBQWUsR0FBRyxzQkFBc0IsNEJBQTRCLGVBQWUsaUJBQWlCLHdCQUF3QixrQkFBa0IsK0NBQStDLDRCQUE0Qix3QkFBd0IsR0FBRyxpREFBaUQsdUJBQXVCLHlCQUF5QixxQkFBcUIsY0FBYyxrQkFBa0Isa0JBQWtCLDBCQUEwQix3QkFBd0IsbUJBQW1CLDBCQUEwQixvQ0FBb0Msa0JBQWtCLDBCQUEwQix1QkFBdUIsR0FBRyx5REFBeUQsa0JBQWtCLGtCQUFrQixtQkFBbUIsd0JBQXdCLHlDQUF5Qyw0Q0FBNEMsR0FBRyxnQkFBZ0Isa0JBQWtCLDJCQUEyQixpQkFBaUIsY0FBYyxHQUFHLGVBQWUsa0JBQWtCLDJCQUEyQix5QkFBeUIsdUJBQXVCLDJCQUEyQixhQUFhLEdBQUcsd0JBQXdCLDRCQUE0Qix1QkFBdUIsR0FBRyw4QkFBOEIsMkJBQTJCLEdBQUcsbUJBQW1CLHdCQUF3QixzQkFBc0IsR0FBRyxXQUFXLHNCQUFzQiw4QkFBOEIsMkJBQTJCLHlCQUF5QiwwQkFBMEIsR0FBRyxjQUFjLG9CQUFvQixrQkFBa0IsY0FBYyxhQUFhLGVBQWUsZ0JBQWdCLHlDQUF5QyxpQkFBaUIsR0FBRyxxQkFBcUI7QUFDN3dXO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDNWMxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixLQUFLO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLDZDQUFTO0FBQ2xDLElBQUksK0NBQVc7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQW9COztBQUV4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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LFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNNO0FBQ21CO0FBQ0Y7QUFDTTs7QUFFbEQ7QUFDQSxFQUFFLCtEQUFlO0FBQ2pCLEVBQUUsb0NBQUU7QUFDSixFQUFFLG9DQUFFO0FBQ0osRUFBRSw0REFBb0I7QUFDdEIsQ0FBQzs7QUFFRDtBQUNBLEVBQUUseURBQVM7QUFDWCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTV9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvY2FsLXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvZ2ljLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3JlbmRlclN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4jaGVhZGxpbmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MmMxYjI7XG4gIGNvbG9yOiBhbGljZWJsdWU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiN0b2RvLWxpc3QtaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMnJlbTtcbn1cblxuI3RleHQge1xuICBwYWRkaW5nLXRvcDogMS40cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDIzcmVtO1xufVxuXG5ib2R5IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjVmciA0ZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC42ZnIgNGZyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRvZG8tbGlzdC1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuM2ZyIDRmcjtcbiAgd2lkdGg6IDEwMHZ3O1xufVxuXG4ubWFpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZGQ2ZDY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50aXRsZS1hZGQtcHJvamVjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG91dGxpbmUtc3R5bGU6IHNvbGlkO1xuICBjb2xvcjogdHVycXVvaXNlO1xufVxuXG4uYWxsLXByb2plY3RzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5uZXdQcm9qZWN0VGl0bGUsXG4uYnRuLWNvbnRhaW5lcnMge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5ib2R5IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xufVxuXG4udGFzay1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc2lkZS1iYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucHJvamVjdC1idG4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyO1xufVxuXG4udG9kYXksXG4udXBjb21pbmcsXG4uc2hvdy1wcm9qZWN0cy1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuN2ZyIDNmcjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBwYWRkaW5nLXRvcDogMC44cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC44cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLWNvbG9yOiAjOTJjMWIyO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBjb2xvcjogIzkyYzFiMjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLnRvZGF5OmhvdmVyLFxuLnVwY29taW5nOmhvdmVyLFxuLmFsbC1wcm9qZWN0cyA+IGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM2ZWI0OWY7XG4gIG9wYWNpdHk6IDUwJTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udXBjb21pbmcge1xuICBib3JkZXItdG9wOiBub25lO1xufVxuXG4udG9kYXkgPiBkaXYsXG4udXBjb21pbmcgPiBkaXYge1xuICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMnJlbTtcbn1cblxuLnNob3ctcHJvamVjdHMtY29udGFpbmVyIHtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS45ZnIgMWZyO1xuICBib3JkZXItdG9wOiBub25lO1xufVxuXG4jcHJvamVjdHMtYnRuIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBjb2xvcjogIzkyYzFiMjtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG4uZHJvcC1kb3duLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbiNwcm9qZWN0cy1pY29uIHtcbiAgcGFkZGluZy1yaWdodDogMS45cmVtO1xufVxuXG4uYWxsLXByb2plY3RzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjlweDtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA0MCU7XG4gIHBhZGRpbmctbGVmdDogOHJlbTtcbiAgcGFkZGluZy10b3A6IDJyZW07XG59XG5cbi5hbGwtcHJvamVjdHMgPiBidXR0b24ge1xuICBoZWlnaHQ6IDIuN3JlbTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItY29sb3I6ICM5MmMxYjI7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGNvbG9yOiAjOTJjMWIyO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4uc2lkZWJhci1pY29ucyB7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xufVxuXG4uaW5wdXQtcHJvamVjdCB7XG4gIHBhZGRpbmctdG9wOiA0cmVtO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5pbnB1dC1wcm9qZWN0ID4gZGl2IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMGZyIDEuNWZyO1xuICBoZWlnaHQ6IDNyZW07XG59XG5cbiNnZXQtcHJvamVjdC10aXRsZSB7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogIzkyYzFiMjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5hZGQtcHJvamVjdC1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTJjMWIyO1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbi5kZWxldGUtcHJvamVjdC1idG4ge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MmMxYjI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG4uZGVsZXRlLXByb2plY3QtYnRuOmhvdmVyIHtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjNmViNDlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICM2ZWI0OWY7XG59XG5cbi5wcm9qZWN0LXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIHBhZGRpbmctYm90dG9tOiAzcmVtO1xuICBmb250LXNpemU6IDMuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBsZXR0ZXItc3BhY2luZzogMTBweDtcbn1cblxuI2FkZC10YXNrLWJ0biB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDMuNWZyO1xuICB3aWR0aDogMjAlO1xuICBwYWRkaW5nOiAxLjJyZW0gMS4zcmVtIDEuMnJlbSAxLjNyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZlYjQ5ZjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXJhZGl1czogNHZ3O1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiAzcmVtO1xufVxuXG4jYWRkLXRhc2stYnRuID4gZGl2IHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XG59XG5cbiNhZGQtdGFzay1idG4gPiBpbWcge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4jYWRkLXRhc2stYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc4YzRhZDtcbn1cblxuLmNoYW5nZS1uYW1lLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAyLjVyZW07XG59XG5cbiNuZXctcHJvamVjdC10aXRsZSB7XG4gIGhlaWdodDogMy41cmVtO1xuICB3aWR0aDogMjRyZW07XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmViNDlmO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMC4ydnc7XG59XG5cbi5idG4tY29udGFpbmVycyB7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xufVxuXG4jc2F2ZS1idG4sXG4jY2FuY2VsLWJ0biB7XG4gIHBhZGRpbmc6IDAuNXJlbSAwLjdyZW0gMC41cmVtIDAuN3JlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogMC41dnc7XG59XG5cbiNzYXZlLWJ0biB7XG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGVkMGRlO1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbiNjYW5jZWwtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkyYzFiMjtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG4jc2F2ZS1idG46aG92ZXIsXG4jY2FuY2VsLWJ0bjpob3ZlciB7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG59XG5cbi50YXNrLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDNyZW07XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEzcmVtO1xuICB3aWR0aDogNDUlO1xuICBsZWZ0OiAzMCU7XG4gIG1hcmdpbi1sZWZ0OiAtNTBweDtcbiAgdG9wOiAzMCU7XG4gIG1hcmdpbi10b3A6IC01MHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgei1pbmRleDogMTtcbn1cblxuLnRhc2stZm9ybSA+IGlucHV0LFxuLnRhc2stZm9ybSA+IHNlbGVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZWI0OWY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiAycmVtO1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAuM3Z3O1xufVxuXG50ZXh0YXJlYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZWI0OWY7XG4gIGJvcmRlci1yYWRpdXM6IDAuM3Z3O1xufVxuXG4jY2FuY2VsLXRhc2stYnRuLFxuI3N1Ym1pdC10YXNrLWJ0bixcbiNzYXZlLXRhc2stYnRuIHtcbiAgcGFkZGluZzogMC41cmVtIDAuN3JlbSAwLjVyZW0gMC43cmVtO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4jc3VibWl0LXRhc2stYnRuOmhvdmVyLFxuI3NhdmUtdGFzay1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzVkN2JhO1xufVxuXG4jY2FuY2VsLXRhc2stYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZlYjQ5ZjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAwLjN2dztcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG4jc3VibWl0LXRhc2stYnRuLFxuI3NhdmUtdGFzay1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmViNDlmO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDAuM3Z3O1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbiNjYW5jZWwtdGFzay1idG4ge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgY29sb3I6ICM2ZWI0OWY7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICM2ZWI0OWY7XG4gIGJvcmRlci1yYWRpdXM6IDAuM3Z3O1xufVxuXG4udGFzay1jb250YWluZXItZGlzcGxheSB7XG4gIGhlaWdodDogOSU7XG59XG5cbi50YXNrLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tbGVmdDogMy44cmVtO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuN2ZyIDRmciAxZnIgMC43ZnI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGFzay1iYWNrZ3JvdW5kID4gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBmb250OiBpbmhlcml0O1xuICB3aWR0aDogMi4xNWVtO1xuICBib3JkZXItY29sb3I6ICM2ZWI0OWY7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGhlaWdodDogMi4xNWVtO1xuICBib3JkZXItcmFkaXVzOiAwLjE1ZW07XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4wNzVlbSk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogM3Z3O1xufVxuXG4udGFzay1iYWNrZ3JvdW5kID4gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMC42NWVtO1xuICBoZWlnaHQ6IDAuNjVlbTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgzKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZlYjQ5ZiAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiAxMjBtcyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XG59XG5cbi50b2RvLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGdhcDogMXJlbTtcbn1cblxuLnRhc2tCdG5zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbiAgZ2FwOiA0cHg7XG59XG5cbi50YXNrQnRucyA+IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbi50YXNrQnRucyA+IGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG59XG5cbiNkYXRlLWRpc3BsYXkge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cblxuI2JsdXIge1xuICBmaWx0ZXI6IGJsdXIoNXB4KTtcbiAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgLW1vei1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgLW8tZmlsdGVyOiBibHVyKDVweCk7XG4gIC1tcy1maWx0ZXI6IGJsdXIoNXB4KTtcbn1cblxuI292ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIHotaW5kZXg6IDk5OTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0VB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O0VBQ2YsYUFBYTtFQUNiLFNBQVM7RUFDVCxRQUFRO0VBQ1IsVUFBVTtFQUNWLFdBQVc7RUFDWCxvQ0FBb0M7RUFDcEMsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuI2hlYWRsaW5lIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTJjMWIyO1xcbiAgY29sb3I6IGFsaWNlYmx1ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMTBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbiN0b2RvLWxpc3QtaWNvbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxufVxcblxcbiN0ZXh0IHtcXG4gIHBhZGRpbmctdG9wOiAxLjRyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDIzcmVtO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuNWZyIDRmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC42ZnIgNGZyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRvZG8tbGlzdC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS4zZnIgNGZyO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4ubWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRkNmQ2O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnRpdGxlLWFkZC1wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBvdXRsaW5lLXN0eWxlOiBzb2xpZDtcXG4gIGNvbG9yOiB0dXJxdW9pc2U7XFxufVxcblxcbi5hbGwtcHJvamVjdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm5ld1Byb2plY3RUaXRsZSxcXG4uYnRuLWNvbnRhaW5lcnMge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zaWRlLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnByb2plY3QtYnRuLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyO1xcbn1cXG5cXG4udG9kYXksXFxuLnVwY29taW5nLFxcbi5zaG93LXByb2plY3RzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjdmciAzZnI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBwYWRkaW5nLXRvcDogMC44cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuOHJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1jb2xvcjogIzkyYzFiMjtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBjb2xvcjogIzkyYzFiMjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi50b2RheTpob3ZlcixcXG4udXBjb21pbmc6aG92ZXIsXFxuLmFsbC1wcm9qZWN0cyA+IGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjNmViNDlmO1xcbiAgb3BhY2l0eTogNTAlO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udXBjb21pbmcge1xcbiAgYm9yZGVyLXRvcDogbm9uZTtcXG59XFxuXFxuLnRvZGF5ID4gZGl2LFxcbi51cGNvbWluZyA+IGRpdiB7XFxuICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxufVxcblxcbi5zaG93LXByb2plY3RzLWNvbnRhaW5lciB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxLjlmciAxZnI7XFxuICBib3JkZXItdG9wOiBub25lO1xcbn1cXG5cXG4jcHJvamVjdHMtYnRuIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjNyZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgY29sb3I6ICM5MmMxYjI7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi5kcm9wLWRvd24tYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4jcHJvamVjdHMtaWNvbiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxLjlyZW07XFxufVxcblxcbi5hbGwtcHJvamVjdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuOXB4O1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogNDAlO1xcbiAgcGFkZGluZy1sZWZ0OiA4cmVtO1xcbiAgcGFkZGluZy10b3A6IDJyZW07XFxufVxcblxcbi5hbGwtcHJvamVjdHMgPiBidXR0b24ge1xcbiAgaGVpZ2h0OiAyLjdyZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLWNvbG9yOiAjOTJjMWIyO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGNvbG9yOiAjOTJjMWIyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLnNpZGViYXItaWNvbnMge1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5pbnB1dC1wcm9qZWN0IHtcXG4gIHBhZGRpbmctdG9wOiA0cmVtO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uaW5wdXQtcHJvamVjdCA+IGRpdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMGZyIDEuNWZyO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbn1cXG5cXG4jZ2V0LXByb2plY3QtdGl0bGUge1xcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6ICM5MmMxYjI7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTJjMWIyO1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3QtYnRuIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMi41cmVtO1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBsZXR0ZXItc3BhY2luZzogMC4ycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkyYzFiMjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdC1idG46aG92ZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogIzZlYjQ5ZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6ICM2ZWI0OWY7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlIHtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDNyZW07XFxuICBmb250LXNpemU6IDMuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBsZXR0ZXItc3BhY2luZzogMTBweDtcXG59XFxuXFxuI2FkZC10YXNrLWJ0biB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMy41ZnI7XFxuICB3aWR0aDogMjAlO1xcbiAgcGFkZGluZzogMS4ycmVtIDEuM3JlbSAxLjJyZW0gMS4zcmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZWI0OWY7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlci1yYWRpdXM6IDR2dztcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbi1sZWZ0OiAzcmVtO1xcbn1cXG5cXG4jYWRkLXRhc2stYnRuID4gZGl2IHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogbGVmdDtcXG59XFxuXFxuI2FkZC10YXNrLWJ0biA+IGltZyB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI2FkZC10YXNrLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzhjNGFkO1xcbn1cXG5cXG4uY2hhbmdlLW5hbWUtY29udGFpbmVyIHtcXG4gIHBhZGRpbmctdG9wOiAyLjVyZW07XFxufVxcblxcbiNuZXctcHJvamVjdC10aXRsZSB7XFxuICBoZWlnaHQ6IDMuNXJlbTtcXG4gIHdpZHRoOiAyNHJlbTtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZWI0OWY7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjJ2dztcXG59XFxuXFxuLmJ0bi1jb250YWluZXJzIHtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbn1cXG5cXG4jc2F2ZS1idG4sXFxuI2NhbmNlbC1idG4ge1xcbiAgcGFkZGluZzogMC41cmVtIDAuN3JlbSAwLjVyZW0gMC43cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBsZXR0ZXItc3BhY2luZzogM3B4O1xcbiAgYm9yZGVyLXJhZGl1czogMC41dnc7XFxufVxcblxcbiNzYXZlLWJ0biB7XFxuICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZWQwZGU7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbiNjYW5jZWwtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5MmMxYjI7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbiNzYXZlLWJ0bjpob3ZlcixcXG4jY2FuY2VsLWJ0bjpob3ZlciB7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRhc2stZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDNyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDEzcmVtO1xcbiAgd2lkdGg6IDQ1JTtcXG4gIGxlZnQ6IDMwJTtcXG4gIG1hcmdpbi1sZWZ0OiAtNTBweDtcXG4gIHRvcDogMzAlO1xcbiAgbWFyZ2luLXRvcDogLTUwcHg7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi50YXNrLWZvcm0gPiBpbnB1dCxcXG4udGFzay1mb3JtID4gc2VsZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZWI0OWY7XFxuICBjb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDJyZW07XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjN2dztcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZlYjQ5ZjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3Z3O1xcbn1cXG5cXG4jY2FuY2VsLXRhc2stYnRuLFxcbiNzdWJtaXQtdGFzay1idG4sXFxuI3NhdmUtdGFzay1idG4ge1xcbiAgcGFkZGluZzogMC41cmVtIDAuN3JlbSAwLjVyZW0gMC43cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuI3N1Ym1pdC10YXNrLWJ0bjpob3ZlcixcXG4jc2F2ZS10YXNrLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzVkN2JhO1xcbn1cXG5cXG4jY2FuY2VsLXRhc2stYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZWI0OWY7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAwLjN2dztcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuI3N1Ym1pdC10YXNrLWJ0bixcXG4jc2F2ZS10YXNrLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmViNDlmO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMC4zdnc7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbiNjYW5jZWwtdGFzay1idG4ge1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICBjb2xvcjogIzZlYjQ5ZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogIzZlYjQ5ZjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3Z3O1xcbn1cXG5cXG4udGFzay1jb250YWluZXItZGlzcGxheSB7XFxuICBoZWlnaHQ6IDklO1xcbn1cXG5cXG4udGFzay1iYWNrZ3JvdW5kIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbi1sZWZ0OiAzLjhyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjdmciA0ZnIgMWZyIDAuN2ZyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzay1iYWNrZ3JvdW5kID4gaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBmb250OiBpbmhlcml0O1xcbiAgd2lkdGg6IDIuMTVlbTtcXG4gIGJvcmRlci1jb2xvcjogIzZlYjQ5ZjtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBoZWlnaHQ6IDIuMTVlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMTVlbTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4wNzVlbSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogM3Z3O1xcbn1cXG5cXG4udGFzay1iYWNrZ3JvdW5kID4gaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IDAuNjVlbTtcXG4gIGhlaWdodDogMC42NWVtO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgzKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZWI0OWYgIWltcG9ydGFudDtcXG4gIHRyYW5zaXRpb246IDEyMG1zIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRvZG8tbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLnRhc2tCdG5zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xcbiAgZ2FwOiA0cHg7XFxufVxcblxcbi50YXNrQnRucyA+IGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnRhc2tCdG5zID4gYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XFxufVxcblxcbiNkYXRlLWRpc3BsYXkge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbn1cXG5cXG4jYmx1ciB7XFxuICBmaWx0ZXI6IGJsdXIoNXB4KTtcXG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKDVweCk7XFxuICAtbW96LWZpbHRlcjogYmx1cig1cHgpO1xcbiAgLW8tZmlsdGVyOiBibHVyKDVweCk7XFxuICAtbXMtZmlsdGVyOiBibHVyKDVweCk7XFxufVxcblxcbiNvdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBsZWZ0OiAwcHg7XFxuICB0b3A6IDBweDtcXG4gIHJpZ2h0OiAwcHg7XFxuICBib3R0b206IDBweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIHotaW5kZXg6IDk5OTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7XG4gIGFsbFByb2plY3RzLFxuICBkaXNhYmxlUHJldmlvdXNEYXRlcyxcbiAgZmluZEluZGV4LFxuICBmaW5kUHJvamVjdE5hbWUsXG59IGZyb20gXCIuL2xvZ2ljXCI7XG5cbmZ1bmN0aW9uIGdldFByb2pOYW1lKCkge1xuICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnZXQtcHJvamVjdC10aXRsZVwiKTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvalRpdGxlKCkge1xuICBsZXQgcHJvalRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRpdGxlXCIpLnRleHRDb250ZW50O1xuICByZXR1cm4gcHJvalRpdGxlO1xufVxuXG5mdW5jdGlvbiBnZXROZXdUdGxlKCkge1xuICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctcHJvamVjdC10aXRsZVwiKTtcbn1cblxuY29uc3QgZ2V0VGFza0luZm8gPSAoKSA9PiB7XG4gIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdldC10YXNrLW5hbWVcIikudmFsdWU7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnZXQtZGVzY3JpcHRpb25cIikudmFsdWU7XG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdldC1kYXRlXCIpLnZhbHVlO1xuICBjb25zdCBwcmlvcml0eUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdldC1wcmlvcml0eS1saXN0XCIpLnZhbHVlO1xuXG4gIHJldHVybiB7XG4gICAgdGFzayxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkYXRlLFxuICAgIHByaW9yaXR5TGlzdCxcbiAgfTtcbn07XG5cbmNvbnN0IFVJID0gKCgpID0+IHtcbiAgZnVuY3Rpb24gbWFrZVByb2plY3RCdG4obmFtZSkge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke25hbWV9LXByb2plY3QtYnRuYCk7XG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWJ0blwiKTtcbiAgICBidG4udGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFsbC1wcm9qZWN0c1wiKTtcbiAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChidG4pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyU2F2ZWRUYXNrKCkge1xuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IGZpbmRJbmRleC5wcm9qZWN0SW5kZXgoKTtcbiAgICBhbGxQcm9qZWN0c1twcm9qZWN0SW5kZXhdLnByb2plY3REZXRhaWxzLmFsbFRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIHRhc2tEaXNwbGF5KFxuICAgICAgICB0YXNrLnRhc2tOYW1lLFxuICAgICAgICB0YXNrLmRlc2NyaXB0aW9uLFxuICAgICAgICB0YXNrLmR1ZURhdGUsXG4gICAgICAgIHRhc2sucHJpb3JpdHlMaXN0LFxuICAgICAgICB0YXNrLmNoZWNrQm94LFxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1ha2VBZGRUYXNrQnRuKCkge1xuICAgIGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWxpc3RcIik7XG5cbiAgICBjb25zdCBjb250YWluZXJUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXJUYXNrQnRuLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXItdGFzay1idG5cIik7XG5cbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRUYXNrQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkLXRhc2stYnRuXCIpO1xuICAgIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZChcImFkZC10YXNrLWJ0blwiKTtcblxuICAgIGNvbnN0IGFkZEljb25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGFkZEljb25JbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiL3NyYy9pY29ucy9tYXRlcmlhbC1zeW1ib2xzX2FkZC5zdmdcIik7XG4gICAgYWRkSWNvbkltZy5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2stYnRuXCIpO1xuXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcImFkZC10YXNrLWJ0blwiKTtcbiAgICBkaXYudGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCI7XG5cbiAgICBhZGRUYXNrQnRuLmFwcGVuZENoaWxkKGFkZEljb25JbWcpO1xuICAgIGFkZFRhc2tCdG4uYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICBjb250YWluZXJUYXNrQnRuLmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xuICAgIHRvZG9MaXN0LmFwcGVuZENoaWxkKGNvbnRhaW5lclRhc2tCdG4pO1xuICB9XG5cbiAgZnVuY3Rpb24gaGVhZGVyRGlzcGxheShuYW1lKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICByZW5kZXJQcm9qVHRsZShoZWFkZXIsIG5hbWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyUHJvalR0bGUoYXBwZW5kLCBwcm9qVHRsZSkge1xuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRpdGxlXCIpO1xuICAgIHByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBwcm9qVHRsZSk7XG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvalR0bGU7XG4gICAgYXBwZW5kLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gIH1cblxuICBmdW5jdGlvbiB0YXNrRm9ybSgpIHtcbiAgICBjb25zdCBiZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1saXN0LWNvbnRhaW5lclwiKTtcbiAgICBiZy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJsdXJcIik7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwidGFzay1mb3JtXCIpO1xuXG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0YXNrLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIHRhc2suc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJnZXQtdGFzay1uYW1lXCIpO1xuICAgIHRhc2suc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJUYXNrIG5hbWVcIik7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImdldC1kZXNjcmlwdGlvblwiKTtcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkRlc2NyaXB0aW9uXCIpO1xuXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkYXRlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICAgIGRhdGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJnZXQtZGF0ZVwiKTtcbiAgICBkaXNhYmxlUHJldmlvdXNEYXRlcyhkYXRlKTtcblxuICAgIGNvbnN0IHByaW9yaXR5TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgcHJpb3JpdHlMaXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZ2V0LXByaW9yaXR5LWxpc3RcIik7XG5cbiAgICBjb25zdCB1cmdlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIHVyZ2VudC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcInVyZ2VudFwiKTtcbiAgICB1cmdlbnQudGV4dENvbnRlbnQgPSBcInVyZ2VudFwiO1xuXG4gICAgY29uc3QgaW1wb3J0YW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBpbXBvcnRhbnQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJpbXBvcnRhbnRcIik7XG4gICAgaW1wb3J0YW50LnRleHRDb250ZW50ID0gXCJpbXBvcnRhbnRcIjtcblxuICAgIGNvbnN0IG5vdEltcG9ydGFudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgbm90SW1wb3J0YW50LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwibm90LWltcG9ydGFudFwiKTtcbiAgICBub3RJbXBvcnRhbnQudGV4dENvbnRlbnQgPSBcIm5vdC1pbXBvcnRhbnRcIjtcblxuICAgIGNvbnN0IGJ0bkNvbnRhaW5lcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1Ym1pdC10YXNrLWJ0blwiKTtcbiAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuXG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjYW5jZWwtdGFzay1idG5cIik7XG4gICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gXCJjYW5jZWxcIjtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0YXNrKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGUpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlMaXN0KTtcbiAgICBwcmlvcml0eUxpc3QuYXBwZW5kQ2hpbGQodXJnZW50KTtcbiAgICBwcmlvcml0eUxpc3QuYXBwZW5kQ2hpbGQoaW1wb3J0YW50KTtcbiAgICBwcmlvcml0eUxpc3QuYXBwZW5kQ2hpbGQobm90SW1wb3J0YW50KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcnMpO1xuICAgIGJ0bkNvbnRhaW5lcnMuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcbiAgICBidG5Db250YWluZXJzLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVCbHVyQXR0cmlidXRlKCkge1xuICAgIGNvbnN0IHRvZG9MaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWxpc3QtY29udGFpbmVyXCIpO1xuICAgIHRvZG9MaXN0Q29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlVUlUYXNrQnRuKCkge1xuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lci10YXNrLWJ0blwiKTtcbiAgICBhZGRUYXNrQnRuLnJlbW92ZSgpO1xuICAgIG1ha2VBZGRUYXNrQnRuKCk7XG4gIH1cblxuICBmdW5jdGlvbiB0YXNrRGlzcGxheSh0YXNrLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHksIGNoZWNrQm94KSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1saXN0XCIpO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stY29udGFpbmVyLWRpc3BsYXlcIik7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImRhdGEtbmFtZVwiLCB0YXNrKTtcblxuICAgIGNvbnN0IGJnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBiZy5jbGFzc0xpc3QuYWRkKFwidGFzay1iYWNrZ3JvdW5kXCIpO1xuXG4gICAgY29uc3QgY2hlY2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNoZWNrTGlzdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgY2hlY2tMaXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIHRhc2spO1xuICAgIGNoZWNrTGlzdC5jbGFzc0xpc3QuYWRkKFwiY2hlY2stYm94XCIpO1xuICAgIGNoZWNrQm94ID09IFwiY2hlY2tlZFwiID8gKGNoZWNrTGlzdC5jaGVja2VkID0gdHJ1ZSkgOiBmYWxzZTtcblxuICAgIGNvbnN0IHRhc2tEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHRhc2tEaXNwbGF5LnNldEF0dHJpYnV0ZShcImZvclwiLCB0YXNrKTtcblxuICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGgzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay1uYW1lXCIpO1xuICAgIGgzLnRleHRDb250ZW50ID0gdGFzaztcblxuICAgIGNvbnN0IGRlc2NEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXNjRGlzcGxheS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlc2NyaXB0aW9uXCIpO1xuICAgIGRlc2NEaXNwbGF5LnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG5cbiAgICBjb25zdCBkYXRlRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGF0ZURpc3BsYXkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkYXRlLWRpc3BsYXlcIik7XG4gICAgZGF0ZURpc3BsYXkudGV4dENvbnRlbnQgPSBkYXRlO1xuXG4gICAgY29uc3QgdGFza0J0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tCdG5zLmNsYXNzTGlzdC5hZGQoXCJ0YXNrQnRuc1wiKTtcblxuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVsZXRlLXRhc2tcIik7XG4gICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZShcImRhdGEtbmFtZVwiLCB0YXNrKTtcbiAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBkZWxldGVJY29uLnNldEF0dHJpYnV0ZShcImRhdGEtbmFtZVwiLCB0YXNrKTtcbiAgICBkZWxldGVJY29uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVsZXRlLWljb25cIik7XG4gICAgZGVsZXRlSWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIvc3JjL2ljb25zL2JpX3RyYXNoLWZpbGwuc3ZnXCIpO1xuXG4gICAgY29uc3QgZWRpdFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGVkaXRUYXNrQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWRpdC10YXNrXCIpO1xuICAgIGVkaXRUYXNrQnRuLnNldEF0dHJpYnV0ZShcImRhdGEtbmFtZVwiLCB0YXNrKTtcbiAgICBjb25zdCBlZGl0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgZWRpdEljb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0LWljb25cIik7XG4gICAgZWRpdEljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiL3NyYy9pY29ucy90YWJsZXJfZWRpdC5zdmdcIik7XG4gICAgZWRpdEljb24uc2V0QXR0cmlidXRlKFwiZGF0YS1uYW1lXCIsIHRhc2spO1xuXG4gICAgcHJpb3JpdHlDb2xvcihwcmlvcml0eSwgY2hlY2tMaXN0LCBkYXRlRGlzcGxheSk7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJnKTtcbiAgICBiZy5hcHBlbmRDaGlsZChjaGVja0xpc3QpO1xuICAgIGJnLmFwcGVuZENoaWxkKHRhc2tEaXNwbGF5KTtcbiAgICBiZy5hcHBlbmRDaGlsZChkYXRlRGlzcGxheSk7XG4gICAgYmcuYXBwZW5kQ2hpbGQodGFza0J0bnMpO1xuICAgIHRhc2tCdG5zLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgZGVsZXRlQnRuLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuICAgIHRhc2tCdG5zLmFwcGVuZENoaWxkKGVkaXRUYXNrQnRuKTtcbiAgICBlZGl0VGFza0J0bi5hcHBlbmRDaGlsZChlZGl0SWNvbik7XG4gICAgdGFza0Rpc3BsYXkuYXBwZW5kQ2hpbGQoaDMpO1xuICAgIHRhc2tEaXNwbGF5LmFwcGVuZENoaWxkKGRlc2NEaXNwbGF5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByaW9yaXR5Q29sb3IocHJpb3JpdHksIGNoZWNrQm94LCBkYXRlKSB7XG4gICAgaWYgKHByaW9yaXR5ID09IFwibm90LWltcG9ydGFudFwiKSB7XG4gICAgICBjaGVja0JveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNkM2QzZDNcIjtcbiAgICB9XG4gICAgaWYgKHByaW9yaXR5ID09IFwidXJnZW50XCIpIHtcbiAgICAgIGNoZWNrQm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI0Y2NUM1Q1wiO1xuICAgICAgZGF0ZS5zdHlsZS5jb2xvciA9IFwiI0Y2NUM1Q1wiO1xuICAgIH1cbiAgICBpZiAocHJpb3JpdHkgPT0gXCJpbXBvcnRhbnRcIikge1xuICAgICAgY2hlY2tCb3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjRjZEMzVDXCI7XG4gICAgICBkYXRlLnN0eWxlLmNvbG9yID0gXCIjRjZEMzVDXCI7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZW1wdHlUb0RvTGlzdCgpIHtcbiAgICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1saXN0XCIpO1xuICAgIHRvZG9MaXN0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNhdmVCdG4oKSB7XG4gICAgY29uc3Qgc2F2ZVRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHNhdmVUYXNrQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2F2ZS10YXNrLWJ0blwiKTtcbiAgICBzYXZlVGFza0J0bi50ZXh0Q29udGVudCA9IFwiU0FWRVwiO1xuICAgIHJldHVybiBzYXZlVGFza0J0bjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcGxhY2VCdG5zKHRhc2tOYW1lKSB7XG4gICAgY29uc3Qgc3VibWl0VGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0LXRhc2stYnRuXCIpO1xuICAgIGNvbnN0IHNhdmVUYXNrQnRuID0gY3JlYXRlU2F2ZUJ0bigpO1xuICAgIHNhdmVUYXNrQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2F2ZS10YXNrLWJ0blwiKTtcbiAgICBzYXZlVGFza0J0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLW5hbWVcIiwgdGFza05hbWUpXG4gICAgc3VibWl0VGFza0J0bi5yZXBsYWNlV2l0aChzYXZlVGFza0J0bik7XG4gIH1cblxuICBmdW5jdGlvbiBjdXJyZW50VGFza0luZm8obmFtZU9mVGFzaywgcHJvamVjdE5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBmaW5kSW5kZXgucHJvamVjdEluZGV4KHByb2plY3ROYW1lKTtcbiAgICBjb25zdCB0YXNrSW5kZXggPSBhbGxQcm9qZWN0c1tcbiAgICAgIHByb2plY3RJbmRleFxuICAgIF0ucHJvamVjdERldGFpbHMuYWxsVGFza3MuZmluZEluZGV4KChwKSA9PiBwLnRhc2tOYW1lID09PSBuYW1lT2ZUYXNrKTtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0ucHJvamVjdERldGFpbHMuYWxsVGFza3NbdGFza0luZGV4XS50YXNrTmFtZTtcbiAgICBjb25zdCBkZXRhaWxzID1cbiAgICAgIGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0ucHJvamVjdERldGFpbHMuYWxsVGFza3NbdGFza0luZGV4XS5kZXNjcmlwdGlvbjtcbiAgICBjb25zdCBkdWVEYXRlID1cbiAgICAgIGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0ucHJvamVjdERldGFpbHMuYWxsVGFza3NbdGFza0luZGV4XS5kdWVEYXRlO1xuICAgIGNvbnN0IHByaW9yaXR5ID1cbiAgICAgIGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0ucHJvamVjdERldGFpbHMuYWxsVGFza3NbdGFza0luZGV4XS5wcmlvcml0eUxpc3Q7XG4gICAgY29uc3QgZ2V0VGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2V0LXRhc2stbmFtZVwiKTtcbiAgICBjb25zdCBnZXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2V0LWRlc2NyaXB0aW9uXCIpO1xuICAgIGNvbnN0IGdldERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdldC1kYXRlXCIpO1xuICAgIGNvbnN0IGdldFByaW9yaXR5TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2V0LXByaW9yaXR5LWxpc3RcIik7XG4gICAgZ2V0VGFzay52YWx1ZSA9IG5hbWU7XG4gICAgZ2V0RGVzY3JpcHRpb24udmFsdWUgPSBkZXRhaWxzO1xuICAgIGdldERhdGUudmFsdWUgPSBkdWVEYXRlO1xuICAgIGdldFByaW9yaXR5TGlzdC52YWx1ZSA9IHByaW9yaXR5O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlRGF0YU5hbWVBdHRyaWJ1dGUobmFtZU9mVGFzaywgcHJvamVjdE5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBmaW5kSW5kZXgucHJvamVjdEluZGV4KHByb2plY3ROYW1lKTtcbiAgICBjb25zdCB0YXNrSW5kZXggPSBmaW5kSW5kZXgudGFza0luZGV4KG5hbWVPZlRhc2ssIHByb2plY3ROYW1lKTtcbiAgICBjb25zdCBjdXJyZW50VGFza05hbWUgPVxuICAgICAgYWxsUHJvamVjdHNbcHJvamVjdEluZGV4XS5wcm9qZWN0RGV0YWlscy5hbGxUYXNrc1t0YXNrSW5kZXhdLnRhc2tOYW1lO1xuICAgIGNvbnN0IGRhdGFBdHRyaWJ1dGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLW5hbWU9JyR7Y3VycmVudFRhc2tOYW1lfSddYCxcbiAgICApO1xuICAgIGRhdGFBdHRyaWJ1dGUucmVtb3ZlKCk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVUYXNrRm9ybSgpIHtcbiAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1mb3JtXCIpO1xuICAgIHRhc2tGb3JtLnJlbW92ZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hhbmdlUHJvak5hbWUobmFtZSkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xuXG4gICAgY29uc3QgY2hhbmdlTmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2hhbmdlTmFtZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2hhbmdlLW5hbWUtY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5ld1Byb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ldy1wcm9qZWN0LXRpdGxlXCIpO1xuICAgIG5ld1Byb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBuZXdQcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgbmFtZSk7XG4gICAgaGVhZGVyLnJlcGxhY2VDaGlsZChuZXdQcm9qZWN0VGl0bGUsIGhlYWRlci5maXJzdEVsZW1lbnRDaGlsZCk7XG5cbiAgICBjb25zdCBidG5Db250YWluZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidG5Db250YWluZXJzLmNsYXNzTGlzdC5hZGQoXCJidG4tY29udGFpbmVyc1wiKTtcblxuICAgIGNvbnN0IHNhdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHNhdmVCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzYXZlLWJ0blwiKTtcbiAgICBzYXZlQnRuLnRleHRDb250ZW50ID0gXCJTQVZFXCI7XG5cbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ0FOQ0VMXCI7XG4gICAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2FuY2VsLWJ0blwiKTtcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjaGFuZ2VOYW1lQ29udGFpbmVyKTtcbiAgICBjaGFuZ2VOYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RUaXRsZSk7XG4gICAgY2hhbmdlTmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChidG5Db250YWluZXJzKTtcbiAgICBidG5Db250YWluZXJzLmFwcGVuZENoaWxkKHNhdmVCdG4pO1xuICAgIGJ0bkNvbnRhaW5lcnMuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5ld1R0bGVCdG4oY3VycmVudFByb2opIHtcbiAgICBjb25zdCBuZXdUaXRsZSA9IGdldE5ld1R0bGUoKTtcbiAgICBjb25zdCBDaGFuZ2VOYW1lYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7Y3VycmVudFByb2p9LXByb2plY3QtYnRuYCk7XG4gICAgQ2hhbmdlTmFtZWJ0bi5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKTtcbiAgICBDaGFuZ2VOYW1lYnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke25ld1RpdGxlLnZhbHVlfS1wcm9qZWN0LWJ0bmApO1xuICAgIENoYW5nZU5hbWVidG4udGV4dENvbnRlbnQgPSBuZXdUaXRsZS52YWx1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVByb2plY3RCdG4oKSB7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRpdGxlXCIpO1xuICAgIGNvbnN0IHByb2plY3RUaXRsZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgYCR7cHJvamVjdFRpdGxlLnRleHRDb250ZW50fS1wcm9qZWN0LWJ0bmAsXG4gICAgKTtcbiAgICBwcm9qZWN0VGl0bGVCdG4ucmVtb3ZlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBlbXB0eVRvRG9QYWdlKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgZW1wdHlUb0RvTGlzdCgpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVTYXZlQnRuLFxuICAgIGN1cnJlbnRUYXNrSW5mbyxcbiAgICBjaGFuZ2VQcm9qTmFtZSxcbiAgICBlbXB0eVRvRG9MaXN0LFxuICAgIGVtcHR5VG9Eb1BhZ2UsXG4gICAgbWFrZVByb2plY3RCdG4sXG4gICAgbWFrZUFkZFRhc2tCdG4sXG4gICAgbmV3VHRsZUJ0bixcbiAgICByZW1vdmVEYXRhTmFtZUF0dHJpYnV0ZSxcbiAgICByZW1vdmVQcm9qZWN0QnRuLFxuICAgIHJlbW92ZVRhc2tGb3JtLFxuICAgIHJlbW92ZUJsdXJBdHRyaWJ1dGUsXG4gICAgcmVwbGFjZUJ0bnMsXG4gICAgcmVuZGVyU2F2ZWRUYXNrLFxuICAgIGhlYWRlckRpc3BsYXksXG4gICAgcHJpb3JpdHlDb2xvcixcbiAgICB0YXNrRm9ybSxcbiAgICB0YXNrRGlzcGxheSxcbiAgICB1cGRhdGVVSVRhc2tCdG4sXG4gIH07XG59KSgpO1xuXG5maW5kUHJvamVjdE5hbWUoXCJTVFVEWVwiKTtcblxuZXhwb3J0IHsgZ2V0VGFza0luZm8sIGdldFByb2pOYW1lLCBnZXROZXdUdGxlLCBnZXRQcm9qVGl0bGUsIFVJIH07XG4iLCJpbXBvcnQgeyBVSSwgZ2V0UHJvalRpdGxlLCBnZXROZXdUdGxlLCBnZXRQcm9qTmFtZSwgZ2V0VGFza0luZm8gfSBmcm9tIFwiLi9ET01cIjtcbmltcG9ydCB7XG4gIGFkZFByb2plY3QsXG4gIGRlbGV0ZVByb2plY3QsXG4gIGRlbGV0ZVRhc2ssXG4gIHNhdmVOYW1lLFxuICBjcmVhdGVUYXNrLFxuICBlZGl0VGFzayxcbiAgc2F2ZUNoZWNrQm94LFxuICB0b2RheUFuZFVwY29taW5nVGFzayxcbiAgZmluZFByb2plY3ROYW1lLFxufSBmcm9tIFwiLi9sb2dpY1wiO1xuaW1wb3J0IHsgc2F2ZURhdGEgfSBmcm9tIFwiLi9sb2NhbC1zdG9yYWdlXCI7XG5pbXBvcnQgeyBwdWJzdWIgfSBmcm9tIFwiLi9wdWJzdWIuanNcIjtcblxucHVic3ViLnN1YnNjcmliZShcImFkZFByb2pcIiwgYWRkUHJvamVjdCk7XG5wdWJzdWIuc3Vic2NyaWJlKFwiZGxldGVQcm9qXCIsIGRlbGV0ZVByb2plY3QpO1xucHVic3ViLnN1YnNjcmliZShcInNhdmVOYW1lXCIsIHNhdmVOYW1lKTtcbnB1YnN1Yi5zdWJzY3JpYmUoXCJzYXZlRGF0YVwiLCBzYXZlRGF0YSk7XG5wdWJzdWIuc3Vic2NyaWJlKFwiY3JlYXRlVGFza1wiLCBjcmVhdGVUYXNrKTtcbnB1YnN1Yi5zdWJzY3JpYmUoXCJlZGl0VGFza1wiLCBlZGl0VGFzayk7XG5wdWJzdWIuc3Vic2NyaWJlKFwic2F2ZUJveFwiLCBzYXZlQ2hlY2tCb3gpO1xuXG5jb25zdCBET01FdmVudHMgPSAoKSA9PiB7XG4gIGNvbnN0IGQgPSBkb2N1bWVudDtcbiAgbGV0IGN1cnJlbnRQcm9qO1xuICBsZXQgdGFzaztcbiAgbGV0IG5ld0luZm87XG4gIGxldCBidG47XG4gIGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCIuYWRkLXByb2plY3QtYnRuXCIpIHx8IGUudGFyZ2V0Lm1hdGNoZXMoXCIjYWRkLWljb25cIikpIHtcbiAgICAgIGNvbnN0IGdldFByb2pUaXRsZSA9IGdldFByb2pOYW1lKCk7XG4gICAgICBwdWJzdWIucHVibGlzaChcImFkZFByb2pcIiwgZ2V0UHJvalRpdGxlLnZhbHVlKTtcbiAgICAgIFVJLm1ha2VQcm9qZWN0QnRuKGdldFByb2pUaXRsZS52YWx1ZSk7XG4gICAgICBpZiAoYnRuICE9IG51bGwpIHtcbiAgICAgICAgYnRuLnN0eWxlLmNvbG9yID0gXCIjOTJDMUIyXCI7XG4gICAgICAgIGJ0bi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICB9XG4gICAgICBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtnZXRQcm9qVGl0bGUudmFsdWV9LXByb2plY3QtYnRuYCk7XG4gICAgICBidG4uc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG4gICAgICBidG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjOTJDMUIyXCI7XG4gICAgICBVSS5oZWFkZXJEaXNwbGF5KGdldFByb2pUaXRsZS52YWx1ZSk7XG4gICAgICBVSS5lbXB0eVRvRG9MaXN0KCk7XG4gICAgICBVSS5tYWtlQWRkVGFza0J0bigpO1xuICAgICAgZ2V0UHJvalRpdGxlLnZhbHVlID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCIuZGVsZXRlLXByb2plY3QtYnRuXCIpKSB7XG4gICAgICBwdWJzdWIucHVibGlzaChcImRsZXRlUHJvalwiKTtcbiAgICAgIHB1YnN1Yi5wdWJsaXNoKFwic2F2ZURhdGFcIik7XG4gICAgICBVSS5yZW1vdmVQcm9qZWN0QnRuKCk7XG4gICAgICBVSS5lbXB0eVRvRG9QYWdlKCk7XG4gICAgfVxuICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKGAucHJvamVjdC1idG5gKSkge1xuICAgICAgaWYgKGJ0biAhPSBudWxsKSB7XG4gICAgICAgIGJ0bi5zdHlsZS5jb2xvciA9IFwiIzkyQzFCMlwiO1xuICAgICAgICBidG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgfVxuICAgICAgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZS50YXJnZXQudGV4dENvbnRlbnR9LXByb2plY3QtYnRuYCk7XG4gICAgICBidG4uc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG4gICAgICBidG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjOTJDMUIyXCI7XG4gICAgICBVSS5oZWFkZXJEaXNwbGF5KGUudGFyZ2V0LnRleHRDb250ZW50KTtcbiAgICAgIFVJLmVtcHR5VG9Eb0xpc3QoKTtcbiAgICAgIFVJLnJlbmRlclNhdmVkVGFzaygpO1xuICAgICAgVUkubWFrZUFkZFRhc2tCdG4oKTtcbiAgICB9XG4gICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCIuYWRkLXRhc2stYnRuXCIpKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBVSS50YXNrRm9ybShnZXRQcm9qVGl0bGUoKSk7XG4gICAgfVxuICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiLnByb2plY3QtdGl0bGVcIikpIHtcbiAgICAgIFVJLmNoYW5nZVByb2pOYW1lKGUudGFyZ2V0LnRleHRDb250ZW50KTtcbiAgICAgIGN1cnJlbnRQcm9qID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgfVxuICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiI3NhdmUtYnRuXCIpKSB7XG4gICAgICBwdWJzdWIucHVibGlzaChcInNhdmVOYW1lXCIsIGN1cnJlbnRQcm9qKTtcbiAgICAgIHB1YnN1Yi5wdWJsaXNoKFwic2F2ZURhdGFcIik7XG4gICAgICBVSS5uZXdUdGxlQnRuKGN1cnJlbnRQcm9qKTtcbiAgICAgIFVJLmhlYWRlckRpc3BsYXkoZ2V0TmV3VHRsZSgpLnZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCIjY2FuY2VsLWJ0blwiKSkge1xuICAgICAgVUkuaGVhZGVyRGlzcGxheShjdXJyZW50UHJvaik7XG4gICAgfVxuICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiI3N1Ym1pdC10YXNrLWJ0blwiKSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgVUkucmVtb3ZlQmx1ckF0dHJpYnV0ZSgpO1xuICAgICAgbGV0IHByb2pUaXRsZSA9IGdldFByb2pUaXRsZSgpO1xuICAgICAgbmV3SW5mbyA9IGdldFRhc2tJbmZvKCk7XG4gICAgICBwdWJzdWIucHVibGlzaChcbiAgICAgICAgXCJjcmVhdGVUYXNrXCIsXG4gICAgICAgIHByb2pUaXRsZSxcbiAgICAgICAgbmV3SW5mby50YXNrLFxuICAgICAgICBuZXdJbmZvLmRlc2NyaXB0aW9uLFxuICAgICAgICBuZXdJbmZvLmRhdGUsXG4gICAgICAgIG5ld0luZm8ucHJpb3JpdHlMaXN0LFxuICAgICAgKTtcbiAgICAgIFVJLnRhc2tEaXNwbGF5KFxuICAgICAgICBuZXdJbmZvLnRhc2ssXG4gICAgICAgIG5ld0luZm8uZGVzY3JpcHRpb24sXG4gICAgICAgIG5ld0luZm8uZGF0ZSxcbiAgICAgICAgbmV3SW5mby5wcmlvcml0eUxpc3QsXG4gICAgICApO1xuICAgICAgVUkuaGVhZGVyRGlzcGxheShwcm9qVGl0bGUpO1xuICAgICAgVUkudXBkYXRlVUlUYXNrQnRuKCk7XG4gICAgICBwdWJzdWIucHVibGlzaChcInNhdmVEYXRhXCIsIHNhdmVEYXRhKTtcbiAgICAgIFVJLnJlbW92ZVRhc2tGb3JtKCk7XG4gICAgfVxuICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiI2NhbmNlbC10YXNrLWJ0blwiKSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgVUkucmVtb3ZlQmx1ckF0dHJpYnV0ZSgpO1xuICAgICAgVUkucmVtb3ZlVGFza0Zvcm0oKTtcbiAgICAgIFVJLmhlYWRlckRpc3BsYXkoZ2V0UHJvalRpdGxlKCkpO1xuICAgIH1cbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIiNkZWxldGUtdGFza1wiKSB8fCBlLnRhcmdldC5tYXRjaGVzKFwiI2RlbGV0ZS1pY29uXCIpKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0YXNrID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1uYW1lXCIpO1xuICAgICAgbGV0IG5hbWVPZlByb2plY3QgPSBmaW5kUHJvamVjdE5hbWUodGFzayk7XG4gICAgICBVSS5yZW1vdmVEYXRhTmFtZUF0dHJpYnV0ZSh0YXNrLCBuYW1lT2ZQcm9qZWN0KVxuICAgICAgZGVsZXRlVGFzayh0YXNrLCBuYW1lT2ZQcm9qZWN0KTtcbiAgICB9XG4gICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCIjZWRpdC10YXNrXCIpIHx8IGUudGFyZ2V0Lm1hdGNoZXMoXCIjZWRpdC1pY29uXCIpKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBVSS50YXNrRm9ybSgpO1xuICAgICAgdGFzayA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtbmFtZVwiKTtcbiAgICAgIGxldCBuYW1lT2ZQcm9qZWN0ID0gZmluZFByb2plY3ROYW1lKHRhc2spO1xuICAgICAgVUkuY3VycmVudFRhc2tJbmZvKHRhc2ssIG5hbWVPZlByb2plY3QpO1xuICAgICAgVUkuY3JlYXRlU2F2ZUJ0bigpO1xuICAgICAgVUkucmVwbGFjZUJ0bnModGFzayk7XG4gICAgfVxuICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiI3NhdmUtdGFzay1idG5cIikpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIFVJLnJlbW92ZUJsdXJBdHRyaWJ1dGUoKTtcbiAgICAgIHRhc2sgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW5hbWVcIik7XG4gICAgICBsZXQgbmFtZU9mUHJvamVjdCA9IGZpbmRQcm9qZWN0TmFtZSh0YXNrKTtcbiAgICAgIFVJLnJlbW92ZURhdGFOYW1lQXR0cmlidXRlKHRhc2ssIG5hbWVPZlByb2plY3QpO1xuICAgICAgcHVic3ViLnB1Ymxpc2goXCJlZGl0VGFza1wiLCB0YXNrLCBuYW1lT2ZQcm9qZWN0KTtcbiAgICAgIHB1YnN1Yi5wdWJsaXNoKFwic2F2ZURhdGFcIik7XG4gICAgICBuZXdJbmZvID0gZ2V0VGFza0luZm8oKTtcbiAgICAgIFVJLnRhc2tEaXNwbGF5KFxuICAgICAgICBuZXdJbmZvLnRhc2ssXG4gICAgICAgIG5ld0luZm8uZGVzY3JpcHRpb24sXG4gICAgICAgIG5ld0luZm8uZGF0ZSxcbiAgICAgICAgbmV3SW5mby5wcmlvcml0eUxpc3QsXG4gICAgICApO1xuICAgICAgVUkucmVtb3ZlVGFza0Zvcm0oKTtcbiAgICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lci10YXNrLWJ0blwiKTtcbiAgICAgIGlmICgoYWRkVGFza0J0biAhPT0gbnVsbCkpIHtcbiAgICAgICAgVUkudXBkYXRlVUlUYXNrQnRuKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiLnRvZGF5XCIpIHx8IGUudGFyZ2V0LnRleHRDb250ZW50ID09IFwiVG9kYXlcIikge1xuICAgICAgVUkuZW1wdHlUb0RvUGFnZSgpO1xuICAgICAgVUkuaGVhZGVyRGlzcGxheShcIlRPREFZXCIpO1xuICAgICAgdG9kYXlBbmRVcGNvbWluZ1Rhc2soKS5kaXNwbGF5VG9kYXlUYXNrcygpO1xuICAgIH1cbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIi51cGNvbWluZ1wiKSB8fCBlLnRhcmdldC50ZXh0Q29udGVudCA9PSBcIlVwY29taW5nXCIpIHtcbiAgICAgIFVJLmVtcHR5VG9Eb1BhZ2UoKTtcbiAgICAgIFVJLmhlYWRlckRpc3BsYXkoXCJVUENPTUlOR1wiKTtcbiAgICAgIHRvZGF5QW5kVXBjb21pbmdUYXNrKCkuZGlzcGxheVVwY29taW5nVGFzaygpO1xuICAgIH1cbiAgfSk7XG4gIGQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiLmNoZWNrLWJveFwiKSkge1xuICAgICAgbGV0IHRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSk7XG4gICAgICBwdWJzdWIucHVibGlzaChcbiAgICAgICAgXCJzYXZlQm94XCIsXG4gICAgICAgIHRhc2ssXG4gICAgICAgIGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpLFxuICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICApO1xuICAgICAgcHVic3ViLnB1Ymxpc2goXCJzYXZlRGF0YVwiKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgRE9NRXZlbnRzIH07XG4iLCJpbXBvcnQgeyBhbGxQcm9qZWN0cyB9IGZyb20gXCIuL2xvZ2ljXCI7XG5cbmZ1bmN0aW9uIHNhdmVEYXRhKCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFsbFByb2plY3REYXRhXCIsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSk7XG4gIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhbGxQcm9qZWN0RGF0YVwiKSk7XG59XG5cbmV4cG9ydCB7IHNhdmVEYXRhIH07XG4iLCJpbXBvcnQgeyBnZXRUYXNrSW5mbywgZ2V0TmV3VHRsZSwgZ2V0UHJvalRpdGxlLCBVSSB9IGZyb20gXCIuL0RPTS5qc1wiO1xuaW1wb3J0IHsgc2F2ZURhdGEgfSBmcm9tIFwiLi9sb2NhbC1zdG9yYWdlLmpzXCI7XG5cbmNvbnN0IGFsbFByb2plY3RzID0gW107XG5cbmNvbnN0IHByb2plY3RNYW5hZ2VtZW50ID0gKCkgPT4ge1xuICBjb25zdCBhZGRQcm9qZWN0ID0gKHRpdGxlKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IG1ha2VQcm9qZWN0KHRpdGxlKTtcbiAgICBhbGxQcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IGVkaXRQcm9qZWN0TmFtZSA9IChpLCBuYW1lKSA9PiB7XG4gICAgYWxsUHJvamVjdHNbaV0ucHJvamVjdERldGFpbHMucHJvamVjdE5hbWUgPSBuYW1lO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAoaSkgPT4ge1xuICAgIGFsbFByb2plY3RzLnNwbGljZShpLCAxKTtcbiAgfTtcblxuICBjb25zdCB2aWV3UHJvamVjdHMgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coYWxsUHJvamVjdHMpO1xuICB9O1xuXG4gIGNvbnN0IG1ha2VQcm9qZWN0ID0gKHByb2plY3RUaXRsZSkgPT4ge1xuICAgIGNvbnN0IHByb2plY3REZXRhaWxzID0ge1xuICAgICAgcHJvamVjdE5hbWU6IHByb2plY3RUaXRsZSxcbiAgICAgIGFsbFRhc2tzOiBbXSxcbiAgICB9O1xuXG4gICAgY29uc3QgdGFza01hbmFnZW1lbnQgPSBuZXcgdGFza09wZXJhdGlvbnMocHJvamVjdERldGFpbHMpO1xuICAgIGNvbnN0IGFkZFRhc2sgPSB0YXNrTWFuYWdlbWVudC5hZGRUYXNrO1xuICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSB0YXNrTWFuYWdlbWVudC5kZWxldGVUYXNrO1xuICAgIGNvbnN0IGVkaXRUYXNrID0gdGFza01hbmFnZW1lbnQuZWRpdFRhc2tzO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb2plY3REZXRhaWxzLFxuICAgICAgYWRkVGFzayxcbiAgICAgIGRlbGV0ZVRhc2ssXG4gICAgICBlZGl0VGFzayxcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWRkUHJvamVjdCxcbiAgICBkZWxldGVQcm9qZWN0LFxuICAgIHZpZXdQcm9qZWN0cyxcbiAgICBlZGl0UHJvamVjdE5hbWUsXG4gIH07XG59O1xuXG5jb25zdCBwcm9qZWN0ID0gcHJvamVjdE1hbmFnZW1lbnQoKTtcblxuY2xhc3MgdGFza09wZXJhdGlvbnMge1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0KSB7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgfVxuXG4gIGFkZFRhc2sgPSAobmFtZSwgZGV0YWlscywgZGF0ZSwgcHJpb3JpdHlMaXN0LCBjaGVjaykgPT4ge1xuICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gbmV3IHRhc2sobmFtZSwgZGV0YWlscywgZGF0ZSwgcHJpb3JpdHlMaXN0LCBjaGVjayk7XG5cbiAgICB0aGlzLnByb2plY3QuYWxsVGFza3MucHVzaCh0YXNrRGV0YWlscyk7XG4gIH07XG5cbiAgZGVsZXRlVGFzayhpKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdERldGFpbHMuYWxsVGFza3Muc3BsaWNlKGksIDEpO1xuICB9XG59XG5cbmNsYXNzIHRhc2sge1xuICBjb25zdHJ1Y3Rvcih0YXNrTmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5TGlzdCwgY2hlY2tCb3gpIHtcbiAgICB0aGlzLnRhc2tOYW1lID0gdGFza05hbWU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eUxpc3QgPSBwcmlvcml0eUxpc3Q7XG4gICAgdGhpcy5jaGVja0JveCA9IGNoZWNrQm94O1xuICB9XG5cbiAgc2V0KCkge1xuICAgIFt0aGlzLnRhc2tOYW1lLCB0aGlzLmRlc2NyaXB0aW9uLCB0aGlzLmR1ZURhdGUsIHRoaXMucHJpb3JpdHlMaXN0XSA9XG4gICAgICB2YWx1ZS5zcGxpdChcIiBcIik7XG4gIH1cbn1cblxuY29uc3Qgc3RvcmVDaGVja0JveCA9IChuYW1lT2ZUYXNrKSA9PiB7XG4gIGNvbnN0IG5hbWVPZlByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtdGl0bGVcIikudGV4dENvbnRlbnQ7XG4gIGNvbnN0IHByb2plY3RJbmRleCA9IGFsbFByb2plY3RzLmZpbmRJbmRleChcbiAgICAocCkgPT4gcC5wcm9qZWN0RGV0YWlscy5wcm9qZWN0TmFtZSA9PT0gbmFtZU9mUHJvamVjdCxcbiAgKTtcbiAgY29uc3QgdGFza0luZGV4ID0gYWxsUHJvamVjdHNbcHJvamVjdEluZGV4XS5wcm9qZWN0RGV0YWlscy5hbGxUYXNrcy5maW5kSW5kZXgoXG4gICAgKHApID0+IHAudGFza05hbWUgPT09IG5hbWVPZlRhc2ssXG4gICk7XG5cbiAgZnVuY3Rpb24gY2hlY2soKSB7XG4gICAgYWxsUHJvamVjdHNbcHJvamVjdEluZGV4XS5wcm9qZWN0RGV0YWlscy5hbGxUYXNrc1t0YXNrSW5kZXhdLmNoZWNrQm94ID1cbiAgICAgIFwiY2hlY2tlZFwiO1xuICB9XG5cbiAgZnVuY3Rpb24gdW5jaGVja2VkKCkge1xuICAgIGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0ucHJvamVjdERldGFpbHMuYWxsVGFza3NbdGFza0luZGV4XS5jaGVja0JveCA9XG4gICAgICBcInVuY2hlY2tlZFwiO1xuICB9XG5cbiAgcmV0dXJuIHsgY2hlY2ssIHVuY2hlY2tlZCB9O1xufTtcblxuZnVuY3Rpb24gc2F2ZUNoZWNrQm94KGJveCwgbmFtZU9mVGFzaykge1xuICBjb25zdCBjaGVja0JveCA9IHN0b3JlQ2hlY2tCb3gobmFtZU9mVGFzayk7XG4gIGlmIChib3guY2hlY2tlZCA9PSB0cnVlKSB7XG4gICAgY2hlY2tCb3guY2hlY2soKTtcbiAgfSBlbHNlIHtcbiAgICBjaGVja0JveC51bmNoZWNrZWQoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0KG5hbWVPZlByb2plY3QpIHtcbiAgcHJvamVjdC5hZGRQcm9qZWN0KG5hbWVPZlByb2plY3QpO1xuICBzYXZlRGF0YSgpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KCkge1xuICBjb25zdCBpbmRleCA9IGZpbmRJbmRleC5wcm9qZWN0SW5kZXgoKTtcbiAgcHJvamVjdC5kZWxldGVQcm9qZWN0KGluZGV4KTtcbn1cblxuY29uc3QgZmluZEluZGV4ID0gKCgpID0+IHtcbiAgY29uc3QgcHJvamVjdEluZGV4ID0gKG5hbWUgPSBnZXRQcm9qVGl0bGUoKSkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gYWxsUHJvamVjdHMuZmluZEluZGV4KFxuICAgICAgKHApID0+IHAucHJvamVjdERldGFpbHMucHJvamVjdE5hbWUgPT09IG5hbWUsXG4gICAgKTtcbiAgICByZXR1cm4gaW5kZXg7XG4gIH07XG5cbiAgY29uc3QgdGFza0luZGV4ID0gKG5hbWVUYXNrLCBwcm9qTmFtZSkgPT5cbiAgICBhbGxQcm9qZWN0c1twcm9qZWN0SW5kZXgocHJvak5hbWUpXS5wcm9qZWN0RGV0YWlscy5hbGxUYXNrcy5maW5kSW5kZXgoXG4gICAgICAocCkgPT4gcC50YXNrTmFtZSA9PT0gbmFtZVRhc2ssXG4gICAgKTtcblxuICByZXR1cm4geyBwcm9qZWN0SW5kZXgsIHRhc2tJbmRleCB9O1xufSkoKTtcblxuZnVuY3Rpb24gZGVsZXRlVGFzayhuYW1lVGFzaywgcHJvamVjdE5hbWUpIHtcbiAgY29uc3QgcHJvakluZGV4ID0gZmluZEluZGV4LnByb2plY3RJbmRleChwcm9qZWN0TmFtZSk7XG4gIGNvbnN0IHRhc2tJbmRleCA9IGZpbmRJbmRleC50YXNrSW5kZXgobmFtZVRhc2ssIHByb2plY3ROYW1lKTtcbiAgYWxsUHJvamVjdHNbcHJvakluZGV4XS5kZWxldGVUYXNrKHRhc2tJbmRleCk7XG4gIHNhdmVEYXRhKCk7XG59XG5cbmZ1bmN0aW9uIHNhdmVOYW1lKGN1cnJlbnRQcm9qKSB7XG4gIGNvbnN0IG5ld1RpdGxlID0gZ2V0TmV3VHRsZSgpO1xuICBjb25zdCBpbmRleCA9IGFsbFByb2plY3RzLmZpbmRJbmRleChcbiAgICAocCkgPT4gcC5wcm9qZWN0RGV0YWlscy5wcm9qZWN0TmFtZSA9PT0gY3VycmVudFByb2osXG4gICk7XG4gIHByb2plY3QuZWRpdFByb2plY3ROYW1lKGluZGV4LCBuZXdUaXRsZS52YWx1ZSk7XG4gIHByb2plY3Qudmlld1Byb2plY3RzKCk7XG59XG5cbmZ1bmN0aW9uIGVkaXRUYXNrKG5hbWVUYXNrLCBuYW1lT2ZQcm9qZWN0KSB7XG4gIGNvbnN0IHByb2plY3RJbmRleCA9IGZpbmRJbmRleC5wcm9qZWN0SW5kZXgobmFtZU9mUHJvamVjdCk7XG4gIGNvbnN0IHRhc2tJbmRleCA9IGZpbmRJbmRleC50YXNrSW5kZXgobmFtZVRhc2ssIG5hbWVPZlByb2plY3QpO1xuICBjb25zdCBuZXdJbmZvID0gZ2V0VGFza0luZm8oKTtcbiAgYWxsUHJvamVjdHNbcHJvamVjdEluZGV4XS5wcm9qZWN0RGV0YWlscy5hbGxUYXNrc1t0YXNrSW5kZXhdLnRhc2tOYW1lID1cbiAgICBuZXdJbmZvLnRhc2s7XG4gIGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0ucHJvamVjdERldGFpbHMuYWxsVGFza3NbdGFza0luZGV4XS5kZXNjcmlwdGlvbiA9XG4gICAgbmV3SW5mby5kZXNjcmlwdGlvbjtcbiAgYWxsUHJvamVjdHNbcHJvamVjdEluZGV4XS5wcm9qZWN0RGV0YWlscy5hbGxUYXNrc1t0YXNrSW5kZXhdLmR1ZURhdGUgPVxuICAgIG5ld0luZm8uZGF0ZTtcbiAgYWxsUHJvamVjdHNbcHJvamVjdEluZGV4XS5wcm9qZWN0RGV0YWlscy5hbGxUYXNrc1t0YXNrSW5kZXhdLnByaW9yaXR5TGlzdCA9XG4gICAgbmV3SW5mby5wcmlvcml0eUxpc3Q7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2sobmFtZVByb2osIHRzaywgZGVzY3JwLCBkdGUsIHByTGlzdCkge1xuICBjb25zdCBpbmRleCA9IGFsbFByb2plY3RzLmZpbmRJbmRleChcbiAgICAocCkgPT4gcC5wcm9qZWN0RGV0YWlscy5wcm9qZWN0TmFtZSA9PT0gbmFtZVByb2osXG4gICk7XG4gIGFsbFByb2plY3RzW2luZGV4XS5hZGRUYXNrKHRzaywgZGVzY3JwLCBkdGUsIHByTGlzdCk7XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVQcmV2aW91c0RhdGVzKGRhdGUpIHtcbiAgbGV0IGR0VG9kYXkgPSBuZXcgRGF0ZSgpO1xuXG4gIGxldCBtb250aCA9IGR0VG9kYXkuZ2V0TW9udGgoKSArIDE7XG4gIGxldCBkYXkgPSBkdFRvZGF5LmdldERhdGUoKTtcbiAgbGV0IHllYXIgPSBkdFRvZGF5LmdldEZ1bGxZZWFyKCk7XG4gIGlmIChtb250aCA8IDEwKSBtb250aCA9IFwiMFwiICsgbW9udGgudG9TdHJpbmcoKTtcbiAgaWYgKGRheSA8IDEwKSBkYXkgPSBcIjBcIiArIGRheS50b1N0cmluZygpO1xuXG4gIGxldCBtYXhEYXRlID0geWVhciArIFwiLVwiICsgbW9udGggKyBcIi1cIiArIGRheTtcbiAgZGF0ZS5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgbWF4RGF0ZSk7XG59XG5cbmNvbnN0IHRvZGF5QW5kVXBjb21pbmdUYXNrID0gKCkgPT4ge1xuICBjb25zdCB0b2RheURhdGUgPSAoKSA9PiB7XG4gICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgbGV0IG1tID0gU3RyaW5nKHRvZGF5LmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgbGV0IHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuXG4gICAgcmV0dXJuICh0b2RheSA9IHl5eXkgKyBcIi1cIiArIG1tICsgXCItXCIgKyBkZCk7XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheVRvZGF5VGFza3MgPSAoKSA9PlxuICAgIGFsbFByb2plY3RzLmZvckVhY2goKHApID0+XG4gICAgICBwLnByb2plY3REZXRhaWxzLmFsbFRhc2tzLmZvckVhY2goKHQpID0+IHtcbiAgICAgICAgaWYgKHQuZHVlRGF0ZSA9PSB0b2RheURhdGUoKSkge1xuICAgICAgICAgIFVJLnRhc2tEaXNwbGF5KFxuICAgICAgICAgICAgdC50YXNrTmFtZSxcbiAgICAgICAgICAgIHQuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICB0LmR1ZURhdGUsXG4gICAgICAgICAgICB0LnByaW9yaXR5TGlzdCxcbiAgICAgICAgICAgIHQuY2hlY2tCb3gsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgKTtcblxuICBjb25zdCBkaXNwbGF5VXBjb21pbmdUYXNrID0gKCkgPT5cbiAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKChwKSA9PlxuICAgICAgcC5wcm9qZWN0RGV0YWlscy5hbGxUYXNrcy5mb3JFYWNoKCh0KSA9PiB7XG4gICAgICAgIGlmICh0LmR1ZURhdGUgPiB0b2RheURhdGUoKSkge1xuICAgICAgICAgIFVJLnRhc2tEaXNwbGF5KFxuICAgICAgICAgICAgdC50YXNrTmFtZSxcbiAgICAgICAgICAgIHQuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICB0LmR1ZURhdGUsXG4gICAgICAgICAgICB0LnByaW9yaXR5TGlzdCxcbiAgICAgICAgICAgIHQuY2hlY2tCb3gsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgKTtcblxuICByZXR1cm4geyBkaXNwbGF5VG9kYXlUYXNrcywgZGlzcGxheVVwY29taW5nVGFzayB9O1xufTtcblxuZnVuY3Rpb24gZmluZFByb2plY3ROYW1lKG5hbWVPZlRhc2spIHtcbiAgbGV0IG5hbWU7XG4gIGFsbFByb2plY3RzLmZvckVhY2gocCA9PiB7XG4gICAgcC5wcm9qZWN0RGV0YWlscy5hbGxUYXNrcy5mb3JFYWNoKHQgPT4ge1xuICAgICAgaWYgKHQudGFza05hbWUgPT0gbmFtZU9mVGFzaykge1xuICAgICAgICAgbmFtZSA9IHAucHJvamVjdERldGFpbHMucHJvamVjdE5hbWU7XG4gICAgICB9O1xuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IHtcbiAgYWxsUHJvamVjdHMsXG4gIGRpc2FibGVQcmV2aW91c0RhdGVzLFxuICBzdG9yZUNoZWNrQm94LFxuICBzYXZlQ2hlY2tCb3gsXG4gIGNyZWF0ZVRhc2ssXG4gIHByb2plY3QsXG4gIGFkZFByb2plY3QsXG4gIGRlbGV0ZVRhc2ssXG4gIGVkaXRUYXNrLFxuICBzYXZlTmFtZSxcbiAgdG9kYXlBbmRVcGNvbWluZ1Rhc2ssXG4gIGRlbGV0ZVByb2plY3QsXG4gIGZpbmRJbmRleCxcbiAgZmluZFByb2plY3ROYW1lLFxufTtcbiIsImNsYXNzIFB1YnN1YiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudHJhY2tlciA9IHtcbiAgICAgIC8vIGtleTogZXZlbnRuYW1lLCB2YWx1ZTogWyBmdW5jcyBdXG4gICAgfTtcbiAgfVxuXG4gIHN1YnNjcmliZShldmVudE5hbWUsIGZ1bmMpIHtcbiAgICBpZiAodGhpcy50cmFja2VyW2V2ZW50TmFtZV0pIHtcbiAgICAgIHRoaXMudHJhY2tlcltldmVudE5hbWVdLnB1c2goZnVuYyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudHJhY2tlcltldmVudE5hbWVdID0gW2Z1bmNdO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdW5zdWJzY3JpYmU6ICgpID0+IHtcbiAgICAgICAgY29uc3QgZnVuY3MgPSB0aGlzLnRyYWNrZXJbZXZlbnROYW1lXTtcbiAgICAgICAgY29uc3QgaWR4ID0gZnVuY3MuaW5kZXhPZihmdW5jKTtcbiAgICAgICAgaWYgKGlkeCA+IC0xKSB7XG4gICAgICAgICAgZnVuY3Muc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHB1Ymxpc2goZXZlbnROYW1lLCAuLi5hcmdzKSB7XG4gICAgY29uc3QgZnVuY3MgPSB0aGlzLnRyYWNrZXJbZXZlbnROYW1lXTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShmdW5jcykpIHtcbiAgICAgIGZ1bmNzLmZvckVhY2goKGZ1bmMpID0+IHtcbiAgICAgICAgZnVuYy5hcHBseShudWxsLCBhcmdzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBwdWJzdWIgPSBuZXcgUHVic3ViKCk7XG5cbmV4cG9ydCB7IHB1YnN1YiB9O1xuIiwiaW1wb3J0IHsgYWxsUHJvamVjdHMsIGFkZFByb2plY3QgfSBmcm9tIFwiLi9sb2dpY1wiO1xuaW1wb3J0IHsgVUkgfSBmcm9tIFwiLi9ET01cIjtcbmltcG9ydCB7IHNhdmVEYXRhIH0gZnJvbSBcIi4vbG9jYWwtc3RvcmFnZVwiO1xuXG5mdW5jdGlvbiByZW5kZXJUdGxlQnRuKHByb2plY3REYXRhKSB7XG4gIHByb2plY3REYXRhLmZvckVhY2goKHApID0+IHtcbiAgICBhZGRQcm9qZWN0KHAucHJvamVjdERldGFpbHMucHJvamVjdE5hbWUpO1xuICAgIFVJLm1ha2VQcm9qZWN0QnRuKHAucHJvamVjdERldGFpbHMucHJvamVjdE5hbWUpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVGFza0Rpc3BsYXkocHJvamVjdERhdGEpIHtcbiAgcHJvamVjdERhdGEuZm9yRWFjaCgocCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IGFsbFByb2plY3RzLmZpbmRJbmRleChcbiAgICAgIChwcm9qZWN0KSA9PlxuICAgICAgICBwcm9qZWN0LnByb2plY3REZXRhaWxzLnByb2plY3ROYW1lID09PSBwLnByb2plY3REZXRhaWxzLnByb2plY3ROYW1lLFxuICAgICk7XG4gICAgaWYgKHAucHJvamVjdERldGFpbHMuYWxsVGFza3MubGVuZ3RoICE9PSAwKSB7XG4gICAgICBwLnByb2plY3REZXRhaWxzLmFsbFRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgYWxsUHJvamVjdHNbcHJvamVjdEluZGV4XS5hZGRUYXNrKFxuICAgICAgICAgIHRhc2sudGFza05hbWUsXG4gICAgICAgICAgdGFzay5kZXNjcmlwdGlvbixcbiAgICAgICAgICB0YXNrLmR1ZURhdGUsXG4gICAgICAgICAgdGFzay5wcmlvcml0eUxpc3QsXG4gICAgICAgICAgdGFzay5jaGVja0JveCxcbiAgICAgICAgKTtcbiAgICAgICAgc2F2ZURhdGEoKTtcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coYWxsUHJvamVjdHMpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclNhdmVkRGF0YSgpIHtcbiAgY29uc3QgYWxsUHJvamVjdERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWxsUHJvamVjdERhdGFcIikpO1xuICBpZiAobG9jYWxTdG9yYWdlLmxlbmd0aCAhPT0gMCkge1xuICAgIGlmIChhbGxQcm9qZWN0cy5sZW5ndGggPT0gMCkge1xuICAgICAgcmVuZGVyVHRsZUJ0bihhbGxQcm9qZWN0RGF0YSk7XG4gICAgICByZW5kZXJUYXNrRGlzcGxheShhbGxQcm9qZWN0RGF0YSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IHJlbmRlclR0bGVCdG4sIHJlbmRlclRhc2tEaXNwbGF5LCByZW5kZXJTYXZlZERhdGEgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBVSSB9IGZyb20gXCIuL0RPTVwiO1xuaW1wb3J0IHsgdG9kYXlBbmRVcGNvbWluZ1Rhc2t9IGZyb20gXCIuL2xvZ2ljXCI7XG5pbXBvcnQgeyBET01FdmVudHMgfSBmcm9tIFwiLi9ET01fZXZlbnRzLmpzXCI7XG5pbXBvcnQgeyByZW5kZXJTYXZlZERhdGEgfSBmcm9tIFwiLi9yZW5kZXJTdG9yYWdlXCI7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIHJlbmRlclNhdmVkRGF0YSgpO1xuICBVSS5lbXB0eVRvRG9QYWdlKCk7XG4gIFVJLmhlYWRlckRpc3BsYXkoXCJUT0RBWVwiKTtcbiAgdG9kYXlBbmRVcGNvbWluZ1Rhc2soKS5kaXNwbGF5VG9kYXlUYXNrcygpO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgRE9NRXZlbnRzKCk7XG59KTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9