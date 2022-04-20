import {Order} from "@/Model/order";

export interface Payment extends Model{
    id: number;
    payment_method: paymentMethod;
    payment_date: Date;
    order: Order;
    published_at: Date;
    created_at: Date;
    updated_at: Date;
}

type  paymentMethod = "card" | "cash"