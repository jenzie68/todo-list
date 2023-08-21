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

eval("const allProject = [];\n\nconst addProject = (title) => {\n    \n    const allTasks = [];\n\n    const addTask = (taskName,detail = 'none',dueDate, priorityList = 'not important') => {\n        allTasks.push(\n            {\n                name: taskName,\n            description: detail, \n            date: dueDate,\n            priority : priorityList\n            }\n        )\n        console.log(allTasks);\n    };\n\n    const deleteTask = (index) => {\n        allTasks.splice(index,1);\n        console.log('task has been deleted');\n        console.log(allTasks);\n    };\n\n    const deleteProject = () => {\n        const alert = prompt('are you sure you want your project deleted?')\n        if(alert == 'yes') {\n        allProject.splice(allProject.indexOf(title),1);\n        }\n        console.log(allProject);\n    }\n\n    console.log(allProject);\n\n    return {\n        title,\n        addTask, \n        allTasks,\n        deleteProject,\n        deleteTask\n    };\n};\n\nfunction makeBtn(name) {\n    const btn = document.createElement('button');\n    const projects = document.querySelector('.content');\n    btn.textContent = name;\n    projects.appendChild(btn);\n    btn.addEventListener('click', () => {\n        const addTaskbtn = document.createElement('button');\n        const tasks = document.querySelector('.tasks');\n        addTaskbtn.textContent = 'addtask';\n        tasks.appendChild(addTaskbtn);\n        addTaskbtn.addEventListener('click', () => {\n            const index = allProject.findIndex(i => i.title == name);\n            const taskName = prompt('task name');\n            allProject[index].addTask(taskName);\n            const div = document.createElement('div');\n            div.textContent = taskName;\n            const tasks = document.querySelector('.tasks');\n            tasks.appendChild(div);\n            console.log(allProject);\n        });\n    });\n};\n\nconst btn = document.createElement('button');\nconst content = document.querySelector('.content');\nbtn.textContent = 'Add Project';\ncontent.appendChild(btn);\nbtn.addEventListener('click',() => {\n    const title = prompt('your project name','study');\n    const project = addProject(title);\n    allProject.push(project);\n    makeBtn(title);\n});\n\nconsole.log(allProject);\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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