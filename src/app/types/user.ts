export interface UserRow {
  id: string;
  provider: string;
  username: string;
  email?: string | null;
  created_at: string;
}