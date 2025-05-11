import { AnimatedTestimonials } from "../ui/animated-testimonials";
import { ColourfulText } from "../ui/colourful-text";
import {
  FaXTwitter,
  FaLinkedin,
  FaTiktok,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa6";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import supabase from "../../lib/supabase";

type RadioHost = {
  id: number;
  name: string;
  description: string;
  photo_url: string;
  tiktok_link: string | null;
  instagram_link: string | null;
  facebook_link: string | null;
};

function Locutores() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const [locutores, setLocutores] = useState<RadioHost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocutores = async () => {
      try {
        const { data, error } = await supabase
          .from("radio_host")
          .select(
            "id, name, description, photo_url, tiktok_link, instagram_link, facebook_link"
          );

        if (error) {
          console.error("Error fetching radio hosts:", error);
        } else {
          setLocutores(data || []);
        }
      } catch (error) {
        console.error("Failed to fetch radio hosts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLocutores();
  }, []);

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
        {loading ? (
          <div className="mt-20 text-center">
            <p className="text-lg text-primary-100/80">Cargando...</p>
          </div>
        ) : (
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
          >
            {locutores.map((locutor, index) => (
              <motion.li
                key={locutor.id}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.1,
                  ease: "easeOut",
                }}
                className="rounded-2xl bg-white shadow-md px-8 py-10 hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  alt={locutor.name}
                  src={locutor.photo_url}
                  className="mx-auto size-48 rounded-full md:size-56 object-cover"
                />
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-primary-200">
                  {locutor.name}
                </h3>
                <p className="text-sm/6 text-primary-100/80">
                  {locutor.description}
                </p>
                <ul role="list" className="mt-6 flex justify-center gap-x-6">
                  {locutor.facebook_link && (
                    <li>
                      <a
                        href={locutor.facebook_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-100/60 hover:text-primary-200 transition-colors duration-300"
                      >
                        <span className="sr-only">Facebook</span>
                        <FaFacebook className="size-5" />
                      </a>
                    </li>
                  )}
                  {locutor.instagram_link && (
                    <li>
                      <a
                        href={locutor.instagram_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-100/60 hover:text-primary-200 transition-colors duration-300"
                      >
                        <span className="sr-only">Instagram</span>
                        <FaInstagram className="size-5" />
                      </a>
                    </li>
                  )}
                  {locutor.tiktok_link && (
                    <li>
                      <a
                        href={locutor.tiktok_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-100/60 hover:text-primary-200 transition-colors duration-300"
                      >
                        <span className="sr-only">TikTok</span>
                        <FaTiktok className="size-5" />
                      </a>
                    </li>
                  )}
                </ul>
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Locutores;
