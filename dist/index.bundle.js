/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
      /*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js",
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js",
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          );
        // Imports

        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          `* {
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





`,
          "",
          {
            version: 3,
            sources: ["webpack://./src/style.css"],
            names: [],
            mappings:
              "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",
            sourcesContent: [
              '* {\n    margin: 0;\n    padding: 0;\n}\n\n#headline {\n    display: inline-block;\n    grid-column: span 2;\n    background-color: #92C1B2;\n    color: aliceblue;\n    font-weight: bolder;\n    font-size: 4rem;\n    letter-spacing: 10px;\n    overflow: hidden;\n}\n\n#todo-list-icon {\n    margin-right: 2rem;\n}\n\n#text {\n    padding-top: 1.4rem;\n    padding-left: 23rem;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: 1.5fr 4fr;\n    grid-template-rows: 0.6fr 4fr;\n    height: 100vh;\n    width: 100vw;\n    position: relative;\n}\n\n.todo-list-container {\n    display: grid;\n    grid-template-columns: 1.3fr 4fr;\n    width: 100vw;\n}\n\n.main {\n    background-color: #bdd6d6;\n    overflow:hidden;\n}\n\n.title-add-project {\n    display: flex;\n    outline-style: solid;\n    color: turquoise;\n}\n\n.all-projects {\n    display: flex;\n    flex-direction: column;\n}\n\n.header {\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  position: relative;\n}\n\n.newProjectTitle,\n.btn-containers {\n    display: flex;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n};\n\n.task-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.side-bar {\n    display: flex;\n    flex-direction: column;\n}\n\n.project-btn-container {\n    display: grid;\n    grid-template-columns: 3fr 1fr;\n}\n\n.today,\n.upcoming,\n.show-projects-container {\n    display: grid;\n    grid-template-columns: 0.7fr 3fr;\n    font-size: 2rem;\n    padding-top: 0.8rem;\n    padding-bottom: 0.8rem;\n    letter-spacing: 0.3rem;\n    background-color: white;\n    border-color: #92C1B2;\n    border-style: solid;\n    color: #92C1B2;\n    font-weight: bolder;\n}\n\n.today:hover,\n.upcoming:hover,\n.all-projects > button:hover {\n    background: #6eb49f;\n    opacity: 50%;\n    color: white;\n}\n\n.upcoming {\n    border-top: none;\n}\n\n.today > div,\n.upcoming > div {\n    justify-self: left;\n    padding-left: 2rem;\n}\n\n.show-projects-container {\n    grid-template-columns: 1fr 1.9fr 1fr;\n    border-top: none;\n}\n\n#projects-btn {\n    font-size: 2rem;\n    letter-spacing: 0.3rem;\n    display: inline-block;\n    background-color: white;\n    text-align: left;\n    font-weight: bolder;\n    color: #92C1B2;\n    border-style: none;\n}\n\n.drop-down-btn {\n    background-color: white;\n    border-style: none;\n}\n\n#projects-icon {\n    padding-right: 1.9rem;\n}\n\n.all-projects {\n    display: flex;\n    flex-direction: column;\n    gap: 0.9px;\n    width: 50%;\n    height: 40%;\n    padding-left: 8rem;\n    padding-top: 2rem;\n}\n\n.all-projects > button {\n    height: 2.7rem;\n    font-size: 1.5rem;\n    background-color: white;\n    border-color: #92C1B2;\n    border-style: solid;\n    color: #92C1B2;\n    font-weight: bolder;\n}\n\n.sidebar-icons {\n    justify-self: end;\n}\n\n.input-project {\n    padding-top: 4rem;\n    align-self: center;\n}\n\n.input-project > div {\n    display: grid;\n    grid-template-columns: 10fr 1.5fr;\n    height: 3rem;\n}\n\n#get-project-title {\n    background: #EFEFEF;\n    border-style: solid;\n    border-color: #92C1B2;\n    font-size: 1.5rem;\n}\n\n.add-project-btn {\n    background-color: #92C1B2;\n    border-style: none;\n}\n\n.delete-project-btn {\n    margin-top: 1rem;\n    text-align: center;\n    width: 100%;\n    height: 2.5rem;\n    font-size: larger;\n    letter-spacing: 0.2rem;\n    background-color: #92C1B2;\n    font-weight: bolder;\n    color: white;\n    border-style: none;\n}\n\n.delete-project-btn:hover {\n    border-style: solid;\n    border-color: #6eb49f;\n    background-color: white;\n    color: #6eb49f;\n}\n\n.project-title {\n    padding-top: 1rem;\n    padding-bottom: 3rem;\n    font-size: 3.5rem;\n    font-weight: bolder;\n    color: white;\n    letter-spacing: 10px;\n}\n\n#add-task-btn {\n    display: grid;\n    grid-template-columns: 2fr 3.5fr;\n    width: 20%;\n    padding: 1.2rem 1.3rem 1.2rem 1.3rem;\n    font-size: 1rem;\n    letter-spacing: 5px;\n    background-color: #6eb49f;\n    color: white;\n    font-weight: bold;\n    border-radius: 4vw;\n    border-style: none;\n    margin-left: 3rem;\n}\n\n#add-task-btn > div {\n    align-self:center;\n    justify-self: left;\n}\n\n#add-task-btn > img {\n    align-self: center;\n    justify-self: center;\n}\n\n#add-task-btn:hover {\n    background-color: #78C4AD;\n}\n\n.change-name-container {\n    padding-top: 2.5rem;\n}\n\n#new-project-title {\n    height: 3.5rem;\n    width: 24rem;\n    font-size: 2.5rem;\n    letter-spacing: 0.5rem;\n    background-color: #6eb49f;\n    color: white;\n    border-style: none;\n    border-radius: 0.2vw;\n}\n\n.btn-containers {\n    padding-top: 1rem;\n}\n\n#save-btn,\n#cancel-btn {\n    padding: 0.5rem 0.7rem 0.5rem 0.7rem;\n    font-weight: bold;\n    color: white;\n    letter-spacing: 3px;\n    border-radius:0.5vw;\n}\n\n#save-btn {\n    margin-right: 1.5rem;\n    background-color: #8ED0DE;\n    border-style: none;\n}\n\n#cancel-btn {\n    background-color: #92C1B2;\n    border-style: none;\n}\n\n#save-btn:hover,\n#cancel-btn:hover {\n    border-style: solid;\n    border-color: white;\n}\n\n.task-form {\n    display: flex;\n    position: absolute;\n    flex-direction: column;\n    padding: 3rem;\n    justify-content: space-between;\n    position: absolute;\n    height: 13rem;\n    width: 45%;\n    left: 30%;\n    margin-left: -50px;\n    top: 30%;\n    margin-top: -50px;\n    background: white;\n    z-index: 1;\n}\n\n.task-form > input,\n.task-form > select {\n    background-color: #6eb49f;\n    color: white;\n    height: 2rem;\n    border-style: none;\n    border-radius: 0.3vw;\n}\n\ntextarea {\n    background-color: #6eb49f;\n    border-radius: 0.3vw;\n}\n\n#cancel-task-btn,\n#submit-task-btn,\n#save-task-btn {\n    padding: 0.5rem 0.7rem 0.5rem 0.7rem;\n    font-weight: bolder;\n}\n\n#submit-task-btn:hover,\n#save-task-btn:hover {\n    background-color: #75D7BA;\n}\n\n#cancel-task-btn:hover {\n    background-color: #6eb49f;\n    color: white;\n    border-radius: 0.3vw;  \n    border-style: none; \n}\n\n#submit-task-btn,\n#save-task-btn {\n    background-color: #6eb49f;\n    color: white;\n    border-radius: 0.3vw;  \n    border-style: none; \n}\n\n#cancel-task-btn {\n    margin-left: 1rem;\n    color: #6eb49f;\n    background-color: white;\n    border-style: solid;\n    border-color: #6eb49f;\n    border-radius: 0.3vw; \n}\n\n.task-container-display {\n    height: 9%;\n}\n\n.task-background {\n    background-color: white;\n    width: 80%;\n    height: 100%;\n    margin-left: 3.8rem;\n    display: grid;\n    grid-template-columns: 0.7fr 4fr 1fr 0.7fr ;\n    justify-content: center;\n    align-items: center;\n}\n\n.task-background > input[type="checkbox"] {\n    align-self: center;\n    justify-self: center;\n    appearance: none;\n    margin: 0;\n    font: inherit;\n    width: 2.15em;\n    border-color: #6eb49f;\n    border-style: solid;\n    height: 2.15em;\n    border-radius: 0.15em;\n    transform: translateY(-0.075em);\n    display: grid;\n    place-content: center;    \n    border-radius: 3vw;\n}\n\n.task-background > input[type="checkbox"]:checked {\n    content: "";\n    width: 0.65em;\n    height: 0.65em;\n    transform: scale(3);\n    background-color: #6eb49f !important;\n    transition: 120ms transform ease-in-out;\n}\n\n.todo-list {\n    display: flex;\n    flex-direction: column;   \n    height: 100%;\n    gap: 1rem;\n}\n\n.taskBtns {\n    display: flex;\n    flex-direction: column;\n    justify-self: center;\n    align-self: center;\n    background-color: none;\n    gap: 4px;\n}\n\n.taskBtns > button {\n    background-color: white;\n    border-style: none;\n}\n\n.taskBtns > button:hover {\n    background: whitesmoke;\n} \n\n#date-display {\n    font-weight: bolder;\n    font-size: 1.6rem;\n}\n\n#blur   {\n    filter: blur(5px);\n    -webkit-filter: blur(5px);\n    -moz-filter: blur(5px);\n    -o-filter: blur(5px);\n    -ms-filter: blur(5px);\n}\n\n#overlay    {\n    position: fixed;\n    display: none;\n    left: 0px;\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    background: rgba(255,255,255,.8);\n    z-index: 999;\n}\n\n\n\n\n\n',
            ],
            sourceRoot: "",
          },
        ]);
        // Exports
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
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
                content += "@layer".concat(
                  item[5].length > 0 ? " ".concat(item[5]) : "",
                  " {",
                );
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
                  item[1] = "@layer"
                    .concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {")
                    .concat(item[1], "}");
                  item[5] = layer;
                }
              }
              if (media) {
                if (!item[2]) {
                  item[2] = media;
                } else {
                  item[1] = "@media "
                    .concat(item[2], " {")
                    .concat(item[1], "}");
                  item[2] = media;
                }
              }
              if (supports) {
                if (!item[4]) {
                  item[4] = "".concat(supports);
                } else {
                  item[1] = "@supports ("
                    .concat(item[4], ") {")
                    .concat(item[1], "}");
                  item[4] = supports;
                }
              }
              list.push(item);
            }
          };
          return list;
        };

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
      /*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
      /***/ (module) => {
        module.exports = function (item) {
          var content = item[1];
          var cssMapping = item[3];
          if (!cssMapping) {
            return content;
          }
          if (typeof btoa === "function") {
            var base64 = btoa(
              unescape(encodeURIComponent(JSON.stringify(cssMapping))),
            );
            var data =
              "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                base64,
              );
            var sourceMapping = "/*# ".concat(data, " */");
            return [content].concat([sourceMapping]).join("\n");
          }
          return [content].join("\n");
        };

        /***/
      },

    /***/ "./src/style.css":
      /*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js",
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js",
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js",
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js",
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js",
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js",
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__,
          );
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css",
          );

        var options = {};

        options.styleTagTransform =
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
        options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

        options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            "head",
          );

        options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
        options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

        var update =
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
            _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
              "default"
            ],
            options,
          );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ] &&
          _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ].locals
            ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
                "default"
              ].locals
            : undefined;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
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
              layer: item[5],
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
                references: 1,
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
              if (
                newObj.css === obj.css &&
                newObj.media === obj.media &&
                newObj.sourceMap === obj.sourceMap &&
                newObj.supports === obj.supports &&
                newObj.layer === obj.layer
              ) {
                return;
              }
              api.update((obj = newObj));
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

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        var memo = {};

        /* istanbul ignore next  */
        function getTarget(target) {
          if (typeof memo[target] === "undefined") {
            var styleTarget = document.querySelector(target);

            // Special case to return head of iframe instead of iframe itself
            if (
              window.HTMLIFrameElement &&
              styleTarget instanceof window.HTMLIFrameElement
            ) {
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
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          }
          target.appendChild(style);
        }
        module.exports = insertBySelector;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        /* istanbul ignore next  */
        function insertStyleElement(options) {
          var element = document.createElement("style");
          options.setAttributes(element, options.attributes);
          options.insert(element, options.options);
          return element;
        }
        module.exports = insertStyleElement;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        /* istanbul ignore next  */
        function setAttributesWithoutAttributes(styleElement) {
          var nonce = true ? __webpack_require__.nc : 0;
          if (nonce) {
            styleElement.setAttribute("nonce", nonce);
          }
        }
        module.exports = setAttributesWithoutAttributes;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
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
            css += "@layer".concat(
              obj.layer.length > 0 ? " ".concat(obj.layer) : "",
              " {",
            );
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
            css +=
              "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),
                " */",
              );
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
              remove: function remove() {},
            };
          }
          var styleElement = options.insertStyleElement(options);
          return {
            update: function update(obj) {
              apply(styleElement, options, obj);
            },
            remove: function remove() {
              removeStyleElement(styleElement);
            },
          };
        }
        module.exports = domAPI;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
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

        /***/
      },

    /***/ "./src/DOM.js":
      /*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ UI: () => /* binding */ UI,
          /* harmony export */ getNewTtle: () => /* binding */ getNewTtle,
          /* harmony export */ getProjName: () => /* binding */ getProjName,
          /* harmony export */ getProjTitle: () => /* binding */ getProjTitle,
          /* harmony export */ getTaskInfo: () => /* binding */ getTaskInfo,
          /* harmony export */
        });
        /* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./logic */ "./src/logic.js");

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
          const priorityList =
            document.getElementById("get-priority-list").value;

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
            const projectIndex =
              _logic__WEBPACK_IMPORTED_MODULE_0__.findIndex.projectIndex();
            _logic__WEBPACK_IMPORTED_MODULE_0__.allProjects[
              projectIndex
            ].projectDetails.allTasks.forEach((task) => {
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
            addIconImg.setAttribute(
              "src",
              "/src/icons/material-symbols_add.svg",
            );
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
            (0, _logic__WEBPACK_IMPORTED_MODULE_0__.disablePreviousDates)(date);

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
            const todoListContainer = document.querySelector(
              ".todo-list-container",
            );
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

          function replaceBtns() {
            const submitTaskBtn = document.getElementById("submit-task-btn");
            const saveTaskBtn = createSaveBtn();
            saveTaskBtn.setAttribute("id", "save-task-btn");
            submitTaskBtn.replaceWith(saveTaskBtn);
          }

          function currentTaskInfo(nameOfTask, targetProjectName) {
            const projectIndex =
              _logic__WEBPACK_IMPORTED_MODULE_0__.allProjects.findIndex(
                (p) => p.projectDetails.projectName === targetProjectName,
              );
            const taskIndex = _logic__WEBPACK_IMPORTED_MODULE_0__.allProjects[
              projectIndex
            ].projectDetails.allTasks.findIndex(
              (p) => p.taskName === nameOfTask,
            );
            const name =
              _logic__WEBPACK_IMPORTED_MODULE_0__.allProjects[projectIndex]
                .projectDetails.allTasks[taskIndex].taskName;
            const details =
              _logic__WEBPACK_IMPORTED_MODULE_0__.allProjects[projectIndex]
                .projectDetails.allTasks[taskIndex].description;
            const dueDate =
              _logic__WEBPACK_IMPORTED_MODULE_0__.allProjects[projectIndex]
                .projectDetails.allTasks[taskIndex].dueDate;
            const priority =
              _logic__WEBPACK_IMPORTED_MODULE_0__.allProjects[projectIndex]
                .projectDetails.allTasks[taskIndex].priorityList;
            const getTask = document.getElementById("get-task-name");
            const getDescription = document.getElementById("get-description");
            const getDate = document.getElementById("get-date");
            const getPriorityList =
              document.getElementById("get-priority-list");
            getTask.value = name;
            getDescription.value = details;
            getDate.value = dueDate;
            getPriorityList.value = priority;
          }

          function removeDataNameAttribute(nameOfTask) {
            const projectIndex =
              _logic__WEBPACK_IMPORTED_MODULE_0__.findIndex.projectIndex();
            const taskIndex =
              _logic__WEBPACK_IMPORTED_MODULE_0__.findIndex.taskIndex(
                nameOfTask,
              );
            const currentTaskName =
              _logic__WEBPACK_IMPORTED_MODULE_0__.allProjects[projectIndex]
                .projectDetails.allTasks[taskIndex].taskName;
            const dataAttribute = document.querySelector(
              `[data-name='${currentTaskName}']`,
            );
            dataAttribute.remove();
          }

          function removeTaskForm() {
            const taskForm = document.querySelector(".task-form");
            taskForm.remove();
          }

          function deleteTaskDisplay(nameOfTask) {
            removeDataNameAttribute(nameOfTask);
            (0, _logic__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(nameOfTask);
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
            const ChangeNamebtn = document.getElementById(
              `${currentProj}-project-btn`,
            );
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
          };
        })();

        /***/
      },

    /***/ "./src/DOM_events.js":
      /*!***************************!*\
  !*** ./src/DOM_events.js ***!
  \***************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ DOMEvents: () => /* binding */ DOMEvents,
          /* harmony export */
        });
        /* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./DOM */ "./src/DOM.js");
        /* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./logic */ "./src/logic.js");
        /* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./local-storage */ "./src/local-storage.js");
        /* harmony import */ var _pubsub_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ./pubsub.js */ "./src/pubsub.js");

        _pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.subscribe(
          "addProj",
          _logic__WEBPACK_IMPORTED_MODULE_1__.addProject,
        );
        _pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.subscribe(
          "dleteProj",
          _logic__WEBPACK_IMPORTED_MODULE_1__.deleteProject,
        );
        _pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.subscribe(
          "saveName",
          _logic__WEBPACK_IMPORTED_MODULE_1__.saveName,
        );
        _pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.subscribe(
          "saveData",
          _local_storage__WEBPACK_IMPORTED_MODULE_2__.saveData,
        );
        _pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.subscribe(
          "createTask",
          _logic__WEBPACK_IMPORTED_MODULE_1__.createTask,
        );
        _pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.subscribe(
          "editTask",
          _logic__WEBPACK_IMPORTED_MODULE_1__.editTask,
        );
        _pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.subscribe(
          "saveBox",
          _logic__WEBPACK_IMPORTED_MODULE_1__.saveCheckBox,
        );

        const DOMEvents = () => {
          const d = document;
          let currentProj;
          let task;
          let newInfo;
          let btn;
          d.addEventListener("click", (e) => {
            if (
              e.target.matches(".add-project-btn") ||
              e.target.matches("#add-icon")
            ) {
              const getProjTitle = (0,
              _DOM__WEBPACK_IMPORTED_MODULE_0__.getProjName)();
              _pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.publish(
                "addProj",
                getProjTitle.value,
              );
              _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.makeProjectBtn(
                getProjTitle.value,
              );
              getProjTitle.value = "";
              console.log(_logic__WEBPACK_IMPORTED_MODULE_1__.allProjects);
            }
            if (e.target.matches(".delete-project-btn")) {
              _pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.publish(
                "dleteProj",
              );
              _pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.publish(
                "saveData",
              );
              _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.removeProjectBtn();
              _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.emptyToDoPage();
            }
            if (e.target.matches(`.project-btn`)) {
              if (btn != null) {
                btn.style.color = "#92C1B2";
                btn.style.backgroundColor = "white";
              }
              btn = document.getElementById(
                `${e.target.textContent}-project-btn`,
              );
              btn.style.color = "white";
              btn.style.backgroundColor = "#92C1B2";
              _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.headerDisplay(
                e.target.textContent,
              );
              _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.emptyToDoList();
              _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.renderSavedTask();
              _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.makeAddTaskBtn();
            }
            if (e.target.matches(".add-task-btn")) {
              e.preventDefault();
              _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.taskForm(
                (0, _DOM__WEBPACK_IMPORTED_MODULE_0__.getProjTitle)(),
              );
            }
            if (e.target.matches(".project-title")) {
              _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.changeProjName(
                e.target.textContent,
              );
              currentProj = e.target.textContent;
            }
            if (e.target.matches("#save-btn")) {
              _pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.publish(
                "saveName",
                currentProj,
              );
              _pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.publish(
                "saveData",
              );
              _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.newTtleBtn(currentProj);
              _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.headerDisplay(
                (0, _DOM__WEBPACK_IMPORTED_MODULE_0__.getNewTtle)().value,
              );
            }
            if (e.target.matches("#cancel-btn")) {
              _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.headerDisplay(currentProj);
            }
            if (e.target.matches("#submit-task-btn")) {
              e.preventDefault();
              _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.removeBlurAttribute();
              let projTitle = (0,
              _DOM__WEBPACK_IMPORTED_MODULE_0__.getProjTitle)();
              newInfo = (0, _DOM__WEBPACK_IMPORTED_MODULE_0__.getTaskInfo)();
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
              _pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.publish(
                "saveData",
                _local_storage__WEBPACK_IMPORTED_MODULE_2__.saveData,
              );
              _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.removeTaskForm();
            }
            if (e.target.matches("#cancel-task-btn")) {
              e.preventDefault();
              _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.removeBlurAttribute();
              _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.removeTaskForm();
              _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.headerDisplay(
                (0, _DOM__WEBPACK_IMPORTED_MODULE_0__.getProjTitle)(),
              );
            }
            if (
              e.target.matches("#delete-task") ||
              e.target.matches("#delete-icon")
            ) {
              e.preventDefault();
              _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.deleteTaskDisplay(
                e.target.getAttribute("data-name"),
              );
            }
            if (
              e.target.matches("#edit-task") ||
              e.target.matches("#edit-icon")
            ) {
              e.preventDefault();
              task = e.target.getAttribute("data-name");
              _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.taskForm();
              _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.currentTaskInfo(
                task,
                e.target.getAttribute("data-project-name"),
              );
              _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.createSaveBtn();
              _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.replaceBtns(task);
            }
            if (e.target.matches("#save-task-btn")) {
              e.preventDefault();
              _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.removeBlurAttribute();
              _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.removeDataNameAttribute(
                task,
              );
              _pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.publish(
                "editTask",
                task,
              );
              _pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.publish(
                "saveData",
              );
              newInfo = (0, _DOM__WEBPACK_IMPORTED_MODULE_0__.getTaskInfo)();
              _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.taskDisplay(
                newInfo.task,
                newInfo.description,
                newInfo.date,
                newInfo.priorityList,
              );
              _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.removeTaskForm();
              _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.updateUITaskBtn();
            }
            if (e.target.matches(".today") || e.target.textContent == "Today") {
              _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.emptyToDoPage();
              _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.headerDisplay("TODAY");
              (0,
              _logic__WEBPACK_IMPORTED_MODULE_1__.todayAndUpcomingTask)().displayTodayTasks();
            }
            if (
              e.target.matches(".upcoming") ||
              e.target.textContent == "Upcoming"
            ) {
              _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.emptyToDoPage();
              _DOM__WEBPACK_IMPORTED_MODULE_0__.UI.headerDisplay("UPCOMING");
              (0,
              _logic__WEBPACK_IMPORTED_MODULE_1__.todayAndUpcomingTask)().displayUpcomingTask();
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
              _pubsub_js__WEBPACK_IMPORTED_MODULE_3__.pubsub.publish(
                "saveData",
              );
            }
          });
        };

        /***/
      },

    /***/ "./src/local-storage.js":
      /*!******************************!*\
  !*** ./src/local-storage.js ***!
  \******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ saveData: () => /* binding */ saveData,
          /* harmony export */
        });
        /* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./logic */ "./src/logic.js");

        function saveData() {
          localStorage.setItem(
            "allProjectData",
            JSON.stringify(_logic__WEBPACK_IMPORTED_MODULE_0__.allProjects),
          );
          JSON.parse(localStorage.getItem("allProjectData"));
        }

        /***/
      },

    /***/ "./src/logic.js":
      /*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ addProject: () => /* binding */ addProject,
          /* harmony export */ allProjects: () => /* binding */ allProjects,
          /* harmony export */ createTask: () => /* binding */ createTask,
          /* harmony export */ deleteProject: () => /* binding */ deleteProject,
          /* harmony export */ deleteTask: () => /* binding */ deleteTask,
          /* harmony export */ disablePreviousDates: () =>
            /* binding */ disablePreviousDates,
          /* harmony export */ editTask: () => /* binding */ editTask,
          /* harmony export */ findIndex: () => /* binding */ findIndex,
          /* harmony export */ project: () => /* binding */ project,
          /* harmony export */ saveCheckBox: () => /* binding */ saveCheckBox,
          /* harmony export */ saveName: () => /* binding */ saveName,
          /* harmony export */ storeCheckBox: () => /* binding */ storeCheckBox,
          /* harmony export */ todayAndUpcomingTask: () =>
            /* binding */ todayAndUpcomingTask,
          /* harmony export */
        });
        /* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");
        /* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./local-storage.js */ "./src/local-storage.js",
          );

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
            const taskDetails = new task(
              name,
              details,
              date,
              priorityList,
              check,
            );

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
          const nameOfProject =
            document.querySelector(".project-title").textContent;
          const projectIndex = allProjects.findIndex(
            (p) => p.projectDetails.projectName === nameOfProject,
          );
          const taskIndex = allProjects[
            projectIndex
          ].projectDetails.allTasks.findIndex((p) => p.taskName === nameOfTask);

          function check() {
            allProjects[projectIndex].projectDetails.allTasks[
              taskIndex
            ].checkBox = "checked";
          }

          function unchecked() {
            allProjects[projectIndex].projectDetails.allTasks[
              taskIndex
            ].checkBox = "unchecked";
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
          (0, _local_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveData)();
        }

        function deleteProject() {
          const index = findIndex.projectIndex();
          project.deleteProject(index);
        }

        const findIndex = (() => {
          const projectIndex = () => {
            const name = (0,
            _DOM_js__WEBPACK_IMPORTED_MODULE_0__.getProjTitle)();
            const index = allProjects.findIndex(
              (p) => p.projectDetails.projectName === name,
            );
            return index;
          };

          const taskIndex = (nameTask) =>
            allProjects[projectIndex()].projectDetails.allTasks.findIndex(
              (p) => p.taskName === nameTask,
            );

          return { projectIndex, taskIndex };
        })();

        function deleteTask(nameTask) {
          const projIndex = findIndex.projectIndex();
          const taskIndex = findIndex.taskIndex(nameTask);
          allProjects[projIndex].deleteTask(taskIndex);
          (0, _local_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveData)();
        }

        function saveName(currentProj) {
          const newTitle = (0,
          _DOM_js__WEBPACK_IMPORTED_MODULE_0__.getNewTtle)();
          const index = allProjects.findIndex(
            (p) => p.projectDetails.projectName === currentProj,
          );
          project.editProjectName(index, newTitle.value);
          project.viewProjects();
        }

        function editTask(nameTask) {
          const projectIndex = findIndex.projectIndex();
          const taskIndex = findIndex.taskIndex(nameTask);
          const newInfo = (0,
          _DOM_js__WEBPACK_IMPORTED_MODULE_0__.getTaskInfo)();
          allProjects[projectIndex].projectDetails.allTasks[
            taskIndex
          ].taskName = newInfo.task;
          allProjects[projectIndex].projectDetails.allTasks[
            taskIndex
          ].description = newInfo.description;
          allProjects[projectIndex].projectDetails.allTasks[taskIndex].dueDate =
            newInfo.date;
          allProjects[projectIndex].projectDetails.allTasks[
            taskIndex
          ].priorityList = newInfo.priorityList;
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

        /***/
      },

    /***/ "./src/pubsub.js":
      /*!***********************!*\
  !*** ./src/pubsub.js ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ pubsub: () => /* binding */ pubsub,
          /* harmony export */
        });
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

        /***/
      },

    /***/ "./src/renderStorage.js":
      /*!******************************!*\
  !*** ./src/renderStorage.js ***!
  \******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ renderSavedData: () =>
            /* binding */ renderSavedData,
          /* harmony export */ renderTaskDisplay: () =>
            /* binding */ renderTaskDisplay,
          /* harmony export */ renderTtleBtn: () => /* binding */ renderTtleBtn,
          /* harmony export */
        });
        /* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./logic */ "./src/logic.js");
        /* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./DOM */ "./src/DOM.js");
        /* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./local-storage */ "./src/local-storage.js");

        function renderTtleBtn(projectData) {
          projectData.forEach((p) => {
            (0, _logic__WEBPACK_IMPORTED_MODULE_0__.addProject)(
              p.projectDetails.projectName,
            );
            _DOM__WEBPACK_IMPORTED_MODULE_1__.UI.makeProjectBtn(
              p.projectDetails.projectName,
            );
          });
        }

        function renderTaskDisplay(projectData) {
          projectData.forEach((p) => {
            const projectIndex =
              _logic__WEBPACK_IMPORTED_MODULE_0__.allProjects.findIndex(
                (project) =>
                  project.projectDetails.projectName ===
                  p.projectDetails.projectName,
              );
            if (p.projectDetails.allTasks.length !== 0) {
              p.projectDetails.allTasks.forEach((task) => {
                _logic__WEBPACK_IMPORTED_MODULE_0__.allProjects[
                  projectIndex
                ].addTask(
                  task.taskName,
                  task.description,
                  task.dueDate,
                  task.priorityList,
                  task.checkBox,
                );
                (0, _local_storage__WEBPACK_IMPORTED_MODULE_2__.saveData)();
              });
              console.log(_logic__WEBPACK_IMPORTED_MODULE_0__.allProjects);
            }
          });
        }

        function renderSavedData() {
          const allProjectData = JSON.parse(
            localStorage.getItem("allProjectData"),
          );
          if (localStorage.length !== 0) {
            if (_logic__WEBPACK_IMPORTED_MODULE_0__.allProjects.length == 0) {
              renderTtleBtn(allProjectData);
              renderTaskDisplay(allProjectData);
            }
          }
        }

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__,
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(/*! ./style.css */ "./src/style.css");
    /* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(/*! ./DOM */ "./src/DOM.js");
    /* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(/*! ./logic */ "./src/logic.js");
    /* harmony import */ var _DOM_events_js__WEBPACK_IMPORTED_MODULE_3__ =
      __webpack_require__(/*! ./DOM_events.js */ "./src/DOM_events.js");
    /* harmony import */ var _renderStorage__WEBPACK_IMPORTED_MODULE_4__ =
      __webpack_require__(/*! ./renderStorage */ "./src/renderStorage.js");

    window.addEventListener("DOMContentLoaded", () => {
      (0, _renderStorage__WEBPACK_IMPORTED_MODULE_4__.renderSavedData)();
      _DOM__WEBPACK_IMPORTED_MODULE_1__.UI.emptyToDoPage();
      _DOM__WEBPACK_IMPORTED_MODULE_1__.UI.headerDisplay("TODAY");
      (0,
      _logic__WEBPACK_IMPORTED_MODULE_2__.todayAndUpcomingTask)().displayTodayTasks();
    });

    document.addEventListener("DOMContentLoaded", () => {
      (0, _DOM_events_js__WEBPACK_IMPORTED_MODULE_3__.DOMEvents)();
    });
  })();

  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQSxPQUFPLGdGQUFnRixVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFlBQVksS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sT0FBTyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxPQUFPLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE9BQU8sWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLDZDQUFTO0FBQ3RDLFFBQVEsK0NBQVc7QUFDbkI7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDREQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QiwrQ0FBVztBQUN4QywwQkFBMEIsK0NBQVc7QUFDckMscUJBQXFCLCtDQUFXO0FBQ2hDLHdCQUF3QiwrQ0FBVztBQUNuQyx3QkFBd0IsK0NBQVc7QUFDbkMseUJBQXlCLCtDQUFXO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNkNBQVM7QUFDdEMsMEJBQTBCLDZDQUFTO0FBQ25DLGdDQUFnQywrQ0FBVztBQUMzQyxvRUFBb0UsZ0JBQWdCO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrREFBVTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxZQUFZO0FBQ3JFO0FBQ0EsMkNBQTJDLGVBQWU7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCx5QkFBeUI7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNXOEU7QUFDc0Q7QUFDMUY7QUFDTjs7QUFFckMsOENBQU0sc0JBQXNCLDhDQUFVO0FBQ3RDLDhDQUFNLHVCQUF1QixpREFBYTtBQUMxQyw4Q0FBTSx1QkFBdUIsNENBQVE7QUFDckMsOENBQU0sdUJBQXVCLG9EQUFRO0FBQ3JDLDhDQUFNLHlCQUF5Qiw4Q0FBVTtBQUN6Qyw4Q0FBTSx1QkFBdUIsNENBQVE7QUFDckMsOENBQU0sc0JBQXNCLGdEQUFZOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGlEQUFXO0FBQzVDLFlBQVksOENBQU07QUFDbEIsWUFBWSxvQ0FBRTtBQUNkO0FBQ0Esd0JBQXdCLCtDQUFXO0FBQ25DO0FBQ0E7QUFDQSxZQUFZLDhDQUFNO0FBQ2xCLFlBQVksOENBQU07QUFDbEIsWUFBWSxvQ0FBRTtBQUNkLFlBQVksb0NBQUU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMscUJBQXFCO0FBQ2xFO0FBQ0E7QUFDQSxZQUFZLG9DQUFFO0FBQ2QsWUFBWSxvQ0FBRTtBQUNkLFlBQVksb0NBQUU7QUFDZCxZQUFZLG9DQUFFO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvQ0FBRSxVQUFVLGtEQUFZO0FBQ3BDO0FBQ0E7QUFDQSxZQUFZLG9DQUFFO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsWUFBWSw4Q0FBTTtBQUNsQixZQUFZLDhDQUFNO0FBQ2xCLFlBQVksb0NBQUU7QUFDZCxZQUFZLG9DQUFFLGVBQWUsZ0RBQVU7QUFDdkM7QUFDQTtBQUNBLFlBQVksb0NBQUU7QUFDZDtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9DQUFFO0FBQ2QsNEJBQTRCLGtEQUFZO0FBQ3hDLHNCQUFzQixpREFBVztBQUNqQyxZQUFZLDhDQUFNO0FBQ2xCLFlBQVksb0NBQUU7QUFDZCxZQUFZLG9DQUFFO0FBQ2QsWUFBWSxvQ0FBRTtBQUNkLFlBQVksOENBQU0scUJBQXFCLG9EQUFRO0FBQy9DLFlBQVksb0NBQUU7QUFDZDtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9DQUFFO0FBQ2QsWUFBWSxvQ0FBRTtBQUNkLFlBQVksb0NBQUUsZUFBZSxrREFBWTtBQUN6QztBQUNBO0FBQ0E7QUFDQSxZQUFZLG9DQUFFO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9DQUFFO0FBQ2QsWUFBWSxvQ0FBRTtBQUNkLFlBQVksb0NBQUU7QUFDZCxZQUFZLG9DQUFFO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvQ0FBRTtBQUNkLFlBQVksb0NBQUU7QUFDZCxZQUFZLDhDQUFNO0FBQ2xCLFlBQVksOENBQU07QUFDbEIsc0JBQXNCLGlEQUFXO0FBQ2pDLFlBQVksb0NBQUU7QUFDZCxZQUFZLG9DQUFFO0FBQ2QsWUFBWSxvQ0FBRTtBQUNkO0FBQ0E7QUFDQSxZQUFZLG9DQUFFO0FBQ2QsWUFBWSxvQ0FBRTtBQUNkLFlBQVksNERBQW9CO0FBQ2hDO0FBQ0E7QUFDQSxZQUFZLG9DQUFFO0FBQ2QsWUFBWSxvQ0FBRTtBQUNkLFlBQVksNERBQW9CO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFlBQVksOENBQU07QUFDbEIsWUFBWSw4Q0FBTTtBQUNsQjtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxSHNDOztBQUV0QztBQUNBLDBEQUEwRCwrQ0FBVztBQUNyRTtBQUNBOztBQUVtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQa0Q7QUFDdkI7O0FBRTlDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksMkRBQVE7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLHFEQUFZO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxhQUFhO0FBQ2IsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMkRBQVE7QUFDWjs7QUFFQTtBQUNBLHFCQUFxQixtREFBVTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0RBQVc7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLHVDQUFFO0FBQ2Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1Q0FBRTtBQUNkO0FBQ0EsS0FBSztBQUNMO0FBQ0EsYUFBYTtBQUNiOztBQWdCQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BORDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ2tEO0FBQ3ZCO0FBQ2dCOztBQUUzQztBQUNBO0FBQ0EsUUFBUSxrREFBVTtBQUNsQixRQUFRLG9DQUFFO0FBQ1YsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkIsK0NBQVc7QUFDeEM7QUFDQTtBQUNBLGdCQUFnQiwrQ0FBVztBQUMzQixnQkFBZ0Isd0RBQVE7QUFDeEIsYUFBYTtBQUNiLHdCQUF3QiwrQ0FBVztBQUNuQztBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLCtDQUFXO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTREOzs7Ozs7O1VDbEM1RDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNNO0FBQ29CO0FBQ0o7QUFDTzs7QUFFbEQ7QUFDQSxJQUFJLCtEQUFlO0FBQ25CLElBQUksb0NBQUU7QUFDTixJQUFJLG9DQUFFO0FBQ04sSUFBSSw0REFBb0I7QUFDeEIsQ0FBQzs7QUFFRDtBQUNBLElBQUkseURBQVM7QUFDYixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTV9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvY2FsLXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvZ2ljLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3JlbmRlclN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuI2hlYWRsaW5lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTJDMUIyO1xuICAgIGNvbG9yOiBhbGljZWJsdWU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI3RvZG8tbGlzdC1pY29uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG59XG5cbiN0ZXh0IHtcbiAgICBwYWRkaW5nLXRvcDogMS40cmVtO1xuICAgIHBhZGRpbmctbGVmdDogMjNyZW07XG59XG5cbmJvZHkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjVmciA0ZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjZmciA0ZnI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udG9kby1saXN0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuM2ZyIDRmcjtcbiAgICB3aWR0aDogMTAwdnc7XG59XG5cbi5tYWluIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRkNmQ2O1xuICAgIG92ZXJmbG93OmhpZGRlbjtcbn1cblxuLnRpdGxlLWFkZC1wcm9qZWN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG91dGxpbmUtc3R5bGU6IHNvbGlkO1xuICAgIGNvbG9yOiB0dXJxdW9pc2U7XG59XG5cbi5hbGwtcHJvamVjdHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5uZXdQcm9qZWN0VGl0bGUsXG4uYnRuLWNvbnRhaW5lcnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbmJvZHkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xufTtcblxuLnRhc2stY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zaWRlLWJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucHJvamVjdC1idG4tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjtcbn1cblxuLnRvZGF5LFxuLnVwY29taW5nLFxuLnNob3ctcHJvamVjdHMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC43ZnIgM2ZyO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBwYWRkaW5nLXRvcDogMC44cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjhyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuM3JlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItY29sb3I6ICM5MkMxQjI7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBjb2xvcjogIzkyQzFCMjtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4udG9kYXk6aG92ZXIsXG4udXBjb21pbmc6aG92ZXIsXG4uYWxsLXByb2plY3RzID4gYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNmViNDlmO1xuICAgIG9wYWNpdHk6IDUwJTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi51cGNvbWluZyB7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbn1cblxuLnRvZGF5ID4gZGl2LFxuLnVwY29taW5nID4gZGl2IHtcbiAgICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xufVxuXG4uc2hvdy1wcm9qZWN0cy1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEuOWZyIDFmcjtcbiAgICBib3JkZXItdG9wOiBub25lO1xufVxuXG4jcHJvamVjdHMtYnRuIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuM3JlbTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGNvbG9yOiAjOTJDMUIyO1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuLmRyb3AtZG93bi1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuI3Byb2plY3RzLWljb24ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuOXJlbTtcbn1cblxuLmFsbC1wcm9qZWN0cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMC45cHg7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDhyZW07XG4gICAgcGFkZGluZy10b3A6IDJyZW07XG59XG5cbi5hbGwtcHJvamVjdHMgPiBidXR0b24ge1xuICAgIGhlaWdodDogMi43cmVtO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1jb2xvcjogIzkyQzFCMjtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGNvbG9yOiAjOTJDMUIyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi5zaWRlYmFyLWljb25zIHtcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbn1cblxuLmlucHV0LXByb2plY3Qge1xuICAgIHBhZGRpbmctdG9wOiA0cmVtO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmlucHV0LXByb2plY3QgPiBkaXYge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMGZyIDEuNWZyO1xuICAgIGhlaWdodDogM3JlbTtcbn1cblxuI2dldC1wcm9qZWN0LXRpdGxlIHtcbiAgICBiYWNrZ3JvdW5kOiAjRUZFRkVGO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjOTJDMUIyO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uYWRkLXByb2plY3QtYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTJDMUIyO1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuLmRlbGV0ZS1wcm9qZWN0LWJ0biB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgZm9udC1zaXplOiBsYXJnZXI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTJDMUIyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuLmRlbGV0ZS1wcm9qZWN0LWJ0bjpob3ZlciB7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6ICM2ZWI0OWY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6ICM2ZWI0OWY7XG59XG5cbi5wcm9qZWN0LXRpdGxlIHtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcbiAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMTBweDtcbn1cblxuI2FkZC10YXNrLWJ0biB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzLjVmcjtcbiAgICB3aWR0aDogMjAlO1xuICAgIHBhZGRpbmc6IDEuMnJlbSAxLjNyZW0gMS4ycmVtIDEuM3JlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmViNDlmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXItcmFkaXVzOiA0dnc7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIG1hcmdpbi1sZWZ0OiAzcmVtO1xufVxuXG4jYWRkLXRhc2stYnRuID4gZGl2IHtcbiAgICBhbGlnbi1zZWxmOmNlbnRlcjtcbiAgICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XG59XG5cbiNhZGQtdGFzay1idG4gPiBpbWcge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuI2FkZC10YXNrLWJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc4QzRBRDtcbn1cblxuLmNoYW5nZS1uYW1lLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy10b3A6IDIuNXJlbTtcbn1cblxuI25ldy1wcm9qZWN0LXRpdGxlIHtcbiAgICBoZWlnaHQ6IDMuNXJlbTtcbiAgICB3aWR0aDogMjRyZW07XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmViNDlmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMC4ydnc7XG59XG5cbi5idG4tY29udGFpbmVycyB7XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG59XG5cbiNzYXZlLWJ0bixcbiNjYW5jZWwtYnRuIHtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC43cmVtIDAuNXJlbSAwLjdyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgYm9yZGVyLXJhZGl1czowLjV2dztcbn1cblxuI3NhdmUtYnRuIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEVEMERFO1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuI2NhbmNlbC1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MkMxQjI7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG4jc2F2ZS1idG46aG92ZXIsXG4jY2FuY2VsLWJ0bjpob3ZlciB7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xufVxuXG4udGFzay1mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDNyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDEzcmVtO1xuICAgIHdpZHRoOiA0NSU7XG4gICAgbGVmdDogMzAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtNTBweDtcbiAgICB0b3A6IDMwJTtcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4udGFzay1mb3JtID4gaW5wdXQsXG4udGFzay1mb3JtID4gc2VsZWN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmViNDlmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuM3Z3O1xufVxuXG50ZXh0YXJlYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZlYjQ5ZjtcbiAgICBib3JkZXItcmFkaXVzOiAwLjN2dztcbn1cblxuI2NhbmNlbC10YXNrLWJ0bixcbiNzdWJtaXQtdGFzay1idG4sXG4jc2F2ZS10YXNrLWJ0biB7XG4gICAgcGFkZGluZzogMC41cmVtIDAuN3JlbSAwLjVyZW0gMC43cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbiNzdWJtaXQtdGFzay1idG46aG92ZXIsXG4jc2F2ZS10YXNrLWJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc1RDdCQTtcbn1cblxuI2NhbmNlbC10YXNrLWJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZlYjQ5ZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMC4zdnc7ICBcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7IFxufVxuXG4jc3VibWl0LXRhc2stYnRuLFxuI3NhdmUtdGFzay1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZWI0OWY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuM3Z3OyAgXG4gICAgYm9yZGVyLXN0eWxlOiBub25lOyBcbn1cblxuI2NhbmNlbC10YXNrLWJ0biB7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgY29sb3I6ICM2ZWI0OWY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6ICM2ZWI0OWY7XG4gICAgYm9yZGVyLXJhZGl1czogMC4zdnc7IFxufVxuXG4udGFzay1jb250YWluZXItZGlzcGxheSB7XG4gICAgaGVpZ2h0OiA5JTtcbn1cblxuLnRhc2stYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDMuOHJlbTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC43ZnIgNGZyIDFmciAwLjdmciA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRhc2stYmFja2dyb3VuZCA+IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgd2lkdGg6IDIuMTVlbTtcbiAgICBib3JkZXItY29sb3I6ICM2ZWI0OWY7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBoZWlnaHQ6IDIuMTVlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjE1ZW07XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjA3NWVtKTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjsgICAgXG4gICAgYm9yZGVyLXJhZGl1czogM3Z3O1xufVxuXG4udGFzay1iYWNrZ3JvdW5kID4gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgd2lkdGg6IDAuNjVlbTtcbiAgICBoZWlnaHQ6IDAuNjVlbTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDMpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZWI0OWYgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiAxMjBtcyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XG59XG5cbi50b2RvLWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgICBcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4udGFza0J0bnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbiAgICBnYXA6IDRweDtcbn1cblxuLnRhc2tCdG5zID4gYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbi50YXNrQnRucyA+IGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbn0gXG5cbiNkYXRlLWRpc3BsYXkge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG59XG5cbiNibHVyICAge1xuICAgIGZpbHRlcjogYmx1cig1cHgpO1xuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDVweCk7XG4gICAgLW1vei1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgICAtby1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgICAtbXMtZmlsdGVyOiBibHVyKDVweCk7XG59XG5cbiNvdmVybGF5ICAgIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBsZWZ0OiAwcHg7XG4gICAgdG9wOiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBib3R0b206IDBweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC44KTtcbiAgICB6LWluZGV4OiA5OTk7XG59XG5cblxuXG5cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQyxDQUFBOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBOzs7SUFHSSxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixjQUFj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dUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtJQUNWLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jaGVhZGxpbmUge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MkMxQjI7XFxuICAgIGNvbG9yOiBhbGljZWJsdWU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbiN0b2RvLWxpc3QtaWNvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcXG59XFxuXFxuI3RleHQge1xcbiAgICBwYWRkaW5nLXRvcDogMS40cmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIzcmVtO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjVmciA0ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC42ZnIgNGZyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRvZG8tbGlzdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuM2ZyIDRmcjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZGQ2ZDY7XFxuICAgIG92ZXJmbG93OmhpZGRlbjtcXG59XFxuXFxuLnRpdGxlLWFkZC1wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgb3V0bGluZS1zdHlsZTogc29saWQ7XFxuICAgIGNvbG9yOiB0dXJxdW9pc2U7XFxufVxcblxcbi5hbGwtcHJvamVjdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5uZXdQcm9qZWN0VGl0bGUsXFxuLmJ0bi1jb250YWluZXJzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG59O1xcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zaWRlLWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wcm9qZWN0LWJ0bi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7XFxufVxcblxcbi50b2RheSxcXG4udXBjb21pbmcsXFxuLnNob3ctcHJvamVjdHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjdmciAzZnI7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcGFkZGluZy10b3A6IDAuOHJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuOHJlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuM3JlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1jb2xvcjogIzkyQzFCMjtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgY29sb3I6ICM5MkMxQjI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi50b2RheTpob3ZlcixcXG4udXBjb21pbmc6aG92ZXIsXFxuLmFsbC1wcm9qZWN0cyA+IGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICM2ZWI0OWY7XFxuICAgIG9wYWNpdHk6IDUwJTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udXBjb21pbmcge1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbn1cXG5cXG4udG9kYXkgPiBkaXYsXFxuLnVwY29taW5nID4gZGl2IHtcXG4gICAganVzdGlmeS1zZWxmOiBsZWZ0O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxufVxcblxcbi5zaG93LXByb2plY3RzLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEuOWZyIDFmcjtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG59XFxuXFxuI3Byb2plY3RzLWJ0biB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuM3JlbTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgY29sb3I6ICM5MkMxQjI7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmRyb3AtZG93bi1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4jcHJvamVjdHMtaWNvbiB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEuOXJlbTtcXG59XFxuXFxuLmFsbC1wcm9qZWN0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC45cHg7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogNDAlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDhyZW07XFxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xcbn1cXG5cXG4uYWxsLXByb2plY3RzID4gYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAyLjdyZW07XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjOTJDMUIyO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBjb2xvcjogIzkyQzFCMjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLnNpZGViYXItaWNvbnMge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLmlucHV0LXByb2plY3Qge1xcbiAgICBwYWRkaW5nLXRvcDogNHJlbTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uaW5wdXQtcHJvamVjdCA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTBmciAxLjVmcjtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbn1cXG5cXG4jZ2V0LXByb2plY3QtdGl0bGUge1xcbiAgICBiYWNrZ3JvdW5kOiAjRUZFRkVGO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6ICM5MkMxQjI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkyQzFCMjtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3QtYnRuIHtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4ycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTJDMUIyO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0LWJ0bjpob3ZlciB7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogIzZlYjQ5ZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiAjNmViNDlmO1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZSB7XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcXG4gICAgZm9udC1zaXplOiAzLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XFxufVxcblxcbiNhZGQtdGFzay1idG4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzLjVmcjtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgcGFkZGluZzogMS4ycmVtIDEuM3JlbSAxLjJyZW0gMS4zcmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZWI0OWY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDR2dztcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBtYXJnaW4tbGVmdDogM3JlbTtcXG59XFxuXFxuI2FkZC10YXNrLWJ0biA+IGRpdiB7XFxuICAgIGFsaWduLXNlbGY6Y2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxufVxcblxcbiNhZGQtdGFzay1idG4gPiBpbWcge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jYWRkLXRhc2stYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc4QzRBRDtcXG59XFxuXFxuLmNoYW5nZS1uYW1lLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmctdG9wOiAyLjVyZW07XFxufVxcblxcbiNuZXctcHJvamVjdC10aXRsZSB7XFxuICAgIGhlaWdodDogMy41cmVtO1xcbiAgICB3aWR0aDogMjRyZW07XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmViNDlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4ydnc7XFxufVxcblxcbi5idG4tY29udGFpbmVycyB7XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbn1cXG5cXG4jc2F2ZS1idG4sXFxuI2NhbmNlbC1idG4ge1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC43cmVtIDAuNXJlbSAwLjdyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6MC41dnc7XFxufVxcblxcbiNzYXZlLWJ0biB7XFxuICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEVEMERFO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbiNjYW5jZWwtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkyQzFCMjtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4jc2F2ZS1idG46aG92ZXIsXFxuI2NhbmNlbC1idG46aG92ZXIge1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGFzay1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAzcmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAxM3JlbTtcXG4gICAgd2lkdGg6IDQ1JTtcXG4gICAgbGVmdDogMzAlO1xcbiAgICBtYXJnaW4tbGVmdDogLTUwcHg7XFxuICAgIHRvcDogMzAlO1xcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi50YXNrLWZvcm0gPiBpbnB1dCxcXG4udGFzay1mb3JtID4gc2VsZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZlYjQ5ZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zdnc7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZlYjQ5ZjtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zdnc7XFxufVxcblxcbiNjYW5jZWwtdGFzay1idG4sXFxuI3N1Ym1pdC10YXNrLWJ0bixcXG4jc2F2ZS10YXNrLWJ0biB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjdyZW0gMC41cmVtIDAuN3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuI3N1Ym1pdC10YXNrLWJ0bjpob3ZlcixcXG4jc2F2ZS10YXNrLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NUQ3QkE7XFxufVxcblxcbiNjYW5jZWwtdGFzay1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmViNDlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3Z3OyAgXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTsgXFxufVxcblxcbiNzdWJtaXQtdGFzay1idG4sXFxuI3NhdmUtdGFzay1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmViNDlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3Z3OyAgXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTsgXFxufVxcblxcbiNjYW5jZWwtdGFzay1idG4ge1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gICAgY29sb3I6ICM2ZWI0OWY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6ICM2ZWI0OWY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3Z3OyBcXG59XFxuXFxuLnRhc2stY29udGFpbmVyLWRpc3BsYXkge1xcbiAgICBoZWlnaHQ6IDklO1xcbn1cXG5cXG4udGFzay1iYWNrZ3JvdW5kIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDMuOHJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjdmciA0ZnIgMWZyIDAuN2ZyIDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWJhY2tncm91bmQgPiBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICB3aWR0aDogMi4xNWVtO1xcbiAgICBib3JkZXItY29sb3I6ICM2ZWI0OWY7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGhlaWdodDogMi4xNWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjE1ZW07XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4wNzVlbSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjsgICAgXFxuICAgIGJvcmRlci1yYWRpdXM6IDN2dztcXG59XFxuXFxuLnRhc2stYmFja2dyb3VuZCA+IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICB3aWR0aDogMC42NWVtO1xcbiAgICBoZWlnaHQ6IDAuNjVlbTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgzKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZlYjQ5ZiAhaW1wb3J0YW50O1xcbiAgICB0cmFuc2l0aW9uOiAxMjBtcyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50b2RvLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgIFxcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnRhc2tCdG5zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcXG4gICAgZ2FwOiA0cHg7XFxufVxcblxcbi50YXNrQnRucyA+IGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi50YXNrQnRucyA+IGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XFxufSBcXG5cXG4jZGF0ZS1kaXNwbGF5IHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxufVxcblxcbiNibHVyICAge1xcbiAgICBmaWx0ZXI6IGJsdXIoNXB4KTtcXG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoNXB4KTtcXG4gICAgLW1vei1maWx0ZXI6IGJsdXIoNXB4KTtcXG4gICAgLW8tZmlsdGVyOiBibHVyKDVweCk7XFxuICAgIC1tcy1maWx0ZXI6IGJsdXIoNXB4KTtcXG59XFxuXFxuI292ZXJsYXkgICAge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGxlZnQ6IDBweDtcXG4gICAgdG9wOiAwcHg7XFxuICAgIHJpZ2h0OiAwcHg7XFxuICAgIGJvdHRvbTogMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC44KTtcXG4gICAgei1pbmRleDogOTk5O1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgYWxsUHJvamVjdHMsZGlzYWJsZVByZXZpb3VzRGF0ZXMsIGRlbGV0ZVRhc2ssIGZpbmRJbmRleCB9IGZyb20gXCIuL2xvZ2ljXCI7XG5cbmZ1bmN0aW9uIGdldFByb2pOYW1lKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2V0LXByb2plY3QtdGl0bGUnKTtcbn07XG5cbmZ1bmN0aW9uIGdldFByb2pUaXRsZSgpIHtcbiAgICBsZXQgcHJvalRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGl0bGUnKS50ZXh0Q29udGVudDtcbiAgICByZXR1cm4gcHJvalRpdGxlO1xufTtcblxuZnVuY3Rpb24gZ2V0TmV3VHRsZSgpe1xuICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXByb2plY3QtdGl0bGUnKTsgXG59O1xuXG5jb25zdCBnZXRUYXNrSW5mbyA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dldC10YXNrLW5hbWUnKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZXQtZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dldC1kYXRlJykudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHlMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dldC1wcmlvcml0eS1saXN0JykudmFsdWU7IFxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGFzayxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGRhdGUsXG4gICAgICAgIHByaW9yaXR5TGlzdFxuICAgIH07XG59O1xuXG5jb25zdCBVSSA9ICgoKSA9PiB7XG4gICAgZnVuY3Rpb24gbWFrZVByb2plY3RCdG4obmFtZSkge1xuICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnaWQnLGAke25hbWV9LXByb2plY3QtYnRuYCk7XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWJ0bicpO1xuICAgICAgICBidG4udGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIFxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtcHJvamVjdHMnKTtcbiAgICAgICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyU2F2ZWRUYXNrKCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBmaW5kSW5kZXgucHJvamVjdEluZGV4KClcbiAgICAgICAgYWxsUHJvamVjdHNbcHJvamVjdEluZGV4XS5wcm9qZWN0RGV0YWlscy5hbGxUYXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgdGFza0Rpc3BsYXkodGFzay50YXNrTmFtZSwgdGFzay5kZXNjcmlwdGlvbiwgdGFzay5kdWVEYXRlLCB0YXNrLnByaW9yaXR5TGlzdCwgdGFzay5jaGVja0JveCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBtYWtlQWRkVGFza0J0bigpIHtcbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1saXN0Jyk7XG4gICAgXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lclRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyVGFza0J0bi5jbGFzc0xpc3QuYWRkKCdjb250YWluZXItdGFzay1idG4nKTtcbiAgICBcbiAgICAgICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhZGRUYXNrQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCdhZGQtdGFzay1idG4nKVxuICAgICAgICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrLWJ0bicpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgYWRkSWNvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBhZGRJY29uSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywnL3NyYy9pY29ucy9tYXRlcmlhbC1zeW1ib2xzX2FkZC5zdmcnKTtcbiAgICAgICAgYWRkSWNvbkltZy5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzay1idG4nKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stYnRuJyk7XG4gICAgICAgIGRpdi50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XG4gICAgXG4gICAgICAgIGFkZFRhc2tCdG4uYXBwZW5kQ2hpbGQoYWRkSWNvbkltZyk7XG4gICAgICAgIGFkZFRhc2tCdG4uYXBwZW5kQ2hpbGQoZGl2KVxuICAgICAgICBjb250YWluZXJUYXNrQnRuLmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xuICAgICAgICB0b2RvTGlzdC5hcHBlbmRDaGlsZChjb250YWluZXJUYXNrQnRuKTtcbiAgICB9O1xuICAgIFxuICAgIGZ1bmN0aW9uIGhlYWRlckRpc3BsYXkobmFtZSkge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICByZW5kZXJQcm9qVHRsZShoZWFkZXIsIG5hbWUpO1xuICAgIH07XG4gICAgXG4gICAgZnVuY3Rpb24gcmVuZGVyUHJvalR0bGUoYXBwZW5kLCBwcm9qVHRsZSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUnKTtcbiAgICAgICAgcHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCBwcm9qVHRsZSk7XG4gICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2pUdGxlO1xuICAgICAgICBhcHBlbmQuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICB9O1xuICAgIFxuICAgIGZ1bmN0aW9uIHRhc2tGb3JtKCkge1xuICAgICAgICBjb25zdCBiZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QtY29udGFpbmVyJyk7XG4gICAgICAgIGJnLnNldEF0dHJpYnV0ZSgnaWQnLCdibHVyJykgXG4gICAgXG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgndGFzay1mb3JtJyk7XG4gICAgXG4gICAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0YXNrLnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKTtcbiAgICAgICAgdGFzay5zZXRBdHRyaWJ1dGUoJ2lkJywnZ2V0LXRhc2stbmFtZScpO1xuICAgICAgICB0YXNrLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCdUYXNrIG5hbWUnKTtcbiAgICBcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0Jyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCdnZXQtZGVzY3JpcHRpb24nKTtcbiAgICAgICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsJ0Rlc2NyaXB0aW9uJyk7XG4gICAgXG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsJ2RhdGUnKTtcbiAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywnZ2V0LWRhdGUnKTtcbiAgICAgICAgZGlzYWJsZVByZXZpb3VzRGF0ZXMoZGF0ZSk7XG4gICAgXG4gICAgICAgIGNvbnN0IHByaW9yaXR5TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBwcmlvcml0eUxpc3Quc2V0QXR0cmlidXRlKCdpZCcsJ2dldC1wcmlvcml0eS1saXN0Jyk7XG4gICAgXG4gICAgICAgIGNvbnN0IHVyZ2VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICB1cmdlbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsJ3VyZ2VudCcpO1xuICAgICAgICB1cmdlbnQudGV4dENvbnRlbnQgPSAndXJnZW50JztcbiAgICBcbiAgICAgICAgY29uc3QgaW1wb3J0YW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGltcG9ydGFudC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnaW1wb3J0YW50Jyk7XG4gICAgICAgIGltcG9ydGFudC50ZXh0Q29udGVudCA9ICdpbXBvcnRhbnQnO1xuICAgIFxuICAgICAgICBjb25zdCBub3RJbXBvcnRhbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgbm90SW1wb3J0YW50LnNldEF0dHJpYnV0ZSgndmFsdWUnLCdub3QtaW1wb3J0YW50Jyk7XG4gICAgICAgIG5vdEltcG9ydGFudC50ZXh0Q29udGVudCA9ICdub3QtaW1wb3J0YW50JztcbiAgICBcbiAgICAgICAgY29uc3QgYnRuQ29udGFpbmVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFxuICAgICAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywnc3VibWl0Jyk7XG4gICAgICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywnc3VibWl0LXRhc2stYnRuJyk7XG4gICAgICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuICAgIFxuICAgICAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCdjYW5jZWwtdGFzay1idG4nKTtcbiAgICAgICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ2NhbmNlbCc7XG4gICAgXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGUpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5TGlzdCk7XG4gICAgICAgIHByaW9yaXR5TGlzdC5hcHBlbmRDaGlsZCh1cmdlbnQpO1xuICAgICAgICBwcmlvcml0eUxpc3QuYXBwZW5kQ2hpbGQoaW1wb3J0YW50KTtcbiAgICAgICAgcHJpb3JpdHlMaXN0LmFwcGVuZENoaWxkKG5vdEltcG9ydGFudCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnRuQ29udGFpbmVycyk7XG4gICAgICAgIGJ0bkNvbnRhaW5lcnMuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcbiAgICAgICAgYnRuQ29udGFpbmVycy5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZW1vdmVCbHVyQXR0cmlidXRlKCkge1xuICAgICAgICBjb25zdCB0b2RvTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QtY29udGFpbmVyJyk7XG4gICAgICAgIHRvZG9MaXN0Q29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZSgnaWQnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVVSVRhc2tCdG4oKSB7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyLXRhc2stYnRuJyk7XG4gICAgICAgIGFkZFRhc2tCdG4ucmVtb3ZlKCk7XG4gICAgICAgIG1ha2VBZGRUYXNrQnRuKCk7XG4gICAgfTtcbiAgICBcbiAgICBmdW5jdGlvbiB0YXNrRGlzcGxheSh0YXNrLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHksIGNoZWNrQm94KSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1saXN0Jyk7XG4gICAgXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1jb250YWluZXItZGlzcGxheScpO1xuICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnLCB0YXNrKTtcbiAgICBcbiAgICAgICAgY29uc3QgYmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYmcuY2xhc3NMaXN0LmFkZCgndGFzay1iYWNrZ3JvdW5kJyk7XG4gICAgXG4gICAgICAgIGNvbnN0IGNoZWNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNoZWNrTGlzdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdjaGVja2JveCcpO1xuICAgICAgICBjaGVja0xpc3Quc2V0QXR0cmlidXRlKCdpZCcsIHRhc2spO1xuICAgICAgICBjaGVja0xpc3QuY2xhc3NMaXN0LmFkZCgnY2hlY2stYm94Jyk7XG4gICAgICAgIGNoZWNrQm94ID09ICdjaGVja2VkJyA/IGNoZWNrTGlzdC5jaGVja2VkID0gdHJ1ZSA6IGZhbHNlOyAgXG5cbiAgICAgICAgY29uc3QgdGFza0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICB0YXNrRGlzcGxheS5zZXRBdHRyaWJ1dGUoJ2ZvcicsdGFzayk7XG4gICAgXG4gICAgICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgaDMuc2V0QXR0cmlidXRlKCdpZCcsJ3Rhc2stbmFtZScpO1xuICAgICAgICBoMy50ZXh0Q29udGVudCA9IHRhc2s7XG4gICAgXG4gICAgICAgIGNvbnN0IGRlc2NEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRlc2NEaXNwbGF5LnNldEF0dHJpYnV0ZSgnaWQnLCdkZXNjcmlwdGlvbicpO1xuICAgICAgICBkZXNjRGlzcGxheS50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuICAgIFxuICAgICAgICBjb25zdCBkYXRlRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkYXRlRGlzcGxheS5zZXRBdHRyaWJ1dGUoJ2lkJywnZGF0ZS1kaXNwbGF5Jyk7XG4gICAgICAgIGRhdGVEaXNwbGF5LnRleHRDb250ZW50ID0gZGF0ZTtcbiAgICBcbiAgICAgICAgY29uc3QgdGFza0J0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0J0bnMuY2xhc3NMaXN0LmFkZCgndGFza0J0bnMnKTtcbiAgICBcbiAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywnZGVsZXRlLXRhc2snKTtcbiAgICAgICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgdGFzayk7XG4gICAgICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgZGVsZXRlSWNvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScsIHRhc2spO1xuICAgICAgICBkZWxldGVJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCdkZWxldGUtaWNvbicpO1xuICAgICAgICBkZWxldGVJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywnL3NyYy9pY29ucy9iaV90cmFzaC1maWxsLnN2ZycpO1xuICAgIFxuICAgICAgICBjb25zdCBlZGl0VGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBlZGl0VGFza0J0bi5zZXRBdHRyaWJ1dGUoJ2lkJywnZWRpdC10YXNrJyk7XG4gICAgICAgIGVkaXRUYXNrQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgdGFzayk7XG4gICAgICAgIGNvbnN0IGVkaXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGVkaXRJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCdlZGl0LWljb24nKTtcbiAgICAgICAgZWRpdEljb24uc2V0QXR0cmlidXRlKCdzcmMnLCcvc3JjL2ljb25zL3RhYmxlcl9lZGl0LnN2ZycpO1xuICAgICAgICBlZGl0SWNvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScsIHRhc2spO1xuXG4gICAgICAgIHByaW9yaXR5Q29sb3IocHJpb3JpdHksIGNoZWNrTGlzdCwgZGF0ZURpc3BsYXkpO1xuICAgIFxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChiZyk7XG4gICAgICAgIGJnLmFwcGVuZENoaWxkKGNoZWNrTGlzdCk7XG4gICAgICAgIGJnLmFwcGVuZENoaWxkKHRhc2tEaXNwbGF5KTtcbiAgICAgICAgYmcuYXBwZW5kQ2hpbGQoZGF0ZURpc3BsYXkpO1xuICAgICAgICBiZy5hcHBlbmRDaGlsZCh0YXNrQnRucyk7XG4gICAgICAgIHRhc2tCdG5zLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgICAgIGRlbGV0ZUJ0bi5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcbiAgICAgICAgdGFza0J0bnMuYXBwZW5kQ2hpbGQoZWRpdFRhc2tCdG4pO1xuICAgICAgICBlZGl0VGFza0J0bi5hcHBlbmRDaGlsZChlZGl0SWNvbik7XG4gICAgICAgIHRhc2tEaXNwbGF5LmFwcGVuZENoaWxkKGgzKTtcbiAgICAgICAgdGFza0Rpc3BsYXkuYXBwZW5kQ2hpbGQoZGVzY0Rpc3BsYXkpO1xuICAgIH07XG4gICAgXG4gICAgZnVuY3Rpb24gcHJpb3JpdHlDb2xvcihwcmlvcml0eSwgY2hlY2tCb3gsIGRhdGUpIHtcbiAgICAgICAgaWYgKHByaW9yaXR5ID09ICdub3QtaW1wb3J0YW50Jykge1xuICAgICAgICAgICAgY2hlY2tCb3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNkM2QzZDMnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmlvcml0eSA9PSAndXJnZW50Jykge1xuICAgICAgICAgICAgY2hlY2tCb3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNGNjVDNUMnO1xuICAgICAgICAgICAgZGF0ZS5zdHlsZS5jb2xvciA9ICcjRjY1QzVDJztcbiAgICAgICAgfSBcbiAgICAgICAgaWYgKHByaW9yaXR5ID09ICdpbXBvcnRhbnQnKSB7XG4gICAgICAgICAgICBjaGVja0JveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0Y2RDM1Qyc7XG4gICAgICAgICAgICBkYXRlLnN0eWxlLmNvbG9yID0gJyNGNkQzNUMnO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGVtcHR5VG9Eb0xpc3QoKSB7XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdCcpO1xuICAgICAgICB0b2RvTGlzdC50ZXh0Q29udGVudCA9ICcnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVNhdmVCdG4oKSB7XG4gICAgICAgIGNvbnN0IHNhdmVUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHNhdmVUYXNrQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCdzYXZlLXRhc2stYnRuJyk7XG4gICAgICAgIHNhdmVUYXNrQnRuLnRleHRDb250ZW50ID0gJ1NBVkUnO1xuICAgICAgICByZXR1cm4gc2F2ZVRhc2tCdG47XG4gICAgfTtcbiAgICBcbiAgICBmdW5jdGlvbiByZXBsYWNlQnRucygpIHtcbiAgICAgICAgY29uc3Qgc3VibWl0VGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQtdGFzay1idG4nKTtcbiAgICAgICAgY29uc3Qgc2F2ZVRhc2tCdG4gPSBjcmVhdGVTYXZlQnRuKCk7XG4gICAgICAgIHNhdmVUYXNrQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCdzYXZlLXRhc2stYnRuJyk7XG4gICAgICAgIHN1Ym1pdFRhc2tCdG4ucmVwbGFjZVdpdGgoc2F2ZVRhc2tCdG4pO1xuICAgIH07XG4gICAgXG4gICAgZnVuY3Rpb24gY3VycmVudFRhc2tJbmZvKG5hbWVPZlRhc2ssIHRhcmdldFByb2plY3ROYW1lKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IGFsbFByb2plY3RzLmZpbmRJbmRleChwID0+IHAucHJvamVjdERldGFpbHMucHJvamVjdE5hbWUgPT09IHRhcmdldFByb2plY3ROYW1lKTtcbiAgICAgICAgY29uc3QgdGFza0luZGV4ID0gYWxsUHJvamVjdHNbcHJvamVjdEluZGV4XS5wcm9qZWN0RGV0YWlscy5hbGxUYXNrcy5maW5kSW5kZXgocCA9PiBwLnRhc2tOYW1lID09PSBuYW1lT2ZUYXNrKTtcbiAgICAgICAgY29uc3QgbmFtZSA9IGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0ucHJvamVjdERldGFpbHMuYWxsVGFza3NbdGFza0luZGV4XS50YXNrTmFtZTtcbiAgICAgICAgY29uc3QgZGV0YWlscyA9IGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0ucHJvamVjdERldGFpbHMuYWxsVGFza3NbdGFza0luZGV4XS5kZXNjcmlwdGlvbjtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0ucHJvamVjdERldGFpbHMuYWxsVGFza3NbdGFza0luZGV4XS5kdWVEYXRlO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0ucHJvamVjdERldGFpbHMuYWxsVGFza3NbdGFza0luZGV4XS5wcmlvcml0eUxpc3Q7XG4gICAgICAgIGNvbnN0IGdldFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2V0LXRhc2stbmFtZScpO1xuICAgICAgICBjb25zdCBnZXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZXQtZGVzY3JpcHRpb24nKTtcbiAgICAgICAgY29uc3QgZ2V0RGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZXQtZGF0ZScpO1xuICAgICAgICBjb25zdCBnZXRQcmlvcml0eUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2V0LXByaW9yaXR5LWxpc3QnKTsgXG4gICAgICAgIGdldFRhc2sudmFsdWUgPSBuYW1lO1xuICAgICAgICBnZXREZXNjcmlwdGlvbi52YWx1ZSA9IGRldGFpbHM7XG4gICAgICAgIGdldERhdGUudmFsdWUgPSBkdWVEYXRlO1xuICAgICAgICBnZXRQcmlvcml0eUxpc3QudmFsdWUgPSBwcmlvcml0eTtcbiAgICB9O1xuICAgIFxuICAgIGZ1bmN0aW9uIHJlbW92ZURhdGFOYW1lQXR0cmlidXRlKG5hbWVPZlRhc2spIHtcbiAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gZmluZEluZGV4LnByb2plY3RJbmRleCgpO1xuICAgICAgICBjb25zdCB0YXNrSW5kZXggPSBmaW5kSW5kZXgudGFza0luZGV4KG5hbWVPZlRhc2spOyBcbiAgICAgICAgY29uc3QgY3VycmVudFRhc2tOYW1lID0gYWxsUHJvamVjdHNbcHJvamVjdEluZGV4XS5wcm9qZWN0RGV0YWlscy5hbGxUYXNrc1t0YXNrSW5kZXhdLnRhc2tOYW1lO1xuICAgICAgICBjb25zdCBkYXRhQXR0cmlidXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtbmFtZT0nJHtjdXJyZW50VGFza05hbWV9J11gKTtcbiAgICAgICAgZGF0YUF0dHJpYnV0ZS5yZW1vdmUoKTtcbiAgICB9O1xuICAgIFxuICAgIGZ1bmN0aW9uIHJlbW92ZVRhc2tGb3JtKCkge1xuICAgICAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWZvcm0nKTtcbiAgICAgICAgdGFza0Zvcm0ucmVtb3ZlKCk7XG4gICAgfTtcbiAgICBcbiAgICBmdW5jdGlvbiBkZWxldGVUYXNrRGlzcGxheShuYW1lT2ZUYXNrKSB7XG4gICAgICAgIHJlbW92ZURhdGFOYW1lQXR0cmlidXRlKG5hbWVPZlRhc2spO1xuICAgICAgICBkZWxldGVUYXNrKG5hbWVPZlRhc2spO1xuICAgIH07XG4gICAgXG4gICAgZnVuY3Rpb24gY2hhbmdlUHJvak5hbWUobmFtZSkge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG4gICAgXG4gICAgICAgIGNvbnN0IGNoYW5nZU5hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2hhbmdlTmFtZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjaGFuZ2UtbmFtZS1jb250YWluZXInKTtcbiAgICBcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgbmV3UHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCduZXctcHJvamVjdC10aXRsZScpO1xuICAgICAgICBuZXdQcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgbmV3UHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBuYW1lKTtcbiAgICAgICAgaGVhZGVyLnJlcGxhY2VDaGlsZChuZXdQcm9qZWN0VGl0bGUsIGhlYWRlci5maXJzdEVsZW1lbnRDaGlsZCk7XG4gICAgXG4gICAgICAgIGNvbnN0IGJ0bkNvbnRhaW5lcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYnRuQ29udGFpbmVycy5jbGFzc0xpc3QuYWRkKCdidG4tY29udGFpbmVycycpO1xuICAgIFxuICAgICAgICBjb25zdCBzYXZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHNhdmVCdG4uc2V0QXR0cmlidXRlKCdpZCcsJ3NhdmUtYnRuJyk7XG4gICAgICAgIHNhdmVCdG4udGV4dENvbnRlbnQgPSAnU0FWRSc7XG4gICAgXG4gICAgICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnQ0FOQ0VMJztcbiAgICAgICAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCdjYW5jZWwtYnRuJyk7XG4gICAgXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChjaGFuZ2VOYW1lQ29udGFpbmVyKTtcbiAgICAgICAgY2hhbmdlTmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0VGl0bGUpO1xuICAgICAgICBjaGFuZ2VOYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcnMpO1xuICAgICAgICBidG5Db250YWluZXJzLmFwcGVuZENoaWxkKHNhdmVCdG4pO1xuICAgICAgICBidG5Db250YWluZXJzLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG4gICAgfTtcbiAgICBcbiAgICBmdW5jdGlvbiBuZXdUdGxlQnRuKGN1cnJlbnRQcm9qKSB7XG4gICAgICAgIGNvbnN0IG5ld1RpdGxlID0gZ2V0TmV3VHRsZSgpOyBcbiAgICAgICAgY29uc3QgQ2hhbmdlTmFtZWJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2N1cnJlbnRQcm9qfS1wcm9qZWN0LWJ0bmApO1xuICAgICAgICBDaGFuZ2VOYW1lYnRuLnJlbW92ZUF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgQ2hhbmdlTmFtZWJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJyxgJHtuZXdUaXRsZS52YWx1ZX0tcHJvamVjdC1idG5gKTtcbiAgICAgICAgQ2hhbmdlTmFtZWJ0bi50ZXh0Q29udGVudCA9IG5ld1RpdGxlLnZhbHVlO1xuICAgIH07XG4gICAgXG4gICAgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdEJ0bigpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGl0bGUnKTtcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cHJvamVjdFRpdGxlLnRleHRDb250ZW50fS1wcm9qZWN0LWJ0bmApO1xuICAgICAgICBwcm9qZWN0VGl0bGVCdG4ucmVtb3ZlKCk7XG4gICAgfTtcbiAgICBcbiAgICBmdW5jdGlvbiBlbXB0eVRvRG9QYWdlKCkge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBlbXB0eVRvRG9MaXN0KCk7XG4gICAgfTtcbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGVTYXZlQnRuLFxuICAgICAgICBjdXJyZW50VGFza0luZm8sXG4gICAgICAgIGNoYW5nZVByb2pOYW1lLFxuICAgICAgICBkZWxldGVUYXNrRGlzcGxheSxcbiAgICAgICAgZW1wdHlUb0RvTGlzdCxcbiAgICAgICAgZW1wdHlUb0RvUGFnZSxcbiAgICAgICAgbWFrZVByb2plY3RCdG4sXG4gICAgICAgIG1ha2VBZGRUYXNrQnRuLFxuICAgICAgICBuZXdUdGxlQnRuLFxuICAgICAgICByZW1vdmVEYXRhTmFtZUF0dHJpYnV0ZSxcbiAgICAgICAgcmVtb3ZlUHJvamVjdEJ0bixcbiAgICAgICAgcmVtb3ZlVGFza0Zvcm0sXG4gICAgICAgIHJlbW92ZUJsdXJBdHRyaWJ1dGUsXG4gICAgICAgIHJlcGxhY2VCdG5zLFxuICAgICAgICByZW5kZXJTYXZlZFRhc2ssXG4gICAgICAgIGhlYWRlckRpc3BsYXksXG4gICAgICAgIHByaW9yaXR5Q29sb3IsXG4gICAgICAgIHRhc2tGb3JtLFxuICAgICAgICB0YXNrRGlzcGxheSxcbiAgICAgICAgdXBkYXRlVUlUYXNrQnRuLFxuICAgIH1cbn0pKCk7XG5cbmV4cG9ydCB7IGdldFRhc2tJbmZvLCBnZXRQcm9qTmFtZSwgZ2V0TmV3VHRsZSwgZ2V0UHJvalRpdGxlLCBVSSB9IiwiaW1wb3J0IHsgVUksIGdldFByb2pUaXRsZSwgZ2V0TmV3VHRsZSwgZ2V0UHJvak5hbWUsIGdldFRhc2tJbmZvIH0gZnJvbSBcIi4vRE9NXCI7XG5pbXBvcnQgeyBhZGRQcm9qZWN0LCBkZWxldGVQcm9qZWN0LCBzYXZlTmFtZSwgYWxsUHJvamVjdHMsIGNyZWF0ZVRhc2ssIGVkaXRUYXNrLCBzYXZlQ2hlY2tCb3gsIHRvZGF5QW5kVXBjb21pbmdUYXNrIH0gZnJvbSBcIi4vbG9naWNcIjtcbmltcG9ydCB7IHNhdmVEYXRhIH0gZnJvbSBcIi4vbG9jYWwtc3RvcmFnZVwiO1xuaW1wb3J0IHsgcHVic3ViIH0gZnJvbSAnLi9wdWJzdWIuanMnO1xuXG5wdWJzdWIuc3Vic2NyaWJlKCdhZGRQcm9qJywgYWRkUHJvamVjdCk7XG5wdWJzdWIuc3Vic2NyaWJlKCdkbGV0ZVByb2onLGRlbGV0ZVByb2plY3QpO1xucHVic3ViLnN1YnNjcmliZSgnc2F2ZU5hbWUnLCBzYXZlTmFtZSk7XG5wdWJzdWIuc3Vic2NyaWJlKCdzYXZlRGF0YScsIHNhdmVEYXRhKTtcbnB1YnN1Yi5zdWJzY3JpYmUoJ2NyZWF0ZVRhc2snLCBjcmVhdGVUYXNrKTtcbnB1YnN1Yi5zdWJzY3JpYmUoJ2VkaXRUYXNrJywgZWRpdFRhc2spO1xucHVic3ViLnN1YnNjcmliZSgnc2F2ZUJveCcsIHNhdmVDaGVja0JveCk7XG5cbmNvbnN0IERPTUV2ZW50cyA9ICgpID0+IHtcbiAgICBjb25zdCBkID0gZG9jdW1lbnQ7XG4gICAgbGV0IGN1cnJlbnRQcm9qO1xuICAgIGxldCB0YXNrO1xuICAgIGxldCBuZXdJbmZvO1xuICAgIGxldCBidG47XG4gICAgZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmKGUudGFyZ2V0Lm1hdGNoZXMoJy5hZGQtcHJvamVjdC1idG4nKSB8fCBlLnRhcmdldC5tYXRjaGVzKCcjYWRkLWljb24nKSkge1xuICAgICAgICAgICAgY29uc3QgZ2V0UHJvalRpdGxlID0gZ2V0UHJvak5hbWUoKTtcbiAgICAgICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdhZGRQcm9qJywgZ2V0UHJvalRpdGxlLnZhbHVlKTtcbiAgICAgICAgICAgIFVJLm1ha2VQcm9qZWN0QnRuKGdldFByb2pUaXRsZS52YWx1ZSk7XG4gICAgICAgICAgICBnZXRQcm9qVGl0bGUudmFsdWUgPSAnJztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnLmRlbGV0ZS1wcm9qZWN0LWJ0bicpKSB7XG4gICAgICAgICAgICBwdWJzdWIucHVibGlzaCgnZGxldGVQcm9qJyk7XG4gICAgICAgICAgICBwdWJzdWIucHVibGlzaCgnc2F2ZURhdGEnKTtcbiAgICAgICAgICAgIFVJLnJlbW92ZVByb2plY3RCdG4oKTtcbiAgICAgICAgICAgIFVJLmVtcHR5VG9Eb1BhZ2UoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhgLnByb2plY3QtYnRuYCkpIHtcbiAgICAgICAgICAgIGlmIChidG4gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGJ0bi5zdHlsZS5jb2xvciA9ICcjOTJDMUIyJztcbiAgICAgICAgICAgICAgICBidG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZS50YXJnZXQudGV4dENvbnRlbnR9LXByb2plY3QtYnRuYCk7XG4gICAgICAgICAgICBidG4uc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuICAgICAgICAgICAgYnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjOTJDMUIyJ1xuICAgICAgICAgICAgVUkuaGVhZGVyRGlzcGxheShlLnRhcmdldC50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICBVSS5lbXB0eVRvRG9MaXN0KCk7XG4gICAgICAgICAgICBVSS5yZW5kZXJTYXZlZFRhc2soKTtcbiAgICAgICAgICAgIFVJLm1ha2VBZGRUYXNrQnRuKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJy5hZGQtdGFzay1idG4nKSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgVUkudGFza0Zvcm0oZ2V0UHJvalRpdGxlKCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmKGUudGFyZ2V0Lm1hdGNoZXMoJy5wcm9qZWN0LXRpdGxlJykpIHtcbiAgICAgICAgICAgIFVJLmNoYW5nZVByb2pOYW1lKGUudGFyZ2V0LnRleHRDb250ZW50KTtcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJyNzYXZlLWJ0bicpKSB7XG4gICAgICAgICAgICBwdWJzdWIucHVibGlzaCgnc2F2ZU5hbWUnLCBjdXJyZW50UHJvaik7XG4gICAgICAgICAgICBwdWJzdWIucHVibGlzaCgnc2F2ZURhdGEnKTtcbiAgICAgICAgICAgIFVJLm5ld1R0bGVCdG4oY3VycmVudFByb2opO1xuICAgICAgICAgICAgVUkuaGVhZGVyRGlzcGxheShnZXROZXdUdGxlKCkudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCcjY2FuY2VsLWJ0bicpKSB7XG4gICAgICAgICAgICBVSS5oZWFkZXJEaXNwbGF5KGN1cnJlbnRQcm9qKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnI3N1Ym1pdC10YXNrLWJ0bicpKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBVSS5yZW1vdmVCbHVyQXR0cmlidXRlKCk7XG4gICAgICAgICAgICBsZXQgcHJvalRpdGxlID0gZ2V0UHJvalRpdGxlKCk7XG4gICAgICAgICAgICBuZXdJbmZvID0gZ2V0VGFza0luZm8oKTtcbiAgICAgICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdjcmVhdGVUYXNrJywgcHJvalRpdGxlLCBuZXdJbmZvLnRhc2ssIG5ld0luZm8uZGVzY3JpcHRpb24sIG5ld0luZm8uZGF0ZSwgbmV3SW5mby5wcmlvcml0eUxpc3QpO1xuICAgICAgICAgICAgVUkudGFza0Rpc3BsYXkobmV3SW5mby50YXNrLCBuZXdJbmZvLmRlc2NyaXB0aW9uLCBuZXdJbmZvLmRhdGUsIG5ld0luZm8ucHJpb3JpdHlMaXN0KTtcbiAgICAgICAgICAgIFVJLmhlYWRlckRpc3BsYXkocHJvalRpdGxlKTtcbiAgICAgICAgICAgIFVJLnVwZGF0ZVVJVGFza0J0bigpO1xuICAgICAgICAgICAgcHVic3ViLnB1Ymxpc2goJ3NhdmVEYXRhJywgc2F2ZURhdGEpOyBcbiAgICAgICAgICAgIFVJLnJlbW92ZVRhc2tGb3JtKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJyNjYW5jZWwtdGFzay1idG4nKSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgVUkucmVtb3ZlQmx1ckF0dHJpYnV0ZSgpO1xuICAgICAgICAgICAgVUkucmVtb3ZlVGFza0Zvcm0oKTtcbiAgICAgICAgICAgIFVJLmhlYWRlckRpc3BsYXkoZ2V0UHJvalRpdGxlKCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCcjZGVsZXRlLXRhc2snKSB8fCBlLnRhcmdldC5tYXRjaGVzKCcjZGVsZXRlLWljb24nKSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgVUkuZGVsZXRlVGFza0Rpc3BsYXkoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJyNlZGl0LXRhc2snKSB8fCBlLnRhcmdldC5tYXRjaGVzKCcjZWRpdC1pY29uJykpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRhc2sgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpO1xuICAgICAgICAgICAgVUkudGFza0Zvcm0oKTtcbiAgICAgICAgICAgIFVJLmN1cnJlbnRUYXNrSW5mbyh0YXNrLCBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdC1uYW1lJykpXG4gICAgICAgICAgICBVSS5jcmVhdGVTYXZlQnRuKCk7XG4gICAgICAgICAgICBVSS5yZXBsYWNlQnRucyh0YXNrKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnI3NhdmUtdGFzay1idG4nKSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgVUkucmVtb3ZlQmx1ckF0dHJpYnV0ZSgpO1xuICAgICAgICAgICAgVUkucmVtb3ZlRGF0YU5hbWVBdHRyaWJ1dGUodGFzayk7XG4gICAgICAgICAgICBwdWJzdWIucHVibGlzaCgnZWRpdFRhc2snLCB0YXNrKTtcbiAgICAgICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdzYXZlRGF0YScpO1xuICAgICAgICAgICAgbmV3SW5mbyA9IGdldFRhc2tJbmZvKCk7XG4gICAgICAgICAgICBVSS50YXNrRGlzcGxheShuZXdJbmZvLnRhc2ssIG5ld0luZm8uZGVzY3JpcHRpb24sIG5ld0luZm8uZGF0ZSwgbmV3SW5mby5wcmlvcml0eUxpc3QpO1xuICAgICAgICAgICAgVUkucmVtb3ZlVGFza0Zvcm0oKTtcbiAgICAgICAgICAgIFVJLnVwZGF0ZVVJVGFza0J0bigpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnLnRvZGF5JykgfHwgZS50YXJnZXQudGV4dENvbnRlbnQgPT0gXCJUb2RheVwiKSB7XG4gICAgICAgICAgICBVSS5lbXB0eVRvRG9QYWdlKCk7XG4gICAgICAgICAgICBVSS5oZWFkZXJEaXNwbGF5KCdUT0RBWScpO1xuICAgICAgICAgICAgdG9kYXlBbmRVcGNvbWluZ1Rhc2soKS5kaXNwbGF5VG9kYXlUYXNrcygpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnLnVwY29taW5nJykgfHwgZS50YXJnZXQudGV4dENvbnRlbnQgPT0gXCJVcGNvbWluZ1wiKSB7XG4gICAgICAgICAgICBVSS5lbXB0eVRvRG9QYWdlKCk7XG4gICAgICAgICAgICBVSS5oZWFkZXJEaXNwbGF5KCdVUENPTUlORycpO1xuICAgICAgICAgICAgdG9kYXlBbmRVcGNvbWluZ1Rhc2soKS5kaXNwbGF5VXBjb21pbmdUYXNrKCk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgZC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnLmNoZWNrLWJveCcpKSB7XG4gICAgICAgICAgICBsZXQgdGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKSk7XG4gICAgICAgICAgICBwdWJzdWIucHVibGlzaCgnc2F2ZUJveCcsdGFzaywgZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdpZCcpLCBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IpO1xuICAgICAgICAgICAgcHVic3ViLnB1Ymxpc2goJ3NhdmVEYXRhJyk7IFxuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5leHBvcnQgeyBET01FdmVudHMgfSIsImltcG9ydCB7IGFsbFByb2plY3RzIH0gZnJvbSBcIi4vbG9naWNcIjtcblxuZnVuY3Rpb24gc2F2ZURhdGEoKSB7IFxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWxsUHJvamVjdERhdGFcIiwgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdHMpKTtcbiAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWxsUHJvamVjdERhdGFcIikpO1xufTtcblxuZXhwb3J0IHsgc2F2ZURhdGEgfVxuIiwiaW1wb3J0IHsgZ2V0VGFza0luZm8sIGdldE5ld1R0bGUsIGdldFByb2pUaXRsZSwgVUkgfSBmcm9tIFwiLi9ET00uanNcIjtcbmltcG9ydCB7IHNhdmVEYXRhIH0gZnJvbSBcIi4vbG9jYWwtc3RvcmFnZS5qc1wiO1xuXG5jb25zdCBhbGxQcm9qZWN0cyA9IFtdO1xuXG5jb25zdCBwcm9qZWN0TWFuYWdlbWVudCA9ICgpID0+IHtcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKHRpdGxlKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBtYWtlUHJvamVjdCh0aXRsZSk7XG4gICAgICAgIGFsbFByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGVkaXRQcm9qZWN0TmFtZSA9IChpLCBuYW1lKSA9PiB7XG4gICAgICAgICBhbGxQcm9qZWN0c1tpXS5wcm9qZWN0RGV0YWlscy5wcm9qZWN0TmFtZSA9IG5hbWVcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAoaSkgPT4ge1xuICAgICAgICBhbGxQcm9qZWN0cy5zcGxpY2UoaSwxKTtcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IHZpZXdQcm9qZWN0cyA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYWxsUHJvamVjdHMpO1xuICAgIH07XG4gICAgXG4gICAgY29uc3QgbWFrZVByb2plY3QgPSAocHJvamVjdFRpdGxlKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3REZXRhaWxzID0ge1xuICAgICAgICAgICAgcHJvamVjdE5hbWU6IHByb2plY3RUaXRsZSxcbiAgICAgICAgICAgIGFsbFRhc2tzOiBbXVxuICAgICAgICB9O1xuICAgIFxuICAgICAgICBjb25zdCB0YXNrTWFuYWdlbWVudCA9IG5ldyB0YXNrT3BlcmF0aW9ucyhwcm9qZWN0RGV0YWlscyk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2sgPSB0YXNrTWFuYWdlbWVudC5hZGRUYXNrO1xuICAgICAgICBjb25zdCBkZWxldGVUYXNrID0gdGFza01hbmFnZW1lbnQuZGVsZXRlVGFzaztcbiAgICAgICAgY29uc3QgZWRpdFRhc2sgPSB0YXNrTWFuYWdlbWVudC5lZGl0VGFza3M7XG4gICAgXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcm9qZWN0RGV0YWlscyxcbiAgICAgICAgICAgIGFkZFRhc2ssXG4gICAgICAgICAgICBkZWxldGVUYXNrLFxuICAgICAgICAgICAgZWRpdFRhc2ssXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZFByb2plY3QsXG4gICAgICAgIGRlbGV0ZVByb2plY3QsXG4gICAgICAgIHZpZXdQcm9qZWN0cyxcbiAgICAgICAgZWRpdFByb2plY3ROYW1lXG4gICAgfTtcbn07XG5cbmNvbnN0IHByb2plY3QgPSBwcm9qZWN0TWFuYWdlbWVudCgpO1xuXG5jbGFzcyB0YXNrT3BlcmF0aW9ucyB7XG4gICAgY29uc3RydWN0b3IocHJvamVjdCkgIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICB9XG5cbiAgICBhZGRUYXNrID0gKG5hbWUsIGRldGFpbHMsIGRhdGUsIHByaW9yaXR5TGlzdCwgY2hlY2spID0+IHtcbiAgICAgICAgY29uc3QgdGFza0RldGFpbHMgPSBuZXcgdGFzayhuYW1lLCBkZXRhaWxzLCBkYXRlLCBwcmlvcml0eUxpc3QsIGNoZWNrKTtcblxuICAgICAgICB0aGlzLnByb2plY3QuYWxsVGFza3MucHVzaCh0YXNrRGV0YWlscyk7XG4gICAgfVxuXG4gICAgZGVsZXRlVGFzayhpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3REZXRhaWxzLmFsbFRhc2tzLnNwbGljZShpLDEpXG4gICAgfTtcbn07XG5cbmNsYXNzIHRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRhc2tOYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHlMaXN0LCBjaGVja0JveCkge1xuICAgICAgICB0aGlzLnRhc2tOYW1lID0gdGFza05hbWU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eUxpc3QgPSBwcmlvcml0eUxpc3Q7XG4gICAgICAgIHRoaXMuY2hlY2tCb3ggPSBjaGVja0JveDtcbiAgICB9O1xuXG4gICAgc2V0KCkge1xuICAgICAgICBbdGhpcy50YXNrTmFtZSwgdGhpcy5kZXNjcmlwdGlvbiwgdGhpcy5kdWVEYXRlLCB0aGlzLnByaW9yaXR5TGlzdF0gPSB2YWx1ZS5zcGxpdChcIiBcIik7XG4gICAgfTtcbn07XG5cbmNvbnN0IHN0b3JlQ2hlY2tCb3ggPSAobmFtZU9mVGFzaykgPT4ge1xuICAgIGNvbnN0IG5hbWVPZlByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10aXRsZScpLnRleHRDb250ZW50O1xuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IGFsbFByb2plY3RzLmZpbmRJbmRleChwID0+IHAucHJvamVjdERldGFpbHMucHJvamVjdE5hbWUgPT09IG5hbWVPZlByb2plY3QpO1xuICAgIGNvbnN0IHRhc2tJbmRleCA9IGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0ucHJvamVjdERldGFpbHMuYWxsVGFza3MuZmluZEluZGV4KHAgPT4gcC50YXNrTmFtZSA9PT0gbmFtZU9mVGFzayk7XG5cbiAgICBmdW5jdGlvbiBjaGVjaygpIHtcbiAgICAgICAgYWxsUHJvamVjdHNbcHJvamVjdEluZGV4XS5wcm9qZWN0RGV0YWlscy5hbGxUYXNrc1t0YXNrSW5kZXhdLmNoZWNrQm94ID0gJ2NoZWNrZWQnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVuY2hlY2tlZCgpIHtcbiAgICAgICAgYWxsUHJvamVjdHNbcHJvamVjdEluZGV4XS5wcm9qZWN0RGV0YWlscy5hbGxUYXNrc1t0YXNrSW5kZXhdLmNoZWNrQm94ID0gJ3VuY2hlY2tlZCc7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB7IGNoZWNrLCB1bmNoZWNrZWQgfVxufTtcblxuZnVuY3Rpb24gc2F2ZUNoZWNrQm94KGJveCxuYW1lT2ZUYXNrKSB7XG4gICAgY29uc3QgY2hlY2tCb3ggPSBzdG9yZUNoZWNrQm94KG5hbWVPZlRhc2spOyBcbiAgICBpZiAoYm94LmNoZWNrZWQgPT0gdHJ1ZSkge1xuICAgICAgICBjaGVja0JveC5jaGVjaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNoZWNrQm94LnVuY2hlY2tlZCgpO1xuICAgIH1cbn07XG5cbmZ1bmN0aW9uIGFkZFByb2plY3QobmFtZU9mUHJvamVjdCkge1xuICAgIHByb2plY3QuYWRkUHJvamVjdChuYW1lT2ZQcm9qZWN0KTtcbiAgICBzYXZlRGF0YSgpO1xufTtcblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdCgpIHtcbiAgICBjb25zdCBpbmRleCA9IGZpbmRJbmRleC5wcm9qZWN0SW5kZXgoKTtcbiAgICBwcm9qZWN0LmRlbGV0ZVByb2plY3QoaW5kZXgpO1xufTtcblxuY29uc3QgZmluZEluZGV4ID0gKCgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0SW5kZXggPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBnZXRQcm9qVGl0bGUoKTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBhbGxQcm9qZWN0cy5maW5kSW5kZXgocCA9PiBwLnByb2plY3REZXRhaWxzLnByb2plY3ROYW1lID09PSBuYW1lKTtcbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH07XG5cbiAgICBjb25zdCB0YXNrSW5kZXggPSAobmFtZVRhc2spID0+IGFsbFByb2plY3RzW3Byb2plY3RJbmRleCgpXS5wcm9qZWN0RGV0YWlscy5hbGxUYXNrcy5maW5kSW5kZXgocCA9PiBwLnRhc2tOYW1lID09PSBuYW1lVGFzayk7XG5cbiAgICByZXR1cm4geyBwcm9qZWN0SW5kZXggLCB0YXNrSW5kZXh9XG59KSgpO1xuXG5mdW5jdGlvbiBkZWxldGVUYXNrKG5hbWVUYXNrKSB7XG4gICAgY29uc3QgcHJvakluZGV4ID0gZmluZEluZGV4LnByb2plY3RJbmRleCgpO1xuICAgIGNvbnN0IHRhc2tJbmRleCA9IGZpbmRJbmRleC50YXNrSW5kZXgobmFtZVRhc2spO1xuICAgIGFsbFByb2plY3RzW3Byb2pJbmRleF0uZGVsZXRlVGFzayh0YXNrSW5kZXgpO1xuICAgIHNhdmVEYXRhKCk7XG59O1xuXG5mdW5jdGlvbiBzYXZlTmFtZShjdXJyZW50UHJvaikge1xuICAgIGNvbnN0IG5ld1RpdGxlID0gZ2V0TmV3VHRsZSgpO1xuICAgIGNvbnN0IGluZGV4ID0gYWxsUHJvamVjdHMuZmluZEluZGV4KHAgPT4gcC5wcm9qZWN0RGV0YWlscy5wcm9qZWN0TmFtZSA9PT0gY3VycmVudFByb2opO1xuICAgIHByb2plY3QuZWRpdFByb2plY3ROYW1lKGluZGV4LCBuZXdUaXRsZS52YWx1ZSk7XG4gICAgcHJvamVjdC52aWV3UHJvamVjdHMoKTtcbn07XG5cbmZ1bmN0aW9uIGVkaXRUYXNrKG5hbWVUYXNrKSB7XG4gICAgY29uc3QgcHJvamVjdEluZGV4ID0gZmluZEluZGV4LnByb2plY3RJbmRleCgpO1xuICAgIGNvbnN0IHRhc2tJbmRleCA9IGZpbmRJbmRleC50YXNrSW5kZXgobmFtZVRhc2spO1xuICAgIGNvbnN0IG5ld0luZm8gPSBnZXRUYXNrSW5mbygpO1xuICAgIGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0ucHJvamVjdERldGFpbHMuYWxsVGFza3NbdGFza0luZGV4XS50YXNrTmFtZSA9IG5ld0luZm8udGFzaztcbiAgICBhbGxQcm9qZWN0c1twcm9qZWN0SW5kZXhdLnByb2plY3REZXRhaWxzLmFsbFRhc2tzW3Rhc2tJbmRleF0uZGVzY3JpcHRpb24gPSBuZXdJbmZvLmRlc2NyaXB0aW9uO1xuICAgIGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0ucHJvamVjdERldGFpbHMuYWxsVGFza3NbdGFza0luZGV4XS5kdWVEYXRlID0gbmV3SW5mby5kYXRlO1xuICAgIGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0ucHJvamVjdERldGFpbHMuYWxsVGFza3NbdGFza0luZGV4XS5wcmlvcml0eUxpc3QgPSBuZXdJbmZvLnByaW9yaXR5TGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2sobmFtZVByb2osIHRzaywgZGVzY3JwLCBkdGUsIHByTGlzdCkge1xuICAgIGNvbnN0IGluZGV4ID0gYWxsUHJvamVjdHMuZmluZEluZGV4KHAgPT4gcC5wcm9qZWN0RGV0YWlscy5wcm9qZWN0TmFtZSA9PT0gbmFtZVByb2opO1xuICAgIGFsbFByb2plY3RzW2luZGV4XS5hZGRUYXNrKHRzayxkZXNjcnAsZHRlLHByTGlzdCk7XG59O1xuXG5mdW5jdGlvbiBkaXNhYmxlUHJldmlvdXNEYXRlcyhkYXRlKSB7XG4gICAgbGV0IGR0VG9kYXkgPSBuZXcgRGF0ZSgpO1xuIFxuICAgIGxldCBtb250aCA9IGR0VG9kYXkuZ2V0TW9udGgoKSArIDE7XG4gICAgbGV0IGRheSA9IGR0VG9kYXkuZ2V0RGF0ZSgpO1xuICAgIGxldCB5ZWFyID0gZHRUb2RheS5nZXRGdWxsWWVhcigpO1xuICAgIGlmKG1vbnRoIDwgMTApXG4gICAgICAgIG1vbnRoID0gJzAnICsgbW9udGgudG9TdHJpbmcoKTtcbiAgICBpZihkYXkgPCAxMClcbiAgICAgICAgZGF5ID0gJzAnICsgZGF5LnRvU3RyaW5nKCk7XG4gICAgXG4gICAgbGV0IG1heERhdGUgPSB5ZWFyICsgJy0nICsgbW9udGggKyAnLScgKyBkYXk7XG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ21pbicsIG1heERhdGUpO1xufVxuXG5jb25zdCB0b2RheUFuZFVwY29taW5nVGFzayA9ICgpID0+IHtcbiAgICBjb25zdCB0b2RheURhdGUgPSAoKSA9PiB7XG4gICAgICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxldCBkZCA9IFN0cmluZyh0b2RheS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGxldCBtbSA9IFN0cmluZyh0b2RheS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTsgXG4gICAgICAgIGxldCB5eXl5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcblxuICAgICAgICByZXR1cm4gdG9kYXkgPSB5eXl5ICsgJy0nICsgbW0gKyAnLScgKyBkZDtcbiAgICB9XG5cbiAgICBjb25zdCBkaXNwbGF5VG9kYXlUYXNrcyA9ICgpID0+IGFsbFByb2plY3RzLmZvckVhY2gocCA9PiBwLnByb2plY3REZXRhaWxzLmFsbFRhc2tzLmZvckVhY2godCA9PiB7XG4gICAgICAgIGlmICh0LmR1ZURhdGUgPT0gdG9kYXlEYXRlKCkpIHtcbiAgICAgICAgICAgIFVJLnRhc2tEaXNwbGF5KHQudGFza05hbWUsIHQuZGVzY3JpcHRpb24sIHQuZHVlRGF0ZSwgdC5wcmlvcml0eUxpc3QsIHQuY2hlY2tCb3gpO1xuICAgICAgICB9XG4gICAgfSkpOyBcbiAgICBcbiAgICBjb25zdCBkaXNwbGF5VXBjb21pbmdUYXNrID0gKCkgPT4gIGFsbFByb2plY3RzLmZvckVhY2gocCA9PiBwLnByb2plY3REZXRhaWxzLmFsbFRhc2tzLmZvckVhY2godCA9PiB7XG4gICAgICAgIGlmICh0LmR1ZURhdGUgPiB0b2RheURhdGUoKSkge1xuICAgICAgICAgICAgVUkudGFza0Rpc3BsYXkodC50YXNrTmFtZSwgdC5kZXNjcmlwdGlvbiwgdC5kdWVEYXRlLCB0LnByaW9yaXR5TGlzdCwgdC5jaGVja0JveCk7XG4gICAgICAgIH1cbiAgICB9KSk7IFxuICAgIFxuICAgIHJldHVybiB7IGRpc3BsYXlUb2RheVRhc2tzLCBkaXNwbGF5VXBjb21pbmdUYXNrIH1cbn1cblxuZXhwb3J0IHtcbiAgICBhbGxQcm9qZWN0cyxcbiAgICBkaXNhYmxlUHJldmlvdXNEYXRlcyxcbiAgICBzdG9yZUNoZWNrQm94LFxuICAgIHNhdmVDaGVja0JveCxcbiAgICBjcmVhdGVUYXNrLFxuICAgIHByb2plY3QsXG4gICAgYWRkUHJvamVjdCxcbiAgICBkZWxldGVUYXNrLFxuICAgIGVkaXRUYXNrLFxuICAgIHNhdmVOYW1lLFxuICAgIHRvZGF5QW5kVXBjb21pbmdUYXNrLFxuICAgIGRlbGV0ZVByb2plY3QsXG4gICAgZmluZEluZGV4LFxufVxuXG4iLCJjbGFzcyBQdWJzdWIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgdGhpcy50cmFja2VyID0ge1xuICAgICAgICAvLyBrZXk6IGV2ZW50bmFtZSwgdmFsdWU6IFsgZnVuY3MgXVxuICAgICAgfTtcbiAgICB9XG4gIFxuICAgIHN1YnNjcmliZShldmVudE5hbWUsIGZ1bmMpIHtcbiAgICAgIGlmICh0aGlzLnRyYWNrZXJbZXZlbnROYW1lXSkge1xuICAgICAgICB0aGlzLnRyYWNrZXJbZXZlbnROYW1lXS5wdXNoKGZ1bmMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50cmFja2VyW2V2ZW50TmFtZV0gPSBbZnVuY107XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICB1bnN1YnNjcmliZTogKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGZ1bmNzID0gdGhpcy50cmFja2VyW2V2ZW50TmFtZV07XG4gICAgICAgICAgY29uc3QgaWR4ID0gZnVuY3MuaW5kZXhPZihmdW5jKTtcbiAgICAgICAgICBpZiAoaWR4ID4gLTEpIHtcbiAgICAgICAgICAgIGZ1bmNzLnNwbGljZShpZHgsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIFxuICAgIHB1Ymxpc2goZXZlbnROYW1lLCAuLi5hcmdzKSB7XG4gICAgICBjb25zdCBmdW5jcyA9IHRoaXMudHJhY2tlcltldmVudE5hbWVdO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZnVuY3MpKSB7XG4gICAgICAgIGZ1bmNzLmZvckVhY2goKGZ1bmMpID0+IHtcbiAgICAgICAgICBmdW5jLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuY29uc3QgcHVic3ViID0gbmV3IFB1YnN1YigpO1xuXG5leHBvcnQgeyBwdWJzdWIgfSIsImltcG9ydCB7IGFsbFByb2plY3RzLCBhZGRQcm9qZWN0IH0gZnJvbSBcIi4vbG9naWNcIjtcbmltcG9ydCB7IFVJIH0gZnJvbSBcIi4vRE9NXCI7XG5pbXBvcnQgeyBzYXZlRGF0YSB9IGZyb20gXCIuL2xvY2FsLXN0b3JhZ2VcIjtcblxuZnVuY3Rpb24gcmVuZGVyVHRsZUJ0bihwcm9qZWN0RGF0YSkge1xuICAgIHByb2plY3REYXRhLmZvckVhY2gocCA9PiB7XG4gICAgICAgIGFkZFByb2plY3QocC5wcm9qZWN0RGV0YWlscy5wcm9qZWN0TmFtZSk7XG4gICAgICAgIFVJLm1ha2VQcm9qZWN0QnRuKHAucHJvamVjdERldGFpbHMucHJvamVjdE5hbWUpO1xuICAgIH0pO1xufTtcblxuZnVuY3Rpb24gcmVuZGVyVGFza0Rpc3BsYXkocHJvamVjdERhdGEpIHtcbiAgICBwcm9qZWN0RGF0YS5mb3JFYWNoKHAgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBhbGxQcm9qZWN0cy5maW5kSW5kZXgocHJvamVjdCA9PiBwcm9qZWN0LnByb2plY3REZXRhaWxzLnByb2plY3ROYW1lID09PSAocC5wcm9qZWN0RGV0YWlscy5wcm9qZWN0TmFtZSkpO1xuICAgICAgICBpZiAocC5wcm9qZWN0RGV0YWlscy5hbGxUYXNrcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIHAucHJvamVjdERldGFpbHMuYWxsVGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICBhbGxQcm9qZWN0c1twcm9qZWN0SW5kZXhdLmFkZFRhc2sodGFzay50YXNrTmFtZSwgdGFzay5kZXNjcmlwdGlvbiwgdGFzay5kdWVEYXRlLCB0YXNrLnByaW9yaXR5TGlzdCwgdGFzay5jaGVja0JveCk7XG4gICAgICAgICAgICAgICAgc2F2ZURhdGEoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYWxsUHJvamVjdHMpO1xuICAgICAgICB9O1xuICAgIH0pO1xufTtcblxuZnVuY3Rpb24gcmVuZGVyU2F2ZWREYXRhKCkge1xuICAgIGNvbnN0IGFsbFByb2plY3REYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFsbFByb2plY3REYXRhXCIpKTtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmxlbmd0aCAhPT0gMCkge1xuICAgICAgaWYgKGFsbFByb2plY3RzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgcmVuZGVyVHRsZUJ0bihhbGxQcm9qZWN0RGF0YSk7XG4gICAgICAgICAgcmVuZGVyVGFza0Rpc3BsYXkoYWxsUHJvamVjdERhdGEpO1xuICAgICAgfTtcbiAgICB9OyBcbn07XG5cbmV4cG9ydCB7IHJlbmRlclR0bGVCdG4sIHJlbmRlclRhc2tEaXNwbGF5LCByZW5kZXJTYXZlZERhdGEgfVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IFVJIH0gZnJvbSBcIi4vRE9NXCI7XG5pbXBvcnQgeyB0b2RheUFuZFVwY29taW5nVGFzayB9IGZyb20gXCIuL2xvZ2ljXCI7XG5pbXBvcnQgeyBET01FdmVudHMgfSBmcm9tICcuL0RPTV9ldmVudHMuanMnXG5pbXBvcnQgeyByZW5kZXJTYXZlZERhdGEgfSBmcm9tIFwiLi9yZW5kZXJTdG9yYWdlXCI7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIHJlbmRlclNhdmVkRGF0YSgpO1xuICAgIFVJLmVtcHR5VG9Eb1BhZ2UoKTtcbiAgICBVSS5oZWFkZXJEaXNwbGF5KCdUT0RBWScpO1xuICAgIHRvZGF5QW5kVXBjb21pbmdUYXNrKCkuZGlzcGxheVRvZGF5VGFza3MoKTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIERPTUV2ZW50cygpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
