import { allProjects, addProject } from "./logic";
import { UI } from "./DOM";
import { saveData } from "./local-storage";

function renderTtleBtn(projectData) {
  projectData.forEach((p) => {
    addProject(p.projectDetails.projectName);
    UI.makeProjectBtn(p.projectDetails.projectName);
  });
}

function renderTaskDisplay(projectData) {
  projectData.forEach((p) => {
    const projectIndex = allProjects.findIndex(
      (project) =>
        project.projectDetails.projectName === p.projectDetails.projectName,
    );
    if (p.projectDetails.allTasks.length !== 0) {
      p.projectDetails.allTasks.forEach((task) => {
        allProjects[projectIndex].addTask(
          task.taskName,
          task.description,
          task.dueDate,
          task.priorityList,
          task.checkBox,
        );
        saveData();
      });
      console.log(allProjects);
    }
  });
}

function renderSavedData() {
  const allProjectData = JSON.parse(localStorage.getItem("allProjectData"));
  if (localStorage.length !== 0) {
    if (allProjects.length == 0) {
      renderTtleBtn(allProjectData);
      renderTaskDisplay(allProjectData);
    }
  }
}

export { renderTtleBtn, renderTaskDisplay, renderSavedData };
