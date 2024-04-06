import Link from "next/link";
import { GitHub, Mail, Gitlab, Linkedin } from "react-feather";

export default function Footer() {
  const footerItems = {
    "mailto:racheljdev@gmail.com": {
      icon: <Mail />,
    },
    "https://github.com/jrachelr": {
      icon: <GitHub />,
    },
    "https://gitlab.com/jrachelr1": {
      icon: <Gitlab />,
    },
    "https://www.linkedin.com/in/jrachelr1/": {
      icon: <Linkedin />,
    },
  };

  return (
    <div className="mb-2 mt-6">
      <footer
        className="mt-6 flex flex-row-reverse items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
        id="footer"
      >
        <div className="flex flex-row space-x-0 pr-10 dark:text-white no-underline">
          {Object.entries(footerItems).map(([path, { icon }]) => {
            return (
              <Link
                key={path}
                href={path}
                target="_blank"
                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
              >
                {icon}
              </Link>
            );
          })}
        </div>
      </footer>
    </div>
  );
}
