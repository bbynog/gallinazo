import './globals.css';
import NavBar from './NavBar';
import Providers from './Providers';

export const metadata = {
  title: 'Gallinazo',
  description: 'Gallinazo app',
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <div className={'flex h-screen min-h-screen w-full flex-col'}>
            <div className='flex h-8 w-full'>
              <NavBar />
            </div>
            <div className='flex h-screen min-h-screen w-full flex-col items-center justify-center'>
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
