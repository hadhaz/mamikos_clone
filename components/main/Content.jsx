import Link from "next/link";
import Logo from "../common/Logo";

const Content = () => {
  return (
    <div className='flex flex-col gap-14 justify-center px-5 md:px-16 lg:px-24'>
      <div className='flex flex-col px-8 gap-2 mt-16 py-6 shadow-2xl rounded-lg max-w-3xl'>
        <h1 className='text-xl font-extrabold'>Coba Cara Baru Bayar Kos!</h1>
        <p>
          Biar bayar kos lebih gampang dan aman, coba sistem pembayaran khusus
          buat anak kos.
        </p>
        <Link
          href='/'
          className='mt-2 text-xs font-semibold underline underline-offset-2'
        >
          Mau coba dong
        </Link>
      </div>
      <div className='flex justify center gap-[13vw] items-center bg-white shadow-2xl max-w-5xl py-6 md:py-5 pl-8 pr-12 rounded-2xl'>
        <div className='flex-col flex'>
          <h1 className='text-xl md:text-2xl font-extrabold mb-1'>
            Kos Dikelola Mamikos, Terjamin Nyaman
          </h1>
          <p className="text-sm">
            {" "}
            Fast Response 24/7, Foto Properti Akurat, Foto Area & Informasi
            lengkap
          </p>
        </div>
        <div className="flex gap-12">
          <Logo src='/singgahsini.svg' className='relative h-20 w-20' />
          <Logo src='/apik.svg' className='relative h-20 w-20' />
        </div>
      </div>
    </div>
  );
};

export default Content;
