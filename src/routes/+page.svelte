<script lang="ts">
	import portrait from '$lib/assets/scale2.jpg';
	import MaterialSymbolsDarkMode from '~icons/material-symbols/dark-mode';
	import MaterialSymbolsLightModeOutline from '~icons/material-symbols/light-mode-outline';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	let currentTheme: "dracula" | "cupcake";
	const toggleTheme = () => {
		if (currentTheme === 'dracula') {
			currentTheme = 'cupcake';
		} else if (currentTheme === 'cupcake') {
			currentTheme = 'dracula';
		}
	};
	onMount(() => {
		themeChange(false);

		// @ts-expect-error - localStorage value should be "dracula" or "cupcake"
		currentTheme = localStorage.getItem("theme") || "cupcake";
	});
</script>

<svelte:head>
	<title>Jason Yuan</title>
</svelte:head>

<div class="mx-auto flex h-screen flex-col items-center bg-base-100 [&>*]:transition-all">
	<!-- Header -->
	<nav class="container flex max-w-3xl items-center justify-between p-6">
		<div class="grow">
			<a class="text-left text-xl font-bold md:text-3xl lg:text-4xl" href="/">Jason Yuan</a>
		</div>

		<!-- Links -->
		<div class="flex grow flex-row-reverse justify-between">
			<a target="_blank" href="https://github.com/JasonYuan869" class="link-hover link">GitHub</a>
		</div>

		<div class="flex flex-row-reverse p-4">
			<button data-toggle-theme="dracula,cupcake" class="text-xl" on:click={toggleTheme}>
				{#if currentTheme === 'dracula'}
					<MaterialSymbolsDarkMode />
				{:else}
					<MaterialSymbolsLightModeOutline />
				{/if}
			</button>
		</div>
	</nav>

	<!-- Body -->
	<main class="m-auto flex max-w-3xl flex-col px-6 md:mx-0 md:mt-0">
		<!-- Hero -->
		<div class="hero my-6 flex grow flex-col items-center justify-center md:grow-0 md:flex-row">
			<!-- Portrait Image -->
			<img
				class="mb-6 rounded-full md:m-6 md:rounded-lg"
				src={portrait}
				alt="Jason Yuan"
				width="256"
				height="256"
			/>
			<!-- Short Description -->
			<div class="md:flex md:flex-col md:items-center md:justify-center">
				<h1 class="text-center text-xl font-bold italic lg:text-xl">Hey there!</h1>
				<p class="px-6 text-center">
					I'm Jason Yuan, a 3rd-year Software Engineering student from the University of Waterloo.
					With a solid academic background, diverse industry experiences, and a knack for blending
					technologies, I thrive on turning ideas into reality.
					<br />
					<br />
					Currently working in DevOps, cloud engineering, and CI automation at BitGo.
				</p>
			</div>
		</div>

		<!-- Experience -->
		<div class="card w-full bg-base-200 p-6">
			<div class="text-lg font-bold">Work Experiences</div>
			<div class="mt-3">
				<div class="font-bold">Current</div>
				<div class="grid grid-cols-2 opacity-70">
					<div>
						<a href="https://www.bitgo.com/" target="_blank" class="link-hover link font-bold"
							>BitGo</a
						>
					</div>
					<div class="text-right">May 2024 - Present</div>
					<div>Software Engineering Intern - Velocity</div>
					<div class="text-right italic">Palo Alto, CA</div>
				</div>
			</div>
			<div class="mt-3">
				<div class="font-bold">Past</div>
				<div class="grid grid-cols-2 opacity-70">
					<div>
						<a href="https://www.amd.com/" target="_blank" class="link-hover link font-bold">AMD</a>
					</div>
					<div class="text-right">Sept 2023 - Dec 2023</div>
					<div>GPU Engineering Intern</div>
					<div class="text-right italic">Toronto, ON</div>

					<div>
						<a href="https://www.curvegrid.com/" target="_blank" class="link-hover link font-bold"
							>Curvegrid</a
						>
					</div>
					<div class="text-right">Jan - Apr 2023</div>
					<div>Software Engineering Intern</div>
					<div class="text-right italic">Tokyo, JP</div>

					<div>
						<a href="https://dreamschools.com/" target="_blank" class="link-hover link font-bold"
							>Dreamschools</a
						>
					</div>
					<div class="text-right">May - Aug 2022</div>
					<div>Fullstack Engineering Intern</div>
					<div class="text-right italic">Toronto, ON</div>
				</div>
			</div>
		</div>
	</main>
	<!-- Footer Container -->
	<footer class="footer footer-center mt-6 w-full bg-base-200 p-6 text-sm">
		<div>
			<span class="footer-title">Links and Contact</span>
			<a
				href="https://drive.google.com/file/d/1GZfzcjA0Q1YP3x69zsbasrPXsjpdoCOt/view?usp=drive_link"
				target="_blank"
				class="font-lg link-hover link">Resume</a
			>
			<a target="_blank" href="https://www.linkedin.com/in/jasonyuan869/" class="link-hover link"
				>LinkedIn</a
			>
			<a href="mailto:jason@jasonyuan.net" class="link-hover link">Email</a>
		</div>
	</footer>
</div>
