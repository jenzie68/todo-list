import "./style.css"

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

        projectNameDisplay(projectTitle);
    
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

function projectNameDisplay(projectName) {
    projectName = prompt('your projectName?');
    const projects = document.querySelector('.all-projects');
    const btn = document.createElement('button');
    btn.classList.add(projectName);
    btn.textContent = projectName;
    projects.appendChild(btn);
};

let addProjectBtn = document.querySelector('.add-project-btn');
addProjectBtn.addEventListener('click',projectNameDisplay);





