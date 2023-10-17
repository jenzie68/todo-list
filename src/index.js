import "./style.css"
import { getProjName, makeProjectBtn } from './DOM.js'
import { addProject } from './logic.js'

const addProjBtn = document.querySelector('.add-project-btn');
addProjBtn.addEventListener('click', () => {
    const getProjTitle = getProjName();
    addProject(getProjTitle.value);
    makeProjectBtn(getProjTitle.value);
    getProjTitle.value = '';
});



