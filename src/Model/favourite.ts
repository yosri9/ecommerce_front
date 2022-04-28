import Model from "@/contracts/Model";

export class Favorite extends Model{
    id?:           number;
    user?:         number;
    published_at?: Date;
    created_at?:   Date;
    updated_at?:   Date;


    constructor(id: number, user: number, published_at: Date, created_at: Date, updated_at: Date) {
        super();
        this.id = id;
        this.user = user;
        this.published_at = published_at;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}