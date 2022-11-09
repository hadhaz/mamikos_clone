import Image from "next/image";

const TopNavbar = () => {
  return (
    <div className='hidden md:block bg-whitedark text-gray text-xs font-semibold'>
      <nav className='flex justify-between py-2'>
        <ul className='flex pl-4 gap-4'>
          <li className='flex items-center gap-1'>
            <Logo src='/smartphone.png' alt='smartphone' />
            <div>Download App</div>
          </li>
          <li className='flex items-center gap-1'>
            <Logo src='/calendar.png' alt='calendar' />
            <div>Download App</div>
          </li>
        </ul>
        <div className='pr-4 flex items-center gap-1'>
          <Logo src='/announcement.png' alt='ads' />
          <p>Promosikan Iklan Anda</p>
        </div>
      </nav>
    </div>
  );
};

const Logo = ({ src, alt }) => {
  return (
    <div className='relative w-4 h-4'>
      <Image alt={alt} src={src} fill />
    </div>
  );
};

export default TopNavbar;
