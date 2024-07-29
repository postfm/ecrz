export default function ApartamentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className='w-full p-8'>{children}</section>;
}
