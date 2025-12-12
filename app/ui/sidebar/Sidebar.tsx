import Link from "next/link";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";

export default function Sidebar() {
  return (
    <div className="md:py-4">
      <Link href="/store" className="bg-purple-500 mb-4 flex h-20 items-center justify-center rounded-md p-4">
        <div className="w-32 md:w-40">
          <Logo />
        </div>
      </Link>

      <div className="flex max-md:flex-row flex-wrap gap-2 justify-center md:grow md:flex-col md:justify-between space-x-2 md:space-x-0 md:space-y-2">
        <NavLinks />
        <form action="">
          <button type="submit" aria-label="Sign Out" className="flex h-[48px] justify-center items-center gap-2 rounded-md bg-gray-50 text-sm font-medium p-3 hover:bg-sky-100 hover:text-purple-600 md:flex-none md:justify-start md:px-3">
            <ArrowLeftOnRectangleIcon className="h-6 w-6 inline-block ml-1" />
          </button>
        </form>
      </div>
    </div>
  );
}
