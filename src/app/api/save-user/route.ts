
import { sql } from "@/app/config/supabase";


export async function POST(req: Request) {
  const { provider, provider_id, username, email } = await req.json();

  await sql`
    insert into public.users (provider, provider_id, username, email)
    values (${provider}, ${provider_id}, ${username ?? ""}, ${email ?? ""})
    on conflict (provider, provider_id) do update set
      username = excluded.username,
      email = excluded.email
  `;

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
}

