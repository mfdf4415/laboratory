import http from "./httpService";

let headers = {
    "Access-Control-Allow-Origin": "*",
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
}

export const registerUser = (data) => {
    return (
        http.post("/user/register", data)
    );
}
