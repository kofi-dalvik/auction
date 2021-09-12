import { storageKeys } from './actions';

//Get stored user & token from localstorage
const user = JSON.parse(localStorage.getItem(storageKeys.user));
const token = localStorage.getItem(storageKeys.token);

const state = {
    auth: {
        user,
        token,
        isLoggedIn: !!user
    },

    items: {
        all: [],
        pageDetails: {
            to: 0,
            from: 0,
            total: 0,
            perPage: 0,
            lastPage: 0,
            currentPage: 0,
        }
    }
}

export default state;