import "./style.css"
import { projectManagement, allProjects } from "./logic";

//DOM

allProjects
const project = projectManagement();

const addProjectBtn = document.querySelector('.add-project-btn');
addProjectBtn.addEventListener('click', () => addProject());
const deleteProjectBtn = document.querySelector('.delete-project-btn');
deleteProjectBtn.addEventListener('click',deleteProject);

function addProject() {
    const getProjectTitle = document.getElementById('get-project-title');
    projectNameDisplay(getProjectTitle.value);
    getProjectTitle.value = '';
}

function projectNameDisplay(projectName) {
    project.addProject(projectName);
    project.viewProjects();
    const projects = document.querySelector('.all-projects');
    const btn = document.createElement('button');
    btn.setAttribute('id',`${projectName}-btn`);
    btn.textContent = projectName;
    btn.addEventListener('click',() => {
        headerDisplay(btn.textContent);
        const currentProjectTitle = document.querySelector('.project-title').textContent;
        projectTaskDisplay(currentProjectTitle);
    })
    projects.appendChild(btn);
};

function projectTaskDisplay() {
    const name = document.querySelector('.project-title').textContent;
    const todoList = document.querySelector('.todo-list');
    todoList.textContent = '';
    const projectIndex = allProjects.findIndex(p => p.projectDetails.projectName === name);
    allProjects[projectIndex].projectDetails.allTasks.forEach(task => {
        taskDisplay(task.taskName, task.description, task.dueDate, task.priorityList, task.checkBox);
    });
    makeAddTaskBtn();
}

function makeAddTaskBtn() {
    const name = document.querySelector('.project-title').textContent;
    const todoList = document.querySelector('.todo-list');
    const containerTaskBtn = document.createElement('div');
    containerTaskBtn.classList.add('container-task-btn')
    const addTaskBtn = document.createElement('button');
    const addIconImg = document.createElement('img');
    const div = document.createElement('div');
    addIconImg.setAttribute('src','/src/icons/material-symbols_add.svg')
    addTaskBtn.addEventListener('click',(e) => {
        e.preventDefault();
        taskForm(name);
    });
    div.textContent = 'Add Task';
    addTaskBtn.classList.add('add-task-btn');
    addTaskBtn.appendChild(addIconImg);
    addTaskBtn.appendChild(div)
    containerTaskBtn.appendChild(addTaskBtn);
    todoList.appendChild(containerTaskBtn);
}

function headerDisplay(name) {
    const header = document.querySelector('.header');
    header.textContent = '';
    const projectTitle = document.createElement('div');
    projectTitle.classList.add('project-title');
    projectTitle.setAttribute('id', name);
    projectTitle.textContent = name;
    projectTitle.addEventListener('click',() => changeName(name));
    header.appendChild(projectTitle);
};

function taskForm(name) {
    const header = document.querySelector('.header');
    const form = document.createElement('form');
    form.classList.add('task-form');
    header.appendChild(form);
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

function submitTaskForm(name) {
    const task = document.getElementById('get-task-name');
    const description = document.getElementById('get-description');
    const date = document.getElementById('get-date');
    const priorityList = document.getElementById('get-priority-list');
    const index = allProjects.findIndex(p => p.projectDetails.projectName === name);
    allProjects[index].addTask(task.value,description.value,date.value,priorityList.value);
    project.viewProjects();
    headerDisplay(name);
    taskDisplay(task.value, description.value, date.value, priorityList.value);
    const addTaskBtn = document.querySelector('.container-task-btn');
    addTaskBtn.remove();
    makeAddTaskBtn();
};

function taskDisplay(task, description, date, priority, checkBox) {
    const form = document.querySelector('.todo-list');
    const container = document.createElement('div');
    container.setAttribute('id','task-container');
    container.setAttribute('data-name', task);
    const bg = document.createElement('div');
    bg.setAttribute('id','task-background');
    const checkList = document.createElement('input');
    checkList.setAttribute('type','checkbox');
    checkList.setAttribute('id', 'check-box');
    checkBox == 'checked' ? checkList.checked = true : false;  
    checkList.addEventListener('change' ,() => {
        const saveCheckBox = storeCheckBox(task); 
        if (checkList.checked == true) {
            saveCheckBox.check();
        } else {
            saveCheckBox.unchecked();
        }
    });
    const taskDisplay = document.createElement('label');
    taskDisplay.setAttribute('class',task);
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
        deleteTask(task);
    });
    const editTaskBtn = document.createElement('button');
    const editIcon = document.createElement('img');
    editIcon.setAttribute('src','/src/icons/tabler_edit.svg');
    editTaskBtn.addEventListener('click',(e) => {
        e.preventDefault();
        editTask(task);
    });
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
    priorityColor(priority, checkList, dateDisplay);
};

const storeCheckBox = (nameOfTask) => {
    const nameOfProject = document.querySelector('.project-title').textContent;
    const projectIndex = allProjects.findIndex(p => p.projectDetails.projectName === nameOfProject);
    const taskIndex = allProjects[projectIndex].projectDetails.allTasks.findIndex(p => p.taskName === nameOfTask);

    function check() {
        allProjects[projectIndex].projectDetails.allTasks[taskIndex].checkBox = 'checked';
        project.viewProjects();
    }

    function unchecked() {
        allProjects[projectIndex].projectDetails.allTasks[taskIndex].checkBox = 'unchecked';
        project.viewProjects();
    }
    
    return { check, unchecked }
}

