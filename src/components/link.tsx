type LinkProps = {
  href: string;
  children: React.ReactNode;
};

export const Link: React.FC<LinkProps> = ({ href, children }) => {
  const linkStyle = `inline-block px-4 py-4 bg-white text-gray-900 font-bold rounded-md transition-all   
  w-full  hover:translate-x-1	hover:translate-y-1	shadow-comic hover:shadow-comic-h text-center	 `;
  return (
    <a target="_blank" href={href} className={linkStyle}>
      {children}
    </a>
  );
};
