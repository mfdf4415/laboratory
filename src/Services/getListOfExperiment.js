import http from "./httpService"

export const getListOfExperiment = (id) => {
    return http.get(`/user/reservation/${id}/experiment/list`)
}