function priorityColor(priority, checkBox, date) {
    if (priority == 'urgent') {
        checkBox.style.backgroundColor = '#F65C5C';
        date.style.color = '#F65C5C';
    } else if (priority == 'important') {
        checkBox.style.backgroundColor = '#F6D35C';
        date.style.color = '#F6D35C';
    }
}

function editTask(nameOfTask) {
    const name = document.querySelector('.project-title').textContent;
    const projectIndex = allProjects.findIndex(p => p.projectDetails.projectName === name);
    const taskIndex = allProjects[projectIndex].projectDetails.allTasks.findIndex(p => p.taskName === nameOfTask);
    taskForm(name);
    const task = document.getElementById('get-task-name');
    const description = document.getElementById('get-description');
    const date = document.getElementById('get-date');
    const priorityList = document.getElementById('get-priority-list'); 
    task.value = allProjects[projectIndex].projectDetails.allTasks[taskIndex].taskName;
    description.value = allProjects[projectIndex].projectDetails.allTasks[taskIndex].description;
    date.value = allProjects[projectIndex].projectDetails.allTasks[taskIndex].dueDate;
    priorityList.value = allProjects[projectIndex].projectDetails.allTasks[taskIndex].priorityList;
    const submitTaskBtn = document.getElementById('submit-task-btn'); 
    const saveTaskBtn = document.createElement('button');
    saveTaskBtn.setAttribute('id','save-task-btn');
    saveTaskBtn.textContent = 'SAVE';
    saveTaskBtn.addEventListener('click',(e) => {
        e.preventDefault();
        submitEditTask(projectIndex, taskIndex, task, description, date, priorityList);
    });
    submitTaskBtn.replaceWith(saveTaskBtn);
};

function submitEditTask(index, index2, newTask, newDescription, newDate, newPriorityList) {
    const currentTaskName = allProjects[index].projectDetails.allTasks[index2].taskName;
    const dataAttribute = document.querySelector(`[data-name='${currentTaskName}']`);
    dataAttribute.remove();
    taskDisplay(newTask.value, newDescription.value, newDate.value, newPriorityList.value);
    allProjects[index].projectDetails.allTasks[index2].taskName = newTask.value;
    allProjects[index].projectDetails.allTasks[index2].description = newDescription.value;
    allProjects[index].projectDetails.allTasks[index2].dueDate = newDate.value;
    allProjects[index].projectDetails.allTasks[index2].priorityList = newPriorityList.value;
    const taskForm = document.querySelector('.task-form');
    taskForm.remove();
    project.viewProjects();
    const addTaskBtn = document.querySelector('.container-task-btn');
    addTaskBtn.remove();
    makeAddTaskBtn();
};

function deleteTask(nameOfTask) {
    const name = document.querySelector('.project-title').textContent;
    const projectIndex = allProjects.findIndex(p => p.projectDetails.projectName === name);
    const taskIndex = allProjects[projectIndex].projectDetails.allTasks.findIndex(p => p.taskName === nameOfTask);
    const currentTaskName = allProjects[projectIndex].projectDetails.allTasks[taskIndex].taskName;
    const dataAttribute = document.querySelector(`[data-name='${currentTaskName}']`);
    dataAttribute.remove();
    allProjects[projectIndex].deleteTask(taskIndex);
    project.viewProjects();
};

function changeName(name) {
    const header = document.querySelector('.header');
    const changeNameContainer = document.createElement('div');
    changeNameContainer.classList.add('change-name-container');
    header.appendChild(changeNameContainer);
    const newProjectTitle = document.createElement('input');
    newProjectTitle.setAttribute('id','new-project-title');
    newProjectTitle.setAttribute('type', 'text');
    newProjectTitle.setAttribute('value', name);
    header.replaceChild(newProjectTitle, header.firstElementChild);
    changeNameContainer.appendChild(newProjectTitle);
    const btnContainers = document.createElement('div');
    btnContainers.classList.add('btn-containers');
    const saveBtn = document.createElement('button');
    saveBtn.addEventListener('click', () => saveName(name))
    saveBtn.setAttribute('id','save-btn');
    saveBtn.textContent = 'SAVE';
    changeNameContainer.appendChild(btnContainers);
    btnContainers.appendChild(saveBtn);
    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'CANCEL';
    cancelBtn.setAttribute('id','cancel-btn');
    cancelBtn.addEventListener('click', () => headerDisplay(name))
    btnContainers.appendChild(cancelBtn);
};

function saveName(name) {
    const newProjectTitle = document.getElementById('new-project-title'); 
    const index = allProjects.findIndex(p => p.projectDetails.projectName === name);
    project.editProjectName(index, newProjectTitle.value);
    project.viewProjects();
    const ChangeNamebtn = document.getElementById(`${name}-btn`);
    ChangeNamebtn.removeAttribute('id');
    ChangeNamebtn.setAttribute('id',`${newProjectTitle.value}-btn`);
    ChangeNamebtn.textContent = newProjectTitle.value;
    ChangeNamebtn.addEventListener('click',() => headerDisplay(newProjectTitle.value));
    headerDisplay(newProjectTitle.value);
};

function deleteProject() {
    const projectTitle = document.querySelector('.project-title');
    const index = allProjects.findIndex(p => p.projectDetails.projectName === projectTitle.textContent);
    project.deleteProject(index);
    project.viewProjects();
    const projectTitleBtn = document.getElementById(`${projectTitle.textContent}-btn`);
    projectTitleBtn.remove();
    const header = document.querySelector('.header');
    header.textContent = '';
    const todoList = document.querySelector('.todo-list');
    todoList.textContent = '';
};




