import Service from "../../contracts/Service";
import ApiRouter from "../../services/Api/api-router";
import {User} from "../../Model/user";
import axios from "axios";
import Model from "../../contracts/Model";

  export class UserApi extends Service{
    create(user: User, url: string): any {
      return super.create(user, url);

    }

    delete(id: number, url= ApiRouter.USERS): any {
      return super.delete(id, url);

    }

     async find(url= ApiRouter.USERS): Promise<User> {
      const user = await super.find(url) as User


      return user

    }

    findOne(id: number, url = ApiRouter.USER(id)): void {
      return super.findOne(id, url);

    }





    update(user: Model, url = ApiRouter.USER(user.id)): any {


      return super.update(user, url);

    }


    async getCurrentUser() {



      const user = await this.find(ApiRouter.CURRENT_USER())

      return user

    }








  }