export const onRequest = async ({ request, env, next }) => {
    let res = await next();
    if (res.headers.get("content-type")?.includes("text/html")) {
      const html = (await res.text()).replace(/__GD_MAP_KEY__/g, env.GD_MAP_KEY);
      return new Response(html, res);
    }
    return res;
  };