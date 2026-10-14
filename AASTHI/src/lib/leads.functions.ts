import { createServerFn } from "@tanstack/react-start";
import { leadSchema } from "./lead-schema";

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => leadSchema.parse(data))
  .handler(async ({ data }) => {
    // Honeypot: bots fill the hidden field; pretend success.
    if (data.website) return { ok: true as const };
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("early_access_leads").insert({
      full_name: data.fullName,
      email: data.email.toLowerCase(),
      phone: data.phone,
      role: data.role,
      city: data.city,
      consent: true,
    });
    if (error) {
      if (error.code === "23505") return { ok: true as const, duplicate: true };
      console.error("lead insert failed", error.message);
      throw new Error("Could not save your registration. Please try again.");
    }
    return { ok: true as const };
  });
