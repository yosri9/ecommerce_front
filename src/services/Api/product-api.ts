import Service from "@/contracts/Service";
import {Product} from "@/Model/product";
import ApiRouter from "@/services/Api/api-router";
import {User} from "@/Model/user";

export class ProductApi extends Service{
    create(model: User, url: string): any {
    }

    delete(id: number,url = ApiRouter.PRODUCTS): any {
    }

    find(url = ApiRouter.PRODUCTS): any {
    }

    async findOne(id: number, url = ApiRouter.PRODUCT(id)): Promise<any> {
        return await super.findOne(id, url);

    }

    update(product: Product, url = ApiRouter.PRODUCT(product.id)): any {
    }

}