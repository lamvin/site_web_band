import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function ContactSection() {
  const t = useTranslations('Contact');
  const email = t('email');

  return (
    <section
      id="contact"
      className="relative w-full min-h-[640px] md:min-h-0 md:aspect-[3/2] overflow-hidden bg-background"
    >
      <Image
        src="/images/band/TherapieClub_03_HR.jpg"
        alt={t('photoAlt')}
        fill
        className="object-cover object-[center_78%] md:object-[center_55%]"
        sizes="100vw"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none z-10" />

      <div className="absolute inset-0 z-30">
        <div className="absolute left-1/2 top-[62%] md:top-[61%] w-[15.5rem] sm:w-72 md:w-[22rem] lg:w-[24rem] -translate-x-1/2 -translate-y-1/2 md:translate-x-[-38%] md:translate-y-[-18%] bg-[#4A0E17] border-2 border-[#f5f0eb]/20 shadow-2xl py-4 px-4 sm:py-6 sm:px-6 md:py-8 md:px-7 flex flex-col items-center text-center space-y-2 sm:space-y-3 md:space-y-4 drop-shadow-[0_12px_28px_rgba(0,0,0,0.55)]">
          <h2
            style={{ fontFamily: 'var(--font-vintage), "Fraunces", serif' }}
            className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-widest text-[#f5f0eb]"
          >
            {t('title')}
          </h2>
          <p className="text-[#e6c594] font-display font-bold uppercase tracking-widest text-[0.65rem] sm:text-sm">
            {t('subtitle')}
          </p>
          <p className="hidden sm:block text-[#f5f0eb]/85 text-sm sm:text-base leading-relaxed max-w-xs">
            {t('body')}
          </p>
          <a
            href={`mailto:${email}`}
            className="mt-0.5 w-full bg-[#f5f0eb] text-[#4A0E17] hover:bg-[#e6c594] px-4 py-2 sm:px-6 sm:py-2.5 font-black uppercase text-[0.65rem] sm:text-sm tracking-widest transition-all duration-200 border-2 border-[#f5f0eb] shadow-md hover:scale-105"
          >
            {t('cta')}
          </a>
          <a
            href={`mailto:${email}`}
            className="text-[#f5f0eb]/80 hover:text-white text-[0.65rem] sm:text-sm tracking-wider underline-offset-4 hover:underline"
          >
            {email}
          </a>
        </div>
      </div>
    </section>
  );
}
