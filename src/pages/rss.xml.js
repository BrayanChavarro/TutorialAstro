import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Alumno de Astro Brayan Chavarro | Blog',
    description: 'Mi viaje de aprendizaje de Astro',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>es-co</language>`,
  });
}