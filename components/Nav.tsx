import Link from "next/link";
import { GitHub, Mail, Gitlab, Linkedin } from "react-feather";

export default function Navbar() {
  const navItems = {
    "/": {
      name: "home",
    },
    "/portfolio": {
      name: "portfolio",
    },
    "/posts": {
      name: "posts",
    },
    "/impact": {
      name: "impact",
    },
  };

  const contactLinks = {
    "mailto:racheljdev@gmail.com": {
      icon: <Mail />,
    },
    "https://github.com/jrachelr": {
      icon: <GitHub />,
    },
    "https://www.linkedin.com/in/jrachelr1/": {
      icon: <Linkedin />,
    },
  };

  return (
    <aside className="my-8">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-8 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row absolute left-0 space-x-0 pr-10 dark:text-white no-underline">
            {Object.entries(navItems).map(([path, { name }]) => {
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
          <div className="flex flex-row absolute right-0 space-x-0 dark:text-white no-underline">
            {Object.entries(contactLinks).map(([path, { icon }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  target="_blank"
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative right-0 py-1 px-2"
                >
                  {icon}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
