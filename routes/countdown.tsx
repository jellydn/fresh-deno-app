/** @jsx h */
import { h } from "preact";
import CountDown from "../islands/CountDown.tsx";

export default function Page() {
  const date = new Date();
  date.setHours(date.getHours() + 1);
  return (
    <p>
      The big event is happening <CountDown target={date.toISOString()} />.
    </p>
  );
}
