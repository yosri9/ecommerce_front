<template>

  <v-col class="pt-16">
    <v-row class="mb-10">

      <v-col cols="2"/>
      <v-col cols="2">
        <v-row align="center" style="place-content: space-between;">
          <!--          <input type="file" ref="file" style="display: none"  accept="image/*" id="upload" onchange="this.uploadImage()">-->


          <ProfileImage :image-url="imageUrl"/>




          <div class="font-weight-bold"> {{ this.first_name}} {{last_name}}</div>
        </v-row>


      </v-col>


    </v-row>


    <v-row id="first_name" class="align-baseline">
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
            v-model="first_name"

        >

        </v-text-field>
      </v-col>


    </v-row>
    <v-row id="last_name" class="align-baseline">
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
            v-model="last_name"
        >

        </v-text-field>
      </v-col>


    </v-row>
    <v-row id="gender" class="align-baseline">
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
            v-model="gender"
            :items="items"
            outlined
        >male
        </v-select>
      </v-col>

    </v-row>
    <v-row id="phone_number" class="align-baseline">
      <v-col cols="2"/>
      <v-col cols="2">
        <div class="font-weight-bold">Phone Number:</div>


      </v-col>
      <v-col
          cols="12"
          sm="6"
          md="4"
      >
        <vue-tel-input-vuetify defaultCountry="TN" outlined dense :disabledFetchingCountry = "true"   v-model="phone_number" />


      </v-col>


    </v-row>

    <v-row id="country" class="align-baseline">
      <v-col cols="2"/>
      <v-col cols="2">
        <div class="font-weight-bold">Country:</div>


      </v-col>
      <v-col
          cols="12"
          sm="6"
          md="4"
      >
        <v-country-select countryName="true" outlined v-model="country"/>


      </v-col>


    </v-row>

    <v-row id="state" class="align-baseline">
      <v-col cols="2"/>
      <v-col cols="2">
        <div class="font-weight-bold">State:</div>


      </v-col>
      <v-col
          cols="12"
          sm="6"
          md="4"
      >
        <v-region-select outlined countryName="true" regionName="true" v-model="region" :country="country"/>

      </v-col>


    </v-row>


    <v-row id="birthday_date" class="align-baseline">
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
                v-model="birthday_date"
                label="Date"
                persistent-hint
                prepend-icon="mdi-calendar"
                v-bind="attrs"
                @blur="birthday_date = parseDate(birthday_date)"
                v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
              v-model="birthday_date"
              no-title
              @input="menu1 = false"
          ></v-date-picker>
        </v-menu>
      </v-col>


    </v-row>


    <v-row id="password" class="align-baseline">
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

    <v-row id="update" class="justify-center">

      <v-btn
          class="ma-2"
          :loading="loading"
          :disabled="loading"
          color="success"
          @click="loader = 'loading'"
      >
        UPDATE
      </v-btn>
    </v-row>


  </v-col>


</template>


<script>

import ProfileImage from "@/components/ProfileImage";

const {useAccountStore} = require("@/stores/account-store");
const {useImageStore} = require("@/stores/image-store")
import {storeToRefs} from "pinia";
import NProgress from "nprogress"
import VueTelInputVuetify from "vue-tel-input-vuetify/lib/vue-tel-input-vuetify.vue"

export default {


  components: {ProfileImage,     VueTelInputVuetify,
  },
  setup() {
    const accountStore = useAccountStore()
    const imageStore = useImageStore()


    const {
      first_name,
      last_name,
      gender,
      phone_number,
      country,
      region,
      birthday_date,
      loading,
      imageUrl,
      image
    } = storeToRefs(accountStore)

    const { avatar_image_id } = imageStore

    return {
      accountStore,
      first_name, last_name, gender, phone_number, country, region, birthday_date, loading, imageUrl, image, avatar_image_id
    }
  },


  async beforeRouteEnter(to, from, next) {
    const {useAccountStore} = require("@/stores/account-store");
    const accountStore = useAccountStore()


    NProgress.start()

    accountStore.fetchAccountData().then(() => {
          NProgress.done()

          next()


        }
    )


  },


  data: vm => ({
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    dateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
    menu1: false,
    menu2: false,
    name: "AccountView",
    items: ['male', 'female'],
    loader: null,
    // eslint-disable-next-line no-undef,vue/no-dupe-keys


  }),


  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date)
    },


  },

  watch: {
    date(val) {
      val
      this.dateFormatted = this.formatDate(this.date)
    },

    loader() {
      const accountStore = useAccountStore()
      accountStore.updateAccount()
      console.log(this.previews)


      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 3000)

      this.loader = null

    },

  },

  methods: {


    onFileChange(item, e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(item, files[0]);
    },
    createImage(item, file) {
      this.image = new Image();
      var reader = new FileReader();

      reader.onload = (item, e) => {
        item.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (item) {
      item.image = false;
    },


    formatDate(date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    },
    parseDate(date) {
      if (!date) return null

      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },


  },


}
</script>

<style scoped>

</style>