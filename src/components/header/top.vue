<template>
  <div class="top">
	  <top-header></top-header>
	  <top-menu></top-menu>
	  <slide></slide>

  </div>
</template>
<script>
import topHeader from "./top-header/top-header";
import slide from "./slide/slide";
import topMenu from "./menu/top-menu";
export default {
	components:{
		topHeader,
		slide,
		topMenu,
	},
  name: 'top',
  data () {
	  return {

	  }
  }
}
</script>
<style lang="scss">
@import 'top.scss';
</style>


