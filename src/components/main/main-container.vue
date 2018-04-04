<template>
  <div class="main-container">
	  <top-main></top-main>
	  <side-bar></side-bar>
	  <products></products>
	  <bottom></bottom>
	  <tail-bottom></tail-bottom>

  </div>
</template>
<script>

import topMain from "./top/top-main";
import sideBar from "./main/side-bar/side-bar";
import products from "./main/products/products";
import bottom from "./bottom/bottom";
import tailBottom from "./tail-bottom/tail-bottom";


export default {
	components:{
		topMain,
		sideBar,
		products,
		bottom,
		tailBottom,
	},
  name: 'main-container',
  data () {
	  return {

	  }
  }
}
</script>
<style lang="scss">
@import 'main-container.scss';
</style>


