import {User} from "@/Model/user";

export interface Auth {
    jwt:  string;
    user: User;
}