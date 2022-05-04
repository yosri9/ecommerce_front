<template>

  <div class="ma-15 pa-16">
    <v-row >

      <v-col cols="5">

        <v-img style="border: groove ;align-self: self-end;"
               src="https://www.ubuy.tn/productimg/?image=aHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9JLzcxSWw2VzFrNXFMLl9TUzQwMF8uanBn.jpg"
               width="400" height="400"
        >
          <HeartIcon class="fa-pull-right" style="padding-top: 90%"/>

        </v-img>


        <template>
          <v-tabs style="padding-left: 15%;">
            <v-tab @click="$vuetify.goTo('#photos')">Photos</v-tab>
            <v-tab @click="$vuetify.goTo('#product-description')">Description</v-tab>
          </v-tabs>
        </template>

      </v-col>
      <v-col cols="1"/>

      <v-col cols="6">

        <v-row class="align-baseline">
          <v-row style="align-content: flex-start">
            <v-icon color="blue">
              mdi-compare-horizontal

            </v-icon>


            <div class="ml-8">
              add to compare tool
            </div>

          </v-row>
          <v-row class="pl-3 mb-5">
            <v-icon color="blue">
              mdi-cart-plus

            </v-icon>

            <div class="ml-8">
              Add to cart
            </div>
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


          <v-row style="color: red" class="font-weight-bold">
            Product is not in stock
          </v-row>

          <v-row align-self="start" class="pr-14">
            <v-icon color="yellow">
              mdi-emoticon-sad-outline
            </v-icon>


          </v-row>

        </v-row>

        <v-row style="height: 30px"/>
        <v-row class="text-decoration-underline pr-15">
          Notify me when it is available
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

        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam commodi dicta dolore dolores eligendi eos ex incidunt, iste, molestias nemo nesciunt nulla officia perferendis perspiciatis, quaerat quas rerum tempora vel.</h5>

      </div>

    </v-col>











  </div>

</template>

<script>
import HeartIcon from "@/icons/HeartIcon";
import CenteredDivider from "@/components/CenteredDivider";
import ScrollableCard from "@/components/ScrollableCard";

export default {
  name: "ProductView",
  components: {ScrollableCard,  CenteredDivider, HeartIcon}
}
</script>

<style scoped>

</style>