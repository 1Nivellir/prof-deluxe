<template>
	<main class="main">
		<section class="home__section">
			<div class="container home__container">
				<CommonAside current-page="''" padding-left="0px" />
				<div class="home__content">
					<h1 class="home__title">«МЕЧТА НАЧИНАЕТСЯ С ИДЕИ.</h1>
					<h1 class="home__title">ВАШ УСПЕХ НАЧИНАЕТСЯ С НАШЕГО ПРОЕКТА»</h1>
					<p class="home__descr">
						Комплексное проектирование жилых коммерческих интерьеров, загородных
						домов и малых архитектурных сооружений,ландшафтный дизайн и
						благоустройство территории,строительство и ремонт под ключ в любой
						точке мира
					</p>
				</div>
			</div>
		</section>
	</main>
</template>

<script lang="ts" setup>
const route = useRoute()
onMounted(() => {
	console.log(route)
})
</script>

<style scoped lang="scss">
.main {
	height: 75vh;
	width: 100%;
}
.home {
	&__container {
		display: flex;
	}

	&__descr {
		color: var(--c-white);
		justify-self: flex-end;
		font-family: Roberto Sans;
		font-size: clamp(16px, 5vw, 24px);
		max-width: 848px;
		font-weight: 300;
		line-height: 130%;
		text-align: right;
	}

	&__title {
		position: relative;
		color: var(--c-white);
		font-size: clamp(32px, 6vw, 54px);
		font-weight: 400;
		line-height: 120%;
		text-align: right;
		text-transform: uppercase;

		&::before {
			content: '';
			position: absolute;
			top: 0;
			transform: translateY(-100%);
			right: -2%;
			width: 2px;
			height: 322px;
			background-color: var(--c-active);

			@media screen and (max-width: 640px) {
				display: none;
			}
		}
	}

	&__content {
		position: relative;
		display: grid;
		width: 100%;
		align-content: start;
		align-items: start;
		height: 80vh;
		padding-top: 126px;
		padding-right: 236px;
		background-image: url('/img/home-fon.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;

		@media screen and (max-width: 1200px) {
			padding-right: 0;
			height: 85vh;
		}

		&::before {
			content: '';
			position: absolute;
			top: 18%;
			left: 10%;
			width: 150px;
			height: 2px;
			background-color: var(--c-active);

			@media screen and (max-width: 1300px) {
				top: 60px;
				left: 0;
			}
		}

		&::after {
			content: '';
			position: absolute;
			top: 18%;
			left: 10%;
			width: 2px;
			height: 150px;
			background-color: var(--c-active);

			@media screen and (max-width: 1300px) {
				top: 60px;
				left: 0;
			}
		}
	}

	&__section {
		width: 100%;
		position: relative;

		@media screen and (max-width: 1200px) {
			background-image: url('/img/home-fon.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
		}

		&::before {
			content: '';
			position: absolute;
			bottom: 98px;
			right: 100px;
			width: 150px;
			height: 2px;
			z-index: 100;
			background: var(--c-active);

			@media screen and (max-width: 1510px) {
				bottom: 70px;
				width: 129px;
			}

			@media screen and (max-width: 1200px) {
				bottom: 40px;
				right: 26px;
				width: 96px;
			}
			@media screen and (max-width: 480px) {
				right: 15px;
			}
		}

		&::after {
			content: '';
			position: absolute;
			bottom: 98px;
			right: 100px;
			width: 2px;
			height: 150px;
			z-index: 100;
			background: var(--c-active);

			@media screen and (max-width: 1510px) {
				bottom: 70px;
				height: 129px;
			}

			@media screen and (max-width: 1200px) {
				bottom: 40px;
				right: 26px;
				height: 96px;
			}
			@media screen and (max-width: 480px) {
				right: 15px;
			}
		}
	}
}
</style>
