import { 
    allProjects, 
    saveCheckBox,
    createTask,
    editTask,
    deleteTask,
    saveName,
    deleteProject,
    findIndex,
} from "./logic";

import { renderSavedData, saveData } from "./local-storage.js";

renderSavedData();
console.log(allProjects);

const deleteProjectBtn = document.querySelector('.delete-project-btn');
deleteProjectBtn.addEventListener('click',deleteBtnClick);

function getProjName() {
    return document.getElementById('get-project-title')
};

function getProjTitle() {
    return document.querySelector('.project-title').textContent;
};

function getNewTtle(){
    return document.getElementById('new-project-title'); 
};

function makeProjectBtn(name) {
    const btn = document.createElement('button');
    btn.setAttribute('id',`${name}-btn`);
    btn.textContent = name;
    btn.addEventListener('click',() => {
        headerDisplay(btn.textContent);
        const currentProjectTitle = document.querySelector('.project-title').textContent;
        projectTaskDisplay(currentProjectTitle);
    });

    const projects = document.querySelector('.all-projects');
    projects.appendChild(btn);
};

function projectTaskDisplay() {
    const todoList = document.querySelector('.todo-list');
    todoList.textContent = '';
    const projectIndex = findIndex.projectIndex()
    allProjects[projectIndex].projectDetails.allTasks.forEach(task => {
        taskDisplay(task.taskName, task.description, task.dueDate, task.priorityList, task.checkBox);
    });
    makeAddTaskBtn();
};

function makeAddTaskBtn() {
    const name = getProjTitle();
    const todoList = document.querySelector('.todo-list');

    const containerTaskBtn = document.createElement('div');
    containerTaskBtn.classList.add('container-task-btn');

    const addTaskBtn = document.createElement('button');
    addTaskBtn.addEventListener('click',(e) => {
        e.preventDefault();
        taskForm(name);
    });
    addTaskBtn.classList.add('add-task-btn');
    
    const addIconImg = document.createElement('img');
    addIconImg.setAttribute('src','/src/icons/material-symbols_add.svg')

    const div = document.createElement('div');
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
    projectTitle.addEventListener('click',() => changeName(projTtle));
    append.appendChild(projectTitle);
}

function taskForm(name) {
    const header = document.querySelector('.header');

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
    submitBtn.addEventListener('click',(event) => {
        event.preventDefault();
        submitTaskForm(name);
    });

    const cancelBtn = document.createElement('button');
    cancelBtn.setAttribute('id','cancel-task-btn');
    cancelBtn.textContent = 'cancel';
    cancelBtn.addEventListener('click',() => headerDisplay(name));

    header.appendChild(form);
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

function submitTaskForm(name) {
    const taskInfo = getTaskInfo()
    createTask(name, taskInfo.task, taskInfo.description, taskInfo.date, taskInfo.priorityList);
    taskDisplay(taskInfo.task, taskInfo.description, taskInfo.date, taskInfo.priorityList);
    headerDisplay(name);
    updateUITaskBtn();
    saveData();
};

//so that task btn always stays on bottom
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
    checkList.addEventListener('change', () => saveCheckBox(checkList,task));

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
    const deleteIcon = document.createElement('img');
    deleteIcon.setAttribute('src','/src/icons/bi_trash-fill.svg');
    deleteBtn.addEventListener('click', (e) => {
        e.preventDefault();
        deleteTaskDisplay(task);
    });

    const editTaskBtn = document.createElement('button');
    const editIcon = document.createElement('img');
    editIcon.setAttribute('src','/src/icons/tabler_edit.svg');
    editTaskBtn.addEventListener('click',(e) => {
        e.preventDefault();
        renderEditTask(task);
    });

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
    if (priority == 'urgent') {
        checkBox.style.backgroundColor = '#F65C5C';
        date.style.color = '#F65C5C';
    } else if (priority == 'important') {
        checkBox.style.backgroundColor = '#F6D35C';
        date.style.color = '#F6D35C';
    }
};

function renderEditTask(nameOfTask) {
    const name = getProjTitle();
    taskForm(name);
    currentTaskInfo(nameOfTask);
    createSaveBtn();
    replaceBtns(nameOfTask);
};

