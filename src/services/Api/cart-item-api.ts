import {CartItem} from "@/Model/cart-item";
import Service from "@/contracts/Service";
import ApiRouter from "@/services/Api/api-router";
class CartItemApi implements Service{
    create(cartItem: CartItem, path = ApiRouter.CART_ITEMS): any {
    }

    delete(id: number,path = ApiRouter.CART_ITEMS): any {
    }

    find(path = ApiRouter.CART_ITEMS): any {
    }

    findOne(id: number, path = ApiRouter.CART_ITEM(id)): any {
    }

    update(cartItem: CartItem, path = ApiRouter.CART_ITEM(cartItem.id)): any {
    }

}