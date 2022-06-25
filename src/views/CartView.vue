<template>

  <v-row class="my-10" style="place-content: center">


    <v-col cols="11" class="pl-16 ">

      <v-row style="justify-content: space-evenly">

        <v-btn
            class="ma-2 "
            :loading="loading"
            :disabled="loading"
            color="primary"
            @click="loader = 'loading'"
        >
          Buy all
        </v-btn>

        <v-btn
            class="ma-2"
            :loading="loading"
            :disabled="loading"
            color="error"
            @click="clearAll()"
        >
          Clear all
        </v-btn>

      </v-row>


      <v-sheet outlined class="ma-10 pa-16" v-if="show">
        <v-row class=" d-inline-flex " style="place-content: center" >


          <div class="ma-5 " v-for="(cartItem,i) in (cart.cart_items,products)" v-bind:key="cartItem">

            <CartInteractiveProductCard :product="products[i]" :cartItem="cart.cart_items[i]" :isCartDisabled="false" />


          </div>


        </v-row>

      </v-sheet>


    </v-col>

  </v-row>


</template>

<script>
import CartInteractiveProductCard from "@/components/Product/CartInteractiveProductCard";
import {useCartStore} from "@/stores/cart-store";

import {storeToRefs} from "pinia";
export default {
  setup() {
    const cartStore = useCartStore()

    const {cart, products}=storeToRefs(cartStore)


    return {cart,cartStore, products}
  },

  name: "CartView",
  components: {CartInteractiveProductCard,},
  data: () => ({
    show: true,
  }),

  methods: {
    clearAll(seconds) {
      setTimeout(() => this.show = false, seconds * 1000);


    },
    async product(){
    const  product = await this.cartStore.fetchProduct(this.cartItem.product)
      console.log(product)
      return product
    }

  }
}
</script>

<style scoped>

</style>