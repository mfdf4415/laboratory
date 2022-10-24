import http from "./httpService";



export const deleteReservation = (id) => {
    return (
        http.post(`/user/reservation/${id}/delete`)
    );
}