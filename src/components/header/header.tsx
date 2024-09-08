import { Bars3Icon } from '@heroicons/react/16/solid';
import Address from '../address/address';
import Call from '../call/call';
import Catalog from '../catalog/catalog';
import Currency from '../currency/currency';
import Logo from '../logo/logo';
import Phone from '../phone/phone';
import Sale from '../sale/sale';
import Social from '../social/social';
import CloseButton from './close-button';
import MenuButton from './menu-button';
import { PageType } from '@/types';

interface HeaderProps {
  pageType: string;
}

export default function Header({ pageType }: HeaderProps) {
  return (
    <div className={`pl-8 pr-8 ${pageType === PageType.MainPage ? 'bg-inherit' : 'bg-white'}`}>
      <header className='container flex justify-between pt-3 gap-3 border-b-2 pb-3 align-baseline items-center md:hidden lg:hidden'>
        <Logo />
        <Address />
        <Social />
        <Phone footer={false} />
        <Call />
        <Sale />
        <Currency />
      </header>
      <header className='w-full md:flex md:text-lg lg:flex justify-between pt-3 gap-3 border-b-2 pb-3 align-baseline items-center hidden'>
        <Currency />
        <Logo />
        <CloseButton />
        <MenuButton />
      </header>
      <Catalog pageType={pageType} />
    </div>
  );
}
