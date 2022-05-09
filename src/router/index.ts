import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
// @ts-ignore
import CartView from "@/views/CartView";
// @ts-ignore
import AccountView from "@/views/AccountView";
// @ts-ignore
import FavoriteView from "@/views/FavoriteView";
// @ts-ignore
import LatestPurchasesView from "@/views/LatestPurchasesView";
// @ts-ignore
import PaymentInformationView from "@/views/PaymentInformationView";
// @ts-ignore
import ProductView from "@/views/ProductView";
// @ts-ignore
import RegisterView from "@/views/RegisterView.vue";
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
