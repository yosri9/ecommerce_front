import Service from "@/contracts/Service";
import {Product} from "@/Model/product";
import ApiRouter from "@/services/Api/api-router";
import {Discount} from "@/Model/discount";
import {User} from "@/Model/user";

class DiscountApi extends Service{
    create(model: User, url: string): any {
    }

    delete(id: number,url = ApiRouter.DISCOUNTS): any {
    }

    find(url = ApiRouter.DISCOUNTS): any {
    }

    findOne(id: number, url = ApiRouter.DISCOUNT(id)): any {
    }

    update(discount: Discount, url = ApiRouter.DISCOUNT(discount.id)): any {
    }


}