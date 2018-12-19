//import {ADD_USER, UPDATE_USER,GET_USER ,DELETE_USER} from './actiontypes';
import actions from './actiontypes';
import axios from 'axios';

export const addUser = (user) => {
    return (dispatch) => {
        dispatch({
            type: actions.ADD_USER,
            payload: user
        })
    }
};

export const getUser=(user)=>{
    return(dispatch)=>{
        dispatch({
            type:actions.GET_USER,
            payload:user
        });
    }
};

export const updateUser = (user, index) => {
    return (dispatch) => {
        dispatch({
            type: actions.UPDATE_USER,
            payload: {user: user, index}
        });
    }
};

export const deleteUser = (index) => {
    return (dispatch) => {
        dispatch({
            type: actions.DELETE_USER,
            payload: index
        });
    }
};

export const loginUser = (user) =>{
    return (dispatch)=>{
        dispatch({
            type: actions.LOGIN,
            payload:user
        });
    }
};

export const logoutUser = () =>{
    return (dispatch)=>{
        dispatch({type:actions.LOGOUT});
    }
}