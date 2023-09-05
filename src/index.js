const allProjects = [];

const addProject = (title) => {
    const project = makeProject(title);
    allProjects.push(project);
    console.log(allProjects);
};

const makeProject = (projectTitle) => {
    const project = {
        projectName: projectTitle,
        allTasks: []
    }

    const controlFeature = taskOperations(project);
    const addTask = controlFeature.addTask;
    const deleteTask = controlFeature.deleteTask;
    const deleteProject = controlFeature.deleteProject;
    const editTask = controlFeature.editTasks;

    return {
        project,
        deleteProject,
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
    
    const deleteTask = (index) => {
        return project.allTasks.splice(index,1),
        viewProjects();
    };
    
    const deleteProject = (index) => {
        index = allProjects.findIndex(p => (p.project.projectName === 'Home'));
        allProjects.splice(index,1);
        viewProjects();
    };

    return {
        addTask,
        editTasks,
        deleteTask,
        deleteProject
    };
};

const viewProjects = () => {
    console.log(allProjects);
};




