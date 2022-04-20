import Service from "@/contracts/Service";
import {Product} from "@/Model/product";
import ApiRouter from "@/services/Api/api-router";
import {Discount} from "@/Model/discount";

class DiscountApi implements Service{
    create(discount: Discount, path = ApiRouter.DISCOUNTS): any {
    }

    delete(id: number,path = ApiRouter.DISCOUNTS): any {
    }

    find(path = ApiRouter.DISCOUNTS): any {
    }

    findOne(id: number, path = ApiRouter.DISCOUNT(id)): any {
    }

    update(discount: Discount, path = ApiRouter.DISCOUNT(discount.id)): any {
    }


}