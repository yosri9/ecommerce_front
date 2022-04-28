import Model from "@/contracts/Model";

export class Role extends Model{
    id?:          number;
    name?:        string;
    description?: string;
    type?:        string;


    constructor(id: number, name: string, description: string, type: string) {
        super();
        this.id = id;
        this.name = name;
        this.description = description;
        this.type = type;
    }
}
