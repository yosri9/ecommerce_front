<template>

  <v-col class="pt-16" >
    <v-row class="mb-10" >

      <v-col cols="2"/>
      <v-col cols="2">
        <v-row align="center" style="place-content: space-between;">
          <v-avatar class="d-flex"
                    color="warning lighten-2"
                    size="56"
          ></v-avatar>
          <div class="font-weight-bold"> Sarra Marchel</div>
        </v-row>


      </v-col>


    </v-row>


    <v-row class="align-baseline">
      <v-col cols="2"/>
      <v-col cols="2">
        <div class="font-weight-bold">First Name:</div>


      </v-col>
      <v-col
          cols="12"
          sm="6"
          md="4"
      >
        <v-text-field
            outlined
            dense
        ></v-text-field>
      </v-col>


    </v-row>
    <v-row class="align-baseline">
      <v-col cols="2"/>
      <v-col cols="2">
        <div class="font-weight-bold">Last Name:</div>


      </v-col>
      <v-col
          cols="12"
          sm="6"
          md="4"
      >
        <v-text-field
            outlined
            dense
        ></v-text-field>
      </v-col>


    </v-row>
    <v-row class="align-baseline">
      <v-col cols="2"/>
      <v-col cols="2">
        <div class="font-weight-bold">Gender:</div>


      </v-col>
      <v-col
          cols="12"
          sm="6"
          md="4"
      >
        <v-text-field
            outlined
            dense
        ></v-text-field>
      </v-col>


    </v-row>
    <v-row class="align-baseline">
      <v-col cols="2"/>
      <v-col cols="2">
        <div class="font-weight-bold">Phone Number:</div>


      </v-col>
      <v-col
          cols="12"
          sm="6"
          md="4"
      >
        <v-text-field
            outlined
            dense
        ></v-text-field>
      </v-col>


    </v-row>
    <v-row class="align-baseline">
      <v-col cols="2"/>
      <v-col cols="2">
        <div class="font-weight-bold">Birthday Date:</div>


      </v-col>
      <v-col
          cols="12"
          sm="6"
          md="4"
      >
        <v-text-field
            outlined
            dense
        ></v-text-field>
      </v-col>


    </v-row>
    <v-row class="align-baseline">
      <v-col cols="2"/>
      <v-col cols="2">
        <div class="font-weight-bold">Password:</div>


      </v-col>
      <v-col
          cols="12"
          sm="6"
          md="4"
      >
        <v-text-field
            outlined
            dense
        ></v-text-field>
      </v-col>


    </v-row>

    <v-row class="justify-center">

      <v-btn
          class="ma-2 center"
          :loading="loading2"
          :disabled="loading2"
          color="success"
          @click="loader = 'loading2'"
      >
        update
        <template v-slot:loader>
          <span>Loading...</span>
        </template>
      </v-btn>

    </v-row>


  </v-col>


</template>
<script>
export default {
  name: "AccountView"
}
</script>

<style scoped>

</style>