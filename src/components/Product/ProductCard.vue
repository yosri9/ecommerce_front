<template>

  <BaseProductCard>
    <v-card elevation="6" width="200"
    >
      <v-img
          src="https://t4.ftcdn.net/jpg/00/04/43/79/360_F_4437963_Ys7eTLPVxSkChhP3TXz4YYjHwWSg14yQ.jpg">

      </v-img>

    </v-card>
  </BaseProductCard>


</template>

<script>
import BaseProductCard from "@/components/Product/BaseProductCard";
export default {
  name: "ProductCard",
  components: {BaseProductCard}
}
</script>

<style scoped>




</style>