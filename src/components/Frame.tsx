import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export const Frame: React.FC<Props> = ({ children }) => {
  return (
    <motion.div
      transition={{ type: "spring", bounce: 0.4, duration: 0.25, delay: 0.05 }}
      animate={{ opacity: [0, 1], scale: [0, 1] }}
      className="mockup-window bg-base-200 border w-[90vw] md:w-96"
    >
      <div className="bg-base-100 flex transform-gpu justify-center px-4 py-16">
        {children}
      </div>
    </motion.div>
  );
};
