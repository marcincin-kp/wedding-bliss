import { copyFile, mkdir, readFile, readdir, rename, writeFile } from "node:fs/promises";
import { join } from "node:path";

const outDir = "dist/client";
const files = await readdir(outDir);

if (files.includes("pages.html")) {
  await rename(join(outDir, "pages.html"), join(outDir, "index.html"));
}

await mkdir(outDir, { recursive: true });
const indexPath = join(outDir, "index.html");
const html = await readFile(indexPath, "utf8");
const hardenedHtml = html.replace(
  /<script type="module" crossorigin src="([^"]+)"><\/script>/,
  `<script type="module" crossorigin src="$1" onerror="if(!sessionStorage.getItem('pages-reload')){sessionStorage.setItem('pages-reload','1');location.reload()}"></script>`,
);
await writeFile(indexPath, hardenedHtml);
await copyFile(join(outDir, "index.html"), join(outDir, "404.html"));
await writeFile(join(outDir, ".nojekyll"), "");

console.log("Prepared GitHub Pages static output.");
