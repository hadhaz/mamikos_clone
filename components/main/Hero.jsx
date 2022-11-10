import Image from "next/image";
import Search from "../search/Search";

const Hero = () => {
  return (
    <>
      <header className='hidden h-64 md:px-[72px] sm:flex flex-col justify-center items-start mx-6 text-grayDark'>
        <h1 className='font-extrabold text-[32px] mt-2'>Mau cari kos?</h1>
        <desc className='text-xl mb-7'>
          Dapatkan infonya dan langsung sewa di Mamikos.
        </desc>
        <Search />
      </header>
      <div className='absolute hidden sm:block top-16 md:top-20 md:right-16 right-2 -z-10'>
        <div className='relative w-[768px] h-56 md:w-[986px] md:h-64'>
          <Image alt='bg-hero' src='/bg_hero.png' fill />
        </div>
      </div>
    </>
  );
};

export default Hero;
