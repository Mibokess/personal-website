<script>
    export let title;
    export let description;
    export let children;
    
    let childrenVisible = false;
</script>

<div class="flex flex-row items-start"> 
    <div class="flex-none max-w-xs m-4 p-6 bg-black rounded-lg" on:click="{e => childrenVisible = !childrenVisible}">
        <div class="ml-6 pt-1">
            <h4 class="font-sans text-xl text-start text-gray-100 leading-tight">{ title }</h4>
            <p class="font-sans text-base text-start text-gray-400 leading-normal">{ description }</p>
        </div>
    </div>
    {#if children.length > 0 && childrenVisible}
        <div class="flex flex-col items-start">
            {#each children as child}
                <svelte:self {...child}/>
            {/each}
        </div>
    {/if}
</div>