import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function NapkinSection() {
  const t = useTranslations('Napkin');

  return (
    <section className="relative w-full aspect-[4080/3072] overflow-hidden border-t-4 border-forest bg-background flex items-center justify-center">
      {/* Full uncropped bar photo without blur filter */}
      <Image
        src="/images/band/bar.jpg"
        alt="Bar background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Handwritten Black Text Box shifted slightly to the left */}
      <div className="relative z-30 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl w-full mx-auto -translate-x-4 sm:-translate-x-8 md:-translate-x-12 p-4 sm:p-6 text-center flex flex-col items-center justify-center space-y-4 sm:space-y-6">
        <h3 className="font-handwriting text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide text-black transform -rotate-1">
          {t('title')}
        </h3>

        <div className="space-y-2 sm:space-y-4 text-center">
          <p className="font-handwriting text-2xl sm:text-4xl md:text-5xl leading-relaxed font-bold text-black">
            "{t('note')}"
          </p>
          <p className="font-handwriting text-xl sm:text-3xl md:text-4xl italic font-semibold text-black/90">
            {t('subtext')}
          </p>
        </div>

        <div className="w-full flex justify-center">
          <span className="font-handwriting text-2xl sm:text-4xl md:text-5xl font-bold text-black transform rotate-2">
            {t('signature')}
          </span>
        </div>
      </div>
    </section>
  );
}
