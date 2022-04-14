<template>
  <BaseProductCard>
    <div class="text--primary">
      <!-- Using the elevation prop -->
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card
              :elevation="hover ? 24 : 6"
              class="mx-auto "
          >
            <v-img :height="height" :width="width"
                   :src="src"/>
          </v-card>
        </template>
      </v-hover>



    </div>

  </BaseProductCard>
</template>

<script>
import BaseProductCard from "@/components/Product/BaseProductCard";
export default {
  name: "ShadowedProduct",
  components: {BaseProductCard},
  props: {
    height: String,
    width:String,
    src:String
  },
}
</script>

<style scoped>

</style>