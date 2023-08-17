const allProject = [];

const addProject = (title) => {
    const allTasks = [];

    const addTask = (taskName,detail = 'none') => {
        allTasks.push({name: taskName, description: detail})
        console.log(allTasks);
    };

    const deleteTask = (index) => {
        allTasks.splice(index,1);
        console.log('task has been deleted');
        console.log(allTasks);
    }

    const deleteProject = () => {
        const alert = prompt('are you sure you want your project deleted?')
        if(alert == 'yes') {
        allProject.splice(allProject.indexOf(title),1);
        }
        console.log(allProject);
    }

    allProject.push(title);
    console.log(allProject);

    return {
        title,
        addTask, 
        allTasks,
        deleteProject,
        deleteTask
    };
}

console.log(allProject);



