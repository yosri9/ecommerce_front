<template>
    <v-tabs
        transparent
        show-arrows
        height="200"
        hide-slider="false"
    >
      <v-tabs-slider color="teal lighten-3"></v-tabs-slider>

      <v-tab
          v-for="i in 30"
          :key="i"
          :href="'#tab-' + i"
      >
        <ProductCard/>

      </v-tab>
    </v-tabs>
</template>
<script>
import ProductCard from "@/components/Product/ProductCard";
export default {
  name: "ScrollableCard",
  components: {ProductCard}
}
</script>

<style scoped>

</style>