// Cloudflare Worker Proxy
// Save this as index.js in your Worker project
export default {
  async fetch(request) {
    const url = new URL(request.url);
    const target = url.searchParams.get('url');
    if (!target) {
      return new Response('Missing url parameter', { status: 400 });
    }
    const resp = await fetch(target, {
      headers: request.headers,
      method: request.method,
      body: request.body,
    });
    return resp;
  }
};
