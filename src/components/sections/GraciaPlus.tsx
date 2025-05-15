import { IoMdHeartEmpty } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";
import appStoreBadge from "../../assets/appstore.png";
import googlePlayBadge from "../../assets/playstore.png";
import appImageWeb from "../../assets/app_mockup_web.png";
import appImageMobile from "../../assets/app_mockup_mobile.png";
import graciaPlus from "../../assets/gracia-logo.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function GraciaPlus() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <div
      ref={ref}
      id="app"
      className="w-full lg:h-screen bg-[#fafafa] rounded-t-3xl -mt-20 md:-mt-40 relative z-20 pb-16"
    >
      <div className="container mx-auto px-4 pt-8">
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          src={graciaPlus}
          alt="Gracia Plus"
          className="h-12 mx-auto md:mx-0"
        />
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-4 hidden md:block text-xl text-primary-100/80 font-semibold text-center md:text-left"
        >
          Descarga nuestra nueva aplicación para escuchar la radio en vivo.
        </motion.p>
      </div>
      <div className="container mx-auto px-6 py-8 ">
        <section className="py-0 lg:pt-28 flex w-full flex-col lg:flex-row">
          <motion.a
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            href="https://lobsterlabs.net"
            target="_blank"
            className="lg:w-1/2 relative hidden lg:block"
          >
            <div className="relative z-10  aspect-square lg:mr-20 transform transition-transform duration-500 hover:scale-105">
              <img src={appImageWeb} alt="Gracia Plus App" className="" />
            </div>
          </motion.a>
          <div className="lg:w-1/2 mt-4 lg:mt-0 ">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="text-2xl md:text-5xl font-lilita mb-6 text-center md:text-left mt-4 lg:tracking-wider bg-gradient-to-r from-purple-500 via-blue-400 to-emerald-500 text-transparent bg-clip-text"
            >
              Bendice tu vida y la de los demás con Gracia Plus
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className="flex space-x-4 items-center justify-center md:justify-start mt-4 lg:mt-8"
            >
              <a
                href="https://apps.apple.com/cr/app/gracia-plus/id6742936528?l=en-GB"
                className="inline-block hover:scale-105 transition-all duration-300 cursor-pointer hover:cursor-pointer hover:shadow-2xl hover:shadow-primary-200/80 "
              >
                <img
                  src={appStoreBadge}
                  alt="Download on App Store"
                  className="h-10 lg:h-12"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.lobster.graciaplus"
                className="inline-block hover:scale-105 transition-all duration-300 cursor-pointer hover:cursor-pointer hover:shadow-2xl hover:shadow-primary-200/80 "
              >
                <img
                  src={googlePlayBadge}
                  alt="Get it on Google Play"
                  className="h-10 lg:h-12"
                />
              </a>
            </motion.div>

            {/* Mobile Friendly Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              className="lg:hidden"
            >
              <img src={appImageMobile} alt="Gracia Plus App" className="" />
            </motion.div>

            {/* What's New Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              className="lg:mt-16"
            >
              <a
                href="https://graciaplus.com"
                target="_blank"
                className="block cursor-pointer group"
              >
                <div className="flex items-start space-x-4 group">
                  <div className="bg-white/10 backdrop-blur-md shadow-sm group-hover:shadow-xl group-hover:shadow-primary-200/80 rounded-lg p-4 group-hover:bg-white/20 transition-all duration-300">
                    <span className="text-primary-100">
                      <IoPhonePortraitOutline className="w-6 h-6" />
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-lilita tracking-wider text-primary-200/80 mb-2">
                      Conoce más
                    </h3>
                    <p className="text-primary-100/80 text-base">
                      Podrás escuchar Pura Vida FM, <br />
                      leer devocionales, y orar con miles <br />
                      de creyentes.
                    </p>
                  </div>
                </div>
              </a>
            </motion.div>

            {/* Testimonials */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
              className="mt-8 mb-0"
            >
              <div
                onClick={() => {
                  const element = document.getElementById("comentarios");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="block cursor-pointer group"
              >
                <div className="flex items-start space-x-4 group">
                  <div className="bg-white/10 backdrop-blur-md shadow-sm group-hover:shadow-xl group-hover:shadow-primary-200/80 rounded-lg p-4 group-hover:bg-white/20 transition-all duration-300">
                    <span className="text-primary-100">
                      <IoMdHeartEmpty className="w-6 h-6" />
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-lilita tracking-wider text-primary-200/80 mb-2">
                      Testimonios
                    </h3>
                    <p className="text-primary-100/80 text-base">
                      Descubre lo que dicen nuestros usuarios sobre <br />
                      cómo Gracia Plus ha transformado sus vidas <br />y
                      fortalecido su fe.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default GraciaPlus;
