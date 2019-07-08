<script>
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let events = [
        { name: "Some data"},
        { name: "Some data"},
        { name: "Some data"},
        { name: "Some data"},
        { name: "Some data"},
        { name: "Some data"},
        { name: "Some data"},
        { name: "Some data"},
        { name: "Some data"},
        { name: "Some data"},
        { name: "Some data"},
        { name: "Some data"},
        { name: "Some data"},
        { name: "Some data"},
        { name: "Some data"},
        { name: "Some data"},
        { name: "Some data"},
        { name: "Some data"},
        { name: "Some data"},
        { name: "Some data"},
        { name: "Some data"},
        { name: "Some data"},
        { name: "Some data"},
        { name: "Some data"},
        { name: "Some data"},
        { name: "Some data"},
        { name: "Some data"},
        { name: "Some data"},
        { name: "Some data"},
        { name: "Some data"},
        { name: "Some data"},
        { name: "Some data"},
        { name: "Some data"}
    ];
</script>

<style></style>

<ul id="timeline">
    {#each events as event}
        <li class="timeline_entry">{ event.name }</li>
    {/each}
</ul>
