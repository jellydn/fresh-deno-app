import { PageProps } from "$fresh/server.ts";
import { Handlers } from "$fresh/server.ts";

import Header from "../islands/Header.tsx";

const NAMES = ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank"];

interface Data {
  results: string[];
  query: string;
}

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const query = url.searchParams.get("q") || "";
    const results = NAMES.filter((name) => name.includes(query));
    return ctx.render({ results, query });
  },
};

export default function Page({ data }: PageProps<Data>) {
  const { results, query } = data;
  return (
    <div class="p-4 mx-auto max-w-screen-md">
      <Header />
      <div
        class="w-full bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
      >
        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
          Search by name
        </h2>
        <form>
          <div class="relative mb-4">
            <label for="q" class="leading-7 text-sm text-gray-600">
              Keyword
            </label>
            <input
              type="text"
              id="q"
              name="q"
              value={query}
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <button
            type="submit"
            class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Search
          </button>
        </form>
        <div class="flex flex-wrap">
          <ul class="lg:w-1/3 sm:w-1/2 p-4">
            {results.map((name) => (
              <li class="text-lg text-gray-900" key={name}>
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
