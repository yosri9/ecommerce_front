<template>
  <v-app>
    <v-main>

      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>{{ isRegister ? stateObj.register.name : stateObj.login.name }}</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <form ref="form" @submit.prevent="isRegister ? authStore.register() : authStore.login() ">
                  <v-text-field v-if="isRegister"
                                v-model="username"
                                name="username"
                                label="Username"
                                type="text"
                                placeholder="username"
                                required
                  ></v-text-field>

                  <v-text-field v-if="isRegister"
                      v-model="email"
                      name="email"
                      label="email"
                      type="email"
                      placeholder="email"
                      required
                  ></v-text-field>

                  <v-text-field v-if="!isRegister"
                                v-model="identifier"
                                name="identifier"
                                label="email or username"
                                type="text"
                                placeholder="email or username"
                                required
                  ></v-text-field>

                  <v-text-field
                      v-model="password"
                      name="password"
                      label="Password"
                      type="password"
                      placeholder="password"
                      required
                  ></v-text-field>


                  <v-text-field v-if="isRegister"
                                v-model="confirmPassword"
                                name="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                placeholder="cocnfirm password"
                                required
                  ></v-text-field>
                  <div class="red--text"> {{ errorMessage }}</div>
                  <v-row class="pb-5 px-10">


                    <v-btn type="submit" class="mt-4" color="primary" value="log in">
                      {{ isRegister ? stateObj.register.name : stateObj.login.name }}
                    </v-btn>

                    <v-spacer/>
                    <div class="grey--text mt-4" v-on:click="isRegister = !isRegister;">
                      <a href="#" class="text-decoration-none grey--text">
                        {{ toggleMessage }}


                      </a>
                    </div>

                  </v-row>
                </form>
              </v-card-text>
            </v-card>

          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import {useAuthStore} from "@/stores/auth-store";

const {storeToRefs} = require("pinia");


export default {

  setup() {

    const authStore = useAuthStore()
    const {
      auth, username,
      email,
      identifier,
      password,
      confirmPassword,
      errorMessage,
      isRegister,
      validate,
      stateObj,
    } = storeToRefs(authStore)

    return {
      authStore, auth,
      username,
      email,
      identifier,
      password,
      confirmPassword,
      errorMessage,
      isRegister,
      validate,
      stateObj,
    }


  },


  name: "RegisterView",




  methods: {},
  computed: {
    toggleMessage: function () {
      return this.isRegister ? this.stateObj.register.message : this.stateObj.login.message
    }
  }
};
</script>

