<template>
  <div>
    <router-link to="product" @click.native="storedProduct = product">
      <slot/>

    </router-link>


  </div>


</template>

<script>

const {Product} = require("@/Model/product");
const {useProductStore} = require("@/stores/product-store");
import {storeToRefs} from "pinia";

export default {
  setup() {
    const productStore = useProductStore()
    const {storedProduct}= storeToRefs(productStore)

    return {storedProduct, productStore}
  },

  name: "BaseProductCard",
  props: {
    isCartDisabled: Boolean,
    product: Product


  },
}
</script>

<style scoped>

</style>