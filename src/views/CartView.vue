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


          <div class="ma-5 " v-for="n in 10" v-bind:key="n">

            <InteractiveProductCard/>


          </div>


        </v-row>

      </v-sheet>


    </v-col>

  </v-row>


</template>

<script>
import InteractiveProductCard from "@/components/Product/CartInteractiveProductCard";

export default {
  name: "CartView",
  components: {InteractiveProductCard,},
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