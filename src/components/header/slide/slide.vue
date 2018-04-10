<template>
  <div class="slide">
	  <div class="controls">
		  <div class="left" @click="left">left</div>
		  <div class="right" @click="right">right</div>
	  </div>
	  <div class="slide__wrapper">
		  <div class="slide__item">
			  <img src="../../../assets/images/slide-um.jpg" alt="">
		  </div>
		  	  <div class="slide__item">
			    <img src="../../../assets/images/slide-2.jpg" alt="">
		  </div>
		  	  <div class="slide__item">
			    <img src="../../../assets/images/slide-2.jpg" alt="">
		  </div>
		    	  <div class="slide__item">
			    <img src="../../../assets/images/slide-2.jpg" alt="">
		  </div>
	  </div>
  </div>
</template>
<script>
export default {
	name: 'slide',
	data() {
	  return {
			currentSlide: 1,
			countSlide: 0,

	  };
	},
	methods: {
		slideWrapper() {
			const wrapperSlide = document.querySelector('.slide__wrapper');
			const slideItem = document.querySelectorAll('.slide__wrapper .slide__item').length;

			wrapperSlide.style.width = `${slideItem * 100}%`;

			return 	wrapperSlide.style.width;
		},
		slideItem() {
			const slideCount = document.querySelectorAll('.slide__wrapper .slide__item ').length;
			const slide = document.querySelectorAll('.slide__wrapper .slide__item ');
			const slideElelements = Array.from(slide);
			slideElelements.map((s, i) => {
				slide[i].style.width = `${100 / slideCount}%`;
			});
		},
		productWidth() {
			const element = document.querySelector('.slide__wrapper .slide__item');

			return element.offsetWidth;
		},

		right() {
			const productsWarapper = document.querySelector('.slide__wrapper ');
			const qtdSlide = document.querySelectorAll('.slide__wrapper .slide__item').length;

			if (this.currentSlide < qtdSlide) {
				this.countSlide = this.countSlide + 1;
				this.currentSlide = this.currentSlide + 1;

				const left = this.productWidth() * this.countSlide;
				productsWarapper.style.marginLeft = `-${left}px`;
			} else {
				this.currentSlide = 1;
				this.countSlide = 0;
				productsWarapper.style.marginLeft = '0px';
			}
		},
		left() {
			const productsWarapper = document.querySelector('.slide__wrapper ');

			if (this.currentSlide > 1) {
				this.countSlide = this.countSlide - 1;
				this.currentSlide = this.currentSlide - 1;
				let l = productsWarapper.style.marginLeft.split('-');
				l = l[1].split('px');
				const left = this.productWidth() - parseInt(l[0], 10);

				productsWarapper.style.marginLeft = `${left}px`;
			}
		},
	},
	mounted() {
		this.slideWrapper();
		this.slideItem();
	},
};
</script>
<style lang="scss">
@import '_slide.scss';

</style>


