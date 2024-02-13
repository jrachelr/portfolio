import Link from "next/link";
import { GitHub, Mail } from "react-feather";

export default function Footer() {
  const footerItems = {
    "https://github.com/jrachelr": {
      icon: <GitHub />,
    },

    "mailto:jrachelr1@gmail.com": {
      icon: <Mail />,
    },
  };

  return (
    <aside className=" mt-auto ">
      <div className="my-10">
        <footer
          className="flex flex-row-reverse items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="footer"
        >
          <div className="flex flex-row space-x-0 pr-10 dark:text-white no-underline">
            {Object.entries(footerItems).map(([path, { icon }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
                >
                  {icon}
                </Link>
              );
            })}
          </div>
        </footer>
      </div>
    </aside>
  );
}
