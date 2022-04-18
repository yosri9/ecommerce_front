import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartView from "@/views/CartView";
import AccountView from "@/views/AccountView";
import FavoriteView from "@/views/FavoriteView";
import LatestPurchasesView from "@/views/LatestPurchasesView";
import PaymentInformationView from "@/views/PaymentInformationView";
import ProductView from "@/views/ProductView";
import RegisterView from "@/views/authentication/RegisterView";
import auth from "@/middlewares/AuthMiddleware";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,


    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),

    },

    {
        path: '/cart',
        name: 'cart',
        component: CartView,


    },

    {
        path: '/favorite',
        name: 'favorite',
        component: FavoriteView,
        meta: {
            middleware: auth,
        },


    },

    {
        path: '/Account',
        name: 'account',
        component: AccountView,
        meta: {
            middleware: auth,
        },

    },

    {
        path: '/Latest-purchases',
        name: 'latestPurchases',
        component: LatestPurchasesView

    },

    {
        path: '/payment-information',
        name: 'paymentInformation',
        component: PaymentInformationView,
        meta: {
            middleware: auth,
        },

    },
    {
        path: '/product',
        name: 'product',
        component: ProductView

    },

    {
        path: '/register',
        name: 'register',
        component: RegisterView

    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
