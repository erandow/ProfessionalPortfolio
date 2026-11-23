import { useState } from "react";
import { Check, Copy, Code2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface BibtexModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  bibtex: string;
}

export default function BibtexModal({
  isOpen,
  onClose,
  title,
  bibtex,
}: BibtexModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy BibTeX:", err);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-xl w-[90vw] bg-card border-border">
        <DialogHeader>
          <div className="flex items-center space-x-2 text-primary mb-1">
            <Code2 className="w-5 h-5" />
            <span className="text-xs font-semibold uppercase tracking-wider">
              BibTeX Citation
            </span>
          </div>
          <DialogTitle className="text-base sm:text-lg font-semibold leading-snug">
            {title}
          </DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground">
            Copy the BibTeX citation below to cite this publication in LaTeX or reference managers.
          </DialogDescription>
        </DialogHeader>

        <div className="relative mt-2">
          <pre className="p-4 bg-muted/70 text-foreground text-xs sm:text-sm font-mono rounded-lg overflow-x-auto border border-border/80 leading-relaxed max-h-72">
            <code>{bibtex}</code>
          </pre>

          <Button
            size="sm"
            onClick={handleCopy}
            className="absolute top-2 right-2 shadow-sm transition-all text-xs"
            variant={copied ? "default" : "secondary"}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 mr-1 text-emerald-500" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 mr-1" />
                Copy BibTeX
              </>
            )}
          </Button>
        </div>

        <div className="flex justify-end mt-4">
          <Button variant="outline" size="sm" onClick={onClose}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
