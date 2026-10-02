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
        <div className="absolute left-1/2 top-[68%] w-52 -translate-x-1/2 -translate-y-full scale-[0.8] sm:w-60 md:w-64 lg:w-72 bg-black border-2 border-[#f5f0eb]/20 shadow-2xl py-3.5 px-4 sm:py-4 sm:px-5 md:py-5 md:px-6 flex flex-col items-center text-center gap-1.5 sm:gap-2 drop-shadow-[0_12px_28px_rgba(0,0,0,0.55)]">
          <h2
            style={{ fontFamily: 'var(--font-vintage), "Fraunces", serif' }}
            className="text-xl sm:text-3xl md:text-4xl font-black uppercase tracking-widest text-[#f5f0eb]"
          >
            {t('title')}
          </h2>
          <p className="text-[#e6c594] font-display font-bold uppercase tracking-widest text-[0.65rem] sm:text-xs">
            {t('subtitle')}
          </p>
          <a
            href={`mailto:${email}`}
            className="mt-0.5 w-full bg-[#f5f0eb] text-black hover:bg-[#e6c594] px-4 py-1.5 sm:px-5 sm:py-2 font-black uppercase text-[0.65rem] sm:text-xs tracking-widest transition-all duration-200 border-2 border-[#f5f0eb]"
          >
            {t('cta')}
          </a>
          <a
            href={`mailto:${email}`}
            className="text-[#f5f0eb]/85 hover:text-white text-[0.65rem] sm:text-xs tracking-wide underline-offset-4 hover:underline"
          >
            {email}
          </a>
        </div>
      </div>
    </section>
  );
}
