//import seperate modules
import { projectLoad } from "./projectLoad";
import { displayDefaultProject, displayForm, addNotesList, clearForm, displayToDo } from "./domManip";
import { createToDo } from "./createToDo";


//Call the project load on first land
projectLoad();

//Call displayTo on first land - pulls from web local storage APIm, if any
displayToDo();

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

