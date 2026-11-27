import { useEffect, useState } from 'react';

const image = (file) => `/images/${file}`;

function Header() {
  const links = [
    ['Home', '#home'], ['About Natlife', '#mission'], ['Our brands', '#brands'],
    ['Standards & advisory', '#standards'], ['Global trade', '#trade'],
    ['Women entrepreneurs', '#women'], ['Trace my product', '#trace', 'nav-cta'],
  ];
  return <header className="site-header">
    <a className="brand-home" href="#home" aria-label="Natlife home">
      <strong>Natlife<span>.</span></strong><span className="brand-identity">Global Organic<br />Integrity Network</span>
    </a>
    <nav aria-label="Main navigation">{links.map(([label, href, cls]) => <a className={cls || ''} href={href} key={label}>{label}</a>)}</nav>
  </header>;
}

function Hero() {
  return <section className="reference-hero" id="home" aria-label="Natlife homepage hero">
    <div className="desktop-hero">
      <img className="reference-banner" src={image('image-01.png')} alt="Colourful rural Indian women holding harvest baskets against lush farmland. Organic integrity. Without borders. Our journey towards establishing 10,000 village women-led start-ups." />
      <a className="banner-link trace-link" href="#trace" aria-label="Trace your food" />
      <a className="banner-link trade-link" href="#trade" aria-label="Explore global trade" />
      <a className="women-banner-link" href="#women" aria-label="Discover our mission" />
    </div>
    <div className="mobile-hero">
      <div className="mobile-hero-copy"><span className="tag">India-rooted · Global vision · Not-for-profit initiative (proposed)</span><h1>Organic integrity.<br /><em>Without borders.</em></h1><p>Connecting responsible growers, independent certification bodies and global food markets through transparent evidence and blockchain-enabled traceability.</p><div className="hero-links"><a className="btn" href="#trace">Trace your food →</a><a className="btn secondary" href="#trade">Explore global trade →</a></div></div>
      <img src={image('image-02.webp')} alt="Illustrative group of women with fresh farm produce" />
      <div className="mobile-mission"><span className="tag">Our journey towards establishing</span><div className="mission-number">10,000</div><h2>Village women-led start-ups</h2><p>Imagine a woman in an Indian village turning her family's traditional millet recipes into a business of her own. With training, quality assurance, traceability and market access, her knowledge could create livelihoods for other women in her community.</p><p className="mission-motto">When she grows, her village grows. When her village grows, a nation grows.</p><a className="btn" href="#women">Discover our mission →</a></div>
    </div>
    <div className="hero-caption">Illustrative story: Laxmi is a fictional example, not a verified Natlife beneficiary. AI-generated imagery. 10,000 enterprises is our mission target, not an achieved milestone. Proposed not-for-profit initiative.</div>
  </section>;
}

const brands = [
  ['OrganiX™', 'Standard certified organic products for everyday living.', 'image-03.jpg'],
  ['TracZ™', 'Traceable organic products with documented production history and quality standards.', 'image-04.jpg'],
  ['TracZ-U™', 'Enhanced traceability and quality assurance.', 'image-05.jpg'],
  ['TracZ-URS™', 'Enhanced organic assurance, responsible sourcing and sustainability.', 'image-06.jpg'],
  ['Jungle™', 'Responsibly sourced forest-origin foods, supporting forest-dependent communities and biodiversity conservation.', 'image-07.jpg'],
  ['Wild™', 'Naturally occurring, responsibly wild-harvested foods with documented origin and sustainable harvesting practices.', 'image-08.jpg'],
];
function BrandEcosystem() {
  return <section className="brand-ecosystem" id="brands"><div className="brand-intro"><span className="tag">Six distinct collections &amp; assurance pathways</span><h2>The Natlife brand ecosystem</h2></div>
    <div className="brand-grid">{brands.map(([name, desc, src]) => <article className="brand-tile" key={name}><a href="#standards"><img src={image(src)} alt={`Illustrative imagery for Natlife ${name.replace('™', '')}`} loading="lazy" /><div className="brand-text"><span className="brand-prefix">Natlife</span><h3>{name}</h3><p>{desc}</p></div></a></article>)}</div>
    <small className="brand-note">Proposed brand architecture. Organic claims require applicable independent certification. Jungle and Wild are sourcing collections, not certification grades. U and URS criteria remain subject to formal approval.</small>
  </section>;
}

