<template>
  <nav class="menu">
	  <div class="menu__icon" @click="menuStatus"> <span>&#8801;</span></div>
	  <div class="status-menu" :class="{active: menuActive}">
		<ul>
		  <li><a href="">Homem</a></li>
		  <li><a href="">Mulher</a></li>
		  <li><a href="">Cabelo</a></li>
		  <li><a href="">Dêo-colonia</a></li>
		  <li><a href="">Rosto</a></li>
		  <li><a href="">Pele</a></li>
		  <li><a href="">Novidades</a></li>
	  </ul>

	  </div>

  </nav>
</template>
<script>
export default {
	name: 'top-menu',
	data() {
		return {
			menuActive: false,
		};
	},

	methods: {
		menuStatus() {
			this.menuActive = !this.menuActive;
		},

	},
};
</script>
<style lang="scss">
@import 'menu.scss';

</style>


