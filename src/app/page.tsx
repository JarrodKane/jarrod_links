import Image from 'next/image';
import data from '../../data.json';
import { Link } from '../components/link';




export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-10 align-middle justify-center h-full">
      <div className="flex flex-col gap-10 w-full items-center max-w-lg">
        <Image
          src="/jarrodimage.jpg"
          className="rounded-full w-44 h-44 ring-2 ring-gray-300 drop-shadow-md"
          width={250}
          height={250}
          alt={data.name}
        />

        {/* {data.sections.map((section) => (
          <div key={section.title} className='w-full flex flex-col gap-2  '>
            <h2 className=' text-center w-full text-white text-2xl font-semibold leading-none tracking-tight  drop-shadow-xl '>
              {section.title}
            </h2>


            <div className='flex gap-3'>
              {section.links.map((link) => (
                <Link key={link.href} href={link.href} icon={link.icon} />
              ))}
            </div>
          </div>
        ))} */}

        {/* {data.sections.map((section) => (

          <Card key={section.title} className='w-full bg-indigo-500 bg-opacity-75'>
            <CardHeader className='text-center'>
              <CardTitle>{section.title}</CardTitle>
            </CardHeader>
            <CardContent className='flex gap-3'>
              {section.links.map((link) => (
                <Link key={link.href} href={link.href} icon={link.icon} />
              ))}
            </CardContent>
          </Card>

        ))} */}

        <div className='flex flex-col gap-6	w-full'>
          {data.links.map((link) => (
            <Link key={link.href} href={link.href} icon={link.icon}>
              {link.name}
            </Link>
          ))}
        </div>

      </div>

    </main>
  );
}
