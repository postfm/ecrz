import type { Metadata } from 'next';
import { Onest } from 'next/font/google';
import './globals.css';

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
      <body className={`${onest.className} flex flex-col justify-between items-center h-screen`}>
        {children}
      </body>
    </html>
  );
}
