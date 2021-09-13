import {storageKeys} from './../constants';

export const SET_AUTH_USER = (state, payload) => {
    state.auth.user = payload.user;

    localStorage.setItem(storageKeys.user, JSON.stringify(state.auth.user))

    if (payload.token) {
        state.auth.token = payload.token;

        localStorage.setItem(storageKeys.token, state.auth.token)
    }

    state.auth.isLoggedIn = !!state.auth.user;

    return state;
}

export const LOGOUT = (state, payload) => {
    localStorage.removeItem(storageKeys.token);
    localStorage.removeItem(storageKeys.user);

    state.auth.user = null;
    state.auth.token = null;
    state.auth.isLoggedIn = false;

    return state;
}

export const SET_ITEMS = (state, payload) => {
    state.items = {
        all: payload.data ? payload.data : payload,
        pageDetails: {
            to: payload.to || 0,
            from: payload.from || 0,
            currentPage: payload.current_page || 0,
            total: payload.total || 0,
            lastPage: payload.last_page || 0
        }
    }

    return state;
}

const actions = {
    LOGOUT,
    SET_ITEMS,
    SET_AUTH_USER,
}

export default actions;