export interface Category extends Model{
    id:           number;
    name:         string;
    category?:     number;
    product:      null;
    published_at: Date;
    created_at:   Date;
    updated_at:   Date;
    categories?:  Category[];
}
