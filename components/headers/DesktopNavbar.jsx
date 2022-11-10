import Image from "next/image";
import Search from "../search/Search";
import { useSelector } from "react-redux";
import { selectedSearchActive } from "../../store/ui-slice";

const DesktopNavbar = () => {
  const isSearchActive = useSelector(selectedSearchActive);

  return (
    <div className='hidden md:block bg-white'>
      <nav className='flex justify-between border-slate-200 border-b shadow-sm'>
        <div className='flex items-center pl-6 py-[4px] relative w-full basis-1/2'>
          <div className='relative w-[120px] h-14'>
            <Image src='/mamikos_logo.svg' fill alt='mamikos logo' />
          </div>
          <div className='absolute z-10 top-1/2 -translate-y-1/2  left-[62px]'>
            {isSearchActive && <Search />}
          </div>
        </div>
        <ul className='flex justify-end pr-6  items-center text-sm font-semibold'>
          <li className='flex gap-[2px] items-center h-full px-3 hover:border-b-2 border-b-2 border-transparent hover:border-primary'>
            <div>Cari Iklan</div>
            <div className='relative w-3 h-3'>
              <Image src='/sort-down.png' fill alt='mamikos logo' />
            </div>
          </li>
          <li className='h-full flex items-center px-3 hover:border-b-2 border-b-2 border-transparent hover:border-primary'>
            Pusat Bantuan
          </li>
          <li className='h-full flex items-center px-3 hover:border-b-2 border-b-2 border-transparent hover:border-primary'>
            Syarat dan Ketentuan
          </li>
          <li className='border border-primary hover:text-secondary hover:border-secondary text-primary py-2 px-4 rounded-md cursor-pointer ml-2'>
            <button>Masuk</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DesktopNavbar;
