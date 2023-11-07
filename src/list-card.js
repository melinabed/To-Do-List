
const myList = [];

function newList(title, notes, details, checkList) {
    this.title = title;
    this.notes = notes;
    this.details = details;
    this.checkList = checkList;
}

function render() {
    let listCard = document.querySelector('#content');
    listCard.innerHTML = "";
    for (let i = 0; i < myList.length; i++) {
        let list = myList[i];
        let listEl = document.createElement('div');
        listEl.setAttribute('class', 'list-card');
        listEl.innerHTML = `
        <div class="card-header">
        <h3 class="title>${list.title}</h3>
        <h5 class="notes>${list.notes}</h5>
        </div>
        <div class="card-body">
        <h3 class="title>${list.details}</h3>
        <h5 class="notes>${list.checkList}</h5>`;
        listCard.appendChild(listEl);
    }
}
function addNewList() {
    let title = document.querySelector('#title').value
}