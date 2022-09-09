import Header from "../islands/Header.tsx";
import CountDown from "../islands/CountDown.tsx";

export default function Page() {
  const date = new Date();
  date.setHours(date.getHours() + 1);
  return (
    <div class="p-4 mx-auto max-w-screen-md">
      <Header />
      <p>
        The big event is happening <CountDown target={date.toISOString()} />.
      </p>
    </div>
  );
}
