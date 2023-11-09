//Creating an array for the ToDo
let toDoArray = [];

export const createToDo = (title, description, dueDate, priority, listType) => {
    console.log('creating to do now..');
    console.log({title, description, dueDate, priority, listType});
    console.log('pushing this object to the todoarray...');

    //TODO: remove lines code if not needed

    toDoArray.push({title, description, dueDate, priority, listType});
    console.log(toDoArray);
    return {title, description, dueDate, priority, listType};
    
}