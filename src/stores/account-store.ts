import {defineStore} from 'pinia'
import {User} from "../Model/user";
import {UserApi} from "../services/Api/user-api";
import ApiRouter from "@/services/Api/api-router";
import {ImageApi} from "@/services/Api/image-api";

import {useImageStore} from "@/stores/image-store"



export const useAccountStore = defineStore('accountStore', {
    // arrow function recommended for full type inference
    state: () => {


        return {


            // all these properties will have their type inferred automatically
            first_name: "kaka",
            last_name: "",
            username: "",
            email: "flutter@gmail.com",
            gender: "male",
            loading: false,
            phone_number: "",
            country: "",
            region: "",
            confirmed: true,
            blocked: false,
            provider: true,
            birthday_date: new Date(),
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            imageUrl: null,


        }
    },


    actions: {
        async updateAccount() {
            this.loading = true
            const userApi = new UserApi()
            // @ts-ignore
            const user = new User(this.first_name, this.last_name, this.country, this.region, this.gender, this.birthday_date, this.avatar_image_id)
            // @ts-ignore





            await userApi.update(user, ApiRouter.UPDATE_CURRENT_USER())

            //
            // const user2 = await userApi.find(ApiRouter.CURRENT_USER())
            // console.log(user2)

            this.loading = false

        },








            async fetchAccountData() {
            const imageStore = useImageStore()


            const userApi = new UserApi()
            const user = await userApi.getCurrentUser()
                const  imageUrl = null
                if (user.avatar_image_id != null){
                    const imageUrl = await  imageStore.getImageUrl(user.avatar_image_id)
                    this.imageUrl = imageUrl

                }








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
            this.date = user.birthday_date,
                // @ts-ignore
                this.avatar_image_id = user.avatar_image_id

        }
    }
})