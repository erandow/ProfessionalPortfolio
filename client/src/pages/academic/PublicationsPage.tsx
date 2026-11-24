import PageHeader from "@/components/academic/PageHeader";
import PublicationItem from "@/components/academic/PublicationItem";
import ResearchWritingIllustration from "@/components/academic/ResearchWritingIllustration";
import Footer from "@/components/Footer";
import { publicationsData } from "@/lib/academic-data";

export default function PublicationsPage() {
  return (
    <>
      <PageHeader
        illustration={<ResearchWritingIllustration />}
        breadcrumbTitle="Publications"
        eyebrow="Academic Record"
        title="Publications"
        subtitle="Peer-reviewed contributions in computer vision and pattern recognition, focusing on video quality assessment and AI-generated content evaluation."
      />

      <main className="bg-academic-bg py-16 md:py-24">
        <div className="max-w-[1160px] mx-auto px-6 sm:px-8">
          {/* Count */}
          <p className="text-sm text-academic-muted font-mono mb-10 pb-6 border-b border-academic-border">
            {publicationsData.length} publication{publicationsData.length !== 1 ? "s" : ""} · Sorted by year (newest first)
          </p>

          {/* List */}
          <div className="divide-y divide-academic-border">
            {publicationsData.map((pub) => (
              <PublicationItem key={pub.id} publication={pub} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
