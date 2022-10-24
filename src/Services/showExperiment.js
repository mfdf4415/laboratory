import http from "./httpService";

export const getShowExperiment = (id, item) => {
    return (
        http.get(`/user/reservation/${id}/experiment/${item}`)
    );
}
