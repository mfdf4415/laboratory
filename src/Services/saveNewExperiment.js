import http from "./httpService";

export const saveNewExperiment = (id, data) => {
    return (
        http.post(`/user/reservation/${id}/experiment/save`, data, {
            headers: { "Content-Type": "multipart/form-data" }
        })
    );
}
