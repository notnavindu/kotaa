import Redis from '$lib/redis';
import { getServerSession, getSupabase } from '@supabase/auth-helpers-sveltekit';
import { PUBLIC_ALLOWED_EMAILS } from '$env/static/public';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST(event: any) {
	const data = await event.request.json();

	const session = await getServerSession(event);

	// TODO: Move to hooks prolly
	if (!PUBLIC_ALLOWED_EMAILS.split(',').includes(session?.user.email as string))
		throw 'Unauthorized';

	if (Object.keys(data).length !== 1) {
		throw 'Fuck you';
	}

	await Redis.hset('LINKS', data);

	return new Response('done');
}

/** @type {import('./$types').RequestHandler} */
export async function DELETE(event: any) {
	const { slug } = await event.request.json();

	if (slug.length == 0) {
		throw 'Invalid slug';
	}

	const session = await getServerSession(event);

	if (!PUBLIC_ALLOWED_EMAILS.split(',').includes(session?.user.email as string))
		throw 'Unauthorized';

	await Redis.hdel('LINKS', slug);

	return new Response('done');
}
