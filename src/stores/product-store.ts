import {defineStore} from "pinia";
import {UserApi} from "@/services/Api/user-api";
import {User} from "@/Model/user";
import ApiRouter from "@/services/Api/api-router";
import {useImageStore} from "@/stores/image-store";
import {Product} from "@/Model/product";
import {ProductApi} from "@/services/Api/product-api";

export const useProductStore = defineStore('productStore', {
    // arrow function recommended for full type inference
    state: () => {

        return {


            // all these properties will have their type inferred automatically
            storedProduct: null,
            id:0



        }
    },


    actions: {

        addProductToCart(product:Product){



        },

        async fetchProduct(id) {
            const productApi = new ProductApi()
            const product = await productApi.findOne(id) as Product
            return product

        }










    }
})