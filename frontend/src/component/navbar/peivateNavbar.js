import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {Navbar,NavItem,Nav} from 'reactstrap';

import {logoutUser} from "../../actions";

class PrivateNavBar extends React.Component{
    onLogout=()=>{
        const {onLogoutUser} = this.props;
        localStorage.clear();
        onLogoutUser();
    };
    render(){
        return(
            <div>
                <Navbar className='bg-dark'>
                    <Nav>
                        <NavItem>
                            <NavLink to='/dashBoard' className='text-white'>DashBoard</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/userManagement' className='text-white' >User Management</NavLink>
                        </NavItem>
                        <NavItem>
                            <button onClick={this.onLogout}>logout</button>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

const mapStateToDispatch = dispatch =>{
    return{
        onLogoutUser:()=>{
            dispatch(logoutUser());
        }
    }
};
export default connect(null,mapStateToDispatch)(PrivateNavBar);