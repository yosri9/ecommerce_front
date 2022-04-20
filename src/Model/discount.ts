import {Product} from "@/Model/product";

export interface Discount extends Model{
    id:                           number;
    is_in_discount:               boolean;
    discount_percentage:          number;
    birthday_discount_percentage: number;
    published_at:                 Date;
    created_at:                   Date;
    updated_at:                   Date;
    products:                     Product[];
}
