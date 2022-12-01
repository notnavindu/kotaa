<script lang="ts">
	import { supabaseClient } from '$lib/supabaseClient';
	import type { AuthSession } from '@supabase/supabase-js';
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import NewLinkModal from '$lib/components/NewLinkModal.svelte';
	import { flip } from 'svelte/animate';

	export let data: PageData;
	export let session: AuthSession = $page.data.session;

	let modalOpen = false;
	let loading = false;

	const signOut = async () => {
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
	};
</script>

{#if modalOpen}
	<NewLinkModal on:ModalClose={() => (modalOpen = false)} />
{/if}

<div class="w-full max-w-5xl p-8 m-auto mt-8">
	<div class="flex justify-between">
		<div class="text-3xl">Dashboard</div>
		<button
			on:click={() => (modalOpen = true)}
			class="w-fit py-1 px-5 bg-blue-700 rounded-md mt-4 hover:bg-blue-600">New</button
		>
	</div>

	<button on:click={signOut}>sign out TEMP {session.user.email}</button>

	<div class="overflow-x-auto relative mt-6">
		<table class="w-full text-sm text-left rounded-md overflow-hidden">
			<thead class="text-xs uppercase bg-zinc-900 ">
				<tr>
					<th scope="col" class="py-3 px-6"> Slug </th>
					<th scope="col" class="py-3 px-6"> URL </th>
					<th scope="col" class="py-3 px-6"> Clicks </th>
				</tr>
			</thead>
			<tbody class="bg-zinc-800">
				{#if data.links}
					{#each Object.keys(data.links) as link (link)}
						<tr animate:flip={{ duration: 300 }}>
							<td class="py-4 px-6"> {link} </td>

							<td class="py-4 px-6"> {data.links[link]} </td>
							<td class="py-4 px-6 w-12 text-right"> {data.clicks[link] || 0} </td>
						</tr>
					{/each}
				{/if}
			</tbody>
		</table>
	</div>
</div>
