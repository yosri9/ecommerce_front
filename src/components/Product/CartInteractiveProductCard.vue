<template>
<BaseInteractiveProductCard :isCartDisabled = true>
<template v-slot:X>

  <div class=" ml-5 fa-pull-right"  >
    <v-btn rounded small   @click="removeMessage(2)">
      X
    </v-btn>


  </div>
</template>


  <template v-slot:card-actions>

    <v-btn
        color="blue"
        class="white--text"
        fab
        icon
        small
        @click="increment()"
    >
      <v-icon> mdi-plus</v-icon>
    </v-btn>
    <div>{{ count }}</div>

    <v-btn
        color="blue"
        class="white--text"
        fab
        icon
        small
        @click="decrement()"
    >
      <v-icon> mdi-minus</v-icon>
    </v-btn>

  </template>

</BaseInteractiveProductCard>
</template>

<script>
import BaseInteractiveProductCard from "@/components/Product/BaseInteractiveProductCard";
export default {
  name: "CartInteractiveProductCard",
  components: {BaseInteractiveProductCard},
  data: () => ({
    types: ['Places to Be', 'Places to See'],
    cards: ['Good', 'Best', 'Finest'],
    show: true,
    count: 0,
    isFavorite: false,
    isCartDisabled:true,

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
    },

    addToFavorite(){
      this.isFavorite = true;
    }

  },
}


</script>

<style scoped>

</style>