import React from 'react';
import { DropdownMenu } from './menu';

export default function Grounds() {
  return (
    <DropdownMenu
      title='Участки'
      options={[
        { title: 'Участки до 10 сот.', key: '10-sot-land-property' },
        { title: 'Участки до 20 сот.', key: '20-sot-land-property' },
        { title: 'Участки ИЖС', key: 'IZHC-land-property' },
        {
          title: 'Участки Промназначения',
          key: 'promnaznachenia-land-property',
        },
        { title: 'Все объекты', key: 'all-types' },
      ]}
    />
  );
}
