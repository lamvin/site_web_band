import { useTranslations } from 'next-intl';

interface ShowItem {
  id: string;
  date: string;
  venue: string;
  city: string;
  ticketLink: string;
}

const sampleShows: ShowItem[] = [
  {
    id: '1',
    date: '18 OCT 2026',
    venue: 'MTELUS',
    city: 'Montréal, QC',
    ticketLink: '#',
  },
  {
    id: '2',
    date: '24 OCT 2026',
    venue: "L'Impérial Bell",
    city: 'Québec, QC',
    ticketLink: '#',
  },
  {
    id: '3',
    date: '07 NOV 2026',
    venue: 'Théâtre Granada',
    city: 'Sherbrooke, QC',
    ticketLink: '#',
  },
  {
    id: '4',
    date: '20 NOV 2026',
    venue: 'Le National',
    city: 'Ottawa, ON',
    ticketLink: '#',
  },
];

export default function ShowsSection() {
  const t = useTranslations('Home');

  return (
    <section id="shows" className="relative w-full py-20 px-4 sm:px-8 md:px-12 bg-[#4A0E17] text-[#f5f0eb] overflow-hidden border-t-4 border-[#350A14]">
      {/* Texture Grain Overlay */}
      <div className="absolute inset-0 bg-grain opacity-35 mix-blend-overlay pointer-events-none z-10" />

      <div className="relative z-20 max-w-5xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <h2
          style={{ fontFamily: 'var(--font-vintage), "Fraunces", serif' }}
          className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-widest text-[#f5f0eb] mb-12 text-center drop-shadow-md"
        >
          {t('upcomingShows')}
        </h2>

        {/* Shows List */}
        <div className="w-full space-y-2">
          {sampleShows.map((show) => (
            <div
              key={show.id}
              className="flex flex-col md:flex-row items-center justify-between border-b border-[#f5f0eb]/20 py-5 sm:py-6 px-4 sm:px-6 rounded-none hover:bg-white/10 transition-colors gap-4"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-8 text-center md:text-left">
                <span className="font-display font-black text-xl sm:text-2xl text-[#e6c594] tracking-widest uppercase min-w-[140px]">
                  {show.date}
                </span>
                <div>
                  <h3 className="font-bold text-lg sm:text-xl text-[#f5f0eb] uppercase tracking-wide">
                    {show.venue}
                  </h3>
                  <p className="text-sm text-[#f5f0eb]/75 uppercase tracking-wider">
                    {show.city}
                  </p>
                </div>
              </div>

              <a
                href={show.ticketLink}
                className="bg-[#f5f0eb] text-[#4A0E17] hover:bg-[#e6c594] px-6 py-2.5 font-black uppercase text-xs sm:text-sm tracking-widest transition-all duration-200 border-2 border-[#f5f0eb] shadow-md hover:scale-105 rounded-none"
              >
                {t('tickets')}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
