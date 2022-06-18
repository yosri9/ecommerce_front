<template>
  <v-app >
    <v-col cols="12" order-sm="4">

      <v-toolbar app color="black" light>
        <v-toolbar-title class="headline text-uppercase font-weight-bold text-sm-h6">
          <v-row>

            <router-link style="color: white;   text-decoration: none;
                  " to="/">

              <div id="logo-name" class="logo-name align-content-center my-8 mx-8"
                   style="display: inline-flex;size: 20px">

                <h1 style="color: white">Cactus</h1>
                <h1 style="color: #0F0FD2">Sport</h1>


              </div>
            </router-link>
            <div style="  padding: 10px; padding-right: 30px; margin: 10px 0">

              <v-divider vertical class="border-3" style="border-color: grey !important; "
              ></v-divider>
            </div>


          </v-row>

        </v-toolbar-title>
        <v-toolbar-items class="hidden-sm-and-down">


          <v-btn-toggle
              v-model="text"
              tile
              color="deep-purple accent-3"
              group background-color="white"
              class="white--text"
          >
            <v-btn value="left" class="white--text"
            >




            <NavBarDropDown type="Men"/>

            </v-btn>

            <v-btn value="center" class="white--text"
            >
              <NavBarDropDown type="Women"/>

            </v-btn>

            <v-btn value="right" class="white--text"
            >
              <NavBarDropDown type="Brands"/>


            </v-btn>


            <v-btn value="justify" class="white--text"
            >

              <NavBarDropDown type="promotion"/>



            </v-btn>


            <search-component class="mx-10"/>

            <div id="cart-profile" class="d-inline-flex ml-5">

              <router-link to="/cart" style="text-decoration: none">


                <div id="cart-item" class="mx-10 mt-1">
                  <v-icon size="25px" color="#9B9BF8" class="cart-column mt-3"> mdi-cart-outline</v-icon>


                  <h4 STYLE="color: darkgray ;"> Cart</h4>

                </div>
              </router-link>

              <div id="profile" class="profile" v-show="auth" >
                <AvatarComponent/>


              </div>

              <router-link class="align-baseline" to="register" style="text-decoration:none" v-show="!auth">

                <div style="text-align: -webkit-center">


                  <v-icon size="25px" color="#9B9BF8" class="cart-column mt-4">
                    mdi-power

                  </v-icon>

                  <v-btn
                      depressed
                      rounded
                      text
                      color="grey"
                      class="font-weight-bold pb-6"
                  >
                    Login
                  </v-btn>

                </div>

              </router-link>


            </div>


          </v-btn-toggle>

        </v-toolbar-items>


      </v-toolbar>


      <v-main>
        <router-view/>
      </v-main>


      <CenteredDivider/>

      <NewsLetter class="center"/>
      <FooterComponent/>
    </v-col>

  </v-app>
</template>

<script>




import SearchComponent from "@/components/SearchComponent";
import AvatarComponent from "@/components/AvatarComponent";
import FooterComponent from "@/components/FooterComponent";
import NewsLetter from "@/components/NewsLetter";
import CenteredDivider from "@/components/CenteredDivider";
import {useAuthStore} from "@/stores/auth-store";
import {storeToRefs} from "pinia";
import NProgress from "nprogress"
import NavBarDropDown from "@/components/nav_bar/NavBarDropDown";


export default  {



  setup() {
    const authStore = useAuthStore()

    const {auth} = storeToRefs(authStore)

    return {
      auth,
    }

  },



  name: "App",

  components: {
    NavBarDropDown,
    FooterComponent,
    AvatarComponent,
    SearchComponent,
    NewsLetter,
    CenteredDivider,

    // eslint-disable-next-line vue/no-unused-components

  },

  data() {
    return {

    };


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



};
</script>
