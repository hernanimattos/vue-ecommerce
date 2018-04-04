<template>
  <div id="app">
	<top></top>
	<main-container></main-container>
	<cfooter></cfooter>

  </div>
</template>

<script>
import top from "./components/header/top.vue";
import mainContainer from "./components/main/main-container.vue";
import cfooter from "./components/footer/cfooter";
export default {
	components: {
		top,
		mainContainer,
		cfooter,
	},
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">

</style>
