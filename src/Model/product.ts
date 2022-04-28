import {Favorite} from "@/Model/favourite";
import {CartItem} from "@/Model/cart-item";
import {Discount} from "@/Model/discount";
import {Category} from "@/Model/category";
import Model from "@/contracts/Model";

export class Product extends Model{
    id?:           number;
    name?:         string;
    quantity?:     number;
    discount?:     Discount;
    published_at?: Date;
    created_at?:   Date;
    updated_at?:   Date;
    cart_items?:   CartItem[];
    categories?:   Category[];
    favorites?:    Favorite[];


    constructor(id: number, name: string, quantity: number, discount: Discount, published_at: Date, created_at: Date, updated_at: Date, cart_items: CartItem[], categories: Category[], favorites: Favorite[]) {
        super();
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.discount = discount;
        this.published_at = published_at;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.cart_items = cart_items;
        this.categories = categories;
        this.favorites = favorites;
    }
}
