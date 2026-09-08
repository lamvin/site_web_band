import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function NapkinSection() {
  const t = useTranslations('Napkin');

  return (
    <section className="relative w-full aspect-[4080/3072] overflow-hidden bg-background flex items-center justify-center">
      {/* Full uncropped bar photo */}
      <Image
        src="/images/band/bar.jpeg"
        alt="Bar background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Subtle overlay for high contrast readability */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none z-10" />

      {/* Centered Napkin Text Box scaled to fit neatly within the napkin */}
      <div className="relative z-30 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl w-full mx-auto p-4 sm:p-6 text-center flex flex-col items-center justify-center space-y-3 sm:space-y-5 md:space-y-6 -translate-x-35 translate-y-20">
        <h3 className="font-vintage text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide text-black transform -rotate-1">
          {t('title')}
        </h3>

        <div className="space-y-1.5 sm:space-y-2 md:space-y-3 text-center">
          <p className="font-vintage text-xs sm:text-base md:text-lg lg:text-xl font-semibold text-black leading-normal">
            {t('line1')}
          </p>
          <p className="font-vintage text-xs sm:text-base md:text-lg lg:text-xl font-semibold text-black leading-normal">
            {t('line2')}
          </p>
          <p className="font-vintage text-xs sm:text-base md:text-lg lg:text-xl font-semibold text-black leading-normal">
            {t('line3')}
          </p>
          <p className="font-vintage text-xs sm:text-base md:text-lg lg:text-xl font-semibold text-black leading-normal">
            {t('line4')}
          </p>
        </div>

        <p className="font-vintage text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed font-medium text-black/95 max-w-md sm:max-w-lg pt-1">
          {t('body')}
        </p>

        <div className="w-full flex justify-center pt-1.5">
          <span className="font-vintage text-sm sm:text-xl md:text-2xl lg:text-3xl font-bold text-black transform rotate-1">
            {t('welcome')}
          </span>
        </div>
      </div>
    </section>
  );
}
