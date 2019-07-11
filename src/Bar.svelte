<script>
    const numberOfYears = 3;
    const years = Array.from(Array(numberOfYears), (x, index) => index + (new Date().getFullYear()) + 1).reverse();
</script>

<div class="w-2">
    <div class="flex flex-col h-screen w-full">
        {#each years as year}
            <div class="relative h-full w-full mt-24">
                <div class="absolute top-0.3vh bg-white border-black border-2 h-5 w-4 rounded-full"/>
                <div class="absolute right-2vw font-semibold text-gray-600">{ year }</div>
            </div>
        {/each}
    </div>
</div>
<div class="w-1 bg-black">
</div>
<div class="w-2">
</div>
