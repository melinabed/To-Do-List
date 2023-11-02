const homeContent = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const heading = document.createElement('h1');
    heading.textContent = "To-Do-List";
    pageContent.appendChild(heading);

    //Creates a to-do-list class for the page content
    const list = document.createElement('div');
    list.classList.add('to-do-list');
    pageContent.appendChild(list);


    content.appendChild(pageContent);
}
export default homeContent;