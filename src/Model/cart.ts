import {User} from "@/Model/user";
import {Order} from "@/Model/order";
import {CartItem} from "@/Model/cart-item";

export interface Cart extends Model{
    id:           number;
    amount:       number;
    user:         User;
    published_at: Date;
    created_at:   Date;
    updated_at:   Date;
    orders:       Order[];
    cart_items:   CartItem[];
}
