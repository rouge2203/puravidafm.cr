import { useState } from "react";
import { FaAppStore } from "react-icons/fa";
import { SlHome } from "react-icons/sl";
import { HiOutlinePhoto } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";
// import { IoMailOutline } from "react-icons/io5";
import { IoMenuSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import logo from "../../assets/logo.png";

// Define navigation items
const navigationItems = [
  {
    name: "Inicio",
    icon: SlHome,
    sectionId: "landing",
    scrollable: true,
  },
  {
    name: "App",
    icon: FaAppStore,
    sectionId: "app",
    scrollable: true,
  },
  {
    name: "Galeria",
    icon: HiOutlinePhoto,
    sectionId: "galeria",
    scrollable: true,
  },
  {
    name: "Equipo",
    icon: IoMdHeartEmpty,
    sectionId: "locutores",
    scrollable: true,
  },
  {
    name: "Donaciones",
    icon: LiaMoneyBillWaveAltSolid,
    sectionId: "donaciones",
    scrollable: true,
  },
  // {
  //   name: "Contacto",
  //   icon: IoMailOutline,
  //   sectionId: "contacto",
  //   scrollable: true,
  // },
];

function NavigationBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <>
      {/* Mobile Menu */}
      <nav className="md:hidden w-full h-16 fixed top-0 left-0 right-0  flex items-center justify-between px-4 py-4 bg-gradient-to-b from-black/15 to-transparent z-100 ">
        <button
          onClick={toggleMobileMenu}
          className="text-white/90 shadow-lg shadow-shadow/25  p-2 rounded-full bg-apricot/75 hover:bg-white/60 transition-all duration-300"
        >
          {mobileMenuOpen ? (
            <IoCloseSharp className="text-2xl" />
          ) : (
            <IoMenuSharp className="text-2xl" />
          )}
        </button>

        {/* <PiHandsPrayingFill className="text-white h-10 w-10 p-2 rounded-full border border-white" /> */}
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-4 w-3/4 bg-gradient-to-r from-pineapple/95   via-apricot/95 to-dark-mango/95 rounded-lg shadow-lg z-100">
          <div className="flex flex-col p-4 space-y-3">
            {navigationItems.map((item, index) => (
              <div
                key={index}
                onClick={
                  item.scrollable
                    ? () => scrollToSection(item.sectionId)
                    : undefined
                }
                className={`flex  shadow-lg shadow-white/25 border border-white/25 items-center space-x-3 p-2 hover:bg-white/60 rounded-lg transition-all duration-300 ${
                  item.scrollable ? "cursor-pointer" : ""
                }`}
              >
                <item.icon className="text-white text-xl" />
                <span className="text-white font-medium text-lg tracking-wide">
                  {item.name}
                </span>
              </div>
            ))}
            <div className="flex justify-start items-center">
              <img src={logo} alt="logo" className="w-14 h-14" />
            </div>
          </div>
        </div>
      )}

      {/* Navbar Desktop */}
      <nav className="animate-fade animate-delay-500 group hidden md:flex h-16 w-fit mx-auto px-10 space-x-2 bg-two/50 rounded-full mt-10 absolute top-0 left-0 right-0 z-50 hover:opacity-100 hover:bg-gradient-to-r hover:from-one/50 hover:to-two/70 hover:scale-105 transition-all duration-300 items-center hover:shadow-lg hover:shadow-one/30">
        {navigationItems.map((item, index) => (
          <div
            key={index}
            onClick={
              item.scrollable
                ? () => scrollToSection(item.sectionId)
                : undefined
            }
            className="flex justify-center items-center hover:cursor-pointer hover:scale-105 hover:px-6 hover:py-3 hover:mx-0 hover:-ml-2 rounded-full hover:bg-white/25 transition-all duration-300 px-3 py-2"
          >
            <item.icon className="text-blood-orange text-xl " />
            <h1 className="text-white/90 hover:text-blood-orange text-lg ml-2 tracking-tight font-normal hidden group-hover:block leading-none">
              {item.name}
            </h1>
          </div>
        ))}
      </nav>
    </>
  );
}

export default NavigationBar;
