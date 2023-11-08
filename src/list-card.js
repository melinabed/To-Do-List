import homeContent from "./content";
import createNewDetail from "./details";

const createNewList = () => {
    const content = document.querySelector('#content');
    const myList = [];


function List(title, notes) {
    this.title = title;
    this.notes = notes;
}


function render() {
    let listEl = document.querySelector('#cards');
    listEl.innerHTML = "";
    for (let i = 0; i < myList.length; i++) {
        let card = myList[i];
        let cardEl = document.createElement('div');
        cardEl.setAttribute('class', 'card-info');
        cardEl.innerHTML = `
            <div class="card-header">
                <h3 class="title">${card.title}</h3>
            </div>
            <div class="card-body">
                <p>${card.notes}</p>
            </div>`;
        listEl.appendChild(cardEl);
    }
}


function removeList(index) {
    myList.splice(index, 1);
    render();
}

function addNewList() {
    let title = document.querySelector('#title').value;
    let notes = document.querySelector('#notes').value;
    let addList = new List(title, notes);
    myList.push(addList);
    render();
    createNewDetail();
}

let newList = document.querySelector('#new');
newList.addEventListener('click', function() {
    let form = document.querySelector('#list-info');
    form.style.display = 'block';
})
document.querySelector('#submit').addEventListener('click', function(event) {
    event.preventDefault();
    addNewList();
})

}
export default createNewList;

