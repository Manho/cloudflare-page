export default {
    async fetch(request, env) {
      let res = await env.ASSETS.fetch(request);
  
      if (res.ok && res.headers.get("Content-Type")?.includes("text/html")) {
        let html = await res.text();
        html = html.replace(/__GD_MAP_KEY__/g, env.GD_MAP_KEY);
        return new Response(html, res);
      }
      return res;
    }
  };