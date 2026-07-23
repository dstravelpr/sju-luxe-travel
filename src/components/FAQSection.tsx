import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FAQItem {
  q: string;
  a: string;
}

interface FAQSectionProps {
  heading: string;
  items: FAQItem[];
}

/**
 * Renders a visible FAQ accordion where each question is an <h3> (via
 * Radix AccordionPrimitive.Header default) so the question text is always
 * present in the HTML. Emits a FAQPage JSON-LD block via react-helmet-async.
 */
export const FAQSection = ({ heading, items }: FAQSectionProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };

  return (
    <section className="mt-16">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <h2 className="font-heading text-2xl text-foreground mb-4">{heading}</h2>
      <Accordion type="single" collapsible className="mt-4">
        {items.map((it, i) => (
          <AccordionItem key={i} value={`q${i + 1}`} className="border-border/30">
            <AccordionTrigger className="text-foreground font-body text-base hover:text-gold text-left">
              {it.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed">
              {it.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
