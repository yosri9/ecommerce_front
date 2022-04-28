import Model from "@/contracts/Model";

export class Category extends Model{
    id?:           number;
    name?:         string;
    category?:     number;
    product?:      null;
    published_at?: Date;
    created_at?:   Date;
    updated_at?:   Date;
    categories?:  Category[];


    constructor(id?: number, name?: string, category?: number, product?: null, published_at?: Date, created_at?: Date, updated_at?: Date, categories?: Category[]) {
        super();
        this.id = id;
        this.name = name;
        this.category = category;
        this.product = product;
        this.published_at = published_at;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.categories = categories;
    }
}
