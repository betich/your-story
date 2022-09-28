<script lang="ts">
	import MainButton from '$lib/Main/MainButton.svelte';
	import YourStory from '$lib/YourStory/YourStory.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="relative background-screen min-h-screen overflow-hidden w-full py-32 sm:py-4 px-8">
	<div class="absolute -right-20 rounded-full -top-12 w-64 h-64 ball-1" />
	<div class="absolute -left-20 rounded-full -bottom-12 w-96 h-96 ball-2" />
	<div class="absolute right-4 rounded-full bottom-12 w-48 h-48 ball-3" />

	<div class="max-w-4xl mx-auto">
		<div class="flex relative z-10 flex-col gap-4 items-center">
			<YourStory className="w-[128rem] sm:w-[32rem]" />

			<div class="w-full grid grid-cols-3 gap-4 sm:px-32">
				<MainButton href="/story/1" icon="icon/study.svg" className="w-16 h-16"
					>การเรียน<br />กวดวิชา</MainButton
				>
				<MainButton href="/story/2" icon="icon/friends.svg" className="w-16 h-16"
					>เพื่อนใน<br />โรงเรียน<br />ประจำ</MainButton
				>
				<MainButton href="/story/3" icon="icon/mouth.svg" className="w-16 h-16"
					>พูดจาไม่ให้<br />เกียรติผู้ฟัง</MainButton
				>
				<MainButton href="/story/4" icon="icon/health.svg" className="w-16 h-16">สุขภาพ</MainButton>
				<MainButton href="/story/5" icon="icon/do-not-touch.svg" className="w-16 h-16"
					>มีสติ<br />คิดก่อนทำ</MainButton
				>
				<MainButton href="/story/6" icon="icon/warning.svg" className="w-16 h-16"
					>เปิดรับ<br />
					คำตักเตือน<br />
					ของผู้ใหญ่</MainButton
				>
				<MainButton href="/story/7" icon="icon/house-heart.svg" className="w-16 h-16"
					>ความรัก<br />
					ของพ่อแม่</MainButton
				>
				<MainButton href="/story/8" icon="icon/guard.svg" className="w-16 h-16"
					>ความปลอดภัย<br />
					การลองผิด<br />
					ลองถูก
				</MainButton>
				<MainButton href="/story/9" icon="icon/focus.svg" className="w-16 h-16"
					>การแคร์<br />
					สายตาคนอื่น<br />
					มากเกินไป
				</MainButton>
			</div>
		</div>
		<img
			src="putasmile.png"
			class="mx-auto w-36 h-36 mt-4 mb-6"
			alt="Put a smile on a child's face"
		/>
	</div>
</section>

<style>
	.background-screen {
		background: linear-gradient(180deg, #003996 -4.29%, #d3e6ff 139.23%);
		color: white;
	}

	.ball-1 {
		background: linear-gradient(211.67deg, #f40100 2.21%, #eef2ff 110.57%);
	}

	.ball-2 {
		background: linear-gradient(211.67deg, #d2a120 2.21%, #fffbfb 110.57%);
	}

	.ball-3 {
		background: linear-gradient(211.67deg, #06f2e4 2.21%, #074264 110.57%);
	}
</style>
