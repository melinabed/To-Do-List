import homeContent from "./content";

const sidebar = () => {
    const content = document.querySelector('#content');

    //Create the 4 tabs for the to-do-list
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    const div4 = document.createElement('div');

    //Assign each div an id
    div1.setAttribute('id', 'all');
    div2.setAttribute('id', 'today');
    div3.setAttribute('id', 'week');
    div4.setAttribute('id', 'completed');

    //Attach each div in tab class
    div1.classList.add('tab');
    div2.classList.add('tab');
    div3.classList.add('tab');
    div4.classList.add('tab');

    //Set the text content for the tabs
    div1.textContent = "All";
    div2.textContent = "Today";
    div3.textContent = "This Week";
    div4.textContent = "Completed";

    //Append each div to the content of the page
    content.appendChild(div1);
    content.appendChild(div2);
    content.appendChild(div3);
    content.appendChild(div4);

    //Creates class list for the lists
    const lists = document.createElement('div');
    lists.classList.add('lists');
    content.appendChild(lists);

    //Applies the header to the list
    const myListHeader = document.createElement('h3');
    myListHeader.setAttribute('id', 'list-header');
    myListHeader.textContent = "My Lists";
    lists.appendChild(myListHeader);

    //Creates a card for the lists to inputed into
    const listCard = document.createElement('div');
    listCard.setAttribute('id', 'list-card');
    lists.appendChild(listCard);


};
export default sidebar;