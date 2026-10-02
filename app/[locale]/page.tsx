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

        {/* Side-by-side singles, centered on the plaza */}
        <div className="absolute inset-0 z-20 flex items-center justify-center px-4 sm:px-8 md:px-12 gap-4 sm:gap-8 md:gap-12 lg:gap-16">
          {[
            {
              title: 'Cash Flow',
              cover: '/images/band/Cash Flow thumb.jpg',
              link: '#',
              showTitle: false,
            },
            {
              title: 'Fake le Fun',
              cover: '/images/band/Fake le Fun thumb.jpg',
              link: '#',
              showTitle: true,
            },
          ].map((single) => (
            <a
              key={single.title}
              href={single.link}
              aria-label={`${single.title} — ${t('stream')}`}
              className="@container/single group relative w-36 sm:w-52 md:w-72 lg:w-96 aspect-square overflow-hidden drop-shadow-2xl shadow-xl border-2 border-white/20 hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={single.cover}
                alt={single.title}
                fill
                sizes="(max-width: 639px) 9rem, (max-width: 767px) 13rem, (max-width: 1023px) 18rem, 24rem"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              {single.showTitle && (
                <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/80 via-black/35 to-transparent pt-12 pb-2 px-2 sm:pb-3 text-center">
                  <h3 className="text-[length:clamp(0.55rem,7.6cqi,1.65rem)] font-black uppercase text-[#f5f0eb] font-display leading-none whitespace-nowrap drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]">
                    {single.title}
                  </h3>
                </div>
              )}
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
