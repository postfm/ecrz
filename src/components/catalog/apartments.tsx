'use client';

import React from 'react';
import { DropdownMenu } from './menu';
import { useRouter } from 'next/navigation';

export default function Apartments() {
  const router = useRouter();

  const onClick = () => {
    router.push('/apartments');
  };

  return (
    <DropdownMenu
      onSelect={onClick}
      title='Квартиры'
      options={[
        { title: '1-к. квартиры', key: 'one-room' },
        { title: '2-к. квартиры', key: 'two-room' },
        { title: '3-к. квартиры', key: 'three-room' },
        { title: '4-к. квартиры', key: 'four-room' },
        { title: 'Комнаты в квартирах', key: 'shared-room' },
      ]}
    />
  );
}
