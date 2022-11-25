import Redis from '$lib/redis';
import { getServerSession, getSupabase } from '@supabase/auth-helpers-sveltekit';
import { error, redirect } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET(event: any) {
	const { slug } = event.params;
	if (slug == 'favicon.ico') return new Response(null);

	const [url, val] = await Promise.all([
		Redis.hget('LINKS', slug),
		Redis.hincrby('CLICKS', slug, 1)
	]);

	if (!url) throw redirect(301, 'https://google.com');

	throw redirect(302, `${url}`);
}
