import Nature from "@/public/Nature.png";
import Head from "../Second-components/Head";
import Paragraph from "../Second-components/Paragraph";
import Buttons from "../Second-components/Buttons";

export default function Home() {
  return (
    <main
      className=" shrink-0 flex flex-col items-center "
      style={{
        backgroundImage: `url(${Nature.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "800px",
      }}
    >
      <Head />
      <Paragraph />
      <Buttons />
    </main>
  );
}
