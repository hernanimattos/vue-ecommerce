<template>
  <div class="main-container">
	  <top-main></top-main>
	  <div class="wrapper-products">
		  <div class="wrapprer-products__item">
			  	<side-bar></side-bar>
		  </div>
		  <div class="wrapprer-products__item">
			  <products></products>
		  </div>
	  </div>

	  <moreViewProducts></moreViewProducts>
	  <tail-bottom></tail-bottom>

  </div>
</template>
<script>

import topMain from "./top/top-main.vue";
import sideBar from "./main/side-bar/side-bar.vue";
import products from "./main/products/products.vue";
import moreViewProducts from "./bottom/more-view-products.vue";
import tailBottom from "./tail-bottom/tail-bottom.vue";


export default {
	components:{
		topMain,
		sideBar,
		products,
		tailBottom,
		moreViewProducts,

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


