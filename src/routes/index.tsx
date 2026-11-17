import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Scissors, Wind, Palette, Sparkles, Sun, Crown, Baby, Droplets, Phone, MapPin, Clock,
  Facebook, Instagram, Menu, X, Star, Award, Heart, Leaf, ChevronDown,
} from "lucide-react";
import heroImg from "@/assets/hero.webp.asset.json";
import storyImg from "@/assets/salon-story.webp.asset.json";
import { Button } from "@/components/ui/button";

const TITLE = "Κομμώσεις Γιάννης - Λαμπρινή | Κομμωτήριο Αμφιλοχία";
const DESC = "Κομμωτήριο στην Αμφιλοχία Αιτωλοακαρνανίας από το 1992. Γυναικείο & ανδρικό κούρεμα, ξύρισμα, βαφές, balayage, ανταύγειες και νυφικά χτενίσματα για γυναίκες, άνδρες και παιδιά.";

const MAPS_URL = "https://maps.app.goo.gl/DdbRDCy2Tv3Zb";
const H = (d: string[], o: string, c: string) => ({ "@type": "OpeningHoursSpecification", dayOfWeek: d, opens: o, closes: c });
const LD = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "Κομμώσεις Γιάννης - Λαμπρινή",
  "@id": "https://giannis-lamprini.lovable.app/#salon",
  url: "https://giannis-lamprini.lovable.app/",
  image: "https://giannis-lamprini.lovable.app" + storyImg.url,
  hasMap: MAPS_URL,
  sameAs: [MAPS_URL],
  knowsLanguage: "el",
  description: DESC,
  telephone: "+302642024164",
  foundingDate: "1992",
  priceRange: "€",
  address: { "@type": "PostalAddress", streetAddress: "Θεοδώρου Χαβίνη", addressLocality: "Αμφιλοχία", postalCode: "30500", addressRegion: "Αιτωλοακαρνανία", addressCountry: "GR" },
  geo: { "@type": "GeoCoordinates", latitude: 38.86321, longitude: 21.16727 },
  areaServed: ["Αμφιλοχία", "Αιτωλοακαρνανία"],
  openingHoursSpecification: [
    H(["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], "09:00", "14:00"),
    H(["Tuesday","Thursday","Friday"], "17:30", "20:30"),
  ],
  hasOfferCatalog: { "@type": "OfferCatalog", name: "Υπηρεσίες κομμωτηρίου", itemListElement: ["Γυναικείο κούρεμα","Ανδρικό κούρεμα","Ξύρισμα","Χτένισμα","Βαφή μαλλιών","Balayage","Ανταύγειες","Νυφικό χτένισμα","Παιδικό κούρεμα"].map((n) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: n } })) },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:locale", content: "el_GR" },
      { property: "og:url", content: "https://giannis-lamprini.lovable.app/" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "keywords", content: "κομμωτήριο Αμφιλοχία, κομμωτήριο στην Αμφιλοχία, κουρείο Αμφιλοχία, κομμώσεις Αμφιλοχία, balayage Αμφιλοχία, βαφή μαλλιών Αμφιλοχία, νυφικό χτένισμα Αμφιλοχία, Αιτωλοακαρνανία" },
      { name: "geo.region", content: "GR-AE" },
      { name: "geo.placename", content: "Αμφιλοχία" },
      { name: "geo.position", content: "38.86321;21.16727" },
      { name: "ICBM", content: "38.86321, 21.16727" },
    ],
    links: [
      { rel: "canonical", href: "https://giannis-lamprini.lovable.app/" },
      { rel: "preload", as: "image", href: heroImg.url, type: "image/webp", fetchPriority: "high" },
      { rel: "preconnect", href: "https://www.googletagmanager.com" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(LD) },
      { src: "https://www.googletagmanager.com/gtag/js?id=G-ZK278FG7ZN", async: true },
      {
        children:
          "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-ZK278FG7ZN');",
      },
    ],
  }),
  component: Index,
});

const PHONE = "2642024164";
const nav = [
  ["#home", "Αρχική"], ["#about", "Σχετικά"], ["#services", "Υπηρεσίες"],
  ["#reviews", "Κριτικές"], ["#faq", "Ερωτήσεις"], ["#contact", "Επικοινωνία"],
];

