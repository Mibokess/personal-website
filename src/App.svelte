<script>
	import Title from './Title.svelte';
	import Timeline from './Timeline.svelte';
</script>

<style>
	:global(body, html) {
		height: 100%;
		padding: 0;
    	margin: 0;
		overflow: scroll;
	}

	#timeline_bar {
        content: '';
        width: 0;
        height: 100%;
        position: absolute;
        border: 1px solid black;
        top: 0;
        left: 100px;
        z-index: 2;
    }

	div {
		height: 45%;
	}	
</style>

<Title/>
<div/>
<div id="timeline_bar"/>
<Timeline/>