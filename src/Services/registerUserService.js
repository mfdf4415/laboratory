import http from "./httpService";

export const registerUser = (data) => {
    return (
        http.post("/user/register", data)
    );
}
