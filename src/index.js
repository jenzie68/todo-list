import "./style.css"
import { compareAsc, format } from "date-fns";

//logic code

const allProjects = [];

const projectManagement = () => {
    const addProject = (title) => {
        const project = makeProject(title);
        allProjects.push(project);
    };

    const editProjectName = (i, name) => {
         allProjects[i].projectDetails.projectName = name
    };
    
    const deleteProject = (i) => {
        allProjects.splice(i,1);
    };
    
    const viewProjects = () => {
        console.log(allProjects);
    };
    
    const makeProject = (projectTitle) => {
        const projectDetails = {
            projectName: projectTitle,
            allTasks: []
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
        editProjectName
    };
};

class taskOperations {
    constructor(project)  {
        this.project = project;
    }

    addTask = (name, details, date, priorityList) => {
        const taskDetails = new task(name, details, date, priorityList);

        this.project.allTasks.push(taskDetails);
    }

    deleteTask(i) {
        return this.project.allTasks.splice(i,1)
    };
};

class task {
    constructor(taskName, description, dueDate, priorityList) {
        this.taskName = taskName;
        this.description = description;
        this.dueDate = dueDate;
        this.priorityList = priorityList;
    };

    set() {
        [this.taskName, this.description, this.dueDate, this.priorityList] = value.split(" ");
    };
};

//DOM

const project = projectManagement();

function projectNameDisplay(projectName) {
    projectName = prompt('your projectName?');
    project.addProject(projectName);
    project.viewProjects();
    const projects = document.querySelector('.all-projects');
    const btn = document.createElement('button');
    btn.setAttribute('id',`${projectName}-btn`);
    btn.textContent = projectName;
    btn.addEventListener('click',() => {
        projectDisplay(projectName)
    });
    projects.appendChild(btn);
};

function projectDisplay(name) {
    const viewPort = document.querySelector('.viewport');
    viewPort.textContent = '';
    const projectTitle = document.createElement('div');
    projectTitle.classList.add('project-title');
    projectTitle.setAttribute('id', name);
    projectTitle.textContent = name;
    projectTitle.addEventListener('click',() => changeName(name));
    const addTaskBtn = document.createElement('button');
    addTaskBtn.addEventListener('click',() => taskForm(name));
    addTaskBtn.textContent = 'add Task';
    viewPort.appendChild(projectTitle);
    viewPort.appendChild(addTaskBtn);
};

function taskForm(name) {
    const viewport = document.querySelector('.viewport');
    const form = document.createElement('form');
    form.classList.add('task-form');
    viewport.appendChild(form);
    const task = document.createElement('input');
    task.setAttribute('type','text');
    task.setAttribute('id','task-name');
    task.setAttribute('value','Task name');
    const description = document.createElement('input');
    description.setAttribute('type','text');
    description.setAttribute('id','description');
    description.setAttribute('value','Description');
    const date = document.createElement('input');
    date.setAttribute('type','date');
    date.setAttribute('id','date');
    const priorityList = document.createElement('select');
    priorityList.setAttribute('id','priority-list');
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
    cancelBtn.addEventListener('click',() => projectDisplay(name));
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
    const task = document.getElementById('task-name');
    const description = document.getElementById('description');
    const date = document.getElementById('date');
    const priorityList = document.getElementById('priority-list');
    const index = allProjects.findIndex(p => p.projectDetails.projectName === name);
    allProjects[index].addTask(task.value,description.value,date.value,priorityList.value);
    project.viewProjects();
    projectDisplay(name);
    addTaskDOM(task.value, description.value, date.value, priorityList.value);
};

function addTaskDOM(task, description, date, priority) {
    const form = document.querySelector('.form-task-list');
    const container = document.createElement('div');
    container.classList.add('task-container');
    const input = document.createElement('input');
    input.setAttribute('type','checkbox');
    const label = document.createElement('label');
    label.setAttribute('id',task);
    const h3 = document.createElement('h3');
    h3.textContent = task;
    const div = document.createElement('div');
    div.textContent = description, date, priority;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'delete';
    deleteBtn.addEventListener('click', () => deleteTask());
    const editTaskBtn = document.createElement('button');
    editTaskBtn.textContent = 'edit';
    editTaskBtn.setAttribute('id', task);
    editTaskBtn.addEventListener('click',(e) => {
        e.preventDefault();
        editTask(e.target.id);
    });
    form.appendChild(container);
    container.appendChild(label);
    container.appendChild(input);
    form.appendChild(deleteBtn);
    form.appendChild(editTaskBtn);
    label.appendChild(h3);
    label.appendChild(div);
};

function editTask(id) {
    const name = document.querySelector('.project-title').textContent;
    const projectIndex = allProjects.findIndex(p => p.projectDetails.projectName === name);
    const taskIndex = allProjects[projectIndex].projectDetails.allTasks.findIndex(p => p.taskName === id);
    taskForm(name);
    const task = document.getElementById('task-name');
    const description = document.getElementById('description');
    const date = document.getElementById('date');
    const priorityList = document.getElementById('priority-list'); 
    task.value = allProjects[projectIndex].projectDetails.allTasks[taskIndex].taskName
    description.value = allProjects[projectIndex].projectDetails.allTasks[taskIndex].description
    date.value = allProjects[projectIndex].projectDetails.allTasks[taskIndex].dueDate
    priorityList.value = allProjects[projectIndex].projectDetails.allTasks[taskIndex].priorityList
};

function deleteTask() {

};

function changeName(name) {
    const viewPort = document.querySelector('.viewport');
    const changeNameContainer = document.createElement('change-name-container');
    viewPort.appendChild(changeNameContainer);
    const newProjectTitle = document.createElement('input');
    newProjectTitle.setAttribute('id','new-project-title');
    newProjectTitle.setAttribute('type', 'text');
    newProjectTitle.setAttribute('value', name);
    viewPort.replaceChild(newProjectTitle, viewPort.firstElementChild);
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
    cancelBtn.addEventListener('click', () => projectDisplay(name))
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
    ChangeNamebtn.addEventListener('click',() => projectDisplay(newProjectTitle.value));
    projectDisplay(newProjectTitle.value);
};

function deleteProject() {
    const projectTitle = document.querySelector('.project-title');
    const index = allProjects.findIndex(p => p.projectDetails.projectName === projectTitle.textContent);
    project.deleteProject(index);
    project.viewProjects();
    const projectTitleBtn = document.getElementById(`${projectTitle.textContent}-btn`);
    projectTitleBtn.remove();
    const viewPort = document.querySelector('.viewport');
    viewPort.textContent = '';
    const formTaskLike = document.querySelector('.form-task-list');
    formTaskLike.remove();
};

const addProjectBtn = document.querySelector('.add-project-btn');
addProjectBtn.addEventListener('click', () => {
    projectNameDisplay()
    const container = document.querySelector('.container');
    const formTaskList = document.createElement('form');
    formTaskList.classList.add('form-task-list');
    container.appendChild(formTaskList);
});
const deleteProjectBtn = document.querySelector('.delete-project-btn');
deleteProjectBtn.addEventListener('click',deleteProject);





