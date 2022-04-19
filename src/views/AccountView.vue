<template>

  <v-col class="pt-16">
    <v-row class="mb-10">

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
          class="d-flex"
          cols="12"
          sm="4"
      >
        <v-select
            :items="items"
            label="Select"
            dense
            solo
        ></v-select>
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

        <v-menu
            ref="menu1"
            v-model="menu1"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
                v-model="dateFormatted"
                label="Date"
                hint="MM/DD/YYYY format"
                persistent-hint
                prepend-icon="mdi-calendar"
                v-bind="attrs"
                @blur="date = parseDate(dateFormatted)"
                v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
              v-model="date"
              no-title
              @input="menu1 = false"
          ></v-date-picker>
        </v-menu>
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
            type="password"
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
  data: () => ({

  }),
}
</script>



<script>
export default {
  data: vm => ({
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    dateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
    menu1: false,
    menu2: false,
    name: "AccountView",
    items: ['male', 'female'],


  }),

  computed: {
    computedDateFormatted () {
      return this.formatDate(this.date)
    },
  },

  watch: {
    date (val) {
      this.dateFormatted = this.formatDate(this.date)
    },
  },

  methods: {
    formatDate (date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    },
    parseDate (date) {
      if (!date) return null

      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
  },
}
</script>

<style scoped>

</style>