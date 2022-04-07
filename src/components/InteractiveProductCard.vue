<template>
  <v-container v-if="show">
    <v-hover>
      <template v-slot:default="{ hover }">

        <v-card max-width="300" :elevation="hover ? 24 : 6"
                class="mx-auto pa-6">
          <v-img
              :src="`https://picsum.photos/200/300?image=${getImage()}`"
              height="300"
          >
              <span
                  class="text-h5 white--text pl-4 pt-4 d-inline-block"
                  v-text="card"
              ></span>

            <div class=" fa-pull-right btn-close">
              <v-btn @click="removeMessage(0)">
                X
              </v-btn>


            </div>

          </v-img>

          <v-card-actions class="white justify-center">
            <v-btn
                color="red lighten-3"
                class="white--text"
                fab
                icon
                small
                disabled
            >
              <v-icon> mdi-cart</v-icon>
            </v-btn>
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
              <v-icon >mdi-cards-heart-outline</v-icon>
            </v-btn>

          </v-card-actions>
        </v-card>
      </template>
    </v-hover>
  </v-container>

</template>

<script>
export default {
  name: "InteractiveProductCard",
  data: () => ({
    types: ['Places to Be', 'Places to See'],
    cards: ['Good', 'Best', 'Finest'],
    show: true,
    count: 0,
    isFavorite: false,


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