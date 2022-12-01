<script>
	import { supabaseClient } from '$lib/supabaseClient';
	import { onMount } from 'svelte';

	const signOut = async () => {
		try {
			let { error } = await supabaseClient.auth.signOut();
			if (error) throw error;
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
		}
	};

	onMount(() => {
		signOut();
	});
</script>

<div class="w-full h-screen flex flex-col text-2xl items-center justify-center">
	Your account does not have permission :p

	<div class=" opacity-80 text-sm mt-8">
		<a href="/login">Back to login</a>
	</div>
</div>
