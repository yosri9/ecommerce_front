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
                <form ref="form" @submit.prevent="isRegister ? register() : login()">
                  <v-text-field
                      v-model="username"
                      name="username"
                      label="Username"
                      type="text"
                      placeholder="username"
                      required
                  ></v-text-field>

                  <v-text-field
                      v-model="email"
                      name="email"
                      label="email"
                      type="email"
                      placeholder="email"
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

import axios from "axios";
import router from "@/router";
import {useLoggedInStore} from "@/stores/LoggedInStore";


export default {

  setup(){

   const loggedInStore =  useLoggedInStore()
    const {isLoggedIn} = loggedInStore
    loggedInStore

    return {
      isLoggedIn, loggedInStore
    }


  },



  name: "RegisterView",
  data() {
    return {
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
      isRegister: false,
      errorMessage: "",
      validate: "",
      stateObj: {
        register: {
          name: 'Register',
          message: 'Aleady have an Acoount? login.'
        },
        login: {
          name: 'Login',
          message: 'Register'
        }
      }
    };
  },


  methods: {
    async login() {
      const {username} = this;
      console.log(username + "logged in")
      await axios.post('http://localhost:1337/auth/local/', {
            username: this.username,
            identifier: this.email,
            password: this.password,
            confirmPassword: this.confirmPassword,


          },
      ).then(response => {
        if (response.status == 400) {
          this.errorMessage = "email or username already exists"
        }

        if (response.status == 200) {
          this.errorMessage = ""
          this.loggedInStore.changeState()

          router.push('/')
          console.log(this.isLoggedIn)

        }


      })
          .catch(error => {
            console.log('An error occurred:', error.response);
            this.errorMessage = "Verify your credentials";
          });


    },
    register() {
      if (this.password == this.confirmPassword) {
        this.isRegister = false;
        this.errorMessage = "";
        this.$refs.form.reset();


        axios.post('http://localhost:1337/auth/local/register', {
              username: this.username,
              email: this.email,
              password: this.password,
              confirmPassword: this.confirmPassword,

            },
        )
            .then((response) => {


              if (response.status == 400) {
                this.errorMessage = "email or username already exists"
              }

              if (response.status == 200) {
                this.errorMessage = ""
                this.loggedInStore.changeState()
                console.log(this.isLoggedIn)
                router.push('/')

              }

              // Handle success.
              console.log("username: this.username,\n" +
                  "              email: this.email,\n" +
                  "              password: this.password,\n" +
                  "              confirmPassword: this.confirmPassword");
              console.log('Well done!');
              console.log('User profile', response.data);

              console.log('User profile', response.data.user);

              console.log('User profile', response.data.user);
              console.log('User token', response.data.jwt);
            })
            .catch((error) => {
              // Handle error.
              console.log('An error occurred:', error.response);


            });
      } else {
        this.errorMessage = "password did not match"
      }
    }
  },
  computed: {
    toggleMessage: function () {
      return this.isRegister ? this.stateObj.register.message : this.stateObj.login.message
    }
  }
};
</script>