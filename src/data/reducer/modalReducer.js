import {modalDetails} from '../state';

const modalReducer = (state=modalDetails,action) => {
    //console.log("the modal reducer section is called");
    switch(action.type){
        case "UPDATE_MODAL": return action.payload; break;
        default: return state;
    }
}

export default modalReducer;