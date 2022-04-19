<template>
<div>


  <v-col>
<v-row class="pt-16 " style="padding-left: 15%; text-decoration: underline ; text-underline-position: under">
  Payment Information
</v-row>
    <br/>
    <br/>

    <v-row class="align-baseline justify-content-center " >
      <v-col cols="2"/>
      <v-col cols="2">
        <div class="font-weight-bold">Card Credit Number:</div>


      </v-col>
      <v-col
          cols="12"
          sm="6"
          md="4"

      >
        <v-text-field
            outlined
            dense
            class="mt-15"
        ></v-text-field>
      </v-col>
      <v-spacer/>
      <v-col cols="2">
        <v-btn
            class="ma-2 center mb-3"
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

      </v-col>


    </v-row>

    <v-row class="align-baseline" style="alignment-baseline: center">
      <v-col cols="2"/>
      <v-col cols="2">
        <div class="font-weight-bold">Billing Address:</div>


      </v-col>
      <v-col
          cols="12"
          sm="6"
          md="4"
      >
        <v-textarea
            rows="3"
            outlined
            dense
        ></v-textarea>
      </v-col>
      <v-spacer/>

      <v-col cols="2">
        <v-btn
            class="ma-2 center mt-6"
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

      </v-col>


    </v-row>


    <v-row class="align-baseline">
      <v-col cols="2"/>
      <v-col cols="2">
        <div class="font-weight-bold">Shipping Address:</div>


      </v-col>
      <v-col
          cols="12"
          sm="6"
          md="4"
      >
        <v-textarea
            rows="3"
            outlined
            dense
        ></v-textarea>
      </v-col>
      <v-spacer/>

      <v-col cols="2">
        <v-btn
            class="ma-2 center  mt-6"
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

      </v-col>


    </v-row>


  </v-col>

</div>
</template>



<script>
export default {
  name: "PaymentInformationView"
}
</script>

<style scoped>

</style>