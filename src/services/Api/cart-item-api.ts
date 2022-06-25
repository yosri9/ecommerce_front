import {CartItem} from "@/Model/cart-item";
import Service from "@/contracts/Service";
import ApiRouter from "@/services/Api/api-router";
import {User} from "@/Model/user";
export class CartItemApi extends Service{
    async create(cartItem: CartItem, url = ApiRouter.CART_ITEMS): Promise<any> {
        await super.create(cartItem, url)
    }

    async delete(id: number,url = ApiRouter.CART_ITEM(id)): Promise<any> {
        await super.delete(id,url)
    }

    find(url = ApiRouter.CART_ITEMS): any {
        super.find(url)
    }

    async findOne(id: number, url = ApiRouter.CART_ITEM(id)): Promise<any> {
       await super.findOne(id, url)
    }

    async update(cartItem: CartItem, url = ApiRouter.CART_ITEM(cartItem.id)): Promise<any> {
        await super.update(cartItem,url)
    }

}