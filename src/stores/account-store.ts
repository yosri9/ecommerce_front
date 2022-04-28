import {defineStore} from 'pinia'
import {User} from "../Model/user";
import {UserApi} from "../services/Api/user-api";
import ApiRouter from "@/services/Api/api-router";


export const useAccountStore = defineStore('accountStore', {
    // arrow function recommended for full type inference
    state:   () => {



        return {


            // all these properties will have their type inferred automatically
            first_name: "kaka",
            last_name: "",
            username: "",
            email: null,
            gender: "male",
            phone_number: "",
            country: "",
            region: "",
            confirmed: true,
            blocked: false,
            provider: true,
            birthday_date: new Date(),
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),




        }
    },





    actions: {
        async updateAccount() {

            const userApi = new UserApi()
            // @ts-ignore
            const user = new User(this.first_name, this.last_name, this.country, this.region, this.gender, this.date)
            // @ts-ignore



            console.log(user)

            await userApi.update(user, ApiRouter.UPDATE_CURRENT_USER())

            //
            // const user2 = await userApi.find(ApiRouter.CURRENT_USER())
            // console.log(user2)


        },

        async fetchAccountData(){
            const userApi = new UserApi()
            const user = await userApi.find(ApiRouter.CURRENT_USER())
            // @ts-ignore
            this.first_name = user.first_name
            // @ts-ignore
            this.last_name = user.last_name
            // @ts-ignore
            this.country = user.country
            // @ts-ignore
            this.region = user.region
            // @ts-ignore
            this.birthday_date = user.birthday_date
            // @ts-ignore
            this.phone_number = user.phone_number

            // @ts-ignore
            this.date = user.birthday_date
            console.log(this.date)

        }
    }
})