import React,{Component} from 'react';

class GroupDetails extends Component{
    render(){
        console.log("group details",this.props);
        const group = this.props["0"];
        return(
            <div className="details-wrapper">
                <h1>{group.groupname.substring(0,1).toUpperCase()}</h1>
                <div className="details-content">
                    <div className="details-text">GroupName:</div>
                    <div className="details-text right">{group.groupname}</div>
                </div>
                <div className="details-content">
                    <div className="details-text">Group Description:</div>
                    <div className="details-text right">{group.groupdescription}</div>
                </div>
                <div className="details-content">
                    <div className="details-text">Users:</div>
                    <div className="details-text right">{group.groupMembers.map((user,key)=>{
                                return(<span key={key}>
                                    {user+", "}   
                                </span>)
                            })}
                    </div>
                </div>
            </div>
        )
    }
}
export default GroupDetails;