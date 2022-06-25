import {defineStore} from 'pinia'
import {User} from "../Model/user";
import {UserApi} from "../services/Api/user-api";
import ApiRouter from "@/services/Api/api-router";
import {ImageApi} from "@/services/Api/image-api";
import {CategoryApi} from "@/services/Api/category-api";
import {Product} from "@/Model/product";
import {ProductApi} from "@/services/Api/product-api";
import {Category} from "@/Model/category";
import {CartItem} from "@/Model/cart-item";
import {useCartStore} from "@/stores/cart-store";
import {useProductStore} from "@/stores/product-store";
import {CartItemApi} from "@/services/Api/cart-item-api";




export const useCartItemStore = defineStore('CartItemStore', {
    // arrow function recommended for full type inference
    state: () => {


        return {
            quantity:0,
            count:1,
            id:0

        }
    },



    actions: {

        async addItemToCart(){
            const cartStore = useCartStore()
            const  productStore = useProductStore()

            const cartItem = new CartItem()
            // @ts-ignore
            cartItem.product = productStore.storedProduct.id
            // @ts-ignore

            cartItem.cart = cartStore.cart.id
            console.log(cartStore.cart)
            cartItem.quantity = this.quantity

            const cartItemApi = new CartItemApi()
            console.log("added")

            await cartItemApi.create(cartItem)

        },

        async removeItemFromCart(id) {


            // @ts-ignore
            // @ts-ignore


            const cartItemApi = new CartItemApi()

                await cartItemApi.delete(id)
            }


        }











})