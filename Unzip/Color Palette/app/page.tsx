import ColorPicker from "@/components/pages/ColorPicker";

export default async function Home() {
  return (
    <>
      <main
        id="colors"
        className="flex items-center justify-center bg-background dark:bg-background"
      >
        <section className="grid grid-cols-1 justify-center gap-6 xl:grid-cols-5">
          <ColorPicker value={"#61DAFB"} />
          <ColorPicker value={"#1fc0f1"} />
          <ColorPicker value={"#03a3d7"} />
          <ColorPicker value={"#F596D3"} />
          <ColorPicker value={"#D247BF"} />
        </section>
      </main>
    </>
  );
}
