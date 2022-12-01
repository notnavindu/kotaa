import type { LayoutLoad } from '.././$types';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { redirect } from '@sveltejs/kit';
import { PUBLIC_ALLOWED_EMAILS } from '$env/static/public';

export const load: LayoutLoad = async (event) => {
	const { session } = await getSupabase(event);

	if (!session?.user) throw redirect(307, '/login');

	if (!PUBLIC_ALLOWED_EMAILS.split(',').includes(session?.user.email as string))
		throw redirect(307, '/invalid-user');
};