const stages = [['01', 'Farm', 'Origin, practices & harvest'], ['02', 'Processing', 'Quality, safety & lot identity'], ['03', 'Certification', 'Independent third-party evidence'], ['04', 'Trade & export', 'Custody & compliance evidence'], ['05', 'Consumer', 'Public product verification']];
function Passport() {
  return <section className="passport-feature" id="passport"><div className="passport-layout"><div><span className="tag">Our strategic objective · Global Organic Trace Blockchain</span><h2>More than a label.<br />A digital passport for organic food.</h2><p className="passport-lead">Natlife's strategic objective is to develop into a trusted digital organic product passport infrastructure, serving farmers, regulators, certification bodies, international trade partners and consumers—not merely a premium organic product label.</p><p>One connected product identity, linking origin, cultivation, independent certification, processing, custody and trade evidence. A record designed to travel with the product across borders.</p><a className="text-link" href="#trace">Explore the product passport →</a></div>
      <aside className="passport-ticket"><span className="pill">Illustrative digital product passport</span><h3>Global Organic Trace Blockchain</h3><div className="passport-ref">GOTB-DEMO-001</div><ul><li>Product identity &amp; farm origin</li><li>Cultivation &amp; harvest history</li><li>Independent certificate evidence</li><li>Processing &amp; chain of custody</li><li>Trade &amp; public verification</li></ul><small>Demonstration only. No live blockchain or certificate registry is connected.</small></aside></div>
    <div className="audiences">{['Farmers', 'Regulators', 'Certification bodies', 'International trade partners', 'Consumers'].map((x) => <span key={x}>{x}</span>)}</div>
    <div className="gotb-flow"><span className="tag">Proposed traceability architecture</span><h3>Natlife Global Organic Trace Blockchain (GOTB)</h3><div className="flow-producers">{['Farmers & FPOs', 'Women-led enterprises', 'Processors & exporters'].map(x => <span key={x}>{x}</span>)}</div><div className="flow-down">↓</div><ol className="flow-stages">{stages.map(([n, title, desc]) => <li key={n}><b>{n}</b><strong>{title}</strong><span>{desc}</span></li>)}</ol><div className="flow-down">↓</div><div className="ledger"><strong>GOTB evidence layer</strong><span>Digitally signed events · Evidence hashes · Timestamps · Corrections and revocations</span></div><div className="flow-down">↓</div><a className="flow-passport" href="#trace"><strong>Digital Organic Product Passport</strong><span>QR code · Unique GOTB reference · Public traceability lookup →</span></a><p className="flow-disclaimer">Conceptual flowchart. Independent certification and lawful sourcing remain essential; blockchain protects the integrity of recorded evidence, not the accuracy of unverified claims.</p></div>
  </section>;
}

function TraceLookup() {
  const [reference, setReference] = useState('');
  const [result, setResult] = useState('');
  const verify = (value = reference) => {
    const ref = value.trim().toUpperCase(); setReference(ref);
    setResult(ref === 'GOTB-DEMO-001' ? 'demo' : `No live lookup available for ${ref || 'this reference'}. This prototype cannot establish whether the reference exists or is authentic.`);
  };
  useEffect(() => { const ref = new URLSearchParams(window.location.search).get('ref'); if (ref) verify(ref); }, []);
  const readQR = async (event) => {
    try {
      if (!('BarcodeDetector' in window)) throw new Error();
      const bitmap = await createImageBitmap(event.target.files[0]);
      const codes = await new BarcodeDetector({ formats: ['qr_code'] }).detect(bitmap);
      if (!codes.length) throw new Error();
      const raw = codes[0].rawValue; let value = raw;
      try { value = new URL(raw).searchParams.get('ref') || raw; } catch {}
      verify(value);
    } catch { setResult('QR decoding unavailable or unsuccessful. Enter the printed trace reference manually.'); }
  };
  return <section className="trace" id="trace"><span className="tag">Global Organic Trace Blockchain · GOTB (proposed)</span><h2>Every product has a story.</h2><p>Enter a trace reference or open the verification link encoded in your product QR code. Explore origin, production, handling and certification evidence.</p>
    <form className="lookup-form" onSubmit={(e) => { e.preventDefault(); verify(); }}><label htmlFor="reference">Global Organic Trace reference</label><div className="lookup-controls"><input id="reference" value={reference} onChange={(e) => setReference(e.target.value)} placeholder="e.g. GOTB-DEMO-001" /><button type="submit">Check reference</button></div></form>
    <div className="lookup-extra"><button type="button" className="plain-button" onClick={() => { setReference('GOTB-DEMO-001'); verify('GOTB-DEMO-001'); }}>Explore sample record</button><label className="upload-label">Upload QR image: <input type="file" accept="image/*" onChange={readQR} /></label></div>
    {result && <div className="result" aria-live="polite">{result === 'demo' ? <div className="card"><span className="pill">Illustrative record — not verified</span><h3>Sample traditional rice flakes</h3><p>Origin: Tamil Nadu, India (fictional example) · Lot: DEMO-001 · Proposed tier: TracZ</p><h3>Production history</h3><ol>{['Farm registration and seed record — example', 'Cultivation and input log — example', 'Harvest and lot allocation — example', 'Processing and packing — example', 'Independent certificate and lab report — not supplied', 'Shipment and custody transfer — example'].map(x => <li key={x}>{x}</li>)}</ol><p>Blockchain status: not anchored. Certification status: not verified.</p></div> : <p>{result}</p>}</div>}
    <small className="muted">Prototype only. No live certification registry or blockchain is connected. QR image decoding depends on browser support.</small>
  </section>;
}

