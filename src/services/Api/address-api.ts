import Service from "@/contracts/Service";
import ApiRouter from "@/services/Api/api-router";
import {Address} from "@/Model/address";

class AddressApi implements Service{

    create(address: Address, path = ApiRouter.ADDRESSES): any {
    }

    delete(id: number,path = ApiRouter.ADDRESSES): any {
    }

    find(path = ApiRouter.ADDRESSES): any {
    }

    findOne(id: number, path = ApiRouter.ADDRESS(id)): any {
    }

    update(address: Address, path = ApiRouter.ADDRESS(address.id)): any {
    }


}