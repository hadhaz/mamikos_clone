import Logo from "../common/Logo"

const TopNavbar = () => {
  return (
    <div className='hidden md:block bg-whitedark text-gray text-xs font-semibold'>
      <nav className='flex justify-between py-[11px]'>
        <ul className='flex pl-6 gap-4 items-center'>
          <li className='flex items-end gap-2 cursor-pointer'>
            <Logo src='/smartphone.png' alt='smartphone' className='w-4 h-4 relative' />
            <div>Download App</div>
          </li>
          <li className='flex items-end gap-2 cursor-pointer'>
            <Logo src='/calendar.png' alt='calendar' className='w-4 h-4 relative'/>
            <div>Booking Kos</div>
          </li>
        </ul>
        <div className='pr-6 flex items-center gap-1 cursor-pointer'>
          <Logo src='/announcement.png' alt='ads' className='w-4 h-4 relative'/>
          <p>Promosikan Iklan Anda</p>
        </div>
      </nav>
    </div>
  );
};


export default TopNavbar;
