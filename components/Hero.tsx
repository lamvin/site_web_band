import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Hero() {
    const t = useTranslations('Hero');

    return (
        <div className="relative min-h-screen pt-36 flex items-center justify-center overflow-hidden bg-darlington">
            {/* Background with overlay positioned below navbar */}
            <div className="absolute inset-0 top-36 z-0">
                <Image
                    src="/images/band/TC cover.jpg"
                    alt="TC Cover"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-darlington/80 via-darlington/50 to-beeswax/80 z-10" />
            </div>

            <div className="relative z-20 text-center px-4 py-12">
                <h1 className="text-6xl md:text-8xl font-black text-cafelatte tracking-tighter mb-4 animate-in fade-in zoom-in duration-1000 font-display drop-shadow-sm">
                    THÉRAPIE<br />CLUB
                </h1>

                <p className="text-xl md:text-2xl text-purple-950 mb-8 max-w-2xl mx-auto font-black tracking-widest uppercase drop-shadow-sm">
                    {t.rich('subtitle', {
                        br: () => <br />
                    })}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-3 bg-purple-950 text-pastel-purple border-4 border-purple-950 font-black uppercase tracking-widest hover:bg-pastel-purple hover:text-purple-950 transition transform hover:scale-105 shadow-lg">
                        {t('listen')}
                    </button>
                    <button className="px-8 py-3 bg-pastel-purple text-purple-950 border-4 border-purple-950 font-black uppercase tracking-widest hover:bg-purple-950 hover:text-pastel-purple transition transform hover:scale-105 shadow-lg">
                        {t('tour')}
                    </button>
                </div>
            </div>
        </div>
    );
}

