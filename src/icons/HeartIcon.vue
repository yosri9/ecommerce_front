<template>
  <v-btn v-if="isFavorite"
         color="red lighten-3"
         class="white--text"
         fab
         icon
         small
         @click="addRemoveFavorite()"

  >
    <v-icon>mdi-heart</v-icon>
  </v-btn>
  <v-btn v-else fab @click="addRemoveFavorite()"
         icon
         small
  >
    <v-icon>mdi-cards-heart-outline</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "HeartIcon",
  data() {
    return {
      isFavorite: true,

    }
  },

  methods: {
    addRemoveFavorite() {
      this.isFavorite = !this.isFavorite;
    }
  }
}
</script>

<style scoped>

</style>