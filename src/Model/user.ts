import {Role} from "@/Model/role";
import {Address} from "@/Model/address";
import {Favorite} from "@/Model/favourite";
import {Cart} from "@/Model/cart";

export interface User extends Model{
    id:         number;
    username:   string;
    email:      string;
    provider:   string;
    confirmed:  boolean;
    blocked:    null;
    role:       Role;
    first_name: string;
    last_name:  string;
    cart:       Cart;
    favorite:   Favorite;
    created_at: Date;
    updated_at: Date;
    addresses:  Address[];
}