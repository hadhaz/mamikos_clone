import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { useEffect } from "react";
import Logo from "../common/Logo";

const Carousel = () => {
  const [position, setPosition] = useState(Math.floor(data.length / 2));
  const [disable, setDisabled] = useState(0);

  const rightHandler = e => {
    if (position < data.length - 1) {
      setPosition(position => position + 1);
    } else {
      setPosition(0);
    }
    disableHandler();
  };

  const leftHandler = e => {
    if (position > 0) {
      setPosition(position => position - 1);
    } else {
      setPosition(data.length - 1);
    }
    disableHandler();
  };

  const handlers = useSwipeable({
    onSwiped: e => console.log(e),
  });

  const resetHandler = () => {
    setTimeout(() => {
      setDisabled(false);
    }, 800);

    return () =>
      clearTimeout(
        setTimeout(() => {
          setDisabled(false);
        }, 800)
      );
  };

  const disableHandler = () => {
    setDisabled(true);
    resetHandler();
  };

  return (
    <>
      <div className='hidden sm:flex mt-24 w-screen justify-center'>
        <motion.div {...handlers} className='relative left-12'>
          {data.map((item, index) => {
            return (
              <motion.div
                className='absolute top-0 rounded-xl overflow-hidden'
                key={index}
                initial={{ scale: 0 }}
                animate={{
                  rotate: 0,
                  marginRight: 10,
                  left: `${(index - position) * 40 - 30}vw`,
                  scale: index === position ? 1 : 0.9,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 25,
                }}
                style={{
                  zIndex: index === position ? 20 : 0,
                }}
                layout
              >
                <div className='rounded-xl w-[347px] h-[147px] sm:w-[50vw] sm:h-[21.2vw] max-w-[590px] max-h-[290px]'>
                  <Image
                    alt={item.src.replace("/", "").replace(".png", "")}
                    sizes={90}
                    src={item.src}
                    fill
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div className='hidden sm:flex items-center font-lato font-semibold text-sm justify-center gap-10 mt-80'>
        <button
          disabled={disable}
          onClick={leftHandler}
          className='w-fit h-fit p-1 flex justify-center rounded-full shadow-lg text-lg font-semibold bg-white'
        >
          <Logo src='/less-than.png' className='w-8 h-8 relative' />
        </button>
        <div className='cursor-pointer'>Lihat semua promo</div>
        <button
          disabled={disable}
          onClick={rightHandler}
          className='w-fit h-fit p-1 flex justify-center rounded-full shadow-lg text-lg font-semibold bg-white'
        >
          <Logo src='/more-than.png' className='w-8 h-8 relative' />
        </button>
      </div>
    </>
  );
};

const data = [
  { src: "/banner/banner1.png" },
  { src: "/banner/banner2.png" },
  { src: "/banner/banner3.jpg" },
  { src: "/banner/banner4.png" },
  { src: "/banner/banner5.png" },
  { src: "/banner/banner6.png" },
  { src: "/banner/banner7.png" },
];

export default Carousel;
