<script>
    const startYear = 1998;
    const years = Array.from(Array(new Date().getFullYear() - startYear + 4), (x, index) => index + startYear).reverse();


</script>

<div class="z-20 fixed h-screen border-r-color-black border-r-width-4 ml-22vw"/>
<div class="flex flex-col h-screen items-stretch content-center w-22vw">
    {#each years as year}
        <div class="relative min-h-1/3 py-8">
            <div class="absolute z-30 bg-white border-black border-2 ml-21.6vw mt-1 h-5 w-4 rounded-full"/>
            <span class="absolute ml-18vw text-gray-900">{year}</span>
        </div>
    {/each}
</div>