function FoodShowcase() {
  return <section className="food-showcase"><span className="tag">India’s harvest · Global possibilities</span><h2>Nature’s colours. India’s abundance.</h2><p>Traditional grains, vibrant vegetables, nourishing pulses, aromatic spices and responsibly sourced forest foods — a diverse harvest with the potential to reach global markets through verified organic supply chains.</p><div className="food-art"><img className="harvest-photo" src={image('image-09.webp')} alt="Fresh vegetables, grains and farm produce in woven baskets." loading="lazy" /><div className="harvest-categories">{['Millets & grains', 'Fresh vegetables', 'Pulses & beans', 'Spices & herbs', 'Forest & wild foods'].map(x => <span key={x}>{x}</span>)}</div></div><small className="muted">Illustrative product categories; organic status requires applicable independent certification.</small></section>;
}

function Mission() {
  return <section className="mission" id="mission"><span className="tag">Our mission</span><h2>Two functions. One public purpose.</h2><div className="grid"><article className="card"><span className="pill">01 · Organic integrity</span><h3>Traceability &amp; certification advisory</h3><p>Support growers and processors with readiness assessments, documentation, inspection coordination and independent organic certification pathways. Develop private traceability assurance standards and digitally signed evidence records.</p></article><article className="card"><span className="pill">02 · Market access</span><h3>Responsible global trade</h3><p>Connect producing regions with markets that have limited domestic supply or seasonal shortages. Facilitate sourcing, aggregation, compliant export documentation and buyer partnerships.</p></article></div></section>;
}

