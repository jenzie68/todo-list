import { UI, getProjTitle, getNewTtle, getProjName, getTaskInfo } from "./DOM";
import { addProject, deleteProject, saveName, allProjects, createTask, editTask, saveCheckBox} from "./logic";
import { saveData } from "./local-storage";

const DOMEvents = () => {
    const d = document;
    let currentProj;
    let task;
    let newInfo;
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
            let projTitle = getProjTitle();
            newInfo = getTaskInfo();
            createTask(projTitle, newInfo.task, newInfo.description, newInfo.date, newInfo.priorityList);
            UI.taskDisplay(newInfo.task, newInfo.description, newInfo.date, newInfo.priorityList);
            UI.headerDisplay(projTitle);
            UI.updateUITaskBtn();
            saveData();
            
        }
        if (e.target.matches('#cancel-task-btn')) {
            e.preventDefault();
            UI.headerDisplay(getProjTitle());
        }
        if (e.target.matches('#delete-task') || e.target.matches('#delete-icon')) {
            e.preventDefault();
            UI.deleteTaskDisplay(e.target.getAttribute('data-name'));
        }
        if (e.target.matches('#edit-task') || e.target.matches('#edit-icon')) {
            e.preventDefault();
            task = e.target.getAttribute('data-name');
            UI.taskForm();
            UI.currentTaskInfo(task);
            UI.createSaveBtn();
            UI.replaceBtns(task);
        }
        if (e.target.matches('#save-task-btn')) {
            e.preventDefault();
            UI.removeDataNameAttribute(task);
            editTask(task);
            saveData();
            newInfo = getTaskInfo();
            UI.taskDisplay(newInfo.task, newInfo.description, newInfo.date, newInfo.priorityList);
            UI.removeTaskForm();
            UI.updateUITaskBtn();
        }
    });
    d.addEventListener('change', (e) => {
        if (e.target.matches('.check-box')) {
            let task = document.getElementById(e.target.getAttribute('id'))
            saveCheckBox(task, e.target.getAttribute('id'));
            saveData();
        }
    });
};

export { DOMEvents }