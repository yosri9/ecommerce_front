import Service from "@/contracts/Service";
import ApiRouter from "@/services/Api/api-router";
import {Cart} from "@/Model/cart";
import {User} from "@/Model/user";
import Model from "@/contracts/Model";
import axios from "axios";
import {Category} from "@/Model/category";
export class CategoryApi extends Service{


    create(model: User, url: string): any {
    }

    delete(id: number,url = ApiRouter.CATEGORIES): any {
    }

    find(url = ApiRouter.CATEGORIES): any {
    }

    findOne(id: number, url = ApiRouter.CATEGORY(id)): any {
    }

    update(cart: Cart, url = ApiRouter.CATEGORY(cart.id)): any {
    }


    async findByName(name?: string,subCategory?: string, url = ApiRouter.CATEGORY_BY_NAME()): Promise<any> {


            const category = new Category();
            category.name = name
            category.sub_category = subCategory
            const token = localStorage.getItem("token");

            const config = {
                headers: {Authorization: `Bearer ${token}`, },
            }
            if (url != null) {
                console.log(url)
                const response = await axios.post<Model>(url.toString(), category, config,)

                return response.data as unknown as [Category]

            }

        }






}