function Women() {
  const steps = [['01 · Build capability', 'Enterprise training, food safety, organic readiness and business skills.'], ['02 · Create local value', 'Support women-led processing, packaging, branding and producer collectives.'], ['03 · Establish trust', 'Connect eligible products to independent certification and digital product passports.'], ['04 · Reach global markets', 'Facilitate buyer connections, compliant export pathways and fair commercial opportunities.']];
  return <section className="women-steps" id="women"><span className="tag">Rural enterprise · Women-led growth</span><h2>Her village. Her enterprise.<br />Her global future.</h2><p className="women-lead">A seed can become a harvest. A harvest can become a livelihood. A livelihood can become a business that a woman owns and passes on to the next generation.</p><p>Natlife’s vision is to help rural women move from being suppliers of raw produce to becoming entrepreneurs, employers and custodians of local food traditions — with access to training, quality assurance, traceability and markets.</p><div className="grid">{steps.map(([title, text]) => <article className="card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div><small className="muted">Illustrative vision, not an individual beneficiary testimonial. Programme funding, eligibility and implementation partners are to be confirmed.</small></section>;
}

const standards = [
  ['Natlife OrganiX', 'Standard organic: applicable independent organic certification and basic batch identification.'],
  ['Natlife TracZ', 'Traceable organic: documented farm-to-batch chain of custody and defined quality specifications.'],
  ['Natlife TracZ-U', 'Proposed enhanced assurance: more granular lot evidence, risk-based independent laboratory testing and documented handling controls.'],
  ['Natlife TracZ-URS', 'Proposed advanced assurance: enhanced traceability plus independently assessed sustainability and responsible sourcing indicators.'],
  ['Natlife Jungle', 'Proposed collection of responsibly sourced forest-origin foods, including forest honey, fruits and other eligible non-timber forest produce, with documented origin and lawful harvesting.'],
  ['Natlife Wild', 'Proposed collection of eligible naturally occurring, wild-harvested foods, with species identification, collection-area traceability and sustainable harvesting controls.'],
];
function Standards() {
  return <section id="standards" className="standards"><span className="tag">Proposed brand architecture</span><h2>A clear standard for every journey.</h2><div className="grid">{standards.map(([title, text]) => <article className="card nature-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div><small className="muted">Jungle and Wild are proposed sourcing collections, not certification grades. Forest or wild origin does not automatically qualify a product as organic. Applicable certification, collection permissions and community rights must be respected. U and URS requirements are provisional and require formal approval. Private marks do not replace statutory organic certification or imply superior nutrition or zero residues.</small></section>;
}

function Nature() {
  return <section className="nature-feature"><span className="tag">Beyond cultivated fields · Responsible sourcing</span><h2>From the forest. From the wild.</h2><p>Protecting nature’s diversity and supporting the communities that safeguard it through lawful, traceable and responsible sourcing.</p><div className="nature-grid"><article className="forest jungle"><img className="forest-thumb" src={image('image-10.jpg')} alt="Illustrative forest-origin foods" loading="lazy" /><span className="tag">Forest-origin collection</span><h3>Natlife Jungle</h3><p>Discover eligible forest-origin foods such as forest honey, fruits and non-timber forest produce. The proposed collection prioritises documented origin, lawful collection, community rights and biodiversity protection.</p><span className="nature-label">Forest origin · Community livelihoods</span></article><article className="forest wild"><img className="forest-thumb" src={image('image-11.jpg')} alt="Illustrative wild berries" loading="lazy" /><span className="tag">Wild-harvest collection</span><h3>Natlife Wild</h3><p>Explore eligible naturally occurring foods harvested from documented wild collection areas. Species identification, seasonal collection practices and sustainable harvesting controls are at the heart of the proposed collection.</p><span className="nature-label">Wild origin · Sustainable harvesting</span></article></div><small className="muted">Jungle and Wild are proposed sourcing collections, not organic certification grades. Forest or wild origin alone does not establish organic status. Independent certification, food safety, lawful collection permissions and applicable community rights must be verified. Visuals are illustrative AI-generated images.</small></section>;
}

function Trade() {
  const cards = [['Growers & FPOs', 'Farm registration, organic readiness, crop planning, lot identity and market linkage.'], ['Exporters & processors', 'Mass balance, segregation, testing, shipment documentation and destination compliance.'], ['Importers & retailers', 'Supplier qualification, traceable sourcing, product specifications and evidence review.']];
  return <section id="trade"><span className="tag">International market access</span><h2>From surplus to demand.</h2><div className="grid">{cards.map(([title, text]) => <article className="card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div><p>Priority categories: rice, traditional grains and millets, pulses, spices, tea, coffee and processed organic foods. Proposed corridors: India to UK, EU, USA and MENA, subject to market-specific approval.</p><details><summary>India and international certification pathways</summary><p>India: NPOP and APEDA TraceNet; accredited bodies issue required export certificates. USA: USDA-accredited certification and electronic NOP Import Certificate. EU: applicable organic rules and TRACES certificate of inspection. UK and MENA: destination-specific import and labelling rules.</p></details></section>;
}

function Governance() {
  return <section className="dark" id="governance"><h2>Trust requires independence.</h2><p>Natlife proposes an independent standards committee, conflict-of-interest controls, complaints and appeals, external audits and transparent reporting. Commercial trade operations should be separated from assurance decisions. Blockchain preserves evidence integrity, not the truth of unverified farm declarations.</p><p>Proposed technology: GS1-compatible identifiers, EPCIS supply-chain events, signed records, off-chain evidence storage and on-chain hashes. Public records exclude personal and commercially sensitive information. Revocations and corrections remain visible.</p></section>;
}

function Partners() {
  const items = [['Producer enrolment', 'Prepare farm identity, crop profile and existing certificates.'], ['Certification partners', 'Provide accreditation scope and inspection capabilities.'], ['Trade partners', 'Provide target market, volumes, product requirements and import credentials.']];
  return <section><h2>Build the network with us.</h2><div className="grid">{items.map(([title, text]) => <article className="card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div><p>Partner registration is planned; no contact details or submission endpoint have been supplied.</p></section>;
}

function Footer() {
  return <footer><strong>Natlife</strong><p>Organic integrity · Traceability · Responsible trade</p><small>Concept website — registration, accreditation, brand standards and operational status not independently verified.</small><p>Regulatory references: <a href="https://apeda.gov.in/tracenet">APEDA TraceNet</a> · <a href="https://npop.apeda.gov.in/">NPOP</a> · <a href="https://www.ams.usda.gov/services/organic-certification/international-trade/India">USDA India trade requirements</a></p></footer>;
}

export default function App() {
  return <><Header /><main><Hero /><BrandEcosystem /><Passport /><TraceLookup /><FoodShowcase /><Mission /><Women /><Standards /><Nature /><Trade /><Governance /><Partners /></main><Footer /></>;
}
