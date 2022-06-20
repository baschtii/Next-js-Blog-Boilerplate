export interface SocialItem {
  platform: string;
  href: string;
  svg: string;
}
export interface FooterLinks {
  href: string;
  name: string;
}

export interface FooterProps {
  footerLinks: Array<FooterLinks>;
  socialItems?: Array<SocialItem>;
}

export const Footer = ({ footerLinks, socialItems }: FooterProps) => {
  const year = new Date().getFullYear();
  return (
    <footer className="px-4 py-5 block drop-shadow-md overflow-hidden mt-16">
      <nav className="flex justify-between content-center">
        <span className="text-base font-regular">{`Bastian Walk © ${year}`}</span>
        {socialItems && (
          <nav>
            <ul className="flex space-x-6 ml-10">
              {socialItems?.map(({ platform, href }) => {
                return (
                  <li key={platform}>
                    <a href={href}>{platform}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
        <nav>
          <ul className="flex space-x-3 ml-10">
            {footerLinks.map(({ name, href }) => {
              return (
                <li key={name}>
                  <a href={href}>{name}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </nav>
    </footer>
  );
};
