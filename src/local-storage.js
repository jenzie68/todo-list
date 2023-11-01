import { allProjects } from "./logic";

function saveData() {
  localStorage.setItem("allProjectData", JSON.stringify(allProjects));
  JSON.parse(localStorage.getItem("allProjectData"));
}

export { saveData };
