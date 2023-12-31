import backgroundImage from "@/public/firstphoto.png";
import Header from "./First-components/Header";
import Paragraph from "./First-components/Paragraph";
import Buttons from "./First-components/Buttons";

export default function Home() {
  return (
    <main
      className=" shrink-0 "
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "800px",
      }}
    >
      <Header />
      <Paragraph />
      <Buttons />
    </main>
  );
}
