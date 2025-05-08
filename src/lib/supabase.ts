import { createClient } from "@supabase/supabase-js";

let supabaseClient
try {
    supabaseClient = createClient(
        import.meta.env.SUPABASE_URL,
        import.meta.env.SUPABASE_ANON_KEY,
    );
} catch (error) {
    supabaseClient = null
}

export const supabase = supabaseClient;