import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  type: "button" | "submit";
  animationDelay: number;
}

export const Button: React.FC<Props> = ({ children, type, animationDelay }) => {
  return (
    <motion.button
      transition={{
        type: "tween",
        bounce: 0.4,
        delay: animationDelay,
        duration: 0.15,
      }}
      animate={{ opacity: [0, 1], scale: [0.5, 1], y: [25, 0] }}
      type={type}
      className="btn btn-primary transform-gpu w-full text-white"
    >
      {children}
    </motion.button>
  );
};
