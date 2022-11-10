import Image from "next/image";
import { useDispatch } from "react-redux";
import { toogleSlider } from "../../store/ui-slice";

const Slider = ({ state }) => {
  const dispatch = useDispatch();

  const handleMenuClose = () => {
    dispatch(toogleSlider());
  };

  let animation;

  if (state === "entering") {
    animation = "animate-slideIn";
  } else if (state === "entered") {
    animation = "";
  } else if (state === "exiting") {
    animation = "animate-slideOut";
  } else {
    animation = "translate-x-full";
  }

  return (
    <div
      className={`${animation} pl-6 pt-2 pr-3 flex flex-col md:hidden w-screen sm:w-[360px] top-0 absolute right-0 h-screen bg-white z-50`}
    >
      <div className='self-end'>
        <button
          className='p-3 bg-whitedark-1 rounded-md w-fit'
          onClick={handleMenuClose}
        >
          <div className='relative w-5 h-5'>
            <Image src='/close.svg' alt='close' fill />
          </div>
        </button>
      </div>
      <div className='flex flex-col gap-6 mt-10'>
        <div className=''>Cari Kos</div>
        <div>Cari Apartemen</div>
        <div className='py-3 border-y-2 border-slate-100'>
          Promosikan Iklan Anda
        </div>
        <div className='cursor-pointer'>Download Aplikasi</div>
        <div className='cursor-pointer'>Pusat Bantuan</div>
        <div className='cursor-pointer'>Blog Mamikos</div>
        <div className='border-b-2 border-slate-100 pb-4 cursor-pointer'>
          Syarat dan Ketentuan
        </div>
        <div className='flex flex-col font-semibold gap-4'>
          <button className='border border-primary bg-primary py-[6px] rounded-sm text-white cursor-pointer'>
            Masuk Sebagai Pemilik
          </button>
          <button className='border border-primary py-[6px] rounded-sm text-primary cursor-pointer'>
            Masuk Sebagai Pencari
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
