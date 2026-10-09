import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saree Care | Darsh Collections",
  description: "Learn how to care for and preserve your handwoven silk and cotton sarees.",
};

export default function CarePage() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-serif text-5xl text-primary mb-6 text-center">
          Saree Care <span className="times-italic font-normal" style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }}>Guide</span>
        </h1>
        <p className="font-sans text-secondary text-center mb-16 leading-relaxed">
          A handwoven saree is a living breathing textile. With the right care, these six yards can be passed down as heirlooms across generations.
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="font-serif text-3xl text-primary mb-4 border-b border-accent/20 pb-2">Storage</h2>
            <ul className="list-disc pl-5 font-sans text-secondary space-y-3 leading-relaxed">
              <li>Always store your silk sarees wrapped in unbleached cotton muslin cloth. This allows the fabric to breathe while protecting it from silverfish and moisture.</li>
              <li>Avoid hanging heavy zari sarees on hangers for extended periods, as the weight can distort the weave. Store them flat.</li>
              <li>Refold your sarees every 3 to 6 months to prevent the zari from breaking along permanent creases.</li>
              <li>Never use naphthalene balls directly touching the fabric. Use dried neem leaves or silica gel pouches nearby instead.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-primary mb-4 border-b border-accent/20 pb-2">Washing & Ironing</h2>
            <ul className="list-disc pl-5 font-sans text-secondary space-y-3 leading-relaxed">
              <li><strong>Strictly Dry Clean Only</strong> for Kanjivarams, Banarasis, and any silk or zari-heavy sarees.</li>
              <li>If you must iron at home, always iron on the reverse side (the wrong side) of the fabric on the lowest silk setting. Never iron directly over zari.</li>
              <li>For cotton sarees, a gentle hand wash in cold water with mild detergent is recommended. Do not wring or twist.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-primary mb-4 border-b border-accent/20 pb-2">Immediate Stain Care</h2>
            <ul className="list-disc pl-5 font-sans text-secondary space-y-3 leading-relaxed">
              <li>If you spill something on your silk saree, do not rub it vigorously. Gently dab the area with a clean, dry cotton cloth to absorb the liquid.</li>
              <li>Take it to a professional dry cleaner as soon as possible and point out the exact stain.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
