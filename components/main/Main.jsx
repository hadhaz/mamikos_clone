import { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  activateSearch,
  deactiveSearch,
  selectedExpandActive,
  selectedSliderActive,
  deactiveExpand,
} from "../../store/ui-slice";
import Promo from "../promo/Promo";
import Carousel from "./Carousel";
import Content from "./Content";
import Hero from "./Hero";

const Main = () => {
  const [rendered, setRendered] = useState(false);
  const dispatch = useDispatch();
  const isSliderActive = useSelector(selectedSliderActive);
  const isExpand = useSelector(selectedExpandActive);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 180) {
      dispatch(activateSearch());
    } else {
      dispatch(deactiveSearch());
    }
  }, [dispatch]);

  useEffect(() => {
    setRendered(true);
  }, []);

  useEffect(() => {
    if (rendered) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [rendered, handleScroll]);

  const deactiveExpandHandler = () => {
    dispatch(deactiveExpand());
  };

  return (
    <main
      onClick={deactiveExpandHandler}
      className={`${
        isSliderActive ? "h-screen" : "h-[2000px]"
      } pt-14 md:pt-[105px] w-screen overflow-x-hidden`}
    >
      <Hero />
      <Carousel />
      <Content />
      <Promo />
    </main>
  );
};

export default Main;
