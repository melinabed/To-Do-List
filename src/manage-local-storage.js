import { displayToDo } from './domManip.js';

export function saveToDoToLocal ({title, notes, dueDate, priority, listType}) {
    console.log('saving object to local storage');
    localStorage.setItem('Title', document.getElementById('title').value);
    localStorage.setItem('List-Type', document.getElementById('list-type').value);
    localStorage.setItem('DueDate', document.getElementById('duedate').value);
    localStorage.setItem('Priority', document.getElementById('priority').value);
    localStorage.setItem('Notes', notes);
    displayToDo();
    return {title, notes, dueDate, priority, listType};
}