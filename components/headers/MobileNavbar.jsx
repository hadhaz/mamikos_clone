import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const MobileNavbar = () => {
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRendered(true);
    }
  }, []);

  return (
    <div className='md:hidden bg-white px-[18px] flex justify-between items-center'>
      <div className='relative w-[85px] h-14'>
        <Image src='/mamikos_logo.svg' fill alt='mamikos logo' />
      </div>
      <div className='relative w-5 h-5'>
        <Image src='/menu.png' fill alt='mamikos logo' />
      </div>
      {rendered && <OverlayPortal />}
      <Slider />
    </div>
  );
};

const Slider = () => {
  return (
    <div className='flex flex-col md:hidden top-0 absolute right-0 h-screen w-[360px] bg-white z-50'>
      <div className='pt-2 pr-4 self-end'>
        <div className='p-3 bg-whitedark-1 rounded-md w-fit'>
          <div className='relative w-5 h-5'>
            <Image src='/close.svg' alt='close' fill />
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

const OverlayPortal = () => {
  let container;
  let element;

  const rootContainer = document.createElement("div");
  const parentElem = document.querySelector("#__next");
  parentElem.appendChild(rootContainer);
  container = rootContainer;
  element = <div className='bg-grayoverlay h-screen w-screen'></div>;

  return container && element ? createPortal(element, container) : null;
};

export default MobileNavbar;
