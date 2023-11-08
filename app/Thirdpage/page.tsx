import classimg from "@/public/classimg.png";
import Head from "../Thidcomponents/Head";
import Paragraph from "../Thidcomponents/Paragraph";
import Buttons from "../Thidcomponents/Buttons";

export default function Home() {
  return (
    <main
      className=" shrink-0 "
      style={{
        backgroundImage: `url(${classimg.src})`,
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
