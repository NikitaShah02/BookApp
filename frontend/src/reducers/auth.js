import {LOGIN,LOGOUT} from './../actions/actiontypes';

const auth = (state={},action)=>{
    switch (action.type){
        case LOGIN :
            return {authUser:action.payload};

        case LOGOUT:
            return {authUser:null};
        default:
            return state;
    }
};

export default auth;