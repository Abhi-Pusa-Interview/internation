import React,{Component} from 'react';
import {connect} from 'react-redux';
import {openModal,closeModal,addGroup,deleteGroup} from '../../actions/actions';
import GroupDetails from './GroupDetails';
import AddGroup from './AddGroup';

class GroupList extends Component{
    constructor(){
        super();
        this.state = {
            filterText:""
        }
        this._onChangeHandler = this._onChangeHandler.bind(this);
        this.addGroup = this.addGroup.bind(this);
    }
    componentWillMount(){
        //console.log("this function is called when the user details are added");
        this.setState({groupList:this.props.groupList})
    }
    onClickHandler(groupid){
        //console.log("onclick handler is called",groupid);
        var selectedGroup = this.state.groupList.filter((group)=>(group.groupId == groupid));
        this.props.openModal(true,<GroupDetails {...selectedGroup}/>);
    }
    _onChangeHandler(e){
        // console.log("on change handler",e.target.value);
        // var newList = this.props.groupList.filter((group)=>{
        //     return (group.groupname.indexOf(e.target.value)!==-1)
        // });
        // this.setState({groupList:newList});
        this.setState({filterText:e.target.value});
    }
    addGroup(){
        this.props.openModal(true,<AddGroup {...this.props}/>);
    }
    deleteGroup(groupId){
        //console.log("delete user is called",groupId);
        this.props.deleteGroup(groupId);
    }
    render(){
        //console.log("grouplist",this.props.groupList);
        return(
            <div>
                <button className="primary" onClick={this.addGroup}>Add Group</button>
                <input className="primary" type="text" onChange={this._onChangeHandler} placeholder="search group"/>
                {this.props.groupList.filter((group)=>(this.state.filterText?group.groupname.indexOf(this.state.filterText)!==-1:true)).map((group,key)=>{
                       return (<div className="user-pallete" key={group.groupId}>
                            <div onClick={this.onClickHandler.bind(this,group.groupId)}><p className="pallete-block initials-logo">{group.groupname.substring(0,1).toUpperCase()}</p></div>
                            <div onClick={this.onClickHandler.bind(this,group.groupId)}><p className="pallete-block">{group.groupname}</p></div>
                            <div><button className="pallete-block-btn" onClick={this.deleteGroup.bind(this,group.groupId)}>Delete</button></div>
                        </div>)
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userList:state.userList,
        modalDetails:state.modalDetails,
        groupList:state.groupList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openModal:(status,content) => {return openModal(status,content)(dispatch);},
        closeModal:()=>closeModal(dispatch),
        addGroup: (group) => addGroup(group)(dispatch),
        deleteGroup: (groupId) => deleteGroup(groupId)(dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GroupList);