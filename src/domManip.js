import { projectLoad } from "./projectLoad";

export function displayDefaultProject() {

    //DOM for the default project
    const projectInfo = document.createElement('div');
    projectInfo.textContent = projectLoad().projectTitle;
    contentDiv.appendChild(projectInfo);
}

export function displayForm() {
    document.getElementById('add-todo-form').style.display = "";
    const button = document.querySelector('.add-todo-button');
    button.style.visibility = 'hidden';
}

export function addNotesList() {
    const addItem = document.getElementById('add-notes').value;

    //Run check to see if the input box is empty and the button was clicked
    //If so, return out this function gracefully - do nothing
    //If not, apply contents to new li in the DOM
    if (addItem !== "") {
        const ul = document.querySelector('.notes-ul');
        const li = document.createElement('li');
        li.textContent = addItem;
        const span = document.createElement('span');
        span.className = 'remove-notes-item';
        const removeIcon = document.createTextNode('\u00D7');
        li.appendChild(span);
        span.appendChild(removeIcon);
        ul.appendChild(li);
        document.getElementById('add-notes').value = "";

        //DOM check for existing list items already present
        if (document.querySelectorAll('li').length > 0) {
            console.log('inside module if...', document.querySelectorAll('li').length);
            const nodeListNotes = document.querySelectorAll('li');
            console.log(nodeListNotes);

            //DOM to bind click event to each node in nodelist if clicked
            nodeListNotes.forEach(checkNotesItem => {
                checkNotesItem.addEventListener('click', function removeItemfromNotesList() {
                    checkNotesItem.remove();
                });         
                
            });
        }
    } else return;
}

export function clearForm() {
    const nodeListNotes = document.querySelectorAll('li');
    for (let i = 0; i < nodeListNotes.length; i++) {
        nodeListNotes[i].remove();
    }
    document.getElementById('add-todo').reset();
}

export function displayToDo() {

    //Check and clear current display DOM, if any
    const removeDivs = document.querySelectorAll('.card');
    console.log('show me the node count of current DOM card divs...', removeDivs);
    for (let i = 0; i < removeDivs.length; i++) {
        removeDivs[i].remove();
    }

    //Create the display card for the display DOM
    console.log('display to screen');
    const projects = document.querySelector('.projects');
    const card = document.createElement('div');
    card.classList.add('card');
    projects.appendChild(card);

    //Gather data from local backend storage and initialize
    let title = localStorage.getItem('Title');
    let listType = localStorage.getItem('List-Type');
    let dueDate = localStorage.getItem('DueDate');
    let priority = localStorage.getItem('Priority');
    let notes = localStorage.getItem('Notes');

    //Place data in local temp array and loop over key/value and display to DOM
    let _displayArray = {title, notes, dueDate, priority, listType};
    console.log(_displayArray);

    for (let key in _displayArray) {
        console.log(`${key}: ${_displayArray[key]}`);
        const para = document.createElement('p');
        para.textContent = (`${key}: ${_displayArray[key]}`);
        card.appendChild(para);
    }
}
