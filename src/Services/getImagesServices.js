import http from "./httpService";

export const getImageServices = (link) => {
    return http.get(link,{
        responseType: "arraybuffer"
    })
}