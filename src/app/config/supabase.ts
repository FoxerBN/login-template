// conf/db.ts
import postgres from "postgres";
export const sql = postgres(process.env.SUPABASE_URL!, { ssl: "require" });
