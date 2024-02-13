import Link from "next/link";

export default function Footer() {
  const footerItems = {
    "/": {
      name: "github",
    },

    "/posts": {
      name: "mail",
    },
  };

  return (
    <aside className="-mr-[8px] mt-6 tracking-tight">
      <div className="lg:sticky lg:bottom-20">
        <footer
          className="flex flex-row-reverse items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="footer"
        >
          <div className="flex flex-row space-x-0 pr-10 dark:text-white no-underline">
            {Object.entries(footerItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </footer>
      </div>
    </aside>
  );
}
