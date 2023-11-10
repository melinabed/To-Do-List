import { compareAsc, format, parseISO, startOfToday } from 'date-fns';
import { clearForm } from './domManip';

//Creating an array for the ToDo
let toDoArray = [];

export const createToDo = () => {
    let title = document.getElementById('title').value;
    let listType = document.getElementById('list-type').value;
    let dueDate = document.getElementById('duedate').value;
    let priority = document.getElementById('priority').value;

    //Check to see if empty fields exist
    if (title == "" || dueDate == "") {
        alert('Title, notes, and due date are required fields, please try again')
        return;
    }
    //Check to see if pre-date was entered
    if (parseISO(dueDate) < startOfToday()) {
        alert('you have entered a date that has already passed! please enter a date greater than that.')
        console.log('due date', parseISO(dueDate));
        console.log('date now', startOfToday());
        return;
    }
    //Loop over the nodelist for notes list items from the DOM and format to string
    const nodeListNotes = document.querySelectorAll('li');
    let notesListArray = [];
    for (let i = 0; i < nodeListNotes.length; i++) {

        //Strip off the "x" from the end of the li then push to temp array
        let strippedNotesList = nodeListNotes[i].textContent.replace('\u00D7', "");
        notesListArray.push(strippedNotesList);
    }
    //Strip off the notes list array and convert to string with commas
    let notes = notesListArray.join(", ");

    console.log('called createToDO module.. creating todo now');
    console.log({title, notes, dueDate, priority, listType });
    console.log('pushing this object to the toDo array...');
    //TODO: remove below two lines if array is not needed
    toDoArray.push({title, notes, dueDate, priority, listType});
    console.log(toDoArray);

    //Reset the form after successful submission
    clearForm();

    return {title, notes, dueDate, priority, listType};

}
    
