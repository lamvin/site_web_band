import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Hero() {
    const t = useTranslations('Hero');

    return (
        <div className="relative h-screen flex items-center justify-center overflow-hidden bg-darlington">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-darlington to-beeswax opacity-80 z-10" />
                {/* Placeholder for band image */}
                <div className="w-full h-full bg-cover bg-center flex items-center justify-center text-cafelatte/20 text-9xl font-bold font-display">
                    {/* Fallback pattern/noise can be added later */}
                </div>
            </div>

            <div className="relative z-20 text-center px-4">
                <h1 className="text-6xl md:text-8xl font-black text-cafelatte tracking-tighter mb-4 animate-in fade-in zoom-in duration-1000 font-display drop-shadow-sm">
                    BAIE DES<br />CHALEURS
                </h1>

                {/* Band Members Pixel Art - 6 Columns */}
                <div className="flex justify-center items-end gap-2 md:gap-4 mb-8 overflow-hidden">
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                        <div key={num} className="relative w-16 h-16 md:w-24 md:h-24 hover:-translate-y-2 transition-transform duration-300">
                            <Image
                                src={`/images/band/membre${num}.png`}
                                alt={`Band Member ${num}`}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>

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
