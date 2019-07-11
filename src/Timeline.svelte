<script>
    import Cards from './Cards.svelte';

    const startYear = 1998;
    const years = Array.from(Array(new Date().getFullYear() - startYear + 1), (x, index) => index + startYear).reverse();

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
    ]

    let children = [
        { title: 'Some content title', description: 'Some content description', children: littleChildren},
    ]

    let events = [
        { title: 'Spring semester 2019', description: '6th semester', children: [
            { title: 'Courses', description: '', children: [
                { title: 'Introduction to machine learning', description: '', children: []},
                { title: 'Information security', description: '', children: []},
            ] },
        ], year: 2019},
        { title: 'Autumn semester 2018', description: '5th semester', children: [
            { title: 'Courses', description: '', children: [
                { title: 'Computer systems', description: '', children: []},
                { title: 'Algorithms, probability and computing', description: '', children: []},
                { title: 'Visual computing', description: '', children: []},
                { title: 'Software Engineering Seminar', description: '', children: []},
                { title: 'Diskrete Ereignissysteme', description: '', children: []},
                { title: 'Japanese A1.1', description: '', children: []},
            ] },
        ], year: 2018},
        { title: 'Spring semester 2018', description: '4th semester', children: [
            { title: 'Courses', description: '', children: [
                { title: 'Computer Networks', description: '', children: []},
                { title: 'Formal methods and functional programming', description: '', children: []},
                { title: 'Databases and data modeling', description: '', children: []},
                { title: 'Wahrscheinlichkeit und Statistik', description: '', children: []},
                { title: 'Information retrieval', description: '', children: []},
                { title: 'Introduction to game theory', description: '', children: []},
            ]},
        ], year: 2018},
        { title: 'Autumn semester 2017', description: '3th semester', children: [
            { title: 'Courses', description: '', children: [
                { title: 'Analysis 2', description: '', children: []},
                { title: 'Systems Programming and Computer Architecture', description: '', children: []},
                { title: 'Numerical Methods for CSE', description: '', children: []},
                { title: 'Theoretische Informatik', description: '', children: []},
                { title: 'Human Computer Interaction', description: '', children: []},
            ] },
        ], year: 2017},
        { title: 'Spring semester 2017', description: '2th semester', children: [
            { title: 'Courses', description: '', children: [
                { title: 'Analysis 1', description: '', children: []},
                { title: 'Algorithem und Wahrscheinlichkeit', description: '', children: []},
                { title: 'Parallel Programming', description: '', children: []},
                { title: 'Design of Digital Circuits', description: '', children: []},
            ]},
        ], year: 2017},
        { title: 'Autumn semester 2016', description: '1th semester', children: [
            { title: 'Courses', description: '', children: [
                { title: 'Diskrete Mathematik', description: '', children: []},
                { title: 'Lineare Algebra', description: '', children: []},
                { title: 'Einführung in die Programmierung', description: '', children: []},
                { title: 'Algorithmen und Datenstrukturen', description: '', children: []},
            ] },
        ], year: 2016},
    ];
</script>

<div class="flex flex-col h-full">
    {#each years as year}
        <div class="flex flex-row w-full my-2">
            <div class="relative w-16">
                <div class="absolute -left-1.05vh z-30 bg-white border-black border-2 mt-1 h-5 w-4 rounded-full"/>
                <span class="absolute -left-6vh text-gray-900">{year}</span>
            </div>
            <div class="w-full my-8">
                {#each events as event}
                    {#if (event.year === year)}
                        <Cards {...event}/>
                    {/if}
                {/each}
            </div>
        </div>
    {/each}
</div>