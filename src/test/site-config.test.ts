import { readFileSync } from "node:fs";
import { describe, it, expect } from "vitest";
import { SITE_URL, NORMALIZE_HOST_HEAD } from "@/lib/site-config";

describe("Public website configuration", () => {
  it("uses the requested Netlify origin consistently for search discovery", () => {
    expect(SITE_URL).toBe("https://giannis-lamprini.netlify.app/");
    expect(readFileSync("public/sitemap.xml", "utf8")).toContain(`<loc>${SITE_URL}</loc>`);
    expect(readFileSync("public/robots.txt", "utf8")).toContain(`Sitemap: ${SITE_URL}sitemap.xml`);
  });

  it("removes hosting whitespace without changing metadata or scripts", () => {
    document.head.innerHTML = '<meta charset="utf-8">\n<!-- Netlify hosting --><title>Salon</title><script type="application/ld+json">{}</script>';
    Function(NORMALIZE_HOST_HEAD)();
    expect([...document.head.childNodes].filter(n => n.nodeType === 3)).toHaveLength(0);
    expect(document.head.querySelector("title")?.textContent).toBe("Salon");
    expect(document.head.querySelector("script")?.textContent).toBe("{}");
    expect(document.head.querySelector("meta")?.getAttribute("charset")).toBe("utf-8");
  });
});