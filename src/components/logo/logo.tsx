import Image from 'next/image';
import logo from '../../../public/logo.svg';

export default function Logo() {
  return (
    <div>
      <Image
        src={logo}
        width={196}
        height={40}
        alt='Логотип'
      />
    </div>
  );
}
