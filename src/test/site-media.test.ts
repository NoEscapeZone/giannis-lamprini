import { describe, expect, it } from "vitest";
import { HERO_IMAGE_URL, STORY_IMAGE_URL, MAPS_URL, publicAssetUrl } from "@/lib/site-media";

describe("External hosting media", () => {
  it("resolves both displayed photos to public HTTPS image URLs", () => {
    for (const url of [HERO_IMAGE_URL, STORY_IMAGE_URL]) {
      const parsed = new URL(url);
      expect(parsed.protocol).toBe("https:");
      expect(parsed.pathname).toMatch(/^\/__l5e\/assets-v1\/.+\.webp$/);
      expect(parsed.hostname).not.toBe("localhost");
    }
    expect(publicAssetUrl("https://example.com/photo.webp")).toBe("https://example.com/photo.webp");
  });

  it("links directly to the same Google place as the embedded map", () => {
    const parsed = new URL(MAPS_URL);
    expect(parsed.hostname).toBe("www.google.com");
    expect(parsed.searchParams.get("cid")).toBe(BigInt("0x86379595776fc4ad").toString());
  });
});