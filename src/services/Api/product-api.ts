import Service from "@/contracts/Service";
import {Product} from "@/Model/product";
import ApiRouter from "@/services/Api/api-router";
import {User} from "@/Model/user";

class ProductApi extends Service{
    create(model: User, url: string): any {
    }

    delete(id: number,url = ApiRouter.PRODUCTS): any {
    }

    find(url = ApiRouter.PRODUCTS): any {
    }

    findOne(id: number, url = ApiRouter.PRODUCT(id)): any {
    }

    update(product: Product, url = ApiRouter.PRODUCT(product.id)): any {
    }

}