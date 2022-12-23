import http from "./httpService";

export const getListOfSpecificLabs = (id) => {

    return http.get(`/laboratory/${id}/reservation/list`)
}