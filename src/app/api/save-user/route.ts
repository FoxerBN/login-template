import { sql } from "@/app/config/supabase";
import { userSchema } from "@/app/lib/userValidator";
import logger from "@/app/lib/logger";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const parse = userSchema.safeParse(body);
    if (!parse.success) {
      logger.error("Validation failed", { errors: parse.error.errors }); // Log validation errors
      return new Response(JSON.stringify({ error: "Invalid data", details: parse.error.errors }), { status: 400 });
    }
    const { provider, provider_id, username, email } = parse.data;

    await sql`
      insert into public.users (provider, provider_id, username, email)
      values (${provider}, ${provider_id}, ${username ?? ""}, ${email ?? ""})
      on conflict (provider, provider_id) do update set
        username = excluded.username,
        email = excluded.email
    `;

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (error) {
    logger.error("Error in save-user POST", { error }); // Log any unexpected errors
    return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 });
  }
}
