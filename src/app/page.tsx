import Catalog from '@/components/catalog/catalog';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';

export default function Home() {
  return (
    <main className='flex flex-col justify-between items-center h-screen'>
      <Header />
      <Footer />
    </main>
  );
}
