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

export default function Header() {
  return (
    <div className='pl-8 pr-8 bg-white'>
      <header className='w-full flex justify-between pt-3 gap-3 border-b-2 pb-3 align-baseline items-center '>
        <Logo />
        <Address />
        <Social />
        <Phone footer={false} />
        <Call />
        <Sale />
        <Currency />
        <CloseButton />
        <MenuButton />
      </header>
      <Catalog />
    </div>
  );
}
