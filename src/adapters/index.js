import Axios from 'axios';

const baseURL = {
    production: 'http://localhost:8000/api/',
    development: 'http://api.auction.local/api/',
}

const interceptSuccess = (response) => {
    return Promise.resolve(response);
};

const interceptFailure = (error) => {
    if ([401].includes(error.response.status)) {
        //logout & redirect to login page
    } else if (error.response.status === 403) {
        alert(`You're not authorized to perform this action`);
    }

    error.response.data.status_code = error.response.status;

    return Promise.reject(error);
};

const interceptRequest = (config) => {
    let apiToken = null;

    if (apiToken && !config.headers.common.Authorization) {
        config.headers.common.Authorization = `Bearer ${apiToken}`;
    }

    return config;
};

export const axios = Axios.create({
    baseURL: baseURL[process.env.NODE_ENV],

    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    }
});

/* Intercept each request and set the bearer token for user */
axios.interceptors.request.use(interceptRequest);

/* Logout user when the api token is not working (expired or being refreshed) */
axios.interceptors.response.use(interceptSuccess, interceptFailure);