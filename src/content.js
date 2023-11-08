import createNewList from "./list-card";

const homeContent = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const heading = document.createElement('h1');
    heading.textContent = "To-Do-List";
    pageContent.appendChild(heading);

    const addNew = document.createElement('button');
    addNew.setAttribute('id', 'new');
    addNew.textContent = '+';
    pageContent.appendChild(addNew);

    //Creates a to-do-list form for the page content
    const list = document.createElement('form');
    list.setAttribute('id', 'list-info');
    list.style.display = 'none';
    pageContent.appendChild(list);

    
    //Creates a input and label for the title of the list
    const titleHeader = document.createElement('label');
    titleHeader.setAttribute('for', 'title');
    titleHeader.innerHTML = 'Title';
    list.appendChild(titleHeader);

    const title = document.createElement('input');
    title.setAttribute('id', 'title');
    title.type = 'text';
    title.placeholder = 'Title';
    list.appendChild(title);


    //Creates a input and label for the notes section
    const notesBox = document.createElement('label');
    notesBox.setAttribute('for', 'notes');
    notesBox.innerHTML = 'Notes';
    list.appendChild(notesBox);

    const notes = document.createElement('input');
    notes.setAttribute('id', 'notes');
    notes.type = 'text';
    notes.placeholder = 'notes';
    list.appendChild(notes);


    //Creates a button to select date and priority
    const details = document.createElement('button');
    details.setAttribute('id', 'details');
    details.textContent = 'Details';
    list.appendChild(details);

    const detailForm = document.createElement('div');
    detailForm.setAttribute('id', 'detail-info');
    detailForm.style.display = 'none';
    details.appendChild(detailForm);

    const date = document.createElement('input');
    date.setAttribute('id', 'date');
    date.type = 'date';
    detailForm.appendChild(date);


    //Creates another form that lists the type of list
    const listType = document.createElement('form');
    listType.setAttribute('id', 'list-type');
    list.appendChild(listType);

    const option1 = document.createElement('input');
    option1.type = 'radio';
    option1.setAttribute('id', 'option1');
    listType.appendChild(option1);

    const label1 = document.createElement('label');
    label1.innerHTML = 'Reminders';
    label1.setAttribute('for', 'option1');
    listType.appendChild(label1);

    const option2 = document.createElement('input');
    option2.type = 'radio';
    option2.setAttribute('id', 'option2');
    listType.appendChild(option2);

    const label2 = document.createElement('label');
    label2.innerHTML = 'Work';
    label2.setAttribute('for', 'option2');
    listType.appendChild(label2);

    const option3 = document.createElement('input');
    option3.type = 'radio';
    option3.setAttribute('id', 'option3');
    listType.appendChild(option3);

    const label3 = document.createElement('label');
    label3.innerHTML = 'School';
    label3.setAttribute('for', 'option3');
    listType.appendChild(label3);

    const add = document.createElement('input');
    add.setAttribute('id', 'submit');
    add.type = 'submit';
    add.value = 'Add List';
    list.appendChild(add);


    const div = document.createElement('div');
    div.setAttribute('id', 'cards');
    pageContent.appendChild(div);

    content.appendChild(pageContent);
}
export default homeContent;