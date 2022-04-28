import Service from "@/contracts/Service";
import {Order} from "@/Model/order";
import ApiRouter from "@/services/Api/api-router";
import {User} from "@/Model/user";

class OrderApi extends Service{
    create(model: User, url: string): any {
    }

    delete(id: number,url = ApiRouter.ORDERS): any {
    }

    find(url = ApiRouter.ORDERS): any {
    }

    findOne(id: number, url = ApiRouter.ORDER(id)): any {
    }

    update(order: Order, url = ApiRouter.ORDER(order.id)): any {
    }


}