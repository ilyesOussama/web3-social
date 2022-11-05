import ThemeButton from "./ThemeButton";
import Link from "next/link";
import clsx from "clsx";

import { useRouter } from "next/router.js";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="flex flex-row items-center justify-between mb-6">
      <ul className="">
        <Link
          href="/"
          className={clsx(
            "px-4 py-2",
            "hover:rounded-md hover:bg-gray-300 hover:dark:bg-gray-700",
            router.pathname == "/"
              ? "rounded-md bg-gray-300 dark:bg-gray-700"
              : null
          )}
        >
          Home
        </Link>
        <Link
          href="/explore"
          className={clsx(
            "px-4 py-2",
            "hover:rounded-md hover:bg-gray-300 hover:dark:bg-gray-700",
            router.pathname == "/explore"
              ? "rounded-md bg-gray-300 dark:bg-gray-700"
              : null
          )}
        >
          Explore
        </Link>
        <Link
          href="/profiles"
          className={clsx(
            "px-4 py-2",
            "hover:rounded-md hover:bg-gray-300 hover:dark:bg-gray-700",
            router.pathname == "/profiles"
              ? "rounded-md bg-gray-300 dark:bg-gray-700"
              : null
          )}
        >
          Profiles
        </Link>
      </ul>
      <ThemeButton />
    </nav>
  );
};

export default Navbar;
