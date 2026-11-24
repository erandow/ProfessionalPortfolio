import path from "node:path";
import { readFile } from "node:fs/promises";

export const dynamic = "force-static";

export async function GET() {
  const file = await readFile(path.join(process.cwd(), "assets/Erfan-Asadi-Resume.pdf"));
  return new Response(new Uint8Array(file), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="Erfan-Asadi-Resume.pdf"',
    },
  });
}
