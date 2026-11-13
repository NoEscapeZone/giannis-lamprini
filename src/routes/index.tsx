import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Scissors, Wind, Palette, Sparkles, Sun, Crown, Baby, Droplets, Phone, MapPin, Clock,
  Facebook, Instagram, Menu, X, Star, Award, Heart, Leaf, ChevronDown,
} from "lucide-react";
import heroImg from "@/assets/imageBackground.jpg.asset.json";
import storyImg from "@/assets/salon-story.png.asset.json";

const TITLE = "Κομμώσεις Γιάννης - Λαμπρινή | Κομμωτήριο Αμφιλοχία";
const DESC = "Κομμωτήριο στην Αμφιλοχία Αιτωλοακαρνανίας από το 1992. Γυναικείο & ανδρικό κούρεμα, ξύρισμα, βαφές, balayage, ανταύγειες και νυφικά χτενίσματα για γυναίκες, άνδρες και παιδιά.";

const H = (d: string[], o: string, c: string) => ({ "@type": "OpeningHoursSpecification", dayOfWeek: d, opens: o, closes: c });
const LD = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "Κομμώσεις Γιάννης - Λαμπρινή",
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
      { property: "og:url", content: "/" },
      { name: "geo.region", content: "GR-AE" },
      { name: "geo.placename", content: "Αμφιλοχία" },
      { name: "geo.position", content: "38.86321;21.16727" },
      { name: "ICBM", content: "38.86321, 21.16727" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(LD) }],
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

const hours = [
  ["Δευτέρα", "09:00 – 14:00"], ["Τρίτη", "09:00 – 14:00 & 17:30 – 20:30"], ["Τετάρτη", "09:00 – 14:00"],
  ["Πέμπτη", "09:00 – 14:00 & 17:30 – 20:30"], ["Παρασκευή", "09:00 – 14:00 & 17:30 – 20:30"],
  ["Σάββατο", "09:00 – 14:00"], ["Κυριακή", "Κλειστά"],
];

