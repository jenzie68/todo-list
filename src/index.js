const allProject = [];

const addProject = (title) => {
    
    const allTasks = [];

    const addTask = (taskName,detail = 'none',dueDate, priorityList = 'not important') => {
        allTasks.push(
            {
                name: taskName,
            description: detail, 
            date: dueDate,
            priority : priorityList
            }
        )
        console.log(allTasks);
    };

    const deleteTask = (index) => {
        allTasks.splice(index,1);
        console.log('task has been deleted');
        console.log(allTasks);
    };

    const deleteProject = () => {
        const alert = prompt('are you sure you want your project deleted?')
        if(alert == 'yes') {
        allProject.splice(allProject.indexOf(title),1);
        }
        console.log(allProject);
    }

    console.log(allProject);

    return {
        title,
        addTask, 
        allTasks,
        deleteProject,
        deleteTask
    };
};

function makeBtn(name) {
    const btn = document.createElement('button');
    const projects = document.querySelector('.content');
    btn.textContent = name;
    projects.appendChild(btn);
    btn.addEventListener('click', () => {
        const addTaskbtn = document.createElement('button');
        const tasks = document.querySelector('.tasks');
        addTaskbtn.textContent = 'addtask';
        tasks.appendChild(addTaskbtn);
        addTaskbtn.addEventListener('click', () => {
            const index = allProject.findIndex(i => i.title == name);
            const taskName = prompt('task name');
            allProject[index].addTask(taskName);
            const div = document.createElement('div');
            div.textContent = taskName;
            const tasks = document.querySelector('.tasks');
            tasks.appendChild(div);
            console.log(allProject);
        });
    });
};

const btn = document.createElement('button');
const content = document.querySelector('.content');
btn.textContent = 'Add Project';
content.appendChild(btn);
btn.addEventListener('click',() => {
    const title = prompt('your project name','study');
    const project = addProject(title);
    allProject.push(project);
    makeBtn(title);
});

console.log(allProject);



