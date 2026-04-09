import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  schemaJson?: Record<string, unknown>;
}

export const SEOHead = ({ title, description, canonical, schemaJson }: SEOHeadProps) => {
  useEffect(() => {
    document.title = `${title} | SJU Luxe Travel`;

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    if (schemaJson) {
      let script = document.querySelector('script[data-schema="sju"]') as HTMLScriptElement;
      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-schema", "sju");
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schemaJson);
    }
  }, [title, description, canonical, schemaJson]);

  return null;
};
