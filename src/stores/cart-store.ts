import {defineStore} from 'pinia'
import {User} from "../Model/user";
import {UserApi} from "../services/Api/user-api";
import ApiRouter from "@/services/Api/api-router";
import {ImageApi} from "@/services/Api/image-api";
import {CategoryApi} from "@/services/Api/category-api";
import {Product} from "@/Model/product";
import {ProductApi} from "@/services/Api/product-api";
import {Category} from "@/Model/category";
import {Cart} from "@/Model/cart";
import {CartApi} from "@/services/Api/cart-api";




export const useCartStore = defineStore('cartStore', {
    // arrow function recommended for full type inference
    state: () => {


        return {
            cart:null,
            dialogStore:false,
            snackbarStore:false,
            products:null
        }
    },


    actions: {

        async fetchProductByCategoryName() {
            function delay(time) {
                return new Promise(resolve => setTimeout(resolve, time));
            }
            await delay(100)
            const productIdList: string[] = []
            const productList: Product[] = []

            const categoryApi = new CategoryApi()
            const productApi = new ProductApi()
            // @ts-ignore
            const categories = await  categoryApi.findByName(this.categoryName,this.subCategory)


            for (const i in categories) {
                const products = categories[i].products
                for (const j in products) {

                    productIdList.push(products[j].id)

                }

            }

            for (const i in productIdList) {

                const product = await productApi.findOne(parseInt(productIdList[i])) as Product


                productList.push(product)

            }
            // @ts-ignore
            this.products=productList


            return productList


        },

        async fetchCart(){
            const productList: Product[] = []
            const productApi = new ProductApi()

            const userApi = new UserApi()
           const cartApi = new CartApi()
           const user = await userApi.getCurrentUser() as unknown as User
            console.log(user.cart)
           // @ts-ignore
            const cartResponse =   await cartApi.findOne(user.cart)
            this.cart = cartResponse
            console.log(this.cart)
            const cart_items = cartResponse.cart_items
            for (const i in cart_items ) {
                // @ts-ignore

                console.log(cart_items[i].product)
                // @ts-ignore

                const product = await productApi.findOne(parseInt(cart_items[i].product)) as Product

                productList.push(product)
                console.log(productList)
                // @ts-ignore
                this.products = productList

            }

        },
        async fetchProductFromCartItem(){

        }


    },








})