import Image from 'next/image';
import data from '../../data.json';
import { Link } from '../components/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 py-12 sm:px-10">
      <div className="flex flex-col gap-10 w-full items-center max-w-lg">
        <header className="flex flex-col items-center gap-4 text-center text-white">
          <Image
            src="/newJarrod.png"
            className="rounded-full w-36 h-36 sm:w-44 sm:h-44 border-4 border-gray-900 shadow-comic"
            width={250}
            height={250}
            alt={data.name}
            priority
          />
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight drop-shadow-[3px_3px_0_rgba(0,0,0,0.8)]">
              {data.name}
            </h1>
            <p className="text-lg font-semibold uppercase tracking-widest text-white/90">
              {data.tagline}
            </p>
          </div>
          <p className="text-base sm:text-lg leading-relaxed text-white/95 max-w-md">
            {data.bio}
          </p>
          <nav className="flex gap-4 pt-2" aria-label="Socials">
            {data.links.map(link => (
              <Link
                key={link.name}
                href={link.href}
                icon={link.icon}
                variant="round"
                label={link.name}
              />
            ))}
          </nav>
        </header>

        <section className="flex flex-col gap-8 w-full">
          {data.projects.map(project => (
            <article
              key={project.title}
              className="flex flex-col gap-4 w-full bg-white text-gray-900 rounded-lg border-2 border-gray-900 p-5 sm:p-6 shadow-comic"
            >
              <div className="flex flex-col gap-1">
                <span className="self-start rounded-full bg-gray-900 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  {project.role}
                </span>
                <h2 className="text-2xl font-black tracking-tight pt-2">
                  {project.title}
                </h2>
              </div>
              <p className="leading-relaxed text-gray-700">
                {project.description}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {project.links.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    icon={link.icon}
                    variant="dark"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
