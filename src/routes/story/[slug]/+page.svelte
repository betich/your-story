<script lang="ts">
	import { page } from '$app/stores';
	import YourStory from '$lib/YourStory/YourStory.svelte';
	import type { PageData } from './$types';
	import { StoryData } from './story';

	export let data: PageData;
	$: story = data.story;
</script>

<svelte:head>
	<title>{story.title} - เรื่องเล่าของคุณ</title>
	<meta name="description" content="by Put a Smile on a Child's Face" />
</svelte:head>

<section class="min-h-screen main-section text-white" style="--bg-color: {story.bgcolor}">
	<div class="flex mx-auto py-12 px-8 flex-col gap-6 max-w-4xl justify-center items-center">
		<div class="flex justify-between items-center px-12 w-full">
			<a href="/">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="w-10 h-10"
				>
					<path
						fill-rule="evenodd"
						d="M20.25 12a.75.75 0 01-.75.75H6.31l5.47 5.47a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 111.06 1.06l-5.47 5.47H19.5a.75.75 0 01.75.75z"
						clip-rule="evenodd"
					/>
				</svg>
			</a>

			<YourStory className="w-[20rem]" />
			<empty />
		</div>

		<p class="self-end">{story.title}</p>

		<div
			class="rounded-xl sm:rounded-2xl px-10 text-lg py-10 w-full border border-white border-opacity-50 bg-white bg-opacity-10 backdrop-blur-xl"
		>
			{#if story?.name}
				<p class="font-semibold">ชื่อ: {story.name}</p>
			{/if}

			{#if story?.penname}
				<p class="font-semibold">นามปากกา: {story.penname}</p>
			{/if}

			<p class="font-light mt-4 leading-loose">{story.content}</p>
		</div>
		<div
			class="rounded-xl sm:rounded-2xl px-10 text-lg py-10 w-full border border-white border-opacity-50 bg-white bg-opacity-10 backdrop-blur-xl"
		>
			<p class="font-semibold">ข้อคิด/บทเรียนที่ได้จากเรื่องนั้น</p>

			<p class="font-light mt-4 leading-loose">{story.summary}</p>
		</div>
	</div>
</section>

<style>
	.main-section {
		background: var(--bg-color);
	}
</style>
