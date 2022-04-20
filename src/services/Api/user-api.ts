import Service from "@/contracts/Service";
import {Role} from "@/Model/role";
import ApiRouter from "@/services/Api/api-router";
import {User} from "@/Model/user";

class UserApi implements Service{
    create(user: User, path= ApiRouter.USERS): any {
    }

    delete(id: number, path= ApiRouter.USERS): any {
    }

    find(path= ApiRouter.USERS): void {
    }

    findOne(id: number, path = ApiRouter.USER(id)): void {
    }

    update(user: User, path = ApiRouter.USER(user.id)): void {
    }

}