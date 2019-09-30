import {groupList} from '../state';

const groupReducer = (state=groupList,action) => {
    //console.log("reducer1",state);
    switch(action.type){
        case "ADD_GROUP":{ 
            var maxId = 0;
            var group = state.filter((group)=>{
                if(maxId<group.groupId) maxId=group.groupId;
                return(group.groupname === action.payload.groupname);
            });
            //console.log("maxcount",maxId,group);
            if(group.length==0){
                action.payload["groupId"]=maxId+1;
                //console.log("reducer",action.payload,state);
                state.push(action.payload);
                return state;
            }else {
                return state;
            }
            break;
        }
        case "DELETE_GROUP": {
            return state.filter((group)=>{
                //console.log(user.userId,action.payload);
                return(group.groupId!==action.payload)
            }); 
            break;
        }
        default: return state;
    }
}  

export default groupReducer;