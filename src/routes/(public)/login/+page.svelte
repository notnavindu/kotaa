<script lang="ts">
	import { goto } from '$app/navigation';
	import { supabaseClient } from '$lib/supabaseClient';

	let loading = false;

	const handleLogin = async () => {
		try {
			loading = true;
			const { data, error } = await supabaseClient.auth.signInWithOAuth({
				provider: 'google'
			});

			console.log(data, error);

			if (error) throw error;
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	};
</script>

<div class="w-full h-screen flex items-center justify-center flex-col">
	<div class="text-3xl mb-4">Kotaa</div>
	<form on:submit|preventDefault={handleLogin}>
		<input
			type="submit"
			class="w-full max-w-lg bg-zinc-700 py-1 px-4 rounded-md"
			value={loading ? 'Loading' : 'Sign in with Google'}
			disabled={loading}
		/>
	</form>
</div>
