<template>

  <BaseProductCard>
    <v-card elevation="6" width="200"
    >
      <v-img :src=image>
      </v-img>


    </v-card>
  </BaseProductCard>


</template>

<script>
import BaseProductCard from "@/components/Product/BaseProductCard";
export default {
  name: "ProductCard",
  components: {BaseProductCard},
  props:{
    image: String
  }
}
</script>

<style scoped>




</style>