<script>
    export let title;
    export let description;

    export let children;
    let childrenVisible = false;
</script>

<div class="flex flex-row items-start"> 
    <div class="max-w-xs m-4 p-6 bg-white rounded-lg shadow-xl" on:click="{e => childrenVisible = !childrenVisible}">
        <div class="ml-6 pt-1">
            <h4 class="text-xl text-gray-900 leading-tight">{ title }</h4>
            <p class="text-base text-gray-600 leading-normal">{ description }</p>
        </div>
    </div>
    {#if children && childrenVisible}
        <div class="flex flex-col items-start">
            {#each children as child}
                <svelte:self {...child}/>
            {/each}
        </div>
    {/if}
</div>