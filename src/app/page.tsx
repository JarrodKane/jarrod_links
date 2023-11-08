import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import data from '../../data.json';
import { Link } from '../components/link';




export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 sm:p-24">
      <div className="flex flex-col gap-10 w-full items-center max-w-lg		">
        <Image
          src="/jarrod.png"
          className="rounded-xl w-52 h-52  ring-2 ring-gray-300 drop-shadow-md"
          width={250}
          height={250}
          alt={data.name}
        />


        <div className='flex flex-col gap-6	w-full'>
          {data.links.map((link) => (
            <Link key={link.href} href={link.href} icon={link.icon}>
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex flex-row w-full items-center max-w-lg justify-center	gap-3">
          {data.socials.map((icon) => (
            <a key={icon.href} target="_blank" href={icon.href} className="rounded-full w-16 h-16 ring-2 ring-gray-300 drop-shadow-md 
        hover:ring-4 hover:scale-110 transition-all flex items-center justify-center" >
              <FaGithub className="w-full h-full" />
            </a>
          ))}
        </div>
      </div>

    </main>
  );
}
