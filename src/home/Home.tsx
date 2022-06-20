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
        hi there, I am <br className="block md:hidden" />
      </h1>
      <h1 className="mb-1 font-mono text-4xl text-gray-100 md:text-6xl">
        <span className="text-orange-300 inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">
          Bastian Walk
        </span>
        <span className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform"></span>
      </h1>
      <div className="text-xl font-thin md:text-3xl">
        Fullstack-Developer uses Typescript for building things with 💛
      </div>
    </header>
  );
};
