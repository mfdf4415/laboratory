import axios from "axios"

axios.defaults.baseURL = "https://api.laboratoryappointment.de/v1"

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Content-Type'] = 'application/json';
const http = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}



export default http