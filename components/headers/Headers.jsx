import TopNavbar from "./TopNavbar";
import MainNavbar from "./MainNavbar";
import { useSelector, useDispatch } from "react-redux";
import { selectedExpandActive, deactiveExpand } from "../../store/ui-slice";

const MAMIKOS_LOGO =
  "https://mamikos.com/assets/logo/svg/logo_mamikos_green_v2.svg";

const Headers = () => {
  const dispatch = useDispatch();
  const isExpand = useSelector(selectedExpandActive);
  const deactiveExpandHandler = () => {
    isExpand ? dispatch(deactiveExpand()) : null;
  };

  return (
    <div className='fixed w-full z-50 ' onClick={deactiveExpandHandler}>
      <TopNavbar />
      <MainNavbar />
    </div>
  );
};

export default Headers;
