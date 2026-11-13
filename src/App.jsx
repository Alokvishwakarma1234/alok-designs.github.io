import React from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Share2,
  Youtube
} from 'lucide-react';

// Authentic Official Verified Badge (Razor-sharp official verified rosette with crisp white checkmark)
function VerifiedBadge({ size = 20, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
      className={`verified-badge ${className}`}
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
      title="Verified Account"
    >
      <path
        d="M20.396 11a2.82 2.82 0 00-.73-1.95 2.81 2.81 0 00.17-2.07 2.84 2.84 0 00-1.4-1.54 2.85 2.85 0 00-1.98-.16 2.82 2.82 0 00-1.63-1.27 2.84 2.84 0 00-2.06.31A2.83 2.83 0 0011 3.6a2.83 2.83 0 00-1.76.72 2.84 2.84 0 00-2.06-.31 2.82 2.82 0 00-1.63 1.27 2.85 2.85 0 00-1.98.16 2.84 2.84 0 00-1.4 1.54 2.81 2.81 0 00.17 2.07A2.82 2.82 0 001.604 11a2.82 2.82 0 00.73 1.95 2.81 2.81 0 00-.17 2.07 2.84 2.84 0 001.4 1.54 2.85 2.85 0 001.98.16 2.82 2.82 0 001.63 1.27 2.84 2.84 0 002.06-.31A2.83 2.83 0 0011 18.4a2.83 2.83 0 001.76-.72 2.84 2.84 0 002.06.31 2.82 2.82 0 001.63-1.27 2.85 2.85 0 001.98-.16 2.84 2.84 0 001.4-1.54 2.81 2.81 0 00-.17-2.07 2.82 2.82 0 00.73-1.95z"
        fill="#0095f6"
      />
      <path
        d="M9.68 14.54l-3.23-3.23 1.29-1.29 1.94 1.94 4.52-4.52 1.29 1.29-5.89 5.81z"
        fill="#ffffff"
      />
    </svg>
  );
}

// Brand SVGs
function XIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function PinterestIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.33 1.365-.053.225-.172.271-.401.165-1.499-.69-2.436-2.887-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
    </svg>
  );
}

function RedditIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.56 12 8 12.56 8 13.25c0 .69.56 1.25 1.25 1.25.69 0 1.25-.56 1.25-1.25 0-.69-.56-1.25-1.25-1.25zm5.5 0c-.69 0-1.25.56-1.25 1.25 0 .69.56 1.25 1.25 1.25.69 0 1.25-.56 1.25-1.25 0-.69-.56-1.25-1.25-1.25zm-5.464 3.99a.327.327 0 0 0-.231.096.327.327 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.197-2.512-.73a.326.326 0 0 0-.232-.096z" />
    </svg>
  );
}

function SnapchatIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.006 1.75c-3.753 0-6.19 2.56-6.19 5.86 0 .89.28 1.95.53 2.65.1.28.05.59-.13.82-.41.52-1.27 1.4-1.92 1.93-.34.28-.5.71-.42 1.14.08.43.41.77.85.86.85.18 1.83.21 2.37.5.38.2.56.59.45.98-.24.87-1.15 1.77-1.87 2.27-.38.26-.52.73-.34 1.14.18.42.61.68 1.06.66 1.42-.08 2.64.44 3.32 1.4.38.54.98.87 1.63.87h.04c.66 0 1.27-.33 1.65-.87.68-.96 1.9-1.48 3.32-1.4.45.02.88-.24 1.06-.66.18-.41.04-.88-.34-1.14-.72-.5-1.63-1.4-1.87-2.27-.11-.39.07-.78.45-.98.54-.29 1.52-.32 2.37-.5.44-.09.77-.43.85-.86.08-.43-.08-.86-.42-1.14-.65-.53-1.51-1.41-1.92-1.93-.18-.23-.23-.54-.13-.82.25-.7.53-1.76.53-2.65 0-3.3-2.43-5.86-6.18-5.86z" />
    </svg>
  );
}

const profile = {
  name: 'Alok Vishwakarma',
  handle: 'a.l.o.k.3i',
  location: 'Mumbai, India',
  role: 'Graphic Designer',
  subrole: 'Video Editor • Vibe Coder',
  bio: 'Building Brands, Apps & Digital Experiences with Creativity & Code.',
  photo: '/images/alok-dp.jpg',
  portfolio: 'https://visualechostudio.com',
  instagram: 'https://www.instagram.com/a.l.o.k.3i/',
  github: 'https://github.com/Alokvishwakarma1234',
  linkedin: 'https://www.linkedin.com/in/alok-vishwakarma-4563a0302',
  youtube: 'https://www.youtube.com/@VisualEchoStudio',
  snapchat: 'https://www.snapchat.com/add/artist_alok007',
  pinterest: 'https://pin.it/12JAdylOd',
  reddit: 'https://www.reddit.com/u/alokglamstudio/',
  whatsapp: 'https://wa.me/919152734675',
  email: 'mailto:hello@visualechostudio.com'
};

