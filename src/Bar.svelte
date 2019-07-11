<script>
    const numberOfYears = 3;
    const years = Array.from(Array(numberOfYears), (x, index) => index + (new Date().getFullYear()) + 1).reverse();
</script>

<div class="w-3/12 border-r-color-black border-r-width-4">
    <div class="flex flex-col h-screen">
        {#each years as year}
            <div class="relative h-full mt-16">
                <div class="absolute ml-24.1vw mt-1 z-30 bg-white border-black border-2 h-5 w-4 rounded-full"/>
                <span class="absolute ml-21vw text-gray-900">{year}</span>
            </div>
        {/each}
    </div>
</div>