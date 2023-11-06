import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { SiOnlyfans } from 'react-icons/si';

type LinkProps = {
  href: string;
  children: React.ReactNode;
  icon: string;
};

export const Link: React.FC<LinkProps> = ({ href, icon, children }) => {
  const linkStyle = `flex justify-center px-4 py-4 bg-white text-gray-900 font-bold rounded-md transition-all   
  w-full  hover:translate-x-1	hover:translate-y-1	shadow-comic hover:shadow-comic-h text-center	align-middle items-center	 gap-3  `;



  const iconElement = () => {
    if (icon === 'youtube') {
      return <FaYoutube />
    } else if (icon === 'instagram') {
      return <FaInstagram />
    } else if (icon === 'onlyfans') {
      return <SiOnlyfans />
    } else if (icon === 'tiktok') {
      return <FaTiktok />
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
