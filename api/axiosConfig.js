import axios from 'axios';

const axiosInstance = axios.create({
    // baseURL: 'http://localhost:8000/api/v2',
    baseURL: 'http://192.168.132.245:8000/api/v2',
    headers: {
        'accept': 'application/json'
        
    }
});


axiosInstance.interceptors.request.use(
    config => {
        const token = JSON.parse(localStorage.getItem('token'));
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);



export default axiosInstance;
