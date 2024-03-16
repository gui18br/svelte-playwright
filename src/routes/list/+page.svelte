<script lang="ts">
	import type { PageData } from "./$houdini";

export let data: PageData;
$: ({ ListOfPeople } = data);

</script>

<h2>List</h2>

<ul>
    {#each $ListOfPeople.data?.allPeople?.edges ?? [] as edge}
        <li style={`background-color: ${edge?.node?.skinColor}`}>{edge?.node?.name}</li>
    {/each}
</ul>