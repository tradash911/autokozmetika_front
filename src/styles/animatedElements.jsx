import { AnimatePresence, motion } from "motion/react";

export default function Test(price) {
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={price}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.2 }}
      >
        {price} Ft
      </motion.span>
    </AnimatePresence>
  );
}
