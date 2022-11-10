import Image from "next/image";

const Search = () => {
  return (
    <div className='pl-3 py-1 pr-1 shadow-lg flex justify-center items-center rounded-md'>
      <div className='relative w-6 h-6 '>
        <Image alt='search' src='/search.svg' fill />
      </div>
      <div className='pr-2 ml-3 mr-8 font-semibold text-gray-1 text-sm'>
        Masukan nama lokasi/area/alamat
      </div>
      <button className='py-2 px-8 bg-primary font-semibold text-whitedark rounded-md'>
        Cari
      </button>
    </div>
  );
};

export default Search;
