import { useSignal } from "@preact/signals";
import { IS_BROWSER } from "$fresh/runtime.ts";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const count = useSignal(props.start);
  return (
    <div class="flex gap-2 w-full">
      <p class="text-xl font-bold flex-grow-1">{count}</p>
      <button
        type="button"
        class={"px-2 py-1 border(gray-100 1) hover:bg-gray-200"}
        onClick={() => count.value--}
        disabled={!IS_BROWSER}
      >
        -1
      </button>
      <button
        type="button"
        class={"px-2 py-1 border(gray-100 1) hover:bg-gray-200"}
        onClick={() => count.value++}
        disabled={!IS_BROWSER}
      >
        +1
      </button>
    </div>
  );
}
