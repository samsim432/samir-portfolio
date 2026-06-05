import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import fs from "fs";

const firebaseConfig = {
  apiKey: "AIzaSyD-EAisD57Gz-jWMgLBGxnJEvT_3F2_00Y",
  authDomain: "what-if-website.firebaseapp.com",
  projectId: "what-if-website",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const SITE_URL = "https://samirsimkhada.com.np";

const staticPages = [
  "",
  "articles",
  "about",
  "hire",
  "reels",
  "shop",
  "privacy-policy",
];

function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

async function generateSitemap() {
  const urls = [];

  staticPages.forEach((page) => {
    urls.push(`
  <url>
    <loc>${SITE_URL}${page ? `/${page}` : ""}</loc>
    <priority>${page === "" ? "1.0" : "0.8"}</priority>
  </url>`);
  });

  const articlesSnapshot = await getDocs(collection(db, "articles"));

  articlesSnapshot.forEach((doc) => {
    const article = doc.data();

    if (article.title) {
      const slug = createSlug(article.title);

      urls.push(`
  <url>
    <loc>${SITE_URL}/articles/${slug}</loc>
    <priority>0.9</priority>
  </url>`);
    }
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("")}
</urlset>`;

  fs.writeFileSync("public/sitemap.xml", sitemap);

  console.log("✅ Sitemap generated successfully!");
  console.log(`✅ Total URLs: ${urls.length}`);
}

generateSitemap();