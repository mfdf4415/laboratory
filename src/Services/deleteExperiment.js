import http from "./httpService";



export const deleteExperiment = (labId,exprId) => {
    return (
        http.post(`/user/reservation/${labId}/experiment/${exprId}/delete`)
    );
}