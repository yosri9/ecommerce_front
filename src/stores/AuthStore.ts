import {defineStore} from 'pinia'
import axios from "axios";
import router from "../router";

export const useAuthStore = defineStore('authStore', {
    // arrow function recommended for full type inference
    state: () => {
        let auth = false;
        if (  localStorage.getItem("token") != null){
            auth = true


        }

        return {
            // all these properties will have their type inferred automatically
            auth: auth,
            username: 'Eduardo',
            email:"",
            identifier:"flutter@gmail.com",
            password:"password",
            confirmPassword:"",
            errorMessage:"",
            isRegister:false,
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
        }
    },





    actions: {

        changeState() {
            this.auth = !this.auth
        },

        async login() {

            await axios.post('http://localhost:1337/auth/local/', {
                    username: this.username,
                    identifier: this.identifier,
                    password: this.password,
                    confirmPassword: this.confirmPassword,


                },
            ).then(response => {
                if (response.status == 400) {
                    this.errorMessage = "email or username already exists"
                }

                if (response.status == 200) {
                    this.errorMessage = ""
                    this.changeState()
                    localStorage.setItem("token",response.data["jwt"])
                    console.log(localStorage.getItem("token"))
                    router.push('/')
                    console.log(this.auth)

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
                            this.changeState()
                            localStorage.setItem("token",response.data["jwt"])
                            console.log(response.data)
                            console.log(this.auth)
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

},



)
