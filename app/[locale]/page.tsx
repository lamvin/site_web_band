import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import ShowsSection from '../../components/ShowsSection';
import NapkinSection from '../../components/NapkinSection';
import ContactSection from '../../components/ContactSection';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

export default async function Home() {
  const t = await getTranslations('Home');

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

        <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
          <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4">
            <p
              style={{ fontFamily: 'var(--font-vintage), "Fraunces", serif' }}
              className="font-black text-xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-widest leading-none text-[#f5f0eb] drop-shadow-md text-center -translate-y-2"
            >
              Premier single
            </p>
            <a
              href="#"
              aria-label={`Cash Flow — ${t('stream')}`}
              className="group relative w-[8rem] sm:w-[16.5rem] md:w-[23rem] lg:w-[30.5rem] aspect-square overflow-hidden drop-shadow-2xl shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <Image
                src="/images/band/Cash Flow thumb.jpg"
                alt="Cash Flow"
                fill
                unoptimized
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Bar Napkin Section */}
      <NapkinSection />

      <ContactSection />
    </main>
  );
}
