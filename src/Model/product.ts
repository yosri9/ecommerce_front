import {Favorite} from "@/Model/favourite";
import {CartItem} from "@/Model/cart-item";
import {Discount} from "@/Model/discount";
import {Category} from "@/Model/category";

export interface Product extends Model{
    id:           number;
    name:         string;
    quantity:     number;
    discount:     Discount;
    published_at: Date;
    created_at:   Date;
    updated_at:   Date;
    cart_items:   CartItem[];
    categories:   Category[];
    favorites:    Favorite[];
}
