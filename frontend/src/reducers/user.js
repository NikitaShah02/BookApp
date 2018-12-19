import _ from 'lodash';
import actions from './../actions/actiontypes';

const users = (state = [], action) => {
    switch (action.type) {
        case actions.GET_USER:
            return action.payload;
        case actions.ADD_USER:
            let state1 = _.cloneDeep(state);
            state1.push( action.payload);
            return state1;
        case actions.UPDATE_USER:
            let state2 = _.cloneDeep(state);
            state2[action.payload.index]=action.payload.user;
            return state2;
        case actions.DELETE_USER:
            let state3 = _.cloneDeep(state);
            state3.splice(action.payload,1);
            return state3;
        default:
            return state
    }
};

export default users;