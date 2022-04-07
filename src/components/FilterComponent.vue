<template>

  <v-sheet outlined rounded class="ml-10">

    <div class="my-15 mx-8 ">

      <FilterSelect/>

      <FilterSelect/>

      <FilterSelect/>
      <FilterSelect/>

      <v-row>

        <p class="ml-6 mt-5">Healty</p>
        <v-spacer/>

        <v-checkbox
            v-model="ex4"
            color="success"
            value="success"
            hide-details
        ></v-checkbox>
      </v-row>

      <v-row>

        <p class="ml-6 mt-5">Concurrency</p>
        <v-spacer/>

        <v-checkbox
            v-model="ex4"
            color="success"
            value="success"
            hide-details
        ></v-checkbox>
      </v-row>
      <v-row>

        <p class="ml-6 mt-5">Promotion</p>
        <v-spacer/>

        <v-checkbox
            v-model="ex4"
            color="success"
            value="success"
            hide-details
        ></v-checkbox>
      </v-row>


      <FilterRangeSelect class="my-10"/>


    </div>


    <v-card color="#F3F3F3" rounded dark b>


    </v-card>

  </v-sheet>

</template>

<script>
import FilterRangeSelect from "@/components/FilterRangeSelect";
import FilterSelect from "@/components/FilterSelect";


export default {
  name: "FilterComponent",
  components:{
    FilterRangeSelect,
    FilterSelect
  }

}
</script>

<style scoped>

</style>