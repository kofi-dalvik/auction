import { axios } from './index';

export const index = (data) => {
    return axios.get('/items', data)
        .then(response => Promise.resolve(response.data))
        .catch(error => Promise.reject(error.response.data))
}

const service = {
    index,
}

export default service;