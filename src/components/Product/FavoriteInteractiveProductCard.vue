<template >
  <BaseInteractiveProductCart :isCartDisabled = isCartDisabled :product =product>

    <v-spacer/>
  </BaseInteractiveProductCart>


</template>

<script>
import BaseInteractiveProductCart from "@/components/Product/BaseInteractiveProductCard";
import {Product} from "@/Model/product";

export default {
  name: "FavoriteInteractiveProductCard",
  components: {BaseInteractiveProductCart},
  data: () => ({
    types: ['Places to Be', 'Places to See'],
    cards: ['Good', 'Best', 'Finest'],
    show: true,
    count: 0,
    isFavorite: true,



    rightSocials: [


      {
        icon: 'mdi-plus',
        color: 'red lighten-3',
      },
      {
        icon: 'mdi-heart',
        color: 'red lighten-3',
      },

    ],

    leftSocials: [
      {
        icon: 'mdi-cart',
        color: 'red lighten-3',
        disabled: 'true',
      },

      {
        icon: 'mdi-minus',
        color: 'red lighten-3',
      },
    ]
  }),
  props:{
     product: Product,
    isCartDisabled: Boolean
  },


  methods: {
    getImage() {
      const min = 550
      const max = 560

      return Math.floor(Math.random() * (max - min + 1)) + min
    },

    removeMessage(seconds) {
      setTimeout(() => this.show = false, seconds * 1000);
    },

    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    removeFromFavorite() {
      this.isFavorite = false;
      this.removeMessage(1);

    },

    addToFavorite() {
      this.isFavorite = true;
    },



  },
}


</script>

<style scoped>

</style>