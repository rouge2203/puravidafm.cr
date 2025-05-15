import { useEffect, useState } from "react";
import { Carousel } from "../ui/carousel";
import ScrollVelocity from "../reactbits/scrollvelocity";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import supabase from "../../lib/supabase";

// Type for the images from Supabase
interface ImageData {
  id: string;
  url: string;
}

// ScrollVelocity texts
const scrollTexts = [
  "GALERÍA DE MOMENTOS • PURA VIDA FM • ",
  "MÚSICA • ENTREVISTAS • PROGRAMAS • ",
];

function Galeria() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const [images, setImages] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchImages() {
      try {
        const { data, error } = await supabase
          .from("image")
          .select("id, url")
          .eq("type", "puravidafm")
          .order("id", { ascending: false });

        if (error) throw error;
        setImages(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch images");
        console.error("Error fetching images:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, []);

  // Convert fetched images to slide format
  const slides = images.map((image) => ({
    //title: `Image ${image.id}`,
    title: "",
    button: "Ver más",
    src: image.url,
    href: "https://www.facebook.com/PuraVida1063", // Adding Facebook URL for the "Ver más" button
  }));

  return (
    <div
      ref={ref}
      className="w-screen py-8 b bg-[#fafafa] relative md:pb-16 overflow-hidden"
      id="galeria"
    >
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8 relative z-10">
        <div className="mx-auto w-full">
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold tracking-tight px-6 text-balance bg-gradient-to-r from-purple-500 via-blue-400 to-emerald-500 text-transparent bg-clip-text sm:text-5xl"
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
                velocity={50}
                damping={50}
                stiffness={400}
                className="text-4xl font-bold text-black/60"
                numCopies={6}
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
          {loading ? (
            <div>Loading images...</div>
          ) : error ? (
            <div>Error: {error}</div>
          ) : slides.length === 0 ? (
            <div>No images found</div>
          ) : (
            <Carousel slides={slides} />
          )}
        </motion.div>

        {/* Display image ids and urls in a simple list */}
        {/* {!loading && !error && images.length > 0 && (
          <div className="mt-8 text-left">
            <h3 className="text-xl font-bold mb-4">Image IDs and URLs:</h3>
            <ul className="space-y-2">
              {images.map((image) => (
                <li key={image.id} className="border p-3 rounded">
                  <p>
                    <strong>ID:</strong> {image.id}
                  </p>
                  <p>
                    <strong>URL:</strong> {image.url}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default Galeria;
