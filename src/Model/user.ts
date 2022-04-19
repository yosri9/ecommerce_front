import {Role} from "@/Model/role";
import {Address} from "@/Model/address";

export interface User {
    id:         number;
    username:   string;
    email:      string;
    provider:   string;
    confirmed:  boolean;
    blocked:    null;
    role:       Role;
    first_name: null;
    last_name:  null;
    cart:       number;
    favorite:   number;
    created_at: Date;
    updated_at: Date;
    addresses:  Address[];
}