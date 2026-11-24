import { ChartNoAxesCombined, Film, Grid2X2, Layers3 } from "lucide-react";
import type { Messages } from "@/lib/i18n";

const sourceRoot = "https://github.com/erandow/LC-BVQA/blob/f0dbdd6ebc95995d3168703ecc1cba1586e2e27c";
const stages = [
  { icon: Film, path: "extract_frames.py" },
  { icon: Grid2X2, path: "extract_features.py" },
  { icon: Layers3, path: "pooling.py" },
  { icon: ChartNoAxesCombined, path: "SVR/main.py" },
];

export function QualityPipeline({ copy }: { copy: Messages["work"]["qualityPipeline"] }) {
  return (
    <figure className="quality-pipeline">
      <figcaption>{copy.title}</figcaption>
      <ol>
        {stages.map(({ icon: Icon, path }, index) => (
          <li key={path}>
            <span className="quality-node"><Icon size={23} aria-hidden="true" /></span>
            <h3>{copy.stages[index].title}</h3>
            <p>{copy.stages[index].detail}</p>
            <a href={`${sourceRoot}/${path}`} dir="ltr">{path}</a>
          </li>
        ))}
      </ol>
    </figure>
  );
}

export function QualityResults({ copy }: { copy: Messages["work"]["qualityPipeline"] }) {
  return (
    <section className="case-block quality-results">
      <h2 id="quality-results-title">{copy.resultsTitle}</h2>
      <p>{copy.resultsNote}</p>
      <table aria-labelledby="quality-results-title">
        <thead>
          <tr><th scope="col">{copy.dataset}</th><th scope="col">avgpool</th><th scope="col">Mixed_5b</th></tr>
        </thead>
        <tbody>
          <tr><th scope="row">KoNViD-1k</th><td>0.5841</td><td>0.8179</td></tr>
          <tr><th scope="row">LIVE-VQC</th><td>0.5624</td><td>0.7939</td></tr>
        </tbody>
      </table>
    </section>
  );
}
