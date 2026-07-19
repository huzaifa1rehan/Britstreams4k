"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type AccordionItem = {
  title: string;
  content: React.ReactNode;
};

const items: AccordionItem[] = [
  {
    title: "Firestick / Fire TV",
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#a1a1aa' }}>
        <p>1. Go to <strong>Settings {'>'} My Fire TV {'>'} Developer Options</strong> and turn ON "Apps from Unknown Sources".</p>
        <p>2. Search for the <strong>Downloader</strong> app on your Firestick home screen and install it.</p>
        <p>3. Open Downloader and enter our quick-install code (ask support for current code).</p>
        <p>4. Click Download, then Install the IPTV app.</p>
        <p>5. Open the app and enter the Username and Password provided to your email/WhatsApp after purchase.</p>
      </div>
    )
  },
  {
    title: "Smart TV",
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#a1a1aa' }}>
        <p>1. Open the App Store on your Samsung or LG Smart TV.</p>
        <p>2. Search for <strong>"IBO Player"</strong>, <strong>"Smart IPTV"</strong>, or <strong>"Duplex IPTV"</strong> and install it.</p>
        <p>3. Open the app and note down the MAC Address displayed on the screen.</p>
        <p>4. Send this MAC Address to our support team on WhatsApp.</p>
        <p>5. We will activate the playlist for you, then simply restart your TV app to load channels.</p>
      </div>
    )
  },
  {
    title: "Android TV / Android Box",
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#a1a1aa' }}>
        <p>1. Open the <strong>Google Play Store</strong>.</p>
        <p>2. Search for <strong>"IPTV Smarters Pro"</strong> or <strong>"TiviMate"</strong> and install it.</p>
        <p>3. Open the app and select <strong>"Login with Xtream Codes API"</strong>.</p>
        <p>4. Enter the Username, Password, and Server URL provided to you after purchase.</p>
        <p>5. Click Add User, and wait for the channels to download.</p>
      </div>
    )
  },
  {
    title: "iPhone / iPad / iOS",
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#a1a1aa' }}>
        <p>1. Open the <strong>Apple App Store</strong>.</p>
        <p>2. Search for <strong>"Smarters Player Lite"</strong> or <strong>"GSE Smart IPTV"</strong> and download it.</p>
        <p>3. Choose <strong>"Login with Xtream Codes API"</strong>.</p>
        <p>4. Enter the exact Username, Password, and Portal URL we provided you.</p>
        <p>5. Click Add User to start watching.</p>
      </div>
    )
  },
  {
    title: "Windows PC",
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#a1a1aa' }}>
        <p>1. Download <strong>VLC Media Player</strong> or <strong>IPTV Smarters for PC</strong>.</p>
        <p>2. If using VLC: Open VLC, go to Media {'>'} Open Network Stream, and paste your M3U Link.</p>
        <p>3. If using Smarters: Install the .exe file, open it, and login with your Xtream Codes API details.</p>
      </div>
    )
  },
  {
    title: "Mac",
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#a1a1aa' }}>
        <p>1. Download <strong>IPTV Smarters Pro</strong> from the Mac App Store or download VLC.</p>
        <p>2. Open the app and select Login with Xtream Codes API.</p>
        <p>3. Enter your Username, Password, and Portal URL.</p>
      </div>
    )
  },
  {
    title: "Android Smartphones / Tablets",
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#a1a1aa' }}>
        <p>1. Open the Google Play Store on your phone/tablet.</p>
        <p>2. Download <strong>IPTV Smarters Pro</strong> or <strong>XCIPTV</strong>.</p>
        <p>3. Enter the login details sent to your email or WhatsApp.</p>
      </div>
    )
  },
  {
    title: "Roku Devices",
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#a1a1aa' }}>
        <p>1. Roku does not have native IPTV apps easily available in the store.</p>
        <p>2. We recommend using the "Screen Mirroring" feature from your Android/iOS device.</p>
        <p>3. Alternatively, contact our support team for a specialized Roku web-player link.</p>
      </div>
    )
  }
];

export default function DeviceAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index} 
            style={{ 
              background: 'rgba(255,255,255,0.03)', 
              border: '1px solid var(--glass-border)', 
              borderRadius: '1rem',
              overflow: 'hidden',
              transition: 'all 0.3s ease'
            }}
          >
            <button 
              onClick={() => toggle(index)}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1.5rem',
                background: isOpen ? 'rgba(0, 68, 255, 0.1)' : 'transparent',
                border: 'none',
                color: '#fff',
                fontSize: '1.25rem',
                fontWeight: 600,
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              {item.title}
              {isOpen ? <ChevronUp size={24} color="var(--primary)" /> : <ChevronDown size={24} color="var(--muted)" />}
            </button>
            
            <div style={{
              maxHeight: isOpen ? '500px' : '0',
              opacity: isOpen ? 1 : 0,
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              padding: isOpen ? '0 1.5rem 1.5rem 1.5rem' : '0 1.5rem',
              background: isOpen ? 'rgba(0, 68, 255, 0.05)' : 'transparent'
            }}>
              <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
