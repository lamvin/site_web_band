import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative w-full aspect-[3/2] overflow-hidden bg-background">
            {/* Full uncropped cover photo */}
            <Image
                src="/images/band/TC cover.jpg"
                alt="TC Cover"
                fill
                className="object-cover object-center"
                priority
            />

            {/* Pale pastel filter overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-darlington/60 via-darlington/30 to-beeswax/70 pointer-events-none" />

            {/* Retro film grain texture overlay matching reference image */}
            <div className="absolute inset-0 bg-grain opacity-35 mix-blend-overlay pointer-events-none z-10" />

            {/* Logo & Band Name superposed higher at top of photo (Logo left of Band Name) */}
            <div className="absolute top-2 sm:top-4 md:top-6 lg:top-8 left-0 right-0 z-20 flex flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 px-4">
                <Image
                    src="/images/band/logo_gold_green.png"
                    alt="Thérapie Club Logo"
                    width={140}
                    height={140}
                    className="h-12 sm:h-16 md:h-24 lg:h-28 w-auto object-contain drop-shadow-lg hover:scale-105 transition-transform duration-300"
                    priority
                />
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-widest text-[#2B583F] font-display drop-shadow-md text-center leading-none">
                    THÉRAPIE CLUB
                </h1>
            </div>
        </section>
    );
}








