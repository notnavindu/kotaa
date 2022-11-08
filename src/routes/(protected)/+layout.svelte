<script>
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
</script>

{#if !$page.data.session}
	<div>Not logged in</div>
{:else}
	<slot />
{/if}
