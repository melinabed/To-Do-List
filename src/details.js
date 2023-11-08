import homeContent from "./content";

const createNewDetail = () => {
    const content = document.querySelector('#content');

    const myDetail = [];

    function Detail(date, priority) {
        this.date = date;
        this.priority = priority;
    }
    function render() {
        let detailEl = document.querySelector('#detail-info');
        detailEl.innerHTML = "";
        for (let i = 0; i < myDetail.length; i++) {
            let card = myDetail[i];
            let cardEl = document.createElement('div');
            cardEl.setAttribute('class', 'detail-card-info');
            cardEl.innerHTML = `
            <div class="card-date">${card.date}
                <label for="date">Date</label>
                <input type="date" id="date">
            </div>`;
            detailEl.appendChild(cardEl);
        }
    }
    function addNewDetail() {
        let date = document.querySelector('#date').value;
        let addDetail = new Detail(date, priority);
        myDetail.push(addDetail);
        render();
    }
    let newDetail = document.querySelector('#details');
    newDetail.addEventListener('click', function() {
        let form = document.querySelector('#detail-info');
        form.style.display = 'block';
    })
    document.querySelector('#details').addEventListener('click', function(event) {
        event.preventDefault();
        addNewDetail();
    })
}
export default createNewDetail;