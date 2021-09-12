import { axios } from './index';

export const index = (params) => {
    return axios.get('/items', {params})
        .then(response => Promise.resolve(response.data))
        .catch(error => Promise.reject(error.response.data))
}

const service = {
    index,
}

export default service;