const services = [
  { icon: Scissors, t: "Κούρεμα", d: "Γυναικείο, ανδρικό και παιδικό κούρεμα, προσαρμοσμένο στο πρόσωπο, το στυλ και την καθημερινότητά σας." },
  { icon: Droplets, t: "Ξύρισμα", d: "Παραδοσιακό ξύρισμα με ζεστή πετσέτα και μοντέρνο περιποίηση γενειάδας με ακριβές contouring." },
  { icon: Wind, t: "Χτένισμα", d: "Απλό ή βραδινό χτένισμα, brushing και κυματιστά styles για να λάμπετε σε κάθε περίσταση." },
  { icon: Palette, t: "Χρώμα", d: "Βαφή, κάλυψη λευκών και balayage με επαγγελματικά προϊόντα που σέβονται την υγεία της τρίχας." },
  { icon: Crown, t: "Νυφικό & Ειδικό Styling", d: "Εντυπωσιακά χτενίσματα για γάμους, βαπτίσεις και κάθε επίσημη στιγμή, με δοκιμαστικό πριν τη μεγάλη μέρα." },
  { icon: Sun, t: "Ανταύγειες", d: "Φωτεινές, φυσικές ανταύγειες που δίνουν βάθος, κίνηση και λάμψη στα μαλλιά σας." },
  { icon: Leaf, t: "Θεραπείες Μαλλιών", d: "Ενυδάτωση, αναδόμηση και θεραπείες για ταλαιπωρημένα ή ξηρά μαλλιά." },
  { icon: Baby, t: "Παιδικό Κούρεμα", d: "Με υπομονή και χαμόγελο, ώστε η επίσκεψη να είναι ευχάριστη εμπειρία για τους μικρούς μας φίλους." },
];

const values = [
  { icon: Award, t: "30+ χρόνια εμπειρίας", d: "Από το 1992 στην Αμφιλοχία, με συνεχή επιμόρφωση στις νέες τεχνικές." },
  { icon: Heart, t: "Προσωπική φροντίδα", d: "Ακούμε τι θέλετε και προτείνουμε ό,τι σας ταιριάζει πραγματικά." },
  { icon: Sparkles, t: "Ποιοτικά προϊόντα", d: "Επαγγελματικά προϊόντα για αποτέλεσμα που διαρκεί." },
  { icon: Star, t: "Καλύτερη τιμή", d: "Ολοκληρωμένες υπηρεσίες για όλη την οικογένεια σε δίκαιες τιμές." },
];

const reviews = [
  { n: "Μαρία Κ.", t: "Πηγαίνω χρόνια στη Λαμπρινή και κάθε φορά φεύγω ενθουσιασμένη. Το balayage ήταν ακριβώς όπως το ήθελα!" },
  { n: "Νίκος Π.", t: "Ο Γιάννης είναι μάστορας. Κούρεμα και ξύρισμα όπως παλιά, με ησυχία και κουβέντα. Δεν αλλάζω." },
  { n: "Ελένη Δ.", t: "Μου έκαναν το νυφικό χτένισμα και κράτησε τέλειο όλη τη νύχτα. Τους ευχαριστώ από καρδιάς!" },
];

const faqs = [
  { q: "Χρειάζεται ραντεβού;", a: "Συνιστούμε να κλείνετε ραντεβού τηλεφωνικά στο 2642024164, ώστε να σας εξυπηρετήσουμε χωρίς αναμονή." },
  { q: "Κάνετε δοκιμαστικό για νυφικό χτένισμα;", a: "Ναι. Κανονίζουμε δοκιμαστικό λίγες μέρες πριν, ώστε να είστε σίγουρη για το αποτέλεσμα την ημέρα του γάμου." },
  { q: "Εξυπηρετείτε άνδρες, γυναίκες και παιδιά;", a: "Φυσικά. Προσφέρουμε ολοκληρωμένες υπηρεσίες για όλη την οικογένεια στον ίδιο χώρο." },
  { q: "Πόσο διαρκεί μια βαφή ή ένα balayage;", a: "Μια βαφή διαρκεί περίπου 1,5 ώρα, ενώ ένα balayage 2–3 ώρες, ανάλογα με το μήκος και την επιθυμητή απόχρωση." },
];

