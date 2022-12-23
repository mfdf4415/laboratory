import axios from "axios";

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
    if (error.response.status === 401 && !window.location.href.endsWith("/login")) {
        console.log(window.location.href)
        alert("Sie sind nicht berechtigt, Sie müssen sich mit Ihrem Benutzerkonto anmelden.");
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

export default http;