import React from "react";
import { Carousel } from "../ui/carousel";
import ScrollVelocity from "../reactbits/scrollvelocity";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Sample slide data - replace with your actual images and content
const slides = [
  {
    title: "Programas en vivo",
    button: "Ver más",
    src: "https://images.unsplash.com/photo-1593697821048-ce4cb16a2041?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Entrevistas especiales",
    button: "Ver más",
    src: "https://images.unsplash.com/photo-1516981879613-9f5da904015f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
  },
  {
    title: "Eventos comunitarios",
    button: "Ver más",
    src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Momentos memorables",
    button: "Ver más",
    src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
];

// ScrollVelocity texts
const scrollTexts = [
  "GALERÍA DE MOMENTOS • PURA VIDA FM • ",
  "MÚSICA • ENTREVISTAS • PROGRAMAS • ",
];

function Galeria() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <div
      ref={ref}
      className="w-screen py-8 b bg-[#fafafa] relative md:pb-16 overflow-hidden"
      id="galeria"
    >
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8 relative z-10">
        <div className="mx-auto w-full">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-4xl font-bold tracking-tight text-balance bg-gradient-to-r from-purple-500 via-blue-400 to-emerald-500 text-transparent bg-clip-text sm:text-5xl"
          >
            Galería
          </motion.h2>
          <div className=" mt-10 ">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="w-screen relative left-[50%] right-[50%] mx-[-50vw]"
            >
              <ScrollVelocity
                texts={scrollTexts}
                velocity={40}
                className="text-4xl font-bold text-black/60"
                numCopies={4}
              />
            </motion.div>
          </div>
          {/* <p className="mt-6 text-lg/8 text-primary-100/80">
            Explora momentos especiales, eventos, entrevistas y programas en
            vivo que han definido nuestra historia como radio.
          </p> */}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="max-w-3xl mx-auto mt-20 mb-24 sm:mb-32"
          style={{ maxHeight: "600px" }}
        >
          <Carousel slides={slides} />
        </motion.div>
      </div>
    </div>
  );
}

export default Galeria;
