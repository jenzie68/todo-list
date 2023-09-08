/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const allProjects = [];\n\nconst addProject = (title) => {\n    const project = makeProject(title);\n    allProjects.push(project);\n    console.log(allProjects);\n};\n\nconst makeProject = (projectTitle) => {\n    const project = {\n        projectName: projectTitle,\n        allTasks: []\n    }\n\n    const controlFeature = projectOperations(project);\n    const addTask = controlFeature.addTask;\n    const deleteTask = controlFeature.deleteTask;\n    const deleteProject = controlFeature.deleteProject;\n    const editTask = controlFeature.editTasks;\n\n    return {\n        project,\n        deleteProject,\n        addTask,\n        deleteTask,\n        editTask,\n    };\n};\n\nconst projectOperations = (project) => {\n    const addTask = (taskName, details,dueDate,priorityList) => {\n        const task = {\n            name: taskName,\n            description: details,\n            date: dueDate,\n            priority: priorityList\n        };\n\n        project.allTasks.push(task);\n        viewProjects();\n    \n        return {\n            taskName,\n            details,\n            dueDate,\n            priorityList,\n        };\n    };\n\n\n    const editTasks = (i) => {\n        return project.allTasks[i]\n    };\n    \n    const deleteTask = (index) => {\n        return project.allTasks.splice(index,1),\n        viewProjects();\n    };\n    \n    const deleteProject = (index) => {\n        index = allProjects.findIndex(p => (p.project.projectName === projectName));\n        allProjects.splice(index,1);\n        viewProjects();\n    };\n\n    return {\n        addTask,\n        editTasks,\n        deleteTask,\n        deleteProject\n    };\n};\n\nconst viewProjects = () => {\n    console.log(allProjects);\n};\n\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;