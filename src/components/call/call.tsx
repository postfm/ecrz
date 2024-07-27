import { Button } from '@headlessui/react';

export default function Call() {
  return (
    <div>
      <Button className='w-36 h-12 border-2 rounded font-medium text-sky-600 border-sky-600 text-sm hover:bg-sky-600 hover:text-white'>
        Заказать звонок
      </Button>
    </div>
  );
}
