import { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  activateSearch,
  deactiveSearch,
  selectedSliderActive,
} from "../../store/ui-slice";
import Hero from "./Hero";

const Main = () => {
  const [rendered, setRendered] = useState(false);
  const dispatch = useDispatch();
  const isSliderActive = useSelector(selectedSliderActive);

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

  return (
    <main
      className={`${
        isSliderActive ? "h-screen" : "h-[2000px]"
      } relative pt-14 md:pt-[105px]`}
    >
      <Hero />
    </main>
  );
};

export default Main;
