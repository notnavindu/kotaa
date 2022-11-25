import Redis from 'ioredis';
import { REDIS_CONNECTION } from '$env/static/private';

const connectionString = REDIS_CONNECTION;

export const MOVIE_IDS_KEY = 'movie_ids';

console.log(REDIS_CONNECTION);

export default connectionString
	? new Redis(REDIS_CONNECTION, {
			tls: {
				rejectUnauthorized: false
			}
	  })
	: new Redis();
