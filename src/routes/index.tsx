import { createSignal, onMount } from "solid-js";
import { commands, events } from "~/bindings";
import Charts from "~/components/Charts";

export default function Page() {
  const [greetMsg, setGreetMsg] = createSignal("");
  const [name, setName] = createSignal("");
  const [demoEventMessage, setDemoEvent] = createSignal("listening..");

  async function greet() {
    setGreetMsg(await commands.greet(name()));
  }

  onMount(() => {
    events.demoEvent.listen((msg) => {
      setDemoEvent(msg.payload);
      return console.log("event received", msg);
    });
  });

  return (
    <div class="flex min-h-screen flex-col justify-center gap-6 text-center dark:bg-neutral-800 dark:text-neutral-200">
        <Charts />
      <h1 class="text-center text-4xl font-semibold text-neutral-50">
        Quantum
      </h1>

      <div class="flex justify-center">
        <a
          href="https://tauri.app"
          target="_blank"
          class="drop-shadow-sm hover:drop-shadow-[0_0_32px_#24c8db]  "
        >
          <img
            src="/tauri.svg"
            class="h-36 p-6 transition-all duration-700 will-change-[filter] hover:drop-shadow-[0_0_32px_#24c8db]"
            alt="Tauri logo"
          />
        </a>
        <a
          href="https://solidjs.com"
          target="_blank"
          class="hover:text-indigo-600 focus:text-indigo-600"
        >
          <img
            src="/solid.svg"
            class="h-36 p-6 transition-all duration-700 will-change-[filter] hover:drop-shadow-[0_0_32px_#2f5d90]"
            alt="Solid logo"
          />
        </a>
      </div>

      <p class="terxt-3xl p-6 text-neutral-300">
        Tauri running Solid even on mobile 🤯
      </p>

      <form
        class="flex justify-center"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <input
          id="greet-input"
          class="text-md mr-1 rounded-md p-4 placeholder:text-neutral-400 focus:outline focus:outline-1 focus:outline-cyan-400 dark:bg-neutral-900"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <button
          type="submit"
          class="text-md rounded-md p-4 dark:bg-neutral-900 dark:text-neutral-200"
        >
          Greet
        </button>
      </form>

      <p>{greetMsg()}</p>
      <p>{demoEventMessage()}</p>
      <div class="flex flex-col justify-center text-gray-900">
        <div class="">
          <h2 class="text-2xl text-gray-200">
            Using ApexCharts.js to create charts in SolidJS
          </h2>
          <h3 class="text-xl text-gray-200">Bar Chart</h3>
        </div>
      </div>
    </div>
  );
}
