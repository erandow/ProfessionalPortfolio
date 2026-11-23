import PageHeader from "@/components/academic/PageHeader";
import PublicationItem, { PublicationData } from "@/components/academic/PublicationItem";
import Footer from "@/components/Footer";
import { publicationsData } from "@/lib/academic-data";

// Map the Publication type (from academic-data) to PublicationData (expected by PublicationItem)
// Both share the same required fields; Publication.tags becomes PublicationData.tags
const pubs: PublicationData[] = publicationsData.map((p) => ({
  id: p.id,
  title: p.title,
  venue: p.venue,
  venueShort: p.venueShort,
  year: p.year,
  authors: p.authors,
  abstract: p.abstract,
  award: p.award,
  paperUrl: p.paperUrl,
  pdfUrl: p.pdfUrl,
  codeUrl: p.codeUrl,
  bibtex: p.bibtex,
  tags: p.tags,
}));

export default function PublicationsPage() {
  return (
    <>
      <PageHeader
        breadcrumbTitle="Publications"
        eyebrow="Academic Record"
        title="Publications"
        subtitle="Peer-reviewed contributions in computer vision and pattern recognition, focusing on video quality assessment and AI-generated content evaluation."
      />

      <main className="bg-academic-bg py-16 md:py-24">
        <div className="max-w-[1160px] mx-auto px-6 sm:px-8">
          {/* Count */}
          <p className="text-sm text-academic-muted font-mono mb-10 pb-6 border-b border-academic-border">
            {pubs.length} publication{pubs.length !== 1 ? "s" : ""} · Sorted by year (newest first)
          </p>

          {/* List */}
          <div className="divide-y divide-academic-border">
            {pubs.map((pub) => (
              <PublicationItem key={pub.id} publication={pub} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
