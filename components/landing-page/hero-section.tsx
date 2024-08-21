import { Heronavbar } from "./hero-nav";
import { GlobeDemo } from "./world";

const HeroSection = () => {
  return (
    <section>
      <Heronavbar />
      <div className="text-5xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500  w-full">
        <GlobeDemo />
      </div>
    </section>
  );
};

export default HeroSection;
