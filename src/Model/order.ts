import {Cart} from "@/Model/cart";
import {Payment} from "@/Model/payment";
import Model from "@/contracts/Model";

export class Order extends Model{
    id?:           number;
    payment?:      Payment;
    cart?:         Cart;
    published_at?: Date;
    created_at?:   Date;
    updated_at?:   Date;

    constructor(id: number, payment: Payment, cart: Cart, published_at: Date, created_at: Date, updated_at: Date) {
        super();
        this.id = id;
        this.payment = payment;
        this.cart = cart;
        this.published_at = published_at;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}

