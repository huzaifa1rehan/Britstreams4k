import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";

export const metadata = {
  title: "IPTV Installation Plans | BritStream 4K IPTV",
  description: "View our flexible IPTV subscription plans. Choose from 1 month, 3 months, 6 months, or 12 months with full 4K and Anti-Freeze support.",
};

export default function PlansPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "IPTV Installation Plans",
    "description": "Flexible UK IPTV subscription plans for Firestick, Android, and Smart TVs.",
    "url": "https://www.britstreams4k.uk/iptv-installation-plans",
    "mainEntity": {
      "@type": "OfferCatalog",
      "name": "IPTV Subscriptions",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "1 Month",
          "price": "12.99",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "name": "12 Months",
          "price": "84.99",
          "priceCurrency": "GBP"
        }
      ]
    }
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      
      <section className="section" style={{ background: '#020202', paddingTop: '10rem', flexGrow: 1 }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            {/* The SEO requested H1 tag */}
            <h1 className="heading-xl" style={{ fontSize: '3rem', color: '#fff' }}>IPTV Installation Plans</h1>
            <p className="text-muted" style={{ fontSize: '1.15rem', maxWidth: '600px', margin: '1rem auto' }}>
              Our complete pricing structure. No hidden fees, instant activation.
            </p>
          </div>

          <Pricing />

        </div>
      </section>

      <Footer />
    </main>
  );
}
