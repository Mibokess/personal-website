<script>
    export let title;
    export let description;

    export let children;
    let childrenVisible = false;

    const decreaseDistance = 200;

    function getPosition(element) {
        const { top, bottom } = element.getBoundingClientRect();

        return {
            top,
            bottom
        };
    }

    function distanceBetweenElements(a, b) {
        const aPosition = getPosition(a);
        const bPosition = getPosition(b);
        
        return (aPosition.bottom <= bPosition.top) ? (bPosition.top - aPosition.bottom) : (aPosition.top - bPosition.bottom);
    }

    function changeOpacityBasedOnDistance(compareElement, opacityElement) {
        const distanceElements = distanceBetweenElements(compareElement, opacityElement);

        if (decreaseDistance > distanceElements) {
            opacityElement.style.opacity =  distanceElements / decreaseDistance;
        } 
    }
    
    function decreaseOpacityOfNearCards() {
        console.log("decrease");

        const title = document.getElementsByClassName("title")[0];
        const cards = document.getElementsByClassName("card");

        for (var i = 0; i < cards.length; ++i) {
            if (!cards[i].style.opacity) cards[i].style.opacity = 1.0;
            changeOpacityBasedOnDistance(title, cards[i])
        }
    }

    window.onscroll = function() { decreaseOpacityOfNearCards() }
</script>

<style>
    .card {
        opacity: 1.0;
    }
</style>

<div class="flex flex-row items-start"> 
    <div class="card max-w-xs m-4 p-6 bg-white rounded-lg shadow-xl" on:click="{e => childrenVisible = !childrenVisible}">
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