import {Role} from "../Model/role";
import {Address} from "../Model/address";
import {Favorite} from "../Model/favourite";
import {Cart} from "../Model/cart";
import Model from "../contracts/Model";

export class User extends Model {
    first_name?: string;
    last_name?: string;

    country?: string;
    region?: string;
    gender?: string;
    birthday_date?: Date
    phone_number?: number;
    cart?: Cart;
    favorite?: Favorite;
    avatar_image_id?: string;

    provider?: string;
    confirmed?: boolean;
    blocked?: boolean;
    role?: Role;


    created_at?: Date;
    updated_at?: Date;
    addresses?: Address[];

    username?: string;
    email?: string;
    declare id?: number;


    constructor(first_name?: string, last_name?: string, country?: string, region?: string, gender?: string, birthday_date?: Date, avatar_image_id?: string, phone_number?: number,  cart?: Cart, favorite?: Favorite, provider?: string, confirmed?: boolean, blocked?: boolean, role?: Role, created_at?: Date, updated_at?: Date, addresses?: Address[], username?: string, email?: string, id?: number) {
        super();
        this.first_name = first_name;
        this.last_name = last_name;
        this.username = username;
        this.email = email;
        this.country = country;
        this.region = region;
        this.gender = gender;
        this.birthday_date = birthday_date
        this.phone_number = phone_number;
        this.cart = cart;
        this.favorite = favorite;
        this.provider = provider;
        this.confirmed = confirmed;
        this.blocked = blocked;
        this.role = role;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.addresses = addresses;
        this.id = id;
    }
}

