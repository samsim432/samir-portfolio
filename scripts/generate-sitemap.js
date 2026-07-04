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
  "quiz",
  "privacy-policy",
  "terms-and-conditions",
  "disclaimer",
  "editorial-policy",
];

function createSlug(title) {
  return String(title)
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

async function generateSitemap() {
  try {
    const urls = [];
    const seenUrls = new Set();

    function addUrl(path, priority) {
      const cleanPath = path === "/" ? "" : path.replace(/\/$/, "");
      const loc = `${SITE_URL}${cleanPath}`;

      if (seenUrls.has(loc)) return;
      seenUrls.add(loc);

      urls.push(`
  <url>
    <loc>${loc}</loc>
    <priority>${priority}</priority>
  </url>`);
    }

    staticPages.forEach((page) => {
      addUrl(page ? `/${page}` : "/", page === "" ? "1.0" : "0.8");
    });

    const articlesSnapshot = await getDocs(collection(db, "articles"));

    articlesSnapshot.forEach((doc) => {
      const article = doc.data();
      const slug = article.slug || createSlug(article.title);

if (!slug) return;

addUrl(`/articles/${slug}`, "0.9");


    });

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("")}
</urlset>`;

    fs.writeFileSync("public/sitemap.xml", sitemap);

    console.log("✅ Sitemap generated successfully!");
    console.log(`✅ Total URLs: ${urls.length}`);
  } catch (error) {
    console.error("❌ Sitemap generation failed:");
    console.error(error);
    process.exit(1);
  }
}

generateSitemap();