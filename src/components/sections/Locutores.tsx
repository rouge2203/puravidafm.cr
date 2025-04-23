import { AnimatedTestimonials } from "../ui/animated-testimonials";
import { ColourfulText } from "../ui/colourful-text";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const locutores = [
  {
    name: "Leonard Krasner",
    role: "Locutor Principal",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    xUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Maria Rodriguez",
    role: "Locutora de Noticias",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    xUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Carlos Mendez",
    role: "Locutor de Deportes",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    xUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Ana Vargas",
    role: "Locutora de Música",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    xUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Roberto Jiménez",
    role: "Locutor de Programas Especiales",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    xUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Laura Sánchez",
    role: "Locutora de Entrevistas",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    xUrl: "#",
    linkedinUrl: "#",
  },
];

function Locutores() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <div
      ref={ref}
      className="w-screen bg-[#fafafa] relative overflow-hidden  py-8"
      id="locutores"
    >
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold tracking-tight text-balance bg-gradient-to-r from-purple-500 via-blue-400 to-emerald-500 text-transparent bg-clip-text sm:text-5xl"
          >
            Nuestro equipo
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mt-6 text-lg/8 leading-6 text-primary-100/80"
          >
            Nuestro equipo de locutores está compuesto por profesionales
            apasionados por la radio, dedicados a brindarte la mejor experiencia
            auditiva y manteniéndote informado y entretenido.
          </motion.p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
          {locutores.map((locutor, index) => (
            <motion.li
              key={locutor.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{
                duration: 0.5,
                delay: 0.2 + index * 0.1,
                ease: "easeOut",
              }}
              className="rounded-2xl bg-white shadow-md px-8 py-10 hover:shadow-xl transition-shadow duration-300"
            >
              <img
                alt={locutor.name}
                src={locutor.imageUrl}
                className="mx-auto size-48 rounded-full md:size-56 object-cover"
              />
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-primary-200">
                {locutor.name}
              </h3>
              <p className="text-sm/6 text-primary-100/80">{locutor.role}</p>
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <li>
                  <a
                    href={locutor.xUrl}
                    className="text-primary-100/60 hover:text-primary-200 transition-colors duration-300"
                  >
                    <span className="sr-only">X</span>
                    <FaXTwitter className="size-5" />
                  </a>
                </li>
                <li>
                  <a
                    href={locutor.linkedinUrl}
                    className="text-primary-100/60 hover:text-primary-200 transition-colors duration-300"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <FaLinkedin className="size-5" />
                  </a>
                </li>
              </ul>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Locutores;
