import Vue from 'vue';
import VueResource from 'vue-resource';
import store from './store';
import { modal, checkbox } from 'aurora-ui';
import Squarepay from '../components/Squarepay.vue';

Vue.use(VueResource);

new Vue({
	el: '#app',
	store,
	components: { checkbox, modal, Squarepay },
	data: {
		name : " BUTTON"
	}
});
