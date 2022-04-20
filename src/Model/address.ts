import { faker } from '@faker-js/faker';
import {uuid} from "uuidv4";

export interface Address extends Model {
    id:            number;
    street_name:   string;
    street_number: number;
    city:          string;
    country:       string;
    post_code:     number;
    published_at:  null;
    created_at:    Date;
    updated_at:    Date;
}



export function generateFakeData(): Address {
    return {
        id: uuid(),
        quantity: Math.random(),
        name: faker.lorem.word(),
        description: faker.lorem.words(),
        createdAt: new Date(),
    };
}
