import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import { PageType } from '@/types';

export default function ApartamentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className=' w-[1366px] mx-auto h-full flex flex-col md:container lg:container'>
      <Header pageType={PageType.OthePage} />
      <section className='w-full p-8'>{children}</section>;
      <Footer pageType={PageType.OthePage} />
    </main>
  );
}
