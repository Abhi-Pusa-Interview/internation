import React,{Component} from 'react';

class UserDetails extends Component{
    render(){
        console.log("selected user",this.props);
        const user = this.props["0"];
        return(
            <div className="details-wrapper">
                <h1>{user.userName.substring(0,1).toUpperCase()}</h1>
                <div className="details-content">
                    <div className="details-text">Username:</div>
                    <div className="details-text right">{user.userName}</div>
                </div>
                <div className="details-content">
                    <div className="details-text">Address:</div>
                    <div className="details-text right">{user.address}</div>
                </div>
                <div className="details-content">
                    <div className="details-text">Location:</div>
                    <div className="details-text right">{user.location}</div>
                </div>
                <div className="details-content">
                    <div className="details-text">Groups:</div>
                    <div className="details-text right">{user.groups.map((group,key)=>{
                                return(<span key={key}>
                                    {group+","}   
                                </span>)
                            })}
                    </div>
                </div>
                
            </div>
        )
    }
}
export default UserDetails;