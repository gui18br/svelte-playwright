<script lang="ts">
	import type { PageData } from "./$houdini";

export let data: PageData;
$: ({ ListOfPeople } = data);

</script>

<h2>List</h2>

{#each $ListOfPeople.data?.allPeople?.edges ?? [] as edge}
    <div>
        {edge?.node?.name}
    </div>
{/each}