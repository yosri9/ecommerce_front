import Service from "@/contracts/Service";
import {Product} from "@/Model/product";
import ApiRouter from "@/services/Api/api-router";
import {Favorite} from "@/Model/favourite";

class FavouriteApi implements Service{
    create(favourite: Favorite, path = ApiRouter.FAVOURITES): any {
    }

    delete(id: number,path = ApiRouter.FAVOURITES): any {
    }

    find(path = ApiRouter.FAVOURITES): any {
    }

    findOne(id: number, path = ApiRouter.FAVOURITE(id)): any {
    }

    update(favourite: Favorite, path = ApiRouter.FAVOURITE(favourite.id)): any {
    }


}