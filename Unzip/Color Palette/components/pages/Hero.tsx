import { Button } from "../ui/button";
import { HeroCards } from "./HeroCards";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="container grid place-items-center gap-12 p-0 py-20 md:py-32 xl:grid-cols-2">
      <div className="space-y-6 text-center md:text-center xl:text-start">
        <main className="text-5xl font-bold md:text-6xl">
          <h1 className="bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] bg-clip-text pb-2 text-transparent">
            Copy <p className="inline text-black dark:text-white">and</p>{" "}
            Generate
          </h1>
          <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] bg-clip-text text-center text-transparent">
            Colors
          </span>
        </main>

        <p className="max-w-[600px] text-xl text-muted-foreground">
          Copy and generate colors with ease. You can also generate random
          colors and copy them to your clipboard.
        </p>

        <div>
          <Link href={"#colors"}>
            <Button className="md:w-1/3">Get Started</Button>
          </Link>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>
    </section>
  );
};