const hours: [string, string][] = [
  ["Δευτέρα", "09:00 – 14:00"], ["Τρίτη", "09:00 – 14:00 & 17:30 – 20:30"], ["Τετάρτη", "09:00 – 14:00"],
  ["Πέμπτη", "09:00 – 14:00 & 17:30 – 20:30"], ["Παρασκευή", "09:00 – 14:00 & 17:30 – 20:30"],
  ["Σάββατο", "09:00 – 14:00"], ["Κυριακή", "Κλειστά"],
];

function Heading({ kicker, title, light }: { kicker: string; title: string; light?: boolean }) {
  return (
    <div className="mb-9 text-center md:mb-14">
      <p className="mb-3 text-xs font-semibold uppercase text-primary">{kicker}</p>
      <h2 className={`font-display text-3xl leading-tight sm:text-4xl md:text-5xl ${light ? "text-cream-foreground" : ""}`}>{title}</h2>
      <div className="mx-auto mt-5 h-px w-20 bg-gold-gradient" />
    </div>
  );
}

function Index() {
  const [open, setOpen] = useState(false);
  const [faq, setFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-4 py-2 sm:flex sm:justify-between sm:px-6 sm:py-4">
          <a href="#home" className="min-w-0 font-display text-sm leading-snug sm:text-lg">
            ΓΙΑΝΝΗΣ <span className="text-primary">&</span> ΛΑΜΠΡΙΝΗ
          </a>
          <nav className="hidden gap-7 xl:flex">
            {nav.map(([h, l]) => (
              <a key={h} href={h} className="text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary">{l}</a>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-1 sm:gap-3">
            <Button asChild className="h-11 w-11 shrink-0 rounded-none bg-gold-gradient p-0 text-primary-foreground sm:w-auto sm:px-5">
              <a href={`tel:${PHONE}`} aria-label="Καλέστε για ραντεβού"><Phone className="h-4 w-4" /><span className="hidden sm:inline">Κλήση</span></a>
            </Button>
            <Button variant="ghost" size="icon" aria-label={open ? "Κλείσιμο μενού" : "Μενού"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)} className="h-11 w-11 shrink-0 xl:hidden">
              {open ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {open && (
          <nav id="mobile-navigation" aria-label="Πλοήγηση κινητού" className="flex max-h-[calc(100dvh-64px)] flex-col overflow-y-auto border-t border-border px-6 py-4 xl:hidden">
            {nav.map(([h, l]) => (
              <a key={h} href={h} onClick={() => setOpen(false)} className="py-3 text-sm uppercase tracking-widest">{l}</a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="salon-hero relative flex items-center justify-center overflow-hidden pb-16 pt-24 sm:pb-20 sm:pt-28">
        <img src={heroImg.url} alt="Το κομμωτήριο Γιάννης - Λαμπρινή" className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" decoding="async" width={1280} height={1920} />
        <div className="absolute inset-0 bg-background/75" />
        <div className="relative z-10 w-full max-w-6xl px-5 text-center sm:px-6">
          <h1 className="font-display text-4xl leading-tight sm:text-5xl md:text-7xl lg:text-8xl">
            Κομμώσεις<br /><span className="italic text-gold-gradient">Γιάννης - Λαμπρινή</span>
            <span className="sr-only"> – Κομμωτήριο στην Αμφιλοχία</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
            Κομμωτήριο στην Αμφιλοχία με τρεις δεκαετίες εμπειρίας, τεχνική και προσωπική φροντίδα για γυναίκες, άνδρες και παιδιά.
          </p>
          <div className="mx-auto mt-8 grid max-w-sm gap-3 sm:mt-10 sm:flex sm:max-w-none sm:justify-center sm:gap-4">
            <Button asChild className="h-auto min-h-12 rounded-none bg-gold-gradient px-6 py-4 text-sm font-bold uppercase text-primary-foreground"><a href={`tel:${PHONE}`}>Κλείστε Ραντεβού</a></Button>
            <Button asChild variant="outline" className="h-auto min-h-12 rounded-none border-primary bg-transparent px-6 py-4 text-sm font-bold uppercase text-primary hover:bg-primary hover:text-primary-foreground"><a href="#services">Υπηρεσίες</a></Button>
          </div>
        </div>
        <a href="#about" aria-label="Κύλιση" className="absolute bottom-3 left-1/2 grid h-11 w-11 -translate-x-1/2 place-items-center text-primary motion-safe:animate-bounce"><ChevronDown /></a>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 text-center sm:px-6 md:grid-cols-4 md:gap-8 md:py-12">
          {[["1992", "Έτος ίδρυσης"], ["30+", "Χρόνια εμπειρίας"], ["8", "Υπηρεσίες"], ["100%", "Μεράκι"]].map(([n, l]) => (
            <div key={l}>
              <div className="font-sans text-4xl font-semibold tabular-nums tracking-tight text-gold-gradient md:text-5xl">{n}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-28">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <img src={storyImg.url} alt="Η πρόσοψη του κομμωτηρίου Γιάννης - Λαμπρινή στην Αμφιλοχία" loading="lazy" decoding="async" width={1000} height={801} className="aspect-[5/4] w-full object-cover object-center lg:aspect-square" />
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase text-primary">Η Ιστορία μας</p>
            <h2 className="font-display text-3xl leading-tight sm:text-4xl md:text-5xl">Ποιότητα, μεράκι και <span className="italic text-primary">προσωπική εξυπηρέτηση</span></h2>
            <div className="mt-8 space-y-5 leading-relaxed text-muted-foreground">
              <p>Το κατάστημά μας άνοιξε τις πόρτες του για πρώτη φορά το 1992, με ένα όραμα: να προσφέρει ποιότητα, μεράκι και προσωπική εξυπηρέτηση σε κάθε πελάτη. Εδώ και πάνω από τρεις δεκαετίες χτίζουμε σχέσεις εμπιστοσύνης με τους ανθρώπους που μας επιλέγουν, εξελίσσοντας συνεχώς τις γνώσεις και τις τεχνικές μας.</p>
              <p>Το κομμωτήριο «Γιάννης - Λαμπρινή» αποτελεί σημείο αναφοράς στην Αμφιλοχία για όσους αναζητούν την τέλεια ισορροπία ανάμεσα στο κλασικό και το μοντέρνο. Η αγάπη μας για τη λεπτομέρεια και η αφοσίωση στην ικανοποίηση κάθε επισκέπτη μάς κάνουν να αγαπάμε το επάγγελμα όλο και περισσότερο.</p>
              <p>Κλείστε το ραντεβού σας σήμερα και χαρίστε στα μαλλιά σας τη φροντίδα που τους αξίζει.</p>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <span className="font-display text-2xl italic text-primary">Γιάννης & Λαμπρινή</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-cream py-16 text-cream-foreground md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <Heading kicker="Τι προσφέρουμε" title="Οι Υπηρεσίες μας" light />
          <div className="grid gap-px bg-cream-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: I, t, d }) => (
              <div key={t} className="group min-w-0 bg-cream p-6 transition-colors hover:bg-background hover:text-foreground sm:p-8">
                <I className="h-9 w-9 text-primary" strokeWidth={1.3} />
                <h3 className="mt-6 font-display text-2xl">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed opacity-75">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-28">
        <Heading kicker="Γιατί εμάς" title="Η διαφορά είναι στη λεπτομέρεια" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: I, t, d }) => (
            <div key={t} className="border border-border p-8 text-center transition-colors hover:border-primary">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-primary"><I className="h-7 w-7 text-primary" strokeWidth={1.4} /></div>
              <h3 className="mt-6 font-display text-xl">{t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-28">
        <Heading kicker="Τι λένε για εμάς" title="Οι πελάτες μας" />
        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.n} className="border-t-2 border-primary bg-card p-8">
              <div className="flex gap-1 text-primary">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
              <blockquote className="mt-5 font-display text-lg italic leading-relaxed">“{r.t}”</blockquote>
              <figcaption className="mt-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">— {r.n}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <img src={heroImg.url} alt="" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-background/85" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl">Έτοιμοι για μια <span className="italic text-primary">νέα εμφάνιση;</span></h2>
          <p className="mt-5 text-muted-foreground">Τηλεφωνήστε μας και κλείστε το ραντεβού σας σε λίγα δευτερόλεπτα.</p>
          <Button asChild className="mt-8 h-auto min-h-12 rounded-none bg-gold-gradient px-6 py-4 text-lg font-bold text-primary-foreground sm:mt-10 sm:px-10"><a href={`tel:${PHONE}`}><Phone className="h-5 w-5" /> {PHONE}</a></Button>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-5 py-16 sm:px-6 md:py-28">
        <Heading kicker="Απορίες" title="Συχνές Ερωτήσεις" />
        <div className="divide-y divide-border border-y border-border">
          {faqs.map((f, i) => (
            <div key={f.q}>
              <Button variant="ghost" aria-expanded={faq === i} aria-controls={`faq-answer-${i}`} onClick={() => setFaq(faq === i ? null : i)} className="grid h-auto min-h-12 w-full grid-cols-[minmax(0,1fr)_auto] gap-4 whitespace-normal rounded-none px-0 py-5 text-left font-display text-lg font-normal hover:bg-transparent hover:text-primary sm:text-xl">
                <span className="min-w-0">{f.q}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-primary transition-transform ${faq === i ? "rotate-180" : ""}`} />
              </Button>
              {faq === i && <p id={`faq-answer-${i}`} className="pb-6 leading-relaxed text-muted-foreground">{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-card py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <Heading kicker="Βρείτε μας" title="Επικοινωνία" />
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="flex gap-5">
                <MapPin className="h-6 w-6 shrink-0 text-primary" />
                <div className="min-w-0"><h4 className="font-display text-xl">Διεύθυνση</h4><p className="mt-1 leading-relaxed text-muted-foreground">Οδός Θεοδώρου Χαβίνη, ΤΚ 30500, Αμφιλοχία</p></div>
              </div>
              <div className="flex gap-5">
                <Phone className="h-6 w-6 shrink-0 text-primary" />
                <div className="min-w-0"><h4 className="font-display text-xl">Τηλέφωνο Ραντεβού</h4><a href={`tel:${PHONE}`} className="mt-1 flex min-h-11 items-center text-muted-foreground hover:text-primary">{PHONE}</a></div>
              </div>
              <div className="flex gap-5">
                <Clock className="h-6 w-6 shrink-0 text-primary" />
                <div className="min-w-0 flex-1">
                  <h4 className="font-display text-xl">Ωράριο Λειτουργίας</h4>
                  <ul className="mt-3 divide-y divide-border text-sm">
                    {hours.map(([d, h]) => (
                      <li key={d} className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3 py-3"><span className="min-w-0">{d}</span><span className={`text-right ${h === "Κλειστά" ? "text-primary" : "text-muted-foreground"}`}>{h.split(" & ").map((time, index) => <span key={time} className="block whitespace-nowrap sm:inline">{index > 0 && <span className="hidden sm:inline"> &amp; </span>}{time}</span>)}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex gap-4 pl-11">
                <a href="#" aria-label="Facebook" className="flex h-11 w-11 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary"><Facebook className="h-5 w-5" /></a>
                <a href="#" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary"><Instagram className="h-5 w-5" /></a>
              </div>
            </div>
            <div className="flex min-w-0 flex-col">
              <h4 className="font-display text-2xl">Βρείτε το κατάστημά μας:</h4>
              <div className="mt-4 h-80 overflow-hidden border border-border sm:h-[450px] lg:min-h-[450px] lg:flex-1">
                <iframe
                  title="Χάρτης"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.375500662283!2d21.165084676646875!3d38.86321057173264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135e9d842431d2b7%3A0x86379595776fc4ad!2s%CE%9A%CE%BF%CE%BC%CE%BC%CF%8E%CF%83%CE%B5%CE%B9%CF%82%20%22%CE%93%CE%B9%CE%AC%CE%BD%CE%BD%CE%B7%CF%82%20-%20%CE%9B%CE%B1%CE%BC%CF%80%CF%81%CE%B9%CE%BD%CE%AE%22!5e0!3m2!1sel!2sgr!4v1715010000000!5m2!1sel!2sgr"
                  className="block h-full w-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-11 items-center justify-center gap-2 border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <MapPin className="h-4 w-4" />
                Άνοιγμα στο Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-10 text-center text-sm text-muted-foreground">
        <p className="font-display text-lg text-foreground">ΓΙΑΝΝΗΣ <span className="text-primary">&</span> ΛΑΜΠΡΙΝΗ</p>
        <p className="mt-2">© 2026 Κομμώσεις Γιάννης - Λαμπρινή · Αμφιλοχία</p>
      </footer>
    </div>
  );
}
