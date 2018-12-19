import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {loginUser} from './../../actions/index';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            user:{
                email:'',
                password:''
            }
        };
    }

    handleChange=(event)=>{
        const {user} = this.state;
        user[event.target.name]=event.target.value;
        this.setState({user});
    };

    handleSubmit=()=>{
        const {onLogin} = this.props;
        const {user} = this.state;
        onLogin(user);
        localStorage.setItem('user',JSON.stringify(user));
        //<Redirect to='/dashBoard'/>
    };
    render(){

        const {user} = this.state;
        return(
            <div>
                <div>Login</div>
                <div>
                    <div>
                        <label>Email:</label>
                        <input type='email' name='email' value={user.email} placeholder='Enter Email address' onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type='password' name='password' value={user.password} placeholder='Enter Password 'onChange={this.handleChange}/>
                    </div>
                    <div>
                        <button type='submit' onClick={this.handleSubmit}>Login</button>
                    </div>
                </div>
            </div>
        );
    }
}
//
// const mapStateToProps = state =>{
//   return{
//       user:state.authUser
//   }
// };

const mapDispatchToProps = dispatch =>{
    return {
        onLogin: (user) => {
            dispatch(loginUser(user));
        }
    };
};

export default connect(null,mapDispatchToProps)(Login);