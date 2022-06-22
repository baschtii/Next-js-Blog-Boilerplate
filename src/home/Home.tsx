export const Home = () => {
  // const [showHand, setShowHand] = useState(false);
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setShowHand(true);
  //   }, 3000);
  //   return () => clearInterval(timer);
  // }, []);

  return (
    <header className="mb-16 group">
      <h1 className="mb-1 font-mono text-4xl text-gray-100 md:text-6xl">
        hi there
        <span className="inline-flex">
          <span className="animate-wiggle whitespace-pre"> 👋</span>
        </span>
        , I am <br className="block md:hidden" />
      </h1>
      <h1 className="mb-1 font-mono text-4xl text-gray-100 md:text-6xl">
        <span className="text-orange-300 inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">
          Bastian Walk
        </span>
        <span className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform"></span>
      </h1>
      <div className="text-xl font-thin md:text-3xl">
        Fullstack-Developer building things with 💛
      </div>
      <div className="flex flex-col gap-y-2 mt-2"></div>
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-transparent text-orange-300 border-orange-300 border">
        Typescript
      </span>
      <span className="inline-flex ml-2 items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-transparent text-orange-300 border-orange-300 border">
        NextJs
      </span>
      <span className="inline-flex ml-2 items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-transparent text-orange-300 border-orange-300 border">
        NestJs
      </span>
      <span className="inline-flex ml-2 items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-transparent text-orange-300 border-orange-300 border">
        expressjs
      </span>
      <span className="inline-flex mt-2 md:ml-2 items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-transparent text-orange-300 border-orange-300 border">
        AWS
      </span>
    </header>
  );
};
