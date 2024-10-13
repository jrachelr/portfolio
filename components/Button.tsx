import { sendGTMEvent } from "@next/third-parties/google";

export default function EventButton() {
  <div>
    <button
      onClick={() => sendGTMEvent({ event: "buttonClicked", value: "xyz" })}
    >
      Send Event
    </button>
  </div>;
}
