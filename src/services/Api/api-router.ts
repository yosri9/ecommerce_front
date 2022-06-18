export default class ApiRouter {
    static MAIN_API = "http://localhost:1337/";



    // USERS

    static USERS = this.MAIN_API + "users/";

    static USER(id?: number ) {
        return this.USERS + id?.toString()
    }
    static CURRENT_USER() {
        return this.USERS + "me"
    }
    static UPDATE_CURRENT_USER() {
        return this.MAIN_API+"users-permissions/" + "users/me"
    }



    // auth

    static SIGN_IN = this.MAIN_API + "auth/local/";
    static SIGN_UP = this.MAIN_API + "auth/local/register"
    // address

    static ADDRESSES = this.MAIN_API + "addresses/";

    static ADDRESS(id?: number) {
        return this.ADDRESSES + id?.toString()
    }
    // roles

    static ROLES = this.MAIN_API + "users-permissions/roles/";

    static ROLE(id?: number) {
        return this.ADDRESSES + id?.toString()
    }

    // cart

    static CARTS = this.MAIN_API + "carts/";

    static CART(id?: number) {
        return this.CARTS + id?.toString()
    }

    // category

    static CATEGORIES = this.MAIN_API + "categories/";

    static CATEGORY(id?: number) {
        return this.CATEGORIES + id?.toString()
    }
    static CATEGORY_BY_NAME() {
        return this.CATEGORIES + 'name'
    }


// discount

    static DISCOUNTS = this.MAIN_API + "discounts/";

    static DISCOUNT(id?: number) {
        return this.DISCOUNTS + id?.toString()
    }


    // favourite

    static FAVOURITES = this.MAIN_API + "favourites/";

    static FAVOURITE(id?: number) {
        return this.FAVOURITES + id?.toString()
    }


    // order

    static ORDERS = this.MAIN_API + "orders/";

    static ORDER(id?: number) {
        return this.ORDERS + id?.toString()
    }


    // PAYMENT

    static PAYMENTS = this.MAIN_API + "payments/";

    static PAYMENT(id?: number) {
        return this.PAYMENTS + id?.toString()
    }


    // PRODUCT

    static PRODUCTS = this.MAIN_API + "products/";

    static PRODUCT(id?: number) {
        return this.PRODUCTS + id?.toString()
    }


    // CART_ITEM

    static CART_ITEMS = this.MAIN_API + "cartItems/";

    static CART_ITEM(id?: number) {
        return this.CART_ITEMS + id?.toString()
    }


    // IMAGE

    static IMAGES = this.MAIN_API + "upload/files/"
    static IMAGE_UPLOAD = this.MAIN_API + "upload/"

    static IMAGE(id?: number) {

        return this.IMAGES + id?.toString()

    }

    static


}

