import { UI, getProjTitle } from "./DOM";
import { addProject, deleteProject, saveName } from "./logic";
import { saveData } from "./local-storage";

const DOMEvents = () => {
    const d = document;
    let currentProj;
    d.addEventListener('click', (e) => {
        if(e.target.matches('.add-project-btn') || e.target.matches('#add-icon')) {
            const getProjTitle = getProjName();
            addProject(getProjTitle.value);
            UI.makeProjectBtn(getProjTitle.value);
            getProjTitle.value = '';
            console.log(allProjects);
        }
        if (e.target.matches('.delete-project-btn')) {
            deleteProject();
            saveData(); 
            UI.removeProjectBtn();
            UI.emptyToDoPage();
        }
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
        if(e.target.matches('.project-title')) {
            UI.changeProjName(e.target.textContent);
            currentProj = e.target.textContent;
        }
        if (e.target.matches(`${e.target.textContent}-btn`)) {
            headerDisplay(e.target.textContent);
        }
        if (e.target.matches('#save-btn')) {
            saveName(currentProj);
            saveData();
            UI.newTtleBtn(currentProj);
            UI.headerDisplay(getNewTtle().value);
        }
        if (e.target.matches('#cancel-btn')) {
            UI.headerDisplay(currentProj);
        }
        if (e.target.matches('#submit-task-btn')) {
            e.preventDefault();
            UI.submitTaskForm(getProjTitle());
        }
        if (e.target.matches('#cancel-task-btn')) {
            e.preventDefault();
            UI.headerDisplay(getProjTitle());
        }
    });
};

export { DOMEvents }