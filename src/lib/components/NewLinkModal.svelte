<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
	import { invalidateAll } from '$app/navigation';

	let link: string;
	let slug: string;
	let loading = false;

	const dispatch = createEventDispatcher();

	const createNewLink = async () => {
		loading = true;
		const postData = {
			[slug]: link
		};

		await fetch('/link', {
			method: 'POST',
			body: JSON.stringify(postData)
		});

		invalidateAll();
		dispatch('ModalClose');
		loading = false;
	};

	$: link && slugify();

	const slugify = () => {
		try {
			let segments = new URL(link).host.split('.');
			slug = segments[segments.length - 2];
		} catch (error) {}
	};

	const closeModal = () => {
		dispatch('ModalClose');
	};
</script>

<div
	transition:fade={{ duration: 100 }}
	class="w-full h-screen fixed bg-black bg-opacity-60 backdrop-blur-sm z-50 grid place-items-center p-5"
>
	<div
		class="w-full max-w-xl m-auto p-8 bg-zinc-800 rounded-md relative"
		class:pointer-events-none={loading}
	>
		<button class="absolute right-4 top-3 opacity-50" on:click={closeModal}>✕</button>

		<form on:submit|preventDefault={createNewLink}>
			<div class="flex flex-col gap-3">
				<label>
					Long Link
					<input
						required
						bind:value={link}
						placeholder="URL"
						class="w-full bg-zinc-800 border border-zinc-400 px-2 py-1 rounded-md mt-2"
					/>
				</label>

				<label>
					Slug
					<input
						required
						bind:value={slug}
						placeholder="/"
						class="w-full bg-zinc-800 border border-zinc-400 px-2 py-1 rounded-md mt-2"
					/>
				</label>

				<button
					disabled={loading}
					class:opacity-50={loading}
					class="w-full py-2 bg-violet-700 rounded-md mt-4 hover:bg-violet-600">Shorten</button
				>
			</div>
		</form>
	</div>
</div>
