export async function GET() {
  return new Response(
    `
<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->


<url>
  <loc>https://www.traverhardwoodfloors.com/</loc>
  <lastmod>2024-08-23T20:00:02+00:00</lastmod>
  <priority>1.00</priority>
</url>
<url>
  <loc>https://www.traverhardwoodfloors.com/about-us</loc>
  <lastmod>2024-08-23T20:00:02+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.traverhardwoodfloors.com/contact-us</loc>
  <lastmod>2024-08-23T20:00:02+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.traverhardwoodfloors.com/installation</loc>
  <lastmod>2024-08-23T20:00:02+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.traverhardwoodfloors.com/sanding-and-finishing</loc>
  <lastmod>2024-08-23T20:00:02+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.traverhardwoodfloors.com/repair-and-restoration</loc>
  <lastmod>2024-08-23T20:00:02+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.traverhardwoodfloors.com/privacy-policy</loc>
  <lastmod>2024-08-23T20:00:02+00:00</lastmod>
  <priority>0.80</priority>
</url>


</urlset>`.trim(),
    {
      headers: {
        "Content-Type": "application/xml",
      },
    })
}