const instagramAccounts = [
  { handle: '@a.l.o.k.3i', role: 'Main & Personal Profile', href: 'https://www.instagram.com/a.l.o.k.3i/' },
  { handle: '@visualechostudio', role: 'Design Studio & Creative Works', href: 'https://www.instagram.com/visualechostudio/' },
  { handle: '@messagetracker.app', role: 'MessageTracker App & Product', href: 'https://www.instagram.com/messagetracker.app/' },
  { handle: '@artist_alok.k_vishwakarma_090', role: 'Artist Portfolio & Visuals', href: 'https://www.instagram.com/artist_alok.k_vishwakarma_090/' }
];

const linkSections = [
  {
    title: 'Featured & Profiles',
    items: [
      { label: 'Instagram Profile', sub: '@a.l.o.k.3i • View feed & stories', to: '/instagram', icon: Instagram, tone: 'instagram' },
      { label: 'YouTube Channel', sub: '@VisualEchoStudio • Tutorials & videos', href: 'https://www.youtube.com/@VisualEchoStudio', icon: Youtube, tone: 'youtube' },
      { label: 'LinkedIn', sub: 'Alok Vishwakarma • Professional Network', href: 'https://www.linkedin.com/in/alok-vishwakarma-4563a0302', icon: Linkedin, tone: 'linkedin' },
      { label: 'GitHub', sub: '@Alokvishwakarma1234 • Code & projects', href: 'https://github.com/Alokvishwakarma1234', icon: Github, tone: 'dark' },
    ]
  },
  {
    title: 'Studios & Products',
    items: [
      { label: 'Visual Echo Studio', sub: '@visualechostudio on Instagram', href: 'https://www.instagram.com/visualechostudio/', icon: Instagram, tone: 'instagram' },
      { label: 'MessageTracker App', sub: '@messagetracker.app on Instagram', href: 'https://www.instagram.com/messagetracker.app/', icon: Instagram, tone: 'instagram' },
      { label: 'Art Portfolio', sub: '@artist_alok.k_vishwakarma_090', href: 'https://www.instagram.com/artist_alok.k_vishwakarma_090/', icon: Instagram, tone: 'instagram' },
      { label: 'Visual Echo Studio Page', sub: 'Facebook Studio Page', href: 'https://www.facebook.com/visualechostudio/', icon: Facebook, tone: 'facebook' },
      { label: 'Alok Visual Echo Studio', sub: 'Facebook Profile', href: 'https://www.facebook.com/alokvisualechostudio', icon: Facebook, tone: 'facebook' },
    ]
  },
  {
    title: 'Community & Channels',
    items: [
      { label: 'X (Twitter)', sub: '@artist_alok_', href: 'https://x.com/artist_alok_', icon: XIcon, tone: 'x' },
      { label: 'Visual Studio 28 (X)', sub: '@visualstudio28', href: 'https://x.com/visualstudio28', icon: XIcon, tone: 'x' },
      { label: 'Snapchat', sub: '@artist_alok007', href: 'https://www.snapchat.com/add/artist_alok007', icon: SnapchatIcon, tone: 'snapchat' },
      { label: 'Pinterest', sub: 'Design boards & inspiration', href: 'https://pin.it/12JAdylOd', icon: PinterestIcon, tone: 'pinterest' },
      { label: 'Reddit', sub: 'u/alokglamstudio', href: 'https://www.reddit.com/u/alokglamstudio/', icon: RedditIcon, tone: 'reddit' },
    ]
  }
];

const posts = [
  ['https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&auto=format&fit=crop&q=85', 'Design workspace'],
  ['https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=600&auto=format&fit=crop&q=85', 'Chess board'],
  ['https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=85', 'Technology'],
  ['https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&auto=format&fit=crop&q=85', 'Mumbai'],
  ['https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=85', 'Development'],
  ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&auto=format&fit=crop&q=85', 'Photography']
];

function AmbientLighting() {
  return (
    <div className="ambient-wrap" aria-hidden="true">
      <div className="ambient-glow glow-1" />
      <div className="ambient-glow glow-2" />
      <div className="ambient-glow glow-3" />
    </div>
  );
}

