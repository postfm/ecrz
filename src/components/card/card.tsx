export default function Card() {
  return (
    <div className='flex flex-col w-[308px] h-[440px] rounded-xl bg-light-blue-100'>
      <div className='w-full h-[214px] bg-blue-gray-300'></div>
      <div className='flex flex-col w-full h-auto bg-red-100 p-[18px] pb-6'>
        <div className='flex flex-col items-start pb-4 border-b-2'>
          <div>Квартира в новостройке</div>
          <div>2-ком. квартира, 56м2</div>
          <div>Брест, ул. Карла Маркса, 12</div>
        </div>
        <div className='flex flex-col items-start'>
          <div>14м2 25м2 3/10 этаж</div>
          <div className='flex'>
            <div>$ 60 000</div>
            <div>BYN 197 797</div>
            <div>$ 1000/м2</div>
          </div>
        </div>
      </div>
    </div>
  );
}
