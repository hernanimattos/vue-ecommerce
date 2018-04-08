<template>
	<div class="main-bottom">
		<div class="top-section">
			<h3>Produtos mais vistos</h3>
		</div>
		<div class="more-view__products">
			<div class="controls">
					<span @click="before">before</span>
					<span @click="next">next</span>
				</div>
			<div class="more-view__products-wrapper">

				<div class="product">
					<div class="product__img">
						<img src="../../../assets/images/deso.png" alt="">
					</div>
					<span class="product__delivery">Frete grátis</span>
					<h4 class="product__name"><a href=""> Desodorante Spray Masculino 90ml </a></h4>
					<p class="product__description">lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur</p>
					<span class="product__from--value">De: R$ 150,00</span>
					<span class="product__to--value">Por: R$ 80,00</span>
					<span class="product__details">+detalhes</span>
					<a href="#" class="btn btn-by"><img src="../../../assets/images/btn-by.png" alt=""></a>
				</div>
				<div class="product">
					<div class="product__img">
						<img src="../../../assets/images/deso.png" alt="">
					</div>
					<span class="product__delivery">Frete grátis</span>
					<h4 class="product__name"><a href=""> Desodorante Spray Masculino 90ml </a></h4>
					<p class="product__description">lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur</p>
					<span class="product__from--value">De: R$ 150,00</span>
					<span class="product__to--value">Por: R$ 80,00</span>
					<span class="product__details">+detalhes</span>
					<a href="#" class="btn btn-by"><img src="../../../assets/images/btn-by.png" alt=""></a>
				</div>
				<div class="product">
					<div class="product__img">
						<img src="../../../assets/images/deso.png" alt="">
					</div>
					<span class="product__delivery">Frete grátis</span>
					<h4 class="product__name"><a href=""> Desodorante Spray Masculino 90ml </a></h4>
					<p class="product__description">lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur</p>
					<span class="product__from--value">De: R$ 150,00</span>
					<span class="product__to--value">Por: R$ 80,00</span>
					<span class="product__details">+detalhes</span>
					<a href="#" class="btn btn-by"><img src="../../../assets/images/btn-by.png" alt=""></a>
				</div>
				<div class="product">
					<div class="product__img">
						<img src="../../../assets/images/deso.png" alt="">
					</div>
					<span class="product__delivery">Frete grátis</span>
					<h4 class="product__name"><a href=""> Desodorante Spray Masculino 90ml </a></h4>
					<p class="product__description">lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur</p>
					<span class="product__from--value">De: R$ 150,00</span>
					<span class="product__to--value">Por: R$ 80,00</span>
					<span class="product__details">+detalhes</span>
					<a href="#" class="btn btn-by"><img src="../../../assets/images/btn-by.png" alt="">
					</a>
				</div>
				<div class="product">
					<div class="product__img">
						<img src="../../../assets/images/deso.png" alt="">
					</div>
					<span class="product__delivery">Frete grátis</span>
					<h4 class="product__name"><a href=""> Desodorante Spray Masculino 90ml </a></h4>
					<p class="product__description">lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur</p>
					<span class="product__from--value">De: R$ 150,00</span>
					<span class="product__to--value">Por: R$ 80,00</span>
					<span class="product__details">+detalhes</span>
					<a href="#" class="btn btn-by"><img src="../../../assets/images/btn-by.png" alt="">
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'bottom',
		data() {
			return {};
		},
		methods: {
			productWidth() {
				const element = document.querySelector('.more-view__products-wrapper .product ');
				const elementWidth = element.clientWidth;
				const elementPadding = window.getComputedStyle(element, null).padding.split('px');
				return elementWidth + parseInt(elementPadding, 10);
			},
			whidthWrapper() {
				this.$nextTick(() => {
					const wrapperSlide = document.querySelector('.more-view__products-wrapper ');
					const wrapperSlideLength = document.querySelectorAll('.more-view__products-wrapper .product ').length;
					const widthWrapper = this.productWidth() * wrapperSlideLength;
					wrapperSlide.style.width = `${widthWrapper}px`;
				});
			},
			before() {
				const productsWarapper = document.querySelector('.more-view__products-wrapper');
				console.log(productsWarapper.style, 'style');
				// `-${this.productWidth()}px`
				// console.log(productsWarapper.style.marginLeft , 'sss');

				productsWarapper.style.marginLeft = `-${this.productWidth()}px`;
				console.log(productsWarapper.style.marginLeft, 'eee');
			},
			next() {

			},
		},
		mounted() {
			this.whidthWrapper();
		},

	};
</script>

<style lang="scss">
	@import 'moreviewproducts.scss';

</style>


