import { SET_AUTH_USER } from './action-types';

const actions = {
    [SET_AUTH_USER]: (state, payload) => {
        console.log('setting auth user');
        return state;
    }
}

export default actions;