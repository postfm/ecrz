interface MainSectionHeader {
  resultsNumber: number;
  title: string;
}

export const MainSectionHeader = ({
  resultsNumber,
  title,
}: MainSectionHeader) => {
  return (
    <p className='font-medium text-3xl relative'>
      {title}
      <span className='font-normal text-sm absolute top-2 -right-32 text-gray-500'>
        {resultsNumber} результатов
      </span>
    </p>
  );
};
