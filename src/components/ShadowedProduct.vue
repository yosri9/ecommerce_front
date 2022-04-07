<template>
    <div class="text--primary">
      <!-- Using the elevation prop -->
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card
              :elevation="hover ? 24 : 6"
              class="mx-auto pa-6"
          >
            <v-img height="200" width="200"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz6VomV5-9JmXSp14fnSBjtH9khjnHo3Jg5vwvBwA_Mx2KjYtnI34cM6PhXVs-hNIRVbE&usqp=CAU"/>
          </v-card>
        </template>
      </v-hover>



    </div>
</template>

<script>
export default {
  name: "ShadowedProduct",

  props: {
    height: String,
    width:String
  },
}
</script>

<style scoped>

</style>