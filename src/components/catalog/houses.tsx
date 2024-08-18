import React from 'react';
import { DropdownMenu } from './menu';

export default function Houses() {
  return (
    <DropdownMenu
      title='Дома'
      options={[
        { title: 'Дома', key: 'houses' },
        { title: 'Часть дома', key: 'parts-of-houses' },
        { title: 'Дачи', key: 'summer-houses' },
      ]}
    />
  );
}
