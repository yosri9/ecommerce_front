<template>

  <v-container v-if="show">
    <v-hover>
      <template v-slot:default="{ hover }">

        <v-card max-width="300" :elevation="hover ? 24 : 6"
                class="mx-auto ">

          <BaseProductCard>

            <v-img
                :src=product.image_url
                height="200"
            >
              <slot name="X"/>



              <span
                  class="text-h5 white--text pl-4 pt-4 d-inline-block"
                  v-text="card"
              >

              </span>


            </v-img>

          </BaseProductCard>

          <v-card-actions class="white justify-center">

            <v-btn
                :disabled=isCartDisabled
                color="red lighten-3"
                class="white--text disabled"
                fab
                icon
                small

            >
              <v-icon color='black'> mdi-cart-outline</v-icon>
            </v-btn>

            <slot name="card-actions"/>


            <v-btn v-if="isFavorite"
                   color="red lighten-3"
                   class="white--text"
                   fab
                   icon
                   small
                   @click="removeFromFavorite()"

            >
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn v-else fab @click="addToFavorite()"
                   icon
                   small>
              <v-icon>mdi-cards-heart-outline</v-icon>
            </v-btn>




          </v-card-actions>


        </v-card>
      </template>
    </v-hover>
  </v-container>


</template>

<script>
import BaseProductCard from "@/components/Product/BaseProductCard";
import {Product} from "@/Model/product";

export default {
  name: "BaseInteractiveProductCard",
  components: {BaseProductCard},
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
  props: {
    isCartDisabled: Boolean,
    product: Product


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
    }

  },
}
</script>

<style scoped>

</style>

<!--`https://picsum.photos/200/300?image=${getImage()}`-->