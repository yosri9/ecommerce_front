<template>
<BaseInteractiveProductCard :product="product" :isCartDisabled = isCartDisabled :count="count" :cart-item="cartItem">
<template v-slot:X>

  <div class=" ml-5 fa-pull-right"  >
    <v-btn rounded small   @click="removeMessage(2)">
      X
    </v-btn>


  </div>

</template>

  <template v-slot:price>
    {{product.price *  cartItem.quantity + count}} $
  </template>
  <template v-slot:card-actions>

    <v-btn
        color="blue"
        class="white--text"
        fab
        icon
        small
        @click="increment()"
    >
      <v-icon> mdi-plus</v-icon>
    </v-btn>
    <div>{{ cartItem.quantity }}</div>

    <v-btn
        color="blue"
        class="white--text"
        fab
        icon
        small
        @click="decrement()"
    >
      <v-icon> mdi-minus</v-icon>
    </v-btn>

  </template>

</BaseInteractiveProductCard >
</template>

<script>
import BaseInteractiveProductCard from "@/components/Product/BaseInteractiveProductCard";
import {Product} from "@/Model/product";
import {storeToRefs} from "pinia";
import {CartItem} from "@/Model/cart-item";

const {useCartItemStore} = require("@/stores/cart-item-store");
const ApiRouter = require("@/services/Api/api-router");
const {CartItemApi} = require("@/services/Api/cart-item-api");
export default {
  setup() {
    const cartItemStore = useCartItemStore()

    const {quantity}= storeToRefs(cartItemStore)

    return {quantity, cartItemStore}
  },


  name: "CartInteractiveProductCard",
  components: {BaseInteractiveProductCard},
  props:{
    product: Product,
    dialog: Boolean,
    cartItem:CartItem,
    isCartDisabled: Boolean
  },
  data: () => ({
    types: ['Places to Be', 'Places to See'],
    cards: ['Good', 'Best', 'Finest'],
    show: true,
    count: 0,
    isFavorite: false,

    rightSocials: [


      {
        icon: 'mdi-plus',
        color: 'red lighten-3',
      },
      {
        icon: 'mdi-heart',
        color: 'red lighten-3',
      },

    ],

    leftSocials: [
      {
        icon: 'mdi-cart',
        color: 'red lighten-3',
        disabled: 'true',
      },

      {
        icon: 'mdi-minus',
        color: 'red lighten-3',
      },
    ]
  }),


  methods: {
    getImage() {
      const min = 550
      const max = 560

      return Math.floor(Math.random() * (max - min + 1)) + min
    },

    removeMessage(seconds) {
      setTimeout(() => this.show = false, seconds * 1000);
    },

    increment() {
      const cartItemApi = new CartItemApi()
      const cartItem = this.cartItem
      cartItem.quantity ++
      cartItemApi.update(cartItem,ApiRouter.CART_ITEMS)
      this.count++;
    },
    decrement() {

      const cartItemApi = new CartItemApi()
      const cartItem = this.cartItem
      cartItem.quantity --
      cartItemApi.update(cartItem,ApiRouter.CART_ITEMS)

      this.count--;
    },
    removeFromFavorite() {
      this.isFavorite = false;
    },

    addToFavorite(){
      this.isFavorite = true;
    }

  },
}


</script>

<style scoped>

</style>