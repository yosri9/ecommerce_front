import Service from "@/contracts/Service";
import {Product} from "@/Model/product";
import ApiRouter from "@/services/Api/api-router";
import {Payment} from "@/Model/payment";
import {User} from "@/Model/user";

class PaymentApi extends Service{
    create(model: User, url: string): any {
    }

    delete(id: number,url = ApiRouter.PAYMENTS): any {
    }

    find(url = ApiRouter.PAYMENTS): any {
    }

    findOne(id: number, url = ApiRouter.PAYMENT(id)): any {
    }

    update(payment: Payment, url = ApiRouter.PAYMENT(payment.id)): any {
    }


}