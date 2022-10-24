import http from "./httpService";

export const saveNewReservation = (data, id) => {
    return (
        http.post(`/laboratory/${id}/reservation/save`, data)
    );
}
