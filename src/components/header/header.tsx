import Address from '../address/address';
import Call from '../call/call';
import Catalog from '../catalog/catalog';
import Currency from '../currency/currency';
import Logo from '../logo/logo';
import Phone from '../phone/phone';
import Sale from '../sale/sale';
import Social from '../social/social';

export default function Header() {
  return (
    <div>
      <header className='w-full flex justify-between pt-3 gap-3 border-b-2 pb-3 align-baseline'>
        <Logo />
        <Address />
        <Social />
        <Phone footer={false} />
        <Call />
        <Sale />
        <Currency />
      </header>
      <Catalog />
    </div>
  );
}
