import Service from "@/contracts/Service";
import {Order} from "@/Model/order";
import ApiRouter from "@/services/Api/api-router";

class OrderApi implements Service{
    create(order: Order, path = ApiRouter.ORDERS): any {
    }

    delete(id: number,path = ApiRouter.ORDERS): any {
    }

    find(path = ApiRouter.ORDERS): any {
    }

    findOne(id: number, path = ApiRouter.ORDER(id)): any {
    }

    update(order: Order, path = ApiRouter.ORDER(order.id)): any {
    }


}