import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import dadoresImage from "../../assets/hands_transparent.png";
import { FaTools } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import { FaBroadcastTower } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { FaShuttleVan } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { FaCopy } from "react-icons/fa";
import { WavyBackground } from "../ui/wavy-background";

function DadoresDeVida() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, methodTitle: string) => {
    navigator.clipboard.writeText(text);
    setCopied(methodTitle);
    setTimeout(() => setCopied(null), 2000);
  };

  const dadores = [
    {
      icon: <FaTools className="text-lg mt-1 text-dark-mango" />,
      title: "Mantenimiento de Transmisores",
      description:
        "Tu aporte permite dar mantenimiento a los 12 puestos de transmisión afiliados al Grupo Visión, asegurando su óptimo funcionamiento.",
    },
    {
      icon: <FaCogs className="text-lg mt-1 text-dark-mango" />,
      title: "Compra de Equipos y Repuestos",
      description:
        "Gracias a tu generosidad se pueden adquirir repuestos esenciales para garantizar la continuidad de nuestras emisiones.",
    },
    {
      icon: <FaBroadcastTower className="text-lg mt-1 text-dark-mango" />,
      title: "Servicios de Transmisión",
      description:
        "Con tu ayuda se cubren los pagos de alquiler de los puestos de transmisión, servicios públicos y otros gastos operativos.",
    },
    {
      icon: <FaUserCog className="text-lg mt-1 text-dark-mango" />,
      title: "Soporte Técnico",
      description:
        "Tus donaciones sostienen al equipo técnico que mantiene y opera nuestras emisoras con excelencia.",
    },
    {
      icon: <FaShuttleVan className="text-lg mt-1 text-dark-mango" />,
      title: "Unidades Móviles",
      description:
        "Gracias a tu colaboración, realizamos el mantenimiento y traslado de nuestras unidades móviles que llevan el mensaje a todo lugar.",
    },
    {
      icon: <FaGlobe className="text-lg mt-1 text-dark-mango" />,
      title: "Expansión del Reino",
      description:
        "Tu aporte voluntario nos permite avanzar y ensanchar el reino de Dios hasta lo último de la tierra. ¡Únete a este gran proyecto!",
    },
  ];

  const paymentMethods = [
    {
      icon: <FaMobileAlt className="text-2xl text-dark-mango" />,
      title: "SINPE Móvil",
      description: "Envía tu donación al número +506 6351-5599",
      action: "Copiar número",
      value: "63515599",
      bg: "bg-pineapple/98",
    },
    {
      icon: <FaPaypal className="text-2xl text-dark-mango" />,
      title: "PayPal",
      description: "cabinapuravida@gmail.com",
      action: "Copiar correo",
      value: "cabinapuravida@gmail.com",
      bg: "bg-apricot/98",
    },
    {
      icon: <FaUniversity className="text-2xl text-dark-mango" />,
      title: "Cuenta Cliente",
      description: "100-01-146-001017-8",
      action: "Copiar cuenta",
      value: "100011460010178",
      bg: "bg-dark-mango/98",
    },
    {
      icon: <FaCreditCard className="text-2xl text-dark-mango" />,
      title: "Cuenta IBAN",
      description: "CR10 015 114 610 010 01 0179",
      action: "Copiar IBAN",
      value: "CR10015114610010010179",
      bg: "bg-candy-apple/98",
    },
  ];

  return (
    <div
      ref={ref}
      id="dadoresdevida"
      className="w-full lg:min-h-screen flex flex-col justify-center items-center py-8 bg-[#fafafa] relative md:pb-16"
    >
      <div className="mx-auto  justify-center items-center  text-center lg:px-0">
        {/* Animación de fade-in + slide-up para el título */}
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl font-bold tracking-tight px-6 text-balance bg-gradient-to-r from-pineapple via-apricot to-dark-mango text-transparent bg-clip-text sm:text-5xl"
        >
          Dadores de Vida
        </motion.h2>
        {/* Animación similar para el párrafo, con un pequeño delay extra */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-lg/8 font-light px-6 max-w-2xl mx-auto leading-6 text-gray-600"
        >
          Nuestro programa dadores de vida es una iniciativa de la radio para
          dar mantenimiento a los equipos y unidades móviles que llevan el
          mensaje de Dios a todo el mundo.
        </motion.p>
        <motion.img
          src={dadoresImage}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          alt="Dadores de Vida"
          className="w-full h-full lg:max-w-2xl lg:h-auto lg:aspect-video mt-8 object-cover mx-auto"
        />

        {/* Dadores de vida */}
        <div className="w-full mt-8 px-6 lg:container lg:grid lg:grid-cols-2 lg:gap-4 mx-auto ">
          {dadores.map((dador) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              key={dador.title}
              className="max-w-xl mx-auto bg-white rounded-lg shadow-lg flex px-3 py-4 lg:py-6 my-4"
            >
              <div className="flex items-start justify-center">
                {dador.icon}
              </div>
              <div className="flex flex-col items-start pl-2">
                <motion.h2 className="text-base bg-gradient-to-r from-pineapple via-apricot to-dark-mango text-transparent bg-clip-text leading-none font-bold ">
                  {dador.title}
                </motion.h2>
                <p className="text-xs  text-gray-600 text-left mt-1.5">
                  {dador.description}
                  la bendición de Dios se escucha en cada emisión.
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Payment Methods Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full mt-16"
        >
          <section className="w-full bg-[#FAFAFA] overflow-hidden">
            <div className="relative z-10 py-8" id="donaciones">
              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl bg-white  rounded-lg font-bold tracking-tight px-6 text-balance bg-gradient-to-r from-pineapple via-apricot to-dark-mango text-transparent bg-clip-text sm:text-5xl"
              >
                Métodos de Donación
              </motion.h3>
              <div className="w-screen">
                <WavyBackground
                  containerClassName="w-full min-h-[125px] "
                  backgroundFill="#FAFAFA"
                  blur={10}
                  waveWidth={100}
                  waveOpacity={0.5}
                  colors={["#ecaf23", "#d55123", "#951a21"]}
                  //colors={["#00BE7F", "#FFFFFF", "#AE4AFF"]}
                />
              </div>
              {/* Animación similar para el párrafo, con un pequeño delay extra */}
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-0 text-lg/8 font-light px-6 max-w-2xl mx-auto leading-6 text-gray-600"
              >
                Todas las cuentas se encuentran a nombre de Asociación Grupo
                Visión Cuenta Especial Dadores.
                <br />
                Cédula Jurídica: 3-002-376-972
                {/* <span className="block mt-2 text-xs text-gray-500">
                  Todas las cuentas se encuentran a nombre de Asociación Grupo
                  Visión Cuenta Especial Dadores.
                  <br />
                  Cédula Jurídica: 3-002-376-972
                </span> */}
              </motion.p>
            </div>
          </section>
          <div className="grid max-w-3xl mx-auto grid-cols-1 md:grid-cols-2 gap-4 mt-16 px-6">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className={`-mt-10 relative h-48 lg:h-44 rounded-2xl shadow-lg px-3 pt-3 pb-10 flex flex-col hover:shadow-xl transition-shadow duration-300 ${method.bg}`}
              >
                <div className="bg-white shadow-lg shadow-white/50 rounded-lg h-10 w-10 flex items-center justify-center">
                  {method.icon}
                </div>
                <h4 className="text-xl lg:text-lg   font-semibold text-white mb-1">
                  {method.title}
                </h4>
                <p className="text-base lg:text-sm text-white">
                  {method.description}
                </p>
                <button
                  onClick={() => handleCopy(method.value, method.title)}
                  className="absolute top-4 right-4 text-xs text-white group"
                >
                  <FaCopy className="text-white text-base" />
                  <span
                    className={`absolute -top-8 right-0 bg-black text-white text-xs px-2 py-1 rounded transition-opacity ${
                      copied === method.title ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    ¡Copiado!
                  </span>
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default DadoresDeVida;
