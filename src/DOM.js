import { allProjects,disablePreviousDates, deleteTask, findIndex } from "./logic";

function getProjName() {
    return document.getElementById('get-project-title');
};

function getProjTitle() {
    return document.querySelector('.project-title').textContent;
};

function getNewTtle(){
    return document.getElementById('new-project-title'); 
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

const UI = (() => {
    function makeProjectBtn(name) {
        const btn = document.createElement('button');
        btn.setAttribute('id',`${name}-project-btn`);
        btn.classList.add('project-btn');
        btn.textContent = name;
    
        const projects = document.querySelector('.all-projects');
        projects.appendChild(btn);
    };

    function renderSavedTask() {
        const projectIndex = findIndex.projectIndex()
        allProjects[projectIndex].projectDetails.allTasks.forEach(task => {
            taskDisplay(task.taskName, task.description, task.dueDate, task.priorityList, task.checkBox);
        });
    };

    function makeAddTaskBtn() {
        const todoList = document.querySelector('.todo-list');
    
        const containerTaskBtn = document.createElement('div');
        containerTaskBtn.classList.add('container-task-btn');
    
        const addTaskBtn = document.createElement('button');
        addTaskBtn.setAttribute('id','add-task-btn')
        addTaskBtn.classList.add('add-task-btn');
        
        const addIconImg = document.createElement('img');
        addIconImg.setAttribute('src','/src/icons/material-symbols_add.svg');
        addIconImg.classList.add('add-task-btn');
        
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
        append.appendChild(projectTitle);
    };
    
    function taskForm() {
        const bg = document.querySelector('.todo-list-container');
        bg.setAttribute('id','blur') 
    
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
        disablePreviousDates(date);
    
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
    
        const cancelBtn = document.createElement('button');
        cancelBtn.setAttribute('id','cancel-task-btn');
        cancelBtn.textContent = 'cancel';
    
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
    };

    function removeBlurAttribute() {
        const todoListContainer = document.querySelector('.todo-list-container');
        todoListContainer.removeAttribute('id');
    }

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
        deleteBtn.setAttribute('id','delete-task');
        deleteBtn.setAttribute('data-name', task);
        const deleteIcon = document.createElement('img');
        deleteIcon.setAttribute('data-name', task);
        deleteIcon.setAttribute('id','delete-icon');
        deleteIcon.setAttribute('src','/src/icons/bi_trash-fill.svg');
    
        const editTaskBtn = document.createElement('button');
        editTaskBtn.setAttribute('id','edit-task');
        editTaskBtn.setAttribute('data-name', task);
        const editIcon = document.createElement('img');
        editIcon.setAttribute('id','edit-icon');
        editIcon.setAttribute('src','/src/icons/tabler_edit.svg');
        editIcon.setAttribute('data-name', task);

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
        if (priority == 'not-important') {
            checkBox.style.backgroundColor = '#d3d3d3';
        }
        if (priority == 'urgent') {
            checkBox.style.backgroundColor = '#F65C5C';
            date.style.color = '#F65C5C';
        } 
        if (priority == 'important') {
            checkBox.style.backgroundColor = '#F6D35C';
            date.style.color = '#F6D35C';
        }
    };

    function emptyToDoList() {
        const todoList = document.querySelector('.todo-list');
        todoList.textContent = '';
    }

    function createSaveBtn() {
        const saveTaskBtn = document.createElement('button');
        saveTaskBtn.setAttribute('id','save-task-btn');
        saveTaskBtn.textContent = 'SAVE';
        return saveTaskBtn;
    };
    
    function replaceBtns() {
        const submitTaskBtn = document.getElementById('submit-task-btn');
        const saveTaskBtn = createSaveBtn();
        saveTaskBtn.setAttribute('id','save-task-btn');
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
    
    function changeProjName(name) {
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
        saveBtn.setAttribute('id','save-btn');
        saveBtn.textContent = 'SAVE';
    
        const cancelBtn = document.createElement('button');
        cancelBtn.textContent = 'CANCEL';
        cancelBtn.setAttribute('id','cancel-btn');
    
        header.appendChild(changeNameContainer);
        changeNameContainer.appendChild(newProjectTitle);
        changeNameContainer.appendChild(btnContainers);
        btnContainers.appendChild(saveBtn);
        btnContainers.appendChild(cancelBtn);
    };
    
    function newTtleBtn(currentProj) {
        const newTitle = getNewTtle(); 
        const ChangeNamebtn = document.getElementById(`${currentProj}-project-btn`);
        ChangeNamebtn.removeAttribute('id');
        ChangeNamebtn.setAttribute('id',`${newTitle.value}-project-btn`);
        ChangeNamebtn.textContent = newTitle.value;
    };
    
    function removeProjectBtn() {
        const projectTitle = document.querySelector('.project-title');
        const projectTitleBtn = document.getElementById(`${projectTitle.textContent}-project-btn`);
        projectTitleBtn.remove();
    };
    
    function emptyToDoPage() {
        const header = document.querySelector('.header');
        header.textContent = '';
        emptyToDoList();
    };
    
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
    }
})();

export { getTaskInfo, getProjName, getNewTtle, getProjTitle, UI }