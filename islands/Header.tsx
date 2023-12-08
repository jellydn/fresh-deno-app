export default function Header() {
  return (
    <header class="text-gray-600 body-font">
      <div class="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
        <a
          class="flex items-center mb-4 font-medium text-gray-900 md:mb-0 title-font"
          href="/"
        >
          <img
            src="/logo.svg"
            height="100px"
            alt="the fresh logo: a sliced lemon dripping with juice"
          />
          <span class="ml-3 text-xl">Fresh Deno App</span>
        </a>
        <nav class="flex flex-wrap justify-center items-center text-base md:mr-auto md:ml-auto">
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
        <div class="inline-flex items-center py-1 px-3 mt-4 text-base bg-gray-100 rounded border-0 md:mt-0 hover:bg-gray-200 focus:outline-none">
          <a
            href="/api/uuid"
            target="_blank"
            rel="noopener noreferrer"
            class="mr-5 hover:text-gray-900"
          >
            Random API
          </a>
        </div>
        <div class="inline-flex items-center py-1 px-3 mt-4 text-base bg-gray-100 rounded border-0 md:mt-0 hover:bg-gray-200 focus:outline-none">
          <a
            href="/api/joke"
            target="_blank"
            rel="noopener noreferrer"
            class="mr-5 hover:text-gray-900"
          >
            Joke API
          </a>
        </div>
      </div>
    </header>
  );
}
