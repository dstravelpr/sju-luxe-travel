import { createClient } from "npm:@supabase/supabase-js@2";
import { validateCruiseRequest } from "../_shared/cruise-request-validation.ts";
const headers = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type", "Content-Type": "application/json" };
Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers });
  if (req.method !== "POST") return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405, headers });
  try {
    const data = validateCruiseRequest(await req.json());
    if (!data) return new Response(JSON.stringify({ error: "Invalid request" }), { status: 400, headers });
    const client = createClient(Deno.env.get("SUPABASE_URL") ?? "", Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "");
    const { error } = await client.from("cruise_requests").insert(data);
    if (error) { console.error("Cruise request insert failed:", error.code); return new Response(JSON.stringify({ error: "Unable to save" }), { status: 500, headers }); }
    return new Response(JSON.stringify({ saved: true }), { headers });
  } catch { return new Response(JSON.stringify({ error: "Invalid request" }), { status: 400, headers }); }
});
