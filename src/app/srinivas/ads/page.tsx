import type { Metadata } from "next";
import styles from "./srinivas-ads.module.css";

export const metadata: Metadata = {
  title: "Srinivas Gogula | Freelance Performance Creative Designer",
  description:
    "Freelance Meta ad creative redesigns, promotional graphics, websites, custom software, AI automations and video editing for businesses.",
};

const work = [
  {
    before: "https://cdn.jobing.site/campaigns/2026/07/590856b5-7179-4d39-a55a-20f684b2f19d.jpg",
    after: "https://cdn.jobing.site/campaigns/2026/07/722042bc-fd8e-4e09-b64d-1aecef02ee77.png",
    title: "Fitness and bootcamp offer",
    copy: "Made the introductory offer easier to spot, reduced competing text and improved mobile readability.",
  },
  {
    before: "https://cdn.jobing.site/campaigns/2026/07/cad2c829-22c9-4acc-bcc7-56db9fa54a7c.jpg",
    after: "https://cdn.jobing.site/campaigns/2026/07/b1d6c137-beff-4256-a331-237ff136d5d8.png",
    title: "Education and training campaign",
    copy: "Created a clearer message order, stronger benefit emphasis and a more professional first impression.",
  },
  {
    before: "https://cdn.jobing.site/campaigns/2026/07/f391b6bc-7af4-40c8-8b61-a36b7f8466b1.jpg",
    after: "https://cdn.jobing.site/campaigns/2026/07/15689d30-76a9-479a-836d-b9ff1d2093ba.png",
    title: "Photography workshop",
    copy: "Simplified a detailed event offer into a cleaner, easier-to-scan campaign creative.",
  },
  {
    before: "https://cdn.jobing.site/campaigns/2026/07/1c345064-191b-45f7-b3fd-e87c51414b16.jpg",
    after: "https://cdn.jobing.site/campaigns/2026/07/d8a1c8a1-5db3-4939-9df3-9918ea219508.png",
    title: "Local service promotion",
    copy: "Improved contrast, offer visibility and the visual path from headline to call to action.",
  },
];

const services = [
  ["Creative design", "Ads, posters and social creatives", "Performance-focused visuals that make offers easier to notice and understand."],
  ["Chalkframe", "Website design and development", "Professional websites and landing pages designed around your business goals."],
  ["Chalkframe", "Custom software and AI automations", "Purpose-built tools and workflows that reduce manual work and help your team move faster."],
  ["Video portfolio", "Video editing", "High-quality editing for social media, promotional content and performance campaigns."],
];

