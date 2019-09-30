export const openModal = (status,content) => (dispatch) => {
    //console.log("the action of open modal is called");
    var action = {
        type:"UPDATE_MODAL",payload:{modalStatus:status,modalContent:content}
    }
    dispatch(action);
}

export const closeModal = (dispatch) => {
    var action = {
        type:"UPDATE_MODAL",payload:{modalStatus:false,modalContent:""}
    }
    dispatch(action);
}

export const addUser = (user) => (dispatch) => {
    var action = {
        type:"ADD_USER",payload:user
    }
    dispatch(action);
} 

export const deleteUser = (userId) => (dispatch) => {
    var action = {
        type:"DELETE_USER",payload:userId
    }
    dispatch(action);
}

export const addGroup = (group) => (dispatch) => {
    var action = {
        type:"ADD_GROUP",payload:group
    }
    dispatch(action);
} 

export const deleteGroup = (groupId) => (dispatch) => {
    var action = {
        type:"DELETE_GROUP",payload:groupId
    }
    dispatch(action);
}