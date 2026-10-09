import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Darsh Collections",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto min-h-screen">
      <h1 className="font-serif text-5xl text-primary mb-12">Terms & Conditions</h1>
      
      <div className="space-y-8 font-sans text-secondary leading-relaxed">
        <section>
          <h2 className="font-serif text-2xl text-primary mb-4">1. General</h2>
          <p>
            By accessing and using the Darsh Collections website, you agree to comply with and be bound by the following terms and conditions. These terms govern your use of our digital catalogue and boutique services.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-primary mb-4">2. Product Accuracy</h2>
          <p>
            We make every effort to display the colors and textures of our handwoven sarees as accurately as possible. However, due to variations in monitor displays and the nature of pure silk and hand-dyeing processes, slight variations may occur between the digital image and the physical product.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-primary mb-4">3. Pricing and Availability</h2>
          <p>
            Since our pieces are handcrafted, availability is limited. Items marked as "Enquire for availability" may require a waiting period if they need to be re-woven on the loom. Prices, where displayed, are subject to change without prior notice.
          </p>
        </section>
        
        <section>
          <h2 className="font-serif text-2xl text-primary mb-4">4. Intellectual Property</h2>
          <p>
            All content on this website, including photographs, text, graphics, and logos, is the property of Darsh Collections and is protected by copyright laws. Unauthorized reproduction or use is strictly prohibited.
          </p>
        </section>
      </div>
    </div>
  );
}
