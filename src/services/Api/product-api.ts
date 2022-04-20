import Service from "@/contracts/Service";
import {Product} from "@/Model/product";
import ApiRouter from "@/services/Api/api-router";

class ProductApi implements Service{
    create(product: Product, path = ApiRouter.PRODUCTS): any {
    }

    delete(id: number,path = ApiRouter.PRODUCTS): any {
    }

    find(path = ApiRouter.PRODUCTS): any {
    }

    findOne(id: number, path = ApiRouter.PRODUCT(id)): any {
    }

    update(product: Product, path = ApiRouter.PRODUCT(product.id)): any {
    }

}