function Avatar({ size = 'large' }) {
  return (
    <img
      className={`avatar ${size}`}
      src={profile.photo}
      alt="Alok Vishwakarma"
      onError={(e) => {
        // Fallback to high quality placeholder if local image path fails
        e.currentTarget.src = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=700&auto=format&fit=crop&q=85';
      }}
    />
  );
}

function Header({ title = 'Alok Vishwakarma' }) {
  return (
    <header className="topbar">
      <Link to="/" className="back" aria-label="Go back">
        <ArrowLeft size={19} />
      </Link>
      <span>{title}</span>
      <button
        className="icon-button"
        aria-label="Share"
        onClick={() => navigator.share?.({ title: 'Alok Vishwakarma', url: window.location.href })}
      >
        <Share2 size={18} />
      </button>
    </header>
  );
}

function Home() {
  return (
    <main className="phone-page home-page">
      <AmbientLighting />

      {/* Clean Top Bar without alok.link brand text */}
      <div className="home-top-clean">
        <div className="status-badge">
          <span className="live-pulse" />
          <span>Available for Projects</span>
        </div>
        <button
          className="share-pill"
          aria-label="Share profile"
          onClick={() => navigator.share?.({ title: profile.name, url: window.location.href })}
        >
          <Share2 size={16} />
        </button>
      </div>

      <section className="hero">
        <div className="avatar-wrap">
          <Avatar />
          <i className="online-dot" title="Online" />
        </div>
        <h1 className="hero-name">
          {profile.name}
          <VerifiedBadge size={21} className="verified-badge" />
        </h1>
        <p className="role">{profile.role}</p>
        <p className="subrole">
          Video Editor <b>•</b> Vibe Coder
        </p>

        {/* Interactive Clickable Chip Buttons */}
        <div className="chips">
          <a
            href="https://www.google.com/maps/place/Mumbai"
            target="_blank"
            rel="noreferrer"
            className="chip-btn"
            title="Open Mumbai on Maps"
          >
            <MapPin size={13} className="chip-icon location" />
            <span>Mumbai, India</span>
            <ArrowUpRight size={12} className="chip-arrow" />
          </a>
          <a
            href="https://www.instagram.com/visualechostudio/"
            target="_blank"
            rel="noreferrer"
            className="chip-btn"
            title="Open Visual Echo Studio"
          >
            <BriefcaseBusiness size={13} className="chip-icon studio" />
            <span>Visual Echo Studio</span>
            <ArrowUpRight size={12} className="chip-arrow" />
          </a>
          <a
            href="https://github.com/Alokvishwakarma1234"
            target="_blank"
            rel="noreferrer"
            className="chip-btn"
            title="Explore Code & Projects"
          >
            <Code2 size={13} className="chip-icon tech" />
            <span>Tech & Design</span>
            <ArrowUpRight size={12} className="chip-arrow" />
          </a>
        </div>

        <p className="bio">{profile.bio}</p>
      </section>

      {/* Quick Icon Row for All Key Platforms */}
      <div className="social-row" aria-label="Social media channels">
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="linkedin" title="LinkedIn">
          <Linkedin size={18} />
        </a>
        <Link to="/instagram" aria-label="Instagram" className="instagram" title="Instagram">
          <Instagram size={18} />
        </Link>
        <a href={profile.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="youtube" title="YouTube">
          <Youtube size={18} />
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="github" title="GitHub">
          <Github size={18} />
        </a>
        <a href="https://x.com/artist_alok_" target="_blank" rel="noreferrer" aria-label="X" className="x-icon" title="X (Twitter)">
          <XIcon size={16} />
        </a>
        <a href="https://www.facebook.com/alokvisualechostudio" target="_blank" rel="noreferrer" aria-label="Facebook" className="facebook" title="Facebook">
          <Facebook size={18} />
        </a>
        <a href={profile.snapchat} target="_blank" rel="noreferrer" aria-label="Snapchat" className="snapchat" title="Snapchat">
          <SnapchatIcon size={18} />
        </a>
        <a href={profile.pinterest} target="_blank" rel="noreferrer" aria-label="Pinterest" className="pinterest" title="Pinterest">
          <PinterestIcon size={18} />
        </a>
        <a href={profile.reddit} target="_blank" rel="noreferrer" aria-label="Reddit" className="reddit" title="Reddit">
          <RedditIcon size={18} />
        </a>
      </div>

      {/* Categorized Link Cards */}
      <section className="link-sections">
        {linkSections.map((section) => (
          <div key={section.title} className="section-group">
            <h2 className="section-title">{section.title}</h2>
            <div className="link-list">
              {section.items.map(({ label, sub, to, href, icon: Icon, tone }) => {
                const content = (
                  <>
                    <span className={`link-icon ${tone}`}>
                      <Icon size={21} />
                    </span>
                    <span className="link-copy">
                      <strong>{label}</strong>
                      <small>{sub}</small>
                    </span>
                    <ArrowUpRight className="link-arrow" size={19} />
                  </>
                );

                return to ? (
                  <Link className="link-card" to={to} key={label}>
                    {content}
                  </Link>
                ) : (
                  <a className="link-card" href={href} target="_blank" rel="noreferrer" key={label}>
                    {content}
                  </a>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      {/* Call to Actions */}
      <div className="cta-row">
        <a className="contact-btn" href={profile.email}>
          <Mail size={18} /> Contact Me
        </a>
        <a className="whatsapp-btn" href={profile.whatsapp} target="_blank" rel="noreferrer">
          <Phone size={18} /> WhatsApp
        </a>
      </div>

      <footer className="footer">
        Designed & Built by <span>Alok Vishwakarma</span>
      </footer>
    </main>
  );
}

function InstagramPage() {
  const navigate = useNavigate();

  return (
    <main className="phone-page instagram-page">
      <AmbientLighting />
      <Header title="Instagram Hub" />

      <div className="ig-brand">
        <Instagram size={34} />
        <strong>Instagram</strong>
      </div>

      <section className="ig-profile-card">
        <div className="ig-avatar-wrap">
          <Avatar />
          <span className="ig-story-ring" />
        </div>
        <h1 className="ig-handle-heading">
          @{profile.handle}
          <VerifiedBadge size={20} className="verified-badge" />
        </h1>
        <p className="ig-name">{profile.name}</p>
        <div className="stats">
          <div>
            <b>128</b>
            <span>Posts</span>
          </div>
          <div>
            <b>4.8K</b>
            <span>Followers</span>
          </div>
          <div>
            <b>237</b>
            <span>Following</span>
          </div>
        </div>
        <p className="ig-bio">
          🎨 Graphic Designer | 🎬 Video Editor | ⚡ Vibe Coder
          <br />
          Crafting Visual Stories & Digital Experiences.
        </p>
        <p className="ig-location">
          <MapPin size={15} /> {profile.location}
        </p>
      </section>

      <a className="follow-button" href={profile.instagram} target="_blank" rel="noreferrer">
        <Instagram size={22} /> Follow @{profile.handle} <ExternalLink size={17} />
      </a>

      {/* Other Instagram Accounts */}
      <div className="ig-sub-accounts">
        <h3 className="section-title">All Instagram Profiles</h3>
        <div className="link-list">
          {instagramAccounts.map((acc) => (
            <a key={acc.handle} className="link-card ig-sub-card" href={acc.href} target="_blank" rel="noreferrer">
              <span className="link-icon instagram">
                <Instagram size={19} />
              </span>
              <span className="link-copy">
                <strong>{acc.handle}</strong>
                <small>{acc.role}</small>
              </span>
              <ArrowUpRight className="link-arrow" size={18} />
            </a>
          ))}
        </div>
      </div>

      <section className="post-grid" aria-label="Instagram preview posts">
        {posts.map(([src, alt], i) => (
          <a href={profile.instagram} target="_blank" rel="noreferrer" key={src}>
            <img src={src} alt={alt} />
            {i === 0 && <span className="post-overlay">↗</span>}
          </a>
        ))}
      </section>

      <button className="back-home" onClick={() => navigate('/')}>
        <ArrowLeft size={16} /> Back to all links
      </button>
    </main>
  );
}

function SimplePage({ title, description, href, icon: Icon }) {
  return (
    <main className="phone-page simple-page">
      <AmbientLighting />
      <Header title={title} />
      <div className="simple-content">
        <span className="simple-icon">
          <Icon size={38} />
        </span>
        <h1>{title}</h1>
        <p>{description}</p>
        <a className="follow-button" href={href} target="_blank" rel="noreferrer">
          Open {title} <ExternalLink size={18} />
        </a>
        <Link to="/" className="back-home">
          <ArrowLeft size={16} /> Back to all links
        </Link>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instagram" element={<InstagramPage />} />
        <Route
          path="/github"
          element={
            <SimplePage
              title="GitHub"
              description="Explore my development projects, vibe coding experiments, and source code."
              href={profile.github}
              icon={Github}
            />
          }
        />
        <Route
          path="/linkedin"
          element={
            <SimplePage
              title="LinkedIn"
              description="Connect with me professionally."
              href={profile.linkedin}
              icon={Linkedin}
            />
          }
        />
        <Route
          path="/youtube"
          element={
            <SimplePage
              title="YouTube"
              description="Watch video editing, creative tech, and design content on @VisualEchoStudio."
              href={profile.youtube}
              icon={Youtube}
            />
          }
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}
