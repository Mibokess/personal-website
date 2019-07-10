<script>
    import Cards from './Cards.svelte';

    let littlestChildren = [
        { title: 'Some content title', description: 'Some content description' },
        { title: 'Some content title', description: 'Some content description' },
        { title: 'Some content title', description: 'Some content description' },
        { title: 'Some content title', description: 'Some content description' },
        { title: 'Some content title', description: 'Some content description' },
        { title: 'Some content title', description: 'Some content description' },
        { title: 'Some content title', description: 'Some content description' },
    ]

    let littleChildren = [
        { title: 'Some content title', description: 'Some content description', children: littlestChildren},
        { title: 'Some content title', description: 'Some content description', children: littlestChildren},
        { title: 'Some content title', description: 'Some content description', children: littlestChildren},
        { title: 'Some content title', description: 'Some content description', children: littlestChildren},
        { title: 'Some content title', description: 'Some content description', children: littlestChildren},
        { title: 'Some content title', description: 'Some content description', children: littlestChildren},
    ]

    let children = [
        { title: 'Some content title', description: 'Some content description', children: littleChildren},
        { title: 'Some content title', description: 'Some content description', children: littleChildren},
        { title: 'Some content titleSome content titleSome content titleSome content titleSome content title', description: 'Some content description', children: littleChildren},
        { title: 'Some content title', description: 'Some content description', children: littleChildren},
        { title: 'Some content title', description: 'Some content description', children: littleChildren},
        { title: 'Some content title', description: 'Some content description', children: littleChildren},
        { title: 'Some content title', description: 'Some content description', children: littleChildren},
    ]

    let semesters = [
        { title: 'Spring semester 2019', description: 'Some content description', children: children},
        { title: 'Some content title', description: 'Some content description', children: children},
        { title: 'Some content title', description: 'Some content description', children: children},
        { title: 'Some content title', description: 'Some content description', children: children},
        { title: 'Some content title', description: 'Some content description', children: children},
        { title: 'Some content title', description: 'Some content description', children: children},
        { title: 'Some content title', description: 'Some content description', children: children},
        { title: 'Some content title', description: 'Some content description', children: children},
        { title: 'Some content title', description: 'Some content description', children: children},
        { title: 'Some content title', description: 'Some content description', children: children},
        { title: 'Some content title', description: 'Some content description', children: children},
        { title: 'Some content title', description: 'Some content description', children: children},
        { title: 'Some content title', description: 'Some content description', children: children},
        { title: 'Some content title', description: 'Some content description', children: children},
        { title: 'Some content title', description: 'Some content description', children: children},
        { title: 'Some content title', description: 'Some content description', children: children},
        { title: 'Some content title', description: 'Some content description', children: children},
    ];
</script>

<style>

</style>

<div class="flex flex-row">
    <div class="w-full">
        {#each semesters as semester}
            <Cards {...semester}/>
        {/each}
    </div>
</div>