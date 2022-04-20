
export interface Favorite extends Model{
    id:           number;
    user:         number;
    published_at: Date;
    created_at:   Date;
    updated_at:   Date;
}