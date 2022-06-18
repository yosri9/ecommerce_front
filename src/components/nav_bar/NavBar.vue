<template>
  <div>
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

              <router-link style="color: white;   text-decoration: none;
                  " to="About">

                Gender

              </router-link>
            </v-btn>

            <v-btn value="center" class="white--text"
            >
              <router-link style="color: white;   text-decoration: none;
                  " to="About">


                Mark

              </router-link>
            </v-btn>

            <v-btn value="right" class="white--text"
            >

              <router-link style="color: white;   text-decoration: none;
                  " to="About">

                Promotions

              </router-link>
            </v-btn>


            <v-btn value="justify" class="white--text"
            >

              <router-link style="color: white;   text-decoration: none;
                  " to="About">

                About
              </router-link>


            </v-btn>


            <search-component class="mx-10"/>

            <div id="cart-item" class="mx-10  ">
              <v-icon size="25px" color="#9B9BF8" class="cart-column "> mdi-cart-outline</v-icon>


              <h4 STYLE="color: darkgray;"> Cart</h4>

            </div>


            <div id="cart-profile" class="d-inline-flex ml-5">



              <div id="profile" class="profile">
                <AvatarComponent/>


              </div>


            </div>

          </v-btn-toggle>

        </v-toolbar-items>


      </v-toolbar>

      <v-content>
        <router-view/>
      </v-content>
    </v-col>


  </div>
</template>


<script>
import SearchComponent from "@/components/SearchComponent";
import AvatarComponent from "@/components/AvatarComponent";
export default {
  name: "NavBar",
  components: {

    SearchComponent,
    AvatarComponent

  }
}
</script>

<style scoped>
.cart-column {
  margin-right: 56%;
  margin-bottom: 10px;

  padding-top: 39px;


}

h4 {

  color: darkgray;
}

.avatar-nav-bar {

  padding: 15px;
  margin-top: 1px;
  margin-left: 10px;
}


.logo-name {
  margin-right: 50px;
  margin-left: 33px;
  display: inline-flex;

}

</style>