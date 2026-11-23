import { useEffect } from "react";
import { Download, FileText, ExternalLink } from "lucide-react";
import PageHeader from "@/components/academic/PageHeader";
import Footer from "@/components/Footer";
import { useLanguageRoute } from "@/hooks/use-language-route";

export default function CVPage() {
  const { currentLanguage } = useLanguageRoute();

  useEffect(() => {
    document.title = "Erfan Asadi | Academic CV";
  }, []);

  return (
    <>
      <PageHeader
        breadcrumbTitle="CV"
        eyebrow="Academic Curriculum Vitae"
        title="Academic CV"
        subtitle="Complete academic record including publications, teaching experience, honors, and references."
      >
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="/Erfan-Asadi-Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-academic-accent text-white hover:bg-academic-accent-hover transition-colors shadow-xs"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </a>
          <a
            href="/Erfan-Asadi-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border border-academic-border bg-academic-card text-academic-text hover:bg-academic-soft transition-colors"
          >
            <ExternalLink className="w-4 h-4 text-academic-muted" />
            Open in New Tab
          </a>
        </div>
      </PageHeader>

      <main className="bg-academic-bg py-12 md:py-16">
        <div className="max-w-[1160px] mx-auto px-6 sm:px-8">
          {/* Introduction */}
          <div className="max-w-[760px] mb-10">
            <p className="text-base text-academic-muted leading-relaxed">
              The PDF below is Erfan Asadi's academic curriculum vitae, last updated in 2025. If the preview does not load, use the download button above.
            </p>
            <p className="text-xs font-mono text-academic-muted mt-2">
              Last updated: 2025 · PDF format
            </p>
          </div>

          {/* PDF Embed */}
          <div className="rounded-xl border border-academic-border bg-academic-card overflow-hidden shadow-xs">
            {/* Fallback header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-academic-border bg-academic-soft/30">
              <div className="flex items-center gap-2 text-xs text-academic-muted font-mono">
                <FileText className="w-4 h-4 text-academic-accent" />
                <span>Erfan-Asadi-Resume.pdf</span>
              </div>
              <a
                href="/Erfan-Asadi-Resume.pdf"
                download
                className="text-xs text-academic-accent hover:underline inline-flex items-center gap-1"
              >
                <Download className="w-3 h-3" /> Download
              </a>
            </div>
            {/* Embedded PDF viewer */}
            <object
              data="/Erfan-Asadi-Resume.pdf"
              type="application/pdf"
              className="w-full"
              style={{ height: "85vh", minHeight: "600px" }}
              aria-label="Erfan Asadi Academic CV PDF"
            >
              {/* Fallback for browsers that cannot display PDF inline */}
              <div className="p-10 text-center space-y-4">
                <FileText className="w-12 h-12 text-academic-muted mx-auto" />
                <p className="text-academic-muted text-sm">
                  Your browser cannot display PDFs inline.
                </p>
                <a
                  href="/Erfan-Asadi-Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-academic-accent text-white hover:bg-academic-accent-hover transition-colors"
                >
                  <Download className="w-4 h-4" /> Download Academic CV
                </a>
              </div>
            </object>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
