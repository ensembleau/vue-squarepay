import Vue from 'vue';
import VueResource from 'vue-resource';
import store from './store';
import welcome from '../components/welcome.vue';
import { modal, checkbox } from 'aurora-ui';
import Squarepay from '../components/Squarepay.vue';

Vue.use(VueResource);

new Vue({
	el: '#app',
	store,
	components: { checkbox, modal, welcome, Squarepay }
});
