<script>
    import Card from './Card.svelte';

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
        { title: 'Some content title', description: 'Some content description', children: children},
    ];

</script>

<style></style>

<div class="bg-gray-100 mx-64">
    <div class="h-full"/>
    <div class="ml-64 w-full overflow-scroll">
        {#each semesters as semester}
            <Card {...semester}/>
        {/each}
    </div>
</div>