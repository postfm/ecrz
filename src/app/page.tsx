import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import { PageType } from '@/types';

export default function Home() {
  return (
    <main className=' w-[1366px] mx-auto h-full flex flex-col md:container lg:container'>
      <Header pageType={PageType.MainPage} />
      <Footer pageType={PageType.MainPage} />
    </main>
  );
}
