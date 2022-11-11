import Countdown from "./Countdown";
import Logo from "../common/Logo";

const Promo = () => {
  const targetDate = new Date("07-01-2023").getTime();

  return (
    <div className='px-6 md:px-24 mt-20'>
      <div className='flex items-center gap-4'>
        <h3 className='text-2xl font-bold'>Promo Ngebut</h3>
        <select
          name='city'
          id='city'
          className='py-2 px-4 bg-transparent border-b text-primary font-semibold text-xl border-slate-300 w-fit'
        >
          {city.map((value, index) => {
            return (
              <option
                value={value}
                key={index}
                selected={value === "Semua Kota"}
              >
                {value}
              </option>
            );
          })}
        </select>
      </div>
      <div className='mt-5 items-center flex justify-between gap-1'>
        <div className='flex gap-1 items-center'>
          <p className='text-xs max-w-[88px] text-gray-1 font-semibold'>
            Akan Berakhir dalam waktu:
          </p>
          <Countdown targetDate='2023-01-07T02:00:00Z' />
        </div>
        <div className='flex gap-3 items-center'>
          <div className='cursor-pointer text-sm font-semibold mr-4 py-[10px] px-6 border-slate-200 rounded-md border'>Lihat Semua</div>
          <Logo src='/vertical-line.png' className='relative w-5 h-5' />
          <Logo
            src='/less-than.png'
            className='relative w-8 h-8 p-3 cursor-pointer shadow-lg rounded-full'
          />
          <Logo
            src='/more-than.png'
            className='relative w-8 p-3 cursor-pointer h-8 shadow-lg rounded-full'
          />
        </div>
      </div>
    </div>
  );
};

const city = [
  "Semua Kota",
  "Jakarta Pusat",
  "Jakarta Barat",
  "Jakarta Selatan",
  "Jakarta Timur",
  "Tangerang",
  "Bandung",
  "Surabaya",
  "Yogyakarta",
  "Semarang",
  "Malang",
  "Depok",
  "Bekasi",
  "Jakarta Utara",
  "Bogor",
  "Palembang",
  "Medan",
  "Manado",
  "Denpasar",
  "Solo",
  "Batu",
];

export default Promo;
