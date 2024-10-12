"use client";
import { sendGTMEvent } from "@next/third-parties/google";

export default function Page() {
  function handleClick() {
    console.log("you clicked me");
    sendGTMEvent({ event: "buttonClicked", value: "GTM event button clicked" });
  }
  return (
    <section>
      <div className="transition-all  dark:text-white no-underline hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2">
        <button onClick={handleClick}>Click me</button>
      </div>
    </section>
  );
}
