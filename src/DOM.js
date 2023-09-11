function projectNameDisplay(projectName) {
    const projects = document.querySelector('.projects');
    const btn = document.createElement('button');
    btn.classList.add(projectName);
    btn.textContent = projectName;
    btn.addEventListener('click',projectDisplay)
    projects.appendChild(btn);
};

function projectDisplay() {
    
}

export default projectNameDisplay