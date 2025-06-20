import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Sample testimonials data
const testimonials = [
  {
    quote:
      "Pura Vida FM me ha acompañado durante años. ¡Sus programas matutinos son lo mejor para empezar el día con energía! ",
    name: "Daniel Jiménez",
    title: "Oyente desde 2015",
  },
  {
    quote:
      "La calidad de los locutores y la selección musical es inigualable. No hay otra emisora que combine tan bien información y entretenimiento.",
    name: "Paula Campos",
    title: "Fan de 'Tardes Pura Vida'",
  },
  {
    quote:
      "Gracias a los programas de Pura Vida FM, he asistido a un montón de conciertos y eventos con artistas que me gustan. ¡Es una emisora increíble!",
    name: "Mariana Camacho",
    title: "Emprendedora",
  },
  {
    quote:
      "Las entrevistas y reportajes de Pura Vida FM tienen una calidad y profundidad que no se encuentra en otras emisoras. Siempre aprendo algo nuevo.",
    name: "Roberto Mendoza",
    title: "Profesor universitario",
  },
  {
    quote:
      "¡Mi día a día no sería lo mismo sin Pura Vida FM! Los concursos y la interacción con la audiencia nos hacen sentir parte de una gran familia.",
    name: "Jeymi Rojas",
    title: "Oyente fiel",
  },
];

function Comentarios() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <div
      ref={ref}
      className=" bg-[#fafafa] relative py-8 overflow-hidden w-screen"
      id="comentarios"
    >
      <div className="mx-auto mb-12 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-4xl text-center  py-2 font-bold tracking-tight  bg-gradient-to-r from-pineapple via-apricot to-dark-mango text-transparent bg-clip-text sm:text-5xl"
        >
          Nuestros Oyentes
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-6 text-lg/8 max-w-2xl leading-6 mx-auto text-center text-gray-600"
        >
          Las voces de quienes nos acompañan día a día y hacen de Pura Vida FM
          su emisora favorita.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="relative w-full overflow-hidden"
      >
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </motion.div>
    </div>
  );
}

export default Comentarios;