export default function SrinivasAdsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.wrap}>
        <nav className={styles.nav} aria-label="Primary navigation">
          <a className={styles.brand} href="#top">Srinivas Gogula</a>
          <div className={styles.navLinks}>
            <a href="#about">About me</a>
            <a href="#work">My work</a>
            <a href="#services">Services</a>
            <a className={styles.navButton} href="#contact">Work with me</a>
          </div>
        </nav>

        <section className={styles.hero} id="top">
          <div>
            <p className={styles.eyebrow}>Freelance performance creative designer</p>
            <h1>Better ad creatives for local businesses.</h1>
            <p className={styles.heroCopy}>
              I&apos;m Srinivas, a freelancer who redesigns Meta ads, promotional graphics
              and posters so your offer is easier to notice, understand and act on—especially on mobile.
            </p>
            <div className={styles.actions}>
              <a className={styles.primaryButton} href="#work">See before &amp; after</a>
              <a className={styles.secondaryButton} href="#about">Meet your designer</a>
            </div>
          </div>
          <aside className={styles.priceCard}>
            <span>Start with one creative</span>
            <strong>$19</strong>
            <p>Or work with me monthly and receive up to 30 creatives for $250. Direct communication, fast turnaround and no long contract.</p>
          </aside>
        </section>

        <div className={styles.trust}>
          <span>Work directly with me</span>
          <span>Designed for Meta Ads</span>
          <span>24 to 48-hour turnaround</span>
        </div>

        <section className={styles.section} id="about">
          <p className={styles.eyebrow}>About me</p>
          <h2>A freelancer who thinks beyond making things look good.</h2>
          <div className={styles.aboutGrid}>
            <article className={styles.profileCard}>
              <img src="https://cdn.jobing.site/campaigns/2026/07/2e6f84bd-7eed-4f51-9ff2-e7741d5e69ab.jpg" alt="Srinivas Gogula" />
              <h3>Hi, I&apos;m Srinivas.</h3>
              <p>Freelance creative strategist and ad designer for businesses that want clearer, stronger marketing creatives.</p>
              <strong>One person. Direct communication. No agency layers.</strong>
            </article>
            <article className={styles.aboutCopy}>
              <p>I started offering creative redesigns after noticing that many businesses were promoting genuinely strong offers with ads that were difficult to read, cluttered or easy to scroll past.</p>
              <p>My approach is simple: understand what a potential customer needs to notice first, remove anything that competes with that message, and design the creative around the action you want them to take.</p>
              <div className={styles.points}>
                <span><strong>Mobile first</strong>Your creative stays clear on a small screen.</span>
                <span><strong>Offer focused</strong>The main benefit is impossible to miss.</span>
                <span><strong>Business minded</strong>Every choice supports the campaign goal.</span>
                <span><strong>Personally handled</strong>I review, design and deliver every project.</span>
              </div>
            </article>
          </div>
        </section>

        <section className={styles.section} id="work">
          <p className={styles.eyebrow}>My work</p>
          <h2>Before and after redesigns</h2>
          <p className={styles.lead}>A selection of ads redesigned to show how stronger clarity, hierarchy and presentation improve an offer.</p>
          <div className={styles.gallery}>
            {work.map((item) => (
              <article className={styles.case} key={item.title}>
                <div className={styles.caseMedia}>
                  <figure><img src={item.before} alt={`Original ${item.title} ad`} /><figcaption>Before</figcaption></figure>
                  <figure><img src={item.after} alt={`Redesigned ${item.title} ad`} /><figcaption>After</figcaption></figure>
                </div>
                <div className={styles.caseCopy}><h3>{item.title}</h3><p>{item.copy}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} id="services">
          <p className={styles.eyebrow}>More ways to grow</p>
          <h2>Creative and digital support for your business.</h2>
          <div className={styles.services}>
            {services.map(([tag, title, copy]) => (
              <article className={styles.service} key={title}>
                <span>{tag}</span><h3>{title}</h3><p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} id="pricing">
          <p className={styles.eyebrow}>Simple pricing</p>
          <h2>Hire me for one creative or ongoing support.</h2>
          <div className={styles.pricing}>
            <article className={styles.plan}>
              <h3>One-off creative</h3><strong>$19</strong>
              <p>One custom, mobile-first creative with one revision and fast delivery.</p>
              <a href="#contact">Order one creative</a>
            </article>
            <article className={`${styles.plan} ${styles.featured}`}>
              <h3>Monthly freelance support</h3><strong>$250</strong>
              <p>Up to 30 ad creatives, posters, social formats and A/B variations each month.</p>
              <a href="#contact">Work with me monthly</a>
            </article>
          </div>
        </section>

        <section className={styles.contact} id="contact">
          <p className={styles.contactEyebrow}>Work with me</p>
          <h2>Send me your current creative.</h2>
          <p>Tell me what you are promoting and I will personally review the project.</p>
          <form
            className={styles.form}
            method="POST"
            encType="multipart/form-data"
            action="https://forms.jobing.site/forms/f/frm_5f00ed58a123ebd89d0511202be9dfda97e1ec58f8325028"
          >
            <label><span>Your name</span><input name="name" autoComplete="name" required /></label>
            <label><span>Business name</span><input name="business" autoComplete="organization" required /></label>
            <label><span>Email address</span><input name="email" type="email" autoComplete="email" required /></label>
            <label><span>Service</span><select name="service" defaultValue="One creative, $19">
              <option>One creative, $19</option><option>Monthly support, $250</option>
              <option>Website development</option><option>Custom software or AI automation</option>
              <option>Video editing</option><option>Not sure yet</option>
            </select></label>
            <label><span>Website or social page</span><input name="website" type="url" placeholder="https://" /></label>
            <label><span>What are you promoting?</span><input name="offer" /></label>
            <label className={styles.full}><span>Project details</span><textarea name="message" placeholder="Share your campaign details or anything I should know" /></label>
            <label className={styles.full}><span>Current creative (optional)</span><input name="creative" type="file" accept="image/*,.pdf" /></label>
            <button type="submit">Start a conversation</button>
          </form>
        </section>

        <footer className={styles.footer}>
          <div><strong>Srinivas Gogula</strong><br />Freelance performance creative designer</div>
          <div>Meta ads · Websites · Software · AI automations · Video editing</div>
        </footer>
      </div>
    </main>
  );
}
