import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

export type HobbyEntry = {
  image?: { src: string; alt: string };
  text?: string;
};

export async function getHobbies(): Promise<HobbyEntry[]> {
  const directory = path.join(process.cwd(), "public", "hobbies");
  const files = await readdir(directory, { withFileTypes: true });
  const entries = new Map<string, HobbyEntry>();

  for (const file of files) {
    if (!file.isFile()) continue;
    const { name, ext } = path.parse(file.name);
    const entry = entries.get(name) ?? {};
    if (/^\.(jpe?g|png|webp|avif|gif)$/i.test(ext)) {
      entry.image = {
        src: `/hobbies/${encodeURIComponent(file.name)}`,
        alt: name.replace(/^\d+[-_ ]+/, "").replace(/[-_]+/g, " "),
      };
    } else if (ext.toLowerCase() === ".txt") {
      entry.text = (await readFile(path.join(directory, file.name), "utf8")).trim();
    } else {
      continue;
    }
    entries.set(name, entry);
  }

  return [...entries]
    .sort(([a], [b]) => a.localeCompare(b, "en", { numeric: true }))
    .map(([, entry]) => entry)
    .filter((entry) => entry.image || entry.text);
}
