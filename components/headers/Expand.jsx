import Logo from "../common/Logo";

const Expand = () => {
  return (
    <div className='mt-[1px] px-2 py-4 w-fit absolute bg-white shadow-lg rounded-md font-normal text-sm'>
      <div className='flex rounded-md items-center gap-3 px-1 pr-6 mb-2 hover:bg-whitedark-1 py-1'>
        <Logo src='/bed.png' className='relative h-6 w-6'/>
        <p className='pr-2'>Kos</p>
      </div>
      <div className='flex  rounded-md items-center gap-3 px-1 pr-6 hover:bg-whitedark-1 py-1'>
        <Logo src='/building.png' className='relative w-6 h-6'/>
        <p>Apartemen</p>
      </div>
    </div>
  );
};

export default Expand;
