import React from 'react';
import {NavLink} from 'react-router-dom';
import {Nav,NavItem} from 'reactstrap';

class SideBar extends React.Component{
    render(){
        return(
            <div>
                <Nav vertical >
                    <NavItem>
                        <NavLink to='/dashBoard' >DashBoard</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/userManagement' >User Management</NavLink>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}

export default SideBar;