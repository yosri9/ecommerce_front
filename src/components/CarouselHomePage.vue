<template>
  <v-row class="row-center" align="center" justify="center">

    <v-carousel  v-model="model"  class="carousel-style" cycle     show-arrows-on-hover     hide-delimiter-background

    >
      <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
      >

          <v-row
              class="fill-height"
              align="center"
              justify="center"
          >

          </v-row>
      </v-carousel-item>
    </v-carousel>


  </v-row>
</template>
<script>
export default {
  data: () => ({
    model: 0,
    colors: [
      'primary',
      'secondary',
      'yellow darken-2',
      'red',
      'orange',
    ],
    items: [
      {
        src: 'https://www.sportsshoes.com/media/image/product-series/adidas-adios/mid-section.jpg',
      },
      {
        src: 'https://cdn.sportsshoes.com/product/A/ADI15339/ADI15339_400_3.jpg',
      },
      {
        src: 'https://cdn.sportsshoes.com/product/H/HEL1711/HEL1711_400_1.jpg',
      },
      {
        src: 'https://cdn.sportsshoes.com/product/M/MON2196/MON2196_400_1.jpg',
      },
    ],
  }),
}
</script>
<style scoped>
.carousel-style{
  padding-top: 40px;
  width: 90%;
  align-content: center;

}


</style>