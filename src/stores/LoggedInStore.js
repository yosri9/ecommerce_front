import {defineStore} from 'pinia'

export const useLoggedInStore = defineStore('loggedInStore', {
    // arrow function recommended for full type inference
    state: () => {
        let isLoggedIn = false;
        if (  localStorage.getItem("token") != null){
            isLoggedIn = true
            isLoggedIn

        }

        return {
            // all these properties will have their type inferred automatically
            isLoggedIn: isLoggedIn,
            name: 'Eduardo',
            isAdmin: true,
        }
    },
    actions: {

        changeState() {
            this.isLoggedIn = !this.isLoggedIn
        }
    }
})
