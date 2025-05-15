import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import logo from "../assets/logo.png";
import { ContainerTextFlip } from "../components/ui/container-text-flip";
import { BiSolidRadio } from "react-icons/bi";
import { PiHandsPrayingFill } from "react-icons/pi";
import GraciaPlus from "../components/sections/GraciaPlus";
import Locutores from "../components/sections/Locutores";
import Galeria from "../components/sections/Galeria";
import NavigationBar from "../components/sections/NavigationBar";
import Numeros from "../components/sections/Numeros";
import Comentarios from "../components/sections/Comentarios";
import DadoresDeVida from "../components/sections/DadoresDeVida";
import Footer from "../components/sections/Footer";

const Landing = () => {
  return (
    <div className="w-full overflow-hidden" id="landing">
      <BackgroundGradientAnimation size="75%" className="relative">
        <NavigationBar />

        {/* Hero */}
        <div className="min-h-screen flex flex-col md:flex-row md:space-x-30 items-center justify-center p-8   ">
          <img
            src={logo}
            alt="logo"
            className="w-[60%] md:w-[30%]  h-auto z-50 animate-fade"
          />
          <div className="flex  animate-fade  flex-col md:flex-col md:items-start md:space-x-4 mb-8 items-start space-y-2 justify-center z-50 opacity-85">
            <div
              onClick={() =>
                document
                  .getElementById("app")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex space-x-2  items-center justify-center hover:cursor-pointer hover:scale-105 transition-all duration-300"
            >
              <BiSolidRadio className="text-white text-lg md:text-xl" />
              <h1 className="text-lg md:text-xl font-regular text-white min-w-xs">
                Escuchar ahora
              </h1>
            </div>
            <h1 className="text-4xl font-display md:text-5xl font-bold text-white min-w-xs">
              Una emisora que te
            </h1>
            <ContainerTextFlip
              words={[
                "bendice",
                "motiva",
                "entretiene",
                "inspira",
                "ama",
                "consuela",
                "enseña",
                "ayuda",
                "y más",
              ]}
              textClassName="text-primary-100/80 md:text-5xl"
              className="md:p-2 text-center items-center justify-center flex"
            />
            <div className="flex items-center md:justify-end justify-start md:px-6  mt-4 space-x-1 w-full hover:cursor-pointer hover:scale-105 transition-all duration-300">
              <PiHandsPrayingFill className="text-white text-xl" />
              <h1
                className="text-white text-sm font-regular"
                onClick={() => {
                  const element = document.getElementById("dadoresdevida");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Dadores de vida
              </h1>
            </div>
          </div>
        </div>
      </BackgroundGradientAnimation>
      <GraciaPlus />
      <Numeros />
      <Galeria />
      <Comentarios />
      <Locutores />
      <DadoresDeVida />
      <Footer />
    </div>
  );
};

export default Landing;
