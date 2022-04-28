import {Order} from "@/Model/order";
import Model from "@/contracts/Model";

export class Payment extends Model{
    id?: number;
    payment_method?: paymentMethod;
    payment_date?: Date;
    order?: Order;
    published_at?: Date;
    created_at?: Date;
    updated_at?: Date;


    constructor(id: number, payment_method: paymentMethod, payment_date: Date, order: Order, published_at: Date, created_at: Date, updated_at: Date) {
        super();
        this.id = id;
        this.payment_method = payment_method;
        this.payment_date = payment_date;
        this.order = order;
        this.published_at = published_at;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}

type  paymentMethod = "card" | "cash"