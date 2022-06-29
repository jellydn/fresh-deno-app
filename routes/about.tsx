/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers } from "$fresh/server.ts";

import Header from "../islands/Header.tsx";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
};

export default function AboutPage() {
  return (
    <main class={tw`p-4 mx-auto max-w-screen-md`}>
      <Header />
      <h1>About</h1>
      <p>This is the about page.</p>
    </main>
  );
}
