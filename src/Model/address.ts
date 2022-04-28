import { faker } from '@faker-js/faker';
import {uuid} from "uuidv4";
import Model from "@/contracts/Model";

export class Address extends Model {
    id?:            number;
    street_name?:   string;
    street_number?: number;
    city?:          string;
    country?:       string;
    post_code?:     number;
    published_at?:  Date;
    created_at?:    Date;
    updated_at?:    Date;


    constructor(id: number, street_name: string, street_number: number, city: string, country: string, post_code: number, published_at: Date, created_at: Date, updated_at: Date) {
        super();
        this.id = id;
        this.street_name = street_name;
        this.street_number = street_number;
        this.city = city;
        this.country = country;
        this.post_code = post_code;
        this.published_at = published_at;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}



export function generateFakeData(): Address {
    return {

        fromJson(json: any): any {
        }, toJson(): any {
        },

        id: parseInt(uuid()),

        city: faker.lorem.word(),
        country:  faker.lorem.word(),
        created_at:new Date,
        post_code: Math.random(),
        published_at:new Date,
        street_name:  faker.lorem.word(),
        street_number: 0,
        updated_at:new Date
    };
}
