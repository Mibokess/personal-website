<script>
    import Cards from './Cards.svelte';

    const startYear = 1998;
    const years = Array.from(Array(new Date().getFullYear() - startYear + 1), (x, index) => index + startYear).reverse();

    let events = [
        { title: 'Spring Semester 2019', description: '6th Semester', children: [
            { title: 'Introduction to machine learning', description: '8 credit points', children: [] },
            { title: 'Information security', description: '8 credit points', children: [] },
            { title: 'Bachelor Thesis', description: '10 credit points', children: [] }
        ], year: 2019},
        { title: 'Autumn Semester 2018', description: '5th Semester & teaching assistant', children: [
            { title: 'Computer systems', description: '8 credit points', children: [] },
            { title: 'Algorithms, probability and computing', description: '8 credit points', children: [] },
            { title: 'Visual computing', description: '8 credit points', children: [] },
            { title: 'Software Engineering Seminar', description: '2 credit points', children: [] },
            { title: 'Diskrete Ereignissysteme', description: '5 credit points', children: [] },
            { title: 'Japanese A1.1', description: '3 credit points', children: [] },
            { title: 'Teaching Assistant', description: 'Einführung in die Programmierung', children: [
                { title: '', description: 'Supervision of a group of first Semester students in coordination with a second assistant for the subject "Introduction to Programming" during the autumn Semester. Tasks included the explaining of unclear material, exercises and the correction thereof including feedback.', children: []}
            ]},
        ], year: 2018 },
        { title: 'Cerebral Zürich Camp', description: 'Civil service - 2 weeks', children: [
            { title: '', description: 'One-to-one care for two disabled holiday guests in Cerebral Zürich Summer camp, one week each. The care included everything from morning to evening.', children: []},
        ], year: 2018 },
        { title: 'Spring Semester 2018', description: '4th Semester & teaching assistant', children: [
            { title: 'Computer Networks', description: '7 credit points', children: [] },
            { title: 'Formal methods and functional programming', description: '7 credit points', children: [] },
            { title: 'Databases and data modeling', description: '7 credit points', children: [] },
            { title: 'Wahrscheinlichkeit und Statistik', description: '5 credit points', children: [] },
            { title: 'Information retrieval', description: '4 credit points', children: [] },
            { title: 'Introduction to game theory', description: '3 credit points', children: [] },
            { title: 'Teaching Assistant', description: 'Parallel Programming', children: [
                { title: '', description: 'Supervision of a group of students (15 to 20) in their second Semester for the subject «Parallel Programming». Attendance of the didactic training course for teaching assistants.', children: [] }
            ]},
        ], year: 2018},
        { title: 'Autumn Semester 2017', description: '3th Semester', children: [
            { title: 'Systems Programming and Computer Architecture', description: '7 credit points', children: [] },
            { title: 'Numerical Methods for CSE', description: '7 credit points', children: [] },
            { title: 'Theoretische Informatik', description: '7 credit points', children: [] },
            { title: 'Analysis 2', description: '5 credit points', children: [] },
            { title: 'Human Computer Interaction', description: '3 credit points', children: [] },
        ], year: 2017},
        { title: 'Spring Semester 2017', description: '2th Semester', children: [
            { title: 'Analysis 1', description: '7 credit points', children: [] },
            { title: 'Algorithmen und Wahrscheinlichkeit', description: '7 credit points', children: [] },
            { title: 'Parallel Programming', description: '7 credit points', children: [] },
            { title: 'Design of Digital Circuits', description: '7 credit points', children: [] },
        ], year: 2017},
        { title: 'Autumn Semester 2016', description: '1th Semester', children: [
            { title: 'Diskrete Mathematik', description: '7 credit points', children: [] },
            { title: 'Lineare Algebra', description: '7 credit points', children: [] },
            { title: 'Einführung in die Programmierung', description: '7 credit points', children: [] },
            { title: 'Algorithmen und Datenstrukturen', description: '7 credit points', children: [] },
        ], year: 2016},
        { title: 'SIX GROUP Stamford', description: 'Internship - 3 weeks', children: [
            { title: '', description: 'Largely a learning experience exploring the activities of the IT department as well as its interactions with other departments as well as additional administrative tasks in the IT area.', children: [] },
        ], year: 2015 },
        { title: 'Beginning of Existence', description: 'The simultation had not yet begun; only after the godly words were spoken "Deploy it already, it`s friday afternoon!" there was light!', children: [], year: 1998 }
    ];
</script>

<div class="flex flex-col">
    {#each years as year}
        <div class="flex flex-row w-full my-20">
            <div class="relative">
                <div class="absolute right-0.03vw bg-white border-black border-2 mt-1 h-5 w-4 rounded-full"/>
                <span class="absolute right-2.4vw font-semibold text-gray-600">{ year }</span>
            </div>
            <div class="w-full overflow-auto">
                {#each events as event}
                    {#if (event.year === year)}
                        <Cards {...event}/>
                    {/if}
                {/each}
            </div>
        </div>
    {/each}
</div>