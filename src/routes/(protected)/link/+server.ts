import Redis from '$lib/redis';
import { getServerSession, getSupabase } from '@supabase/auth-helpers-sveltekit';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST(event: any) {
	const data = await event.request.json();

	const session = await getServerSession(event);

	if (session?.user.email !== 'navanavi3@gmail.com') {
		throw '[403] Unauthorized';
	}

	if (Object.keys(data).length !== 1) {
		throw 'Fuck you';
	}

	await Redis.hset('LINKS', data);

	return new Response('done');
}
