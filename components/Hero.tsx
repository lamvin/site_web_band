import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Hero() {
    const t = useTranslations('Hero');

    return (
        <div className="relative h-screen flex items-center justify-center overflow-hidden bg-darlington">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/band/TC cover.jpg"
                    alt="TC Cover"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-darlington/80 via-darlington/50 to-beeswax/80 z-10" />
            </div>

            <div className="relative z-20 text-center px-4">
                <h1 className="text-6xl md:text-8xl font-black text-cafelatte tracking-tighter mb-4 animate-in fade-in zoom-in duration-1000 font-display drop-shadow-sm">
                    THÉRAPIE<br />CLUB
                </h1>

                <p className="text-xl md:text-2xl text-grenadine mb-8 max-w-2xl mx-auto font-bold tracking-widest uppercase">
                    {t.rich('subtitle', {
                        br: () => <br />
                    })}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-3 bg-grenadine text-beeswax font-black uppercase tracking-widest hover:bg-cafelatte hover:text-white transition transform hover:scale-105 shadow-lg">
                        {t('listen')}
                    </button>
                    <button className="px-8 py-3 border-4 border-cafelatte text-cafelatte font-black uppercase tracking-widest hover:bg-cafelatte hover:text-beeswax transition transform hover:scale-105">
                        {t('tour')}
                    </button>
                </div>
            </div>
        </div>
    );
}

