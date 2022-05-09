import axios from "axios";
import ApiRouter from "@/services/Api/api-router";


export class AuthApi {
    async SignUp(username: string, email: string, password: string, confirmPassword: string) {

       return  await axios.post(ApiRouter.SIGN_UP, {
            username: username,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        })
    }

    async SignIN(identifier: string, password: string) {
        return await axios.post(ApiRouter.SIGN_IN, {
            identifier: identifier,
            password: password,
        })

    }
}