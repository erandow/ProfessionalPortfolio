import type { Metadata } from "next";
import { ProjectGrid } from "@/components/project-grid";

export const metadata: Metadata = {
  title: "Engineering case studies",
  description: "Selected engineering case studies by Erfan Asadi, spanning agent workflows, frontend development, and applied AI.",
};

export default function WorkPage() {
  return (
    <div className="light-section">
      <div className="shell section-space">
        <header className="page-heading">
          <p className="eyebrow section-kicker">Work</p>
          <h1>Engineering case studies<span>.</span></h1>
          <p>Explore the products, my role, and the engineering decisions behind each project.</p>
        </header>
        <ProjectGrid />
      </div>
    </div>
  );
}
