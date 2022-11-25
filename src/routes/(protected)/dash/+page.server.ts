import redis from '$lib/redis';

/** @type {import('./$types').PageLoad} */
export async function load({}) {
	const links = await redis.hgetall('LINKS');

	return { links: links };
}
