<script lang="ts">
	import { goto } from '$app/navigation';
	import { supabaseClient } from '$lib/supabaseClient';

	let loading = false;
	let email: string;
	let password: string;

	const handleSignUp = async () => {
		try {
			loading = true;
			const { data, error } = await supabaseClient.auth.signUp({ email, password });

			console.log(data, error);
			if (error) throw error;

			goto('/profile');
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	};
</script>

<form class="row flex-center flex" on:submit|preventDefault={handleSignUp}>
	<div class="col-6 form-widget">
		<h1 class="header">Sign Up</h1>

		<div>
			<input class="" type="email" placeholder="Your email" bind:value={email} />
			<input class="" type="password" placeholder="Password" bind:value={password} />
		</div>

		<div>
			<input
				type="submit"
				class="button block"
				value={loading ? 'Loading' : 'Sign Up'}
				disabled={loading}
			/>
		</div>
	</div>
</form>
