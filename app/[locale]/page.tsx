import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import { client } from '../../lib/sanity';
import { urlFor } from '../../lib/sanity';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

// Types
interface Show {
  _id: string;
  venue: string;
  city: string;
  date: string;
  ticketLink: string;
}

interface Album {
  _id: string;
  title: string;
  releaseDate: string;
  coverImage: any;
  spotifyLink: string;
}

async function getAlbums() {
  return await client.fetch<Album[]>(`*[_type == "album" && defined(title) && defined(coverImage)] | order(releaseDate desc)`);
}

export default async function Home() {
  const albums = await getAlbums();
  const t = await getTranslations('Home');
  const tFooter = await getTranslations('Footer');

  return (
    <main className="bg-background min-h-screen text-foreground">
      <Navbar />
      <Hero />

      <section id="music" className="py-24 px-4 md:px-8 bg-darlington/20 border-t-4 border-forest">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black mb-16 text-center uppercase tracking-normal text-forest font-display">{t('latestReleases')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Static New Single */}
            <div className="group relative aspect-[2/3] bg-forest shadow-[8px_8px_0px_0px_rgba(172,202,178,1)] border-4 border-forest">
              <Image
                src="/images/band/album_cover.png"
                alt="Cash Flow"
                fill
                className="object-cover transition duration-500"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 z-10 bg-forest/90 p-6">
                <h3 className="text-3xl font-black uppercase mb-4 text-center text-darlington font-display leading-none">Cash Flow</h3>
                <a href="#" className="bg-darlington text-forest px-8 py-3 rounded-none font-black uppercase tracking-widest hover:bg-background hover:text-forest transition-colors border-2 border-darlington">{t('stream')}</a>
              </div>
            </div>
            {albums.length > 0 ? (
              albums.map((album) => (
                <div key={album._id} className="group relative aspect-square bg-forest shadow-[8px_8px_0px_0px_rgba(172,202,178,1)] border-4 border-forest">
                  {album.coverImage && (
                    <Image
                      src={urlFor(album.coverImage).width(800).url()}
                      alt={album.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition duration-500"
                    />
                  )}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 z-10 bg-forest/90 p-6">
                    <h3 className="text-3xl font-black uppercase mb-4 text-center text-darlington font-display leading-none">{album.title}</h3>
                    <a href={album.spotifyLink} target="_blank" className="bg-darlington text-forest px-8 py-3 rounded-none font-black uppercase tracking-widest hover:bg-background hover:text-forest transition-colors border-2 border-darlington">{t('stream')}</a>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center col-span-full text-forest italic text-xl">{t('noReleases')}</p>
            )}
          </div>
        </div>
      </section>

      {/* Uncropped Background Image Section below Dernières Sorties */}
      <section className="relative w-full aspect-[1500/938] overflow-hidden border-t-4 border-forest bg-background">
        <Image
          src="/images/band/shrpp-plaza-1-1.jpg"
          alt="Thérapie Club Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Film grain texture overlay */}
        <div className="absolute inset-0 bg-grain opacity-25 mix-blend-overlay pointer-events-none z-10" />

        {/* TC Neon logo with baked-in film grain (lowered and shifted right) */}
        <div className="absolute top-18 sm:top-20 md:top-24 lg:top-28 left-32 sm:left-48 md:left-64 lg:left-80 z-30">
          <Image
            src="/images/band/tc neon.png"
            alt="Thérapie Club TC Neon Logo"
            width={600}
            height={600}
            className="h-36 sm:h-52 md:h-72 lg:h-[360px] w-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
            priority
          />
        </div>

        {/* Content / Embed container inside section */}
        <div className="absolute inset-0 z-20 max-w-7xl mx-auto flex items-center justify-center p-4 md:p-8">
          <div id="shrpp-plaza-1-1" className="shrpp-plaza-1-1 w-full" />
        </div>
      </section>

      <footer className="py-12 text-center text-background border-t-4 border-darlington bg-forest">
        <p className="font-bold uppercase tracking-widest">&copy; {new Date().getFullYear()} Thérapie Club. {tFooter('rights')}</p>
      </footer>
    </main>
  );
}
