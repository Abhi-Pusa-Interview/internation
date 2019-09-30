import {userList} from '../state';

const userReducer = (state=userList,action) => {
    //console.log("reducer2",state);
    switch(action.type){
        case "ADD_USER": {
            let maxId = 0;
            let user = state.filter((user)=>{
                if(maxId<user.userId) maxId=user.userId;
                return(user.userName === action.payload.userName);
            });
            //console.log("maxcount",maxId,user);
            if(user.length==0){
                action.payload["userId"]=maxId+1;
                state.push(action.payload);
                return state;
            }else{
                return state;
            }
            break;
        }
        case "DELETE_USER": {
            //console.log("delete_user",action.payload);
            return state.filter((user)=>{
                //console.log(user.userId,action.payload);
                return(user.userId!==action.payload)
            }); 
            break;
        }
        default: return state;
    }
}

export default userReducer;