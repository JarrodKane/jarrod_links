import { AiFillInstagram } from 'react-icons/ai';
import { FaGithub, FaGlobe, FaTiktok, FaYoutube } from 'react-icons/fa';
import { SiOnlyfans } from 'react-icons/si';

type LinkProps = {
  href: string;
  children?: React.ReactNode;
  icon: string;
  variant?: 'light' | 'dark' | 'round';
  label?: string;
};

const variants = {
  light:
    'w-full px-4 py-4 bg-white text-gray-900 rounded-md shadow-comic hover:shadow-comic-h hover:translate-x-1 hover:translate-y-1',
  dark: 'w-full px-3 py-3 bg-gray-900 text-white rounded-md shadow-comic-sm hover:shadow-none hover:translate-x-1 hover:translate-y-1',
  round:
    'w-14 h-14 bg-white text-gray-900 rounded-full shadow-comic-sm hover:shadow-none hover:translate-x-1 hover:translate-y-1',
};

export const Link: React.FC<LinkProps> = ({
  href,
  icon,
  children,
  variant = 'light',
  label,
}) => {
  const linkStyle = `flex justify-center items-center gap-2 font-bold text-center transition-all border-2 border-gray-900 ${variants[variant]}`;

  const iconElement = () => {
    if (icon === 'youtube') {
      return <FaYoutube size={`1.5em`} />;
    } else if (icon === 'instagram') {
      return <AiFillInstagram size={`1.5em`} />;
    } else if (icon === 'onlyfans') {
      return <SiOnlyfans size={`1.5em`} />;
    } else if (icon === 'tiktok') {
      return <FaTiktok size={`1.5em`} />;
    } else if (icon === 'github') {
      return <FaGithub size={`1.5em`} />;
    } else if (icon === 'website') {
      return <FaGlobe size={`1.3em`} />;
    } else {
      return null;
    }
  };

  const Icon = iconElement();

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className={linkStyle}
      aria-label={label}
      title={label}
    >
      {Icon}
      {children}
    </a>
  );
};
