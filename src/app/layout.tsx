import type { Metadata } from 'next';
import { Onest } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import { ReactQueryClientProvider } from '@/components/react-query-client-provider';

const onest = Onest({ subsets: ['cyrillic'] });

export const metadata: Metadata = {
  title: 'ECRZ',
  description: 'Сервис по работе с недвижимостью',
  icons: './favicon.ico',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0'
      />
      <html
        lang='ru'
        className='h-full text-sm'
      >
        <body className={`${onest.className} h-full`}>
          <main className=' w-[1366px] mx-auto h-full flex flex-col'>
            <Header />
            {children}
            <Footer />
          </main>
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
