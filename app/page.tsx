import Image from "next/image";
export default function Home() {
  return (
    <section>
      <div className="px-6 pt-2 flex flex-row">
        <Image
          src="/images/profile.jpg"
          alt="me"
          width="300"
          height="400"
          className="rounded-3xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
        />
        <div className="px-6 flex flex-col">
          <h1 className="prose prose-2xl font-bold dark:prose-invert whitespace-nowrap my-5">
            Hi, I&apos;m Rachel
          </h1>
          <div className="prose dark:prose-invert prose-sm">
            <p>I&apos;m a data analyst, developer, and artist.</p>
            <p>
              I&apos;ve always loved puzzles and discovering how aspects of our
              world are connected.
            </p>
            <p>
              I bring a lens of curiosity while working with data, uncovering
              patterns not seen at first glance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
