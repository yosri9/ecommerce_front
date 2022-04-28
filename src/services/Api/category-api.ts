import Service from "@/contracts/Service";
import ApiRouter from "@/services/Api/api-router";
import {Cart} from "@/Model/cart";
import {User} from "@/Model/user";
class CartApi extends Service{


    create(model: User, url: string): any {
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