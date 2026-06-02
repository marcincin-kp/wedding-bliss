import { copyFile, mkdir, readdir, rename, writeFile } from "node:fs/promises";
import { join } from "node:path";

const outDir = "dist/client";
const files = await readdir(outDir);

if (files.includes("pages.html")) {
  await rename(join(outDir, "pages.html"), join(outDir, "index.html"));
}

await mkdir(outDir, { recursive: true });
await copyFile(join(outDir, "index.html"), join(outDir, "404.html"));
await writeFile(join(outDir, ".nojekyll"), "");

console.log("Prepared GitHub Pages static output.");
