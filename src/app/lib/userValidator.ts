import { z } from "zod";

export const userSchema = z.object({
  provider: z.string().min(1),
  provider_id: z.string().min(1),
  username: z.string().min(1),
  email: z.string().email().optional().or(z.literal("")),
});