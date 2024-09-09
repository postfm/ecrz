import Image from 'next/image';
import viber from '../../../public/viber.svg';
import watsapp from '../../../public/watsapp.svg';
import telegram from '../../../public/telegram.svg';

export default function Social() {
  return (
    <div className='flex justify-between w-auto'>
      <Image
        src={viber}
        width={36}
        height={36}
        alt='Вайбер'
        className='cursor-pointer hover:opacity-85'
      />
      <Image
        src={watsapp}
        width={36}
        height={36}
        alt='Вайбер'
        className='cursor-pointer hover:opacity-85'
      />
      <Image
        src={telegram}
        width={36}
        height={36}
        alt='Вайбер'
        className='cursor-pointer hover:opacity-85'
      />
    </div>
  );
}
