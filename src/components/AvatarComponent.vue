<template>
  <v-container
      fluid
      style="height: 300px"
  >
    <v-row justify="center">
      <v-menu
          bottom
          min-width="200px"
          rounded
          offset-y
      >
        <template v-slot:activator="{ on } ">
          <v-btn
              icon
              x-large
              v-on="on"
          >
            <v-avatar
                color="brown"
                size="30"
            >


              <span class="white--text text-h5">{{ user.initials }}</span>
            </v-avatar>
          </v-btn>
          <h4 class="pr-5 ml-5 pb-10 text-center" style=" color: darkgray; margin-top: inherit;">Profile</h4>

        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar
                  color="brown"
              >
                <span class="white--text text-h5">{{ user.initials }}</span>
              </v-avatar>
              <h3>{{ user.fullName }}</h3>
              <p class="text-caption mt-1">
                {{ user.email }}
              </p>
              <v-divider class="my-3"></v-divider>

              <router-link to="/account" style="text-decoration:none ">

                <v-btn
                    depressed
                    rounded
                    text
                >
                  Account
                </v-btn>

              </router-link>

              <v-divider class="my-3"></v-divider>

              <RouterLink to="/favorite" style="text-decoration:none ">

              <v-btn
                  depressed
                  rounded
                  text
              >
                Favorites
              </v-btn>
              </RouterLink>


              <v-divider class="my-3"></v-divider>
              <router-link to="latest-purchases" style="text-decoration:none ">

                <v-btn
                    depressed
                    rounded
                    text
                >
                  LATEST PURCHASES
                </v-btn>

              </router-link>

              <v-divider class="my-3"></v-divider>

              <router-link to="payment-information" style="text-decoration:none ">
                <v-btn
                    depressed
                    rounded
                    text
                >
                  Payment information
                </v-btn>

              </router-link>


              <v-divider class="my-3"></v-divider>
              <v-btn @click="logout()"
                  depressed
                  rounded
                  text
              >
                Disconnect
              </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
    </v-row>
  </v-container>
</template>
<script>
import {useAuthStore} from "@/stores/AuthStore";
import router from "@/router";

export default {
  name: "AvatarComponent",

  setup() {
    const authStore = useAuthStore()

    const {auth} = authStore

    return {
      auth, authStore
    }

  },

  data: () => ({
    user: {
      initials: 'JD',
      fullName: 'John Doe',
      email: 'john.doe@doe.com',
    },
  }),
  methods:{
    logout(){
      this.authStore.changeState()

      localStorage.removeItem("token");
      router.push("/")
    }

  }
}
</script>
<style scoped>

</style>