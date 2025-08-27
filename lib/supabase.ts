import {createClient} from "@supabase/supabase-js";
import {auth} from "@clerk/nextjs/server";

export const createSupabaseClient = async () => {
    const token = await (await auth()).getToken();
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl) {
        throw new Error("Environment variable NEXT_PUBLIC_SUPABASE_URL is missing");
    }
    if (!supabaseAnonKey) {
        throw new Error("Environment variable NEXT_PUBLIC_SUPABASE_ANON_KEY is missing");
    }

    return createClient(
        supabaseUrl,
        supabaseAnonKey,
        {
            global: {
                headers: token ? { Authorization: `Bearer ${token}` } : {}
            }
        }
    )
}