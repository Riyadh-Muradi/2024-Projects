import Link from "next/link";
import { ThemeToggle } from "../ThemeToggle";

export async function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex h-[9vh] flex-wrap items-center border bg-background transition dark:bg-background">
      <div className="ml-auto mr-auto flex items-center justify-center">
        <Link href="/">
          <h1 className="font-sm cursor-pointer text-2xl transition-all hover:font-bold">
            Color Picker
          </h1>
        </Link>

        <div className="ml-2 flex items-center gap-x-2">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
