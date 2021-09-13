import { axios } from './index';

export const index = (params) => {
    return axios.get('/items', {params})
        .then(response => Promise.resolve(response.data))
        .catch(error => Promise.reject(error.response.data))
}

export const show = (id) => {
    return axios.get(`/items/${id}`)
        .then(response => Promise.resolve(response.data))
        .catch(error => Promise.reject(error.response.data))
}

export const makeBid = (data) => {
    return axios.post(`/biddings`, data)
        .then(response => Promise.resolve(response.data))
        .catch(error => Promise.reject(error.response.data))
}

export const saveMaxAutoBid = (data) => {
    return axios.post(`/biddings/configs`, data)
        .then(response => Promise.resolve(response.data))
        .catch(error => Promise.reject(error.response.data))
}

const service = {
    index,
    show,
    makeBid,
    saveMaxAutoBid
}

export default service;