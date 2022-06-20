import React, { ReactNode } from 'react';

import { Home } from '../home/Home';
import { Footer } from '../navigation/Footer';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased bg-zinc-900 w-full h-screen text-zinc-100 flex flex-col min-h-screen font-body">
    {props.meta}

    {/* <div className="top-0 sticky text-white py-4 border-b border-zinc-800 my-2">
      <div className="flex gap-x-8 justify-center max-w-sm md:max-w-5xl">
        <Link href="/">
          <button className="font-black tracking-wider font-mono text-2xl md:text-4xl">
            home
          </button>
        </Link>

        <button className="font-black tracking-wider font-mono text-2xl md:text-4xl">
          blog
        </button>
        <Link href="/about/">
          <button className="font-black tracking-wider font-mono text-2xl md:text-4xl">
            about
          </button>
        </Link>
      </div>
    </div> */}
    <div className="w-full max-w-4xl pt-8 pb-32 mx-auto xl:px-6 xl:text-lg 2xl:text-xl 2xl:max-w-6xl">
      <Home></Home>
    </div>

    <div className="flex grow">{props.children}</div>

    <Footer
      footerLinks={[
        { href: '/', name: 'Datenschutz' },
        { href: '/', name: 'Impressum' },
      ]}
    ></Footer>
  </div>
);

export { Main };
