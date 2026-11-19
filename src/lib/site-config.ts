export const SITE_URL = "https://giannis-lamprini.netlify.app/";

// Netlify inserts whitespace alongside its hosting comment in <head>.
// React expects no text nodes there. Run once before hydration, preserving tags.
export const NORMALIZE_HOST_HEAD = "for(const n of Array.from(document.head.childNodes)){if(n.nodeType===3&&!n.textContent.trim())n.remove()}";