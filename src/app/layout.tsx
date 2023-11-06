import { Inter } from 'next/font/google';
import Image from 'next/image';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Jarrod Kane',
  description: 'Links to Jarrod Kane social media',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="background">
          <Image
            className='heart'
            src="/heart.png"
            width={250}
            height={250}
            alt='So Cute'
          />
          <Image
            className='heart'
            src="/heart.png"
            width={250}
            height={250}
            alt='So Cute'
          />
          <Image
            className='heart'
            src="/heart.png"
            width={250}
            height={250}
            alt='So Cute'
          />
          {children}
        </div>
      </body>
    </html>
  );
}
