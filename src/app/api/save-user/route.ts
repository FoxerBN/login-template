import { sql } from "@/app/config/supabase";
import { userSchema } from "@/app/lib/userValidator";

export async function POST(req: Request) {
  const body = await req.json();

  const parse = userSchema.safeParse(body);
  if (!parse.success) {
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
}
