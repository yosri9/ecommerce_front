import Service from "@/contracts/Service";
import {Product} from "@/Model/product";
import ApiRouter from "@/services/Api/api-router";
import {Favorite} from "@/Model/favourite";
import {User} from "@/Model/user";

class FavouriteApi extends Service{
    create(model: User, url: string): any {
    }

    delete(id: number,url = ApiRouter.FAVOURITES): any {
    }

    find(url = ApiRouter.FAVOURITES): any {
    }

    findOne(id: number, url = ApiRouter.FAVOURITE(id)): any {
    }

    update(favourite: Favorite, url = ApiRouter.FAVOURITE(favourite.id)): any {
    }


}