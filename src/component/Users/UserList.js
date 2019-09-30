import React,{Component} from 'react';
import {connect} from 'react-redux';
import {openModal,closeModal,addUser,deleteUser} from '../../actions/actions';
import UserDetails from './UserDetails';
import AddUser from './AddUser';
import './Users.css';

class UserList extends Component{
    constructor(){
        super();
        this.state = {
            filterText:""
        }
        this._onChangeHandler = this._onChangeHandler.bind(this);
        this.addUser = this.addUser.bind(this);
    }
    componentDidMount(){
        //console.log("this function is called when the user details are added");
        this.setState({userList:this.props.userList})
    }
    onClickHandler(userid){
        //console.log("onclick handler is called",userid);
        var selectedUser = this.state.userList.filter((user)=>(user.userId == userid));
        this.props.openModal(true,<UserDetails {...selectedUser}/>);
    }
    _onChangeHandler(e){
        //console.log("on change handler",e.target.value);
        // var newList = this.props.userList.filter((user)=>{
        //     return (user.userName.indexOf(e.target.value)!==-1)
        // });
        this.setState({filterText:e.target.value});
    }
    addUser(){
        //console.log("add user is called");
        this.props.openModal(true,<AddUser {...this.props}/>);
    }
    deleteUser(userId){
        //console.log("delete user is called",userId);
        this.props.deleteUser(userId);
    }
    render(){
        //console.log("this props",this.props);
        return(
            <div>
                <div className="controller">
                    <button className="primary" onClick={this.addUser}>Add User</button>
                    <input className="primary" type="text" onChange={this._onChangeHandler} placeholder="search user"/>
                </div>
                {this.props.userList.filter((user)=>(this.state.filterText?user.userName.indexOf(this.state.filterText)!==-1:true)).map((user,key)=>{
                    return(
                        <div className="user-pallete" key={user.userId}>
                            <div onClick={this.onClickHandler.bind(this,user.userId)}><p className="pallete-block initials-logo">{user.userName.substring(0,1).toUpperCase()}</p></div>
                            <div onClick={this.onClickHandler.bind(this,user.userId)}><p className="pallete-block">{user.userName}</p></div>
                            <div onClick={this.onClickHandler.bind(this,user.userId)}><p className="pallete-block">{user.location}</p></div>
                            <div><button className="pallete-block-btn" onClick={this.deleteUser.bind(this,user.userId)}>Delete</button></div>
                        </div>
                    )
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
       openModal:(status,content) => {console.log(status,content); return openModal(status,content)(dispatch);},
       closeModal:()=>closeModal(dispatch),
       addUser: (user) => addUser(user)(dispatch),
       deleteUser: (userId) => deleteUser(userId)(dispatch)
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserList);