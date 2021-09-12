import { storageKeys } from './actions';

//Get stored user & token from localstorage
const user = JSON.parse(localStorage.getItem(storageKeys.user));
const token = JSON.parse(localStorage.getItem(storageKeys.token));

const state = {
    auth: {
        user,
        token,
        isLoggedIn: !!user
    }
}

export default state;