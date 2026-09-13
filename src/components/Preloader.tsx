import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [fading, setFading] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const fade = setTimeout(() => setFading(true), 1100);
    const gone = setTimeout(() => setRemoved(true), 1700);
    return () => {
      clearTimeout(fade);
      clearTimeout(gone);
    };
  }, []);

  if (removed) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[80] flex items-center justify-center bg-background transition-opacity duration-500"
      style={{ opacity: fading ? 0 : 1 }}
    >
      <div className="relative flex h-24 w-24 items-center justify-center">
        <motion.span
          className="absolute inset-0 rounded-full border-2 border-purple/30 border-t-purple"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
        <motion.span
          className="text-2xl font-black text-gradient"
          animate={{ scale: [0.9, 1.05, 0.9] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
        >
          DD
        </motion.span>
      </div>
    </div>
  );
}
