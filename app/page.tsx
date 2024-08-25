import HeroSection from "@/components/landing-page/hero-section";

export default function Home() {
  return (
    <main className="w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex  items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)]"></div>
      <HeroSection />
      <section>jdcnjdj</section>
    </main>
  );
}
