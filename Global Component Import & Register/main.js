import Vue from 'vue'
import App from './App.vue'

// Globally Components Import
import Section from './Components/Section.vue'
import Testimonial from './Components/Testimonial.vue'

Vue.config.productionTip = false

// Globally Components Register
Vue.component('app-section',Section);
Vue.component('app-testimonial',Testimonial);  


new Vue({
  render: h => h(App),
}).$mount('#app')
