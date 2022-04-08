<template>
<v-container fluid style="background-color: #0F0FD2">

<v-row class="py-10 px-10">

  <ShadowedProduct height="300" width="250"/>
  <v-spacer/>
  <ShadowedProduct height="100" width="300"/>
  <v-spacer/>

  <ShadowedProduct height="300" width="250"/>


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