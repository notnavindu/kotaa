<script lang="ts">
	import { goto } from '$app/navigation';
	import { supabaseClient } from '$lib/supabaseClient';

	let loading = false;
	let email: string;
	let password: string;

	// TODO: @Nav
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

<form class="row flex-center flex" on:submit|preventDefault={handleLogin}>
	<div class="col-6 form-widget">
		<h1 class="header">Log in</h1>

		<div>
			<input
				type="submit"
				class="button block"
				value={loading ? 'Loading' : 'Login'}
				disabled={loading}
			/>
		</div>
	</div>
</form>
