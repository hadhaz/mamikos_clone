import TopNavbar from "./TopNavbar";
import MainNavbar from "./MainNavbar";

const MAMIKOS_LOGO =
  "https://mamikos.com/assets/logo/svg/logo_mamikos_green_v2.svg";

const Headers = () => {
  return (
    <div className="fixed w-full z-50">
      <TopNavbar />
      <MainNavbar />
    </div>
  );
};

export default Headers;
