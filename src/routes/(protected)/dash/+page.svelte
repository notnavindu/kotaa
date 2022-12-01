<script lang="ts">
	import { supabaseClient } from '$lib/supabaseClient';
	import type { AuthSession } from '@supabase/supabase-js';
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import NewLinkModal from '$lib/components/NewLinkModal.svelte';
	import { flip } from 'svelte/animate';
	import { invalidateAll } from '$app/navigation';
	import { sortAlpha } from '$lib/util/helpers.util';

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

	const deleteConfirmation = (slug: string) => {
		if (confirm('Are you sure you want to delete this link?')) deleteLink(slug);
	};

	const deleteLink = async (slug: string) => {
		loading = true;

		await fetch('/link', {
			method: 'DELETE',
			body: JSON.stringify({ slug })
		});

		invalidateAll();

		loading = false;
	};
</script>

{#if modalOpen}
	<NewLinkModal on:ModalClose={() => (modalOpen = false)} />
{/if}

<div class="w-full max-w-5xl p-8 m-auto mt-8">
	<div class="flex items-center justify-between">
		<div class="flex items-start justify-center gap-3 text-3xl leading-none">
			<img class="w-8" src="/logo.png" alt="logo" />
			Kotaa
		</div>

		<button
			on:click={() => (modalOpen = true)}
			class="w-fit py-1 px-5 bg-violet-600 rounded-md hover:bg-violet-500">New</button
		>
	</div>

	<div class="overflow-x-auto relative mt-6">
		<table class="w-full text-sm text-left rounded-md overflow-hidden">
			<thead class="text-xs uppercase bg-zinc-900 ">
				<tr>
					<th scope="col" class="py-3 px-6"> Slug </th>
					<th scope="col" class="py-3 px-6"> URL </th>
					<th scope="col" class="py-3 px-6"> Clicks </th>
					<th scope="col" class="py-3 px-6"> Delete </th>
				</tr>
			</thead>
			<tbody class="bg-zinc-800">
				{#if data.links}
					{#each Object.keys(data.links).sort(sortAlpha) as link (link)}
						<tr animate:flip={{ duration: 300 }}>
							<td class="py-4 px-6"> {link} </td>

							<td class="py-4 px-6 opacity-60"> {data.links[link]} </td>
							<td class="py-4 px-6 w-12 text-right"> {data.clicks[link] || 0} </td>
							<td class="py-4 px-6 text-center text-red-300">
								<button on:click={() => deleteConfirmation(link)}> ✕ </button>
							</td>
						</tr>
					{/each}
				{/if}
			</tbody>
		</table>
	</div>

	<div class="mt-12 text-sm opacity-40">
		Signed in as {session.user.email} <br />
		<button class="underline" on:click={signOut}>sign out</button>
	</div>
</div>
