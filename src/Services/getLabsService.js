import http from "./httpService";

export const getLabs = () => {
    return (
        http.get("/laboratory/list")
    );
}