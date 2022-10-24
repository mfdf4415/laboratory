import http from "./httpService";


export const logoutService = () => {


    return (
        http.get("/laboratory/list")
    );
}