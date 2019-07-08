<script>
    import Card from './Card.svelte';
    import TitleDescription from './TitleDescription.svelte';

    let courses = { title: 'Courses', courses: courses}
    let springSemester = { type: 'semester', title: 'Spring Semester 2019', description: 'Best time of the year to not study!', startDate: '20.02.2019', endDate: '12.05.2019'}

</script>

<style></style>

<div>
    <Card {...springSemester}/>
</div>
