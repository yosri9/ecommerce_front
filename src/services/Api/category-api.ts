import Service from "@/contracts/Service";
import ApiRouter from "@/services/Api/api-router";
import {Cart} from "@/Model/cart";
class CartApi implements Service{


    create(cart: Cart, path = ApiRouter.CARTS): any {
    }

    delete(id: number,path = ApiRouter.CARTS): any {
    }

    find(path = ApiRouter.CARTS): any {
    }

    findOne(id: number, path = ApiRouter.CART(id)): any {
    }

    update(cart: Cart, path = ApiRouter.CART(cart.id)): any {
    }




}