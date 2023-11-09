import { projectLoad } from "./projectLoad";

export function initialLoad() {

    //DOM for heading
    const contentDiv = document.querySelector('.content');
    const heading = document.createElement('h1');
    heading.textContent = "To-Do-List";
    contentDiv.appendChild(heading);

    //DOM for the default project
    const projectInfo = document.createElement('div');
    projectInfo.textContent = projectLoad().projectTitle;
    contentDiv.appendChild(projectInfo);
}

