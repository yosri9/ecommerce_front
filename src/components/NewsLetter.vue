<template>

  <div style="text-align: -webkit-center;">
    <v-row style="width: 50%; align-self: center;" class="my-3">


      <v-text-field class="mx-8"
                    label="Subscribe with your e-mail"
                    solo
                    dense
                    outlined
                    style="width: 50%;  "
      ></v-text-field>

      <div>
        <v-btn
            large
            color="primary"
            dark
        >
          Send
        </v-btn>
      </div>

    </v-row>
  </div>
</template>

<script>
export default {
  name: "NewsLetter"
}
</script>

<style scoped>

</style>