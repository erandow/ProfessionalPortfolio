import Image from "next/image";
import type { Messages } from "@/lib/i18n";
import results from "@/public/lc-bvqa/results.json";

const root = "/lc-bvqa";
type Copy = Messages["work"]["qualityPipeline"]["exhibits"];

function Figure({ file, caption, diagram = false }: { file: string; caption: string; diagram?: boolean }) {
  const src = `${root}/${file}.png`;
  return (
    <figure>
      <a href={src} aria-label={caption}>
        <Image src={src} unoptimized alt={caption} width={diagram ? 386 : 823} height={diagram ? 656 : 684} />
      </a>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export function QualityPaper({ copy }: { copy: Copy }) {
  return (
    <section className="paper-exhibits">
      <h2>{copy.figures}</h2>
      <div className="paper-gallery">
        <Figure file="architecture" caption={`1 · ${copy.architecture}`} diagram />
        <div className="paper-plots">
          <h3>{copy.ratings}</h3>
          <p>{copy.plotsNote}</p>
          <Figure file="konvid-1k" caption={`2 · KoNViD-1k · ${copy.ratings}`} />
          <Figure file="live-vqc" caption={`3 · LIVE-VQC · ${copy.ratings}`} />
        </div>
      </div>
      <h2>{copy.tables}</h2>
      <p>{copy.withinNote}</p>
      {Object.entries(results.withinDataset).map(([dataset, rows], index) => (
        <details key={dataset}>
          <summary><bdi>{index === 0 ? "I" : "II"} · {dataset}</bdi></summary>
          <div className="paper-table-wrap" tabIndex={0} role="region" aria-label={dataset}>
            <table aria-label={dataset}>
              <thead><tr>{[copy.layers, copy.kernel, "SROCC", "PLCC"].map(label => <th key={label} scope="col">{label}</th>)}</tr></thead>
              <tbody>{rows.map(row => (
                <tr key={row.layers.join("-") + row.kernel}>
                  <th scope="row"><bdi>{row.layers.join(" + ")}</bdi></th>
                  <td>{row.kernel}</td><td>{row.SROCC}</td><td>{row.PLCC}</td>
                </tr>
              ))}</tbody>
            </table>
          </div>
        </details>
      ))}
      <details>
        <summary>III · {copy.cross}</summary>
        <p>{copy.crossNote}</p>
        <div className="paper-table-wrap" tabIndex={0} role="region" aria-label={copy.cross}>
          <table aria-label={copy.cross}>
            <thead>
              <tr><th scope="col" rowSpan={2}>{copy.method}</th>
                <th scope="colgroup" colSpan={2}><bdi>LIVE-VQC → KoNViD-1k</bdi></th>
                <th scope="colgroup" colSpan={2}><bdi>KoNViD-1k → LIVE-VQC</bdi></th></tr>
              <tr><th scope="col">PLCC</th><th scope="col">SROCC</th><th scope="col">PLCC</th><th scope="col">SROCC</th></tr>
            </thead>
            <tbody>{results.crossDataset.map(row => (
              <tr key={row.method}><th scope="row"><bdi>{row.method}</bdi></th>
                <td>{row.liveToKonvid.PLCC}</td><td>{row.liveToKonvid.SROCC}</td>
                <td>{row.konvidToLive.PLCC}</td><td>{row.konvidToLive.SROCC}</td></tr>
            ))}</tbody>
          </table>
        </div>
      </details>
      <div className="case-links">
        <a className="button button-light" href={`${root}/ipria-2025.pdf`}>{copy.fullPaper}</a>
        <a className="button button-light" href={`${root}/results.json`} download>{copy.downloadData}</a>
      </div>
    </section>
  );
}
