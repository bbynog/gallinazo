import './globals.css';
import NavBar from './NavBar';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <div className={'flex flex-col h-screen min-h-screen w-full'}>
          <div className='flex h-8 w-full'>
            <NavBar />
          </div>
          <div className='flex flex-col h-screen min-h-screen w-full justify-center items-center'>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
