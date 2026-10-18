Deno.serve(() => new Response(JSON.stringify({ id: (Deno.env.get("GOOGLE_ANALYTICS_MEASUREMENT_ID") ?? "").trim() }), { headers: { "Content-Type": "application/json" } }));
