import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import ShowsSection from '../../components/ShowsSection';
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

      {/* Shows Section (2nd place) */}
      <ShowsSection />

      {/* Uncropped Background Image Section (Plaza) */}
      <section className="relative w-full aspect-[1500/938] overflow-hidden bg-background">
        <Image
          src="/images/band/shrpp-plaza-1-1.jpg"
          alt="Thérapie Club Background"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Pancarte Rouge embedded on the left side of the plaza picture */}
        <div className="absolute bottom-0 left-4 sm:left-8 md:left-12 lg:left-16 top-6 sm:top-10 md:top-12 lg:top-16 z-30 flex items-end">
          <Image
            src="/images/band/pancarte rouge.png"
            alt="Thérapie Club Sign"
            width={350}
            height={1040}
            className="h-[75%] sm:h-[82%] md:h-[88%] lg:h-[92%] w-auto object-contain object-left-bottom drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] hover:scale-105 transition-transform duration-300"
            priority
          />
        </div>

        {/* Lighter film grain texture overlay on top of background and sign */}
        <div className="absolute inset-0 bg-grain opacity-30 mix-blend-overlay pointer-events-none z-40" />

        {/* Side-by-side Singles centered in the Plaza section */}
        <div className="absolute inset-0 z-50 max-w-7xl mx-auto flex items-center justify-center p-4 sm:p-6 md:p-12 gap-6 sm:gap-10 md:gap-14">
          {[
            {
              title: 'Cash Flow',
              cover: '/images/band/Cash Flow thumb.jpeg',
              link: '#',
            },
            {
              title: 'Fake le Fun',
              cover: '/images/band/Fake le Fun thumb.jpg',
              link: '#',
            },
          ].map((single) => (
            <div
              key={single.title}
              className="group flex flex-col items-center justify-center space-y-2 sm:space-y-3 hover:scale-105 transition-transform duration-300"
            >
              {/* Bigger Pure Thumbnail Picture */}
              <div className="relative w-44 sm:w-64 md:w-80 lg:w-96 aspect-square overflow-hidden drop-shadow-2xl shadow-xl border-2 sm:border-3 border-white/20">
                <Image
                  src={single.cover}
                  alt={single.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Red Box under the picture containing Name & Stream Button */}
              <div className="w-full bg-[#4A0E17] border-2 border-[#4A0E17] shadow-lg py-2.5 px-4 sm:py-3.5 sm:px-6 flex flex-col items-center justify-center space-y-1.5 sm:space-y-2 text-center">
                <h3 className="text-sm sm:text-xl md:text-2xl font-black uppercase text-[#f5f0eb] font-display tracking-wider truncate max-w-full">
                  {single.title}
                </h3>
                <a
                  href={single.link}
                  className="bg-[#f5f0eb] text-[#4A0E17] px-4 sm:px-6 py-1 sm:py-1.5 font-black uppercase tracking-widest hover:bg-[#e6c594] transition-colors border border-[#f5f0eb] text-xs sm:text-sm shadow-md"
                >
                  {t('stream')}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bar Napkin Section */}
      <NapkinSection />

      <footer className="py-12 text-center text-background bg-forest">
        <p className="font-bold uppercase tracking-widest">&copy; {new Date().getFullYear()} Thérapie Club. {tFooter('rights')}</p>
      </footer>
    </main>
  );
}
