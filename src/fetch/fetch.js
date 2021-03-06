import axios from 'axios';
import Qs from 'qs';

let config = {
    baseURL: '/api',
    transformRequest: [
        function (data) {
            let ret = '';
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it])+ '&'
            }
            return ret
        }
    ],
    transfromResponse: [
        function(data) {
            return data
        }
    ],
    header: {
        'Content-Type': 'application/x-www-from-urlencoded;charset=UTF-8'
    },
    timeout: 10000,
    responseType: 'json'
};

axios.interceptors.response.use(function(res){
    return res.data;
});

export function get(url) {
    return axios.get(url, config)
}

export function post(url, data) {
    return axios.post(url, data, config)
}