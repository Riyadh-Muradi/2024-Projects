import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import ColorPicker from "./ColorPicker";

export const HeroCards = () => {
  return (
    <div className="relative hidden h-[500px] w-[700px] flex-row flex-wrap gap-8 xl:flex">
      <Card className="absolute -top-[15px] right-[300px] w-[340px] shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center justify-center gap-4 pb-2">
          <ColorPicker value={"#61DAFB"} />
        </CardHeader>

        <CardContent className="font-sm cursor-auto text-center text-lg transition-all hover:font-bold">
          Imagine any color you want
        </CardContent>
      </Card>

      <Card className="absolute right-[-60px] top-4 flex w-80 flex-col items-center justify-center shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <ColorPicker value={"rgb(245,150,203)"} />
        </CardHeader>

        <CardContent className="font-sm cursor-auto text-center text-lg transition-all hover:font-bold">
          In any color format
        </CardContent>
      </Card>

      {/* <Card className="absolute left-[30px] top-[440px] w-72 shadow-black/10 dark:shadow-white/10">
        <CardFooter className="flex items-center justify-center p-0 pt-2">
          <div className="text-center">
            <CardTitle>Light & Dark mode</CardTitle>
            <div className="pb-2 pt-2">
              <ThemeToggle />
            </div>
          </div>
        </CardFooter>
      </Card> */}
    </div>
  );
};
