<script>
    import { fly } from 'svelte/transition';      

    export let title;
    export let description;
    export let children;
    
    let childrenVisible = false;
</script>

<style>
    .triangle {
        display: block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 0 10px 10px;
        border-color: transparent transparent rgb(228, 228, 228) transparent;
    }
</style>

<div class="animate:flip flex flex-row items-start"> 
    <div class="relative flex-none max-w-sm m-4 p-6 bg-white rounded-lg shadow hover:shadow-md" transition:fly="{{ x: -25, duration: 500}}" on:click="{e => childrenVisible = !childrenVisible}">
        <div class="ml-6 pt-1">
            <h4 class="font-sans text-xl text-start text-gray-900 leading-tight">{ title }</h4>
            <p class="font-sans text-base text-start text-gray-600 leading-normal">{ description }</p>
        </div>
        {#if children.length > 0}
            <div class="absolute bottom-0 right-0 triangle"/>
        {/if}
    </div>
    {#if children.length > 0 && childrenVisible}
        <div class="flex flex-col items-start">
            {#each children as child}
                <svelte:self {...child}/>
            {/each}
        </div>
    {/if}
</div>