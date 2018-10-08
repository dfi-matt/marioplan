const initState = {
    projects: [
        { id: '1', title: 'Project 1', content: 'This is some conent' },
        { id: '2', title: 'Project 2', content: 'This is some conent' },
        { id: '3', title: 'Project 3', content: 'This is some conent' }
    ]
};

const projectReducer = (state = initState, action) => {
    return state;
};

export default projectReducer;