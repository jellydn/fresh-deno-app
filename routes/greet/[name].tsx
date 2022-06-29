/** @jsx h */
import { h } from "preact";
import { PageProps, Handlers } from "$fresh/server.ts";

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
    <div>
      Hello {props.params.name} from {props.data?.name}
    </div>
  );
}
