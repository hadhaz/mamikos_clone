import { motion, useMotionValue, AnimatePresence } from "framer-motion";

const Carousel = () => {
  const [dir, setDir] = useState();
  const [onSwap, setSwap] = useState();

  return (
    <AnimatePresence>
      <motion.div></motion.div>
    </AnimatePresence>
  );
};

const data = [];

export default Carousel;
