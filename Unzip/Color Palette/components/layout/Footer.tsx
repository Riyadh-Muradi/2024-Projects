import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-t from-primary/[1%] to-transparent">
      <div className="container mx-auto flex items-center justify-center py-6">
        <span className="">Designed by</span>
        <hr className="m-3 flex h-6 border-[1.5px] transition-all hover:rotate-[40deg]" />

        <Link
          className="text-md cursor-pointerk font-bold text-foreground transition-all hover:font-black dark:text-foreground"
          href={"https://github.com/Riyadh-Muradi"}
          target="_blank"
        >
          Riyadh / Diar Muradi
        </Link>
      </div>
    </footer>
  );
}
