<script setup lang="ts">
import IconClose from "~/assets/shared/icon-close.svg";
import IconHamburger from "~/assets/shared/icon-hamburger.svg";
import logo from "~/assets/shared/logo.svg";

const isOpen = ref(false);
</script>

<template>
	<div class="grow bg-home-mobile sm:bg-home-tablet lg:bg-home-desktop bg-no-repeat bg-cover">
		<div class="p-6 flex items-center">
			<logo class="mr-auto w-10" />
			<button
				type="button"
				@click="isOpen = true"
				aria-label="toggle mobile nav visible"
				class="lg:hidden aspect-square grid place-items-center"
			>
				<icon-hamburger class="w-6" />
			</button>
			<div
				class="fixed lg:static inset-0 lg:inset-auto left-auto w-full lg:w-auto max-w-80 lg:max-w-none backdrop-blur lg:backdrop-blur-0 flex gap-12 flex-col items-stretch transition-all will-change-auto duration-200"
				:class="[isOpen ? 'translate-x-0' : 'translate-x-full', 'lg:!translate-x-0']"
			>
				<div class="lg:hidden p-6 flex items-center">
					<button
						type="button"
						@click="isOpen = false"
						aria-label="hide mobile nav"
						class="lg:hidden ml-auto my-2.5 aspect-square grid place-items-center"
					>
						<icon-close class="w-5" />
					</button>
				</div>
				<div
					class="flex gap-8 flex-col lg:flex-row items-stretch lg:items-center pl-8 lg:pl-0 uppercase"
				>
					<NuxtLink to="/"><i>00</i><span>home</span></NuxtLink>
					<NuxtLink to="/destination"><i>01</i><span>destination</span></NuxtLink>
					<NuxtLink to="/crew"><i>02</i><span>crew</span></NuxtLink>
					<NuxtLink to="/technology"><i>03</i><span>technology</span></NuxtLink>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="css">
a {
	@apply flex items-center gap-3;
	&.router-link-exact-active {
		@apply relative before:absolute before:inset-0 before:left-auto lg:left-0 lg:top-auto before:w-full before:max-w-1 lg:max-w-none before:bg-current;
	}
	i {
		@apply not-italic font-bold;
	}
}
</style>
