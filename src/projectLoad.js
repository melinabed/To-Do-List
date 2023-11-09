//Factory function to create blank prject array list

export const projectLoad = () => {
    console.log('testing');
    let projectArray = [];
    console.log('pushing something');
    let projectTitle = 'Default project';
    projectArray.push({projectTitle});
    console.log(projectArray);
    return {projectArray, projectTitle};
}