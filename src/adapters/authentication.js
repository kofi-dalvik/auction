import { axios } from './index';

export const login = (data) => {
    return axios.post('/login', data)
        .then(response => Promise.resolve(response.data))
        .catch(error => Promise.reject(error.response.data))
}

export const logout = (data) => {
    return axios.post('/logout', data)
        .then(response => Promise.resolve(response.data))
        .catch(error => Promise.reject(error.response.data))
}

const service = {
    login,
    logout
}

export default service;