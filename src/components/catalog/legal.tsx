import React from 'react';
import { DropdownMenu } from './menu';

export default function Legal() {
  return (
    <DropdownMenu
      title='Юридические услуги'
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
