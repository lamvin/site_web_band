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

async function getShows() {
  return await client.fetch<Show[]>(`*[_type == "show"] | order(date asc)`);
}

async function getAlbums() {
  return await client.fetch<Album[]>(`*[_type == "album" && defined(title) && defined(coverImage)] | order(releaseDate desc)`);
}

export default async function Home() {
  const shows = await getShows();
  const albums = await getAlbums();
  const t = await getTranslations('Home');
  const tFooter = await getTranslations('Footer');

  return (
    <main className="bg-background min-h-screen text-foreground">
      <Navbar />
      <Hero />

      <section id="shows" className="py-24 px-4 md:px-8 max-w-5xl mx-auto">
        <h2 className="text-5xl font-black mb-16 text-center uppercase tracking-normal text-cafelatte font-display">{t('upcomingShows')}</h2>
        <div className="space-y-6">
          {shows.length > 0 ? (
            shows.map((show) => (
              <div key={show._id} className="flex flex-col md:flex-row justify-between items-center bg-white p-8 border-2 border-cafelatte shadow-[4px_4px_0px_0px_rgba(120,97,77,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(120,97,77,1)] transition-all duration-200">
                <div className="text-center md:text-left mb-4 md:mb-0">
                  <p className="text-3xl font-black text-grenadine font-display uppercase">{new Date(show.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</p>
                  <p className="text-cafelatte/70 font-bold">{new Date(show.date).getFullYear()}</p>
                </div>
                <div className="text-center md:text-left flex-1 md:mx-12">
                  <h3 className="text-2xl font-bold text-cafelatte uppercase">{show.venue}</h3>
                  <p className="text-cafelatte/80 font-medium">{show.city}</p>
                </div>
                <a
                  href={show.ticketLink || '#'}
                  target="_blank"
                  className="px-8 py-3 bg-beeswax text-cafelatte border-2 border-cafelatte uppercase text-sm font-black tracking-widest hover:bg-grenadine hover:text-beeswax transition-colors"
                >
                  {t('tickets')}
                </a>
              </div>
            ))
          ) : (
            <p className="text-center text-cafelatte italic text-xl">{t('noShows')}</p>
          )}
        </div>
      </section>

      <section id="music" className="py-24 px-4 md:px-8 bg-darlington/20 border-t-4 border-cafelatte">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black mb-16 text-center uppercase tracking-normal text-cafelatte font-display">{t('latestReleases')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Static New Single */}
            <div className="group relative aspect-[2/3] bg-cafelatte shadow-[8px_8px_0px_0px_rgba(233,167,82,1)] border-4 border-cafelatte">
              <Image
                src="/images/band/album_cover.png"
                alt="J'veux la plus belle vie du monde"
                fill
                className="object-cover transition duration-500"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 z-10 bg-cafelatte/80 p-6">
                <h3 className="text-3xl font-black uppercase mb-4 text-center text-beeswax font-display leading-none">J'veux la plus belle vie du monde</h3>
                <a href="#" className="bg-grenadine text-beeswax px-8 py-3 rounded-none font-black uppercase tracking-widest hover:bg-beeswax hover:text-cafelatte transition-colors border-2 border-beeswax">{t('stream')}</a>
              </div>
            </div>
            {albums.length > 0 ? (
              albums.map((album) => (
                <div key={album._id} className="group relative aspect-square bg-cafelatte shadow-[8px_8px_0px_0px_rgba(233,167,82,1)] border-4 border-cafelatte">
                  {album.coverImage && (
                    <Image
                      src={urlFor(album.coverImage).width(800).url()}
                      alt={album.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition duration-500"
                    />
                  )}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 z-10 bg-cafelatte/80 p-6">
                    <h3 className="text-3xl font-black uppercase mb-4 text-center text-beeswax font-display leading-none">{album.title}</h3>
                    <a href={album.spotifyLink} target="_blank" className="bg-grenadine text-beeswax px-8 py-3 rounded-none font-black uppercase tracking-widest hover:bg-beeswax hover:text-cafelatte transition-colors border-2 border-beeswax">{t('stream')}</a>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center col-span-full text-cafelatte italic text-xl">{t('noReleases')}</p>
            )}
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-beeswax border-t-4 border-beeswax bg-cafelatte">
        <p className="font-bold uppercase tracking-widest">&copy; {new Date().getFullYear()} Baie des Chaleurs. {tFooter('rights')}</p>
      </footer>
    </main>
  );
}
