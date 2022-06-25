<template>
  <BaseInteractiveProductCard :product="product" :isCartDisabled = isCartDisabled :count="count" >
    <template v-slot:X>

      <div class=" ml-5 fa-pull-right"  >
        <v-btn rounded small   @click="removeMessage(2)">
          X
        </v-btn>


      </div>

    </template>

    <template v-slot:price>
      {{product.price *  count}} $
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
      <div>{{ count }}</div>

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

  </BaseInteractiveProductCard>
</template>

<script>
import BaseInteractiveProductCard from "@/components/Product/BaseInteractiveProductCard";
import {Product} from "@/Model/product";
import {storeToRefs} from "pinia";

const {useCartItemStore} = require("@/stores/cart-item-store");
export default {
  setup() {
    const cartItemStore = useCartItemStore()

    const {quantity}= storeToRefs(cartItemStore)

    return {quantity, cartItemStore}
  },


  name: "InteractiveAddProductToCart",
  components: {BaseInteractiveProductCard},
  props:{
    product: Product,
    dialog: Boolean,
    isCartDisabled:Boolean,

  },
  data: () => ({
    types: ['Places to Be', 'Places to See'],
    cards: ['Good', 'Best', 'Finest'],
    show: true,
    count: 1,
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
      this.count++;
    },
    decrement() {
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