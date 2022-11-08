<script lang="ts">
	import { onMount } from 'svelte';
	import type { AuthSession } from '@supabase/supabase-js';
	import { supabaseClient } from '$lib/supabaseClient';
	import { page } from '$app/stores';

	export let session: AuthSession = $page.data.session;

	let loading = false;

	async function signOut() {
		try {
			loading = true;
			let { error } = await supabaseClient.auth.signOut();
			if (error) throw error;
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	}
</script>

<div class="text-2xl">
	Logged in as {session.user.email}
</div>

<div>
	<button class="button block" on:click={signOut} disabled={loading}>Sign Out</button>
</div>
