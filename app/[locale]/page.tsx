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

        <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
          <a
            href="#"
            aria-label={`Cash Flow — ${t('stream')}`}
            className="group relative w-36 sm:w-52 md:w-72 lg:w-96 aspect-square overflow-hidden drop-shadow-2xl shadow-xl border-2 border-white/20 hover:scale-105 transition-transform duration-300"
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
