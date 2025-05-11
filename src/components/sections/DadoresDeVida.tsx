import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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

  const dadores = [
    {
      icon: <FaTools className="text-lg mt-1 text-purple-500" />,
      title: "Mantenimiento de Transmisores",
      description:
        "Tu aporte permite dar mantenimiento a los 12 puestos de transmisión afiliados al Grupo Visión, asegurando su óptimo funcionamiento.",
    },
    {
      icon: <FaCogs className="text-lg mt-1 text-purple-500" />,
      title: "Compra de Equipos y Repuestos",
      description:
        "Gracias a tu generosidad se pueden adquirir repuestos esenciales para garantizar la continuidad de nuestras emisiones.",
    },
    {
      icon: <FaBroadcastTower className="text-lg mt-1 text-purple-500" />,
      title: "Servicios de Transmisión",
      description:
        "Con tu ayuda se cubren los pagos de alquiler de los puestos de transmisión, servicios públicos y otros gastos operativos.",
    },
    {
      icon: <FaUserCog className="text-lg mt-1 text-purple-500" />,
      title: "Soporte Técnico",
      description:
        "Tus donaciones sostienen al equipo técnico que mantiene y opera nuestras emisoras con excelencia.",
    },
    {
      icon: <FaShuttleVan className="text-lg mt-1 text-purple-500" />,
      title: "Unidades Móviles",
      description:
        "Gracias a tu colaboración, realizamos el mantenimiento y traslado de nuestras unidades móviles que llevan el mensaje a todo lugar.",
    },
    {
      icon: <FaGlobe className="text-lg mt-1 text-purple-500" />,
      title: "Expansión del Reino",
      description:
        "Tu aporte voluntario nos permite avanzar y ensanchar el reino de Dios hasta lo último de la tierra. ¡Únete a este gran proyecto!",
    },
  ];

  const paymentMethods = [
    {
      icon: <FaMobileAlt className="text-2xl text-purple-500" />,
      title: "SINPE Móvil",
      description: "Envía tu donación al número +506 8888-8888",
      action: "Donar con SINPE",
      bg: "bg-emerald-500/98",
    },
    {
      icon: <FaPaypal className="text-2xl text-purple-500" />,
      title: "PayPal",
      description: "Realiza tu donación segura a través de PayPal",
      action: "Donar con PayPal",
      bg: "bg-purple-500/98",
    },
    {
      icon: <FaUniversity className="text-2xl text-purple-500" />,
      title: "Banco Nacional",
      description: "Cuenta IBAN: CR00 0000 0000 0000 0000",
      action: "Copiar IBAN",
      bg: "bg-blue-500/98",
    },
    {
      icon: <FaCreditCard className="text-2xl text-purple-500" />,
      title: "BAC Credomatic",
      description: "Cuenta IBAN: CR00 0000 0000 0000 0000",
      action: "Copiar IBAN",
      bg: "bg-pink-500/98",
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
          className="text-4xl font-bold tracking-tight px-6 text-balance bg-gradient-to-r from-purple-500 via-blue-400 to-emerald-500 text-transparent bg-clip-text sm:text-5xl"
        >
          Dadores de Vida
        </motion.h2>
        {/* Animación similar para el párrafo, con un pequeño delay extra */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-lg/8 font-light px-6 max-w-2xl mx-auto leading-6 text-primary-100/80"
        >
          Nuestros programas son escuchados en cada rincón del planeta y la
          bendición de Dios se escucha en cada emisión.
        </motion.p>
        <motion.img
          src={dadoresImage}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          alt="Dadores de Vida"
          className="w-full h-full lg:w-auto lg:h-auto lg:aspect-square mt-8 object-cover mx-auto"
        />

        {/* Dadores de vida */}
        <div className="w-full mt-8 px-6 lg:container lg:grid lg:grid-cols-2 lg:gap-4 ">
          {dadores.map((dador) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              key={dador.title}
              className="max-w-xl   mx-auto bg-white rounded-lg shadow-lg flex px-3 py-4 lg:py-6 my-4"
            >
              <div className="flex items-start justify-center">
                {dador.icon}
              </div>
              <div className="flex flex-col items-start pl-2">
                <motion.h2 className="text-base bg-gradient-to-r from-purple-500 via-blue-400 to-emerald-500 text-transparent bg-clip-text leading-none font-bold ">
                  {dador.title}
                </motion.h2>
                <p className="text-xs  text-gray-500 text-left mt-1.5">
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
            <div className="absolute left-0 right-0 w-full">
              <WavyBackground
                containerClassName="w-[100vw] min-h-[200px]"
                backgroundFill="#FAFAFA"
                blur={10}
                waveWidth={100}
                waveOpacity={0.5}
                colors={["#8b5cf6", "#60a5fa", "#10b981"]}
              />
            </div>
            <div className="relative z-10 py-8">
              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl font-bold tracking-tight px-6 text-balance bg-gradient-to-r from-purple-500 via-blue-400 to-emerald-500 text-transparent bg-clip-text sm:text-5xl"
              >
                Métodos de Donación
              </motion.h3>
              {/* Animación similar para el párrafo, con un pequeño delay extra */}
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-6 text-lg/8 font-light px-6 max-w-2xl mx-auto leading-6 text-primary-100/80"
              >
                Nuestros programas son escuchados en cada rincón del planeta y
                la bendición de Dios se escucha en cada emisión.
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
                className={`-mt-10 relative lg:h-44 rounded-2xl shadow-lg px-3 pt-3 pb-10 flex flex-col   hover:shadow-xl transition-shadow duration-300 ${method.bg}`}
              >
                <div className=" bg-white shadow-lg shadow-white/50 rounded-lg h-10 w-10 flex items-center justify-center">
                  {method.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-1">
                  {method.title}
                </h4>
                <p className="text-xs text-white">{method.description}</p>
                <button className="absolute top-4 right-4 text-xs text-white ">
                  <FaCopy className="text-white text-base" />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full mt-16 px-6"
        >
          <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-purple-500 via-blue-400 to-emerald-500 text-transparent bg-clip-text">
            Métodos de Donación
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4">{method.icon}</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {method.title}
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  {method.description}
                </p>
                <button className="bg-gradient-to-r from-purple-500 via-blue-400 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity duration-300">
                  {method.action}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </div>
  );
}

export default DadoresDeVida;
