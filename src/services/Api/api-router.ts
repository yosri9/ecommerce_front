class ApiRouter {

    MAIN_API = "http://localhost:1337/";
    SIGN_IN= this.MAIN_API + "auth/local/";
    REGISTER = this.MAIN_API + "auth/local/register"
                    // address

    ADDRESSES = this.MAIN_API + "addresses/";
    ADDRESS(id: number){
        return this.ADDRESSES +id.toString()
    }

    // cart

    CARTS = this.MAIN_API + "carts/";
    CART(id: number){
        return this.CARTS +id.toString()
    }

    // category

    CATEGORIES = this.MAIN_API + "categories/";
    CATEGORY(id: number){
        return this.CATEGORIES + id.toString()
    }


// discount

    DISCOUNTS = this.MAIN_API + "discounts/";
    DISCOUNT(id: number){
        return this.DISCOUNTS + id.toString()
    }


    // favourite

    FAVOURITES = this.MAIN_API + "favourites/";
    FAVOURITE(id: number){
        return this.FAVOURITES + id.toString()
    }



    // order

    ORDERS = this.MAIN_API + "favourites/";
    ORDER(id: number){
        return this.ORDERS + id.toString()
    }


    // PAYMENT

    PAYMENTS = this.MAIN_API + "favourites/";
    PAYMENT(id: number){
        return this.PAYMENTS + id.toString()
    }


    // PRODUCT

    PRODUCTS = this.MAIN_API + "favourites/";
    PRODUCT(id: number){
        return this.PRODUCTS + id.toString()
    }


    // CART_ITEM

    CART_ITEMS = this.MAIN_API + "favourites/";
    CART_ITEM(id: number){
        return this.CART_ITEMS + id.toString()
    }


    // FILE

    FILES = this.MAIN_API + "upload/files/"
    File(id: number){

       return  this.FILES + id

    }










}
