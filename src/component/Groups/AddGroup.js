import React,{Component} from 'react';

class AddGroup extends Component{
    constructor(){
        super();
        this.state={
            userName:'',
            groupdescription:'',
            selectedUserList:[]
        }
    }
    addSelectedUser(e){
        //console.log("add selected value",e.target.value);
        let value = e.target.value;
        let selectedUsers = this.state.selectedUserList;
        if(value !== "select" && this.state.selectedUserList.indexOf(value)===-1){
            selectedUsers.push(value);
            this.setState({selectedUserList:selectedUsers});
        }
    }
    deleteSelectedUser(e){
        let value = e.target.innerText;
        //console.log("delete selected",value,e.target.innerText);
        let selectedUsers = this.state.selectedUserList;
        selectedUsers = selectedUsers.filter((group)=>(group.trim()!==value.trim()));
        //console.log("filter",selectedUsers);
        this.setState({selectedUserList:selectedUsers});
    }
    updateFields(e){
        let name = e.target.name;
        let value = e.target.value;
        //console.log("updated value",name,value);
        var obj = {};
        obj[name] = value;
        this.setState(obj);
    }
    addNewGroup(){
        var group = {
                    "groupname":this.state.groupname,
                    "groupdescription":this.state.groupdescription,
                    "groupMembers":this.state.selectedUserList
        };
        if(this.state.groupname){
            this.props.addGroup(group);
            this.props.closeModal();
        }else{
            alert("please enter username and select one group");
        }
    }
    cancel(){
        this.props.closeModal();
    }
    
    render(){
        //console.log("add group props",this.props,this.state);
        return(
            <div>
                <p>this page will be used in order to add group</p>
                <input className="primary" name="groupname" onChange={this.updateFields.bind(this)} type="text" placeholder="enter username" />
                <input className="primary" name="groupdescription" onChange={this.updateFields.bind(this)} type="area" placeholder="enter address" />
                <select className="primary" onChange={this.addSelectedUser.bind(this)}>
                    <option>select</option>  
                    {this.props.userList.map((user,key)=>{
                        return(<option key={key} value={user.userName}>{user.userName}</option>)
                    })}  
                </select>
                <div className="primary">
                    {this.state.selectedUserList.map((user,key)=>{
                        return(
                            <span className="selection-span" onClick={this.deleteSelectedUser.bind(this)} key={key}>{user}</span>
                        )
                    })}
                </div>
                <div className="btn-wrapper">
                <button className="primary modal-btn" onClick={this.addNewGroup.bind(this)}>AddGroup</button>
                <button className="primary modal-btn" onClick={this.cancel.bind(this)}>Cancel</button>
                </div>
            </div>
        )
    }
}

export default AddGroup;
