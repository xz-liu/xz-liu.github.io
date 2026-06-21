#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const https = require("https");

const scholarId = process.env.SCHOLAR_ID || process.argv[2] || "MaIQOwsAAAAJ";
const outputPath =
  process.env.SCHOLAR_OUTPUT ||
  path.join(__dirname, "..", "docs", ".vuepress", "public", "scholar-citations.json");
const scholarUrl = `https://scholar.google.com/citations?user=${encodeURIComponent(scholarId)}&hl=en`;

function fetchHtml(url, redirects = 0) {
  return new Promise((resolve, reject) => {
    const req = https.get(
      url,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
          Accept: "text/html,application/xhtml+xml",
        },
      },
      (res) => {
        const statusCode = res.statusCode || 0;
        const location = res.headers.location;

        if (statusCode >= 300 && statusCode < 400 && location) {
          if (redirects > 5) {
            reject(new Error("Too many redirects when fetching Google Scholar profile."));
            return;
          }
          res.resume();
          const nextUrl = new URL(location, url).toString();
          resolve(fetchHtml(nextUrl, redirects + 1));
          return;
        }

        if (statusCode < 200 || statusCode >= 300) {
          reject(new Error(`Google Scholar request failed with HTTP ${statusCode}.`));
          res.resume();
          return;
        }

        let html = "";
        res.setEncoding("utf8");
        res.on("data", (chunk) => {
          html += chunk;
        });
        res.on("end", () => {
          resolve(html);
        });
      }
    );

    req.on("error", (error) => reject(error));
  });
}

function extractCitations(html) {
  if (/Our systems have detected unusual traffic/i.test(html)) {
    throw new Error("Google Scholar returned an anti-bot page. Try again later.");
  }

  const metaMatch = html.match(/Cited by\s+([\d,]+)/i);
  if (metaMatch) {
    return Number(metaMatch[1].replace(/,/g, ""));
  }

  const tableMatch = html.match(
    />\s*Citations\s*<\/td>\s*<td[^>]*class="gsc_rsb_std"[^>]*>\s*([\d,]+)\s*</i
  );
  if (tableMatch) {
    return Number(tableMatch[1].replace(/,/g, ""));
  }

  throw new Error("Could not extract citation count from Google Scholar response.");
}

async function main() {
  const html = await fetchHtml(scholarUrl);
  const citations = extractCitations(html);
  const payload = {
    scholar_id: scholarId,
    citations,
    source_url: scholarUrl,
    updated_at: new Date().toISOString(),
  };

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");

  console.log(`Updated ${outputPath} with ${citations} citations.`);
}

main().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
