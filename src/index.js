const allProjects = [];

const addProject = (title) => {
    const project = makeProject(title);
    allProjects.push(project);
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

    const taskManagement = taskOperations(projectDetails);
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

const taskOperations = (project) => {
    const addTask = (taskName, details,dueDate,priorityList) => {
        const task = {
            name: taskName,
            description: details,
            date: dueDate,
            priority: priorityList
        };

        project.allTasks.push(task);
        viewProjects();
    
        return {
            taskName,
            details,
            dueDate,
            priorityList,
        };
    };

    const editTasks = (i) => {
        return project.allTasks[i]
    };
    
    const deleteTask = (i) => {
        return project.allTasks.splice(i,1),
        viewProjects();
    };

    return {
        addTask,
        editTasks,
        deleteTask,
    };
};








