//import seperate modules
import { projectLoad } from "./projectLoad";
import { initialLoad } from "./initialLoad";
import { createToDo } from "./createToDo";

//Call the project load on first land
projectLoad();

//Call DOM manipulation to control UI
initialLoad();

//Future click events for project creation

const myToDo = createToDo("Grocery Run", "go get the groceries", "6/11/2023", "Low", "Meat");
const myToDo2 = createToDo("Homework", "Biology", "11/17/2023", "Medium", "something-else");
console.log("show properties from index.js", myToDo);
console.log("show properties from index.js", myToDo2);
