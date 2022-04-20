import axios from "axios";
import ApiRouter from "@/services/Api/api-router";


class AuthApi {
    SignUp(username: string, email: string, password: string, confirmPassword: string) {

        axios.post(ApiRouter.SIGN_UP, {
            username: username,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        })
    }

    SignIN(identifier: string, password: string) {
        axios.post(ApiRouter.SIGN_IN, {
            identifier: identifier,
            password: password,
        })

    }
}