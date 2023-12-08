import { FreshContext } from "$fresh/server.ts";

interface State {
  data: string;
}

export async function handler(
  _req: Request,
  ctx: FreshContext<State>,
) {
  ctx.state.data = "ITMAN";
  const resp = await ctx.next();
  resp.headers.set("server", "fresh server (deno)");
  return resp;
}
