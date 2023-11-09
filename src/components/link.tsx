import { AiFillInstagram } from 'react-icons/ai';
import { FaGithub, FaTiktok, FaYoutube } from 'react-icons/fa';
import { SiOnlyfans } from 'react-icons/si';

type LinkProps = {
  href: string;
  children?: React.ReactNode;
  icon: string;
};

export const Link: React.FC<LinkProps> = ({ href, icon, children }) => {
  const linkStyle = `flex justify-center px-4 py-4 bg-white text-gray-900 font-bold rounded-md transition-all   
  w-full  hover:translate-x-1	hover:translate-y-1	shadow-comic hover:shadow-comic-h text-center	align-middle items-center	gap-3`;

  const iconElement = () => {
    if (icon === 'youtube') {
      return <FaYoutube size={`1.5em`} />
    } else if (icon === 'instagram') {
      return <AiFillInstagram size={`1.5em`} />
    } else if (icon === 'onlyfans') {
      return <SiOnlyfans size={`1.5em`} />
    } else if (icon === 'tiktok') {
      return <FaTiktok size={`1.5em`} />
    } else if (icon === 'github') {
      return <FaGithub size={`1.5em`} />
    } else {
      return null
    }
  }

  const Icon = iconElement();

  return (
    <a target="_blank" href={href} className={linkStyle}>
      {Icon}
      {children}
    </a>
  );
};
