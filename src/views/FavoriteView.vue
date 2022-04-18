<template>

  <v-row class="my-10" style="place-content: center">


    <v-col cols="10" >

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


          <div class="ma-5 " v-for="n in 10" v-bind:key="n">

            <FavoriteInteractiveProductCard  />


          </div>


        </v-row>

      </v-sheet>


    </v-col>

  </v-row>


</template>

<script>
import FavoriteInteractiveProductCard from "@/components/Product/FavoriteInteractiveProductCard";

export default {
  name: "FavoriteView",
  components: {FavoriteInteractiveProductCard,},
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