import redis from '$lib/redis';

/** @type {import('./$types').PageLoad} */
export async function load({}) {
	const pipeline = redis.pipeline();

	pipeline.hgetall('LINKS');
	pipeline.hgetall('CLICKS');

	const [links, clicks] = await pipeline.exec<[any, any]>();

	return { links: links, clicks: clicks };
}
