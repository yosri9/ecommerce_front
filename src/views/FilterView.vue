<template>

  <v-row class="my-10" style="place-content: center">
    <v-col cols="3" >

    <FilterComponent />
    </v-col>
    <v-col cols="9" >

      <v-row style="justify-content: space-evenly">

        <v-btn
            class="ma-2 "
            :loading="loading"
            :disabled="loading"
            color="primary"
            @click="loader = 'loading'"
        >
          Add all to cart
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
        <v-row class=" d-inline-flex">


          <div class="ma-5 " v-for="product in products" v-bind:key="product">
            <FavoriteInteractiveProductCard :product="product" />


          </div>


        </v-row>

      </v-sheet>


    </v-col>

  </v-row>


</template>

<script>
import FavoriteInteractiveProductCard from "@/components/Product/FavoriteInteractiveProductCard";
import FilterComponent from "@/components/Filter/FilterComponent";
import NProgress from "nprogress"
import {storeToRefs} from "pinia";

const {useCategoryStore} = require("@/stores/category-stores");

export default {
  setup() {
    const categoryStore = useCategoryStore()

    const {products}= storeToRefs(categoryStore)



    return {categoryStore, products}
  },

  async beforeRouteEnter(to, from, next) {
    const {useCategoryStore} = require("@/stores/category-stores");
    const categoryStore = useCategoryStore()


    NProgress.start()

    categoryStore.fetchProductByCategoryName().then(() => {
          NProgress.done()

          next()


        }
    )


  },


  name: "FilterView",
  components: {FilterComponent, FavoriteInteractiveProductCard,},
  data: () => ({
    show: true,
  }),

  methods: {
    clearAll(seconds) {
      setTimeout(() => this.show = false, seconds * 1000);


    }

  }
}
</script>

<style scoped>

</style>