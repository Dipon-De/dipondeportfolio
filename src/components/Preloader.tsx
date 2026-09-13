import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-background"
          aria-hidden
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}
