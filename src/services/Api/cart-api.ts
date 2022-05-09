import {Cart} from "@/Model/cart";
import Service from "@/contracts/Service";
import ApiRouter from "@/services/Api/api-router";
import {User} from "@/Model/user";
export class CartApi extends Service{
    create(cart?: Cart, url= ApiRouter.CARTS): any {
        return super.create(cart, url);
    }

    delete(id: number,url = ApiRouter.CARTS): any {
    }

    find(url = ApiRouter.CARTS): any {
    }

    findOne(id: number, url = ApiRouter.CART(id)): any {
    }

    update(cart: Cart, url = ApiRouter.CART(cart.id)): any {
    }

}