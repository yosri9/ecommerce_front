import {Product} from "@/Model/product";
import Model from "@/contracts/Model";

export class Discount extends Model{
    id?:                           number;
    is_in_discount?:               boolean;
    discount_percentage?:          number;
    birthday_discount_percentage?: number;
    published_at?:                 Date;
    created_at?:                   Date;
    updated_at?:                   Date;
    products?:                     Product[];


    constructor(id?: number, is_in_discount?: boolean, discount_percentage?: number, birthday_discount_percentage?: number, published_at?: Date, created_at?: Date, updated_at?: Date, products?: Product[]) {
        super();
        this.id = id;
        this.is_in_discount = is_in_discount;
        this.discount_percentage = discount_percentage;
        this.birthday_discount_percentage = birthday_discount_percentage;
        this.published_at = published_at;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.products = products;
    }
}
