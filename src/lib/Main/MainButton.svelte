<script lang="ts">
	export let icon: string = '';
	export let className: string = '';
	export let href: string;
</script>

<a {href}>
	<div
		class="bg-[#163D74] transition-hover delay-50 hover:bg-[#1e4377] h-full text-md sm:text-lg rounded-2xl shadow-lg px-3 py-8 flex flex-col gap-4 items-center text-center justify-center"
	>
		<slot />

		<img src={icon} class={className} alt="Your Story" />
	</div>
</a>
