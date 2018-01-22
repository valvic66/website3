<template>
  <div class="show-case">
		<div class="show-case__title">Sample Work</div>
		<div class="show-case__panel row">
			<div class="show-case__panel__item col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
				<div class="show-case__panel__item__img">
					<a href='https://valvic66.github.io/website3/#/' target='_blank'><img src="https://cdn.rawgit.com/valvic66/website3/b50e9a33/src/assets/tinified/Presentation_Site.png" width="300" /></a>
				</div>
				<div class="show-case__panel__item__descr">
					<p>Dynamic presentation site. Created in Vue JS. Mobile responsive.</p>
					<p><a href='https://github.com/valvic66/website3' target='_blank'>Source Code</a></p>
					<p><a href='https://valvic66.github.io/website3/#/' target='_blank'>Demo</a></p>
				</div>
			</div>
			<div class="show-case__panel__item col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
				<div class="show-case__panel__item__img">
					<a href='https://valvic66.github.io/website1/' target='_blank'><img src="https://cdn.rawgit.com/valvic66/website3/97dac722/src/assets/tinified/Website2.png" width="300" /></a>
				</div>
				<div class="show-case__panel__item__descr">
					<p>Dynamic site. Created in React JS. Mobile responsive.</p>
					<p><a href='https://github.com/valvic66/website1' target='_blank'>Source Code</a></p>
					<p><a href='https://valvic66.github.io/website1/' target='_blank'>Demo</a></p>
				</div>
			</div>
			<div class="show-case__panel__item col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
				<div class="show-case__panel__item__img">
					<a href='https://valvic66.github.io/website2/' target='_blank'><img src="https://cdn.rawgit.com/valvic66/website3/97dac722/src/assets/tinified/Website3.png" width="300" /></a>
				</div>
				<div class="show-case__panel__item__descr">
					<p>Dynamic site. Created in React JS. Mobile responsive.</p>
					<p><a href='https://github.com/valvic66/website2' target='_blank'>Source Code</a></p>
					<p><a href='https://valvic66.github.io/website2/' target='_blank'>Demo</a></p>
				</div>
			</div>
			<div class="show-case__panel__item col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
				<div class="show-case__panel__item__img">
					<a href='https://valvic66.github.io/vueshoppingcart/' target='_blank'><img src="https://cdn.rawgit.com/valvic66/website3/97dac722/src/assets/tinified/Shopping_Cart.png" width="300" /></a>
				</div>
				<div class="show-case__panel__item__descr">
					<p>Shopping Cart. Created in Vue JS. Mobile responsive.</p>
					<p><a href='https://github.com/valvic66/vueshoppingcart' target='_blank'>Source Code</a></p>
					<p><a href='https://valvic66.github.io/vueshoppingcart/' target='_blank'>Demo</a></p>
				</div>
			</div>
			<div class="show-case__panel__item col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
				<div class="show-case__panel__item__img">
					<a href='https://valvic66.github.io/vue01/' target='_blank'><img src="https://cdn.rawgit.com/valvic66/website3/97dac722/src/assets/tinified/Vue_Sample_Cards.png" width="300" /></a>
				</div>
				<div class="show-case__panel__item__descr">
					<p>Vue JS Examples. Mobile responsive.</p>
					<p><a href='https://github.com/valvic66/vue01' target='_blank'>Source Code</a></p>
					<p><a href='https://valvic66.github.io/vue01/' target='_blank'>Demo</a></p>
				</div>
			</div>
			<div class="show-case__panel__item col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
				<div class="show-case__panel__item__img">
					<a href='http://htmlpreview.github.io/?https://github.com/valvic66/conditional/blob/master/example/index.html' target='_blank'><img src="https://cdn.rawgit.com/valvic66/website3/97dac722/src/assets/tinified/Conditional_Custom_Component.png" width="300" /></a>
				</div>
				<div class="show-case__panel__item__descr">
					<p>React Playground.</p>
					<p><a href='https://github.com/valvic66/conditional' target='_blank'>Source Code</a></p>
					<p><a href='http://htmlpreview.github.io/?https://github.com/valvic66/conditional/blob/master/example/index.html' target='_blank'>Demo</a></p>
				</div>
			</div>
			<div class="show-case__panel__item col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
				<div class="show-case__panel__item__img">
					<a href='http://htmlpreview.github.io/?https://github.com/valvic66/drop-down/blob/master/example/index.html' target='_blank'><img src="https://cdn.rawgit.com/valvic66/website3/97dac722/src/assets/tinified/DropDown_Custom_Component.png" width="300" /></a>
				</div>
				<div class="show-case__panel__item__descr">
					<p>React Playground.</p>
					<p><a href='https://github.com/valvic66/drop-down' target='_blank'>Source Code</a></p>
					<p><a href='http://htmlpreview.github.io/?https://github.com/valvic66/drop-down/blob/master/example/index.html' target='_blank'>Demo</a></p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'ShowCase',
  props: [''],
  data() {
    return {

    }
  }
}
</script>

<style scoped lang='scss'>
@import '../styles/custom-bootstrap.scss';
* {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

.show-case {
	/* background-color: rgb(233, 233, 39); */
	max-width: 100%;
	margin: 1em;
}

/* isFlexCol */
.show-case__title {
	animation-name: sample_slide;
  animation-duration: .6s;
  animation-fill-mode: both;
	animation-delay: .3s;

	font-family: 'Open Sans', sans-serif;
	font-size: 1.4em;
	letter-spacing: -1px;
	line-height: 1.4;
	color: #1a2328;
	max-width: 16em;
	margin-bottom: 1em;
}

.show-case__panel {
	/* isFlexCol */
	// max-width: 100%;
}

.show-case__panel__item {
	// background-color: aqua;
	// border: solid black 1px;
	box-shadow: 2px 2px 5px gray;
	border-radius: 2px;
	padding: 1.8em;
	/* isFlexRow */
	display: flex;
	flex-direction: column;

	/* background-color: red; */
	margin: 1em 0;
}

.show-case__panel__item__img {
	cursor: pointer;
	align-self: center;
	// box-shadow: 1px 1px 5px lightgrey;
	margin-bottom: 1em;
	border:solid lightgrey 1px;
}
.show-case__panel__item__img:hover {
	transition-duration: .3s;
	transform: scale(1.1);
}
.show-case__panel__item__img img {
	max-width: 100%;

}
.show-case__panel__item__img img:hover {

}
.show-case__panel__item__descr {
	display: flex;
	flex-direction: column;
	align-self: flex-start;

	transform: scaleY(.9);
	line-height: 1.6em;
	max-width: 45em;
	letter-spacing: -1px;
	font-size: 1em;
}

@media screen and (min-width: 576px) {
  .show-case__title {
		font-size: 1.4em;
		letter-spacing: -1px;
		line-height: 1.4;
	}
	.show-case__panel__item__descr {
		font-size: 1em;
	}
}

@media screen and (min-width: 768px) {
  .show-case__title {
		font-size: 2.3em;
	}
	.show-case__panel__item__descr {
		font-size: 1.1em;
	}
}

@media screen and (min-width: 990px) {}

@keyframes sample_slide {
	from {transform: translateX(-1000px);}
	to {transform: translateY(0);}
}
</style>

