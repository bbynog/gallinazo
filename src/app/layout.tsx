import './globals.css';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <div className='flex flex-col h-screen min-h-screen w-full justify-center items-center'>
          {children}
        </div>
      </body>
    </html>
  );
}
