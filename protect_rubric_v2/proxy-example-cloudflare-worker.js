// Example Cloudflare Worker proxy for PROTECT Rubric v2.0 AI Assist.
// Store OPENAI_API_KEY as a Worker secret. Do not expose it in browser code.
export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') return cors(new Response(null, { status: 204 }));
    if (request.method !== 'POST') return cors(new Response('Method not allowed', { status: 405 }));
    const { prompt, model = 'gpt-4o-mini', temperature = 0.1 } = await request.json();
    const aiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${env.OPENAI_API_KEY}` },
      body: JSON.stringify({ model, temperature, response_format: { type: 'json_object' }, messages: [{ role: 'user', content: prompt }] })
    });
    const data = await aiRes.json();
    const text = data.choices?.[0]?.message?.content || JSON.stringify(data);
    return cors(Response.json({ text }));
  }
}
function cors(res) {
  res.headers.set('Access-Control-Allow-Origin', '*');
  res.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  return res;
}
