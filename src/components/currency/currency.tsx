import { Select } from '@headlessui/react';

export default function Currency() {
  return (
    <div>
      <Select
        name='currency'
        aria-label='Project currency'
        className='bg-inherit w-16 h-12'
      >
        <option value='active'>BYN</option>
        <option value='paused'>USD</option>
        <option value='delayed'>RUB</option>
      </Select>
    </div>
  );
}
