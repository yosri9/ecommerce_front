import Service from "@/contracts/Service";
import {Product} from "@/Model/product";
import ApiRouter from "@/services/Api/api-router";
import {Payment} from "@/Model/payment";

class PaymentApi implements Service{
    create(payment: Payment, path = ApiRouter.PAYMENTS): any {
    }

    delete(id: number,path = ApiRouter.PAYMENTS): any {
    }

    find(path = ApiRouter.PAYMENTS): any {
    }

    findOne(id: number, path = ApiRouter.PAYMENT(id)): any {
    }

    update(payment: Payment, path = ApiRouter.PAYMENT(payment.id)): any {
    }


}