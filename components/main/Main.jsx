import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { activateSearch, deactiveSearch } from "../../store/ui-slice";
import Hero from "./Hero";

const Main = () => {
  const [rendered, setRendered] = useState(false);
  const [positionY, setPositionY] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    setRendered(true);
  }, []);

  if (rendered) {
    setPositionY(window.scrollY);
  }

  if (positionY > 150) {
    dispatch(activateSearch());
  } else {
    dispatch(deactiveSearch());
  }

  return (
    <main className='relative h-[2000px] pt-[105px]'>
      <Hero />
    </main>
  );
};

export default Main;
