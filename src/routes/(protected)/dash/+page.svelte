<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	let link: string;
	let slug: string;
	let loading = false;

	const createNewLink = async () => {
		loading = true;
		const data = {
			[slug]: link
		};

		await fetch('/link', {
			method: 'POST',
			body: JSON.stringify(data)
		});
		loading = false;
	};
</script>

<div
	class="w-full max-w-2xl m-auto p-8"
	class:pointer-events-none={loading}
	class:opacity-50={loading}
>
	<div class="text-3xl">Links</div>
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
				{#each Object.keys(data.links) as link (link)}
					<tr>
						<td class="py-4 px-6"> {link} </td>

						<td class="py-4 px-6"> {data.links[link]} </td>
						<td class="py-4 px-6 w-12 text-right"> 1 </td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
