import Image from 'next/image';
import { useTranslations } from 'next-intl';

/**
 * Napkin coordinates in photo space (percent of the 4080x3072 bar photo).
 * The photo wrapper always keeps that aspect ratio — small screens only widen
 * it past the viewport to zoom on the napkin — so the text stays glued to the
 * paper and keeps the same proportions at every window size.
 *
 * The napkin is a square seen at an angle: its corners are at 36.8/12.5,
 * 75.6/47.7, 44.4/101.2 and 5.6/66.0, so it reads as a diamond. The box below
 * is that diamond's bounding box, tilted onto its long diagonal.
 */
const NAPKIN = {
  left: '4.9%',
  top: '12.3%',
  width: '71.4%',
  height: '89%',
  rotate: '-11.2deg',
} as const;

/** Wrap the text inside the diamond instead of a rectangle. */
const DIAMOND_LEFT = 'polygon(100% 0%, 0% 50%, 100% 100%, 0% 100%, 0% 0%)';
const DIAMOND_RIGHT = 'polygon(0% 0%, 100% 50%, 0% 100%, 100% 100%, 100% 0%)';

export default function NapkinSection() {
  const t = useTranslations('Napkin');

  return (
    <section
      id="napkin"
      className="relative w-full overflow-hidden aspect-[4080/3072] max-md:aspect-[4080/4301]"
    >
      {/* Small screens zoom on the napkin by widening the photo past the viewport. */}
      <div className="absolute left-0 top-1/2 w-full aspect-[4080/3072] -translate-y-1/2 max-md:left-[-6.84%] max-md:top-0 max-md:w-[140%] max-md:translate-y-0">
        <Image
          src="/images/band/bar.jpeg"
          alt="Serviette de bar"
          fill
          className="object-cover object-center"
          priority
        />

        <div className="absolute inset-0 bg-black/10 pointer-events-none z-10" />

        <div
          className="@container/napkin absolute z-30"
          style={{
            left: NAPKIN.left,
            top: NAPKIN.top,
            width: NAPKIN.width,
            height: NAPKIN.height,
            rotate: NAPKIN.rotate,
          }}
        >
          <div className="h-full text-center text-[#1a120e]">
            <div
              className="float-left h-full w-1/2"
              style={{ shapeOutside: DIAMOND_LEFT, shapeMargin: '4%' }}
            />
            <div
              className="float-right h-full w-1/2"
              style={{ shapeOutside: DIAMOND_RIGHT, shapeMargin: '4%' }}
            />

            <h3 className="font-satisfy text-[4.6cqi] leading-[1.15] mb-[0.25em]">
              {t('title')}
            </h3>

            <p className="font-satisfy text-[3.35cqi] leading-[1.25]">{t('line1')}</p>
            <p className="font-satisfy text-[3.35cqi] leading-[1.25]">{t('line2')}</p>
            <p className="font-satisfy text-[3.35cqi] leading-[1.25]">{t('line3')}</p>
            <p className="font-satisfy text-[3.35cqi] leading-[1.25] mb-[0.35em]">
              {t('line4')}
            </p>

            <p className="font-satisfy text-[2.3cqi] leading-[1.35] mb-[0.45em]">
              {t('body')}
            </p>

            <span className="font-satisfy text-[3.35cqi] leading-tight">
              {t('welcome')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
