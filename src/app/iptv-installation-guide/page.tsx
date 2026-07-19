import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeviceAccordion from "@/components/DeviceAccordion";
import { siteConfig } from "../../config";

export const metadata = {
  title: "IPTV Installation Guide: All Supported Devices for IPTV",
  description: "Learn how to install our IPTV service on Firestick, Smart TV, Android, iOS, Windows, Mac, and Roku. Step-by-step setup guidance.",
};

export default function InstallationGuidePage() {
  const whatsappNumber = siteConfig.contact.whatsappNumber;

  // Schema Markup for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "IPTV Installation Guide: All Supported Devices for IPTV",
    "description": "Step-by-step instructions on how to install and setup BritStream 4K on Firestick, Android, Smart TVs, and Apple devices.",
    "author": {
      "@type": "Organization",
      "name": "BritStream 4K"
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
          
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 className="heading-lg" style={{ marginBottom: '1rem' }}>IPTV Installation Guide: <br/><span style={{ color: 'var(--primary)', fontSize: '2.5rem' }}>All Supported Devices for IPTV</span></h1>
            <p className="text-muted" style={{ fontSize: '1.15rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.8 }}>
              Select your device below for step-by-step instructions on how to install our premium service. Setup takes less than 5 minutes.
            </p>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <DeviceAccordion />
          </div>

          <div style={{ maxWidth: '800px', margin: '4rem auto 0 auto', padding: '2rem', background: 'rgba(255,255,255,0.02)', borderRadius: '1.5rem', border: '1px solid var(--glass-border)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>Supported IPTV Player Apps</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              {["GSE Smart IPTV", "My IPTV Player", "Smart IPTV", "iPlayTV Apple TV", "Smart STB", "SET IPTV", "NET IPTV", "Kodi", "IPTV Smart Purple", "VLC Player", "TiviMate", "Chromecast", "Duplex IPTV", "IPTV Extreme", "IPTV Smarters Pro"].map((app, i) => (
                <span key={i} style={{ background: 'rgba(0, 68, 255, 0.1)', color: '#fff', padding: '0.5rem 1rem', borderRadius: '999px', fontSize: '0.875rem' }}>
                  {app}
                </span>
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem', padding: '3rem', background: 'linear-gradient(135deg, rgba(0,68,255,0.1) 0%, rgba(0,68,255,0.02) 100%)', borderRadius: '1.5rem', border: '1px solid rgba(0,68,255,0.2)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>Still Need Help?</h3>
            <p style={{ color: '#a1a1aa', marginBottom: '2rem' }}>Our UK-based support team is available 24/7 on WhatsApp to help you get connected instantly.</p>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, I need help setting up my IPTV.")}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Contact Support on WhatsApp
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