function Heading({ kicker, title, light }: { kicker: string; title: string; light?: boolean }) {
  return (
    <div className="mb-14 text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-primary">{kicker}</p>
      <h2 className={`font-display text-4xl md:text-5xl ${light ? "text-cream-foreground" : ""}`}>{title}</h2>
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
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-display text-lg tracking-widest">
            ΓΙΑΝΝΗΣ <span className="text-primary">&</span> ΛΑΜΠΡΙΝΗ
          </a>
          <nav className="hidden gap-7 lg:flex">
            {nav.map(([h, l]) => (
              <a key={h} href={h} className="text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary">{l}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href={`tel:${PHONE}`} className="hidden items-center gap-2 bg-gold-gradient px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-primary-foreground sm:inline-flex">
              <Phone className="h-4 w-4" /> Κλήση
            </a>
            <button aria-label="Μενού" onClick={() => setOpen(!open)} className="lg:hidden">
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="flex flex-col border-t border-border px-6 py-4 lg:hidden">
            {nav.map(([h, l]) => (
              <a key={h} href={h} onClick={() => setOpen(false)} className="py-3 text-sm uppercase tracking-widest">{l}</a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <img src={heroImg.url} alt="Το κομμωτήριο Γιάννης - Λαμπρινή" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-background/75" />
        <div className="relative z-10 px-6 text-center">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.5em] text-primary">{"\n"}</p>
          <h1 className="font-display text-5xl leading-tight md:text-7xl lg:text-8xl">
            Κομμώσεις<br /><span className="italic text-gold-gradient">Γιάννης - Λαμπρινή</span>
            <span className="sr-only"> – Κομμωτήριο στην Αμφιλοχία</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Κομμωτήριο στην Αμφιλοχία με τρεις δεκαετίες εμπειρίας, τεχνική και προσωπική φροντίδα για γυναίκες, άνδρες και παιδιά.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={`tel:${PHONE}`} className="bg-gold-gradient px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-transform hover:-translate-y-0.5">Κλείστε Ραντεβού</a>
            <a href="#services" className="border border-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary transition-colors hover:bg-primary hover:text-primary-foreground">Υπηρεσίες</a>
          </div>
        </div>
        <a href="#about" aria-label="Κύλιση" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-primary"><ChevronDown /></a>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 text-center md:grid-cols-4">
          {[["1992", "Έτος ίδρυσης"], ["30+", "Χρόνια εμπειρίας"], ["8", "Υπηρεσίες"], ["100%", "Μεράκι"]].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-4xl text-gold-gradient md:text-5xl">{n}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <img src={storyImg.url} alt="Η πρόσοψη του κομμωτηρίου Γιάννης - Λαμπρινή στην Αμφιλοχία" loading="lazy" className="aspect-square w-full object-cover object-center" />
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-primary">Η Ιστορία μας</p>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">Ποιότητα, μεράκι και <span className="italic text-primary">προσωπική εξυπηρέτηση</span></h2>
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
      <section id="services" className="bg-cream py-28 text-cream-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <Heading kicker="Τι προσφέρουμε" title="Οι Υπηρεσίες μας" light />
          <div className="grid gap-px bg-cream-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: I, t, d }) => (
              <div key={t} className="group bg-cream p-8 transition-colors hover:bg-background hover:text-foreground">
                <I className="h-9 w-9 text-primary" strokeWidth={1.3} />
                <h3 className="mt-6 font-display text-2xl">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed opacity-75">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto max-w-7xl px-6 py-28">
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
      <section id="reviews" className="mx-auto max-w-7xl px-6 py-28">
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
      <section className="relative overflow-hidden py-24">
        <img src={heroImg.url} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-background/85" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl">Έτοιμοι για μια <span className="italic text-primary">νέα εμφάνιση;</span></h2>
          <p className="mt-5 text-muted-foreground">Τηλεφωνήστε μας και κλείστε το ραντεβού σας σε λίγα δευτερόλεπτα.</p>
          <a href={`tel:${PHONE}`} className="mt-10 inline-flex items-center gap-3 bg-gold-gradient px-10 py-4 text-lg font-bold tracking-widest text-primary-foreground">
            <Phone className="h-5 w-5" /> {PHONE}
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-6 py-28">
        <Heading kicker="Απορίες" title="Συχνές Ερωτήσεις" />
        <div className="divide-y divide-border border-y border-border">
          {faqs.map((f, i) => (
            <div key={f.q}>
              <button onClick={() => setFaq(faq === i ? null : i)} className="flex w-full items-center justify-between py-6 text-left font-display text-xl">
                {f.q}
                <ChevronDown className={`h-5 w-5 shrink-0 text-primary transition-transform ${faq === i ? "rotate-180" : ""}`} />
              </button>
              {faq === i && <p className="pb-6 text-muted-foreground">{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-card py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Heading kicker="Βρείτε μας" title="Επικοινωνία" />
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="flex gap-5">
                <MapPin className="h-6 w-6 shrink-0 text-primary" />
                <div><h4 className="font-display text-xl">Διεύθυνση</h4><p className="mt-1 text-muted-foreground">Οδός Θεοδώρου Χαβίνη, ΤΚ 30500, Αμφιλοχία</p></div>
              </div>
              <div className="flex gap-5">
                <Phone className="h-6 w-6 shrink-0 text-primary" />
                <div><h4 className="font-display text-xl">Τηλέφωνο Ραντεβού</h4><a href={`tel:${PHONE}`} className="mt-1 block text-muted-foreground hover:text-primary">{PHONE}</a></div>
              </div>
              <div className="flex gap-5">
                <Clock className="h-6 w-6 shrink-0 text-primary" />
                <div className="flex-1">
                  <h4 className="font-display text-xl">Ωράριο Λειτουργίας</h4>
                  <ul className="mt-3 divide-y divide-border text-sm">
                    {hours.map(([d, h]) => (
                      <li key={d} className="flex justify-between py-2"><span>{d}</span><span className={h === "Κλειστά" ? "text-primary" : "text-muted-foreground"}>{h}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex gap-4 pl-11">
                <a href="#" aria-label="Facebook" className="flex h-11 w-11 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary"><Facebook className="h-5 w-5" /></a>
                <a href="#" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary"><Instagram className="h-5 w-5" /></a>
              </div>
            </div>
            <div className="flex flex-col">
              <h4 className="font-display text-2xl">Βρείτε το κατάστημά μας:</h4>
              <div className="mt-4 min-h-[450px] flex-1 overflow-hidden border border-border">
                <iframe
                  title="Χάρτης"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.375500662283!2d21.165084676646875!3d38.86321057173264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135e9d842431d2b7%3A0x86379595776fc4ad!2s%CE%9A%CE%BF%CE%BC%CE%BC%CF%8E%CF%83%CE%B5%CE%B9%CF%82%20%22%CE%93%CE%B9%CE%AC%CE%BD%CE%BD%CE%B7%CF%82%20-%20%CE%9B%CE%B1%CE%BC%CF%80%CF%81%CE%B9%CE%BD%CE%AE%22!5e0!3m2!1sel!2sgr!4v1715010000000!5m2!1sel!2sgr"
                  className="h-full min-h-[450px] w-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-10 text-center text-sm text-muted-foreground">
        <p className="font-display text-lg tracking-widest text-foreground">ΓΙΑΝΝΗΣ <span className="text-primary">&</span> ΛΑΜΠΡΙΝΗ</p>
        <p className="mt-2">© 2026 Κομμώσεις Γιάννης - Λαμπρινή · Αμφιλοχία</p>
      </footer>
    </div>
  );
}
