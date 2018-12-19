import React from 'react';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import UserManagement from "./component/userManagement/userManagement";
import Home from "./component/home/Home";
import Login from './component/login/login';
import DashBoard from './component/dashboard/dashboard';
import PrivateNavBar from './component/navbar/peivateNavbar';
import PublicNavBar from './component/navbar/publicNavBar';
import SideBar from './component/sidebar/sidebar';
import Footer from './component/footer/footer';

import './App.css';

class App extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        const PrivateRoute=({component: Component,...rest})=>{
            const {user} = this.props;
            return(user ?
                <div>
                    <div><PrivateNavBar/></div>
                    <div className='row container'>
                        <div className='col-2 sidebar-container bg-dark'><SideBar/></div>
                    <div className='col-8'><Component /> </div>
                    </div>
                    <div className='bg-dark'><Footer/></div>
                </div>: <Redirect to='/login'/>);
        };

        const PublicRoute = ({component: Component,...rest}) =>{
            const {user}= this.props;
            return(
          <Route {...rest} render={(routeProps)=>(
              !user ?
                  <div>
                      <div><PublicNavBar/></div>
                  <div><Component {...routeProps}/></div>
                  </div>
                  :
                  <Redirect to='/dashBoard'/>
          )}/>  );
        };
        return(
            <BrowserRouter>
                <Switch>
                    <PublicRoute  path='/' exact component={Home}/>
                    <PrivateRoute path='/dashBoard' component={DashBoard}/>
                    <PrivateRoute path='/userManagement' exact component={UserManagement}/>
                    <PublicRoute path='/login' exact component={Login}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = state =>{
  return{
      user:state.auth.authUser
  }
};

export default connect(mapStateToProps,null)(App);