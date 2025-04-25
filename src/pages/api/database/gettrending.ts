import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';

export const GET: APIRoute = async ({ request }) => {
    const { data, error } = await supabase.rpc('get_most_viewed');
    if (error) {
        return new Response(JSON.stringify({ error }), { status: 500 });
    }
    return new Response(JSON.stringify(data), { status: 200});
}