export default function handler(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/xml");

  // Instructing the Vercel edge to cache the file
  res.setHeader("Cache-control", "stale-while-revalidate, s-maxage=3600");

  // generate sitemap here
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
    <url>
      <loc>https://rekordbox-playlist-parser-timsusa.vercel.app/</loc>
      <lastmod>2022-12-10</lastmod>
    </url>
    </urlset>`;

  res.end(xml);
}
