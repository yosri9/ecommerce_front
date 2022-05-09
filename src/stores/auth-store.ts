import {defineStore} from 'pinia'
import axios from "axios";
import router from "../router";
import { AuthApi } from '@/services/Api/auth-api';
import {CartApi} from "@/services/Api/cart-api";
import {Favorite} from "@/Model/favourite";
import {FavouriteApi} from "@/services/Api/favourite-api";
import {Cart} from "@/Model/cart";
import {User} from "@/Model/user";

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
            email:"flutter@gmail.com",
            identifier:"flutter@gmail.com",
            password:"password",
            confirmPassword:"password",
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
            const authApi = new AuthApi()

            await authApi.SignIN(this.identifier, this.password).then(response => {
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
        async register() {

            console.log("hello again")

            if (this.password == this.confirmPassword) {
                this.isRegister = false;
                this.errorMessage = "";





                const authApi = new AuthApi()

                await authApi.SignUp(this.username, this.email, this.password, this.confirmPassword).then(async (response) => {


                    if (response.status == 400) {
                        this.errorMessage = "email or username already exists"
                    }

                    let response2;
                    if (response.status == 200) {
                        this.errorMessage = ""
                        this.changeState()
                        localStorage.setItem("token", response.data["jwt"])

                        const currentUser = response.data["user"] as User


                        const cartApi = new CartApi()
                        const cart = new Cart()
                        cart.user = currentUser.id

                        response2 = await cartApi.create(cart)

                        console.log(response2)

                        const favorite= new Favorite()
                        favorite.user = currentUser.id
                        const favoriteApi = new FavouriteApi()

                        await favoriteApi.create(favorite)


                        console.log(response.data)
                        console.log(this.auth)
                        await router.push('/')

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
        },


        async logout(){
            this.changeState()

            localStorage.removeItem("token");
            await router.push("/")
        }

    },

},



)
