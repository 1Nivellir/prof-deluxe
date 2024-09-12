<template>
	<div
		class="service__wrapper company"
		:style="{ backgroundImage: `url('/img/bg-company.jpg')` }"
	>
		<h1 class="company__title title">О компании</h1>
		<div class="company__text">
			<p class="company__description">
				Студия дизайна и архитектуры PROFDELUXE предлагает полный спектр услуг
				от концепции до реализации в строительстве, дизайне интерьера и
				ландшафтном дизайне, включая управление проектами.
			</p>
			<p class="company__description">
				Используя наши знания и опыт помогаем пройти процессы без волнений,
				освобождая от поиска дополнительных подрядчиков, походов по магазинам и
				присутствия на строке. При выборе материалов ориентируемся на ваш
				бюджет, исключая неоправданные затраты.
			</p>
			<p class="company__description">
				Немалый опыт работы позволяет нам легко решать поставленные задачи,
				следовать тенденциям дизайна и архитектуры. Мы создаем стильные,
				современные и запоминающиеся интерьеры, которые подчеркивают социальный
				статус и ваш безукоризненный вкус.
			</p>
		</div>
	</div>
	<div class="company__detail">
		<div class="company__left">
			<h2 class="company__subtitle">Татьяна Максакова</h2>
			<span class="company__subdescription"
				>Ведущий дизайнер и основатель студии</span
			>
			<p class="company__info">
				«Дизайнер-психолог, который разбирается в стройке»
			</p>
			<div class="company__descr">
				<p>
					Моя цель — сделать ваш дом таким местом, куда хочется возвращаться.
					Местом получения энергии и силы, физического и психологического
					здоровья. Где вы полноценно отдыхаете и, при необходимости,
					продуктивно работаете. Где дети творчески развиваются, могут легко
					сконцентрироваться на уроках, хорошо высыпаются. Где царит
					благоприятная атмосфера в доме.
				</p>
				<p>
					Мои знания и опыт в сферах маркетинга и продаж помогают спроектировать
					помещения и задекорировать витрины, привлекающие целевую аудиторию и
					повышающие продажи вашего бизнеса.
				</p>
				<p>
					Лично веду проекты, чтобы ни одна деталь не была упущена. Помогаю
					сэкономить на приобретении материалов и мебели. Наша команда
					строителей соблюдает обязательные требования к качеству выполненных
					работ, действующие в РФ строительные нормы и правила.
				</p>
				<p>
					Название PROFDELUXE отражает суть работы — профессиональный подход при
					создании проектов повышенной комфортности.
				</p>
			</div>
		</div>
		<div class="company__right">
			<svg
				class="company__decor-top"
				xmlns="http://www.w3.org/2000/svg"
				width="81"
				height="81"
				viewBox="0 0 81 81"
				fill="none"
			>
				<path d="M1 81V1H81" stroke="#AB9273" stroke-width="2" />
			</svg>
			<svg
				class="company__decor-bottom"
				xmlns="http://www.w3.org/2000/svg"
				width="81"
				height="81"
				viewBox="0 0 81 81"
				fill="none"
			>
				<path
					d="M80 -2.38419e-06V80H-2.38419e-06"
					stroke="#AB9273"
					stroke-width="2"
				/>
			</svg>
			<div class="company__wrapper-img"></div>
		</div>
	</div>
	<div class="company__form">
		<CommonForm />
	</div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.company {
	&__description {
		color: #fff;
		font-family: 'Roberto Sans';
		font-size: clamp(16px, 4vw, 24px);
		font-style: normal;
		font-weight: 300;
		line-height: 130%;
	}

	&__subdescription {
		display: block;
		margin-bottom: 30px;
		color: rgba(255, 255, 255, 0.6);
		font-family: 'Roberto Sans';
		font-size: clamp(14px, 4vw, 18px);
		font-style: normal;
		font-weight: 300;
		line-height: 140%;
	}

	&__info {
		color: #ab9273;
		font-family: 'Roberto Sans';
		font-size: clamp(18px, 4vw, 24px);
		font-style: normal;
		font-weight: 400;
		line-height: 120%;
		margin-bottom: 30px;
	}

	&__title {
		margin-bottom: 30px;
	}
	&__descr {
		display: flex;
		flex-direction: column;
		gap: 20px;

		& p {
			color: #fff;
			font-family: 'Roberto Sans';
			font-size: clamp(14px, 4vw, 18px);
			font-style: normal;
			font-weight: 300;
			line-height: 140%;
		}
	}

	&__decor-top {
		position: absolute;
		top: 0;
		left: 0;
	}

	&__decor-bottom {
		position: absolute;
		bottom: 0;
		right: 0;
	}

	&__detail {
		display: flex;
		gap: 110px;
		padding: 80px;
		padding-bottom: 0;

		@media screen and (max-width: 1540px) {
			gap: 30px;
		}
		@media screen and (max-width: 1200px) {
			padding: 80px 40px 0;
		}

		@media screen and (max-width: 960px) {
			flex-direction: column-reverse;
		}
		@media screen and (max-width: 480px) {
			padding: 20px;
		}
	}

	&__form {
		padding: 0 80px;

		@media screen and (max-width: 1200px) {
			padding: 0 40px;
		}
	}

	&__text {
		max-width: 76%;
		display: flex;
		flex-direction: column;
		gap: 30px;
	}

	&__left {
		max-width: 60%;

		@media screen and (max-width: 1540px) {
			max-width: calc((100% - 30px) / 2);
		}

		@media screen and (max-width: 960px) {
			max-width: 100%;
		}
	}

	&__right {
		width: 100%;
		padding: 20px;
		position: relative;
	}

	&__wrapper-img {
		background-image: url('/img/company-photo.jpg');
		background-position: center;
		background-size: cover;
		width: 100%;
		height: 100%;
		background-repeat: no-repeat;

		@media screen and (max-width: 1540px) {
			background-image: url('/img/company-photo-2.jpg');
		}

		@media screen and (max-width: 960px) {
			background-image: url('/img/company-photo-3.jpg');
			min-height: 520px;
		}

		@media screen and (max-width: 640px) {
			min-height: 400px;
		}
		@media screen and (max-width: 480px) {
			min-height: 260px;
		}
	}

	&__subtitle {
		margin-bottom: 5px;
		color: #fff;
		font-family: 'Akrobat';
		font-size: clamp(28px, 4vw, 46px);
		font-style: normal;
		font-weight: 400;
		line-height: 110%;
		text-transform: uppercase;
	}
}
</style>
