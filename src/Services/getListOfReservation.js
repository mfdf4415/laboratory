import http from "./httpService";

export const getListOfResevation = () => {
    return http.get("/user/reservation/list")
}