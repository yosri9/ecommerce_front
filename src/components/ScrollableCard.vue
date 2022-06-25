<template>
    <v-tabs
        transparent
        show-arrows
        height="200"
        hide-slider="false"
    >
      <v-tabs-slider color="teal lighten-3"></v-tabs-slider>

      <v-tab
          v-for="image in storedProduct.product_images"
          :key="image"
          :href="'#tab-' + i"
      >
        <ProductCard :image="image.image_url"/>

      </v-tab>
    </v-tabs>
</template>
<script>
import {useProductStore} from "@/stores/product-store";
import {storeToRefs} from "pinia";
import ProductCard from "@/components/Product/ProductCard";
export default {
  setup() {
    const productStore = useProductStore()

    const {storedProduct} = storeToRefs(productStore)

    return {storedProduct}
  },

  name: "ScrollableCard",
  components: {ProductCard}
}
</script>

<style scoped>

</style>