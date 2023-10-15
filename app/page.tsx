import PostList from "@/components/PostList";
import Navbar from "@/components/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        <span className="whitespace-nowrap">
          Hi, I&apos;m <span className="font-bold">Rachel</span>.
        </span>
      </p>
    </div>
  );
}
