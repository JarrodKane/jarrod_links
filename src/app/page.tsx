import Image from 'next/image';
import { Link } from '../components/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 sm:p-24">
      <div className="flex flex-col gap-6 w-full items-center ">
        <Image
          src="/jarrod.jpeg"
          className="rounded-full w-48 h-48  ring-2 ring-gray-300 "
          width={150}
          height={150}
          alt="Jarrod doing MMA"
        />
        <Link href="https://www.instagram.com/jarrod_kane/?igshid=ZDc4ODBmNjlmNQ%3D%3D">
          Instagram
        </Link>
        <Link href="https://www.tiktok.com/@jarrod_mma">MMA Tiktok</Link>
        <Link href="https://www.youtube.com/channel/UCGvSXLPI1gLiwSVi-HeZBwQ">
          MMA Youtube
        </Link>
        <Link href="https://www.youtube.com/channel/UCFvq3tK6QXfqksQ_HQljN3g">
          Movies Youtube
        </Link>
        <Link href="https://www.youtube.com/channel/UCwBJ5gLp3trHUDtDjZvQH2Q">
          Tech Youtube
        </Link>
      </div>
    </main>
  );
}
