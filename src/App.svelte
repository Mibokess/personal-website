<script>
	import Title from './Title.svelte';
	import Timeline from './Timeline.svelte';
	import Bar from './Bar.svelte';
</script>

<div>
	<div class="flex flex-row h-full w-full">
		<div class="flex-none w-1/4"/>
		<div class="flex-none flex flex-row w-4">
			<Bar/>
		</div>
		<div class="flex-none w-3/4">
			<Title/>
			<Timeline/>
		</div>
	</div>
</div>