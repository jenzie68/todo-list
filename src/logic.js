import { getTaskInfo, getNewTtle, getProjTitle, UI } from "./DOM.js";
import { saveData } from "./local-storage.js";

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
  saveData();
}

function deleteProject() {
  const index = findIndex.projectIndex();
  project.deleteProject(index);
}

const findIndex = (() => {
  const projectIndex = (name = getProjTitle()) => {
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
  saveData();
}

function saveName(currentProj) {
  const newTitle = getNewTtle();
  const index = allProjects.findIndex(
    (p) => p.projectDetails.projectName === currentProj,
  );
  project.editProjectName(index, newTitle.value);
  project.viewProjects();
}

function editTask(nameTask, nameOfProject) {
  const projectIndex = findIndex.projectIndex(nameOfProject);
  const taskIndex = findIndex.taskIndex(nameTask, nameOfProject);
  const newInfo = getTaskInfo();
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
          UI.taskDisplay(
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
          UI.taskDisplay(
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

export {
  allProjects,
  disablePreviousDates,
  storeCheckBox,
  saveCheckBox,
  createTask,
  project,
  addProject,
  deleteTask,
  editTask,
  saveName,
  todayAndUpcomingTask,
  deleteProject,
  findIndex,
  findProjectName,
};
