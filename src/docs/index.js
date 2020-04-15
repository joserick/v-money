import Vue from 'vue'
import vuetify from 'vuetify'
import docs from './docs.vue'
import money from '../index'

Vue.use(vuetify)
Vue.use(money)

const app = new Vue({
	el: '#app',
	render: h => h(docs)
});
