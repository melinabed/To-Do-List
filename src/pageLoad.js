import homeContent from "./content";
import sidebar from "./sidebar";
import createNewList from "./list-card";

function initialLoad() {
    sidebar();
    homeContent();
    createNewList();
}
export default initialLoad;