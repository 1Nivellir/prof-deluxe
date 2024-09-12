<template>
	<div class="contact">
		<h1 class="contact__title title">
			Контакты

			<svg
				class="contact__decor-bottom"
				xmlns="http://www.w3.org/2000/svg"
				width="129"
				height="129"
				viewBox="0 0 129 129"
				fill="none"
			>
				<path
					d="M-5.96046e-07 128H128V9.53674e-07"
					stroke="#AB9273"
					stroke-width="2"
				/>
			</svg>
		</h1>
		<div class="contact__wrapper">
			<svg
				class="contact__decor-top"
				xmlns="http://www.w3.org/2000/svg"
				width="129"
				height="129"
				viewBox="0 0 129 129"
				fill="none"
			>
				<path d="M129 1H1V129" stroke="#AB9273" stroke-width="2" />
			</svg>
			<svg
				class="contact__decor-bottom-2"
				xmlns="http://www.w3.org/2000/svg"
				width="129"
				height="129"
				viewBox="0 0 129 129"
				fill="none"
			>
				<path
					d="M-5.96046e-07 128H128V9.53674e-07"
					stroke="#AB9273"
					stroke-width="2"
				/>
			</svg>
			<address class="contact__item">
				<h3 class="contact__subtitle">Адрес</h3>
				<span class="contact__descr">
					{{ item.ADDRESS }}
				</span>
			</address>
			<address class="contact__item">
				<h3 class="contact__subtitle">Режим работы</h3>
				<span class="contact__descr" v-html="item.MODE"> </span>
			</address>
			<address class="contact__item">
				<h3 class="contact__subtitle">Телефон</h3>
				<a
					:href="`tel:${item}`"
					class="contact__descr"
					v-for="(item, index) in item.PHONE"
					:key="index"
				>
					{{ item }}
				</a>
			</address>
			<address class="contact__item">
				<h3 class="contact__subtitle">E-mail</h3>
				<a class="contact__descr" :href="`mailto:${item.EMAIL}`">
					{{ item.EMAIL }}
				</a>
			</address>
		</div>
		<div class="contact__social">
			<h2 class="contact__social-title">МЫ В СОЦИАЛЬНЫХ СЕТЯХ</h2>
			<ul class="contact__list list-reset">
				<li
					class="contact__item"
					v-for="(item, index) in item.SOCIAL"
					:key="index"
				>
					<a href="{{ item.LINK }}" class="contact__social_link">
						{{ item.NAME }}
					</a>
				</li>
			</ul>
		</div>
	</div>
	<CommonForm />
</template>

<script lang="ts" setup>
const { $api } = useNuxtApp()
const useRepo = repositoryApi($api)

const { data } = await useAsyncData('contacts', async () =>
	useRepo.getContacts()
)
const item = computed(() => data.value.data.result[0])
</script>

<style lang="scss" scoped>
.contact {
	&__subtitle {
		margin-bottom: 10px;
		color: #ab9273;
		font-family: 'Roberto Sans';
		font-size: clamp(18px, 2vw, 24px);
		font-style: normal;
		font-weight: 500;
		line-height: 130%;
	}

	&__item {
		display: flex;
		flex-direction: column;
	}

	&__descr {
		text-decoration: none;
		color: #fff;
		font-family: 'Roberto Sans';
		font-size: clamp(14px, 1.5vw, 18px);
		font-style: normal;
		font-weight: 300;
		line-height: 140%;
	}

	&__wrapper {
		margin-bottom: 90px;
		max-width: max-content;
		position: relative;
		padding: 40px;
		padding-left: 30px;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 20px;
		justify-content: start;

		@media screen and (max-width: 1200px) {
			padding: 20px;
		}

		@media screen and (max-width: 960px) {
			grid-template-columns: repeat(2, 1fr);
			max-width: 100%;
		}

		@media screen and (max-width: 640px) {
			grid-template-columns: repeat(1, 1fr);
		}
	}

	&__social-title {
		color: #fff;
		margin-bottom: 30px;
		font-family: Akrobat;
		font-size: clamp(28px, 3vw, 46px);
		font-style: normal;
		font-weight: 400;
		line-height: 110%;
		text-transform: uppercase;
	}

	&__decor-top {
		position: absolute;
		top: 0;
		left: 0;
	}

	&__list {
		max-width: max-content;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 60px;

		@media screen and (max-width: 960px) {
			grid-template-columns: repeat(2, 1fr);
			gap: 20px 40px;
		}
	}

	&__social_link {
		text-decoration: none;
		color: #ab9273;
		font-family: Akrobat;
		font-size: clamp(28px, 3vw, 46px);
		font-style: normal;
		font-weight: 400;
		line-height: 110%;
		text-transform: uppercase;
	}

	&__decor-bottom {
		position: absolute;
		bottom: -257%;
		right: 23%;
		@media screen and (max-width: 1790px) {
			right: 19%;
		}
		@media screen and (max-width: 1659px) {
			right: -2%;
		}
		@media screen and (max-width: 960px) {
			display: none;
		}
	}

	&__decor-bottom-2 {
		display: none;

		@media screen and (max-width: 960px) {
			position: absolute;
			display: block;
			bottom: 0;
			right: -2%;
		}
	}
}
</style>
