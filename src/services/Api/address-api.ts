import Service from "@/contracts/Service";
import ApiRouter from "@/services/Api/api-router";
import {Address} from "@/Model/address";
import {User} from "@/Model/user";

class AddressApi extends Service{

    create(model: User, url: string): any {
    }

    delete(id: number,url = ApiRouter.ADDRESSES): any {
    }

    find(url = ApiRouter.ADDRESSES): any {
    }

    findOne(id: number, url = ApiRouter.ADDRESS(id)): any {
    }

    update(address: Address, url = ApiRouter.ADDRESS(address.id)): any {
    }


}