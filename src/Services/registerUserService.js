import http from "./httpService";

export const registerUser = (data) => {

    return (
        http.post("/user/register", data));
}

/**
 
        "message": {
        "code": "S212",
        "text": "Logging was successful. This device was saved to the user account."
    },
    "data": {
        "user": {
            "id": 15,
            "full_name": "MF",
            "email": "mohammaderror419@gmail.com"
        },
        "access token": {
            "token": "108|iWs71WFzuzlUROM4DhnSvPszD6AxnFbwlcOOrhe3",
            "device name": "m laptop"
        }
    }

 */

