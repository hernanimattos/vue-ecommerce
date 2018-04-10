<template>
  <div id="app" class="container">
	<top></top>
	<main-container></main-container>


  </div>
</template>

<script>
import top from './components/header/top.vue';
import mainContainer from './components/container-products/main-container.vue';
// import cfooter from "./components/footer/cfooter";
export default {
	components: {
		top,
		mainContainer,
		// cfooter,
	},
	name: 'app',
	data() {
		return {
			msg: 'Welcome to Your Vue.js App',
		};
	},
};
</script>

<style lang="scss">
@import './assets/scss/index.scss';

</style>
