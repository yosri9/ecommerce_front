import {defineStore} from 'pinia'

export const useLoggedInStore = defineStore('loggedInStore', {
    // arrow function recommended for full type inference
    state: () => {
        return {
            // all these properties will have their type inferred automatically
            isLoggedIn: false,
            name: 'Eduardo',
            isAdmin: true,
        }
    },
    actions: {

        changeState() {
            this.isLoggedIn = true
        }
    }
})
