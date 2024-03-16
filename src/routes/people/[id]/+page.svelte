<script lang="ts">
	import type { PageData } from "./$houdini";

export let data: PageData;
$: ({ people } = data);
</script>

<pre>{JSON.stringify($people, null, 2)}</pre>