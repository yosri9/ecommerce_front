<template>
  <v-container fluid style="background-color: #0F0FD2">

    <v-row class="pa-16 align-center">

      <ShadowedProduct class="pl-16" height="300" width="250"
                       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz6VomV5-9JmXSp14fnSBjtH9khjnHo3Jg5vwvBwA_Mx2KjYtnI34cM6PhXVs-hNIRVbE&usqp=CAU"/>
      <v-spacer/>
      <ShadowedProduct height="400" width="300" src="https://media.joma-sport.com/products/20220118122349.400827.158_large.jpg"/>
      <v-spacer/>

      <ShadowedProduct class="pr-16" height="300" width="250" src="https://olympiame.com/pub/media/catalog/product/cache/77d5b1459d044efb3500eb37654b5a7e/b/7/b7r-olympia-sports-oman-_1_1.jpg"/>


    </v-row>


  </v-container>
</template>

<script>
import ShadowedProduct from "@/components/Product/ShadowedProduct";

export default {
  name: "ThreeProductShow",
  components: {ShadowedProduct}
}
</script>

<style scoped>

</style>