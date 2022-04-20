import {Cart} from "@/Model/cart";
import {Payment} from "@/Model/payment";

export interface Order extends Model{
    id:           number;
    payment:      Payment;
    cart:         Cart;
    published_at: Date;
    created_at:   Date;
    updated_at:   Date;
}

