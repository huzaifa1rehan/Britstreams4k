import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "../../config";
import { MessageSquare, Calendar, PlaySquare, Headset } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Contact Us for IPTV Free Trial, Setup Guide & 24/7 Support",
  description: "Get 24/7 support for your IPTV subscription, free trial activation, setup guidance, and login configuration.",
};

export default function ContactUsPage() {
  const whatsappNumber = siteConfig.contact.whatsappNumber;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Us for IPTV Free Trial, Setup Guide & 24/7 Support",
    "description": "Get 24/7 support for your IPTV subscription, free trial activation, setup guidance, and login configuration.",
    "url": "https://www.britstreams4k.uk/contact-us"
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      
      <section className="section" style={{ background: '#020202', paddingTop: '10rem', flexGrow: 1 }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 className="heading-xl" style={{ marginBottom: '1.5rem', fontSize: '3rem' }}>Contact Us for IPTV Free Trial, Setup Guide & 24/7 Support</h1>
            <p className="text-muted" style={{ fontSize: '1.25rem', lineHeight: 1.8 }}>
              Have a question about your IPTV subscription? We provide full support for device installation, setup guidance, IPTV login configuration, account activation, and subscription renewals. Our real human support team is available 24/7 and replies to every message within minutes.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
              <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, I want a Free Trial")}`} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '1rem 2rem', background: '#25D366', boxShadow: '0 4px 14px rgba(37, 211, 102, 0.3)' }}>
                Request Free Trial
              </a>
              <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, I need help.")}`} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '1rem 2rem' }}>
                WhatsApp Us
              </a>
              <Link href="/iptv-installation-guide" className="btn btn-outline" style={{ padding: '1rem 2rem' }}>
                Setup Guide
              </Link>
            </div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)', borderRadius: '1.5rem', padding: '3rem', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem' }}>Not Sure Yet? Try Our IPTV Service Free for 24 Hours Before You Buy</h2>
            <p style={{ color: '#a1a1aa', marginBottom: '1.5rem', lineHeight: 1.8 }}>
              Your free IPTV trial gives you full 24-hour access to check device compatibility, test streaming performance, explore all features, and evaluate picture quality before choosing any subscription plan.
            </p>
            <p style={{ color: '#a1a1aa', lineHeight: 1.8 }}>
              Try it on any device you own, whether that is a Firestick, Smart TV, Android phone, iPhone, MAG Box, or Windows PC, and see how smoothly our IPTV service runs on your personal setup.
            </p>
          </div>

          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', textAlign: 'center' }}>What You Can Do During Your Free IPTV Trial</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginBottom: '4rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--glass-border)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--primary)' }}>Experience the Full Channel Library</h3>
              <p style={{ color: '#a1a1aa' }}>Browse all live channels and see everything your IPTV subscription includes before spending anything.</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--glass-border)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--primary)' }}>Test Streaming Quality on Your Device</h3>
              <p style={{ color: '#a1a1aa' }}>Experience HD, UHD, and 4K streaming performance directly on your own screen and judge for yourself.</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--glass-border)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--primary)' }}>Check Device Compatibility</h3>
              <p style={{ color: '#a1a1aa' }}>Confirm that our IPTV service runs smoothly on your preferred streaming device before committing to a plan.</p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem' }}>IPTV Setup Assistance and Premium 24/7 Customer Support</h2>
            <p style={{ color: '#a1a1aa', marginBottom: '1.5rem', lineHeight: 1.8 }}>
              Need help getting your IPTV service installed or activated on your device? Our support team is available 24 hours a day and handles everything from basic setup questions to full device configuration.
            </p>
            <p style={{ color: '#a1a1aa', marginBottom: '2rem', lineHeight: 1.8 }}>
              From IPTV account activation and login setup to device installation and subscription management, we stay with every customer until they are watching their first channel without any trouble.
            </p>
            <Link href="/iptv-installation-guide" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>
              Free IPTV Set Up Guide
            </Link>
          </div>

          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', textAlign: 'center' }}>Common IPTV Support Areas</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '4rem' }}>
            {["IPTV Account Activation", "24 Hour Free Trial Setup", "Device Installation Guide", "IPTV Login Credentials Support", "Subscription Plan Queries", "Reseller Panel Help", "EPG and Catch-Up Issues", "VPN Setup Guidance"].map((area, i) => (
              <div key={i} style={{ background: 'rgba(0, 68, 255, 0.05)', padding: '1rem 1.5rem', borderRadius: '0.5rem', color: '#fff', borderLeft: '3px solid var(--primary)' }}>
                {area}
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', textAlign: 'center' }}>How We Help Our IPTV Customers</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '4rem' }}>
            <div style={{ padding: '1.5rem', border: '1px solid var(--glass-border)', borderRadius: '1rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>IPTV Account Activation</h3>
              <p style={{ color: '#a1a1aa' }}>Our team sends your IPTV login credentials to your WhatsApp or email within minutes of payment confirmation.</p>
            </div>
            <div style={{ padding: '1.5rem', border: '1px solid var(--glass-border)', borderRadius: '1rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Device Installation Support</h3>
              <p style={{ color: '#a1a1aa' }}>We guide you through free IPTV installation on any device, including Firestick, Android TV, Smart TV, iPhone, iOS, Android phones, Windows, and Mac.</p>
            </div>
            <div style={{ padding: '1.5rem', border: '1px solid var(--glass-border)', borderRadius: '1rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Free Trial Setup</h3>
              <p style={{ color: '#a1a1aa' }}>Request your 24-hour IPTV free trial and get instant account activation and a full setup guide from our team.</p>
            </div>
            <div style={{ padding: '1.5rem', border: '1px solid var(--glass-border)', borderRadius: '1rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>IPTV Login Credentials Help</h3>
              <p style={{ color: '#a1a1aa' }}>One message to our team and your full IPTV login details, including username, password, and server URL, are back in your hands immediately.</p>
            </div>
            <div style={{ padding: '1.5rem', border: '1px solid var(--glass-border)', borderRadius: '1rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Technical Support</h3>
              <p style={{ color: '#a1a1aa' }}>Whether you are dealing with setup difficulties, activation issues, account questions, or streaming problems, our team jumps in immediately and gets everything working fast.</p>
            </div>
          </div>

          <div style={{ textAlign: 'center', padding: '3rem', background: 'linear-gradient(135deg, rgba(0,68,255,0.1) 0%, rgba(0,68,255,0.02) 100%)', borderRadius: '1.5rem', border: '1px solid rgba(0,68,255,0.2)' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', color: '#fff' }}>Contact US & GET YOUR FREE IPTV TRIAL TODAY</h2>
            <p style={{ color: '#a1a1aa', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto', lineHeight: 1.8 }}>
              Stop wondering and start watching. Get your free IPTV trial set up in minutes right now. Every question you have about our IPTV service gets answered within minutes on WhatsApp. Your free IPTV trial is one WhatsApp message away.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, I'd like a Trex IPTV Free Trial.")}`} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ background: '#25D366', boxShadow: '0 4px 14px rgba(37, 211, 102, 0.3)' }}>
                Request Trex IPTV Free Trial
              </a>
              <Link href="/iptv-installation-plans" className="btn btn-outline">
                View Subscription Plans
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
