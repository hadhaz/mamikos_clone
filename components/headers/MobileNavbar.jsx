import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { selectedSliderActive } from "../../store/ui-slice";
import Slider from "./Slider";
import { toogleSlider } from "../../store/ui-slice";
import { Transition } from "react-transition-group";

const MobileNavbar = () => {
  const dispatch = useDispatch();

  
  const handleMenu = () => {
    dispatch(toogleSlider());
  };

  return (
    <div className='md:hidden bg-white px-[18px] flex justify-between items-center'>
      <div className='relative w-[85px] h-14'>
        <Image src='/mamikos_logo.svg' fill alt='mamikos logo' />
      </div>
      <button className='relative w-5 h-5' onClick={handleMenu}>
        <Image src='/menu.png' fill alt='mamikos logo' />
      </button>
      {<SliderTransition />}
    </div>
  );
};

const SliderTransition = () => {
  const isSliderActive = useSelector(selectedSliderActive);
  return (
    <>
      <Transition mountOnEnter unmountOnExit in={isSliderActive} timeout={300}>
        {state => (
          <>
            <Slider state={state} />{" "}
          </>
        )}
      </Transition>

      <div
        className={`bg-grayoverlay h-screen w-screen absolute top-0 left-0 ${
          isSliderActive ? "" : "hidden"
        }`}
      ></div>
    </>
  );
};

export default MobileNavbar;
