import http from "./httpService";



export const getLabs = () => {

    // console.log(token)
    // const headers = {
    //     "Authorization": `Bearer ${token}`
    // }
// console.log(headers)
    return (
        http.get("/laboratory/list")
    );
}