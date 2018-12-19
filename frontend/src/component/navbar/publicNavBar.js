import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav,NavItem} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';


class PublicNavBar extends React.Component{
    render(){
        return(
            <div>
                <Navbar className='bg-secondary '>
                    <Nav>
                        <NavItem>
                            <NavLink to='/' className='text-white'>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/login/' className='text-white'>Login</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default PublicNavBar;
