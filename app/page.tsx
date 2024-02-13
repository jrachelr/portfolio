import Link from "next/link";
export default function Home() {
  return (
    <div className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        <span className="whitespace-nowrap">Hello! I&apos;m Rachel 💫</span>
      </p>
      <div className="prose dark:prose-invert">
        <p>
          I&apos;m a software engineer, empath, and problem solver. I&apos;m
          currently contributing to opensource and learning new things every
          day, which you can read about <Link href="/posts">here</Link>.
        </p>
      </div>
    </div>
  );
}
