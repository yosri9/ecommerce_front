import {defineStore} from "pinia";
import {UserApi} from "@/services/Api/user-api";
import {User} from "@/Model/user";
import ApiRouter from "@/services/Api/api-router";
import {useImageStore} from "@/stores/image-store";
import {Product} from "@/Model/product";

export const useProductStore = defineStore('productStore', {
    // arrow function recommended for full type inference
    state: () => {


        return {


            // all these properties will have their type inferred automatically
            product_name: "kaka",
            imageUrl: null,


        }
    },


    actions: {

        addProductToCart(product:Product){



        }








    }
})