import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const outDir = "dist/client";
const assetsDir = join(outDir, "assets");
const files = await readdir(assetsDir);

const cssFile = files.find((file) => /^styles-.*\.css$/.test(file));
const jsFiles = files.filter((file) => /^index-.*\.js$/.test(file));

if (!cssFile) {
  throw new Error("Could not find generated styles asset in dist/client/assets.");
}

let appEntry;
for (const file of jsFiles) {
  const contents = await readFile(join(assetsDir, file), "utf8");
  if (contents.includes("hydrateRoot(document")) {
    appEntry = file;
    break;
  }
}

if (!appEntry) {
  throw new Error("Could not find generated app entry asset in dist/client/assets.");
}

const title = "Svadba Ráchel Saraková & Pavol Marcinčin";
const description =
  "Pozvánka na svadbu Ráchel Sarakovej a Pavla Marcinčina, 12. september 2026 v Prešove.";

const html = `<!doctype html>
<html lang="sk">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="author" content="Ráchel Saraková & Pavol Marcinčin" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&family=Pinyon+Script&display=swap" />
    <link rel="stylesheet" href="./assets/${cssFile}" />
    <script type="module" crossorigin src="./assets/${appEntry}"></script>
  </head>
  <body></body>
</html>
`;

await mkdir(outDir, { recursive: true });
await writeFile(join(outDir, "index.html"), html);
await writeFile(join(outDir, "404.html"), html);
await writeFile(join(outDir, ".nojekyll"), "");

console.log(`Prepared GitHub Pages static output with ${appEntry} and ${cssFile}.`);
