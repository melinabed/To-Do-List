//import seperate modules
import { projectLoad } from "./projectLoad";
import { displayDefaultProject, displayForm, addNotesList, clearForm } from "./domManip";
import { createToDo } from "./createToDo";


//Call the project load on first land
projectLoad();

//Call DOM manipulation to control UI

//Click events for project creation and reverting
let clickEventModule = (function() {

    //Click event for displaying the form
    const addNewToDo = document.querySelector('.add-todo-button');
    addNewToDo.addEventListener('click', displayForm);

    //Click event for adding an item to the notes on form
    const addNotes = document.querySelector('.add-notes');
    addNotes.addEventListener('click', addNotesList);

    //Click even to clear the form
    const clearButton = document.querySelector('.reset-button');
    clearButton.addEventListener('click', clearForm);

    //Click event to submit a new todo form to project
    const submitButton = document.querySelector('.submit-button');
    submitButton.addEventListener('click', createToDo);
})();

//const myToDo = createToDo("Grocery Run", "go get the groceries", "6/11/2023", "Low", "Grocery List");
//const myToDo2 = createToDo("Homework", "Biology", "11/17/2023", "Medium", "Reminders");
//console.log("show properties from index.js", myToDo);
//console.log("show properties from index.js", myToDo2);
