import type { Metadata } from 'next';
import { Onest } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

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
    <html lang='ru'>
      <body className={onest.className}>
        <main className='flex flex-col justify-between items-center h-screen'>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
