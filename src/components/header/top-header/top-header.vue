<template>
  <div class="top-header">
	 <div class="top-header__item top-header_logo">
		 <a href="" ><img src="../../../assets/images/logo.png" alt=""></a>
	 </div>
	 <div class="top-header__item top-header__welcome">
		<p>Olá visitante, Bem vindo</p>
		<p>Faça seu login <a href="" class="link-distak">aqui</a> ou <a href="" class="link-distak">cadastre-se</a></p>
		<fieldset >
			<form action="">
				<input type="text"><button class="btn btn-green">buscar</button>
			</form>
		</fieldset>
	 </div>
	 <div class="top-header__item top-header__bagage ">
		 <p class="top-header__bagage--itens">
			 <a href="" class="link-distak">Minha sacola</a> <span>0 itens | 0,00</span>
			 </p>
		 <ul class="top-header__bagage--options">
			 <li><a href="">Meus Pedidos</a></li>
			 <li><a href="">Meu cadastro</a></li>
		 </ul>
		 <ul class="top-header__bagage--options">
			 <li><a href="">Atendimento</a></li>
			 <li><a href="">Lista de desejos</a></li>
		 </ul>
	 </div>
  </div>
</template>
<script>
export default {
	name: 'top-header',
	data() {
	  return {

	  };
	},
};
</script>
<style lang="scss">
@import 'topheader.scss';

</style>