function createSaveBtn() {
    const saveTaskBtn = document.createElement('button');
    saveTaskBtn.setAttribute('id','save-task-btn');
    saveTaskBtn.textContent = 'SAVE';
    return saveTaskBtn;
};

function replaceBtns(taskName) {
    const submitTaskBtn = document.getElementById('submit-task-btn');
    const saveTaskBtn = createSaveBtn();
    saveTaskBtn.addEventListener('click',(e) => {
        e.preventDefault();
        submitEditTask(taskName);
    });
    submitTaskBtn.replaceWith(saveTaskBtn);
};

function currentTaskInfo(nameTask) {
    const projectIndex = findIndex.projectIndex();
    const taskIndex = findIndex.taskIndex(nameTask);
    const name = allProjects[projectIndex].projectDetails.allTasks[taskIndex].taskName;
    const details = allProjects[projectIndex].projectDetails.allTasks[taskIndex].description;
    const dueDate = allProjects[projectIndex].projectDetails.allTasks[taskIndex].dueDate;
    const priority = allProjects[projectIndex].projectDetails.allTasks[taskIndex].priorityList;
    const getTask = document.getElementById('get-task-name');
    const getDescription = document.getElementById('get-description');
    const getDate = document.getElementById('get-date');
    const getPriorityList = document.getElementById('get-priority-list'); 
    getTask.value = name;
    getDescription.value = details;
    getDate.value = dueDate;
    getPriorityList.value = priority;
};

function submitEditTask(taskName) {
    removeDataNameAttribute(taskName);
    editTask(taskName);
    saveData();
    const newInfo = getTaskInfo();
    taskDisplay(newInfo.task, newInfo.description, newInfo.date, newInfo.priorityList);
    removeTaskForm();
    updateUITaskBtn();
};

function removeDataNameAttribute(nameOfTask) {
    const projectIndex = findIndex.projectIndex();
    const taskIndex = findIndex.taskIndex(nameOfTask); 
    const currentTaskName = allProjects[projectIndex].projectDetails.allTasks[taskIndex].taskName;
    const dataAttribute = document.querySelector(`[data-name='${currentTaskName}']`);
    dataAttribute.remove();
};

function removeTaskForm() {
    const taskForm = document.querySelector('.task-form');
    taskForm.remove();
};

function deleteTaskDisplay(nameOfTask) {
    removeDataNameAttribute(nameOfTask);
    deleteTask(nameOfTask);
};

function changeName(name) {
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
    saveBtn.addEventListener('click', () => renderNewTtle(name))
    saveBtn.setAttribute('id','save-btn');
    saveBtn.textContent = 'SAVE';

    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'CANCEL';
    cancelBtn.setAttribute('id','cancel-btn');
    cancelBtn.addEventListener('click', () => headerDisplay(name));

    header.appendChild(changeNameContainer);
    changeNameContainer.appendChild(newProjectTitle);
    changeNameContainer.appendChild(btnContainers);
    btnContainers.appendChild(saveBtn);
    btnContainers.appendChild(cancelBtn);
};

function renderNewTtle(name) {
    saveName(name);
    saveData();
    newTtleBtn(name);
    headerDisplay(getNewTtle().value);
};

function newTtleBtn(currentProj) {
    const newTitle = getNewTtle(); 
    const ChangeNamebtn = document.getElementById(`${currentProj}-btn`);
    ChangeNamebtn.removeAttribute('id');
    ChangeNamebtn.setAttribute('id',`${newTitle.value}-btn`);
    ChangeNamebtn.textContent = newTitle.value;
    ChangeNamebtn.addEventListener('click',() => headerDisplay(newTitle.value));
};

function deleteBtnClick() {
    deleteProject();    
    saveData();
    removeProjectBtn();
    removeToDoList();
};

function removeProjectBtn() {
    const projectTitle = document.querySelector('.project-title');
    const projectTitleBtn = document.getElementById(`${projectTitle.textContent}-btn`);
    projectTitleBtn.remove();
};

function removeToDoList() {
    const header = document.querySelector('.header');
    header.textContent = '';
    const todoList = document.querySelector('.todo-list');
    todoList.textContent = '';
};

export { getTaskInfo, makeProjectBtn, getProjName, getNewTtle, getProjTitle }