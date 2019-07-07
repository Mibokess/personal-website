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

<style>
    

    #timeline {
        position: relative;
        list-style: none;
        height: 100%;
        width: 100%;
        margin: 0;
        top: 0;
        bottom: 0;
    }

    #timeline li {
        opacity: 1;
        position: relative;
        margin: 20px 0 20px 0;
        width: 330px;
        height: 70px;
        background-color: black;
        padding: 15px;
        box-sizing: border-box;
        border-radius: 10px;
        list-style-type: none;
        color: white;
        font-size: 15px;
        left: 30%;
    }
</style>

<ul id="timeline">
    {#each events as event}
        <li class="timeline_entry">{ event.name }</li>
    {/each}
</ul>
