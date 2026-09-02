import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import NapkinSection from '../../components/NapkinSection';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

export default async function Home() {
  const t = await getTranslations('Home');
  const tFooter = await getTranslations('Footer');

  return (
    <main className="bg-background min-h-screen text-foreground">
      <Navbar />
      <Hero />

      {/* Uncropped Background Image Section (Plaza) */}
      <section className="relative w-full aspect-[1500/938] overflow-hidden border-t-4 border-forest bg-background">
        <Image
          src="/images/band/shrpp-plaza-1-1.jpg"
          alt="Thérapie Club Background"
          fill
          className="object-cover object-center"
          priority
        />

        {/* TC Sign embedded on the left side of the plaza picture */}
        <div className="absolute bottom-0 left-4 sm:left-8 md:left-12 lg:left-16 top-6 sm:top-10 md:top-12 lg:top-16 z-30 flex items-end">
          <Image
            src="/images/band/tc sign.png"
            alt="Thérapie Club Sign"
            width={350}
            height={790}
            className="h-[75%] sm:h-[82%] md:h-[88%] lg:h-[92%] w-auto object-contain object-left-bottom drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] hover:scale-105 transition-transform duration-300"
            priority
          />
        </div>

        {/* Heavy film grain texture overlay on top of background and sign */}
        <div className="absolute inset-0 bg-grain opacity-85 mix-blend-overlay pointer-events-none z-40" />

        {/* Square Single Item embedded in the center of the Plaza section */}
        <div className="absolute inset-0 z-50 max-w-7xl mx-auto flex items-center justify-center p-6 md:p-12">
          <div className="group relative w-56 sm:w-72 md:w-80 lg:w-96 aspect-square bg-forest shadow-[8px_8px_0px_0px_rgba(172,202,178,1)] border-4 border-forest hover:scale-105 transition-transform duration-300 drop-shadow-2xl flex flex-col items-center justify-center p-6 sm:p-8 text-center">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase mb-6 text-darlington font-display leading-none tracking-wider">
              Cash Flow
            </h3>
            <a
              href="#"
              className="bg-darlington text-forest px-6 sm:px-8 py-3 rounded-none font-black uppercase tracking-widest hover:bg-background hover:text-forest transition-colors border-2 border-darlington text-base sm:text-lg shadow-md"
            >
              {t('stream')}
            </a>
          </div>
        </div>
      </section>

      {/* Bar Napkin Section */}
      <NapkinSection />

      <footer className="py-12 text-center text-background border-t-4 border-darlington bg-forest">
        <p className="font-bold uppercase tracking-widest">&copy; {new Date().getFullYear()} Thérapie Club. {tFooter('rights')}</p>
      </footer>
    </main>
  );
}
