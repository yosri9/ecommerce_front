import Service from "@/contracts/Service";
import {Role} from "@/Model/role";
import ApiRouter from "@/services/Api/api-router";

class RoleApi implements Service{
    create(role: Role, path= ApiRouter.ROLES): any {
    }

    delete(id: number, path= ApiRouter.ROLES): any {
    }

    find(path= ApiRouter.ROLES): void {
    }

    findOne(id: number, path = ApiRouter.ROLE(id)): void {
    }

    update(role: Role, path = ApiRouter.ROLE(role.id)): void {
    }


}