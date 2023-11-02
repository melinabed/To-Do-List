const homeContent = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const check = document.createElement('div');
    check.textContent = "What's cracking cuhhh";
    pageContent.appendChild(check);

    content.appendChild(pageContent);
}
export default homeContent;