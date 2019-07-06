<script>
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let events = [
        { name: "FS 2019"},
        { name: "HS 2019"},
        { name: "FS 2018"},
        { name: "HS 2018"},
        { name: "FS 2017"},
        { name: "HS 2017"},
        { name: "FS 2016"},
        { name: "HS 2016"},
        { name: "FS 2015"},
        { name: "HS 2015"},
        { name: "FS 2014"},
        { name: "HS 2014"}
    ];
</script>

<style>
    .timeline {

    }    

    hr.vertical {
  width: 0px;
  height: 100%;
  /* or height in PX */
}
</style>

<div class="timeline">
    {#each numbers as number}
        {#each events as event}
            <div class="container">
                { event.name }
            </div>
        {/each}
    {/each}
</div>
<hr width="1" size="500">