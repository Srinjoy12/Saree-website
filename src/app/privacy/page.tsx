import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Darsh Collections",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto min-h-screen">
      <h1 className="font-serif text-5xl text-primary mb-12">Privacy Policy</h1>
      
      <div className="space-y-8 font-sans text-secondary leading-relaxed">
        <section>
          <h2 className="font-serif text-2xl text-primary mb-4">1. Information Collection</h2>
          <p>
            At Darsh Collections, we value your privacy. We only collect information necessary to process your inquiries and orders. This may include your name, contact number, shipping address, and email when you reach out to us via WhatsApp or our contact forms.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-primary mb-4">2. Use of Information</h2>
          <p>
            Your information is strictly used to communicate with you regarding your purchases, provide customer support, and, if you opt-in, send you updates about new collections and events via our newsletter. We do not sell or share your personal data with third-party marketing agencies.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-primary mb-4">3. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information. However, please note that no method of transmission over the internet or electronic storage is 100% secure.
          </p>
        </section>
        
        <section>
          <h2 className="font-serif text-2xl text-primary mb-4">4. Cookies and Local Storage</h2>
          <p>
            Our website uses local storage purely to maintain your 'Saved Sarees' wishlist on your device. We do not use tracking cookies to monitor your browsing behavior across other websites.
          </p>
        </section>
      </div>
    </div>
  );
}
