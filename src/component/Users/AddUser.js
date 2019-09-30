import React,{Component} from 'react';

class AddUser extends Component{
    constructor(){
        super();
        this.state={
            userName:'',
            address:'',
            location:'',
            profilepic:'',
            selectedGroupList:[]
        }
    }
    addSelectedGroup(e){
        //console.log("add selected value",e.target.value);
        let value = e.target.value;
        let selectedGroups = this.state.selectedGroupList;
        if(value !== "select" && this.state.selectedGroupList.indexOf(value)===-1){
            selectedGroups.push(value);
            this.setState({selectedGroupList:selectedGroups});
        }
    }
    deleteSelectedGroup(e){
        let value = e.target.innerText;
        //console.log("delete selected",value,e.target.innerText);
        let selectedGroups = this.state.selectedGroupList;
        selectedGroups = selectedGroups.filter((group)=>(group.trim()!==value.trim()));
        //console.log("filter",selectedGroups);
        this.setState({selectedGroupList:selectedGroups});
    }
    updateFields(e){
        let name = e.target.name;
        let value = e.target.value;
        //console.log("updated value",name,value);
        var obj = {};
        obj[name] = value;
        this.setState(obj);
    }
    addNewUser(){
        var user = {
                    "userName":this.state.userName,
                    "address":this.state.address,
                    "location":this.state.location,
                    "profilepic":this.state.profilepic,
                    "groups":this.state.selectedGroupList
        };
        if(this.state.userName && this.state.selectedGroupList.length>0){
            this.props.addUser(user);
            this.props.closeModal();
        }else{
            alert("please enter username and select one group");
        }
    }
    cancel(){
        this.props.closeModal();
    }
    
    render(){
        //console.log("add user props",this.props,this.state);
        return(
            <div>
                <p>this page will be used in order to add user</p>
                <input className="primary" name="userName" onChange={this.updateFields.bind(this)} type="text" placeholder="enter username" />
                <input className="primary" name="address" onChange={this.updateFields.bind(this)} type="area" placeholder="enter address" />
                <input className="primary" name="location" onChange={this.updateFields.bind(this)}  type="text" placeholder="enter location" />
                <select className="primary" onChange={this.addSelectedGroup.bind(this)}>
                    <option>select</option>  
                    {this.props.groupList.map((group,key)=>{
                        return(<option key={key} value={group.groupname}>{group.groupname}</option>)
                    })}  
                </select>
                <div className="primary">
                    {this.state.selectedGroupList.map((group,key)=>{
                        return(
                            <span className="selection-span" onClick={this.deleteSelectedGroup.bind(this)} key={key}>{group}</span>
                        )
                    })}
                </div>
                <div className="btn-wrapper">
                    <button className="primary modal-btn" onClick={this.addNewUser.bind(this)}>AddUser</button>
                    <button className="primary modal-btn" onClick={this.cancel.bind(this)}>Cancel</button>
                </div>
            </div>
        )
    }
}

export default AddUser;
