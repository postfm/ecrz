import type { Metadata } from 'next';
import { Onest } from 'next/font/google';
import './globals.css';
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
      <html
        lang='ru'
        className='h-full text-sm'
      >
        <body className={`${onest.className} h-full`}>{children}</body>
      </html>
    </ReactQueryClientProvider>
  );
}
