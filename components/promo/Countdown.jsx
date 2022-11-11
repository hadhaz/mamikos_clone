import { useCountDown } from "../../hooks/useCountdown";
import Logo from "../common/Logo";

const Countdown = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountDown(targetDate);

  return (
    <div className='flex font-semibold gap-6 py-[6px] px-2 items-center bg-whitedark-1 rounded-md w-fit'>
      <div className='bg-white py-[2px] px-[6px] rounded-md shadow-sm'>{days} Hari</div>
      <div className='flex text-2xl gap-1 items-center'>
        <div className='bg-white py-[2px] px-2 text-base rounded-md'>{hours}</div>
        <Logo src='/colon.png' className='relative w-3 h-3' />
        <div className='bg-white py-[2px] px-2 text-base rounded-md'>{minutes}</div>
        <Logo src='/colon.png' className='relative w-3 h-3' />
        <div className='bg-white py-[2px] px-2 text-base rounded-md'>{seconds}</div>
      </div>
    </div>
  );
};

export default Countdown;
