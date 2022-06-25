<template>

  <v-container v-if="show">
    <v-hover>
      <template v-slot:default="{ hover }">

        <v-card max-width="300" :elevation="hover ? 24 : 6"
                class="mx-auto ">

          <BaseProductCard :product="product">

            <v-img
                :src=product.image_url
                height="200"
            >
              <slot name="X"/>



              <span
                  class="text-h5 white--text pl-4 pt-4 d-inline-block"
                  v-text="card"
              >

              </span>


            </v-img>

          </BaseProductCard>
        <div class="text-center" >

        <slot name="price"/>
        </div>
          <v-card-actions class="white justify-center">

            <v-btn v-show="isCartDisabled"
                color="red lighten-3"
                class="white--text disabled"
                fab
                icon
                small
                @click="addToCart(); snackbarStore = true"


            >
              <v-icon color='black' > mdi-cart-plus</v-icon>
            </v-btn>

            <v-btn v-show="!isCartDisabled"
                color="red lighten-3"
                class="white--text disabled"
                fab
                icon
                small
                @click="removeItemFromCart(); "


            >
              <v-icon color='black' > mdi-cart-remove
              </v-icon>
            </v-btn>



            <slot name="card-actions"/>


            <v-btn v-if="isFavorite"
                   color="red lighten-3"
                   class="white--text"
                   fab
                   icon
                   small
                   @click="removeFromFavorite()"

            >
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn v-else fab @click="addToFavorite()"
                   icon
                   small>
              <v-icon>mdi-cards-heart-outline</v-icon>
            </v-btn>




          </v-card-actions>


        </v-card>
      </template>
    </v-hover>
  </v-container>


</template>

<script>
import BaseProductCard from "@/components/Product/BaseProductCard";
import {Product} from "@/Model/product";
import {storeToRefs} from "pinia";
import {CartItem} from "@/Model/cart-item";

const {useCartItemStore} = require("@/stores/cart-item-store");
const {useCartStore} = require("@/stores/cart-store");

export default {

  setup() {
    const cartItemStore = useCartItemStore()
    const cartStore = useCartStore()

    const {dialogStore, snackbarStore}= storeToRefs(cartStore)
    const {quantity}= storeToRefs(cartItemStore)

    return {quantity, cartItemStore, dialogStore, snackbarStore}
  },

  name: "BaseInteractiveProductCard",
  components: {BaseProductCard},


  data: () => ({
    types: ['Places to Be', 'Places to See'],
    cards: ['Good', 'Best', 'Finest'],
    show: true,
    isFavorite: true,


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
  props: {
    isCartDisabled: Boolean,
    product: Product,
    count: Number,
    cartItem: CartItem


  },


  methods: {
    getImage() {
      const min = 550
      const max = 560

      return Math.floor(Math.random() * (max - min + 1)) + min
    },
   async addToCart(){

      this.quantity = this.count
     console.log("add to cart function")
      await this.cartItemStore.addItemToCart()
     this.dialogStore =false


    },

    async removeItemFromCart(){
      this.show = false
      await this.cartItemStore.removeItemFromCart(this.cartItem.id)

    }

  },
}
</script>

<style scoped>

</style>

<!--`https://picsum.photos/200/300?image=${getImage()}`-->