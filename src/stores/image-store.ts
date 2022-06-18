import {defineStore} from 'pinia'
import {User} from "../Model/user";
import {UserApi} from "../services/Api/user-api";
import ApiRouter from "@/services/Api/api-router";
import {ImageApi} from "@/services/Api/image-api";


export const useImageStore = defineStore('imageStore', {
    // arrow function recommended for full type inference
    state: () => {


        return {


            avatar_image_id: "",


        }
    },


    actions: {


        async updateImage(imageFile: File) {

            const imageApi = new ImageApi()

            const data = await imageApi.create(imageFile)

            const userApi = new UserApi()
            const user = await userApi.getCurrentUser()
            console.log(user)

            user.avatar_image_id = data[0].id
            console.log(user)

            await userApi.update(user, ApiRouter.UPDATE_CURRENT_USER())



        },
        
        async getImageUrl(id){
            const imageApi = new ImageApi()

            let imageUrl = await imageApi.findOne(parseInt(id))
            imageUrl= imageUrl.substring(1);

            imageUrl =   ApiRouter.MAIN_API + imageUrl

                return imageUrl
            
            
        }







    }
})