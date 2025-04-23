import React from "react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { BiSolidRadio } from "react-icons/bi";
import { FaAppStore } from "react-icons/fa";
import { SlHome } from "react-icons/sl";
import { HiOutlinePhoto } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";
import { IoMailOutline } from "react-icons/io5";
import { PiHandsPrayingFill } from "react-icons/pi";
import { IoMenuSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

// Define navigation items
const navigationItems = [
  {
    name: "Inicio",
    icon: SlHome,
    sectionId: "home",
    scrollable: false,
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
    scrollable: false,
  },
  {
    name: "Contacto",
    icon: IoMailOutline,
    sectionId: "contacto",
    scrollable: false,
  },
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
      <nav className="md:hidden w-full h-16 absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4">
        <button
          onClick={toggleMobileMenu}
          className="text-primary-100 p-2 rounded-full bg-white/40 hover:bg-white/60 transition-all duration-300"
        >
          {mobileMenuOpen ? (
            <IoCloseSharp className="text-2xl" />
          ) : (
            <IoMenuSharp className="text-2xl" />
          )}
        </button>

        <PiHandsPrayingFill className="text-white h-10 w-10 p-2 rounded-full border border-white" />
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-4 right-0 w-3/4 bg-white/95 z-100 rounded-lg shadow-lg">
          <div className="flex flex-col p-4 space-y-4">
            {navigationItems.map((item, index) => (
              <div
                key={index}
                onClick={
                  item.scrollable
                    ? () => scrollToSection(item.sectionId)
                    : undefined
                }
                className={`flex items-center space-x-3 p-2 hover:bg-white/60 rounded-lg transition-all duration-300 ${
                  item.scrollable ? "cursor-pointer" : ""
                }`}
              >
                <item.icon className="text-primary-100 text-xl" />
                <span className="text-primary-100 text-lg tracking-wide">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Navbar Desktop */}
      <nav className="animate-fade animate-delay-500 hidden md:flex h-16 w-fit mx-auto px-10 space-x-2 bg-white/40 rounded-full mt-10 absolute top-0 left-0 right-0 z-50 hover:opacity-100 hover:bg-white/50 hover:scale-105 transition-all duration-300 items-center">
        {navigationItems.map((item, index) => (
          <div
            key={index}
            onClick={
              item.scrollable
                ? () => scrollToSection(item.sectionId)
                : undefined
            }
            className="flex items-end justify-center group hover:cursor-pointer hover:scale-105 hover:px-6 hover:py-3 hover:mx-0 hover:-ml-2 rounded-full hover:bg-white/25 transition-all duration-300 px-3 py-2"
          >
            <item.icon className="text-primary-100 text-xl" />
            <h1 className="text-primary-100/80 text-lg ml-2 tracking-wide font-light hidden group-hover:block leading-none">
              {item.name}
            </h1>
          </div>
        ))}
      </nav>
    </>
  );
}

export default NavigationBar;
