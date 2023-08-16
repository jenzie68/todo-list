const allProject = [];

const addProject = (title) => {
    const allTasks = [];

    const addTask = (taskName,detail = 'none') => {
        allTasks.push({name: taskName, description: detail})
        console.log(allTasks);
    };

    return {title, addTask, allTasks};
}

console.log(allProject);



