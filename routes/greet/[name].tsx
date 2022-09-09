import { Handlers, PageProps } from "$fresh/server.ts";

import Header from "../../islands/Header.tsx";
interface Owner {
  name: string;
}

export const handler: Handlers<Owner | null> = {
  GET(_, ctx) {
    const user: Owner = {
      name: ctx.state.data as string,
    };
    return ctx.render(user);
  },
};

export default function Greet(props: PageProps<Owner | null>) {
  return (
    <main class="p-4 mx-auto max-w-screen-md">
      <Header />
      Hello {props.params.name} from {props.data?.name}
    </main>
  );
}
