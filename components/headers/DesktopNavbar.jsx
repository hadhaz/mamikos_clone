import Image from "next/image";

const DesktopNavbar = () => {
  return (
    <div className='hidden md:block bg-white'>
      <nav className='flex justify-between border-slate-200 border-b shadow-sm'>
        <div className='pl-6 py-[4px]'>
          <div className='relative w-[120px] h-14'>
            <Image src='/mamikos_logo.svg' fill alt='mamikos logo' />
          </div>
        </div>
        <ul className='flex justify-end pr-6 basis-3/5 items-center text-sm font-semibold'>
          <li className='flex gap-[2px] items-center h-full px-3 hover:border-b-2 border-b-2 border-transparent hover:border-primary'>
            <div>Cari Iklan</div>
            <div className='relative w-3 h-3'>
              <Image src='/sort-down.png' fill alt='mamikos logo' />
            </div>
          </li>
          <li className="h-full flex items-center px-3 hover:border-b-2 border-b-2 border-transparent hover:border-primary">Pusat Bantuan</li>
          <li className="h-full flex items-center px-3 hover:border-b-2 border-b-2 border-transparent hover:border-primary">Syarat dan Ketentuan</li>
          <li className='border border-primary hover:text-secondary hover:border-secondary text-primary py-2 px-4 rounded-md cursor-pointer ml-2'>
            <button>Masuk</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DesktopNavbar;
