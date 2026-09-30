import { Inter } from 'next/font/google';
import Image from 'next/image';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Jarrod Kane | Melbourne Comedian',
  description:
    'Jarrod Kane, Melbourne stand up comedian and producer. Founder of The Melbourne Comedy Club and creator of The Mic List.',
  openGraph: {
    title: 'Jarrod Kane | Melbourne Comedian',
    description:
      'Stand up comedian and producer. Founder of The Melbourne Comedy Club and creator of The Mic List.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
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
            alt=''
          />
          <Image
            className='heart'
            src="/heart.png"
            width={250}
            height={250}
            alt=''
          />
          <Image
            className='heart'
            src="/heart.png"
            width={250}
            height={250}
            alt=''
          />
          {children}
        </div>
      </body>
    </html>
  );
}
