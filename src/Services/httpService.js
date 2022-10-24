import axios from "axios"
import {logoutService} from "./logoutService"

axios.defaults.baseURL = "https://api.laboratoryappointment.de/v1"
const localToken = JSON.parse(localStorage.getItem("authState")) || false
const token = localToken ? localToken["access token"].token : null

axios.interceptors.request.use(config => {
    config.headers['Authorization'] = `Bearer ${token}`;
    return config;
});

axios.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response.status === 401) {
        alert("You are not authorized, You must first login to yor acount");
        window.location.href = "/login"
    }
    return error;
});

const http = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}

export default http