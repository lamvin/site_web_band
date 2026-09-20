import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import ShowsSection from '../../components/ShowsSection';
import NapkinSection from '../../components/NapkinSection';
import ContactSection from '../../components/ContactSection';
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
        <div className="absolute bottom-0 left-2 sm:left-6 md:left-12 lg:left-16 top-4 sm:top-8 md:top-12 lg:top-16 z-30 flex items-end">
          <Image
            src="/images/band/pancarte rouge.png"
            alt="Thérapie Club Sign"
            width={350}
            height={1040}
            className="h-[88%] sm:h-[86%] md:h-[88%] lg:h-[92%] w-auto object-contain object-left-bottom drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] hover:scale-105 transition-transform duration-300"
            priority
          />
        </div>

        {/* Side-by-side Singles — shifted right on small screens so the sign stays visible */}
        <div className="absolute inset-0 z-40 flex items-center justify-end lg:justify-center pl-[22%] pr-2.5 sm:pl-[20%] sm:pr-5 md:pl-[18%] md:pr-8 lg:px-12 gap-2.5 sm:gap-5 md:gap-8 lg:gap-12">
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
            <a
              key={single.title}
              href={single.link}
              aria-label={`${single.title} — ${t('stream')}`}
              className="@container/single group relative w-[8.5rem] sm:w-48 md:w-64 lg:w-80 aspect-square overflow-hidden drop-shadow-2xl shadow-xl border-2 border-white/20 hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={single.cover}
                alt={single.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/80 via-black/35 to-transparent pt-12 pb-2 px-2 sm:pb-3 text-center">
                <h3 className="text-[length:clamp(0.55rem,7.6cqi,1.65rem)] font-black uppercase text-[#f5f0eb] font-display leading-none whitespace-nowrap drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]">
                  {single.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Bar Napkin Section */}
      <NapkinSection />

      <ContactSection />

      <footer className="py-12 text-center text-background bg-forest">
        <p className="font-bold uppercase tracking-widest">&copy; {new Date().getFullYear()} Thérapie Club. {tFooter('rights')}</p>
      </footer>
    </main>
  );
}
