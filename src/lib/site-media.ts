import heroAsset from "@/assets/hero.webp.asset.json";
import storyAsset from "@/assets/salon-story.webp.asset.json";

// This public asset endpoint serves image bytes without a preview login.
// Absolute URLs also work on external hosts that do not provide /__l5e/.
const ASSET_ORIGIN = "https://id-preview--18d3633f-a7c2-4920-bcd1-7c45e06b9f3c.lovable.app";

export function publicAssetUrl(path: string) {
  return new URL(path, ASSET_ORIGIN).href;
}

export const HERO_IMAGE_URL = publicAssetUrl(heroAsset.url);
export const STORY_IMAGE_URL = publicAssetUrl(storyAsset.url);

// Use the existing embedded map's place identifier, not an expired short link.
export const MAPS_URL = "https://www.google.com/maps?cid=9671363193987908781";