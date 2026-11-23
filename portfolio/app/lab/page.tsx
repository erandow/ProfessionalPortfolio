import type { Metadata } from "next";
import { SpringDemo } from "@/components/spring-demo";
import { Workbench } from "@/components/workbench";

export const metadata: Metadata = {
  title: "Lab",
  description: "Try Erfan Asadi’s interactive agent workflow and spring animation experiments.",
};

export default function LabPage() {
  return (
    <div className="shell section-space">
      <header className="page-heading">
        <h1>The Lab<span>.</span></h1>
        <p>Try an agent workflow, or tune a spring and see how it moves.</p>
      </header>
      <div className="lab-grid">
        <Workbench />
        <SpringDemo />
      </div>
    </div>
  );
}
