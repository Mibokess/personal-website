<script>
	import Title from './Title.svelte';
	import Timeline from './Timeline.svelte';
	import Bar from './Bar.svelte';
</script>

<div>
	<div class="flex flex-row h-full w-full">
		<Bar/>
		<div class="w-9/12">
			<Title/>
			<Timeline/>
		</div>
	</div>
</div>