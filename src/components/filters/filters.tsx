import React from 'react';
import Types from './types';
import Rooms from './rooms';
import Area from './area';
import Cost from './cost';
import Buttons from './buttons';
import TypeBuilding from './type-building';

export default function Filters() {
  return (
    <div className='flex mb-4 bg-white rounded'>
      <Types />
      <Rooms />
      <TypeBuilding />
      <Area />
      <Cost />
      <Buttons />
    </div>
  );
}
