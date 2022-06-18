import {defineStore} from 'pinia'
import {User} from "../Model/user";
import {UserApi} from "../services/Api/user-api";
import ApiRouter from "@/services/Api/api-router";
import {ImageApi} from "@/services/Api/image-api";
import {CategoryApi} from "@/services/Api/category-api";
import {Product} from "@/Model/product";
import {ProductApi} from "@/services/Api/product-api";
import {Category} from "@/Model/category";




export const useCategoryStore = defineStore('categoryStore', {
    // arrow function recommended for full type inference
    state: () => {


        return {
            products:null,
            categoryName:null,
            subCategory:null
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
             console.log(this.categoryName)
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

             console.log(this.products)

             return productList


         },


         },








})