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
    <p className='flex flex-wrap font-medium text-3xl relative'>
      <span>{title}</span>
      <span className='font-normal text-sm top-2 -right-32 text-gray-500'>
        {resultsNumber} {inclineWord(resultsNumber)}
      </span>
    </p>
  );
};
