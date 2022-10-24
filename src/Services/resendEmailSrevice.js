import http from "./httpService";

export const resendEmailService = (data) => {
    data = {
        email: "harro@gmail.com"
    }
    return (
        http.post("/user/verification/email/send", data)
    );
}
