import { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Calendar,
  ExternalLink,
  Award,
  Download,
  FileText,
  Code2,
  ChevronDown,
  ChevronUp,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { publicationsData, Publication } from "@/lib/academic-data";
import BibtexModal from "@/components/BibtexModal";

export default function PublicationsSection() {
  const { t } = useTranslation();
  const [activeBibtex, setActiveBibtex] = useState<{ title: string; bibtex: string } | null>(null);
  const [expandedAbstracts, setExpandedAbstracts] = useState<Record<string, boolean>>({
    "ipria-2025": true, // Expand first one by default
  });

  const toggleAbstract = (id: string) => {
    setExpandedAbstracts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="publications" className="py-20 bg-muted/20 border-b border-border/40 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Peer-Reviewed Research</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Publications & Academic Papers
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-3 leading-relaxed">
            Peer-reviewed contributions in leading computer vision and pattern recognition venues, focusing on video quality assessment and generative content evaluation.
          </p>
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {publicationsData.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 sm:p-8 rounded-2xl bg-card border shadow-sm transition-all ${
                pub.award ? "border-amber-500/40 shadow-amber-500/5 hover:border-amber-500/60" : "border-border hover:border-primary/40"
              }`}
            >
              {/* Top metadata row */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="default" className="text-xs font-semibold px-2.5 py-0.5">
                    {pub.venueShort}
                  </Badge>
                  <span className="text-xs text-muted-foreground font-mono">
                    {pub.year}
                  </span>
                  {pub.award && (
                    <Badge className="bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30 text-xs font-semibold gap-1.5">
                      <Award className="w-3.5 h-3.5 text-amber-500" />
                      {pub.award}
                    </Badge>
                  )}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-snug mb-3">
                {pub.title}
              </h3>

              {/* Authors List */}
              <div className="text-sm sm:text-base text-muted-foreground mb-4">
                {pub.authors.map((author, i) => (
                  <span key={i}>
                    {author === "Erfan Asadi" ? (
                      <strong className="text-foreground font-bold underline decoration-primary decoration-2 underline-offset-2">
                        {author}
                      </strong>
                    ) : (
                      author
                    )}
                    {i < pub.authors.length - 1 ? ", " : ""}
                  </span>
                ))}
              </div>

              {/* Venue Full Name */}
              <p className="text-xs sm:text-sm italic text-muted-foreground/90 mb-5">
                {pub.venue}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {pub.tags.map((tag, tIdx) => (
                  <Badge
                    key={tIdx}
                    variant="outline"
                    className="text-[11px] font-normal py-0.5 px-2 bg-muted/40 text-muted-foreground border-border/60"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Abstract Accordion */}
              {expandedAbstracts[pub.id] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 rounded-xl bg-muted/30 border border-border/60 text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5"
                >
                  <p className="font-semibold text-foreground mb-1 text-xs uppercase tracking-wider">
                    Abstract
                  </p>
                  <p>{pub.abstract}</p>
                </motion.div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border/50">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => toggleAbstract(pub.id)}
                  className="text-xs h-8 px-3 gap-1.5 text-muted-foreground hover:text-foreground"
                >
                  {expandedAbstracts[pub.id] ? (
                    <>
                      <ChevronUp className="w-3.5 h-3.5" />
                      Hide Abstract
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-3.5 h-3.5" />
                      Read Abstract
                    </>
                  )}
                </Button>

                {pub.paperUrl && (
                  <Button size="sm" variant="outline" asChild className="text-xs h-8 px-3 gap-1.5">
                    <a href={pub.paperUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3.5 h-3.5" />
                      Paper Page
                    </a>
                  </Button>
                )}

                {pub.pdfUrl && (
                  <Button size="sm" variant="outline" asChild className="text-xs h-8 px-3 gap-1.5">
                    <a href={pub.pdfUrl} target="_blank" rel="noopener noreferrer">
                      <Download className="w-3.5 h-3.5" />
                      PDF
                    </a>
                  </Button>
                )}

                {pub.codeUrl && (
                  <Button size="sm" variant="outline" asChild className="text-xs h-8 px-3 gap-1.5">
                    <a href={pub.codeUrl} target="_blank" rel="noopener noreferrer">
                      <Code2 className="w-3.5 h-3.5" />
                      Code (GitHub)
                    </a>
                  </Button>
                )}

                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => setActiveBibtex({ title: pub.title, bibtex: pub.bibtex })}
                  className="text-xs h-8 px-3 gap-1.5 ml-auto"
                >
                  <FileText className="w-3.5 h-3.5 text-primary" />
                  Cite / BibTeX
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* BibTeX Modal */}
      {activeBibtex && (
        <BibtexModal
          isOpen={!!activeBibtex}
          onClose={() => setActiveBibtex(null)}
          title={activeBibtex.title}
          bibtex={activeBibtex.bibtex}
        />
      )}
    </section>
  );
}
