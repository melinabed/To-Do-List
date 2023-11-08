import homeContent from "./content";
import sidebar from "./sidebar";
import createNewList from "./list-card";
import createNewDetail from "./details";

function initialLoad() {
    sidebar();
    homeContent();
    createNewList();
    createNewDetail();
}
export default initialLoad;