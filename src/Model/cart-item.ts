import Model from "@/contracts/Model";

export class CartItem extends Model{
    id?:           number;
    quantity?:     number;
    product?:      number;
    cart?:         number;
    published_at?: Date;
    created_at?:   Date;
    updated_at?:   Date;


    constructor(id?: number, quantity?: number, product?: number, cart?: number, published_at?: Date, created_at?: Date, updated_at?: Date) {
        super();
        this.id = id;
        this.quantity = quantity;
        this.product = product;
        this.cart = cart;
        this.published_at = published_at;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}


