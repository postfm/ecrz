import { inclineWord } from '@/utils/getFilterUnitByName';

interface MainSectionHeader {
  resultsNumber: number;
  title: string;
}

export const MainSectionHeader = ({
  resultsNumber,
  title,
}: MainSectionHeader) => {
  return (
    <>
      <span className='font-medium text-3xl mr-4 mb-5'>{title}</span>
      <span className='font-normal text-sm top-2 -right-32 text-gray-500 mb-5'>
        {resultsNumber} {inclineWord(resultsNumber)}
      </span>
    </>
  );
};
