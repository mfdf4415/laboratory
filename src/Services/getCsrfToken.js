import http from "./httpService";

export const getCsrfToken = () => {
    return http.get("/csrf-cookie")
}