import Vue from "vue";
import Router from "vue-router";
import app from "../app.vue"

Vue.use(Router);

const router = new Router({
	routes:[
		{ path: '/', component: app }

	]
})
export default router;
