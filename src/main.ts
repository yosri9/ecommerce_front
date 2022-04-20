import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'



import router from "./router"
// @ts-ignore
import VueRouteMiddleware from 'vue-route-middleware';

router.beforeEach(VueRouteMiddleware())

/* add icons to the library */
library.add(faUserSecret)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)


import {createPinia, PiniaVuePlugin} from 'pinia'

Vue.use(PiniaVuePlugin)
const pinia = createPinia()

Vue.config.productionTip = false






new Vue({
// @ts-ignore

  vuetify,
  router,
  pinia,
  render: h => h(App)
}).$mount('#app')
