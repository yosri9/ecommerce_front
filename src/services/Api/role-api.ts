import Service from "@/contracts/Service";
import {Role} from "@/Model/role";
import ApiRouter from "@/services/Api/api-router";
import {User} from "@/Model/user";

class RoleApi extends Service{
    create(model: User, url: string): any {
    }

    delete(id: number, url= ApiRouter.ROLES): any {
    }

    find(url= ApiRouter.ROLES): any {
    }

    findOne(id: number, url = ApiRouter.ROLE(id)): void {
    }

    update(role: Role, url = ApiRouter.ROLE(role.id)): any {
    }


}