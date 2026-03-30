import "server-only";

import fs from "node:fs";
import path from "node:path";

const GALLERY_ROOT = path.join(process.cwd(), "public", "gallery");
const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);
const COUNTRY_FOLDER_ALIASES: Record<string, string[]> = {
  denmark: ["danmark"],
  "north-korea": ["north korea"],
  "south-korea": ["south korea"],
  "united-kingdom": ["uk"],
  "united-states": ["usa"],
};

const FOLDER_TO_COUNTRY_KEY: Record<string, string> = Object.entries(COUNTRY_FOLDER_ALIASES)
  .flatMap(([countryKey, aliases]) => aliases.map((alias) => [alias, countryKey] as const))
  .reduce<Record<string, string>>((acc, [alias, countryKey]) => {
    acc[alias] = countryKey;
    return acc;
  }, {});

function isImageFile(fileName: string): boolean {
  const ext = path.extname(fileName).toLowerCase();
  return IMAGE_EXTENSIONS.has(ext);
}

function safeReadDir(dirPath: string): string[] {
  try {
    return fs.readdirSync(dirPath);
  } catch {
    return [];
  }
}

function getCountryFolders(countryKey: string): string[] {
  return [countryKey, ...(COUNTRY_FOLDER_ALIASES[countryKey] ?? [])];
}

export function getCountryGalleryImages(
  countryKey: string,
  countryName: string
): Array<{ src: string; alt: string }> {
  const files = getCountryFolders(countryKey)
    .flatMap((folderName) => {
      const dirPath = path.join(GALLERY_ROOT, folderName);
      return safeReadDir(dirPath)
        .filter(isImageFile)
        .map((fileName) => ({ folderName, fileName }));
    })
    .sort((a, b) => {
      const byFolder = a.folderName.localeCompare(b.folderName);
      if (byFolder !== 0) return byFolder;
      return a.fileName.localeCompare(b.fileName);
    });

  return files.map((item, index) => ({
    src: `/gallery/${item.folderName}/${item.fileName}`,
    alt: `${countryName} photo ${index + 1}`,
  }));
}

export function getGalleryPhotoCounts(): Record<string, number> {
  const counts: Record<string, number> = {};

  const folders = safeReadDir(GALLERY_ROOT);

  for (const folderName of folders) {
    const folderPath = path.join(GALLERY_ROOT, folderName);

    try {
      if (!fs.statSync(folderPath).isDirectory()) continue;
    } catch {
      continue;
    }

    const countryKey = FOLDER_TO_COUNTRY_KEY[folderName] ?? folderName;
    const current = counts[countryKey] ?? 0;
    counts[countryKey] = current + safeReadDir(folderPath).filter(isImageFile).length;
  }

  return counts;
}
