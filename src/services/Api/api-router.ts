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


// category

    DISCOUNTS = this.MAIN_API + "discounts/";
    DISCOUNT(id: number){
        return this.DISCOUNTS + id.toString()
    }







}

