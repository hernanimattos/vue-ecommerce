<template>
	<div class="main-bottom">
		<div class="top-section">
			<h3>Produtos mais vistos</h3>
		</div>
		<div class="more-view__products">
			<div class="controls">
					<span @click="before" class="left">before</span>
					<span @click="next" class="right">next</span>
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
			return {
				countSlide: 0,
				currentSlide: 4,

			};
		},
		methods: {
			productWidth() {
				const element = document.querySelector('.more-view__products-wrapper .product');

				return element.offsetWidth;
			},
			wrapper() {
				const wrapperSlide = document.querySelector('.more-view__products');

				const widthWrapper = this.productWidth() * 4;
				wrapperSlide.style.width = `${widthWrapper}px`;

				return 	wrapperSlide.style.width;
			},
			whidthWrapper() {
				const wrapperSlide = document.querySelector('.more-view__products-wrapper');
				const wrapperSlideLength = document.querySelectorAll('.more-view__products-wrapper .product ').length;

				const widthWrapper = this.productWidth() * wrapperSlideLength;
				wrapperSlide.style.width = `${widthWrapper}px`;

				return wrapperSlide.style.width;
			},
			next() {
				const productsWarapper = document.querySelector('.more-view__products-wrapper');
				const qtdSlide = document.querySelectorAll('.more-view__products-wrapper .product').length;


				if (this.currentSlide < qtdSlide) {
					this.countSlide = this.countSlide + 1;
					this.currentSlide = this.currentSlide + 1;

					const left = this.productWidth() * this.countSlide;
					productsWarapper.style.marginLeft = `-${left}px`;
					console.log(this.currentSlide, qtdSlide);
				} else {
					this.currentSlide = 4;
					this.countSlide = 0;
					productsWarapper.style.marginLeft = '0px';

				}
			},
			before() {
				const productsWarapper = document.querySelector('.more-view__products-wrapper');
				const qtdSlide = document.querySelectorAll('.more-view__products-wrapper .product').length;

				if (this.currentSlide > 4) {
					this.countSlide = this.countSlide - 1;
					this.currentSlide = this.currentSlide - 1;
					let l = productsWarapper.style.marginLeft.split('-');
					l = l[1].split('px');
					const left = this.productWidth() - parseInt(l[0]);

					productsWarapper.style.marginLeft = `${left}px`;

				}
			},
		},
		mounted() {
			this.wrapper();
			this.whidthWrapper();
		},

	};
</script>

<style lang="scss">
	@import 'moreviewproducts.scss';

</style>


