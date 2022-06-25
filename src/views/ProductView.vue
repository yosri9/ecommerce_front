<template>

  <div class="ma-15 pa-16">
    <v-row >

      <v-col cols="5">

        <v-img style="border: groove ;align-self: self-end;"
               :src= storedProduct.image_url
               width="400" height="400"
        >
          <HeartIcon class="fa-pull-right" style="padding-top: 90%"/>

        </v-img>


        <template>
          <v-tabs style="padding-left: 15%;">
            <v-tab @click="$vuetify.goTo('#photos')">Photos</v-tab>
            <v-tab @click="$vuetify.goTo('#product-description')">Description</v-tab>
            <v-tab @click="$vuetify.goTo('#product-category')">Features</v-tab>

          </v-tabs>
        </template>

      </v-col>
      <v-col cols="1"/>

      <v-col cols="6">

        <v-row class="align-baseline">
          <v-row  id="compare-tool" style="align-content: flex-start">
            <v-icon color="blue">
              mdi-compare-horizontal

            </v-icon>


            <div  class="ml-8">
              Add to compare tool
            </div>

          </v-row>



          <v-row justify="center">
            <v-dialog
                v-model="dialogStore"
                persistent
                max-width="290"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-row id="add-to-cart" class="pl-3 mb-5" v-bind="attrs" v-on="on">
                  <v-icon color="blue">
                    mdi-cart-plus

                  </v-icon>

                  <div class="ml-8">
                    Add to cart
                  </div>
                </v-row>

              </template>
              <InteractiveAddProductToCart :is-cart-disabled="true"    :product="storedProduct"  />
            </v-dialog>
          </v-row>



        </v-row>

        <v-row class="align-baseline">
          <v-row id="rating" class="mb-10">
            <v-icon color="blue">
              mdi-message-draw


            </v-icon>

            <div class="ml-8">
              Rating
            </div>

          </v-row>

          <v-rating style="padding-right: 48px"
                    v-model="rating"
                    background-color="orange lighten-3"
                    color="orange"
                    large
          />


        </v-row>


        <v-row class="align-baseline">


          <v-row style="color: red" class="font-weight-bold" >
            Product is not in stock

          </v-row>





          <div class="text-center">

            <v-snackbar
                v-model="snackbarStore"
                :multi-line="multiLine"
            >
              {{ text }}

              <template v-slot:action="{ attrs }">
                <v-btn
                    color="red"
                    text
                    v-bind="attrs"
                    @click="snackbarStore = false"
                >
                  Close
                </v-btn>
              </template>
            </v-snackbar>
          </div>

          <v-row align-self="start" class="pr-14">
            <v-icon color="yellow">
              mdi-emoticon-sad-outline
            </v-icon>


          </v-row>

        </v-row>

        <v-row style="height: 30px"/>
        <v-row class=" pr-15" @click="getNotifiedSnackbar = true">
          <v-btn>
            Notify me when it is available
          </v-btn>

          <div class="text-center">

            <v-snackbar
                v-model="getNotifiedSnackbar"
                :multi-line="multiLine"
            >
              You will receive an email soon

              <template v-slot:action="{ attrs }">
                <v-btn
                    color="red"
                    text
                    v-bind="attrs"
                    @click="getNotifiedSnackbar = false"
                >
                  Close
                </v-btn>
              </template>
            </v-snackbar>
          </div>
        </v-row>


        <div style="height: 30%"/>


      </v-col>

      <v-col cols="1"/>


    </v-row>
    <centered-divider/>

    <v-row>



       <ScrollableCard id="photos"/>
    </v-row>
    <v-col cols="6">

      <div id="product-description" class="pl-16 pt-16">
        <h3 class="pb-5">
          Product Description
        </h3>

        <div   v-for="description in storedProduct.descriptions" v-bind:key="description">
          <div >
            <h5>
              {{description.title}} :
            </h5>
              <div class="align-self-center font-weight-light">
                {{description.description_details}}


              </div>

          </div>

          <br/>


        </div>
      </div>

      <div id="product-category" class="pl-16 pt-16">
        <h3 class="pb-5">
          Product Features
        </h3>

        <div   v-for="category in storedProduct.categories" v-bind:key="category">
          <div >
            <h5>
              {{category.name}} :
            </h5>
            <div class="align-self-center font-weight-light">
              {{category.sub_category}}


            </div>

          </div>

          <br/>


        </div>
      </div>


    </v-col>











  </div>

</template>

<script>

import HeartIcon from "@/icons/HeartIcon";
import CenteredDivider from "@/components/CenteredDivider";
import ScrollableCard from "@/components/ScrollableCard";
import {useProductStore} from "@/stores/product-store";
import {useCartStore} from "@/stores/cart-store";

import {storeToRefs} from "pinia";
import InteractiveAddProductToCart from "@/components/Product/InteractiveAddProductToCart";
// import NProgress from "nprogress"

export default {



  setup() {
    const productStore = useProductStore()
    const cartStore = useCartStore()

    const {storedProduct}= storeToRefs(productStore)
    const {dialogStore, snackbarStore}=storeToRefs(cartStore)


    return {storedProduct, dialogStore, snackbarStore}
  },
  data: () => ({
    multiLine: true,
    getNotifiedSnackbar: false,
    text: `Added to cart.`,
  }),
  // async beforeRouteEnter(to, from, next) {
  //
  //   const {useProductStore} = require("@/stores/product-store");
  //   const productStore = useProductStore()
  //
  //
  //   NProgress.start()
  //
  //   productStore.fetchProductData().then(() => {
  //         NProgress.done()
  //
  //         next()
  //
  //
  //       }
  //   )
  //
  //
  // },

  name: "ProductView",
  components: {InteractiveAddProductToCart, ScrollableCard,  CenteredDivider, HeartIcon},
}


</script>



<style scoped>

</style>