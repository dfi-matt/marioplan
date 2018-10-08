export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //Make asyc call
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Matt',
            authorLastName: 'Barton',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err});
        });
    }
};