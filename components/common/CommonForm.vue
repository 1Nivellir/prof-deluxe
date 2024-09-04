<template>
	<form class="form">
		<h2 class="form__title">Консультация дизайнера-архитектора</h2>
		<span class="form__subtitle"
			>Специалист свяжется с вами в течение 15 минут</span
		>
		<div class="form__input--wrapper">
			<input type="text" placeholder="Имя" class="form__input" v-model="name" />
			<PrimeInputMask
				id="basic"
				class="form__input"
				v-model="number"
				mask="+7 (999) 999-99-99"
				placeholder="Телефон"
			/>
			<button class="btn-reset form__btn">Перезвоните мне</button>
			<label class="form__checkbox--wrapper">
				<input
					type="checkbox"
					class="form__checkbox--custom"
					v-model="checked"
				/>
				<span class="form__checkbox">
					Я даю согласие на обработку своих персональных данных и
					<NuxtLink to="#">Политикой конфиденциальности</NuxtLink>
				</span>
			</label>
		</div>
	</form>
</template>

<script lang="ts" setup>
const number = ref('')
const name = ref('')
const checked = ref(false)

const isChecked = computed((): string => {
	return checked.value ? '1' : '0'
})
</script>

<style scoped lang="scss">
.form {
	padding-top: 120px;
	padding-bottom: 100px;

	@media screen and (max-width: 960px) {
		padding-top: 80px;
		padding-bottom: 70px;
	}
	&__title {
		color: var(--c-white);
		font-size: clamp(28px, 4vw, 46px);
		font-style: normal;
		font-weight: 400;
		line-height: 110%;
		text-transform: uppercase;
		margin-bottom: 5px;
	}

	&__checkbox {
		color: rgba(255, 255, 255, 0.4);
		font-family: Roberto Sans;
		font-size: 14px;
		font-style: normal;
		font-weight: 300;
		line-height: 135%;

		& a {
			cursor: pointer;
			color: rgba(255, 255, 255, 0.4);
			text-decoration: underline;
			font-family: Roberto Sans;
			font-size: 14px;
			font-style: normal;
			font-weight: 300;
			line-height: 135%;
		}
	}

	&__input {
		border: none;
		border-bottom: 2px solid rgba(255, 255, 255, 0.4);
		background: transparent;
		color: rgb(255, 255, 255);
		font-family: 'Roberto Sans';
		font-size: 22px;
		font-style: normal;
		font-weight: 300;
		line-height: 130%;
		transition: border-bottom 0.3s ease-in-out;

		@media screen and (max-width: 1600px) {
			height: 46px;
		}

		@media screen and (max-width: 960px) {
			grid-column: 1/3;
		}

		&:focus {
			outline: none;
			border-bottom: 2px solid rgba(255, 255, 255, 1);
		}

		&::placeholder {
			color: rgba(255, 255, 255, 0.4);
			font-family: 'Roberto Sans';
			font-size: 22px;
			font-style: normal;
			font-weight: 300;
			line-height: 130%; /* 28.6px */
		}
	}

	&__btn {
		background: #ab9273;
		color: #fff;
		font-family: 'Roberto Sans';
		font-size: clamp(16px, 2vw, 22px);
		font-style: normal;
		font-weight: 400;
		line-height: 120%; /* 26.4px */
		text-transform: uppercase;
		padding: 14px 67px 18px 67px;
		gap: 10px;

		@media screen and (max-width: 960px) {
			padding: 14px 20px 18px 20px;
		}

		@media screen and (max-width: 640px) {
			grid-row: 4/5;
			grid-column: 1/2;
		}
	}

	&__input--wrapper {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		column-gap: 40px;
		row-gap: 20px;

		@media screen and (max-width: 1600px) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media screen and (max-width: 960px) {
			column-gap: 20px;
			row-gap: 30px;
		}

		@media screen and (max-width: 640px) {
			grid-template-columns: 1fr;
		}
	}

	&__subtitle {
		color: rgba(255, 255, 255, 0.6);
		display: block;
		margin-bottom: 20px;
		font-family: 'Roberto Sans';
		font-size: clamp(14px, 3vw, 18px);
		font-style: normal;
		font-weight: 300;
		line-height: 140%;
	}

	&__checkbox--wrapper {
		position: relative;
		grid-column: 3/4;
		grid-row: 2/3;
		padding-left: 36px;

		@media screen and (max-width: 1600px) {
			grid-column: 2/3;
		}

		@media screen and (max-width: 960px) {
			grid-row: 3/4;
		}

		@media screen and (max-width: 640px) {
			grid-column: 1/2;
		}

		&::before {
			position: absolute;
			top: 50%;
			left: 0;
			transform: translateY(-50%);
			content: '';
			width: 26px;
			display: inline-block;
			height: 26px;
			border: 2px solid #ab9273;
			background: transparent;
			z-index: 90;
		}

		&::after {
			content: '';
			position: absolute;
			top: 50%;
			left: 0;
			transform: translateY(-50%);
			width: 26px;
			height: 26px;
			display: inline-block;
			opacity: v-bind(isChecked);
			background-image: url('/svg/checked.svg');
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
			transition: opacity 0.3s ease-in-out;
			z-index: 100;
		}
	}

	&__checkbox--custom {
		opacity: 0;
		position: absolute;
		left: 0;
		top: 0;
	}
}
</style>
