import React from 'react';
import { DropdownMenu } from './menu';

export default function Commercial() {
  return (
    <DropdownMenu
      title='Коммерческая недвижимость'
      options={[
        { title: 'Офисы', key: 'offices' },
        { title: 'Склады', key: 'warehouses' },
        { title: 'Свободное назначение', key: 'any-type' },
        { title: 'Все объекты', key: 'all-types' },
      ]}
    />
  );
}
