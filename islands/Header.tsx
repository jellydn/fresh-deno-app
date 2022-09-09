export default function Header() {
  return (
    <header class="text-gray-600 body-font">
      <div
        class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
      >
        <a
          class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          href="/"
        >
          <img
            src="/logo.svg"
            height="100px"
            alt="the fresh logo: a sliced lemon dripping with juice"
          />
          <span class="ml-3 text-xl">Fresh Deno App</span>
        </a>
        <nav
          class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"
        >
          <a href="/about" class="mr-5 hover:text-gray-900">
            About
          </a>
          <a href="/greet/jellydn" class="mr-5 hover:text-gray-900">
            Greet
          </a>
          <a href="/search" class="mr-5 hover:text-gray-900">
            Search
          </a>
          <a href="/countdown" class="mr-5 hover:text-gray-900">
            Count down
          </a>
          <a href="/github/jellydn" class="mr-5 hover:text-gray-900">
            Github
          </a>
        </nav>
        <div
          class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
        >
          <a
            href="/api/uuid"
            target="_blank"
            class="mr-5 hover:text-gray-900"
          >
            Random API
          </a>
        </div>
        <div
          class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
        >
          <a
            href="/api/joke"
            target="_blank"
            class="mr-5 hover:text-gray-900"
          >
            Joke API
          </a>
        </div>
      </div>
    </header>
  );
}
