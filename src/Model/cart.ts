import {User} from "@/Model/user";
import {Order} from "@/Model/order";
import {CartItem} from "@/Model/cart-item";
import Model from "@/contracts/Model";

export class Cart extends Model{
    id?:           number;
    amount?:       number;
    users_permissions_user?:         number | undefined;
    published_at?: Date;
    created_at?:   Date;
    updated_at?:   Date;
    orders?:       Order[];
    cart_items?:   CartItem[];


    constructor(id?: number, amount?: number, users_permissions_user?: number | undefined, published_at?: Date, created_at?: Date, updated_at?: Date, orders?: Order[], cart_items?: CartItem[]) {
        super();
        this.id = id;
        this.amount = amount;
        this.users_permissions_user = users_permissions_user;
        this.published_at = published_at;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.orders = orders;
        this.cart_items = cart_items;
    }
}
