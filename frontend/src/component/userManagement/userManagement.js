import React, {Component} from 'react';
import {connect} from 'react-redux';
import Modal from 'react-modal';
import {bindActionCreators} from 'redux';

import {addUser, updateUser, deleteUser,getUser} from '../../actions/index';
import '../../App.css';
import axios from "axios/index";

class UserManagement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            user: {
                user_id: '',
                name: '',
                password: '',
                age: ''
            },
            index: 0
        }
    }

    componentWillMount(){

        const {onGetUser} = this.props;
        axios.get('http://localhost:3010/getUsres').then((result)=>{
            console.log('data:',result);

            onGetUser(result.data);
        }).catch((err)=>{
            console.log(err);
        });

    }

    openModal = () => {
        this.setState({
            open: !this.state.open
        });
    };
    newuser = () => {
        const {onAddUser} = this.props;
        console.log(this.state.user);
        const {user} = this.state;
        axios.post('http://localhost:3010/register', {user})
            .then((result) => {
                console.log(result);
                if(result.status === 200){
                    onAddUser(this.state.user);
                }
            });
        this.openModal();
    };

    updateUser = () => {
        const {onUpdateUser} = this.props;
        console.log(this.state);
        onUpdateUser(this.state.user, this.state.index);
        this.openModal();
    };
    deleteUser = () => {
        const {onDeleteUser} = this.props;
        onDeleteUser(this.state.index);
        this.openModal();

    };
    handleChange = (e) => {

        let {user} = this.state;
        user[e.target.name] = e.target.value;
        this.setState({
            user
        });
    };

    hanldeItemClick = (e) => {

        let index = Number(e.target.id);
        const {allusers} = this.props;

        let user = allusers.slice(index,index+1);
        this.setState({
           user:user[0]
        },()=>{
            console.log(this.state.user);
            this.openModal();
        });
    };

    render() {
        const {allusers} = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <button onClick={this.openModal}>Add user</button>
                <Modal isOpen={this.state.open}>
                    <div><input style={{padding: "10px"}} type='text' name="user_id" value={this.state.user.user_id}
                                onChange={this.handleChange} placeholder="user_id"/></div>
                    <div><input style={{padding: "10px"}} type='text' name="name" value={this.state.user.name}
                                onChange={this.handleChange} placeholder="name"/></div>
                    <div><input style={{padding: "10px"}} type='password' name="password" value={this.state.user.passwrod}
                                onChange={this.handleChange} placeholder="password"/></div>
                    <div><input style={{padding: "10px"}} type='number' name="age" value={this.state.user.age}
                                onChange={this.handleChange} placeholder="age"/></div>
                    <div>
                        <button style={{padding: "10px"}} onClick={this.newuser}>save</button>
                        <button style={{padding: "10px"}} onClick={this.updateUser}>Update</button>
                        <button style={{padding: "10px"}} onClick={this.deleteUser}>Delete</button>
                    </div>
                    <div style={{marginTop: '30%', marginLeft: '90%'}}>
                        <button style={{padding: "10px"}} onClick={this.openModal}>Cancel</button>
                    </div>
                </Modal>

                <div style={{marginLeft: "50%", marginTop: "5%"}}>
                    <table border="1">
                        <thead>
                        <th style={{padding: "10px"}}>name</th>
                        </thead>
                        {
                            allusers && allusers.map((user, index) => {
                                return (<tbody>
                                <tr>
                                    <td style={{padding: "10px"}} id={index}
                                        onClick={this.hanldeItemClick}>{user.user_id}</td>
                                    <td style={{padding: "10px"}} id={index}
                                        onClick={this.hanldeItemClick}>{user.name}</td>
                                    <td style={{padding: "10px"}} id={index}
                                        onClick={this.hanldeItemClick}>{user.age}</td>
                                </tr>
                                </tbody>);
                            })
                        }
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {allusers: state.users}
};

const mapDispatchToProps = (dispatch) => {
    //return {action: bindActionCreators({addUser, updateUser,deleteUser}, dispatch)};//unsafe
    //we can manage params
    return {
        onAddUser: (user) => {
            dispatch(addUser(user));
        },
        onUpdateUser: (name, index) => {
            dispatch(updateUser(name, index));
        },
        onDeleteUser: (index) => {
            dispatch(deleteUser(index));
        },
        onGetUser: (index) => {
            dispatch(getUser(index));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(UserManagement);
