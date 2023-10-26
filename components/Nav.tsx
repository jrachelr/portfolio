import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <h1 className="text-2xl font-bold text-white grid place-content-center mb-2 md:mb-0">
          <Link
            href="/"
            className="text-white/90 no-underline hover:text-white"
          >
            Home
          </Link>
        </h1>
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-2xl lg:text-2xl">
          <Link
            href="/posts"
            className="text-white/90 no-underline hover:text-white"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-white/90 no-underline hover:text-white"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
