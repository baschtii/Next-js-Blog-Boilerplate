import React, { ReactNode } from 'react';

import { Home } from '../home/Home';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased bg-zinc-900 w-full h-screen text-zinc-100 flex flex-col min-h-screen font-body">
    {props.meta}

    <div className="flex h-screen">
      <div className="m-auto">
        <Home></Home>
        {/* <div className="bg-zinc-900 flex flex-grow">{props.children}</div> */}
      </div>
    </div>

    {/* <Footer></Footer> */}
  </div>
);

export { Main };
