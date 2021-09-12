export const storageKeys = {
    token: 'token',
    user: 'user'
};

export const SET_AUTH_USER = (state, payload) => {
    state.auth.user = payload.user;

    localStorage.setItem(storageKeys.user, JSON.stringify(state.auth.user))

    if (payload.token) {
        state.auth.token = payload.token;

        localStorage.setItem(storageKeys.token, JSON.stringify(state.auth.token))
    }

    state.auth.isLoggedIn = !!state.auth.user;

    return state;
}

export const LOGOUT = (state, payload) => {
    state.auth.user = null;
    state.auth.token = null

    localStorage.removeItem(storageKeys.token);
    localStorage.removeItem(storageKeys.user);

    return state;
}

const actions = {
    SET_AUTH_USER
}

export default actions;