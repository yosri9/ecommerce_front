import {CartItem} from "@/Model/cart-item";
import Service from "@/contracts/Service";
import ApiRouter from "@/services/Api/api-router";
import {User} from "@/Model/user";
class CartItemApi extends Service{
    create(model: User, url: string): any {
    }

    delete(id: number,url = ApiRouter.CART_ITEMS): any {
    }

    find(url = ApiRouter.CART_ITEMS): any {
    }

    findOne(id: number, url = ApiRouter.CART_ITEM(id)): any {
    }

    update(cartItem: CartItem, url = ApiRouter.CART_ITEM(cartItem.id)): any {
    }

}