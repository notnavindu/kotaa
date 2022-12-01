<script lang="ts">
	import { supabaseClient } from '$lib/supabaseClient';
	import type { AuthSession } from '@supabase/supabase-js';
	import type { PageData } from './$types';
	import { page } from '$app/stores';

	export let data: PageData;
	export let session: AuthSession = $page.data.session;

	let link: string;
	let slug: string;
	let loading = false;

	const createNewLink = async () => {
		loading = true;
		const postData = {
			[slug]: link
		};

		await fetch('/link', {
			method: 'POST',
			body: JSON.stringify(postData)
		});
		loading = false;
	};

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

<div
	class="w-full max-w-2xl m-auto p-8"
	class:pointer-events-none={loading}
	class:opacity-50={loading}
>
	<div class="text-3xl">Links</div>
	<button on:click={signOut}>sign out TEMP {session.user.email}</button>
	<div class="mt-8 flex flex-col gap-3">
		<input
			bind:value={link}
			placeholder="Link"
			class="w-full bg-zinc-800 border border-zinc-600 px-2 py-1 rounded-md"
		/>
		<input
			bind:value={slug}
			placeholder="/"
			class="w-full bg-zinc-800 border border-zinc-600 px-2 py-1 rounded-md"
		/>

		<button on:click={createNewLink} class="w-full py-2 bg-zinc-800 rounded-md">Shorten</button>
	</div>
</div>

<div class="w-full max-w-5xl p-8 m-auto mt-8">
	<div class="overflow-x-auto relative">
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
						<tr>
							<td class="py-4 px-6"> {link} </td>

							<td class="py-4 px-6"> {data.links[link]} </td>
							<td class="py-4 px-6 w-12 text-right"> 1 </td>
						</tr>
					{/each}
				{/if}
			</tbody>
		</table>
	</div>
</div>
